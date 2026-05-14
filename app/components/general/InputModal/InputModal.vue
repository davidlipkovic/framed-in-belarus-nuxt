<script setup>
import { watchEffect } from 'vue'

const props = defineProps({
  displayModal: {
    type: Boolean,
    default: false
  }
})

watchEffect(() => {
  if (import.meta.server) {
    return
  }

  props.displayModal ? document.documentElement.classList.add('overflowHidden') : document.documentElement.classList.remove('overflowHidden')
})
</script>

<template>
  <div
    class="inputModalWrapper flexRowCenter"
    v-if="displayModal"
  >
    <div
      class="inputModalBackgroundWrapper"
      @click="$emit('closeModal')"
    />
    <div class="inputModalSlotWrapper flexRowCenter">
      <slot/>
    </div>
  </div>
</template>

<style src="./InputModal.scss" lang="scss"></style>
