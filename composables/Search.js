import { computed, ref } from "vue"
import { useWindowSize } from '@vueuse/core'

export function useSearch() {
  const { width } = useWindowSize()

  const activeMenuIndex = ref(null)
  const rangeIndex = ref(0)
  const rangePerPage = ref(16)
  const currentOrder = ref('alphabetically')
  const currentTag = ref(null)
  const currentTagType = ref(null)
  const numberOfItems = ref(null)
  const numberOfPages = ref(null)
  const search = ref('')

  const changePageIndex = (index) => {
    if (index === 'first') { 
      rangeIndex.value = 0
    } else if (index === -1) {
      rangeIndex.value = Math.max(rangeIndex.value - rangePerPage.value, 0)
    } else if (index === 1) { 
      rangeIndex.value = Math.min(rangeIndex.value + rangePerPage.value, numberOfItems.value - rangePerPage.value)
    } else if (index === 'last') { 
      rangeIndex.value = Math.max(numberOfItems.value - rangePerPage.value, 0)
    }
  }

  const closeTagsMenu = (index) => {
    if (activeMenuIndex.value === index) {
      activeMenuIndex.value = null
    }
  }

  const currentPage = computed(() => Math.ceil(rangeIndex.value / rangePerPage.value) + 1);

  const sliceDisplayed = (heroes) => heroes.slice(rangeIndex.value, rangeIndex.value + rangePerPage.value)

  const parseData = (dataToParse) => {
    let data
    if (search.value.length > 3) {
      data = dataToParse.filter(hero => hero.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(search.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")))
    } else if (currentTagType.value && currentTag.value && currentTag.value !== 'all') {
      data = dataToParse.filter(hero => hero[currentTagType.value] === currentTag.value)
    } else {
      data = dataToParse
    }
    numberOfPages.value = Math.ceil(data.length / rangePerPage.value)
    numberOfItems.value = data.length
    return sliceDisplayed(data)
  }

  const sortData = (store, storeType) => {
    let data
    if (currentOrder.value === 'alphabetically') {
      data = store[storeType + 'Alphabetically'].value
    } else if (currentOrder.value === 'alphabeticallyReversed') {
      data = store[storeType + 'AlphabeticallyReversed'].value
    } else if (currentOrder.value === 'chronologically') {
      data = store[storeType + 'Chronologically'].value
    } else if (currentOrder.value === 'chronologicallyReversed') {
      data = store[storeType + 'ChronologicallyReversed'].value
    }
    return data
  }

  const toggleActiveMenuIndex = (index) => {
    if (activeMenuIndex.value !== index) {
      activeMenuIndex.value = index
    } else {
      activeMenuIndex.value = null
    }
  }

  const updateSortOrder = (orderValue) => {  
    currentOrder.value = orderValue
    rangeIndex.value = 0
  }
  
  const updateTags = (type, tag) => {
    if (type === 'cases') return
    currentTag.value = tag
    currentTagType.value = type
  }

  watch(width, n => {
    if ( n >= 1142) {
      rangePerPage.value = 16
    } else {
      rangePerPage.value = 12
    }
  },{ immediate: true })

  return {
    activeMenuIndex,
    changePageIndex,
    closeTagsMenu,
    currentPage,
    numberOfPages,
    parseData,
    rangePerPage,
    search,
    sortData,
    toggleActiveMenuIndex,
    updateSortOrder,
    updateTags,
  };
}
