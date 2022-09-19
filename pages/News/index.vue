<style src="./News.scss" lang="scss"></style>

<template>
  <div>
    <main-menu/>
    <main></main>
    <main-footer/>
  </div>
</template>

<script>
import MainFooter from '@/components/general/MainFooter'
import MainMenu from '@/components/general/MainMenu'

export default {
  components: {
    MainFooter,
    MainMenu,
  },
}
</script>
