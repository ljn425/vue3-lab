<template>
  <div class="door">
    <p class="title text-9xl text-green-500">Vue3 Lab</p>
    <!-- Get Started Button-->
    <router-link to="/guide">
      <button class="rounded-none">Get Started</button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.door {
  text-align: center;
  padding: 96px 32px;
}
button {
  background-color: #2f2f2f;
  padding: 10px;
  margin: 30px;
  color: #aac8e4;
}
</style>
