<template>
  <nav class="navbar">
    <router-link :to="{ name: 'Login' }" class="nav-logo">
      <i class="fas fa-sms"></i>
      Chat App
    </router-link>
    <ul class="nav-menu" :class="{'show' : menuShow}">
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
      <li class="nav-item">
        <router-link :to="{ name: 'Register' }"  class="nav-link">
          <i class="fas fa-user-plus"></i>
          Register
        </router-link>
      </li>
    </ul>
    <div 
      @click="menuShow = !menuShow" 
      class="hamburger" 
      :class="{ 'show': menuShow }"
    >
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
   </div>
  </nav>
</template>
<script>
import bus from '/@/bus.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '/@/db.js'

export default {
  name: 'Navbar',
  setup() {
    const router = useRouter()
    const menuShow = ref(false)
    const routeName = ref('')

    // logout
    const logout = () => {
      auth.signOut()
      router.push('/login')
    }

    // Burger meun status(on or off)
    bus.on('burger', status => menuShow.value = status)
    bus.on('route', r => routeName.value = r)

    return { menuShow, routeName, logout }
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
