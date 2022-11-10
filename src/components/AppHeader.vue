<!-- Script -->
<script>
import { store } from "../store";
export default {
  name: "AppHeader",
  data() {
    return {
      store,
    };
  },
};
</script>

<!-- Html -->
<template>
  <header>
    <h1><span>Br</span>eaking <span>Ba</span>d Api</h1>
    <h2 v-if="store.loading"><span>Load</span>ing...</h2>
  </header>
</template>

<!-- Css -->
<style lang="scss" scoped>
// HEADER
header {
  h1 {
    color: #369457;
    text-align: center;
    font-size: 3rem;
    padding: 2rem;
  }
  h2 {
    color: #369457;
    font-size: 2rem;
    text-align: center;
    padding: 20px;
  }
  span {
    color: white;
  }
}
</style>
