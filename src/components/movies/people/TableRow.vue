<template>
  <tr v-if="movie">
    <td>
      <div class="width_input">
        <input type="checkbox" :checked="checkPeople" />
        <a href="javascript:;" @click="getSingleMovie(movie.url)">{{
          movie.name
        }}</a>
      </div>
    </td>
    <td>{{ movie.birth_year }}</td>
    <td>{{ movie.gender }}</td>
    <td>{{ movie.hair_color }}</td>
    <td>{{ movie.height }}</td>
    <td>{{ formateDate(movie.created) }}</td>
  </tr>
</template>

<script>
export default {
  props: ["movie", "checkPeople"],

  methods: {
    getSingleMovie(url) {
      this.fetchPeopleDetails(url);
      this.$router.push({
        name: "PeopleDetails",
        query: { title: this.movie.name },
      });
    },
  },
};
</script>

<style></style>
