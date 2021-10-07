<template>
  <div v-if="isShow" class="alert-container">
    <div class="alert" :class="style">
      <i v-if="style === 'success'" class="far fa-check-circle"></i>
      <i v-else class="fas fa-exclamation-circle"></i>
      {{ message }}
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import bus from '/@/bus.js'
export default {
  name: 'Alert',
  setup() {
    const isShow = ref(false)
    const message = ref('')
    const style = ref('')
    onMounted(() => {
      bus.on('alert', (alert) => {
        isShow.value = alert.isShow
        message.value = alert.msg
        style.value = alert.style
      })
    })
   
    return { isShow, message, style }
  }
}
</script>
<style lang="scss" scoped>
i {
  margin-right: 10px;
}
.alert-container {
  position: absolute;
  top: 10%;
  right: 4%;
  .alert {
    // width: 350px;
    padding: 10px 15px;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    &.error {
      background-color: #DB4437;
    }
    &.success {
      background-color: #4267B2;
    }
  }
}
</style>
