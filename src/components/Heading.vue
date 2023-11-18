<template>
  <h1
    :class="[
      myclass,
      'heading leading-12 text-[48px] font-bold text-left py-8  ',
    ]"
  >
    {{ text }}
  </h1>
</template>

<script setup>
import { ref, defineProps } from "vue";
defineProps({
  text: {
    type: String,
    default: "Heading",
  },
  myclass: {
    type: String,
    default: "text-center",
  },
});
</script>

<style scoped>
.heading {
  background: linear-gradient(90deg, #0298b1 0.51%, #7bd759 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
