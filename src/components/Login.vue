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

      <div class="flex flex-col justify-start items-center gap-y-3">
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
            <input type="checkbox">
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
          <div class="w-full flex flex-row justify-between">
            <button @click="emit('closeLogIn'); emit('createAcc')"
              class="text-gray-600 hover:text-[#b8d4ee] transition-colors">Don't have an account?</button>
            <button class="text-gray-600 hover:text-[#b8d4ee] transition-colors">Forgot password?</button>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";

const emit = defineEmits(['closeLogIn', 'createAcc'])

const email = ref('')
const password = ref('')
function firebaseLogin() {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;

      console.log(user);
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

<style></style>