export function useApi() {
  const config = useRuntimeConfig()

  async function apiFetch(path, options = {}) {
    try {
      return await $fetch(config.public.apiUrl + path, options)
    } catch (error) {
      throw createError({
        statusCode: error.status ?? 500,
        message: error.data?.message ?? error.message ?? 'API request failed',
        data: error.data,
        fatal: false,
      })
    }
  }

  function createAsyncDataOptions(data) {
    return {
      getCachedData(key, nuxtApp) {
        if (data.value) {
          return data.value
        }

        return nuxtApp.payload.data[key] ?? nuxtApp.static.data[key]
      }
    }
  }

  return { 
    apiFetch,
    createAsyncDataOptions,
  }
}
