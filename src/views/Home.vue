<template>
  <div class="w-full h-full flex flex-col mt-7 gap-y-[8rem]">
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
          <Flicking v-if="discoverMovies.length !== 9" class="w-full h-[14rem]"
            :options="{ align: 'center', circular: true, easing: x => 1 - Math.pow(1 - x, 2.1), deceleration: 0.035 }"
            @move-end="onMoveEnd">

            <div v-for="(item, i) in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="i" class="slide-trending">
              <div
                class="absolute top-0 bottom-0 right-0 left-0 border-2 bg-gray-700 opacity-10 animate-pulse rounded-lg">
              </div>
              <div class="relative z-10 bg-gray-700 opacity-30 max-w-fit text-transparent rounded-full">0000 &#x2022 Movie
              </div>
              <div class="text-xl relative z-10 bg-gray-700 opacity-30 max-w-fit text-transparent rounded-full mt-2">xXxXx
                XxXxX xXxX</div>
            </div>
          </Flicking>

          <Flicking v-if="discoverMovies.length === 9" class="w-full h-[14rem]"
            :options="{ align: 'center', circular: true, easing: x => 1 - Math.pow(1 - x, 2.1), deceleration: 0.035 }"
            @move-end="onMoveEnd">

            <div v-for="(movie, index) in discoverMovies" :key="index" class="slide-trending">
              <img :src="movie.image"
                class="absolute top-0 h-full right-0 w-full select-none pointer-events-none opacity-60 object-cover">
              <div class="relative z-10">
                {{ movie.releaseYear }} &#x2022 Movie
              </div>
              <div class="text-xl relative z-10 truncate">
                {{ movie.title }}
              </div>
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

        <div v-if="popularMovies.length !== 6" class="grid-popular">
          <div v-for="(item, i) in [0, 1, 2, 3, 4, 5]" :key="i" class="tile-popular" :class="popularIndex(i)">
            <div class="absolute top-0 bottom-0 right-0 left-0 bg-gray-700 opacity-10 border-2 animate-pulse rounded-lg">
            </div>
            <div class="relative z-10 bg-gray-700 opacity-30 max-w-fit text-transparent rounded-full">0000 &#x2022 Movie
            </div>
            <div class="text-xl relative z-10 bg-gray-700 opacity-30 max-w-fit text-transparent rounded-full mt-2">xXxXx
              XxXxX xXxX</div>
          </div>
        </div>

        <div v-else class="grid-popular">
          <div v-for="(movie, index) in popularMovies" :key="index" class="tile-popular"
            :class="popularIndex(index)">
            <img :src="movie.image"
              class="absolute top-0 h-full right-0 w-full select-none pointer-events-none opacity-60 object-cover">
            <div class="relative z-10">{{ movie.releaseYear }} &#x2022 Movie</div>
            <div class="text-xl relative z-10 truncate">{{ movie.title }}</div>
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

        <div>
          <div v-if="topRatedMovies.length !== 3" class="mt-5 w-full flex flex-row gap-x-4">
            <div v-for="(item, i) in [1, 2, 3]" :key="i" class="tile-rated">
              <div
                class="absolute top-0 bottom-0 right-0 left-0 bg-gray-700 opacity-10 border-2 animate-pulse rounded-lg">
              </div>
              <div class="relative z-10 bg-gray-700 opacity-30 max-w-fit text-transparent rounded-full">0000 &#x2022 Movie
              </div>
              <div class="text-xl relative z-10 bg-gray-700 opacity-30 max-w-fit text-transparent rounded-full mt-2">xXxXx
                XxXxX xXxX</div>
            </div>
          </div>

          <div v-else class="mt-5 w-full flex flex-row gap-x-4">
            <div v-for="(movie, index) in topRatedMovies" :key="index" class="tile-rated">
              <img :src="movie.image"
                class="absolute top-0 h-full right-0 w-full select-none pointer-events-none opacity-60 object-cover">
              <div class="relative z-10">{{ movie.releaseYear }} &#x2022 Movie</div>
              <div class="text-xl relative z-10 truncate">{{ movie.title }}</div>
            </div>
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

          <router-link to="/movie" class="text-theme-light-blue2 font-medium text-[0.8rem] hover:underline">
            SEE MORE
          </router-link>
        </div>

        <div class="mt-5">
          <Flicking v-if="discoverSeries.length !== 9" class="w-full h-[14rem]"
            :options="{ align: 'center', circular: true, easing: x => 1 - Math.pow(1 - x, 2.1), deceleration: 0.035 }"
            @move-end="onMoveEnd">

            <div v-for="(item, i) in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="i" class="slide-trending">
              <div
                class="absolute top-0 bottom-0 right-0 left-0 border-2 bg-gray-700 opacity-10 animate-pulse rounded-lg">
              </div>
              <div class="relative z-10 bg-gray-700 opacity-30 max-w-fit text-transparent rounded-full">0000 &#x2022 Movie
              </div>
              <div class="text-xl relative z-10 bg-gray-700 opacity-30 max-w-fit text-transparent rounded-full mt-2">xXxXx
                XxXxX xXxX</div>
            </div>
          </Flicking>

          <Flicking v-if="discoverSeries.length === 9" class="w-full h-[14rem]"
            :options="{ align: 'center', circular: true, easing: x => 1 - Math.pow(1 - x, 2.1), deceleration: 0.035 }"
            @move-end="onMoveEnd">

            <div v-for="(movie, index) in discoverSeries" :key="index" class="slide-trending">
              <img :src="movie.image"
                class="absolute top-0 h-full right-0 w-full select-none pointer-events-none opacity-60 object-cover">
              <div class="relative z-10">
                {{ movie.releaseYear }} &#x2022 Movie
              </div>
              <div class="text-xl relative z-10 truncate">
                {{ movie.title }}
              </div>
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

          <router-link to="/movie" class="text-theme-light-blue2 font-medium text-[0.8rem] hover:underline">
            SEE MORE
          </router-link>
        </div>

        <div v-if="popularSeries.length !== 6" class="grid-popular">
          <div v-for="(item, i) in [0, 1, 2, 3, 4, 5]" :key="i" class="tile-popular" :class="popularIndex(i)">
            <div class="absolute top-0 bottom-0 right-0 left-0 bg-gray-700 opacity-10 border-2 animate-pulse rounded-lg">
            </div>
            <div class="relative z-10 bg-gray-700 opacity-30 max-w-fit text-transparent rounded-full">0000 &#x2022 Movie
            </div>
            <div class="text-xl relative z-10 bg-gray-700 opacity-30 max-w-fit text-transparent rounded-full mt-2">xXxXx
              XxXxX xXxX</div>
          </div>
        </div>

        <div v-else class="grid-popular">
          <div v-for="(movie, index) in popularSeries" :key="index" class="tile-popular"
            :class="popularIndex(index)">
            <img :src="movie.image"
              class="absolute top-0 h-full right-0 w-full select-none pointer-events-none opacity-60 object-cover">
            <div class="relative z-10">{{ movie.releaseYear }} &#x2022 Movie</div>
            <div class="text-xl relative z-10 truncate">{{ movie.title }}</div>
          </div>
        </div>
      </div>

      <div class="mt-12">
        <div class="flex flex-row justify-between max-w-full w-full">
          <h2 class="text-3xl flex flex-row items-end gap-x-4">
            Top Rated
            <div class="label-tv">TV SERIES</div>
          </h2>
          <router-link to="/movie" class="text-theme-light-blue2 font-medium text-[0.8rem] hover:underline">
            SEE MORE
          </router-link>
        </div>

        <div>
          <div v-if="topRatedSeries.length !== 3" class="mt-5 w-full flex flex-row gap-x-4">
            <div v-for="(item, i) in [1, 2, 3]" :key="i" class="tile-rated">
              <div
                class="absolute top-0 bottom-0 right-0 left-0 bg-gray-700 opacity-10 border-2 animate-pulse rounded-lg">
              </div>
              <div class="relative z-10 bg-gray-700 opacity-30 max-w-fit text-transparent rounded-full">0000 &#x2022 Movie
              </div>
              <div class="text-xl relative z-10 bg-gray-700 opacity-30 max-w-fit text-transparent rounded-full mt-2">xXxXx
                XxXxX xXxX</div>
            </div>
          </div>

          <div v-else class="mt-5 w-full flex flex-row gap-x-4">
            <div v-for="(movie, index) in topRatedSeries" :key="index" class="tile-rated">
              <img :src="movie.image"
                class="absolute top-0 h-full right-0 w-full select-none pointer-events-none opacity-60 object-cover">
              <div class="relative z-10">{{ movie.releaseYear }} &#x2022 Movie</div>
              <div class="text-xl relative z-10 truncate">{{ movie.title }}</div>
            </div>
          </div>
        </div>

      </div>

      <!-- <div class="mt-12">
        <div class="flex flex-row justify-between max-w-full w-full">
          <h2 class="text-3xl flex flex-row items-end gap-x-4">
            Airing Today
            <div class="label-tv">TV SERIES</div>
          </h2>

          <router-link to="/movie" class="text-theme-light-blue2 font-medium text-[0.8rem] hover:underline">
            SEE MORE
          </router-link>
        </div>

        <div class="mt-5">
          <Flicking v-if="discoverMovies.length !== 9" class="w-full h-[14rem]"
            :options="{ align: 'center', circular: true, easing: x => 1 - Math.pow(1 - x, 2.1), deceleration: 0.035 }"
            @move-end="onMoveEnd">

            <div v-for="(item, i) in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="i" class="slide-trending">
              <div
                class="absolute top-0 bottom-0 right-0 left-0 border-2 bg-gray-700 opacity-10 animate-pulse rounded-lg">
              </div>
              <div class="relative z-10 bg-gray-700 opacity-30 max-w-fit text-transparent rounded-full">0000 &#x2022 Movie
              </div>
              <div class="text-xl relative z-10 bg-gray-700 opacity-30 max-w-fit text-transparent rounded-full mt-2">xXxXx
                XxXxX xXxX</div>
            </div>
          </Flicking>

          <Flicking v-if="discoverMovies.length === 9" class="w-full h-[14rem]"
            :options="{ align: 'center', circular: true, easing: x => 1 - Math.pow(1 - x, 2.1), deceleration: 0.035 }"
            @move-end="onMoveEnd">

            <div v-for="(movie, index) in discoverMovies" :key="index" class="slide-trending">
              <img :src="movie.image"
                class="absolute top-0 h-full right-0 w-full select-none pointer-events-none opacity-60 object-cover">
              <div class="relative z-10">
                {{ movie.releaseYear }} &#x2022 Movie
              </div>
              <div class="text-xl relative z-10 truncate">
                {{ movie.title }}
              </div>
            </div>
          </Flicking>
        </div>
      </div> -->

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const authOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTFiY2MyZjkyZTQ3ZDM5NmE4ODBkZTg2N2FkNzdjMiIsInN1YiI6IjY1NmEwYzQxNjYxMWI0MDEwMDNkYWE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1vMeXlSKGAClK19ROM0E4OjMeTmmBKfZZ_mSq4ovi90'
  }
};

// Movies
const discoverMovies = ref([])
async function getDiscoverMovies() {
  const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', authOptions)
  const resObj = await response.json()

  for (let i = 0; i < resObj.results.length; i++) {
    const movie = resObj.results[i];

    const imageResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/images`, authOptions)
    const imgResOBJ = await imageResponse.json()

    if (imgResOBJ.backdrops && imgResOBJ.backdrops[0] && discoverMovies.value.length < 9) {
      const filePath = `${imgResOBJ.backdrops[0].file_path}`

      discoverMovies.value.push({
        title: movie.title,
        releaseYear: movie.release_date.slice(0, 4),
        image: "https://image.tmdb.org/t/p/original" + filePath
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

    if (imgResOBJ.backdrops && imgResOBJ.backdrops[0] && popularMovies.value.length < 6) {
      const filePath = `${imgResOBJ.backdrops[0].file_path}`

      popularMovies.value.push({
        title: movie.title,
        releaseYear: movie.release_date.slice(0, 4),
        image: "https://image.tmdb.org/t/p/original" + filePath
      })
    }
  }
}
function popularIndex(index) {
  return `tile${index + 1}`
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

    if (imgResOBJ.backdrops && imgResOBJ.backdrops[0] && topRatedMovies.value.length < 3) {
      const filePath = `${imgResOBJ.backdrops[0].file_path}`

      topRatedMovies.value.push({
        title: movie.title,
        releaseYear: movie.release_date.slice(0, 4),
        image: "https://image.tmdb.org/t/p/original" + filePath
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

    if (series.backdrop_path && discoverSeries.value.length < 9) {
      discoverSeries.value.push({
        title: series.name,
        releaseYear: series.first_air_date.slice(0, 4),
        image: "https://image.tmdb.org/t/p/original" + series.backdrop_path
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

    if (series.backdrop_path && popularSeries.value.length < 6) {
      popularSeries.value.push({
        title: series.name,
        releaseYear: series.first_air_date.slice(0, 4),
        image: "https://image.tmdb.org/t/p/original" + series.backdrop_path
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

    if (series.backdrop_path && topRatedSeries.value.length < 3) {
      topRatedSeries.value.push({
        title: series.name,
        releaseYear: series.first_air_date.slice(0, 4),
        image: "https://image.tmdb.org/t/p/original" + series.backdrop_path
      })
    }
  }
}
getTopRatedSeries()

</script>

<style></style>