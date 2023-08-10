<script setup>
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { useTagsMenu } from "@/composables/TagsMenu";
const { currentTagIndex, root } = useTagsMenu();

const props = defineProps({
  menuStatus: {
    type: Boolean,
    default: false
  },
})

const emit = defineEmits([
  'checkForStatus',
  'closeSortMenu',
])

const alphabetically = t("inputs.alphabetically")
const alphabeticallyReversed = t("inputs.alphabeticallyReversed")
const chronologically = t("inputs.chronologically")
const chronologicallyReversed = t("inputs.chronologicallyReversed")

const current = ref(null)

const updateTagsMenuStatus = () => {
  emit('checkForStatus')
}

onClickOutside(root, () => {
  emit('closeSortMenu')
})

onMounted(() => {
  current.value = alphabetically
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
      Sort by: {{ current }}
      <SvgArrowDown/>
    </button>
    <ul
      v-if="menuStatus"
      class="sortingWrapper flexColumnStart"
    >
      <li class="flexRowStart">
        <button
          class="capitalize flexRowStart"
          @click="updateTagsMenuStatus()"
        >
          {{ alphabetically }}
        </button>
      </li>
      <li class="flexRowStart">
        <button
          class="capitalize flexRowStart"
          @click="updateTagsMenuStatus()"
        >
          {{ alphabeticallyReversed }}
        </button>
      </li>
      <li class="flexRowStart">
        <button
          class="capitalize flexRowStart"
          @click="updateTagsMenuStatus()"
        >
          {{ chronologically }}
        </button>
      </li>
      <li class="flexRowStart">
        <button
          class="capitalize flexRowStart"
          @click="updateTagsMenuStatus()"
        >
          {{ chronologicallyReversed }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style src="./SortMenu.scss" lang="scss"></style>
