<script setup lang="ts">
</script>

<template>
  <Head>
    <Title>#Framed in Belarus — {{ $t('newsPageTitle') }}</Title>
    <Meta name="description" content="{{ $t('description') }}"/>
  </Head>
  <main class="Content">
    <div class="Title">
      <h1 class="content">
        {{ $t('newsPageTitle') }}
      </h1>
    </div>
    <div class="Article content">
      <div class="section news">
        <img class="img" alt="The little bird must be caught" src="../../assets/media/img/news/the-little-bird-must-be-caught/title.jpg"/>
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
        <img class="img" alt="Stitched freedom: “Framed in Belarus” project" src="../../assets/media/img/news/news.png"/>
        <h2 class="title">
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

<style src="./News.scss" lang="scss" scoped></style>
