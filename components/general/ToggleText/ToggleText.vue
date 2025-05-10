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
  source: {
    type: Object,
    default: null
  },
  title: {
    type: String,
  }
})

const showMore = ref(false)

const buttonMessage = computed(() => {
  if (showMore.value) {
    return t("buttons.showLess")
  }

  return t("buttons.showMore")
})

const enableToggle = computed(() => props.message.length > props.limit)

const message = computed(() => {
  if (!enableToggle.value || showMore.value) {
    return props.message
  }

  return props.message.slice(0, props.limit) + '...'
})
</script>

<template>
  <div class="toggleTextWrapper">
    <h3>
      {{ title }}
    </h3>
    <p>
      {{ message }}
    </p>
    <a 
      v-if="source && (!enableToggle || showMore)"
      :href="source.link" 
      class="red additionalInfo"
    >
      {{ source.title }}
      <SvgLink/>
    </a>
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

