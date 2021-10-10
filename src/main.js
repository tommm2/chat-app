import { createApp } from 'vue'
import router from '/@/router'
import App from '/@/App.vue'
import store from '/@/store'
import { auth } from '/@/db.js'
import '/@/validate.js'

import '@fortawesome/fontawesome-free/css/all.css'

let app
auth.onAuthStateChanged(() => {
  if(!app) {
    app = createApp(App).use(router).use(store).mount('#app');
  }
})

router.beforeEach((to, from) => {
  // Initital burger menu
  store.commit('UPDATE_MENU', false)

  if(to.meta.requiresAuth && !auth.currentUser) {
    return {
      name: 'Login',
      query: { redirect: to.fullPath },
    }
  }
})
