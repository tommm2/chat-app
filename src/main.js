import { createApp } from 'vue'
import router from '/@/router'
import App from '/@/App.vue'
import bus from '/@/bus.js'
import { auth } from '/@/db.js'
import '/@/validate.js'

import '@fortawesome/fontawesome-free/css/all.css'

let app
auth.onAuthStateChanged(() => {
  if(!app) {
    app = createApp(App).use(router).mount('#app');
  }
})

router.beforeEach((to, from) => {
  // initital burger menu
  bus.emit('burger', false)
  if(to.meta.requiresAuth && !auth.currentUser) {
    return {
      name: 'Login',
      query: { redirect: to.fullPath },
    }
  }
})
