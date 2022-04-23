import { mapActions, mapGetters } from "vuex";

const myMixin = {
  computed: {
    ...mapGetters([
      "currentPage",
      "mobileMenu",
      "films",
      "starships",
      "people",
      "species",
      "filmDetail",
      "starshipDetail",
      "peopleDetail",
      "speciesDetail",
    ]),
  },
  methods: {
    ...mapActions([
      "scrollPageToTop",
      "setCurrentPage",
      "globalFunctions",
      "fetchSingleFilm",
      "fetchSingleStarship",
      "fetchPeopleDetails",
      "fetchSpeciesDetails",
      "toggleMobileMenu",
    ]),

    validEmail: function (email) {
      var emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailReg.test(email);
    },

    formateDate: function (date) {
      var d = new Date(date);
      let month = d.getMonth() + 1;
      let day = d.getDate();
      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      let returnedDate = d.getFullYear() + "/" + month + "/" + day;

      return returnedDate;
    },

    scrollPageToTop: function () {
      document.querySelector(".content-wrapper") &&
        document.querySelector(".content-wrapper").scrollTo(0, 0);
    },

    hasHistory: function () {
      return window.history.length > 2;
    },
  },
};

export default myMixin;
