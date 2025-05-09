import { computed, reactive, ref } from "vue"
import { defineStore } from "pinia"
import tagsJSON from '../assets/json/tags.json'
import useUserStore from './user'

export default defineStore("heroes", () => {
  const userStore = useUserStore()

  const loading = ref(false)
  const originalHeroes = ref(null)
  const availableHeroes = computed(() => originalHeroes.value.filter((hero) => hero.kit && hero.kit[0].status === 'Shared'))
  const heroesAlphabetically = computed(() => availableHeroes.value.sort((a, b) => a.name.localeCompare(b.name)))
  const heroesAlphabeticallyReversed = computed(() => heroesAlphabetically.value.reverse())
  const heroesChronologically = computed(() => availableHeroes.value.sort((a, b) => a.arrestedProgrammatic - b.arrestedProgrammatic))
  const heroesChronologicallyReversed = computed(() => heroesChronologically.value.reverse())
  const tags = reactive([])

  // WIP
  // const chosenHero = ref(null)
  const chosenHero = {
    id: 215,
    "viasnaId": "1848",
    url: "https://prisoners.spring96.org/en/person/maryja-kalesnikava",
    name: "Maryia Kalesnikava",
    case: "Seizure of power",
    status: "active",
    gender: "female",
    photo: "https://spring96.org/files/images/kalesnikava.jpg",
    birthday: "1982-04-24",
    arrested: "2020-09-07",
    articles0: "Art. 361 of the Criminal Code — Calls for actions aimed at causing harm to the national security of the Republic of Belarus",
    articles1: "Art. 357 of the Criminal Code — Conspiracy to seize power in an unconstitutional way",
    articles2: "Art. 361-1 of the Criminal Code — Creation of an extremist formation, or participation in it",
    prisonTitle: "Penal colony No. 4",
    prisonAddress: "246035, Homieĺ, vulica Antoshkina 3",
    declaration: "https://spring96.org/en/news/99460",
    judge: "Siarhei Yepikhau",
    verdictDate: "2021-09-06",
    appealDate: "2021-12-24",
    "decision_eng": "2 years",
    "decision_rus": "2 года",
    "decision_bel": "2 гады",
    "penalty_eng": "imprisonment in a general-security penal colony",
    "penalty_rus": "лишение свободы в колонии в условиях общего режима",
    "penalty_bel": "пазбаўленне волі ў калоніі ва ўмовах агульнага рэжыму",
    "description_eng": "member of the presidium of the Coordination Council, head of the campaign headquarters of former presidential nominee Viktar Babaryka, sentenced to 11 years in prison",
    "description_rus": "rus test",
    "description_bel": "bel test",
    "dateOfDetention": "2021-09-30",
    "pzk": true,
    "kit": [
      {
        "id": "recMfrFzAxnmEVedC",
        "prisoner": [
          "reciz5cgdV8ye2kT9"
        ],
        "status": "Shared",
        "pattern": [
          {
            "id": "recLiIL58bYQmSUCJ",
            "photo": "https://v5.airtableusercontent.com/v3/u/30/30/1719964800000/GaA5F9x5CKuXssht2Fv0xA/-ZR-RnXwTYTkA3DNJqvfJrd233KENjRwOyEH99qVag9Ac77aFeuatkb4aFY7TTLoCXhwyrty3uzWMBJ38gHGvjJm9p0XhbN-46irtAZjPjBLQG-uROQ610ggXDFYUc9u3TdNOXp57n2m5SYMQUN3cg/7o6w4ux1mInN-kvrh35O9DoSGCsfRMrSXM-UBkmzNd4"
          }
        ]
      }
    ],
    prisonerCase: [
      {
        "id": "recFq0BcgkSynHZcH",
        "type": "Group",
        "caseName_eng": "Zeltser",
        "caseName_rus": "Зельцер",
        "caseName_bel": "Зельцар",
        "description_eng": "On September 28, 2021 Belarusian KGB officers broke down the door to the apartment of programmer Andrei Zeltser during \"special measures\". According to the Investigative Committee, Zeltzer opened fire with a hunting rifle. KGB officer Dmitry Fedosyuk and Andrei Zeltser himself were killed in the shootout. \n\nLater a video of the incident appeared in pro-government Telegram channels.\nThe clip was edited from videos taken from different cameras. Zeltser's wife sometimes appears in the frame, also recording what is happening on her phone. Despite the fact that she could most accurately document the moment of the murder, her footage is not in the video. According to the Investigative Committee, Zeltser's wife was detained on suspicion of complicity in the murder - \"she video-recorded the crime and assisted in its commission. The edited video was copied by both state and independent mass media in Belarus. \n\nIn the following days about 200 people were detained for commenting on the video. They were accused of insulting government officials and inciting social hatred.\n\nAccording to the human rights activists, there is no evidence that the detainees \"call for violent actions on the national, ethnic, racial or religious grounds.\n",
        "description_rus": "IT-специалист Андрей Зельцер был убит в собственной квартире в результате перестрелки с сотрудниками КГБ. Дмитрий Федосюк, сотрудник КГБ, также скончался. После происшествия по стране прошла волна задержаний тех, кто, по мнению властей, неправильно высказывался об этой ситуации в социальных сетях. За комментарии было задержано более 200 человек.\nТакже была задержана вдова Зельцера – Мария Успенская, которая находилась в квартире в момент перестрелки и снимала инцидент на телефон. Ей впоследствии было назначено принудительное лечение в психиатрическом стационаре (срок не определяется судом).\n",
        "description_bel": "IT-спецыяліст Андрэй Зельцар быў забіты ва ўласнай кватэры ў выніку перастрэлу з супрацоўнікамі КДБ. Зміцер Федасюк, супрацоўнік КДБ, таксама памёр. Пасля падзеі па краіне прайшла хваля затрыманняў тых, хто, на думку ўлад, няслушна выказваўся пра гэту сітуацыю ў сацыяльных сетках. За каментары было затрымана больш за 200 чалавек.\nТаксама была затрыманая ўдава Зельцара – Марыя Успенская, якая знаходзілася ў кватэры ў момант перастрэлу і здымала інцыдэнт на тэлефон. Ёй пасля было прызначана прымусовае лячэнне ў псіхіятрычным стацыянары (тэрмін не вызначаецца судом).\n\n"
      }
    ],
  }

  const setChosenHero = (kitId) => {
    chosenHero.value = originalHeroes.value.find((hero) => hero.kit[0].id === kitId)
  }

  const setPrechosenHero = (id) => {
    chosenHero.value = originalHeroes.value.find(hero => hero.id === id)

    // WIP
    // if (window.sessionStorage) {
    //   window.sessionStorage.setItem('fibPrechosenHero', JSON.stringify(chosenHero.value))
    // }
  }

  const endpointUrl = 'https://d2wpukog48e17c.cloudfront.net'

  const getPrisonersList = async () => {
    const { data, error } = await useFetch(endpointUrl + '/api/prisoners', {
      method: 'get',
    })

    if (error.value) {
      throw createError({ 
        statusCode: error.value.statusCode,
        statusMessage: error.value.statusMessage,
      })
    }

    console.log('getPrisonersList', data.value.result)

    originalHeroes.value = data.value.result
  }
  
  const createStitchingActivity = async (kitId) => {
    const headers = userStore.setHeaders()

    if (!headers) {
      return
    }
    
    const { data, error } = await useFetch(endpointUrl + '/api/prisoners/stitching/' + kitId, {
      method: 'post',
      headers,
    })

    if (error.value) {
      throw createError({ 
        statusCode: error.value.statusCode,
        statusMessage: error.value.statusMessage,
      })
    }

    console.log('createStitchingActivity', data.value)
  }
  
  const getStitchingActivities = async () => {
    const headers = userStore.setHeaders()

    if (!headers) {
      return
    }

    const { data, error } = await useFetch(endpointUrl + '/api/prisoners/stitching/', {
      method: 'get',
      headers,
    })

    if (error.value) {
      throw createError({ 
        statusCode: error.value.statusCode,
        statusMessage: error.value.statusMessage,
      })
    }

    console.log('getStitchingActivities', data.value)
  }

  tags.value = tagsJSON

  return {
    chosenHero,
    setChosenHero,
    setPrechosenHero,
    originalHeroes,
    loading,
    getPrisonersList,
    createStitchingActivity,
    getStitchingActivities,
    heroesAlphabetically,
    heroesAlphabeticallyReversed,
    heroesChronologically,
    heroesChronologicallyReversed,
    tags,
  }
})
