<script setup>
import { watchEffect } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  },
  linkMessage: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div 
    class="embroideryNotificationModal flexRowStart"
    :class="{
      'embroideryNotificationModalQuestion': icon === 'question',
      'embroideryNotificationModalWarning': icon === 'warning',
    }"
  >
    <SvgQuestionCircle
      v-if="icon === 'question'"
    />
    <SvgTriangleWarning
      v-if="icon === 'warning'"
    />
    <span>
      {{ message }}
      <nuxt-link
        v-if="link"
        :to="localePath('/' + page)"
      >
        {{ linkMessage }}
      </nuxt-link>
    </span>
  </div>
</template>

<style src="./EmbroideryNotificationModal.scss" lang="scss"></style>
