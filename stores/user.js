import { computed, reactive, ref } from "vue"
import { defineStore } from "pinia"
// import { useRouter } from 'vue-router'

export const useUserStore = defineStore("user", () => {
  // const router = useRouter()

  const loading = ref(false)
  // const loginAttempts = ref(0)

  // const currentUser = {
  //   id: 1,
  //   heroesId: [215],
  //   username: 'Tiffany Chin',
  //   publishUsername: true,
  //   email: 'name@gmail.com',
  //   countryOfResidence: 'Poland',
  //   publishCountryOfResidence: true,
  //   instagram: 'Insta',
  //   publishInstagram: true,
  //   mentionInstagram: true,
  //   language: 'ENG',
  //   reason: 'To support political prisoners that have been imprisoned for standing up for their rights. My family is from Hong Kong, which is currently going through a similar situation like Belarus. I am also an embroiderer myself, and by supporting this project, I feel that I\'m supporting political prisoners all over the world. Speaking of political prisoners, I already have one in mind. I would like to focus on, and it is Maria Kalesnikava,',
  //   publishReason: true,
  //   cards: [
  //     {
  //       type: 'inProgress', 
  //       link: "/Embroidery/Step-2-preparation",
  //       imageUrl: "https://spring96.org/files/images/kalesnikava.jpg",
  //       stepIndex: 2,
  //       tooltip: "",
  //     },
  //     {
  //       type: 'sent', 
  //       link: "",
  //       imageUrl: "https://spring96.org/files/images/kalesnikava.jpg",
  //       tooltip: "",
  //       warning: true
  //     },
  //     {
  //       type: 'requested', 
  //       link: "",
  //       imageUrl: "",
  //       tooltip: "Sorry,  it's not possible to start a new embroidery until the current work-in-progress reaches the step 6 - shipping.",
  //     },
  //     {
  //       type: 'patternIsReady', 
  //       link: "/Embroidery/Step-2-preparation",
  //       imageUrl: "https://spring96.org/files/images/kalesnikava.jpg",
  //       tooltip: ""
  //     },
  //   ]
  // }

  const currentUser = ref(null)
  const currentUserAuthorizationData = ref(null)

  const isLogged = ref(false)

  const endpointUrl = 'https://d2wpukog48e17c.cloudfront.net'

  const removeNullProps = (data) => {
    return Object.keys(data)
    .filter((key) => data[key] != null)
    .reduce((a, key) => ({ ...a, [key]: data[key] }), {})
  }

  const getCurrentUserAuthorizationData = () => {
    if (window.localStorage || window.sessionStorage) {
      let data = window.localStorage.getItem('fibUser')
      data = JSON.parse(data)

      if (data) {
        currentUserAuthorizationData.value = data
      } else {
        data = window.sessionStorage.getItem('fibUser')
        data = JSON.parse(data)
        currentUserAuthorizationData.value = data
      }
    }
  }
  
  const login = async (body) => {
    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/auth/email/login', {
        method: 'post',
        body: removeNullProps(body)
      })
      
      console.log('login', responseData.value)

      return responseData.value && responseData.value.statusText === 'success'
    } catch (error) {
      console.error('Error signing in:', error)
    }
  }

  const updateUser = async (body) => {
    const headers = {}
    const parsedBody = removeNullProps(body)

    if (currentUserAuthorizationData.value) {
      headers['Authorization'] = 'Bearer ' + currentUserAuthorizationData.value.token
    } else {
      return
    }

    if (!parsedBody) {
      return
    }

    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/auth/user/', {
        method: 'put',
        headers,
        body: parsedBody
      })

      console.log('updateUser', responseData.value)

      return responseData.value && responseData.value.statusText === 'success'
    } catch (error) {
      console.error('Error updating user:', error)
    }
  }

  const deleteUser = async () => {
    const headers = {}

    if (currentUserAuthorizationData.value) {
      headers['Authorization'] = 'Bearer ' + currentUserAuthorizationData.value.token
    } else {
      return
    }

    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/auth/user/', {
        method: 'delete',
        headers,
      })

      console.log('deleteUser', responseData.value)

      if (window.localStorage) {
        window.localStorage.removeItem('fibUser')
      }

      if (window.sessionStorage) {
        window.sessionStorage.removeItem('fibUser')
      }

      currentUser.value = null
      currentUserAuthorizationData.value = null

      return responseData.value && responseData.value.statusText === 'success'
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  const validatePin = async (email, pin, remember) => {
    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/auth/email/validate', {
        method: 'post',
        body: { 
          email, 
          pin
        }
      })

      console.log('validatePin', responseData.value.result)

      if (responseData.value.statusText !== 'success') {
        throw new TypeError('Error validating pin: Not succesful')
      }

      currentUserAuthorizationData.value = {
        email: responseData.value.result.email,
        token: responseData.value.result.token,
        userId: responseData.value.result.userId,
      }

      if (remember && window.localStorage) {
        currentUserAuthorizationData.value = {
          ...currentUserAuthorizationData.value,
          remember,
        }

        window.localStorage.setItem('fibUser', JSON.stringify(currentUserAuthorizationData.value))
      } else if (window.sessionStorage) {
        currentUserAuthorizationData.value = {
          ...currentUserAuthorizationData.value,
          remember: true,
        }

        window.sessionStorage.setItem('fibUser', JSON.stringify(currentUserAuthorizationData.value))
      }

      return responseData.value && responseData.value.statusText === 'success'
    } catch (error) {
      console.error('Error validating pin:', error)
    }
  }
  
  const getUserData = async () => {
    const headers = {}

    if (currentUserAuthorizationData.value) {
      headers['Authorization'] = 'Bearer ' + currentUserAuthorizationData.value.token
    } else {
      return
    }

    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/auth/user', {
        method: 'get',
        headers,
      })

      console.log('getUserData', responseData.value)

      const result = responseData.value.result

      currentUser.value = {
        email: currentUserAuthorizationData.value.email,
        username: result.username,
        countryOfResidence: result.countryOfResidence,
        language: result.language.toUpperCase(),
        instagram: result.instagram,
        reason: result.reason,
        reasonTruncated: result.reason.length > 220 ? result.reason.slice(0, 220) + '...' : result.reason,
        publishReason: result.publishReason,
        publishCountryOfResidence: result.publishCountryOfResidence,
        publishInstagram: result.publishInstagram,
        publishUsername: result.publishUsername,
      }

      return responseData.value && responseData.value.statusText === 'success'
    } catch (error) {
      console.error('Error getting user data:', error)
    }
  }
  
  const getUserActivities = async () => {
    const headers = {}

    if (currentUserAuthorizationData.value) {
      headers['Authorization'] = 'Bearer ' + currentUserAuthorizationData.value.token
    } else {
      return
    }

    try {
      const { data: responseData } = await useFetch(endpointUrl + '/api/prisoners/user/' + currentUserAuthorizationData.value.userId, {
        method: 'get',
        headers,
      })

      console.log('getUserActivities', responseData.value)

      return responseData.value && responseData.value.statusText === 'success'
    } catch (error) {
      console.error('Error getting user activities:', error)
    }
  }
  
  const getUserSummary = async () => {
    const headers = {}

    if (currentUserAuthorizationData.value) {
      headers['Authorization'] = 'Bearer ' + currentUserAuthorizationData.value.token
    } else {
      return
    }

    try {
      const { data: responseData } = await useFetch(endpointUrl + '/api/prisoners/user/summary', {
        method: 'get',
        headers,
      })

      console.log('getUserSummary', responseData.value)

      return responseData.value && responseData.value.statusText === 'success'
    } catch (error) {
      console.error('Error getting user activities:', error)
    }
  }

  return {
    loading,
    currentUser,
    currentUserAuthorizationData,
    isLogged,
    login,
    updateUser,
    deleteUser,
    validatePin,
    getCurrentUserAuthorizationData,
    getUserData,
    getUserActivities,
    getUserSummary,
  }
})
