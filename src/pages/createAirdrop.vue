<template>
  <div class="">
    <div class="py-16 max-w-7xl mx-auto">
      <h1 class="max-w-2xl mx-auto text-center text_gradient leading-loose bg-black text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Create an Airdrop
      </h1>
      <div class="shadow-xl rounded-xl px-4 sm:px-12 py-12 mt-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <!-- <h1 class="text-xl text-center font-bold mt-2 col-span-1 md:col-span-2" data-v-8b4eb8e5="">
            Profile Info
          </h1> -->
          <div class="">
            <h1 class="text-base flex items-center gap-2 font-medium mb-2 mt-2" data-v-8b4eb8e5="">
             Logo <span style="color: red">*</span>
              <svg
                v-tooltip="'Upload the project logo'"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </h1>
            <img
              class="w-28 h-28 rounded-full object-cover"
              :src="iconImage"
              alt=""
            />
          </div>
          <div class="col-span-1 md:col-span-2">
            <h1 class="text-base flex items-center gap-2 font-medium mb-2 mt-2" data-v-8b4eb8e5="">
              Cover <span style="color: red">*</span>
              <svg
                v-tooltip="'Upload the project cover image'"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </h1>
            <div class="border-2 border-dashed rounded-xl py-6">
              <label
                for="file-upload"
                class="file-upload-label flex flex-col items-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="55"
                  viewBox="0 0 54 55"
                  fill="none"
                >
                  <path
                    d="M53.9994 29.2332C53.9954 33.2011 53.9651 36.5737 53.7397 39.3409C53.4781 42.5523 52.9418 45.2355 51.7417 47.4641C51.2125 48.4469 50.5621 49.3274 49.7702 50.1193C47.5227 52.3665 44.6593 53.3847 41.0308 53.8726C37.4854 54.3491 32.9419 54.3491 27.1442 54.3491H26.8558C21.0581 54.3491 16.5144 54.3491 12.9693 53.8726C9.34067 53.3847 6.47735 52.3665 4.22993 50.1193C2.23752 48.1267 1.2086 45.647 0.661446 42.5706C0.123958 39.5488 0.0256234 35.7891 0.00518436 31.1202C3.65556e-07 29.9327 4.06375e-07 28.6767 4.06375e-07 27.3515V27.2049C-2.65936e-05 21.4072 -5.33491e-05 16.8636 0.476577 13.3184C0.96444 9.68979 1.9825 6.82647 4.22993 4.57904C6.47735 2.33162 9.34067 1.31356 12.9693 0.825692C16.122 0.401819 20.1783 0.35492 25.1154 0.349763C26.1557 0.348656 27 1.19249 27 2.23282C27 3.27319 26.1554 4.11616 25.1151 4.11726C20.1082 4.12255 16.3823 4.16816 13.4713 4.55952C10.2604 4.99123 8.32466 5.81227 6.89391 7.24303C5.46315 8.67378 4.64211 10.6095 4.21041 13.8204C3.77144 17.0855 3.76744 21.3759 3.76744 27.3491C3.76744 28.0787 3.76744 28.7839 3.76831 29.467L6.28279 27.267C8.57155 25.2642 12.0211 25.3792 14.1715 27.5295L24.9458 38.3038C26.6719 40.0299 29.3889 40.2651 31.3861 38.8617L32.1351 38.3351C35.009 36.3155 38.8973 36.5496 41.5082 38.8995L48.6173 45.2976C49.3328 43.7948 49.7577 41.8203 49.9845 39.035C50.1984 36.4106 50.2278 33.223 50.2319 29.2334C50.2329 28.1931 51.0759 27.3491 52.1162 27.3491C53.1565 27.3491 54.0005 28.1929 53.9994 29.2332Z"
                    fill="url(#paint0_linear_37_23)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M41.8502 24.649C36.1227 24.649 33.2588 24.649 31.4795 22.8697C29.7002 21.0903 29.7002 18.2266 29.7002 12.499C29.7002 6.77144 29.7002 3.90765 31.4795 2.12833C33.2588 0.348999 36.1227 0.348999 41.8502 0.348999C47.5777 0.348999 50.4416 0.348999 52.2209 2.12833C54.0002 3.90765 54.0002 6.77144 54.0002 12.499C54.0002 18.2266 54.0002 21.0903 52.2209 22.8697C50.4416 24.649 47.5777 24.649 41.8502 24.649ZM43.8752 7.099C43.8752 5.98063 42.9685 5.074 41.8502 5.074C40.7319 5.074 39.8252 5.98063 39.8252 7.099V10.474H36.4502C35.3319 10.474 34.4252 11.3806 34.4252 12.499C34.4252 13.6174 35.3319 14.524 36.4502 14.524H39.8252V17.899C39.8252 19.0174 40.7319 19.924 41.8502 19.924C42.9685 19.924 43.8752 19.0174 43.8752 17.899V14.524H47.2502C48.3685 14.524 49.2752 13.6174 49.2752 12.499C49.2752 11.3806 48.3685 10.474 47.2502 10.474H43.8752V7.099Z"
                    fill="url(#paint1_linear_37_23)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_37_23"
                      x1="26.9997"
                      y1="0.349762"
                      x2="26.9997"
                      y2="54.3491"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0298B1" />
                      <stop offset="1" stop-color="#7BD759" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_37_23"
                      x1="41.8502"
                      y1="0.348999"
                      x2="41.8502"
                      y2="24.649"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0298B1" />
                      <stop offset="1" stop-color="#7BD759" />
                    </linearGradient>
                  </defs>
                </svg>
                <input type="file" id="file-upload" class="hidden" />
                <span class="text-base mt-2 text-gray-700" >Upload</span>
              </label>
            </div>
          </div>
          <div class="col-span-1 md:col-span-2 w-[50%]">
            <div class="">
              <h1 class="text-base flex items-center gap-2 font-medium mb-2" data-v-8b4eb8e5="">
                Name <span style="color: red">*</span>
                <svg
                  v-tooltip="'Enter the name of project, for example: Dropzey'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <div class="">
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="col-span-1 md:col-span-2">
            <div class="">
              <h1 class="text-base flex items-center gap-2 font-medium mb-2" data-v-8b4eb8e5="">
                Description <span style="color: red">*</span>
                <svg
                v-tooltip="'Provide a brief overview of your project. For example, Dropzey is an innovative web application built on the Stellar blockchain and seamlessly integrated with Soroban smart contract technology. \n\n Dropzey is offering a specific number of tokens to a limited participant count. To take part, please follow to the outlined requirements:'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <div class="">
                <input
                  class="border border-gray-300 rounded-md pt-1.5 pb-20 px-2 w-full"
                  type="teatarea"
                />
              </div>
            </div>
          </div>
          <!-- <div class="">
            <div class="">
              <h1 class="text-base flex items-center gap-2 font-medium mb-2" data-v-8b4eb8e5="">
                Country
                <svg
                  v-tooltip="'Write the name of Registered '"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <div class="">
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                />
              </div>
            </div>
          </div> -->
          <div class="">
            <div class="">
              <h1 class="text-base flex items-center gap-2 font-medium mb-2" data-v-8b4eb8e5="">
                Official Website Link <span style="color: red">*</span>
                <svg
                  v-tooltip="'Add an official website link (e.g., https://dropzey.com)'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <div class="">
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="">
              <h1 class="text-base flex items-center gap-2 font-medium mb-2" data-v-8b4eb8e5="">
                Intro Video Link
                <svg
                  v-tooltip="'Add an intro video link (e.g., https://www.youtube.com/watch?v=dN4TKnYr5nQ)'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <div class="flex items-center">
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                />
              </div>
          </div>
          <div class="">
              <h1 class="text-base flex items-center gap-2 font-medium mb-2" data-v-8b4eb8e5="">
                Total Token Allocation <span style="color: red">*</span>
                <svg
                  v-tooltip="'Enter the total number of tokens available or allocated for this purpose (e.g., 1000000)'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <div class="flex items-center">
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                />
              </div>
          </div>
          <div class="">
              <h1 class="text-base flex items-center gap-2 font-medium mb-2" data-v-8b4eb8e5="">
                Reward Amount <span style="color: red">*</span>
                <svg
                  v-tooltip="'Specify the reward amount allocated to each participant in the airdrop (e.g., 10)'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <div class="flex items-center">
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                />
              </div>
          </div>
          <div class="">
              <h1 class="text-base flex items-center gap-2 font-medium mb-2" data-v-8b4eb8e5="">
                Airdrop Start Date <span style="color: red">*</span>
                <svg
                  v-tooltip="'Choose the date when the airdrop campaign will begin.'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <div class="flex items-center">
                <input
                class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                type="date"
              />
              </div>
          </div>
          <div class="">
              <h1 class="text-base flex items-center gap-2 font-medium mb-2" data-v-8b4eb8e5="">
                Airdrop End Date <span style="color: red">*</span>
                <svg
                  v-tooltip="'Set the date on which the airdrop campaign will end.'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <div class="flex items-center">
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="date"
                />
              </div>
          </div>
          <!-- <div class="col-span-1 md:col-span-2"> -->
            <div class="">
              <h1 class="text-base flex items-center gap-2 font-medium mb-2" data-v-8b4eb8e5="">
                Reserve Total Allocated Tokens <span style="color: red">*</span>
                <svg
                  v-tooltip="'Make sure to reserve all the reward tokens you have set aside for the airdrop. Any remaining tokens after the airdrop ends will be returned to your wallet'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <div class="">
                <button class="flex items-center justify-center gap-2 border bg-gray-100 rounded-full px-10 py-1.5 w-full sm:w-auto">
              <span class="text-s text-gray-500 font-medium">
                Reserve Tokens
              </span>
            </button>
                <!-- <div class="py-2 px-4 w-full font-medium overflow-scroll example">
                  <a href="#" class="mx-auto text-center rounded-full text-gray-600 bg-gray-100 bg_gradient px-14 py-3 text-sm font-semibold text-white shadow-sm">
                    Reserve Tokens</a>
                </div> -->
      
                <!-- <div class="border border-gray-300 rounded-md py-2 px-4 w-full font-medium overflow-scroll example">
                  <p>GANXQETJKJKPOIYRHNMALK759342HAKNAQWERTYUIOPLK</p>
                </div> -->
              </div>
            </div>
          <!-- </div> -->
          <div class="flex flex-col sm:flex-row items-center gap-5 my-6 col-span-1 md:col-span-2">
            <button class="flex items-center justify-center gap-2 border bg-gray-100 rounded-full px-3 py-1.5 w-full sm:w-auto">
              <span>
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z"
                  />
                </svg>
              </span>
              <span class="text-xs text-gray-500 font-medium">
                Connect Twitter
              </span>
            </button>
            <button class="flex items-center justify-center gap-2 border bg-gray-100 rounded-full px-3 py-1.5 w-full sm:w-auto">
              <span>
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="25"
                  viewBox="0 0 33 25"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.5813 16.9211V7.30087C16.7688 8.9079 19.2376 10.4603 22.1573 12.134C19.7492 13.5649 16.7688 15.1705 13.5813 16.9211ZM31.3454 2.51628C30.7956 1.74012 29.8584 1.13595 28.8607 0.935922C25.9282 0.339265 7.63338 0.337568 4.70245 0.935922C3.90238 1.09662 3.18994 1.48505 2.57794 2.08854C-0.000775278 4.65294 0.807271 18.405 1.42884 20.6326C1.69022 21.5968 2.02811 22.2922 2.45364 22.7487C3.0019 23.3522 3.75255 23.7677 4.61478 23.954C7.02933 24.4892 19.4687 24.7883 28.8097 24.0344C29.6704 23.8737 30.4322 23.4448 31.033 22.8157C33.4173 20.2615 33.2547 5.73716 31.3454 2.51628Z"
                    fill="#DD4B39"
                  />
                </svg>
              </span>
              <span class="text-xs text-gray-500 font-medium">
                Connect Youtube
              </span>
            </button>
            <button class="flex items-center justify-center gap-2 border bg-gray-100 rounded-full px-3 py-1.5 w-full sm:w-auto">
              <span>
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 199"
                >
                  <path
                    fill="#5865F2"
                    d="M216.856 16.597A208.502 208.502 0 0 0 164.042 0c-2.275 4.113-4.933 9.645-6.766 14.046c-19.692-2.961-39.203-2.961-58.533 0c-1.832-4.4-4.55-9.933-6.846-14.046a207.809 207.809 0 0 0-52.855 16.638C5.618 67.147-3.443 116.4 1.087 164.956c22.169 16.555 43.653 26.612 64.775 33.193A161.094 161.094 0 0 0 79.735 175.3a136.413 136.413 0 0 1-21.846-10.632a108.636 108.636 0 0 0 5.356-4.237c42.122 19.702 87.89 19.702 129.51 0a131.66 131.66 0 0 0 5.355 4.237a136.07 136.07 0 0 1-21.886 10.653c4.006 8.02 8.638 15.67 13.873 22.848c21.142-6.58 42.646-16.637 64.815-33.213c5.316-56.288-9.08-105.09-38.056-148.36ZM85.474 135.095c-12.645 0-23.015-11.805-23.015-26.18s10.149-26.2 23.015-26.2c12.867 0 23.236 11.804 23.015 26.2c.02 14.375-10.148 26.18-23.015 26.18Zm85.051 0c-12.645 0-23.014-11.805-23.014-26.18s10.148-26.2 23.014-26.2c12.867 0 23.236 11.804 23.015 26.2c0 14.375-10.148 26.18-23.015 26.18Z"
                  />
                </svg>
              </span>
              <span class="text-xs text-gray-500 font-medium">
                Connect Discord
              </span>
            </button>
          </div>
          <div class="col-span-1 md:col-span-2 w-[100%]">
            <div class="">
              <h1 class="text-xl text-center font-bold mt-2 col-span-1 md:col-span-2" data-v-8b4eb8e5="">
                Airdrop Requirements
              </h1>
            </div>
          </div>
          
          <div class="">
            <div class="">
              <h1 class="text-base flex items-center gap-2 font-medium mb-2" data-v-8b4eb8e5="">
                Twitter Profile Link
                <svg
                  v-tooltip="'Enter your Twitter profile link here for participants to follow'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <div class="flex items-center">
                <input id="TwitterFollowLinkCheckbox" type="checkbox" class="h-4 w-4 mr-2 border-gray-300 rounded-sm focus:ring-indigo-500"
                  style="margin: revert;"
                  v-model="TwitterFollowLinkisChecked" />
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                  :disabled="!TwitterFollowLinkisChecked"
                />
              </div>
            </div>
          </div>
          <div class="">
            <div class="">
              <h1 class="text-base flex items-center gap-2 font-medium mb-2" data-v-8b4eb8e5="">
                Twitter Tweet Link
                <svg
                  v-tooltip="'Enter your Tweet link here for participants to like and retweet'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <div class="flex items-center">
                <input id="TwitterRetweetLikeLinkCheckbox" type="checkbox" class="h-4 w-4 mr-2 border-gray-300 rounded-sm focus:ring-indigo-500"
                  style="margin: revert;"
                  v-model="TwitterRetweetLikeLinkisChecked" />
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                  :disabled="!TwitterRetweetLikeLinkisChecked"
                />
              </div>
            </div>
          </div>
          <div class="">
            <div class="">
              <h1 class="text-base flex items-center gap-2 font-medium mb-2" data-v-8b4eb8e5="">
                Telegram Channel Link
                <svg
                  v-tooltip="'Enter your Telegram channel link here so that participants can join your Telegram channel'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <div class="flex items-center">
                <input id="TelegramChannelLinkCheckbox" type="checkbox" class="h-4 w-4 mr-2 border-gray-300 rounded-sm focus:ring-indigo-500"
                  style="margin: revert;"
                  v-model="TelegramChannelLinkisChecked" />
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                  :disabled="!TelegramChannelLinkisChecked"
                />
              </div>
            </div>
          </div>
          <div class="">
            <div class="">
              <h1 class="text-base flex items-center gap-2 font-medium mb-2" data-v-8b4eb8e5="">
                Discord Channel Link
                <svg
                  v-tooltip="'Enter your Discord channel link here, allowing participants to join your Discord community.'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <div class="flex items-center">
                <input id="DiscordLinkCheckbox" type="checkbox" class="h-4 w-4 mr-2 border-gray-300 rounded-sm focus:ring-indigo-500"
                  style="margin: revert;"
                  v-model="DiscordLinkisChecked" />
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                  :disabled="!DiscordLinkisChecked"
                />
              </div>
            </div>
          </div>
          <div class="">
            <div class="">
              <h1 class="text-base flex items-center gap-2 font-medium mb-2" data-v-8b4eb8e5="">
                Youtube Channel Link
                <svg
                  v-tooltip="'Add your YouTube channel link for participants to subscribe to your channel'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <div class="flex items-center">
                <input id="Youtubechannelcheckbox" type="checkbox" class="h-4 w-4 mr-2 border-gray-300 rounded-sm focus:ring-indigo-500"
                  style="margin: revert;"
                  v-model="YoutubechannelisChecked" />
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                  :disabled="!YoutubechannelisChecked"
                />
              </div>
            </div>
          </div>
          <div class="">
            <div class="">
              <h1 class="text-base flex items-center gap-2 font-medium mb-2" data-v-8b4eb8e5="">
                Youtube Video Link
                <svg
                  v-tooltip="'Please add your YouTube video link here so that participants can like your video.'"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </h1>
              <div class="flex items-center">
                <input id="YoutubevideoLinkCheckbox" type="checkbox" class="h-4 w-4 mr-2 border-gray-300 rounded-sm focus:ring-indigo-500"
                  style="margin: revert;"
                  v-model="YoutubevideoLinkisChecked" />
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                  :disabled="!YoutubevideoLinkisChecked"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 flex items-center gap-x-6 w-full" data-v-933e9cdf="" data-v-0a3af7de="" data-v-8b4eb8e5="">
        <a href="#"
          class="mx-auto text-center rounded-full text-gray-600 bg-gray-100 bg_gradient px-14 py-3 text-sm font-semibold text-white shadow-sm"
          data-v-933e9cdf=""
          data-v-0a3af7de=""
          data-v-8b4eb8e5=""
          >Create Airdrop</a
        >
      </div>

      <!-- If User is not logged In  -->
      <!-- <div class="mt-8 flex items-center gap-x-6 w-full" data-v-933e9cdf="" data-v-0a3af7de="" data-v-8b4eb8e5="">
        <a href="#"
          class="mx-auto text-center rounded-full text-gray-600 bg-gray-100 bg_gradient px-14 py-3 text-sm font-semibold text-white shadow-sm"
          data-v-933e9cdf=""
          data-v-0a3af7de=""
          data-v-8b4eb8e5=""
          >Sign In</a
        >
      </div> -->
    </div>
    <Footer />
  </div>
</template>
<script setup>
import iconImage from "@/assets/iconimage.png";
import Footer from "@/components/Footer.vue";
import { ref } from 'vue'; // Import 'ref' from Vue to declare reactive properties
import {
  // Directives
  VTooltip,
  VClosePopper,
  // Components
  Dropdown,
  Tooltip,
  Menu,
} from "floating-vue";
const message = "cool";
import "floating-vue/dist/style.css";


const videoLinkisChecked = ref(false);
const TwitterFollowLinkisChecked = ref(false);
const TwitterRetweetLikeLinkisChecked = ref(false);
const TelegramChannelLinkisChecked = ref(false);
const DiscordLinkisChecked = ref(false);
const isChecked = ref(false);
const YoutubevideoLinkisChecked = ref(false);
const YoutubechannelisChecked = ref(false);


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
``