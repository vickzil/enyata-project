<template>
  <div class="auth_left_logo">
    <img src="@/assets/img/logo.png" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.auth_left_logo {
  background: var(--mainBlueColor) !important;
  width: 28%;
  padding-bottom: 0;
  height: 100%;
  position: fixed;
  top: 0;
  padding: 20px 18px 120px;
  z-index: 6;
  background-color: var(--mainBlueColor);
  transition: all 300ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth_left_logo img {
  width: 80%;
}
</style>
