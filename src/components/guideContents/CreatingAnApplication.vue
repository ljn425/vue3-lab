<template>
  <div>
    <h1 id="createing-a-vue-application">
      <a class="header-anchor" href="#createing-a-vue-application">#</a>
      Creating a Vue Application
    </h1>
    <hr />
    <h2>
      <a class="header-anchor" href="#the-application-instance">#</a>
      The application instance
    </h2>
    <p>
      Every Vue application starts by creating a new
      <strong>application instance</strong>
      with the
      <a href="#"><code>createApp</code></a>
      function:
    </p>
    <div class="language-js">
      <pre v-highlightjs>
        <code class="javascript">
import { createApp } from 'vue'
          
const app = createApp({
/* root component options */
})
        </code>
      </pre>
    </div>
    <hr />
    <h2>
      <a class="header-anchor" href="#the-root-component">#</a>
      The Root Component
    </h2>
    <p>
      The Object we are passing into <code>createApp</code> is in fact a
      component. Every app requires a "root component" that can contain other
      components as its children. <br /><br />
      If you are using Single-File Components, we typically import the root
      component from another file:
    </p>
    <div class="language-js">
      <pre v-highlightjs>
            <code class="javascript">
import { createApp } from 'vue'
// import the root component App from a single-file component.
import App from './App.vue'
              
const app = createApp(App)
            </code>
          </pre>
    </div>
    <p>
      While many examples in this guide only need a single component, most real
      applications are organized into a tree of nested, reusable components. For
      example, a Todo application's component tree might look like this:
    </p>
    <div class="language-">
      <pre v-highlightjs>
        <code class="html">
  App (root component)
  ├─ TodoList
  │ └─ TodoItem
  │ ├─ TodoDeleteButton
  │ └─ TodoEditButton
  └─ TodoFooter
  ├─ TodoClearButton
  └─ TodoStatistics
         </code>
      </pre>
    </div>
    <hr />
    <h2>
      <a class="header-anchor" href="#mounting-the-app">#</a>
      Mounting the App
    </h2>
    <p>
      응용 프로그램 인스턴스는 .mount() 메서드가 호출될 때까지 아무 것도
      렌더링하지 않습니다. 실제 DOM 요소 또는 선택기 문자열일 수 있는 "컨테이너"
      인수를 예상합니다.
    </p>
    <div class="language-html">
      <pre v-highlightjs>
        <code class="html">
  &lt;div id="app"&gt;&lt;/div&gt;
        </code>
      </pre>
    </div>
    <div class="language-js">
      <pre v-highlightjs>
            <code class="javascript">
  app.mount('#app')
            </code>
          </pre>
    </div>
    <p>
      앱의 루트 구성 요소 콘텐츠는 컨테이너 요소 내부에 렌더링됩니다. 컨테이너
      요소 자체는 앱의 일부로 간주되지 않습니다. <code>.mount()</code> 메서드는
      모든 앱 구성 및 자산 등록이 완료된 후에 항상 호출되어야 합니다. 또한 자산
      등록 방법과 달리 반환 값은 응용 프로그램 인스턴스가 아닌 루트 구성 요소
      인스턴스라는 점에 유의하십시오.
    </p>
    <h2>
      <a class="header-anchor" href="#in-dom-root-componet-template">#</a>
      In-DOM Root Component Template
    </h2>
    <p>
      빌드 단계 없이 Vue를 사용하는 경우 루트 구성 요소의 템플릿을 마운트
      컨테이너 내부에 직접 작성할 수 있습니다.
    </p>
    <div class="language-html">
      <pre v-highlightjs>
        <code class="html">
  &lt;div id="app"&gt;
    &lt;button @click="count++"&gt;&#123;&#123; count &#125;&#125;&lt;/button&gt;
  &lt;/div&gt;
        </code>
      </pre>
    </div>
    <div class="language-js">
      <pre v-highlightjs>
            <code class="javascript">
  import { createApp } from 'vue'
  
  const app = createApp({
    data() {
      return {
        count: 0
      }
    }
  })
  
  app.mount('#app')
   
            </code>
          </pre>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
