<script setup>
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps({
  newEmbroidery: {
    type: Boolean,
    default: true
  },
  status: {
    type: Object,
    default: {
      type: '',
      message: ''
    }
  },
})
</script>

<template>
  <nuxt-link
    v-if="newEmbroidery"
    to="/Embroidery/Step-1-choose-hero"
    class="embroideryCard embroideryCard_new flexColumnCenter"
    :class="''"
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
    to="/Gallery/Case"
    class="embroideryCard flexColumnCenter"
  >
    <img 
      src="../../../assets/media/img/case1/prisoner.jpg" 
      alt="Name Surname" 
      class="embroideryCard-img"
    >
    <p class="embroideryCard-name">
      Maryia Kalesnikava
    </p>
    <span
      class="embroideryCard-status"
      :class="'embroideryCard-status_' + status.type"
    >
      {{ status.message }}
    </span>
  </nuxt-link>
</template>

<style src="./EmbroideryCard.scss" lang="scss" scoped></style>
