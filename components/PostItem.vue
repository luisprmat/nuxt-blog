<script setup>
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const props = defineProps({
  post: Object,
})
</script>

<template>
  <div class="post-container py-8">
    <h3 class="text-3xl font-bold">
      <NuxtLink :to="`/posts/${props.post.id}`">{{
        props.post.title
      }}</NuxtLink>
    </h3>
    <div class="post-meta flex items-center space-x-2 text-gray-700">
      <div class="capitalize">
        {{
          format(new Date(props.post.created_at), 'MMMM dd, yyyy', {
            locale: es,
          })
        }}
      </div>
      <div>&middot;</div>
      <div>{{ props.post.user.name }}</div>
    </div>
    <div class="post-preview mt-4 line-clamp-3 leading-relaxed">
      {{ props.post.body }}
    </div>
    <div class="mt-4">
      <NuxtLink
        :to="`/posts/${props.post.id}`"
        class="inline-block rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
        >Leer más ...</NuxtLink
      >
    </div>
  </div>
</template>
