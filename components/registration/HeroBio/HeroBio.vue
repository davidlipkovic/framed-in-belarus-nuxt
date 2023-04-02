<script>
export default {
  props: {
  },
  data () {
    return {
    }
  },
}
</script>

<template>
  <article class="Hero HeroWrapper">
    <input type="checkbox" class="visually-hidden" id="heroMore" />
    <div class="Hero-header">
      <img
        src="../../../assets/media/img/case1/prisoner.jpg"
        alt="Hero Name Surname"
        class="Hero-header-photo"
      />
      <div class="Hero-header-title">
        <p class="Hero-header-case">Case: Seizure of power</p>
        <h2 class="Hero-header-name">Maryia Kalesnikava</h2>
      </div>
      <label class="Hero-more-button" for="heroMore">
        <span class="Hero-more-button-text">More information</span>
        <svg
          class="Hero-more-button-img"
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.85522 0.878982L8.14812 0.171875L4.36684 3.95315L0.707107 0.293424L0 1.00053L3.65973 4.66026L3.65381 4.66617L4.36092 5.37328L8.85522 0.878982Z"
            fill="#4F4F4F"
          />
        </svg>
      </label>
    </div>
    <label for="HeroHidden" class="Hero-close">
      <img
        src="../../../assets/media/img/close.svg"
        alt="Close"
        class="Hero-close-img"
      />
    </label>
    <div class="Hero-content">
      <div class="Hero-content-titleWrapper">
        <div class="Hero-Description-data">
          <h3 class="title">Date of birth:</h3>
          <p>24 April 1982</p>
        </div>
        <div class="Hero-Description-data">
          <h3 class="title">Date of detention:</h3>
          <p>7 September 2020</p>
        </div>
        <div class="Hero-Description-data">
          <h3 class="title">Sentence:</h3>
          <p>11 years</p>
        </div>
      </div>
      <div class="Hero-Description-data">
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
      <div class="Hero-Description-data">
        <h3 class="title">Description of the case:</h3>
        <p>
          The case description is the same as the political prisoner’s
          description because this is an individual case, not a collective
          one.
        </p>
      </div>
      <div class="Hero-Description-data">
        <h3 class="title">Address of the prison:</h3>
        <p>Penal colony No. 4. 246035, Homieĺ, vulica Antoshkina 3</p>
      </div>
      <label class="Hero-less-button" for="heroMore">
        <span class="Hero-less-button-text">Less information</span>
        <svg
          class="Hero-less-button-img"
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.85522 0.878982L8.14812 0.171875L4.36684 3.95315L0.707107 0.293424L0 1.00053L3.65973 4.66026L3.65381 4.66617L4.36092 5.37328L8.85522 0.878982Z"
            fill="#4F4F4F"
          />
        </svg>
      </label>
    </div>
  </article>
</template>

<style src="./HeroBio.scss" lang="scss" scoped></style>
