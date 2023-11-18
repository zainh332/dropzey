import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/pages/Landing.vue";
import Components from "@/pages/Components.vue";
import HomePage from "@/pages/Home.vue";
import Airdrop from "@/pages/Airdrop.vue";
import Airdrops from "@/pages/Airdrops.vue";
import Profile from "@/pages/Profile.vue";
import Explorer from "@/pages/Explorer.vue";
import createAirdrop from "@/pages/createAirdrop.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage,
      meta: {
        title: "Home | Dropzey",
        description: "test"
      },
    },
    {
      path: "/HomePage",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/airdrop",
      name: "airdrop",
      component: Airdrop,
    },
    {
      path: "/airdrops",
      name: "Airdrops",
      component: Airdrops,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/explorer",
      name: "Explorer",
      component: Explorer,
    },
    {
      path: "/create-airdrop",
      name: "createairdrop",
      component:createAirdrop ,
      meta: {
        title: "Create Airdrop",
        description: "Explore the world of tokens with TokenGlade. Empower your journey into the Stellar universe and join the revolution in digital assets."
      },
    },
    {
      path: "/c",
      name: "components",
      component: Components,
    },
  ],
});

export default router;
