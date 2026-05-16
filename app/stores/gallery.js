import { reactive, ref, shallowRef } from "vue"
import { defineStore } from "pinia"
import { useApi } from "@/composables/Api"

export default defineStore("gallery", () => {
  const { apiFetch } = useApi()

  const loading = ref(false)
  const originalEmbroideries = shallowRef(null)
  const embroideriesAlphabetically = shallowRef(null)
  const embroideriesAlphabeticallyReversed = shallowRef(null)
  // disabled for now
  // const embroideriesChronologically = shallowRef(null)
  // const embroideriesChronologicallyReversed = shallowRef(null)

  const currentEmbroidery = ref(null)
  const groupCasesMap = new Map()

  const tags = reactive({
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

  const getEmbroideries = async () => {
    const response = await apiFetch('/api/prisoners/gallery', {
      method: 'GET',
    })

    console.log('getEmbroideries', response)

    return response.result
  }

  const setEmbroideries = (data) => {
    originalEmbroideries.value = data
    populateGroupCases()
    sortEmbroideries()
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

    tags.case.group = groupCasesAccumulator.sort((a, b) => a.caseName_eng.localeCompare(b.caseName_eng))
  }

  const updateTagsGroupCasesOrder = (lang) => {
    tags.case.group = tags.case.group?.sort((a, b) => a['caseName_' + lang].localeCompare(b['caseName_' + lang]))
  }

  const getEmbroidery = async (id) => {
    const response = await apiFetch('/api/prisoners/gallery/' + id, {
      method: 'GET',
    })

    console.log('getEmbroidery', response)

    return response.result
  }

  const setEmbroidery = async (data) => {
    currentEmbroidery.value = data
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
    setEmbroideries,
    getEmbroidery,
    setEmbroidery,
    sortEmbroideries,
    currentEmbroidery,
    populateGroupCases,
    updateTagsGroupCasesOrder,
    groupCasesMap,
    tags,
    updateCurrentEmbroideryStatus,
  }
})
