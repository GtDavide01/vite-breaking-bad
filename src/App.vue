<!-- Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.
Al caricamento della pagina, effettuate una chiama ajax all'API di Breaking Bad:
https://www.breakingbadapi.com/api/characters
e con i dati restituiti, stampate una card per ogni personaggio. Bonus:
Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.-->
<!-- SCRIPT -->
<script>
// IMPORT
import axios from "axios";
import AppHeaderVue from "./components/AppHeader.vue";
import AppMainCharactersVue from "./components/AppMainCharacters.vue";
import { store } from "./store";
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeaderVue,
    AppMainCharactersVue,
  },
  created() {
    this.store.loading = true;
    axios.get("https://www.breakingbadapi.com/api/characters").then((resp) => {
      this.store.listCharacters = resp.data;
      console.log(this.store.listCharacters);
      this.store.loading = false;
    });
  },
};
</script>
<!-- HTML -->
<template>
  <AppHeaderVue />
  <AppMainCharactersVue />
</template>
<!-- CSS/SCSS -->
<style lang="scss">
@use "./styles/general.scss";
</style>
