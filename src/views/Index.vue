<template>
  <div class="container">
    <Navbar></Navbar>
    <router-view v-slot="{ Component }">
      <transition name="slide" appear>
        <component :is="Component" />
      </transition>
    </router-view>
    <transition name="slide-in">
      <Alert />
    </transition>
  </div>
</template>
<script>
import Navbar from '/@/components/Navbar.vue'
import Alert from '/@/components/Alert.vue'
export default {
  name: 'Index',
  components: {
    Navbar,
    Alert
  },
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
.container {
  overflow: hidden;
  height: 100vh;
  background-color: #313131;
  font-family: 'Roboto', sans-serif;
}

// transition
.slide-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-enter-active {
  transition: all 1s ease;
}

// // slide up
.slide-in-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.slide-in-enter-to {
  opacity: 1;
  transform: translateX(0px);
}
.slide-in-enter-active {
  transition: all 1s ease-out;
}

.slide-in-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
.slide-in-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.slide-in-leave-active {
  transition: all 1s ease-in;
}
</style>
