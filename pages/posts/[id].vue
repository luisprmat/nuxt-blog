<script setup>
const title = useState('title')
</script>

<template>
  <div class="container mx-auto w-1/2 py-8">
    <Title>{{ $route.params.id }} | {{ title }}</Title>
    <h3 class="text-3xl font-bold">
      <NuxtLink :to="`/posts/1`">Título del post</NuxtLink>
    </h3>
    <div class="post-meta flex items-center space-x-2 text-gray-700">
      <div>Ago 8, 2024</div>
      <div>&middot;</div>
      <div>Luis Parrado</div>
    </div>
    <div class="post-content mt-4">
      {{ $route.params.id }}: Lorem, ipsum dolor sit amet consectetur
      adipisicing elit. Eum laboriosam qui non! Libero, ipsam quos! Nam omnis,
      impedit perspiciatis neque laboriosam ea eligendi dolorum maxime itaque
      ducimus tempora totam tenetur?
    </div>
  </div>
</template>
