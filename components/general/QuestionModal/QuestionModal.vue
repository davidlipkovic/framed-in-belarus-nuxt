<script setup>
const emit = defineEmits([
  'closeModal',
])

const props = defineProps({
  toggleModal: {
    type: Boolean,
    default: false
  },
})
</script>

<template>
  <GeneralModal
    class="questionModal"
    :displayModal="toggleModal"
    @closeModal="$emit('closeModal')"
  >
    <div class="Settings content">
      <div class="Settings-header">
        <h2>
          {{ $t('mainMenu.question.label') }}
        </h2>
      </div>
      <div class="Settings-body">
        <div class="Settings-item Settings-item_reason">
          <div class="Settings-item-main">
            <label for="reason" class="Settings-item-title">
              {{ $t('mainMenu.question.label') }}
            </label>
            <textarea class="Settings-item-input" id="reason" name="reason" />
            <p class="textAreaDescription">
              {{ $t('mainMenu.question.content') }}
            </p>
          </div>
        </div>
        <div class="Settings-item Settings-item_buttons">
          <div class="Settings-item-main buttons">
            <button 
              class="button" 
              @click="$emit('closeModal')"
            >
              {{ $t('buttons.cancel') }}
            </button>
            <button 
              class="button bg_black"
              @click="$emit('closeModal')"
            >
              {{ $t('buttons.send') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </GeneralModal>
</template>

<style src="../../../assets/style/settings.scss" lang="scss" scoped></style>
<style src="./QuestionModal.scss" lang="scss"></style>
