<template>
  <div class="inner_content">
    <Table />
  </div>
</template>

<script>
import Table from "../components/movies/people/Table.vue";
export default {
  components: {
    Table,
  },

  mounted() {
    this.setCurrentPage(this.$router.history.current.name);
    this.scrollPageToTop();
  },
};
</script>
