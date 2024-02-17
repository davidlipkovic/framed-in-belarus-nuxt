import { useHeroesStore } from "@/stores/heroes"
import { useUserStore } from "@/stores/user"
const heroesStore = useHeroesStore()
const userStore = useUserStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!heroesStore.chosenHero) {
    heroesStore.loading = true
    let data = window.sessionStorage.getItem('fibChosenHero')
    data = JSON.parse(data)
    if (data) {
      heroesStore.chosenHero = data
    } else {
      const stitchingActivities = await heroesStore.getStitchingActivities()
      heroesStore.setChosenHero(stitchingActivities.result[0].kit[0].id)
    }
    heroesStore.loading = false
  } else {
    heroesStore.loading = false
  }
})
