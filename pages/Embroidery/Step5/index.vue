<script setup>
definePageMeta({
  layout: "embroidery"
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
          <p>
            It could be interesting stories that happened to you in the context
            of the project or facts that you learned during this time about your
            hero, about Belarus, etc. It could be quotes from your
            correspondence with the political prisoner or your thoughts that
            arise during the work. Here you can also write wishes for your hero,
            his/her family, to all Belarusians or our project. This can take the
            form of an open letter.
          </p>
          <p>
            We would like to know if the project has left any resonance in you?
            Did participating in the project bring you any new experiences? Your
            answer will help us improve the project.
          </p>
          <p>
            If possible, please write the text in English. If not, please write
            it in your own language.
          </p>
          <p>
            It would be wonderful if you could write the text both by hand and
            in a digital version. Handwritten texts look better when installed
            with embroidery, but digital text is much easier to translate into
            other languages.
          </p>
        </div>
        <div class="part Comment">
          <div class="Comment-header">
            <label for="comment" class="title">Comment</label>
            <output id="lettersLeft">2300</output>
          </div>
          <div class="Comment-content">
            <textarea
              name="comment"
              id="comment"
              placeholder="Type a comment"
              class=""
            ></textarea>
            <p class="note">
              If possible, please write the text in English. If not, please
              write it in your own language.
            </p>
            <p class="mistake defaultNone">Please add a comment or a picture</p>
          </div>
        </div>
        <div class="part Photo">
          <h3 class="title">Upload my picture of a handwritten comment</h3>
          <div class="uploadFiles" id="uploadFilesArea">
            <label class="uploadFiles-descript" for="uploadFiles">
              <span class="line">Drag and Drop files here</span>
              <span class="line">or</span>
              <span class="line b">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  alt="+"
                  class="uploadFiles-descript-icon"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.578969 0.762563C1.26239 0.0791456 2.37043 0.0791456 3.05384 0.762563L12.3164 10.0251L21.579 0.762563C22.2624 0.0791456 23.3704 0.0791456 24.0538 0.762563C24.7373 1.44598 24.7373 2.55402 24.0538 3.23744L14.7913 12.5L24.0538 21.7626C24.7373 22.446 24.7373 23.554 24.0538 24.2374C23.3704 24.9209 22.2624 24.9209 21.579 24.2374L12.3164 14.9749L3.05384 24.2374C2.37043 24.9209 1.26239 24.9209 0.578969 24.2374C-0.104448 23.554 -0.104448 22.446 0.578969 21.7626L9.84153 12.5L0.578969 3.23744C-0.104448 2.55402 -0.104448 1.44598 0.578969 0.762563Z"
                    fill="#4F4F4F"
                  />
                </svg>
                Browse files
              </span>
            </label>
            <input
              type="file"
              multiple="multiple"
              id="uploadFiles"
              class="visually-hidden"
            />
          </div>

          <div class="photos">
            <div class="photo">
              <img
                src="../../../assets/media/img/case1/komentar1.jpg"
                alt="Photo of your embroidery"
                class="photo-img"
              />
              <button class="photo-btnDelete">
                <img
                  src="../../../assets/media/img/close-circle.svg"
                  alt="Delete"
                  class="photo-btnDelete-img"
                />
              </button>
            </div>
            <div class="photo">
              <img
                src="../../../assets/media/img/case1/komentar2.jpg"
                alt="Photo of your embroidery"
                class="photo-img"
              />
              <button class="photo-btnDelete">
                <img
                  src="../../../assets/media/img/close-circle.svg"
                  alt="Delete"
                  class="photo-btnDelete-img"
                />
              </button>
            </div>
          </div>
        </div>

        <div class="part publishComment">
          <p class="b2">
            This comment will be published in the web gallery and may be used in
            print and online publications, exhibitions, etc. in the context of
            the project presentations
          </p>
          <label for="publishAgree" class="publishComment-item">
            <input
              type="radio"
              name="publish"
              id="publishAgree"
              value="agree"
              class="publishComment-item-input"
              required
            />
            <span class="publishComment-item-label"
            >I agree, I want my voice to be heard</span
            >
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
            <span class="publishComment-item-label"
            >I disagree, please keep my comment for internal project needs
              only</span
            >
          </label>
          <label for="publishCant" class="publishComment-item">
            <input
              type="radio"
              name="publish"
              id="publishCant"
              value="cant"
              class="publishComment-item-input"
              required
            />
            <span class="publishComment-item-label"
            >I can not write a comment</span
            >
          </label>
          <p class="mistake defaultNone">Please choose one option</p>
        </div>

        <div class="buttons">
          <nuxt-link to="/Embroidery/Step4" class="button"
          >Previous step</nuxt-link
          >
          <nuxt-link to="/Embroidery/Step6" class="button bg_black" id="save">
            Save and go to Next step
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../../../assets/style/form.scss" lang="scss"></style>
<style src="../Steps.scss" lang="scss" scoped></style>
<style src="../Step4/Step4.scss" lang="scss" scoped></style>
<style src="./Step5.scss" lang="scss" scoped></style>
