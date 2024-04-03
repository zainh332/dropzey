<template>
  <div class="">
    <div class="relative">
      <img class="w-full min-h-[300px] object-cover" :src="ABCBanner" alt="" />
      <div class="max-w-sm mx-auto text-center">
        <div class="absolute left-0 right-0 text-center top-20 xl:top-60">
          <div class="">
            <h1 class="mx-auto text-3xl font-bold leading-loose tracking-tight text-center text-gray-900 bg-black max-w-7xl text_gradient sm:text-5xl">
              Explorer
            </h1>
            <!-- <p class="text-sm leading-10 text-gray-400 md:text-base">
              Check your earnings and withdrawals
            </p> -->
          </div>
        </div>
      </div>
      <div class="h-0.5 bg-red-900 w-full bg_gradient">
        <div class="card absolute h-12 -bottom-[1%] left-[40%] md:left-[48%]">
          <img :src="logoFire" alt="" />
        </div>
      </div>
    </div>
    <div class="px-4 py-24">
      <div class="grid grid-cols-2 gap-6 py-5 pl-8 mx-auto bg_gradient rounded-2xl xl:grid-cols-4 max-w-7xl sm:pl-24">
        <div class="text-white">
          <h1 class="font-semibold text-md md:text-xl">Reward Transaction: {{rewardTx}}</h1>
          <!-- <p class="text-lg font-medium md:text-2xl">172</p> -->
        </div>
        <div class="text-white">
          <h1 class="font-semibold text-md md:text-xl">Users:  {{users}}</h1>
          <!-- <p class="text-lg font-medium md:text-2xl">17,202</p> -->
        </div>
        <!-- <div class="text-white">
          <h1 class="font-semibold text-md md:text-xl">Questions;</h1>
          <p class="text-lg font-medium md:text-2xl">6,402</p>
        </div>
        <div class="text-white">
          <h1 class="font-semibold text-md md:text-xl">Answers;</h1>
          <p class="text-lg font-medium md:text-2xl">6,402</p>
        </div> -->
      </div>
      <div  class="mx-auto max-w-7xl" v-if="!isEmpty && !isNetworkError">
        <center v-if="!isLoaded" style="margin-top:100px;margin-bottom:100px;width:100%;display:flex;align-items: center;justify-content: center;">
          Loading...
        </center>
        <component v-for="(_tx, index) in paginatedTx()" :key="index" v-show="isLoaded">
            <ABCExplorer 
            :transactionNumber="_tx.transactionNumber"
            :transactionDate="_tx.transactionDate"
            :transactionSender="_tx.transactionSender"
            :transactionType="_tx.transactionType"
            :transactionName="_tx.transactionName"
            :explorerLink="_tx.explorerLink"
      />
        </component>
        <div v-show="isLoaded" style="margin-top: 40px;">
          <button style="margin-right: 10px;" @click="prevPage" v-show="!(currentPage === 1)">Previous</button>
          <button @click="nextPage" v-show="!(currentPage === totalPages())">Next</button>
        </div>
      </div>
      <div class="mx-auto max-w-7xl" v-else-if="isEmpty && !isNetworkError">
        <center style="margin-top:100px;margin-bottom:100px;width:100%;">
          No records yet  
        </center>
      </div>
      <div class="mx-auto max-w-7xl" v-else>
        <center  style="margin-top:50px;width:100%;display:flex;align-items: center;justify-content: center;color:grey">
          Unable to fetch transactions<br>Network error
        </center>
      </div>
      <section>
        <div class="py-16">
          <div class="mx-auto text-center max-w-7xl lg:flex-auto">
            <h1 class="max-w-2xl mx-auto text-5xl font-bold leading-loose tracking-tight text-gray-900 bg-black text_gradient sm:text-5xl">
              Latest News
            </h1>
            <p class="mt-6 text-base leading-10 text-gray-400">
              Dive into breaking news, insights, and updates about airdrops, cryptocurrencies, and blockchain innovations on Dropzey
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
import { ref, createElementVNode } from "vue";
import ABCBanner from "@/assets/abcexplorerBanner.png";
import ABCExplorer from "@/components/ABCExplorer.vue";
import Footer from "@/components/Footer.vue";
import MediumBlogPost from "@/components/Medium-Blog-Post.vue";
import logoFire from "@/assets/Frame 40.svg";
import {getTx} from "../utils/api"

const isEmpty = ref(false)
const isNetworkError = ref(false)
const isLoaded = ref(false)
const Tx = ref([])
const rewardTx = ref(0)
const users = ref(0)
const currentPage = ref(1)
const pageSize = ref(10)

//fetch the explorer details
const setup = async () => {
    const tx = await getTx()
    if(tx) {
        isNetworkError.value = false
        if(tx.length > 0) {
            isEmpty.value = false;let rs = "";
            for(let i=0;i<tx.length;i++) {
                if(tx[i] != "") {
                  const _tx = JSON.parse(tx[i]); 
                  const transactionNumber = _tx.id
                  const transactionDate = (new Date(_tx.date)).toLocaleDateString()
                  const transactionSender = (_tx.signer.substring(0, 10) + "...." + _tx.signer.substring(_tx.signer.length - 15));
                  let rs;
                  if(_tx.name.toLowerCase().trim() == 'create') {
                      rs = "create"
                  }
                  else if(_tx.name.toLowerCase().trim() == 'reward') {
                      /* This may change in future */
                      rewardTx.value += 1
                      users.value += 1
                      rs = "reward"
                  }
                  else {
                    rs = _tx.name.toLowerCase().trim()
                  }
                  const transactionName = rs;
                  const transactionType = _tx.action;
                  const transactionData = _tx.data;
                  const explorerLink = "https://stellar.expert/explorer/testnet/tx/" + _tx.hash;
                  // Create a vnode (virtual node) for the ABCExplorer component
                  Tx.value.push({transactionNumber, transactionDate, transactionSender, transactionName, transactionType, transactionData, explorerLink})
                 } 
                             
            }
            isLoaded.value = true
        }
        else {
            isEmpty.value = true
        }
    }
    else {
      //show a Network error and reload silently in the background
      isNetworkError.value = true
    }
}

//for pagination
const paginatedTx = () => {
      const startIndex = (currentPage.value - 1) * pageSize.value;
      const endIndex = startIndex + pageSize.value;
      return Tx.value.slice(startIndex, endIndex);
}
const totalPages = () => {
    return Math.ceil(Tx.value.length / pageSize.value);
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
setup()
</script>
<style scoped>
.text_gradient {
  background: linear-gradient(90deg, #0298b1 0.51%, #7bd759 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 50px;
}
</style>
