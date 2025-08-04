export default defineNuxtRouteMiddleware(async (to, from) => { 
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault()
  }, false)
})
