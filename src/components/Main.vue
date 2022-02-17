<template>
  <div class="container">
    <div
      v-if="!films.length"
      class="main d-flex align-items-center justify-content-center"
    >
      <h2 class="text-center text-white">Cerca un Film o una una Serie TV</h2>
    </div>
    <h2 v-if="films.length" class="m-3 text-white">Film</h2>
    <div class="row">
      <Card v-for="film in films" :key="film.id" :item="film" />
    </div>

    <h2 v-if="tvSeries.length" class="m-3 text-white">Serie TV</h2>
    <div class="row">
      <Card v-for="tvSerie in tvSeries" :key="tvSerie.id" :item="tvSerie" />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "Main",
  components: {
    Card,
  },
  props: ["films", "tvSeries"],
};
</script>

<style scoped>
.main {
  height: calc(100vh - 88px);
}
</style>
