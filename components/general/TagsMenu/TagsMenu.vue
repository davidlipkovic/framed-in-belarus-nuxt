<script setup>
import { computed, onMounted, ref, watch } from "vue";

const props = defineProps({
  currentTag: {
    type: String,
    default: 'All'
  },
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
    default: ['All']
  },
})

const emit = defineEmits([
  'checkForTag',
  'checkForStatus',
  'closeTagsMenu',
])

const showSubTags = ref(false)

const updateTagsMenuStatus = (tagValue) => {
  emit('checkForStatus')
  if (tagValue) {
    emit('checkForTag', props.type, tagValue)
  }
}

const root = ref(null)
onClickOutside(root, () => {
  emit('closeTagsMenu')
})

const checkTag = (tag) => {
  return typeof tag !== 'object'
}
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
        {{ $t("inputs.tags." + type + ".type") }}:
      </span>
      <span>
        {{ $t("inputs.tags." + type + "." + currentTag) }}
      </span>
      <SvgArrowDown />
    </button>
    <ul
      v-if="menuStatus"
      class="tagsWrapper flexColumnStart"
    >
      <li
        v-for="tag in tags" 
        :key="tag"
        class="flexRowStart"
      >
        <button
          v-if="checkTag(tag)"
          class="capitalize flexRowStart"
          @click="updateTagsMenuStatus(tag)"
        >
          {{ $t("inputs.tags." + type + "." + tag) }}
        </button>
        <template v-else>
          <button
            class="capitalize flexRowStart"
            @click="showSubTags = true"
          >
            {{ $t("inputs.tags." + type + ".group") }}
            <SvgArrowRightRounded />
          </button>
          <ul
            v-if="showSubTags"
            class="subTagsWrapper flexColumnStart"
          >
            <li
              v-for="subTag in tag" 
              :key="subTag"
              class="flexRowStart"
            >
              <button
                @click="updateTagsMenuStatus(); showSubTags = false"
                class="capitalize flexRowStart"
              >
                {{ subTag }}
              </button>
            </li>
            <li
              v-for="subTag in tag" 
              :key="subTag"
              class="flexRowStart"
            >
              <button
                @click="updateTagsMenuStatus(); showSubTags = false"
                class="capitalize flexRowStart"
              >
                {{ subTag }}
              </button>
            </li>
          </ul>
        </template>
      </li>
    </ul>
  </div>
</template>

<style src="./TagsMenu.scss" lang="scss"></style>
