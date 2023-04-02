<script>
export default {
  head() {
    return {
      title: `#Framed in Belarus — News}`,
    }
  }
}
</script>

<template>
  <main class="Content">
    <div class="Title">
      <h1 class="content">
        {{ $t('newsPageTitle') }}
      </h1>
    </div>
    <div class="Article content">
      <div class="section news">
        <nuxt-link
          to="news/holidays-wish"
        >
          <img class="img" alt="Holiday's wish" src="../../assets/media/img/news/holidays-wish/title.jpg"/>
        </nuxt-link>
        <h2 class="title">
          Merry Christmas and a good, peaceful New Year
        </h2>
        <div class="newslead">
          <p>
            Dear fans and participants of the #FramedinBelarus project, We wish you a Merry Christmas and a good, peaceful New Year and fulfillment of your wishes!
        </p>
        </div>
        <nuxt-link
          to="news/holidays-wish"
          class="button"
        >
          {{ $t('moreBtnMsg') }}
        </nuxt-link>
      </div>
      <div class="section news">
        <nuxt-link
          to="news/the-little-bird-must-be-caught"
        >
          <img class="img" alt="The little bird must be caught" src="../../assets/media/img/news/the-little-bird-must-be-caught/title.jpg"/>
        </nuxt-link>
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
        <nuxt-link
          to="news/stitched-freedom-framed-in-belarus-project"
        >
          <img class="img" alt="Stitched freedom: “Framed in Belarus” project" src="../../assets/media/img/news/news.png"/>
        </nuxt-link>
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
