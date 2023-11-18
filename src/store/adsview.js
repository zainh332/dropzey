import { defineStore } from "pinia";

export const useAds = defineStore('ads', {
    state: () => ({
        first: true,
        second: true,
    }),
    actions: {
        // since we rely on `this`, we cannot use an arrow function
        setFirstTab() {
            
                this.first = true;
                this.second = false;
         
            
        },
        setSecondTab() {
            
            this.first = false;
            this.second = true;
     
        
    },
         
    },
})