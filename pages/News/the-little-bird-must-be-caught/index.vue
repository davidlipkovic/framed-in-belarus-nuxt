<script>
export default {
  head() {
    return {
      title: `#Framed in Belarus — The little bird must be caught`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The international contemporary art festival Survival Kit is one of the largest contemporary art events in the Baltics, taking place in Rīga annually. It was started in 2009 as a reaction towards the global economic crisis, calling for a consideration of various survival strategies within the changeable world of today. Every year, the festival is dedicated to a new and significant social topic. Abandoned Riga buildings are often used to hold festival events in order to draw attention to their future potential for development.'
        }
      ]
    }
  },
  data() {
    return {
      showModal: false,
      activeModalIndex: null,
      imageModals: [
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        },
        {
          alt: "Photo credit: Sergei Shabohin",
          show: false
        }
      ]
    }
  }
}
</script>

<template>
  <main class="Content">
    <article>
      <div class="Title">
        <div class="content">
          <h1 class="content News">
            The little bird must be caught
          </h1>
        </div>
      </div>
      <div class="content News">
        <p class="b">
          SURVIVAL KIT 13 / PILS 23, RIGA / 2.9.-16.10.2022
        </p>
        <p>
          #FramedinBelarus in Riga!
          {{ $t('newsTheLttleBirdP1') }}
        </p>
        <p>
          The group exhibition "
          <strong class="b">
            The little bird must be caught
          </strong>
          " presents a part of the project #FramedinBelarus on the 13th edition of the international contemporary art festival
          <strong class="b">
            Survival Kit
          </strong>
          , which takes place inside an old bank building, in the heart of 
          <strong class="b">
            Dome Square (Pils iela 23, Riga) from 3rd of September to the 16th of October
          </strong>
          . 
        </p>
        <p>
          The international contemporary art festival Survival Kit is one of the largest contemporary art events in the Baltics, taking place in Rīga annually. It was started in 2009 as a reaction towards the global economic crisis, calling for a consideration of various survival strategies within the changeable world of today. Every year, the festival is dedicated to a new and significant social topic. Abandoned Riga buildings are often used to hold festival events in order to draw attention to their future potential for development.
        </p>
        <p>
          Contemporary Art Festival Survival Kit 13 “The Little Bird must be Caught” curated by iLiana Fokianaki, in Riga, September 2022.
        </p>
        <GeneralCarousel/>
        <p>
          {{ $t('buttons.readMore') }}:  
          <a href="https://lcca.lv/en/survival-kit/" target="_blank">lcca.lv</a> / 
          <a href="https://www.facebook.com/survivalkit.lv" target="_blank">Facebook</a> / 
          <a href="https://www.instagram.com/latviancentre4contemporaryart" target="_blank">Instagram</a>
        </p>
      </div>
    </article>
  </main>
</template>

<style src="../Article.scss" lang="scss"></style>
<style src="../News.scss" lang="scss" scoped></style>
