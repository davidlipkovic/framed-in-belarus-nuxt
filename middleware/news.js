import { useNewsStore } from "@/stores/news"
const newsStore = useNewsStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!newsStore.news.value) {
    newsStore.loading = true
    await newsStore.getNewsList()
    newsStore.loading = false
  } else {
    newsStore.loading = false
  }
})
