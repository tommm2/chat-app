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
  color: #fff;
}
nav {
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:#02C874;
  box-shadow: 2px 2px 10px rgba(0, 233, 50, 0.822);
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
      transition: all .3s ease-in-out;
      background-color: #fff;
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
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-item {
      margin-left: 1rem;
      .nav-link {
        position: relative;
        text-decoration: none;
        transition: color .3s ease-in-out;
        font-weight: 500;
        letter-spacing: 1px;
        &:hover {
          color: #4267B2;
        }
      }
    }
    @media (max-width: 768px) {
      position: fixed;
      right: -100%;
      top: 3.83rem;
      z-index: 100;
      flex-direction: column;
      background-color: #02C874;
      width: 100%;
      text-align: center;
      transition: 0.3s all ease-in-out;
      box-shadow:
        0 10px 27px rgba(0, 0, 0, 0.05);
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
  color: #4267B2;
  pointer-events: none;
}

.nav-logo {
  color: #fff;
  text-decoration: none;
}
</style>
