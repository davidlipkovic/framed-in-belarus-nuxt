<style src="../Article.scss" lang="scss"></style>
<style src="../News.scss" lang="scss" scoped></style>

<template>
  <main class="Content">
    <article>
      <div class="Title">
        <div class="content">
          <h1 class="content News">The little bird must be caught</h1>
          <nuxt-link
            to="/News"
            class="GoBack">
            <img src="../../../assets/media/img/arrow_back.svg" alt="{{ $t('GoToNews') }}" class="GoBack-img">
            <span class="GoBack-text">{{ $t('GoToNews') }}</span>            
          </nuxt-link>
        </div>
      </div>
      <div class="content News">
        <p class="b">SURVIVAL KIT 13 / PILS 23, RIGA / 2.9.-16.10.2022</p>
        <p>{{ $t('newsTheLittleBirdP1') }}</p>
        <p>{{ $t('newsTheLittleBirdP2') }}<strong class="b">{{ $t('newsPageArticle1Title') }}</strong>{{ $t('newsTheLittleBirdP3') }} <strong class="b">{{ $t('newsTheLittleBirdP4') }}</strong>{{ $t('newsTheLittleBirdP5') }}<strong class="b">{{ $t('newsTheLittleBirdP6') }}</strong>. </p>
        <p>{{ $t('newsTheLittleBirdP7') }}</p>
        <p>{{ $t('newsTheLittleBirdP8') }}</p>
        <a href="../../../assets/media/img/news/the-little-bird-must-be-caught/big.jpg" target="_blank" class="popUp"><img class="img big" alt="Photo credit: Kristīne Madjare / Latvian Centre for Contemporary Art" src="../../../assets/media/img/news/the-little-bird-must-be-caught/big_preview.jpg"></a>
        <p>Photo credit: Kristīne Madjare / Latvian Centre for Contemporary Art</p>
        <p>{{ $t('stringReadMore') }}:  <a href="https://lcca.lv/en/survival-kit/">lcca.lv</a> / <a href="https://www.facebook.com/survivalkit.lv">Facebook</a> / <a href="https://www.instagram.com/latviancentre4contemporaryart">Instagram</a></p>
        <div class="images">
          <div
            v-for="(imageModal, index) in imageModals"
            class="modalWrapper"
          >
            <button
              @click="imageModal.show = true"
              class="popUp"
            >
              <img
                class="img"
                :alt="`${imageModal.alt}`"
                :src="`../../../assets/media/img/news/the-little-bird-must-be-caught/${index + 1}_preview.jpg`"
              >
            </button>
            <vue-final-modal
              v-model="imageModal.show"
              @click-outside="imageModal.show = false"
              :classes="`modal1`"
            >
              <button
                @click="imageModal.show = false"
              >
                close
              </button>
              <img
                class="img"
                :alt="`${imageModal.alt}`"
                :src="`../../../assets/media/img/news/the-little-bird-must-be-caught/${index + 1}.jpg`"
              >
            </vue-final-modal>
          </div>
        </div>
        <p>Photo credit: Sergei Shabohin</p>
      </div>
    </article>
  </main>
</template>

<script>
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'

export default {
  components: {
    VueFinalModal,
    ModalsContainer
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
