import { defineStore } from "pinia";

export const useTab = defineStore('tabs', {
    state: () => ({
        currentTab: 0,
        load:true,
        proxy:0
       
    }),
    actions: {
        // since we rely on `this`, we cannot use an arrow function
        setTab(index) {
            
                this.currentTab = index; 
                console.log(index); 
        },

        setProxy(proxyIndex){
            this.proxy =  proxyIndex;
            console.log(this.proxy ,'proxy');
        }
        
         
    },
})