<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { useCurrentLocale } from "@/composables/CurrentLocale"

const props = defineProps({
  disable: {
    type: Boolean,
    default: false
  },
  isNew: {
    type: Boolean,
    default: true
  },
  embroidery: {
    type: Object,
    default: null
  },
})

const { getCurrentLocaleStringValue } = useCurrentLocale()

const error = computed(() => {
  return false
})
</script>

<template>
  <nuxt-link
    v-if="isNew"
    :to="$localePath('/Embroidery/Step-1-choose-hero')"
    class="embroideryCard embroideryCardNew flexColumnCenter"
    :class="{'embroideryCardNewDisabled': disable}"
  >
    <div class="plusButtonWrapper flexRowCenter">
      <SvgPlus/>
    </div>
    <p>
      Create new embroidery
    </p>
  </nuxt-link>
  <nuxt-link
    v-if="!isNew"
    :to="$localePath(embroidery.link)"
    class="embroideryCard flexColumnCenter"
    v-tooltip.bottom="embroidery.tooltip"
  >
    <img 
      v-if="!embroidery.imageUrl || embroidery.imageUrl === '' || embroidery.imageUrl === 'FALSE'"
      src="../../../assets/media/img/placeholderHero.png"
      :alt="'Photo of' + embroidery.name"
      class="embroideryCardImg"
    >
    <img 
      v-else
      :src="embroidery.imageUrl" 
      :alt="'Photo of' + embroidery.prisoner.name"
      class="embroideryCardImg"
    >
    <span
      v-if="embroidery.status === 'inProgress'"
      class="embroideryCardStatus b1"
      :class="'embroideryCardStatus-' + embroidery.status"
    >
      {{ $t('profilePage.embroideryStatus.' + embroidery.status) }} · {{ $t('embroidery.steps.Step') + ' ' + embroidery.stepIndex }} 
    </span>
    <span
      v-else
      class="embroideryCardStatus b1"
      :class="'embroideryCardStatus-' + embroidery.status"
    >
      {{ $t('profilePage.embroideryStatus.' + embroidery.status) }}
    </span>
    <p class="embroideryCardName flexRowCenter">
      <SvgHelpCircle
        v-if="embroidery.notification"
      />
      <SvgTriangleWarning
        v-if="embroidery.warning"
      />
      {{ getCurrentLocaleStringValue(embroidery, 'name_') }}
    </p>
  </nuxt-link>
</template>

<style src="./Card.scss" lang="scss" scoped></style>
