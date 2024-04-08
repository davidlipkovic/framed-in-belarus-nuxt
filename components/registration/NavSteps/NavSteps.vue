<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
  currentStep: {
    type: Number
  },
})

const steps = [
  {
    link: "/Embroidery/Step-1-choose-hero",
    title: t("embroidery.steps.steps.step1"),
  },
  {
    link: "/Embroidery/Step-2-preparation",
    title: t("embroidery.steps.steps.step2"),
  },
  {
    link: "/Embroidery/Step-3-support",
    title: t("embroidery.steps.steps.step3"),
  },
  {
    link: "/Embroidery/Step-4-photo",
    title: t("embroidery.steps.steps.step4"),
  },
  {
    link: "/Embroidery/Step-5-comment",
    title: t("embroidery.steps.steps.step5"),
  },
  {
    link: "/Embroidery/Step-6-choose-shipping",
    title: t("embroidery.steps.steps.step6"),
  },
  {
    link: "/Embroidery/Step-7-success",
    title: t("embroidery.steps.steps.step7"),
  },
]
</script>

<template>
  <section class="NavSteps NavStepsWrapper">
    <div 
      v-for="(step, i) in steps"
      :key="step.title"
      class="navStepWrapper"
    >
      <nuxt-link 
        v-if="i + 1 < currentStep"
        :to="localePath(step.link)"
        class="navStep navStep_done"
      >
        <span class="navStep-number">
          <img
            src="../../../assets/media/img/checkmark.svg"
            alt="Performed"
            class="navStep_done-img"
          />
        </span>
        <span class="navStep-title">
          {{ step.title }}
        </span>
      </nuxt-link>
      <div 
        v-if="i + 1 >= currentStep"
        class="navStep"
        :class="currentStep === i + 1 ? 'navStep_current' : ''"
      >
        <span class="navStep-number">
          {{ i + 1 }}
        </span>
        <span class="navStep-title">
          {{ step.title }}
        </span>
      </div>
      <div 
        v-if="i + 1 < steps.length"
        class="navStep_arrow"
      />
    </div>
  </section>
</template>

<style src="./NavSteps.scss" lang="scss" scoped></style>
