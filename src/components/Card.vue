<template>
  <div class="col-3 my-3">
    <img class="cover" :src="flagSrc" :alt="item.title" />
    <div>{{ item.title || item.name }}</div>
    <div>{{ item.original_title || item.original_name }}</div>
    <div v-if="hasFlag">
      <img
        class="flag"
        :src="require(`../assets/img/${item.original_language}.png`)"
        :alt="item.original_language"
      />
    </div>
    <div v-else>{{ item.original_language }}</div>
    <div>
      <span>
        <i
        v-for="(getStar, index) in getStars"
        :key="index"
        class="fa-solid fa-star"
      ></i>
      </span>
      <span>
        <i v-for="(star,index) in stars" :key="index" class="fa-regular fa-star"></i>
      </span>      
    </div>    
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["item"],
  data() {
    return {
      flags: ["it", "en"],
      selectedFilms: "",
      selectedTVSeries: "",
    };
  },

  computed: {
    hasFlag() {
      return this.flags.includes(this.item.original_language);
    },

    flagSrc() {
      if (this.item.poster_path) {
        return `https://image.tmdb.org/t/p/w342/${this.item.poster_path}`;
      } else {
        return require("../assets/img/no-poster-available.jpg");
      }
    },

    getStars() {     
      return Math.ceil(this.item.vote_average / 2);
    },

    stars() {
      return 5 - this.getStars;
    },
  },
};
</script>

<style scoped lang="scss">
.flag {
  width: 50px;
}

.cover {
  width: 100%;
}
</style>
