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
      <div class="flex gap-4 md:items-center justify-between md:flex-row flex-col">
        <h1 class="font-bold text-sm">1,000 airdrops found</h1>
        <div class="flex gap-4 items-center">
          <p>Sort</p>
          <select name="sort" id="sort" class="border-2 border-gray-200 px-3 py-2 rounded-md">
            <option value="1">Rating</option>
            <option value="1">Views</option>
            <option value="1">Subscribes</option>
          </select>
        </div>
      </div>
      <Airdrop />
      <Airdrop />
      <Airdrop />
      <Airdrop />
      <Airdrop />
      <Airdrop />
      <Airdrop />
    </div>
    <Footer />
  </div>
</template>
<script setup>
import hero2 from "@/assets/7148456_Mesa de trabajo 1 2.png";
import logoFire from "@/assets/Frame 40.svg";
import Airdrop from "@/components/Airdrop.vue";
import Footer from "@/components/Footer.vue";
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
