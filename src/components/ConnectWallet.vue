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
                <div class="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
                    <TransitionChild 
                    as="template" 
                    enter="ease-out duration-300"
                    enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to="opacity-100 translate-y-0 sm:scale-100" 
                    leave="ease-in duration-200"
                    leave-from="opacity-100 translate-y-0 sm:scale-100"
                    leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                    
                        <DialogPanel class="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl pt-15 px-14">

                            
                            <div :id="modalId" :data-bs-backdrop="backdrop" :data-bs-keyboard="keyboard"
                                tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="sm:mx-auto sm:w-full sm:max-w-md">
                                        <img class="w-auto h-20 mx-auto" :src="Logo" alt="Your Company"/>
                                    </div>
                                    <div class="modal-content modal-wallet">
                                        <div class="modal-body">
                                            <h1>Please Connect Your Wallet</h1>
                                            <select 
                                            id="selectedWallet" 
                                            name="selectedWallet"
                                            class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset px-3 ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            v-model="selectedWallet"
                                            >
                                            <option 
                                            value="Choose your Wallet" disabled
                                            >
                                            Choose your Wallet
                                            </option>
                                            <option 
                                            v-for="wallet in wallets" 
                                            :value="wallet.key" 
                                            :key="wallet.key">
                                            {{ wallet.name }}
                                            </option>
                                            </select>
                                        </div>
                                        <div class="mt-2">
                                            <button @click="" type="button"  class="walletconnect-btn"> Connect Wallet</button>
                                            <button type="button" v-if="isLoading" class="connectLoading-btn">Connecting...</button>             
                                        </div>
                                    </div>
                                </div>
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
    
    const ConnectWalletModal = defineProps({ open: Boolean });
    
    const modalId = "ConnectWallet";
    const wallets = [
        { name: "Rabet", key: "rabet", image: rabet },
        { name: "Frighter", key: "frighter", image: frighter },
        { name: "Albedo", key: "albeto", image: albeto },
        { name: "Xbull", key: "xbull", image: xbull },
    ];
    const selectedWallet = ref("Choose your Wallet");
    const isLoading = ref(false);
    
    const backdrop = computed(() => !isWalletConnected.value ? "static" : "");
    const keyboard = computed(() => !isWalletConnected.value ? "false" : "");
    const isWalletConnected = computed(() => !!selectedWallet.value && selectedWallet.value !== "Choose your Wallet");
    
    function selectWallet(walletKey) {
        selectedWallet.value = walletKey;
    }
    
    function connectWallet() {
        if (isWalletConnected.value) {
            // Perform wallet connection logic here
            isLoading.value = true;
            // Simulating the connection process
            setTimeout(() => {
                isLoading.value = false;
                // Reset selected wallet and private key after successful connection
                selectedWallet.value = "Choose your Wallet";
                walletPrivateKey.value = "";
            }, 2000);
        }
    }
    </script>