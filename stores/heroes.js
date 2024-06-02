import { computed, reactive, ref } from "vue"
import { defineStore } from "pinia"
import tagsJSON from '../assets/json/tags.json'
import { useUserStore } from './user'

export const useHeroesStore = defineStore("heroes", () => {
  const userStore = useUserStore()

  const loading = ref(false)
  const originalHeroes = ref(null)
  const availableHeroes = computed(() => originalHeroes.value.filter((hero) => hero.kit && hero.kit[0].status === 'Shared'))
  const heroesAlphabetically = computed(() => availableHeroes.value.sort((a, b) => a.name.localeCompare(b.name)))
  const heroesAlphabeticallyReversed = computed(() => heroesAlphabetically.value.reverse())
  const heroesChronologically = computed(() => availableHeroes.value.sort((a, b) => a.arrestedProgrammatic - b.arrestedProgrammatic))
  const heroesChronologicallyReversed = computed(() => heroesChronologically.value.reverse())
  const tags = reactive([])

  const chosenHero = ref(null)

  const setChosenHero = (kitId) => {
    chosenHero.value = originalHeroes.value.find((hero) => hero.kit[0].id === kitId)
  }

  const setPrechosenHero = (id) => {
    chosenHero.value = originalHeroes.value.find(hero => hero.id === id)

    // WIP
    // if (window.sessionStorage) {
    //   window.sessionStorage.setItem('fibPrechosenHero', JSON.stringify(chosenHero.value))
    // }
  }

  const endpointUrl = 'https://d2wpukog48e17c.cloudfront.net'

  const getPrisonersList = async () => {
    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/prisoners', {
        method: 'get',
      })
      originalHeroes.value = responseData.value.result
      console.log('getPrisonersList', responseData.value.result)

      return responseData.value && responseData.value.statusText === 'success'
    } catch (error) {
      console.error('Error getting prisoners list data:', error)
    }
  }
  
  const createStitchingActivity = async (kitId) => {
    const headers = userStore.setHeaders()

    if (!headers) {
      return
    }

    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/prisoners/stitching/' + kitId, {
        method: 'post',
        headers,
      })
      console.log('createStitchingActivity', responseData.value)

      return responseData.value && responseData.value.statusText === 'success'
    } catch (error) {
      console.error('Error creating stitching activity:', error)
    }
  }
  
  const getStitchingActivities = async () => {
    const headers = userStore.setHeaders()

    if (!headers) {
      return
    }

    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/prisoners/stitching/', {
        method: 'get',
        headers,
      })
      console.log('getStitchingActivities', responseData.value)

      return responseData.value
    } catch (error) {
      console.error('Error getting stitching activities:', error)
    }
  }

  tags.value = tagsJSON

  return {
    chosenHero,
    setChosenHero,
    setPrechosenHero,
    originalHeroes,
    loading,
    getPrisonersList,
    createStitchingActivity,
    getStitchingActivities,
    heroesAlphabetically,
    heroesAlphabeticallyReversed,
    heroesChronologically,
    heroesChronologicallyReversed,
    tags,
  }
})
