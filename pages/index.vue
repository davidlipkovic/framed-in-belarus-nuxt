<script setup>
import { computed, onMounted, reactive, ref, watch } from "vue"
import useHeroesStore from "@/stores/heroes"
import useUserStore from "@/stores/user"

const heroesStore = useHeroesStore()
const userStore = useUserStore()

definePageMeta({
  layout: "nopointer",
  middleware: [
    'auth-general',
    'heroes',
  ],
})

const numberOfHeroes = computed(() => {
  if (!heroesStore.loading && heroesStore.originalHeroes) {
    return heroesStore.originalHeroes.length
  }
  return 4100
})
</script>

<template>
  <main class="Content FirstPage">
    <section class="content">
      <div class="ProjectDescr">
        <h1 class="title mainLogoWrapper">
          <svg
            width="33"
            height="39"
            viewBox="0 0 33 39"
            class="firstSymbol"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.78 13.52L3.14 10.04H10.46L12.2 0.259999H15.8L14.06 10.04H22.58L24.32 0.259999H27.92L26.18 10.04H32.6L32.24 13.52H25.58L23.78 23.78H30.2L29.84 27.26H23.18L21.26 38.36H17.66L19.58 27.26H11.06L9.14 38.36H5.54L7.46 27.26H0.38L0.74 23.78H8.06L9.86 13.52H2.78ZM13.46 13.52L11.66 23.78H20.18L21.98 13.52H13.46Z"
            />
          </svg>
          <span class="text">
            {{ $t("title") }}
          </span>
        </h1>
        <p class="subtitle">
          {{ $t('homePage.description') }}
        </p>
        <div class="flexRowStart">
          <a
            v-if="!userStore.user"
            href="https://forms.gle/SKCcvWGzRkQxx2fH9"
            target="_blank"
            class="button bg_red"
          >
            {{ $t('links.participate') }}
          </a>
          <a
            href="https://donorbox.org/framedinbelarus"
            class="supportButton button button_border"
          >
            {{ $t('links.supportUs') }}
          </a>
        </div>
      </div>
      <div class="swiperWrapper">
        <div class="bg_red"></div>
        <HomeSwiper />
      </div>
    </section>
    <section class="projectDescriptionWrapper bg_grey2">
      <article class="content">
        <div class="section">
          <p class="">
            {{ $t('homePage.paragraph1.content1') }}
            <span class='bigger1'>
              {{ numberOfHeroes }}
            </span>
            {{ $t('homePage.paragraph1.content2') }}
          </p>
          <p class="">
            <span class='b2'>
              {{ $t('homePage.paragraph2.highlight') }}
            </span>
            {{ $t('homePage.paragraph2.content') }}
          </p>
          <p class="">
            <span class='b2'>
              {{ $t('homePage.paragraph3.highlight') }}
            </span>
            {{ $t('homePage.paragraph3.content') }}
          </p>
          <p class="">
            {{ $t('homePage.paragraph4') }}
          </p>
        </div>
        <div class="section">
          <p class="">
            {{ $t('homePage.paragraph5.content1') }}
            <strong class="b2">
              {{ $t("homePage.paragraph5.highlight") }}
            </strong>
            {{ $t('homePage.paragraph5.content2') }}
          </p>
          <p class="">
            {{ $t('homePage.paragraph6.content1') }}
            <a 
              href="https://www.vyzyvanka.com/" 
              target="_blank"
            >
              <strong class="b1 red">
                {{ $t("homePage.paragraph6.highlight") }}
              </strong>
            </a>{{ $t('homePage.paragraph6.content2') }}
          </p>
        </div>
      </article>
    </section>
    <section class="content Partners">
      <div class="Partners-group flexColumnCenter">
        <div class="Partners-logo flexRowCenter">
          <img
            src="../assets/media/img/logos/EN_Co-fundedbytheEU_RGB_Monochrome.svg"
            alt="EU"
            class="img"
          />
        </div>
        <div class="Partners-logo flexRowCenter">
          <img
            src="../assets/media/img/logos/goethe-institut-logo-vector.svg"
            alt="Goethe institut"
            class="img"
          />
        </div>
        <div class="Partners-logo flexRowCenter">
          <img
            src="../assets/media/img/logos/logo-Forum-Civ.svg"
            alt="Forum Civ"
            class="img forumCiv"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style src="./index.scss" lang="scss" scoped></style>
