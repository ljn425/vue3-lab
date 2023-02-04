<template>
  <div>
    <h1>
      <a class="header-anchor" href="#template-syntax">#</a>
      Template Syntax
    </h1>
    <hr />
    <h2>
      <a class="header-anchor" href="#template-syntax">#</a>
      Text Interpolation
    </h2>
    <p>
      데이터 바인딩의 가장 기본적인 형태는 "Mustache" 구문(이중 중괄호)을
      사용하는 텍스트 보간입니다.
    </p>
    <pre v-highlightjs>
        <code class="html">
    &lt;span&gt;Message: &#123;&#123;msg&#125;&#125; &lt;/span&gt;
        </code>
    </pre>
    <div class="demo-box">
      <p class="demo-name">예제: 콧수염 괄호(Mustache syntax)</p>
      <div class="demo">
        <span>Message: {{ msg }}</span>
      </div>
    </div>
    <hr />
    <h2>
      <a class="header-anchor" href="#raw-html">#</a>
      Raw HTML
    </h2>
    <p>
      콧수염 괄호는 데이터를 HTML이 아닌 일반 텍스트로 해석합니다. 실제 HTML을
      출력하려면 v-html 지시문을 사용해야 합니다.
    </p>
    <pre v-highlightjs>
        <code class="html">
    &lt;p&gt;콧수염 괄호 사용: &#123;&#123;rawHtml&#125;&#125; &lt;/p&gt;
    &lt;p&gt;v-html 사용: &lt;span v-html="rawHtml"&gt;&lt;/span&gt;&lt;/p&gt;
        </code>
    </pre>
    <div class="demo-box">
      <p class="demo-name">예제: 콧수염 괄호와 v-html 비교</p>
      <div class="demo">
        <p>콧수염 괄호 사용: {{ rawHtml }}</p>
        <p>v-html 사용: <span v-html="rawHtml"></span></p>
      </div>
    </div>
    <hr />
    <h2>
      <a class="header-anchor" href="#attribute-bindings">#</a>
      Attribute Bindings
    </h2>
    <div class="demo-box">
      <p class="demo-name">예제: 속성 바인딩(버튼 클릭시 버튼 비활성화)</p>
      <div class="demo">
        <button class="demo-btn" @click="isDisabled" :disabled="isBtnDisabled">
          Button
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "메세지",
      rawHtml: '<span style="color:red">This should be red.</span>',
      isBtnDisabled: false,
    };
  },
  methods: {
    isDisabled() {
      this.isBtnDisabled = !this.isBtnDisabled;
    },
  },
};
</script>

<style scoped>
button:disabled {
  color: #66666666;
}
</style>
