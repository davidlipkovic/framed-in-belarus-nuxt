import { useHeroesStore } from "@/stores/heroes"
const heroesStore = useHeroesStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!heroesStore.chosenHero) {
    heroesStore.loading = true
    let data = window.sessionStorage.getItem('fibChosenHero')
    data = JSON.parse(data)
    if (!data) {
      return navigateTo('/Embroidery/Step-1-choose-hero')
    }
    heroesStore.chosenHero = data
    heroesStore.loading = false
  } else {
    heroesStore.loading = false
  }
})
