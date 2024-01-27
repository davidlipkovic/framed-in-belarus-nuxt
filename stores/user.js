import { computed, reactive, ref } from "vue"
import { defineStore } from "pinia"

export const useUserStore = defineStore("user", () => {
  const currentUser = {
    id: 1,
    heroesId: [215],
    username: 'Tiffany Chin',
    publishUsername: true,
    email: 'name@gmail.com',
    countryOfResidence: 'Poland',
    publishcountryOfResidence: true,
    instagram: 'Insta',
    publishInstagram: true,
    mentionInstagram: true,
    language: 'ENG',
    reason: 'To support political prisoners that have been imprisoned for standing up for their rights. My family is from Hong Kong, which is currently going through a similar situation like Belarus. I am also an embroiderer myself, and by supporting this project, I feel that I\'m supporting political prisoners all over the world. Speaking of political prisoners, I already have one in mind. I would like to focus on, and it is Maria Kalesnikava,',
    publishReason: true,
    cards: [
      {
        type: 'inProgress', 
        link: "/Embroidery/Step-2-preparation",
        imageUrl: "https://spring96.org/files/images/kalesnikava.jpg",
        stepIndex: 2,
        tooltip: "",
      },
      {
        type: 'sent', 
        link: "",
        imageUrl: "https://spring96.org/files/images/kalesnikava.jpg",
        tooltip: "",
        warning: true
      },
      {
        type: 'requested', 
        link: "",
        imageUrl: "",
        tooltip: "Sorry,  it's not possible to start a new embroidery until the current work-in-progress reaches the step 6 - shipping.",
      },
      {
        type: 'patternIsReady', 
        link: "/Embroidery/Step-2-preparation",
        imageUrl: "https://spring96.org/files/images/kalesnikava.jpg",
        tooltip: ""
      },
    ]
  }

  currentUser.reasonTruncated = currentUser.reason.slice(0, 220) + '...'

  const isLogged = ref(false)

  return {
    currentUser,
    isLogged
  }
})
