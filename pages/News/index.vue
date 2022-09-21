<style src="./News.scss" lang="scss"></style>

<template>
  <div>
    <main-menu/>
    <main class="Content">
      <h1 class="title Title">
        <span class="content">News</span>
      </h1>
      <div class="content">
        News content
      </div>
    </main>
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
