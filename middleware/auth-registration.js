import useUserStore from "@/stores/user"
const userStore = useUserStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (userStore.user) {
    return
  }

  userStore.getUserAuthorizationData()

  if (userStore.userAuthorizationData && userStore.userAuthorizationData.token && (userStore.userAuthorizationData.remember || from.fullPath.includes('VerifyEmail') || to.fullPath.includes('Corrections'))) {
    if (!userStore.user) {
      userStore.loading = true
      await userStore.getUserData()

      if (!userStore.user) {
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
