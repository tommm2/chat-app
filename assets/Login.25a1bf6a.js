import{F as b,y as v,E as y,z as S,u as k,A as E,r as d,o as V,i as F,j as n,w as x,f,k as o,B as g,p as I,q as G,s as m}from"./vendor.1c6d3ac3.js";import{_ as L,b as a,a as h}from"./index.fc1dcf49.js";const W={name:"Login",components:{Form:b,Field:v,ErrorMessage:y},setup(){const t=S(),s=k(),c=E({email:"",password:""}),e=async(p="Google")=>{let r=new f.auth.GoogleAuthProvider;p==="facebook"&&(r=new f.auth.FacebookAuthProvider);try{await h.signInWithPopup(r),await a.emit("alert",{isShow:!0,msg:"\u767B\u5165\u6210\u529F",style:"success"}),await s.push("/chat"),await setTimeout(()=>{a.emit("alert",{isShow:!1,msg:"",style:""})},2e3)}catch{}},u=async()=>{try{await h.signInWithEmailAndPassword(c.email,c.password),await a.emit("alert",{isShow:!0,msg:"\u767B\u5165\u6210\u529F",style:"success"}),await s.push("/chat"),await setTimeout(()=>{a.emit("alert",{isShow:!1,msg:"",style:""})},2e3)}catch{a.emit("alert",{isShow:!0,msg:"\u67E5\u7121\u6B64\u7528\u6236",style:"error"}),setTimeout(()=>{a.emit("alert",{isShow:!1,msg:"",style:""})},2e3)}};return a.emit("route",t.path),{form:c,loginWithGoogle:e,userLogin:u}}},l=t=>(I("data-v-66ef64c0"),t=t(),G(),t),P={class:"login-container"},A=l(()=>o("h3",null,[o("i",{class:"fas fa-user"}),m("Login")],-1)),B={class:"form-group"},C=l(()=>o("label",{for:"email"},[o("i",{class:"fas fa-envelope"}),m("Email")],-1)),M={class:"form-group"},T=l(()=>o("label",{for:"password"},[o("i",{class:"fas fa-lock"}),m("Password")],-1)),j={class:"btn-group"},N=l(()=>o("button",{class:"login",type:"submit"},"Sign In",-1)),R={class:"social-login"},U=l(()=>o("i",{class:"fab fa-google-plus"},null,-1)),q=[U],z=l(()=>o("i",{class:"fab fa-facebook"},null,-1)),D=[z];function H(t,s,c,e,u,p){const r=d("Field"),_=d("ErrorMessage"),w=d("Form");return V(),F("div",P,[n(w,{onSubmit:e.userLogin},{default:x(()=>[A,o("div",B,[C,n(r,{id:"email",type:"email",name:"email",placeholder:"Enter email...",modelValue:e.form.email,"onUpdate:modelValue":s[0]||(s[0]=i=>e.form.email=i),rules:"email"},null,8,["modelValue"]),n(_,{class:"error-msg",name:"email"})]),o("div",M,[T,n(r,{id:"passowrd",type:"password",name:"password",placeholder:"Enter password...",modelValue:e.form.password,"onUpdate:modelValue":s[1]||(s[1]=i=>e.form.password=i),rules:"password",autocomplete:"password"},null,8,["modelValue"]),n(_,{class:"error-msg",name:"password"})]),o("div",j,[N,o("div",R,[o("button",{onClick:s[2]||(s[2]=g((...i)=>e.loginWithGoogle&&e.loginWithGoogle(...i),["prevent"])),class:"btn google"},q),o("button",{onClick:s[3]||(s[3]=g(i=>e.loginWithGoogle("facebook"),["prevent"])),class:"btn facebook"},D)])])]),_:1},8,["onSubmit"])])}var O=L(W,[["render",H],["__scopeId","data-v-66ef64c0"]]);export{O as default};
