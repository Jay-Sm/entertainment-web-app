<template>
  <div class="title-tile">
    <Loader v-if="loading" />

    <img :src="props.image" @load="loadingDone($event)"
      class="absolute top-0 h-full right-0 w-full select-none pointer-events-none opacity-60 object-cover">
    <div v-if="!loading" class="relative z-10">{{ props.year }} &#x2022 {{ props.type }}</div>
    <div v-if="!loading" class="text-xl relative z-10 truncate">{{ props.name }}</div>

    <div class="title-options" v-if="!loading">
      <button v-if="toRaw(props.bookmarks[props.type]).includes(props.id)" @click="removeBookmark(props.id, props.type);" class="">
        <svg class="w-[1.1rem] h-[1.1rem]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path fill="#fff"
            d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2" />
        </svg>
      </button>
      <button v-else @click="addBookmark(props.id, props.type);" class="">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="w-[1.1rem] h-[1.1rem]"
          viewBox="0 0 16 16">
          <path
            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
        </svg>
      </button>

      <a :href="props.link" target="_blank"
        class="flex flex-row items-center gap-x-3 bg-[#ffffff74] px-3 py-2 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-[1.8rem] h-[1.8rem]"
          viewBox="0 0 16 16">
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5" />
        </svg>
        <p class="text-lg font-normal">Play</p>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, toRaw, watch } from 'vue'
import Loader from '../components/Loader.vue'
import { addBookmark } from '../composables/addBookmark';
import { removeBookmark } from '../composables/removeBookmark';

const props = defineProps(['name', 'id', 'year', 'image', 'link', 'type', 'bookmarks'])
const loading = ref(true)


// watch(
//   () => toRaw(props.bookmarks[props.type]),
//   (newValue, oldValue) => { console.log(newValue) },
//   { immediate: true }
// )

function loadingDone(event) {
  event.target.classList.add('invisible')

  setTimeout(() => {
    loading.value = false
    event.target.classList.remove('invisible')
  }, 1000);
}

</script>

<style scoped>
.title-tile {
  @apply w-full h-[14rem] rounded-lg flex flex-col justify-end p-4 relative overflow-hidden;
}

.title-tile div {
  @apply select-none
}

.title-options {
  @apply absolute opacity-0 top-[-100%] h-0 right-0 w-full flex justify-center items-center z-20 bg-[#00000090];
  @apply transition-all duration-[450ms] delay-500;
}

.title-options button {
  @apply absolute top-3 right-3 flex justify-center items-center bg-gray-900 p-2 rounded-full
}

.title-tile:hover .title-options {
  @apply opacity-100 h-full top-0;
}
</style>