/* EXPORTS API CALLS */

import { API_URL, GOOGLE_CLIENT_ID, airdropContractId } from "./constant"
import { authLogin, getCookie, isURL } from "./utils"
import axios from 'axios'

//get Explorer transaction details 
export const getTx = async () => {
    const res = await fetch(API_URL + 'api.php?type=get_tx&airdrop_id=' + airdropContractId + '&id=' + Math.random() * 1000)
    if(res.ok) {
        const resp = await res.json()
        return resp
    }
    else {
        //network error
        return false
    }
}
//to add tx to explorer
export const addTx = async (params) => {
    try {
        if(params.action.trim() != "" && params.address != "") {
           //check if the url is http and from this domain
           const url = API_URL + "api.php?type=add_tx&airdrop_id=" + airdropContractId  + "&action=" + encodeURIComponent(params.action) + "&address=" + encodeURIComponent(params.address) + "&data=" + encodeURIComponent(params.data) + "&name=" + encodeURIComponent(params.name) + "&hash=" + encodeURIComponent(params.hash) + "&extra=" + encodeURIComponent(JSON.stringify(params.extra || {}))
           const formData = authLogin(new FormData())
           const res = await axios.post(url, formData, {
                headers: {
                'X-CSRF-TOKEN': window.Laravel.csrfToken,
                }
            })
           if(res.status) {
               return res.data
           }
           else {
               //network error
               return false
           }
       }
       else {return 2}
   } catch (error) { console.log(error)
       return false;
   }
}
//get user server fingerprint
export const getF = async () => {
    const res = await fetch(API_URL + 'api.php?type=get_f&id=' + Math.random() * 1000)
    if(res.ok) {
        const resp = await res.text()
        return resp
    }
    else {
        //network error
        return false
    }
}
//get user profile details
export const getProfile = async () => {
    const formData = new FormData();
    formData.append('token', getCookie('USER'));
    formData.append('USER_AUTH', getCookie('USER_F'));
    try{
        const res = await axios.post(API_URL + 'api.php?type=get_user&id=' + Math.random() * 100, formData, {
            headers: {
            'X-CSRF-TOKEN': window.Laravel.csrfToken,
            }
        })
        if(res.status) {
            return res.data
        }
        else {
            //network error
            return false
        }
    }
    catch(e) {return false}   
}
//get all the airdrops details 
export const getAirdropData = async (ids, walletAddress) => {
    const res = await fetch(API_URL + 'api.php?type=airdrops&ids=' + ids + '&user=' + walletAddress)
    if(res.ok) {
        const resp = await res.json()
        return resp
    }
    else {
        //network error
        return false
    }
}
//get specific airdrop data 
export const getIsAirdropData = async (ids, walletAddress) => {
    const res = await fetch(API_URL + 'api.php?type=get_airdrop&ids=' + ids + '&user=' + walletAddress)
    if(res.ok) {
        const resp = await res.json()
        return resp
    }
    else {
        //network error
        return false
    }
}
//get verify id for airdrop claiming
export const getAirdropVerifyId = async (airdropId) => {
    const formData = new FormData();
    formData.append('token', getCookie('USER'));
    formData.append('USER_AUTH', getCookie('USER_F'));
    try{
        const res = await axios.post(API_URL + 'api.php?type=get_verify_id&id=' + airdropId, formData, {
            headers: {
            'X-CSRF-TOKEN': window.Laravel.csrfToken,
            }
        })
        if(res.status) {  
            return res.data
        }
        else {
            //network error
            return false
        }
    }
    catch(e) {return false}   
}

 
