export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth()

  if (import.meta.client) {
    if (isLoggedIn.value) {
      // return navigateTo('/my-info')
      window.location.pathname = '/my-info'
    }
  }
})
