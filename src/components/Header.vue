<template>
  <div class="relative">
    <Disclosure as="nav" class="bg_gradient" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-20 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon
                v-if="!open"
                class="block h-6 w-6 text-white"
                aria-hidden="true"
              />
              <XMarkIcon
                v-else
                class="block h-6 w-6 text-white"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="sm:flex hidden flex-shrink-0 items-center">
              <router-link to="/"
                ><img class="h-12 w-auto" :src="logo" alt="Your Company"
              /></router-link>
            </div>
            <div class="sm:hidden flex fle`x-shrink-0 items-center">
              <img class="h-12 w-auto" :src="mob_logo" alt="Your Company" />
            </div>
            <div class="hidden sm:ml-6 sm:flex items-center pl-8">
              <div class="flex space-x-4">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  :class="[
                    'rounded-md flex items-center gap-x-2   px-3 text-white py-2 text-sm font-normal',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                  ><span>{{ item.name }}</span>
                </router-link>
              </div>
            </div>
          </div>
          <div class="absolute flex items-center gap-3 inset-y-0 right-0 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <!-- <div class="relative text-xs sm:text-sm hidden lg:block rounded-md shadow-sm">
              <input
                type="text"
                name="account-number"
                id="account-number"
                class="block w-full px-2 rounded-full border-0 py-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 sm:text-sm sm:leading-6"
                placeholder="Search"
              />
              <div class="pointer-events-none bg_gradient rounded-full absolute inset-y-0 justify-center flex items-center h-6 top-2 right-3 w-6">
                <MG />
              </div>
            </div> -->

            <button class="sm:px-6 px-4 text-xs sm:text-sm py-2 font-semibold bg-transparent border border-white text-white rounded-full">
              Connect Wallet
            </button>

            <!-- Separator -->
            <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true"/>

            <button class="sm:px-6 px-4 text-xs sm:text-sm py-2 font-semibold bg-transparent border border-white text-white rounded-full">
              Sign In
            </button>

            <!-- If User is logged In Profile dropdown -->
            <!-- <Menu as="div" class="relative">
              <MenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </MenuButton>
            </Menu> -->
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</DisclosureButton
          >
        </div>
      </DisclosurePanel>
    </Disclosure>
    <div class="py-2 lg:hidden top-12 bg-primary px-2">
      <input
        placeholder="Search"
        type="text"
        name=""
        class="w-full px-4 py-1.5 rounded-full"
        id=""
      />
    </div>
  </div>
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

const navigation = [
  { name: "Create Airdrop", href: "/create-airdrop", current: false },
  { name: "Airdrops", href: "/airdrops", current: true },
  { name: "Explorer", href: "/explorer", current: false },
  { name: "Profile", href: "/Profile", current: false },
  { name: "HomePage", href: "/HomePage", current: false },
];
</script>
