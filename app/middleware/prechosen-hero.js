import usePrisonersStore from "@/stores/prisoners"
const prisonersStore = usePrisonersStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!prisonersStore.chosenHero) {
    prisonersStore.loading = true
    let data = window.sessionStorage.getItem('fibPrechosenHero')
    data = JSON.parse(data)
    if (!data) {
      return navigateTo('/Embroidery/Step-1-choose-hero')
    }
    prisonersStore.chosenHero = data
    prisonersStore.loading = false
  } else {
    prisonersStore.loading = false
  }
})
