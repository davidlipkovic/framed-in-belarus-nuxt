<script setup>
import { computed, onMounted, ref, watch } from "vue";

definePageMeta({
  layout: "embroidery"
})

const text = ref('')
const fine = ref(false)

watch(text, (n) => {
  if (n.length > 0) {
    fine.value = true
  }
})
</script>

<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus / Step 5 — Comment</Title>
      <Meta name="description" content="First step" />
    </Head>
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle"
          >Step 5 <span class="visually-hidden">— </span></span
          >Comment
        </h1>
        <GeneralGoBack
          page="Profile"
        />
      </div>
    </div>
    <div class="content">
      <RegistrationNavSteps
        :currentStep="5"
      />

      <section class="textWidth">
        <input type="checkbox" class="visually-hidden" id="HeroHidden" />
        <RegistrationHeroBio />
        
        <div class="part">
          <h2 class="title">
            Write a short comment about your experience of embroidering
            a political prisoner
          </h2>
          <br>
          <p>
            It could be interesting stories that happened to you in the context of the project or facts that you learned during this time about your hero, about Belarus, etc. It could be quotes from your correspondence with the political prisoner or your thoughts that arise during the work. Here you can also write wishes for your hero, his/her family, to all Belarusians or our project. This can take the form of an open letter.
          </p>
          <br>
          <p>
            We would like to know if the project has left any resonance in you? Did participating in the project bring you any new experiences? Your answer will help us improve the project.
          </p>
          <br>
          <p>
            It would be wonderful if you can also write a handwritten comment and send it to us together with the finished embroidery. Because the handwritten text looks better when installed on the exhibitions. 
          </p>
          <br>
          <label for="publishDisagree" class="publishComment-item">
            <input
              type="radio"
              name="publish"
              id="publishDisagree"
              value="disagree"
              class="publishComment-item-input"
              required
            />
            <span class="publishComment-item-label">
              I wrote a handwritten comment and will send it along with the embroidery.
            </span>
          </label>
          <label for="publishDisagree" class="publishComment-item">
            <input
              type="radio"
              name="publish"
              id="publishDisagree"
              value="disagree"
              class="publishComment-item-input"
              required
            />
            <span class="publishComment-item-label">
              I will type a comment here
            </span>
          </label>
        </div>
        <div class="part Comment">
          <div class="Comment-header">
            <label for="comment" class="title">Comment</label>
            <!-- <output id="lettersLeft">2300</output> -->
          </div>
          <div class="Comment-content">
            <p class="note">
              If possible, please write the text in English.
            </p>
            <textarea
              name="comment"
              id="comment"
              placeholder="Type a comment in English"
              class=""
              v-model="text"
            ></textarea>
            <p class="mistake defaultNone">Please add a comment or a picture</p>
          </div>
          <br>
          <div class="Comment-content">
            <p class="note">
              Choose the language
            </p>
            <textarea
              name="comment"
              id="comment"
              placeholder="Type a comment in your own language"
              class=""
              v-model="text"
            ></textarea>
            <p class="mistake defaultNone">Please add a comment or a picture</p>
          </div>
        </div>

        <div class="part publishComment">
          <p class="b2">
            This comment will be published in the web gallery and may be used in print and online publications, exhibitions, etc. in the context of the project presentations
          </p>
          <br>
          <label for="publishAgree" class="publishComment-item">
            <input
              type="radio"
              name="publish"
              id="publishAgree"
              value="agree"
              class="publishComment-item-input"
              required
            />
            <span class="publishComment-item-label">
              I agree, I want my voice to be heard
            </span>
          </label>
          <label for="publishDisagree" class="publishComment-item">
            <input
              type="radio"
              name="publish"
              id="publishDisagree"
              value="disagree"
              class="publishComment-item-input"
              required
            />
            <span class="publishComment-item-label">
              I disagree, please keep my comment for internal project needsonly
            </span>
          </label>
          <p class="mistake defaultNone">Please choose one option</p>
        </div>
        <div class="buttons">
          <nuxt-link to="/Embroidery/Step-4-photo" class="button"
          >Previous step</nuxt-link
          >
          <nuxt-link 
            to="/Embroidery/Step6" 
            class="button bg_black" 
            :class="fine? '' : 'button_disabled'" 
            id="save"
          >
            Save and go to Next step
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../../../assets/style/form.scss" lang="scss"></style>
<style src="../Steps.scss" lang="scss" scoped></style>
<style src="../Step-4-photo/Step-4-photo.scss" lang="scss" scoped></style>
<style src="./Step-5-comment.scss" lang="scss" scoped></style>
