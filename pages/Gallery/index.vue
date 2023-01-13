<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus / Gallery</Title>
      <Meta name="description" content="Gallery of embroidery by #Framed in Belarus project"/>
    </Head>
    <div class="Title">
      <h1 class="content">
        Gallery
      </h1>
    </div>
    <div class="content">
      <div class="Search">        
        <div class="FindHero-form">
          <input type="text" class="FindHero-input" placeholder="Search for a hero by name" aria-placeholder="Search for a hero by name">
          <button class="FindHero-input-btn" hidden><img src="../../../assets/media/img/close.svg" alt="Reset" class="FindHero-input-btn-img"></button>
          <div class="FindHero-select" hidden>
            <p class="FindHero-select-item">Smirnov</p>
            <p class="FindHero-select-item">Smirnova</p>
          </div>
        </div>
        <div class="Sorting">
          <label for="sorting" class="SortingLabel">Sort by: </label>
          <select name="sorting" id="sorting" class="SortingSelect">
            <option class="SortingSelect-option">What’s new</option>
            <option value="alphabet" class="SortingSelect-optionn">A → Z</option>
            <option value="alphabetRevert" class="SortingSelect-optionn">Z → A</option>
          </select>
        </div>
      </div>
      <section class="Gallery">
        <nuxt-link
          to="/Gallery/Case"
          class="GalleryCase">
          <img src="../../assets/media/img/photoEmbroidery-example.jpg" alt="Case name" class="GalleryCase-img">
        </nuxt-link>
        <nuxt-link
          to="/Gallery/Case"
          class="GalleryCase">
          <img src="../../assets/media/img/photoEmbroidery-example.jpg" alt="Case name" class="GalleryCase-img">
        </nuxt-link>
        <nuxt-link
          to="/Gallery/Case"
          class="GalleryCase">
          <img src="../../assets/media/img/photoEmbroidery-example.jpg" alt="Case name" class="GalleryCase-img">
        </nuxt-link>
        <nuxt-link
          to="/Gallery/Case"
          class="GalleryCase">
          <img src="../../assets/media/img/photoEmbroidery-example.jpg" alt="Case name" class="GalleryCase-img">
        </nuxt-link>
        <nuxt-link
          to="/Gallery/Case"
          class="GalleryCase">
          <img src="../../assets/media/img/photoEmbroidery-example.jpg" alt="Case name" class="GalleryCase-img">
        </nuxt-link>
        <nuxt-link
          to="/Gallery/Case"
          class="GalleryCase">
          <img src="../../assets/media/img/photoEmbroidery-example.jpg" alt="Case name" class="GalleryCase-img">
        </nuxt-link>
        <nuxt-link
          to="/Gallery/Case"
          class="GalleryCase">
          <img src="../../assets/media/img/photoEmbroidery-example.jpg" alt="Case name" class="GalleryCase-img">
        </nuxt-link>
        <nuxt-link
          to="/Gallery/Case"
          class="GalleryCase">
          <img src="../../assets/media/img/photoEmbroidery-example.jpg" alt="Case name" class="GalleryCase-img">
        </nuxt-link>
        <nuxt-link
          to="/Gallery/Case"
          class="GalleryCase">
          <img src="../../assets/media/img/photoEmbroidery-example.jpg" alt="Case name" class="GalleryCase-img">
        </nuxt-link>
        <nuxt-link
          to="/Gallery/Case"
          class="GalleryCase">
          <img src="../../assets/media/img/photoEmbroidery-example.jpg" alt="Case name" class="GalleryCase-img">
        </nuxt-link>
        <nuxt-link
          to="/Gallery/Case"
          class="GalleryCase">
          <img src="../../assets/media/img/photoEmbroidery-example.jpg" alt="Case name" class="GalleryCase-img">
        </nuxt-link>
        <nuxt-link
          to="/Gallery/Case"
          class="GalleryCase">
          <img src="../../assets/media/img/photoEmbroidery-example.jpg" alt="Case name" class="GalleryCase-img">
        </nuxt-link>
      </section>
      <div class="buttons">
        <button class="button button_white">Show more</button>
        <!-- margin-top 30px white-->
      </div>
    </div>
  </main>
</template>

<style src="../../assets/style/form.scss" lang="scss" scoped></style>
<style src="./Gallery.scss" lang="scss" scoped></style>


<script>
// Rufina will make two pictures of work herself after receiving the work by mail and then add them to the database as an admin herself. 
// Photo of the front side of the embroidery is a file photoEmbroidery-example.jpg

  // const input = document.querySelector('.FindHero-input');
  // const button = document.querySelector('.FindHero-input-btn_reset');
  // const select = document.duerySelector('.FindHero-select');

  // function searchHero() {
  //   send input.value to database;
  //   get database answer;
  //   add answer to select with class="FindHero-select-item"
  //   select.hidden = false;
  // } 
  // input.oninput = function(e){
  //   button.hidden = false;
  //   searchHero();
  //   button.onclick = function(e){
  //     input.value = '';
  //     button.hidden = true;
  //   }
  // };
</script>
