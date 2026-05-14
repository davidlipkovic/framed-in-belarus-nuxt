import useHeroesStore from "@/stores/heroes"
const heroesStore = useHeroesStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  heroesStore.loading = true
  const stitchingActivities = await heroesStore.getStitchingActivities()
  heroesStore.setChosenHero(stitchingActivities.result[0].kit[0].id)
  heroesStore.loading = false
})
