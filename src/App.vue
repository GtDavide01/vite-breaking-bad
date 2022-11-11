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
import AppSelectedVue from "./components/AppSelected.vue";
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
    AppSelectedVue,
  },
  methods: {
    filterSeries() {
      let nameApi = "https://www.breakingbadapi.com/api/characters";
      if (this.store.filterCategory === "better-call-saul") {
        nameApi += "?category=Better+Call+Saul";
        axios.get(nameApi).then((resp) => {
          this.store.listCharacters = resp.data;
          this.store.loading = false;
        });
      }
      if (this.store.filterCategory === "breaking-bad") {
        nameApi += "?category=Breaking+Bad";
        axios.get(nameApi).then((resp) => {
          this.store.listCharacters = resp.data;
          this.store.loading = false;
        });
      }
      if (this.store.filterCategory === "all") {
        axios.get(nameApi).then((resp) => {
          this.store.listCharacters = resp.data;
          this.store.loading = false;
        });
      }
    },
    getListCharacters() {
      this.store.loading = true;
      if (this.store.filterCategory === "") {
        axios
          .get("https://www.breakingbadapi.com/api/characters")
          .then((resp) => {
            this.store.listCharacters = resp.data;
            this.store.loading = false;
          });
      }
    },
  },
  created() {
    this.getListCharacters();
  },
};
</script>
<!-- HTML -->
<template>
  <AppHeaderVue />
  <AppSelectedVue @filtra="filterSeries" />
  <AppMainCharactersVue />
</template>
<!-- CSS/SCSS -->
<style lang="scss">
@use "./styles/general.scss";
</style>
