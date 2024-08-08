<script setup>
const posts = await useNuxtApp().$apiFetch('/api/posts')
</script>

<template>
  <div class="container mx-auto w-1/2 space-y-8 divide-y divide-gray-300 py-8">
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
