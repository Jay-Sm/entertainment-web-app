<template>
  <div class="login-backdrop" v-on:click.self="emit('closeLogIn')">
    <div class="login-container">
      <div class="flex justify-end">
        <button @click="emit('closeLogIn')" class="w-6 h-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full fill-[#89a0d7]" viewBox="0 0 512 512">
            <path
              d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z" />
          </svg>
        </button>
      </div>

      <div class="form-container">
        <h3 class="text-4xl font-semibold max-w-fit">Log In</h3>

        <form @submit.prevent="firebaseLogin" class="w-full flex flex-col gap-y-5 px-10">
          <div class="login-input">
            <p>Email</p>
            <input type="text" placeholder="Enter email" v-model="email">
          </div>
          <div class="login-input">
            <p>Password</p>
            <input type="text" placeholder="Enter password" v-model="password">
          </div>
          <div class="login-checkbox">
            <input type="checkbox" v-model="remeberMe" v-on:click="remeberMe = !remeberMe">
            <span class="checkmark"><svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" viewBox="0 0 16 16">
                <path
                  d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg></span>
            <p>Rememeber Me</p>
          </div>
          <div class="login-input">
            <button>
              Sign In
            </button>
          </div>
          <div class="w-full flex flex-row justify-between form-links">
            <button @click="emit('closeLogIn'); emit('createAcc')">
              Don't have an account?
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";

const emit = defineEmits(['closeLogIn', 'createAcc'])

const email = ref('')
const password = ref('')
const remeberMe = ref(true)
function firebaseLogin() {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;

      if (!remeberMe.value) {
        setPersistence(auth, browserSessionPersistence)        
      }

      emit('closeLogIn')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(email.value);

      console.error(errorCode);
      console.error(errorMessage);
    });
}
</script>

<style>
.login-backdrop {
  @apply fixed top-0 left-0 w-screen h-screen z-40 flex justify-center items-center bg-black bg-opacity-60;
}

.login-container {
  @apply h-[28.75rem] min-w-[30rem] max-w-[40rem] bg-background-dark-blue border rounded border-theme-light-blue2 top-1/4 left-[20%] z-50 p-2;
}

.form-container {
  @apply flex flex-col justify-start items-center gap-y-3;
}

.form-links button {
  @apply text-gray-600 hover:text-[#b8d4ee] transition-colors;
}

.login-input {
  @apply w-full
}

.login-input input {
  @apply w-full mt-1 py-3 pl-3 bg-transparent outline-none border border-theme-light-blue2 rounded-md;
}

.login-input button {
  @apply w-full bg-theme-light-blue2 py-2 rounded-lg hover:opacity-80 active:opacity-70;
}

.login-checkbox {
  @apply w-fit flex gap-x-2 justify-start items-center relative;
}

.login-checkbox input {
  @apply absolute opacity-0 cursor-pointer h-full w-full;
  pointer-events: all;
}

.login-checkbox span.checkmark {
  @apply w-5 h-5 bg-theme-light-blue border border-theme-light-blue2 rounded-md cursor-pointer pointer-events-none;
}

.login-checkbox:hover input~span.checkmark {
  @apply bg-[#222c49];
}

.login-checkbox span.checkmark svg {
  @apply opacity-0;
}

.login-checkbox input:checked~span.checkmark svg {
  @apply !opacity-100;
}
</style>