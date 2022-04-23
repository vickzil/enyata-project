<template>
  <div class="dashboard_boxes animated fadeInLeft">
    <div class="dashboard_box" v-if="films">
      <div class="dashboard_box_top">
        <h3>Films</h3>
        <div class="dashboard_box_top_box"></div>
      </div>
      <div class="dashboard_box_footer">
        <h5>{{ films.count }}</h5>
        <p>20 More than than yesterday</p>
      </div>
    </div>
    <ContentLoading v-else />
    <div class="dashboard_box" v-if="starships">
      <div class="dashboard_box_top">
        <h3>Starship</h3>
        <div class="dashboard_box_top_box"></div>
      </div>
      <div class="dashboard_box_footer">
        <h5>{{ starships.count }}</h5>
        <p>20 More than than yesterday</p>
      </div>
    </div>
    <ContentLoading v-else />
    <div class="dashboard_box" v-if="people">
      <div class="dashboard_box_top">
        <h3>People</h3>
        <div class="dashboard_box_top_box"></div>
      </div>
      <div class="dashboard_box_footer">
        <h5>{{ people.count }}</h5>
        <p>20 More than than yesterday</p>
      </div>
    </div>
    <ContentLoading v-else />
    <div class="dashboard_box" v-if="species">
      <div class="dashboard_box_top">
        <h3>Species</h3>
        <div class="dashboard_box_top_box"></div>
      </div>
      <div class="dashboard_box_footer">
        <h5>{{ species.count }}</h5>
        <p>20 More than than yesterday</p>
      </div>
    </div>
    <ContentLoading v-else />
  </div>
</template>

<script>
import ContentLoading from "../loading/ContentLoading.vue";
export default {
  components: {
    ContentLoading,
  },
};
</script>

<style scoped>
.dashboard_boxes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 50px;
  margin-top: 20px;
  margin-bottom: 90px;
}

.dashboard_box {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 31px 26px;
}

.dashboard_box_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.dashboard_box_top h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}

.dashboard_box_top_box {
  background: #a9ffe0;
  border-radius: 5px;
  display: inline-block;
  width: 27px;
  height: 26px;
}

.dashboard_box_footer h5 {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: black;
  margin-bottom: 4px;
}

.dashboard_box_footer p {
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #00992b;
}

.dashboard_box:nth-child(2) .dashboard_box_top_box {
  background: var(--mainLighterBlueColor);
}

.dashboard_box:nth-child(3) .dashboard_box_top_box {
  background: var(--mainLighterPurpleColor);
}

.dashboard_box:nth-child(4) .dashboard_box_top_box {
  background: var(--mainLighterYellowColor);
}

@media screen and (max-width: 380px) {
  .dashboard_boxes {
    display: block;
  }

  .dashboard_box {
    margin-bottom: 30px;
  }
}
</style>
