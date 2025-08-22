<script setup>
import { ref } from "vue"
import { useCurrentLocale } from "@/composables/CurrentLocale"

const { getCurrentLocaleStringValue } = useCurrentLocale()

const props = defineProps({
  currentTag: {
    type: [String, Object],
    default: null
  },
  type: String,
  tags: {
    type: Array,
    default: null
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
  emit('checkForTag', props.type.charAt(0), tagValue)
}

const openMenu = () => {
  open.value = !open.value

  if (!open.value) {
    showSubTags.value = false
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
      class="tagsMenuTitleWrapper flexRowStart"
      @click="openMenu()"
    >
      <span>
        {{ $t("inputs.tags." + type + ".type") }}:
      </span>
      <span v-if="typeof currentTag === 'object' && currentTag !== null">
        {{ currentTag.translation }}
      </span>
      <span v-else-if="currentTag === null">
        {{ $t("inputs.tags." + type + ".all") }}
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
          class="flexRowStart"
          @click="tag === 'group' ? showSubTags = true : updateTagsMenuStatus(tag)"
        >
          {{ !tag ? $t("inputs.tags." + type + ".all") : $t("inputs.tags." + type + "." + tag) }}
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
              class="flexRowStart"
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
