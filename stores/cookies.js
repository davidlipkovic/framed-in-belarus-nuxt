import { computed, reactive, ref } from "vue"
import { defineStore } from "pinia"

export default defineStore("cookies", () => {
  const isChecked = ref(true)

  return {
    isChecked
  }
})
