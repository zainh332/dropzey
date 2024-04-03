/* UTILITY SCRIPTS */
import {
    getPublicKey,
} from "@stellar/freighter-api";
import { MAX_SIZE_EXCEEDED } from "./constant";

//the E operator
export const E = (elementId) => {return document.getElementById(elementId)}
//the onrender operator
export const onRender = (elementId, callback, timeout = 5) => {
    const tmrId = setInterval(() => {
        if(E(elementId)){clearInterval(tmrId);callback()}
    }, 50)
    setTimeout(() => {clearInterval(tmrId)}, timeout * 1000)
    return tmrId
}
//to listen to dom changes
export const R = (elementId, callback) => {
    if(E(elementId)){ console.log(0)
        const observer = new MutationObserver((mutations) => {
             callback()
        });
        // Configuration for the observer 
        const config = { attributes: false, childList: true };
        // Start observing the element for changes
        observer.observe(E(elementId), config);
        return observer;
    }
}
//to save special tokens
export const saveToken = async (name, value, type='once') => {  
    var expires = '';
    if (type == "forever") {
        var date = new Date();
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}
//to return wallet address if connected
export const getWallet = async () => {
    if((localStorage.getItem('wallet_connect') || 'false') == 'true') {
        const walletAddress = await getPublicKey()
        return walletAddress
    }
    else{return false}
}
//to read cookie
export const getCookie = (name) => {
    // Create a regular expression to match the cookie name
    var pattern = new RegExp('(^|;\\s*)(' + name + ')=([^;]*)');
    // Attempt to match the cookie name within document.cookie
    var match = document.cookie.match(pattern);
    // If a match is found, return the cookie value; otherwise, return null
    return match ? match[3] : null;
}
//to validate password
export const validatePass = async (pass_field) => {
    const pass = E(pass_field)
    const password = pass.value; 
    let pass_flg = true
    // Check if the password contains a symbol
    var symbolRegex = /[$&+,:;=?@#|'<>.^*()%!-]/;
    if (!symbolRegex.test(password)) {
        pass_flg = pass_flg && false;
    }
    // Check if the password contains a number
    var numberRegex = /\d/;
    if (!numberRegex.test(password)) {
        pass_flg = pass_flg && false;
    }
    // Check if the password contains an uppercase letter
    var uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
        pass_flg = pass_flg && false;
    }
    if(pass_flg) {
        pass.style.border = ""
    }
    else if(!pass_flg) {  
        pass.style.border = "2px solid red !important"
    }
    return pass_flg
}
//validate data
export const fDate = (dateString) => {
    var today = new Date();
    // Extract year, month, and day components
    var year = today.getFullYear();
    var month = String(today.getMonth() + 1).padStart(2, '0'); // Adding 1 because January is 0
    var day = String(today.getDate()).padStart(2, '0');
    // Return date in "yyyy-MM-dd" format
    return year + '-' + month + '-' + day;
}
//image selector
export const selectImage = (callback) => {
    const img = document.createElement('input')
    img.type = 'file'
    img.accept = 'image/*';
    img.style.display = 'none'
    img.addEventListener('change', function(event) {  
        const file = event.target.files[0];
        const maxSize = 5 * 1024 * 1024; // 5MB in bytes
        if(file != null) {
            if (file && file.size > maxSize) {
                callback(MAX_SIZE_EXCEEDED)
                img.value = ''; // Clear the file input
            }
            else {
                callback(file)
            }
        }
        else {
            callback("")
        }
    });
    document.body.appendChild(img)
    return img;
}
//to add auth credentials
export const authLogin = (formData) => {
    formData.append('token', getCookie('USER'));
    formData.append('USER_AUTH', getCookie('USER_F'));
    return formData;
}
//to confirm login
export const hasLogin = () => {
    return (localStorage.getItem('login') === 'true' && getCookie('USER'))
}
//to validate uri
export const isURL = (uri = "") => {
    try {
      if(uri.trim() != "") {
        if(uri.indexOf(':/') == -1 && uri.indexOf(".") > -1) {uri = 'http://' + uri} //append protocol
        new URL(uri)
      }
      return true;
    } catch (err) {  
      return false;
    }
}
//format plural words
export const plural = (n, sing, plur) => {
    n *= 1;
    return (n > 1) ? plur : sing
}
//format numbers
export const fNum = (n, type = 'short') => {
    n = n * 1;
    if(n >= 1000 && n < 1000000) {
        return Math.floor(n/1000).toLocaleString() + ((type == 'short') ? 'k' : ' thousand')
    }
    else if(n >= 1000000 && n < 1000000000) {
        return Math.floor(n/1000000).toLocaleString() + ((type == 'short') ? 'M' : ' million')
    }
    else if(n >= 1000000000 && n < 1000000000000) {
        return Math.floor(n/1000000000).toLocaleString() + ((type == 'short') ? 'B' : ' billion')
    }
    else if(n >= 1000000000000) {
        return Math.floor(n/1000000000000).toLocaleString() + ((type == 'short') ? 'T' : ' trillion')
    }
    return n.toLocaleString()
}
/** To format an address to display
     * params {_address} the address as string
     * params {n} the number of address characters to display
     * returns {String}
*/
export const fAddr = (_address, n = 14) => {
    _address += ""
    return _address.substring(0,n) + '...' + _address.substring(_address.length - n)
}