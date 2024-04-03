<template>
  <nav aria-label="Progress">
    <ol role="list" class="overflow-hidden">
      <li
        v-for="(step, stepIdx) in steps"
        :key="step.name"
        :class="[stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative']"
      >
        <template v-if="step.status === 'complete' && step.present">
          <div
            v-if="stepIdx !== steps.length - 1"
            class="absolute left-3.5 top-4 -ml-px mt-0.5 h-full w-1 bg_gradient"
            aria-hidden="true"
          />
          <a class="group relative flex items-center">
            <span class="flex h-9 items-center">
              <span
                class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg_gradient"
              >
                <span class="font-bold text-sm text-white">{{
                  stepIdx + 1
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

        <template v-else-if="step.present && step.status === 'upcoming'">
          <div
            v-if="stepIdx !== steps.length - 1"
            class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
            aria-hidden="true"
          />
          <a @click="steps[stepIdx].status = 'verify'" :href="step.href" target="_blank" class="group relative flex items-center" style="cursor:pointer">
            <span class="flex h-9 items-center" aria-hidden="true">
              <span
                class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white"
              >
                <span class="font-bold text-sm text-[#395867]">{{
                  stepIdx + 1
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
        <template v-else-if="step.present">
          <div
            v-if="stepIdx !== steps.length - 1"
            class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300"
            aria-hidden="true"
          />
          <a :id="stepIdx + '_step'" @click="verifyStep(stepIdx)" target="_blank" class="group relative flex items-center">
            <span class="flex h-9 items-center" aria-hidden="true">
              <span
                class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-white"
              >
                <span class="font-bold text-sm text-[#395867]">{{
                  stepIdx + 1
                }}</span>
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="w-full text-center rounded-full text-gray-600 bg-gray-100 bg_hover_gradient px-6 py-3 text-sm font-semibold hover:text-white shadow-sm"> 
                {{ step.verify }}
              </span>
            </span>
           
          </a>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { CheckIcon } from "@heroicons/vue/20/solid";
import { defineProps, ref } from "vue";
import axios from 'axios'
import Swal from 'sweetalert2';
import { E, authLogin } from "../utils/utils";
import { API_URL } from "../utils/constant";

const props = defineProps({
  stages: {
    type: Object,
    required: true
  },
  airdropId : {
    type: String,
    required:true
  }
}); 

const steps = ref(([
  {
    number: 1,
    name: "Follow on Twitter",
    description: "Vitae sed mi luctus laoreet.",
    verify: 'Click to verify',
    href: props.stages.twitter_link,
    status: (props.stages.twitter) ? 'complete' : 'upcoming',
    present:(props.stages.has_twitter)
  },
  {
    number: 2,
    name: "Retweet Tweet",
    description: "Cursus semper viverra facilisis et et some more.",
    verify: 'Click to verify',
    href: props.stages.tweet_link,
    status: (props.stages.tweet) ? 'complete' : 'upcoming',
    present:(props.stages.has_tweet)
  },
  {
    number: 3,
    name: "Join Telegram Channel",
    description: "Penatibus eu quis ante.",
    verify: 'Click to verify',
    href: props.stages.telegram_link,
    status: (props.stages.telegram) ? 'complete' : 'upcoming',
    present:(props.stages.has_telegram)
  },
  {
    number: 4,
    name: "Join Discord Channel",
    description: "Faucibus nec enim leo et.",
    verify: 'Click to verify',
    href: props.stages.discord_link,
    status: (props.stages.discord) ? 'complete' : 'upcoming',
    present:(props.stages.has_discord)
  },
  {
    number: 5,
    name: "Subscribe to Youtube Channel",
    description: "Faucibus nec enim leo et.",
    verify: 'Click to verify',
    href: props.stages.youtube_link,
    status: (props.stages.youtube) ? 'complete' : 'upcoming',
    present:(props.stages.has_youtube),
    channel_id:props.stages.youtube_channel_id
  },
  {
    number: 6,
    name: "Like Youtube Video",
    description: "Faucibus nec enim leo et.",
    verify: 'Click to verify',
    href: props.stages.youtube_video_link,
    status: (props.stages.youtube_video) ? 'complete' : 'upcoming',
    present:(props.stages.has_youtube_video)
  },
]).filter(step => step.present))

/* DOM FUNCTIONS */
const verifyStep = (stepIndex) => { 
    if(steps.value[stepIndex].number == 4) {
      //discord verification
      verifyDiscord(stepIndex)
    }
    else if(steps.value[stepIndex].number == 3) {
      //discord verification
      verifyTelegram(stepIndex)
    }
    else if(steps.value[stepIndex].number == 5) {
      //discord verification
      verifyYoutube(stepIndex)
    }
    else if(steps.value[stepIndex].number == 6) {
      //discord verification
      verifyYoutubeVideo(stepIndex)
    }
}
//discord verification script
const verifyDiscord = (stepIndex) => {
  const formData = authLogin(new FormData()) 
    // Regular expression to match the guild_id
    const guildIdRegex = /channels\/(\d+)\//;
    const matches = steps.value[stepIndex].href.match(guildIdRegex);
    const guildId = matches && matches[1];
    if(guildId != null) {
      steps.value[stepIndex].verify = "Verifying..."
      E(stepIndex +'_step').disabled = true
      axios.post(`${API_URL}api.php?type=discord_verify&guild_id=${guildId}&id=${props.airdropId}`, formData, {
          headers: {
            'X-CSRF-TOKEN': window.Laravel.csrfToken,
            'Content-Type': 'multipart/form-data'
          }
      })
      .then(async (response) => {  
        E(stepIndex +'_step').disabled = false
        steps.value[stepIndex].verify = "Click to verify"
        if(response.data.status) {
            if(response.data.verify) {
              Swal.fire({
                icon: 'success',
                title: 'Verification successfull!',
                text: 'You have passed the discord verification',
              }); 
              speak('link_verify', true)
              steps.value[stepIndex].status = 'complete'
            }
            else {
              Swal.fire({
                icon: 'error',
                title: 'Not following!',
                text: 'Verification failed. Ensure you have followed the discord server.',
              }); 
            }
        }
        else if(response.data.auth === false) {
          Swal.fire({
            icon: 'error',
            title: 'Session expired!',
            text: 'Your session has expired. Please login.',
          }); 
        }
        else if(response.data.discord_auth === false) {
          Swal.fire({
            icon: 'error',
            title: 'Authentication error!',
            text: 'You have not link your discord to Dropzey.',
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
        E(stepIndex +'_step').disabled = false
        steps.value[stepIndex].verify = "Click to verify"
        Swal.fire({
          icon: 'error',
          title: 'Network error!',
          text: 'Something went wrong.',
        }); 
      })
  }
  else {
      Swal.fire({
        icon: 'error',
        title: 'Link error!',
        text: 'This discord link is invalid',
      }); 
  }
}
const verifyTelegram = (stepIndex) => {
  const formData = authLogin(new FormData()) 
    // Regular expression to match the guild_id
    const regex = /t\.me\/(?:joinchat\/|)([^\/?]+)/;
    const matches = steps.value[stepIndex].href.match(regex);
    const t_id = matches && matches[1];
    if(t_id != null) {
      steps.value[stepIndex].verify = "Verifying..."
      E(stepIndex +'_step').disabled = true
      axios.post(`${API_URL}api.php?type=telegram_verify&telegram_id=@${t_id}&id=${props.airdropId}`, formData, {
          headers: {
            'X-CSRF-TOKEN': window.Laravel.csrfToken,
            'Content-Type': 'multipart/form-data'
          }
      })
      .then(async (response) => {  
        E(stepIndex +'_step').disabled = false
        steps.value[stepIndex].verify = "Click to verify"
        if(response.data.status) {
            if(response.data.verify) {
              Swal.fire({
                icon: 'success',
                title: 'Verification successfull!',
                text: 'You have passed the Telegram verification',
              }); 
              speak('link_verify', true)
              steps.value[stepIndex].status = 'complete'
            }
            else {
              Swal.fire({
                icon: 'error',
                title: 'Not following!',
                text: 'Verification failed. Ensure you have followed the Telegram channel.',
              }); 
            }
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
        E(stepIndex +'_step').disabled = false
        steps.value[stepIndex].verify = "Click to verify"
        Swal.fire({
          icon: 'error',
          title: 'Network error!',
          text: 'Something went wrong.',
        }); 
      })
  }
  else {
      Swal.fire({
        icon: 'error',
        title: 'Link error!',
        text: 'This telegram link is invalid',
      }); 
  }
}
const verifyYoutube = (stepIndex) => {
  const formData = authLogin(new FormData()) 
    const c_id = steps.value[stepIndex].channel_id;
    if(c_id != null) {
      steps.value[stepIndex].verify = "Verifying..."
      E(stepIndex +'_step').disabled = true
      axios.post(`${API_URL}api.php?type=youtube_verify&channel_id=${c_id}&id=${props.airdropId}`, formData, {
          headers: {
            'X-CSRF-TOKEN': window.Laravel.csrfToken,
            'Content-Type': 'multipart/form-data'
          }
      })
      .then(async (response) => { 
        E(stepIndex +'_step').disabled = false
        steps.value[stepIndex].verify = "Click to verify"
        if(response.data.status) {
            if(response.data.verify) {
              Swal.fire({
                icon: 'success',
                title: 'Verification successfull!',
                text: 'You have passed the Youtube verification',
              }); 
              speak('link_verify', true)
              steps.value[stepIndex].status = 'complete'
            }
            else {
              Swal.fire({
                icon: 'error',
                title: 'Not following!',
                text: 'Verification failed. Ensure you have followed the Youtube channel.',
              }); 
            }
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
            text: 'You have not link your youtube to Dropzey.',
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
        E(stepIndex +'_step').disabled = false
        steps.value[stepIndex].verify = "Click to verify"
        Swal.fire({
          icon: 'error',
          title: 'Network error!',
          text: 'Something went wrong.',
        }); 
      })
  }
  else {
      Swal.fire({
        icon: 'error',
        title: 'Link error!',
        text: 'This telegram link is invalid',
      }); 
  }
}
const verifyYoutubeVideo = (stepIndex) => {
    const formData = authLogin(new FormData()) 
    const regex = /[?&]v=([^?&]+)/;
    const match = steps.value[stepIndex].href.match(regex);
    const v_id = match && match[1]
    if(v_id != null) {
      steps.value[stepIndex].verify = "Verifying..."
      E(stepIndex +'_step').disabled = true
      axios.post(`${API_URL}api.php?type=youtube_video_verify&video_id=${v_id}&id=${props.airdropId}`, formData, {
          headers: {
            'X-CSRF-TOKEN': window.Laravel.csrfToken,
            'Content-Type': 'multipart/form-data'
          }
      })
      .then(async (response) => {  
        E(stepIndex +'_step').disabled = false
        steps.value[stepIndex].verify = "Click to verify"
        if(response.data.status) {
            if(response.data.verify) {
              Swal.fire({
                icon: 'success',
                title: 'Verification successfull!',
                text: 'You have passed the Youtube video verification',
              }); 
              speak('link_verify', true)
              steps.value[stepIndex].status = 'complete'
            }
            else {
              Swal.fire({
                icon: 'error',
                title: 'Not following!',
                text: 'Verification failed. Ensure you have liked the Youtube video.',
              }); 
            }
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
            text: 'You have not link your youtube to Dropzey.',
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
        E(stepIndex +'_step').disabled = false
        steps.value[stepIndex].verify = "Click to verify"
        Swal.fire({
          icon: 'error',
          title: 'Network error!',
          text: 'Something went wrong.',
        }); 
      })
  }
  else {
      Swal.fire({
        icon: 'error',
        title: 'Link error!',
        text: 'This telegram link is invalid',
      }); 
  }
}
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
