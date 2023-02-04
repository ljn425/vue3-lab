<template>
  <div class="header">
    <div class="flex flex-row">
      <div class="basis-1/4">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="로고" />
          <span> Vue3 Lab</span>
        </router-link>
      </div>
      <div class="basis-1/4"></div>
      <div class="basis-1/4">
        <router-link to="/application">Docs</router-link>
        <router-link to="/">API</router-link>
        <router-link to="/">Playground</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  border-bottom: 0.1px solid gray;
  padding: 15px;
}
img {
  max-width: 10%;
  display: inline-block;
}
a {
  margin-right: 35px;
}
</style>
