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
        {{ $t('newsPage.title') }}
      </h1>
    </div>
    <div class="Article content">
      <div class="section news">
        <nuxt-link
          to="News/holidays-wish"
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
          to="News/holidays-wish"
          class="button"
        >
          {{ $t('buttons.readMore') }}
        </nuxt-link>
      </div>
      <div class="section news">
        <nuxt-link
          to="News/the-little-bird-must-be-caught"
        >
          <img class="img" alt="The little bird must be caught" src="../../assets/media/img/news/the-little-bird-must-be-caught/title.jpg"/>
        </nuxt-link>
        <h2 class="title">
          The little bird must be caught
        </h2>
        <div class="newslead">
          <p>
            The group exhibition "The little bird must be caught" presents a part of the project #FramedinBelarus on the 13th edition of the international contemporary art festival Survival Kit, which takes place inside an old bank building, in the heart of Dome Square (Pils iela 23, Riga) from 3rd of September to the 16th of October.
          </p>
        </div>
        <nuxt-link
          to="News/the-little-bird-must-be-caught"
          class="button"
        >
          {{ $t('buttons.readMore') }}
        </nuxt-link>
      </div>
      <div class="section news">
        <nuxt-link
          to="News/stitched-freedom-framed-in-belarus-project"
        >
          <img class="img" alt="Stitched freedom: “Framed in Belarus” project" src="../../assets/media/img/news/news.png"/>
        </nuxt-link>
        <h2 class="title">
          Stitched freedom: “Framed in Belarus” project
        </h2>
        <div class="newslead">
          <p>
            Stitchit art group is going to lead a workshop in Riga.
          </p>
          <p>
            On the 1st and 2nd of October at 2 pm EET you are invited to participate in a stitching workshop "Stitched Freedom: ‘Framed in Belarus’ project" led by art...
          </p>
        </div>
        <nuxt-link
          to="News/stitched-freedom-framed-in-belarus-project"
          class="button"
        >
          {{ $t('buttons.readMore') }}
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<style src="./News.scss" lang="scss" scoped></style>
