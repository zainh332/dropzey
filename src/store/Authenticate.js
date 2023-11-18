import { defineStore } from "pinia";

export const useAuthenticate = defineStore('auth', {
    state: () => ({
        isLoggedIn: false,
    }),
    actions: { 
        setLogin(auth) {
                this.isLoggedIn = auth;
                console.log(auth);
        }
         
    },
})