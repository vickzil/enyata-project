<template>
  <div id="app">
    <div v-if="!isAuthRoute" class="main_wrapper">
      <EnyataSideBar v-if="!isAuthRoute" />
      <div class="content-wrapper">
        <TopHeader />
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
    <div v-if="isAuthRoute" class="main_wrapper">
      <OAuthSideBar v-if="isAuthRoute" />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import "./assets/css/style.css";
import EnyataSideBar from "./components/sidebar/EnyataSideBar.vue";
import OAuthSideBar from "./components/sidebar/OAuthSideBar.vue";
import TopHeader from "./components/header/TopHeader.vue";
export default {
  components: {
    OAuthSideBar,
    EnyataSideBar,
    TopHeader,
  },
  computed: {
    isAuthRoute() {
      let current = false;

      if (["Login"].includes(this.currentPage)) {
        current = true;
      }

      return current;
    },
  },

  mounted() {
    setTimeout(() => {
      if (!["Login"].includes(this.currentPage)) {
        this.globalFunctions();
      }
    }, 1000);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  /* transform: scale(0.9); */
}
</style>
