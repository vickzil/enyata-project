<template>
  <div class="movies">
    <h4 class="movies_heading">Starships</h4>
    <div class="movies_table" v-if="starships">
      <div class="table-responsive animated fadeInRight">
        <table class="table">
          <thead>
            <tr>
              <th>
                <div class="width_input">
                  <input v-model="checkStarship" type="checkbox" />
                  <span>Name</span>
                </div>
              </th>
              <th>Model</th>
              <th>Class</th>
              <th>Passenger</th>
              <th>Length</th>
              <th>Character</th>
            </tr>
          </thead>
          <tbody v-if="allStarships">
            <TableRow
              v-for="(movie, index) in allStarships"
              :key="index"
              :movie="movie"
              :checkStarship="checkStarship"
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
    allStarships() {
      return this.starships && this.starships.results;
    },

    checkStarship: {
      get() {
        return this.$store.state.checkStarship;
      },
      set(value) {
        return (this.$store.state.checkStarship = value);
      },
    },
  },
};
</script>

<style></style>
