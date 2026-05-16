import useUserStore from "@/stores/user"

const userStore = useUserStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  userStore.isUsersEmbroidery = false

  if (userStore.user) {
    await userStore.getUserEmbroideries()

    userStore.embroideries.forEach(embroidery => {
      if (embroidery.id === to.params.id) {
        userStore.isUsersEmbroidery = true
      }
    })
  }
})
