<template>
  <div class="movies">
    <h4 class="movies_heading">People</h4>
    <div class="movies_table" v-if="people">
      <div class="table-responsive animated fadeInRight">
        <table class="table">
          <thead>
            <tr>
              <th>
                <div class="width_input">
                  <input v-model="checkPeople" type="checkbox" />
                  <span>Name</span>
                </div>
              </th>
              <th>Birth year</th>
              <th>Gender</th>
              <th>Hair Color</th>
              <th>Height</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody v-if="allPeople">
            <TableRow
              v-for="(movie, index) in allPeople"
              :key="index"
              :movie="movie"
              :checkPeople="checkPeople"
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
    allPeople() {
      return this.people && this.people.results;
    },

    checkPeople: {
      get() {
        return this.$store.state.checkPeople;
      },
      set(value) {
        return (this.$store.state.checkPeople = value);
      },
    },
  },
};
</script>

<style></style>
