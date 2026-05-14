import useHeroesStore from "@/stores/heroes"
const heroesStore = useHeroesStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  heroesStore.loading = true

  if (!heroesStore.originalHeroes) {
    heroesStore.getPrisonersList()
  }

  heroesStore.loading = false
})
