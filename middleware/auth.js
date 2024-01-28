import { useUserStore } from "@/stores/user"
const userStore = useUserStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (userStore.token && !userStore.currentUserReactive) {
    userStore.loading = true
    await userStore.getUserData()
    userStore.loading = false
    userStore.isLogged = true

    console.log('userStore', userStore.currentUserReactive)
  } else if (userStore.currentUserReactive) {
    userStore.loading = false
    userStore.isLogged = true
  } else {
    userStore.loading = false
    userStore.isLogged = false
  }
})
