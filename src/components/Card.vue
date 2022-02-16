<template>
  <div class="col-3 my-3">
    <div class="card">
      <img class="cover" :src="flagSrc" :alt="item.title" />
      <div class="show">
        <div class="m-2">
          <strong>Titolo: </strong>{{ item.title || item.name }}
        </div>
        <div class="m-2">
          <strong>Titolo originale: </strong
          >{{ item.original_title || item.original_name }}
        </div>
        <div v-if="hasFlag" class="m-2">
          <strong>Lingua: </strong>
          <img
            class="flag"
            :src="require(`../assets/img/${item.original_language}.png`)"
            :alt="item.original_language"
          />
        </div>
        <div v-else class="m-2">{{ item.original_language }}</div>
        <div class="m-2">
          <span>
            <strong>Voto: </strong>
            <i
              v-for="(getStar, index) in getStars"
              :key="index"
              class="fa-solid fa-star"
            ></i>
          </span>
          <span>
            <i
              v-for="(star, index) in stars"
              :key="index"
              class="fa-regular fa-star"
            ></i>
          </span>
        </div>
        <div v-if="item.overview" class="m-2">
          <p class="text-center"><strong>Trama</strong></p>
          <p class="m-2">{{ item.overview }}</p>
        </div>
      </div>
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
  height: auto;
  position: relative;
}

.fa-star {
  color: yellow;
}

.show {
  display: none;  
  height: 100%;
  width: 100%;
}

.card:hover > .show {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: gray;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  cursor: pointer;
  animation: scale-in-ver-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes scale-in-ver-center {
  0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    opacity: 1;
  }
}
</style>
