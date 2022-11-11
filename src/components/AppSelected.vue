<!-- script -->
<script>
// import
import { store } from "../store";
export default {
  name: "AppSelected",
  data() {
    return {
      store,
    };
  },
};
</script>
<!-- Html -->
<template>
  <div class="container">
    <select name="Series" id="serietv" v-model="store.filterCategory">
      <option value="">Seleziona una serie tv</option>
      <option value="breaking-bad">Breaking Bad</option>
      <option value="better-call-saul">Better Call Saul</option>
      <option value="all">Tutti</option>
    </select>
    <button @click="$emit('filtra')">Filtra</button>
  </div>
</template>
<!-- Css -->
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  margin: 50px 20px;
  text-align: center;
  select {
    margin-left: 50px;
    padding: 10px;
    font-size: 1.5rem;
    border-radius: 20px;
    border: none;
    background-color: #369457;
  }
  button {
    margin: 0 20px;
    padding: 10px;
    font-size: 1.5rem;
    border-radius: 20px;
    border: none;
  }
}
</style>
