import{c as _,a as b,r as y,o as A,b as v,m as P,f as u,d as E,e as a,g as L}from"./vendor.1c6d3ac3.js";const w=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}};w();const I="modulepreload",l={},O="/chat-app/",c=function(r,i){return!i||i.length===0?r():Promise.all(i.map(o=>{if(o=`${O}${o}`,o in l)return;l[o]=!0;const t=o.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const s=document.createElement("link");if(s.rel=t?"stylesheet":I,t||(s.as="script",s.crossOrigin=""),s.href=o,document.head.appendChild(s),t)return new Promise((h,g)=>{s.addEventListener("load",h),s.addEventListener("error",g)})})).then(()=>r())},R=[{name:"Index",path:"/",component:()=>c(()=>import("./Index.ddb6e454.js"),["assets/Index.ddb6e454.js","assets/Index.092f6c49.css","assets/vendor.1c6d3ac3.js"]),redirect:"/login",children:[{name:"Login",path:"login",component:()=>c(()=>import("./Login.6614e537.js"),["assets/Login.6614e537.js","assets/Login.2c8c9d87.css","assets/vendor.1c6d3ac3.js"])},{name:"Chat",path:"chat",component:()=>c(()=>import("./Chat.1f2b4e4a.js"),["assets/Chat.1f2b4e4a.js","assets/Chat.9e24cc95.css","assets/vendor.1c6d3ac3.js"]),meta:{requiresAuth:!0}},{name:"Register",path:"register",component:()=>c(()=>import("./Register.c6328223.js"),["assets/Register.c6328223.js","assets/Register.8f3a83b8.css","assets/vendor.1c6d3ac3.js"])}]},{path:"/:catchAll(.*)",redirect:"/login"}],m=_({linkActiveClass:"active",history:b(),routes:R});var C=(e,r)=>{for(const[i,o]of r)e[i]=o;return e};const k={};function D(e,r){const i=y("router-view");return A(),v(i)}var S=C(k,[["render",D]]),j=P();const f={apiKey:"AIzaSyCSei4bGBnDPGw3vOMuTPeR1mg4Qq5UopA",authDomain:"vue-chat-app-e373f.firebaseapp.com",projectId:"vue-chat-app-e373f",storageBucket:"vue-chat-app-e373f.appspot.com",messagingSenderId:"191258709366",appId:"1:191258709366:web:1007e9d9633ff375937e57",measurementId:"G-D5D6P8N5Y1"},z=u.initializeApp(f).firestore(),p=u.initializeApp(f).auth();E({validateOnInput:!0});a("username",e=>!e||!e.length?"* Username can't be empty":e.length<3||e.length>10?"* Username must between 3 ~ 10 character":!0);a("email",e=>{if(!e||!e.length)return"* Email can't be empty";var r=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;return r.test(e)?!0:"* Email must be a valid email"});a("password",e=>!e||!e.length?"* Password can't be empty":e.length<6||e.length>12?"* Passowrd must between 6 ~ 12 character":!0);a("confirmed",(e,[r])=>e!==r||!e||!e.length?"* Password must match":!0);let d;p.onAuthStateChanged(()=>{d||(d=L(S).use(m).mount("#app"))});m.beforeEach((e,r)=>{if(j.emit("burger",!1),e.meta.requiresAuth&&!p.currentUser)return{name:"Login",query:{redirect:e.fullPath}}});export{C as _,p as a,j as b,z as d};
