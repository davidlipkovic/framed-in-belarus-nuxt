import { ref } from "vue"
import { defineStore } from "pinia"

export const useRegistrationStore = defineStore("registration", () => {
  const loading = ref(false)
  const email = ref(null)
  
  const endpointUrl = 'https://d2wpukog48e17c.cloudfront.net'

  return {
    loading,
    email,
  }
})
