<script setup>
const title = useState('title')
const user = ref(null)
const posts = ref([])

const { $apiFetch } = useNuxtApp()

onMounted(async () => {
  user.value = await $apiFetch('/api/user')

  posts.value = await $apiFetch('/api/user/posts')
})
</script>

<template>
  <div class="container mx-auto w-1/2 py-8">
    <Title>Mi información | {{ title }}</Title>
    <div>
      <div><span class="font-bold">Nombre:</span> {{ user?.name }}</div>
      <div>
        <span class="font-bold">Correo electrónico:</span> {{ user?.email }}
      </div>
    </div>

    <div class="mt-4">
      <h3 class="text-2xl">Mis posts</h3>
      <ul v-if="posts">
        <li v-for="post in posts" :key="post.id">
          <NuxtLink
            :to="`/posts/${post.id}`"
            class="text-blue-600 hover:underline"
            >{{ post.title }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>
