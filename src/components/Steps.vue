<template>
  <nav aria-label="Progress">
    <ol role="list" class="overflow-hidden">
      <li
        v-for="(step, stepIdx) in steps"
        :key="step.name"
        :class="[stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative']"
      >
        <template v-if="step.status === 'complete'">
          <div
            v-if="stepIdx !== steps.length - 1"
            class="absolute left-3.5 top-4 -ml-px mt-0.5 h-full w-1 bg_gradient"
            aria-hidden="true"
          />
          <a :href="step.href" class="group relative flex items-center">
            <span class="flex h-9 items-center">
              <span
                class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg_gradient"
              >
                <span class="font-bold text-sm text-white">{{
                  step.number
                }}</span>
              </span>
            </span>
            <span class="ml-4 flex min-w-0">
              <span class="text-center rounded-full text-gray-600 bg-gray-100 bg_gradient px-6 py-3 text-sm font-semibold text-white shadow-sm">{{
                step.name
              }}</span>
            </span>
          </a>
        </template>

        <template v-else>
          <div
            v-if="stepIdx !== steps.length - 1"
            class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
            aria-hidden="true"
          />
          <a :href="step.href" class="group relative flex items-center">
            <span class="flex h-9 items-center" aria-hidden="true">
              <span
                class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white"
              >
                <span class="font-bold text-sm text-[#395867]">{{
                  step.number
                }}</span>
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="w-full text-center rounded-full text-gray-600 bg-gray-100 bg_hover_gradient px-6 py-3 text-sm font-semibold hover:text-white shadow-sm">{{
                step.name
              }}</span>
            </span>
          </a>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/20/solid";

const steps = [
  {
    number: 1,
    name: "Follow on Twitter",
    description: "Vitae sed mi luctus laoreet.",
    href: "#",
    status: "complete",
  },
  {
    number: 2,
    name: "Retweet Tweet",
    description: "Cursus semper viverra facilisis et et some more.",
    href: "#",
    status: "complete",
  },
  {
    number: 3,
    name: "Join Telegram Channel",
    description: "Penatibus eu quis ante.",
    href: "#",
    status: "upcoming",
  },
  {
    number: 4,
    name: "Follow on Instagram",
    description: "Faucibus nec enim leo et.",
    href: "#",
    status: "upcoming",
  },
];
</script>
<style scoped>
.heading-step {
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
