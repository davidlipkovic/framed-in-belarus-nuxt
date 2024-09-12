import { ref } from "vue"
import { defineStore } from "pinia"
import tagsJSON from '../assets/json/tags.json'

export default defineStore("gallery", () => {
  const loading = ref(false)
  const originalEmbroideries = ref(null)
  const embroideriesAlphabetically = computed(() => originalEmbroideries.value.sort((a, b) => a.name.localeCompare(b.name)))
  const embroideriesAlphabeticallyReversed = computed(() => embroideriesAlphabetically.value.reverse())
  const embroideriesChronologically = computed(() => originalEmbroideries.value.sort((a, b) => a.publicationDate - b.publicationDate))
  const embroideriesChronologicallyReversed = computed(() => embroideriesChronologically.value.reverse())
  const currentEmbroidery = ref(null)
  const tags = ref(null)

  const endpointUrl = 'https://d2wpukog48e17c.cloudfront.net'

  const getEmbroideries = async () => {
    const { data, error } = await useFetch(
      endpointUrl + '/api/prisoners/gallery', 
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

    console.log('getEmbroideries', data.value.result)
    
    originalEmbroideries.value = data.value.result
  }

  const getEmbroidery = async (id) => {
    const { data, error } = await useFetch(
      endpointUrl + '/api/prisoners/gallery/' + id, 
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

    console.log('getEmbroidery', data.value.result)
    
    currentEmbroidery.value = data.value.result
  }

  tags.value = tagsJSON

  return {
    originalEmbroideries,
    embroideriesAlphabetically,
    embroideriesAlphabeticallyReversed,
    embroideriesChronologically,
    embroideriesChronologicallyReversed,
    loading,
    getEmbroideries,
    getEmbroidery,
    currentEmbroidery,
    tags,
  }
})
