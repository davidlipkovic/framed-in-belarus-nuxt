<script setup>
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
  currentPage: {
    type: Number
  },
  numberOfPages: {
    type: Number
  }
})

const showMenu = ref(null)

const currentPageMsg = computed(() => {
  return `${props.currentPage} ${t('embroidery.step1Page.of')} ${props.numberOfPages}`
})
</script>

<template>
  <div class="paginationWrapper flexRowCenter">
    <p class="paginationIndex">
      {{ currentPageMsg }}
    </p>
    <div class="paginationControlsWrapper flexRowCenter">
      <button
        @click="$emit('changePageIndexTo', 'first')"
        :class="{'button_disabled': currentPage === 1}"
      >
        <SvgStrongDoubleArrowLeft/>
      </button>
      <button
        @click="$emit('changePageIndexTo', -1)"
        :class="{'button_disabled': currentPage === 1}"
      >
        <SvgStrongArrowLeft/>
      </button>
      <button
        @click="$emit('changePageIndexTo', 1)"
        :class="{'button_disabled': currentPage === numberOfPages}"
      >
        <SvgStrongArrowRight/>
      </button>
      <button
        @click="$emit('changePageIndexTo', 'last')"
        :class="{'button_disabled': currentPage === numberOfPages}"
      >
        <SvgStrongDoubleArrowRight/>
      </button>
    </div>
  </div>
</template>

<style src="./Pagination.scss" lang="scss" scoped></style>
