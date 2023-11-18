<template>
  <div
    class="grid xl:grid-cols-3 md:grid-cols-2 lg:grid-cosl-3 mx-auto md:mx-a grid-cols-1 gap-8"
  >
    <div class="newsCard">
      <div class=" w-full">
        <img
          class="object-contain w-full h-auto rounded-lg"
          :src="newsImage"
          alt="newsImage"
        />
      </div>
      <div class=" mt-2 pt-4 flex flex-col gap-4 px-3 md:px-0">
        <h3 class="newsHeading">
          Contrary to popular belief, lorem ipsum is not simply random text.
        </h3>
        <p class="text-gray-500 text-sm">
          It is a long established fact that a reader will be distracted by the readable.
        </p>
      </div>
    </div>
    <div class="newsCard">
      <div class=" w-full ">
        <img
          class="object-contain w-full h-auto rounded-lg"
          :src="ImageForNews"
          alt="newsImage"
        />
      </div>
      <div class=" mt-2 pt-4 flex flex-col gap-4 px-3 md:px-0">
        <h3 class="newsHeading">
          Contrary to popular belief, lorem ipsum is not simply.
        </h3>
        <p class="text-gray-500 text-sm">
          It is a long established fact that a reader will be distracted by the
          readable.
        </p>
      </div>
    </div>
    <div class="newsCard">
      <div class=" w-full">
        <img
          class="object-contain w-full h-auto rounded-lg"
          :src="ImageForNews2"
          alt="newsImage"
        />
      </div>
      <div class=" mt-2 pt-4 flex flex-col gap-4 px-3 md:px-0">
        <h3 class="newsHeading">
          Contrary to popular belief, lorem ipsum is not simply random text.
        </h3>
        <p class="text-gray-500 text-sm">
          It is a long established fact that a reader will be distracted by the readable.
        </p>
      </div>
    </div>
  
  </div>
</template>

<script setup>
import newsImage from "@/assets/image 7.png";
import ImageForNews from "@/assets/image 8.png";
import ImageForNews2 from "@/assets/image 9.png";


</script>

<style scoped>
.newsCard {
  border-radius: 8px;
  background: #fff;
  padding: 15px;
  box-shadow: 0px 10px 20px 0px rgba(18, 50, 77, 0.15);
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
