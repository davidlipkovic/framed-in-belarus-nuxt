import { computed, reactive, ref } from "vue"
import { defineStore } from "pinia"

import tagsJSON from '../assets/json/tags.json'
import heroesJSON from '../assets/json/heroes.json'

export const useHeroesStore = defineStore("heroes", () => {
  const originalHeroes = reactive([])
  const tags = reactive([])

  // const chosenHero = (filterType, filterValue) => {
  //   return originalHeroes.value.filter(hero => hero[filterType] === filterValue)
  // }

  const changeDateFormat = (originalDate) => {
    let msec = Date.parse(originalDate)
    let d = new Date(msec)

    return d.getDay() + ' ' + d.toLocaleString('en-us', { month: 'long' }) + ' ' + d.getFullYear()
  }

  console.log(changeDateFormat('1982-04-24'))

  const chosenHero = () => {
    const hero = {
      id: 215,
      url: "https://prisoners.spring96.org/en/person/maryja-kalesnikava",
      name: "Maryia Kalesnikava",
      case: "Seizure of power",
      status: "active",
      gender: "female",
      photo: "https://spring96.org/files/images/kalesnikava.jpg",
      description: "member of the presidium of the Coordination Council, head of the campaign headquarters of former presidential nominee Viktar Babaryka, sentenced to 11 years in prison",
      // birthday: "1982-04-24",
      birthday: "24 April 1982",
      // arrested: "2020-09-07",
      arrested: "7 September 2020",
      articles0: "Art. 361 of the Criminal Code — Calls for actions aimed at causing harm to the national security of the Republic of Belarus",
      articles1: "Art. 357 of the Criminal Code — Conspiracy to seize power in an unconstitutional way",
      articles2: "Art. 361-1 of the Criminal Code — Creation of an extremist formation, or participation in it",
      prisonTitle: "Penal colony No. 4",
      prisonAddress: "246035, Homieĺ, vulica Antoshkina 3",
      declaration: "https://spring96.org/en/news/99460",
      decision: "11 years",
      penalty: "imprisonment in a general-security penal colony",
      judge: "Siarhei Yepikhau",
      // verdictDate: "2021-09-06",
      verdictDate: "6 September 2021",
      // appealDate: "2021-12-24",
      appealDate: "24 December 2021"
    }

    // hero.birthday = changeDateFormat(hero.birthday)
    // hero.arrested = changeDateFormat(hero.arrested)
    // hero.verdictDate = changeDateFormat(hero.verdictDate)
    // hero.appealDate = changeDateFormat(hero.appealDate)

    return hero
  }

  originalHeroes.value = heroesJSON
  tags.value = tagsJSON

  return {
    chosenHero,
    originalHeroes,
    tags
  }
})
