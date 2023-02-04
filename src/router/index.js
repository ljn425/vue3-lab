import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/guide",
    component: () => import("@/views/GuideView.vue"),
    children: [
      {
        path: "/application",
        component: () =>
          import("@/components/guideContents/CreatingAnApplication.vue"),
      },
      {
        path: "/template-syntax",
        component: () =>
          import("@/components/guideContents/TemplateSyntax.vue"),
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/errorPage/PageNotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
