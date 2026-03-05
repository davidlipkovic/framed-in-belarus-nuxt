import useUserStore from "@/stores/user"
const userStore = useUserStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (userStore.userDataBeforeDelete) {
    userStore.signOut()
  }

  if (userStore.user) {
    return
  }

  userStore.getUserAuthorizationData()

  if (userStore.userAuthorizationData && userStore.userAuthorizationData.token && userStore.userAuthorizationData.remember) {
    if (!userStore.user) {
      userStore.loading = true
      await userStore.getUserData()
      
      if (!userStore.user) {
        userStore.loading = false
        userStore.isLogged = false
      }
    }

    userStore.loading = false
    userStore.isLogged = true
  } else {
    userStore.loading = false
    userStore.isLogged = false
  }
})
