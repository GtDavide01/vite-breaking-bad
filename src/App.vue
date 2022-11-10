<!-- Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.
Al caricamento della pagina, effettuate una chiama ajax all'API di Breaking Bad:
https://www.breakingbadapi.com/api/characters
e con i dati restituiti, stampate una card per ogni personaggio. Bonus:
Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.-->
<!-- SCRIPT -->
<script>
// IMPORT
import AppHeaderVue from "./components/AppHeader.vue";
export default {
  data() {
    return {};
  },
  components: {
    AppHeaderVue,
  },
};
</script>
<!-- HTML -->
<template>
  <AppHeaderVue />
</template>
<!-- CSS/SCSS -->
<style lang="scss">
@use "./styles/general.scss";
</style>
