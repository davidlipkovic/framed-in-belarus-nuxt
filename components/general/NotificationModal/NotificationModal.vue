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
    class="notificationModal flexRowStart"
    :class="{
      'notificationModalQuestion': icon === 'question',
      'notificationModalWarning': icon === 'warning',
    }"
  >
    <SvgQustionCircle
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

<style src="./NotificationModal.scss" lang="scss"></style>
