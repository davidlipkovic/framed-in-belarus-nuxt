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

<style lang="scss" scoped>
@import "./assets/style/globalPartials/variables.scss";

.NotFound {
  * {
    text-align: center;
  }

  .notFoundIcon {
    font-family: 'Roboto';
    font-size: 64px;
    color: $grey;
  }

  .title {
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 400;
    margin-top: 6px;
    margin-bottom: 18px;
  }

  .description {
    margin-bottom: 20px;
  }
}
</style>
