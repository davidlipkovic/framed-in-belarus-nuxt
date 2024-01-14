<script setup>
import { ref } from "vue";

const emit = defineEmits([
  'closeModal',
])

const props = defineProps({
  toggleModal: {
    type: Boolean,
    default: false
  },
})

const question = ref(null)
</script>

<template>
  <GeneralInputModal
    class="questionModal"
    :displayModal="toggleModal"
    @closeModal="$emit('closeModal')"
  >
    <div class="inputModalContentWrapper">
      <div class="inputModalHeader flexRowStart">
        <h2>
          {{ $t('mainMenu.question.label') }}
        </h2>
        <button
          @click="$emit('closeModal')"
          class="closeButton"
        >
          <SvgClose/>
        </button>
      </div>
      <div class="inputModalBody">
        <div class="inputModalItem questionModalItem flexColumnStart">
          <label for="question">
            {{ $t('mainMenu.question.label') }}
          </label>
          <textarea
            id="question" 
            name="question"
            v-model="question"
          />
          <p class="textAreaDescription">
            {{ $t('mainMenu.question.content') }}
          </p>
        </div>
      </div>
      <div class="inputModalFooter buttons">
        <button 
          class="button" 
          @click="$emit('closeModal')"
        >
          {{ $t('buttons.cancel') }}
        </button>
        <button 
          class="button"
          :class="question ? 'bg_black' : 'button_disabled'"
          @click="$emit('closeModal')"
        >
          {{ $t('buttons.send') }}
        </button>
      </div>
    </div>
  </GeneralInputModal>
</template>

<style src="../../../assets/style/form.scss" lang="scss" scoped></style>
<style src="./QuestionModal.scss" lang="scss"></style>
