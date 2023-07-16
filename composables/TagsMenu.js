import { computed, defineEmits, onMounted, ref, watch } from "vue";

export function useTagsMenu() {
  const currentTagIndex = ref(0)

  const root = ref(null)

  return {
    currentTagIndex,
    root,
  };
}