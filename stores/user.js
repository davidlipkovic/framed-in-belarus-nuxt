import { computed, reactive, ref } from "vue"
import { defineStore } from "pinia"

export const useUserStore = defineStore("user", () => {
  const currentUser = {
    id: 1,
    heroesId: [215],
    name: 'Tiffany Chin',
    password: '1234',
    reason: 'To support political prisoners that have been imprisoned for standing up for their rights. My family is from Hong Kong, which is currently going through a similar situation like Belarus. I am also an embroiderer myself, and by supporting this project, I feel that I\'m supporting political prisoners all over the world. Speaking of political prisoners, I already have one in mind. I would like to focus on, and it is Maria Kalesnikava, who is a musician and politician from Belarus...'
  }

  const isLogged = ref(false)

  return {
    currentUser,
    isLogged
  }
})
