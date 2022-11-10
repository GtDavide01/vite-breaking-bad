<!-- script -->
<script>
import { store } from "../store";
export default {
  name: "AppCardBrba",
  data() {
    return {
      store,
    };
  },
};
console.log(store.listCharacters[0]);
</script>

<!-- HTML -->
<template>
  <div class="card">
    <div class="imgcard"></div>
  </div>
</template>

<!-- Css -->
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.card {
  height: 300px;
  width: calc(100% / 5 - 40px);
  margin: 20px;
  background-color: $body-color-background;
}
</style>
