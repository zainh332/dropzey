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
        title: "Home",
        description: ""
      },
    },
    {
      path: "/HomePage",
      name: "HomePage",
      component: HomePage,
      meta: {
        title: "Home",
        description: ""
      },
    },
    {
      path: "/airdrop",
      name: "airdrop",
      component: Airdrop,
      meta: {
        title: "Airdrop",
        description: ""
      },
    },
    {
      path: "/airdrops",
      name: "Airdrops",
      component: Airdrops,
      meta: {
        title: "Airdrop",
        description: ""
      },
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      meta: {
        title: "Profile",
        description: ""
      },
    },
    {
      path: "/explorer",
      name: "Explorer",
      component: Explorer,
      meta: {
        title: "Explorer",
        description: ""
      },
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

// Set the page title dynamically when the route changes
router.beforeEach((to, from, next) => {
  document.title = to.meta.title + "  | Dropzey";
  next();
});

export default router;
