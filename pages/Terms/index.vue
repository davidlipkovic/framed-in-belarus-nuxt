<script setup>
definePageMeta({
  layout: "registration",
})
</script>

<template>
  <div class="content">
      <h1 class="title">
        <span>{{ $t('TermsTitle') }}</span>
      </h1>
      <article>
        <div class="b">
          <p>{{ $t('TermsB0') }}</p>
          <p>{{ $t('TermsB1') }}</p>
        </div>
        <h2 class="title">{{ $t('TermsTitle0') }}</h2>
        <p>{{ $t('TermsStr0') }}<strong>{{ $t('TermsStr1') }}</strong>{{ $t('TermsStr2') }}</p>
        <p>{{ $t('TermsStr3') }}</p>
        <p>{{ $t('TermsStr4') }}<strong>{{ $t('TermsStr5') }}</strong>{{ $t('TermsStr6') }}<strong>{{ $t('TermsStr7') }}</strong>{{ $t('TermsStr8') }}<strong>{{ $t('TermsStr9') }}</strong>{{ $t('TermsStr10') }}</p>
        <h2 class="title">{{ $t('TermsTitle1') }}</h2>
        <p>{{ $t('TermsStr11') }}</p>
        <p>{{ $t('TermsStr12') }}</p>
        <h2 class="title">{{ $t('TermsTitle2') }}</h2>
        <p><strong>{{ $t('TermsStr13') }}</strong>{{ $t('TermsStr14') }}</p>
        <h2 class="title">{{ $t('TermsTitle3') }}</h2>
        <p>{{ $t('TermsStr15') }}<strong>{{ $t('TermsStr16') }}</strong>{{ $t('TermsStr17') }}</p>
        <p>{{ $t('TermsStr18') }}</p>
      </article>
      <div class="form end">
        <button class="button">{{ $t('RegisterButtonDecline') }}</button>
        <button class="button bg_black">{{ $t('RegisterButtonAgreeConditions') }}</button>
      </div>
    </div>
</template>

<style src="../../assets/style/form.scss" lang="scss" scoped></style>

