<style src="./News.scss" lang="scss"></style>

<template>
  <main class="Content">
    <h1 class="title Title">
      <span class="content">
        {{ $t('newsPageTitle') }}
      </span>
    </h1>
    <div class="Article content">
      <div class="section news">
        <img class="img" alt="THE LITTLE BIRD MUST BE CAUGHT" src="../../assets/media/img/the-little-bird-must-be-caught.jpg"/>
        <h2 class="title">
          {{ $t('newsPageArticle1Title') }}
        </h2>
        <p>
          {{ $t('newsPageArticle1Perex') }}
        </p>
        <nuxt-link
          to="news/the-little-bird-must-be-caught"
          class="button"
        >
          {{ $t('moreBtnMsg') }}
        </nuxt-link>
      </div>
      <div class="section news">
        <img class="img" alt="STITCHED FREEDOM: “FRAMED IN BELARUS” PROJECT" src="../../assets/media/img/news.png"/>
        <h2 class="title">
          {{ $t('newsPageArticle2Title') }}
        </h2>
        <p>
          {{ $t('newsPageArticle2Perex') }}
        </p>
        <p>
          {{ $t('newsPage1') }}
        </p>
        <nuxt-link
          to="news/stitched-freedom-framed-in-belarus-project"
          class="button"
        >
          {{ $t('moreBtnMsg') }}
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
}
</script>
