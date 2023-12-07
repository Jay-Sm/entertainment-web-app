<template>
  <div class="h-full flex flex-row mobile:flex-col mt-7 mb-[3rem] pl-[4rem] pr-[3.5rem] tablet:px-6 mobile:px-3">
    <div class="mobile:h-[2.6rem] mobile:mb-1">
      <div v-if="windowWidth > 514" class="genre-grid">
        <button :disabled="searching" v-for="(genre, index) in genres" :key="index" class="genre-option"
          :class="{ 'genre-selected': currentGenreID === genre.id }" @click="currentGenreID = genre.id; newGenre();">
          {{ genre.name }}
        </button>
      </div>

      <Flicking v-else class="genre-grid"
        :options="{ align: 'prev', circular: false, bound: true, easing: x => 1 - Math.pow(1 - x, 2.1), deceleration: 0.0015 }">
        <button :disabled="searching" v-for="(genre, index) in genres" :key="index" class="genre-option"
          :class="{ 'genre-selected': currentGenreID === genre.id }" @click="currentGenreID = genre.id; newGenre();">
          {{ genre.name }}
        </button>
      </Flicking>
    </div>

    <div class="w-full">
      <div v-if="currentGenreID"
        class="grid grid-cols-3 mobile:grid-cols-2 tablet:grid-cols-2 small:grid-cols-2 gap-4 w-full">
        <div v-for="(title, index) in genreMovies" :key="index" class="">
          <Title class="" :name="title.name" :id="title.id" :year="title.releaseYear" :image="title.image"
            :link="title.link" :type="title.type" :bookmarks="bookmarkedTitles" />
        </div>
      </div>

      <div v-else class="w-full flex justify-center pt-[5rem] text-theme-light-blue2 select-none">
        Please Select A Genre
      </div>

      <div v-if="genreMovies.length > 1" class="flex justify-center items-center mt-[3rem] font-normal">
        <div class="page-selection">
          <button @click="movePage('back')" :disabled="searching" class="justify-end">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[1.5rem] h-[1.5rem]" viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48"
                d="M244 400L100 256l144-144M120 256h292" />
            </svg>
            <p>Prev</p>
          </button>
          <div class="h-full bg-white text-background-dark-blue mx-7 py-2 flex justify-center items-center">
            Page {{ currentPage }} of {{ genrePages }}
          </div>
          <button @click="movePage('forward')" :disabled="searching" class="justify-start">
            <p>Next</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-[1.5rem] h-[1.5rem]" viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48"
                d="M268 112l144 144-144 144M392 256H100" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Title from '../components/Title.vue'
import Flicking from '@egjs/vue3-flicking';

const windowWidth = ref(window.innerWidth)
window.addEventListener('resize', function (e) {
  windowWidth.value = window.innerWidth
});

const authOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTFiY2MyZjkyZTQ3ZDM5NmE4ODBkZTg2N2FkNzdjMiIsInN1YiI6IjY1NmEwYzQxNjYxMWI0MDEwMDNkYWE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1vMeXlSKGAClK19ROM0E4OjMeTmmBKfZZ_mSq4ovi90'
  }
};

const genres = ref([])
async function getGenres() {
  const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', authOptions)
  const resObj = await response.json()

  for (let i = 0; i < resObj.genres.length; i++) {
    const genre = resObj.genres[i];
    genres.value.push({ name: genre.name, id: genre.id })
  }
}
getGenres()


const currentGenreID = ref(''.toLowerCase())
const genreMovies = ref([])
const currentPage = ref(1)
const genrePages = ref()

function newGenre() {
  genreMovies.value = []
  currentPage.value = 1

  searchMovies()
}

const searching = ref(false)
async function searchMovies() {
  searching.value = true

  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage.value}&sort_by=popularity.desc&with_genres=${currentGenreID.value}`, authOptions)
  const resObj = await response.json()

  currentPage.value = resObj.page
  genrePages.value = resObj.total_pages;

  for (let i = 0; i < resObj.results.length; i++) {
    const movie = resObj.results[i];

    const imageResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/images`, authOptions)
    const imgResOBJ = await imageResponse.json()

    const providerResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/watch/providers`, authOptions)
    const provResOBJ = await providerResponse.json()

    if (imgResOBJ.backdrops && imgResOBJ.backdrops[0] && genreMovies.value.length < 15 && provResOBJ.results['US']) {
      const filePath = `${imgResOBJ.backdrops[0].file_path}`
      const providerLink = provResOBJ.results['US'].link

      genreMovies.value.push({
        name: movie.title,
        id: movie.id,
        releaseYear: movie.release_date.slice(0, 4),
        image: "https://image.tmdb.org/t/p/original" + filePath,
        link: providerLink,
        type: 'Movie'
      })
    }
  }
  searching.value = false
}

function movePage(v) {
  if (v === 'forward' && currentPage.value < genrePages.value) {
    currentPage.value += 1
    genreMovies.value = []
    searchMovies()
  }
  if (v === 'back' && currentPage.value !== 1) {
    currentPage.value -= 1
    genreMovies.value = []
    searchMovies()
  }
}
</script>

<style></style>