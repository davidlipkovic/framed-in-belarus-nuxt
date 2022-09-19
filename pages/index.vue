<style src="./index.scss" lang="scss"></style>

<template>
  <div>
    <main-menu/>
    <div class="Content FirstPage">
      <section class="content">
        <div class="ProjectDescr">
          <h1 class="title logo-project">
            <span class="firstSymbol">#</span><span class="text">Framed in Belarus</span>
          </h1>
          <p class="subtitle">
            Social art project dedicated to&nbsp;political prisoners in&nbsp;Belarus
          </p>
          <a href="https://forms.gle/SKCcvWGzRkQxx2fH9" class="button bg_red">Want to&nbsp;participate</a>
        </div>
        <Slider/>
      </section>
      <section class="bg_grey">
        <article class="content Article">
          <div class="section">
            <p>The number of officially recognized political prisoners in Belarus currently reaches more than <strong class="b bigger">1,200</strong> people.</p>
            <p>Each and every one of us has the opportunity to speak out against injustice through solidarity and collective creative process.
            </p>
            <p><strong class="b">The aim of the #FramedinBelarus project</strong> is to tell about each illegally convicted citizen of Belarus and create their portraits using the traditional Belarussian technique of swiper with red thread on a white background, and as a result - to record an important era of Belarusian history with a folk code ornament.
            </p>
            <p>The process of swiper is a long and meditative experience, allowing participants to concentrate on their thoughts and feelings for a particular arrestor. Time is what is taken away from a person in prison and time is the little we can sacrifice when creating a portrait of a political prisoner.
            </p>
          </div>
          <div class="section">
            <p><strong class="b">Participation in the project</strong> is a gesture of creative solidarity, allowing us to symbolically support people affected by the state regime and tell about each of them using a non-traditional tool of political protest - cross-stitching.
            </p>
            <p><strong class="b">The final form</strong> of the project will be a collective canvas of all the embroidered portraits and will be a material symbol of the intertwining of political events and human destinies.
            </p>
            <p>The project is a continuation of the series <strong class="b red">"History of Belarusian Vyzhivanka"</strong>, created by Rufina Bazlova in 2020-2021.
            </p>
          </div>
        </article>
      </section>
    </div>
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
