<script setup>
const slides = [
  {alt: "Ala Lapatka"},
  {alt: "Siarhey Hatskevich"}
]
</script>

<template>
  <main class="Content">
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle"
          >Case: Seizure of power <span class="visually-hidden">— </span></span
          >Maryia Kalesnikava
        </h1>
      </div>
    </div>
    <div class="content">
      <article>
        <GeneralSwiper 
          :slides="slides"
        />
        <p>
          <br>
          <br>
          Stitching: 360 x 360 mm   |   Canvas: 450 x 500 mm
        </p>
        <p class="WorkDescript">
          Author: <span class="b2">Tiffany Chin</span>
        </p>
        <!-- <p class="WorkDescript">
          <span class="WorkDescript-title">Year of birth:</span>
        </p>
        <p class="WorkDescript">
          <span class="WorkDescript-title">Country, city:</span> USA
        </p>
        <div class="WorkDescript">
          <p class="WorkDescript-socnetwork">
            <img
              src="../../../assets/media/img/instagram_black.svg"
              alt="Instagram"
              class="WorkDescript-socnetwork-logo"
            />
            @tuffytiffchin
          </p>
          <p class="WorkDescript-socnetwork">
            <img
              src="../../../assets/media/img/facebook_black.svg"
              alt="Facebook"
              class="WorkDescript-socnetwork-logo"
            />
          </p>
        </div> -->
      </article>
      <article>
        <img
          src="../../../assets/media/img/case1/prisoner.jpg"
          alt="Hero Name Surname"
          class="Description-item Hero-photo"
        />
        <div class="Description-item">
          <h3 class="title">Date of birth:</h3>
          <p>24 April 1982</p>
        </div>
        <div class="Description-item">
          <h3 class="title">Date of detention:</h3>
          <p>7 September 2020</p>
        </div>
        <div class="Description-item">
          <h3 class="title">Sentence:</h3>
          <p>11 years</p>
        </div>
        <div class="Description-item">
          <h3 class="title">Description of the Political prisoner:</h3>
          <p>
            Maryia Kalesnikava is a member of the presidium of the Coordination Council, head of the campaign headquarters of former presidential nominee Viktar Babaryka.
          </p>
          <p>
            She was abducted on September 7, 2020 in Minsk and, along with two other members of the Coordination Council, Anton Radniankou and Ivan Krautsou, forcibly brought to the Ukrainian border to be expelled from the country. However, by tearing her passport and jumping out of the car, Kalesnikava foiled the special operation of deportation organized by the security forces.
          </p>
          <p>
            On September 9, it became known that the woman had been arrested and was suspected of a criminal offense under Part 3 of Art. 361 of the Criminal Code (appeals to actions aimed at harming the national security of the Republic of Belarus).
          </p>
          <p>
            Kalesnikava was held in pre-trial detention center No. 1 in Minsk. On September 11, she was transferred to the pre-trial prison in Žodzina.
          </p>
          <p>
            On September 16, she faced formal charges under Part 3 of Art. 361 of the Criminal Code.
          </p>
          <p>
            On February 10, 2021, Kalesnikava faced additional charges of "conspiracy to seize power with unconstitutional means" (Part 1 of Article 357) and "creating and managing an extremist formation" (Part 1 of Article 361-1).
          </p>
          <p>
            On September 6, 2021, the Minsk Regional Court sentenced Kalesnikava to 11 years in a general-security penal colony.
          </p>
          <p>
            On December 24, 2021, the Supreme Court upheld the sentences of Maryia Kalesnikava and Maksim Znak.
          </p>
          <p>
            On January 11, 2022, Kalesnikava was transferred to penal colony No. 4 in Homieĺ.
          </p>
        </div>
        <div class="Description-item">
          <h3 class="title">Description of the case:</h3>
          <p>
            The case description is the same as the political prisoner’s
            description because this is an individual case, not a collective
            one.
          </p>
        </div>
        <div class="Description-item">
          <h3 class="title">Address of the prison:</h3>
          <p>Penal colony No. 4. 246035, Homieĺ, vulica Antoshkina 3</p>
        </div>
        <h2 class="Description-item Description-item_title">
          Author about the work process
        </h2>
        <div class="Description-item">
          <h3 class="title">Why did you decide to participate in a project?</h3>
          <p>
            I chose to participate in this project not only because I was an avid stitcher, but the 2020 protests in Belarus reminded me of the 2019 protests in Hong Kong, my father's hometown. Although their protest origins were slightly different from each other, they both still share a common goal, which was to fight against authoritarian rule and government repression. The portrait I chose and stitched was of musician/politician Maria Kalesnikava, who was kidnapped by unidentified law enforcement officers in 2020 and sentenced to eleven years in prison in 2021 for her political activity. Rufina's Instagram stories clip of Maria creating a heart sign during her trial in Belarus appeared in my Instagram feed, reminded me very much of another well-known female politician in Hong Kong, who, along with 46 other lawmakers and politicians, were arrested under the National Security Law for "subversion", when they were only participating in primary elections for the 2020 LegCo elections. Stitching her portrait was therapeutic for me, particularly when I was in isolation due to a health issue, and I felt that I was contributing to both Belarus and Hong Kong.
          </p>
        </div>
        <!--        <div class="Description-item">-->
        <!--          <h3 class="title">Comment</h3>-->
        <!--          <p>-->
        <!--            В настоящее время в Беларуси число официально признанных-->
        <!--            политическихзаключенных достигает более 930 человек. Framed in-->
        <!--            Belarus - это социальный арт-проект, посвященный политическим-->
        <!--            заключенным в Беларуси.-->
        <!--          </p>-->
        <!--        </div>-->
        <GeneralImageModal
          class="Description-item_img"
          alt=""
          fullImageUrl="https://televizeestrada.cz/framed-in-belarus/media/img/case1/komentar1_full.jpg"
          iconImageUrl="https://televizeestrada.cz/framed-in-belarus/media/img/case1/komentar1.jpg"
        />
        <GeneralImageModal
          class="Description-item_img"
          alt=""
          fullImageUrl="https://televizeestrada.cz/framed-in-belarus/media/img/case1/komentar2_full.jpg"
          iconImageUrl="https://televizeestrada.cz/framed-in-belarus/media/img/case1/komentar2.jpg"
        />
        <GeneralImageModal
          class="Description-item_img"
          alt=""
          fullImageUrl="https://televizeestrada.cz/framed-in-belarus/media/img/case1/proces1_full.jpg"
          iconImageUrl="https://televizeestrada.cz/framed-in-belarus/media/img/case1/proces1.jpg"
        />
        <GeneralImageModal
          class="Description-item_img"
          alt=""
          fullImageUrl="https://televizeestrada.cz/framed-in-belarus/media/img/case1/proces2_full.jpg"
          iconImageUrl="https://televizeestrada.cz/framed-in-belarus/media/img/case1/proces2.jpg"
        />
        <div class="Description-item">
          <h3 class="ExhibitionTitle">List of exhibitions</h3>
          <ul class="ExhibitionList">
            <li class="ExhibitionList-item">
              <h4 class="ExhibitionListItem-title">
                <nuxt-link to="/News/the-little-bird-must-be-caught">
                  The little bird must be caught
                </nuxt-link>
              </h4>
              <p class="ExhibitionListItem-descript">
                <img
                  src="../../../assets/media/img/calendar.svg"
                  alt="Dates"
                  class="ExhibitionListItem-descript-icon descriptIcon"
                />
                18.11.2022 - 23.04.2023
              </p>
              <p class="ExhibitionListItem-descript">
                <img
                  src="../../../assets/media/img/location.svg"
                  alt="Location"
                  class="ExhibitionListItem-descript-icon descriptIcon"
                />
                <span class="museumName"
                >Weserburg Museum für Moderne Kunst.</span
                >
                <span class="museumCountry"
                >Bremen, <b class="b2">Germany</b></span
                >
              </p>
            </li>
            <!--            <li class="ExhibitionList-item">-->
            <!--              <h4 class="ExhibitionListItem-title">Name of exhibition</h4>-->
            <!--              <p class="ExhibitionListItem-descript">-->
            <!--                <img-->
            <!--                  src="../../../assets/media/img/calendar.svg"-->
            <!--                  alt="Dates"-->
            <!--                  class="ExhibitionListItem-descript-icon descriptIcon"-->
            <!--                />-->
            <!--                18.11.2022 - 23.04.2023-->
            <!--              </p>-->
            <!--              <p class="ExhibitionListItem-descript">-->
            <!--                <img-->
            <!--                  src="../../../assets/media/img/location.svg"-->
            <!--                  alt="Location"-->
            <!--                  class="ExhibitionListItem-descript-icon descriptIcon"-->
            <!--                />-->
            <!--                <span class="museumName"-->
            <!--                  >Weserburg Museum für Moderne Kunst long long long long-->
            <!--                  name.</span-->
            <!--                >-->
            <!--                <span class="museumCountry"-->
            <!--                  >Bremen, <b class="b2">Germany</b></span-->
            <!--                >-->
            <!--              </p>-->
            <!--            </li>-->
          </ul>
        </div>
      </article>
    </div>
  </main>
</template>

<style src="./Case.scss" lang="scss" scoped></style>

