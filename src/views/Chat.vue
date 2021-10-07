<template>
  <div class="chat-container">
    <div class="chat-wrap">
      <div class="chat-header">
        <i class="fas fa-comment-dots"></i>
        <div class="info">
          <span>Welcome, {{ user.displayName }}</span>
          <img :src="user.photoURL" :alt="user.displayName">
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
  </div>
</template>
<script>
import { ref } from 'vue'
import { db, auth } from '/@/db.js'
import bus from '/@/bus.js'
import { useRoute } from 'vue-router'

export default {
  name: 'Chat',
  setup() {
    const route = useRoute()
    const message = ref('')
    const messages = ref([])
    const user = ref(auth.currentUser)
    const scroll = ref(null)

    // time format
    const timeFormat = () => {
      const date = new Date(Date.now());
      const options = {
        hour: '2-digit',
        minute: '2-digit',
      }

      return date.toLocaleString('zh-TW', options)
    }

    // send message 
    const sendMessage = () => {
      const userInfo = {
        'userId': user.value.uid,
        'displayName': user.value.displayName,
        'photoUrl': user.value.photoURL,
        'message': message.value || null,
        'createAt': Date.now(),
        'timeFormat': timeFormat()
      }
      
      db.collection('messages').add(userInfo)
      scroll.value.scrollIntoView({ behavior: 'smooth' })
      message.value = ''
    }

    // sent or received
    const sentOrReceived = (uid) => {
      return uid === user.value.uid ? 'send' : 'receive';
    }
    
    // sort message with createAt
    db.collection('messages').orderBy('createAt')
      .onSnapshot((snapshot) => {
        messages.value = snapshot.docs.map(doc => doc.data())
      })
    bus.emit('route', route.path)
    return {
      sendMessage, 
      message, 
      user, 
      messages, 
      sentOrReceived,
      scroll,
    }
  },
}
</script>
<style lang="scss" scoped>

.chat-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;
  .chat-wrap {
    max-width: 600px;
    width: 90%;
    border: 4px solid #02C874;
    border-radius: 10px;
    box-shadow: 1px 1px 8px rgba(0, 233, 50, 0.822);
    background-color: inherit;
    .chat-header {
      color: #fff;
      width: 100%;
      padding: 10px;
      background-color: #02C874;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .info {
        display: flex;
        align-items: center;
        img { 
          width: 30px; 
          height: 30px; 
          border-radius: 50%;
          margin-left: 10px;
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
          color: #fff;
          display: flex;
          font-size: 14px;
        }
        p {
          max-width: 200px;
          padding: 10px;
          border-radius: 10px;
          background-color: #02C874;
          word-break: break-all;
        }
        small {
          color: #6C6C6C;
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
            color: #6C6C6C;
            margin-right: 10px;
          }
        }
        &.receive {
          p {
            margin-left: 10px;
            background-color: #272727;
            color: #fff;
          }
          small {
            color: #6C6C6C;
            margin-left: 10px;
          } 
          span {
            margin: 0 0 3px 10px;
          }
        }
      }
      &::-webkit-scrollbar {
        width: 0.4rem;
      }
      &::-webkit-scrollbar-thumb {
        background: #02C874;
        border-radius: 10px;
      }
      @media (max-width: 400px) {
        height: 330px;
      }
    }
    form {
      display: flex;
      width: 100%;
      padding: 20px;
      border-top: 4px solid #02C874;
      input {
        width: 100%;
        padding: 5px 10px;
        font-size: 16px;
        color: #fff;
        border-radius: 30px;
        border: 2px solid #02C874;
        background-color: #4F4F4F;
        word-break: break-all;
        &:focus {
          outline: 0;
        }
      }
      button {
        cursor: pointer;
        margin-left: 10px;
        font-size: 16px;
        border: 0;
        color: #02C874;
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
}
  
</style>
