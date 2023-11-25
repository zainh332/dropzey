<template>
  <!-- Hero Section -->
  <div class="">
    <div class="bg-[#15344F] relative">
      <div class="relative isolate pt-14">
        <div class="mx-auto max-w-7xl px-6 lg:flex lg:items-center py-16 lg:gap-x-10 lg:px-8">
          <div class="mx-auto lg:mx-0 lg:flex-auto">
            <h1 class="max-w-2xl text_gradient leading-loose bg-black text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Empowering Airdrop Creators and Participants
            </h1>
            <p class="mt-6 text-base leading-10 text-gray-400">
              Simplify Airdrops, Boost Engagement, and Earn Airdrop Rewards Instantly with Dropzey
            </p>
            <div class="mt-10 flex items-center gap-x-6">
              <a
                href="/about-us"
                class="rounded-full bg_gradient px-14 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Know more</a
              >
            </div>
          </div>
          <div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <img :src="HeroImage" alt="" />
          </div>
        </div>
      </div>
      <div class="h-0.5 bg-red-900 w-full bg_gradient">
        <div class="card absolute h-12 -bottom-[1%] left-[40%] md:left-[48%]">
          <img :src="logoFire" alt="" />
        </div>
      </div>
    </div>
    <div class="relative">
      <div class="relative isolate py-28">
        <div class="mx-auto max-w-7xl px-6 lg:flex lg:items-center py-16 lg:gap-x-32 lg:px-8">
          <div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <img :src="umbrellas" alt="" />
          </div>
          <div class="mx-auto lg:mx-0 lg:flex-auto">
            <h1 class="max-w-2xl text_gradient leading-loose bg-black text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              What is Airdrop
            </h1>
            <p class="mt-6 text-base leading-6 text-gray-400">
              A crypto airdrop is like receiving free digital coins or tokens online. It's a promotional method where new cryptocurrency projects give away these digital assets to people for free. To get these free coins, participants complete simple online tasks like following the project on social media or signing up for newsletters. It's a way for new projects to gain attention and for people to get involved without buying the coins directly. It's similar to winning freebies online after doing easy tasks.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- section no 3 -->
    <div class="">
      <div class="h-0.5 bg-red-900 w-full bg_gradient relative">
        <div class="card absolute h-12 -top-10 left-[50%]">
          <img :src="logoFire" alt="" />
        </div>
      </div>
      <div class="bg-[#15344F] py-10 md:py-32 px-4">
        <div class="max-w-5xl mx-auto text-center">
          <h1 class="max-w-2xl mx-auto text_gradient leading-loose bg-black text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Dropzey Solution
          </h1>
          <p class="mt-6 text-base leading-10 text-gray-400">
            Dropzey's streamlined solution offering automation, security, and user-friendliness for airdrop campaigns.
          </p>
        </div>
        <div class="grid md:grid-cols-3 max-w-3xl my-12 gap-6 mx-auto items-center">
          <div  class="text-center bg-dark-blue-card h-[250px] flex flex-col items-center justify-center">
            <div class="image-container">
            <img :src="Eligibility" alt="" class="max-h-[200px] mb-3" />
            </div>
            <p class="font-semibold text-base text-white pt-3">
              Airdrop Automation
            </p>
          </div>
          <div class="text-center bg-dark-blue-card h-[250px] flex flex-col items-center justify-center">
            <div class="image-container">
            <img :src="Enhanced" alt="" class="max-h-[200px] mb-3" />
          </div>
            <p class="font-semibold text-base text-white pt-3">
              Verification
            </p>
          </div>
          <div class="text-center bg-dark-blue-card h-[250px] flex flex-col items-center justify-center">
            <div class="image-container">
            <img :src="Secuirty" alt="" class="max-h-[200px] mb-3" />
          </div>
            <p class="font-semibold text-base text-white pt-3">
              Engagement
            </p>
          </div>
          <div class="text-center bg-dark-blue-card h-[250px] flex flex-col items-center justify-center">
            <div class="image-container">
            <img :src="Transparent" alt="" class="max-h-[200px] mb-3" />
          </div>
            <p class="font-semibold text-base text-white pt-3">
              Security
            </p>
          </div>
          <div class="text-center bg-dark-blue-card h-[250px] flex flex-col items-center justify-center">
            <div class="image-container">
            <img :src="Knowme" alt="" class="max-h-[200px] mb-3" />
          </div>
            <p class="font-semibold text-base text-white pt-3">
              Transparency
            </p>
          </div>
          <div class="text-center bg-dark-blue-card h-[250px] flex flex-col items-center justify-center">
            <div class="image-container">
            <img :src="Knowme2" alt="" class="max-h-[200px] mb-3" />
          </div>
            <p class="font-semibold text-base text-white pt-3">
              Fast & User friendly
            </p>
          </div>
        </div>
      </div>
      
    </div>
    <!-- section no 4 -->
    <section>
      <div class="max-w-5xl mx-auto my-8 text-center px-4 py-8">
        <h1 class="max-w-2xl mx-auto text_gradient leading-loose bg-black text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          How It Works
        </h1>
        <p class="mt-6 text-base leading-10 text-gray-400">
          Explore how participants engage in Dropzey's airdrop process effortlessly to earn rewards.
        </p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto my-16">
        <div class="bg-card text-center">
          <div class="relative w-fit mx-auto">
            <div class="w-20 h-20 bg_gradient rounded-full p-2 flex items-center justify-center">
              <h1 class="text-4xl font-semibold text-white">01</h1>
            </div>
            <div class="bg-yellow-300 text-xs text-gray-800 w-fit rounded-full px-4 font-medium absolute -top-2 left-3">
              Step
            </div>
          </div>
          <p class="text-gray-900 font-bold text-lg mt-4">Connect Social Media Accounts</p>
          <p class="text-gray-500 text-md mt-2">
            Link your social media profiles to get started.
          </p>
        </div>
        <div class="bg-card text-center">
          <div class="relative w-fit mx-auto">
            <div class="w-20 h-20 bg_gradient rounded-full p-2 flex items-center justify-center">
              <h1 class="text-4xl font-semibold text-white">02</h1>
            </div>
            <div class="bg-yellow-300 text-xs text-gray-800 w-fit rounded-full px-4 font-medium absolute -top-2 left-3">
              Step
            </div>
          </div>
          <p class="text-gray-900 font-bold text-lg mt-4">Connect Wallet</p>
          <p class="text-gray-500 text-md mt-2">
            Link your wallet to participate in airdrops seamlessly.
          </p>
        </div>
        
        <div class="bg-card text-center">
          <div class="relative w-fit mx-auto">
            <div class="w-20 h-20 bg_gradient rounded-full p-2 flex items-center justify-center">
              <h1 class="text-4xl font-semibold text-white">03</h1>
            </div>
            <div class="bg-yellow-300 text-xs text-gray-800 w-fit rounded-full px-4 font-medium absolute -top-2 left-3">
              Step
            </div>
          </div>
          <p class="text-gray-900 font-bold text-lg mt-4">Complete Steps</p>
          <p class="text-gray-500 text-md mt-2">
            Follow simple instructions to fulfill airdrop requirements.
          </p>
        </div>
        <div class="bg-card text-center">
          <div class="relative w-fit mx-auto">
            <div class="w-20 h-20 bg_gradient rounded-full flex items-center justify-center">
              <h1 class="text-4xl font-semibold text-white">04</h1>
            </div>
            <div class="bg-yellow-300 text-xs text-gray-800 w-fit rounded-full px-4 font-medium absolute -top-2 left-3">
              Step
            </div>
          </div>
          <p class="text-gray-900 font-bold text-lg mt-4">
            Claim Reward Instantly
          </p>
          <p class="text-gray-500 text-md mt-2">
            Receive your rewards instantly upon successful completion.
          </p>
        </div>
      </div>
    </section>
    <!-- section no 5 -->
    <section>
      <div class="py-12 md:py-32 px-4">
        <div class="max-w-5xl mx-auto text-center">
          <h1 class="max-w-2xl mx-auto text_gradient leading-loose bg-black text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Explore Our Airdrops
          </h1>
          <p class="mt-6 text-base leading-10 text-gray-400">
            Discover diverse airdrop opportunities in the crypto world. Engage, earn, and be part of the future of decentralized finance effortlessly.
          </p>
        </div>
        <div class="max-w-7xl mx-auto py-10">
          <Card />
        </div>
        <div class="text-center">
          <router-link to="/airdrops">
            <button class="border border-[#0298B1] rounded-full py-2 px-10 font-semibold font-gradient">
              Explore Now
            </button>
          </router-link>
        </div>
        
      </div>
      <div class="h-0.5 bg-red-900 w-full bg_gradient relative">
        <div class="card absolute h-12 -top-10 left-[40%] md:left-[48%]">
          <img :src="logoFire" alt="" />
        </div>
      </div>
    </section>
    <!-- section no 6 -->
    <section>
      <div class="px-4 bg-blue-100 py-16">
        <div class="max-w-5xl mx-auto text-center">
          <h1 class="max-w-2xl mx-auto text_gradient leading-loose bg-black text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Top Earning Wallets
          </h1>
          <p class="mt-6 text-base leading-10 text-gray-400">
            Explore the extraordinary success of users who participated in the airdrop and earned rewards through Dropzey
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto my-16">
          <div class="bg-card">
            <p class="text-gray-500 text-md">Wallet Address</p>
            <p class="text-gray-900 font-bold text-md">
              GARATAHLKN....ZUJKMALQKVNLN6
            </p>
            <p class="text-gray-500 text-md mt-4">Total Airdrop Earnings:</p>
            <p class="text-2xl font-bold">$500</p>
            <div class="mt-4 flex items-center gap-x-6 w-full">
              <a
                href="#"
                class="w-full text-center rounded-full text-gray-600 bg-gray-100 bg_hover_gradient px-14 py-3 text-sm font-semibold hover:text-white shadow-sm"
                >View Wallet Transactions</a
              >
            </div>
          </div>
          <div class="bg-card">
            <p class="text-gray-500 text-md">Wallet Address</p>
            <p class="text-gray-900 font-bold text-md">
              GARATAHLKN....ZUJKMALQKVNLN6
            </p>
            <p class="text-gray-500 text-md mt-4">Total Airdrop Earnings:</p>
            <p class="text-2xl font-bold">$500</p>
            <div class="mt-4 flex items-center gap-x-6 w-full">
              <a
                href="#"
                class="w-full text-center rounded-full text-gray-600 bg-gray-100 bg_hover_gradient px-14 py-3 text-sm font-semibold hover:text-white shadow-sm"
                >View Wallet Transactions</a
              >
            </div>
          </div>
          <div class="bg-card">
            <p class="text-gray-500 text-md">Wallet Address</p>
            <p class="text-gray-900 font-bold text-md">
              GARATAHLKN....ZUJKMALQKVNLN6
            </p>
            <p class="text-gray-500 text-md mt-4">Total Airdrop Earnings:</p>
            <p class="text-2xl font-bold">$500</p>
            <div class="mt-4 flex items-center gap-x-6 w-full">
              <a
                href="#"
                class="w-full text-center rounded-full text-gray-600 bg-gray-100 bg_hover_gradient px-14 py-3 text-sm font-semibold hover:text-white shadow-sm"
                >View Wallet Transactions</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section no 7 -->
    <section>
      <div class="grid md:grid-cols-2 gap-y-6">
        <div class="max-w-xl mx-auto flex md:px-0 px-6 items-center jus">
          <div>
            <h1 class="max-w-2xl text_gradient leading-loose bg-black text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Empowering Airdrop Creators
            </h1>
            <p class="text-xl font-bold py-3">Benefits:</p>
            <ul class="space-y-3">
              <li>
                <div class="flex items-center gap-2">
                  <img class="w-10 h-10" :src="logoFire" alt="" />
                  <p class="text-gray-500">
                    Easily automate token distribution for your project.
                  </p>
                </div>
              </li>
              <li>
                <div class="flex items-center gap-2">
                  <img class="w-10 h-10" :src="logoFire" alt="" />
                  <p class="text-gray-500">
                    Customize eligibility criteria to reach your preferred audience.
                  </p>
                </div>
              </li>
              <li>
                <div class="flex items-center gap-2">
                  <img class="w-10 h-10" :src="logoFire" alt="" />
                  <p class="text-gray-500">
                    Save time and effort by reducing manual token transfers.
                  </p>
                </div>
              </li>
              <li>
                <div class="flex items-center gap-2">
                  <img class="w-10 h-10" :src="logoFire" alt="" />
                  <p class="text-gray-500">
                    Expand your project's visibility to an engaged and credible airdrop community.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full">
          <img :src="hero1" class="w-full" alt="" />
        </div>
      </div>
      <div class="h-0.5 bg-red-900 w-full bg_gradient relative mx-auto">
        <div class="card absolute h-12 -top-10 left-[40%] md:left-[46%]">
          <img :src="logoFire" alt="" />
        </div>
      </div>
    </section>
    <section>
      <div class="grid md:grid-cols-2 mx-auto gap-y-6">
        <div class="max-w-xl mx-auto md:px-0 px-6 flex items-center md:order-2">
          <div>
            <h1 class="max-w-2xl text_gradient leading-loose bg-black text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mt-10 md:mt-0">
              Elevating Airdrop Participants
            </h1>
            <p class="text-xl font-bold py-3">Benefits:</p>
            <ul class="space-y-3">
              <li>
                <div class="flex items-center gap-2">
                  <img class="w-10 h-10" :src="logoFire" alt="" />
                  <p class="text-gray-500">
                    Seamlessly receive tokens from various projects.
                  </p>
                </div>
              </li>
              <li>
                <div class="flex items-center gap-2">
                  <img class="w-10 h-10" :src="logoFire" alt="" />
                  <p class="text-gray-500">
                    Personalize your participation in different airdrops.
                  </p>
                </div>
              </li>
              <li>
                <div class="flex items-center gap-2">
                  <img class="w-10 h-10" :src="logoFire" alt="" />
                  <p class="text-gray-500">
                    Simplify receiving tokens instantly.
                  </p>
                </div>
              </li>
              <li>
                <div class="flex items-center gap-2">
                  <img class="w-10 h-10" :src="logoFire" alt="" />
                  <p class="text-gray-500">
                    Engage with credible airdrop opportunities and vibrant communities.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="order-1">
          <img class="w-full" :src="hero2" alt="" />
        </div>
      </div>
    </section>
    <!-- section no 7 -->
    <section>
      <div class="max-w-5xl mx-auto text-center px-4 py-16">
        <div class="">
          <div class="">
            <h1 class="text_gradient leading-loose bg-black text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Dropzey Newsletter
            </h1>
            <p class="sm:mt-6 text-base sm:leading-10 text-gray-400">
              Stay informed about airdrops, crypto trends, and exclusive opportunities with our Dropzey Newsletter
            </p>
          </div>
          <div class="mt-6 p-2 sm:shadow-2xl sm:border border-gray-100 sm:rounded-full flex flex-col sm:flex-row sm:items-center justify-between max-w-xl mx-auto">
            <input
              class="border-2 sm:border-0 rounded-full p-2 sm:p-0 bg-white text-gray-600 !pl-4 border outline-none focus:outline-none"
              placeholder="Type Your Email"
              type="search"
            />
            <div class="flex items-center gap-x-6 mt-4 sm:mt-0">
              <a
                href="#"
                class="rounded-full bg_gradient px-14 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Subscribe</a
              >
            </div>
          </div>
        </div>
        <!-- <div class="">
          <img :src="hero3" alt="" />
        </div> -->
      </div>
    </section>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
import HeroImage from "@/assets/HeroImage.png";
import umbrellas from "@/assets/umbrellas.png";
import logoFire from "@/assets/Frame 40.svg";
import Eligibility from "@/assets/Group.png";
import Enhanced from "@/assets/Frame.png";
import Secuirty from "@/assets/Enhanced.png";
import Transparent from "@/assets/secuirty.png";
import Knowme from "@/assets/Transparent.png";
import Knowme2 from "@/assets/knowme.png";
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";
import hero1 from "@/assets/16540-01 1.png";
import hero2 from "@/assets/hero2giveaway.png";
import hero3 from "@/assets/Transaparent-Logo1 7.png";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const mobileMenuOpen = ref(false);
</script>
<style scoped>
.text_gradient {
  background: linear-gradient(90deg, #0298b1 0.51%, #7bd759 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 50px;
}

.image-container {
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
