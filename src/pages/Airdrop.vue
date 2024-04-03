<template>
  <div v-if="isLoaded" class="px-4 py-3 mx-auto my-24 border shadow-xl max-w-7xl rounded-3xl border-gray-10 sm:px-12">
    <div class="items-center justify-center text-center">
      <div class="flex items-center justify-center text-center" >
        <img :src="logo || Droplogo" alt="" style="max-width:90px;max-height:90px" />
          <div class="">
            <h1 class="text-xl font-bold sm:text-3xl">{{ name }}</h1>
          </div>
      </div>
      <div class="boldH !text-sm" data-v-122904cf="">
          <h1 data-v-122904cf="">Airdrop Reward: {{ (reward_amount/1E7).toLocaleString() }} {{ asset_code }}</h1>
      </div>
    </div>

    <!-- Connect with Us -->
    <section>
      <img
      class="object-cover w-full py-4 mx-auto rounded-3xl max-w-7xl"
      :src="cover || banner_img"
      alt=""
      style="height: 380px;"
            />
      <div class="flex items-center justify-between min-w-[600px]">
          <div class="items-center" v-if="airdropLinks.social_links">
            <!-- <p class="font-semibold text-1xl" style="padding-left: 10px; padding-bottom: 10px;">Connect with Us:</p> -->
            <p class="font-semibold text-1xl" style="padding-left: 10px; padding-bottom: 10px;">Explore Links:</p>
            <div class="flex items-center gap-2" data-v-122904cf="">
                <br>
                <div v-show="airdropLinks.social_links.twitter" class="bg-[#08C] h-8 rounded-[6px] w-8 flex items-center justify-center">
              <a :href="airdropLinks.social_links.twitter" target="_blank">
                <img :src="twitterLogo" alt="" style="width:32px; height:32px"/>
              </a>
                </div>
                <div v-show="airdropLinks.social_links.telegram" class="bg-[#08C] h-8 rounded-[6px] w-8 flex items-center justify-center">
                  <a :href="airdropLinks.social_links.telegram"  target="_blank"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M15.5507 0.270059C15.5507 0.270059 17.1233 -0.379227 16.9922 1.19761C16.9486 1.8469 16.5554 4.1194 16.2496 6.57743L15.2012 13.8587C15.2012 13.8587 15.1139 14.9254 14.3275 15.1109C13.5412 15.2964 12.3618 14.4616 12.1433 14.2761C11.9686 14.137 8.86704 12.05 7.77491 11.0297C7.46912 10.7514 7.11964 10.1949 7.81859 9.54559L12.4054 4.90785C12.9296 4.3513 13.4538 3.05273 11.2696 4.62957L5.15388 9.03546C5.15388 9.03546 4.45493 9.49921 3.14444 9.08183L0.304956 8.15427C0.304956 8.15427 -0.743463 7.45861 1.04759 6.76292C5.416 4.58316 10.7891 2.35703 15.5507 0.270059Z"
                      fill="white"
                    />
                  </svg></a>
                </div>
                <div v-show="airdropLinks.social_links.facebook" class="bg-[#3057E0] h-8 rounded-[6px] w-8 flex items-center justify-center">
                  <a :href="airdropLinks.social_links.facebook"  target="_blank"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="20"
                    viewBox="0 0 10 20"
                    fill="none"
                  >
                    <path
                      d="M10 0.141089L7.22185 0.137634C4.52773 0.137634 2.78739 1.972 2.78739 4.81423V6.969H0V10.8683H2.78739L2.78403 19.1376H6.68403L6.68739 10.8683H9.88571L9.88319 6.96986H6.68739V5.14154C6.68739 4.26236 6.88991 3.81759 8.00336 3.81759L9.9916 3.81673L10 0.141089Z"
                      fill="white"
                    />
                  </svg></a>
                </div>
                <div v-show="airdropLinks.social_links.youtube" class="bg-[#DD4B39] h-8 rounded-[6px] w-8 flex items-center justify-center">
                  <a :href="airdropLinks.social_links.youtube"  target="_blank"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="15"
                    viewBox="0 0 19 15"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.58902 9.72375V4.11193C9.48161 5.04936 10.9474 5.95494 12.681 6.93127C11.2512 7.76598 9.48161 8.70255 7.58902 9.72375ZM18.1365 1.32092C17.81 0.868158 17.2536 0.515723 16.6612 0.399043C14.92 0.0509932 4.05744 0.0500032 2.31719 0.399043C1.84215 0.492783 1.41914 0.719366 1.05577 1.07141C-0.475344 2.56731 0.00443287 10.5893 0.37349 11.8888C0.528682 12.4512 0.729306 12.8569 0.981967 13.1232C1.30749 13.4752 1.75319 13.7176 2.26514 13.8263C3.69878 14.1384 11.0846 14.313 16.6309 13.8732C17.1419 13.7794 17.5942 13.5292 17.951 13.1622C19.3666 11.6723 19.2701 3.19977 18.1365 1.32092Z"
                      fill="white"
                    />
                  </svg></a>
                </div>
                <div v-show="airdropLinks.social_links.instagram"  class="bg-[#F85DA7] h-8 rounded-[6px] w-8 flex items-center justify-center">
                  <a :href="airdropLinks.social_links.instagram"  target="_blank"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <path
                      d="M9.9 7.63763C9.9 8.11231 9.75924 8.57633 9.49553 8.971C9.23181 9.36568 8.85698 9.6733 8.41844 9.85495C7.9799 10.0366 7.49734 10.0841 7.03178 9.99152C6.56623 9.89892 6.13859 9.67034 5.80294 9.33469C5.4673 8.99904 5.23872 8.57141 5.14612 8.10585C5.05351 7.6403 5.10104 7.15774 5.28269 6.71919C5.46434 6.28065 5.77195 5.90582 6.16663 5.64211C6.56131 5.37839 7.02533 5.23763 7.5 5.23763C8.1363 5.23836 8.74632 5.49145 9.19625 5.94138C9.64618 6.39131 9.89927 7.00134 9.9 7.63763ZM15 4.33763V10.9376C14.9987 12.0512 14.5558 13.1187 13.7685 13.9061C12.9811 14.6935 11.9135 15.1364 10.8 15.1376H4.2C3.08648 15.1364 2.01892 14.6935 1.23154 13.9061C0.444165 13.1187 0.00126111 12.0512 0 10.9376V4.33763C0.00126111 3.22411 0.444165 2.15656 1.23154 1.36918C2.01892 0.581799 3.08648 0.138895 4.2 0.137634H10.8C11.9135 0.138895 12.9811 0.581799 13.7685 1.36918C14.5558 2.15656 14.9987 3.22411 15 4.33763ZM11.1 7.63763C11.1 6.92562 10.8889 6.2296 10.4933 5.63758C10.0977 5.04556 9.53547 4.58414 8.87766 4.31167C8.21985 4.03919 7.49601 3.9679 6.79768 4.10681C6.09934 4.24571 5.45788 4.58858 4.95442 5.09205C4.45095 5.59552 4.10808 6.23698 3.96917 6.93531C3.83027 7.63364 3.90156 8.35748 4.17403 9.0153C4.44651 9.67311 4.90793 10.2354 5.49995 10.6309C6.09196 11.0265 6.78799 11.2376 7.5 11.2376C8.45445 11.2366 9.3695 10.8569 10.0444 10.182C10.7193 9.50713 11.0989 8.59208 11.1 7.63763ZM12.3 3.73763C12.3 3.55963 12.2472 3.38563 12.1483 3.23762C12.0494 3.08962 11.9089 2.97426 11.7444 2.90614C11.58 2.83802 11.399 2.8202 11.2244 2.85493C11.0498 2.88965 10.8895 2.97537 10.7636 3.10124C10.6377 3.22711 10.552 3.38747 10.5173 3.56205C10.4826 3.73664 10.5004 3.9176 10.5685 4.08205C10.6366 4.2465 10.752 4.38706 10.9 4.48596C11.048 4.58485 11.222 4.63763 11.4 4.63763C11.6387 4.63763 11.8676 4.54281 12.0364 4.37403C12.2052 4.20525 12.3 3.97633 12.3 3.73763Z"
                      fill="white"
                    />
                  </svg></a>
                </div>
                <div v-show="airdropLinks.social_links.discord" 
                  class="bg-[#2F7DA5] h-8 rounded-[6px] w-8 flex items-center justify-center"
                >
                <a :href="airdropLinks.social_links.discord"  target="_blank">
                  <img :src="discordLogo" alt="" style="width:32px; height:32px"/>
                </a>
                </div>
              </div>
          </div>  
          <!-- <div class="flex items-center gap-4">
            <img :src="Droplogo" alt="" />
            <div class="">
              <h1 class="text-xl font-bold sm:text-3xl">CashFinance.app</h1>
            </div>
            
          </div> -->
        <div class="flex flex-col gap-4">
          <div v-if="startDays <= 0"
            class="tag border-2 text-md text-[#00000080]/50 font-semibold border-[#00000080]/50 px-3 py-2 text-center rounded-full" data-v-122904cf="">
            {{ (endDays > 0) ? `Airdrop Ends in ${endDays} ${plural(endDays, 'day', 'days')}` : 'Ended' }}  
          </div>
          <div v-else="startDays <= 0"
            class="tag border-2 text-md text-[#00000080]/50 font-semibold border-[#00000080]/50 px-3 py-2 text-center rounded-full" data-v-122904cf="">
            {{ (startDays > 0) ? `Airdrop starting in ${startDays} ${plural(startDays, 'day', 'days')}` : '' }}  
          </div>
        </div>
      </div>
    </section>

    <!-- Project Description -->
    <section>
      <div class="">
        <div class="pt-8 pb-20 text-md sm:text-lg">
          <p>
            <a class="text-sky-500" :href="website">
              {{ name }}</a> - {{ about }}۔
          </p>
          
        </div>
      </div>
    </section>

    <!-- Airdrop Steps -->
    <section v-if="isWalletConnected && showStages && (endDays > 0) && (startDays <= 0)">
      <div v-if="isEligible"> 
        <h2 class="mb-5 text-3xl font-bold ">
              Follow the steps to Claim Airdrop
        </h2>
        <div class="flex items-center gap-4 my-5">
          <div class="px-8 py-3 font-semibold bg-gray-100 rounded-full text-1xl w-fit">
            {{ stages_no }}/{{ stages_all }}
          </div>
          <p class="font-semibold rounded-full text-1xl w-fit">Steps Left</p>
        </div>
        <p class="text-md sm:text-lg">
          Please complete the following steps to claim your airdrop tokens
        </p>
        <div class="my-10">
          <Steps 
            :stages="other_stages"
            :airdropId="airdropId"
          />
        </div>
      </div>
      <div v-else>
        You are not eligible for this airdrop
      </div>
    </section>
    <center v-else-if="!isWalletConnected" style="margin-top:100px;margin-bottom:100px;width:100%;display:flex;align-items: center;justify-content: center;">
          <button @click="connectWallet" class="flex items-center justify-center gap-2 border bg-gray-100 rounded-full px-10 py-1.5 w-full sm:w-auto">
              <span class="font-medium text-gray-500 text-s">
                Connect Wallet
              </span>
            </button>
    </center>
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
    <section v-if="(endDays > 0)">
      <div class="flex flex-col items-center max-w-3xl mt-5 sm:flex-row gap-x-4">
        <div v-if="isEligible" class="flex items-center w-full mt-4 gap-x-6" data-v-933e9cdf="">
          <button 
          v-if="stages_no == stages_all && !hasClaimed"  
          class="w-full py-3 text-sm font-semibold text-center text-white text-gray-600 bg-gray-100 rounded-full shadow-sm bg_gradient px-14"
          :disabled="claimButtonDisabled"
          @click="claim"
          >{{ claimButton }}</button>
          <a v-else-if="!hasClaimed"
            class="w-full py-3 text-sm font-semibold text-center text-gray-600 bg-gray-100 rounded-full shadow-sm px-14 hover:text-white"
            data-v-933e9cdf=""
            >Claim Now</a>
          <a v-else-if="hasClaimed"
            class="w-full py-3 text-sm font-semibold text-center text-gray-600 bg-gray-100 rounded-full shadow-sm px-14 hover:text-white"
            data-v-933e9cdf=""
          >Claimed</a>
        </div>
        <div class="flex items-center w-full mt-4 gap-x-6" data-v-933e9cdf="">
          <a
            @click="share"
            class="w-full py-3 text-sm font-semibold text-center text-gray-600 bg-gray-100 rounded-full shadow-sm bg_hover_gradient px-14 hover:text-white"
            data-v-933e9cdf=""
            >Share Airdrop</a
          >
        </div>
        <div v-if="nextAirdropId != ''" class="flex items-center w-full mt-4 gap-x-6" data-v-933e9cdf="">
          <a
            @click="nextAirdrop"
            class="w-full py-3 text-sm font-semibold text-center text-gray-600 bg-gray-100 rounded-full shadow-sm bg_hover_gradient px-14 hover:text-white"
            data-v-933e9cdf=""
            >Next Airdrop</a
          >
        </div>
        
      </div>
      
    </section>

    <!-- Video -->
    <section v-if="hasVideo">
      <div class="pt-10">
        <h1 class="mt-10 text-xl font-bold text-center sm:text-3xl">
          New {{ name }} - Video
        </h1>
        <video v-if="intro_video.indexOf('youtube') == -1"
          class="w-full max-w-5xl mx-auto my-10"
          :src="intro_video"
          alt=""
          controls
        />
        <iframe v-else 
          class="w-full max-w-5xl mx-auto my-10"
          style="height:400px"
          :src="intro_video"
        ></iframe>
      </div>
    </section>
  </div>
  <center v-else="!isLoaded" style="margin-top:100px;margin-bottom:100px;width:100%;display:flex;align-items: center;justify-content: center;">
    Loading...
  </center>
  <!-- Ending Soon Airdrops -->
  <section v-if="isLoadedEnd">
    <div class="px-4 py-24">
      <div class="max-w-5xl mx-auto text-center">
        <h1
          class="max-w-2xl mx-auto text-3xl font-bold leading-loose tracking-tight text-gray-900 bg-black text_gradient sm:text-5xl"
        >
          Ending Soon
        </h1>
        <!-- <p class="mt-6 text-base leading-10 text-gray-400">
          There are many variations of passages of Lorem Ipsum available, but
          the majority.
        </p> -->
      </div>
      <div class="py-10 mx-auto max-w-7xl">
        <Card 
          :airdrops="other_airdrops"
        />
      </div>
      <div class="text-center">
        <router-link to="airdrops" class="ml-auto btn">
          <button
          class="border border-[#0298B1] rounded-full py-2 px-10 font-semibold font-gradient"
        >
          Explore Now
        </button>
        </router-link>
        
      </div>
    </div>
  </section>

  <Footer />
  
  <ClaimAirdropModal :open="claim_airdrop_modal"/>
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
import twitterLogo from "@/assets/twitter.png";
import discordLogo from "@/assets/discord.png";
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/24/outline";
import ClaimAirdropModal from "@/components/ClaimAirdrop.vue";
import { getWallet, plural } from "../utils/utils";
import { getAirdropData, getIsAirdropData, getProfile, getAirdropVerifyId } from "../utils/api";
import Swal from 'sweetalert2';
import { getAirdrops, hasTrustline, createTrustline, verifyAsset, claimAirdrop} from "../utils/stellar";


const other_airdrops  = ref([]);
const claim_airdrop_modal  = ref(false);
const name  = ref("");
const about  = ref("");
const website = ref("")
const asset_code  = ref("");
const asset_issuer  = ref("");
const reward_amount  = ref(0);
const logo  = ref("");
const cover  = ref("");
const endDays  = ref("");
const startDays  = ref(0);
const airdropLinks  = ref({});
const intro_video  = ref("");
const hasVideo = ref(false)
const isEligible = ref(true)
const other_stages = ref({})
const airdropId = ref("")
const nextAirdropId = ref("")
const claimButton = ref("Claim Now")
const claimButtonDisabled = ref(false)
const hasClaimed = ref(false)
const stages_no = ref(0)
const stages_all = ref(0)
const isWalletConnected = ref(false)
const isLoaded = ref(false)
const isLoadedEnd = ref(false)
const showStages = ref(false)

/* DOM FUNCTIONS */
const OpenClaimAirdropModal = (e) => {
  claim_airdrop_modal.value = !claim_airdrop_modal.value;
};
const connectWallet = () => {
  speak('toggle_wallet', true)
}
const share = () => {
  if (window.navigator.share) {
        // If Web Share API is supported, share the link
        navigator.share({
            url:  window.location.href
        })
  } else {
        // If Web Share API is not supported, copy the link to clipboard
        const textarea = document.createElement("textarea");
        textarea.value = window.location.href;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        Swal.fire({
          icon: 'success',
          title: 'Link Copied',
          text: '',
        }); 
  }
}
const nextAirdrop = () => {
  if(nextAirdropId.value != "") {
    const uri =  (window.location.protocol + '//' + window.location.hostname) + ((window.location.hostname == 'localhost') ? ":" + window.location.port : "") 
    window.location.href = uri + "/airdrop?id=" + nextAirdropId.value
  }
}
const claim = async () => {
  //check if has established trustline
  const walletkey = await getWallet()
  claimButtonDisabled.value = true
  if(walletkey !== false) {
    claimButton.value = "Verifying asset"
    const tokenId = await verifyAsset({
          code:asset_code.value,
          issuer:asset_issuer.value
    }, walletkey)
    if(tokenId !== false) {
      const trustline = await hasTrustline({
        address:walletkey,
        tokenId:tokenId
      }, walletkey)
      if(trustline !== false) {
          await doClaim()
      }
      else {
        //create trustline
        claimButton.value = "Establishing Trustline"
        const res = await createTrustline({
          code:asset_code.value,
          issuer:asset_issuer.value,
          address:walletkey,
          id:airdropId
        }, walletkey)
        if(res !== false) {
            //has created trustline
            await doClaim()
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Trustline Error!',
            text: 'Unable to establish trustline.',
          });
        }
      }
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Asset Error!',
        text: 'Something is wrong with the asset. Try again latter',
      });
    } 
  }
  claimButtonDisabled.value = false
  claimButton.value = "Claim Now"
  async function doClaim(){
      //fetch the verification id from server
      claimButton.value = "Claiming..."
      const res = await getAirdropVerifyId(airdropId.value)
      if(res !== false) { 
          if(res.verify_id) {
              //do the claim
              const resp = await claimAirdrop({
                id:airdropId.value,
                name:name.value,
                verify_id: res.verify_id,
                amount: reward_amount.value / 1E7,
                asset_code:asset_code.value
              }, walletkey)
              if(resp !== false) {
                if(resp.status == 'done') {
                  Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: "Airdrop claimed successfully",
                  });
                  hasClaimed.value = true
                }
                else if(resp.status == 'authfail') {
                  Swal.fire({
                    icon: 'error',
                    title: 'Veification error!',
                    text: "Unable to authenticate user at this moment. Please try agin later",
                  });
                }
                else if(resp.status == 'lowbal') {
                  Swal.fire({
                    icon: 'error',
                    title: 'Insufficient Airdrop token!',
                    text: `Not enough ${asset_code.value} available for airdrop.`,
                  });
                }
                else if(resp.status == 'claimed') {
                  Swal.fire({
                    icon: 'error',
                    title: 'Double claiming!',
                    text: "This address has already claimed its airdrop.",
                  });
                }
                else if(resp.status == 'ended') {
                  Swal.fire({
                    icon: 'error',
                    title: 'Airdrop ended!',
                    text: "This airdrop has ended already.",
                  });
                }
                else if(resp.status == 'notstart') {
                  Swal.fire({
                    icon: 'error',
                    title: 'Airdrop Error!',
                    text: "This airdrop has not yet started.",
                  });
                }
              }
              else {
                Swal.fire({
                  icon: 'error',
                  title: 'Airdrop Error!',
                  text: 'Unable to claim airdrop. Something went wrong',
                });
              }
          }
          else if(res.verify === false){
              //has not pass verification challenge
              Swal.fire({
                icon: 'error',
                title: 'Verification Error!',
                text: 'You have not passed the social media verification steps',
              });
          }
          else if(res.auth === false){
            Swal.fire({
              icon: 'error',
              title: 'Session Error!',
              text: 'Your session has expired. Please login again',
          });
          }
      }
      else {
        Swal.fire({
            icon: 'error',
            title: 'Network Error!',
            text: 'Please try again later',
        });
      }
  }
}
/* HEARING */
hear('connected', async (status) => {
    if(status) {
      //has been connected, do the needfull
      isWalletConnected.value = true
      //do the setup
      setUp()
    }
    else {
      isWalletConnected.value = false
     }
})
hear('logg', async (status) => {
  showStages.value = false
    if(status) {
      //reload
      setUp()
    }
})
hear('link_verify', (status) => {
    if(status) {
      stages_no.value += 1;
    }
    else{
      stages_no.value -= 1;
    }
})

const setUp = async () => {
  const uri = new URLSearchParams((new URL(window.location.href)).search)
  const wallet = await getWallet() 
  const uInfo = (await getProfile()) || {email:""}
  if(uri.has('id')) {
    if(wallet !== false) {
      isWalletConnected.value = true   
      //fetch the airdrop data
      const res = await getIsAirdropData(uri.get('id'), uInfo.token)
      if(res.status) {
          const airdrop = res.data
          airdropId.value = airdrop.ids
          nextAirdropId.value = airdrop.next_airdrop
          name.value = airdrop.name
          website.value = airdrop.website
          about.value = airdrop.about 
          asset_code.value = JSON.parse(airdrop.asset).code
          asset_issuer.value = JSON.parse(airdrop.asset).issuer
          reward_amount.value = airdrop.reward_amount
          logo.value = airdrop.logo
          cover.value = airdrop.cover
          endDays.value = airdrop.end_day
          startDays.value = airdrop.start_day
          airdropLinks.value = JSON.parse(airdrop.links)
          isEligible.value = ((airdrop.country.toLowerCase() == 'all' || airdrop.country.toLowerCase() == uInfo['country'].toLowerCase())) || ((airdrop.gender.toLowerCase() == 'b' || airdrop.gender.toLowerCase() == uInfo['gender'].toLowerCase()))
          //parse the youtube video link
          const link = JSON.parse(airdrop.links).social_links.intro_link
          if(link.indexOf('youtube') > -1) {
            //youtube video link
            const regex = /[?&]v=([^&]+)/;
            const match = link.match(regex);
            if(match) {
              intro_video.value = "https://www.youtube.com/embed/" + (match ? match[1] : "");
            }
            else {
              intro_video.value = "";
            }
          }
          else {
            intro_video.value = link
          }
          hasVideo.value = (JSON.parse(airdrop.links).social_links.intro_link != "")
          other_stages.value  = airdrop.claim
          //other_stages.value['has_twitter'] = JSON.parse(airdrop.links).require.twitter != ""
          // other_stages.value['has_tweet'] = JSON.parse(airdrop.links).require.twitter_like != ""
          other_stages.value['has_telegram'] = JSON.parse(airdrop.links).require.telegram != ""
          other_stages.value['has_discord'] = JSON.parse(airdrop.links).require.discord != ""
          other_stages.value['has_youtube'] = JSON.parse(airdrop.links).require.youtube != ""
          other_stages.value['has_youtube_video'] = JSON.parse(airdrop.links).require.youtube_video != ""
          other_stages.value['twitter_link'] = JSON.parse(airdrop.links).require.twitter
          other_stages.value['tweet_link'] = JSON.parse(airdrop.links).require.twitter_like
          other_stages.value['telegram_link'] = JSON.parse(airdrop.links).require.telegram
          other_stages.value['discord_link'] = JSON.parse(airdrop.links).require.discord
          other_stages.value['youtube_link'] = JSON.parse(airdrop.links).require.youtube
          other_stages.value['youtube_channel_id'] = JSON.parse(airdrop.links).require.youtube_channel_id
          other_stages.value['youtube_video_link'] = JSON.parse(airdrop.links).require.youtube_video
          stages_no.value = airdrop.claim_no
          stages_all.value = 0
          stages_all.value += ((other_stages.value['has_twitter']) ? 1 : 0) + ((other_stages.value['has_tweet']) ? 1 : 0)
          stages_all.value += ((other_stages.value['has_discord']) ? 1 : 0) + ((other_stages.value['has_youtube']) ? 1 : 0)
          stages_all.value += ((other_stages.value['has_telegram']) ? 1 : 0) + ((other_stages.value['has_youtube_video']) ? 1 : 0)
          hasClaimed.value = airdrop.has_claimed
          isLoaded.value = true
          showStages.value = uInfo.email != ""
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Not found!',
          text: 'This airdrop does not exists',
        }); 
        window.location.href = "/airdrops"
      }
    }
  }
  else {
    //redirect back to airdrop
    window.location.href = "/airdrops"
  }
}
const other_setUp = async () => {
  //fetch all airdrops from onchain
  const wallet = await getWallet()
  if(wallet !== false) { 
    const airdrops = await getAirdrops(wallet)
    if(airdrops.ids) { 
      //fetch their major data
      const res = await getAirdropData(airdrops.ids.join(","), wallet)
      if(res.status) {  
        res.data = res.data.filter(air => air.end_day > 0)
        if(res.data.length > 0) {
          //loop through
          res.data.sort((a, b) => a.end_day - b.end_day);
          other_airdrops.value = res.data.slice(0, 8)
          isLoadedEnd.value = true
        }
      }
    }
   }
}
setUp()
other_setUp()
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
