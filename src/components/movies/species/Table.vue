<template>
  <div class="movies">
    <h4 class="movies_heading">Species</h4>
    <div class="movies_table" v-if="species">
      <div class="table-responsive animated fadeInRight">
        <table class="table">
          <thead>
            <tr>
              <th>
                <div class="width_input">
                  <input v-model="checkSpecies" type="checkbox" />
                  <span>Name</span>
                </div>
              </th>
              <th>Classification</th>
              <th>Eye colors</th>
              <th>Hair Color</th>
              <th>Height</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody v-if="allSpecies">
            <TableRow
              v-for="(movie, index) in allSpecies"
              :key="index"
              :movie="movie"
              :checkSpecies="checkSpecies"
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
    allSpecies() {
      return this.species && this.species.results;
    },

    checkSpecies: {
      get() {
        return this.$store.state.checkSpecies;
      },
      set(value) {
        return (this.$store.state.checkSpecies = value);
      },
    },
  },
};
</script>

<style></style>
