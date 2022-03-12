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
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Alert",
  setup() {
    const store = useStore();

    return {
      isShow: computed(() => store.state.alert.isShow),
      message: computed(() => store.state.alert.message),
      style: computed(() => store.state.alert.style),
    };
  },
};
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
    padding: 10px 15px;
    border-radius: 5px;
    text-align: center;
    color: $text-white;
    &.error {
      background-color: $error-color;
    }
    &.success {
      background-color: $submit-color;
    }
  }
}
</style>
