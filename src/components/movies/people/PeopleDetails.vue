<template>
  <div class="w-100">
    <div class="movie_details animated fadeInLeft" v-if="movieDetails">
      <img src="@/assets/img/image.png" alt="" />
      <div class="movie_details_contents">
        <h2>{{ movieDetails.name }}</h2>
        <p><b>Gender:</b> {{ movieDetails.gender }}</p>
        <p><b>Year of birth:</b> {{ movieDetails.birth_year }}</p>
        <p><b>Skin color:</b> {{ movieDetails.skin_color }}</p>
        <p><b>Height:</b> {{ movieDetails.height }}CM</p>
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
      let movie = this.peopleDetail;

      if (movie == null && this.people) {
        let findMovie = this.people.results.find(
          (currentMovie) => currentMovie.name == this.$route.query.title
        );
        if (findMovie) {
          this.fetchPeopleDetails(findMovie.url);
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
