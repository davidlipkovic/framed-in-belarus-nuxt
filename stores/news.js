import { ref } from "vue"
import { defineStore } from "pinia"

export default defineStore("news", () => {
  const loading = ref(false)
  const articles = ref(null)

  const endpointUrl = 'https://d2wpukog48e17c.cloudfront.net'

  const getArticles = async () => {
    const { data, error } = await useFetch(
      endpointUrl + '/api/news', 
      {
        method: 'get',
      }
    )

    if (error.value) {
      throw createError({ 
        statusCode: error.value.statusCode,
        statusMessage: error.value.statusMessage,
      })
    }

    console.log('getArticles', data.value.result)
    
    articles.value = data.value.result
  }

  return {
    articles,
    loading,
    getArticles,
  }
})
