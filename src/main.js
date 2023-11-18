// import { createApp } from "vue";
// import "../resources/css/app.css";
// import { createPinia } from "pinia";
// import App from "./App.vue";
// import router from "./router";
// import VueApexCharts from "vue3-apexcharts";
// import Tooltip from "v-tooltip";

// const pinia = createPinia();

// createApp(App)
//   .use(router)
//   .use(VueApexCharts)
//   .use(pinia)
//   .use(Tooltip)
//   .mount("#app");


import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// Use the router instance
app.use(router);

app.mount("#app");
