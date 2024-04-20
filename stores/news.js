import { reactive, ref } from "vue"
import { defineStore } from "pinia"

export const useNewsStore = defineStore("news", () => {
  const loading = ref(false)
  const articles = reactive([])

  const endpointUrl = 'https://d2wpukog48e17c.cloudfront.net'
  const getArticles = async () => {
    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/news', {
        method: 'get',
      })
      articles.value = responseData.value.result
      console.log('getArticles', responseData.value.result)

      return responseData.value && responseData.value.statusText === 'success'
    } catch (error) {
      console.error('Error getting prisoners list data:', error)
    }
  }

  return {
    articles,
    loading,
    getArticles,
  }
})
