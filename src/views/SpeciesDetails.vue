<template>
  <div class="inner_content">
    <SpecieDetails />
  </div>
</template>

<script>
import SpecieDetails from "../components/movies/species/SpecieDetails.vue";

export default {
  components: {
    SpecieDetails,
  },

  mounted() {
    this.setCurrentPage(this.$router.history.current.name);
    this.scrollPageToTop();
  },
};
</script>
