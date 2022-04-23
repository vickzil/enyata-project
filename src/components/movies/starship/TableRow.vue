<template>
  <tr v-if="movie">
    <td>
      <div class="width_input">
        <input type="checkbox" :checked="checkStarship" />

        <a href="javascript:;" @click="getSingleMovie(movie.url)">{{
          movie.name
        }}</a>
      </div>
    </td>
    <td @click="getSingleMovie(movie.url)">{{ movie.model }}</td>
    <td @click="getSingleMovie(movie.url)">{{ movie.starship_class }}</td>
    <td>{{ movie.passengers }}</td>
    <td>{{ movie.length }}</td>
    <td @click="getSingleMovie(movie.url)">{{ movie.films[0] }}</td>
  </tr>
</template>

<script>
export default {
  props: ["movie", "checkStarship"],
  methods: {
    getSingleMovie(url) {
      this.fetchSingleStarship(url);
      this.$router.push({
        name: "StarshipDetails",
        query: { title: this.movie.name },
      });
    },
  },
};
</script>

<style></style>
