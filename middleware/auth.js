export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth()

  if (import.meta.client) {
    if (!isLoggedIn.value) {
      // return navigateTo('/login')
      window.location.pathname = '/login'
    }
  }
})
