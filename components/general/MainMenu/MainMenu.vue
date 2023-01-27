<script setup>
  const { locale, locales } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const availableLocales = computed(() => {
    return (locales.value).filter(i => i.code !== locale.value)
  })

  // const burgerButton = document.querySelector('.Burger-button');

  // function burgerButtonIsClikable() {   
  //   const burgerButtonItems = Array.from(document.querySelectorAll('.Burger-button__item'));
  //   const burgerMenu = document.querySelector('.Burger-menu');
  //   const burgerMenuItems = Array.from(document.querySelectorAll('.Burger-menu__item'));
  //   const body = document.querySelector('body');
  //   const Content = document.querySelector('.Content');
  //   const Footer = document.querySelector('.Footer');
  //   burgerButton.onclick = function(){
  //     burgerButton.classList.toggle('Burger-button_close');
  //     burgerButtonItems.forEach(element => {
  //       element.classList.toggle('Burger-button_close__item');
  //     });
  //     burgerMenu.classList.toggle('Burger-menu_open');
  //     burgerMenuItems.forEach(element => {
  //       element.classList.toggle('Burger-menu_open__item');
  //     });
  //     body.classList.toggle('showOnlyHeader');
  //     if( burgerMenu.classList.contains('Burger-menu_open') ) {
  //      Content.hidden = true;
  //      Footer.hidden = true;
  //      } else {    
  //      Content.hidden = false;
  //      Footer.hidden = false;
  //      };
  //     };
  // }

  // function checkWindowSize() {
  //   if( window.innerWidth > 799 ) {
  //     burgerButton.hidden = true;
  //   } else {      
  //     burgerButton.hidden = false;
  //     burgerButtonIsClikable();
  //   }
  // }
  // checkWindowSize();

  // window.onresize = () => {
  //   checkWindowSize();
  // };

  // const UserButton = document.querySelector('.User-button');
  // const LangButton = document.querySelector('.LangButton');
  // const UserSelect = document.querySelector('.UserSelect');
  // const LangSelect = document.querySelector('.LangSelect');
  // UserButton.onclick = function(){
  //   UserSelect.hidden = false:true;
  //   if( !LangSelect.hidden ) {
  //     LangSelect.hidden = false;
  //   }
  // };
  // LangButton.onclick = function(){
  //   LangSelect.hidden = false:true;
  //   if( !UserSelect.hidden ) {
  //     UserSelect.hidden = false;
  //   }
  // };
  
</script>

<template>
  <header class="Header">
    <div class="content">
      <a href="/" class="logo-project">
        <span class="firstSymbol">#</span><span class="text">
          {{ $t('title') }}
        </span>
      </a>
      <button class="Burger-button" role="button" aria-role="button">
        <span class="Burger-button__item">—</span>
        <span class="Burger-button__item">—</span>
        <span class="Burger-button__item">—</span>
      </button>
      <nav class="Burger-menu">
        <div class="Burger-menu-group">
         <a
         href="/"
           class="Burger-menu__item"
         >
          {{ $t('linkHome') }}
         </a>
         <nuxt-link
           to="Gallery"
           class="Burger-menu__item"
          >
           {{ $t('linkGallery') }}
          </nuxt-link>
          <nuxt-link
            to="News"
            class="Burger-menu__item"
          >
            {{ $t('linkNews') }}
          </nuxt-link>
          <nuxt-link
            to="AboutUs"
            class="Burger-menu__item"
          >
            {{ $t('linkAboutUs') }}
          </nuxt-link>
<!--          <nuxt-link -->
<!--            to="FAQ"-->
<!--            class="Burger-menu__item"-->
<!--          >-->
<!--            {{ $t('linkFAQ') }}-->
<!--          </nuxt-link>-->
        </div>
        <div class="Burger-menu-group">
          <nuxt-link
            to="SignIn"
            class="Burger-menu__item button bg_red"
          >
            {{ $t('participateBtnMsg') }}
          </nuxt-link>
          <div class="User Burger-menu__item">
            <button class="User-button">
              <span class="UserButton-text">Profile</span>
              <img src="/assets/media/img/login.svg" alt="Profile icon" class="UserButton-icon">
              <span class="iconMessage">
                <span class="iconMessage-text">You have unfinished work</span>
              </span>
            </button>
            <div class="UserSelect" hidden>
              <img src="../../../assets/media/img/Avatar.svg" class="UserSelect-item UserSelect-item_avatar" alt="Avatar">
              <span class="UserSelect-item UserSelect-item_title">Alexander Ivanow</span>
              <nuxt-link
                to="UserCabinet"
                class="UserSelect-item UserSelect-item_link">
                My embroideries
                <span class="iconMessage">
                  <span class="iconMessage-icon">!</span>
                  <span class="iconMessage-text">You have unfinished work</span>
                </span>                
              </nuxt-link>
              <nuxt-link
                to="UserCabinet"
                class="UserSelect-item UserSelect-item_link">
                Sign Out
              </nuxt-link>
            </div>
          </div>
          <div class="Lang Burger-menu__item">
            <button class="LangButton">
              EN<svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow" alt="Arrow">
                <path d="M8.85522 0.878982L8.14812 0.171875L4.36684 3.95315L0.707107 0.293424L0 1.00053L3.65973 4.66026L3.65381 4.66617L4.36092 5.37328L8.85522 0.878982Z" fill="#4F4F4F"/>
                </svg>
            </button>
            <div class="LangSelect" hidden>
              <nuxt-link
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  :to="switchLocalePath(locale.code)"
                  class="select-item"
                >
                {{ locale.name }}
              </nuxt-link>
              <span
                  class="select-item"
                >
                English
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style src="./MainMenu.scss" lang="scss"></style>
