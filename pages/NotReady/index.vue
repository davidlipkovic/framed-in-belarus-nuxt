<script setup>
definePageMeta({
  layout: "nopointer"
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
