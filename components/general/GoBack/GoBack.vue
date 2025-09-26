<script setup>
import { computed } from "vue"
const { $getPreviousRoute, $localePath } = useNuxtApp()

const props = defineProps({
  isEmbroidery: {
    type: Boolean,
    default: false
  },
})

const backPath = computed(() => {
  return $getPreviousRoute() ? $getPreviousRoute() : '/'
})
</script>

<template>
  <nuxt-link
    :to="$localePath(backPath)"
    class="GoBack"
  >
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="GoBack-img">
      <path d="M14.2959 23.4375L5.8584 15L14.2959 6.5625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.03125 15H24.1406" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <span 
      v-if="isEmbroidery"
      class="GoBack-text"
    >
      {{ $t("embroidery.steps.goBack") }}
    </span>
    <span 
      v-else
      class="GoBack-text"
    >
      {{ $t("buttons.goBack") }}
    </span>
  </nuxt-link>
</template>

<style src="./GoBack.scss" lang="scss" scoped></style>
