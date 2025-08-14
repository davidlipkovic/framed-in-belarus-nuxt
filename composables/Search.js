import { ref } from "vue"
import { useRoute, useRouter } from 'vue-router'
import debounce from 'lodash/debounce'

export function useSearch() {
  const route = useRoute()
  const router = useRouter()

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

  const updatePageIndex = (index) => {
    let calculatedRangeIndex

    if (index === 'first') { 
      calculatedRangeIndex = 0
    } else if (index === -1) {
      calculatedRangeIndex = Math.max(rangeIndex.value - rangePerPage.value, 0)
    } else if (index === 1) { 
      calculatedRangeIndex = Math.min(rangeIndex.value + rangePerPage.value, numberOfItems.value - rangePerPage.value)
    } else if (index === 'last') { 
      calculatedRangeIndex = Math.max(numberOfItems.value - rangePerPage.value, 0)
    }

    router.replace({ 
      query: { 
        ...route.query, 
        ...{ p: Math.ceil(calculatedRangeIndex / rangePerPage.value) + 1 } 
      }
    })
  }

  const updateSearch = debounce((searchQuery) => {
    if (searchQuery.length < 3) {
      const query = {...route.query}
      delete query.search

      router.replace({ query })
    } else {
      router.replace({ 
        query: { 
          ...route.query, 
          ...{ search: searchQuery } 
        }
      })
    }
  }, 300)

  const sliceDisplayed = (heroes) => heroes.slice(rangeIndex.value, rangeIndex.value + rangePerPage.value)

  const updateSortOrder = (orderValue) => {
    const ogQuery = route.query
    delete ogQuery.o

    router.replace({ 
      query: { 
        ...{ o: orderValue },
        ...ogQuery, 
      }
    })

    rangeIndex.value = 0
  }
  
  const updateTags = (type, tag) => {
    router.replace({ 
      query: { 
        ...route.query, 
        ...{ [type.charAt(0)]: tag },
        ...{ p: 1 },
      }
    })
  }

  return {
    updatePageIndex,
    currentOrder,
    currentTags,
    updateSearch,
    numberOfItems,
    numberOfPages,
    rangeIndex,
    rangePerPage,
    sliceDisplayed,
    updateSortOrder,
    updateTags,
  }
}
