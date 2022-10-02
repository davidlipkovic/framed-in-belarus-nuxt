<style src="./Contact.scss" lang="scss"></style>

<template>
  <main class="Content">
    <h1 class="title Title">
        <span class="content">
          {{ $t('contactsPageTitle') }}
        </span>
      </h1>
      <div class="content">
        <h2 class="title">
          {{ $t('contactsPage1') }}
        </h2>
        <p>
          <strong>
            {{ $t('contactsPage2') }}
          </strong>
          {{ $t('contactsPage3') }}
        </p>
        <p>
          {{ $t('contactsPage4') }}
        </p>
        <p>
          <strong>
            {{ $t('contactsPage5') }}
          </strong>
          {{ $t('contactsPage6') }}
        </p>
        <ul>
          <li>
            <a href="https://www.facebook.com/rufinartist">
              {{ $t('linkFacebook') }}
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/rufinabazlova/">
              {{ $t('linkInstagram') }}
            </a>
          </li>
        </ul>
        <p>
          {{ $t('contactsPage7') }}
          <a href="mailto:framedinbelarus@gmail.com">framedinbelarus@gmail.com</a>.
        </p>
      </div>
  </main>
</template>

<script>
export default {
}
</script>
