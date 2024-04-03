<template>
  <div class="grid md:grid-cols-3 grid-cols-1 gap-4 lg:grid-cols-4">
    <component v-for="(air, index) in airdrops" :key="index">
      <router-link :to="'/airdrop?id='+ air.ids ">
        <div class="card">
          <div class="section1 flex items-center gap-8">
            <div class="frame h-14 w-14 bg-[#F7F7F7] flex items-center justify-center rounded-md">
              <img :src="air.logo|| icon1" alt="" />
            </div>
            <h1 class="card_head">{{ air.name }}</h1>
          </div>
          <div class="section2 flex my-6 items-center divide-x-2 justify-between">
            <div class="flex  flex-col w-[50%]" style="align-items: center;">
              <h1 class="card_bold" style="text-align: center;">{{ (air.reward_amount/1E7).toLocaleString() }}</h1>
              <p class="text-xs text-gray-500 font-medium">{{ JSON.parse(air.asset).code }} Airdroped</p>
            </div>
            <div class="flex  flex-col w-[50%]" style="align-items: center;">
              <div class="card_bold" >{{ fNum((air.amount/1E7), 'long')  }}</div>
              <div class="w-[58%]" style="text-align: center;">
                <span class="text-xs text-gray-500 font-medium text-left">{{ JSON.parse(air.asset).code }}</span>
              </div>
            </div>
          </div>
          <div class="section3">
            <div class="tags flex items-center gap-3">
              <div class="tag" v-if="(air.end_day > 0)">Active</div>
              <div class="tag1">
                {{ (air.end_day > 0) ? `${air.end_day} ${plural(air.end_day, 'day', 'days')} left` : 'Ended' }}  
              </div>
              <button @click="setAirdrop" class="tag1">Claim Now</button>
              <!-- <div class="tag1">Claim Now</div> -->
            </div>
          </div>
        </div>
    </router-link>     
    </component>
   
  </div>
</template>

<script setup>
import icon1 from "@/assets/icon-1.png";
import { fNum, plural } from "../utils/utils";
import { ref, defineProps } from "vue";
const airdrops = ref([])
const props = defineProps({
  airdrops: {
    type: Object,
    required: true
  }
}); 

(function() {  
    if(props.airdrops) {
       airdrops.value = props.airdrops.slice(0, 8)
    }
})()
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
