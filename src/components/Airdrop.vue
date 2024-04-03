<template>
  <div>
    <div class="flex items-center justify-between min-w-full gap-8 overflow-auto airDrop">
      <div class="dropLogo shrink-0" style="width:90px;height:90px">
        <img :src="airdropLogo || dropLogo" alt="" />
      </div>
      <div class="">
        <router-link to="/airdrop">
          <h1 class="heading">{{ airdropName }}</h1>
          </router-link>
        <!-- <h1 class="heading">CashFinance.app</h1> -->
        <p class="titlep">
          <a :href="airdropWebsite" class="title">@{{ airdropName }}</a> - {{ airdropAbout }}۔
        </p>

        <div class="flex items-center gap-8 mt-4">
          <div class="flex items-center gap-4" v-if="JSON.parse(airdropLinks).social_links">
            <div v-show="JSON.parse(airdropLinks).social_links.twitter" class="bg-[#08C] h-8 rounded-[6px] w-8 flex items-center justify-center">
              <a :href="JSON.parse(airdropLinks).social_links.twitter" target="_blank">
                <img :src="twitterLogo" alt="" style="width:32px; height:32px"/>
              </a>
            </div>
            <div v-show="JSON.parse(airdropLinks).social_links.telegram" class="bg-[#08C] h-8 rounded-[6px] w-8 flex items-center justify-center">
              <a :href="JSON.parse(airdropLinks).social_links.telegram"  target="_blank"><svg
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
            <div v-show="JSON.parse(airdropLinks).social_links.facebook" class="bg-[#3057E0] h-8 rounded-[6px] w-8 flex items-center justify-center">
              <a :href="JSON.parse(airdropLinks).social_links.facebook"  target="_blank"><svg
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
            <div v-show="JSON.parse(airdropLinks).social_links.youtube" class="bg-[#DD4B39] h-8 rounded-[6px] w-8 flex items-center justify-center">
              <a :href="JSON.parse(airdropLinks).social_links.youtube"  target="_blank"><svg
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
            <div v-show="JSON.parse(airdropLinks).social_links.instagram"  class="bg-[#F85DA7] h-8 rounded-[6px] w-8 flex items-center justify-center">
              <a :href="JSON.parse(airdropLinks).social_links.instagram"  target="_blank"><svg
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
            <div v-show="JSON.parse(airdropLinks).social_links.discord" 
              class="bg-[#2F7DA5] h-8 rounded-[6px] w-8 flex items-center justify-center"
            >
            <a :href="JSON.parse(airdropLinks).social_links.discord"  target="_blank">
              <img :src="discordLogo" alt="" style="width:32px; height:32px"/>
            </a>
            </div>
          </div>
          <div class="">
            <h1 class="boldH">{{ fNum(airdropTotalToken/1E7, 'long') }} {{ assetCode }}</h1>
          </div>
          <div class="boldH">
            <h1>Participants: {{ airdropUsers.toLocaleString() }}</h1>
          </div>
          <div class="boldH">
            <h1>Airdrop Reward: {{ (airdropRewardAmount/1E7) }} {{ assetCode }}</h1>
          </div>
        </div>

      </div>
      <div class="flex flex-col items-center gap-4">
        <div class="flex items-center gap-2">
          <div
            class="tag border-2 text-[12px] text-[#00000080]/50 font-semibold border-[#00000080]/50 px-3 py-1.5 rounded-full"
          >
          <span v-if="airdropStartDays <= 0">
            {{ (airdropEndDays > 0) ? `Airdrop Ends in ${airdropEndDays} ${plural(airdropEndDays, 'day', 'days')}` : 'Ended' }}  
          </span>
          <span v-else="airdropStartDays <= 0">
            {{ (airdropStartDays > 0) ? `Airdrop starting in ${airdropStartDays} ${plural(airdropStartDays, 'day', 'days')}` : '' }}  
          </span>
          </div>
          <div v-if="airdropIsNew"
            class="tag0 text-white text-[12px] bg-[#EC4963] font-semibold px-3 py-1.5 rounded-full"
          >
            New
          </div>
          <div :data="airdropId" @click="like($event)" style="cursor:pointer"
            class="tag1 border-2 text-[#0298B1] flex items-center gap-2 text-[12px] border-[#0298B1] bg-transparent font-semibold px-3 py-1.5 rounded-full"
          >
          <span :data="airdropId" :id="airdropId + '_like_num'">{{ fNum(airdropLikes) }}</span>
            <svg :data="airdropId"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              :fill="(fillLike == 1) ? '#1ea2ff' : 'none'"
              :id="airdropId + '_like'"
            >
              <path :data="airdropId"
                d="M1.62354 5.85675C1.62354 5.46967 1.93733 5.15588 2.3244 5.15588H4.42699V13.5662H2.3244C1.93733 13.5662 1.62354 13.2525 1.62354 12.8654V5.85675Z"
                stroke="#0298B1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path :data="airdropId"
                d="M4.42725 6.55761V12.1645L5.82358 13.0954C6.28409 13.4024 6.82518 13.5662 7.37865 13.5662H11.0564C12.0842 13.5662 12.9614 12.8232 13.1304 11.8093L13.9673 6.78805C14.1097 5.93363 13.4509 5.15588 12.5847 5.15588H9.33329"
                stroke="#0298B1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path :data="airdropId"
                d="M9.33329 5.15594L9.81492 2.74788C9.94016 2.1216 9.57943 1.50006 8.97353 1.29809C8.37563 1.0988 7.72221 1.36946 7.4404 1.93316L5.12811 6.55766H4.42725"
                stroke="#0298B1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div class="flex w-full">
          <!-- <button @click="setAirdrop" class="ml-auto btn">Claim Now</button> -->
          <router-link v-if="airdropEndDays > 0" :to="'/airdrop?id='+ airdropId " class="ml-auto btn">
            <button>Claim Now</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import dropLogo from "@/assets/dropLogo.png";
import twitterLogo from "@/assets/twitter.png";
import discordLogo from "@/assets/discord.png";
import { ref, defineProps } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/24/outline";
import { E, authLogin, fNum, getWallet, plural } from "../utils/utils";
import axios from 'axios'
import { API_URL } from "../utils/constant";

const claim_airdrop_modal = ref(false);

const setAirdrop = () => {
  claim_airdrop_modal.value = true;
}; 
const like = async (event) => {  
  if(props.userId != "") {
    const formData = authLogin(new FormData()) 
    const airId = event.target.getAttribute('data') || ""
    axios.post(`${API_URL}api.php?type=like_airdrop&user=${props.userId}&id=${airId}`, formData, {
        headers: {
          'X-CSRF-TOKEN': window.Laravel.csrfToken,
          'Content-Type': 'multipart/form-data'
        }
    })
    .then(async (response) => { 
      if(response.data.status) {
        //success,
        E(airId + '_like_num').innerText = fNum(response.data.num)
        if(response.data.type == 1) { 
          fillLike.value = true
        }
        else {
          fillLike.value = false
        }
      }
    })
  }
} 
// Define props
const props = defineProps({
  airdropId: {
    type: String,
    required: true
  },
  airdropLogo: {
    type: String,
    required: true
  },
  airdropName: {
    type: String,
    required: true
  },
  airdropWebsite: {
    type: String,
    required: true
  },
  airdropAbout: {
    type: String,
    required: true
  },
  airdropTotalToken: {
    type: String,
    required: true
  },
  assetCode: {
    type: String,
    required: true
  },
  airdropRewardAmount: {
    type: String,
    required: true
  },
  airdropEndDays: {
    type: Number,
    required: true
  },
  airdropStartDays: {
    type: Number,
    required: true
  },
  airdropIsNew: {
    type: Boolean,
    required: true
  },
  airdropLikes: {
    type: Number,
    required: true
  },
  airdropUsers :{
    type: Number,
    required: true
  },
  airdropFillLike: {
    type: Boolean,
    required: true
  },
  airdropLinks: {
    type: String,
    required: true
  },
  userId : {
    type:String,
    required:true
  }

});
const fillLike = ref(props.airdropFillLike)
</script>
<style scoped>
* {
  white-space: nowrap;
}
.airDrop {
  border-radius: 8px;
  background: #fff;
  padding: 16px 32px;
  box-shadow: 0px 10px 20px 0px rgba(18, 50, 77, 0.15);
}
.btn {
  border-radius: 30px;
  background: linear-gradient(90deg, #0298b1 0%, #7bd759 100%);
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  padding: 12px 24px;
  line-height: normal;
}
.heading {
  color: #000;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.title {
  color: #00a2f4;

  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
}
.titlep {
  color: #000;

  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
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

@media all and (max-width: 600px) {
  .properHeading {
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
</style>
