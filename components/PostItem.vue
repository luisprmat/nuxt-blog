<template>
  <div class="post-container py-8">
    <h3 class="text-3xl font-bold">
      <NuxtLink :to="`/posts/1`">Título del post</NuxtLink>
    </h3>
    <div class="post-meta flex items-center space-x-2 text-gray-700">
      <div>Ago 8, 2024</div>
      <div>&middot;</div>
      <div>Luis Parrado</div>
    </div>
    <div class="post-preview mt-4 leading-relaxed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
      possimus dolorum, ut aperiam dolores fuga quaerat aspernatur iusto
      consequuntur maxime adipisci iste accusamus esse ex libero cum corporis
      iure, id quis recusandae! Quod, facilis error! Cumque ad autem sit
      blanditiis.
    </div>
    <div class="mt-4">
      <NuxtLink
        :to="`/posts/1`"
        class="inline-block rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
        >Leer más ...</NuxtLink
      >
    </div>
  </div>
</template>
