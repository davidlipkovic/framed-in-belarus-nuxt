<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
  options: {
    type: Array,
    default: null
  },
  placeholder: {
    type: String,
    default: null
  },
  isRegistration: {
    type: Boolean,
    default: false
  },
  enableScroll: {
    type: Boolean,
    default: false
  },
})

const model = defineModel()

const dropdown = ref(null)
const dropdownWrapper = ref(null)
const toggleDropdown = ref(false)

onClickOutside(dropdown, () => {
  toggleDropdown.value = false
})

const handleChooseOption = (option) => {
  model.value = option
  toggleDropdown.value = false
}

const scrollToOption = (event) => {
  const noSpecialChar = /^[^\d\s!@#$%^&*()+=[\]{};:'".,<>?`~_|\\]+$/;
  if (!noSpecialChar.test(event.key) || !toggleDropdown.value) {
    return
  }

  const match = props.options.find(option => option.toLowerCase().startsWith(event.key.toLowerCase()))
  if (match) {
    const firstMatch = dropdownWrapper.value.querySelector('.optionLink--' + simplifiedName(match))
    if (firstMatch) {
      firstMatch.scrollIntoView()
    }
  }
}

const simplifiedName = (name) => {
  const parts = name.split(/[ ,]/)
  return parts[0]
}

watch(toggleDropdown, (n) => {
  if (!n || !model.value || !props.enableScroll) {
    return
  }

  const match = props.options.find(option => option.startsWith(model.value))
  if (match) {
    nextTick(() => {
      const firstMatch = dropdownWrapper.value.querySelector('.optionLink--' + simplifiedName(match))
      if (firstMatch) {
        firstMatch.scrollIntoView()
      }
    })
  }
})

onMounted(() => {
  if (props.enableScroll) {
    addEventListener("keypress", scrollToOption)
  }
})

onUnmounted(() => {
  if (props.enableScroll) {
    removeEventListener("keypress", scrollToOption)
  }
})
</script>

<template>
  <div 
    class="dropdown longDropdown"
    :class="[
      toggleDropdown ? 'inputLongDropdownOpened' : 'inputLongDropdownClosed',
      {'inputLongDropdownRegistration' : isRegistration}
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
      ref="dropdownWrapper"
    >
      <li
        v-for="(option, i) in options"
        :key="i"
        :class="enableScroll ? 'optionLink--' + simplifiedName(option) : ''"
      >
        <button @click="handleChooseOption(option)">
          {{ option }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style src="./InputLongDropdown.scss" lang="scss"></style>
