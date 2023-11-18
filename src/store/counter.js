import { defineStore } from "pinia";

export const useTab = defineStore("tab", {
  state: () => ({
    currentTab: 0,
  }),
  actions: {
    setCurrentTab(tab) {
      this.currentTab = tab;

      if (this.currentTab === 0) {
        localStorage.setItem("youtube", "red");
      } else {
        localStorage.setItem("youtube", "blue");
      }
    },
  },
});
