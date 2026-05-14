export function useCheckImage() {
  const checkImage = async (src, showImage) => {
    try {
      const img = new Image()
      img.src = src

      await new Promise((resolve, reject) => {
        img.onload = resolve
        img.onerror = reject
      })

      showImage.value = true
    } catch {
      showImage.value = false
    }
  }

  return {
    checkImage,
  }
}
