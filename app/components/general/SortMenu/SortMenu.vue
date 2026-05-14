<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
  currentOrder: {
    type: String,
    default: 'Alphabetically'
  },
  enableChronological: {
    type: Boolean,
    default: false
  },
})

const emit = defineEmits([
  'checkForOrder',
])

const Alphabetically = t("inputs.Alphabetically")
const AlphabeticallyReversed = t("inputs.AlphabeticallyReversed")
const Chronologically = t("inputs.Chronologically")
const ChronologicallyReversed = t("inputs.ChronologicallyReversed")

const open = ref(false)

const updateSortMenuStatus = (orderValue) => {
  open.value = false
  emit('checkForOrder', orderValue)
}

const root = ref(null)
onClickOutside(root, () => {
  open.value = false
})
</script>

<template>
  <div
    class="sortMenuWrapper"
    :class="open ? 'sortMenuWrapperOpened' : 'sortMenuWrapperClosed'"
    ref="root"
  >
    <button
      class="sortMenuTitleWrapper flexRowStart"
      @click="open = !open"
    >
      <SvgSwap/>
      {{ !currentOrder ? $t('inputs.Alphabetically') : $t('inputs.' + currentOrder) }}
      <SvgArrowDown/>
    </button>
    <ul
      v-if="open"
      class="sortingWrapper flexColumnStart"
    >
      <li class="flexRowStart">
        <button
          class="capitalize flexRowStart"
          @click="updateSortMenuStatus(null)"
        >
          {{ Alphabetically }}
        </button>
      </li>
      <li class="flexRowStart">
        <button
          class="capitalize flexRowStart"
          @click="updateSortMenuStatus('AlphabeticallyReversed')"
        >
          {{ AlphabeticallyReversed }}
        </button>
      </li>
      <li 
        v-if="enableChronological"
        class="flexRowStart"
      >
        <button
          class="capitalize flexRowStart"
          @click="updateSortMenuStatus('Chronologically')"
        >
          {{ Chronologically }}
        </button>
      </li>
      <li 
        v-if="enableChronological"
        class="flexRowStart"
      >
        <button
          class="capitalize flexRowStart"
          @click="updateSortMenuStatus('ChronologicallyReversed')"
        >
          {{ ChronologicallyReversed }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style src="./SortMenu.scss" lang="scss"></style>
