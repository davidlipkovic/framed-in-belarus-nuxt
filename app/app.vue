<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import useUserStore from "@/stores/user"

const { $dayjs } = useNuxtApp()
const { locale, t } = useI18n()
const userStore = useUserStore()

const channel = new BroadcastChannel("user-local-channel")
channel.addEventListener("message", (event) => {
  if (event.data === "signOut" && userStore.user) {
    userStore.signOut()
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

const i18nHead = useLocaleHead({
  addSeoAttributes: true,       // adds canonical + hreflang alternates
  addOgLocaleAlternate: true,   // adds og:locale and og:locale:alternate
})

useHead(() => ({
  title: t('title'),
  htmlAttrs: {...i18nHead.value.htmlAttrs},
  link: [...(i18nHead.value.link || [])],
  meta: [
    { name: 'description', content: t('meta.description') },
    { name: 'keywords', content: t('meta.keywords') },
    { property: 'og:title', content: t('title') },
    { property: 'og:site_name', content: t('title') },
    { property: 'og:description', content: t('meta.ogDescription') },
    ...(i18nHead.value.meta || []),
  ]
}))
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
