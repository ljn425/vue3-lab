<template>
  <div>
    <h1 id="createing-a-vue-application">
      <a class="header-anchor" href="#createing-a-vue-application">#</a>
      Creating a Vue Application
    </h1>
    <hr />
    <h2>
      <a class="header-anchor" href="#the-application-instance">#</a>
      In-DOM Root Component Template
    </h2>
    <p>
      빌드 단계 없이 Vue를 사용하는 경우 루트 구성 요소의 템플릿을 마운트
      컨테이너 내부에 직접 작성할 수 있습니다.Vue는 루트 구성 요소에 아직 템플릿
      옵션이 없는 경우 자동으로 컨테이너의 <code>innerHTML</code>을
      <code>template</code>으로 사용합니다.
    </p>
    <br />
    <div>
      <p>예제 : 버튼 클릭시 숫자 증가</p>
      <div class="demo">
        <button class="demo-btn" @click="count++">Count is: {{ count }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style scoped></style>
