<template>
  <div class="top_header">
    <div class="top_header_left">
      <div
        @click="hasHistory() ? $router.go(-1) : $router.push('/')"
        class="top_header_left_arrow"
        v-if="
          [
            'MovieDetails',
            'FilmDetails',
            'StarshipDetails',
            'PeopleDetails',
            'SpeciesDetails',
          ].includes(currentPage)
        "
      >
        <i class="bx bx-chevron-left"></i>
        <span>Back</span>
      </div>
    </div>
    <div class="top_header_right">
      <i class="fa fa-bell-o bellIcon"></i>
      <div class="top_header_right_user">
        <img src="@/assets/img/account.svg" alt="" />
        <h6>John Doe</h6>
      </div>
      <i
        :class="mobileMenu && 'showMenu'"
        class="bx bx-dots-horizontal-rounded header_button"
        @click="toggleMobileMenu"
      ></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top_header {
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(229, 229, 229, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
}

.top_header_left_arrow {
  display: flex;
  align-items: center;
  column-gap: 7px;
  color: #a4a7b7;
  cursor: pointer;
}

.top_header_left_arrow i {
  font-size: 21px;
}

.top_header_left_arrow span {
  font-size: 16px;
}

.top_header_right {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
}

.top_header_right i {
  font-size: 22px;
  color: #c4c4c4;
  cursor: pointer;
}

.top_header_right i.bellIcon {
  color: #333758;
  margin-right: 30px;
}

.top_header_right_user {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  padding-left: 40px;
  padding-right: 40px;
  border-left: 2px solid #e5e5e5;
  cursor: pointer;
}

.top_header_right_user img {
  width: 30px;
  height: 30px;
}

.top_header_right_user h6 {
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.117188px;
  color: #303b54;
  margin: 0px;
}
</style>
