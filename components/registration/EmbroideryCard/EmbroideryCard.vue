<script setup>
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps({
  newEmbroidery: {
    type: Boolean,
    default: true
  },
  card: {
    type: Object,
    default: null
  },
})

const disabled = computed(() => {
  return false
})

const error = computed(() => {
  return false
})
</script>

<template>
  <nuxt-link
    v-if="newEmbroidery"
    :to="localePath('/Embroidery/Step-1-choose-hero')"
    class="embroideryCard embroideryCardNew flexColumnCenter"
    :class="{'embroideryCardNewDisabled': disabled}"
  >
    <div class="plusButtonWrapper flexRowCenter">
      <SvgPlus/>
    </div>
    <p>
      Create new embroidery
    </p>
  </nuxt-link>
  <nuxt-link
    v-if="!newEmbroidery"
    :to="localePath(card.link)"
    class="embroideryCard flexColumnCenter"
    v-tooltip.bottom="card.tooltip"
  >
    <img 
      v-if="!card.imageUrl || card.imageUrl === '' || card.imageUrl === 'FALSE'"
      src="../../../assets/media/img/placeholderHero.png"
      :alt="'Photo of' + card.name"
      class="embroideryCardImg"
    >
    <img 
      v-else
      :src="card.imageUrl" 
      :alt="'Photo of' + card.name"
      class="embroideryCardImg"
    >
    <span
      v-if="card.type === 'inProgress'"
      class="embroideryCardStatus"
      :class="'embroideryCardStatus-' + card.type"
    >
      {{ $t('profilePage.cardStatus.' + card.type) }} · {{ $t('embroidery.steps.Step') + ' ' + card.stepIndex }} 
    </span>
    <span
      v-else
      class="embroideryCardStatus"
      :class="'embroideryCardStatus-' + card.type"
    >
      {{ $t('profilePage.cardStatus.' + card.type) }}
    </span>
    <p class="embroideryCardName flexRowCenter">
      <SvgQustionCircle
        v-if="card.notification"
      />
      <SvgTriangleWarning
        v-if="card.warning"
      />
      Maryia Kalesnikava
    </p>
  </nuxt-link>
</template>

<style src="./EmbroideryCard.scss" lang="scss" scoped></style>
