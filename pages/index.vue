<script>
import Slider from '@/components/general/Slider'

export default {
  components: {
    Slider
  },
  mounted() {
    // console.log(this.i18n)
  }
}
</script>

<template>
  <main class="Content FirstPage">
    <section class="content">
      <div class="ProjectDescr">
        <h1 class="title logo-project">
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
          {{ $t('description') }}
        </p>
        <nuxt-link
          to="/SignUp"
          class="button bg_red"
        >
          {{ $t('participateBtnMsg') }}
        </nuxt-link>
      </div>
      <div class="sliderWrapper">
        <div class="bg_red"></div>
        <GeneralSlider />
      </div>
    </section>
    <section class="bg_grey2">
      <article class="content">
        <div class="section">
          <p>
            {{ $t("homePage1") }}
            <span class="bigger1"> 1432 </span>
            {{ $t("homePage2") }}
          </p>
          <p>
            {{ $t("homePage3") }}
          </p>
          <p>
            <strong class="b2">
              {{ $t("homePage4") }}
            </strong>
            {{ $t("homePage5") }}
          </p>
          <p>
            {{ $t("homePage6") }}
          </p>
        </div>
        <div class="section">
          <p>
            <strong class="b2">
              {{ $t("homePage7") }}
            </strong>
            {{ $t("homePage8") }}
          </p>
          <p>
            <strong class="b2">
              {{ $t("homePage9") }}
            </strong>
            {{ $t("homePage10") }}
          </p>
          <p>
            {{ $t("homePage11") }}
            <strong class="b1 red">
              {{ $t("homePage12") }}
            </strong>
            {{ $t("homePage13") }}
          </p>
        </div>
      </article>
    </section>
    <section class="content Partners">
      <div class="Partners-group">
        <a href="https://spring96.org" target="_blank" class="Partners-logo">
          <img
            src="../assets/media/img/logos/logo_viasna96_en.png"
            alt="Viasna"
            class="img"
          />
        </a>
        <a href="https://amnesty.cz" target="_blank" class="Partners-logo">
          <img
            src="../assets/media/img/logos/LogoAmnesty.svg"
            alt="Amnesty International"
            class="img"
          />
        </a>
        <a
          href="https://en.stranafund.org"
          target="_blank"
          class="Partners-logo"
        >
          <img
            src="../assets/media/img/logos/stranafund-logo.png"
            alt="COUNTRY TO LIVE IN FOUNDATION"
            class="img"
          />
        </a>
        <a
          href="https://vyzyvanka.com"
          target="_blank"
          class="Partners-logo"
        >
          <img
            src="../assets/media/img/logos/vyzyvanka.png"
            alt="VYZHYVANKA"
            class="img"
          />
        </a>
        <a
          href="https://politzek.me/"
          target="_blank"
          class="Partners-logo"
        >
          <img
            src="../assets/media/img/logos/Logo_polizek_rastr.png"
            alt="Logo_polizek_rastr"
            class="img"
          />
        </a>
        <a
          href=""
          target="_blank"
          class="Partners-logo"
        >
          <img
            src="../assets/media/img/logos/majsternia_pashtovak_4b.png"
            alt="VYZHYVANKA"
            class="img"
          />
        </a>
        <a href="" target="_blank" class="Partners-logo">
          <img
            src="../assets/media/img/logos/Tutaka_logo.svg"
            alt="Viasna"
            class="img"
          />
        </a>
      </div>
    </section>
    <GeneralCookieBar/>
  </main>
</template>

<style src="./index.scss" lang="scss" scoped></style>
