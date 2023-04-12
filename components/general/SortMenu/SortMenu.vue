<script setup>
import { ref } from 'vue'

const showMenu = ref(false)
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
        Sort by
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
          A-Z
        </button>
      </li>
      <li class="flexRowStart">
        <button
          class="capitalize flexRowStart"
        >
          Z-A
        </button>
      </li>
      <li class="flexRowStart">
        <button
          class="capitalize flexRowStart"
        >
          Date (newest first)
        </button>
      </li>
      <li class="flexRowStart">
        <button
          class="capitalize flexRowStart"
        >
          Date (oldest first)
        </button>
      </li>
    </ul>
  </div>
</template>

<style src="./SortMenu.scss" lang="scss"></style>
