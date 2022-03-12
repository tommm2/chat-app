import { createApp } from "vue";
import "@fortawesome/fontawesome-free/css/all.css";

import App from "/@/App.vue";
import store from "/@/store";
import { auth } from "/@/db.js";
import router from "/@/router";
import "/@/validate.js";

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router).use(store).mount("#app");
  }
});

router.beforeEach((to, from) => {
  // Initital burger menu
  store.commit("UPDATE_MENU", false);

  if (to.meta.requiresAuth && !auth.currentUser) {
    return {
      name: "Login",
      query: { redirect: to.fullPath },
    };
  }
});
