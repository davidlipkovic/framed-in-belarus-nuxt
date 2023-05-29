<script setup>
import { computed, onMounted, ref } from 'vue'

const showMenu = ref(null)
const numberOfRows = ref(null)
const rowsPerPage = 10

const currentPage = computed(() => {
  return "1-5 of 5"
})
</script>

<template>
  <div class="paginationWrapper flexRowCenter">
    <p class="paginationWrapper__name">
      Rows per page
    </p>
    <div
      class="rowOptionsMenuWrapper"
      :class="showMenu ? 'rowOptionsMenuWrapperOpened' : 'rowOptionsMenuWrapperClosed'"
    >
      <button
        class="rowOptionsMenuTitleWrapper capitalize flexRowStart"
        @click="showMenu = !showMenu"
      >
        <span>
          1
        </span>
        <SvgArrowDown />
      </button>
      <ul
        v-if="showMenu"
        class="tagsWrapper flexColumnStart"
      >
        <li
          v-for="(row, i) in rowsPerPage" 
          :key="i"
          class="flexRowStart"
        >
          <button
            class="capitalize flexRowStart"
            @click="numberOfRows = i"
          >
            {{ row }}
          </button>
        </li>
      </ul>
    </div>
    <p class="paginationWrapper__index">
      {{ currentPage }}
    </p>
    <div class="paginationWrapper__controls flexRowCenter">
      <button
        @click="$emit('changePageIndexTo', 'first')"
      >
        <SvgStrongDoubleArrowLeft/>
      </button>
      <button
        @click="$emit('changePageIndexTo', -1)"
      >
        <SvgStrongArrowLeft/>
      </button>
      <button
        @click="$emit('changePageIndexTo', 1)"
      >
        <SvgStrongArrowRight/>
      </button>
      <button
        @click="$emit('changePageIndexTo', 'last')"
      >
        <SvgStrongDoubleArrowRight/>
      </button>
    </div>
  </div>
</template>

<style src="./Pagination.scss" lang="scss"></style>
