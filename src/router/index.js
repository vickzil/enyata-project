import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import StarShip from "../views/StarShip.vue";
import People from "../views/People.vue";
import Species from "../views/Species.vue";
import StarshipDetails from "../views/StarshipDetails.vue";
import FilmDetails from "../views/FilmDetails.vue";
import PeopleDetails from "../views/PeopleDetails.vue";
import SpeciesDetails from "../views/SpeciesDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: {
      transition: "fade-in-down",
      title: " Star wars - Login",
      guest: true,
    },
  },
  {
    path: "/dashboard",
    name: "Home",
    component: Home,
    meta: {
      transition: "fade-in-down",
      title: " Star wars - Dashboard",
      requiresAuth: true,
    },
  },
  {
    path: "/starship",
    name: "StarShip",
    component: StarShip,
    meta: {
      transition: "fade-in-down",
      title: " Star wars - Starships",
      requiresAuth: true,
    },
  },
  {
    path: "/people",
    name: "People",
    component: People,
    meta: {
      transition: "fade-in-down",
      title: " Star wars - People",
      requiresAuth: true,
    },
  },
  {
    path: "/species",
    name: "Species",
    component: Species,
    meta: {
      transition: "fade-in-down",
      title: " Star wars - Species",
      requiresAuth: true,
    },
  },
  {
    path: "/dashboard/details",
    name: "FilmDetails",
    component: FilmDetails,
    meta: {
      transition: "fade-in-down",
      title: " Star wars - Film Details",
      requiresAuth: true,
    },
  },
  {
    path: "/starship/details",
    name: "StarshipDetails",
    component: StarshipDetails,
    meta: {
      transition: "fade-in-down",
      title: " Star wars - StarshipDetails",
      requiresAuth: true,
    },
  },
  {
    path: "/people/details",
    name: "PeopleDetails",
    component: PeopleDetails,
    meta: {
      transition: "fade-in-down",
      title: " Star wars - PeopleDetails",
      requiresAuth: true,
    },
  },
  {
    path: "/species/details",
    name: "SpeciesDetails",
    component: SpeciesDetails,
    meta: {
      transition: "fade-in-down",
      title: " Star wars - SpeciesDetails",
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        x: 0,
        y: 0,
      };
    }
  },
  base: process.env.BASE_URL,
  routes,
});

// Set default title
const DEFAULT_TITLE = "Welcome to star wars movies";

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
