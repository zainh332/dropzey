import * as StellarSdk from '@stellar/stellar-sdk';

/* SAVE CONSTANTS VARIABLES */
export const API_URL = 'https://dropzey.com/public/build/api/'
export const FINGERPRINT =   (function(){
    var canvas =  document.createElement('canvas')
    var ctx = canvas.getContext('2d')
    var txt = "i9asdm..#$po(^$W%^W%&*W*09) wr-cz" + new Date(Date()).getTime()
    ctx.textBaseline = "top"
    ctx.font = "45px sans-serif"
    ctx.textBaseline = "alphabetic"
    ctx.rotate = "(.07)"
    ctx.fillStyle = "#f60"
    ctx.fillRect(125,1,62,20)
    ctx.fillStyle = "#069"
    ctx.fillText(txt,2,19)
    ctx.fillStyle = "rgba(102,200,0,0.7)"
    ctx.fillText(txt,4,17)
    ctx.shadowBlur = 9
    ctx.shadowColor = "green"
    ctx.fillRect(-20,10,234,5)
    var res = canvas.toDataURL()
    var hash = 0
    var char = ""
    ctx = null
    canvas = null
    if(res.length == 0){
        return ""
    }
    else{
        for(let i=0;i<res.length;i++){
            char = res.charCodeAt(i)
            hash = ((hash << 5) - hash) + char
            hash = hash & hash
        }
        hash = hash + "GA"
        return hash.replace(/[^0-9A-Z]/g,"")
    }
    
})()

/* STELLARS */
export const SorobanClient = StellarSdk.SorobanRpc
export const timeout = 86400 //using a timeout of one day
export const fee = 100;
export const stellarServer = "https://soroban-testnet.stellar.org"
export const airdropContractId = 'CDRC7MKOA3SJELZX2BC53V6XAYJY66CF2VCBEU372FMAQSNNKMFRF3JX'  
export const wrappingAddress = 'GBRRMXY7BQFT6R7OSISEPQPGERJRSQFIOI52AML3LWBWZE3HHXUVDS6U'
export const networkUsed = StellarSdk.Networks.TESTNET
export const networkWalletUsed = "TESTNET"
export const contract = new StellarSdk.Contract(airdropContractId);
    
/* SECRETS */
export const GOOGLE_CLIENT_ID = "918946263960-h9fa0mhah5fld1k1ldq3odova1qgr680.apps.googleusercontent.com"
export const GITHUB_CLIENT_ID = "8b3f6d8ee40355c4640c"
export const DISCORD_CLIENT_ID = "1211380722573643796"
export const DISCORD_REDIRECT_URI = "https://discord.com/oauth2/authorize?client_id=1211380722573643796&response_type=code&redirect_uri=https%3A%2F%2Fdropzey.com%2Fpublic%2Fbuild%2Fapi%2Fapi.php%3Ftype%3Ddiscord_auth"
export const TELEGRAM_TOKEN ="6842560112:AAFYey_CBUiSWrTDaO76c7CS77pzjkpKEm4"
export const FIREBASES_CONFIG =  {
	apiKey: "AIzaSyASCETm7jgbBYkpM8XNEFg_3OyaESNq_zc",
	authDomain: "dropzey-new.firebaseapp.com",
	projectId: "dropzey-new",
	storageBucket: "dropzey-new.appspot.com",
	messagingSenderId: "694569498265",
	appId: "1:694569498265:web:cecf286aac75c597d4aa08",
	measurementId: "G-MB6B3Y6Q87"
};

/* ERRORS */
export const MAX_SIZE_EXCEEDED = 1; 