import { ref } from "vue"
import { defineStore } from "pinia"

export default defineStore("gallery", () => {
  const loading = ref(false)
  const originalEmbroideries = ref(null)
  const embroideriesAlphabetically = computed(() => originalEmbroideries.value.sort((a, b) => a.name.localeCompare(b.name)))
  const embroideriesAlphabeticallyReversed = computed(() => embroideriesAlphabetically.value.reverse())
  // const embroideriesChronologically = computed(() => originalEmbroideries.value.sort((a, b) => a.publicationDate - b.publicationDate))
  // const embroideriesChronologicallyReversed = computed(() => embroideriesChronologically.value.reverse())
  const currentEmbroidery = ref(null)
  const groupCasesMap = new Map()

  const tags = ref({
    case: {
      current: "all",
      options: ["all", "individual", "group"],
      group: null
    },
    status: {
      current: "all",
      options: ["all", "active", "former"]
    },
    gender: {
      current: "all",
      options: ["all", "female", "male"]
    }
  })

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

    // WIP for testing, maybe backend should return already filtered
    const filteredData = data.value.result.filter(embroidery => embroidery.status === 'Prepublished' && embroidery.prisoner.name_eng)

    console.log('getEmbroideries filtered', filteredData)

    originalEmbroideries.value = filteredData
  }

  const populateGroupCases = () => {
    const groupCasesAccumulator = []

    originalEmbroideries.value.forEach(embroidery => {
      if (!groupCasesMap.has(embroidery.case.id) && embroidery.case.type === 'Group' && embroidery.case.caseName_eng) {
        groupCasesMap.set(embroidery.case.id, {
          id: embroidery.case.id,
          caseName_eng: embroidery.case.caseName_eng,
          caseName_rus: embroidery.case.caseName_rus,
          caseName_bel: embroidery.case.caseName_bel,
        })

        groupCasesAccumulator.push({
          id: embroidery.case.id,
          caseName_eng: embroidery.case.caseName_eng,
          caseName_rus: embroidery.case.caseName_rus,
          caseName_bel: embroidery.case.caseName_bel,
        })
      }
    })

    tags.value.case.group = groupCasesAccumulator.sort((a, b) => a.caseName_eng.localeCompare(b.caseName_eng))
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

  return {
    originalEmbroideries,
    embroideriesAlphabetically,
    embroideriesAlphabeticallyReversed,
    // embroideriesChronologically,
    // embroideriesChronologicallyReversed,
    loading,
    getEmbroideries,
    getEmbroidery,
    currentEmbroidery,
    populateGroupCases,
    groupCasesMap,
    tags,
  }
})
