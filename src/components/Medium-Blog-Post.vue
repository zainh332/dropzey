<template>
  <div class="grid grid-cols-1 gap-8 mx-auto xl:grid-cols-3 md:grid-cols-2 lg:grid-cosl-3 md:mx-a">
    <div v-for="post in mediumPosts.value" :key="post.title" class="newsCard">
      <!-- <div class="w-auto">
        <img
          :src="post.image"
          class="object-contain w-auto h-auto rounded-lg"
          :alt="post.title"
        />
      </div> -->
      <div class="flex flex-col gap-4 px-3 pt-4 mt-2 md:px-0">
        <!-- <h3 class="newsHeading">{{ post.title }}</h3> -->
        <a :href="post.link" target="_blank">
            <h3 class="newsHeading">{{ post.title }}</h3>
        </a>
        <p class="text-sm text-gray-500">{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import axios from 'axios';

 // Reactive object to store form values
 const mediumPosts = reactive({
  });

const fetchMediumPosts = async () => {
  try {
    const response = await axios.get('/api/get-medium-post');
    // mediumPosts.value = response.data;
    mediumPosts.value = response.data.posts;
    console.log(mediumPosts.value);
  } catch (error) {
    console.error('There was an error!', error);
  }
};

onMounted(() => {
  fetchMediumPosts(); // Fetch Medium posts when the component is mounted
});
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
