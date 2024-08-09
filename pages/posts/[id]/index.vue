<script setup>
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const title = useState('title')
const route = useRoute()

const post = await useNuxtApp().$apiFetch(`/api/posts/${route.params.id}`)
</script>

<template>
  <div class="container mx-auto w-1/2 py-8">
    <Title>{{ post.title }} | {{ title }}</Title>
    <h3 class="text-3xl font-bold">
      {{ post.title }}
    </h3>
    <div class="post-meta flex items-center space-x-2 text-gray-700">
      <div class="capitalize">
        {{
          format(new Date(post.created_at), 'MMMM dd, yyyy', {
            locale: es,
          })
        }}
      </div>
      <div>&middot;</div>
      <div>{{ post.user.name }}</div>
    </div>
    <div class="post-content mt-4">
      {{ post.body }}
    </div>
  </div>
</template>
