<style src="./MainFooter.scss" lang="scss"></style>

<template>
  <footer class="Footer">    
    <div class="bg_black">
      <div class="content Info">
        <div class="Info-project">
          <a href="/" class="logo-project">
            <span class="firstSymbol">#</span><span class="text">
              {{ $t('title') }}
            </span>
          </a>
          <a href="mailto:framedinbelarus@gmail.com" class="Info-Project-email">framedinbelarus@gmail.com</a>
          <div class="Info-Project-social">
            <a href="https://www.facebook.com/hashtag/framedinbelarus" target="_blank" class="Facebook"><img src="@/assets/media/img/facebook.svg" alt="Facebook"></a>
            <a href="https://www.instagram.com/explore/tags/framedinbelarus/" target="_blank" class="Instagram"><img src="@/assets/media/img/instagram.svg" alt="Instagram"></a>
          </div>
        </div>
        <nav class="Info-menu">
          <div class="Info-menu-group">
            <div class="Info-menu-group">
            <!-- <nuxt-link
              to="Gallery"
              class="Info-menu-item">
              Gallery
              </nuxt-link>-->
              <nuxt-link
              to="News"
              class="Info-menu-item">
                {{ $t('linkNews') }}
              </nuxt-link>
              <nuxt-link
              to="AboutUs"
              class="Info-menu-item">
                {{ $t('linkAboutUs') }}
              </nuxt-link>
              <!-- <nuxt-link
              to="FAQ"
              class="Info-menu-item">
                {{ $t('linkFAQ') }}
              </nuxt-link> -->
            </div>
            <div class="Info-menu-group">
              <!-- <a href="#" class="Info-menu-item Login">Log in</a> -->
            </div>
          </div>
          <div class="Info-menu-group" style="justify-content: flex-end">
            <a href="https://forms.gle/SKCcvWGzRkQxx2fH9" class="Info-menu-item button bg_red">
              {{ $t('participateBtnMsg') }}
            </a>
          </div>
        </nav>
      </div>
    </div>
  </footer>
</template>
