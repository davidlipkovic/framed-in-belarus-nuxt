<style src="./MainMenu.scss" lang="scss"></style>

<template>
  <input type="checkbox" id="Burger" class="Burger-checker visually-hidden">
  <header class="Header">
    <div class="content">
      <a href="#" class="logo-project">
        <span class="firstSymbol">#</span><span class="text">Framed in Belarus</span>
      </a>
      <label for="Burger" class="Burger-button" role="button" aria-role="button">
        <span class="Burger-button-item">—</span>
        <span class="Burger-button-item">—</span>
        <span class="Burger-button-item">—</span>
      </label>
      <nav class="Burger-menu">
        <div class="Burger-menu-group">
<!--          <nuxt-link -->
<!--            to="Gallery"-->
<!--            class="Burger-menu-item"-->
<!--          >-->
<!--            Gallery-->
<!--          </nuxt-link>-->
          <nuxt-link
              to="News"
              class="Burger-menu-item"
          >
            News
          </nuxt-link>
          <nuxt-link
            to="Contacts"
            class="Burger-menu-item"
          >
            Contacts
          </nuxt-link>
<!--          <nuxt-link -->
<!--            to="FAQ"-->
<!--            class="Burger-menu-item"-->
<!--          >-->
<!--            FAQ-->
<!--          </nuxt-link>-->
        </div>
        <div class="Burger-menu-group">
<!--          <nuxt-link -->
<!--            to="Login" -->
<!--            class="Burger-menu-item Login"-->
<!--          >-->
<!--            Log in-->
<!--          </nuxt-link> -->
          <a
            href="https://forms.gle/SKCcvWGzRkQxx2fH9"
            class="Burger-menu-item button bg_red"
          >
            Want to&nbsp;participate
          </a>
<!--          <nuxt-link-->
<!--            to="#"-->
<!--            id="Lang"-->
<!--            class="Burger-menu-item Lang"-->
<!--          >-->
<!--            ENG-->
<!--            <img class="arrow" src="@/assets/media/img/arrow.svg">-->
<!--          </nuxt-link>-->
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showMainMenu: false
    }
  }
}
</script>
