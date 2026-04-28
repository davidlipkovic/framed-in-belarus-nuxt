import { ref, shallowRef } from "vue"
import { defineStore } from "pinia"

export default defineStore("gallery", () => {
  const loading = ref(false)
  const originalEmbroideries = shallowRef(null)
  const embroideriesAlphabetically = shallowRef(null)
  const embroideriesAlphabeticallyReversed = shallowRef(null)
  // const embroideriesChronologically = shallowRef(null)
  // const embroideriesChronologicallyReversed = shallowRef(null)

  const currentEmbroidery = ref(null)
  const groupCasesMap = new Map()

  const tags = ref({
    case: {
      current: null,
      options: [null, "individual", "group"],
      group: null
    },
    status: {
      current: null,
      options: [null, "active", "former"]
    },
    gender: {
      current: null,
      options: [null, "female", "male"]
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

    originalEmbroideries.value = data.value.result
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

  const updateTagsGroupCasesOrder = (lang) => {
    tags.value.case.group = tags.value.case.group.sort((a, b) => a['caseName_' + lang].localeCompare(b['caseName_' + lang]))
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

  const sortEmbroideries = () => {
    embroideriesAlphabetically.value = [...originalEmbroideries.value].sort((a, b) => a.name.localeCompare(b.name))
    embroideriesAlphabeticallyReversed.value = [...embroideriesAlphabetically.value].reverse()
  }

  const updateCurrentEmbroideryStatus = (status) => {
    currentEmbroidery.value.status = status
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
    sortEmbroideries,
    currentEmbroidery,
    populateGroupCases,
    updateTagsGroupCasesOrder,
    groupCasesMap,
    tags,
    updateCurrentEmbroideryStatus,
  }
})
