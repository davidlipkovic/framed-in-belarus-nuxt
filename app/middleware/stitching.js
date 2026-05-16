import usePrisonersStore from "@/stores/prisoners"
const prisonersStore = usePrisonersStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  prisonersStore.loading = true
  const stitchingActivities = await prisonersStore.getStitchingActivities()
  prisonersStore.setChosenHero(stitchingActivities.result[0].kit[0].id)
  prisonersStore.loading = false
})
