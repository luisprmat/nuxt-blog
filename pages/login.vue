<script setup>
const title = useState('title')
const email = ref('')
const password = ref('')
const isLoading = ref(false)
const errors = ref([])

const { $apiFetch } = useNuxtApp()

const csrf = () => $apiFetch('/sanctum/csrf-cookie')

const login = async () => {
  await csrf()
  isLoading.value = true

  try {
    await $apiFetch('/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
      },
    })
    // router.push('/my-info')
    window.location.pathname = '/my-info'
  } catch (err) {
    console.log(err.data)
    errors.value = Object.values(err.data.errors).flat()
  }
  isLoading.value = false
}
</script>

<template>
  <div class="container mx-auto w-1/3 py-8">
    <Title>Iniciar sesión | {{ title }}</Title>
    <ul
      v-if="errors.length > 0"
      className="mb-4 list-disc list-inside text-sm text-red-600"
    >
      <li v-for="(error, index) in errors" :key="index">
        {{ error }}
      </li>
    </ul>
    <form action="#" class="space-y-6" @submit.prevent="login">
      <div>
        <label for="email" class="block font-semibold"
          >Correo electrónico</label
        >
        <input
          type="text"
          v-model="email"
          id="email"
          class="mt-2 w-full rounded px-2 py-2 shadow"
        />
      </div>
      <div>
        <label for="password" class="block font-semibold">Contraseña</label>
        <input
          type="password"
          v-model="password"
          id="password"
          class="mt-2 w-full rounded px-2 py-2 shadow"
        />
      </div>

      <div>
        <button
          class="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Iniciar sesión
        </button>
        <span v-if="isLoading" class="ml-2">Cargando...</span>
      </div>
    </form>
  </div>
</template>
