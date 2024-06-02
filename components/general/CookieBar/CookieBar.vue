<script setup>
import { onMounted, ref, watch } from 'vue'
import useCookiesStore from "@/stores/cookies"

const cookiesStore = useCookiesStore()
</script>

<template>
  <div 
    v-if="!cookiesStore.isChecked"
    class="cookieBarWrapper flexRowStart"
  >
    <div class="content flexRowStart">
      <p>
        {{ $t('cookies') }}
      </p>
      <div>
        <button 
          class="button"
          @click="cookiesStore.isChecked = true"
        >
          {{ $t('buttons.accept') }}
        </button>
        <button 
          class="button"
          @click="cookiesStore.isChecked = true"
        >
          {{ $t('buttons.decline') }}
        </button>
        <button 
          class="button"
          @click="cookiesStore.isChecked = true"
        >
          {{ $t('buttons.manage') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style src="./CookieBar.scss" lang="scss" scoped></style>
