<template>
  <div class="movies">
    <h4 class="movies_heading">Films</h4>
    <div class="movies_table" v-if="films">
      <div class="table-responsive animated fadeInRight">
        <table class="table">
          <thead>
            <tr>
              <th>
                <div class="width_input">
                  <input v-model="checkFilms" type="checkbox" />
                  <span>Film Title</span>
                </div>
              </th>
              <th>Release Date</th>
              <th>Director</th>
              <th>Producer</th>
              <th>Episode ID</th>
              <th>Character</th>
            </tr>
          </thead>
          <tbody v-if="allFilms">
            <TableRow
              v-for="(movie, index) in allFilms"
              :key="index"
              :movie="movie"
              :checkFilms="checkFilms"
            />
          </tbody>
        </table>
      </div>
    </div>
    <ContentLoading v-else />
  </div>
</template>

<script>
import TableRow from "./TableRow.vue";
import ContentLoading from "../../loading/ContentLoading.vue";
export default {
  components: {
    TableRow,
    ContentLoading,
  },

  computed: {
    allFilms() {
      return this.films && this.films.results;
    },

    checkFilms: {
      get() {
        return this.$store.state.checkFilms;
      },
      set(value) {
        return (this.$store.state.checkFilms = value);
      },
    },
  },
};
</script>

<style></style>
