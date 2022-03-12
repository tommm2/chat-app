import { createStore } from "vuex";
import router from "/@/router";
import { auth, database } from "/@/db.js";
import firebase from "firebase/compat/app";

import alert from "./modules/alert";

const store = createStore({
  strict: true,
  state: () => ({
    uid: "",
    routeName: "",
    showMenu: false,
    onlineUser: [],
    messages: [],
  }),
  mutations: {
    UPDATE_ROUTE(state, payload) {
      state.routeName = payload;
    },
    UPDATE_UID(state, payload) {
      state.uid = payload;
    },
    UPDATE_MENU(state, payload) {
      state.showMenu = payload;
    },
    UPDATE_ONLINE_USER(state, payload) {
      state.onlineUser = payload;
    },
    UPDATE_CHAT_MSG(state, payload) {
      state.messages = payload;
    },
  },
  actions: {
    async register({ dispatch, commit }, payload) {
      const { username, email, password } = payload;
      try {
        await auth.createUserWithEmailAndPassword(email, password);
        await auth.currentUser.updateProfile({
          displayName: username,
          photoURL: "https://i.postimg.cc/mrtfw2dd/anonymous.png",
        });
        await commit("UPDATE_MSG", {
          isShow: true,
          msg: "註冊成功!",
          style: "success",
        });
        await router.push("/login");
        await dispatch("removeMsg", {
          isShow: false,
          msg: "",
          style: "",
        });
      } catch (err) {
        commit("UPDATE_MSG", {
          isShow: true,
          msg: "此帳號已被使用",
          style: "error",
        });
        dispatch("removeMsg", {
          isShow: false,
          msg: "",
          style: "",
        });
      }
    },
    async threePartLogin({ dispatch, commit }, payload) {
      let provider = new firebase.auth.GoogleAuthProvider();
      if (payload === "facebook") {
        provider = new firebase.auth.FacebookAuthProvider();
      }

      try {
        await auth.signInWithPopup(provider);
        await commit("UPDATE_MSG", {
          isShow: true,
          msg: "登入成功",
          style: "success",
        });
        await router.push("/chat");
        await dispatch("removeMsg", {
          isShow: false,
          msg: "",
          style: "",
        });
      } catch {}
    },
    async userLogin({ dispatch, commit }, payload) {
      const { email, password } = payload;
      try {
        await auth.signInWithEmailAndPassword(email, password);
        await commit("UPDATE_MSG", {
          isShow: true,
          msg: "登入成功",
          style: "success",
        });
        await router.push("/chat");
        await dispatch("removeMsg", {
          isShow: false,
          msg: "",
          style: "",
        });
      } catch {
        commit("UPDATE_MSG", {
          isShow: true,
          msg: "查無此用戶",
          style: "error",
        });
        dispatch("removeMsg", {
          isShow: false,
          msg: "",
          style: "",
        });
      }
    },
    pushMessage({ commit }, payload) {
      database.ref("/messages").push(payload);
    },
    getMessage({ commit }, payload) {
      database.ref("/messages").on("value", (snapshot) => {
        commit("UPDATE_CHAT_MSG", snapshot.val());
      });
    },
    userPresence({ commit }, payload) {
      const { uid, displayName, photoURL } = payload;

      let presence = database.ref(`presence/${uid}`);
      let connect = database.ref(".info/connected");

      connect.on("value", (snapshot) => {
        if (snapshot.val()) {
          let isOnline = {
            user: displayName,
            online: true,
            uid: uid,
            photoUrl: photoURL,
          };
          let isOffline = {
            user: displayName,
            online: false,
            uid: uid,
            photoUrl: photoURL,
          };
          presence
            .onDisconnect()
            .set(isOffline)
            .then(() => {
              presence.set(isOnline);
            });
        }
      });

      database.ref("presence").on("value", (snapshot) => {
        commit("UPDATE_ONLINE_USER", snapshot.val());
      });
    },
  },
  modules: {
    alert,
  },
});

export default store;
