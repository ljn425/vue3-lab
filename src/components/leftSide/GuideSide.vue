<template>
  <div id="linkList" class="group">
    <section id="VPSidebarGroup">
      <div class="title">
        <h2>Essentials</h2>
      </div>
      <div v-for="(item, i) in routeMenu" :key="`${item.name}_${i}`">
        <a
          class="link"
          :class="{ clicked: i == index }"
          href="#"
          @click.prevent="clicked(i, item)"
          >{{ item.name }}</a
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      routeMenu: [
        {
          link: "/application",
          name: "Createing an Application",
        },
        {
          link: "/template-syntax",
          name: "Template Syntax",
        },
        {
          link: "/application",
          name: "Reactivity Fundamentals",
        },
        {
          link: "/computed",
          name: "Computed Properties",
        },
        {
          link: "/class-and-style",
          name: "Class and Style Bindings",
        },
        {
          link: "/conditional",
          name: "Conditional Rendering",
        },
      ],
    };
  },
  methods: {
    clicked(i, item) {
      this.index = i;
      this.$router.push(item.link);
    },
  },
  mounted() {
    this.$router.push("/application");
  },
};

// const linkList = document.getElementById("linkList");
// const linkListChildren = linkList.children;

// function clicked(event) {
//   let target = event.target;
//   if (target.tagName === "A") {
//     for (const link of linkListChildren) {
//       link.classList.remove("clicked");
//     }
//     target.classList.add("clicked");
//   }
// }

// linkList.addEventListener("click", clicked);
</script>

<style scoped>
.link {
  color: #ebebeb99;
  font-size: 13px;
  line-height: 20px;
}
.clicked {
  color: green;
}
</style>
