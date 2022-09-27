<style src="./News.scss" lang="scss"></style>

<template>
  <div>
    <main-menu/>
    <main class="Content">
      <h1 class="title Title">
        <span class="content">News</span>
      </h1>
      <div class="Article content">
        <div class="section news">
          <img class="img" alt="THE LITTLE BIRD MUST BE CAUGHT" src="../../assets/media/img/news.png"/>
          <h2 class="title">THE LITTLE BIRD MUST BE CAUGHT</h2>
          <p>The group exhibition "The little bird must be caught" presents a part of the project #FramedinBelarus on the 13th edition of the international contemporary art festival Survival Kit, which takes place inside an old bank building, in the heart of Dome Square (Pils iela 23, Riga) from 3rd of September to the 16th of October. </p>
          <nuxt-link
            to="news/the-little-bird-must-be-caught"
            class="button"
          >
            More
          </nuxt-link>
        </div>
        
        <div class="section news">
          <img class="img" alt="STITCHED FREEDOM: “FRAMED IN BELARUS” PROJECT" src="../../assets/media/img/news.png"/>
          <h2 class="title">STITCHED FREEDOM: “FRAMED IN BELARUS” PROJECT</h2>
          <p>Stitchit art group is going to lead a workshop in Riga.</p>
          <p>On the 1st and 2nd of October at 2 pm EET you are invited to participate in a stitching workshop "Stitched Freedom: ‘Framed in Belarus’ project" led by art group "Stitchit" – Rufina Bazlova and Sofia Tocar. The workshop is a part of the Survival Kit festival program.</p>
          <nuxt-link
            to="news/stitched-freedom-framed-in-belarus-project"
            class="button"
          >
            More
          </nuxt-link>
        </div>
      </div>
    </main>
    <main-footer/>
  </div>
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
