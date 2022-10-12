<style src="./News.scss" lang="scss"></style>

<template>
  <main class="Content">
    <div class="Title">
      <h1 class="content">
        {{ $t('newsPageTitle') }}
      </h1>
    </div>
    <div class="Article content">
      <div class="section news">
        <img class="img" alt="THE LITTLE BIRD MUST BE CAUGHT" src="../../assets/media/img/news/the-little-bird-must-be-caught/title.jpg"/>
        <h2 class="title">
          {{ $t('newsPageArticle1Title') }}
        </h2>
        <div class="newslead">
          <p>
          {{ $t('newsPageArticle1Perex') }}
        </p>
        </div>
        <nuxt-link
          to="news/the-little-bird-must-be-caught"
          class="button"
        >
          {{ $t('moreBtnMsg') }}
        </nuxt-link>
      </div>
      <div class="section news">
        <img class="img" alt="STITCHED FREEDOM: “FRAMED IN BELARUS” PROJECT" src="../../assets/media/img/news/news.png"/>
        <h2 class="title long">
          {{ $t('newsPageArticle2Title') }}
        </h2>
        <div class="newslead">
          <p>
            {{ $t('newsPageArticle2Perex') }}
          </p>
          <p>
            {{ $t('newsPage1') }}
          </p>
        </div>
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
