<script>
export default {
  head() {
    return {
      title: `#Framed in Belarus — About us`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Stitchit is an art group created in 2021 by visual artist Rufina Bazlova and curator Sofia Tocar. The group works on burning socio-political issues using the traditional technique of embroidery as a tool of resistance and dialogue. Stitchit involves different communities and individuals into the creation process and blurs the lines of authorship. Collective means all people, who take part in a project and activities organized by Stitchit.'
        }
      ]
    }
  }
}
</script>

<template>
  <main class="Content">
    <div class="Title">
      <h1 class="content News">
        {{ $t('aboutUsPageTitle') }}
      </h1>
    </div>
    <div class="content News">
      <h2 class="title alignCenter">
        {{ $t('aboutUsSubTitle') }}
      </h2>
      <div class="aboutUs">
        <picture class="logo">
          <source srcset="../../assets/media/img/logo_stitchit.png, ../../assets/media/img/logo_stitchit@2x.png 2x, ../../assets/media/img/logo_stitchit@3x.png 3x" type="image/png">
          <img src="../../assets/media/img/logo_stitchit.png" :alt="`Logotype ${$t('aboutUsSubTitle')}`">
        </picture>
        <div class="text">
          <p>
            Stitchit is an art group created in 2021 by visual artist Rufina Bazlova (Belarus) and curator Sofia Tocar (Moldova). The group works on burning socio-political issues using the traditional technique of embroidery as a  tool of resistance and dialogue. Stitchit involves different communities and individuals into the  creation process and blurs the lines of authorship. 
          </p>
          <br>
          <p>
            Collective means all people, who take part in a project and activities organized by Stitchit.
          </p>
          <br>
          <p>
            {{ $t('aboutUsPage2') }} <a href="mailto:framedinbelarus@gmail.com">framedinbelarus@gmail.com</a>.
          </p>
          <br>
          <a href="https://www.instagram.com/rufinabazlova/" target="_blank" class="button">
            {{ $t('linkInstagram') }}
          </a>
          <a href="https://www.facebook.com/rufinartist" target="_blank" class="button">
            {{ $t('linkFacebook') }}
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<style src="./AboutUs.scss" lang="scss" scoped></style>
