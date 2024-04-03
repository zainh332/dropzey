/* Stellar Functions */
import { API_URL, SorobanClient, networkUsed, networkWalletUsed, wrappingAddress, stellarServer, fee, timeout, contract } from "./constant"
import {
    signTransaction,
} from "@stellar/freighter-api";
import * as StellarSdk from '@stellar/stellar-sdk'; 
import { addTx } from "./api";


/** To execute a transaction
    * @params {transactionObject}
    * @params {callBack}
**/
const execTranst = async (transaction = "") => {
    if(transaction !== "") {
        //prepare xdr
        const server = new SorobanClient.Server(stellarServer); 
        let xdr = await transaction.toXDR();
        try {
            xdr = await signTransaction(xdr, networkWalletUsed) //sign with freighter
            //recreate signed transaction
            transaction = new StellarSdk.Transaction(xdr, networkUsed)
            let sendResponse = await server.sendTransaction(transaction);
            console.log(`Sent transaction: ${JSON.stringify(sendResponse)}`);
            if (sendResponse.status === "PENDING") {
              let getResponse = await server.getTransaction(sendResponse.hash);
              // Poll `getTransaction` until the status is not "NOT_FOUND"
              while (getResponse.status === "NOT_FOUND") {
                // See if the transaction is complete
                getResponse = await server.getTransaction(sendResponse.hash);
                // Wait one second
                await new Promise((resolve) => setTimeout(resolve, 1000));
              }
              if (getResponse.status === "SUCCESS") {
                // Make sure the transaction's resultMetaXDR is not empty
                if (!getResponse.resultMetaXdr) {
                   return {status:true, msg:""}
                }
                // Find the return value from the contract and return it
                
                //let transactionMeta = getResponse.resultMetaXdr;
                let returnValue = getResponse.returnValue
                return {status:true, value: returnValue, hash: sendResponse.hash}
              } else { 
                return {status:false}
              }
            } else {
               return {status:false}
            }
      } catch (err) {
        // Catch and report any errors we've thrown
        console.log("Sending transaction failed", err);
        return {status:false}
    }
}
}
/** This function sends the
     * wrapping fee to the wrapping address 
     * @params {code} String
     * @params {issuer} String
     * returns {statusObject} | {statusBoolean}  
**/
export const wrapAsset = async (params = {}, walletAddress = "") => {
    try{ 
        if(walletAddress != "") {
            const server = new SorobanClient.Server(stellarServer); 
            const account = await server.getAccount(walletAddress);
            //preparing arguements
            let transaction = new StellarSdk.TransactionBuilder(account, { fee, networkPassphrase: networkUsed })
                .addOperation(
                    StellarSdk.Operation.payment({
                      destination: wrappingAddress,
                      asset: StellarSdk.Asset.native(),
                      amount: "200",
                    }),
                 )
                 .setTimeout(timeout)
                 .addMemo(StellarSdk.Memo.text('Wrapping Airdrop Asset'))
                 .build();
            //sign and exec transactions
            const res = await execTranst(transaction)
            if(res.status === false) {
                //something went wrong
                return false
            }
            else {
                return fetch(`${API_URL}api.php?type=wrapasset&code=${params.code}&issuer=${params.issuer}&rand=${Math.random()}`, {
                    method: 'GET',  
                    mode: 'cors',  
                    cache: 'no-cache', 
                    headers: {
                      'Content-Type': 'application/json'
                    },
                })
                .then((response) => response.json()
                    .then(async (data) => {   
                        if(data.status) {
                            const res = await verifyAsset({
                                code:params.code, issuer:params.issuer,
                            }, walletAddress)
                            return {status: true, code:res}
                        }
                        else {
                            return {status: false}
                        }
                }))
                .catch(err => { console.log(err)
                    return {status: false}
                })
                
            }
        }
        else {return false}
    }
    catch(e) {console.log(e); return false}
}
/** To verify if an asset has been wrapped
    * @params {params}
    * @params {callBack}
**/
export const verifyAsset = async (params = {code:"", issuer:""}, walletAddress) => {
    if(walletAddress != "") {
        try{  
            const server = new SorobanClient.Server(stellarServer); 
            const account = await server.getAccount(walletAddress);
            let asset; let contract;
            if(params.code.length == 56) {
                contract = new StellarSdk.Contract(params.code);
            }
            else {
                asset = new StellarSdk.Asset(params.code, params.issuer)
                contract = new StellarSdk.Contract(asset.contractId(networkUsed));
            }
            let transaction = new StellarSdk.TransactionBuilder(account, { fee, networkPassphrase:networkUsed})
                .addOperation(
                    contract.call("symbol")
                )
                .setTimeout(timeout) //using a time out of a hour
                .build();
            //Simulate the transaction to discover the storage footprint, and update the
            transaction = await server.prepareTransaction(transaction);
            let transactionMeta = (await server.simulateTransaction(transaction))
            if(params.code.length == 56) {
                return params.code;  
            }
            else {
                return asset.contractId(networkUsed); 
            }
        }
        catch(e) {
            console.log(e)
            return false
        }
    }
    else {return false}
}
/** This function creates the Airdrops
     * @params {paramsObject {name, owner, token, id, amount, reward_amount, start, end}
     * returns {daoId} | {statusBoolean}
**/
export const createAirdrop = async (params = {}, walletAddress) => {
    try{
        if(walletAddress != "") {
            const server = new SorobanClient.Server(stellarServer); 
            const account = await server.getAccount(walletAddress);
            //preparing arguements
            let _walletAdr = new StellarSdk.Address(walletAddress);_walletAdr = _walletAdr.toScVal()
            let _tokenAdr = new StellarSdk.Address(params.token); _tokenAdr = _tokenAdr.toScVal()
            const id = StellarSdk.nativeToScVal(params.id * 1)
            const amount = (new StellarSdk.XdrLargeInt('i128', params.amount * 1)).toI128() 
            const reward_amount = (new StellarSdk.XdrLargeInt('i128', params.reward_amount * 1)).toI128() 
            const start = StellarSdk.nativeToScVal((params.start * 1)/1E3)
            const end = StellarSdk.nativeToScVal((params.end * 1)/1E3)
            let transaction = new StellarSdk.TransactionBuilder(account, { fee, networkPassphrase: networkUsed })
                .addOperation(
                    // An operation to call create on the contract
                    contract.call("create", _walletAdr, _tokenAdr, id, amount, reward_amount, start, end)
                 )
                 .setTimeout(timeout)
                 .addMemo(StellarSdk.Memo.text('Creating Airdrop'))
                 .build();
            // Simulate the transaction to discover the storage footprint, and update the
            transaction = await server.prepareTransaction(transaction);
            //sign and exec transactions
            const res = await execTranst(transaction)
            if(res.status === false) {
                //something went wrong
                return false
            }
            else {
                const resp = {status: (StellarSdk.scValToNative(res.value))}
                if(resp.status == 'done') {
                    //save the tx first 
                    await addTx({ 
                    address:walletAddress,
                    action:"new airdrop " + params.name,
                    name:'create',
                    hash:res.hash,
                    data:'dropzey.com/aidrop?id=' + params.id
                })
                }
               return resp
            }
        }
        else {return false}
    }
    catch(e) {console.log(e); return false}
}
/** This function retrieves
     * the list of AIRDROPS
     * returns @map | []
**/ 
export const getAirdrops =  async (walletAddress) => {
    if(walletAddress != "") {
        try{
            const server = new SorobanClient.Server(stellarServer); 
            const account = await server.getAccount(walletAddress);
            let transaction = new StellarSdk.TransactionBuilder(account, { fee, networkPassphrase:networkUsed})
                .addOperation(
                    contract.call("get_airdrops")
                )
                .setTimeout(timeout) //using a time out of a hour
                .build();
            //Simulate the transaction to discover the storage footprint, and update the
            transaction = await server.prepareTransaction(transaction);
            let transactionMeta = (await server.simulateTransaction(transaction))
            return await StellarSdk.scValToNative(transactionMeta.result.retval);
        }
        catch(e) {
            console.log(e)
            return []}
    }
    else {return []}
}
/** This function confirms
 * if a wallet address has created
 * trustline
 * @params {address, tokenId}
*/
export const hasTrustline = async (params = {}, walletAddress) => {
    if(walletAddress != "") {
        try{
            const server = new SorobanClient.Server(stellarServer); 
            const account = await server.getAccount(walletAddress);
            const contract = new StellarSdk.Contract(params.tokenId);
            params.address = (new StellarSdk.Address(params.address)).toScVal()
            let transaction = new StellarSdk.TransactionBuilder(account, { fee, networkPassphrase:networkUsed})
                .addOperation(
                    contract.call('balance', params.address)
                )
                .setTimeout(timeout) //using a time out of a hour
                .build();
            //Simulate the transaction to discover the storage footprint, and update the
            transaction = await server.prepareTransaction(transaction);
            let transactionMeta = (await server.simulateTransaction(transaction))
            return true; 
        }
        catch(e) {
            return false
        }
    }
    else {return false}
}
/** This function creates trustline
     * @params {code} String
     * @params {issuer} String
     * @params {address} String
     * @params {id} String
     * returns {statusObject} | {statusBoolean}
**/
export const createTrustline = async (params={}, walletAddress) => {
    try{
        if(walletAddress != "") {
            const server = new SorobanClient.Server(stellarServer); 
            const account = await server.getAccount(walletAddress);
            //preparing arguements
            const _walletAdr = (new StellarSdk.Address(walletAddress)).toScVal()
            const asset = new StellarSdk.Asset(params.code, params.issuer)
            let transaction = new StellarSdk.TransactionBuilder(account, { fee, networkPassphrase: networkUsed })
                .addOperation(
                    // An operation to establist trustline
                    StellarSdk.Operation.changeTrust({
                      asset: asset,
                      source: params.address,
                    }),
                 )
                 .setTimeout(timeout)
                 .addMemo(StellarSdk.Memo.text('creating trustline'))
                 .build();
            //sign and exec transactions
            const res = await execTranst(transaction)
            if(res.status === false) {
                //something went wrong
                return false
            }
            else {
                await addTx({ 
                    address:walletAddress,
                    action:"trustline with asset " + params.code + ":" + params.issuer ,
                    name:'establish',
                    hash:res.hash,
                    data:'https://dropzey.com/aidrop?id=' + params.id
                })
                return {status: true}
            }
        }
        else {return false}
    }
    catch(e) {console.log(e); return false}
}
/** This function claims an Airdrops
     * @params {paramsObject {id, verify_id, name, amount, asset_code}
     * returns {daoId} | {statusBoolean}
**/
export const claimAirdrop = async (params = {}, walletAddress) => {
    try{
        if(walletAddress != "") {
            const server = new SorobanClient.Server(stellarServer); 
            const account = await server.getAccount(walletAddress);
            //preparing arguements
            const claimer = (new StellarSdk.Address(walletAddress)).toScVal()
            const id = StellarSdk.nativeToScVal(params.id * 1)
            const verify_id = StellarSdk.nativeToScVal(params.verify_id * 1) 
            let transaction = new StellarSdk.TransactionBuilder(account, { fee, networkPassphrase: networkUsed })
                .addOperation(
                    // An operation to call create on the contract
                    contract.call("claim", claimer, id, verify_id)
                 )
                 .setTimeout(timeout)
                 .addMemo(StellarSdk.Memo.text('Claiming Airdrop'))
                 .build();
            // Simulate the transaction to discover the storage footprint, and update the
            transaction = await server.prepareTransaction(transaction);
            //sign and exec transactions
            const res = await execTranst(transaction)
            if(res.status === false) {
                //something went wrong
                return false
            }
            else {
                const resp = {status: (StellarSdk.scValToNative(res.value))}
                if(resp.status == 'done') {
                    //save the tx first 
                    await addTx({ 
                    address:walletAddress,
                    action:"Airdrop " + params.name + " worth " + params.amount.toLocaleString() + " " + params.asset_code,
                    name:'reward',
                    hash:res.hash,
                    data:'dropzey.com/aidrop?id=' + params.id,
                    extra: {
                            type:'claimed',
                            id:params.id,
                    }
                    })
                }
               return resp
            }
        }
        else {return false}
    }
    catch(e) {console.log(e); return false}
}