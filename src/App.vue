<template>
  <div class="overflow-x-hidden h-full flex flex-row tablet:flex-col mobile:flex-col">
    <div
      class="h-full tablet:w-full tablet:h-fit mobile:w-full mobile:h-fit pt-6 pl-6 tablet:px-6 mobile:px-0 mobile:pt-0">
      <div class="h-full tablet:w-full tablet:h-fit mobile:w-full mobile:h-fit pb-24 tablet:pb-0 mobile:pb-0">
        <nav class="nav-bar">
          <router-link to="/">
            <img class="w-[2rem] min-w-[2rem]" src="./assets/images/logo.svg">
          </router-link>

          <ul
            class="max-w-full flex flex-col tablet:flex-row mobile:flex-row items-center gap-y-[3rem] tablet:gap-x-[4rem] mobile:w-full mobile:justify-between mobile:px-[2rem]">
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

          <router-link class="flex flex-col items-center gap-y-1" to="/login">
            <div class="w-8 h-8 bg-white rounded-full breakpointtest hover:w-9 hover:h-9 transition-all"></div>
            <p class="text-sm">Login</p>
          </router-link>
        </nav>
      </div>
    </div>
    <div class="w-full mt-6">
      <div class="mt-9 tablet:mt-0 mobile:mt-0 pl-[4rem] tablet:pl-6 tablet:pr-12 mobile:pl-6 mobile:pr-12">
        <div class="flex flex-row">
          <button>
            <svg class="w-[2rem] h-[2rem]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff"
              viewBox="0 0 16 16">
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
          <input
            class=" w-full bg-transparent ml-5 pb-2 font-light text-2xl placeholder:font-light placeholder:text-2xl placeholder:opacity-70 outline-none focus:border-b focus:border-b-theme-light-blue2"
            type="text" placeholder="Search for movies or TV series">
        </div>
      </div>
      <div class="pl-[4rem] pr-[5.2rem]">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style></style>