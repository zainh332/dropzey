<template>
  <div>
    <div class="mx-auto max-w-7xl">
      <div class="py-12 text-center">
        <!-- <img
          class="object-cover mx-auto rounded-full w-28 h-28"
          src="https://plus.unsplash.com/premium_photo-1679750867619-6f6e57fc8762?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        /> -->
        <img id="profilePic1" :disabled="!isEditable" class="object-cover mx-auto rounded-full w-28 h-28" :src="userInfo.img" alt="" @click="selectProfilePic" />
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
            id="profilePic2" 
            class="object-cover w-12 h-12 ml-auto rounded-full sm:w-24 sm:h-24"
            :src="userInfo.img"
            alt=""
            @click="selectProfilePic"
            :disabled="!isEditable"
          />
        </div>
        <form id="this_user_form" >
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
            <input :readonly="!isEditable" v-model="userInfo.name" class="border border-gray-300 rounded-md py-1.5 px-2 w-[50%]" type="text" required />
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
            <input :readonly="!isEditable" v-model="userInfo.email" class="border border-gray-300 rounded-md py-1.5 px-2 w-[50%]" type="email" required />
            <!-- <p class="text-sm">Zain Haider</p> -->
          </div>
          <div v-show="isEditable" class="flex flex-col justify-start gap-6 py-4 border-t sm:flex-row sm:items-center">
            <h1 class="text-base flex items-center gap-2 font-medium mb-2 mt-2 w-[20%]">
              Password
              <svg
                  v-tooltip="'Enter your password (Should contain special characters like !@#$ and numbers and at least one uppercase)'"
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
            <input id="profilePass" @input="vPass('profilePass')" class="border border-gray-300 rounded-md py-1.5 px-2 w-[50%]" type="password" />
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
            <input  :max="DATE_MAX" :readonly="!isEditable" v-model="userInfo.dob" class="border border-gray-300 rounded-md py-1.5 px-2 w-[50%]" type="date" required />
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
            <input :readonly="!isEditable" v-model="userInfo.phone" class="border border-gray-300 rounded-md py-1.5 px-2 w-[50%]" type="number" required/>
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
            <select :readonly="!isEditable" v-model="userInfo.gender" class="border border-gray-300 rounded-md py-1.5 px-2 w-[50%]" required>
              <option value="male">Male</option>
              <option value="female">Female</option>
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
            <select  :readonly="!isEditable" v-model="userInfo.country" class="border border-gray-300 rounded-md py-1.5 px-2 w-[50%]" required>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
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
            <button @click="connectWal" v-if="!isWalletConnected" class="flex items-center justify-center gap-2 border bg-gray-100 rounded-full px-10 py-1.5 w-full sm:w-auto">
              <span class="font-medium text-gray-500 text-s">
                Connect Wallet
              </span>
            </button>
            <!-- When wallet is connected -->
            <p class="overflow-scroll text-sm example" v-else>
              {{ userInfo.walletAddress }}
            </p>  
          </div>
        </div>

        <div class="mt-12">
          <div>
            <div class="hidden sm:block">
              <div id="thisSocials" class="flex flex-col justify-between gap-6 py-6 sm:flex-row sm:items-center">
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
                  <button v-if="socials.twitter == ''"  @click="authtwitter" class="flex items-center justify-center gap-2 border bg-gray-100 bg_hover_gradient hover:text-white shadow-sm rounded-full px-10 py-1.5 w-full sm:w-auto">
                    <span class="font-medium text-gray-100 text-s">
                      Twitter
                    </span>
                  </button>
                  <button v-else style="background:limegreen;color:white" class="flex items-center justify-center gap-2 border bg-gray-100 hover:text-white shadow-sm rounded-full px-10 py-1.5 w-full sm:w-auto">
                    <span class="font-medium text-gray-100 text-s">
                      Twitter
                    </span>
                  </button>
                  <button v-if="socials.discord == ''"  @click="authDiscord" class="flex items-center justify-center gap-2 border bg-gray-100 bg_hover_gradient hover:text-white shadow-sm rounded-full px-10 py-1.5 w-full sm:w-auto">
                    <span class="font-medium text-gray-100 text-s">
                      Discord
                    </span>
                  </button>
                  <button v-else style="background:limegreen;color:white" class="flex items-center justify-center gap-2 border bg-gray-100 hover:text-white shadow-sm rounded-full px-10 py-1.5 w-full sm:w-auto">
                    <span class="font-medium text-gray-100 text-s">
                      Discord
                    </span>
                  </button>
                    <button id="telegram_add_button" v-if="socials.telegram == ''"  @click="authTelegram" class="flex items-center justify-center gap-2 border bg-gray-100 bg_hover_gradient hover:text-white shadow-sm rounded-full px-10 py-1.5 w-full sm:w-auto">
                    <span class="font-medium text-gray-100 text-s">
                      Telegram
                    </span>
                  </button>
                  <button v-else style="background:limegreen;color:white" class="flex items-center justify-center gap-2 border bg-gray-100 hover:text-white shadow-sm rounded-full px-10 py-1.5 w-full sm:w-auto">
                    <span class="font-medium text-gray-100 text-s">
                      Telegram
                    </span>
                  </button>
                  <button v-if="socials.google == ''"  @click="authGoogle" class="flex items-center justify-center gap-2 border bg-gray-100 bg_hover_gradient hover:text-white shadow-sm rounded-full px-10 py-1.5 w-full sm:w-auto">
                    <span class="font-medium text-gray-100 text-s">
                      Youtube
                    </span>
                  </button>
                  <button v-else style="background:limegreen;color:white" class="flex items-center justify-center gap-2 border bg-gray-100 hover:text-white shadow-sm rounded-full px-10 py-1.5 w-full sm:w-auto">
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
        
        <div class='mt-12'>
          <div>
            <div class="hidden sm:block">
              <div class="flex flex-col justify-between gap-6 py-6 sm:flex-row sm:items-center">
                <div class="flex flex-col justify-start gap-6 sm:flex-row sm:items-center">
                        <button @click="toggleEdit" class="flex items-center justify-center gap-2 border bg_gradient bg_hover_gradient text-white hover:text-white shadow-sm rounded-full px-10 py-1.5 w-full sm:w-auto">
                            <span class="font-medium text-gray-100 text-s">
                              {{ buttonAction }}
                            </span>
                        </button>
                        <button type="submit" v-show="isEditable"  class="flex items-center justify-center gap-2 border bg-primary text-white bg_hover_gradient hover:text-white shadow-sm rounded-full px-10 py-1.5 w-full sm:w-auto">
                            <span class="font-medium text-gray-100 text-s">
                              {{ saveProfileStatus }}
                            </span>
                        </button>
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
                {{userInfo.airdroped}}
              </h1>
              <p class="text-2xl font-medium text-center">Airdrop Participated</p>
            </div>
            <div class="w-full px-4 py-8 border rounded-xl">
              <h1
                class="max-w-2xl mx-auto text-xl font-bold leading-loose tracking-tight text-center text-gray-900 bg-black text_gradient sm:text-3xl">
                ${{userInfo.earned}}
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
                <tr v-for="(air, index) in paginatedTx()" :key="index" >
                      <td class="px-2 py-4 whitespace-nowrap">{{air.name}}</td>
                      <td class="px-2 py-4 whitespace-nowrap">{{ fAddr(JSON.parse(air.asset).issuer, 5) }}</td>
                      <td class="px-2 py-4 whitespace-nowrap">{{ air.transactions_count.toLocaleString() }}</td>
                      <td class="px-2 py-4 whitespace-nowrap">{{ (air.amount/1E7).toLocaleString() }}</td>
                      <td class="px-2 py-4 whitespace-nowrap">{{ (air.balance/1E7).toLocaleString() }}</td>
                      <td class="px-2 py-4 whitespace-nowrap">{{ (air.reward_amount/1E7).toLocaleString() }}</td>
                      <td class="px-2 py-4 whitespace-nowrap">{{ air.participants.toLocaleString() }}</td>
                      <td class="px-2 py-4 whitespace-nowrap">{{ air.status }}</td>
                 </tr>
                <div style="margin-top: 40px;">
                  <button style="margin-right: 10px;" @click="prevPage" v-show="!(currentPage === 1)">Previous</button>
                  <button @click="nextPage" v-show="!(currentPage === totalPages())">Next</button>
                </div>
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
    </form>
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
  </div>
    <Footer />
  </div>
</template>
<script setup>
import Carousel from "@/components/Carousel.vue";
import MediumBlogPost from "@/components/Medium-Blog-Post.vue";
import Footer from "@/components/Footer.vue";
import { reactive, ref } from "vue";
import iconImage from "@/assets/iconimage.png";
import {
    getPublicKey,
} from "@stellar/freighter-api";
import {
  // Directives
  VTooltip,
  VClosePopper,
  // Components
  Dropdown,
  Tooltip,
  Menu,
} from "floating-vue";
import {getWallet, validatePass, E, getCookie, fDate, selectImage, authLogin, onRender} from "../utils/utils"
import {getProfile} from "../utils/api"
import {fAddr} from "../utils/utils"
import {API_URL, MAX_SIZE_EXCEEDED, FIREBASES_CONFIG, DISCORD_REDIRECT_URI, GOOGLE_CLIENT_ID} from "../utils/constant"
import Swal from 'sweetalert2';
import axios from 'axios';
import { TwitterAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { googleSdkLoaded } from "vue3-google-login";

//// Initialize Firebase
const app = initializeApp(FIREBASES_CONFIG);
const DATE_MAX =  (new Date().toISOString().split('T')[0]);

const others = ref([])
const currentPage = ref(1)
const pageSize = ref(20)
const currentTab = ref(0);
const tabs = [
  { name: "View as Participant", href: "#", current: false },
  { name: "View as Creator", href: "#", current: false },
];
const userInfo = reactive({
  name:"",
  email:"",
  country:"",
  dob:"",
  phone:"",
  gender:"",
  img:"https://dropzey.com/public/build/assets/iconimage-8e87896a.png",
  airdroped:0,
  earned:0,
  walletAddress:"",
})
const socials = ref({
  twitter:"",
  discord:"",
  telegram:"",
  google:"",
})

let uInfo = null;
const isWalletConnected = ref(false)
const buttonAction = ref("Edit Profile")
const isEditable = ref(false)
const saveProfileStatus = ref("Save Profile")
const isPassFlag = ref(false)
const canSavePic = ref(false)
const imgObj = ref({
  img:null,
  obj:null
})


const setTab = (index) => {
  currentTab.value = index;
  tabs.forEach((tab, i) => {
    tab.current = i === index;
  });
};

//for pagination
const paginatedTx = () => {
      const startIndex = (currentPage.value - 1) * pageSize.value;
      const endIndex = startIndex + pageSize.value;
      return others.value.slice(startIndex, endIndex);
}
const totalPages = () => {
    return Math.ceil(others.value.length / pageSize.value);
}
const nextPage = () => {
      if (currentPage.value < totalPages()) {
        currentPage.value++;
      }
}
const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
}

//to toggle editing
const toggleEdit = () => {
  isEditable.value = !isEditable.value
  if(isEditable.value) {
    buttonAction.value = "Cancel"
  }
  else {
    buttonAction.value = "Edit Profile"
    //reset the values
    if(uInfo != null){
      userInfo['name'] = uInfo['name']
      userInfo['email'] = uInfo['email']
      userInfo['dob'] = fDate(uInfo['dob'])
      userInfo['phone'] = uInfo['phone']
      userInfo['gender'] = uInfo['gender']
      userInfo['img'] = uInfo['img'] + '?id=' + Math.random() * 100;
      userInfo['country'] = uInfo['country']
    }
    canSavePic.value = false
  }
}

const setupProfile = async () => {
    //get wallet connection
    const tmp = await getWallet()
    if(tmp !== false) {
      isWalletConnected.value = true
      userInfo.walletAddress = tmp
    }
    else{
      isWalletConnected.value = false
      userInfo.walletAddress = ""
    }

    //get user info
    uInfo = (await getProfile()) || null
    if(uInfo !== null) {    
      if(uInfo['token']) {   
          //has gotten info
          userInfo['name'] = uInfo['name']
          userInfo['email'] = uInfo['email']
          userInfo['dob'] = fDate(uInfo['dob'])
          userInfo['phone'] = uInfo['phone']
          userInfo['gender'] = uInfo['gender']
          userInfo['img'] = uInfo['img']
          userInfo['country'] = uInfo['country']
          socials.value['twitter'] = uInfo['twitter'] 
          socials.value['discord'] = uInfo['discord']
          socials.value['telegram'] = uInfo['telegram']   
          socials.value['google'] = uInfo['google']    
          //creator section
          others.value = uInfo['creator']    
          //set upprofile pic
          setUpProfilePic()
      }
      else {
        //log out
        speak('logg', false)
        Swal.fire({
          icon: 'error',
          title: 'Session Error!',
          text: 'Your login session has expired.',
        });
      }
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Network Error!',
        text: 'Please refresh this page',
      });
    }
}

//to save profile
const saveProfile = async () => {
    //only save details that have changed and not empty spaces
    saveProfileStatus.value = "Saving..."
    const formData = new FormData();
    for(const item in userInfo) {
      if(userInfo[item] != "") {
          formData.append(item, userInfo[item])
      }
    }
    //add password if change
    const pass = E('profilePass').value
    isPassFlag.value = validatePass('profilePass')
    if(!isPassFlag) {
      Swal.fire({
          icon: 'error',
          title: 'Password Error!',
          text: 'Please input a valid password',
      }); 
      return;
    }
    else if(pass != ""){
      formData.append('password', pass)
    }
    if(canSavePic.value) {  
      formData.append('image', imgObj.value.img)
    }
    formData.append('token', getCookie('USER'))
    formData.append('USER_AUTH', getCookie('USER_F'))
    axios.post(`${API_URL}api.php?type=modify_user`, formData, {
      headers: {
        'X-CSRF-TOKEN': window.Laravel.csrfToken,
        'Content-Type': 'multipart/form-data'
      }
    })
    .then((response) => {  
      saveProfileStatus.value = "Save Profile"
      if(response.data.status) {
          if(response.data.email_status === false) {
            Swal.fire({
              icon: 'error',
              title: 'Email Error!',
              text: 'Email already belongs to another user',
            });
          }
          else {
            //update uinfo
            if(uInfo != null) {
              for(const item in userInfo) {
                if(userInfo[item] != uInfo[item] && userInfo[item] != "") {
                    uInfo[item] = userInfo[item];
                }
              }
            }
            if(response.data.img_status === false){
              Swal.fire({
                icon: 'error',
                title: 'Profile Pic Error!',
                text: 'Unable to change profile picture',
              });
            }
            else{
              Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: "Profile updated successfully",
              });
            }
          }
      }
      else {
        if(response.data.AUTH === false) {
            Swal.fire({
            icon: 'error',
            title: 'Session Error!',
            text: 'Session has expired. Please login again',
          });
          speak('logg', false)
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Something went wrong',
          });
        }
      }
    })
    .catch((error) => {
      saveProfileStatus.value = "Save Profile"
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'An error occurred while processing your request.',
      });
      console.error(error); // Log the error to the console for debugging
    });
}
onRender('this_user_form', () => {
  E('this_user_form').onsubmit = (event) => {
    event.preventDefault()
    if(isEditable.value) {
       saveProfile()
    }
  }
})

hear('logg', (status) => {
  if(!status) {
    //redirect to home page
    window.location = './'
  }
})
hear('connected', async (status) => {
    if(status) {
      //has been connected, do the needfull
      isWalletConnected.value = true
      userInfo.walletAddress = await getPublicKey()
    }
    else {
      isWalletConnected.value = false
     }
})

const setUpProfilePic = () => {
  imgObj.value.obj = selectImage((res) => {
      if(res === MAX_SIZE_EXCEEDED) {
        //max file size
        Swal.fire({
          icon: 'error',
          title: 'Image Error!',
          text: 'Max size allowed is 5mb',
        });
      }
      else if(res == ""){
        //user selected none
        canSavePic.value = false
      }
      else {
        canSavePic.value = true
        E('profilePic1').src = URL.createObjectURL(res)
        E('profilePic2').src = URL.createObjectURL(res)
        imgObj.value.img = res;
      }
  })
}
const selectProfilePic = () => {
  if(isEditable.value) {
    imgObj.value.obj.click()
  }
}
const connectWal = () => {
  speak('toggle_wallet', true)
}
//connect with twitter
const authtwitter = async () => {
  const provider = new TwitterAuthProvider(); 
  const auth = getAuth();
  signInWithPopup(auth, provider)
  .then(async (result) => { console.log(result)
    const user = result.user;
    //save back to db
    const formData = authLogin((new FormData()));
    try{
        const res = await axios.post(API_URL + 'api.php?type=twitter_auth&code=' + user.accessToken, formData, {
            headers: {
            'X-CSRF-TOKEN': window.Laravel.csrfToken,
            }
        })
        if(res.status) {
            const resp = res.data; console.log(resp)
            if(resp.status && !resp.code_status) {
              Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: "Twitter connected successfully",
              });
              //update the user info
              uInfo['twitter'] = socials.value['twitter'] = user.accessCode;
            }
            else if(resp.status === false){
              Swal.fire({
                icon: 'error',
                title: 'Twitter Error!',
                text: 'Something went wrong',
              });
            }
            else if(resp.AUTH === false){
              Swal.fire({
                icon: 'error',
                title: 'Session Error!',
                text: 'Your session has expired, please login again',
              });
              speak('logg', false)
            }
        }
        else {
            //network error
            Swal.fire({
                icon: 'error',
                title: 'Network Error!',
                text: 'Check your connection and try again',
            });
        }
    }
    catch(e) {
      Swal.fire({
                icon: 'error',
                title: 'Network Error!',
                text: 'Check your connection and try again',
            });
    }
  }).catch((error) => {
     console.log(error)
  });
}

const authDiscord = () => {
  const redirectUri = DISCORD_REDIRECT_URI + `&token=${getCookie('USER')}&scope=guilds.members.read+guilds+identify`
  console.log(redirectUri)
  window.location = redirectUri
}
const authTelegram = () => {
  if(telegramBut != null){
      E('telegram_add_button').innerHTML = ""
      E('telegram_add_button').appendChild(telegramBut)
      //append the handler
      window.onTelegramAuth = async (user) => {
        //save back to db
        const formData = authLogin((new FormData()));
        try{
            const res = await axios.post(API_URL + 'api.php?type=telegram_auth&code=' + user.id, formData, {
                headers: {
                'X-CSRF-TOKEN': window.Laravel.csrfToken,
                }
            })
            if(res.status) {
                const resp = res.data; console.log(resp)
                if(resp.status && !resp.code_status) {
                  Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: "Telegram connected successfully",
                  });
                  //update the user info
                  uInfo['telegram'] = socials.value['telegram'] = user.accessCode;
                }
                else if(resp.status === false){
                  Swal.fire({
                    icon: 'error',
                    title: 'Telegram Error!',
                    text: 'Something went wrong',
                  });
                }
                else if(resp.AUTH === false){
                  Swal.fire({
                    icon: 'error',
                    title: 'Session Error!',
                    text: 'Your session has expired, please login again',
                  });
                  speak('logg', false)
                }
            }
            else {
                //network error
                Swal.fire({
                    icon: 'error',
                    title: 'Network Error!',
                    text: 'Check your connection and try again',
                });
            }
        }
        catch(e) {
          Swal.fire({
                    icon: 'error',
                    title: 'Network Error!',
                    text: 'Check your connection and try again',
                });
        }
      }
  }
  else {
    Swal.fire({
        icon: 'error',
        title: 'Telegram Network Error!',
        text: 'Please refresh this page',
    });
  }
}
const authGoogle = () => {
  googleSdkLoaded(google => {
        google.accounts.oauth2
          .initCodeClient({
            client_id: GOOGLE_CLIENT_ID,
            scope: "email profile openid https://www.googleapis.com/auth/youtube",
            callback: res => {  
              if(res.code != "") {
                  const formData = new FormData();
                  formData.append('code', res.code);
                  formData.append('token', getCookie('USER'));
                  //authenticate
                  axios.post(`${API_URL}api.php?type=google_auth_v1`, formData, {
                    headers: {
                      'X-CSRF-TOKEN': window.Laravel.csrfToken,
                    }
                  })
                  .then((response) => {  
                    Swal.fire({
                      icon: 'success',
                      title: 'Success!',
                      text: "Youtube connected successfully",
                    });
                    //update the user info
                    uInfo['google'] = socials.value['google'] = response.data.token
                  })
                  .catch(err => {
                    Swal.fire({
                      icon: 'error',
                      title: 'Error!',
                      text: 'Network error',
                    });
                  })
              }
            },
            error_callback : error => {
              Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: error.message,
              });
            }
          })
          .requestCode();
  })
}
const vPass = validatePass
setupProfile()


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
