<script setup>
import { onMounted, ref, watch } from 'vue'

const emit = defineEmits([
  'chooseOption',
])

const props = defineProps({
  chosenOption: {
    type: String,
    default: null
  },
  options: {
    type: Array,
    default: null
  },
  placeholder: {
    type: String,
    default: null
  },
})

const InputDropdownMenu = ref(null)
const toggleInputDropdownMenu = ref(false)

onClickOutside(InputDropdownMenu, () => {
  toggleInputDropdownMenu.value = false
})

const handleChooseLanguage = (lang) => {
  emit('chooseOption', lang)
  toggleInputDropdownMenu.value = false
}
</script>

<template>
  <div 
    class="InputDropdownMenu"
    :class="toggleInputDropdownMenu ? 'InputDropdownMenuOpened' : 'InputDropdownMenuClosed'"
    ref="InputDropdownMenu"
  >
    <span 
      class="langButton flexRowCenter"
      :class="{'langButtonPlaceholder' : !props.chosenOption}"
      @click="toggleInputDropdownMenu = !toggleInputDropdownMenu"
    >
      {{ props.chosenOption ? props.chosenOption : props.placeholder }}
      <SvgArrowDown/>
    </span>
    <ul 
      v-if="toggleInputDropdownMenu"
      class="InputDropdownMenuWrapper flexColumnStart"
    >
      <li
        v-for="(option, i) in options"
        :key="i"
      >
        <button @click="handleChooseLanguage(option)">
          {{ option.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style src="./InputDropdownMenu.scss" lang="scss"></style>
