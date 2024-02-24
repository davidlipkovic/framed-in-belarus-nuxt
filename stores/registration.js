import { ref } from "vue"
import { defineStore } from "pinia"

export const useRegistrationStore = defineStore("registration", () => {
  const email = ref(null)

  return {
    email
  }
})
