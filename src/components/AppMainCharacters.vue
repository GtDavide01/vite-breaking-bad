<!-- Script -->
<script>
// import
import AppCardBrbaVue from "./AppCardBrba.vue";
export default {
  name: "AppMainCharacters",
  components: {
    AppCardBrbaVue,
  },
};
</script>

<!-- Html -->
<template>
  <main>
    <div class="container">
      <AppCardBrbaVue />
    </div>
  </main>
</template>

<!-- Css -->
<style lang="scss" scoped>
.container {
  flex-wrap: wrap;
  display: flex;
  margin: 0 auto;
  width: 70%;
  background-color: white;
}
</style>
