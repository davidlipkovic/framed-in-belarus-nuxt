import { computed, reactive, ref } from "vue"
import { defineStore } from "pinia"
import { useRemoveNull } from "@/composables/RemoveNull"

export default defineStore("user", () => {
const { removeNullProps } = useRemoveNull()

  const loading = ref(false)
  const user = ref(null)
  const oldUser = ref(null)
  const userSummary = ref(null)
  const userAuthorizationData = ref(null)
  const userDataBeforeDelete = ref(false)
  const embroideries = ref(null)
  const isUsersEmbroidery = ref(false)

  const isLogged = ref(false)

  const endpointUrl = 'https://d2wpukog48e17c.cloudfront.net'

  const getUserAuthorizationData = () => {
    if (window.localStorage) {
      let data = window.localStorage.getItem('fibUser')
      data = JSON.parse(data)

      if (data) {
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
  
  const loginUser = async (email) => {
    const { data, error } = await useFetch(endpointUrl + '/api/auth/email/login', {
      method: 'post',
      body: {email}
    })

    if (error.value) {
      throw createError({ 
        statusCode: error.value.statusCode,
        statusMessage: error.value.statusMessage,
      })
    }
    
    console.log('loginUser', data.value)

    return data.value.result
  }
  
  const createUser = async (body) => {
    const { data, error } = await useFetch(endpointUrl + '/api/auth/email/create', {
      method: 'post',
      body: removeNullProps(body)
    })

    // if (error.value) {
    //   throw createError({ 
    //     statusCode: error.value.statusCode,
    //     statusMessage: error.value.statusMessage,
    //   })
    // }
    
    console.log('createUser', data.value)    
    
    if (error.value || data.value.statusText !== 'success') {
      return
    }

    return true
  }
  
  const subscribe = async (body) => {
    const { data, error } = await useFetch(endpointUrl + '/api/auth/email/subscribe', {
      method: 'post',
      body: removeNullProps(body)
    })

    if (error.value) {
      throw createError({ 
        statusCode: error.value.statusCode,
        statusMessage: error.value.statusMessage,
      })
    }
    
    console.log('subscribe', data.value)

    return data.value.result
  }

  const updateUser = async (body) => {
    const headers = setHeaders()
    const parsedBody = removeNullProps(body)

    if (!headers || !parsedBody) {
      return
    }

    const { data, error } = await useFetch(endpointUrl + '/api/auth/user/', {
      method: 'put',
      headers,
      body: parsedBody
    })

    if (error.value) {
      throw createError({ 
        statusCode: error.value.statusCode,
        statusMessage: error.value.statusMessage,
      })
    }

    Object.entries(parsedBody).forEach(([key, value]) => {
      user.value[key] = value
    })

    console.log('updateUser', data.value, user.value)
  }

  const deleteUser = async () => {
    const headers = setHeaders()

    if (!headers) {
      return
    }

    const { data, error } = await useFetch(endpointUrl + '/api/auth/user/', {
      method: 'delete',
      headers,
    })

    if (error.value) {
      throw createError({ 
        statusCode: error.value.statusCode,
        statusMessage: error.value.statusMessage,
      })
    }

    console.log('deleteUser', data.value)

    userDataBeforeDelete.value = true
  }

  const signOut = () => {
    if (window.localStorage) {
      window.localStorage.removeItem('fibUser')
    }

    if (window.sessionStorage) {
      window.sessionStorage.removeItem('fibUser')
    }

    user.value = null
    userAuthorizationData.value = null
    isLogged.value = false

    userDataBeforeDelete.value = false
  }

  const validatePin = async (email, pin, remember) => {
    const { data, error } = await useFetch(endpointUrl + '/api/auth/email/validate', {
      method: 'post',
      body: { 
        email, 
        pin
      }
    })

    if (error.value) {
      throw createError({ 
        statusCode: error.value.statusCode,
        statusMessage: error.value.statusMessage,
      })
    }

    if (data.value.statusText !== 'success') {
      throw new TypeError('Error validating pin: Not succesful')
    }

    console.log('validatePin', data.value.result)

    userAuthorizationData.value = {
      email: data.value.result.email,
      token: data.value.result.token,
      userId: data.value.result.userId,
    }

    if (window.localStorage) {
      userAuthorizationData.value = {
        ...userAuthorizationData.value,
        remember,
      }

      window.localStorage.setItem('fibUser', JSON.stringify(userAuthorizationData.value))
    }
  }

  const getUserData = async () => {
    const headers = setHeaders()

    if (!headers) {
      return
    }

    const { data, error } = await useFetch(endpointUrl + '/api/auth/user', {
      method: 'get',
      headers,
    })

    if (error.value) {
      throw createError({ 
        statusCode: error.value.statusCode,
        statusMessage: error.value.statusMessage,
      })
    }

    console.log('getUserData', data.value)

    const result = data.value.result

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
  }
  
  //WIP
  const getOldUserData = async (userId, userToken) => {
    const { data, error } = await useFetch(endpointUrl + '/api/auth/token/' + userId + '/' + userToken, {
      method: 'get',
    })

    if (error.value) {
      throw createError({ 
        statusCode: error.value.statusCode,
        statusMessage: error.value.statusMessage,
      })
    }

    console.log('getOldUserData', data.value)

    const result = data.value.result
    // const result = {
    //   email: 'david',
    //   username: 'davidl'
    // }

    if (!result) {
      return
    }

    oldUser.value = {
      email: result.email,
      username: result.username,
      countryOfResidence: result.countryOfResidence,
      language: result.language?.toUpperCase(),
      instagram: result.instagram,
      reason: result.reason,
      publishReason: result.publishReason,
      publishCountryOfResidence: result.publishCountryOfResidence,
      publishInstagram: result.publishInstagram,
      publishUsername: result.publishUsername,
    }
  }
  
  const getUserEmbroideries = async () => {
    const headers = setHeaders()

    if (!headers) {
      return
    }

    const { data, error } = await useFetch(endpointUrl + '/api/auth/user/gallery', {
      method: 'get',
      headers,
    })

    if (error.value) {
      throw createError({ 
        statusCode: error.value.statusCode,
        statusMessage: error.value.statusMessage,
      })
    }

    console.log('getUserEmbroideries', data.value)

    embroideries.value = data.value.result
  }
  
  const getUserSummary = async () => {
    const headers = setHeaders()

    if (!headers) {
      return
    }

    const { data, error } = await useFetch(endpointUrl + '/api/prisoners/user/summary', {
      method: 'get',
      headers,
    })

    if (error.value) {
      throw createError({ 
        statusCode: error.value.statusCode,
        statusMessage: error.value.statusMessage,
      })
    }

    console.log('getUserSummary', data.value)

    userSummary.value = data.value.result
  }
  
  const createShipping = async (body) => {
    const headers = setHeaders()

    if (!headers) {
      return
    }
    const { data, error } = await useFetch(endpointUrl + '/api/prisoners/shipping/' + userSummary.value[0].stitchingId, {
      method: 'post',
      headers,
      body,
    })

    if (error.value) {
      throw createError({ 
        statusCode: error.value.statusCode,
        statusMessage: error.value.statusMessage,
      })
    }
    
    console.log('createShipping', data.value)
  }

  const publishEmbroidery = async (embroideryId) => {
    const headers = setHeaders()

    if (!headers) {
      return
    }

    const { data, error } = await useFetch(endpointUrl + '/api/auth/user/gallery/publish/' + embroideryId, {
      method: 'put',
      headers,
    })

    console.log('publishEmbroidery', data.value)

    if (error.value || data.value.statusText !== 'success') {
      return
    }

    return true
  }

  const postEmbroideryCorrections = async (embroideryId, body) => {
    const headers = setHeaders()

    if (!headers) {
      return
    }

    const { data, error } = await useFetch(endpointUrl + '/api/prisoners/corrections/' + embroideryId, {
      method: 'post',
      headers,
      body: removeNullProps(body)
    })

    console.log('postEmbroideryCorrections', data.value)

    if (error.value || data.value.statusText !== 'success') {
      return
    }

    return true
  }

  return {
    loading,
    createShipping,
    user,
    oldUser,
    userSummary,
    userAuthorizationData,
    userDataBeforeDelete,
    isLogged,
    embroideries,
    isUsersEmbroidery,
    loginUser,
    createUser,
    updateUser,
    deleteUser,
    signOut,
    validatePin,
    getUserAuthorizationData,
    getUserData,
    getOldUserData,
    getUserEmbroideries,
    getUserSummary,
    setHeaders,
    subscribe,
    publishEmbroidery,
    postEmbroideryCorrections,
  }
})
