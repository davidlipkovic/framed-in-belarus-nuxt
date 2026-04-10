import { computed, reactive, ref } from "vue"
import { defineStore } from "pinia"
import { useRemoveNull } from "@/composables/RemoveNull"

const SESSION_DURATION = 60 * 60 * 1000 // 1 hour
let expiryTimer = null

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

  // helper functions
  
  const setHeaders = () => {
    if (userAuthorizationData.value) {
      return {'Authorization': 'Bearer ' + userAuthorizationData.value.token}
    }
    return null
  }

  const scheduleExpiry = () => {
    clearTimeout(expiryTimer) // clear any existing timer first
    expiryTimer = setTimeout(() => removeUserSession(), SESSION_DURATION)
  }


  // Session functions

  const setUserSession = (userData) => {
    const session = {
      ...userData,
      expiresAt: Date.now() + SESSION_DURATION
    }

    localStorage.setItem('FIB_USER', JSON.stringify(session))
    scheduleExpiry()
  }

  const removeUserSession = () => {
    localStorage.removeItem('FIB_USER')
    clearTimeout(expiryTimer)
  }

  const checkUserSession = () => {
    const raw = localStorage.getItem('FIB_USER')
    if (!raw) return

    const session = JSON.parse(raw)
    const remainingMs = session.expiresAt - Date.now()

    if (remainingMs <= 0) {
      removeUserSession()
      return
    }

    scheduleExpiry(remainingMs)
    
    delete session.expiresAt
    userAuthorizationData.value = session
    return userAuthorizationData.value
  }


  // API functions
  
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

    removeUserSession()

    const channel = new BroadcastChannel("user-session-channel")
    channel.postMessage('signOut')
    channel.close()
  }

  const signOut = () => {
    user.value = null
    userAuthorizationData.value = null
    isLogged.value = false
    userDataBeforeDelete.value = false
    removeUserSession()

    const channel = new BroadcastChannel("user-session-channel")
    channel.postMessage('signOut')
    channel.close()
  }

  const validatePin = async (email, pin) => {
    const { data, error } = await useFetch(endpointUrl + '/api/auth/email/validate', {
      method: 'post',
      body: { 
        email, 
        pin
      }
    })

    console.log('validatePin', data.value)

    if (error.value || data.value.statusText !== 'success') {
      return
    }

    userAuthorizationData.value = {
      email: data.value.result.email,
      token: data.value.result.token,
      userId: data.value.result.userId,
    }

    setUserSession(userAuthorizationData.value)

    return true
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
    getUserData,
    getOldUserData,
    getUserEmbroideries,
    getUserSummary,
    setHeaders,
    subscribe,
    publishEmbroidery,
    postEmbroideryCorrections,
    setUserSession,
    checkUserSession,
  }
})
