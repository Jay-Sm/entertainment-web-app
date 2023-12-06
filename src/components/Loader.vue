<template>
  <div
    class="select-none absolute top-0 bottom-0 right-0 left-0 bg-gray-700 opacity-10 border-2 animate-pulse rounded-lg">
  </div>
  <div class="skel-info"> </div>
  <div class="skel-title"> </div>
</template>

<script setup>

</script>

<style scoped>
.skel-title {
  @apply h-[1.75rem] w-[10.625rem] mt-2 select-none text-xl relative z-10 bg-gray-700 opacity-30 rounded-full
}

.skel-info {
  @apply h-[1.75rem] w-[5.75rem] select-none relative z-10 bg-gray-700 opacity-30 rounded-full
}
</style>