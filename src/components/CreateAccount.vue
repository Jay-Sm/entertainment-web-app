<template>
  <div class="login-backdrop" v-on:click.self="emit('closeCreateAcc')">
    <div class="login-container">
      <div class="flex justify-end">
        <button @click="emit('closeCreateAcc')" class="w-6 h-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-full h-full fill-[#89a0d7]" viewBox="0 0 512 512">
            <path
              d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z" />
          </svg>
        </button>
      </div>

      <div class="form-container">
        <h3 class="text-4xl font-semibold max-w-fit">Create Account</h3>

        <form @submit.prevent="firebaseCreateAcc" class="w-full flex flex-col gap-y-5 px-10">
          <div class="login-input">
            <p>Email</p>
            <input type="text" placeholder="Enter email" v-model="email">
          </div>
          <div class="login-input">
            <p>Password</p>
            <input type="text" placeholder="Enter password" v-model="password">
          </div>
          <div class="login-input mt-11">
            <button>
              Create Account
            </button>
          </div>
          <div class="w-full text-left form-links">
            <button @click="emit('closeCreateAcc'); emit('logIn')">
              Already have an account?
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth, db } from '../firebase/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const emit = defineEmits(['closeCreateAcc', 'logIn'])

const email = ref('')
const password = ref('')
async function firebaseCreateAcc() {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;

      setDoc(doc(db, "user_bookmarks", user.uid), {
        bookmarked_movies: [], bookmarked_series: [],
      });

      emit('closeCreateAcc')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error(errorCode);
      console.error(errorMessage);
    });
}

</script>

<style>
/* Go to [Login.vue] */
</style>