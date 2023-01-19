<template>
  <div>
    <app-header></app-header>
    <router-view />
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>
<style>
body {
  background-color: #1a1a1a;
  color: white;
}
</style>
