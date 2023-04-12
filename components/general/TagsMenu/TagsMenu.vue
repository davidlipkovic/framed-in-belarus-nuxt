<script setup>
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps({
  type: String,
  tags: {
    type: Array,
    default: ['all']
  },
})

const showMenu = ref(false)
const showSubTags = ref(false)
const currentTagIndex = ref(0)

watch(showMenu, (n) => {
  if (!n) {
    showSubTags.value = false
  }
})
</script>

<template>
  <div
    class="tagsMenuWrapper"
    :class="showMenu ? 'tagsMenuWrapperOpened' : 'tagsMenuWrapperClosed'"
  >
    <button
      class="tagsMenuTitleWrapper capitalize flexRowStart"
      @click="showMenu = !showMenu"
    >
      <span>
        {{ type }}:
      </span>
      <span>
        {{ tags[currentTagIndex].tagName }}
      </span>
      <SvgArrowDown />
    </button>
    <ul
      v-if="showMenu"
      class="tagsWrapper flexColumnStart"
    >
      <li
        v-for="(tag, i) in tags" 
        :key="tag.tagName"
        class="flexRowStart"
      >
        <button
          v-if="!tag.tags"
          class="capitalize flexRowStart"
          @click="currentTagIndex = i"
        >
          {{ tag.tagName }}
        </button>
        <button
          v-if="tag.tags"
          class="capitalize flexRowStart"
          @click="currentTagIndex = i, showSubTags = !showSubTags"
        >
          {{ tag.tagName }}
          <SvgArrowRightRounded />
        </button>
        <ul
          v-if="tag.tags && showSubTags"
          class="subTagsWrapper flexColumnStart"
        >
          <li
            v-for="subTag in tag.tags" 
            :key="subTag"
            class="flexRowStart"
          >
            <button
              class="capitalize flexRowStart"
            >
              {{ subTag }}
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style src="./TagsMenu.scss" lang="scss"></style>
