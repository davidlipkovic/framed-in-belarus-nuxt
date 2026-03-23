import useGalleryStore from "@/stores/gallery"
import useUserStore from "@/stores/user"

const galleryStore = useGalleryStore()
const userStore = useUserStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!userStore.isLogged) {
    return navigateTo('/')
  }

  await galleryStore.getEmbroidery(to.query.id)
  if (galleryStore.currentEmbroidery.status !== 'Prepublished') {
    return navigateTo('/')
  }
})
