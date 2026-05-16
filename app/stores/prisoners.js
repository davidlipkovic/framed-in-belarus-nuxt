import { computed, reactive, ref } from "vue"
import { defineStore } from "pinia"
import useUserStore from './user'
import { useApi } from "@/composables/Api"

export default defineStore("prisoners", () => {
  const userStore = useUserStore()
  const { apiFetch } = useApi()

  const loading = ref(false)
  const originalPrisoners = ref(null)
  const availablePrisoners = computed(() => originalPrisoners.value.filter((hero) => hero.kit && hero.kit[0].status === 'Shared'))
  const prisonersAlphabetically = computed(() => availablePrisoners.value.sort((a, b) => a.name.localeCompare(b.name)))
  const prisonersAlphabeticallyReversed = computed(() => prisonersAlphabetically.value.reverse())
  const prisonersChronologically = computed(() => availablePrisoners.value.sort((a, b) => a.arrestedProgrammatic - b.arrestedProgrammatic))
  const prisonersChronologicallyReversed = computed(() => prisonersChronologically.value.reverse())
  const tags = reactive([])

  const chosenHero = ref(null)

  const setChosenHero = (kitId) => {
    chosenHero.value = originalPrisoners.value.find((hero) => hero.kit[0].id === kitId)
  }

  const setPrechosenHero = (id) => {
    chosenHero.value = originalPrisoners.value.find(hero => hero.id === id)

    // WIP
    // if (window.sessionStorage) {
    //   window.sessionStorage.setItem('fibPrechosenHero', JSON.stringify(chosenHero.value))
    // }
  }

  const getPrisoners = async () => {
    const response = await apiFetch('/api/prisoners', {
      method: 'GET',
    })

    console.log('getPrisoners', response)

    return response.result
  }

  const setPrisoners = (data) => {
    originalPrisoners.value = data
  }

  // WIP
  const endpointUrl = 'https://d2wpukog48e17c.cloudfront.net'

  const createStitchingActivity = async (kitId) => {
    const headers = userStore.setHeaders()

    if (!headers) {
      return
    }
    
    const { data, error } = await useFetch(endpointUrl + '/api/prisoners/stitching/' + kitId, {
      method: 'post',
      headers,
    })

    if (error.value) {
      throw createError({ 
        statusCode: error.value.statusCode,
        statusMessage: error.value.statusMessage,
      })
    }

    console.log('createStitchingActivity', data.value)
  }
  
  const getStitchingActivities = async () => {
    const headers = userStore.setHeaders()

    if (!headers) {
      return
    }

    const { data, error } = await useFetch(endpointUrl + '/api/prisoners/stitching/', {
      method: 'get',
      headers,
    })

    if (error.value) {
      throw createError({ 
        statusCode: error.value.statusCode,
        statusMessage: error.value.statusMessage,
      })
    }

    console.log('getStitchingActivities', data.value)
  }

  return {
    chosenHero,
    setChosenHero,
    setPrechosenHero,
    originalPrisoners,
    loading,
    getPrisoners,
    setPrisoners,
    createStitchingActivity,
    getStitchingActivities,
    prisonersAlphabetically,
    prisonersAlphabeticallyReversed,
    prisonersChronologically,
    prisonersChronologicallyReversed,
    tags,
  }
})
