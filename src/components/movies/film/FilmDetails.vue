<template>
  <div class="w-100">
    <div class="movie_details animated fadeInLeft" v-if="movieDetails">
      <img src="@/assets/img/image.png" alt="" />
      <div class="movie_details_contents">
        <h2>{{ movieDetails.title }}</h2>
        <p><b>Director:</b> {{ movieDetails.director }}</p>
        <p><b>Producer:</b> {{ movieDetails.producer }}</p>
        <p><b>Release Date:</b> {{ movieDetails.release_date }}</p>
        <p><b>Opening Crawl:</b> {{ movieDetails.opening_crawl }}</p>
      </div>
    </div>
    <ContentLoading v-else />
  </div>
</template>

<script>
import ContentLoading from "../../loading/ContentLoading.vue";
export default {
  components: {
    ContentLoading,
  },
  computed: {
    movieDetails() {
      let movie = this.filmDetail;
      if (movie == null && this.films) {
        let findMovie = this.films.results.find(
          (currentMovie) => currentMovie.title == this.$route.query.title
        );
        if (findMovie) {
          this.fetchSingleFilm(findMovie.url);
        } else {
          this.$router.go(-1);
        }
      }

      return movie;
    },
  },
};
</script>

<style scoped>
.movie_details {
  width: 100%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 30% 1fr;
  gap: 30px;
}

.movie_details_contents {
  margin-top: 60px;
}

.movie_details_contents h2 {
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 40px;
}

.movie_details_contents p {
  font-style: normal;
  font-weight: 550;
  font-size: 16px;
  line-height: 24px;
  color: #434854;
  margin-bottom: 10px;
}
</style>
