<template>
  <div class="overflow-x-hidden h-full flex flex-row tablet:flex-col mobile:flex-col" v-on:click.self="searching = false">
    <div class="h-full tablet:w-full tablet:h-fit mobile:w-full mobile:h-fit tablet:px-6 mobile:px-0 mobile:pt-0">
      <div
        class="h-full w-[5rem] tablet:h-[6rem] tablet:w-full mobile:h-[6rem] mobile:w-full tablet:pb-0 mobile:pb-0 tablet:mb-6"
        v-on:click="searching = false">

        <nav>
          <Navigation @logIn="loggingIn = true" />
        </nav>

      </div>
    </div>

    <div class="w-full h-full mt-9">
      <div :class="{ 'overflow-hidden': !searching }" v-on:mouseleave="searching = false"
        v-on:click="focusSearch($event); searching = true" class="search-container">
        <div class="flex flex-row">
          <button @click="focusSearch($event)">
            <svg class="w-[2rem] h-[2rem]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff"
              viewBox="0 0 16 16">
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
          <input class="search-input outline-none" type="text" :placeholder="changeSearch(currentRoute)"
            v-on:keypress.enter="focusSearch($event); searching = true" v-model.lazy="searchText"
            v-on:focus="searching = true">
        </div>

        <div class="search-results" :class="{ '!h-[30rem]': searching }" v-on:click="focusSearch($event)">
          <div class="result-section ">
            <p>
              Movies
            </p>

            <div class="search-result">
              <a :href="movie.link" target="_blank" v-for="(movie, index) in movieSearch" :key="index">
                <p class="truncate">{{ movie.title }}</p>
                <p>&#x2022</p>
                <p>{{ movie.releaseYear }}</p>
              </a>
            </div>
          </div>

          <div class="result-section">
            <p>
              TV
            </p>

            <div class="search-result">
              <a :href="series.link" target="_blank" v-for="(series, index) in seriesSearch" :key="index">
                <p class="truncate">{{ series.title }}</p>
                <p>&#x2022</p>
                <p>{{ series.releaseYear }}</p>
              </a>
            </div>
          </div>

        </div>
      </div>

      <div class="relative" v-on:click="searching = false">
        <Login v-if="loggingIn === true" @closeLogIn="loggingIn = !loggingIn"
          @createAcc="creatingAccount = !creatingAccount" />

        <CreateAccount v-if="creatingAccount === true" @closeCreateAcc="creatingAccount = !creatingAccount"
          @logIn="loggingIn = !loggingIn" />

        <div class="flex flex-col items-stretch">
          <router-view @logIn="loggingIn = true"></router-view>

          <a href="https://www.themoviedb.org/" target="_blank"
            class="flex flex-col max-w-fit mt-[5rem] mb-[3rem] mx-auto justify-center items-center gap-y-2">
            <p class="text-sm text-theme-light-blue2 font-semibold select-none">Powered By</p>
            <img class="w-[10rem] select-none"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router';

import Navigation from './components/Navigation.vue';
import CreateAccount from './components/CreateAccount.vue'
import Login from "./components/Login.vue";
const authOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTFiY2MyZjkyZTQ3ZDM5NmE4ODBkZTg2N2FkNzdjMiIsInN1YiI6IjY1NmEwYzQxNjYxMWI0MDEwMDNkYWE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1vMeXlSKGAClK19ROM0E4OjMeTmmBKfZZ_mSq4ovi90'
  }
};

const loggingIn = ref(false)
const creatingAccount = ref(false)



const route = useRoute();
const currentRoute = ref(route.path)
watch(() => route.path, (newPath, oldPath) => {
  currentRoute.value = newPath
});

const searching = ref(false)
function changeSearch(route) {
  switch (route) {
    case '/movie':
      return 'Search for Movies'
      break;

    case '/tv':
      return 'Search for TV Series'
      break;

    default:
      return 'Search for Movies or TV Series'
      break;
  }
}

function focusSearch(event) {
  event.target.parentElement.parentElement.querySelector('input').focus()
}

// 

const searchText = ref('')

const movieSearch = ref([])
async function searchMovies() {
  switch (currentRoute.value) {
    case '/':
      break;

    case '/movie':
      break;

    default:
      console.log(currentRoute.value);
      return
      break;
  }

  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText.value}&include_adult=false&language=en-US&page=1`, authOptions)
  const resObj = await response.json()

  for (let i = 0; i < resObj.results.length; i++) {
    const movie = resObj.results[i];

    const imageResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/images`, authOptions)
    const imgResOBJ = await imageResponse.json()

    const providerResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/watch/providers`, authOptions)
    const provResOBJ = await providerResponse.json()

    if (imgResOBJ.backdrops && imgResOBJ.backdrops[0] && movieSearch.value.length < 8 && movie.release_date && provResOBJ.results['US']) {
      const filePath = `${imgResOBJ.backdrops[0].file_path}`
      const providerLink = provResOBJ.results['US'].link

      movieSearch.value.push({
        title: movie.title,
        releaseYear: movie.release_date.slice(0, 4),
        image: "https://image.tmdb.org/t/p/original" + filePath,
        link: providerLink
      })
    }
  }
  // console.log(toRaw(movieSearch.value[0]))
}

const seriesSearch = ref([])
async function searchSeries() {
  switch (currentRoute.value) {
    case '/':
      break;

    case '/tv':
      break;

    default:
      return
      break;
  }
  const response = await fetch(`https://api.themoviedb.org/3/search/tv?query=${searchText.value}&include_adult=false&language=en-US&page=1`, authOptions)
  const resObj = await response.json()

  for (let i = 0; i < resObj.results.length; i++) {
    const series = resObj.results[i];

    const providerResponse = await fetch(`https://api.themoviedb.org/3/tv/${series.id}/watch/providers`, authOptions)
    const provResOBJ = await providerResponse.json()

    if (series.backdrop_path && seriesSearch.value.length < 8 && series.first_air_date && provResOBJ.results['US']) {
      const providerLink = provResOBJ.results['US'].link

      seriesSearch.value.push({
        title: series.name,
        releaseYear: series.first_air_date.slice(0, 4),
        image: "https://image.tmdb.org/t/p/original" + series.backdrop_path,
        link: providerLink
      })
    }
  }
  // console.log(toRaw(seriesSearch.value[0]))
  // console.log(resObj)
}

watch(() => searchText.value, () => {
  seriesSearch.value = []
  movieSearch.value = []

  searchSeries()
  searchMovies()
})

</script>

<style>
.search-container {
  @apply mt-9 pr-[8.5rem] tablet:mt-0 mobile:mt-0 pl-[4rem] tablet:pl-6 tablet:pr-12 mobile:pl-6 mobile:pr-12 relative;
}

.search-input {
  @apply w-full bg-transparent ml-5 pb-2 font-light text-2xl placeholder:font-light placeholder:text-2xl placeholder:opacity-70;
}

.search-results {
  @apply absolute left-[7.24rem] right-[8.5rem] h-0 transition-all duration-300 bg-background-dark-blue bg-opacity-80 border border-theme-light-blue2 z-30 rounded-b-lg;
  @apply tablet:left-[4.72rem] tablet:right-[3rem] mobile:left-[4.72rem] mobile:right-[3rem];

  @apply flex flex-row py-3 px-5;
}

.result-section {
  @apply w-full flex flex-col items-start gap-y-5 px-[3%];
}

.result-section>p {
  @apply w-full text-center border-b text-xl font-normal tracking-wide
}

.search-result {
  @apply h-full grid grid-cols-1;
  grid-template-rows: repeat(8, 1fr);
}

.search-result a {
  @apply flex justify-center items-center max-w-fit my-2 gap-x-2 px-3 rounded-xl hover:bg-[#5a6a9055]
}
</style>