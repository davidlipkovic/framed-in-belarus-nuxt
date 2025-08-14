<script setup>
import { ref } from "vue"
import { useCurrentLocale } from "@/composables/CurrentLocale"

const { getCurrentLocaleStringValue } = useCurrentLocale()

const props = defineProps({
  currentTag: {
    type: [String, Object],
    default: 'All'
  },
  type: String,
  tags: {
    type: Array,
    default: ['All']
  },
  groupCases: {
    type: Array,
    default: null
  },
})

const emit = defineEmits([
  'checkForTag',
])

const root = ref(null)
const open = ref(false)
const showSubTags = ref(false)

const updateTagsMenuStatus = (tagValue) => {
  open.value = false
  if (tagValue) {
    emit('checkForTag', props.type, tagValue)
  }
}

onClickOutside(root, () => {
  open.value = false
  showSubTags.value = false
})
</script>

<template>
  <div
    class="tagsMenuWrapper"
    :class="{'tagsMenuWrapperOpened': open, 'tagsMenuWrapperClosed': !open}"
    ref="root"
  >
    <button
      class="tagsMenuTitleWrapper capitalize flexRowStart"
      @click="open = true"
    >
      <span>
        {{ $t("inputs.tags." + type + ".type") }}:
      </span>
      <span v-if="typeof currentTag === 'object' && currentTag !== null">
        {{ currentTag.translation }}
      </span>
      <span v-else>
        {{ $t("inputs.tags." + type + "." + currentTag) }}
      </span>
      <SvgArrowDown />
    </button>
    <ul
      v-if="open"
      class="tagsWrapper flexColumnStart"
    >
      <li
        v-for="tag in tags" 
        :key="tag"
        class="flexRowStart"
      >
        <button
          class="capitalize flexRowStart"
          @click="tag === 'group' ? showSubTags = true : updateTagsMenuStatus(tag)"
        >
          {{ $t("inputs.tags." + type + "." + tag) }}
          <SvgArrowRightRounded v-if="tag === 'group'"/>
        </button>
        <ul
          v-if="showSubTags"
          class="subTagsWrapper flexColumnStart"
        >
          <li
            v-for="groupCase in groupCases" 
            :key="groupCase.id"
            class="flexRowStart"
          >
            <button
              @click="updateTagsMenuStatus(groupCase.id); showSubTags = false"
              class="capitalize flexRowStart"
            >
              {{ getCurrentLocaleStringValue(groupCase, 'caseName_') }}
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style src="./TagsMenu.scss" lang="scss"></style>
