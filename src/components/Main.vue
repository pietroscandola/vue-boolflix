<template>
  <div>
    <h2 v-if="films.length">Film</h2>    
    <div class="row">
      <Card v-for="film in films" :key="film.id" :item="film"/>     
    </div>

   <h2 v-if="tvSeries.length">Serie TV</h2>
   <div class="row">
     <Card v-for="tvSerie in tvSeries" :key="tvSerie.id" :item="tvSerie"/>
   </div>    
  </div>
</template>

<script>
import Card from './Card.vue';
export default {
  name: "Main",
  components:{
    Card,
  },
  props: ["films", "tvSeries"], 
};
</script>

<style>

</style>
