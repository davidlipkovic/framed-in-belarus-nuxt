import { computed, reactive, ref } from "vue"
import { defineStore } from "pinia"

import tagsJSON from '../assets/json/tags.json'
import heroesJSON from '../assets/json/heroes.json'

export const useHeroesStore = defineStore("heroes", () => {
  const originalHeroes = reactive([])
  const heroesAlphabetically = reactive([])
  const heroesAlphabeticallyReversed = reactive([])
  const heroesChronologically = reactive([])
  const heroesChronologicallyReversed = reactive([])
  const tags = reactive([])

  // const chosenHero = (filterType, filterValue) => {
  //   return originalHeroes.value.filter(hero => hero[filterType] === filterValue)
  // }

  const setDate = (originalDate) => {
    let msec = Date.parse(originalDate)
    return new Date(msec)
  }

  const chosenHero = {
    id: 215,
    url: "https://prisoners.spring96.org/en/person/maryja-kalesnikava",
    name: "Maryia Kalesnikava",
    case: "Seizure of power",
    status: "active",
    gender: "female",
    photo: "https://spring96.org/files/images/kalesnikava.jpg",
    description: "member of the presidium of the Coordination Council, head of the campaign headquarters of former presidential nominee Viktar Babaryka, sentenced to 11 years in prison",
    birthday: "1982-04-24",
    arrested: "2020-09-07",
    articles0: "Art. 361 of the Criminal Code — Calls for actions aimed at causing harm to the national security of the Republic of Belarus",
    articles1: "Art. 357 of the Criminal Code — Conspiracy to seize power in an unconstitutional way",
    articles2: "Art. 361-1 of the Criminal Code — Creation of an extremist formation, or participation in it",
    prisonTitle: "Penal colony No. 4",
    prisonAddress: "246035, Homieĺ, vulica Antoshkina 3",
    declaration: "https://spring96.org/en/news/99460",
    decision: "11 years",
    penalty: "imprisonment in a general-security penal colony",
    judge: "Siarhei Yepikhau",
    verdictDate: "2021-09-06",
    appealDate: "2021-12-24",
  }

  // const chosenHero = ref(null)

  const setChosenHero = (id) => {
    chosenHero.value = originalHeroes.value.find(hero => hero.id === id)
  }

  const removeEmpty = (heroes) => {
    const nameRegex = /^[A-Z][a-z]+(\s[A-Z][a-z]+)?$/;
    return heroes.filter(hero => {
      if ((hero.name && hero.name !== "" && hero.name !== "FALSE" && nameRegex.test(hero.name) &&
      (hero.arrested && hero.arrested !== "" && hero.arrested !== "FALSE"))) {
        return hero
      }
    })
  }
  
  const fixHeroesDates = (heroes) => {
    return heroes.map(hero => {
      if (hero.appealDate && hero.appealDate !== '') hero.appealDateProgrammatic = setDate(hero.appealDate)
      if (hero.arrested && hero.arrested !== '') hero.arrestedProgrammatic = setDate(hero.arrested)
      if (hero.birthday && hero.birthday !== '') hero.birthdayProgrammatic = setDate(hero.birthday)
      if (hero.verdictDate && hero.verdictDate !== '') hero.verdictDateProgrammatic = setDate(hero.verdictDate)
      return hero
    })
  }

  originalHeroes.value = fixHeroesDates(removeEmpty(heroesJSON))
  heroesAlphabetically.value = computed(() => originalHeroes.value.sort((a, b) => a.name.localeCompare(b.name)))
  heroesAlphabeticallyReversed.value = computed(() => heroesAlphabetically.value.reverse())
  heroesChronologically.value = computed(() => originalHeroes.value.sort((a, b) => a.arrestedProgrammatic - b.arrestedProgrammatic))
  heroesChronologicallyReversed.value = computed(() => heroesChronologically.value.reverse())

  tags.value = tagsJSON

  return {
    chosenHero,
    setChosenHero,
    originalHeroes,
    heroesAlphabetically,
    heroesAlphabeticallyReversed,
    heroesChronologically,
    heroesChronologicallyReversed,
    tags
  }
})
