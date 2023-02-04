import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./input.css";
import vue3Highlight from "vue3-highlightjs";

import "highlight.js/styles/night-owl.css";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(vue3Highlight);
app.mount("#app");
// createApp(App).use(store).use(router).use(vue3Highlight).mount("#app");
