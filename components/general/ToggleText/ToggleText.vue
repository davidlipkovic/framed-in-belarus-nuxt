<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
  limit: {
    type: Number,
    default: 220
  },
  message: {
    type: String,
  },
  title: {
    type: String,
  }
})

const buttonMessage = computed(() => {
  if (showMore.value) {
    return t("buttons.showLess")
  } else {
    return t("buttons.showMore")
  }
})

const enableToggle = computed(() => {
  return props.message.length > props.limit
})

const message = computed(() => {
  if (showMore.value) {
    return props.message
  } else {
    return props.message.slice(0, props.limit) + '...'
  }
})

const showMore = ref(false)
</script>

<template>
  <div class="toggleTextWrapper">
    <h3>
      {{ title }}
    </h3>
    <p>
      {{ message }}
    </p>
    <button
      v-if="enableToggle"
      @click="showMore = !showMore" 
      class="flexRowStart"
      :class="{'showMoreBtnActive': showMore}"
    >
      {{ buttonMessage }}
      <SvgArrowDown/>
    </button>
  </div>
</template>

<style src="./ToggleText.scss" lang="scss"></style>

