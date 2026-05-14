<script setup>
import { ref, watchEffect } from 'vue'

const emit = defineEmits([
  'closeModal',
])

const props = defineProps({
  displayModal: {
    type: Boolean,
    default: false
  },
  message: String,
})

const startTransition = ref(false)

watchEffect(() => {
  if (props.displayModal) {
    setTimeout(() => {
      startTransition.value = true
      setTimeout(() => {
        emit('closeModal')
      }, 800)
    }, 4000)
  }
})
</script>

<template>
  <div 
    v-if="displayModal"
    class="notificationModal flexColumnCenter"
  >
    <div 
      class="notificationModalContent flexRowStart"
      :class="{ 
        'notificationModalContentHidden': startTransition,
        'notificationModalContentShown': !startTransition,
      }"
    >
      <p class="white">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<style src="./NotificationModal.scss" lang="scss"></style>
