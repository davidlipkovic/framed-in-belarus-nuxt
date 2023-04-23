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
    class="modalWrapper flexRowCenter"
    v-if="displayModal"
  >
    <div
      class="modalBackgroundWrapper"
      @click="$emit('closeModal')"
    />
    <div
      class="modalContentWrapper flexRowCenter"
    >
      <button
        @click="$emit('closeModal')"
        class="closeButton"
      >
        <SvgClose />
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<style src="./Modal.scss" lang="scss"></style>
