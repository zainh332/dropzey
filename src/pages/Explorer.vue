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
          <h1 class="font-semibold text-md md:text-xl">Reward Transaction: 127</h1>
          <!-- <p class="text-lg font-medium md:text-2xl">172</p> -->
        </div>
        <div class="text-white">
          <h1 class="font-semibold text-md md:text-xl">Users: 17,392</h1>
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
      <div class="mx-auto max-w-7xl">
        <ABCExplorer />
        <ABCExplorer />
        <ABCExplorer />
        <ABCExplorer />
        <ABCExplorer />
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
import ABCBanner from "@/assets/abcexplorerBanner.png";
import ABCExplorer from "@/components/ABCExplorer.vue";
import Footer from "@/components/Footer.vue";
import MediumBlogPost from "@/components/Medium-Blog-Post.vue";
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
