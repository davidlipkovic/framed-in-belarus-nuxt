import { useUserStore } from "@/stores/user"
const userStore = useUserStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (userStore.token && !userStore.currentUserReactive) {
    userStore.loading = true
    await userStore.getUserData()
    userStore.loading = false

    if (userStore.currentUserReactive) {
      userStore.isLogged = true
    } else {
      userStore.isLogged = false
    }
  } else if (userStore.currentUserReactive) {
    userStore.loading = false
    userStore.isLogged = true
  } else {
    userStore.loading = false
    userStore.isLogged = false
  }
})
