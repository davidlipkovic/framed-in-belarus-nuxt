import { ref } from "vue"
import { defineStore } from "pinia"

export default defineStore("registration", () => {
  const loading = ref(false)
  const email = ref(null)

  return {
    loading,
    email,
  }
})
