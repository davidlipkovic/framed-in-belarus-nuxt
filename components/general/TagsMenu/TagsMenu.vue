<script setup>
import { computed, onMounted, ref, watch } from "vue";
const clickOutside = onClickOutside()
import { useTagsMenu } from "@/composables/TagsMenu";
const { currentTagIndex, root } = useTagsMenu();

const props = defineProps({
  isGallery: {
    type: Boolean,
    default: false
  },
  menuStatus: {
    type: Boolean,
    default: false
  },
  type: String,
  tags: {
    type: Array,
    default: ['all']
  },
})

const emit = defineEmits([
  'checkForStatus',
  'closeTagsMenu',
])

const showSubTags = ref(false)

const updateTagsMenuStatus = () => {
  emit('checkForStatus')
}

onClickOutside(root, () => {
  emit('closeTagsMenu')
})
</script>

<template>
  <div
    class="tagsMenuWrapper"
    :class="{'tagsMenuWrapperOpened': menuStatus, 'tagsMenuWrapperClosed': !menuStatus, 'tagsMenusGalleryWrapper': isGallery}"
    ref="root"
  >
    <button
      class="tagsMenuTitleWrapper capitalize flexRowStart"
      @click="updateTagsMenuStatus()"
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
      v-if="menuStatus"
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
          @click="currentTagIndex = i, updateTagsMenuStatus()"
        >
          {{ tag.tagName }}
        </button>
        <button
          v-if="tag.tags"
          class="capitalize flexRowStart"
          @click="currentTagIndex = i, showSubTags = !showSubTags, updateTagsMenuStatus()"
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
