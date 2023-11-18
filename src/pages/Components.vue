<template>
  <div class="">
    <div class="bg-primary py-32">
      <div class="max-w-7xl px-8 flex flex-col gap-20 mx-auto my-20">
        <Carousel />
        <Heading text="This is cool" />
        <Card />
        <Airdrop />
        <Steps />
        <ABCExplorer />
        <NewsCard />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Carousel from "@/components/Carousel.vue";
import Heading from "@/components/Heading.vue";
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";
import EarningCard from "@/components/EC.vue";
import Airdrop from "@/components/Airdrop.vue";
import Steps from "@/components/Steps.vue";
import ABCExplorer from "@/components/ABCExplorer.vue";
import NewsCard from "@/components/NewsCard.vue";
</script>

<style lang="scss" scoped></style>
