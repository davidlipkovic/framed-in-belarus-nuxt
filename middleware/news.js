import useNewsStore from "@/stores/news"
const newsStore = useNewsStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!newsStore.articles) {
    newsStore.loading = true
    await newsStore.getArticles()
    newsStore.loading = false
  } else {
    newsStore.loading = false
  }
})
