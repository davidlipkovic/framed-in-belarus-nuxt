import useGalleryStore from "@/stores/gallery"
const galleryStore = useGalleryStore()

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!galleryStore.originalEmbroideries) {
    galleryStore.loading = true
    await galleryStore.getEmbroideries()
    galleryStore.populateGroupCases()
    galleryStore.sortEmbroideries()
    galleryStore.loading = false
  } else {
    galleryStore.loading = false
  }
})
