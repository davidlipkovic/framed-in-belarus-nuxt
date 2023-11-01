<script setup>
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps({
  newEmbroidery: {
    type: Boolean,
    default: true
  },
  status: {
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
    :to="localePath('/Gallery/Case')"
    class="embroideryCard flexColumnCenter"
  >
    <img 
      src="../../../assets/media/img/case1/prisoner.jpg" 
      alt="Name Surname" 
      class="embroideryCardImg"
    >
    <span
      class="embroideryCardStatus"
      :class="'embroideryCardStatus' + status.type"
    >
      {{ status.message }}
    </span>
    <p class="embroideryCardName">
      <SvgWarning 
        v-if="error"
      />
      Maryia Kalesnikava
    </p>
  </nuxt-link>
</template>

<style src="./EmbroideryCard.scss" lang="scss" scoped></style>
