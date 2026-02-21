import useHeroesStore from "@/stores/heroes"
const heroesStore = useHeroesStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!heroesStore.originalHeroes) {
    heroesStore.loading = true
    heroesStore.getPrisonersList()
    heroesStore.loading = false
  } else {
    heroesStore.loading = false
  }
})
