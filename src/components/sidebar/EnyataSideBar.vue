<template>
  <div>
    <div class="enyata-siderbar" :class="mobileMenu && 'showMenu'">
      <div class="dashboard_logo">
        <router-link :to="{ name: 'Home' }">
          <img src="@/assets/img/logo.png" alt="" />
        </router-link>
      </div>
      <div class="enyata-siderbar-scroll">
        <ul class="metismenu" id="menu">
          <li>
            <router-link :to="{ name: 'Home' }">
              <i class="fa fa-th-large"></i>
              <span class="nav-text">Overview</span>
            </router-link>
          </li>

          <li>
            <router-link :to="{ name: 'StarShip' }">
              <div class="menu_block starship"></div>
              <span class="nav-text">Starships</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'People' }">
              <div class="menu_block people"></div>
              <span class="nav-text">People</span>
            </router-link>
          </li>

          <li>
            <router-link :to="{ name: 'Species' }">
              <div class="menu_block species"></div>
              <span class="nav-text">Species</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div
      @click="toggleMobileMenu"
      class="enyata-sidebar-overlay"
      :class="mobileMenu && 'showMenu'"
    ></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.enyata-siderbar {
  width: 14.5rem;
  padding-bottom: 0;
  height: 100%;
  position: fixed;
  top: 0;
  padding: 20px 18px 120px;
  z-index: 6;
  background-color: var(--mainBlueColor);
  transition: all 300ms ease-in-out;
  text-align: center;
}

.enyata-sidebar-overlay {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  bottom: 0 !important;
  width: 100% !important;
  height: 100% !important;
  background: rgba(58, 56, 56, 0.507);
  z-index: 5;
  transition: all 0.2s ease;
  display: none;
  cursor: pointer;
}

.enyata-siderbar .enyata-siderbar-scroll {
  position: relative;
  height: 100%;
  overflow-y: scroll;
}

.enyata-siderbar .enyata-siderbar-scroll::-webkit-scrollbar {
  width: 0px !important;
}

.dashboard_logo {
  padding-bottom: 20px;
  position: relative;
}

.dashboard_logo a {
  text-decoration: none;
}

.dashboard_logo a img {
  width: 98px;
  height: 38px;
}

.dashboard_logo a span {
  position: absolute;
  left: 30px;
  bottom: 10px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 15.5px;
  line-height: 23px;
  color: #000000;
}

.enyata-siderbar ul {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}

.enyata-siderbar .metismenu > li {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
}

.enyata-siderbar .metismenu > li:first-child {
  margin-bottom: 48px;
}

.enyata-siderbar .metismenu > li a {
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 25px;
  transition: all 300ms ease-in-out;
  /* font-weight: 600; */
  color: var(--mainGreenColor);
  padding: 12px 20px;
}

.enyata-siderbar .metismenu > li a:hover {
  transform: scale(0.9);
}

.enyata-siderbar .metismenu > li a .menu_block {
  width: 17px;
  height: 16px;
  border-radius: 5px;
}

.enyata-siderbar .metismenu > li a.active,
.enyata-siderbar .metismenu > li a.router-link-active,
.enyata-siderbar .metismenu > li a.router-link-exact-active {
  background: var(--mainLightBlueColor);
  border-radius: 4px;
}

.enyata-siderbar .metismenu > li a .menu_block.starship {
  background: var(--mainLighterBlueColor);
}

.enyata-siderbar .metismenu > li a .menu_block.people {
  background: var(--mainLighterPurpleColor);
}

.enyata-siderbar .metismenu > li a .menu_block.species {
  background: var(--mainLighterYellowColor);
}

.enyata-siderbar .metismenu > li a span {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
}

.enyata-siderbar .metismenu > li a > i {
  font-size: 20px;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  text-align: center;
  line-height: 1;
  color: #fff;
}
</style>
