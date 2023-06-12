<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const showMenu = ref(false)

const current = ref(null)

const alphabetically = t("inputs.alphabetically")
const alphabeticallyReversed = t("inputs.alphabeticallyReversed")
const chronologically = t("inputs.chronologically")
const chronologicallyReversed = t("inputs.chronologicallyReversed")

onMounted(() => {
  current.value = alphabetically
})
</script>

<template>
  <div
    class="sortMenuWrapper"
    :class="showMenu ? 'sortMenuWrapperOpened' : 'sortMenuWrapperClosed'"
  >
    <button
      class="sortMenuTitleWrapper flexRowStart"
      @click="showMenu = !showMenu"
    >
      <SvgSwap/>
      Sort by: {{ current }}
      <SvgArrowDown/>
    </button>
    <ul
      v-if="showMenu"
      class="sortingWrapper flexColumnStart"
    >
      <li class="flexRowStart">
        <button
          class="capitalize flexRowStart"
        >
          {{ alphabetically }}
        </button>
      </li>
      <li class="flexRowStart">
        <button
          class="capitalize flexRowStart"
        >
          {{ alphabeticallyReversed }}
        </button>
      </li>
      <li class="flexRowStart">
        <button
          class="capitalize flexRowStart"
        >
          {{ chronologically }}
        </button>
      </li>
      <li class="flexRowStart">
        <button
          class="capitalize flexRowStart"
        >
          {{ chronologicallyReversed }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style src="./SortMenu.scss" lang="scss"></style>
