<template>
  <div class="">
    <div class="relative">
      <div class="bg grid grid-cols-1 md:grid-cols-2">
        <div class="max-w-5xl mx-auto text-center flex items-center justify-center py-16 md:py-2">
          <h1 class="max-w-2xl mx-auto text_gradient leading-loose bg-black text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Airdrops!
          </h1>
        </div>
        <div class="">
          <img class="w-full" :src="hero2" alt="" />
        </div>
      </div>
      <div class="h-0.5 w-full bg_gradient">
        <div class="card absolute h-12 -bottom-[1%] left-[40%] md:left-[48%]">
          <img :src="logoFire" alt="" />
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto py-32 space-y-10 px-5">
      <div v-if="isLoaded && !isEmpty" class="flex gap-4 md:items-center justify-between md:flex-row flex-col">
        <h1 class="font-bold text-sm">{{ NumOfAirdrops }}</h1>
        <div class="flex gap-4 items-center">
          <p>Sort</p>
          <select @input="sortAirdrops($event.target.value)" name="sort" id="sort" class="border-2 border-gray-200 px-3 py-2 rounded-md">
            <option value="3">Date</option>
            <option value="1">Rating</option>
            <!-- <option value="1">Views</option> -->
            <option value="2">Participants</option>
            <option value="4">Ending</option>
          </select>
        </div>
      </div>
        <center v-if="!isWalletConnected" style="margin-top:100px;margin-bottom:100px;width:100%;display:flex;align-items: center;justify-content: center;">
          <button @click="connectWallet" class="flex items-center justify-center gap-2 border bg-gray-100 rounded-full px-10 py-1.5 w-full sm:w-auto">
              <span class="font-medium text-gray-500 text-s">
                Connect Wallet
              </span>
            </button>
        </center>
        <center v-else-if="!isLoaded" style="margin-top:100px;margin-bottom:100px;width:100%;display:flex;align-items: center;justify-content: center;">
          Loading...
        </center>
        <center v-else-if="isEmpty" style="margin-top:100px;margin-bottom:100px;width:100%;display:flex;align-items: center;justify-content: center;">
          Nothing to show
        </center>
        <div v-else style="width:100%">
          <component v-for="(air, index) in paginatedTx()" :key="index" v-show="isLoaded && !isEmpty">
            <Airdrop 
            :airdropId="air.ids"
            :airdropName="air.name"
            :airdropLogo="air.logo"
            :airdropWebsite="air.website"
            :airdropAbout="air.about"
            :airdropTotalToken="air.amount"
            :airdropRewardAmount="air.reward_amount"
            :assetCode="JSON.parse(air.asset).code"
            :airdropEndDays=air.end_day
            :airdropStartDays=air.start_day
            :airdropIsNew=air.new
            :airdropLikes="air.likes"
            :airdropUsers="air.participants"
            :airdropFillLike=air.my_likes
            :airdropLinks="air.links"
            :userId="userId"
        />
        </component>
        <div v-show="isLoaded && !isEmpty" style="margin-top: 40px;">
          <button style="margin-right: 10px;" @click="prevPage" v-show="!(currentPage === 1)">Previous</button>
          <button @click="nextPage" v-show="!(currentPage === totalPages())">Next</button>
        </div>
        </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import hero2 from "@/assets/7148456_Mesa de trabajo 1 2.png";
import logoFire from "@/assets/Frame 40.svg";
import Airdrop from "@/components/Airdrop.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import { getAirdrops } from "../utils/stellar";
import { getWallet, plural } from "../utils/utils";
import { getAirdropData, getProfile } from "../utils/api";
import Swal from 'sweetalert2';

/* STATES */
const isLoaded = ref(false)
const isEmpty = ref(false)
const isWalletConnected = ref(false)
const userId = ref("")
const NumOfAirdrops = ref("")
const Airs = ref([])
const currentPage = ref(1)
const pageSize = ref(10)
/* DOM FUNCTIONS */
const connectWallet = () => {
  speak('toggle_wallet', true)
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
/* DOM FUNCTIONS */
const sortAirdrops = (type = "") => {  
  if(type != "") {
     if(type == '1') {  
       Airs.value.sort((a, b) => b.likes - a.likes);
     }
     else if(type == '2') {
       Airs.value.sort((a, b) => b.participants - a.participants);
     }
     else if(type == '3') {
       Airs.value.sort((a, b) => (new Date(b.created)).getTime() - (new Date(a.created)).getTime());
     }
     else if(type == '4') {
       Airs.value.sort((a, b) => (new Date(b.end)).getTime() - (new Date(a.end)).getTime());
     }
  }
}
/* PAGINATIONS */
//for pagination
const paginatedTx = () => {
  const startIndex = (currentPage.value - 1) * pageSize.value;
  const endIndex = startIndex + pageSize.value;
  return Airs.value.slice(startIndex, endIndex);
}
const totalPages = () => {
    return Math.ceil(Airs.value.length / pageSize.value);
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
const setUp = async () => {
  //fetch all airdrops from onchain
  const wallet = await getWallet()
  const uInfo = (await getProfile()) || {email:""}
  if(wallet !== false) {
    isWalletConnected.value = true
    const airdrops = await getAirdrops(wallet)
    if(airdrops.ids) { 
      //fetch their major data
      const res = await getAirdropData(airdrops.ids.join(","), uInfo.token)
      if(res.status) {  
        NumOfAirdrops.value = `${airdrops.ids.length.toLocaleString()} ${plural(res.data.length, 'airdrop', 'airdrops')} found`
        Airs.value = res.data;
        userId.value = uInfo.email
        isLoaded.value = true
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Network error!',
          text: 'Please refresh this page',
        }); 
      }
    }
    else {
      isEmpty.value = true
      isLoaded.value = true
    }
  }
}
setUp()
</script>
<style scoped>
.text_gradient {
  background: linear-gradient(90deg, #0298b1 0.51%, #7bd759 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 50px;
}
.bg {
  background: linear-gradient(180deg, #1d4161 0%, #14324d 100%);
}
</style>
