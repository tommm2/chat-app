import{u as D,A as I,D as c,o as i,k as r,m as e,x as u,G as U,H as w,C as R,I as k,J as C,q as p,s as L,t as T,v as E,p as y}from"./vendor.b0e8f9d3.js";import{_ as M,a as O,d as m}from"./index.004b5e9d.js";const V={name:"Chat",setup(){const l=D(),n=I(),h=c(""),t=c([]),v=c([]),a=c(O.currentUser),s=c(!1),d=c(null),N=()=>{const o=new Date(Date.now()),_={hour:"2-digit",minute:"2-digit"};return o.toLocaleString("zh-TW",_)},S=()=>{const o={userId:a.value.uid,displayName:a.value.displayName,photoUrl:a.value.photoURL,message:h.value||null,createAt:Date.now(),timeFormat:N()};m.ref("/messages").push(o),d.value.scrollIntoView({behavior:"smooth"}),h.value=""},b=o=>o===a.value.uid?"send":"receive";m.ref("/messages").on("value",o=>{t.value=o.val()});let g=m.ref(`presence/${a.value.uid}`);return m.ref(".info/connected").on("value",o=>{if(o.val()){let _={user:a.value.displayName,online:!0,uid:a.value.uid,photoUrl:a.value.photoURL},x={user:a.value.displayName,online:!1,uid:a.value.uid,photoUrl:a.value.photoURL};g.onDisconnect().set(x).then(()=>{g.set(_)})}}),m.ref("presence").on("value",o=>{v.value=o.val()}),l.commit("UPDATE_ROUTE",n.path),l.commit("UPDATE_UID",a.value.uid),{sendMessage:S,message:h,currentUser:a,messages:t,sentOrReceived:b,scroll:d,onlineUser:v,isShow:s}}},f=l=>(L("data-v-2a6329d8"),l=l(),T(),l),A={class:"chat-container"},F={class:"chat-wrap"},B={class:"chat-header"},j=f(()=>e("i",{class:"fas fa-comment-dots"},null,-1)),z={class:"info"},P=["src","alt"],W={class:"chat-box"},q=["src","alt"],G={ref:"scroll"},H=["disabled"],J=f(()=>e("i",{class:"fas fa-paper-plane"},null,-1)),K=[J],Q=f(()=>e("h4",null,[e("i",{class:"fas fa-signal"}),E("\u76EE\u524D\u5728\u7DDA")],-1)),X={class:"user"},Y=["src","alt"],Z=["title"];function $(l,n,h,t,v,a){return i(),r("div",A,[e("div",F,[e("div",B,[j,e("div",z,[e("span",null,"Welcome, "+u(t.currentUser.displayName),1),e("img",{src:t.currentUser.photoURL,alt:t.currentUser.displayName},null,8,P)])]),e("div",W,[(i(!0),r(U,null,w(t.messages,(s,d)=>(i(),r("div",{class:p(["chat-msg",t.sentOrReceived(s.userId)]),key:d},[e("img",{src:s.photoUrl,alt:s.displayName},null,8,q),e("div",null,[e("span",null,u(s.displayName),1),e("p",null,u(s.message),1)]),e("small",null,u(s.timeFormat),1)],2))),128)),e("div",G,null,512)]),e("form",{onSubmit:n[1]||(n[1]=R((...s)=>t.sendMessage&&t.sendMessage(...s),["prevent"]))},[k(e("input",{"onUpdate:modelValue":n[0]||(n[0]=s=>t.message=s),class:"input-msg",placeholder:"Enter message..."},null,512),[[C,t.message]]),e("button",{disabled:!t.message,type:"submit",title:"send!"},K,8,H)],32)]),e("div",{class:p(["user-wrap",{show:t.isShow}])},[Q,(i(!0),r(U,null,w(t.onlineUser,(s,d)=>(i(),r("div",X,[s.online?(i(),r("img",{key:0,src:s.photoUrl,alt:s.displayName},null,8,Y)):y("",!0),s.online?(i(),r("span",{key:1,title:s.user,class:"username"},u(s.user),9,Z)):y("",!0)]))),256)),e("button",{onClick:n[2]||(n[2]=s=>t.isShow=!t.isShow),class:"toggle"},[e("i",{class:p(["fas fa-chevron-right",{show:t.isShow}])},null,2)])],2)])}var ae=M(V,[["render",$],["__scopeId","data-v-2a6329d8"]]);export{ae as default};
