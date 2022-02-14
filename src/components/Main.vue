<template>
  <div>
    <h2 v-if="films.length">Film</h2>
        
    <ul>
      <li v-for="film in films" :key="film.id">
        <div>{{ film.title }}</div>
        <div>{{ film.original_title }}</div>
        <div v-if="film.original_language === 'en' || film.original_language ==='it'"><img :src="require (`../assets/img/${film.original_language}.png`)" :alt="film.original_language"></div>
        <div v-else>{{film.original_language}}</div>
        <div>{{ film.vote_average }}</div>
      </li>
    </ul>
    <h2 v-if="tvSeries.length">Serie TV</h2>
    <ul>
      <li v-for="tvSerie in tvSeries" :key="tvSerie.id">
        <div>{{ tvSerie.name }}</div>
        <div>{{ tvSerie.original_name }}</div>
        <div v-if="tvSerie.original_language === 'en' || tvSerie.original_language ==='it'"><img :src="require (`../assets/img/${tvSerie.original_language}.png`)" :alt="tvSerie.original_language"></div>
        <div v-else>{{tvSerie.original_language}}</div>
        <div>{{ tvSerie.vote_average }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: ["films", "tvSeries"],
  data() {
    return {
      selectedFilms:'',
      selectedTVSeries:'',
    };
  },
};
</script>

<style>
img{
    width: 50px;
}
</style>
