<template>
  <div class="inner_content">
    <DashboardBoxes />
    <Table />
  </div>
</template>

<script>
import DashboardBoxes from "../components/home/DashboardBoxes.vue";
import Table from "../components/movies/film/Table.vue";
export default {
  components: {
    DashboardBoxes,
    Table,
  },

  mounted() {
    this.setCurrentPage(this.$router.history.current.name);
    this.scrollPageToTop();
  },
};
</script>
