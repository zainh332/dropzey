<template>
  <div class="max-w-7xl mx-auto rounded-3xl shadow-xl my-24 border border-gray-10 py-3 px-4 sm:px-12">
    <div class="justify-center text-center items-center">
      <div class="justify-center flex text-center items-center">
        <img :src="Droplogo" alt="" />
          <div class="">
            <h1 class="text-xl sm:text-3xl font-bold">CashFinance.app</h1>
          </div>
      </div>
      <div class="boldH !text-sm" data-v-122904cf="">
          <h1 data-v-122904cf="">Airdrop Reward: $20</h1>
      </div>
    </div>

    <!-- Connect with Us -->
    <section>
      <img
      class="w-full rounded-3xl py-4 max-w-7xl mx-auto object-cover"
      :src="StepsBanner"
      alt=""
      style="height: 380px;"
            />
      <div class="flex items-center justify-between min-w-[600px]">
          <div class="items-center">
            <!-- <p class="text-1xl font-semibold" style="padding-left: 10px; padding-bottom: 10px;">Connect with Us:</p> -->
            <p class="text-1xl font-semibold" style="padding-left: 10px; padding-bottom: 10px;">Explore Links:</p>
            <div class="flex items-center gap-2" data-v-122904cf="">
                <br>
                    <div class="bg-[#08C] h-8 rounded-[6px] w-8 flex items-center justify-center" data-v-122904cf="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        data-v-122904cf=""
                      >
                        <path
                          d="M15.5507 0.270059C15.5507 0.270059 17.1233 -0.379227 16.9922 1.19761C16.9486 1.8469 16.5554 4.1194 16.2496 6.57743L15.2012 13.8587C15.2012 13.8587 15.1139 14.9254 14.3275 15.1109C13.5412 15.2964 12.3618 14.4616 12.1433 14.2761C11.9686 14.137 8.86704 12.05 7.77491 11.0297C7.46912 10.7514 7.11964 10.1949 7.81859 9.54559L12.4054 4.90785C12.9296 4.3513 13.4538 3.05273 11.2696 4.62957L5.15388 9.03546C5.15388 9.03546 4.45493 9.49921 3.14444 9.08183L0.304956 8.15427C0.304956 8.15427 -0.743463 7.45861 1.04759 6.76292C5.416 4.58316 10.7891 2.35703 15.5507 0.270059Z"
                          fill="white"
                          data-v-122904cf=""
                        ></path>
                      </svg>
                    </div>
                    <div class="bg-[#3057E0] h-8 rounded-[6px] w-8 flex items-center justify-center" data-v-122904cf="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="20"
                        viewBox="0 0 10 20"
                        fill="none"
                        data-v-122904cf=""
                      >
                        <path
                          d="M10 0.141089L7.22185 0.137634C4.52773 0.137634 2.78739 1.972 2.78739 4.81423V6.969H0V10.8683H2.78739L2.78403 19.1376H6.68403L6.68739 10.8683H9.88571L9.88319 6.96986H6.68739V5.14154C6.68739 4.26236 6.88991 3.81759 8.00336 3.81759L9.9916 3.81673L10 0.141089Z"
                          fill="white"
                          data-v-122904cf=""
                        ></path>
                      </svg>
                    </div>
                    <div class="bg-[#DD4B39] h-8 rounded-[6px] w-8 flex items-center justify-center" data-v-122904cf="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="15"
                        viewBox="0 0 19 15"
                        fill="none"
                        data-v-122904cf=""
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.58902 9.72375V4.11193C9.48161 5.04936 10.9474 5.95494 12.681 6.93127C11.2512 7.76598 9.48161 8.70255 7.58902 9.72375ZM18.1365 1.32092C17.81 0.868158 17.2536 0.515723 16.6612 0.399043C14.92 0.0509932 4.05744 0.0500032 2.31719 0.399043C1.84215 0.492783 1.41914 0.719366 1.05577 1.07141C-0.475344 2.56731 0.00443287 10.5893 0.37349 11.8888C0.528682 12.4512 0.729306 12.8569 0.981967 13.1232C1.30749 13.4752 1.75319 13.7176 2.26514 13.8263C3.69878 14.1384 11.0846 14.313 16.6309 13.8732C17.1419 13.7794 17.5942 13.5292 17.951 13.1622C19.3666 11.6723 19.2701 3.19977 18.1365 1.32092Z"
                          fill="white"
                          data-v-122904cf=""
                        ></path>
                      </svg>
                    </div>
                    <div class="bg-[#F85DA7] h-8 rounded-[6px] w-8 flex items-center justify-center" data-v-122904cf="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        data-v-122904cf=""
                      >
                        <path
                          d="M9.9 7.63763C9.9 8.11231 9.75924 8.57633 9.49553 8.971C9.23181 9.36568 8.85698 9.6733 8.41844 9.85495C7.9799 10.0366 7.49734 10.0841 7.03178 9.99152C6.56623 9.89892 6.13859 9.67034 5.80294 9.33469C5.4673 8.99904 5.23872 8.57141 5.14612 8.10585C5.05351 7.6403 5.10104 7.15774 5.28269 6.71919C5.46434 6.28065 5.77195 5.90582 6.16663 5.64211C6.56131 5.37839 7.02533 5.23763 7.5 5.23763C8.1363 5.23836 8.74632 5.49145 9.19625 5.94138C9.64618 6.39131 9.89927 7.00134 9.9 7.63763ZM15 4.33763V10.9376C14.9987 12.0512 14.5558 13.1187 13.7685 13.9061C12.9811 14.6935 11.9135 15.1364 10.8 15.1376H4.2C3.08648 15.1364 2.01892 14.6935 1.23154 13.9061C0.444165 13.1187 0.00126111 12.0512 0 10.9376V4.33763C0.00126111 3.22411 0.444165 2.15656 1.23154 1.36918C2.01892 0.581799 3.08648 0.138895 4.2 0.137634H10.8C11.9135 0.138895 12.9811 0.581799 13.7685 1.36918C14.5558 2.15656 14.9987 3.22411 15 4.33763ZM11.1 7.63763C11.1 6.92562 10.8889 6.2296 10.4933 5.63758C10.0977 5.04556 9.53547 4.58414 8.87766 4.31167C8.21985 4.03919 7.49601 3.9679 6.79768 4.10681C6.09934 4.24571 5.45788 4.58858 4.95442 5.09205C4.45095 5.59552 4.10808 6.23698 3.96917 6.93531C3.83027 7.63364 3.90156 8.35748 4.17403 9.0153C4.44651 9.67311 4.90793 10.2354 5.49995 10.6309C6.09196 11.0265 6.78799 11.2376 7.5 11.2376C8.45445 11.2366 9.3695 10.8569 10.0444 10.182C10.7193 9.50713 11.0989 8.59208 11.1 7.63763ZM12.3 3.73763C12.3 3.55963 12.2472 3.38563 12.1483 3.23762C12.0494 3.08962 11.9089 2.97426 11.7444 2.90614C11.58 2.83802 11.399 2.8202 11.2244 2.85493C11.0498 2.88965 10.8895 2.97537 10.7636 3.10124C10.6377 3.22711 10.552 3.38747 10.5173 3.56205C10.4826 3.73664 10.5004 3.9176 10.5685 4.08205C10.6366 4.2465 10.752 4.38706 10.9 4.48596C11.048 4.58485 11.222 4.63763 11.4 4.63763C11.6387 4.63763 11.8676 4.54281 12.0364 4.37403C12.2052 4.20525 12.3 3.97633 12.3 3.73763Z"
                          fill="white"
                          data-v-122904cf=""
                        ></path>
                      </svg>
                    </div>
                    <div class="bg-[#2F7DA5] h-8 rounded-[6px] w-8 flex items-center justify-center" data-v-122904cf="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        data-v-122904cf=""
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.73623 4.83099V15.1376H0.000281252V4.83099H3.73623ZM9.36793 4.81195V5.41927C9.9133 5.06727 10.5422 4.86263 11.4959 4.86263C14.602 4.86263 15 7.27409 15 9.37484V15.1374H11.2453V9.66207C11.2453 8.74124 10.9158 8.56664 10.3066 8.56664C9.72744 8.56664 9.36793 8.75063 9.36793 9.66207V15.1374H5.61321V4.81195H9.36793ZM1.86797 0.137634C2.89864 0.137634 3.73594 0.975869 3.73594 2.0056C3.73594 3.03532 2.89864 3.87356 1.86796 3.87356C0.838247 3.87356 0 3.03532 0 2.00559C0 0.975877 0.83824 0.137634 1.86797 0.137634Z"
                          fill="white"
                          data-v-122904cf=""
                        ></path>
                      </svg>
                    </div>
            </div>
          </div>  
          <!-- <div class="flex items-center gap-4">
            <img :src="Droplogo" alt="" />
            <div class="">
              <h1 class="text-xl sm:text-3xl font-bold">CashFinance.app</h1>
            </div>
            
          </div> -->
        <div class="flex flex-col gap-4">
          <div
            class="tag border-2 text-md text-[#00000080]/50 font-semibold border-[#00000080]/50 px-3 py-2 text-center rounded-full" data-v-122904cf="">
            Airdrop Ends in 3 Days
          </div>
        </div>
      </div>
    </section>

    <!-- Project Description -->
    <section>
      <div class="">
        <div class="text-md sm:text-lg pb-20 pt-8">
          <p>
            <a class="text-sky-500" href="">CashFinance.App</a> is a beacon of
            disruptive innovation in the blockchain sector, providing a fully
            anonymous financial ecosystem devoid of KYC procedures. Its suite
            encompasses features like a Cryptocurrency Payment Gateway,
            Centralized and Decentralized Exchanges, an ICO Launchpad, a Public
            Blockchain Network, a versatile digital Wallet, and a range of other
            utilities like Crypto Forex Services, DeFi, Tokenizing assets, NFTs,
            and Escrow services for P2P trades. Incorporating the $CFE token, the platform offers fee discounts and
            is set to introduce a token burn strategy to prevent price dumping.
            Currently anchored to the Binance Smart Chain
            <a class="text-sky-500" href="">(BSC)</a> , a transition to the more
            efficient Proof of Stake (PoS) system is envisioned. Additionally,
            the MainNet aims to demystify smart contracts, eliminating the
            necessity for coding expertise. Winners will receive $10 worth of tokens, to be transferred to their wallet
            addresses instantly.
          </p>
          
        </div>
      </div>
    </section>

    <!-- Airdrop Steps -->
    <section>
      <h2 class="text-3xl font-bold mb-5 ">
            Follow the steps to Claim Airdrop
      </h2>
      <div class="flex items-center gap-4 my-5">
        <div class="bg-gray-100 px-8 py-3 text-1xl font-semibold rounded-full w-fit">
          1/4
        </div>
        <p class="text-1xl font-semibold rounded-full w-fit">Steps Left</p>
      </div>
      <p class="text-md sm:text-lg">
        Please complete the following steps to claim your airdrop tokens
      </p>
      <div class="my-10">
        <Steps />
      </div>
    </section>

    <!-- <section>
      <div class="text-md sm:text-lg">
        <p>
          <b>Bonus Rewards:</b> CashFinance.App offers a tiered referral system
          with four stages: BRONZE, SILVER, GOLD, and PLATINUM.
        </p>
        <br />
        <p>
          * To participate in the
          <a class="text-sky-500" href="">CFE ICO Token sale,</a> simply
          register on <a class="text-sky-500" href="">CashFinance.App</a> and
          follow the purchase instructions in the user panel. When using
          decentralized applications (ÐApps), it’s critical to remember that YOU
          are responsible for the security of your digital assets!
          <br />
          Disclaimer: This content is not intended to be financial advice.
          Investors should take the time to research any given product before
          depositing or investing their funds.
        </p>
      </div>
    </section> -->

    <!-- Claim, Share and Next Airdrop button -->
    <section>
      <div class="flex flex-col sm:flex-row items-center gap-x-4 max-w-3xl mt-5">
        <div class="mt-4 flex items-center gap-x-6 w-full" data-v-933e9cdf="">
          <button @click="setAirdrop" class="w-full text-center rounded-full text-gray-600 bg-gray-100 bg_gradient px-14 py-3 text-sm font-semibold text-white shadow-sm">Claim Now</button>
          <!-- <a
            href="#"
            class="w-full text-center rounded-full text-gray-600 bg-gray-100 bg_gradient px-14 py-3 text-sm font-semibold text-white shadow-sm"
            data-v-933e9cdf=""
            >Claim Now</a
          > -->
        </div>
        <div class="mt-4 flex items-center gap-x-6 w-full" data-v-933e9cdf="">
          <a
            href="#"
            class="w-full text-center rounded-full text-gray-600 bg-gray-100 bg_hover_gradient px-14 py-3 text-sm font-semibold hover:text-white shadow-sm"
            data-v-933e9cdf=""
            >Share Airdrop</a
          >
        </div>
        <div class="mt-4 flex items-center gap-x-6 w-full" data-v-933e9cdf="">
          <a
            href="#"
            class="w-full text-center rounded-full text-gray-600 bg-gray-100 bg_hover_gradient px-14 py-3 text-sm font-semibold hover:text-white shadow-sm"
            data-v-933e9cdf=""
            >Next Airdrop</a
          >
        </div>
        
      </div>
      
    </section>

    <!-- Video -->
    <section>
      <div class="pt-10">
        <h1 class="text-center text-xl sm:text-3xl font-bold mt-10">
          New CashFinance - Video
        </h1>
        <img
          class="w-full max-w-5xl mx-auto my-10"
          src="@/assets/image13.png"
          alt=""
        />
      </div>
    </section>
  </div>

  <!-- Ending Soon Airdrops -->
  <section>
    <div class="py-24 px-4">
      <div class="max-w-5xl mx-auto text-center">
        <h1
          class="max-w-2xl mx-auto text_gradient leading-loose bg-black text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        >
          Ending Soon
        </h1>
        <p class="mt-6 text-base leading-10 text-gray-400">
          There are many variations of passages of Lorem Ipsum available, but
          the majority.
        </p>
      </div>
      <div class="max-w-7xl mx-auto py-10">
        <Card />
      </div>
      <div class="text-center">
        <button
          class="border border-[#0298B1] rounded-full py-2 px-10 font-semibold font-gradient"
        >
          Explore Now
        </button>
      </div>
    </div>
  </section>


  <!--Modal-->
  <TransitionRoot as="template" :show="claim_airdrop_modal">
      <Dialog as="div" class="relative z-10" @close="claim_airdrop_modal = false">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
        </TransitionChild>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-start sm:p-0">
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel class="custom-margin relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:w-full sm:max-w-3xl sm:p-6">
                <!-- <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:w-full sm:max-w-3xl sm:p-6" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"> -->
                <div>
                  <div class="mt-3 text-center sm:mt-5">
                    <h3 class="properHeading">
                      Claim your Airdrop
                    </h3>
                  </div>
                </div>

                <div class="mt-8 flex items-center justify-center gap-8">
                  <div class="flex items-center flex-col gap-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="49"
                      height="48"
                      viewBox="0 0 49 48"
                      fill="none"
                    >
                      <path
                        d="M24.5607 47.5908C37.5946 47.5572 48.1336 36.964 48.1 23.9301C48.0665 10.8962 37.4733 0.357247 24.4394 0.390764C11.4054 0.42428 0.866526 11.0175 0.900042 24.0514C0.933558 37.0854 11.5268 47.6243 24.5607 47.5908Z"
                        fill="#FFD34D"
                      />
                      <path
                        d="M32.6996 20.2907V19.5907C32.6996 18.4907 31.7996 17.5907 30.6996 17.5907H24.1996C24.6996 16.7907 25.2996 15.1907 24.9996 12.0907C24.7996 10.2907 23.5996 8.89065 22.3996 8.49065C21.1996 8.09065 20.0996 8.99065 20.2996 10.1907C20.3996 10.7907 20.6996 11.3907 20.5996 12.2907C20.3996 15.3907 18.5996 17.6907 17.6996 18.7907C17.4996 18.9907 17.2996 19.1907 17.0996 19.3907H16.9996C15.5996 20.8907 15.6996 22.2907 15.6996 22.2907H14.0996V33.5907H16.2996C18.6996 36.1907 21.4996 36.3907 22.8996 36.2907C23.0996 36.3907 23.2996 36.3907 23.4996 36.3907H30.4996C31.5996 36.3907 32.4996 35.4907 32.4996 34.3907V33.6907C32.4996 32.5907 31.5996 31.6907 30.4996 31.6907C31.5996 31.6907 32.4996 30.7907 32.4996 29.6907V28.9907C32.4996 27.8907 31.5996 26.9907 30.4996 26.9907C31.5996 26.9907 32.8996 26.0907 32.8996 24.9907V24.2907C32.8996 23.1907 31.5996 22.2907 30.4996 22.2907C31.7996 22.2907 32.6996 21.3907 32.6996 20.2907Z"
                        fill="white"
                      />
                    </svg>
                    <span class="vote">Upvote</span>
                  </div>
                  <div class="flex items-center flex-col gap-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="49"
                      height="48"
                      viewBox="0 0 49 48"
                      fill="none"
                    >
                      <path
                        d="M24.5607 47.5908C37.5946 47.5572 48.1336 36.964 48.1 23.9301C48.0665 10.8962 37.4733 0.357247 24.4394 0.390764C11.4054 0.42428 0.866526 11.0175 0.900042 24.0514C0.933558 37.0854 11.5268 47.6243 24.5607 47.5908Z"
                        fill="#FFD34D"
                      />
                      <path
                        d="M15.2999 26.0926L15.2999 26.7926C15.2999 27.8926 16.1999 28.7926 17.2999 28.7926L23.7999 28.7926C23.2999 29.5926 22.6999 31.1926 22.9999 34.2926C23.1999 36.0926 24.3999 37.4926 25.5999 37.8926C26.7999 38.2926 27.8999 37.3926 27.6999 36.1926C27.5999 35.5926 27.2999 34.9926 27.3999 34.0926C27.5999 30.9926 29.3999 28.6926 30.2999 27.5926C30.4999 27.3926 30.6999 27.1926 30.8999 26.9926L30.9999 26.9926C32.3999 25.4926 32.2999 24.0926 32.2999 24.0926L33.8999 24.0926L33.8999 12.7926L31.6999 12.7926C29.2999 10.1926 26.4999 9.99261 25.0999 10.0926C24.8999 9.99261 24.6999 9.9926 24.4999 9.9926L17.4999 9.9926C16.3999 9.9926 15.4999 10.8926 15.4999 11.9926L15.4999 12.6926C15.4999 13.7926 16.3999 14.6926 17.4999 14.6926C16.3999 14.6926 15.4999 15.5926 15.4999 16.6926L15.4999 17.3926C15.4999 18.4926 16.3999 19.3926 17.4999 19.3926C16.3999 19.3926 15.0999 20.2926 15.0999 21.3926L15.0999 22.0926C15.0999 23.1926 16.3999 24.0926 17.4999 24.0926C16.1999 24.0926 15.2999 24.9926 15.2999 26.0926Z"
                        fill="white"
                      />
                    </svg>
                    <span class="vote">Downvote</span>
                  </div>
                </div>

                <div class="mt-5 sm:mt-6 flex">
                  <button type="button" class="btnClaim mx-auto" @click="open = false">
                    Claim Airdrop
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
  </TransitionRoot>
  <Footer />
</template>
<script setup>
import logoFire from "@/assets/Frame 40.svg";
import Droplogo from "@/assets/dropLogo.png";
import NewsCard2 from "@/components/NewsCard2.vue";
import StepsBanner from "@/assets/image 12.png";
import Steps from "@/components/Steps.vue";
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";
import dropLogo from "@/assets/dropLogo.png";
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/24/outline";

const claim_airdrop_modal = ref(false);

const setAirdrop = () => {
  claim_airdrop_modal.value = true;
};

</script>
<style scoped>
.text_gradient {
  background: linear-gradient(90deg, #0298b1 0.51%, #7bd759 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 50px;
}

.boldH {
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 200% */
}

.properHeading {
  color: #000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.btnClaim {
  border-radius: 30px;
  background: linear-gradient(90deg, #0298b1 0%, #7bd759 100%);
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  padding: 12px 60px;
  line-height: normal;
}

.successBtnClaim {
  background: linear-gradient(90deg, #0298b1 0%, #7bd759 100%);
  color: #fff;
  display: inline-flex;
  padding: 16px 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
}

.modalBtn {
  display: inline-flex;
  padding: 16px 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: #f2f2f2;
}

.vote {
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
.custom-margin {
  margin-top: 5rem; /* Adjust this value */
  margin-bottom: 5rem; /* Adjust this value */
}


</style>
