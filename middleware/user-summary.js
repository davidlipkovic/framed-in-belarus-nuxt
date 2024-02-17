import { useUserStore } from "@/stores/user"
const userStore = useUserStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  userStore.loading = true
  await userStore.getUserSummary()
  userStore.loading = false
})
