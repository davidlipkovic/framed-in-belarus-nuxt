<style src="./MainFooter.scss" lang="scss"></style>

<template>
  <footer class="Footer">
    <div class="content Partners">
      <div class="Partners-group">
        <a href="https://spring96.org" target="_blank" class="Partners-logo"><!--
        --><img src="@/assets/media/img/spring96_en.png" alt="Viasna" class="img"><!--
      --></a>
        <a href="https://amnesty.cz" target="_blank" class="Partners-logo"><!--
        --><img src="@/assets/media/img/amnesty.png" alt="Amnesty International" class="img"><!--
      --></a>
        <a href="https://vkletochku.org" target="_blank" class="Partners-logo"><!--
        --><img src="@/assets/media/img/vkletochku.png" alt="Письма в клеточку" class="img"><!--
      --></a>
        <a href="https://en.stranafund.org" target="_blank" class="Partners-logo"><!--
        --><img src="@/assets/media/img/stranafund_en.png" alt="COUNTRY TO LIVE IN FOUNDATION" class="img"><!--
      --></a>
      </div>
      <div class="Partners-group">
        <a href="https://tutaka.org" target="_blank" class="Partners-logo"><!--
        --><img src="@/assets/media/img/tutaka.png" alt="Tutaka" class="img"><!--
      --></a>
        <a href="https://politzek.me" target="_blank" class="Partners-logo"><!--
        --><img src="@/assets/media/img/politzek.png" alt="politzek.me" class="img"><!--
      --></a>
        <a href="https://vyzyvanka.com" target="_blank" class="Partners-logo"><!--
        --><img src="@/assets/media/img/vyzyvanka.png" alt="VYZHYVANKA" class="img"><!--
      --></a>
      </div>
    </div>
    <div class="bg_black">
      <div class="content Info">
        <div class="Info-project">
          <a href="#" class="logo-project">
            <span class="firstSymbol">#</span><span class="text">Framed in Belarus</span>
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
              <!-- <a href="#" class="Info-menu-item">Gallery</a>-->
              <nuxt-link
              to="/news"
              class="Info-menu-item"
              >
                News
              </nuxt-link>
              <nuxt-link
                to="/about_us"
                class="Info-menu-item"
              >
                About us
              </nuxt-link>
              <!--<a href="#" class="Info-menu-item">FAQ</a> -->
            </div>
            <div class="Info-menu-group">
              <!-- <a href="#" class="Info-menu-item Login">Log in</a> -->
            </div>
          </div>
          <div class="Info-menu-group" style="justify-content: flex-end">
            <a href="https://forms.gle/SKCcvWGzRkQxx2fH9" class="Info-menu-item button bg_red">Want to&nbsp;participate</a>
          </div>
        </nav>
      </div>
    </div>
  </footer>
</template>
