import { computed, onMounted, reactive, ref } from "vue"

export function useTagsMenuHandler() {
  const activeMenuIndex = ref(null)

  const closeTagsMenu = (index) => {
    if (activeMenuIndex.value === index) {
      activeMenuIndex.value = null
    }
  }

  const toggleActiveMenuIndex = (index) => {
    if (activeMenuIndex.value !== index) {
      activeMenuIndex.value = index
    } else {
      activeMenuIndex.value = null
    }
  }

  return {
    activeMenuIndex,
    closeTagsMenu,
    toggleActiveMenuIndex,
  };
}
