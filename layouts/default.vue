<script setup>
const title = useState('title', () => 'Nuxt 3 blog')
const { $apiFetch } = useNuxtApp()

const logout = async () => {
  try {
    await $apiFetch('/logout', {
      method: 'POST',
    })
  } catch (err) {
    console.log(err.data)
  } finally {
    window.location.pathname = '/'
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 text-gray-900">
    <Title>{{ title }}</Title>
    <nav class="bg-white p-6 text-lg shadow">
      <div class="container mx-auto flex items-center justify-between px-6">
        <div>
          <NuxtLink to="/">Logo</NuxtLink>
        </div>
        <div>
          <ul class="flex space-x-12">
            <li><NuxtLink to="/">Inicio</NuxtLink></li>
            <li><NuxtLink to="/login">Login</NuxtLink></li>
            <li><NuxtLink to="/register">Registro</NuxtLink></li>
            <li><NuxtLink to="/my-info">Mi Perfil</NuxtLink></li>
            <li><NuxtLink to="/create">Crear</NuxtLink></li>
            <li><NuxtLink to="/about">Nosotros</NuxtLink></li>
            <li><NuxtLink to="/contact">Contacto</NuxtLink></li>
            <li><NuxtLink href="#" @click.prevent="logout">Salir</NuxtLink></li>
          </ul>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>

<style>
.router-link-active {
  @apply font-bold;
}
</style>
