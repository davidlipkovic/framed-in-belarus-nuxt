import { useUserStore } from "@/stores/user"
const userStore = useUserStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (userStore.token && !userStore.currentUserReactive) {
    userStore.loading = true
    await userStore.getUserData()
    if (!userStore.currentUserReactive) {
      userStore.loading = false
      userStore.isLogged = false
      return navigateTo('/')
    }
    userStore.loading = false
    userStore.isLogged = true
  } else if (userStore.currentUserReactive) {
    userStore.loading = false
    userStore.isLogged = true
  } else {
    userStore.loading = false
    userStore.isLogged = false
    return navigateTo('/')
  }
})
