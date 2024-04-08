<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
  currentOrder: {
    type: String,
    default: 'Alphabetically'
  },
  menuStatus: {
    type: Boolean,
    default: false
  },
})

const emit = defineEmits([
  'checkForOrder',
  'checkForStatus',
  'closeSortMenu',
])

const Alphabetically = t("inputs.Alphabetically")
const AlphabeticallyReversed = t("inputs.AlphabeticallyReversed")
const Chronologically = t("inputs.Chronologically")
const ChronologicallyReversed = t("inputs.ChronologicallyReversed")

const updateSortMenuOrder = (orderValue) => {
}

const updateTagsMenuStatus = (orderValue) => {
  emit('checkForStatus')
  if (orderValue) {
    emit('checkForOrder', orderValue)
  }
}

const root = ref(null)
onClickOutside(root, () => {
  emit('closeSortMenu')
})
</script>

<template>
  <div
    class="sortMenuWrapper"
    :class="menuStatus ? 'sortMenuWrapperOpened' : 'sortMenuWrapperClosed'"
    ref="root"
  >
    <button
      class="sortMenuTitleWrapper flexRowStart"
      @click="updateTagsMenuStatus()"
    >
      <SvgSwap/>
      {{ $t('inputs.' + currentOrder) }}
      <SvgArrowDown/>
    </button>
    <ul
      v-if="menuStatus"
      class="sortingWrapper flexColumnStart"
    >
      <li class="flexRowStart">
        <button
          class="capitalize flexRowStart"
          @click="updateTagsMenuStatus('Alphabetically')"
        >
          {{ Alphabetically }}
        </button>
      </li>
      <li class="flexRowStart">
        <button
          class="capitalize flexRowStart"
          @click="updateTagsMenuStatus('AlphabeticallyReversed')"
        >
          {{ AlphabeticallyReversed }}
        </button>
      </li>
      <li class="flexRowStart">
        <button
          class="capitalize flexRowStart"
          @click="updateTagsMenuStatus('Chronologically')"
        >
          {{ Chronologically }}
        </button>
      </li>
      <li class="flexRowStart">
        <button
          class="capitalize flexRowStart"
          @click="updateTagsMenuStatus('ChronologicallyReversed')"
        >
          {{ ChronologicallyReversed }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style src="./SortMenu.scss" lang="scss"></style>
