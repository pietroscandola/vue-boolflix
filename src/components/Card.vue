<template>
  <div class="col-3 my-3">
    <div>{{ item.title || item.name }}</div>
    <div>{{ item.original_title || item.original_name }}</div>
    <div
      v-if="item.original_language === 'en' || item.original_language === 'it'"
    >
      <img
        :src="require(`../assets/img/${item.original_language}.png`)"
        :alt="item.original_language"
      />
    </div>
    <div v-else>{{ item.original_language }}</div>
    <div>{{ item.vote_average }}</div>
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
};
</script>

<style></style>
