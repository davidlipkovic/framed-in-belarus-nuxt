import useUserStore from "@/stores/user"
const userStore = useUserStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.server || userStore.user) {
    return
  }

  const localePath = useLocalePath()

  userStore.loading = true

  const userLocalData = userStore.checkUserLocalData()

  if (userLocalData && userLocalData.token) {
    await userStore.getUserData()

    if (!userStore.user) {
      userStore.loading = false
      return navigateTo(localePath('/'))
    }
  } else {
    userStore.loading = false
    return navigateTo(localePath('/'))
  }

  userStore.loading = false
})
