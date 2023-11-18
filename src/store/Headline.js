import { defineStore } from "pinia";

export const useHeadline = defineStore('headline', {
    state: () => ({
        headline: '',
    }),
    actions: { 
        setHeadline(headlineText) {
          console.log(headlineText);
          
            this.headline = headlineText;
        },
    },
})