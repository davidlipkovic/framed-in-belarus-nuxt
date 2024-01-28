import { computed, reactive, ref } from "vue"
import { defineStore } from "pinia"

export const useUserStore = defineStore("user", () => {
  const loading = ref(false)

  const currentUser = {
    id: 1,
    heroesId: [215],
    username: 'Tiffany Chin',
    publishUsername: true,
    email: 'name@gmail.com',
    countryOfResidence: 'Poland',
    publishCountryOfResidence: true,
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

  const currentUserReactive = ref(null)

  currentUser.reasonTruncated = currentUser.reason.slice(0, 220) + '...'

  const isLogged = ref(false)

  const token = ref("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJlY05QNnk4SEd5U3YwYmcwIiwiZW1haWwiOiJkYXZpZC5saXBrb3ZpY0BnbWFpbC5jb20iLCJyb2xlIjoicmVhZGVyIiwiaWF0IjoxNzA2NDU3NzQ2fQ.BwJcH4zRiPlCMTXsweTmXISGWS6gX2KHS25CX9dzKxI")
  const userId = ref("recNP6y8HGySv0bg0")
  const email = ref("david.lipkovic@gmail.com")

  const endpointUrl = 'https://d2wpukog48e17c.cloudfront.net'

  const removeNullProps = (data) => {
    return Object.keys(data)
    .filter((key) => data[key] != null)
    .reduce((a, key) => ({ ...a, [key]: data[key] }), {})
  }
  
  const login = async (body) => {
    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/auth/email/login', {
        method: 'post',
        body: removeNullProps(body)
      })
      console.log(responseData.value)
    } catch (error) {
      console.error('Error signing in:', error)
    }
  }

  const updateUser = async (body) => {
    const parsedBody = removeNullProps(body)
    if (!parsedBody) {
      return
    }

    const headers = {}

    if (token.value) {
      headers['Authorization'] = 'Bearer ' + token.value
    }

    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/auth/user/', {
        headers,
        method: 'put',
        body: parsedBody
      })
      console.log(responseData.value)
    } catch (error) {
      console.error('Error updating user:', error)
    }
  }

  const deleteUser = async () => {
    const headers = {}

    if (token.value) {
      headers['Authorization'] = 'Bearer ' + token.value
    }

    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/auth/user/', {
        headers,
        method: 'delete',
      })
      console.log(responseData.value)
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  const validatePin = async (email, pin) => {
    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/auth/email/validate', {
        method: 'post',
        body: { 
          email, 
          pin
        }
      })

      console.log(responseData.value.result)

      token.value = responseData.value.result.token
      userId.value = responseData.value.result.userId
      email.value = responseData.value.result.email
    } catch (error) {
      console.error('Error validating pin:', error)
    }
  }
  
  const getUserData = async () => {
    const headers = {}

    if (token.value) {
      headers['Authorization'] = 'Bearer ' + token.value
    }

    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/auth/user', {
        headers,
        method: 'get',
      })
      console.log(responseData.value)

      const result = responseData.value.result

      currentUserReactive.value = {
        email: result.email,
        username: result.username,
        countryOfResidence: result.countyOfResidence,
        language: result.language,
        instagram: result.instagram,
        reason: result.reason,
        publishReason: result.publishReason,
        publishCountryOfResidence: result.publishCountryOfResidence,
        publishInstagram: result.publishInstagram,
        publishUsername: result.publishUsername,
      }
    } catch (error) {
      console.error('Error signing in:', error)
    }
  }
  
  const getUserActivities = async () => {
    try {
      const headers = {}

      if (token.value) {
        headers['Authorization'] = 'Bearer ' + token.value
      }

      const { data: responseData } = await useFetch(endpointUrl + '/api/prisoners/user/' + userId.value, {
        headers,
      })

      console.log(responseData)
      console.log(responseData.value.result)

    } catch (error) {
      console.error('Error fetching user activities data:', error)
    }
  }
  
  const createStitchingActivity = async (body, prisonerId) => {
    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/prisoners/stitching/' + prisonerId, {
        method: 'post',
        body: removeNullProps(body)
      })
      console.log(responseData.value)
    } catch (error) {
      console.error('Error creating stitching activity:', error)
    }
  }

  return {
    loading,
    currentUser,
    currentUserReactive,
    isLogged,
    login,
    updateUser,
    deleteUser,
    validatePin,
    getUserData,
    getUserActivities,
    createStitchingActivity,
    token,
  }
})
