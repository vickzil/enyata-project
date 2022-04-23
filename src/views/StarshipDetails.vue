<template>
  <div class="inner_content">
    <MovieDetails />
  </div>
</template>

<script>
import MovieDetails from "../components/movies/starship/StarShipDetails.vue";

export default {
  components: {
    MovieDetails,
  },

  mounted() {
    this.setCurrentPage(this.$router.history.current.name);
    this.scrollPageToTop();
  },
};
</script>
