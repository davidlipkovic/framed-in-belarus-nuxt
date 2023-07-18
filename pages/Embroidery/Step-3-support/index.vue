<script setup>
definePageMeta({
  layout: "embroidery"
})
</script>

<template>
  <main class="Content">
    <Head>
      <Title>#Framed in Belarus / Step 3 — Support the political prisoner</Title>
      <Meta name="description" content="First step"/>
    </Head>
    <div class="Title">
      <div class="content">
        <h1>
          <span class="subtitle">
            {{ $t('embroidery.steps.step') }} 3
          <span class="visually-hidden">— </span></span>
          {{ $t('embroidery.step3Page.title') }}
        </h1>
        <GeneralGoBack
          page="Profile"
        />
      </div>
    </div>
    <div class="content">
      <RegistrationNavSteps
        :currentStep="3"
      />
      <section>
        <input type="checkbox" class="visually-hidden" id="HeroHidden">
        <RegistrationHeroBio class="textWidth"/>
        <article>
          <div class="textWidth">
            <blockquote class="blockquote">
              <p class="blockquote-content">
                <span class="blockquote-quote_opened">“</span>
                  {{ $t('embroidery.step3Page.quote.content') }}
                <span class="blockquote-quote_closed">”</span>
              </p>
              <p class="blockquote-author">
                {{ $t('embroidery.step3Page.quote.author') }}
              </p>
            </blockquote>
            <p>
              {{ $t('embroidery.step3Page.section1.paragraph1') }}
            </p>
          </div>
          <dl class="SupportMethods textWidth">
            <dt class="SupportMethod-title">
              {{ $t('embroidery.step3Page.section2.title') }}
            </dt>
            <dd class="SupportMethod-content">
              {{ $t('embroidery.step3Page.section2.paragraph1.content1') }} <span class="likeA">{{ $t('embroidery.step3Page.section2.paragraph1.highlight1') }}</span> {{ $t('embroidery.step3Page.section2.paragraph1.content2') }} <span class="likeA">{{ $t('embroidery.step3Page.section2.paragraph1.highlight2') }}</span>.
            </dd>
            <dt class="SupportMethod-title">
              {{ $t('embroidery.step3Page.section3.title') }}
            </dt>
            <dd class="SupportMethod-content">
              <p>
                {{ $t('embroidery.step3Page.section3.paragraph1.content') }} <a href="https://prisoners.spring96.org/en" target="_blank">{{ $t('embroidery.step3Page.section3.paragraph1.highlight') }}</a>.
              </p>
              <br>
              <p>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfhsgpGwDc9sskZ82LN_eKwwZBAX9U5kLARAFo2eR1UGw8Usg/viewform?usp=send_form" 
                  target="_blank"
                >
                  {{ $t('embroidery.step3Page.section3.paragraph2.content') }}
                </a>
                  {{ $t('embroidery.step3Page.section3.paragraph2.highlight') }}
                </p>
              <br>
              <h2 class="title">
                {{ $t('embroidery.step3Page.section3.paragraph3') }}
              </h2>
              <dl>
                <dt><b>{{ $t('embroidery.step3Page.section3.paragraph4.highlight') }}</b></dt>
                <dd>{{ $t('embroidery.step3Page.section3.paragraph4.content') }}</dd>
                <dt><b>{{ $t('embroidery.step3Page.section3.paragraph5.highlight') }}</b></dt>
                <dd>{{ $t('embroidery.step3Page.section3.paragraph5.content') }}</dd>
                <dt><b>{{ $t('embroidery.step3Page.section3.paragraph6.highlight') }}</b></dt>
                <dd>{{ $t('embroidery.step3Page.section3.paragraph6.content') }}</dd>
              </dl>
            </dd>
            <dt class="SupportMethod-title">
              {{ $t('embroidery.step3Page.section4.title.content') }}<a href="https://politzek.me/" target="_blank">{{ $t('embroidery.step3Page.section4.title.highlight') }}</a>
            </dt>
            <dd class="SupportMethod-content">
              {{ $t('embroidery.step3Page.section4.paragraph1') }}
            </dd>
            <dt class="SupportMethod-title">
              {{ $t('embroidery.step3Page.section5.title') }}
            </dt>
            <dd class="SupportMethod-content">
              <ul>
                <li><a href="https://dissidentby.com/en/help" target="_blank">{{ $t('embroidery.step3Page.section5.paragraph1') }}</a></li>
                <li><a href="https://bysol.org/en/" target="_blank">{{ $t('embroidery.step3Page.section5.paragraph2') }}</a></li>
                <li><a href="https://Ineedhelpby.org" target="_blank">{{ $t('embroidery.step3Page.section5.paragraph3') }}</a></li>
                <li><a href="https://en.stranafund.org" target="_blank">{{ $t('embroidery.step3Page.section5.paragraph4') }}</a></li>
              </ul>
            </dd>
          </dl>
        </article>
        <div class="buttons">
          <nuxt-link 
            :to="localePath('/Embroidery/Step-2-preparation')"
            class="button"
          >
            {{ $t('embroidery.step3Page.backButton') }}
          </nuxt-link>
          <nuxt-link 
            :to="localePath('/Embroidery/Step-4-photo')"
            class="button bg_black" 
            id="save"
          >
            {{ $t('embroidery.step3Page.forwardButton') }}
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../../../assets/style/steps.scss" lang="scss" scoped></style>
<style src="./Step-3-support.scss" lang="scss" scoped></style>
