import useUserStore from "@/stores/user"
const userStore = useUserStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (userStore.user) {
    return
  }

  userStore.loading = true

  const userLocalData = userStore.checkUserLocalData()

  if (userLocalData && userLocalData.token) {
    await userStore.getUserData()

    if (!userStore.user) {
      userStore.loading = false
      return navigateTo('/')
    }
  } else {
    userStore.loading = false
    return navigateTo('/')
  }

  userStore.loading = false
})
