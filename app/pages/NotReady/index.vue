<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

definePageMeta({
  layout: "nopointer"
})

useHead({
  title: t('notReadyPage.title'),
  meta: [
    { property: 'og:title', content: t('notReadyPage.title'), },
    { name: 'robots', content: 'noindex' }
  ],
})
</script>

<template>
  <main class="Content flexColumnCenter">
    <div class="content NotReady flexColumnCenter">
      <SvgMistake/>
      <h1 class="title">
        {{ $t('notReadyPage.title') }}
      </h1>
      <p class="description">
        {{ $t('notReadyPage.subTitle') }}
      </p>
    </div>
  </main>
</template>

<style src="./NotReady.scss" lang="scss" scoped></style>
