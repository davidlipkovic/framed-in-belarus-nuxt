<script>
export default {
  head() {
    return {
      title: `#Framed in Belarus — The little bird must be caught`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The international contemporary art festival Survival Kit is one of the largest contemporary art events in the Baltics, taking place in Rīga annually. It was started in 2009 as a reaction towards the global economic crisis, calling for a consideration of various survival strategies within the changeable world of today. Every year, the festival is dedicated to a new and significant social topic. Abandoned Riga buildings are often used to hold festival events in order to draw attention to their future potential for development.'
        }
      ]
    }
  },
  data() {
    return {
      showModal: false,
      activeModalIndex: null,
      imageModals: [
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        }
      ]
    }
  }
}
</script>

<template>
  <main class="Content">
    <article>
      <div class="Title">
        <div class="content">
          <h1 class="content News">The little bird must be caught</h1>
        </div>
      </div>
      <div class="content News">
        <p class="b">SURVIVAL KIT 13 / PILS 23, RIGA / 2.9.-16.10.2022</p>
        <p>{{ $t('newsTheLittleBirdP1') }}</p>
        <p>{{ $t('newsTheLittleBirdP2') }}<strong class="b">{{ $t('newsPageArticle1Title') }}</strong>{{ $t('newsTheLittleBirdP3') }} <strong class="b">{{ $t('newsTheLittleBirdP4') }}</strong>{{ $t('newsTheLittleBirdP5') }}<strong class="b">{{ $t('newsTheLittleBirdP6') }}</strong>. </p>
        <p>{{ $t('newsTheLittleBirdP7') }}</p>
        <p>{{ $t('newsTheLittleBirdP8') }}</p>
        <GeneralCarousel/>
        <p>{{ $t('stringReadMore') }}:  <a href="https://lcca.lv/en/survival-kit/" target="_blank">lcca.lv</a> / <a href="https://www.facebook.com/survivalkit.lv" target="_blank">Facebook</a> / <a href="https://www.instagram.com/latviancentre4contemporaryart" target="_blank">Instagram</a></p>
        <!-- <p>Photo credit: Sergei Shabohin</p> -->
      </div>
    </article>
  </main>
</template>

<style src="../Article.scss" lang="scss"></style>
<style src="../News.scss" lang="scss" scoped></style>
