<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { $dayjs } = useNuxtApp()
const { locale } = useI18n()

watch(locale, (newLocale) => {
  if (newLocale === 'bl') {
    $dayjs.locale('be')
  } else {
    $dayjs.locale(newLocale || 'en')
  }
}, { immediate: true })
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
