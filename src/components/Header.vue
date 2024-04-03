<template>
  <div class="relative" >
    <Disclosure as="nav" class="bg_gradient" v-slot="{ open }">
      <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-20">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton
              class="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block w-6 h-6 text-white" aria-hidden="true" />
              <XMarkIcon v-else class="block w-6 h-6 text-white" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <div class="items-center flex-shrink-0 hidden sm:flex">
              <router-link to="/"><img class="w-auto h-12" :src="logo" alt="Your Company" /></router-link>
            </div>
            <div class="sm:hidden flex fle`x-shrink-0 items-center">
              <img class="w-auto h-12" :src="mob_logo" alt="Your Company" />
            </div>
            <div class="items-center hidden pl-8 sm:ml-6 sm:flex">
              <div class="flex space-x-4">
                <router-link v-for="item in fNavigation()" :key="item.name" :to="item.href" :class="[
                  'rounded-md flex items-center gap-x-2   px-3 text-white py-2 text-sm font-normal',
                ]" :aria-current="item.current ? 'page' : undefined"><span>{{ item.name }}</span>
                </router-link>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center gap-3 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            <button id="walletConnected" @click="OpenWalletModal" class="px-4 py-2 text-xs font-semibold text-white bg-transparent border border-white rounded-full sm:px-6 sm:text-sm">
              Connect Wallet
            </button>

            <!-- Separator -->
            <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

            <button
              v-show="!isLoggedIn"
              @click="OpenSignInModal"
              class="px-4 py-2 text-xs font-semibold text-white bg-transparent border border-white rounded-full sm:px-6 sm:text-sm">
              Sign In
            </button>
            
             
            <button v-show="isLoggedIn" @click="toggleDropdown" class="-m-1.5 flex items-center p-1.5">
              <img class="w-8 h-8 rounded-full bg-gray-50"
                :src="userImg"
                alt="" />
            </button> 

            <transition name="fade">
              <div v-if="isDropdownOpen" class="absolute right-0 z-10 mt-2 bg-white rounded-md shadow-lg top-full" style="top: 3rem; right: 10;">
                
                <a
                  v-for="item in profileNavigation"
                  :key="item.name"
                  :href="item.href"
                  
                  class="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                <span v-if="item.name.indexOf('Log') > -1" @click="logOut">
                  {{ item.name }}
                </span>
                <span v-else >
                  {{ item.name }}
                </span>
                </a>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
    <div class="px-2 py-2 lg:hidden top-12 bg-primary">
      <input placeholder="Search" type="text" name="" class="w-full px-4 py-1.5 rounded-full" id="" />
    </div>
  </div>

  <SigninModal :open="signInModal"/>
  <ConnectWalletModal :open="ConnectWalletModals"/>
  
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import mob_logo from "@/assets/mob_logo.png";
import logo from "@/assets/logo.png";
import Arrow from "@/svgs/Arrow.vue";
import MG from "@/svgs/MG.vue";
import { ref } from 'vue';
import {
    getPublicKey,
} from "@stellar/freighter-api";
import ConnectWalletModal from "@/components/ConnectWallet.vue";
import SigninModal from "@/components/SignIn.vue";
import { E, getCookie, hasLogin, saveToken } from '../utils/utils'
import { getF, getProfile } from '../utils/api'
import { API_URL } from "../utils/constant";

const signInModal  = ref(false);
const urlParams = new URLSearchParams(window.location.search);

const OpenSignInModal = (e) => {
  if(signInModal.value) {signInModal.value = false}
  setTimeout(() => {
    signInModal.value = true;
  }, 100)
};

const ConnectWalletModals  = ref(false);
const isLoggedIn = ref(hasLogin());
const userImg = ref("");

const OpenWalletModal = (e) => {
  e.preventDefault();
    if(ConnectWalletModals.value){ConnectWalletModals.value = false}
    setTimeout(() => {
      ConnectWalletModals.value = !ConnectWalletModals.value;
    }, 100)
};


const navigation = [
  { name: "Create Airdrop", href: "/create-airdrop", current: false },
  { name: "Airdrops", href: "/airdrops", current: true },
  { name: "Explorer", href: "/explorer", current: false },
  { name: "About Us", href: "/about-us", current: false },
  { name: "Profile Page", href: "/profile", current: false },
];

const fNavigation = () => {
      // Apply your filtering logic here
      return navigation.filter(item => {
         if(item.name == 'Profile Page' && !isLoggedIn.value) {return false}
         return true
      });
}

 

const profileNavigation = [
  { name: "View Profile", href: "/profile", current: false },
  { name: "Log Out", href:"", current: false },
];

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};


const logOut = () => {
  localStorage.setItem('login', 'false')
  isLoggedIn.value = false
  speak('logg', false)
}
//create listener to listen for connected changes
hear('connected', async (status) => {
    if(status) {
      //has been connected, do the needfull
      if(E('walletConnected')) {
        const walletKey = await getPublicKey()
        E('walletConnected').innerText = walletKey.substring(0, 6) + '...' + walletKey.substring(walletKey.length - 4)
      }
    }
    else {
      //has disconnected
      E('walletConnected').innerText = "Connect Wallet"
    }
})

//create listener to listen for connected changes
hear('logg', async (status) => {
    if(status) {
       isLoggedIn.value = true
       localStorage.setItem('login', 'true')
       userImg.value = ((await getProfile()) || {img:"https://dropzey.com/public/build/assets/iconimage-8e87896a.png"})['img'] 
    }
    else {
      isLoggedIn.value = false
      localStorage.setItem('login', 'false')
      saveToken('USER', "", "once") 
      saveToken('USER_F', "", "once") 
    }
})

//create listener to listen for connect wallet buttons
hear('toggle_wallet', async (status) => {
    if(status) {
      if(ConnectWalletModals.value){ConnectWalletModals.value = false}
      setTimeout(() => {
        ConnectWalletModals.value = !ConnectWalletModals.value;
      }, 100)
    }
    else {
      ConnectWalletModals.value = false
    }
})

//create listener to listen for sign up
hear('toggle_sign', async (status) => {
    if(status) {
      if(signInModal.value) {signInModal.value = false}
      setTimeout(() => {
        signInModal.value = true;
      }, 100)
    }
    else {
      signInModal.value = false
    }
})
const checkLogin = async () => {
  if(hasLogin()) {
    userImg.value = ((await getProfile()) || {img:"https://dropzey.com/public/build/assets/iconimage-8e87896a.png"})['img'] 
  }
}
checkLogin() 
//extract github_auth code for github logging
const auth = (urlParams.get('auth') || "");
const discordAuth = (urlParams.get('discord_auth') || "");
const sMain = async() => {
  //save back the auth
  if(auth != "") {
    const f = await getF()
    if(f !== false) {  
      saveToken('USER', auth, 'forever')
      saveToken('USER_F', f, 'forever')
      speak('logg', true) 
      //redirect to profile page
      window.location = '/profile'
    }
  }
  else if(discordAuth != "" && getCookie('USER') != "") {
    //redirect back to complete the process
    window.location = API_URL + 'api.php?type=discord_auth_v1&access_token=' + discordAuth + '&token=' + getCookie('USER')
  }
}
sMain()

</script>


<style>
/* Your CSS styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
