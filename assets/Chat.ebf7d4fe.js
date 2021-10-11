import{u as S,A as x,D as u,j as v,o as n,k as l,m as s,x as r,G as g,H as f,C as I,I as N,J as b,q as h,s as D,t as k,v as C,p as U}from"./vendor.b0e8f9d3.js";import{_ as M,a as R}from"./index.72ca33a0.js";const T={name:"Chat",setup(){const a=S(),o=x(),c=u(""),e=u(R.currentUser),p=u(!1),m=u(null),t=()=>{const i=new Date(Date.now()),y={hour:"2-digit",minute:"2-digit"};return i.toLocaleString("zh-TW",y)},d=()=>{const i={userId:e.value.uid,displayName:e.value.displayName,photoUrl:e.value.photoURL,message:c.value||null,createAt:Date.now(),timeFormat:t()};a.dispatch("pushMessage",i),m.value.scrollIntoView({behavior:"smooth"}),c.value=""},w=i=>i===e.value.uid?"send":"receive";return a.dispatch("getMessage"),a.dispatch("userPresence",e.value),a.commit("UPDATE_ROUTE",o.path),a.commit("UPDATE_UID",e.value.uid),{isShow:p,scroll:m,message:c,sendMessage:d,sentOrReceived:w,currentUser:e,messages:v(()=>a.state.messages),onlineUser:v(()=>a.state.onlineUser)}}},_=a=>(D("data-v-f2083a5c"),a=a(),k(),a),E={class:"chat-container"},V={class:"chat-wrap"},A={class:"chat-header"},F=_(()=>s("i",{class:"fas fa-comment-dots"},null,-1)),L={class:"info"},j=["src","alt"],B={class:"chat-box"},O=["src","alt"],P={ref:"scroll"},z=["disabled"],W=_(()=>s("i",{class:"fas fa-paper-plane"},null,-1)),q=[W],G=_(()=>s("h4",null,[s("i",{class:"fas fa-signal"}),C("\u76EE\u524D\u5728\u7DDA")],-1)),H={class:"user"},J=["src","alt"],K=["title"];function Q(a,o,c,e,p,m){return n(),l("div",E,[s("div",V,[s("div",A,[F,s("div",L,[s("span",null,"Welcome, "+r(e.currentUser.displayName),1),s("img",{src:e.currentUser.photoURL,alt:e.currentUser.displayName},null,8,j)])]),s("div",B,[(n(!0),l(g,null,f(e.messages,(t,d)=>(n(),l("div",{class:h(["chat-msg",e.sentOrReceived(t.userId)]),key:d},[s("img",{src:t.photoUrl,alt:t.displayName},null,8,O),s("div",null,[s("span",null,r(t.displayName),1),s("p",null,r(t.message),1)]),s("small",null,r(t.timeFormat),1)],2))),128)),s("div",P,null,512)]),s("form",{onSubmit:o[1]||(o[1]=I((...t)=>e.sendMessage&&e.sendMessage(...t),["prevent"]))},[N(s("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>e.message=t),class:"input-msg",placeholder:"Enter message..."},null,512),[[b,e.message]]),s("button",{disabled:!e.message,type:"submit",title:"send!"},q,8,z)],32)]),s("div",{class:h(["user-wrap",{show:e.isShow}])},[G,(n(!0),l(g,null,f(e.onlineUser,(t,d)=>(n(),l("div",H,[t.online?(n(),l("img",{key:0,src:t.photoUrl,alt:t.displayName},null,8,J)):U("",!0),t.online?(n(),l("span",{key:1,title:t.user,class:"username"},r(t.user),9,K)):U("",!0)]))),256)),s("button",{onClick:o[2]||(o[2]=t=>e.isShow=!e.isShow),class:"toggle"},[s("i",{class:h(["fas fa-chevron-right",{show:e.isShow}])},null,2)])],2)])}var Z=M(T,[["render",Q],["__scopeId","data-v-f2083a5c"]]);export{Z as default};
