<script setup>
definePageMeta({
  middleware: ['auth'],
})

const title = ref('')
const body = ref('')
const isLoading = ref(false)
const errors = ref([])
const router = useRouter()
const route = useRoute()
const { $apiFetch } = useNuxtApp()
const post = ref(null)

onMounted(async () => {
  try {
    post.value = await $apiFetch(`/api/postsAuth/${route.params.id}`)
    title.value = post.value.title
    body.value = post.value.body
  } catch (error) {
    window.location.pathname = '/'
  }
})

const updatePost = async () => {
  isLoading.value = true

  try {
    const post = await $apiFetch(`/api/posts/${route.params.id}`, {
      method: 'PATCH',
      body: {
        title: title.value,
        body: body.value,
      },
    })

    isLoading.value = false

    title.value = ''
    body.value = ''

    alert('Post actualizado.')

    router.push('/my-info')
  } catch (err) {
    if (err.response.status === 403) {
      alert(err.data.message)
      isLoading.value = false

      return
    }
    console.log(err.data)
    errors.value = Object.values(err.data.errors).flat()
    isLoading.value = false
  }
}

const deletePost = async () => {
  isLoading.value = true

  try {
    const post = await $apiFetch(`/api/posts/${route.params.id}`, {
      method: 'DELETE',
    })

    isLoading.value = false

    title.value = ''
    body.value = ''

    alert('Post eliminado.')

    router.push('/my-info')
  } catch (err) {
    console.log(err.data)
    isLoading.value = false
  }
}
</script>

<template>
  <div class="container mx-auto w-1/2 py-8">
    <ul
      v-if="errors.length > 0"
      class="mb-4 list-inside list-disc text-sm text-red-600"
    >
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
    <h2 class="text-2xl">Editar post</h2>
    <form action="#" class="space-y-6" @submit.prevent="updatePost">
      <div>
        <label for="title" class="block font-semibold">Título</label>
        <input
          type="text"
          v-model="title"
          id="title"
          class="mt-2 w-full rounded px-2 py-2 shadow"
        />
      </div>
      <div>
        <label for="body" class="block font-semibold">Contenido</label>
        <textarea
          v-model="body"
          id="body"
          cols="30"
          rows="10"
          class="mt-2 w-full rounded px-2 py-2 shadow"
        ></textarea>
      </div>
      <div class="flex items-center justify-between">
        <div>
          <button
            class="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Actualizar post
          </button>
          <span v-show="isLoading" class="ml-2">Cargando ...</span>
        </div>
        <div>
          <button
            type="button"
            class="inline-block rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            @click="deletePost"
          >
            Eliminar post
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
