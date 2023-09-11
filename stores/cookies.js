import { computed, reactive, ref } from "vue"
import { defineStore } from "pinia"

export const useCookiesStore = defineStore("cookies", () => {
  const isChecked = ref(false)

  return {
    isChecked
  }
})
