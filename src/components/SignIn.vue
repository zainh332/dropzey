<template>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-40" @close="open = false">
        <!-- Backgound blur -->
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          />
        </TransitionChild>
  
        <div class="fixed inset-0 z-40 overflow-y-auto">
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
              <DialogPanel class="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl pt-35 px-14">
               
                <div class="flex-col flex-1 min-h-full py-6 sm:px-6 lg:px-8" >
                  <div class="mb-10 sm:mx-auto sm:w-full sm:max-w-md">
                    <img class="block mx-auto mb-6" :src="Logo" style="margin-left: 120px;"/>
                    <h2 class="mt-2 mb-1 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900" > Sign In</h2>
                    <h5 class="mt-4 leading-9 tracking-tight text-center text-gray-900" style="margin-bottom: 20px"> Welcome, please log in to your account</h5>
                  </div>
  
                  <div class="mt-4 ">
                    <div class="">
                      <form class="space-y-6" @submit="submitForm">
                        <div>
                          <label
                            for="email"
                            class="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                          </label>
                          <div class="mt-2">
                            <input
                              id="email"
                              name="email"
                              type="email"
                              autocomplete="email"
                              required=""
                              v-model="values.email"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                            />
                          </div>
                        </div>
  
                        <div>
                          <label
                            for="password"
                            class="block text-sm font-medium leading-6 text-gray-900">
                            Password
                            </label>
                          <div class="mt-2 mb-2">
                            <input
                              id="password"
                              name="password"
                              type="password"
                              autocomplete="current-password"
                              required=""
                              v-model="values.password"
                              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
  
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" class="w-3 h-3 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600" style="margin-right: 5px;"/>
                            <label for="remember-me" class="block ml-3 text-sm leading-6 text-gray-900"> Remember me</label>
                          </div>
                        </div>
  
                        <div>
                          <button type="submit" class="walletconnect-btn">Sign in</button>
                        </div>
                      </form>
  
                      <div>
                          <span class="relative flex justify-center px-6 text-sm font-medium leading-6 text-gray-900 bg-white">New here? Create an account</span>
                        <div class="relative mt-10">
                          <div class="absolute inset-0 flex items-center" aria-hidden="true">
                            <div class="w-full border-t border-gray-200" />
                          </div>
  
                          <div class="relative flex justify-center text-sm font-medium leading-6">
                            <span class="px-6 text-gray-900 bg-white">Or continue with</span>
                          </div>
                        </div>
  
                        <div class="grid grid-cols-2 gap-4 mt-4">
                          <a href="#" class="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]">
                          <img src="@/assets/icons8-google-48.png" alt="Google Logo" class="w-5 h-5" />
                          <span class="text-sm font-semibold leading-6">Google</span>
                          </a>
  
                          <a href="#" class="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-3 py-1  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]">
                            <svg
                              class="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                clip-rule="evenodd"
                              />
                            </svg>
                            <span class="text-sm font-semibold leading-6">GitHub</span>
                          </a>
                        </div>
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
 import { ref , defineProps, reactive} from "vue";
  import Logo from '@/assets/logo.png'
  import axios from 'axios';
  import { Dialog, DialogPanel, TransitionChild, TransitionRoot} from "@headlessui/vue";
  import Swal from 'sweetalert2';
  import { useRouter } from 'vue-router'

  // Define props
  const props = defineProps({ open: Boolean });

  // Reactive object to store form values
  const values = reactive({
    email: "",
    password: "",
  });

  const submitForm = (event) => {
    event.preventDefault(); // Prevent default form submission (prevent reload page)

    axios.post('/api/login', values, {
      headers: {
        'X-CSRF-TOKEN': window.Laravel.csrfToken,
      }
    })
    .then((response) => {
      if (response.data.status === 'success') {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: response.data.msg,
        });
        // Reset form values
        for (let key in values) {
          values[key] = "";
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: response.data.msg,
        });
      }
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'An error occurred while processing your request.',
      });
      console.error(error); // Log the error to the console for debugging
    });
  }
</script>
  