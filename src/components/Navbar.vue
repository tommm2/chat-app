<template>
  <nav class="navbar">
    <router-link 
      :style="{ 'pointer-events': routeName !== '/chat' ? 'auto' : 'none' }" 
      :to="{ name: 'Login' }" 
      class="nav-logo"
    >
      <i class="fas fa-sms"></i>
      Chat App
    </router-link>
    <ul class="nav-menu" :class="{'show' : showMenu}">
      <li v-if="routeName !== '/chat'" class="nav-item">
        <router-link :to="{ name: 'Login' }"  class="nav-link">
          <i class="fas fa-sign-in-alt"></i>
          Login
        </router-link>
      </li>
      <li v-if="routeName === '/chat'" class="nav-item">
        <a @click="logout" href="#"  class="nav-link">
          <i class="fas fa-sign-out-alt"></i>
          Logout
        </a>
      </li>
      <li v-if="routeName !== '/chat'" class="nav-item">
        <router-link :to="{ name: 'Register' }"  class="nav-link">
          <i class="fas fa-user-plus"></i>
          Register
        </router-link>
      </li>
    </ul>
    <div 
      @click="$store.commit('UPDATE_MENU', !showMenu)" 
      class="hamburger" 
      :class="{ 'show': showMenu }"
    >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
   </div>
  </nav>
</template>
<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { auth, database } from '/@/db.js'

export default {
  name: 'Navbar',
  setup() {
    const store = useStore()
    const router = useRouter()
    const showMenu = computed(() => store.state.showMenu)
    const routeName = computed(() => store.state.routeName)
    const uid = computed(() => store.state.uid)
  
    // Logout
    const logout = () => {
      auth.signOut()
      database.ref(`presence/${uid.value}`).update({ online: false })
      router.push('/login')
    }

    return { showMenu, routeName, logout }
  }
}
</script>
<style lang="scss" scoped>
a {
  color: $text-white;
}

nav {
  @include d-flex($justify: space-between);
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
  padding: 1rem 1.5rem;
  background-color: $primary-color;
  box-shadow: 2px 2px 10px $primary-shadow;
  .nav-logo {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 1px;
  }
  .hamburger {
    display: none;
    .bar {
      display: block;
      width: 25px;
      height: 3px;
      margin: 5px auto;
      background-color: $text-white;
      transition: all .3s ease-in-out;
    }
    @media (max-width: 768px) {
      cursor: pointer;
      display: block;
      &.show .bar {
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        &:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      }
    }
  }
  .nav-menu {
    @include d-flex($justify: space-between);
    list-style: none;
    .nav-item {
      margin-left: 1rem;
      .nav-link {
        position: relative;
        letter-spacing: 1px;
        font-weight: 500;
        text-decoration: none;
        transition: color .3s ease-in-out;
        &:hover {
          color: $submit-color;
        }
      }
    }
    @media (max-width: 768px) {
      position: fixed;
      right: -100%;
      top: 3.83rem;
      z-index: 100;
      width: 100%;
      flex-direction: column;
      box-shadow:
        0 10px 27px rgba(0, 0, 0, 0.05);
      text-align: center;
      background-color: $primary-color;
      transition: 0.3s all ease-in-out;
      .nav-item {
        margin: 10px 0;
      }
      &.show {
        right: 0;
        box-shadow: 10px 2px 10px rgba(0, 0, 0, 0.33);
      }
    }
  }
}

// router-link active class
.active {
  color: $submit-color;
  pointer-events: none;
}

.nav-logo {
  color: $text-white;
  text-decoration: none;
}
</style>
