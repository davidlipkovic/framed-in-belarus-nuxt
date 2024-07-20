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
        <slot name="label">
          Performance Cookies
        </slot>
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
      <slot name="description">
        These cookies allow us to count visits and traffic sources to our website so that we can measure and improve its performance. They help us to identify which parts of our website are the most or least popular, and also allow us to track how visitors move around the site. Any information collected by these cookies is aggregated and therefore anonymous. If you do not allow these cookies, we will not have information about the use of our site.
      </slot>
    </p>
  </div>
</template>

<style src="./CookiePreferencesModalItem.scss" lang="scss" scoped></style>
