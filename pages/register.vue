<script setup>
const title = useState('title')
const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const isLoading = ref(false)
const errors = ref([])

const { $apiFetch } = useNuxtApp()

const csrf = () => $apiFetch('/sanctum/csrf-cookie')

const register = async () => {
  await csrf()
  isLoading.value = true
  try {
    await $apiFetch('/register', {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: passwordConfirm.value,
      },
    })
    alert('Usuario registrado con éxito')
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
    <Title>Registro | {{ title }}</Title>
    <ul
      v-if="errors.length > 0"
      className="mb-4 list-disc list-inside text-sm text-red-600"
    >
      <li v-for="(error, index) in errors" :key="index">
        {{ error }}
      </li>
    </ul>
    <form action="#" class="space-y-6" @submit.prevent="register">
      <div>
        <label for="name" class="block font-semibold">Nombre</label>
        <input
          type="text"
          v-model="name"
          id="name"
          class="mt-2 w-full rounded px-2 py-2 shadow"
        />
      </div>
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
        <label for="passwordConfirm" class="block font-semibold"
          >Confirmar contraseña</label
        >
        <input
          type="password"
          v-model="passwordConfirm"
          id="passwordConfirm"
          class="mt-2 w-full rounded px-2 py-2 shadow"
        />
      </div>

      <div>
        <button
          class="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Registrarse
        </button>
        <span v-if="isLoading" class="ml-2">Cargando...</span>
      </div>
    </form>
  </div>
</template>
