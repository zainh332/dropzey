<template>
<TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="open = false">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"/>
        </TransitionChild>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div class="flex items-end justify-center min-h-full p-4 text-center sm:items-start sm:p-0">
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel class="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl custom-margin sm:w-full sm:max-w-3xl sm:p-6">
                <div>
                  <div class="mt-3 text-center sm:mt-5">
                    <h3 class="properHeading">
                      Claim your Airdrop
                    </h3>
                  </div>
                </div>

                <div class="flex items-center justify-center gap-8 mt-8">
                  <div class="flex flex-col items-center gap-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="49"
                      height="48"
                      viewBox="0 0 49 48"
                      fill="none"
                    >
                      <path
                        d="M24.5607 47.5908C37.5946 47.5572 48.1336 36.964 48.1 23.9301C48.0665 10.8962 37.4733 0.357247 24.4394 0.390764C11.4054 0.42428 0.866526 11.0175 0.900042 24.0514C0.933558 37.0854 11.5268 47.6243 24.5607 47.5908Z"
                        fill="#FFD34D"
                      />
                      <path
                        d="M32.6996 20.2907V19.5907C32.6996 18.4907 31.7996 17.5907 30.6996 17.5907H24.1996C24.6996 16.7907 25.2996 15.1907 24.9996 12.0907C24.7996 10.2907 23.5996 8.89065 22.3996 8.49065C21.1996 8.09065 20.0996 8.99065 20.2996 10.1907C20.3996 10.7907 20.6996 11.3907 20.5996 12.2907C20.3996 15.3907 18.5996 17.6907 17.6996 18.7907C17.4996 18.9907 17.2996 19.1907 17.0996 19.3907H16.9996C15.5996 20.8907 15.6996 22.2907 15.6996 22.2907H14.0996V33.5907H16.2996C18.6996 36.1907 21.4996 36.3907 22.8996 36.2907C23.0996 36.3907 23.2996 36.3907 23.4996 36.3907H30.4996C31.5996 36.3907 32.4996 35.4907 32.4996 34.3907V33.6907C32.4996 32.5907 31.5996 31.6907 30.4996 31.6907C31.5996 31.6907 32.4996 30.7907 32.4996 29.6907V28.9907C32.4996 27.8907 31.5996 26.9907 30.4996 26.9907C31.5996 26.9907 32.8996 26.0907 32.8996 24.9907V24.2907C32.8996 23.1907 31.5996 22.2907 30.4996 22.2907C31.7996 22.2907 32.6996 21.3907 32.6996 20.2907Z"
                        fill="white"
                      />
                    </svg>
                    <span class="vote">Upvote</span>
                  </div>
                  <div class="flex flex-col items-center gap-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="49"
                      height="48"
                      viewBox="0 0 49 48"
                      fill="none"
                    >
                      <path
                        d="M24.5607 47.5908C37.5946 47.5572 48.1336 36.964 48.1 23.9301C48.0665 10.8962 37.4733 0.357247 24.4394 0.390764C11.4054 0.42428 0.866526 11.0175 0.900042 24.0514C0.933558 37.0854 11.5268 47.6243 24.5607 47.5908Z"
                        fill="#FFD34D"
                      />
                      <path
                        d="M15.2999 26.0926L15.2999 26.7926C15.2999 27.8926 16.1999 28.7926 17.2999 28.7926L23.7999 28.7926C23.2999 29.5926 22.6999 31.1926 22.9999 34.2926C23.1999 36.0926 24.3999 37.4926 25.5999 37.8926C26.7999 38.2926 27.8999 37.3926 27.6999 36.1926C27.5999 35.5926 27.2999 34.9926 27.3999 34.0926C27.5999 30.9926 29.3999 28.6926 30.2999 27.5926C30.4999 27.3926 30.6999 27.1926 30.8999 26.9926L30.9999 26.9926C32.3999 25.4926 32.2999 24.0926 32.2999 24.0926L33.8999 24.0926L33.8999 12.7926L31.6999 12.7926C29.2999 10.1926 26.4999 9.99261 25.0999 10.0926C24.8999 9.99261 24.6999 9.9926 24.4999 9.9926L17.4999 9.9926C16.3999 9.9926 15.4999 10.8926 15.4999 11.9926L15.4999 12.6926C15.4999 13.7926 16.3999 14.6926 17.4999 14.6926C16.3999 14.6926 15.4999 15.5926 15.4999 16.6926L15.4999 17.3926C15.4999 18.4926 16.3999 19.3926 17.4999 19.3926C16.3999 19.3926 15.0999 20.2926 15.0999 21.3926L15.0999 22.0926C15.0999 23.1926 16.3999 24.0926 17.4999 24.0926C16.1999 24.0926 15.2999 24.9926 15.2999 26.0926Z"
                        fill="white"
                      />
                    </svg>
                    <span class="vote">Downvote</span>
                  </div>
                </div>

                <div class="flex mt-5 sm:mt-6">
                  <button type="button" class="mx-auto btnClaim">
                    Claim Airdrop
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
  </TransitionRoot>
</template>

<script setup>
    import { ref, computed, defineProps, watch } from "vue";
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from "@headlessui/vue";
    import Logo from '@/assets/Transaparent-Logo.png'
    import rabet from '@/assets/Transaparent-Logo.png'
    import frighter from '@/assets/Transaparent-Logo.png'
    import albeto from '@/assets/Transaparent-Logo.png'
    import xbull from '@/assets/Transaparent-Logo.png'
    
    //this name is initialie on other pages for eg.
    // <ClaimAirdropModal :open="claim_airdrop_modal"/>
    // import ClaimAirdropModal from "@/components/ClaimAirdrop.vue";
    // Name should be same where you want to initialize it 
    
    const ClaimAirdropModal = defineProps({ open: Boolean });
</script>

<style scoped>
.text_gradient {
  background: linear-gradient(90deg, #0298b1 0.51%, #7bd759 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 50px;
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

.successBtnClaim {
  background: linear-gradient(90deg, #0298b1 0%, #7bd759 100%);
  color: #fff;
  display: inline-flex;
  padding: 16px 50px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
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
.custom-margin {
  margin-top: 5rem; /* Adjust this value */
  margin-bottom: 5rem; /* Adjust this value */
}


</style>