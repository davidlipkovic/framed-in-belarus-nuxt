import { ref } from "vue"
import { useRoute, useRouter } from 'vue-router'
import { search } from 'ss-search'

export function useSearch() {
  const route = useRoute()
  const router = useRouter()

  const rangeIndex = ref(0)
  const rangePerPage = ref(16)
  const currentOrder = ref(null)
  const currentPage = ref(1)
  const currentTags = ref({
    case: null,
    status: null,
    gender: null,
  })
  const searchQuery = ref(null)

  const handleFilterBySearch = (items, searchFilter) => {
    if (!items) {
      return
    }

    if (searchQuery.value?.length < 3) {
      return items
    }

    return search(items, searchFilter, searchQuery.value)
  }

  const sliceDisplayed = (items) => items.slice(rangeIndex.value, rangeIndex.value + rangePerPage.value)

  const resetQuery = () => {
    router.replace({ })
  }

  const updateQuery = (type, value) => {
    if (route.query[type] === value) {
      return
    }

    if (
      (type === 'p' && value > 1) || 
      (type === 'search' && value.length > 2) || 
      (!['p', 'search'].includes(type) && value)
    ) {
      router.replace({ 
        query: { 
          ...route.query, 
          ...{ [type]: value },
        }
      })
    } else if (route.query[type]) {
      const query = {...route.query}
      delete query[type]

      router.replace({ query })
    }
  }

  return {
    currentOrder,
    currentPage,
    currentTags,
    handleFilterBySearch,
    rangeIndex,
    rangePerPage,
    searchQuery,
    sliceDisplayed,
    resetQuery,
    updateQuery,
  }
}
