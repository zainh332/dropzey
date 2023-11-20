import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/pages/Landing.vue";
import Components from "@/pages/Components.vue";
import HomePage from "@/pages/Home.vue";
import Airdrop from "@/pages/Airdrop.vue";
import Airdrops from "@/pages/Airdrops.vue";
import Profile from "@/pages/Profile.vue";
import Explorer from "@/pages/Explorer.vue";
import createAirdrop from "@/pages/createAirdrop.vue";
import AboutUs from "@/pages/About-us.vue";


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage,
      meta: {
        title: "Welcome to Dropzey",
        description: "Discover a world of airdrops, and more. Join Dropzey for exciting opportunities in the crypto airdrop space"
      },
    },
    {
      path: "/HomePage",
      name: "HomePage",
      component: HomePage,
      meta: {
        title: "Dropzey - Your Crypto Airdrop Platform",
        description: "Explore the latest airdrops and crypto opportunities with Dropzey. Join now and participate in airdrops"
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
        title: "Airdrops",
        description: "Discover a variety of ongoing airdrops on Dropzey. Participate now and receive tokens from different projects and communities"
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
        description: ""
      },
    },
    {
      path: "/about-us",
      name: "aboutus",
      component:AboutUs ,
      meta: {
        title: "About Us",
        description: ""
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
