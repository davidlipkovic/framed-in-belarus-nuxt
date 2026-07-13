import { ref } from "vue"
import { defineStore } from "pinia"
import { useI18n } from 'vue-i18n'
import { useApi } from "@/composables/Api"

export default defineStore("news", () => {
  const { apiFetch } = useApi()

  const loading = ref(false)
  const articles = ref(null)
  const currentArticle = ref(null)

  const articlesByDate = computed(() => {
    if (!articles.value) {
      return
    }

    const { t } = useI18n()

    let acc = articles.value.sort((a, b) => b.startDate.localeCompare(a.startDate))
    acc = articles.value.sort((a, b) => a.publicationDate - b.publicationDate)
    const currentArticlesAcc = []
    const passedArticlesAcc = []

    acc.forEach(article => {
      const currentDate = new Date()
      const startDate = new Date(article.startDate)
      const endDate = new Date(article.endDate)

      if (currentDate < startDate) {
        article.status = t('newsPage.statuses.upcoming')
        currentArticlesAcc.push(article)
      } else if (currentDate > endDate) {
        article.status = t('newsPage.statuses.passed')
        passedArticlesAcc.push(article)
      } else {
        article.status = t('newsPage.statuses.ongoing')
        currentArticlesAcc.push(article)
      }
    })

    return [
      ...currentArticlesAcc,
      ...passedArticlesAcc,
    ]
  })

  const getArticles = async () => {
    // try {
      const response = await apiFetch('/api/nes', {
        method: 'GET',
      })

      console.log('getArticles', response)

      articles.value = response.result
      return response.result
    // } catch (err) {
    //   articles.value = null
    //   throw createError({
    //     statusCode: err.status ?? 500,
    //     message: err.data?.message ?? err.message ?? 'API request failed',
    //     data: err.data,
    //     fatal: false,
    //   })
    // }
  }

  const setCurentArticle = (id) => {
    const article = articles.value.find(article => article.id === id)
    currentArticle.value = article
  }

  return {
    articles,
    articlesByDate,
    currentArticle,
    loading,
    getArticles,
    setCurentArticle,
  }
})
