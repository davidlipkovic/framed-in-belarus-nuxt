<script setup>
definePageMeta({
  layout: "embroidery"
})

const AlphabetPattern1 = ref({ show: false })
const AlphabetPattern2 = ref({ show: false })
const AlphabetPattern3 = ref({ show: false })
</script>

<template>
  <div>
    <main class="Content">
      <Head>
        <Title>#Framed in Belarus / Step 2 — Preparation</Title>
        <Meta name="description" content="First step" />
      </Head>
      <div class="Title">
        <div class="content">
          <h1>
          <span class="subtitle"
          >Step 2 <span class="visually-hidden">— </span></span
          >Preparation
          </h1>        <GeneralGoBack
          page="Profile"
        />

        </div>
      </div>
      <div class="content">
        <RegistrationNavSteps
          :currentStep="2"
        />

        <section class="Step2">
          <GeneralImageModal
            alt=""
            fullImageUrl="https://televizeestrada.cz/framed-in-belarus/media/img/case1/schema_full.jpg"
            iconImageUrl="https://televizeestrada.cz/framed-in-belarus/media/img/case1/schema.jpg"
          />

          <input type="checkbox" class="visually-hidden" id="HeroHidden" />
          <RegistrationHeroBio />

          <article class="manual">
            <div class="manual-part">
              <h2 class="title">What to buy?</h2>
              <ul>
                <li>
                  <strong class="b2">Fabric color</strong>: white/natural (canvas
                  or fabric with #weave)
                </li>
                <li>
                  <strong class="b2">Thread color</strong>: any shades of red /
                  color combinations are possible at your discretion.
                </li>
              </ul>
            </div>
            <div class="manual-part">
              <h2 class="title">How big does my embroidery have to be?</h2>
              <p>
                Choose any canvases that you feel most comfortable working with.
                The size of the embroidery will depend on that image. Each job
                will be a little different in format - that's ok, we take this
                into account.
              </p>
            </div>
            <div class="manual-part">
              <h2 class="title">How much fabric do I buy?</h2>
              <p>
                You can use any fabric with a cross weave, or buy a special fabric
                for embroidery - Aida. To accurately determine the size of the
                fabric, you need to count 145 cells on the canvas. However,
                counting so many cells is too long and complicated, so we suggest
                counting 10 cells, measuring the distance with a ruler and
                multiplying by 14,5. To the result add about 5 cm on each side -
                this will be your final size.
              </p>
              <p>
                The fabric for the embroidery is called Aida. It comes in a
                different raster - the number behind the word Aida determines how
                many crosses fit in one centimetre.
              </p>
              <p>
                The smaller the number - the larger the cross. Usually it is sold
                in metres of 140 cm width.
              </p>
              <p>
                We've calculated in advance how much Aida fabric you might need in
                different widths - see the size chart:
              </p>
            </div>
            <table class="sizeChart">
              <thead>
              <tr>
                <td>Number Aida</td>
                <td>Size of the embroidery</td>
                <td>Seam allowances</td>
                <td>Final fabric size</td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Aida 3</td>
                <td>48,3 х 48,3 cm</td>
                <td>+/- 5 cm on each side</td>
                <td>57 x 57 cm</td>
              </tr>
              <tr>
                <td>Aida 4</td>
                <td>36,25 x 36,25 cm</td>
                <td>+/- 5 cm on each side</td>
                <td>45 x 45 cm</td>
              </tr>
              <tr>
                <td>Aida 5</td>
                <td>29 х 29 cm</td>
                <td>+/- 5 cm on each side</td>
                <td>37 x 37 cm</td>
              </tr>
              <tr>
                <td>Aida 6</td>
                <td>24,2 х 24,2 cm</td>
                <td>+/- 5 cm on each side</td>
                <td>35 x 35 cm</td>
              </tr>
              <tr>
                <td>Aida 7</td>
                <td>20,7 х 20,7 cm</td>
                <td>+/- 5 cm on each side</td>
                <td>30 x 30 cm</td>
              </tr>
              <tr>
                <td>Aida 8</td>
                <td>18,1 х 18,1 cm</td>
                <td>+/- 5 cm on each side</td>
                <td>27 x 27 cm</td>
              </tr>
              </tbody>
            </table>
            <div class="manual-part">
              <h2 class="title">And a hoop?</h2>
              <p>
                You don't need a hoop for this type of embroidery, but if it makes
                you feel more comfortable, use one!
              </p>
            </div>
            <div class="manual-part">
              <h2 class="title">How to embroider?</h2>
              <p>
                We suggest that you start in the middle of your embroidery. Fold
                the fabric in half twice - this is how you will find the centre of
                the fabric. The centre is also marked on the diagram. This is your
                starting point. Count off the number of empty cells from the
                centre to the beginning of the motif - this is usually the foot of
                the schematic man. Do the same on the fabric.
              </p>
              <p>
                Continue the work, counting the empty and filled cells. Follow the
                scheme. There is already a counted number of crosses in the most
                complicated places.
              </p>
              <p>Watch the informative <b class="b2">video lesson</b>.</p>
            </div>
            <iframe
              width="100%"
              height="456"
              src="https://www.youtube.com/embed/O7FEv4ZVdm8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div class="subscription flexRowStart">
              <div class="subscription-content">
                <h2 class="title">Work subscription</h2>
                <p>
                  Instead of the "YOUR NAME, CITY, YEAR" line, sign the final embroidery with your name or pseudonym. 
                  If you worked on the embroidery collectively, have everyone embroider their name/pseudonym. 
                  We enclose a Latin and Belarusian alphabet from which you will make up your signature. 
                  You can come up with your own font. It would be great if you could also embroider the place you are from, 
                  the date, or any other text. If you think your work should be accentuated by decorations, add them.
                </p>
                <p class="b2">
                  Please don't be afraid to make mistakes - the embroidery does not have to be perfect, let it be ORIGINAL, be YOURSELF!
                </p>
              </div>
              <div class="subscription-patterns-wrapper">
                <GeneralImageModal
                  alt=""
                  fullImageUrl="https://televizeestrada.cz/framed-in-belarus/media/img/ABCD1_full.jpg"
                  iconImageUrl="https://televizeestrada.cz/framed-in-belarus/media/img/ABCD1.jpg"
                  class="subscription-pattern"
                />
                <GeneralImageModal
                  alt=""
                  fullImageUrl="https://televizeestrada.cz/framed-in-belarus/media/img/ABCD2_full.jpg"
                  iconImageUrl="https://televizeestrada.cz/framed-in-belarus/media/img/ABCD2.jpg"
                  class="subscription-pattern"
                />
                <GeneralImageModal
                  alt=""
                  fullImageUrl="https://televizeestrada.cz/framed-in-belarus/media/img/ABCD3_full.jpg"
                  iconImageUrl="https://televizeestrada.cz/framed-in-belarus/media/img/ABCD3.jpg"
                  class="subscription-pattern"
                />
              </div>
            </div>
          </article>
          <div class="buttons">
            <nuxt-link
              to="/Embroidery/Step-3-support"
              id="save"
              class="button bg_black"
            >
              Next step
            </nuxt-link>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style src="../Steps.scss" lang="scss" scoped></style>
<style src="./Step-2-preparation.scss" lang="scss" scoped></style>
