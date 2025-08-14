<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import VueMarkdown from 'vue-markdown-render'

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
  },
  link: {
    type: String,
  },
  linkTitle: {
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

const enableToggle = computed(() => props.message.length > props.limit || !!useSlots().default)

const toggleOpened = computed(() => !enableToggle.value || showMore.value)

const message = computed(() => {
  if (toggleOpened.value) {
    return props.message
  }

  return props.message.slice(0, props.limit) + '...'
})
</script>

<template>
  <div 
    class="toggleTextWrapper"
    :class="{'toggleOpened': toggleOpened}"
  >
    <h3>
      {{ title }}
    </h3>
    <vue-markdown 
      class="ToggleTextMessage"
      :source="message" 
    />
    <slot v-if="showMore"/>
    <a 
      v-if="link && linkTitle && toggleOpened"
      :href="link" 
      target="_blank"
      class="red additionalInfo"
    >
      {{ linkTitle }}
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

