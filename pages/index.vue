<script setup lang="ts">
</script>

<template>
  <Head>
    <Title>#Framed in Belarus</Title>
    <Meta name="description" content="{{ $t('description') }}"/>
  </Head>

    
  <main class="Content">
    <section class="content FirstPage">

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
      <GeneralSlider/>
    </section>
    <section class="bg_grey">
      <article class="content">
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
    <section class="content Partners">
      <div class="Partners-group">
        <a href="https://spring96.org" target="_blank" class="Partners-logo"><!--
        --><img src="../assets/media/img/spring96_en.png" alt="Viasna" class="img"><!--
      --></a>
        <a href="https://amnesty.cz" target="_blank" class="Partners-logo"><!--
        --><img src="../assets/media/img/amnesty.png" alt="Amnesty International" class="img"><!--
      --></a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhsgpGwDc9sskZ82LN_eKwwZBAX9U5kLARAFo2eR1UGw8Usg/viewform" target="_blank" class="Partners-logo"><!--
        --><img src="../assets/media/img/majsternia-pashtovak.jpg" alt="Solidarity Postcards Atelier" class="img"><!--
      --></a>
        <a href="https://en.stranafund.org" target="_blank" class="Partners-logo"><!--
        --><img src="../assets/media/img/stranafund_en.png" alt="COUNTRY TO LIVE IN FOUNDATION" class="img"><!--
      --></a><!--
      --><a href="https://tutaka.org" target="_blank" class="Partners-logo"><!--
        --><img src="../assets/media/img/tutaka.png" alt="Tutaka" class="img"><!--
      --></a>
        <a href="https://politzek.me" target="_blank" class="Partners-logo"><!--
        --><img src="../assets/media/img/politzek.png" alt="politzek.me" class="img"><!--
      --></a>
        <a href="https://vyzyvanka.com" target="_blank" class="Partners-logo"><!--
        --><img src="../assets/media/img/vyzyvanka.png" alt="VYZHYVANKA" class="img"><!--
      --></a>
      </div>
    </section>
  </main>
</template>

<style src="./index.scss" lang="scss" scoped></style>
