<template>
  <div class="register-container">
    <Form @submit="register">
      <h3><i class="fas fa-user-plus"></i>Register</h3>
      <div class="form-group">
        <label for="email"><i class="fas fa-user"></i>Username</label>
        <Field
          id="username"
          type="username"
          name="username"
          placeholder="Enter username..."
          v-model="form.username"
          rules="username"          
        />
        <ErrorMessage class="error-msg" name="username" />
      </div>
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
      <div class="form-group">
        <label for="confirm_password"><i class="fas fa-check"></i>Confirm</label>
        <Field
          id="confirm_password"
          type="password"
          name="confirm_password"
          placeholder="Confirm password..."
          v-model="form.confirm_password"
          rules="confirmed:@password"
          autocomplete="confirm_password"
        />
        <ErrorMessage class="error-msg" name="confirm_password" />
      </div>
      <button class="login" type="submit">Register</button>
    </Form>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { auth } from '/@/db.js'
import bus from '/@/bus.js'

export default {
  name: 'Register',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const form = reactive({
      username: '',
      email: '',
      password: '',
      confirm_password: '',
    })
    const isSuccess = ref(false)

    // Sign up new user
    const register = async () => {
      try {
        await auth.createUserWithEmailAndPassword(form.email, form.password)
        await auth.currentUser.updateProfile({
          displayName: form.username,
          photoURL: 'https://i.postimg.cc/mrtfw2dd/anonymous.png',
        })

        await bus.emit('alert', { isShow: true, msg: '註冊成功，即將跳轉 !', style: 'success'});

        await setTimeout(() => { 
          bus.emit('alert', { isShow: false, msg: '', style: '' });
          router.push('/login')
        }, 1500);
      } catch {
        bus.emit('alert', { isShow: true, msg: '此帳號已被使用 !', style: 'error' });

        setTimeout(() => {
          bus.emit('alert', {isShow: false, msg: '', style: '' });
        }, 2000);
      }
    }
    bus.emit('route', route.path)
    return { 
      register,
      form,
      isSuccess,
    }
  }  
}
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
        box-shadow: 2px 2px 8px $secondary-color;
        border-radius: 0.5rem;
        &:focus {
          outline: 0;
        }
      }
      .error-msg {
        color: $error-color;
        font-weight: 500;
        font-size: $small-size;
      }
    }
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
      transition: all .3s ease-in-out;
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
