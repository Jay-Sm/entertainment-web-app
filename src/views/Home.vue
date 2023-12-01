<template>
  <div class="w-full h-full flex flex-col mt-7 gap-y-12">
    <div>
      <div>
        <div class="flex flex-row justify-between max-w-full w-full">
          <h2 class="text-3xl flex flex-row items-end gap-x-4">
            Trending
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
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
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

        <div class="mt-5 flex gap-x-4">
          <div class="w-1/2 flex flex-col gap-y-4">
            <div class="flex gap-x-4">
              <div class="tile-popular">
                <div class="">2023 &#x2022 Movie</div>
                <div class="text-xl ">Movie Title Here</div>
              </div>
              <div class="tile-popular">
                <div class="">2023 &#x2022 Movie</div>
                <div class="text-xl ">Movie Title Here</div>
              </div>

            </div>
            <div>
              <div class="tile-popular w-full">
                <div class="">2023 &#x2022 Movie</div>
                <div class="text-xl ">Movie Title Here</div>
              </div>
            </div>
          </div>
          <div class="w-1/2 flex flex-col gap-y-4">
            <div>
              <div class="tile-popular w-full">
                <div class="">2023 &#x2022 Movie</div>
                <div class="text-xl ">Movie Title Here</div>
              </div>
            </div>
            <div class="flex gap-x-4">
              <div class="tile-popular">
                <div class="">2023 &#x2022 Movie</div>
                <div class="text-xl ">Movie Title Here</div>
              </div>
              <div class="tile-popular">
                <div class="">2023 &#x2022 Movie</div>
                <div class="text-xl ">Movie Title Here</div>
              </div>

            </div>
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
          <div class="mt-5 w-full flex flex-col gap-y-4">
            <div class="flex gap-x-4">
              <div class="tile-popular">
                <div class="">2023 &#x2022 Movie</div>
                <div class="text-xl ">Movie Title Here</div>
              </div>
              <div class="tile-popular">
                <div class="">2023 &#x2022 Movie</div>
                <div class="text-xl ">Movie Title Here</div>
              </div>
              <div class="tile-popular">
                <div class="">2023 &#x2022 Movie</div>
                <div class="text-xl ">Movie Title Here</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

    <div>
      <div>
        <div class="flex flex-row justify-between max-w-full w-full">
          <h2 class="text-3xl flex flex-row items-end gap-x-4">
            Trending
            <div class="label-tv">TV SERIES</div>
          </h2>

          <router-link to="/movie" class="text-theme-light-blue2 font-medium text-[0.8rem] hover:underline">
            SEE MORE
          </router-link>
        </div>

        <div class="mt-5">
          <Flicking class="w-full h-[14rem]"
            :options="{ align: 'center', circular: true, easing: x => 1 - Math.pow(1 - x, 2.1), deceleration: 0.035 }"
            @move-end="onMoveEnd">
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
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

        <div class="mt-5 flex gap-x-4">
          <div class="w-1/2 flex flex-col gap-y-4">
            <div class="flex gap-x-4">
              <div class="tile-popular">
                <div class="">2023 &#x2022 Movie</div>
                <div class="text-xl ">Movie Title Here</div>
              </div>
              <div class="tile-popular">
                <div class="">2023 &#x2022 Movie</div>
                <div class="text-xl ">Movie Title Here</div>
              </div>

            </div>
            <div>
              <div class="tile-popular w-full">
                <div class="">2023 &#x2022 Movie</div>
                <div class="text-xl ">Movie Title Here</div>
              </div>
            </div>
          </div>
          <div class="w-1/2 flex flex-col gap-y-4">
            <div>
              <div class="tile-popular w-full">
                <div class="">2023 &#x2022 Movie</div>
                <div class="text-xl ">Movie Title Here</div>
              </div>
            </div>
            <div class="flex gap-x-4">
              <div class="tile-popular">
                <div class="">2023 &#x2022 Movie</div>
                <div class="text-xl ">Movie Title Here</div>
              </div>
              <div class="tile-popular">
                <div class="">2023 &#x2022 Movie</div>
                <div class="text-xl ">Movie Title Here</div>
              </div>

            </div>
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
          <div class="mt-5 w-full flex flex-col gap-y-4">
            <div class="flex gap-x-4">
              <div class="tile-popular">
                <div class="">2023 &#x2022 Movie</div>
                <div class="text-xl ">Movie Title Here</div>
              </div>
              <div class="tile-popular">
                <div class="">2023 &#x2022 Movie</div>
                <div class="text-xl ">Movie Title Here</div>
              </div>
              <div class="tile-popular">
                <div class="">2023 &#x2022 Movie</div>
                <div class="text-xl ">Movie Title Here</div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div class="mt-12">
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
          <Flicking class="w-full h-[14rem]"
            :options="{ align: 'center', circular: true, easing: x => 1 - Math.pow(1 - x, 2.1), deceleration: 0.035 }"
            @move-end="onMoveEnd">
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
            <div class="slide-trending">
              <div class="">2023 &#x2022 Movie</div>
              <div class="text-xl ">Movie Title Here</div>
            </div>
          </Flicking>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style></style>