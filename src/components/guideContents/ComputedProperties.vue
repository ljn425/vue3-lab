<template>
  <div>
    <h1>
      <a class="header-anchor" href="#computed-properties">#</a>
      Computed Properties
    </h1>
    <hr />
    <h2>
      <a class="header-anchor" href="#basic-example">#</a>
      Basic Example
    </h2>
    <p>
      템플릿 내 표현식은 매우 편리하지만 간단한 작업을 위한 것입니다. 템플릿에
      너무 많은 논리를 넣으면 템플릿이 부풀어 오르고 유지 관리가 어려워질 수
      있습니다.
    </p>
    <p>
      그렇기 때문에 반응형 데이터를 포함하는 복잡한 논리의 경우
      <strong>computed</strong> 속성 을 사용하는 것이 좋습니다 .
    </p>
    <br />
    <div>
      <p>예제 : 책 출간 여부 확인</p>
      <div class="demo">
        <p>Has published books:</p>
        <span>{{ publishedBooksMessage }}</span>
      </div>
    </div>
    <hr />
    <h2>
      <a class="header-anchor" href="#writable-computed">#</a>
      Writable Computed
    </h2>
    <hr />
    <p>
      computed 속성은 기본적으로 getter 전용입니다. computed 속성에 새 값을
      할당하려고 하면 런타임 경고가 표시됩니다. 드문 경우지만 "쓰기 가능한" 계산
      속성이 필요한 경우 getter와 setter를 모두 제공하여 만들 수 있습니다.
    </p>
    <pre v-highlightjs>
            <code class="javascript">
export default {
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe'
        }
    },
    computed: {
        fullName: {
            // getter
            get() {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set(newValue) {
                // Note: we are using destructuring assignment syntax here.
                [this.firstName, this.lastName] = newValue.split(' ')
            }
        }
    }
}
            </code>
        </pre>
    <div>
      <div class="demo">
        <p>예제 : computed get(), set()</p>
        <p>fullName set: {{ (fullName = "Mari Lee") }}</p>
        <p>fullName get: {{ fullName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: {
        name: "Jone Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
      firstName: "",
      lastName: "",
    };
  },
  computed: {
    publishedBooksMessage() {
      return this.author.books.length > 0 ? "YES" : "NO";
    },
    computedNow() {
      return Date.now();
    },
    fullName: {
      // getter
      get() {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        [this.firstName, this.lastName] = newValue.split(" ");
      },
    },
  },
  methods: {
    now2() {
      return Date.now();
    },
  },
};
</script>

<style></style>
