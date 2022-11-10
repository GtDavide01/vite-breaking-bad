<!-- Script -->
<script>
// import
import { store } from "../store";
import AppCardBrbaVue from "./AppCardBrba.vue";
export default {
  name: "AppMainCharacters",
  components: {
    AppCardBrbaVue,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<!-- Html -->
<template>
  <main>
    <div class="container">
      <AppCardBrbaVue
        v-for="(item, indice) in store.listCharacters"
        :key="indice"
        :name="item.name"
        :category="item.category"
        :img="item.img"
        :status="item.status"
      />
    </div>
  </main>
</template>

<!-- Css -->
<style lang="scss" scoped>
.container {
  border-radius: 10px;
  flex-wrap: wrap;
  display: flex;
  margin: 0 auto;
  width: 70%;
  background-color: #369457;
}
</style>
