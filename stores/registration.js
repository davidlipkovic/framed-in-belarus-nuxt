import { ref } from "vue"
import { defineStore } from "pinia"

export default defineStore("registration", () => {
  const loading = ref(false)
  const email = ref(null)
  const remember = ref(false)

  return {
    loading,
    email,
    remember,
  }
})
