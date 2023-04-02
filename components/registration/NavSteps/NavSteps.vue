<script>
export default {
  props: {
    currentStep: Number
  },
  data () {
    return {
      steps: [
        "Your Hero",
        "Preparation",
        "Support",
        "Photo",
        "Comment",
        "Shipping",
        "Publication"
      ]
    }
  },
}
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
        :to="'/Embroidery/Step' + i + 1" 
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
