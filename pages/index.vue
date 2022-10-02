<style src="./index.scss" lang="scss"></style>

<template>
  <main class="Content FirstPage">
    <section class="content">
      <div class="ProjectDescr">
        <h1 class="title logo-project">
          <span class="firstSymbol">#</span><span class="text">
            {{ $t('title') }}
          </span>
        </h1>
        <p class="subtitle">
          {{ $t('description') }}
        </p>
        <a
          href="https://forms.gle/SKCcvWGzRkQxx2fH9"
          class="button bg_red"
        >
          {{ $t('participateBtnMsg') }}
        </a>
      </div>
      <Slider/>
    </section>
    <section class="bg_grey">
      <article class="content Article">
        <div class="section">
          <p>
            {{ $t('homePage1') }}
            <strong class="b bigger">
              1, 200
            </strong>
            {{ $t('homePage2') }}
          </p>
          <p>
            {{ $t('homePage3') }}
          </p>
          <p>
            <strong class="b">
              {{ $t('homePage4') }}
            </strong>
            {{ $t('homePage5') }}
          </p>
          <p>
            {{ $t('homePage6') }}
          </p>
        </div>
        <div class="section">
          <p>
            <strong class="b">
              {{ $t('homePage7') }}
            </strong>
            {{ $t('homePage8') }}
          </p>
          <p>
            <strong class="b">
              {{ $t('homePage9') }}
            </strong>
            {{ $t('homePage10') }}
          </p>
          <p>
            {{ $t('homePage11') }}
            <strong class="b red">
              {{ $t('homePage12') }}
            </strong>
            {{ $t('homePage13') }}
          </p>
        </div>
      </article>
    </section>
  </main>
</template>

<script>
import Slider from '@/components/general/Slider'

export default {
  components: {
    Slider
  },
}
</script>
