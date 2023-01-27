
<script setup lang="ts">
// SLIDER 
// Two pictures should be displayed in the slider: the face and the back of the embroidery. Rufina will make these pictures herself after receiving the work by mail and then add them to the database as an admin herself.
// Pictures should switch on click.

// USER'S PHOTOS
// .Description-item_img is photo(s) which user added on 4 step "http://localhost:8080/Embroidery/Step4"
// .Description-item_img width must be 540px regardless of orientation
</script>



<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus / Gallery / Case: Rabochy Ruh Vasya Petrov</Title>
      <Meta name="description" content="Case: Rabochy Ruh Vasya Petrov embroidery"/>
    </Head>
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">Case: Rabochy Ruh <span class="visually-hidden">— </span></span>Vasya Petrov
        </h1>
        <nuxt-link
          to="/Gallery"
          class="GoBack">
          <img src="../../../assets/media/img/arrow_back.svg" alt="Go back to the Gallery" class="GoBack-img">
          <span class="GoBack-text">Go back to the Gallery</span>
        </nuxt-link>
      </div>
    </div>
    <div class="content">
      <article>
        <GeneralSlider/>
        <p class="WorkDescript">
          <span class="WorkDescript-title">Author:</span> Rufina von Bazlova
        </p>
        <p class="WorkDescript">
          <span class="WorkDescript-title">Year of birth:</span> 1990
        </p>
        <p class="WorkDescript">
          <span class="WorkDescript-title">Country, city:</span> Poland, Warsaw
        </p>
        <div class="WorkDescript">
          <p class="WorkDescript-socnetwork">
            <img src="../../../assets/media/img/instagram_black.svg" alt="Instagram" class="WorkDescript-socnetwork-logo">
            @instagramAccount
          </p>
          <p class="WorkDescript-socnetwork">
            <img src="../../../assets/media/img/facebook_black.svg" alt="Facebook" class="WorkDescript-socnetwork-logo">
            @FacebookAccount
          </p>
        </div>
      </article>
      <article>
        <img src="../../../assets/media/img/defaultHero.svg" alt="Hero Name Surname" class="Description-item Hero-photo">
        <div class="Description-item">
          <h3 class="title">Date of birth:</h3>
          <p>3 September 2022</p>
        </div>
        <div class="Description-item">
          <h3 class="title">Date of detention:</h3>
          <p>3 September 2022</p>
        </div>
        <div class="Description-item">
          <h3 class="title">Sentence:</h3>
          <p>3 years</p>
        </div>
        <div class="Description-item">
          <h3 class="title">Description of the Political prisoner:</h3>
          <p>Salihorsk resident Aliaksandr Adziarykha was convicted under part 1 of Art. 368 of the Criminal Code for insulting Aliaksandr Lukashenka, Art. 369 for insulting KGB Chairperson Ivan Tsertsel, CEC Chairperson Liudmila Yarmoshyna, deputies, ministers for foreign affairs and emergencies, and the prosecutor to three years of imprisonment and a fine of 6,400 Belarusian roubles ($2,535)</p>
        </div>
        <div class="Description-item">
          <h3 class="title">Description of the case:</h3>
          <p>Salihorsk resident Aliaksandr Adziarykha was convicted under part 1 of Art. 368 of the Criminal Code for insulting Aliaksandr Lukashenka, Art. 369 for insulting KGB Chairperson Ivan Tsertsel, CEC Chairperson Liudmila Yarmoshyna, deputies, ministers for foreign affairs and emergencies, and the prosecutor to three years of imprisonment and a fine of 6,400 Belarusian roubles ($2,535)</p>
        </div>
        <div class="Description-item">
          <h3 class="title">Address of the prison:</h3>
          <p>Prison No. 4</p>
        </div>
        <h2 class="Description-item Description-item_title">Author about the work process</h2>
        <div class="Description-item">
          <h3 class="title">Why did you decide to participate in a ptoject?</h3>
          <p>Дело в закрытом режиме рассматривали почти четыре месяца. Государственное обвинение по делу поддерживала прокурорка Юлия Ланевская. Дело в закрытом режиме рассматривали почти четыре месяца. Государственное обвинение по делу поддерживала прокурорка Юлия Ланевская.</p>
        </div>
        <div class="Description-item">
          <h3 class="title">Comment</h3>
          <p>В настоящее время в Беларуси число официально признанных политическихзаключенных достигает более 930 человек. Framed in Belarus - это социальный арт-проект, посвященный политическим заключенным в Беларуси. </p>
        </div>
        <div class="Description-item Description-item_img">
          <img src="../../../assets/media/img/photoEmbroidery-example.jpg" alt="Case: Rabochy Ruh Vasya Petrov embroidery">
        </div>
        <div class="Description-item Description-item_img">
          <img src="../../../assets/media/img/photoEmbroidery-example.jpg" alt="Case: Rabochy Ruh Vasya Petrov embroidery">
        </div>
        <div class="Description-item">
          <h3 class="ExhibitionTitle">List of exhibitions</h3>
          <ul class="ExhibitionList">
            <li class="ExhibitionList-item">
              <h4 class="ExhibitionListItem-title">
                <nuxt-link
                  to="/News/the-little-bird-must-be-caught">
                  The little bird must be caught
                </nuxt-link>
              </h4>
              <p class="ExhibitionListItem-descript">
                <img src="../../../assets/media/img/calendar.svg" alt="Dates" class="ExhibitionListItem-descript-icon descriptIcon">
              18.11.2022 - 23.04.2023
              </p>
              <p class="ExhibitionListItem-descript">
                <img src="../../../assets/media/img/location.svg" alt="Location" class="ExhibitionListItem-descript-icon descriptIcon">
                <span class="museumName">Weserburg Museum für Moderne Kunst.</span>
                <span class="museumCountry">Bremen, <b class="b">Germany</b></span>
              </p>
            </li>
            <li class="ExhibitionList-item">
              <h4 class="ExhibitionListItem-title">
                Name of exhibition
              </h4>
              <p class="ExhibitionListItem-descript">
                <img src="../../../assets/media/img/calendar.svg" alt="Dates" class="ExhibitionListItem-descript-icon descriptIcon">
                18.11.2022 - 23.04.2023
              </p>
              <p class="ExhibitionListItem-descript">
                <img src="../../../assets/media/img/location.svg" alt="Location" class="ExhibitionListItem-descript-icon descriptIcon">
                <span class="museumName">Weserburg Museum für Moderne Kunst long long long long name.</span>
                <span class="museumCountry">Bremen, <b class="b">Germany</b></span>
              </p>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </main>
</template>

<style src="./Gallery-item.scss" lang="scss" scoped></style>

