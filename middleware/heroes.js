import { useHeroesStore } from "@/stores/heroes"
const heroesStore = useHeroesStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!heroesStore.originalHeroes.value) {
    heroesStore.loading = true
    await heroesStore.getPrisonersList()
    heroesStore.loading = false
  } else {
    heroesStore.loading = false
  }
})
