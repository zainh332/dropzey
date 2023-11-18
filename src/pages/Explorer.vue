<template>
  <div class="">
    <div class="relative">
      <img class="w-full min-h-[300px] object-cover" :src="ABCBanner" alt="" />
      <div class="max-w-sm mx-auto text-center">
        <div class="text-center absolute top-20 xl:top-60 left-0 right-0">
          <div class="">
            <h1 class="max-w-7xl mx-auto text-center text_gradient leading-loose bg-black text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Explorer
            </h1>
            <!-- <p class="text-sm md:text-base leading-10 text-gray-400">
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
    <div class="py-24 px-4">
      <div class="bg_gradient rounded-2xl py-5 grid grid-cols-2 gap-6 xl:grid-cols-4 max-w-7xl mx-auto pl-8 sm:pl-24">
        <div class="text-white">
          <h1 class="text-md md:text-xl font-semibold">Total Transaction: 127</h1>
          <!-- <p class="text-lg md:text-2xl font-medium">172</p> -->
        </div>
        <div class="text-white">
          <h1 class="text-md md:text-xl font-semibold">Users: 17,392</h1>
          <!-- <p class="text-lg md:text-2xl font-medium">17,202</p> -->
        </div>
        <!-- <div class="text-white">
          <h1 class="text-md md:text-xl font-semibold">Questions;</h1>
          <p class="text-lg md:text-2xl font-medium">6,402</p>
        </div>
        <div class="text-white">
          <h1 class="text-md md:text-xl font-semibold">Answers;</h1>
          <p class="text-lg md:text-2xl font-medium">6,402</p>
        </div> -->
      </div>
      <div class="max-w-7xl mx-auto">
        <ABCExplorer />
        <ABCExplorer />
        <ABCExplorer />
        <ABCExplorer />
        <ABCExplorer />
      </div>
      <section>
        <div class="py-16">
          <div class="max-w-7xl mx-auto text-center lg:flex-auto">
            <h1 class="max-w-2xl mx-auto text_gradient leading-loose bg-black text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Latest News
            </h1>
            <p class="mt-6 text-base leading-10 text-gray-400">
              Dive into breaking news, insights, and updates about airdrops, cryptocurrencies, and blockchain innovations on Dropzey
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
import ABCBanner from "@/assets/abcexplorerBanner.png";
import ABCExplorer from "@/components/ABCExplorer.vue";
import Footer from "@/components/Footer.vue";
import NewsCard from "@/components/NewsCard.vue";
import logoFire from "@/assets/Frame 40.svg";
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
