<style src="../../../assets/style/form.scss" lang="scss" scoped></style>

<template>
  <header class="Header_sign">
    <div class="content">
      <a href="/" class="logo-project">
        <span class="firstSymbol">#</span><span class="text">
          {{ $t('title') }}
        </span>
      </a>
      <input type="checkbox" id="Lang" class="Lang-checker visually-hidden">
      <div class="Lang">
        <label for="Lang" role="button" aria-role="button"
          class="Lang-button"
          >
          EN<img class="arrow" src="@/assets/media/img/arrow.svg">
        </label>
        <div class="Lang-select">
          <a href="/ru" class="Lang-link">Russian</a>
        </div>
      </div>
    </div>
  </header>
  <main class="Content">
    <div class="Embroiderer">
      <img src="../../../assets/media/img/embroiderer.svg" alt="Embroiderer" class="Img">
    </div>
    <div class="content">
      <h1 class="title">
        <span>{{ $t('RegisterStep0Title') }}</span>
      </h1>
      <article>
        <div class="b">
          <p>{{ $t('RegisterStep0B0') }}</p>
          <p>{{ $t('RegisterStep0B1') }}</p>
        </div>
        <h2 class="title">{{ $t('RegisterStep0Title0') }}</h2>
        <p>{{ $t('RegisterStep0Str0') }}<strong>{{ $t('RegisterStep0Str1') }}</strong>{{ $t('RegisterStep0Str2') }}</p>
        <p>{{ $t('RegisterStep0Str3') }}</p>
        <p>{{ $t('RegisterStep0Str4') }}<strong>{{ $t('RegisterStep0Str5') }}</strong>{{ $t('RegisterStep0Str6') }}<strong>{{ $t('RegisterStep0Str7') }}</strong>{{ $t('RegisterStep0Str8') }}<strong>{{ $t('RegisterStep0Str9') }}</strong>{{ $t('RegisterStep0Str10') }}</p>
        <h2 class="title">{{ $t('RegisterStep0Title1') }}</h2>
        <p>{{ $t('RegisterStep0Str11') }}</p>
        <p>{{ $t('RegisterStep0Str12') }}</p>
        <h2 class="title">{{ $t('RegisterStep0Title2') }}</h2>
        <p><strong>{{ $t('RegisterStep0Str13') }}</strong>{{ $t('RegisterStep0Str14') }}</p>
        <h2 class="title">{{ $t('RegisterStep0Title3') }}</h2>
        <p>{{ $t('RegisterStep0Str15') }}<strong>{{ $t('RegisterStep0Str16') }}</strong>{{ $t('RegisterStep0Str17') }}</p>
        <p>{{ $t('RegisterStep0Str18') }}</p>
      </article>
      <div class="form end">
        <button class="button">{{ $t('RegisterButtonDecline') }}</button>
        <button class="button bg_black">{{ $t('RegisterButtonAgreeConditions') }}</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
}
</script>
