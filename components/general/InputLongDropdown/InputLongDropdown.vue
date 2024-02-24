<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

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
  isRegistration: {
    type: Boolean,
    default: false
  },
})

const dropdown = ref(null)
const dropdownWrapper = ref(null)
const toggleDropdown = ref(false)

onClickOutside(dropdown, () => {
  toggleDropdown.value = false
})

const handleChooseOption = (option) => {
  emit('chooseOption', option)
  toggleDropdown.value = false
}

const scrollToOption = (event) => {
  const noSpecialChar = /^[^\d\s!@#$%^&*()+=[\]{};:'".,<>?`~_|\\]+$/;
  if (!noSpecialChar.test(event.key) || !toggleDropdown.value) {
    return
  }

  const match = props.options.find(option => option.name.toLowerCase().startsWith(event.key.toLowerCase()))
  if (match) {
    const firstMatch = dropdownWrapper.value.querySelector('.optionLink--' + match.name)
    if (firstMatch) {
      firstMatch.scrollIntoView()
    }
  }
}

const simplifiedName = (name) => {
  const parts = name.split(/[ ,]/)
  return parts[0]
}

watch(toggleDropdown, (n, o) => {
  if (n && props.chosenOption) {
    const match = props.options.find(option => option.name.startsWith(props.chosenOption))
    if (match) {
      nextTick(() => {
        const firstMatch = dropdownWrapper.value.querySelector('.optionLink--' + simplifiedName(match.name))
        if (firstMatch) {
          firstMatch.scrollIntoView()
        }
      })
    }
  }
})

onMounted(() => {
  addEventListener("keypress", scrollToOption)
})

onUnmounted(() => {
  removeEventListener("keypress", scrollToOption)
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
      :class="{'dropdownButtonPlaceholder' : !chosenOption}"
      @click="toggleDropdown = !toggleDropdown"
    >
      {{ chosenOption ? chosenOption : placeholder }}
      <SvgArrowDown/>
    </span>
    <ul 
      v-if="toggleDropdown"
      class="dropdownWrapper flexColumnStart"
      ref="dropdownWrapper"
    >
      <li
        v-for="option in options"
        :key="option.code"
        :class="'optionLink--' + simplifiedName(option.name)"
      >
        <button @click="handleChooseOption(option)">
          {{ option.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style src="./InputLongDropdown.scss" lang="scss"></style>
