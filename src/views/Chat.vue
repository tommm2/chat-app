<template>
  <div class="chat-container">
    <div class="chat-wrap">
      <div class="chat-header">
        <i class="fas fa-comment-dots"></i>
        <div class="info">
          <span>Welcome, {{ currentUser.displayName }}</span>
          <img :src="currentUser.photoURL" :alt="currentUser.displayName">
        </div>
      </div>
      <div class="chat-box">
        <div
          v-for="(msg, index) in messages"
          :class="['chat-msg', sentOrReceived(msg.userId)]"
          :key="index"
        >
          <img :src="msg.photoUrl" :alt="msg.displayName">
          <div>
            <span>{{ msg.displayName }}</span>
            <p>{{ msg.message }}</p>
          </div>
          <small>{{ msg.timeFormat }}</small>
        </div>
        <div ref="scroll"></div>
      </div>
      <form @submit.prevent="sendMessage">
        <input 
          v-model="message" 
          class="input-msg" 
          placeholder="Enter message..."
        >
        <button :disabled="!message" type="submit" title="send!">
          <i class="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
    <div class="user-wrap" :class="{ 'show': isShow }">
      <h4><i class="fas fa-signal"></i>目前在線</h4>
      <div class="user" v-for="(user, index) in onlineUser">
        <img v-if="user.online" :src="user.photoUrl" :alt="user.displayName">
        <span 
          :title="user.user" 
          class="username" 
          v-if="user.online"
        >
          {{ user.user }}
        </span>
      </div>
      <button @click="isShow = !isShow" class="toggle">
        <i class="fas fa-chevron-right" :class="{ 'show': isShow }"></i>
      </button>
    </div>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { auth } from '/@/db.js'

export default {
  name: 'Chat',
  setup() {
    const store = useStore()
    const route = useRoute()
    const message = ref('')
    const currentUser = ref(auth.currentUser)
    const isShow = ref(false)
    const scroll = ref(null)

    // Time format
    const timeFormat = () => {
      const date = new Date(Date.now());
      const options = {
        hour: '2-digit',
        minute: '2-digit',
      }

      return date.toLocaleString('zh-TW', options)
    }

    // Send message 
    const sendMessage = () => {
      const userInfo = {
        'userId': currentUser.value.uid,
        'displayName': currentUser.value.displayName,
        'photoUrl': currentUser.value.photoURL,
        'message': message.value || null,
        'createAt': Date.now(),
        'timeFormat': timeFormat()
      }

      store.dispatch('pushMessage', userInfo)
      scroll.value.scrollIntoView({ behavior: 'smooth' })
      message.value = ''
    }
  
    // Sent or received
    const sentOrReceived = (uid) => {
      return uid === currentUser.value.uid ? 'send' : 'receive';
    }
    
    // Get all message info
    store.dispatch('getMessage')

    // Show user presence
    store.dispatch('userPresence', currentUser.value)

    // Change Navbar.vue routeName
    store.commit('UPDATE_ROUTE', route.path)

    // Change Navbar.vue uid
    store.commit('UPDATE_UID', currentUser.value.uid)
    return {
      isShow,
      scroll,
      message, 
      sendMessage, 
      sentOrReceived,
      currentUser, 
      messages: computed(() => store.state.messages), 
      onlineUser: computed(() => store.state.onlineUser),
    }
  },
}
</script>
<style lang="scss" scoped>
.chat-container {
  @include d-flex($direction: column);
  height: inherit;
  overflow: hidden;
  margin-top: 30px;
  .chat-wrap {
    width: 90%;
    max-width: 600px;
    border: 4px solid $primary-color;
    border-radius: 10px;
    box-shadow: 1px 1px 8px $primary-shadow;
    background-color: inherit;
    .chat-header {
      @include d-flex($justify: space-between);
      width: 100%;
      padding: 10px;
      color: $text-white;
      background-color: $primary-color;
      .info {
        display: flex;
        align-items: center;
        img { 
          width: 30px; 
          height: 30px; 
          margin-left: 10px;
          border-radius: 50%;
        }
      }
    }
    .chat-box {
      height: 450px;
      padding: 0 12px;
      overflow-y: scroll;
      .chat-msg {
        display: flex;
        align-items: center;
        margin: 10px 0;
        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
        span {
          display: flex;
          font-size: 14px;
          color: $text-white;
        }
        p {
          max-width: 200px;
          padding: 10px;
          border-radius: 10px;
          word-break: break-all;
          background-color: $primary-color;
        }
        small {
          color: $text-mute;
        }
        &.send {
          flex-direction: row-reverse;
          span {
            display: none;
          }
          p {
            margin-right: 10px;
          }
          small {
            margin-right: 10px;
            color: $text-mute;
          }
        }
        &.receive {
          p {
            margin-left: 10px;
            color: $text-white;
            background-color: #272727;
          }
          small {
            margin-left: 10px;
          } 
          span {
            margin: 0 0 3px 10px;
          }
        }
      }
      @media (max-width: 400px) {
        height: 330px;
      }
    }
    form {
      display: flex;
      width: 100%;
      padding: 20px;
      border-top: 4px solid $primary-color;
      input {
        width: 100%;
        padding: 5px 10px;
        border: 2px solid $primary-color;
        border-radius: 30px;
        font-size: 16px;
        word-break: break-all;
        color: $text-white;
        background-color: inherit;
        &:focus {
          outline: 0;
        }
      }
      button {
        cursor: pointer;
        margin-left: 10px;
        border: 0;
        font-size: 16px;
        color: $primary-color;
        background-color:transparent;
        transition: .3s all ease-in;
        &:hover {
          animation: shock .3s ease-in-out;
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
  .user-wrap {
    position: fixed;
    background-color: $primary-color;
    top: 20%;
    left: 0;
    height: 300px;
    width: 200px;
    padding: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 1px 1px 10px $primary-shadow;
    color: $text-white;
    transform: translateX(-200px);
    transition: transform .5s ease-in-out;
    .user {
      display: flex;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      .username {
        margin: 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .toggle {
      cursor: pointer;
      position: absolute;
      top: 40%;
      right: -25px;
      padding: 10px;
      border: 0;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      color: $text-white;
      box-shadow: 3.8px 1px 10px $primary-shadow;
      background-color: inherit;
      i {
        transition: transform .5s ease-in-out;
        &.show {
          transform: rotate(180deg);
        }
      }
    }
    &.show {
      transform: translateX(0px);
    }
  }
}

::-webkit-scrollbar {
  width: 0.4rem;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: $primary-color;
}
</style>
