import useUserStore from "@/stores/user"

const userStore = useUserStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!userStore.user) {
    return navigateTo('/')
  }

  await userStore.getUserEmbroideries()
  let allowToProceed = false

  userStore.embroideries.forEach(embroidery => {
    if (embroidery.id === to.query.id && (embroidery.status === 'Prepublished' || embroidery.status === 'Published')) {
      allowToProceed = true
    }
  })

  if (!allowToProceed) {
    return navigateTo('/')
  }
})
