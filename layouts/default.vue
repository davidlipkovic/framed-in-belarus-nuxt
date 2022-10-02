<template>
  <div>
    <main-menu/>
    <slot/>
    <main-footer/>
  </div>
</template>

<script>
import MainFooter from '@/components/general/MainFooter'
import MainMenu from '@/components/general/MainMenu'

export default {
  components: {
    MainFooter,
    MainMenu
  },
}
</script>
