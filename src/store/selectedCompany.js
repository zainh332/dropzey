import { defineStore } from "pinia";

export const useSelectedComp = defineStore("selectedComp", {
  state: () => ({
    companyDetail: {},
  }),
  actions: {
    setCompany(dataObj) {
      this.companyDetail = dataObj; 
    },
  },
});
