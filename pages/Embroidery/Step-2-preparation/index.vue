<script setup>
definePageMeta({
  layout: "embroidery"
})

const AlphabetPattern1 = ref({ show: false })
const AlphabetPattern2 = ref({ show: false })
const AlphabetPattern3 = ref({ show: false })
</script>

<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus / Step 2 — Preparation</Title>
      <Meta name="description" content="First step" />
    </Head>
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">
            {{ $t('embroidery.steps.step') }} 2
          <span class="visually-hidden">— </span></span>
          {{ $t('embroidery.step2Page.title') }}
        </h1>
        <GeneralGoBack
          :isEmbroidery="true"
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
          class="paternSchemaWrapper"
        />
        <RegistrationHeroBio />
        <article class="manual">
          <div class="manual-part">
            <h2 class="title">
              {{ $t('embroidery.step2Page.section1.title') }}
            </h2>
            <ul>
              <li>
                <strong class="b1">
                  {{ $t('embroidery.step2Page.section1.paragraph1.highlight') }}
                </strong>: {{ $t('embroidery.step2Page.section1.paragraph1.content') }}
              </li>
              <li>
                <strong class="b1">
                  {{ $t('embroidery.step2Page.section1.paragraph2.highlight') }}
                </strong>: {{ $t('embroidery.step2Page.section1.paragraph2.content') }}
              </li>
            </ul>
          </div>
          <div class="manual-part">
            <h2 class="title">
              {{ $t('embroidery.step2Page.section2.title') }}
            </h2>
            <p>
              {{ $t('embroidery.step2Page.section2.paragraph1') }}
            </p>
          </div>
          <div class="manual-part">
            <h2 class="title">
              {{ $t('embroidery.step2Page.section3.title') }}
            </h2>
            <p>
              {{ $t('embroidery.step2Page.section3.paragraph1') }}
            </p>
            <br>
            <p>
              {{ $t('embroidery.step2Page.section3.paragraph2') }}
            </p>
            <p>
              {{ $t('embroidery.step2Page.section3.paragraph3') }}
            </p>
            <p>
              {{ $t('embroidery.step2Page.section3.paragraph4') }}
            </p>
          </div>
          <table class="sizeChart">
            <thead>
            <tr>
              <td>
                {{ $t('embroidery.step2Page.section4.headerRow.cell1') }}
              </td>
              <td>
                {{ $t('embroidery.step2Page.section4.headerRow.cell2') }}
              </td>
              <td>
                {{ $t('embroidery.step2Page.section4.headerRow.cell3') }}
              </td>
              <td>
                {{ $t('embroidery.step2Page.section4.headerRow.cell4') }}
              </td>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{{ $t('embroidery.step2Page.section4.aida') }} 3</td>
              <td>48,3 х 48,3 {{ $t('embroidery.step2Page.section4.cm') }}</td>
              <td>+/- 5 {{ $t('embroidery.step2Page.section4.side') }}</td>
              <td>57 x 57 {{ $t('embroidery.step2Page.section4.cm') }}</td>
            </tr>
            <tr>
              <td>{{ $t('embroidery.step2Page.section4.aida') }} 4</td>
              <td>36,25 x 36,25 {{ $t('embroidery.step2Page.section4.cm') }}</td>
              <td>+/- 5 {{ $t('embroidery.step2Page.section4.side') }}</td>
              <td>45 x 45 {{ $t('embroidery.step2Page.section4.cm') }}</td>
            </tr>
            <tr>
              <td>{{ $t('embroidery.step2Page.section4.aida') }} 5</td>
              <td>29 х 29 {{ $t('embroidery.step2Page.section4.cm') }}</td>
              <td>+/- 5 {{ $t('embroidery.step2Page.section4.side') }}</td>
              <td>37 x 37 {{ $t('embroidery.step2Page.section4.cm') }}</td>
            </tr>
            <tr>
              <td>{{ $t('embroidery.step2Page.section4.aida') }} 6</td>
              <td>24,2 х 24,2 {{ $t('embroidery.step2Page.section4.cm') }}</td>
              <td>+/- 5 {{ $t('embroidery.step2Page.section4.side') }}</td>
              <td>35 x 35 {{ $t('embroidery.step2Page.section4.cm') }}</td>
            </tr>
            <tr>
              <td>{{ $t('embroidery.step2Page.section4.aida') }} 7</td>
              <td>20,7 х 20,7 {{ $t('embroidery.step2Page.section4.cm') }}</td>
              <td>+/- 5 {{ $t('embroidery.step2Page.section4.side') }}</td>
              <td>30 x 30 {{ $t('embroidery.step2Page.section4.cm') }}</td>
            </tr>
            <tr>
              <td>{{ $t('embroidery.step2Page.section4.aida') }} 8</td>
              <td>18,1 х 18,1 {{ $t('embroidery.step2Page.section4.cm') }}</td>
              <td>+/- 5 {{ $t('embroidery.step2Page.section4.side') }}</td>
              <td>27 x 27 {{ $t('embroidery.step2Page.section4.cm') }}</td>
            </tr>
            </tbody>
          </table>
          <div class="manual-part">
            <h2 class="title">
              {{ $t('embroidery.step2Page.section5.title') }}
            </h2>
            <p>
              {{ $t('embroidery.step2Page.section5.paragraph1') }}
            </p>
          </div>
          <div class="manual-part">
            <h2 class="title">
              {{ $t('embroidery.step2Page.section6.title') }}
            </h2>
            <p>
              {{ $t('embroidery.step2Page.section6.paragraph1') }}
            </p>
            <p>
              {{ $t('embroidery.step2Page.section6.paragraph2') }}
            </p>
            <br>
            <p>
              {{ $t('embroidery.step2Page.section6.paragraph3.content1') }} 
              <b class="b2">
                {{ $t('embroidery.step2Page.section6.paragraph3.highlight') }}
              </b>
              {{ $t('embroidery.step2Page.section6.paragraph3.content2') }}
            </p>
          </div>
          <iframe
            src="https://www.youtube.com/embed/O7FEv4ZVdm8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
          <div class="subscription flexRowStart">
            <div class="subscription-content">
              <h2 class="title">
                {{ $t('embroidery.step2Page.section7.title') }}
              </h2>
              <p>
                {{ $t('embroidery.step2Page.section7.paragraph1') }}
              </p>
              <p class="b2">
                {{ $t('embroidery.step2Page.section7.paragraph2') }}
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
        <div class="buttons flexColumnCenter">
          <nuxt-link
            :to="localePath('/Embroidery/Step-3-support')"
            id="save"
            class="button bg_black"
          >
            {{ $t('embroidery.step2Page.forwardButton') }}
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../../../assets/style/steps.scss" lang="scss" scoped></style>
<style src="./Step-2-preparation.scss" lang="scss" scoped></style>
