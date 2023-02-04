<template>
  <div class="grid grid-cols-5 gap-3">
    <aside class="sidebar left-sidebar">
      <DocsSide></DocsSide>
    </aside>
    <main class="col-span-4">
      <div class="grid grid-cols-5 gap-10">
        <article class="col-span-4">
          <router-view></router-view>
        </article>
        <aside class="right-sidebar">오른쪽 사이드</aside>
      </div>
    </main>
  </div>
</template>

<script>
import DocsSide from "@/components/leftSide/GuideSide.vue";

export default {
  components: {
    DocsSide,
  },
};
</script>

<style scoped>
.left-sidebar {
  height: 1000px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-left: 50px;
  padding-top: 30px;
}
main {
  padding: 48px 32px 96px;
}
</style>
