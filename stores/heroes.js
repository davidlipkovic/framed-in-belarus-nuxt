import { computed, reactive, ref } from "vue"
import { defineStore } from "pinia"

import tagsJSON from '../assets/json/tags.json'

export const useHeroesStore = defineStore("heroes", () => {
  const loading = ref(false)
  const originalHeroes = reactive([])
  const availableHeroes = computed(() => Array.isArray(originalHeroes.value) ? [...originalHeroes.value].filter((hero) => hero.kit[0].status === 'Taken') : [])
  const heroesAlphabetically = computed(() => Array.isArray(availableHeroes.value) ? [...availableHeroes.value].sort((a, b) => a.name.localeCompare(b.name)) : [])
  const heroesAlphabeticallyReversed = computed(() => Array.isArray(heroesAlphabetically.value) ? [...heroesAlphabetically.value].reverse() : [])
  const heroesChronologically = computed(() => Array.isArray(availableHeroes.value) ? [...availableHeroes.value].sort((a, b) => a.arrestedProgrammatic - b.arrestedProgrammatic) : [])
  const heroesChronologicallyReversed = computed(() => Array.isArray(heroesChronologically.value) ? [...heroesChronologically.value].reverse() : [])
  const tags = reactive([])

  const chosenHero = ref(null)

  const setChosenHero = (id) => {
    chosenHero.value = originalHeroes.value.find(hero => hero.id === id)

    if (window.sessionStorage) {
      window.sessionStorage.setItem('fibChosenHero', JSON.stringify(chosenHero.value))
    }
  }

  const endpointUrl = 'https://d2wpukog48e17c.cloudfront.net'

  const getPrisonersList = async () => {
    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/prisoners')
      originalHeroes.value = responseData.value.result
      console.log(responseData.value.result)
    } catch (error) {
      console.error('Error fetching prisoners list data:', error)
    }
  }

  tags.value = tagsJSON

  return {
    chosenHero,
    setChosenHero,
    originalHeroes,
    loading,
    getPrisonersList,
    heroesAlphabetically,
    heroesAlphabeticallyReversed,
    heroesChronologically,
    heroesChronologicallyReversed,
    tags
  }
})
