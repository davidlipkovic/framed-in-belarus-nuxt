<style src="../News.scss" lang="scss" scoped></style>

<template>
  <main class="Content">
    <article>
      <div class="Title">
        <div class="content">
          <h1 class="content News">{{ $t('newsPageArticle2Title') }}</h1>
          <nuxt-link
            to="/News"
            class="GoToNews">
            {{ $t('GoToNews') }}
          </nuxt-link>
        </div>
      </div>
      <div class="News content">
        <p class="b">SURVIVAL KIT 13 / PILS 23, RIGA / 1-2.10.2022</p>
        <p class="b">{{ $t('newsStitchedFreedom0') }}</p>
        <p>{{ $t('newsStitchedFreedom1') }}<span class="b">{{ $t('newsStitchedFreedom2') }}</span>{{ $t('newsStitchedFreedom3') }}<strong class="b">{{ $t('newsStitchedFreedom4') }}</strong></p>
        <p class="b">{{ $t('newsStitchedFreedom5') }}</p>
        <p>{{ $t('newsStitchedFreedom6') }}</p>
        <p>{{ $t('newsStitchedFreedom7') }}</p>
        <p>{{ $t('newsStitchedFreedom8') }}</p>
        <p>{{ $t('newsStitchedFreedom9') }}</p>
        <p>{{ $t('newsStitchedFreedom10') }} <a href="https://forms.gle/pGwSyS8EjhHgtrk59">{{ $t('newsStitchedFreedom11') }}</a>.</p>
        <p>{{ $t('newsStitchedFreedom12') }} <a href="https://lcca.lv/en/survival-kit-13/programme/1-october--stitched-freedom---framed-in-belarus--project/">{{ $t('newsStitchedFreedom13') }}</a>.</p>
      </div>
    </article>
  </main>
</template>

<script>
  export default {
  }
</script>
