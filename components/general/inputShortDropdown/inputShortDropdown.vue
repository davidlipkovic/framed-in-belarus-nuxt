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
  position: {
    type: String,
    default: 'Bottom'
  },
  isRegistration: {
    type: Boolean,
    default: false
  },
})

const dropdown = ref(null)
const toggleDropdown = ref(false)

onClickOutside(dropdown, () => {
  toggleDropdown.value = false
})

const handleChooseOption = (lang) => {
  emit('chooseOption', lang)
  toggleDropdown.value = false
}
</script>

<template>
  <div 
    class="dropdown shortDropdown"
    :class="[
      toggleDropdown ? 'inputShortDropdownOpened' : 'inputShortDropdownClosed',
      {'inputShortDropdownRegistration' : isRegistration}
    ]"
    ref="dropdown"
  >
    <span 
      class="dropdownButton flexRowCenter"
      :class="{'dropdownButtonPlaceholder' : !chosenOption}"
      @click="toggleDropdown = !toggleDropdown"
    >
      {{ chosenOption ? chosenOption : placeholder }}
      <SvgArrowDown/>
    </span>
    <ul 
      v-if="toggleDropdown"
      class="dropdownWrapper flexColumnStart"
      :class="'dropdownWrapper' + position"
    >
      <li
        v-for="(option, i) in options"
        :key="i"
      >
        <button @click="handleChooseOption(option)">
          {{ option.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style src="./inputShortDropdown.scss" lang="scss"></style>
