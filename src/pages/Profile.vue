<template>
  <div>
    <div class="max-w-7xl mx-auto">
      <div class="text-center py-12">
        <!-- <img
          class="w-28 h-28 mx-auto object-cover rounded-full"
          src="https://plus.unsplash.com/premium_photo-1679750867619-6f6e57fc8762?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        /> -->
        <img class="w-28 h-28 mx-auto object-cover rounded-full" :src="iconImage" alt="" />
        <h1 class="text-xl font-bold mt-2">Welcome</h1>
      </div>
      <div class="custom-shadow rounded-xl px-4 sm:px-12 py-12">
        <h1 class="text-xl font-bold mt-2">Basic Info</h1>
        <!-- <p class="text-xs">
          Some info may be visible to other people using Google services.
          <a class="text-sky-500 font-medium" href="">Learn more</a>
        </p> -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-6">
          <!-- <div class="flex flex-col sm:flex-row sm:items-center justify-start gap-6">
            <h1 class="text-base font-medium">Profile Picture</h1>
            <p class="text-sm">
              A profile picture helps personalize your account
            </p>
          </div>
          <img
            class="w-12 sm:w-24 h-12 sm:h-24 ml-auto object-cover rounded-full"
            src="https://plus.unsplash.com/premium_photo-1679750867619-6f6e57fc8762?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          /> -->
        </div>
        <div class="">
          <div class="flex flex-col sm:flex-row sm:items-center justify-start gap-6 border-t py-4">
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
          <div class="flex flex-col sm:flex-row sm:items-center justify-start gap-6 border-t py-4">
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
          <div class="flex flex-col sm:flex-row sm:items-center justify-start gap-6 border-t py-4">
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
            <!-- <p class="text-sm">Pakistan</p> -->
          </div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-start gap-6 border-t border-b py-4">
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
            <!-- <button class="flex items-center justify-center gap-2 border bg-gray-100 rounded-full px-10 py-1.5 w-full sm:w-auto">
              <span class="text-s text-gray-500 font-medium">
                Reserve Tokens
              </span>
            </button> -->

            <!-- When wallet is connected -->
            <p class="text-sm overflow-scroll example">
              GANXQETJKJKPOIYRHNMALK759342HAKNAQWERTYUIOPLK
            </p>
          </div>
        </div>

        <div class="mt-12">
          <div>
            <div class="hidden sm:block">
              <div class=" ">
                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
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
        <div v-if="currentTab === 0" class="flex flex-col sm:flex-row items-center gap-6 py-12">
          <div class="border rounded-xl py-8 w-full px-4">
            <h1
              class="max-w-2xl mx-auto text-center text_gradient leading-loose bg-black text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              12
            </h1>
            <p class="text-2xl font-medium text-center">Airdrop Participated</p>
          </div>
          <div class="border rounded-xl py-8 w-full px-4">
            <h1
              class="max-w-2xl mx-auto text-center text_gradient leading-loose bg-black text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              $400
            </h1>
            <p class="text-2xl font-medium text-center">Earned</p>
          </div>
        </div>
        <div v-else-if="currentTab === 1" class="flex flex-col gap-8 py-12">
          <!-- <MinAirdrop />
          <MinAirdrop />
          <MinAirdrop />
          <MinAirdrop />
          <MinAirdrop /> -->
          <table class="min-w-full divide-y divide-gray-200 border border-gray-300">
            <thead>
              <tr>
                <th class="px-2 py-3 bg-gray-50 text_gradient text-left text-base font-medium uppercase tracking-wider border-b border-gray-300">
                  Project Name
                </th>
                <th class="px-2 py-3 bg-gray-50 text_gradient text-left text-base font-medium uppercase tracking-wider border-b border-gray-300">
                  Total Allocated Tokens
                </th>
                <th class="px-2 py-3 bg-gray-50 text_gradient text-left text-base font-medium uppercase tracking-wider border-b border-gray-300">
                  Remained Tokens
                </th>
                <th class="px-2 py-3 bg-gray-50 text_gradient text-left text-base font-medium uppercase tracking-wider border-b border-gray-300">
                  Reward Amount
                </th>
                <th class="px-2 py-3 bg-gray-50 text_gradient text-left text-base font-medium uppercase tracking-wider border-b border-gray-300">
                  Total Participants
                </th>
                <th class="px-2 py-3 bg-gray-50 text_gradient text-left text-base font-medium uppercase tracking-wider border-b border-gray-300">
                  Aidrop Start Date
                </th>
                <th class="px-2 py-3 bg-gray-50 text_gradient text-left text-base font-medium uppercase tracking-wider border-b border-gray-300">
                  Aidrop End Date
                </th>
                <th class="px-2 py-3 bg-gray-50 text_gradient text-left text-base font-medium uppercase tracking-wider border-b border-gray-300">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- Example row -->
              <tr>
                <td class="px-2 py-4 whitespace-nowrap">Project A</td>
                <td class="px-2 py-4 whitespace-nowrap">100,000</td>
                <td class="px-2 py-4 whitespace-nowrap">30,000</td>
                <td class="px-2 py-4 whitespace-nowrap">10</td>
                <td class="px-2 py-4 whitespace-nowrap">500</td>
                <td class="px-2 py-4 whitespace-nowrap">01/01/2020</td>
                <td class="px-2 py-4 whitespace-nowrap">02/01/2020</td>
                <td class="px-2 py-4 whitespace-nowrap">Scheduled</td>
              </tr>
              <tr>
                <td class="px-2 py-4 whitespace-nowrap">Project B</td>
                <td class="px-2 py-4 whitespace-nowrap">100,000</td>
                <td class="px-2 py-4 whitespace-nowrap">30,000</td>
                <td class="px-2 py-4 whitespace-nowrap">10</td>
                <td class="px-2 py-4 whitespace-nowrap">500</td>
                <td class="px-2 py-4 whitespace-nowrap">01/01/2020</td>
                <td class="px-2 py-4 whitespace-nowrap">02/01/2020</td>
                <td class="px-2 py-4 whitespace-nowrap">Ended</td>
              </tr>
              <!-- Add more rows with project details -->
            </tbody>
          </table>
        </div>
        <div class="mt-4 flex items-center gap-x-6 w-full" data-v-933e9cdf="" data-v-0a3af7de="">
          <a href="#"
            class="mx-auto text-center rounded-full text-gray-600 bg-gray-100 bg_gradient px-14 py-3 text-sm font-semibold text-white shadow-sm"
            data-v-933e9cdf="" data-v-0a3af7de="">View Activity</a>
        </div>
      </div>
      <!-- <section>
        <div class="py-32 px-4">
          <div data-v-2a4902a9="" class="max-w-7xl mx-auto text-start">
            <h1 data-v-2a4902a9="" class="max-w-2xl mr-auto text_gradient leading-loose bg-black text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Explore Our Airdrops
            </h1>
            <p data-v-2a4902a9="" class="text-base leading-10 text-gray-400">
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
          </div>
        </div>
      </section>
      <section class="py-0 px-2">
        <Carousel />
      </section> -->
      <section>
        <div class="py-32">
          <div class="max-w-7xl mx-auto text-center lg:flex-auto">
            <h1
              class="max-w-2xl mx-auto text_gradient leading-loose bg-black text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Latest News
            </h1>
            <p class="mt-6 text-base leading-10 text-gray-400">
              Dive into breaking news, insights, and updates about airdrops, cryptocurrencies, and blockchain innovations
              on Dropzey
            </p>
          </div>
          <div class="max-w-7xl mx-auto pt-10">
            <NewsCard />
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import Carousel from "@/components/Carousel.vue";
import NewsCard from "@/components/NewsCard.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import MinAirdrop from "@/components/MinAirdrop.vue";
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
