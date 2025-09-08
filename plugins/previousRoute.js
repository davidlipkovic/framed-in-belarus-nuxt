export default defineNuxtPlugin((nuxtApp) => {
  let lastRoute = null

  nuxtApp.$router.beforeEach((to, from, next) => {    
    if (from.fullPath) {
      let fromFullPath = from.fullPath

      if (fromFullPath.startsWith('/ru') || fromFullPath.startsWith('/bl')) {
        fromFullPath = fromFullPath.slice(3)
      }

      let toFullPath = to.fullPath

      if (toFullPath.startsWith('/ru') || toFullPath.startsWith('/bl')) {
        toFullPath = toFullPath.slice(3)
      }

      if (toFullPath !== fromFullPath) {
        lastRoute = fromFullPath
      }
    }

    next()
  })

  nuxtApp.provide('getPreviousRoute', () => lastRoute)
})
