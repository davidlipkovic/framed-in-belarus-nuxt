import { computed, reactive, ref } from "vue"
import { defineStore } from "pinia"
import tagsJSON from '../assets/json/tags.json'
import useUserStore from './user'

export default defineStore("heroes", () => {
  const userStore = useUserStore()

  const loading = ref(false)
  const originalHeroes = ref(null)
  const availableHeroes = computed(() => originalHeroes.value.filter((hero) => hero.kit && hero.kit[0].status === 'Shared'))
  const heroesAlphabetically = computed(() => availableHeroes.value.sort((a, b) => a.name.localeCompare(b.name)))
  const heroesAlphabeticallyReversed = computed(() => heroesAlphabetically.value.reverse())
  const heroesChronologically = computed(() => availableHeroes.value.sort((a, b) => a.arrestedProgrammatic - b.arrestedProgrammatic))
  const heroesChronologicallyReversed = computed(() => heroesChronologically.value.reverse())
  const tags = reactive([])

  // WIP
  // const chosenHero = ref(null)
  const chosenHero = {
    id: 215,
    url: "https://prisoners.spring96.org/en/person/maryja-kalesnikava",
    name: "Maryia Kalesnikava",
    case: "Seizure of power",
    status: "active",
    gender: "female",
    photo: "https://spring96.org/files/images/kalesnikava.jpg",
    description: "member of the presidium of the Coordination Council, head of the campaign headquarters of former presidential nominee Viktar Babaryka, sentenced to 11 years in prison",
    birthday: "1982-04-24",
    arrested: "2020-09-07",
    articles0: "Art. 361 of the Criminal Code — Calls for actions aimed at causing harm to the national security of the Republic of Belarus",
    articles1: "Art. 357 of the Criminal Code — Conspiracy to seize power in an unconstitutional way",
    articles2: "Art. 361-1 of the Criminal Code — Creation of an extremist formation, or participation in it",
    prisonTitle: "Penal colony No. 4",
    prisonAddress: "246035, Homieĺ, vulica Antoshkina 3",
    declaration: "https://spring96.org/en/news/99460",
    decision: "11 years",
    penalty: "imprisonment in a general-security penal colony",
    judge: "Siarhei Yepikhau",
    verdictDate: "2021-09-06",
    appealDate: "2021-12-24",
  }

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
    const { data, error } = await useFetch(endpointUrl + '/api/prisoners', {
      method: 'get',
    })

    if (error.value) {
      throw createError({ 
        statusCode: error.value.statusCode,
        statusMessage: error.value.statusMessage,
      })
    }

    console.log('getPrisonersList', data.value.result)

    originalHeroes.value = data.value.result
  }
  
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
