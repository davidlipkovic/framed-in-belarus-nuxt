export default defineNuxtPlugin((nuxtApp) => {
  let lastRoute = null

  nuxtApp.$router.beforeEach((to, from, next) => {    
    if (from.fullPath) {
      lastRoute = from.fullPath
    }
    next()
  })

  nuxtApp.provide('getPreviousRoute', () => lastRoute)
})
