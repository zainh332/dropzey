<template>
  <div>
    <!-- Hero Section -->
    <section
      class="min-w-full min-h-[80vh] pb-20 bg-primary bg-cover"
      :style="{ backgroundImage: 'url(' + banner + ')' }"
    >
      <!-- 7xl -->
      <div class="max-w-7xl py-16 sm:py-32 mx-auto md:px-4 px-8">
        <div class="max-w-2xl">
          <Heading
            myclass="text-left"
            text="Join the Best Airdrops, Giveaways and More!"
          />
          <div class="max-w-xl">
            <p class="paragraph">
              Explore opportunities to claim tokens, rewards, and more. Elevate your experience with Dropzey
            </p>
          </div>
          <div class="flex gap-4 sm:flex-row flex-col mt-10">
            <router-link to="/create-airdrop">
              <button class="btn">List My Airdrop</button>
            </router-link>
            <router-link to="/airdrops">
              <button class="btnB">Explore More</button>
            </router-link>
          </div>
        </div>
      </div>
      <Carousel />
    </section>
    <div data-v-2a4902a9="" class="h-0.5 w-full bg_gradient relative mx-auto">
      <div
        data-v-2a4902a9=""
        class="card absolute h-0.52 -top-10 left-[40%] md:left-[46%]"
      >
        <!-- <img data-v-2a4902a9="" src="/src/assets/Frame 40.svg" alt="" /> -->
      </div>
    </div>
    <section>
      <div class="py-24 md:px-4 px-8">
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
              <button class="border border-[#0298B1] rounded-full py-2 px-10 font-semibold font-gradient">Explore More</button>
            </router-link>
          
        </div>
      </div>
    </section>
    <section class=" ">
      <div class="px-8 md:px-4 py-8">
        <div class="max-w-5xl mx-auto text-center">
          <h1 class="max-w-2xl mx-auto text_gradient leading-loose bg-black text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Top Earning Wallets
          </h1>
          <p class="mt-6 text-sm md:text-base leading-6 text-[#000]">
            Explore these wallets' airdrop earnings and transaction details to witness their remarkable success
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
                href="/explorer"
                class="w-full text-center rounded-full text-gray-600 bg-gray-100 bg_hover_gradient px-14 py-3 text-sm font-semibold hover:text-white shadow-sm"
                >View Transactions</a
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
                >View Transactions</a
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
                >View Transactions</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-8">
      <div class="px-8 md:px-4">
        <div class="max-w-5xl mx-auto text-center">
          <h1 class="max-w-2xl mx-auto text_gradient leading-loose bg-black text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            How It Works
          </h1>
          <p class="mt-6 text-sm md:text-base leading-6 text-black">
            Explore how participants engage in Dropzey's airdrop process effortlessly.
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto my-16">
        <div class="bg-card text-center">
          <div class="relative w-fit mx-auto">
            <div class="w-20 h-20 bg_gradient rounded-full p-2 flex items-center justify-center">
              <h1 class="text-4xl font-semibold text-white">01</h1>
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
              <h1 class="text-4xl font-semibold text-white">02</h1>
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
              <h1 class="text-4xl font-semibold text-white">03</h1>
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
      </div>
    </section>
    <section class="md:py-0 py- mt-20">
      <div class="grid md:grid-cols-2 gap-y-6">
        <div class="max-w-xl mx-auto flex md:px-0 px-6 items-center jus">
          <div>
            <h1
              class="max-w-2xl text_gradient leading-loose bg-black text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            >
              Empowering Airdrop Creators
            </h1>
            <p class="text-xl font-bold py-3">Benefits:</p>
            <ul class="space-y-3">
              <li>
                <div class="flex items-center gap-2">
                  <img class="w-10 h-0.50" :src="logoFire" alt="" />
                  <p class="text-gray-500">
                    Easily automate token distribution for your project.
                  </p>
                </div>
              </li>
              <li>
                <div class="flex items-center gap-2">
                  <img class="w-10 h-0.50" :src="logoFire" alt="" />
                  <p class="text-gray-500">
                    Customize eligibility criteria to reach your preferred audience.
                  </p>
                </div>
              </li>
              <li>
                <div class="flex items-center gap-2">
                  <img class="w-10 h-0.50" :src="logoFire" alt="" />
                  <p class="text-gray-500">
                    Save time and effort by reducing manual token transfers.
                  </p>
                </div>
              </li>
              <li>
                <div class="flex items-center gap-2">
                  <img class="w-10 h-0.50" :src="logoFire" alt="" />
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
        <div class="card absolute h-0.52 -top-10 left-[40%] md:left-[46%]">
          <img :src="logoFire" alt="" />
        </div>
      </div>
    </section>
    <section class="py- md:py-0">
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
                  <img class="w-10 h-0.50" :src="logoFire" alt="" />
                  <p class="text-gray-500">
                    Seamlessly receive tokens from various projects.
                  </p>
                </div>
              </li>
              <li>
                <div class="flex items-center gap-2">
                  <img class="w-10 h-0.50" :src="logoFire" alt="" />
                  <p class="text-gray-500">
                    Personalize your participation in different airdrops.
                  </p>
                </div>
              </li>
              <li>
                <div class="flex items-center gap-2">
                  <img class="w-10 h-0.50" :src="logoFire" alt="" />
                  <p class="text-gray-500">
                    Simplify receiving tokens instantly.
                  </p>
                </div>
              </li>
              <li>
                <div class="flex items-center gap-2">
                  <img class="w-10 h-0.50" :src="logoFire" alt="" />
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
    <!-- <section>
      <div class="bg-blue-100 py-32 px-8 md:px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div class="bg-card flex flex-col items-center justify-center">
            <div class="">
              <svg
                width="78"
                height="91"
                viewBox="0 0 78 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_15_745)">
                  <path
                    d="M26.8741 74.7357C26.8741 71.2749 26.854 67.7941 26.8741 64.3334C26.8741 63.6732 26.8339 62.953 27.0949 62.3729C27.4362 61.5727 27.1953 61.1326 26.6733 60.5725C18.3006 51.7305 9.94811 42.8486 1.57549 33.9866C0.792437 33.1664 0.491263 32.3262 0.551498 31.206C1.03338 22.8641 4.788 16.1626 11.0123 10.7815C17.9593 4.80012 26.2115 1.79946 35.3069 1.05929C44.5429 0.319127 53.297 2.05951 61.3484 6.70055C68.2352 10.6814 73.4355 16.2027 76.146 23.8244C77.0495 26.3449 77.5113 28.9855 77.5314 31.6661C77.5314 32.2462 77.2503 32.9864 76.8488 33.4065C68.3757 42.4485 59.8827 51.4505 51.3695 60.4525C50.8475 61.0126 50.5262 61.4527 50.9077 62.2529C51.1285 62.713 51.1285 63.2931 51.1285 63.8132C51.1486 71.0148 51.1486 78.2164 51.1285 85.418C51.1285 88.6988 48.9199 90.8592 45.6472 90.8792C41.23 90.8993 36.8128 90.8993 32.3956 90.8792C29.1228 90.8792 26.9142 88.7188 26.8941 85.438C26.8339 81.8773 26.8741 78.3165 26.8741 74.7357ZM51.3092 28.3053C54.4214 25.6248 58.1158 24.7446 62.0109 24.5245C65.886 24.3045 69.6608 24.8246 73.3351 26.705C73.1544 26.0648 73.054 25.6248 72.8933 25.1847C70.9056 19.3234 67.2514 14.6223 62.0913 11.3016C48.5786 2.53962 34.4235 1.9795 20.0073 8.88103C13.7027 11.9017 8.90404 16.6228 6.07301 23.1042C5.59113 24.2244 5.2498 25.3847 4.82816 26.565C12.5984 23.5643 19.9872 23.4643 27.0748 28.1853C33.1184 22.9442 46.109 23.4843 51.3092 28.3053ZM38.5997 27.8652C38.0175 27.9053 36.9132 27.9453 35.8289 28.1053C33.7006 28.4254 31.6326 28.9455 29.8657 30.2858C28.6811 31.186 28.5405 31.7261 28.9823 33.1464C31.2712 40.4881 33.5601 47.8297 35.849 55.1713C36.1703 56.2115 36.2506 57.6719 36.9734 58.172C37.7364 58.7121 39.1418 58.312 40.2662 58.412C41.0894 58.4921 41.4107 58.172 41.6516 57.3918C44.1012 49.37 46.5909 41.3682 49.0605 33.3465C49.6026 31.5861 49.4621 31.106 47.916 30.0857C47.2735 29.6656 46.5909 29.3256 45.8681 29.0255C43.7197 28.1853 41.4508 27.9053 38.5997 27.8652ZM33.1786 58.232C33.1385 58.072 33.0983 57.9119 33.0381 57.7519C30.5082 49.5501 27.898 41.3683 25.4686 33.1264C24.8662 31.106 23.7017 29.8857 21.8746 29.1855C17.0156 27.3451 12.1366 27.3651 7.29778 29.2856C6.43442 29.6256 5.65137 30.2858 4.90847 30.8859C4.34628 31.346 4.26597 31.8261 4.88839 32.4663C6.95645 34.5667 8.92412 36.7272 10.952 38.8677C17.0558 45.3691 23.1596 51.8506 29.2834 58.332C29.5043 58.5721 29.8858 58.8121 30.1669 58.7921C31.1306 58.6921 32.1145 58.452 33.1786 58.232ZM44.8842 58.252C45.9082 58.412 46.8117 58.5921 47.7353 58.6921C48.0566 58.7321 48.5184 58.6521 48.7192 58.452C56.9312 49.7701 65.103 41.0482 73.2949 32.3662C73.7969 31.8461 73.7366 31.366 73.2949 31.026C72.3713 30.3258 71.4477 29.5456 70.4036 29.1255C66.5687 27.6052 62.5731 27.5652 58.5776 28.4254C55.4052 29.1055 53.3372 30.7259 52.3734 34.1066C50.0644 42.1884 47.4141 50.1702 44.8842 58.252ZM47.896 74.6957C47.896 71.1549 47.896 67.6341 47.896 64.0933C47.896 62.3529 47.2334 61.6928 45.4665 61.6928C41.23 61.6928 36.9734 61.6928 32.7369 61.6928C30.9901 61.6928 30.3275 62.3529 30.3074 64.1333C30.3074 71.1349 30.3074 78.1164 30.3074 85.118C30.3074 86.8984 30.9499 87.5585 32.6967 87.5585C36.9734 87.5785 41.2501 87.5785 45.5267 87.5585C47.2334 87.5585 47.8759 86.8984 47.8759 85.198C47.896 81.6972 47.896 78.1964 47.896 74.6957Z"
                    fill="url(#paint0_linear_15_745)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_15_745"
                    x1="0.53142"
                    y1="45.8989"
                    x2="77.5248"
                    y2="45.8989"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0298B1" />
                    <stop offset="0.2104" stop-color="#16A3A2" />
                    <stop offset="0.6399" stop-color="#4BBE7C" />
                    <stop offset="1" stop-color="#7BD759" />
                  </linearGradient>
                  <clipPath id="clip0_15_745">
                    <rect
                      width="77"
                      height="90"
                      fill="white"
                      transform="translate(0.531433 0.899414)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p class="text_gradient text-3xl font-bold">842</p>
            <p class="text-gray-500 text-md" data-v-2a4902a9="">
              Listed Airdrops
            </p>
          </div>
          <div class="bg-card flex flex-col items-center justify-center">
            <div class="">
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.4422 75.1203L12.3996 86.1633C11.6935 86.8693 11.6935 88.0099 12.3996 88.7159C12.7616 89.0599 13.2142 89.2409 13.6849 89.2409C14.1375 89.2409 14.6082 89.0599 14.9522 88.7159L25.9948 77.6729C26.7008 76.9669 26.7008 75.8264 25.9948 75.1203C25.2887 74.4143 24.148 74.4143 23.4422 75.1203Z"
                  fill="url(#paint0_linear_16_757)"
                />
                <path
                  d="M14.952 64.0774C14.246 63.3713 13.1056 63.3713 12.3996 64.0774L1.35697 75.1203C0.650933 75.8264 0.650933 76.9669 1.35697 77.6729C1.71904 78.0169 2.17163 78.1979 2.64232 78.1979C3.11301 78.1979 3.5656 78.0169 3.90957 77.6729L14.9522 66.63C15.658 65.9239 15.658 64.7834 14.952 64.0774Z"
                  fill="url(#paint1_linear_16_757)"
                />
                <path
                  d="M88.6476 1.42164C88.3036 1.07767 87.8329 0.878541 87.3442 0.896645C87.0726 0.896645 80.4833 0.98716 71.8121 3.12337C63.7564 5.09666 52.3517 9.27857 43.735 17.9862C39.4084 22.3129 36.2043 27.3093 33.8148 32.2154H11.8927C11.1142 32.2154 10.4263 32.7223 10.1728 33.4464L4.65163 50.0109C4.4706 50.5541 4.56111 51.1696 4.90508 51.6403C5.24905 52.111 5.79215 52.4006 6.37147 52.4006H27.5696C26.6825 57.7773 26.6282 61.416 26.6282 61.6151C26.6282 62.1039 26.8093 62.5746 27.1532 62.9186C27.4972 63.2625 27.9498 63.4436 28.4386 63.4436H28.4567C28.6558 63.4436 32.2944 63.3893 37.6708 62.5022V83.701C37.6708 84.2804 37.9424 84.8235 38.4312 85.1674C38.7389 85.3847 39.1191 85.5114 39.4812 85.5114C39.6803 85.5114 39.8613 85.4752 40.0605 85.4209L56.6243 79.8993C57.3665 79.6459 57.8553 78.9579 57.8553 78.1795V56.2565C62.7612 53.8849 67.7574 50.6806 72.084 46.354C80.7914 37.7188 84.973 26.3136 86.9462 18.2758C89.0821 9.60443 89.1726 3.01475 89.1726 2.74319C89.1726 2.2363 88.9916 1.76561 88.6476 1.42164ZM28.2755 48.7799H8.88767L13.1961 35.8361H32.2039C30.6832 39.5292 29.6153 43.0592 28.8731 46.1187C28.6556 47.0239 28.4565 47.9109 28.2755 48.7799ZM54.2346 76.8762L41.2913 81.1848V61.8143C42.1603 61.6332 43.0293 61.4341 43.9524 61.2168C47.0117 60.4746 50.5417 59.3884 54.2346 57.8858V76.8762ZM83.4161 17.4974C81.5516 25.0645 77.6233 35.7637 69.5314 43.7833C61.4395 51.8754 50.7408 55.8039 43.192 57.6685C37.6165 59.0444 32.8736 59.5332 30.3755 59.7142C30.8099 53.5047 33.2356 33.6093 46.3058 20.5388C54.3253 12.4467 65.024 8.51822 72.5909 6.65356C78.1845 5.27769 82.9455 4.7708 85.4618 4.60787C85.2805 7.12425 84.7917 11.8853 83.4161 17.4974Z"
                  fill="url(#paint2_linear_16_757)"
                />
                <path
                  d="M57.9638 22.9829C57.9638 28.0157 62.055 32.1069 67.0874 32.1069C72.1019 32.1069 76.211 28.0155 76.211 22.9829C76.211 17.9503 72.1198 13.8589 67.0874 13.8589C62.055 13.8589 57.9638 17.9501 57.9638 22.9829ZM72.5907 22.9829C72.5907 25.97 70.0745 28.4864 67.0876 28.4864C64.1007 28.4864 61.5845 25.97 61.5845 22.9829C61.5845 19.9958 64.1007 17.4794 67.0876 17.4794C70.0562 17.4794 72.5907 20.0139 72.5907 22.9829Z"
                  fill="url(#paint3_linear_16_757)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_16_757"
                    x1="19.1972"
                    y1="74.5908"
                    x2="19.1972"
                    y2="89.2409"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0298B1" />
                    <stop offset="1" stop-color="#7BD759" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_16_757"
                    x1="8.15449"
                    y1="63.5479"
                    x2="8.15449"
                    y2="78.1979"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0298B1" />
                    <stop offset="1" stop-color="#7BD759" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_16_757"
                    x1="46.8665"
                    y1="0.895508"
                    x2="46.8665"
                    y2="85.5114"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0298B1" />
                    <stop offset="1" stop-color="#7BD759" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_16_757"
                    x1="67.0874"
                    y1="13.8589"
                    x2="67.0874"
                    y2="32.1069"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0298B1" />
                    <stop offset="1" stop-color="#7BD759" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <p class="text_gradient text-3xl font-bold">42</p>
            <p class="text-gray-500 text-md" data-v-2a4902a9="">Active</p>
          </div>
          <div class="bg-card flex flex-col items-center justify-center">
            <div class="">
              <svg
                width="89"
                height="89"
                viewBox="0 0 89 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_16_764)">
                  <path
                    d="M60.8959 88.8994C53.1073 88.8994 45.2627 85.2012 39.9115 79.0096C34.6164 72.9019 32.291 65.1974 33.4117 57.3247L33.5518 56.2601L32.4871 56.3722C31.4225 56.4843 30.3579 56.5403 29.2933 56.5403C21.3926 56.5403 14.1083 53.5145 8.81316 48.0233C3.91026 42.9523 1.05257 36.1162 0.968521 29.2802C0.772405 13.9831 12.9596 1.26363 28.1166 0.899414C28.3127 0.899414 28.5368 0.899414 28.7329 0.899414C36.6056 0.899414 44.1981 4.34545 49.5492 10.341C54.9564 16.3926 57.3939 24.2652 56.4413 32.5301L56.3292 33.5667L57.3658 33.4827C58.4865 33.3706 59.6352 33.3426 60.6998 33.3426C70.0013 33.3426 77.6218 37.0688 83.2812 44.4091C87.5397 49.9284 89.4168 56.2041 88.8284 63.0681C88.2121 70.2684 85.0462 76.8523 79.8912 81.6151C74.7641 86.3499 68.0402 88.9274 60.924 88.9274H60.8959V88.8994ZM61.2041 36.9287C59.6072 36.9287 58.0102 37.0968 56.4133 37.377C55.7129 37.517 54.9284 38.1614 54.6482 38.8338C51.5664 46.2582 46.2433 51.5533 38.8189 54.6071C38.1745 54.8873 37.5581 55.5877 37.4181 56.2601C36.6616 59.8462 36.7457 63.4604 37.6702 67.0185C40.4438 77.8048 50.0535 85.3133 61.036 85.3133C62.0446 85.3133 63.0532 85.2573 64.0338 85.1172C76.305 83.5202 85.2703 73.4343 85.3824 61.135V61.107V61.079C85.3544 60.6867 85.3264 60.2945 85.2984 59.9023C85.2423 59.0338 85.1863 58.1372 85.0182 57.2687C83.057 45.4737 73.0271 36.9287 61.2041 36.9287ZM28.7609 4.54157C15.4531 4.54157 4.61067 15.356 4.61067 28.6078C4.58266 41.9997 15.4251 52.9262 28.7329 52.9542H28.789C35.2048 52.9542 41.2563 50.4047 45.8791 45.7819C50.5018 41.1592 53.0233 35.0796 52.9953 28.6638C52.9672 15.384 42.0968 4.56958 28.7609 4.54157Z"
                    fill="url(#paint0_linear_16_764)"
                  />
                  <path
                    d="M29.6855 42.4478C36.6056 41.8034 41.7327 36.6484 42.5171 29.6162H45.9071C45.9912 33.2584 44.3662 37.2367 41.5085 40.3466C38.3146 43.8206 34.1402 45.7818 29.6855 45.8938V42.4478Z"
                    fill="url(#paint1_linear_16_764)"
                  />
                  <path
                    d="M62.1007 74.863C69.441 73.7704 73.9517 69.2317 74.9323 62.0034H78.2942C78.3223 65.7857 76.6973 69.68 73.7836 72.8178C70.5897 76.2358 66.3592 78.197 62.1007 78.225V74.863Z"
                    fill="url(#paint2_linear_16_764)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_16_764"
                    x1="22.7832"
                    y1="67.1146"
                    x2="76.2449"
                    y2="13.6529"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0298B1" />
                    <stop offset="0.2104" stop-color="#16A3A2" />
                    <stop offset="0.6399" stop-color="#4BBE7C" />
                    <stop offset="1" stop-color="#7BD759" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_16_764"
                    x1="16.3346"
                    y1="60.6658"
                    x2="69.7963"
                    y2="7.20407"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0298B1" />
                    <stop offset="0.2104" stop-color="#16A3A2" />
                    <stop offset="0.6399" stop-color="#4BBE7C" />
                    <stop offset="1" stop-color="#7BD759" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_16_764"
                    x1="48.7296"
                    y1="93.0608"
                    x2="102.191"
                    y2="39.5991"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0298B1" />
                    <stop offset="0.2104" stop-color="#16A3A2" />
                    <stop offset="0.6399" stop-color="#4BBE7C" />
                    <stop offset="1" stop-color="#7BD759" />
                  </linearGradient>
                  <clipPath id="clip0_16_764">
                    <rect
                      width="88"
                      height="88"
                      fill="white"
                      transform="translate(0.968567 0.899414)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p class="text_gradient text-3xl font-bold">54.04%</p>
            <p class="text-gray-500 text-md" data-v-2a4902a9="">
              ERC20 Token Dominance
            </p>
          </div>
        </div>
      </div>
      <div class="h-0.5 bg-red-900 w-full bg_gradient relative">
        <div class="card absolute h-0.52 -top-10 left-[40%] md:left-[46%]">
          <img :src="logoFire" alt="" />
        </div>
      </div>
    </section> -->
    <section>
      <div class="py-16 px-8 md:px-4">
        <div class="max-w-7xl mx-auto text-center lg:flex-auto">
          <h1 class="max-w-2xl mx-auto text_gradient leading-loose bg-black text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Latest News
          </h1>
          <p class="mt-6 text-base leading-6 text-gray-400">
            Dive into breaking news, insights, and updates about airdrops, cryptocurrencies, and blockchain innovations on Dropzey
          </p>
        </div>
        <div class="max-w-5xl mx-auto pt-10">
          <NewsCard />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script setup>
import Card from "@/components/Card.vue";
import Carousel from "@/components/Carousel.vue";
import banner from "@/assets/banner.png";
import logoFire from "@/assets/Frame 40.svg";
import hero1 from "@/assets/16540-01 1.png";
import hero2 from "@/assets/hero2giveaway.png";
import NewsCard from "@/components/NewsCard.vue";
import Footer from "@/components/Footer.vue";
import Heading from "@/components/Heading.vue";
</script>
<style scoped>
.text_gradient {
  background: linear-gradient(90deg, #0298b1 0.51%, #7bd759 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 50px;
}
.paragraph {
  color: #ffffff51;
  font-size: 16px;
  font-style: normal;
  margin-top: 0px;
  font-weight: 400;
  line-height: 24px;
}
.btn {
  display: inline-flex;
  padding: 14px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: linear-gradient(90deg, #0298b1 0%, #7bd759 100%);
  color: #fff;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.btnB {
  border: 1px solid #fff;
  display: inline-flex;
  padding: 14px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  color: #fff;
  background-color: transparent;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  color: white;
  line-height: normal;
}
</style>
