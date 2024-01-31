<template>
  <div>
    <div class="flex items-center justify-start min-w-full gap-20 overflow-auto airDrop">
      <div class="dropLogo shrink-0">
        <img :src="dropLogo" alt="" />
      </div>
      <div class="">
        <h1 class="heading">CashFinance.app</h1>
        <p class="titlep">
          <span class="title">@CashFinanceApp</span> extends a warm welcome to
          newcomers through an exciting Gleam campaign۔
        </p>
        <div class="flex items-center gap-8 mt-4">
          <div class="flex items-center gap-4">
            <div
              class="bg-[#08C] h-8 rounded-[6px] w-8 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M15.5507 0.270059C15.5507 0.270059 17.1233 -0.379227 16.9922 1.19761C16.9486 1.8469 16.5554 4.1194 16.2496 6.57743L15.2012 13.8587C15.2012 13.8587 15.1139 14.9254 14.3275 15.1109C13.5412 15.2964 12.3618 14.4616 12.1433 14.2761C11.9686 14.137 8.86704 12.05 7.77491 11.0297C7.46912 10.7514 7.11964 10.1949 7.81859 9.54559L12.4054 4.90785C12.9296 4.3513 13.4538 3.05273 11.2696 4.62957L5.15388 9.03546C5.15388 9.03546 4.45493 9.49921 3.14444 9.08183L0.304956 8.15427C0.304956 8.15427 -0.743463 7.45861 1.04759 6.76292C5.416 4.58316 10.7891 2.35703 15.5507 0.270059Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              class="bg-[#3057E0] h-8 rounded-[6px] w-8 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="20"
                viewBox="0 0 10 20"
                fill="none"
              >
                <path
                  d="M10 0.141089L7.22185 0.137634C4.52773 0.137634 2.78739 1.972 2.78739 4.81423V6.969H0V10.8683H2.78739L2.78403 19.1376H6.68403L6.68739 10.8683H9.88571L9.88319 6.96986H6.68739V5.14154C6.68739 4.26236 6.88991 3.81759 8.00336 3.81759L9.9916 3.81673L10 0.141089Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              class="bg-[#DD4B39] h-8 rounded-[6px] w-8 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="15"
                viewBox="0 0 19 15"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.58902 9.72375V4.11193C9.48161 5.04936 10.9474 5.95494 12.681 6.93127C11.2512 7.76598 9.48161 8.70255 7.58902 9.72375ZM18.1365 1.32092C17.81 0.868158 17.2536 0.515723 16.6612 0.399043C14.92 0.0509932 4.05744 0.0500032 2.31719 0.399043C1.84215 0.492783 1.41914 0.719366 1.05577 1.07141C-0.475344 2.56731 0.00443287 10.5893 0.37349 11.8888C0.528682 12.4512 0.729306 12.8569 0.981967 13.1232C1.30749 13.4752 1.75319 13.7176 2.26514 13.8263C3.69878 14.1384 11.0846 14.313 16.6309 13.8732C17.1419 13.7794 17.5942 13.5292 17.951 13.1622C19.3666 11.6723 19.2701 3.19977 18.1365 1.32092Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              class="bg-[#F85DA7] h-8 rounded-[6px] w-8 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
              >
                <path
                  d="M9.9 7.63763C9.9 8.11231 9.75924 8.57633 9.49553 8.971C9.23181 9.36568 8.85698 9.6733 8.41844 9.85495C7.9799 10.0366 7.49734 10.0841 7.03178 9.99152C6.56623 9.89892 6.13859 9.67034 5.80294 9.33469C5.4673 8.99904 5.23872 8.57141 5.14612 8.10585C5.05351 7.6403 5.10104 7.15774 5.28269 6.71919C5.46434 6.28065 5.77195 5.90582 6.16663 5.64211C6.56131 5.37839 7.02533 5.23763 7.5 5.23763C8.1363 5.23836 8.74632 5.49145 9.19625 5.94138C9.64618 6.39131 9.89927 7.00134 9.9 7.63763ZM15 4.33763V10.9376C14.9987 12.0512 14.5558 13.1187 13.7685 13.9061C12.9811 14.6935 11.9135 15.1364 10.8 15.1376H4.2C3.08648 15.1364 2.01892 14.6935 1.23154 13.9061C0.444165 13.1187 0.00126111 12.0512 0 10.9376V4.33763C0.00126111 3.22411 0.444165 2.15656 1.23154 1.36918C2.01892 0.581799 3.08648 0.138895 4.2 0.137634H10.8C11.9135 0.138895 12.9811 0.581799 13.7685 1.36918C14.5558 2.15656 14.9987 3.22411 15 4.33763ZM11.1 7.63763C11.1 6.92562 10.8889 6.2296 10.4933 5.63758C10.0977 5.04556 9.53547 4.58414 8.87766 4.31167C8.21985 4.03919 7.49601 3.9679 6.79768 4.10681C6.09934 4.24571 5.45788 4.58858 4.95442 5.09205C4.45095 5.59552 4.10808 6.23698 3.96917 6.93531C3.83027 7.63364 3.90156 8.35748 4.17403 9.0153C4.44651 9.67311 4.90793 10.2354 5.49995 10.6309C6.09196 11.0265 6.78799 11.2376 7.5 11.2376C8.45445 11.2366 9.3695 10.8569 10.0444 10.182C10.7193 9.50713 11.0989 8.59208 11.1 7.63763ZM12.3 3.73763C12.3 3.55963 12.2472 3.38563 12.1483 3.23762C12.0494 3.08962 11.9089 2.97426 11.7444 2.90614C11.58 2.83802 11.399 2.8202 11.2244 2.85493C11.0498 2.88965 10.8895 2.97537 10.7636 3.10124C10.6377 3.22711 10.552 3.38747 10.5173 3.56205C10.4826 3.73664 10.5004 3.9176 10.5685 4.08205C10.6366 4.2465 10.752 4.38706 10.9 4.48596C11.048 4.58485 11.222 4.63763 11.4 4.63763C11.6387 4.63763 11.8676 4.54281 12.0364 4.37403C12.2052 4.20525 12.3 3.97633 12.3 3.73763Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              class="bg-[#2F7DA5] h-8 rounded-[6px] w-8 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.73623 4.83099V15.1376H0.000281252V4.83099H3.73623ZM9.36793 4.81195V5.41927C9.9133 5.06727 10.5422 4.86263 11.4959 4.86263C14.602 4.86263 15 7.27409 15 9.37484V15.1374H11.2453V9.66207C11.2453 8.74124 10.9158 8.56664 10.3066 8.56664C9.72744 8.56664 9.36793 8.75063 9.36793 9.66207V15.1374H5.61321V4.81195H9.36793ZM1.86797 0.137634C2.89864 0.137634 3.73594 0.975869 3.73594 2.0056C3.73594 3.03532 2.89864 3.87356 1.86796 3.87356C0.838247 3.87356 0 3.03532 0 2.00559C0 0.975877 0.83824 0.137634 1.86797 0.137634Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div class="">
            <h1 class="boldH">60.00 million TIA</h1>
          </div>
          <div class="boldH">
            <h1>Participants: 213/2000</h1>
          </div>
          <div class="boldH">
            <h1>Estimated value $20</h1>
          </div>
        </div>
      </div>
    </div>

  </div>
  <ClaimAirdropModal :open="claim_airdrop_modal"/>
</template>

<script setup>
import dropLogo from "@/assets/dropLogo.png";
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { CheckIcon } from "@heroicons/vue/24/outline";

import ClaimAirdropModal from "@/components/ClaimAirdrop.vue";


const claim_airdrop_modal  = ref(false);
const OpenClaimAirdropModal = (e) => {
  claim_airdrop_modal.value = !claim_airdrop_modal.value;
};


const open = ref(false);

const setAirdrop = () => {
  open.value = true;
};
</script>

<style scoped>
* {
  white-space: nowrap;
}
.airDrop {
  border-radius: 8px;
  background: #fff;
  padding: 16px 32px;
  box-shadow: 0px 10px 20px 0px rgba(18, 50, 77, 0.15);
}
.btn {
  border-radius: 30px;
  background: linear-gradient(90deg, #0298b1 0%, #7bd759 100%);
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  padding: 12px 24px;
  line-height: normal;
}
.heading {
  color: #000;

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.title {
  color: #00a2f4;

  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
}
.titlep {
  color: #000;

  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
}
.boldH {
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 200% */
}

.properHeading {
  color: #000;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.btnClaim {
  border-radius: 30px;
  background: linear-gradient(90deg, #0298b1 0%, #7bd759 100%);
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  padding: 12px 60px;
  line-height: normal;
}

.modalBtn {
  display: inline-flex;
  padding: 16px 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
  background: #f2f2f2;
}

.vote {
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}

@media all and (max-width: 600px) {
  .properHeading {
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
}
</style>
