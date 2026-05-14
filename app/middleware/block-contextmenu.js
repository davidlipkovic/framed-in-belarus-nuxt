export default defineNuxtRouteMiddleware(async (to, from) => {
  // deprecated for blocking image download
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault()
  }, false)
})
