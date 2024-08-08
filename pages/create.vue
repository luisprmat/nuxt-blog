<script setup>
const title = ref('')
const body = ref('')
const isLoading = ref(false)

const errors = ref([])
const createPost = () => {
  console.log('Creando post!')
}
</script>

<template>
  <div class="container mx-auto w-1/2 py-8">
    <div class="errors mb-4 text-red-600">Aquí van los errores</div>
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
      </div>
    </form>
  </div>
</template>
