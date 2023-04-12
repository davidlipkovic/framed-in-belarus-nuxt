<script setup>
const scrollToTop = () => {
  const intervalId = setInterval(() => {
    if (window.pageYOffset === 0) {
      clearInterval(intervalId)
    }
    window.scroll(0, window.pageYOffset - 50)
  }, 10)
}
</script>

<template>
  <div
    class="pointerUpWrapper flexRowCenter"
    @click="scrollToTop"
  >
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 27.2 28.9" xml:space="preserve">
      <path d="M1.4,13.4L13.6,1.3l12.1,12.1"/>
      <path d="M13.6,2.9v24.6"/>
    </svg>
  </div>
</template>

<style src="./PointerUp.scss" lang="scss"></style>
