<script setup>
import { onMounted, ref, watch } from 'vue'

const props = defineProps({
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

const model = defineModel()

const dropdown = ref(null)
const toggleDropdown = ref(false)

onClickOutside(dropdown, () => {
  toggleDropdown.value = false
})

const handleChooseOption = (option) => {
  model.value = option
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
      :class="{'dropdownButtonPlaceholder' : !model}"
      @click="toggleDropdown = !toggleDropdown"
    >
      {{ model ? model : placeholder }}
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
          {{ option }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style src="./inputShortDropdown.scss" lang="scss"></style>
