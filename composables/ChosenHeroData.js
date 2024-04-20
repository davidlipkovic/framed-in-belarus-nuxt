import { computed } from "vue"
import { useHeroesStore } from "@/stores/heroes"
import { useCurrentLocale } from "@/composables/CurrentLocale"

export function useChosenHeroData() {
  const heroesStore = useHeroesStore()
  const { currentLocaleName } = useCurrentLocale()

  const penalty = computed(() => {
    return heroesStore.chosenHero['penalty_' + currentLocaleName.value.toLowerCase()]
  })
  
  const prisonerCaseDescription = computed(() => {
    return heroesStore.chosenHero.prisonerCase[0]['description_' + currentLocaleName.value.toLowerCase()]
  })
  
  const prisonerCaseName = computed(() => {
    return heroesStore.chosenHero.prisonerCase[0]['caseName_' + currentLocaleName.value.toLowerCase()]
  })

  return {
    penalty,
    prisonerCaseDescription,
    prisonerCaseName
  }
}
