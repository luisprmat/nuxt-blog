<template>
  <div class="container mx-auto w-1/2 space-y-8 divide-y divide-gray-300 py-8">
    <PostItem v-for="n in 10" :key="n" />
  </div>
</template>
