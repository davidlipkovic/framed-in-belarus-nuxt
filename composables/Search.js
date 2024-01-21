import { computed, ref } from "vue"
import { useRoute, useRouter } from 'vue-router'
import { useWindowSize } from '@vueuse/core'
import { search } from 'ss-search'
import debounce from 'lodash/debounce'

export function useSearch() {
  const route = useRoute()
  const router = useRouter()

  const { width } = useWindowSize()

  const activeMenuIndex = ref(null)
  const rangeIndex = ref(0)
  const rangePerPage = ref(16)
  const currentOrder = ref('Alphabetically')
  const currentTags = ref({
    case: 'all',
    status: 'all',
    gender: 'all',
  })
  const numberOfItems = ref(null)
  const numberOfPages = ref(null)
  const searchQuery = ref('')
  const temporarySearchQuery = ref('')

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

  const handleSearch = debounce(() => {
    router.replace({ 
      query: { 
        ...route.query, 
        ...{ search: temporarySearchQuery.value } 
      }
    })
  }, 300)

  const sliceDisplayed = (heroes) => heroes.slice(rangeIndex.value, rangeIndex.value + rangePerPage.value)

  const parseData = (store, storeType) => {
    let data = store[storeType + currentOrder.value].value.filter(hero => {
      return Object.entries(currentTags.value).every(([type, tag]) => {
        if (tag === 'all') return true
        return hero[type] === tag
      })
    })

    if (searchQuery.value.length > 3) {
      data = search(data, ['name', 'case', 'prison/title', 'prison/adress', 'birthday', 'arrested'], searchQuery.value)
    }

    numberOfPages.value = Math.ceil(data.length / rangePerPage.value)
    numberOfItems.value = data.length
    return sliceDisplayed(data)
  }

  const toggleActiveMenuIndex = (index) => {
    if (activeMenuIndex.value !== index) {
      activeMenuIndex.value = index
    } else {
      activeMenuIndex.value = null
    }
  }

  const updateSortOrder = (orderValue) => {
    const ogQuery = route.query
    delete ogQuery.order

    router.replace({ 
      query: { 
        ...{ order: orderValue },
        ...ogQuery, 
      }
    })

    rangeIndex.value = 0
  }
  
  const updateTags = (type, tag) => {
    if ((type === 'case' && tag === 'group')) return

    router.replace({ 
      query: { 
        ...route.query, 
        ...{ [type]: tag } 
      }
    })
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
    currentOrder,
    currentPage,
    currentTags,
    handleSearch,
    numberOfPages,
    parseData,
    rangePerPage,
    searchQuery,
    temporarySearchQuery,
    toggleActiveMenuIndex,
    updateSortOrder,
    updateTags,
  };
}
