import { ref } from "vue"
import { defineStore } from "pinia"
import { useI18n } from 'vue-i18n'

export default defineStore("news", () => {
  const loading = ref(false)
  const articles = ref(null)

  const articlesPublication = computed(() => {
    const { t } = useI18n()

    const acc = articles.value.sort((a, b) => a.publicationDate - b.publicationDate)
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

  const endpointUrl = 'https://d2wpukog48e17c.cloudfront.net'

  const getArticles = async () => {
    const data = await $fetch(
      endpointUrl + '/api/news', 
      {
        method: 'get',
      }
    )

    console.log('getArticles', data.result)

    articles.value = data.result.sort((a, b) => b.startDate.localeCompare(a.startDate))
  }

  return {
    articles,
    articlesPublication,
    loading,
    getArticles,
  }
})
