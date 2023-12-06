<template>
  <div class="w-full h-full pl-[4rem] pr-[8.5rem] tablet:px-6 mobile:px-3 flex flex-col mt-7 mb-[3rem] gap-y-[8rem]">
    <div>
      <div>
        <div class="flex flex-row justify-between max-w-full w-full">
          <h2 class="text-3xl flex flex-row items-end gap-x-4">
            Discover
            <div class="label-movie">MOVIE</div>
          </h2>

          <router-link to="/movie" class="text-theme-light-blue2 font-medium text-[0.8rem] hover:underline">
            SEE MORE
          </router-link>
        </div>

        <div class="mt-5">
          <Flicking class="w-full h-[14rem]"
            :options="{ align: 'center', circular: true, easing: x => 1 - Math.pow(1 - x, 2.1), deceleration: 0.035 }"
            @move-end="onMoveEnd">

            <div v-for="(title, index) in discoverMovies" :key="index">
              <Title class="!h-full !w-[27rem] mobile:!w-[20rem] ml-10" :name="title.name" :year="title.releaseYear"
                :image="title.image" :link="title.link" :type="title.type" />
            </div>
          </Flicking>
        </div>
      </div>

      <div class="mt-12">
        <div class="flex flex-row justify-between max-w-full w-full">
          <h2 class="text-3xl flex flex-row items-end gap-x-4">
            Popular
            <div class="label-movie">MOVIE</div>
          </h2>
          <router-link to="/movie" class="text-theme-light-blue2 font-medium text-[0.8rem] hover:underline">
            SEE MORE
          </router-link>
        </div>

        <div class="grid-popular">
          <div v-for="(title, index) in popularMovies" :key="index" :class="popularIndex(index)">
            <Title :name="title.name" :year="title.releaseYear" :image="title.image" :link="title.link"
              :type="title.type" />
          </div>
        </div>
      </div>

      <div class="mt-12">
        <div class="flex flex-row justify-between max-w-full w-full">
          <h2 class="text-3xl flex flex-row items-end gap-x-4">
            Top Rated
            <div class="label-movie">MOVIE</div>
          </h2>
          <router-link to="/movie" class="text-theme-light-blue2 font-medium text-[0.8rem] hover:underline">
            SEE MORE
          </router-link>
        </div>

        <div class="rated-container">
          <div v-for="(title, index) in topRatedMovies" :key="index" class="w-full">
            <Title class="" :name="title.name" :year="title.releaseYear" :image="title.image" :link="title.link"
              :type="title.type" />
          </div>
        </div>
      </div>
    </div>

    <div>
      <div>
        <div class="flex flex-row justify-between max-w-full w-full">
          <h2 class="text-3xl flex flex-row items-end gap-x-4">
            Discover
            <div class="label-tv">TV SERIES</div>
          </h2>

          <router-link to="/tv" class="text-theme-light-blue2 font-medium text-[0.8rem] hover:underline">
            SEE MORE
          </router-link>
        </div>

        <div class="mt-5">
          <Flicking class="w-full h-[14rem]"
            :options="{ align: 'center', circular: true, easing: x => 1 - Math.pow(1 - x, 2.1), deceleration: 0.035 }"
            @move-end="onMoveEnd">

            <div v-for="(title, index) in discoverSeries" :key="index">
              <Title class="!h-full !w-[27rem] mobile:!w-[20rem] ml-10" :name="title.name" :year="title.releaseYear"
                :image="title.image" :link="title.link" :type="title.type" />
            </div>
          </Flicking>
        </div>
      </div>

      <div class="mt-12">
        <div class="flex flex-row justify-between max-w-full w-full">
          <h2 class="text-3xl flex flex-row items-end gap-x-4">
            Popular
            <div class="label-tv">TV SERIES</div>
          </h2>

          <router-link to="/tv" class="text-theme-light-blue2 font-medium text-[0.8rem] hover:underline">
            SEE MORE
          </router-link>
        </div>

        <div class="grid-popular">
          <div v-for="(title, index) in popularSeries" :key="index" :class="popularIndex(index)">
            <Title :name="title.name" :year="title.releaseYear" :image="title.image" :link="title.link"
              :type="title.type" />
          </div>
        </div>
      </div>

      <div class="mt-12">
        <div class="flex flex-row justify-between max-w-full w-full">
          <h2 class="text-3xl flex flex-row items-end gap-x-4">
            Top Rated
            <div class="label-tv">TV SERIES</div>
          </h2>
          <router-link to="/tv" class="text-theme-light-blue2 font-medium text-[0.8rem] hover:underline">
            SEE MORE
          </router-link>
        </div>

        <div class="rated-container">
          <div v-for="(title, index) in topRatedSeries" :key="index" class="w-full">
            <Title class="" :name="title.name" :year="title.releaseYear" :image="title.image" :link="title.link"
              :type="title.type" />
          </div>
        </div>

      </div>

      <div class="mt-12">
        <div class="flex flex-row justify-between max-w-full w-full">
          <h2 class="text-3xl flex flex-row items-end gap-x-4">
            Airing Today
            <div class="label-tv">TV SERIES</div>
          </h2>

          <router-link to="/tv" class="text-theme-light-blue2 font-medium text-[0.8rem] hover:underline">
            SEE MORE
          </router-link>
        </div>

        <div class="mt-5">
          <Flicking class="w-full h-[14rem]"
            :options="{ align: 'center', circular: true, easing: x => 1 - Math.pow(1 - x, 2.1), deceleration: 0.035 }"
            @move-end="onMoveEnd">

            <div v-for="(title, index) in airingToday" :key="index">
              <Title class="!h-full !w-[27rem] mobile:!w-[20rem] ml-10" :name="title.name" :year="title.releaseYear"
                :image="title.image" :link="title.link" :type="title.type" />
            </div>
          </Flicking>
        </div>
      </div>
    </div>

    <a href="https://www.themoviedb.org/" target="_blank" class="flex flex-col justify-center items-center gap-y-2">
      <p class="text-sm text-theme-light-blue2 font-semibold select-none">Powered By</p>
      <img class="w-[10rem] select-none"
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg">
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Title from '../components/Title.vue'
const authOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTFiY2MyZjkyZTQ3ZDM5NmE4ODBkZTg2N2FkNzdjMiIsInN1YiI6IjY1NmEwYzQxNjYxMWI0MDEwMDNkYWE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1vMeXlSKGAClK19ROM0E4OjMeTmmBKfZZ_mSq4ovi90'
  }
};
function popularIndex(index) {
  return `tile${index + 1}`
}

// Movies
const discoverMovies = ref([])
async function getDiscoverMovies() {
  const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', authOptions)
  const resObj = await response.json()

  for (let i = 0; i < resObj.results.length; i++) {
    const movie = resObj.results[i];

    const imageResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/images`, authOptions)
    const imgResOBJ = await imageResponse.json()

    const providerResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/watch/providers`, authOptions)
    const provResOBJ = await providerResponse.json()


    if (imgResOBJ.backdrops && imgResOBJ.backdrops[0] && discoverMovies.value.length < 9 && provResOBJ.results['US']) {
      const filePath = `${imgResOBJ.backdrops[0].file_path}`
      const providerLink = provResOBJ.results['US'].link

      discoverMovies.value.push({
        name: movie.title,
        releaseYear: movie.release_date.slice(0, 4),
        image: "https://image.tmdb.org/t/p/original" + filePath,
        link: providerLink,
        type: 'Movie'
      })
    }
  }
}
getDiscoverMovies()

const popularMovies = ref([])
async function getPopularMovies() {
  const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', authOptions)
  const resObj = await response.json()

  for (let i = 0; i < resObj.results.length; i++) {
    const movie = resObj.results[i];

    const imageResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/images`, authOptions)
    const imgResOBJ = await imageResponse.json()

    const providerResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/watch/providers`, authOptions)
    const provResOBJ = await providerResponse.json()

    if (imgResOBJ.backdrops && imgResOBJ.backdrops[0] && popularMovies.value.length < 6 && provResOBJ.results['US']) {
      const filePath = `${imgResOBJ.backdrops[0].file_path}`
      const providerLink = provResOBJ.results['US'].link

      popularMovies.value.push({
        name: movie.title,
        releaseYear: movie.release_date.slice(0, 4),
        image: "https://image.tmdb.org/t/p/original" + filePath,
        link: providerLink,
        type: 'Movie'
      })
    }
  }
}
getPopularMovies()

const topRatedMovies = ref([])
async function getTopRatedMovies() {
  const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', authOptions)
  const resObj = await response.json()

  for (let i = 0; i < resObj.results.length; i++) {
    const movie = resObj.results[i];

    const imageResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/images`, authOptions)
    const imgResOBJ = await imageResponse.json()

    const providerResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/watch/providers`, authOptions)
    const provResOBJ = await providerResponse.json()

    if (imgResOBJ.backdrops && imgResOBJ.backdrops[0] && topRatedMovies.value.length < 3 && provResOBJ.results['US']) {
      const filePath = `${imgResOBJ.backdrops[0].file_path}`
      const providerLink = provResOBJ.results['US'].link

      topRatedMovies.value.push({
        name: movie.title,
        releaseYear: movie.release_date.slice(0, 4),
        image: "https://image.tmdb.org/t/p/original" + filePath,
        link: providerLink,
        type: 'Movie'
      })
    }
  }
}
getTopRatedMovies()


// TV Series
const discoverSeries = ref([])
async function getDiscoverSeries() {
  const response = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', authOptions)
  const resObj = await response.json()

  for (let i = 0; i < resObj.results.length; i++) {
    const series = resObj.results[i];

    const providerResponse = await fetch(`https://api.themoviedb.org/3/tv/${series.id}/watch/providers`, authOptions)
    const provResOBJ = await providerResponse.json()

    if (series.backdrop_path && discoverSeries.value.length < 9 && provResOBJ.results['US']) {
      const providerLink = provResOBJ.results['US'].link

      discoverSeries.value.push({
        name: series.name,
        releaseYear: series.first_air_date.slice(0, 4),
        image: "https://image.tmdb.org/t/p/original" + series.backdrop_path,
        link: providerLink,
        type: "TV Series"
      })
    }
  }
}
getDiscoverSeries()

const popularSeries = ref([])
async function getPopularSeries() {
  const response = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=5', authOptions)
  const resObj = await response.json()

  for (let i = 0; i < resObj.results.length; i++) {
    const series = resObj.results[i];

    const providerResponse = await fetch(`https://api.themoviedb.org/3/tv/${series.id}/watch/providers`, authOptions)
    const provResOBJ = await providerResponse.json()

    if (series.backdrop_path && popularSeries.value.length < 6 && provResOBJ.results['US']) {
      const providerLink = provResOBJ.results['US'].link

      popularSeries.value.push({
        name: series.name,
        releaseYear: series.first_air_date.slice(0, 4),
        image: "https://image.tmdb.org/t/p/original" + series.backdrop_path,
        link: providerLink,
        type: "TV Series"
      })
    }
  }
}
getPopularSeries()

const topRatedSeries = ref([])
async function getTopRatedSeries() {
  const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', authOptions)
  const resObj = await response.json()

  for (let i = 0; i < resObj.results.length; i++) {
    const series = resObj.results[i];

    const providerResponse = await fetch(`https://api.themoviedb.org/3/tv/${series.id}/watch/providers`, authOptions)
    const provResOBJ = await providerResponse.json()

    if (series.backdrop_path && topRatedSeries.value.length < 3 && provResOBJ.results['US']) {
      const providerLink = provResOBJ.results['US'].link

      topRatedSeries.value.push({
        name: series.name,
        releaseYear: series.first_air_date.slice(0, 4),
        image: "https://image.tmdb.org/t/p/original" + series.backdrop_path,
        link: providerLink,
        type: "TV Series"
      })
    }
  }
}
getTopRatedSeries()

const airingToday = ref([])
async function getAiring() {
  const response = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', authOptions)
  const resObj = await response.json()

  for (let i = 0; i < resObj.results.length; i++) {
    const series = resObj.results[i];

    const providerResponse = await fetch(`https://api.themoviedb.org/3/tv/${series.id}/watch/providers`, authOptions)
    const provResOBJ = await providerResponse.json()

    if (series.backdrop_path && airingToday.value.length < 9 && provResOBJ.results['US']) {
      const providerLink = provResOBJ.results['US'].link

      airingToday.value.push({
        name: series.name,
        releaseYear: series.first_air_date.slice(0, 4),
        image: "https://image.tmdb.org/t/p/original" + series.backdrop_path,
        link: providerLink,
        type: "TV Series"
      })
    }
  }
}
getAiring()

</script>

<style></style>