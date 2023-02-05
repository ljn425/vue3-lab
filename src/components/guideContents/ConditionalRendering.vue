<template>
  <div>
    <h1 id="conditional-rendering">
      <a class="header-anchor" href="#conditional-rendering">#</a>
      Conditional Rendering
    </h1>
    <hr />
    <h2 id="v-else">
      <a class="header-anchor" href="#v-else">#</a>
      v-else
    </h2>
    <div class="demo-box">
      <p>예제 : 클릭시 문구 변경(v-if, v-else)</p>
      <div class="demo">
        <button @click="awesome = !awesome" class="demo-btn">Toggle</button>
        <h3 v-if="awesome">Vue is awesome!</h3>
        <h3 v-else>Oh no!</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awesome: true,
    };
  },
};
</script>

<style></style>
