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

      <section class="Publication Waiting textWidth">
        <div class="Publication-content">
          <h2 class="title"> Thank you! Please wait while we verify the information you have provided</h2>
          <p>When we verify the information <span class="b1">you will be informed by Email</span> and taken to the next step automatically</p>
        </div>
      </section>
    </div>
  </main>
</template>

<style src="../../../assets/style/form.scss" lang="scss"></style>
<style src="../Steps.scss" lang="scss" scoped></style>
<style src="../Step-4-photo/Step-4-photo.scss" lang="scss" scoped></style>
<style src="./Step-5-comment-wait.scss" lang="scss" scoped></style>
