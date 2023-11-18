<template>
  <swiper
    :slidesPerView="4"
    :spaceBetween="50"
    :navigation="true"
    :modules="modules"
    :breakpoints="{
      250: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    }"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="">
        <div class="card">
          <div class="section1 flex items-center gap-8">
            <div
              class="frame h-14 w-14 bg-[#F7F7F7] flex items-center justify-center rounded-md"
            >
              <img src="../assets/icon-1.png" alt="" />
            </div>
            <h1 class="card_head">Tezos Domains..</h1>
          </div>
          <div
            class="section2 flex my-6 items-center divide-x-2 justify-between"
          >
            <div class="flex items-start flex-col w-[50%]">
              <h1 class="card_bold">$4.159</h1>
              <p class="text-xs text-gray-500 font-medium">Airdroppool</p>
            </div>
            <div class="flex items-end flex-col w-[50%]">
              <h1 class="card_bold">1.3 million</h1>
              <div class="w-[50%] flex">
                <p class="text-xs text-gray-500 font-medium text-left ml-auto">
                  WSL
                </p>
              </div>
            </div>
          </div>
          <div class="section3">
            <div class="tags flex items-center gap-3">
              <div class="tag">Active</div>
              <div class="tag1">4 days left</div>
              <div class="tag1">Claim Now</div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="">
        <div class="card">
          <div class="section1 flex items-center gap-8">
            <div
              class="frame h-14 w-14 bg-[#F7F7F7] flex items-center justify-center rounded-md"
            >
              <img src="../assets/icon-1.png" alt="" />
            </div>
            <h1 class="card_head">Tezos Domains..</h1>
          </div>
          <div
            class="section2 flex my-6 items-center divide-x-2 justify-between"
          >
            <div class="flex items-start flex-col w-[50%]">
              <h1 class="card_bold">$4.159</h1>
              <p class="text-xs text-gray-500 font-medium">Airdroppool</p>
            </div>
            <div class="flex items-end flex-col w-[50%]">
              <h1 class="card_bold">1.3 million</h1>
              <div class="w-[50%] flex">
                <p class="text-xs text-gray-500 font-medium text-left ml-auto">
                  WSL
                </p>
              </div>
            </div>
          </div>
          <div class="section3">
            <div class="tags flex items-center gap-3">
              <div class="tag">Active</div>
              <div class="tag1">4 days left</div>
              <div class="tag1">Claim Now</div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="">
        <div class="card">
          <div class="section1 flex items-center gap-8">
            <div
              class="frame h-14 w-14 bg-[#F7F7F7] flex items-center justify-center rounded-md"
            >
              <img src="../assets/icon-1.png" alt="" />
            </div>
            <h1 class="card_head">Tezos Domains..</h1>
          </div>
          <div
            class="section2 flex my-6 items-center divide-x-2 justify-between"
          >
            <div class="flex items-start flex-col w-[50%]">
              <h1 class="card_bold">$4.159</h1>
              <p class="text-xs text-gray-500 font-medium">Airdroppool</p>
            </div>
            <div class="flex items-end flex-col w-[50%]">
              <h1 class="card_bold">1.3 million</h1>
              <div class="w-[50%] flex">
                <p class="text-xs text-gray-500 font-medium text-left ml-auto">
                  WSL
                </p>
              </div>
            </div>
          </div>
          <div class="section3">
            <div class="tags flex items-center gap-3">
              <div class="tag">Active</div>
              <div class="tag1">4 days left</div>
              <div class="tag1">Claim Now</div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="">
        <div class="card">
          <div class="section1 flex items-center gap-8">
            <div
              class="frame h-14 w-14 bg-[#F7F7F7] flex items-center justify-center rounded-md"
            >
              <img src="../assets/icon-1.png" alt="" />
            </div>
            <h1 class="card_head">Tezos Domains..</h1>
          </div>
          <div
            class="section2 flex my-6 items-center divide-x-2 justify-between"
          >
            <div class="flex items-start flex-col w-[50%]">
              <h1 class="card_bold">$4.159</h1>
              <p class="text-xs text-gray-500 font-medium">Airdroppool</p>
            </div>
            <div class="flex items-end flex-col w-[50%]">
              <h1 class="card_bold">1.3 million</h1>
              <div class="w-[50%] flex">
                <p class="text-xs text-gray-500 font-medium text-left ml-auto">
                  WSL
                </p>
              </div>
            </div>
          </div>
          <div class="section3">
            <div class="tags flex items-center gap-3">
              <div class="tag">Active</div>
              <div class="tag1">4 days left</div>
              <div class="tag1">Claim Now</div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="">
        <div class="card">
          <div class="section1 flex items-center gap-8">
            <div
              class="frame h-14 w-14 bg-[#F7F7F7] flex items-center justify-center rounded-md"
            >
              <img src="../assets/icon-1.png" alt="" />
            </div>
            <h1 class="card_head">Tezos Domains..</h1>
          </div>
          <div
            class="section2 flex my-6 items-center divide-x-2 justify-between"
          >
            <div class="flex items-start flex-col w-[50%]">
              <h1 class="card_bold">$4.159</h1>
              <p class="text-xs text-gray-500 font-medium">Airdroppool</p>
            </div>
            <div class="flex items-end flex-col w-[50%]">
              <h1 class="card_bold">1.3 million</h1>
              <div class="w-[50%] flex">
                <p class="text-xs text-gray-500 font-medium text-left ml-auto">
                  WSL
                </p>
              </div>
            </div>
          </div>
          <div class="section3">
            <div class="tags flex items-center gap-3">
              <div class="tag">Active</div>
              <div class="tag1">4 days left</div>
              <div class="tag1">Claim Now</div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="">
        <div class="card">
          <div class="section1 flex items-center gap-8">
            <div
              class="frame h-14 w-14 bg-[#F7F7F7] flex items-center justify-center rounded-md"
            >
              <img src="../assets/icon-1.png" alt="" />
            </div>
            <h1 class="card_head">Tezos Domains..</h1>
          </div>
          <div
            class="section2 flex my-6 items-center divide-x-2 justify-between"
          >
            <div class="flex items-start flex-col w-[50%]">
              <h1 class="card_bold">$4.159</h1>
              <p class="text-xs text-gray-500 font-medium">Airdroppool</p>
            </div>
            <div class="flex items-end flex-col w-[50%]">
              <h1 class="card_bold">1.3 million</h1>
              <div class="w-[50%] flex">
                <p class="text-xs text-gray-500 font-medium text-left ml-auto">
                  WSL
                </p>
              </div>
            </div>
          </div>
          <div class="section3">
            <div class="tags flex items-center gap-3">
              <div class="tag">Active</div>
              <div class="tag1">4 days left</div>
              <div class="tag1">Claim Now</div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="">
        <div class="card">
          <div class="section1 flex items-center gap-8">
            <div
              class="frame h-14 w-14 bg-[#F7F7F7] flex items-center justify-center rounded-md"
            >
              <img src="../assets/icon-1.png" alt="" />
            </div>
            <h1 class="card_head">Tezos Domains..</h1>
          </div>
          <div
            class="section2 flex my-6 items-center divide-x-2 justify-between"
          >
            <div class="flex items-start flex-col w-[50%]">
              <h1 class="card_bold">$4.159</h1>
              <p class="text-xs text-gray-500 font-medium">Airdroppool</p>
            </div>
            <div class="flex items-end flex-col w-[50%]">
              <h1 class="card_bold">1.3 million</h1>
              <div class="w-[50%] flex">
                <p class="text-xs text-gray-500 font-medium text-left ml-auto">
                  WSL
                </p>
              </div>
            </div>
          </div>
          <div class="section3">
            <div class="tags flex items-center gap-3">
              <div class="tag">Active</div>
              <div class="tag1">4 days left</div>
              <div class="tag1">Claim Now</div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import icon1 from "../assets/icon-1.png";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
<style scoped>
.swiper {
  height: 230px;
  padding: 4px 40px;
  overflow: hidden;
  max-width: 80rem;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 5px 5px 0px rgba(18, 50, 77, 0.15);
  border: 1px solid rgb(230, 230, 230);
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card {
  border-radius: 8px;
}
.card_head {
  color: #000;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.card_bold {
  color: #000;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.card_para {
  color: #000;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.tag {
  display: inline-flex;
  padding: 8px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  color: white;
  background: linear-gradient(90deg, #0298b1 0%, #7bd759 100%);
  color: #fff;

  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.tag1 {
  display: inline-flex;
  padding: 8px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border-radius: 20px;
  background: var(--Gray-6, #f2f2f2);

  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: rgba(0, 0, 0, 0.504);
}
</style>
