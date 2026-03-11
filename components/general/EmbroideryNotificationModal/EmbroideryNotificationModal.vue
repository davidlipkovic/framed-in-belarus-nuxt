<script setup>
const props = defineProps({
  notification: {
    type: Object,
    default: null
  }
})
</script>

<template>
  <div 
    class="embroideryNotificationModal flexRowStart"
    :class="{
      'embroideryNotificationModalInformation': notification.type === 'information',
      'embroideryNotificationModalWarning': notification.type === 'warning',
    }"
  >
    <component 
      v-if="notification.icon"
      :is="notification.icon"
    />
    <span>
      {{ notification.message }}
      <nuxt-link
        v-if="notification.link"
        :to="$localePath('/' + page)"
      >
        {{ notification.linkMessage }}
      </nuxt-link>
    </span>
  </div>
</template>

<style src="./EmbroideryNotificationModal.scss" lang="scss"></style>
