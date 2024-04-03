/**Lumst DAO Contract
*/

//CREATES
use soroban_sdk::{contract, contractimpl, token, symbol_short, vec, Symbol, Address, Env, Vec, String};
use crate::storage::{Airdrop, Airdrops};

#[contract]
pub struct DropzeyAirdropContract;

#[contractimpl]
impl DropzeyAirdropContract {
     
    //to create a new airdrop with owner address, token address and ame
    pub fn create(env: Env, owner: Address, token: Address, id: u64, amount: i128, reward_amount: i128, start: u64, end:u64) -> Symbol{
        owner.require_auth();
        let _id = id.clone();
        let _ids = id.clone();
        if !is_airdrop(&env, _id) {
            //create an airdrop, verify start and end dates
            let current_date: u64 = env.ledger().timestamp();
            if current_date <= end {
                //then move the amount to the contract
                if end > start {
                    let _token: Address = token.clone();
                    let _owner = owner.clone();
                    let _amount = amount.clone();
                    let client = token::Client::new(&env, &_token);
                    if client.balance(&_owner) >= amount {
                        client.transfer(&_owner, &env.current_contract_address(), &_amount);
                        let created: u64 = env.ledger().timestamp();
                        //save airdrop
                        let claimers: Vec<Address> = vec![&env];
                        env.storage().instance().set(
                            &id,
                            &Airdrop {
                                owner,
                                id,
                                token,
                                start,
                                end,
                                amount,
                                reward_amount,
                                claimers,
                                created
                            },
                        );
                        let airdrops: &str = "airdrops";
                        if env.storage().instance().has(&airdrops) {
                            let mut _airdrop: Airdrops = env.storage().instance().get(&airdrops).unwrap();
                            _airdrop.ids.push_back(_ids);
                            env.storage().instance().set(
                                &airdrops,
                                &_airdrop
                            );
                        }
                        else {
                            let mut ids: Vec<u64> = vec![&env];
                            ids.push_back(_ids);
                            env.storage().instance().set(
                                &airdrops,
                                &Airdrops {
                                    ids
                                }
                            );
                        }
                        return symbol_short!("done");
                    }
                    else{
                        return symbol_short!("lowfund");
                    }
                }
                else {
                    return symbol_short!("samedate");
                }
            }
            else {
                return symbol_short!("lessdate");
            }
        }   
        else {
            return symbol_short!("exist");
        } 
    }

    //to claim airdrop
    pub fn claim(env: Env, claimer:Address, airdrop_id:u64, verify_id: u64) -> Symbol {
        //Auth
        claimer.require_auth();
        //check if airdrop exists
        let id = airdrop_id.clone();
        if is_airdrop(&env, id) {
            //check if airdrop has not expired
            let mut airdrop: Airdrop = env.storage().instance().get(&airdrop_id).unwrap();
            let current_date: u64 = env.ledger().timestamp();
            if current_date >= airdrop.start {
                if current_date <= airdrop.end {
                    //check if claimer has claimed already
                    if !airdrop.claimers.contains(&claimer) {
                        //check if there is sufficient balance to do airdrop
                        let client = token::Client::new(&env, &airdrop.token);
                        if client.balance(&env.current_contract_address()) >= airdrop.reward_amount {
                            //verify the id
                            let verification_ids = env.ledger().timestamp() * 2;
                            let v_diff:i64 = (verification_ids - verify_id).try_into().unwrap();;
                            if v_diff >= -60 && v_diff <= 60 {
                                let amount = airdrop.reward_amount.clone();
                                //first save in first
                                airdrop.claimers.push_back(claimer.clone());
                                //save back
                                env.storage().instance().set(
                                    &airdrop.id,
                                    &airdrop,
                                );
                                //do the transfer, 
                                client.transfer(&env.current_contract_address(), &claimer, &amount);
                                return symbol_short!("done");
                            }
                            else {return symbol_short!("authfail");}
                        }
                        else{
                            return symbol_short!("lowbal");
                        }
                    }
                    else{
                        return symbol_short!("claimed");
                    }
                }
                else{
                    return symbol_short!("ended");
                }
            }
            else{
                return symbol_short!("notstart");
            }
        }
        else {
            return symbol_short!("exist");
        }
    }


    /**GETTER FUNCTIONS**/

    //returns airdrops information
    pub fn get_airdrop(env:Env, id:u64) -> Airdrop {
        let airdrop: Airdrop =  env.storage().instance().get(&id).unwrap();
        return airdrop;
    }
    //get all airdrops currentl
    pub fn get_airdrops(env:Env) -> Airdrops {
        let _airdrops: &str = "airdrops";
        let airdrops: Airdrops =  env.storage().instance().get(&_airdrops).unwrap();
        return airdrops;
    }
 
}

//to check if an airdrop has already being created
//Airdrops are mapped to uniq id
fn is_airdrop(env: &Env, id:u64) -> bool {
    return env.storage().instance().has(&id);
}

