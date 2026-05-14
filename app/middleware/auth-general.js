import useUserStore from "@/stores/user"
const userStore = useUserStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.server || userStore.user) {
    return
  }

  userStore.loading = true

  const userLocalData = userStore.checkUserLocalData()

  if (userLocalData && userLocalData.token) {
    await userStore.getUserData()
  }

  userStore.loading = false
})
