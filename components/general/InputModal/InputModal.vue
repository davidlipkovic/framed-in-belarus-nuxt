<script setup>
import { watchEffect } from 'vue'

const props = defineProps({
  displayModal: {
    type: Boolean,
    default: false
  }
})

watchEffect(() => {
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
      <button
        @click="$emit('closeModal')"
        class="closeButton"
      >
        <SvgClose/>
      </button>
      <slot/>
    </div>
  </div>
</template>

<style src="./InputModal.scss" lang="scss"></style>
