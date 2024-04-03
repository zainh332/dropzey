/* A Custom hearing object to
   listen and pass state changes
*/
window.hearingHooks = [];
//to register hearing
window.hear = (changeName = "", callback) => {
    if(!hearingHooks[changeName]){hearingHooks[changeName] = []} //intializing
    hearingHooks[changeName].push(callback)
    return hearingHooks[changeName].length - 1;
}
//to speak
window.speak = (changeName, value) => {
    if(hearingHooks[changeName]) {
        for(let i=0;i<hearingHooks[changeName].length;i++) {
            if(hearingHooks[changeName][i]) {
                if(typeof(hearingHooks[changeName][i]) == typeof(()=>{})) {
                    hearingHooks[changeName][i](value)
                }
            }
        }
    }
}
//to stop hearing
window.stopHearing =  (id=null, changeName) => {
    if(id != null && hearingHooks[changeName]) {
        hearingHooks[changeName][id] = null
    }
}
 
export const setUp = () => {
    const scripts = document.createElement('script')
    scripts.crossOrigin = "anonymous"
    scripts.src="https://kit.fontawesome.com/1b9091d672.js"
    document.body.appendChild(scripts)
}