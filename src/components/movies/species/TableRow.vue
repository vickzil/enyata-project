<template>
  <tr v-if="movie">
    <td>
      <div class="width_input">
        <input type="checkbox" :checked="checkSpecies" />
        <a href="javascript:;" @click="getSingleMovie(movie.url)">{{
          movie.name
        }}</a>
      </div>
    </td>
    <td @click="getSingleMovie(movie.url)">{{ movie.classification }}</td>
    <td>{{ movie.eye_colors }}</td>
    <td @click="getSingleMovie(movie.url)">{{ movie.hair_colors }}</td>
    <td>{{ movie.average_height }}CM</td>
    <td @click="getSingleMovie(movie.url)">{{ formateDate(movie.created) }}</td>
  </tr>
</template>

<script>
export default {
  props: ["movie", "checkSpecies"],
  methods: {
    getSingleMovie(url) {
      this.fetchSpeciesDetails(url);
      this.$router.push({
        name: "SpeciesDetails",
        query: { title: this.movie.name },
      });
    },
  },
};
</script>

<style></style>
