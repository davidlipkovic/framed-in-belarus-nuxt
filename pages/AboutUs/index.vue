<script setup>
definePageMeta({
  middleware: [
    'auth',
  ],
})

useHead({
  title: `#Framed in Belarus — About us`,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Stitchit is an art group created in 2021 by visual artist Rufina Bazlova and curator Sofia Tocar. The group works on burning socio-political issues using the traditional technique of embroidery as a tool of resistance and dialogue. Stitchit involves different communities and individuals into the creation process and blurs the lines of authorship. Collective means all people, who take part in a project and activities organized by Stitchit.'
    }
  ]
})
</script>

<template>
  <main class="Content">
    <div class="Title">
      <h1 class="content News">
        {{ $t("aboutUsPage.title") }}
      </h1>
    </div>
    <div class="content News">
      <h2 class="title alignCenter">
        {{ $t("aboutUsPage.section.title") }}
      </h2>
      <div class="aboutUs flexRowCenter">
        <picture class="logo">
          <source 
            srcset="../../assets/media/img/logo_stitchit.png, ../../assets/media/img/logo_stitchit@2x.png 2x, ../../assets/media/img/logo_stitchit@3x.png 3x" 
            type="image/png"
          >
          <img 
            src="../../assets/media/img/logo_stitchit.png" 
            :alt="`Logotype ${$t('aboutUsPage.section.title')}`"
          >
        </picture>
        <div class="text">
          <p>
            {{ $t("aboutUsPage.section.paragraph1") }}
          </p>
          <br>
          <p>
            {{ $t("aboutUsPage.section.paragraph2") }}
          </p>
          <br>
          <p>
            {{ $t("aboutUsPage.section.paragraph3.content") }}
            <a href="mailto:framedinbelarus@gmail.com">
              {{ $t("aboutUsPage.section.paragraph3.highlight") }}
            </a>
          </p>
          <br>
          <div class="buttons">
            <a 
              href="https://www.instagram.com/rufinabazlova/" 
              target="_blank" 
              class="button"
            >
              {{ $t("aboutUsPage.igButton") }}
            </a>
            <a 
              href="https://www.facebook.com/rufinartist" 
              target="_blank" 
              class="button"
            >
              {{ $t("aboutUsPage.fbButton") }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style src="./AboutUs.scss" lang="scss" scoped></style>
