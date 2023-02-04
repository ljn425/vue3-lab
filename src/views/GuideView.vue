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

<style>
.left-sidebar {
  height: 1000px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-left: 50px;
  padding-top: 30px;
}
main {
  padding: 28px 32px 96px;
}
h1 {
  font-size: 32px;
  padding-bottom: 48px;
}

h2 {
  font-size: 24px;
  margin-top: 64px;
  margin-bottom: 28.8px;
}

hr {
  background: #636363;
  height: 1px;
  border: 0;
}

code {
  color: #aac8e4;
  background: #2f2f2f;
  border-radius: 1rem;
  box-sizing: border-box;
  font-size: 14px;
}

.header-anchor {
  color: aquamarine;
}
</style>
