export function useAuth() {
  const setUser = name => {
    localStorage.setItem('user', JSON.stringify({ name }))
  }
  const getUser = () => JSON.parse(localStorage.getItem('user'))
  const removeUser = () => {
    localStorage.removeItem('user')
  }

  const isLoggedIn = computed(() => {
    if (import.meta.client) {
      return !!localStorage.getItem('user')
    }
  })

  return { setUser, getUser, removeUser, isLoggedIn }
}
