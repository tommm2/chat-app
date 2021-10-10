import { createStore } from 'vuex'
import router from '/@/router'
import { auth } from '/@/db.js'
import firebase from 'firebase/compat/app'

import alert from './modules/alert'

const store = createStore({
  strict: true,
  state: () => ({
    routeName: '',
    showMenu: false,
    uid: '',
  }),
  mutations: {
    UPDATE_ROUTE(state, payload) {
      state.routeName = payload
    },
    UPDATE_UID(state, payload) {
      state.uid = payload
    },
    UPDATE_MENU(state, payload) {
      state.showMenu = payload
    }
  },
  actions: {
    async register({ dispatch, commit }, payload) {
      const { username, email, password } = payload
      try {
        await auth.createUserWithEmailAndPassword(email, password)
        await auth.currentUser.updateProfile({
          displayName: username,
          photoURL: 'https://i.postimg.cc/mrtfw2dd/anonymous.png',
        })
        await commit('SHOW_MSG', { 
          isShow: true,
          msg: '註冊成功!', 
          style: 'success'
        })
        await router.push('/login')
        await dispatch('removeMsg', { 
          isShow: false, 
          msg: '', 
          style: '' 
        })
       
      } catch(err) {
        commit('SHOW_MSG', { 
          isShow: true, 
          msg: '此帳號已被使用', 
          style: 'error',
        }) 
        dispatch('removeMsg', {
          isShow: false, 
          msg: '', 
          style: '',
        })
      }
    },
    async threePartLogin ({ dispatch, commit }, payload) {
      let provider = new firebase.auth.GoogleAuthProvider()
      if(payload === 'facebook') {
        provider = new firebase.auth.FacebookAuthProvider()
      }

      try {
        await auth.signInWithPopup(provider)
        await commit('SHOW_MSG', { 
          isShow: true,
          msg: '登入成功', 
          style: 'success' 
        })
        await router.push('/chat')
        await dispatch('removeMsg', {
          isShow: false,
          msg: '', 
          style: '' 
        })
      } catch {}
    },
    async userLogin({ dispatch, commit }, payload) {
      const { email, password }  = payload 
      try {
        await auth.signInWithEmailAndPassword(email, password)
        await commit('SHOW_MSG', { 
          isShow: true,
          msg: '登入成功', 
          style: 'success' 
        })
        await router.push('/chat')
        await dispatch('removeMsg', {
          isShow: false,
          msg: '', 
          style: '' 
        })
      } catch {
        commit('SHOW_MSG', { 
          isShow: true,
          msg: '查無此用戶', 
          style: 'error',
        })
        dispatch('removeMsg', {
          isShow: false,
          msg: '', 
          style: '',
        })
      }
    },

  },
  modules: {
    alert
  },
})

export default store
