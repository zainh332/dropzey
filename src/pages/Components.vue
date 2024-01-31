<template>
  <div class="">
    <div class="py-32 bg-primary">
      <div class="flex flex-col gap-20 px-8 mx-auto my-20 max-w-7xl">
        <Carousel />
        <Heading text="This is cool" />
        <Card />
        <Airdrop />
        <Steps />
        <ABCExplorer />
        <MediumBlogPost />
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
import MediumBlogPost from "@/components/Medium-Blog-Post.vue";
</script>

<style lang="scss" scoped></style>
