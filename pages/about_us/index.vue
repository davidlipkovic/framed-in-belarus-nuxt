<style src="./Contact.scss" lang="scss"></style>

<template>
  <main-menu/>
  <main class="Content">
    <h1 class="title Title">
        <span class="content">About us</span>
      </h1>
      <div class="content">
        <h2 class="title">
          Stitchit and Collective
        </h2>
        <p><strong>Stitchit</strong> is an art group created in 2021 by visual artist Rufina Bazlova and curator Sofia Tocar. </p>
        <p>The group works on burning socio-political issues using the traditional technique of embroidery as a tool of resistance and dialogue. Stitchit involves different communities and individuals into the creation process and blurs the lines of authorship.</p>
        <p><strong>Collective</strong> means all people, who take part in a project and activities organized by Stitchit.</p>
        <ul>
          <li>
            <a href="https://www.instagram.com/rufinabazlova/">Facebook</a>
          </li>
          <li>
            <a href="https://www.facebook.com/rufinartist">Instagram</a>
          </li>
        </ul>
        <p>If you are an organization and interested in hosting the project, can help us with promotion, want to organize a workshop or any other form of collaboration please contact us by <a href="mailto:framedinbelarus@gmail.com">framedinbelarus@gmail.com</a>.</p>
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
