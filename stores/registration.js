import { ref } from "vue"
import { defineStore } from "pinia"

export const useRegistrationStore = defineStore("registration", () => {
  const loading = ref(false)
  const email = ref(null)

  return {
    loading,
    email,
  }
})
