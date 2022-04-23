<template>
  <tr v-if="movie">
    <td>
      <div class="width_input">
        <input type="checkbox" :checked="checkFilms" />
        <a href="javascript:;" @click="getSingleMovie(movie.url)">{{
          movie.title
        }}</a>
      </div>
    </td>
    <td>{{ movie.release_date }}</td>
    <td @click="getSingleMovie(movie.url)">{{ movie.director }}</td>
    <td>{{ movie.producer }}</td>
    <td>{{ movie.episode_id }}</td>
    <td @click="getSingleMovie(movie.url)">{{ movie.characters[0] }}</td>
  </tr>
</template>

<script>
export default {
  props: ["movie", "checkFilms"],

  methods: {
    getSingleMovie(url) {
      this.fetchSingleFilm(url);
      this.$router.push({
        name: "FilmDetails",
        query: { title: this.movie.title },
      });
    },
  },
};
</script>

<style></style>
