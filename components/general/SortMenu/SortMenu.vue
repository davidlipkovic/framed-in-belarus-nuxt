<script setup>
import { onMounted, ref } from 'vue'

const showMenu = ref(false)

const current = ref(null)

const alphabetically = 'A-Z'
const alphabeticallyReversed = 'Z-A'
const chronologically = 'Date (newest first)'
const chronologicallyReversed = 'Date (oldest first)'

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
