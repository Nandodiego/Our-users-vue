<template>
  <div class="container">
    <HeaderComponent/>
    <MainComponent/>
    <FooterComponent/>
  </div>
</template>

<script>

import HeaderComponent from "@/components/HeaderComponent/Header.vue";
import MainComponent from "@/components/MainComponent/Main.vue";
import FooterComponent from "@/components/FooterComponent/Footer.vue";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    --bg-body: linear-gradient(180deg, #BB947D 0%, #E4A886 100%);
    --color-texts: #FBF7F7;
    --color-footer: #FFFFFF;
    --border-divs: 2px solid #FBF7F7;
    --filter-shadow-div-users: drop-shadow(0px 4px 13px rgba(0, 0, 0, 0.5));
    --border-images: 3px solid white;
    --font-family-all: 'Nunito', sans-serif;
  }

  .container {
    background: var(--bg-body);
  }
</style>
