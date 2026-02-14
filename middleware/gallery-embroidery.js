import useGalleryStore from "@/stores/gallery"
import useUserStore from "@/stores/user"

const galleryStore = useGalleryStore()
const userStore = useUserStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  galleryStore.loading = true
  userStore.isUsersPrepublishedEmbroidery = false

  if (userStore.isLogged === true) {
    await userStore.getUserEmbroideries()

    userStore.prepublishedEmbroideriesIds.forEach(embroideryId => {
      if (embroideryId === to.params.id) {
        userStore.isUsersPrepublishedEmbroidery = true
      }
    })
  }

  await galleryStore.getEmbroidery(to.params.id)
  galleryStore.loading = false
})
