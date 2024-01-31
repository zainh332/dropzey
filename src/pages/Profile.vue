<template>
  <div>
    <div class="mx-auto max-w-7xl">
      <div class="py-12 text-center">
        <!-- <img
          class="object-cover mx-auto rounded-full w-28 h-28"
          src="https://plus.unsplash.com/premium_photo-1679750867619-6f6e57fc8762?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        /> -->
        <img class="object-cover mx-auto rounded-full w-28 h-28" :src="iconImage" alt="" />
        <h1 class="mt-2 text-xl font-bold">Welcome</h1>
      </div>
      <div class="px-4 py-12 custom-shadow rounded-xl sm:px-12">
        <h1 class="mt-2 text-xl font-bold">Basic Info</h1>
        <!-- <p class="text-xs">
          Some info may be visible to other people using Google services.
          <a class="font-medium text-sky-500" href="">Learn more</a>
        </p> -->
        <div class="flex flex-col justify-between gap-6 py-6 sm:flex-row sm:items-center">
          <div class="flex flex-col justify-start gap-6 sm:flex-row sm:items-center">
            <h1 class="text-base font-medium">Profile Picture</h1>
            <p class="text-sm">
              A profile picture helps personalize your account
            </p>
          </div>
          <img
            class="object-cover w-12 h-12 ml-auto rounded-full sm:w-24 sm:h-24"
            src="https://plus.unsplash.com/premium_photo-1679750867619-6f6e57fc8762?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
        <div class="">
          <div class="flex flex-col justify-start gap-6 py-4 border-t sm:flex-row sm:items-center">
            <h1 class="text-base flex items-center gap-2 font-medium mb-2 mt-2 w-[20%]">
              Name
              <svg
                  v-tooltip="'Enter your name (e.g. William Anderson)'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
            </h1>
            <input class="border border-gray-300 rounded-md py-1.5 px-2 w-[50%]" type="text" />
            <!-- <p class="text-sm">Zain Haider</p> -->
          </div>
          <div class="flex flex-col justify-start gap-6 py-4 border-t sm:flex-row sm:items-center">
            <h1 class="text-base flex items-center gap-2 font-medium mb-2 mt-2 w-[20%]">
              Email
              <svg
                  v-tooltip="'Enter your email (e.g. abc@gmail.com)'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
            </h1>
            <input class="border border-gray-300 rounded-md py-1.5 px-2 w-[50%]" type="email" />
            <!-- <p class="text-sm">Zain Haider</p> -->
          </div>
          <div class="flex flex-col justify-start gap-6 py-4 border-t sm:flex-row sm:items-center">
            <h1 class="text-base flex items-center gap-2 font-medium mb-2 mt-2 w-[20%]">
              Password
              <svg
                  v-tooltip="'Enter your password (Should contain special characters like !@#$ and numbers)'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
            </h1>
            <input class="border border-gray-300 rounded-md py-1.5 px-2 w-[50%]" type="password" />
            <!-- <p class="text-sm">Zain Haider</p> -->
          </div>
          <div class="flex flex-col justify-start gap-6 py-4 border-t sm:flex-row sm:items-center">
            <h1 class="text-base flex items-center gap-2 font-medium mb-2 mt-2 w-[20%]">
              Date of Birth
              <svg
                  v-tooltip="'Select your Date of Birth (e.g. date-month-year)'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
            </h1>
            <!-- <p class="text-sm">December 7, 1991</p> -->
            <input class="border border-gray-300 rounded-md py-1.5 px-2 w-[50%]" type="date" />
          </div>
          <div class="flex flex-col justify-start gap-6 py-4 border-t sm:flex-row sm:items-center">
            <h1 class="text-base flex items-center gap-2 font-medium mb-2 mt-2 w-[20%]">
              Phone Number
              <svg
                  v-tooltip="'Enter your Phone Number (e.g. +90-000-000-000)'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
            </h1>
            <!-- <p class="text-sm">December 7, 1991</p> -->
            <input class="border border-gray-300 rounded-md py-1.5 px-2 w-[50%]" type="phone" />
          </div>
          <div class="flex flex-col justify-start gap-6 py-4 border-t sm:flex-row sm:items-center">
            <h1 class="text-base flex items-center gap-2 font-medium mb-2 mt-2 w-[20%]">
              Gender
              <svg
                  v-tooltip="'Select your gender'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
              </svg>
            </h1>
            <select class="border border-gray-300 rounded-md py-1.5 px-2 w-[50%]">
              <option value="US">Male</option>
              <option value="CA">Female</option>
            </select>
          </div>
          <div class="flex flex-col justify-start gap-6 py-4 border-t sm:flex-row sm:items-center">
            <h1 class="text-base flex items-center gap-2 font-medium mb-2 mt-2 w-[20%]">
              Country
              <svg
                  v-tooltip="'Select your country (e.g. Canada)'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
              </svg>
            </h1>
            <select class="border border-gray-300 rounded-md py-1.5 px-2 w-[50%]">
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
            </select>
          </div>
          <div class="flex flex-col justify-start gap-6 py-4 border-t border-b sm:flex-row sm:items-center">
            <h1 class="text-base flex items-center gap-2 font-medium mb-2 mt-2 w-[20%]">
              Wallet Connected
              <svg
                  v-tooltip="'Connect wallet to participate in airdrops'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
              </svg>
            </h1>
            
            <!-- When wallet is not connected -->
            <button class="flex items-center justify-center gap-2 border bg-gray-100 rounded-full px-10 py-1.5 w-full sm:w-auto">
              <span class="font-medium text-gray-500 text-s">
                Connect Wallet
              </span>
            </button>

            <!-- When wallet is connected -->
            <!-- <p class="overflow-scroll text-sm example">
              GANXQETJKJKPOIYRHNMALK759342HAKNAQWERTYUIOPLK
            </p> -->
          </div>
        </div>

        <div class="mt-12">
          <div>
            <div class="hidden sm:block">
              <div class="flex flex-col justify-between gap-6 py-6 sm:flex-row sm:items-center">
                <div class="flex flex-col justify-start gap-6 sm:flex-row sm:items-center">
                  <h1 class="text-base font-medium">Social Media Account</h1>
                  <svg
                        v-tooltip="'Connect your social media accounts'"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        />
                    </svg>
                </div>
                  <button class="flex items-center justify-center gap-2 border bg-gray-100 bg_hover_gradient hover:text-white shadow-sm rounded-full px-10 py-1.5 w-full sm:w-auto">
                    <span class="font-medium text-gray-100 text-s">
                      Twitter
                    </span>
                  </button>
                  <button class="flex items-center justify-center gap-2 border bg-gray-100 bg_hover_gradient hover:text-white shadow-sm rounded-full px-10 py-1.5 w-full sm:w-auto">
                    <span class="font-medium text-gray-100 text-s">
                     Discord
                    </span>
                  </button>
                  <button class="flex items-center justify-center gap-2 border bg-gray-100 bg_hover_gradient hover:text-white shadow-sm rounded-full px-10 py-1.5 w-full sm:w-auto">
                    <span class="font-medium text-gray-100 text-s">
                      Telegram
                    </span>
                  </button>
                  <button class="flex items-center justify-center gap-2 border bg-gray-100 bg_hover_gradient hover:text-white shadow-sm rounded-full px-10 py-1.5 w-full sm:w-auto">
                    <span class="font-medium text-gray-100 text-s">
                      Youtube
                    </span>
                  </button>

                <!-- <img
                  class="object-cover w-12 h-12 ml-auto rounded-full sm:w-24 sm:h-24"
                  src="https://plus.unsplash.com/premium_photo-1679750867619-6f6e57fc8762?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                /> -->
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12">
          <div>
            <div class="hidden sm:block">
              <div class="">
                <nav class="flex -mb-px space-x-8" aria-label="Tabs">
                  <span v-for="(tab, index) in tabs" :key="tab.name" @click="setTab(index)" :class="[
                    index === currentTab
                      ? 'border-primary bg-primary rounded-md text-white   px-4 cursor-pointer'
                      : 'border-transparent text-gray-500 cursor-pointer hover:border-gray-300 hover:text-gray-700',
                    'whitespace-nowrap cursor-pointer border-b-2 py-2 px-1 text-sm font-medium',
                  ]" :aria-current="tab.current ? 'page' : undefined">{{ tab.name }}</span>
                </nav>
              </div>
            </div>
          </div>
        </div>


        <div v-if="currentTab === 0" class="flex flex-col items-center gap-6 py-12 sm:flex-row">
          <div class="w-full px-4 py-8 border rounded-xl">
            <h1
              class="max-w-2xl mx-auto text-xl font-bold leading-loose tracking-tight text-center text-gray-900 bg-black text_gradient sm:text-3xl">
              12
            </h1>
            <p class="text-2xl font-medium text-center">Airdrop Participated</p>
          </div>
          <div class="w-full px-4 py-8 border rounded-xl">
            <h1
              class="max-w-2xl mx-auto text-xl font-bold leading-loose tracking-tight text-center text-gray-900 bg-black text_gradient sm:text-3xl">
              $400
            </h1>
            <p class="text-2xl font-medium text-center">Earned</p>
          </div>
        </div>
        <div v-else-if="currentTab === 1" class="flex flex-col gap-8 py-12">
          <table class="min-w-full border border-gray-300 divide-y divide-gray-200">
            <thead>
              <tr>
                <th class="px-1 py-3 text-base font-medium tracking-wider text-left uppercase border-b border-gray-300 bg-gray-50 text_gradient">
                  Project Name
                </th>
                <th class="px-1 py-3 text-base font-medium tracking-wider text-left uppercase border-b border-gray-300 bg-gray-50 text_gradient">
                  Wallet Connected
                </th>
                <th class="px-1 py-3 text-base font-medium tracking-wider text-left uppercase border-b border-gray-300 bg-gray-50 text_gradient">
                  Transactions
                </th>
                <th class="px-1 py-3 text-base font-medium tracking-wider text-left uppercase border-b border-gray-300 bg-gray-50 text_gradient">
                  Total Allocated Tokens
                </th>
                <th class="px-1 py-3 text-base font-medium tracking-wider text-left uppercase border-b border-gray-300 bg-gray-50 text_gradient">
                  Remained Tokens
                </th>
                <th class="px-1 py-3 text-base font-medium tracking-wider text-left uppercase border-b border-gray-300 bg-gray-50 text_gradient">
                  Reward Amount
                </th>
                <th class="px-1 py-3 text-base font-medium tracking-wider text-left uppercase border-b border-gray-300 bg-gray-50 text_gradient">
                  Total Participants
                </th>
                
                <th class="px-1 py-3 text-base font-medium tracking-wider text-left uppercase border-b border-gray-300 bg-gray-50 text_gradient">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- Example row -->
              <tr>
                <td class="px-2 py-4 whitespace-nowrap">Project A</td>
                <td class="px-2 py-4 whitespace-nowrap">GARKN....ZUAKVNLN6</td>
                <td class="px-2 py-4 whitespace-nowrap">100,000</td>
                <td class="px-2 py-4 whitespace-nowrap">100,000</td>
                <td class="px-2 py-4 whitespace-nowrap">30,000</td>
                <td class="px-2 py-4 whitespace-nowrap">10</td>
                <td class="px-2 py-4 whitespace-nowrap">500</td>
                <td class="px-2 py-4 whitespace-nowrap">Scheduled</td>
              </tr>
              <tr>
                <td class="px-2 py-4 whitespace-nowrap">Project B</td>
                <td class="px-2 py-4 whitespace-nowrap">GARKN....ZUAKVNLN6</td>
                <td class="px-2 py-4 whitespace-nowrap">30,000</td>
                <td class="px-2 py-4 whitespace-nowrap">30,000</td>
                <td class="px-2 py-4 whitespace-nowrap">30,000</td>
                <td class="px-2 py-4 whitespace-nowrap">10</td>
                <td class="px-2 py-4 whitespace-nowrap">500</td>
                <td class="px-2 py-4 whitespace-nowrap">Ended</td>
              </tr>
              <!-- Add more rows with project details -->
            </tbody>
          </table>
        </div>
        <!-- <div class="flex items-center w-full mt-4 gap-x-6" data-v-933e9cdf="" data-v-0a3af7de="">
          <a href="#"
            class="py-3 mx-auto text-sm font-semibold text-center text-white text-gray-600 bg-gray-100 rounded-full shadow-sm bg_gradient px-14"
            data-v-933e9cdf="" data-v-0a3af7de="">View Activity</a>
        </div> -->
      </div>
      <!-- <section>
        <div class="px-4 py-32">
          <div data-v-2a4902a9="" class="mx-auto max-w-7xl text-start">
            <h1 data-v-2a4902a9="" class="max-w-2xl mr-auto text-3xl font-bold leading-loose tracking-tight text-gray-900 bg-black text_gradient sm:text-5xl">
              Explore Our Airdrops
            </h1>
            <p data-v-2a4902a9="" class="text-base leading-10 text-gray-400">
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
          </div>
        </div>
      </section>
      <section class="px-2 py-0">
        <Carousel />
      </section> -->
      <section>
        <div class="py-32">
          <div class="mx-auto text-center max-w-7xl lg:flex-auto">
            <h1
              class="max-w-2xl mx-auto text-5xl font-bold leading-loose tracking-tight text-gray-900 bg-black text_gradient sm:text-5xl">
              Latest News
            </h1>
            <p class="mt-6 text-base leading-10 text-gray-400">
              Dive into breaking news, insights, and updates about airdrops, cryptocurrencies, and blockchain innovations
              on Dropzey
            </p>
          </div>
          <div class="pt-10 mx-auto max-w-7xl">
            <MediumBlogPost />
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import Carousel from "@/components/Carousel.vue";
import MediumBlogPost from "@/components/Medium-Blog-Post.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import iconImage from "@/assets/iconimage.png";
import {
  // Directives
  VTooltip,
  VClosePopper,
  // Components
  Dropdown,
  Tooltip,
  Menu,
} from "floating-vue";

// const tabs = ["View as Participant", "View as Creator"];
const currentTab = ref(0);
const tabs = [
  { name: "View as Participant", href: "#", current: false },
  { name: "View as Creator", href: "#", current: false },
];

const setTab = (index) => {
  currentTab.value = index;
  tabs.forEach((tab, i) => {
    tab.current = i === index;
  });
};
</script>
<style scoped>
.text_gradient {
  background: linear-gradient(50deg, #0298b1 0.51%, #7bd759 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 60px;
}

.custom-shadow {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1);
}
</style>
