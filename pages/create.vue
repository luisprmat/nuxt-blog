<script setup>
definePageMeta({
  middleware: ['auth'],
})

const title = ref('')
const body = ref('')
const isLoading = ref(false)
const errors = ref([])
const router = useRouter()

const createPost = async () => {
  isLoading.value = true

  try {
    const post = await useNuxtApp().$apiFetch('/api/posts', {
      method: 'POST',
      body: {
        title: title.value,
        body: body.value,
      },
    })

    isLoading.value = false

    title.value = ''
    body.value = ''

    router.push('/')
  } catch (err) {
    console.log(err.data)
    errors.value = Object.values(err.data.errors).flat()
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
    <form action="#" class="space-y-6" @submit.prevent="createPost">
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
      <div>
        <button
          class="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Crear post
        </button>
        <span v-show="isLoading" class="ml-2">Cargando ...</span>
      </div>
    </form>
  </div>
</template>
