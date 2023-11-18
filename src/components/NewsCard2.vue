<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 xl:grid-cols-4 px-6 gap-y-6 items-center justify-center"
  >
    <div class="newsCard mx-auto rounded-xl overflow-hidden">
      <div class="w-full overflow-hidden">
        <img
          class="object-cover w-full h-[200px]"
          src="@/assets/cardBallon.png"
          alt="newsImage"
        />
      </div>
      <div class="px-4 mt-2 py-4 flex flex-col gap-4">
        <h3 class="newsHeading">
          Contrary to popular belief, lorem ipsum is not simply.
        </h3>
        <p class="text-gray-500 text-sm">
          It is a long established fact that a reader will be distracted by the
          readable.
        </p>
      </div>
    </div>
    <div class="newsCard mx-auto rounded-xl overflow-hidden">
      <div class="w-full overflow-hidden">
        <img
          class="object-cover h-[200px] w-full"
          :src="ImageForNews"
          alt="newsImage"
        />
      </div>
      <div class="px-4 mt-2 py-4 flex flex-col gap-4">
        <h3 class="newsHeading">
          Contrary to popular belief, lorem ipsum is not simply.
        </h3>
        <p class="text-gray-500 text-sm">
          It is a long established fact that a reader will be distracted by the
          readable.
        </p>
      </div>
    </div>
    <div class="newsCard mx-auto rounded-xl overflow-hidden">
      <div class="w-full overflow-hidden">
        <img
          class="object-cover w-full h-[200px]"
          :src="ImageForNews2"
          alt="newsImage"
        />
      </div>
      <div class="px-4 mt-2 py-4 flex flex-col gap-4">
        <h3 class="newsHeading">
          Contrary to popular belief, lorem ipsum is not simply.
        </h3>
        <p class="text-gray-500 text-sm">
          It is a long established fact that a reader will be distracted by the
          readable.
        </p>
      </div>
    </div>
    <div class="newsCard mx-auto rounded-xl overflow-hidden">
      <div class="w-full overflow-hidden">
        <img
          class="object-cover w-full h-[200px]"
          src="@/assets/cardBallon.png"
          alt="newsImage"
        />
      </div>
      <div class="px-4 mt-2 py-4 flex flex-col gap-4">
        <h3 class="newsHeading">
          Contrary to popular belief, lorem ipsum is not simply.
        </h3>
        <p class="text-gray-500 text-sm">
          It is a long established fact that a reader will be distracted by the
          readable.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import newsImage from "@/assets/newsImage.png";
import ImageForNews from "@/assets/image 8.png";
import ImageForNews2 from "@/assets/image 9.png";
</script>

<style scoped>
.newsCard {
  background: #fff;
  width: 300px;
  height: 360px;
}

.newsHeading {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.newsPadding {
  color: rgba(0, 0, 0, 0.5);
  margin-top: 8px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
}
</style>
