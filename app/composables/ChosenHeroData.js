import { computed } from "vue"
import usePrisonersStore from "@/stores/prisoners"
import { useCurrentLocale } from "@/composables/CurrentLocale"

export function useChosenHeroData() {
  const prisonersStore = usePrisonersStore()
  const { currentLocaleName } = useCurrentLocale()

  const penalty = computed(() => {
    return prisonersStore.chosenHero['decision_' + currentLocaleName.value.toLowerCase()]
  })
  
  const prisonerDescription = computed(() => {
    return prisonersStore.chosenHero['description_' + currentLocaleName.value.toLowerCase()]
  })

  const prisonerCaseDescription = computed(() => {
    return prisonersStore.chosenHero.prisonerCase[0]['description_' + currentLocaleName.value.toLowerCase()]
  })
  
  const prisonerCaseName = computed(() => {
    return prisonersStore.chosenHero.prisonerCase[0]['caseName_' + currentLocaleName.value.toLowerCase()]
  })

  return {
    penalty,
    prisonerDescription,
    prisonerCaseDescription,
    prisonerCaseName
  }
}
