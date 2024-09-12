import useGalleryStore from "@/stores/gallery"
const galleryStore = useGalleryStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!galleryStore.articles) {
    galleryStore.loading = true
    await galleryStore.getEmbroidery(to.params.id)
    galleryStore.loading = false
  } else {
    galleryStore.loading = false
  }
})
