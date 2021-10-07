import{_ as p,b as f,a as N}from"./index.e7e85ca6.js";import{u as S,h as u,r as h,o as n,i as _,j as c,w as i,k as a,l as g,n as b,p as I,q as $,s as v,t as C,v as A,T as y,b as B,x as L}from"./vendor.1c6d3ac3.js";const V={name:"Navbar",setup(){const o=S(),s=u(!1),t=u(""),e=()=>{N.signOut(),o.push("/login")};return f.on("burger",r=>s.value=r),f.on("route",r=>t.value=r),{menuShow:s,routeName:t,logout:e}}},l=o=>(I("data-v-c6fac3b0"),o=o(),$(),o),j={class:"navbar"},R=l(()=>a("i",{class:"fas fa-sms"},null,-1)),T=v(" Chat App "),D={key:0,class:"nav-item"},q=l(()=>a("i",{class:"fas fa-sign-in-alt"},null,-1)),z=v(" Login "),E={key:1,class:"nav-item"},M=l(()=>a("i",{class:"fas fa-sign-out-alt"},null,-1)),O=v(" Logout "),F=[M,O],G={class:"nav-item"},H=l(()=>a("i",{class:"fas fa-user-plus"},null,-1)),J=v(" Register "),K=l(()=>a("span",{class:"bar"},null,-1)),P=l(()=>a("span",{class:"bar"},null,-1)),Q=l(()=>a("span",{class:"bar"},null,-1)),U=[K,P,Q];function W(o,s,t,e,r,k){const d=h("router-link");return n(),_("nav",j,[c(d,{to:{name:"Login"},class:"nav-logo"},{default:i(()=>[R,T]),_:1}),a("ul",{class:b(["nav-menu",{show:e.menuShow}])},[e.routeName!=="/chat"?(n(),_("li",D,[c(d,{to:{name:"Login"},class:"nav-link"},{default:i(()=>[q,z]),_:1})])):g("",!0),e.routeName==="/chat"?(n(),_("li",E,[a("a",{onClick:s[0]||(s[0]=(...m)=>e.logout&&e.logout(...m)),href:"#",class:"nav-link"},F)])):g("",!0),a("li",G,[c(d,{to:{name:"Register"},class:"nav-link"},{default:i(()=>[H,J]),_:1})])],2),a("div",{onClick:s[1]||(s[1]=m=>e.menuShow=!e.menuShow),class:b(["hamburger",{show:e.menuShow}])},U,2)])}var X=p(V,[["render",W],["__scopeId","data-v-c6fac3b0"]]);const Y={name:"Alert",setup(){const o=u(!1),s=u(""),t=u("");return C(()=>{f.on("alert",e=>{o.value=e.isShow,s.value=e.msg,t.value=e.style})}),{isShow:o,message:s,style:t}}},Z={key:0,class:"alert-container"},ee={key:0,class:"far fa-check-circle"},se={key:1,class:"fas fa-exclamation-circle"};function ae(o,s,t,e,r,k){return e.isShow?(n(),_("div",Z,[a("div",{class:b(["alert",e.style])},[e.style==="success"?(n(),_("i",ee)):(n(),_("i",se)),v(" "+A(e.message),1)],2)])):g("",!0)}var oe=p(Y,[["render",ae],["__scopeId","data-v-30d01228"]]);const te={name:"Index",components:{Navbar:X,Alert:oe}},ne={class:"container"};function ce(o,s,t,e,r,k){const d=h("Navbar"),m=h("router-view"),x=h("Alert");return n(),_("div",ne,[c(d),c(m,null,{default:i(({Component:w})=>[c(y,{name:"slide",appear:""},{default:i(()=>[(n(),B(L(w)))]),_:2},1024)]),_:1}),c(y,{name:"slide-in"},{default:i(()=>[c(x)]),_:1})])}var re=p(te,[["render",ce],["__scopeId","data-v-bdb7da82"]]);export{re as default};
