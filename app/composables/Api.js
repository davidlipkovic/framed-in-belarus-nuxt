export function useApi() {
  const config = useRuntimeConfig()

  async function apiFetch(path, options = {}) {
    return $fetch(config.public.apiUrl + path, options)
  }

  function createAsyncDataOptions(data) {
    return {
      getCachedData(key, nuxtApp) {
        if (data) {
          return data
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
