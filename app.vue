<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import useUserStore from "@/stores/user"

const { $dayjs } = useNuxtApp()
const { locale } = useI18n()
const userStore = useUserStore()

const channel = new BroadcastChannel("user-session-channel")
channel.addEventListener("message", (event) => {
  if (event.data === "signOut" && userStore.user) {
    userStore.signOut()
    reloadNuxtApp()
  }

  channel.close()
})

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
