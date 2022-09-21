<style src="./Contact.scss" lang="scss"></style>

<template>
  <main-menu/>
  <main class="Content">
    <h1 class="title Title">
        <span class="content">Contacts</span>
      </h1>
      <div class="content">
        <h2 class="title">
          STITCHIT
        </h2>
        <p>Currently Rufina Bazlova is working on a new project Framed in Belarus as part of the Stitchit group, that she created in 2021 together with curator Sofia Tokar. They work on burning socio-political issues using the traditional technique of embroidery as a tool of resistance and dialogue. Stitchit involves different communities and individuals into the creation process and blurs the lines of authorship.</p>
        <ul>
          <li>
            <a href="https://www.facebook.com/hashtag/framedinbelarus">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/explore/tags/framedinbelarus/">Instagram</a>
          </li>
        </ul>
      </div>
  </main>
  <main-footer/>
</template>

<script>
import MainFooter from '@/components/general/MainFooter'
import MainMenu from '@/components/general/MainMenu'

export default {
  components: {
    MainFooter,
    MainMenu,
  },
}
</script>
