<template>
  <div class="">
    <div class="py-16 mx-auto max-w-7xl">
      <h1 class="max-w-2xl mx-auto text-3xl font-bold leading-loose tracking-tight text-center text-gray-900 bg-black text_gradient sm:text-5xl">
        Create an Airdrop
      </h1>
      <form id="this_airdrop_form">
      <div class="px-4 py-12 mt-12 shadow-xl rounded-xl sm:px-12">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
          <h1 class="col-span-1 mt-2 text-xl font-bold text-center md:col-span-2" data-v-8b4eb8e5="">
            Profile Info
          </h1>
          <div class="">
            <h1 class="flex items-center gap-2 mt-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
             Project Logo <span style="color: red">*</span>
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
              class="object-cover rounded-full w-28 h-28"
              :src="logoImg"
              alt=""
              @click="selectProjectLogo"
            />
          </div>
          <div class="col-span-1 md:col-span-2">
            <h1 class="flex items-center gap-2 mt-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
              Project Cover Image <span style="color: red">*</span>
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

            <div id="project_cover" style="background-position: center; background-size: cover;" @click="selectProjectCover" class="py-6 border-2 border-dashed rounded-xl">
              <label
                for="file-upload"
                class="flex flex-col items-center cursor-pointer file-upload-label"
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
                <span class="mt-2 text-base text-gray-700" >Upload</span>
              </label>
            </div>

          </div>
          <div class="col-span-1 md:col-span-2 w-[50%]">
            <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
                Project Name <span style="color: red">*</span>
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
                  autocomplete=""
                  v-model="form_details.name"
                  required
                />
              </div>
            </div>
          </div>
          <div class="col-span-1 md:col-span-2">
            <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
                Project Description <span style="color: red">*</span>
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
              <!-- <div class="">
                <input
                  class="border border-gray-300 rounded-md pt-1.5 pb-20 px-2 w-full"
                  type="textarea"
                />
              </div> -->

              <div class="pb-10">
                <textarea
                  class="border border-gray-300 rounded-md pt-1.5 pb-20 px-2 w-full"
                  v-model="description"
                  @input="updateCharacterCount"
                  required
                ></textarea>
                <div class="absolute text-sm text-gray-500 bottom-2 right-2">{{ characterCount }}/1000 characters</div>
              </div>

            </div>
          </div>
          <!-- <div class="">
            <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
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
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
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
                  v-model="form_details.website"
                  required
                />
              </div>
            </div>
          </div>
          <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
                Project Intro Video Link (Optional)
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
                  v-model="form_details.intro_link"
                />
              </div>
          </div>
          <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
                Asset Code <span style="color: red">*</span>
                <svg
                  v-tooltip="'Specify the Stellar asset code eg. USDC'"
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
                  v-model="form_details.asset_code"
                  required
                />
              </div>
          </div>
          <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
                Asset Issuer<span style="color: red">*</span>
                <svg
                  v-tooltip="'Specify the asset issuer address. This is needed to access the asset'"
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
                  placeholder="Address...."
                  v-model="form_details.asset_issuer"
                  required
                />
              </div>
          </div>
          <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
                Total Tokens<span style="color: red">*</span>
                <svg
                  v-tooltip="'Specify the quantity of total tokens you want to distribute in the airdrop (e.g. 1000000)'"
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
                  type="number"
                  min="1"
                  v-model="form_details.total_token"
                  required
                />
              </div>
          </div>
          <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
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
                  type="number"
                  min="1"
                  v-model="form_details.reward_amount"
                  required
                />
              </div>
          </div>
          <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
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
                v-model="form_details.start_date"
                :min="DATE_MAX"
                required
              />
              </div>
          </div>
          <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
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
                  v-model="form_details.end_date"
                  required
                  :min="DATE_MAX" 
                />
              </div>
          </div>
          <!-- <div class="col-span-1 md:col-span-2"> -->
            <!-- <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
                Reserve Total Tokens <span style="color: red">*</span>
                <svg
                  v-tooltip="'Make sure to reserve total tokens you have set for the airdrop. Any remaining tokens after the airdrop ends will be returned to your wallet'"
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
              <span class="font-medium text-gray-500 text-s">
                Reserve Tokens
              </span>
            </button> -->
                <!-- <div class="w-full px-4 py-2 overflow-scroll font-medium example">
                  <a href="#" class="py-3 mx-auto text-sm font-semibold text-center text-white text-gray-600 bg-gray-100 rounded-full shadow-sm bg_gradient px-14">
                    Reserve Tokens</a>
                </div> -->
      
                <!-- <div class="w-full px-4 py-2 overflow-scroll font-medium border border-gray-300 rounded-md example">
                  <p>GANXQETJKJKPOIYRHNMALK759342HAKNAQWERTYUIOPLK</p>
                </div> -->
              <!-- </div>
            </div> -->
          <!-- </div> -->

          <!-- Social Media Links -->
          <!-- <div class="flex flex-col items-center col-span-1 gap-5 my-6 sm:flex-row md:col-span-2">
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
              <span class="text-xs font-medium text-gray-500">
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
              <span class="text-xs font-medium text-gray-500">
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
              <span class="text-xs font-medium text-gray-500">
                Connect Discord
              </span>
            </button>
          </div> -->
          <div class="col-span-1 md:col-span-2 w-[100%] mt-12">
            <div class="">
              <h1 class="col-span-1 mt-2 text-xl font-bold text-center md:col-span-2" data-v-8b4eb8e5="">
                Project Social Media Links
              </h1>
            </div>
          </div>
          
          <div class="">
            <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
                Twitter
                <svg
                  v-tooltip="'Enter Project Twitter Profie link'"
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
                <input id="TwitterFollowLinkCheckbox" type="checkbox" class="w-4 h-4 mr-2 border-gray-300 rounded-sm focus:ring-indigo-500"
                  style="margin: revert;"
                  v-model="projectTwitterLinkisChecked" />
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                  v-model="social_details.twitter"
                  :disabled="!projectTwitterLinkisChecked"
                  @input="validateLinks($event)"
                />
              </div>
            </div>
          </div>
          <div class="">
            <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
                Telegram
                <svg
                  v-tooltip="'Enter Project Telegram Channel Link'"
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
                <input id="TelegramChannelLinkCheckbox" type="checkbox" class="w-4 h-4 mr-2 border-gray-300 rounded-sm focus:ring-indigo-500"
                  style="margin: revert;"
                  v-model="projectTelegramChannelLinkisChecked" />
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                  v-model="social_details.telegram"
                  :disabled="!projectTelegramChannelLinkisChecked"
                  @input="validateLinks($event)"
                />
              </div>
            </div>
          </div>
          <div class="">
            <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
                Discord
                <svg
                  v-tooltip="'Enter Project Official Discord Channel Link.'"
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
                <input id="DiscordLinkCheckbox" type="checkbox" class="w-4 h-4 mr-2 border-gray-300 rounded-sm focus:ring-indigo-500"
                  style="margin: revert;"
                  v-model="projectDiscordLinkisChecked" />
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                  v-model="social_details.discord"
                  :disabled="!projectDiscordLinkisChecked"
                  @input="validateLinks($event)"
                />
              </div>
            </div>
          </div>
          <div class="">
            <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
                Youtube
                <svg
                  v-tooltip="'Enter Project Official YouTube Channel Link.'"
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
                <input id="Youtubechannelcheckbox" type="checkbox" class="w-4 h-4 mr-2 border-gray-300 rounded-sm focus:ring-indigo-500"
                  style="margin: revert;"
                  v-model="projectYoutubeLinkisChecked" />
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                  v-model="social_details.youtube"
                  :disabled="!projectYoutubeLinkisChecked"
                  @input="validateLinks($event)"
                />
              </div>
            </div>
          </div>
          <div class="">
            <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
                FaceBook
                <svg
                  v-tooltip="'Enter Project Official FaceBook Page Link.'"
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
                <input id="Youtubechannelcheckbox" type="checkbox" class="w-4 h-4 mr-2 border-gray-300 rounded-sm focus:ring-indigo-500"
                  style="margin: revert;"
                  v-model="projectfacebookisChecked" />
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                  v-model="social_details.facebook"
                  :disabled="!projectfacebookisChecked"
                  @input="validateLinks($event)"
                />
              </div>
            </div>
          </div>
          
          <div class="">
            <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
                Instagram
                <svg
                  v-tooltip="'Enter Project Official Instagram Profile Link.'"
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
                <input id="Youtubechannelcheckbox" type="checkbox" class="w-4 h-4 mr-2 border-gray-300 rounded-sm focus:ring-indigo-500"
                  style="margin: revert;"
                  v-model="projectinstagramlisChecked" />
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                  v-model="social_details.youtube"
                  :disabled="!projectinstagramlisChecked"
                  @input="validateLinks($event)"
                />
              </div>
            </div>
          </div>
          
          <div class="col-span-1 md:col-span-2 w-[100%] mt-12">
            <div class="">
              <h1 class="col-span-1 mt-2 text-xl font-bold text-center md:col-span-2" data-v-8b4eb8e5="">
                Airdrop Participating Requirements
              </h1>
            </div>
          </div>
          
          <div class="" style='display:none'>
            <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
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
                <input id="TwitterFollowLinkCheckbox" type="checkbox" class="w-4 h-4 mr-2 border-gray-300 rounded-sm focus:ring-indigo-500"
                  style="margin: revert;"
                  v-model="TwitterFollowLinkisChecked" />
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                  v-model="social_form.twitter"
                  :disabled="!TwitterFollowLinkisChecked"
                  @input="validateLinks($event)"
                />
              </div>
            </div>
          </div>
          <div class="" style='display:none'>
            <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
                Twitter Like/Retweet Link
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
                <input id="TwitterRetweetLikeLinkCheckbox" type="checkbox" class="w-4 h-4 mr-2 border-gray-300 rounded-sm focus:ring-indigo-500"
                  style="margin: revert;"
                  v-model="TwitterRetweetLikeLinkisChecked" />
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                  v-model="social_form.twitter_like"
                  :disabled="!TwitterRetweetLikeLinkisChecked"
                  @input="validateLinks($event)"
                />
              </div>
            </div>
          </div>
          <div class="">
            <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
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
                <input id="TelegramChannelLinkCheckbox" type="checkbox" class="w-4 h-4 mr-2 border-gray-300 rounded-sm focus:ring-indigo-500"
                  style="margin: revert;"
                  v-model="TelegramChannelLinkisChecked" />
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                  v-model="social_form.telegram"
                  disabled
                  @input="validateLinks($event)"
                />
              </div>
            </div>
          </div>
          <div class="">
            <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
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
                <input id="DiscordLinkCheckbox" type="checkbox" class="w-4 h-4 mr-2 border-gray-300 rounded-sm focus:ring-indigo-500"
                  style="margin: revert;"
                  v-model="DiscordLinkisChecked" />
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                  v-model="social_form.discord"
                  disabled
                />
              </div>
            </div>
          </div>
          <div class="">
            <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
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
                <input id="Youtubechannelcheckbox" type="checkbox" class="w-4 h-4 mr-2 border-gray-300 rounded-sm focus:ring-indigo-500"
                  style="margin: revert;"
                  v-model="YoutubechannelisChecked" />
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                  v-model="social_form.youtube"
                  disabled 
                  @input="validateLinks($event)"
                />
              </div>
            </div>
          </div>
          <div class="">
            <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
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
                <input id="YoutubevideoLinkCheckbox" type="checkbox" class="w-4 h-4 mr-2 border-gray-300 rounded-sm focus:ring-indigo-500"
                  style="margin: revert;"
                  v-model="YoutubevideoLinkisChecked" />
                <input
                  class="border border-gray-300 rounded-md py-1.5 px-2 w-full"
                  type="text"
                  v-model="social_form.youtube_video"
                  disabled 
                  @input="validateLinks($event)"
                />
              </div>
            </div>
          </div>
          <div class="col-span-1 md:col-span-2 w-[100%] mt-20">
            <div class="">
              <h1 class="col-span-1 mt-2 text-xl font-bold text-center md:col-span-2" data-v-8b4eb8e5="">
                Airdrop Participating Eligibilities
              </h1>
            </div>
          </div>
          
          <div class="">
            <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
                Gender
                <svg
                  v-tooltip="'Select Gender'"
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
              <div class="relative">
                <select id="gender_req" class="flex items-center border border-gray-300 rounded-md px-2 py-1.5 w-full cursor-pointer">
                  <option value="B">Both</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div class="">
            <div class="">
              <h1 class="flex items-center gap-2 mb-2 text-base font-medium" data-v-8b4eb8e5="">
                Location
                <svg
                  v-tooltip="'Choose countries where people can join the airdrop'"
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
              <div class="relative">
                <select id="country_req" class="flex items-center border border-gray-300 rounded-md px-2 py-1.5 w-full cursor-pointer">
                  <option value="All">All</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="US">USA</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="!isWalletConnected" class="flex items-center w-full mt-8 gap-x-6" data-v-933e9cdf="" data-v-0a3af7de="" data-v-8b4eb8e5="">
        <a 
          class="py-3 mx-auto text-sm font-semibold text-center text-white text-gray-600 bg-gray-100 rounded-full shadow-sm bg_gradient px-14"
          data-v-933e9cdf=""
          data-v-0a3af7de=""
          data-v-8b4eb8e5=""
          @click="doConnectWallet"
          >
          Connect Wallet
      </a>
      </div>

      <div v-else-if="isLogin" class="flex items-center w-full mt-8 gap-x-6" data-v-933e9cdf="" data-v-0a3af7de="" data-v-8b4eb8e5="">
        <button href="#"
          class="py-3 mx-auto text-sm font-semibold text-center text-white text-gray-600 bg-gray-100 rounded-full shadow-sm bg_gradient px-14"
          data-v-933e9cdf=""
          data-v-0a3af7de=""
          data-v-8b4eb8e5=""
          type="submit"
          :disabled="buttonDisabled"
          >
          {{ButtonValue}}
        </button>
      </div>
      
      <!-- If User is not logged In  -->
      <div v-else class="flex items-center w-full mt-8 gap-x-6" data-v-933e9cdf="" data-v-0a3af7de="" data-v-8b4eb8e5="">
        <a @click="doSignUp"
          class="py-3 mx-auto text-sm font-semibold text-center text-white text-gray-600 bg-gray-100 rounded-full shadow-sm bg_gradient px-14"
          data-v-933e9cdf=""
          data-v-0a3af7de=""
          data-v-8b4eb8e5=""
          >Sign In
      </a>
      </div>
      </form>
      <!-- Discord verification popup -->
      <div id='verify_link_modal' v-if="DiscordLinkisChecked" class="pop_up" @click="hideLinkModal($event)" >
        <div class='modal'>
            <center class='text_gradient'><h4>Verify Discord link</h4></center>
            <div>
              <span
                v-if="linkPopUpState.show && popUpLinks.link !== ''"
              >
              <span v-if="linkPopUpState.status == 'good'" style='color:limegreen' class="fa-regular fa-check-circle"></span>
              <span v-else-if="linkPopUpState.status == 'error'" style='color:red' class="fa-regular fa-circle-xmark"></span>
               
              <span v-if="linkPopUpState.status == 'good'" style='color:limegreen;margin-left:2px'>
                {{  linkPopUpState.msg }}
              </span>
              <span v-else-if="linkPopUpState.status == 'error'" style='color:red;margin-left:2px'>
                {{  linkPopUpState.msg }}
              </span>
              </span>
              <input  
                class='border border-gray-300 rounded-md py-1.5 px-2 w-full'
                placeholder="https://discord.com/channels/XXXXX/XXXXX"
                v-model="popUpLinks.link"
              />
            </div>
            <button  
              class="py-3 mx-auto text-sm font-semibold text-center text-white text-gray-600 bg-gray-100 rounded-full shadow-sm bg_gradient px-14"
              @click="verifyLink($event)"
              >
              {{ linkPopUpButton }}
            </button>
        </div>
      </div>
      <!-- Telegram verification popup -->
      <div id='verify_link_tele_modal' v-if="TelegramChannelLinkisChecked" class="pop_up" @click="hideTeleLinkModal($event)" >
        <div class='modal'>
            <center class='text_gradient'><h4>Verify Telegram link</h4></center>
            <div>
              <span
                v-if="linkPopUpState.show && popUpLinks.link !== ''"
              >
              <span v-if="linkPopUpState.status == 'good'" style='color:limegreen' class="fa-regular fa-check-circle"></span>
              <span v-else-if="linkPopUpState.status == 'error'" style='color:red' class="fa-regular fa-circle-xmark"></span>
               
              <span v-if="linkPopUpState.status == 'good'" style='color:limegreen;margin-left:2px'>
                {{  linkPopUpState.msg }}
              </span>
              <span v-else-if="linkPopUpState.status == 'error'" style='color:red;margin-left:2px'>
                {{  linkPopUpState.msg }}
              </span>
              </span>
              <span>
                Add @dropzey_bot to your channel and set as admin
              </span>
              <input  
                class='border border-gray-300 rounded-md py-1.5 px-2 w-full'
                placeholder="https://t.me/XXXXXXX"
                v-model="popUpLinks.link"
              />
            </div>
            <button  
              class="py-3 mx-auto text-sm font-semibold text-center text-white text-gray-600 bg-gray-100 rounded-full shadow-sm bg_gradient px-14"
              @click="verifyTeleLink($event)"
              >
              {{ linkPopUpButton }}
            </button>
        </div>
      </div>
      <!-- Youtube verification popup -->
      <div id='verify_link_you_modal' v-if="YoutubechannelisChecked" class="pop_up" @click="hideYouLinkModal($event)" >
        <div class='modal'>
            <center class='text_gradient'><h4>Verify Youtube link</h4></center>
            <div>
              <span
                v-if="linkPopUpState.show && popUpLinks.link !== ''"
              >
              <span v-if="linkPopUpState.status == 'good'" style='color:limegreen' class="fa-regular fa-check-circle"></span>
              <span v-else-if="linkPopUpState.status == 'error'" style='color:red' class="fa-regular fa-circle-xmark"></span>
               
              <span v-if="linkPopUpState.status == 'good'" style='color:limegreen;margin-left:2px'>
                {{  linkPopUpState.msg }}
              </span>
              <span v-else-if="linkPopUpState.status == 'error'" style='color:red;margin-left:2px'>
                {{  linkPopUpState.msg }}
              </span>
              </span>
              <input  
                class='border border-gray-300 rounded-md py-1.5 px-2 w-full'
                placeholder="https://www.youtube.com/channel/XXXXXXX"
                v-model="popUpLinks.link"
              />
            </div>
            <button  
              class="py-3 mx-auto text-sm font-semibold text-center text-white text-gray-600 bg-gray-100 rounded-full shadow-sm bg_gradient px-14"
              @click="verifyYouLink($event)"
              >
              {{ linkPopUpButton }}
            </button>
        </div>
      </div>
      <!-- Youtube video verification popup -->
      <div id='verify_link_youvid_modal' v-if="YoutubevideoLinkisChecked" class="pop_up" @click="hideYouVidLinkModal($event)" >
        <div class='modal'>
            <center class='text_gradient'><h4>Verify Youtube video link</h4></center>
            <div>
              <span
                v-if="linkPopUpState.show && popUpLinks.link !== ''"
              >
              <span v-if="linkPopUpState.status == 'good'" style='color:limegreen' class="fa-regular fa-check-circle"></span>
              <span v-else-if="linkPopUpState.status == 'error'" style='color:red' class="fa-regular fa-circle-xmark"></span>
               
              <span v-if="linkPopUpState.status == 'good'" style='color:limegreen;margin-left:2px'>
                {{  linkPopUpState.msg }}
              </span>
              <span v-else-if="linkPopUpState.status == 'error'" style='color:red;margin-left:2px'>
                {{  linkPopUpState.msg }}
              </span>
              </span>
              <input  
                class='border border-gray-300 rounded-md py-1.5 px-2 w-full'
                placeholder="https://www.youtube.com/watch?v=XXXXXX"
                v-model="popUpLinks.link"
              />
            </div>
            <button  
              class="py-3 mx-auto text-sm font-semibold text-center text-white text-gray-600 bg-gray-100 rounded-full shadow-sm bg_gradient px-14"
              @click="verifyYouVidLink($event)"
              >
              {{ linkPopUpButton }}
            </button>
        </div>
      </div>

    </div>
    <Footer />
  </div>
</template>
<script setup>
import iconImage from "@/assets/iconimage.png";
import Footer from "@/components/Footer.vue";
import { ref, reactive } from 'vue'; // Import 'ref' from Vue to declare reactive properties
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
import { E, hasLogin, onRender, selectImage, getWallet, authLogin, isURL} from "../utils/utils";
import {API_URL, MAX_SIZE_EXCEEDED} from "../utils/constant"
import Swal from 'sweetalert2';
import {
    getPublicKey,
} from "@stellar/freighter-api";
import {wrapAsset, verifyAsset, createAirdrop} from "../utils/stellar"
import axios from 'axios'

const isLogin = ref(hasLogin());
const canSaveLogo = ref({
  flag:false, img:null
});
const canSaveCover = ref({
  flag:false, img:null
});
const logoImg = ref(iconImage);
const isWalletConnected = ref(false)
const ButtonValue = ref("Create Airdrop")
const buttonDisabled = ref(false)
const videoLinkisChecked = ref(false);
const TwitterFollowLinkisChecked = ref(false);
const TwitterRetweetLikeLinkisChecked = ref(false);
const TelegramChannelLinkisChecked = ref(false);
const DiscordLinkisChecked = ref(false);
const isChecked = ref(false);
const YoutubevideoLinkisChecked = ref(false);
const YoutubechannelisChecked = ref(false);
const ProfileAgeisChecked = ref(false);
const DATE_MAX =  (new Date().toISOString().split('T')[0]);
const linkPopUpButton = ref("Verify")
const linkPopUpState = ref({
  status:"norm",
  msg:"",
  show:false
})


 // Reactive object to store form values
const form_details = reactive({
    name: "",
    website:"",
    asset_code: "",
    intro_link:"",
    asset_issuer: "",
    total_token: 0,
    reward_amount: 0,
    start_date: "",
    end_date: ""
});
//Social media links form
const social_details = reactive({
    twitter:"",
    discord:"",
    facebook:"",
    telegram:"",
    youtube:"",
    instagram:""
});
//social links participating
const social_form = reactive({
    twitter:"",
    twitter_like:"",
    discord:"",
    telegram:"",
    youtube:"",
    youtube_video:"",
    youtube_channel_id:""
});
//pop up link verifications
const popUpLinks = reactive({
  link:""
})

const projectTwitterLinkisChecked = ref(false);
const projectTelegramChannelLinkisChecked = ref(false);
const projectDiscordLinkisChecked = ref(false);
const projectYoutubeLinkisChecked = ref(false);
const projectfacebookisChecked = ref(false);
const projectinstagramlisChecked = ref(false);

const description = ref('');
const characterCount = ref(0);

function updateCharacterCount() {
  characterCount.value = description.value.length;
  // Limit the character count to 1000 characters
  if (characterCount.value > 1000) {
    description.value = description.value.slice(0, 1000);
    characterCount.value = 1000;
  }
}

/* HEARINGS */
//create listener to listen for connected changes
hear('logg', async (status) => {
    if(status) {
       isLogin.value = true
    }
    else {
      isLogin.value = false
    }
}) 
hear('connected', async (status) => {
  isWalletConnected.value = status
})

onRender('this_airdrop_form', () => { 
  E('this_airdrop_form').onsubmit = async (event) => { 
    event.preventDefault()
    if(isLogin.value) {
      //validates
      if(!canSaveLogo.value.flag) {
        Swal.fire({
          icon: 'error',
          title: 'Project Logo!',
          text: 'Select a project logo.',
        });
        return;
      }
      else if(!canSaveCover.value.flag) {
        Swal.fire({
          icon: 'error',
          title: 'Project Cover!',
          text: 'Select a project cover photo.',
        });
        return;
      }
      else if(form_details.total_token < form_details.reward_amount) {
        Swal.fire({
          icon: 'error',
          title: 'Token amount!',
          text: 'Reward amount cannot be greater then the total token amount',
        });
        return;
      }
      else if(!isURL(form_details.website)) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid link!',
          text: 'The website link provided is invalid',
        });
        return;
      }
      else {
        let flg = social_details.twitter == "" && social_details.discord == "" && social_details.facebook == "" && social_details.telegram == ""
        flg = flg && social_details.instagram == "" && social_details.youtube == ""
        if(flg) {
          Swal.fire({
            icon: 'error',
            title: 'Social media links!',
            text: 'At least provide one social media link.',
          });
          return;
        }
        else {
          let flg = social_form.twitter == "" && social_form.discord == "" && social_form.twitter_like == "" && social_form.telegram == ""
          flg = flg && social_form.youtube_video == "" && social_form.youtube == ""
          if(flg) {
            Swal.fire({
              icon: 'error',
              title: 'Social media Requirements!',
              text: 'At least provide one social media participating requirement.',
            });
            return;
          }
          else {
             //validate the links
             flg = isURL(social_form.twitter) && isURL(social_form.discord) && isURL(social_form.twitter_like) && isURL(social_form.telegram)
             flg = flg && isURL(social_form.youtube)  && isURL(social_form.youtube_video)  && isURL(social_details.twitter) && isURL(social_details.discord)
             flg = flg  && isURL(social_details.facebook) && isURL(social_details.telegram) && isURL(social_details.instagram) && isURL(social_details.youtube) && isURL(form_details.intro_link)
             if(!flg){
                Swal.fire({
                  icon: 'error',
                  title: 'Invalid link!',
                  text: 'One of the links is invalid',
                });
                return;
             }
          }
        }
      }
      const walletKey = await getPublicKey()
      //start
      try{
        buttonDisabled.value = true
        ButtonValue.value = "Checking Asset"
        //verify asset has been wrapped
        const res = await verifyAsset({
          code:form_details.asset_code,
          issuer:form_details.asset_issuer
        }, walletKey)
        if(res !== false) {  
          createAirdrops(res)
        }
        else {
          //wrap asset
          ButtonValue.value = "Wrapping Asset"
          const res = await wrapAsset({
            code:form_details.asset_code,
            issuer:form_details.asset_issuer
          }, walletKey)
          if(res.status) {
              //create airdrop
              createAirdrops(res.code)
          }
          else {
            buttonDisabled.value = false
            ButtonValue.value = "Create Airdrop"
            Swal.fire({
              icon: 'error',
              title: 'Asset Error!',
              text: 'Something wrong with the asset. Try again latter',
            });
          }
        }
      }
      catch(e) {
        buttonDisabled.value = false
        ButtonValue.value = "Create Airdrop"
      }

      async function createAirdrops (assetId) {
          const walletKey = await getPublicKey()
          ButtonValue.value = "creating airdrop...."
          const formData = new FormData()
          //append the bio
          formData.append('name', form_details.name)
          formData.append('about', description.value)
          formData.append('website', form_details.website)
          formData.append('amount', form_details.total_token * 1E7)
          formData.append('reward_amount', form_details.reward_amount * 1E7)
          formData.append('start', form_details.start_date)
          formData.append('end', form_details.end_date)
          formData.append('gender', E('gender_req').value)
          formData.append('country', E('country_req').value)
          formData.append('image', canSaveLogo.value.img)
          formData.append('cover', canSaveCover.value.img)
          formData.append('asset', JSON.stringify({
            code:form_details.asset_code,
            issuer:form_details.asset_issuer,
            address:assetId
          }))
          //format the links
          formData.append('links', JSON.stringify({
              social_links : {
                 twitter: social_details.twitter,
                 facebook: social_details.facebook,
                 discord: social_details.discord,
                 telegram: social_details.telegram,
                 instagram: social_details.instagram,
                 youtube: social_details.youtube,
                 intro_link: form_details.intro_link,
              },
              require: {
                 twitter: social_form.twitter,
                 twitter_like: social_form.twitter_like,
                 discord: social_form.discord,
                 telegram: social_form.telegram,
                 youtube_video: social_form.youtube_video,
                 youtube: social_form.youtube,
                 youtube_channel_id:social_form.youtube_channel_id
              }
          }))
          //append auth
          authLogin(formData) 
          axios.post(`${API_URL}api.php?type=create_airdrop`, formData, {
            headers: {
              'X-CSRF-TOKEN': window.Laravel.csrfToken,
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(async (response) => { 
            if(response.data.status) {
                //success, create the airdrop
                const res = await createAirdrop({
                  owner:walletKey,
                  name:form_details.name,
                  token:assetId,
                  id:response.data.id,
                  amount:form_details.total_token * 1E7,
                  reward_amount: form_details.reward_amount * 1E7,
                  start:(new Date(form_details.start_date)).getTime(),
                  end:(new Date(form_details.end_date)).getTime()
                }, walletKey)
                ButtonValue.value = 'Create Airdrop'
                buttonDisabled.value = false
                if(res.status !== false) {
                    if(res.status == 'done') {
                        Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: "Airdrop created successfully",
                      });
                      
                    }
                    else if(res.status == 'lowfund') {
                        Swal.fire({
                        icon: 'error',
                        title: 'Insufficient balance!',
                        text: "You don't have enough " + form_details.asset_code + ' to reserve for this airdrop',
                      });
                    }
                    else if(res.status == 'samedate') {
                        Swal.fire({
                        icon: 'error',
                        title: 'Same balance!',
                        text: "You don't have enough " + form_details.asset_code + ' to reserve for this airdrop',
                      });
                    }
                    else if(res.status == 'lessdate') {
                        Swal.fire({
                        icon: 'error',
                        title: 'Date error!',
                        text: "The end date cannot be lesser than the current date",
                      });
                    }
                }
                else {
                    Swal.fire({
                      icon: 'error',
                      title: 'Stellar Error!',
                      text: 'Unable to create airdrop. Please try again',
                    });
                }
            }
            else {
              ButtonValue.value = 'Create Airdrop'
              buttonDisabled.value = false
               if(response.data.AUTH === false) {
                    Swal.fire({
                      icon: 'error',
                      title: 'Session Error!',
                      text: 'Session has expired. Please login again',
                    });
                    speak('logg', false)
              }
              else {
                Swal.fire({
                  icon: 'error',
                  title: 'Error!',
                  text: 'Something went wrong',
                });
              }
           }
          })
          .catch((error) => {
            ButtonValue.value = 'Create Airdrop'
            buttonDisabled.value = false
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'An error occurred while processing your request.',
            });
            console.error(error); // Log the error to the console for debugging
          });
      }

    } 
    
  }
})
const validateLinks = (event) => {  
  const elem = event.target
  if(elem.value.trim() != "") {
    if(isURL(elem.value.trim())) { 
        //show the green border
        elem.style.borderColor = 'limegreen'
        return true
    }
    else {
      elem.style.borderColor = 'red'
      return false
    }
  }
  else {
    elem.style.borderColor = ''
    return 1
  }
}
/* CLICKS */ 
const selectProjectLogo = () => {  
  const imgSel = selectImage((res) => {
      if(res === MAX_SIZE_EXCEEDED) {
        //max file size
        Swal.fire({
          icon: 'error',
          title: 'Image Error!',
          text: 'Max size allowed is 5mb',
        });
      }
      else if(res == ""){
        //user selected none
        canSaveLogo.value.flag = false
      }
      else {
        canSaveLogo.value.flag = true
        logoImg.value =  URL.createObjectURL(res)
        canSaveLogo.value.img = res
      }
  })
  imgSel.click()
}
const selectProjectCover = () => {
  const imgSel = selectImage((res) => {
      if(res === MAX_SIZE_EXCEEDED) {
        //max file size
        Swal.fire({
          icon: 'error',
          title: 'Image Error!',
          text: 'Max size allowed is 5mb',
        });
      }
      else if(res == ""){
        //user selected none
        canSaveCover.value.flag = false
      }
      else {
        canSaveCover.value.flag = true
        E('project_cover').style.backgroundImage = `url(${URL.createObjectURL(res)})`
        canSaveCover.value.img = res
      }
  })
  imgSel.click()
}
/* Links verify popup clicks */
const verifyLink = (event) => {
  //to verify discord
  const link = popUpLinks.link.trim()
  if(link != "") {
    if(isURL(link)) {
      linkPopUpButton.value = "verifying"
      if(link.indexOf("https://discord.com/channels") > -1) {
        const guildIdRegex = /channels\/(\d+)\//;
        const matches = link.match(guildIdRegex);
        const guildId = matches && matches[1];
        if(guildId != null) {
          Swal.fire({
                icon: 'success',
                title: 'Verification successfull!',
                text: 'Valid Discord channel',
          }); 
          //hide the view
          social_form.discord = link
          E("verify_link_modal").style.display = 'none'
          DiscordLinkisChecked.value = true
          linkPopUpState.value.show = false
          popUpLinks.link = ""
        }
        else {
          showError("Invalid Discord link")
        }
      }
      else {
        showError("Invalid Discord link")
      }
    }
    else {  
      showError("Invalid Discord link")
    }
  }
  function showError(msg = "") {  
       linkPopUpState.value.show = true
       linkPopUpState.value.msg = msg
       linkPopUpState.value.status = 'error'
  }
}
const verifyTeleLink = (event) => {
  //to verify discord
  const link = popUpLinks.link.trim()
  if(link != "") {
    if(isURL(link)) {
      linkPopUpButton.value = "verifying"
      if(link.indexOf("https://t.me") > -1) {
        const regex = /t\.me\/(?:joinchat\/|)([^\/?]+)/;
        const matches = link.match(regex);
        const tId = matches && matches[1];
        if(tId != null) {
          const formData = authLogin(new FormData()) 
          axios.post(`${API_URL}api.php?type=telegram_verify_v1&telegram_id=@${tId}`, formData, {
              headers: {
                'X-CSRF-TOKEN': window.Laravel.csrfToken,
                'Content-Type': 'multipart/form-data'
              }
          })
          .then(async (response) => {  
            linkPopUpButton.value = "verify"
            if(response.data.status) {
                Swal.fire({
                    icon: 'success',
                    title: 'Verification successfull!',
                    text: 'Valid Telegram channel link',
                }); 
                social_form.telegram = link
                E("verify_link_tele_modal").style.display = 'none'
                TelegramChannelLinkisChecked.value = true
                linkPopUpState.value.show = false
                popUpLinks.link = ""
            }
            else if(response.data.auth === false) {
              Swal.fire({
                icon: 'error',
                title: 'Session expired!',
                text: 'Your session has expired. Please login.',
              }); 
            }
            else if(response.data.telegram_auth === false) {
              Swal.fire({
                icon: 'error',
                title: 'Authentication error!',
                text: 'You have not link your telegram to Dropzey.',
              }); 
            }
            else {
              Swal.fire({
                icon: 'error',
                title: 'Server error!',
                text: 'Something went wrong',
              }); 
            }
          })
          .catch((err) => {
            linkPopUpButton.value = "verify"
            Swal.fire({
              icon: 'error',
              title: 'Network error!',
              text: 'Something went wrong.',
            }); 
          })
        }
        else {
          showError("Unsupported Telegram channel link")
        }
      }
      else {
        showError("Invalid Telegram link")
      }
    }
    else {  
      showError("Invalid Telegram link")
    }
  }
  function showError(msg = "") {  
       linkPopUpState.value.show = true
       linkPopUpState.value.msg = msg
       linkPopUpState.value.status = 'error'
  }
}
const verifyYouLink = (event) => {
  //to verify discord
  const link = popUpLinks.link.trim()
  if(link != "") {
    if(isURL(link)) {
      linkPopUpButton.value = "verifying"
      if(link.indexOf("https://www.youtube.com") > -1) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:c\/|channel\/|user\/)?|youtu\.be\/)([a-zA-Z0-9_-]{24})/;
        // Extract the channel ID using the regular expression
        const match = link.match(regex);
        const yId = match && match[1];
        if(yId != null) { 
          const formData = authLogin(new FormData()) 
          axios.post(`${API_URL}api.php?type=youtube_verify_v1&channel_id=@${yId}`, formData, {
              headers: {
                'X-CSRF-TOKEN': window.Laravel.csrfToken,
                'Content-Type': 'multipart/form-data'
              }
          })
          .then(async (response) => {  
            linkPopUpButton.value = "verify"
            if(response.data.status) {
                Swal.fire({
                    icon: 'success',
                    title: 'Verification successfull!',
                    text: 'Valid Youtube channel link',
                }); 
                social_form.youtube = link
                E("verify_link_you_modal").style.display = 'none'
                YoutubechannelisChecked.value = true
                linkPopUpState.value.show = false
                popUpLinks.link = ""
            }
            else if(response.data.auth === false) {
              Swal.fire({
                icon: 'error',
                title: 'Session expired!',
                text: 'Your session has expired. Please login.',
              }); 
            }
            else if(response.data.youtube_auth === false) {
              Swal.fire({
                icon: 'error',
                title: 'Authentication error!',
                text: 'You have not link your Youtube to Dropzey.',
              }); 
            }
            else {
              Swal.fire({
                icon: 'error',
                title: 'Server error!',
                text: 'Something went wrong',
              }); 
            }
          })
          .catch((err) => {
            linkPopUpButton.value = "verify"
            Swal.fire({
              icon: 'error',
              title: 'Network error!',
              text: 'Something went wrong.',
            }); 
          })
        }
        else {
          showError("Unsupported Youtube channel link")
        }
      }
      else {
        showError("Invalid Youtube link")
      }
    }
    else {  
      showError("Invalid Youtube link")
    }
  }
  function showError(msg = "") {  
       linkPopUpState.value.show = true
       linkPopUpState.value.msg = msg
       linkPopUpState.value.status = 'error'
  }
}
const verifyYouVidLink = (event) => {
  //to verify discord
  const link = popUpLinks.link.trim()
  if(link != "") {
    if(isURL(link)) {
      linkPopUpButton.value = "verifying"
      if(link.indexOf("https://www.youtube.com/watch") > -1) {
        const regex = /[?&]v=([^?&]+)/;
        const match = link.match(regex);
        const vId = match && match[1]
        if(vId != null) { console.log(vId)
          const formData = authLogin(new FormData()) 
          axios.post(`${API_URL}api.php?type=youtube_video_verify_v1&video_id=@${vId}`, formData, {
              headers: {
                'X-CSRF-TOKEN': window.Laravel.csrfToken,
                'Content-Type': 'multipart/form-data'
              }
          })
          .then(async (response) => {    
            linkPopUpButton.value = "verify"
            if(response.data.status) {
                Swal.fire({
                    icon: 'success',
                    title: 'Verification successfull!',
                    text: 'Valid Youtube channel link',
                }); 
                social_form.youtube_video = link
                E("verify_link_youvid_modal").style.display = 'none'
                YoutubevideoLinkisChecked.value = true
                linkPopUpState.value.show = false
                popUpLinks.link = ""
            }
            else if(response.data.auth === false) {
              Swal.fire({
                icon: 'error',
                title: 'Session expired!',
                text: 'Your session has expired. Please login.',
              }); 
            }
            else if(response.data.youtube_auth === false) {
              Swal.fire({
                icon: 'error',
                title: 'Authentication error!',
                text: 'You have not link your Youtube to Dropzey.',
              }); 
            }
            else {
              Swal.fire({
                icon: 'error',
                title: 'Server error!',
                text: 'Something went wrong',
              }); 
            }
          })
          .catch((err) => {
            linkPopUpButton.value = "verify"
            Swal.fire({
              icon: 'error',
              title: 'Network error!',
              text: 'Something went wrong.',
            }); 
          })
        }
        else {
          showError("Unsupported Youtube video link")
        }
      }
      else {
        showError("Invalid Youtube video link")
      }
    }
    else {  
      showError("Invalid Youtube video link")
    }
  }
  function showError(msg = "") {  
       linkPopUpState.value.show = true
       linkPopUpState.value.msg = msg
       linkPopUpState.value.status = 'error'
  }
}
const hideLinkModal = (event) => {
  if(event.target.id == "verify_link_modal") {
    //hide modal
    E("verify_link_modal").style.display = 'none'
    if(social_form.discord == "") {
      //disabled if no prev link set
      DiscordLinkisChecked.value = false
    }
    linkPopUpState.value.show = false
    linkPopUpButton.value = "Verify"
    popUpLinks.link = ""
  }
}
const hideTeleLinkModal = (event) => {
  if(event.target.id == "verify_link_tele_modal") {
    //hide modal
    E("verify_link_tele_modal").style.display = 'none'
    if(social_form.telegram == "") {
      //disabled if no prev link set
      TelegramChannelLinkisChecked.value = false
    }
    linkPopUpState.value.show = false
    linkPopUpButton.value = "Verify"
    popUpLinks.link = ""
  }
}
const hideYouLinkModal = (event) => {
  if(event.target.id == "verify_link_you_modal") {
    //hide modal
    E("verify_link_you_modal").style.display = 'none'
    if(social_form.youtube == "") {
      //disabled if no prev link set
      YoutubechannelisChecked.value = false
    }
    linkPopUpState.value.show = false
    linkPopUpButton.value = "Verify"
    popUpLinks.link = ""
  }
}
const hideYouVidLinkModal = (event) => {
  if(event.target.id == "verify_link_youvid_modal") {
    //hide modal
    E("verify_link_youvid_modal").style.display = 'none'
    if(social_form.youtube_video == "") {
      //disabled if no prev link set
      YoutubevideoLinkisChecked.value = false
    }
    linkPopUpState.value.show = false
    linkPopUpButton.value = "Verify"
    popUpLinks.link = ""
  }
}
//to toggle sign ups
const doSignUp = () => {
  speak('toggle_sign', true)
}
//to toggle connect walett
const doConnectWallet = () => {
  speak('toggle_wallet', true)
}
//setUp
(async function() {
  const res = (await getWallet()) !== false
  isWalletConnected.value = res
})()
</script>
<style scoped>
.text_gradient {
  background: linear-gradient(90deg, #0298b1 0.51%, #7bd759 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 50px;
}
.pop_up {
  position: fixed;
  top:0px;left:0px;
  width:100%;height:100%;
  background: rgba(255,255,255,.6);
  display:flex;
  align-items: center;
  justify-content: center;
}
.pop_up .modal{
  width: calc(100% - 40px);
  max-width:400px;
  min-height:50px;
  height:auto;
  display:flex;
  flex-direction:column;
  box-shadow: 0 0 6px 3px rgba(0,0,0,.1);
  background:#fff !important;
  border-radius:10px;
  transition:all 300ms;
  animation:pop_up_modal 400ms;
}
.pop_up h4 {
  font-weight:bold;
  font-size:20px;
  margin-top: 10px;
}
.pop_up .modal div {
  width:calc(100% - 30px);
  margin-left:15px;
  margin-top:20px;
  display:flex;
  flex-direction: column;
}
.pop_up button {
  margin:20px auto;
  margin-top:30px;
}
.pop_up span {
  margin-bottom: 10px;
  margin: 10px auto;
}
@keyframes pop_up_modal {
   0%{
     transform-origin: center bottom;
     transform:scale(0)
   }
   100% {
    transform:scale(1)
   }
}
</style>
