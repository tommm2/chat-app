<template>
  <div class="login-container">
    <Form @submit="userLogin">
      <h3><i class="fas fa-user"></i>Login</h3>
      <div class="form-group">
        <label for="email"><i class="fas fa-envelope"></i>Email</label>
        <Field
          id="email"
          type="email"
          name="email"
          placeholder="Enter email..."
          v-model="form.email"
          rules="email"
        />
        <ErrorMessage class="error-msg" name="email" />
      </div>
      <div class="form-group">
        <label for="password"><i class="fas fa-lock"></i>Password</label>
        <Field
          id="passowrd"
          type="password"
          name="password"
          placeholder="Enter password..."
          v-model="form.password"
          rules="password"
          autocomplete="password"
        />
        <ErrorMessage class="error-msg" name="password" />
      </div>
      <div class="btn-group">
        <button class="login" type="submit">Sign In</button>
        <div class="social-login">
          <button @click.prevent="threePartLogin" class="btn google">
            <i class="fab fa-google-plus"></i>
          </button>
          <button
            @click.prevent="threePartLogin('facebook')"
            class="btn facebook"
          >
            <i class="fab fa-facebook"></i>
          </button>
        </div>
      </div>
    </Form>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore();
const form = reactive({
  email: "",
  password: "",
});

// Login with google or fb
const threePartLogin = (social = "Google") => {
  store.dispatch("threePartLogin", social);
};

// Login with email
const userLogin = () => {
  store.dispatch("userLogin", form);
};

// Change Navbar.vue routeName
store.commit("UPDATE_ROUTE", route.path);

</script>
<style lang="scss" scoped>
.login-container {
  @include d-flex();
  height: inherit;
  color: $text-white;
  i {
    margin-right: 10px;
  }
  h3 {
    font-size: 24px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    text-align: center;
  }
  form {
    width: 330px;
    padding: 30px;
    border-radius: 10px;
    background-color: $primary-color;
    box-shadow: 1px 1px 10px $primary-shadow;
    .form-group {
      width: 100%;
      margin: 4px 0;
      input {
        width: inherit;
        border: 0;
        margin: 10px 0;
        padding: 0.8rem 0.5rem;
        background-color: $secondary-color;
        color: $text-white;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.534);
        border-radius: 0.5rem;
        &:focus {
          outline: 0;
        }
      }
      .error-msg {
        color: $error-color;
        font-weight: 600;
        font-size: 14px;
      }
    }
    .btn-group {
      width: 100%;
      text-align: center;
      a {
        color: $text-white;
        text-decoration: none;
      }
      .login {
        cursor: pointer;
        width: inherit;
        margin: 20px 0;
        padding: 0.6rem 0.5rem;
        border: 0;
        border-radius: 0.5rem;
        letter-spacing: 1px;
        color: $text-white;
        background-color: $submit-color;
        transition: all 0.3s ease-in-out;
        &:focus {
          outline: 0;
        }
        &:hover {
          box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.534);
          transform: translateY(-1px);
        }
      }
      .social-login {
        width: inherit;
        display: flex;
        justify-content: center;
        margin-top: 10px;
        .btn {
          cursor: pointer;
          margin: 0 15px;
          border: 0;
          font-size: 35px;
          background-color: transparent;
          transition: transform 3s ease-out;
          &:focus {
            outline: 0;
          }
          &:hover {
            animation: shock 0.3s ease-in-out;
          }
          &.facebook {
            color: $submit-color;
          }
          &.google {
            color: $error-color;
          }
          @keyframes shock {
            0% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(40deg);
            }
            75% {
              transform: rotate(-40deg);
            }
            100% {
              transform: rotate(-0deg);
            }
          }
        }
      }
    }
  }
}
</style>
