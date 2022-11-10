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
  props: {
    name: String,
    category: String,
    img: String,
    status: String,
  },
};
</script>

<!-- HTML -->
<template>
  <div class="card">
    <div class="imgcard">
      <img :src="img" alt="" />
    </div>
    <div class="infocard">
      <h2>{{ name }}</h2>
      <p>{{ category }}</p>
      <span>{{ status }}</span>
    </div>
  </div>
</template>

<!-- Css -->
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.card {
  border-radius: 20px;
  width: calc(100% / 5 - 40px);
  margin: 20px;
  background-color: $body-color-background;
  .imgcard {
    img {
      border-radius: 20px;
      padding: 10px;
      width: 100%;
    }
  }
  .infocard {
    color: white;
    text-align: center;
    padding: 10px;
    h2 {
      font-size: 1.2rem;
      padding: 10px 0;
      text-transform: uppercase;
    }
    p,
    span {
      color: grey;
      padding: 5px;
    }
  }
}
</style>
