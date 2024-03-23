<script setup>
import { useRouter } from 'vue-router'

definePageMeta({
  layout: "clean"
})

const router = useRouter()

const goBack = () => {
  if (document.referrer.includes(window.location.origin)) {
    router.go(-1)
  } else {
    router.push('/')
  }
}
</script>

<template>
  <main class="Content flexColumnCenter">
    <div class="content NotFound flexColumnCenter">
      <span class="notFoundIcon">
        404
      </span>
      <h1 class="title">
        {{ $t('notFoundPage.title') }}
      </h1>
      <p class="description">
        {{ $t('notFoundPage.subTitle') }}
      </p>
      <div class="buttons flexRowCenter">
        <nuxt-link 
          class="button" 
          @click="goBack()"
        >
          {{ $t('notFoundPage.backButton') }}
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<style src="./NotFound.scss" lang="scss" scoped></style>
