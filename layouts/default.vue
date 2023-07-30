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

<template>
  <div>
    <MainMenu/>
    <nuxt/>
    <MainFooter/>
  </div>
</template>
