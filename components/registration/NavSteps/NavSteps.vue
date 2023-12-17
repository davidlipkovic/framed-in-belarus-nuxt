<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
  currentStep: {
    type: Number
  },
})

const steps = [
  t("embroidery.steps.steps.step1"),
  t("embroidery.steps.steps.step2"),
  t("embroidery.steps.steps.step3"),
  t("embroidery.steps.steps.step4"),
  t("embroidery.steps.steps.step5"),
  t("embroidery.steps.steps.step6"),
  t("embroidery.steps.steps.step7")
]
</script>

<template>
  <section class="NavSteps NavStepsWrapper">
    <div 
      v-for="(step, i) in steps"
      :key="step"
      class="navStepWrapper"
    >
      <nuxt-link 
        v-if="i + 1 < currentStep"
        :to="localePath('/Embroidery/Step' + i + 1)"
        class="navStep navStep_done"
      >
        <span class="navStep-number"
        ><img
          src="../../../assets/media/img/checkmark.svg"
          alt="Performed"
          class="navStep_done-img"
        /></span>
        <span class="navStep-title">{{ step }}</span>
      </nuxt-link>
      <div 
        v-if="i + 1 >= currentStep"
        class="navStep"
        :class="currentStep === i + 1 ? 'navStep_current' : ''"
      >
        <span class="navStep-number">{{ i + 1 }}</span>
        <span class="navStep-title">{{ step }}</span>
      </div>
      <div 
        v-if="i + 1 < steps.length"
        class="navStep_arrow"
      >
      </div>
    </div>
  </section>
</template>

<style src="./NavSteps.scss" lang="scss" scoped></style>
