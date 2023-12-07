<template>
  <div class="mt-7 mb-[3rem] pl-[4rem] pr-[3.5rem] tablet:px-6 mobile:px-3">
    <div v-if="!loggedIn">
      <h1 class="text-4xl">Bookmarks</h1>

      <div class=" mt-5 ml-2">
        <p class="inline-block mr-4">Already have an account?</p>
        <button @click="emit('logIn')"
          class="inline-block text-gray-600 hover:text-[#b8d4ee] transition-colors">Login</button>
      </div>
    </div>

    <div v-else>
      <div>
        <h1 class="text-4xl">Bookmarked Movies</h1>

      </div>
      <div class="mt-12">
        <h1 class="text-4xl">Bookmarked TV Series</h1>

      </div>


    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Title from '../components/Title.vue'

import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const loggedIn = ref(false)
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    loggedIn.value = true

  } else {
    loggedIn.value = false

  }
});
const emit = defineEmits(['logIn'])
</script>

<style></style>