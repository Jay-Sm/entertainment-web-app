<template>
  <div class="h-full flex flex-row mt-7 mb-[3rem] pl-[4rem] pr-[3.5rem] tablet:px-6 mobile:px-3">
    <div class="genre-grid">
      <button v-for="(genre, index) in genres" :key="index"
        @click="currentGenreID = genre.id; searchMovies(); genreMovies = []" class="genre-option"
        :class="{ 'genre-selected': currentGenreID === genre.id }">
        {{ genre.name }}
      </button>
    </div>

    <div v-if="currentGenreID" class="grid grid-cols-3 gap-4 w-full">
      <div v-for="(movie, index) in genreMovies" :key="index">
        <div v-if="genreMovies.length !== 15" class="movie-container">
          <div class="movie-tile">
            <div class="absolute top-0 bottom-0 right-0 left-0 bg-gray-700 opacity-10 border-2 animate-pulse rounded-lg">
            </div>
            <div class="relative z-10 bg-gray-700 opacity-30 max-w-fit text-transparent rounded-full">0000 &#x2022
              Movie
            </div>
            <div class="text-xl relative z-10 bg-gray-700 opacity-30 max-w-fit text-transparent rounded-full mt-2">
              xXxXx
              XxXxX xXxX</div>
          </div>
        </div>

        <div v-else class="movie-container">
          <div class="movie-tile">
            <img :src="movie.image"
              class="absolute top-0 h-full right-0 w-full select-none pointer-events-none opacity-60 object-cover">
            <div class="relative z-10">{{ movie.releaseYear }} &#x2022 Movie</div>
            <div class="text-xl relative z-10 truncate">{{ movie.title }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="w-full flex justify-center pt-[5rem] text-theme-light-blue2 select-none">
      Please Select A Genre
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

// ----------------------------------------------------------------------------------------

const currentGenreID = ref(''.toLowerCase())
const currentPage = ref(1)

const genreMovies = ref([])

async function searchMovies() {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=popularity.desc&with_genres=${currentGenreID.value}`, authOptions)
  const resObj = await response.json()

  for (let i = 0; i < resObj.results.length; i++) {
    const movie = resObj.results[i];

    const imageResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/images`, authOptions)
    const imgResOBJ = await imageResponse.json()

    if (imgResOBJ.backdrops && imgResOBJ.backdrops[0] && genreMovies.value.length < 15) {
      const filePath = `${imgResOBJ.backdrops[0].file_path}`

      genreMovies.value.push({
        title: movie.title,
        releaseYear: movie.release_date.slice(0, 4),
        image: "https://image.tmdb.org/t/p/original" + filePath
      })
    }
  }
}


</script>

<style></style>