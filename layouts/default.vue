<script setup>
const title = useState('title', () => 'Nuxt 3 blog')
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
            <li><NuxtLink to="/about">Nosotros</NuxtLink></li>
            <li><NuxtLink to="/contact">Contacto</NuxtLink></li>
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
