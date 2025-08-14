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

const emit = defineEmits([
  'updatePageIndex',
])

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
        @click="$emit('updatePageIndex', 'first')"
        :class="{'button_disabledTransparent': currentPage === 1}"
      >
        <SvgStrongDoubleArrowLeft/>
      </button>
      <button
        @click="$emit('updatePageIndex', -1)"
        :class="{'button_disabledTransparent': currentPage === 1}"
      >
        <SvgStrongArrowLeft/>
      </button>
      <button
        @click="$emit('updatePageIndex', 1)"
        :class="{'button_disabledTransparent': currentPage === numberOfPages}"
      >
        <SvgStrongArrowRight/>
      </button>
      <button
        @click="$emit('updatePageIndex', 'last')"
        :class="{'button_disabledTransparent': currentPage === numberOfPages}"
      >
        <SvgStrongDoubleArrowRight/>
      </button>
    </div>
  </div>
</template>

<style src="./Pagination.scss" lang="scss" scoped></style>
