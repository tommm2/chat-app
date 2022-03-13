<template>
  <div class="register-container">
    <Form @submit="register">
      <h3><i class="fas fa-user-plus"></i>Register</h3>
      <CustomInput
        name="username"
        type="text"
        icon="fas fa-user"
        rules="username"
        placeholder="Enter username..."
        v-model:input-value="form.username"
      />
      <CustomInput
        name="email"
        type="email"
        icon="fas fa-envelope"
        placeholder="Enter email..."
        v-model:input-value="form.email"
        rules="email"
      />
      <CustomInput
        name="password"
        type="password"
        rules="password"
        autocomplete="password"
        placeholder="Enter password..."
        icon="fas fa-lock"
        v-model:input-value="form.password"
      />
      <CustomInput
        name="confirm_password"
        type="password"
        rules="confirmed:@password"
        autocomplete="confirm_password"
        placeholder="Confirm password..."
        icon="fas fa-check"
        v-model:input-value="form.confirm_password"
      />
      <button class="login" type="submit">Register</button>
    </Form>
  </div>
</template>
<script setup>
import { Form } from "vee-validate";
import CustomInput from "/@/components/CustomInput.vue";

import { reactive } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();

const form = reactive({
  username: "",
  email: "",
  password: "",
  confirm_password: "",
});

// Sign up new user
const register = () => {
  store.dispatch("register", form);
};

// Change Navbar.vue routeName
store.commit("UPDATE_ROUTE", route.path);
</script>
<style lang="scss" scoped>
.register-container {
  @include d-flex();
  overflow-y: hidden;
  height: inherit;
  color: $text-white;
  i {
    margin-right: 10px;
  }
  h3 {
    font-size: $large-size;
    margin-bottom: 10px;
    letter-spacing: 1px;
    text-align: center;
  }
  form {
    width: 330px;
    padding: 15px;
    margin-top: 50px;
    background-color: $primary-color;
    box-shadow: 1px 1px 10px $primary-shadow;
    border-radius: 10px;
    .login {
      cursor: pointer;
      letter-spacing: 1px;
      width: 100%;
      margin: 20px 0;
      padding: 0.6rem 0.5rem;
      border-radius: 0.5rem;
      border: 0;
      background-color: $submit-color;
      color: $text-white;
      transition: all 0.3s ease-in-out;
      &:focus {
        outline: 0;
      }
      &:hover {
        box-shadow: 1px 1px 10px $submit-color;
        transform: translateY(-1px);
      }
    }
  }
}
</style>
