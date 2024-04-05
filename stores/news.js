import { reactive, ref } from "vue"
import { defineStore } from "pinia"

export const useNewsStore = defineStore("news", () => {
  const loading = ref(false)
  const news = reactive([])

  const endpointUrl = 'https://d2wpukog48e17c.cloudfront.net'
  const getNewsList = async () => {
    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/news', {
        method: 'get',
      })
      news.value = responseData.value.result
      console.log('getNewsList', responseData.value.result)

      return responseData.value && responseData.value.statusText === 'success'
    } catch (error) {
      console.error('Error getting prisoners list data:', error)
    }
  }

  return {
    news,
    loading,
    getNewsList,
  }
})
