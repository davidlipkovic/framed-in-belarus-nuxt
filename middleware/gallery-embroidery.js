import useGalleryStore from "@/stores/gallery"
import useUserStore from "@/stores/user"

const galleryStore = useGalleryStore()
const userStore = useUserStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  galleryStore.loading = true
  userStore.isUsersEmbroidery = false

  if (userStore.user) {
    await userStore.getUserEmbroideries()

    userStore.embroideries.forEach(embroidery => {
      if (embroidery.id === to.params.id) {
        userStore.isUsersEmbroidery = true
      }
    })
  }

  await galleryStore.getEmbroidery(to.params.id)
  galleryStore.loading = false
})
