<template>
  <div class="searchbar">
    <input type="text" v-model="query" @keyup.enter="getMovies" />
    <button class="mx-3" @click="getMovies">Cerca</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Header",
  data() {
    return {
      films: [],
      tvSeries:[],
      query: "",
      api_key: "651472fb58ade4f3f9ebcc8537c476f7",
    };
  },

  methods: {
    getMovies() {
      const config = {
        params: {
          language: "it-IT",
          query: this.query,
          api_key: this.api_key,
        },
      };
      axios
        .all([
            axios.get(`https://api.themoviedb.org/3/search/movie`, config),
            axios.get(`https://api.themoviedb.org/3/search/tv`, config)])
        .then(axios.spread((res1,res2) => {
          this.films = res1.data.results; 

          this.tvSeries = res2.data.results;

          this.$emit("genres-films", this.films, this.tvSeries);
        }));
    },
  },
};
</script>

<style></style>
