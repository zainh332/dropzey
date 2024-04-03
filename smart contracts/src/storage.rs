use soroban_sdk::{contracttype, Vec, Address, String};
 

#[derive(Clone)]
#[contracttype]
pub struct Airdrop {
    pub owner: Address,
    pub id: u64,
    pub token: Address,
    pub start: u64,
    pub end: u64,
    pub amount: i128,
    pub reward_amount: i128,
    pub claimers: Vec<Address>,
    pub created: u64,
}
#[derive(Clone)]
#[contracttype]
pub struct Airdrops {
    pub ids: Vec<u64>
}