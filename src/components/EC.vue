<template>
  <div class="grid grid-cols-4 gap-8">
    <div class="card">
      <div class="section1 flex items-center gap-8">
        <div
          class="frame h-12 w-12 bg-[#F7F7F7] flex items-center justify-center rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
              />
              <path
                fill="#0298B1"
                d="m19.921 9.75l.07.058l1.838 1.838a.5.5 0 0 1 .058.638l-.058.07l-9.476 9.475a.5.5 0 0 1-.637.058l-.07-.058l-1.838-1.839a.5.5 0 0 1-.058-.637l.058-.07l9.475-9.475a.5.5 0 0 1 .562-.101l.076.043Zm-3.75-3.76l1.84 1.838a.5.5 0 0 1 0 .707l-9.476 9.476a.5.5 0 0 1-.707 0l-1.839-1.839a.5.5 0 0 1 0-.707l9.476-9.475a.5.5 0 0 1 .707 0ZM4.01 9.808a.5.5 0 0 1 .637-.058l.07.058l1.838 1.838a.5.5 0 0 1 .058.638l-.058.07l-1.838 1.838a.5.5 0 0 1-.638.058l-.07-.058l-1.838-1.838a.5.5 0 0 1-.058-.638l.058-.07L4.01 9.808Zm8.274-7.695l.07.058l1.838 1.839a.5.5 0 0 1 .058.638l-.058.069l-5.657 5.657a.5.5 0 0 1-.638.058l-.069-.058l-1.839-1.839a.5.5 0 0 1-.057-.638l.057-.069l5.657-5.657a.5.5 0 0 1 .562-.1l.076.042Z"
              />
            </g>
          </svg>
        </div>
        <h1 class="card_head">Tezos Domains..</h1>
      </div>
      <div class="section2 flex my-6 items-center divide-x-2 justify-between">
        <div class="flex items-start flex-col w-[50%]">
          <h1 class="card_bold">$4.159</h1>
          <p class="card_para">Airdroppool</p>
        </div>
        <div class="flex items-end flex-col w-[50%]">
          <h1 class="card_bold">1.3 million</h1>
          <p class="card_para">WSL</p>
        </div>
      </div>
      <div class="section3">
        <div class="tags flex items-center gap-3">
          <div class="tag">Active</div>
          <div class="tag1">4 days left</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import icon1 from "@/assets/icon-1.png";
</script>

<style scoped>
.card {
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 10px 20px 0px rgba(18, 50, 77, 0.15);
  padding: 16px 16px;
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
