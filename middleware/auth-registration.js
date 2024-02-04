import { useUserStore } from "@/stores/user"
const userStore = useUserStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (userStore.currentUser) {
    return
  }

  userStore.getCurrentUserAuthorizationData()

  if (userStore.currentUserAuthorizationData && userStore.currentUserAuthorizationData.token && (userStore.currentUserAuthorizationData.remember || from.fullPath.includes('VerifyEmail'))) {
    if (!userStore.currentUser) {
      userStore.loading = true
      await userStore.getUserData()

      if (!userStore.currentUser) {
        userStore.loading = false
        userStore.isLogged = false
        return navigateTo('/')
      }
    }

    userStore.loading = false
    userStore.isLogged = true
  } else {
    userStore.loading = false
    userStore.isLogged = false
    return navigateTo('/')
  }
})
