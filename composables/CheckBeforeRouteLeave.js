import { ref } from "vue";
import { onBeforeRouteLeave } from 'vue-router'

export function useCheckBeforeRouteLeave() {
  const checkbox = ref(null)
  const showWarning = ref(false)

  const handleWarning = () => {
    showWarning.value = !checkbox.value.checked
  }

  onBeforeRouteLeave(() => {
    if (!checkbox.value.checked) {
      showWarning.value = true
      return false
    }
  })

  return {
    checkbox,
    handleWarning,
    showWarning,
  };
}