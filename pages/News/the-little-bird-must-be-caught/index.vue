<style src="../News.scss" lang="scss"></style>

<template>
  <div>
    <main-menu/>
    <main class="Content">
      <article class="news">
        <h1 class="Title">
          <span class="content">THE LITTLE BIRD MUST BE CAUGHT</span>
        </h1>
        <div class="content">
          <p class="b">SURVIVAL KIT 13 / PILS 23, RIGA / 2.9.-16.10.2022</p>
          <p>#FramedinBelarus in Riga!</p>
          <p>The group exhibition "<strong class="b">The little bird must be caught</strong>" presents a part of the project #FramedinBelarus on the 13th edition of the international contemporary art festival <strong class="b">Survival Kit</strong>, which takes place inside an old bank building, in the heart of <strong class="b">Dome Square (Pils iela 23, Riga) from 3rd of September to the 16th of October</strong>. </p>
          <p>The international contemporary art festival Survival Kit is one of the largest contemporary art events in the Baltics, taking place in Rīga annually. It was started in 2009 as a reaction towards the global economic crisis, calling for a consideration of various survival strategies within the changeable world of today. Every year, the festival is dedicated to a new and significant social topic. Abandoned Riga buildings are often used to hold festival events in order to draw attention to their future potential for development.</p>
          <p>Contemporary Art Festival Survival Kit 13 “The Little Bird must be Caught” curated by iLiana Fokianaki, in Riga, September 2022.</p>
          <p>Photo credit: Kristīne Madjare / Latvian Centre for Contemporary Art</p>
          <p>Read more: <a href="https://lcca.lv/en/survival-kit/">lcca.lv</a> / <a href="https://www.facebook.com/survivalkit.lv">Facebook</a> / <a href="https://www.instagram.com/latviancentre4contemporaryart">Instagram</a></p>
          <img class="img" alt="Photo credit: Kristīne Madjare / Latvian Centre for Contemporary Art" src="../../../assets/media/img/the-little-bird-must-be-caught.jpg">
          <!-- <Slider/> -->
        </div>
      </article>
    </main>
    <main-footer/>
  </div>
</template>

<script>
  import MainFooter from '@/components/general/MainFooter'
  import MainMenu from '@/components/general/MainMenu'
  import Slider from '@/components/general/Slider'
  
  export default {
    components: {
      MainFooter,
      MainMenu,
      Slider
    },
  }
  </script>