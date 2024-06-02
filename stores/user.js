import { computed, reactive, ref } from "vue"
import { defineStore } from "pinia"

export default defineStore("user", () => {
  const loading = ref(false)
  const user = ref(null)
  const userSummary = ref(null)
  const userAuthorizationData = ref(null)
  const userDataBeforeDelete = ref(false)

  const isLogged = ref(false)

  const endpointUrl = 'https://d2wpukog48e17c.cloudfront.net'

  const removeNullProps = (data) => {
    return Object.keys(data)
    .filter((key) => data[key] != null)
    .reduce((a, key) => ({ ...a, [key]: data[key] }), {})
  }

  const getUserAuthorizationData = () => {
    if (window.localStorage || window.sessionStorage) {
      let data = window.localStorage.getItem('fibUser')
      data = JSON.parse(data)

      if (data) {
        userAuthorizationData.value = data
      } else {
        data = window.sessionStorage.getItem('fibUser')
        data = JSON.parse(data)
        userAuthorizationData.value = data
      }
    }
  }
  
  const setHeaders = () => {
    if (userAuthorizationData.value) {
      return {'Authorization': 'Bearer ' + userAuthorizationData.value.token}
    }
    return null
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
    const headers = setHeaders()
    const parsedBody = removeNullProps(body)

    if (!headers || !parsedBody) {
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
    const headers = setHeaders()

    if (!headers) {
      return
    }

    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/auth/user/', {
        method: 'delete',
        headers,
      })

      console.log('deleteUser', responseData.value)

      userDataBeforeDelete.value = true

      return responseData.value && responseData.value.statusText === 'success'
    } catch (error) {
      console.error('Error deleting user:', error)
    }
  }

  const deleteUserData = () => {
    if (window.localStorage) {
      window.localStorage.removeItem('fibUser')
    }

    if (window.sessionStorage) {
      window.sessionStorage.removeItem('fibUser')
    }

    user.value = null
    userAuthorizationData.value = null

    userDataBeforeDelete.value = false
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

      userAuthorizationData.value = {
        email: responseData.value.result.email,
        token: responseData.value.result.token,
        userId: responseData.value.result.userId,
      }

      if (remember && window.localStorage) {
        userAuthorizationData.value = {
          ...userAuthorizationData.value,
          remember,
        }

        window.localStorage.setItem('fibUser', JSON.stringify(userAuthorizationData.value))
      } else if (window.sessionStorage) {
        userAuthorizationData.value = {
          ...userAuthorizationData.value,
          remember: true,
        }

        window.sessionStorage.setItem('fibUser', JSON.stringify(userAuthorizationData.value))
      }

      return responseData.value && responseData.value.statusText === 'success'
    } catch (error) {
      console.error('Error validating pin:', error)
    }
  }
  
  const getUserData = async () => {
    const headers = setHeaders()

    if (!headers) {
      return
    }

    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/auth/user', {
        method: 'get',
        headers,
      })

      console.log('getUserData', responseData.value)

      const result = responseData.value.result

      user.value = {
        email: userAuthorizationData.value.email,
        username: result.username,
        countryOfResidence: result.countryOfResidence,
        language: result.language.toUpperCase(),
        instagram: result.instagram,
        reason: result.reason,
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
    const headers = setHeaders()

    if (!headers) {
      return
    }

    try {
      const { data: responseData } = await useFetch(endpointUrl + '/api/prisoners/user/' + userAuthorizationData.value.userId, {
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
    const headers = setHeaders()

    if (!headers) {
      return
    }

    try {
      const { data: responseData } = await useFetch(endpointUrl + '/api/prisoners/user/summary', {
        method: 'get',
        headers,
      })

      console.log('getUserSummary', responseData.value)

      userSummary.value = responseData.value.result

      return responseData.value && responseData.value.statusText === 'success'
    } catch (error) {
      console.error('Error getting user activities:', error)
    }
  }
  
  const createShipping = async (body) => {
    const headers = setHeaders()

    if (!headers) {
      return
    }

    try {
      const {data: responseData} = await useFetch(endpointUrl + '/api/prisoners/shipping/' + userSummary.value[0].stitchingId, {
        method: 'post',
        headers,
        body,
      })
      console.log('createShipping', responseData.value)

      return responseData.value
    } catch (error) {
      console.error('Error creating shipping:', error)
    }
  }

  return {
    loading,
    createShipping,
    user,
    userSummary,
    userAuthorizationData,
    userDataBeforeDelete,
    isLogged,
    login,
    updateUser,
    deleteUser,
    deleteUserData,
    validatePin,
    getUserAuthorizationData,
    getUserData,
    getUserActivities,
    getUserSummary,
    setHeaders,
  }
})
