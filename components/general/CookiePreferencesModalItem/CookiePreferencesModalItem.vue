<script setup>
import { ref } from 'vue'

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})

const model = defineModel()
const toggleDesription = ref(false)
</script>

<template>
  <div class="cookiePreferencesModalItem flexColumnStart">
    <div class="flexRowCenter">
      <button 
        class="flexRowCenter"
        @click="toggleDesription = !toggleDesription"
      >
        <SvgPlus v-if="!toggleDesription"/>
        <SvgMinus v-else/>
      </button>
      <label for="cookiesInput">
        <slot name="label"/>
      </label>
      <input 
        type="checkbox" 
        id="cookiesInput"
        name="cookiesInput" 
        class="switcher"
        :disabled="disabled"
        v-model="model"
      >
    </div>
    <p 
      v-if="toggleDesription"
      class="description"
    >
      <slot name="description"/>
    </p>
  </div>
</template>

<style src="./CookiePreferencesModalItem.scss" lang="scss" scoped></style>
