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
        <div class="grid grid-cols-4 gap-4">
          <div v-for="(title, index) in bookmarkedMovies" :key="index" class="w-full mt-5">
            <Title class="" :name="title.name" :id="title.id" :year="title.releaseYear" :image="title.image"
              :link="title.link" :type="title.type" :bookmarks="bookmarkedTitles" />
          </div>
        </div>

      </div>
      <div class="mt-12">
        <h1 class="text-4xl">Bookmarked TV Series</h1>
        <div class="grid grid-cols-4 gap-4">
          <div v-for="(title, index) in bookmarkedSeries" :key="index" class="w-full mt-5">
            <Title class="" :name="title.name" :id="title.id" :year="title.releaseYear" :image="title.image"
              :link="title.link" :type="title.type" :bookmarks="bookmarkedTitles" />
          </div>
        </div>

      </div>


    </div>
  </div>
</template>

<script setup>
import { ref, toRaw, watch } from 'vue'
import Title from '../components/Title.vue'
import { db, auth } from "../firebase/firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const authOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTFiY2MyZjkyZTQ3ZDM5NmE4ODBkZTg2N2FkNzdjMiIsInN1YiI6IjY1NmEwYzQxNjYxMWI0MDEwMDNkYWE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1vMeXlSKGAClK19ROM0E4OjMeTmmBKfZZ_mSq4ovi90'
  }
};

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

const bookmarkedTitles = ref({})
function updateBookmarked(obj) {
  bookmarkedTitles.value = obj
}
onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userBookmarkDoc = doc(db, "user_bookmarks", user.uid);

    onSnapshot(userBookmarkDoc, async (doc) => {
      bookmarkedMovies.value = []

      const data = doc.data()
      updateBookmarked({ "Movie": data['bookmarked_movies'], "TV Series": data['bookmarked_series'] })

    });
  }
})

const bookmarkedMovies = ref([])
async function getBookmarkedMovies() {
  watch(() => toRaw(bookmarkedTitles.value),
    async (newVal, oldVal) => {
      for (let i = 0; i < newVal['Movie'].length; i++) {
        const movieId = newVal['Movie'][i];

        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, authOptions)
        const movie = await response.json()

        const providerResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/watch/providers`, authOptions)
        const provResOBJ = await providerResponse.json()

        bookmarkedMovies.value.push({
          name: movie.original_title,
          id: movie.id,
          releaseYear: movie.release_date.slice(0, 4),
          image: "https://image.tmdb.org/t/p/original" + movie['backdrop_path'],
          link: provResOBJ.results['US'].link,
          type: 'Movie'
        })
      }
    },
    { immediate: true })
}
getBookmarkedMovies()


const bookmarkedSeries = ref([])
async function getBookmarkedSeries() {
  watch(() => toRaw(bookmarkedTitles.value),
    async (newVal, oldVal) => {
      for (let i = 0; i < newVal['TV Series'].length; i++) {
        const seriesId = newVal['TV Series'][i];

        const response = await fetch(`https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`, authOptions)
        const series = await response.json()

        const providerResponse = await fetch(`https://api.themoviedb.org/3/tv/${series.id}/watch/providers`, authOptions)
        const provResOBJ = await providerResponse.json()

        bookmarkedSeries.value.push({
          name: series.original_title,
          id: series.id,
          releaseYear: series.first_air_date.slice(0, 4),
          image: "https://image.tmdb.org/t/p/original" + series['backdrop_path'],
          link: provResOBJ.results['US'].link,
          type: 'TV Series'
        })
      }
    },
    { immediate: true })
}
getBookmarkedSeries()
</script>

<style></style>