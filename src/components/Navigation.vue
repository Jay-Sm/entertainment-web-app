<template>
  <div class="nav-bar">
    <router-link to="/">
      <img class="w-[2rem] min-w-[2rem]" src="../assets/images/logo.svg">
    </router-link>

    <ul>
      <li>
        <router-link to="/">
          <svg class="fill-icon" width="392" height="392" viewBox="0 0 392 392" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="180" height="180" rx="10" fill="#000" />
            <rect x="211.986" width="180" height="180" rx="10" fill="#000" />
            <rect y="211.604" width="180" height="180" rx="10" fill="#000" />
            <rect x="211.986" y="211.604" width="180" height="180" rx="10" fill="#000" />
          </svg>
        </router-link>
      </li>
      <li>
        <router-link to="/movie">
          <svg class="fill-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="#000"
              d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
          </svg>
        </router-link>
      </li>
      <li>
        <router-link to="/tv">
          <svg class="fill-icon" fill="#000" width="1em" height="1em" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z">
            </path>
          </svg>
        </router-link>
      </li>
      <li>
        <router-link to="/bookmarked">
          <svg class="fill-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill="#000"
              d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
          </svg>
        </router-link>
      </li>
    </ul>

    <button v-if="!loggedIn" @click="emit('logIn')" class="" to="/login">
      <div>
        <svg class="w-7 h-7 -ml-[0.2rem] min-w-max min-h-max" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
          fill="#fff">
          <path
            d="M392 80H232a56.06 56.06 0 00-56 56v104h153.37l-52.68-52.69a16 16 0 0122.62-22.62l80 80a16 16 0 010 22.62l-80 80a16 16 0 01-22.62-22.62L329.37 272H176v104c0 32.05 33.79 56 64 56h152a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zM80 240a16 16 0 000 32h96v-32z" />
        </svg>
      </div>
    </button>

    <button v-else @click="firebaseLogOut()" class="gap-y-1" to="/login">
      <div>
        <svg class="w-7 h-7 -mr-[0.2rem] min-w-max min-h-max" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
          fill="#fff">
          <path
            d="M160 256a16 16 0 0116-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h160a56.06 56.06 0 0056-56V272H176a16 16 0 01-16-16zM459.31 244.69l-80-80a16 16 0 00-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1022.62 22.62l80-80a16 16 0 000-22.62z" />
        </svg>
      </div>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const emit = defineEmits(['logIn'])

const loggedIn = ref(false)
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    loggedIn.value = true

  } else {
    loggedIn.value = false

  }
});

function firebaseLogOut() {
  signOut(auth)
    .then(() => {
      location.reload()
    })
    .catch((error) => {
      // An error happened.
    });
}


</script>

<style scoped>
.nav-bar {
  @apply fixed top-6 left-6 bottom-24 z-40 w-[5rem] max-h-[47rem] pt-8 pb-10 bg-theme-light-blue rounded-lg flex flex-col justify-between items-center;
  @apply tablet:h-[6rem] tablet:right-6 tablet:w-auto tablet:flex-row tablet:px-8 tablet:py-0;
  @apply mobile:h-[6rem] mobile:right-0 mobile:left-0 mobile:top-0 mobile:w-auto mobile:flex-row mobile:px-8 mobile:py-0 mobile:rounded-none;
}

.nav-bar ul {
  @apply max-w-full flex flex-col tablet:flex-row mobile:flex-row items-center gap-y-[3rem] tablet:gap-x-[4rem] mobile:w-full mobile:justify-between mobile:px-[2rem]
}

.nav-bar>button {
  @apply flex flex-col items-center
}

.nav-bar>button>div {
  @apply p-[0.3rem] px-[0.4rem] border-2 rounded-full
}

.fill-icon {
  @apply w-[1.5rem] h-[1.5rem] box-border;
}

.fill-icon rect,
.fill-icon path {
  @apply fill-theme-light-blue2 transition-colors duration-300;
}

:hover.fill-icon rect,
:hover.fill-icon path {
  @apply fill-theme-logo-red;
}

.router-link-active rect,
.router-link-active path {
  @apply !fill-[#ffffff];
}
</style>