var MA=Object.defineProperty;var s_=Object.getOwnPropertySymbols;var FA=Object.prototype.hasOwnProperty,UA=Object.prototype.propertyIsEnumerable;var o_=(t,e,n)=>e in t?MA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,a_=(t,e)=>{for(var n in e||(e={}))FA.call(e,n)&&o_(t,n,e[n]);if(s_)for(var n of s_(e))UA.call(e,n)&&o_(t,n,e[n]);return t};function xd(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const VA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",BA=xd(VA);function c_(t){return!!t||t===""}function Ld(t){if(de(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=ht(r)?jA(r):Ld(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(ht(t))return t;if(rt(t))return t}}const $A=/;(?![^(]*\))/g,qA=/:(.+)/;function jA(t){const e={};return t.split($A).forEach(n=>{if(n){const r=n.split(qA);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Md(t){let e="";if(ht(t))e=t;else if(de(t))for(let n=0;n<t.length;n++){const r=Md(t[n]);r&&(e+=r+" ")}else if(rt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const AH=t=>t==null?"":de(t)||rt(t)&&(t.toString===f_||!ge(t.toString))?JSON.stringify(t,l_,2):String(t),l_=(t,e)=>e&&e.__v_isRef?l_(t,e.value):js(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:h_(e)?{[`Set(${e.size})`]:[...e.values()]}:rt(e)&&!de(e)&&!p_(e)?String(e):e,Ue={},qs=[],Hn=()=>{},WA=()=>!1,HA=/^on[^a-z]/,Nl=t=>HA.test(t),Fd=t=>t.startsWith("onUpdate:"),Dt=Object.assign,u_=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},KA=Object.prototype.hasOwnProperty,ke=(t,e)=>KA.call(t,e),de=Array.isArray,js=t=>Rl(t)==="[object Map]",h_=t=>Rl(t)==="[object Set]",ge=t=>typeof t=="function",ht=t=>typeof t=="string",Ud=t=>typeof t=="symbol",rt=t=>t!==null&&typeof t=="object",d_=t=>rt(t)&&ge(t.then)&&ge(t.catch),f_=Object.prototype.toString,Rl=t=>f_.call(t),zA=t=>Rl(t).slice(8,-1),p_=t=>Rl(t)==="[object Object]",Vd=t=>ht(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,kl=xd(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},GA=/-(\w)/g,ir=Pl(t=>t.replace(GA,(e,n)=>n?n.toUpperCase():"")),QA=/\B([A-Z])/g,Ws=Pl(t=>t.replace(QA,"-$1").toLowerCase()),Ol=Pl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Bd=Pl(t=>t?`on${Ol(t)}`:""),Ia=(t,e)=>!Object.is(t,e),Dl=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},xl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ll=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let g_;const YA=()=>g_||(g_=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let xi;const Ml=[];class JA{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&xi&&(this.parent=xi,this.index=(xi.scopes||(xi.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(Ml.push(this),xi=this)}off(){this.active&&(Ml.pop(),xi=Ml[Ml.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function XA(t,e){e=e||xi,e&&e.active&&e.effects.push(t)}const $d=t=>{const e=new Set(t);return e.w=0,e.n=0,e},m_=t=>(t.w&Wr)>0,y_=t=>(t.n&Wr)>0,ZA=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Wr},eN=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];m_(i)&&!y_(i)?i.delete(t):e[n++]=i,i.w&=~Wr,i.n&=~Wr}e.length=n}},qd=new WeakMap;let ba=0,Wr=1;const jd=30,Ta=[];let Li;const Mi=Symbol(""),Wd=Symbol("");class Hd{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],XA(this,r)}run(){if(!this.active)return this.fn();if(!Ta.includes(this))try{return Ta.push(Li=this),tN(),Wr=1<<++ba,ba<=jd?ZA(this):__(this),this.fn()}finally{ba<=jd&&eN(this),Wr=1<<--ba,Hr(),Ta.pop();const e=Ta.length;Li=e>0?Ta[e-1]:void 0}}stop(){this.active&&(__(this),this.onStop&&this.onStop(),this.active=!1)}}function __(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Hs=!0;const Kd=[];function Fi(){Kd.push(Hs),Hs=!1}function tN(){Kd.push(Hs),Hs=!0}function Hr(){const t=Kd.pop();Hs=t===void 0?!0:t}function vn(t,e,n){if(!v_())return;let r=qd.get(t);r||qd.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=$d()),w_(i)}function v_(){return Hs&&Li!==void 0}function w_(t,e){let n=!1;ba<=jd?y_(t)||(t.n|=Wr,n=!m_(t)):n=!t.has(Li),n&&(t.add(Li),Li.deps.push(t))}function Sr(t,e,n,r,i,s){const o=qd.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&de(t))o.forEach((c,l)=>{(l==="length"||l>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":de(t)?Vd(n)&&a.push(o.get("length")):(a.push(o.get(Mi)),js(t)&&a.push(o.get(Wd)));break;case"delete":de(t)||(a.push(o.get(Mi)),js(t)&&a.push(o.get(Wd)));break;case"set":js(t)&&a.push(o.get(Mi));break}if(a.length===1)a[0]&&zd(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);zd($d(c))}}function zd(t,e){for(const n of de(t)?t:[...t])(n!==Li||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const nN=xd("__proto__,__v_isRef,__isVue"),E_=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Ud)),rN=Gd(),iN=Gd(!1,!0),sN=Gd(!0),I_=oN();function oN(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ne(this);for(let s=0,o=this.length;s<o;s++)vn(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Ne)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Fi();const r=Ne(this)[e].apply(this,n);return Hr(),r}}),t}function Gd(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_raw"&&s===(t?e?IN:P_:e?k_:R_).get(r))return r;const o=de(r);if(!t&&o&&ke(I_,i))return Reflect.get(I_,i,s);const a=Reflect.get(r,i,s);return(Ud(i)?E_.has(i):nN(i))||(t||vn(r,"get",i),e)?a:it(a)?!o||!Vd(i)?a.value:a:rt(a)?t?jl(a):zr(a):a}}const aN=b_(),cN=b_(!0);function b_(t=!1){return function(n,r,i,s){let o=n[r];if(!t&&(i=Ne(i),o=Ne(o),!de(n)&&it(o)&&!it(i)))return o.value=i,!0;const a=de(n)&&Vd(r)?Number(r)<n.length:ke(n,r),c=Reflect.set(n,r,i,s);return n===Ne(s)&&(a?Ia(i,o)&&Sr(n,"set",r,i):Sr(n,"add",r,i)),c}}function lN(t,e){const n=ke(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Sr(t,"delete",e,void 0),r}function uN(t,e){const n=Reflect.has(t,e);return(!Ud(e)||!E_.has(e))&&vn(t,"has",e),n}function hN(t){return vn(t,"iterate",de(t)?"length":Mi),Reflect.ownKeys(t)}const T_={get:rN,set:aN,deleteProperty:lN,has:uN,ownKeys:hN},dN={get:sN,set(t,e){return!0},deleteProperty(t,e){return!0}},fN=Dt({},T_,{get:iN,set:cN}),Qd=t=>t,Fl=t=>Reflect.getPrototypeOf(t);function Ul(t,e,n=!1,r=!1){t=t.__v_raw;const i=Ne(t),s=Ne(e);e!==s&&!n&&vn(i,"get",e),!n&&vn(i,"get",s);const{has:o}=Fl(i),a=r?Qd:n?Zd:Sa;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function Vl(t,e=!1){const n=this.__v_raw,r=Ne(n),i=Ne(t);return t!==i&&!e&&vn(r,"has",t),!e&&vn(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function Bl(t,e=!1){return t=t.__v_raw,!e&&vn(Ne(t),"iterate",Mi),Reflect.get(t,"size",t)}function S_(t){t=Ne(t);const e=Ne(this);return Fl(e).has.call(e,t)||(e.add(t),Sr(e,"add",t,t)),this}function C_(t,e){e=Ne(e);const n=Ne(this),{has:r,get:i}=Fl(n);let s=r.call(n,t);s||(t=Ne(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Ia(e,o)&&Sr(n,"set",t,e):Sr(n,"add",t,e),this}function A_(t){const e=Ne(this),{has:n,get:r}=Fl(e);let i=n.call(e,t);i||(t=Ne(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Sr(e,"delete",t,void 0),s}function N_(){const t=Ne(this),e=t.size!==0,n=t.clear();return e&&Sr(t,"clear",void 0,void 0),n}function $l(t,e){return function(r,i){const s=this,o=s.__v_raw,a=Ne(o),c=e?Qd:t?Zd:Sa;return!t&&vn(a,"iterate",Mi),o.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function ql(t,e,n){return function(...r){const i=this.__v_raw,s=Ne(i),o=js(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=i[t](...r),u=n?Qd:e?Zd:Sa;return!e&&vn(s,"iterate",c?Wd:Mi),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Kr(t){return function(...e){return t==="delete"?!1:this}}function pN(){const t={get(s){return Ul(this,s)},get size(){return Bl(this)},has:Vl,add:S_,set:C_,delete:A_,clear:N_,forEach:$l(!1,!1)},e={get(s){return Ul(this,s,!1,!0)},get size(){return Bl(this)},has:Vl,add:S_,set:C_,delete:A_,clear:N_,forEach:$l(!1,!0)},n={get(s){return Ul(this,s,!0)},get size(){return Bl(this,!0)},has(s){return Vl.call(this,s,!0)},add:Kr("add"),set:Kr("set"),delete:Kr("delete"),clear:Kr("clear"),forEach:$l(!0,!1)},r={get(s){return Ul(this,s,!0,!0)},get size(){return Bl(this,!0)},has(s){return Vl.call(this,s,!0)},add:Kr("add"),set:Kr("set"),delete:Kr("delete"),clear:Kr("clear"),forEach:$l(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ql(s,!1,!1),n[s]=ql(s,!0,!1),e[s]=ql(s,!1,!0),r[s]=ql(s,!0,!0)}),[t,n,e,r]}const[gN,mN,yN,_N]=pN();function Yd(t,e){const n=e?t?_N:yN:t?mN:gN;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ke(n,i)&&i in r?n:r,i,s)}const vN={get:Yd(!1,!1)},wN={get:Yd(!1,!0)},EN={get:Yd(!0,!1)},R_=new WeakMap,k_=new WeakMap,P_=new WeakMap,IN=new WeakMap;function bN(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function TN(t){return t.__v_skip||!Object.isExtensible(t)?0:bN(zA(t))}function zr(t){return t&&t.__v_isReadonly?t:Jd(t,!1,T_,vN,R_)}function SN(t){return Jd(t,!1,fN,wN,k_)}function jl(t){return Jd(t,!0,dN,EN,P_)}function Jd(t,e,n,r,i){if(!rt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=TN(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Ks(t){return O_(t)?Ks(t.__v_raw):!!(t&&t.__v_isReactive)}function O_(t){return!!(t&&t.__v_isReadonly)}function D_(t){return Ks(t)||O_(t)}function Ne(t){const e=t&&t.__v_raw;return e?Ne(e):t}function Xd(t){return xl(t,"__v_skip",!0),t}const Sa=t=>rt(t)?zr(t):t,Zd=t=>rt(t)?jl(t):t;function x_(t){v_()&&(t=Ne(t),t.dep||(t.dep=$d()),w_(t.dep))}function L_(t,e){t=Ne(t),t.dep&&zd(t.dep)}function it(t){return Boolean(t&&t.__v_isRef===!0)}function Kn(t){return M_(t,!1)}function CN(t){return M_(t,!0)}function M_(t,e){return it(t)?t:new AN(t,e)}class AN{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ne(e),this._value=n?e:Sa(e)}get value(){return x_(this),this._value}set value(e){e=this._shallow?e:Ne(e),Ia(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Sa(e),L_(this))}}function Z(t){return it(t)?t.value:t}const NN={get:(t,e,n)=>Z(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return it(i)&&!it(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function F_(t){return Ks(t)?t:new Proxy(t,NN)}class RN{constructor(e,n){this._object=e,this._key=n,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function Gr(t,e){const n=t[e];return it(n)?n:new RN(t,e)}class kN{constructor(e,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new Hd(e,()=>{this._dirty||(this._dirty=!0,L_(this))}),this.__v_isReadonly=r}get value(){const e=Ne(this);return x_(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Le(t,e){let n,r;const i=ge(t);return i?(n=t,r=Hn):(n=t.get,r=t.set),new kN(n,r,i||!r)}Promise.resolve();function PN(t,e,...n){const r=t.vnode.props||Ue;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ue;d?i=n.map(f=>f.trim()):h&&(i=n.map(Ll))}let a,c=r[a=Bd(e)]||r[a=Bd(ir(e))];!c&&s&&(c=r[a=Bd(Ws(e))]),c&&Dn(c,t,6,i);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Dn(l,t,6,i)}}function U_(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ge(t)){const c=l=>{const u=U_(l,e,!0);u&&(a=!0,Dt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(r.set(t,null),null):(de(s)?s.forEach(c=>o[c]=null):Dt(o,s),r.set(t,o),o)}function ef(t,e){return!t||!Nl(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,Ws(e))||ke(t,e))}let Pn=null,Wl=null;function Hl(t){const e=Pn;return Pn=t,Wl=t&&t.type.__scopeId||null,e}function NH(t){Wl=t}function RH(){Wl=null}function ON(t,e=Pn,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&uv(-1);const s=Hl(e),o=t(...i);return Hl(s),r._d&&uv(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function tf(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:y}=t;let _,w;const S=Hl(t);try{if(n.shapeFlag&4){const U=i||r;_=cr(u.call(U,U,h,s,f,d,g)),w=c}else{const U=e;_=cr(U.length>1?U(s,{attrs:c,slots:a,emit:l}):U(s,null)),w=e.props?c:DN(c)}}catch(U){Aa.length=0,tu(U,t,1),_=En(ar)}let L=_;if(w&&y!==!1){const U=Object.keys(w),{shapeFlag:G}=L;U.length&&G&(1|6)&&(o&&U.some(Fd)&&(w=xN(w,o)),L=Qs(L,w))}return n.dirs&&(L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),_=L,Hl(S),_}const DN=t=>{let e;for(const n in t)(n==="class"||n==="style"||Nl(n))&&((e||(e={}))[n]=t[n]);return e},xN=(t,e)=>{const n={};for(const r in t)(!Fd(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function LN(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?V_(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!ef(l,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?V_(r,o,l):!0:!!o;return!1}function V_(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!ef(n,s))return!0}return!1}function MN({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const FN=t=>t.__isSuspense;function UN(t,e){e&&e.pendingBranch?de(t)?e.effects.push(...t):e.effects.push(t):VR(t)}function zs(t,e){if(yt){let n=yt.provides;const r=yt.parent&&yt.parent.provides;r===n&&(n=yt.provides=Object.create(r)),n[t]=e}}function wn(t,e,n=!1){const r=yt||Pn;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ge(e)?e.call(r.proxy):e}}function VN(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Gl(()=>{t.isMounted=!0}),Ca(()=>{t.isUnmounting=!0}),t}const On=[Function,Array],BN={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:On,onEnter:On,onAfterEnter:On,onEnterCancelled:On,onBeforeLeave:On,onLeave:On,onAfterLeave:On,onLeaveCancelled:On,onBeforeAppear:On,onAppear:On,onAfterAppear:On,onAppearCancelled:On},setup(t,{slots:e}){const n=pv(),r=VN();let i;return()=>{const s=e.default&&j_(e.default(),!0);if(!s||!s.length)return;const o=Ne(t),{mode:a}=o,c=s[0];if(r.isLeaving)return rf(c);const l=q_(c);if(!l)return rf(c);const u=nf(l,o,r,n);sf(l,u);const h=n.subTree,d=h&&q_(h);let f=!1;const{getTransitionKey:g}=l.type;if(g){const y=g();i===void 0?i=y:y!==i&&(i=y,f=!0)}if(d&&d.type!==ar&&(!$i(l,d)||f)){const y=nf(d,o,r,n);if(sf(d,y),a==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update()},rf(c);a==="in-out"&&l.type!==ar&&(y.delayLeave=(_,w,S)=>{const L=$_(r,d);L[String(d.key)]=d,_._leaveCb=()=>{w(),_._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return c}}},B_=BN;function $_(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function nf(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:y,onAppear:_,onAfterAppear:w,onAppearCancelled:S}=e,L=String(t.key),U=$_(n,t),G=(te,he)=>{te&&Dn(te,r,9,he)},se={mode:s,persisted:o,beforeEnter(te){let he=a;if(!n.isMounted)if(i)he=y||a;else return;te._leaveCb&&te._leaveCb(!0);const Q=U[L];Q&&$i(t,Q)&&Q.el._leaveCb&&Q.el._leaveCb(),G(he,[te])},enter(te){let he=c,Q=l,pe=u;if(!n.isMounted)if(i)he=_||c,Q=w||l,pe=S||u;else return;let Ee=!1;const H=te._enterCb=be=>{Ee||(Ee=!0,be?G(pe,[te]):G(Q,[te]),se.delayedLeave&&se.delayedLeave(),te._enterCb=void 0)};he?(he(te,H),he.length<=1&&H()):H()},leave(te,he){const Q=String(t.key);if(te._enterCb&&te._enterCb(!0),n.isUnmounting)return he();G(h,[te]);let pe=!1;const Ee=te._leaveCb=H=>{pe||(pe=!0,he(),H?G(g,[te]):G(f,[te]),te._leaveCb=void 0,U[Q]===t&&delete U[Q])};U[Q]=t,d?(d(te,Ee),d.length<=1&&Ee()):Ee()},clone(te){return nf(te,e,n,r)}};return se}function rf(t){if(Kl(t))return t=Qs(t),t.children=null,t}function q_(t){return Kl(t)?t.children?t.children[0]:void 0:t}function sf(t,e){t.shapeFlag&6&&t.component?sf(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function j_(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const s=t[i];s.type===or?(s.patchFlag&128&&r++,n=n.concat(j_(s.children,e))):(e||s.type!==ar)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function Gs(t){return ge(t)?{setup:t,name:t.name}:t}const of=t=>!!t.type.__asyncLoader,Kl=t=>t.type.__isKeepAlive;function $N(t,e){W_(t,"a",e)}function qN(t,e){W_(t,"da",e)}function W_(t,e,n=yt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}t()});if(zl(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Kl(i.parent.vnode)&&jN(r,e,n,i),i=i.parent}}function jN(t,e,n,r){const i=zl(e,t,r,!0);H_(()=>{u_(r[e],i)},n)}function zl(t,e,n=yt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Fi(),Ys(n);const a=Dn(e,n,t,o);return qi(),Hr(),a});return r?i.unshift(s):i.push(s),s}}const Cr=t=>(e,n=yt)=>(!eu||t==="sp")&&zl(t,e,n),WN=Cr("bm"),Gl=Cr("m"),HN=Cr("bu"),KN=Cr("u"),Ca=Cr("bum"),H_=Cr("um"),zN=Cr("sp"),GN=Cr("rtg"),QN=Cr("rtc");function YN(t,e=yt){zl("ec",t,e)}let af=!0;function JN(t){const e=G_(t),n=t.proxy,r=t.ctx;af=!1,e.beforeCreate&&K_(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:y,deactivated:_,beforeDestroy:w,beforeUnmount:S,destroyed:L,unmounted:U,render:G,renderTracked:se,renderTriggered:te,errorCaptured:he,serverPrefetch:Q,expose:pe,inheritAttrs:Ee,components:H,directives:be,filters:Ge}=e;if(l&&XN(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ve in o){const Ie=o[ve];ge(Ie)&&(r[ve]=Ie.bind(n))}if(i){const ve=i.call(n,n);rt(ve)&&(t.data=zr(ve))}if(af=!0,s)for(const ve in s){const Ie=s[ve],j=ge(Ie)?Ie.bind(n,n):ge(Ie.get)?Ie.get.bind(n,n):Hn,Re=!ge(Ie)&&ge(Ie.set)?Ie.set.bind(n):Hn,je=Le({get:j,set:Re});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>je.value,set:Yt=>je.value=Yt})}if(a)for(const ve in a)z_(a[ve],r,n,ve);if(c){const ve=ge(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(Ie=>{zs(Ie,ve[Ie])})}u&&K_(u,t,"c");function Ce(ve,Ie){de(Ie)?Ie.forEach(j=>ve(j.bind(n))):Ie&&ve(Ie.bind(n))}if(Ce(WN,h),Ce(Gl,d),Ce(HN,f),Ce(KN,g),Ce($N,y),Ce(qN,_),Ce(YN,he),Ce(QN,se),Ce(GN,te),Ce(Ca,S),Ce(H_,U),Ce(zN,Q),de(pe))if(pe.length){const ve=t.exposed||(t.exposed={});pe.forEach(Ie=>{Object.defineProperty(ve,Ie,{get:()=>n[Ie],set:j=>n[Ie]=j})})}else t.exposed||(t.exposed={});G&&t.render===Hn&&(t.render=G),Ee!=null&&(t.inheritAttrs=Ee),H&&(t.components=H),be&&(t.directives=be)}function XN(t,e,n=Hn,r=!1){de(t)&&(t=cf(t));for(const i in t){const s=t[i];let o;rt(s)?"default"in s?o=wn(s.from||i,s.default,!0):o=wn(s.from||i):o=wn(s),it(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function K_(t,e,n){Dn(de(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function z_(t,e,n,r){const i=r.includes(".")?Pv(n,r):()=>n[r];if(ht(t)){const s=e[t];ge(s)&&cn(i,s)}else if(ge(t))cn(i,t.bind(n));else if(rt(t))if(de(t))t.forEach(s=>z_(s,e,n,r));else{const s=ge(t.handler)?t.handler.bind(n):e[t.handler];ge(s)&&cn(i,s,t)}}function G_(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(l=>Ql(c,l,o,!0)),Ql(c,e,o)),s.set(e,c),c}function Ql(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Ql(t,s,n,!0),i&&i.forEach(o=>Ql(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=ZN[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ZN={data:Q_,props:Ui,emits:Ui,methods:Ui,computed:Ui,beforeCreate:Jt,created:Jt,beforeMount:Jt,mounted:Jt,beforeUpdate:Jt,updated:Jt,beforeDestroy:Jt,beforeUnmount:Jt,destroyed:Jt,unmounted:Jt,activated:Jt,deactivated:Jt,errorCaptured:Jt,serverPrefetch:Jt,components:Ui,directives:Ui,watch:tR,provide:Q_,inject:eR};function Q_(t,e){return e?t?function(){return Dt(ge(t)?t.call(this,this):t,ge(e)?e.call(this,this):e)}:e:t}function eR(t,e){return Ui(cf(t),cf(e))}function cf(t){if(de(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Jt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ui(t,e){return t?Dt(Dt(Object.create(null),t),e):e}function tR(t,e){if(!t)return e;if(!e)return t;const n=Dt(Object.create(null),t);for(const r in e)n[r]=Jt(t[r],e[r]);return n}function nR(t,e,n,r=!1){const i={},s={};xl(s,Jl,1),t.propsDefaults=Object.create(null),Y_(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:SN(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function rR(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Ne(i),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];const f=e[d];if(c)if(ke(s,d))f!==s[d]&&(s[d]=f,l=!0);else{const g=ir(d);i[g]=lf(c,a,g,f,t,!1)}else f!==s[d]&&(s[d]=f,l=!0)}}}else{Y_(t,e,i,s)&&(l=!0);let u;for(const h in a)(!e||!ke(e,h)&&((u=Ws(h))===h||!ke(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=lf(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!ke(e,h))&&(delete s[h],l=!0)}l&&Sr(t,"set","$attrs")}function Y_(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(kl(c))continue;const l=e[c];let u;i&&ke(i,u=ir(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:ef(t.emitsOptions,c)||l!==r[c]&&(r[c]=l,o=!0)}if(s){const c=Ne(n),l=a||Ue;for(let u=0;u<s.length;u++){const h=s[u];n[h]=lf(i,c,h,l[h],t,!ke(l,h))}}return o}function lf(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=ke(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ge(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(Ys(i),r=l[n]=c.call(null,e),qi())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Ws(n))&&(r=!0))}return r}function J_(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!ge(t)){const u=h=>{c=!0;const[d,f]=J_(h,e,!0);Dt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return r.set(t,qs),qs;if(de(s))for(let u=0;u<s.length;u++){const h=ir(s[u]);X_(h)&&(o[h]=Ue)}else if(s)for(const u in s){const h=ir(u);if(X_(h)){const d=s[u],f=o[h]=de(d)||ge(d)?{type:d}:d;if(f){const g=tv(Boolean,f.type),y=tv(String,f.type);f[0]=g>-1,f[1]=y<0||g<y,(g>-1||ke(f,"default"))&&a.push(h)}}}const l=[o,a];return r.set(t,l),l}function X_(t){return t[0]!=="$"}function Z_(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ev(t,e){return Z_(t)===Z_(e)}function tv(t,e){return de(e)?e.findIndex(n=>ev(n,t)):ge(e)&&ev(e,t)?0:-1}const nv=t=>t[0]==="_"||t==="$stable",uf=t=>de(t)?t.map(cr):[cr(t)],iR=(t,e,n)=>{const r=ON((...i)=>uf(e(...i)),n);return r._c=!1,r},rv=(t,e,n)=>{const r=t._ctx;for(const i in t){if(nv(i))continue;const s=t[i];if(ge(s))e[i]=iR(i,s,r);else if(s!=null){const o=uf(s);e[i]=()=>o}}},iv=(t,e)=>{const n=uf(e);t.slots.default=()=>n},sR=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ne(e),xl(e,"_",n)):rv(e,t.slots={})}else t.slots={},e&&iv(t,e);xl(t.slots,Jl,1)},oR=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=Ue;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Dt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,rv(e,i)),o=e}else e&&(iv(t,e),o={default:1});if(s)for(const a in i)!nv(a)&&!(a in o)&&delete i[a]};function kH(t,e){const n=Pn;if(n===null)return t;const r=n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=Ue]=e[s];ge(o)&&(o={mounted:o,updated:o}),o.deep&&ji(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l})}return t}function Vi(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Fi(),Dn(c,n,8,[t.el,a,t,e]),Hr())}}function sv(){return{app:null,config:{isNativeTag:WA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let aR=0;function cR(t,e){return function(r,i=null){i!=null&&!rt(i)&&(i=null);const s=sv(),o=new Set;let a=!1;const c=s.app={_uid:aR++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:$R,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&ge(l.install)?(o.add(l),l.install(c,...u)):ge(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const d=En(r,i);return d.appContext=s,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,vf(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}const Xt=UN;function lR(t){return uR(t)}function uR(t,e){const n=YA();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Hn,cloneNode:g,insertStaticContent:y}=t,_=(p,m,v,b=null,C=null,x=null,W=!1,P=null,F=!!m.dynamicChildren)=>{if(p===m)return;p&&!$i(p,m)&&(b=ne(p),ut(p,C,x,!0),p=null),m.patchFlag===-2&&(F=!1,m.dynamicChildren=null);const{type:k,ref:re,shapeFlag:J}=m;switch(k){case pf:w(p,m,v,b);break;case ar:S(p,m,v,b);break;case gf:p==null&&L(m,v,b,W);break;case or:be(p,m,v,b,C,x,W,P,F);break;default:J&1?se(p,m,v,b,C,x,W,P,F):J&6?Ge(p,m,v,b,C,x,W,P,F):(J&64||J&128)&&k.process(p,m,v,b,C,x,W,P,F,N)}re!=null&&C&&hf(re,p&&p.ref,x,m||p,!m)},w=(p,m,v,b)=>{if(p==null)r(m.el=a(m.children),v,b);else{const C=m.el=p.el;m.children!==p.children&&l(C,m.children)}},S=(p,m,v,b)=>{p==null?r(m.el=c(m.children||""),v,b):m.el=p.el},L=(p,m,v,b)=>{[p.el,p.anchor]=y(p.children,m,v,b)},U=({el:p,anchor:m},v,b)=>{let C;for(;p&&p!==m;)C=d(p),r(p,v,b),p=C;r(m,v,b)},G=({el:p,anchor:m})=>{let v;for(;p&&p!==m;)v=d(p),i(p),p=v;i(m)},se=(p,m,v,b,C,x,W,P,F)=>{W=W||m.type==="svg",p==null?te(m,v,b,C,x,W,P,F):pe(p,m,C,x,W,P,F)},te=(p,m,v,b,C,x,W,P)=>{let F,k;const{type:re,props:J,shapeFlag:ie,transition:ue,patchFlag:Ae,dirs:Qe}=p;if(p.el&&g!==void 0&&Ae===-1)F=p.el=g(p.el);else{if(F=p.el=o(p.type,x,J&&J.is,J),ie&8?u(F,p.children):ie&16&&Q(p.children,F,null,b,C,x&&re!=="foreignObject",W,P),Qe&&Vi(p,null,b,"created"),J){for(const We in J)We!=="value"&&!kl(We)&&s(F,We,null,J[We],x,p.children,b,C,B);"value"in J&&s(F,"value",null,J.value),(k=J.onVnodeBeforeMount)&&sr(k,b,p)}he(F,p,p.scopeId,W,b)}Qe&&Vi(p,null,b,"beforeMount");const Fe=(!C||C&&!C.pendingBranch)&&ue&&!ue.persisted;Fe&&ue.beforeEnter(F),r(F,m,v),((k=J&&J.onVnodeMounted)||Fe||Qe)&&Xt(()=>{k&&sr(k,b,p),Fe&&ue.enter(F),Qe&&Vi(p,null,b,"mounted")},C)},he=(p,m,v,b,C)=>{if(v&&f(p,v),b)for(let x=0;x<b.length;x++)f(p,b[x]);if(C){let x=C.subTree;if(m===x){const W=C.vnode;he(p,W,W.scopeId,W.slotScopeIds,C.parent)}}},Q=(p,m,v,b,C,x,W,P,F=0)=>{for(let k=F;k<p.length;k++){const re=p[k]=P?Qr(p[k]):cr(p[k]);_(null,re,m,v,b,C,x,W,P)}},pe=(p,m,v,b,C,x,W)=>{const P=m.el=p.el;let{patchFlag:F,dynamicChildren:k,dirs:re}=m;F|=p.patchFlag&16;const J=p.props||Ue,ie=m.props||Ue;let ue;(ue=ie.onVnodeBeforeUpdate)&&sr(ue,v,m,p),re&&Vi(m,p,v,"beforeUpdate");const Ae=C&&m.type!=="foreignObject";if(k?Ee(p.dynamicChildren,k,P,v,b,Ae,x):W||j(p,m,P,null,v,b,Ae,x,!1),F>0){if(F&16)H(P,m,J,ie,v,b,C);else if(F&2&&J.class!==ie.class&&s(P,"class",null,ie.class,C),F&4&&s(P,"style",J.style,ie.style,C),F&8){const Qe=m.dynamicProps;for(let Fe=0;Fe<Qe.length;Fe++){const We=Qe[Fe],Wn=J[We],$s=ie[We];($s!==Wn||We==="value")&&s(P,We,Wn,$s,C,p.children,v,b,B)}}F&1&&p.children!==m.children&&u(P,m.children)}else!W&&k==null&&H(P,m,J,ie,v,b,C);((ue=ie.onVnodeUpdated)||re)&&Xt(()=>{ue&&sr(ue,v,m,p),re&&Vi(m,p,v,"updated")},b)},Ee=(p,m,v,b,C,x,W)=>{for(let P=0;P<m.length;P++){const F=p[P],k=m[P],re=F.el&&(F.type===or||!$i(F,k)||F.shapeFlag&(6|64))?h(F.el):v;_(F,k,re,null,b,C,x,W,!0)}},H=(p,m,v,b,C,x,W)=>{if(v!==b){for(const P in b){if(kl(P))continue;const F=b[P],k=v[P];F!==k&&P!=="value"&&s(p,P,k,F,W,m.children,C,x,B)}if(v!==Ue)for(const P in v)!kl(P)&&!(P in b)&&s(p,P,v[P],null,W,m.children,C,x,B);"value"in b&&s(p,"value",v.value,b.value)}},be=(p,m,v,b,C,x,W,P,F)=>{const k=m.el=p?p.el:a(""),re=m.anchor=p?p.anchor:a("");let{patchFlag:J,dynamicChildren:ie,slotScopeIds:ue}=m;ue&&(P=P?P.concat(ue):ue),p==null?(r(k,v,b),r(re,v,b),Q(m.children,v,re,C,x,W,P,F)):J>0&&J&64&&ie&&p.dynamicChildren?(Ee(p.dynamicChildren,ie,v,C,x,W,P),(m.key!=null||C&&m===C.subTree)&&ov(p,m,!0)):j(p,m,v,re,C,x,W,P,F)},Ge=(p,m,v,b,C,x,W,P,F)=>{m.slotScopeIds=P,p==null?m.shapeFlag&512?C.ctx.activate(m,v,b,W,F):Wt(m,v,b,C,x,W,F):Ce(p,m,F)},Wt=(p,m,v,b,C,x,W)=>{const P=p.component=bR(p,b,C);if(Kl(p)&&(P.ctx.renderer=N),TR(P),P.asyncDep){if(C&&C.registerDep(P,ve),!p.el){const F=P.subTree=En(ar);S(null,F,m,v)}return}ve(P,p,m,v,C,x,W)},Ce=(p,m,v)=>{const b=m.component=p.component;if(LN(p,m,v))if(b.asyncDep&&!b.asyncResolved){Ie(b,m,v);return}else b.next=m,FR(b.update),b.update();else m.component=p.component,m.el=p.el,b.vnode=m},ve=(p,m,v,b,C,x,W)=>{const P=()=>{if(p.isMounted){let{next:re,bu:J,u:ie,parent:ue,vnode:Ae}=p,Qe=re,Fe;F.allowRecurse=!1,re?(re.el=Ae.el,Ie(p,re,W)):re=Ae,J&&Dl(J),(Fe=re.props&&re.props.onVnodeBeforeUpdate)&&sr(Fe,ue,re,Ae),F.allowRecurse=!0;const We=tf(p),Wn=p.subTree;p.subTree=We,_(Wn,We,h(Wn.el),ne(Wn),p,C,x),re.el=We.el,Qe===null&&MN(p,We.el),ie&&Xt(ie,C),(Fe=re.props&&re.props.onVnodeUpdated)&&Xt(()=>sr(Fe,ue,re,Ae),C)}else{let re;const{el:J,props:ie}=m,{bm:ue,m:Ae,parent:Qe}=p,Fe=of(m);if(F.allowRecurse=!1,ue&&Dl(ue),!Fe&&(re=ie&&ie.onVnodeBeforeMount)&&sr(re,Qe,m),F.allowRecurse=!0,J&&V){const We=()=>{p.subTree=tf(p),V(J,p.subTree,p,C,null)};Fe?m.type.__asyncLoader().then(()=>!p.isUnmounted&&We()):We()}else{const We=p.subTree=tf(p);_(null,We,v,b,p,C,x),m.el=We.el}if(Ae&&Xt(Ae,C),!Fe&&(re=ie&&ie.onVnodeMounted)){const We=m;Xt(()=>sr(re,Qe,We),C)}m.shapeFlag&256&&p.a&&Xt(p.a,C),p.isMounted=!0,m=v=b=null}},F=new Hd(P,()=>Tv(p.update),p.scope),k=p.update=F.run.bind(F);k.id=p.uid,F.allowRecurse=k.allowRecurse=!0,k()},Ie=(p,m,v)=>{m.component=p;const b=p.vnode.props;p.vnode=m,p.next=null,rR(p,m.props,b,v),oR(p,m.children,v),Fi(),bf(void 0,p.update),Hr()},j=(p,m,v,b,C,x,W,P,F=!1)=>{const k=p&&p.children,re=p?p.shapeFlag:0,J=m.children,{patchFlag:ie,shapeFlag:ue}=m;if(ie>0){if(ie&128){je(k,J,v,b,C,x,W,P,F);return}else if(ie&256){Re(k,J,v,b,C,x,W,P,F);return}}ue&8?(re&16&&B(k,C,x),J!==k&&u(v,J)):re&16?ue&16?je(k,J,v,b,C,x,W,P,F):B(k,C,x,!0):(re&8&&u(v,""),ue&16&&Q(J,v,b,C,x,W,P,F))},Re=(p,m,v,b,C,x,W,P,F)=>{p=p||qs,m=m||qs;const k=p.length,re=m.length,J=Math.min(k,re);let ie;for(ie=0;ie<J;ie++){const ue=m[ie]=F?Qr(m[ie]):cr(m[ie]);_(p[ie],ue,v,null,C,x,W,P,F)}k>re?B(p,C,x,!0,!1,J):Q(m,v,b,C,x,W,P,F,J)},je=(p,m,v,b,C,x,W,P,F)=>{let k=0;const re=m.length;let J=p.length-1,ie=re-1;for(;k<=J&&k<=ie;){const ue=p[k],Ae=m[k]=F?Qr(m[k]):cr(m[k]);if($i(ue,Ae))_(ue,Ae,v,null,C,x,W,P,F);else break;k++}for(;k<=J&&k<=ie;){const ue=p[J],Ae=m[ie]=F?Qr(m[ie]):cr(m[ie]);if($i(ue,Ae))_(ue,Ae,v,null,C,x,W,P,F);else break;J--,ie--}if(k>J){if(k<=ie){const ue=ie+1,Ae=ue<re?m[ue].el:b;for(;k<=ie;)_(null,m[k]=F?Qr(m[k]):cr(m[k]),v,Ae,C,x,W,P,F),k++}}else if(k>ie)for(;k<=J;)ut(p[k],C,x,!0),k++;else{const ue=k,Ae=k,Qe=new Map;for(k=Ae;k<=ie;k++){const _n=m[k]=F?Qr(m[k]):cr(m[k]);_n.key!=null&&Qe.set(_n.key,k)}let Fe,We=0;const Wn=ie-Ae+1;let $s=!1,n_=0;const Ea=new Array(Wn);for(k=0;k<Wn;k++)Ea[k]=0;for(k=ue;k<=J;k++){const _n=p[k];if(We>=Wn){ut(_n,C,x,!0);continue}let rr;if(_n.key!=null)rr=Qe.get(_n.key);else for(Fe=Ae;Fe<=ie;Fe++)if(Ea[Fe-Ae]===0&&$i(_n,m[Fe])){rr=Fe;break}rr===void 0?ut(_n,C,x,!0):(Ea[rr-Ae]=k+1,rr>=n_?n_=rr:$s=!0,_(_n,m[rr],v,null,C,x,W,P,F),We++)}const r_=$s?hR(Ea):qs;for(Fe=r_.length-1,k=Wn-1;k>=0;k--){const _n=Ae+k,rr=m[_n],i_=_n+1<re?m[_n+1].el:b;Ea[k]===0?_(null,rr,v,i_,C,x,W,P,F):$s&&(Fe<0||k!==r_[Fe]?Yt(rr,v,i_,2):Fe--)}}},Yt=(p,m,v,b,C=null)=>{const{el:x,type:W,transition:P,children:F,shapeFlag:k}=p;if(k&6){Yt(p.component.subTree,m,v,b);return}if(k&128){p.suspense.move(m,v,b);return}if(k&64){W.move(p,m,v,N);return}if(W===or){r(x,m,v);for(let J=0;J<F.length;J++)Yt(F[J],m,v,b);r(p.anchor,m,v);return}if(W===gf){U(p,m,v);return}if(b!==2&&k&1&&P)if(b===0)P.beforeEnter(x),r(x,m,v),Xt(()=>P.enter(x),C);else{const{leave:J,delayLeave:ie,afterLeave:ue}=P,Ae=()=>r(x,m,v),Qe=()=>{J(x,()=>{Ae(),ue&&ue()})};ie?ie(x,Ae,Qe):Qe()}else r(x,m,v)},ut=(p,m,v,b=!1,C=!1)=>{const{type:x,props:W,ref:P,children:F,dynamicChildren:k,shapeFlag:re,patchFlag:J,dirs:ie}=p;if(P!=null&&hf(P,null,v,p,!0),re&256){m.ctx.deactivate(p);return}const ue=re&1&&ie,Ae=!of(p);let Qe;if(Ae&&(Qe=W&&W.onVnodeBeforeUnmount)&&sr(Qe,m,p),re&6)Y(p.component,v,b);else{if(re&128){p.suspense.unmount(v,b);return}ue&&Vi(p,null,m,"beforeUnmount"),re&64?p.type.remove(p,m,v,C,N,b):k&&(x!==or||J>0&&J&64)?B(k,m,v,!1,!0):(x===or&&J&(128|256)||!C&&re&16)&&B(F,m,v),b&&Tr(p)}(Ae&&(Qe=W&&W.onVnodeUnmounted)||ue)&&Xt(()=>{Qe&&sr(Qe,m,p),ue&&Vi(p,null,m,"unmounted")},v)},Tr=p=>{const{type:m,el:v,anchor:b,transition:C}=p;if(m===or){T(v,b);return}if(m===gf){G(p);return}const x=()=>{i(v),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:W,delayLeave:P}=C,F=()=>W(v,x);P?P(p.el,x,F):F()}else x()},T=(p,m)=>{let v;for(;p!==m;)v=d(p),i(p),p=v;i(m)},Y=(p,m,v)=>{const{bum:b,scope:C,update:x,subTree:W,um:P}=p;b&&Dl(b),C.stop(),x&&(x.active=!1,ut(W,p,m,v)),P&&Xt(P,m),Xt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},B=(p,m,v,b=!1,C=!1,x=0)=>{for(let W=x;W<p.length;W++)ut(p[W],m,v,b,C)},ne=p=>p.shapeFlag&6?ne(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),I=(p,m,v)=>{p==null?m._vnode&&ut(m._vnode,null,null,!0):_(m._vnode||null,p,m,null,null,null,v),Av(),m._vnode=p},N={p:_,um:ut,m:Yt,r:Tr,mt:Wt,mc:Q,pc:j,pbc:Ee,n:ne,o:t};let q,V;return e&&([q,V]=e(N)),{render:I,hydrate:q,createApp:cR(I,q)}}function hf(t,e,n,r,i=!1){if(de(t)){t.forEach((d,f)=>hf(d,e&&(de(e)?e[f]:e),n,r,i));return}if(of(r)&&!i)return;const s=r.shapeFlag&4?vf(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ue?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ht(l)?(u[l]=null,ke(h,l)&&(h[l]=null)):it(l)&&(l.value=null)),ht(c)){const d=()=>{u[c]=o,ke(h,c)&&(h[c]=o)};o?(d.id=-1,Xt(d,n)):d()}else if(it(c)){const d=()=>{c.value=o};o?(d.id=-1,Xt(d,n)):d()}else ge(c)&&Ar(c,a,12,[o,u])}function sr(t,e,n,r=null){Dn(t,e,7,[n,r])}function ov(t,e,n=!1){const r=t.children,i=e.children;if(de(r)&&de(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=Qr(i[s]),a.el=o.el),n||ov(o,a))}}function hR(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(i=n[n.length-1],t[i]<l){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const dR=t=>t.__isTeleport,df="components";function PH(t,e){return cv(df,t,!0,e)||t}const av=Symbol();function ff(t){return ht(t)?cv(df,t,!1)||t:t||av}function cv(t,e,n=!0,r=!1){const i=Pn||yt;if(i){const s=i.type;if(t===df){const a=vv(s);if(a&&(a===e||a===ir(e)||a===Ol(ir(e))))return s}const o=lv(i[t]||s[t],e)||lv(i.appContext[t],e);return!o&&r?s:o}}function lv(t,e){return t&&(t[e]||t[ir(e)]||t[Ol(ir(e))])}const or=Symbol(void 0),pf=Symbol(void 0),ar=Symbol(void 0),gf=Symbol(void 0),Aa=[];let Bi=null;function fR(t=!1){Aa.push(Bi=t?null:[])}function pR(){Aa.pop(),Bi=Aa[Aa.length-1]||null}let Yl=1;function uv(t){Yl+=t}function hv(t){return t.dynamicChildren=Yl>0?Bi||qs:null,pR(),Yl>0&&Bi&&Bi.push(t),t}function OH(t,e,n,r,i,s){return hv(fv(t,e,n,r,i,s,!0))}function gR(t,e,n,r,i){return hv(En(t,e,n,r,i,!0))}function mf(t){return t?t.__v_isVNode===!0:!1}function $i(t,e){return t.type===e.type&&t.key===e.key}const Jl="__vInternal",dv=({key:t})=>t!=null?t:null,Xl=({ref:t})=>t!=null?ht(t)||it(t)||ge(t)?{i:Pn,r:t}:t:null;function fv(t,e=null,n=null,r=0,i=null,s=t===or?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&dv(e),ref:e&&Xl(e),scopeId:Wl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(yf(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=ht(n)?8:16),Yl>0&&!o&&Bi&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Bi.push(c),c}const En=mR;function mR(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===av)&&(t=ar),mf(t)){const a=Qs(t,e,!0);return n&&yf(a,n),a}if(kR(t)&&(t=t.__vccOpts),e){e=yR(e);let{class:a,style:c}=e;a&&!ht(a)&&(e.class=Md(a)),rt(c)&&(D_(c)&&!de(c)&&(c=Dt({},c)),e.style=Ld(c))}const o=ht(t)?1:FN(t)?128:dR(t)?64:rt(t)?4:ge(t)?2:0;return fv(t,e,n,r,i,o,s,!0)}function yR(t){return t?D_(t)||Jl in t?Dt({},t):t:null}function Qs(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?vR(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&dv(a),ref:e&&e.ref?n&&i?de(i)?i.concat(Xl(e)):[i,Xl(e)]:Xl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==or?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qs(t.ssContent),ssFallback:t.ssFallback&&Qs(t.ssFallback),el:t.el,anchor:t.anchor}}function _R(t=" ",e=0){return En(pf,null,t,e)}function DH(t="",e=!1){return e?(fR(),gR(ar,null,t)):En(ar,null,t)}function cr(t){return t==null||typeof t=="boolean"?En(ar):de(t)?En(or,null,t.slice()):typeof t=="object"?Qr(t):En(pf,null,String(t))}function Qr(t){return t.el===null||t.memo?t:Qs(t)}function yf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(de(e))n=16;else if(typeof e=="object")if(r&(1|64)){const i=e.default;i&&(i._c&&(i._d=!1),yf(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Jl in e)?e._ctx=Pn:i===3&&Pn&&(Pn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ge(e)?(e={default:e,_ctx:Pn},n=32):(e=String(e),r&64?(n=16,e=[_R(e)]):n=8);t.children=e,t.shapeFlag|=n}function vR(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Md([e.class,r.class]));else if(i==="style")e.style=Ld([e.style,r.style]);else if(Nl(i)){const s=e[i],o=r[i];s!==o&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function xH(t,e,n,r){let i;const s=n&&n[r];if(de(t)||ht(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(rt(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];i[a]=e(t[l],l,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const _f=t=>t?gv(t)?vf(t)||t.proxy:_f(t.parent):null,Zl=Dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_f(t.parent),$root:t=>_f(t.root),$emit:t=>t.emit,$options:t=>G_(t),$forceUpdate:t=>()=>Tv(t.update),$nextTick:t=>Zs.bind(t.proxy),$watch:t=>BR.bind(t)}),wR={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 0:return r[e];case 1:return i[e];case 3:return n[e];case 2:return s[e]}else{if(r!==Ue&&ke(r,e))return o[e]=0,r[e];if(i!==Ue&&ke(i,e))return o[e]=1,i[e];if((l=t.propsOptions[0])&&ke(l,e))return o[e]=2,s[e];if(n!==Ue&&ke(n,e))return o[e]=3,n[e];af&&(o[e]=4)}}const u=Zl[e];let h,d;if(u)return e==="$attrs"&&vn(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ue&&ke(n,e))return o[e]=3,n[e];if(d=c.config.globalProperties,ke(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;if(i!==Ue&&ke(i,e))i[e]=n;else if(r!==Ue&&ke(r,e))r[e]=n;else if(ke(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return n[o]!==void 0||t!==Ue&&ke(t,o)||e!==Ue&&ke(e,o)||(a=s[0])&&ke(a,o)||ke(r,o)||ke(Zl,o)||ke(i.config.globalProperties,o)}},ER=sv();let IR=0;function bR(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||ER,s={uid:IR++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,update:null,scope:new JA(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:J_(r,i),emitsOptions:U_(r,i),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:r.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=PN.bind(null,s),t.ce&&t.ce(s),s}let yt=null;const pv=()=>yt||Pn,Ys=t=>{yt=t,t.scope.on()},qi=()=>{yt&&yt.scope.off(),yt=null};function gv(t){return t.vnode.shapeFlag&4}let eu=!1;function TR(t,e=!1){eu=e;const{props:n,children:r}=t.vnode,i=gv(t);nR(t,n,i,e),sR(t,r);const s=i?SR(t,e):void 0;return eu=!1,s}function SR(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Xd(new Proxy(t.ctx,wR));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?AR(t):null;Ys(t),Fi();const s=Ar(r,t,0,[t.props,i]);if(Hr(),qi(),d_(s)){if(s.then(qi,qi),e)return s.then(o=>{mv(t,o,e)}).catch(o=>{tu(o,t,0)});t.asyncDep=s}else mv(t,s,e)}else _v(t,e)}function mv(t,e,n){ge(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:rt(e)&&(t.setupState=F_(e)),_v(t,n)}let yv;function _v(t,e,n){const r=t.type;if(!t.render){if(!e&&yv&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Dt(Dt({isCustomElement:s,delimiters:a},o),c);r.render=yv(i,l)}}t.render=r.render||Hn}Ys(t),Fi(),JN(t),Hr(),qi()}function CR(t){return new Proxy(t.attrs,{get(e,n){return vn(t,"get","$attrs"),e[n]}})}function AR(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=CR(t))},slots:t.slots,emit:t.emit,expose:e}}function vf(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(F_(Xd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zl)return Zl[n](t)}}))}const NR=/(?:^|[-_])(\w)/g,RR=t=>t.replace(NR,e=>e.toUpperCase()).replace(/[-_]/g,"");function vv(t){return ge(t)&&t.displayName||t.name}function wv(t,e,n=!1){let r=vv(e);if(!r&&e.__file){const i=e.__file.match(/([^/\\]+)\.\w+$/);i&&(r=i[1])}if(!r&&t&&t.parent){const i=s=>{for(const o in s)if(s[o]===e)return o};r=i(t.components||t.parent.type.components)||i(t.appContext.components)}return r?RR(r):n?"App":"Anonymous"}function kR(t){return ge(t)&&"__vccOpts"in t}const Na=[];function Ev(t,...e){Fi();const n=Na.length?Na[Na.length-1].component:null,r=n&&n.appContext.config.warnHandler,i=PR();if(r)Ar(r,n,11,[t+e.join(""),n&&n.proxy,i.map(({vnode:s})=>`at <${wv(n,s.type)}>`).join(`
`),i]);else{const s=[`[Vue warn]: ${t}`,...e];i.length&&s.push(`
`,...OR(i)),console.warn(...s)}Hr()}function PR(){let t=Na[Na.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function OR(t){const e=[];return t.forEach((n,r)=>{e.push(...r===0?[]:[`
`],...DR(n))}),e}function DR({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=t.component?t.component.parent==null:!1,i=` at <${wv(t.component,t.type,r)}`,s=">"+n;return t.props?[i,...xR(t.props),s]:[i+s]}function xR(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(r=>{e.push(...Iv(r,t[r]))}),n.length>3&&e.push(" ..."),e}function Iv(t,e,n){return ht(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:it(e)?(e=Iv(t,Ne(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):ge(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=Ne(e),n?e:[`${t}=`,e])}function Ar(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){tu(s,e,n)}return i}function Dn(t,e,n,r){if(ge(t)){const s=Ar(t,e,n,r);return s&&d_(s)&&s.catch(o=>{tu(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(Dn(t[s],e,n,r));return i}function tu(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Ar(c,null,10,[t,o,a]);return}}LR(t,n,i,r)}function LR(t,e,n,r=!0){console.error(t)}let nu=!1,wf=!1;const In=[];let Nr=0;const Ra=[];let ka=null,Js=0;const Pa=[];let Yr=null,Xs=0;const bv=Promise.resolve();let Ef=null,If=null;function Zs(t){const e=Ef||bv;return t?e.then(this?t.bind(this):t):e}function MR(t){let e=Nr+1,n=In.length;for(;e<n;){const r=e+n>>>1;Oa(In[r])<t?e=r+1:n=r}return e}function Tv(t){(!In.length||!In.includes(t,nu&&t.allowRecurse?Nr+1:Nr))&&t!==If&&(t.id==null?In.push(t):In.splice(MR(t.id),0,t),Sv())}function Sv(){!nu&&!wf&&(wf=!0,Ef=bv.then(Nv))}function FR(t){const e=In.indexOf(t);e>Nr&&In.splice(e,1)}function Cv(t,e,n,r){de(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Sv()}function UR(t){Cv(t,ka,Ra,Js)}function VR(t){Cv(t,Yr,Pa,Xs)}function bf(t,e=null){if(Ra.length){for(If=e,ka=[...new Set(Ra)],Ra.length=0,Js=0;Js<ka.length;Js++)ka[Js]();ka=null,Js=0,If=null,bf(t,e)}}function Av(t){if(Pa.length){const e=[...new Set(Pa)];if(Pa.length=0,Yr){Yr.push(...e);return}for(Yr=e,Yr.sort((n,r)=>Oa(n)-Oa(r)),Xs=0;Xs<Yr.length;Xs++)Yr[Xs]();Yr=null,Xs=0}}const Oa=t=>t.id==null?1/0:t.id;function Nv(t){wf=!1,nu=!0,bf(t),In.sort((n,r)=>Oa(n)-Oa(r));const e=Hn;try{for(Nr=0;Nr<In.length;Nr++){const n=In[Nr];n&&n.active!==!1&&Ar(n,null,14)}}finally{Nr=0,In.length=0,Av(),nu=!1,Ef=null,(In.length||Ra.length||Pa.length)&&Nv(t)}}const Rv={};function cn(t,e,n){return kv(t,e,n)}function kv(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=Ue){const a=yt;let c,l=!1,u=!1;if(it(t)?(c=()=>t.value,l=!!t._shallow):Ks(t)?(c=()=>t,r=!0):de(t)?(u=!0,l=t.some(Ks),c=()=>t.map(w=>{if(it(w))return w.value;if(Ks(w))return ji(w);if(ge(w))return Ar(w,a,2)})):ge(t)?e?c=()=>Ar(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Dn(t,a,3,[d])}:c=Hn,e&&r){const w=c;c=()=>ji(w())}let h,d=w=>{h=_.onStop=()=>{Ar(w,a,4)}};if(eu)return d=Hn,e?n&&Dn(e,a,3,[c(),u?[]:void 0,d]):c(),Hn;let f=u?[]:Rv;const g=()=>{if(!!_.active)if(e){const w=_.run();(r||l||(u?w.some((S,L)=>Ia(S,f[L])):Ia(w,f)))&&(h&&h(),Dn(e,a,3,[w,f===Rv?void 0:f,d]),f=w)}else _.run()};g.allowRecurse=!!e;let y;i==="sync"?y=g:i==="post"?y=()=>Xt(g,a&&a.suspense):y=()=>{!a||a.isMounted?UR(g):g()};const _=new Hd(c,y);return e?n?g():f=_.run():i==="post"?Xt(_.run.bind(_),a&&a.suspense):_.run(),()=>{_.stop(),a&&a.scope&&u_(a.scope.effects,_)}}function BR(t,e,n){const r=this.proxy,i=ht(t)?t.includes(".")?Pv(r,t):()=>r[t]:t.bind(r,r);let s;ge(e)?s=e:(s=e.handler,n=e);const o=yt;Ys(this);const a=kv(i,s.bind(r),n);return o?Ys(o):qi(),a}function Pv(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function ji(t,e){if(!rt(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),it(t))ji(t.value,e);else if(de(t))for(let n=0;n<t.length;n++)ji(t[n],e);else if(h_(t)||js(t))t.forEach(n=>{ji(n,e)});else if(p_(t))for(const n in t)ji(t[n],e);return t}function Wi(t,e,n){const r=arguments.length;return r===2?rt(e)&&!de(e)?mf(e)?En(t,null,[e]):En(t,e):En(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&mf(n)&&(n=[n]),En(t,e,n))}const $R="3.2.19",qR="http://www.w3.org/2000/svg",eo=typeof document!="undefined"?document:null,Ov=new Map,jR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?eo.createElementNS(qR,t):eo.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>eo.createTextNode(t),createComment:t=>eo.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>eo.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const i=n?n.previousSibling:e.lastChild;let s=Ov.get(t);if(!s){const o=eo.createElement("template");if(o.innerHTML=r?`<svg>${t}</svg>`:t,s=o.content,r){const a=s.firstChild;for(;a.firstChild;)s.appendChild(a.firstChild);s.removeChild(a)}Ov.set(t,s)}return e.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function WR(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function HR(t,e,n){const r=t.style,i=r.display;if(!n)t.removeAttribute("style");else if(ht(n))e!==n&&(r.cssText=n);else{for(const s in n)Tf(r,s,n[s]);if(e&&!ht(e))for(const s in e)n[s]==null&&Tf(r,s,"")}"_vod"in t&&(r.display=i)}const Dv=/\s*!important$/;function Tf(t,e,n){if(de(n))n.forEach(r=>Tf(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=KR(t,e);Dv.test(n)?t.setProperty(Ws(r),n.replace(Dv,""),"important"):t[r]=n}}const xv=["Webkit","Moz","ms"],Sf={};function KR(t,e){const n=Sf[e];if(n)return n;let r=ir(e);if(r!=="filter"&&r in t)return Sf[e]=r;r=Ol(r);for(let i=0;i<xv.length;i++){const s=xv[i]+r;if(s in t)return Sf[e]=s}return e}const Lv="http://www.w3.org/1999/xlink";function zR(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Lv,e.slice(6,e.length)):t.setAttributeNS(Lv,e,n);else{const s=BA(e);n==null||s&&!c_(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function GR(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"){t._value=n;const a=n==null?"":n;t.value!==a&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=c_(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch(c){}t.removeAttribute(e);return}}try{t[e]=n}catch(a){}}let ru=Date.now,Mv=!1;if(typeof window!="undefined"){ru()>document.createEvent("Event").timeStamp&&(ru=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Mv=!!(t&&Number(t[1])<=53)}let Cf=0;const QR=Promise.resolve(),YR=()=>{Cf=0},JR=()=>Cf||(QR.then(YR),Cf=ru());function to(t,e,n,r){t.addEventListener(e,n,r)}function XR(t,e,n,r){t.removeEventListener(e,n,r)}function ZR(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=ek(e);if(r){const l=s[e]=tk(r,i);to(t,a,l,c)}else o&&(XR(t,a,o,c),s[e]=void 0)}}const Fv=/(?:Once|Passive|Capture)$/;function ek(t){let e;if(Fv.test(t)){e={};let n;for(;n=t.match(Fv);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Ws(t.slice(2)),e]}function tk(t,e){const n=r=>{const i=r.timeStamp||ru();(Mv||i>=n.attached-1)&&Dn(nk(r,n.value),e,5,[r])};return n.value=t,n.attached=JR(),n}function nk(t,e){if(de(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r(i))}else return e}const Uv=/^on[a-z]/,rk=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?WR(t,r,i):e==="style"?HR(t,n,r):Nl(e)?Fd(e)||ZR(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ik(t,e,r,i))?GR(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),zR(t,e,r,i))};function ik(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Uv.test(e)&&ge(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Uv.test(e)&&ht(n)?!1:e in t}const Jr="transition",Da="animation",Vv=(t,{slots:e})=>Wi(B_,sk(t),e);Vv.displayName="Transition";const Bv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Vv.props=Dt({},B_.props,Bv);const Hi=(t,e=[])=>{de(t)?t.forEach(n=>n(...e)):t&&t(...e)},$v=t=>t?de(t)?t.some(e=>e.length>1):t.length>1:!1;function sk(t){const e={};for(const H in t)H in Bv||(e[H]=t[H]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,g=ok(i),y=g&&g[0],_=g&&g[1],{onBeforeEnter:w,onEnter:S,onEnterCancelled:L,onLeave:U,onLeaveCancelled:G,onBeforeAppear:se=w,onAppear:te=S,onAppearCancelled:he=L}=e,Q=(H,be,Ge)=>{no(H,be?u:a),no(H,be?l:o),Ge&&Ge()},pe=(H,be)=>{no(H,f),no(H,d),be&&be()},Ee=H=>(be,Ge)=>{const Wt=H?te:S,Ce=()=>Q(be,H,Ge);Hi(Wt,[be,Ce]),qv(()=>{no(be,H?c:s),Xr(be,H?u:a),$v(Wt)||jv(be,r,y,Ce)})};return Dt(e,{onBeforeEnter(H){Hi(w,[H]),Xr(H,s),Xr(H,o)},onBeforeAppear(H){Hi(se,[H]),Xr(H,c),Xr(H,l)},onEnter:Ee(!1),onAppear:Ee(!0),onLeave(H,be){const Ge=()=>pe(H,be);Xr(H,h),lk(),Xr(H,d),qv(()=>{no(H,h),Xr(H,f),$v(U)||jv(H,r,_,Ge)}),Hi(U,[H,Ge])},onEnterCancelled(H){Q(H,!1),Hi(L,[H])},onAppearCancelled(H){Q(H,!0),Hi(he,[H])},onLeaveCancelled(H){pe(H),Hi(G,[H])}})}function ok(t){if(t==null)return null;if(rt(t))return[Af(t.enter),Af(t.leave)];{const e=Af(t);return[e,e]}}function Af(t){return Ll(t)}function Xr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function no(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function qv(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let ak=0;function jv(t,e,n,r){const i=t._endId=++ak,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=ck(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),s()},d=f=>{f.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,d)}function ck(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),i=r(Jr+"Delay"),s=r(Jr+"Duration"),o=Wv(i,s),a=r(Da+"Delay"),c=r(Da+"Duration"),l=Wv(a,c);let u=null,h=0,d=0;e===Jr?o>0&&(u=Jr,h=o,d=s.length):e===Da?l>0&&(u=Da,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?Jr:Da:null,d=u?u===Jr?s.length:c.length:0);const f=u===Jr&&/\b(transform|all)(,|$)/.test(n[Jr+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function Wv(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Hv(n)+Hv(t[r])))}function Hv(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function lk(){return document.body.offsetHeight}const Kv=t=>{const e=t.props["onUpdate:modelValue"];return de(e)?n=>Dl(e,n):e};function uk(t){t.target.composing=!0}function zv(t){const e=t.target;e.composing&&(e.composing=!1,hk(e,"input"))}function hk(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const LH={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Kv(i);const s=r||i.props&&i.props.type==="number";to(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():s&&(a=Ll(a)),t._assign(a)}),n&&to(t,"change",()=>{t.value=t.value.trim()}),e||(to(t,"compositionstart",uk),to(t,"compositionend",zv),to(t,"change",zv))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Kv(s),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&Ll(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},dk=["ctrl","shift","alt","meta"],fk={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>dk.some(n=>t[`${n}Key`]&&!e.includes(n))},MH=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=fk[e[i]];if(s&&s(n,e))return}return t(n,...r)},pk=Dt({patchProp:rk},jR);let Gv;function gk(){return Gv||(Gv=lR(pk))}const FH=(...t)=>{const e=gk().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=mk(r);if(!i)return;const s=e._component;!ge(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function mk(t){return ht(t)?document.querySelector(t):t}function yk(){return Qv().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Qv(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const _k=typeof Proxy=="function",vk="devtools-plugin:setup",wk="plugin:settings:set";class Ek{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let s=a_({},r);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(s,a)}catch(o){}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch(a){}s=o}},n.on(wk,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Ik(t,e){const n=Qv(),r=yk(),i=_k&&t.enableEarlyProxy;if(r&&(n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))r.emit(vk,t,e);else{const s=i?new Ek(t,r):null;(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:e,proxy:s}),s&&e(s.proxiedTarget)}}/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const Yv=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ro=t=>Yv?Symbol(t):"_vr_"+t,bk=ro("rvlm"),Jv=ro("rvd"),iu=ro("r"),Nf=ro("rl"),Rf=ro("rvl"),io=typeof window!="undefined";function Tk(t){return t.__esModule||Yv&&t[Symbol.toStringTag]==="Module"}const Ve=Object.assign;function kf(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const xa=()=>{},Sk=/\/$/,Ck=t=>t.replace(Sk,"");function Pf(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),i=t(s)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=kk(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function Ak(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xv(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Nk(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&so(e.matched[r],n.matched[i])&&Zv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function so(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Zv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Rk(t[n],e[n]))return!1;return!0}function Rk(t,e){return Array.isArray(t)?ew(t,e):Array.isArray(e)?ew(e,t):t===e}function ew(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function kk(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var La;(function(t){t.pop="pop",t.push="push"})(La||(La={}));var Ma;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ma||(Ma={}));function Pk(t){if(!t)if(io){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Ck(t)}const Ok=/^[^#]+#/;function Dk(t,e){return t.replace(Ok,"#")+e}function xk(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const su=()=>({left:window.pageXOffset,top:window.pageYOffset});function Lk(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=xk(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function tw(t,e){return(history.state?history.state.position-e:-1)+t}const Of=new Map;function Mk(t,e){Of.set(t,e)}function Fk(t){const e=Of.get(t);return Of.delete(t),e}let Uk=()=>location.protocol+"//"+location.host;function nw(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),Xv(c,"")}return Xv(n,t)+r+i}function Vk(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=nw(t,location),g=n.value,y=e.value;let _=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}_=y?d.position-y.position:0}else r(f);i.forEach(w=>{w(n.value,g,{delta:_,type:La.pop,direction:_?_>0?Ma.forward:Ma.back:Ma.unknown})})};function c(){o=n.value}function l(d){i.push(d);const f=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return s.push(f),f}function u(){const{history:d}=window;!d.state||d.replaceState(Ve({},d.state,{scroll:su()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function rw(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?su():null}}function Bk(t){const{history:e,location:n}=window,r={value:nw(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Uk()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=Ve({},e.state,rw(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function a(c,l){const u=Ve({},i.value,e.state,{forward:c,scroll:su()});s(u.current,u,!0);const h=Ve({},rw(r.value,c,null),{position:u.position+1},l);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function $k(t){t=Pk(t);const e=Bk(t),n=Vk(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Ve({location:"",base:t,go:r,createHref:Dk.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function UH(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),$k(t)}function qk(t){return typeof t=="string"||t&&typeof t=="object"}function iw(t){return typeof t=="string"||typeof t=="symbol"}const Zr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},sw=ro("nf");var ow;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ow||(ow={}));function oo(t,e){return Ve(new Error,{type:t,[sw]:!0},e)}function Ki(t,e){return t instanceof Error&&sw in t&&(e==null||!!(t.type&e))}const aw="[^/]+?",jk={sensitive:!1,strict:!1,start:!0,end:!0},Wk=/[.+*?^${}()[\]/\\]/g;function Hk(t,e){const n=Ve({},jk,e),r=[];let i=n.start?"^":"";const s=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(Wk,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:y,optional:_,regexp:w}=d;s.push({name:g,repeatable:y,optional:_});const S=w||aw;if(S!==aw){f+=10;try{new RegExp(`(${S})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+U.message)}}let L=y?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(L=_&&l.length<2?`(?:/${L})`:"/"+L),_&&(L+="?"),i+=L,f+=20,_&&(f+=-8),y&&(f+=-20),S===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=s[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:y,optional:_}=f,w=g in l?l[g]:"";if(Array.isArray(w)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=Array.isArray(w)?w.join("/"):w;if(!S)if(_)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=S}}return u}return{re:o,score:r,keys:s,parse:a,stringify:c}}function Kk(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function zk(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=Kk(r[n],i[n]);if(s)return s;n++}return i.length-r.length}const Gk={type:0,value:""},Qk=/[a-zA-Z0-9_]/;function Yk(t){if(!t)return[[]];if(t==="/")return[[Gk]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,l="",u="";function h(){!l||(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Qk.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function Jk(t,e,n){const r=Hk(Yk(t.path),n),i=Ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function Xk(t,e){const n=[],r=new Map;e=lw({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function s(u,h,d){const f=!d,g=eP(u);g.aliasOf=d&&d.record;const y=lw(e,u),_=[g];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const U of L)_.push(Ve({},g,{components:d?d.record.components:g.components,path:U,aliasOf:d?d.record:g}))}let w,S;for(const L of _){const{path:U}=L;if(h&&U[0]!=="/"){const G=h.record.path,se=G[G.length-1]==="/"?"":"/";L.path=h.record.path+(U&&se+U)}if(w=Jk(L,h,y),d?d.alias.push(w):(S=S||w,S!==w&&S.alias.push(w),f&&u.name&&!cw(w)&&o(u.name)),"children"in g){const G=g.children;for(let se=0;se<G.length;se++)s(G[se],w,d&&d.children[se])}d=d||w,c(w)}return S?()=>{o(S)}:xa}function o(u){if(iw(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&zk(u,n[h])>=0;)h++;n.splice(h,0,u),u.record.name&&!cw(u)&&r.set(u.record.name,u)}function l(u,h){let d,f={},g,y;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw oo(1,{location:u});y=d.record.name,f=Ve(Zk(h.params,d.keys.filter(S=>!S.optional).map(S=>S.name)),u.params),g=d.stringify(f)}else if("path"in u)g=u.path,d=n.find(S=>S.re.test(g)),d&&(f=d.parse(g),y=d.record.name);else{if(d=h.name?r.get(h.name):n.find(S=>S.re.test(h.path)),!d)throw oo(1,{location:u,currentLocation:h});y=d.record.name,f=Ve({},h.params,u.params),g=d.stringify(f)}const _=[];let w=d;for(;w;)_.unshift(w.record),w=w.parent;return{name:y,path:g,params:f,matched:_,meta:nP(_)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function Zk(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function eP(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:tP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function tP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function cw(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function nP(t){return t.reduce((e,n)=>Ve(e,n.meta),{})}function lw(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const uw=/#/g,rP=/&/g,iP=/\//g,sP=/=/g,oP=/\?/g,hw=/\+/g,aP=/%5B/g,cP=/%5D/g,dw=/%5E/g,lP=/%60/g,fw=/%7B/g,uP=/%7C/g,pw=/%7D/g,hP=/%20/g;function Df(t){return encodeURI(""+t).replace(uP,"|").replace(aP,"[").replace(cP,"]")}function dP(t){return Df(t).replace(fw,"{").replace(pw,"}").replace(dw,"^")}function xf(t){return Df(t).replace(hw,"%2B").replace(hP,"+").replace(uw,"%23").replace(rP,"%26").replace(lP,"`").replace(fw,"{").replace(pw,"}").replace(dw,"^")}function fP(t){return xf(t).replace(sP,"%3D")}function pP(t){return Df(t).replace(uw,"%23").replace(oP,"%3F")}function gP(t){return t==null?"":pP(t).replace(iP,"%2F")}function ou(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function mP(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(hw," "),o=s.indexOf("="),a=ou(o<0?s:s.slice(0,o)),c=o<0?null:ou(s.slice(o+1));if(a in e){let l=e[a];Array.isArray(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function gw(t){let e="";for(let n in t){const r=t[n];if(n=fP(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(s=>s&&xf(s)):[r&&xf(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function yP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}function Fa(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ei(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(oo(4,{from:n,to:e})):h instanceof Error?a(h):qk(h)?a(oo(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Lf(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(_P(a)){const l=(a.__vccOpts||a)[e];l&&i.push(ei(l,n,r,s,o))}else{let c=a();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Tk(l)?l.default:l;s.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&ei(d,n,r,s,o)()}))}}return i}function _P(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function mw(t){const e=wn(iu),n=wn(Nf),r=Le(()=>e.resolve(Z(t.to))),i=Le(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(so.bind(null,u));if(d>-1)return d;const f=yw(c[l-2]);return l>1&&yw(u)===f&&h[h.length-1].path!==f?h.findIndex(so.bind(null,c[l-2])):d}),s=Le(()=>i.value>-1&&IP(n.params,r.value.params)),o=Le(()=>i.value>-1&&i.value===n.matched.length-1&&Zv(n.params,r.value.params));function a(c={}){return EP(c)?e[Z(t.replace)?"replace":"push"](Z(t.to)).catch(xa):Promise.resolve()}return{route:r,href:Le(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const vP=Gs({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mw,setup(t,{slots:e}){const n=zr(mw(t)),{options:r}=wn(iu),i=Le(()=>({[_w(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_w(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Wi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),wP=vP;function EP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function IP(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function yw(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _w=(t,e,n)=>t!=null?t:e!=null?e:n,bP=Gs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=wn(Rf),i=Le(()=>t.route||r.value),s=wn(Jv,0),o=Le(()=>i.value.matched[s]);zs(Jv,s+1),zs(bk,o),zs(Rf,i);const a=Kn();return cn(()=>[a.value,o.value,t.name],([c,l,u],[h,d,f])=>{l&&(l.instances[u]=c,d&&d!==l&&c&&c===h&&(l.leaveGuards.size||(l.leaveGuards=d.leaveGuards),l.updateGuards.size||(l.updateGuards=d.updateGuards))),c&&l&&(!d||!so(l,d)||!h)&&(l.enterCallbacks[u]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=i.value,l=o.value,u=l&&l.components[t.name],h=t.name;if(!u)return vw(n.default,{Component:u,route:c});const d=l.props[t.name],f=d?d===!0?c.params:typeof d=="function"?d(c):d:null,y=Wi(u,Ve({},f,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(l.instances[h]=null)},ref:a}));return vw(n.default,{Component:y,route:c})||y}}});function vw(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const TP=bP;function VH(t){const e=Xk(t.routes,t),n=t.parseQuery||mP,r=t.stringifyQuery||gw,i=t.history,s=Fa(),o=Fa(),a=Fa(),c=CN(Zr);let l=Zr;io&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=kf.bind(null,T=>""+T),h=kf.bind(null,gP),d=kf.bind(null,ou);function f(T,Y){let B,ne;return iw(T)?(B=e.getRecordMatcher(T),ne=Y):ne=T,e.addRoute(ne,B)}function g(T){const Y=e.getRecordMatcher(T);Y&&e.removeRoute(Y)}function y(){return e.getRoutes().map(T=>T.record)}function _(T){return!!e.getRecordMatcher(T)}function w(T,Y){if(Y=Ve({},Y||c.value),typeof T=="string"){const V=Pf(n,T,Y.path),p=e.resolve({path:V.path},Y),m=i.createHref(V.fullPath);return Ve(V,p,{params:d(p.params),hash:ou(V.hash),redirectedFrom:void 0,href:m})}let B;if("path"in T)B=Ve({},T,{path:Pf(n,T.path,Y.path).path});else{const V=Ve({},T.params);for(const p in V)V[p]==null&&delete V[p];B=Ve({},T,{params:h(T.params)}),Y.params=h(Y.params)}const ne=e.resolve(B,Y),I=T.hash||"";ne.params=u(d(ne.params));const N=Ak(r,Ve({},T,{hash:dP(I),path:ne.path})),q=i.createHref(N);return Ve({fullPath:N,hash:I,query:r===gw?yP(T.query):T.query||{}},ne,{redirectedFrom:void 0,href:q})}function S(T){return typeof T=="string"?Pf(n,T,c.value.path):Ve({},T)}function L(T,Y){if(l!==T)return oo(8,{from:Y,to:T})}function U(T){return te(T)}function G(T){return U(Ve(S(T),{replace:!0}))}function se(T){const Y=T.matched[T.matched.length-1];if(Y&&Y.redirect){const{redirect:B}=Y;let ne=typeof B=="function"?B(T):B;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=S(ne):{path:ne},ne.params={}),Ve({query:T.query,hash:T.hash,params:T.params},ne)}}function te(T,Y){const B=l=w(T),ne=c.value,I=T.state,N=T.force,q=T.replace===!0,V=se(B);if(V)return te(Ve(S(V),{state:I,force:N,replace:q}),Y||B);const p=B;p.redirectedFrom=Y;let m;return!N&&Nk(r,ne,B)&&(m=oo(16,{to:p,from:ne}),Re(ne,ne,!0,!1)),(m?Promise.resolve(m):Q(p,ne)).catch(v=>Ki(v)?v:ve(v,p,ne)).then(v=>{if(v){if(Ki(v,2))return te(Ve(S(v.to),{state:I,force:N,replace:q}),Y||p)}else v=Ee(p,ne,!0,q,I);return pe(p,ne,v),v})}function he(T,Y){const B=L(T,Y);return B?Promise.reject(B):Promise.resolve()}function Q(T,Y){let B;const[ne,I,N]=SP(T,Y);B=Lf(ne.reverse(),"beforeRouteLeave",T,Y);for(const V of ne)V.leaveGuards.forEach(p=>{B.push(ei(p,T,Y))});const q=he.bind(null,T,Y);return B.push(q),ao(B).then(()=>{B=[];for(const V of s.list())B.push(ei(V,T,Y));return B.push(q),ao(B)}).then(()=>{B=Lf(I,"beforeRouteUpdate",T,Y);for(const V of I)V.updateGuards.forEach(p=>{B.push(ei(p,T,Y))});return B.push(q),ao(B)}).then(()=>{B=[];for(const V of T.matched)if(V.beforeEnter&&!Y.matched.includes(V))if(Array.isArray(V.beforeEnter))for(const p of V.beforeEnter)B.push(ei(p,T,Y));else B.push(ei(V.beforeEnter,T,Y));return B.push(q),ao(B)}).then(()=>(T.matched.forEach(V=>V.enterCallbacks={}),B=Lf(N,"beforeRouteEnter",T,Y),B.push(q),ao(B))).then(()=>{B=[];for(const V of o.list())B.push(ei(V,T,Y));return B.push(q),ao(B)}).catch(V=>Ki(V,8)?V:Promise.reject(V))}function pe(T,Y,B){for(const ne of a.list())ne(T,Y,B)}function Ee(T,Y,B,ne,I){const N=L(T,Y);if(N)return N;const q=Y===Zr,V=io?history.state:{};B&&(ne||q?i.replace(T.fullPath,Ve({scroll:q&&V&&V.scroll},I)):i.push(T.fullPath,I)),c.value=T,Re(T,Y,B,q),j()}let H;function be(){H=i.listen((T,Y,B)=>{const ne=w(T),I=se(ne);if(I){te(Ve(I,{replace:!0}),ne).catch(xa);return}l=ne;const N=c.value;io&&Mk(tw(N.fullPath,B.delta),su()),Q(ne,N).catch(q=>Ki(q,4|8)?q:Ki(q,2)?(te(q.to,ne).then(V=>{Ki(V,4|16)&&!B.delta&&B.type===La.pop&&i.go(-1,!1)}).catch(xa),Promise.reject()):(B.delta&&i.go(-B.delta,!1),ve(q,ne,N))).then(q=>{q=q||Ee(ne,N,!1),q&&(B.delta?i.go(-B.delta,!1):B.type===La.pop&&Ki(q,4|16)&&i.go(-1,!1)),pe(ne,N,q)}).catch(xa)})}let Ge=Fa(),Wt=Fa(),Ce;function ve(T,Y,B){j(T);const ne=Wt.list();return ne.length?ne.forEach(I=>I(T,Y,B)):console.error(T),Promise.reject(T)}function Ie(){return Ce&&c.value!==Zr?Promise.resolve():new Promise((T,Y)=>{Ge.add([T,Y])})}function j(T){Ce||(Ce=!0,be(),Ge.list().forEach(([Y,B])=>T?B(T):Y()),Ge.reset())}function Re(T,Y,B,ne){const{scrollBehavior:I}=t;if(!io||!I)return Promise.resolve();const N=!B&&Fk(tw(T.fullPath,0))||(ne||!B)&&history.state&&history.state.scroll||null;return Zs().then(()=>I(T,Y,N)).then(q=>q&&Lk(q)).catch(q=>ve(q,T,Y))}const je=T=>i.go(T);let Yt;const ut=new Set;return{currentRoute:c,addRoute:f,removeRoute:g,hasRoute:_,getRoutes:y,resolve:w,options:t,push:U,replace:G,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Wt.add,isReady:Ie,install(T){const Y=this;T.component("RouterLink",wP),T.component("RouterView",TP),T.config.globalProperties.$router=Y,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Z(c)}),io&&!Yt&&c.value===Zr&&(Yt=!0,U(i.location).catch(I=>{}));const B={};for(const I in Zr)B[I]=Le(()=>c.value[I]);T.provide(iu,Y),T.provide(Nf,zr(B)),T.provide(Rf,c);const ne=T.unmount;ut.add(T),T.unmount=function(){ut.delete(T),ut.size<1&&(l=Zr,H&&H(),c.value=Zr,Yt=!1,Ce=!1),ne()}}}}function ao(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function SP(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(l=>so(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>so(l,c))||i.push(c))}return[n,r,i]}function BH(){return wn(iu)}function $H(){return wn(Nf)}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var ww="store";function qH(t){return t===void 0&&(t=null),wn(t!==null?t:ww)}function co(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function CP(t){return t!==null&&typeof t=="object"}function AP(t){return t&&typeof t.then=="function"}function NP(t,e){return function(){return t(e)}}function Ew(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Iw(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;au(t,n,[],t._modules.root,!0),Mf(t,n,e)}function Mf(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,s={};co(i,function(o,a){s[a]=NP(o,t),Object.defineProperty(t.getters,a,{get:function(){return s[a]()},enumerable:!0})}),t._state=zr({data:e}),t.strict&&DP(t),r&&n&&t._withCommit(function(){r.data=null})}function au(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=Ff(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=RP(t,o,n);r.forEachMutation(function(u,h){var d=o+h;kP(t,d,u,l)}),r.forEachAction(function(u,h){var d=u.root?h:o+h,f=u.handler||u;PP(t,d,f,l)}),r.forEachGetter(function(u,h){var d=o+h;OP(t,d,u,l)}),r.forEachChild(function(u,h){au(t,e,n.concat(h),u,i)})}function RP(t,e,n){var r=e==="",i={dispatch:r?t.dispatch:function(s,o,a){var c=cu(s,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:r?t.commit:function(s,o,a){var c=cu(s,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return bw(t,e)}},state:{get:function(){return Ff(t.state,n)}}}),i}function bw(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function kP(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,r.state,o)})}function PP(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return AP(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function OP(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(s){return n(r.state,r.getters,s.state,s.getters)})}function DP(t){cn(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Ff(t,e){return e.reduce(function(n,r){return n[r]},t)}function cu(t,e,n){return CP(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var xP="vuex bindings",Tw="vuex:mutations",Uf="vuex:actions",lo="vuex",LP=0;function MP(t,e){Ik({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[xP]},function(n){n.addTimelineLayer({id:Tw,label:"Vuex Mutations",color:Sw}),n.addTimelineLayer({id:Uf,label:"Vuex Actions",color:Sw}),n.addInspector({id:lo,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===lo)if(r.filter){var i=[];Rw(i,e._modules.root,r.filter,""),r.rootNodes=i}else r.rootNodes=[Nw(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===lo){var i=r.nodeId;bw(e,i),r.state=VP($P(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===lo){var i=r.nodeId,s=r.path;i!=="root"&&(s=i.split("/").filter(Boolean).concat(s)),e._withCommit(function(){r.set(e._state.data,s,r.state.value)})}}),e.subscribe(function(r,i){var s={};r.payload&&(s.payload=r.payload),s.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(lo),n.sendInspectorState(lo),n.addTimelineEvent({layerId:Tw,event:{time:Date.now(),title:r.type,data:s}})}),e.subscribeAction({before:function(r,i){var s={};r.payload&&(s.payload=r.payload),r._id=LP++,r._time=Date.now(),s.state=i,n.addTimelineEvent({layerId:Uf,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:s}})},after:function(r,i){var s={},o=Date.now()-r._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(s.payload=r.payload),s.state=i,n.addTimelineEvent({layerId:Uf,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:s}})}})})}var Sw=8702998,FP=6710886,UP=16777215,Cw={label:"namespaced",textColor:UP,backgroundColor:FP};function Aw(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Nw(t,e){return{id:e||"root",label:Aw(e),tags:t.namespaced?[Cw]:[],children:Object.keys(t._children).map(function(n){return Nw(t._children[n],e+n+"/")})}}function Rw(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Cw]:[]}),Object.keys(e._children).forEach(function(i){Rw(t,e._children[i],n,r+i+"/")})}function VP(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var s=BP(e);i.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?Aw(o):o,editable:!1,value:Vf(function(){return s[o]})}})}return i}function BP(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var i=e,s=r.pop();r.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[s]=Vf(function(){return t[n]})}else e[n]=Vf(function(){return t[n]})}),e}function $P(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,i,s){var o=r[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return s===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Vf(t){try{return t()}catch(e){return e}}var zn=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},kw={namespaced:{configurable:!0}};kw.namespaced.get=function(){return!!this._rawModule.namespaced};zn.prototype.addChild=function(e,n){this._children[e]=n};zn.prototype.removeChild=function(e){delete this._children[e]};zn.prototype.getChild=function(e){return this._children[e]};zn.prototype.hasChild=function(e){return e in this._children};zn.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};zn.prototype.forEachChild=function(e){co(this._children,e)};zn.prototype.forEachGetter=function(e){this._rawModule.getters&&co(this._rawModule.getters,e)};zn.prototype.forEachAction=function(e){this._rawModule.actions&&co(this._rawModule.actions,e)};zn.prototype.forEachMutation=function(e){this._rawModule.mutations&&co(this._rawModule.mutations,e)};Object.defineProperties(zn.prototype,kw);var zi=function(e){this.register([],e,!1)};zi.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};zi.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,i){return n=n.getChild(i),r+(n.namespaced?i+"/":"")},"")};zi.prototype.update=function(e){Pw([],this.root,e)};zi.prototype.register=function(e,n,r){var i=this;r===void 0&&(r=!0);var s=new zn(n,r);if(e.length===0)this.root=s;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],s)}n.modules&&co(n.modules,function(a,c){i.register(e.concat(c),a,r)})};zi.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],i=n.getChild(r);!i||!i.runtime||n.removeChild(r)};zi.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function Pw(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;Pw(t.concat(r),e.getChild(r),n.modules[r])}}function jH(t){return new ln(t)}var ln=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var i=e.strict;i===void 0&&(i=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new zi(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(d,f){return c.call(o,d,f)},this.commit=function(d,f,g){return l.call(o,d,f,g)},this.strict=i;var u=this._modules.root.state;au(this,u,[],this._modules.root),Mf(this,u),r.forEach(function(h){return h(n)})},Bf={state:{configurable:!0}};ln.prototype.install=function(e,n){e.provide(n||ww,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&MP(e,this)};Bf.state.get=function(){return this._state.data};Bf.state.set=function(t){};ln.prototype.commit=function(e,n,r){var i=this,s=cu(e,n,r),o=s.type,a=s.payload,c={type:o,payload:a},l=this._mutations[o];!l||(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,i.state)}))};ln.prototype.dispatch=function(e,n){var r=this,i=cu(e,n),s=i.type,o=i.payload,a={type:s,payload:o},c=this._actions[s];if(!!c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch(u){}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(d){try{r._actionSubscribers.filter(function(f){return f.after}).forEach(function(f){return f.after(a,r.state)})}catch(f){}u(d)},function(d){try{r._actionSubscribers.filter(function(f){return f.error}).forEach(function(f){return f.error(a,r.state,d)})}catch(f){}h(d)})})}};ln.prototype.subscribe=function(e,n){return Ew(e,this._subscribers,n)};ln.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Ew(r,this._actionSubscribers,n)};ln.prototype.watch=function(e,n,r){var i=this;return cn(function(){return e(i.state,i.getters)},n,Object.assign({},r))};ln.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};ln.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),au(this,this.state,e,this._modules.get(e),r.preserveState),Mf(this,this.state)};ln.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Ff(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Iw(this)};ln.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};ln.prototype.hotUpdate=function(e){this._modules.update(e),Iw(this,!0)};ln.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(ln.prototype,Bf);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(t,e){if(!t)throw uo(e)},uo=function(t){return new Error("Firebase Database ("+Ow.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$f={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},xw=function(t){const e=Dw(t);return $f.encodeByteArray(e,!0)},Lw=function(t){return xw(t).replace(/\./g,"")},qf=function(t){try{return $f.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t){return Ua(void 0,t)}function Ua(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!WP(n)||(t[n]=Ua(t[n],e[n]));return t}function WP(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Lw(JSON.stringify(n)),Lw(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lu(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function jf(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(t){return!1}}function HP(){return typeof self=="object"&&self.self===self}function Wf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Va(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KP(){return He().indexOf("Electron/")>=0}function Hf(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zP(){return He().indexOf("MSAppHost/")>=0}function Fw(){return Ow.NODE_ADMIN===!0}function GP(){return!jf()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function uu(){return typeof indexedDB=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QP="FirebaseError";class xn extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=QP,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gi.prototype.create)}}class Gi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?YP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xn(i,a,r)}}function YP(t,e){return t.replace(JP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const JP=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t){return JSON.parse(t)}function dt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ba(qf(s[0])||""),n=Ba(qf(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(s){}return{header:e,claims:n,data:r,signature:i}},XP=function(t){const e=Uw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ZP=function(t){const e=Uw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Qi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function hu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function du(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Kf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Vw(s)&&Vw(o)){if(!Kf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ho(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function $a(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let h=0;h<80;h++){h<40?h<20?(l=a^s&(o^a),u=1518500249):(l=s^o^a,u=1859775393):h<60?(l=s&o|a&(s|o),u=2400959708):(l=s^o^a,u=3395469782);const d=(i<<5|i>>>27)+l+c+u+r[h]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Bw(t,e){const n=new tO(t,e);return n.subscribe.bind(n)}class tO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=zf),i.error===void 0&&(i.error=zf),i.complete===void 0&&(i.complete=zf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(o){}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zf(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=function(t,e,n,r){let i;if(r<e?i="at least "+e:r>n&&(i=n===0?"none":"no more than "+n),i){const s=t+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(s)}};function hn(t,e){return`${t} failed: ${e} argument `}function _t(t,e,n,r){if(!(r&&!n)&&typeof n!="function")throw new Error(hn(t,e)+"must be a valid function.")}function $w(t,e,n,r){if(!(r&&!n)&&(typeof n!="object"||n===null))throw new Error(hn(t,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,O(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},fu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t){return t&&t._delegate?t._delegate:t}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Gf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function iO(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(u){try{l(r.next(u))}catch(h){o(h)}}function c(u){try{l(r.throw(u))}catch(h){o(h)}}function l(u){u.done?s(u.value):i(u.value).then(a,c)}l((r=r.apply(t,e||[])).next())})}function sO(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=l[0]&2?i.return:l[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,l[1])).done)return s;switch(i=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){n.label=l[1];break}if(l[0]===6&&n.label<s[1]){n.label=s[1],s=l;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(l);break}s[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(u){l=[6,u],i=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Qf(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function pu(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function qw(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Ln=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ji="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jw=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new un;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch(s){}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(aO(e))try{this.getOrInitializeService({instanceIdentifier:Ji})}catch(h){}try{for(var i=Qf(this.instancesDeferred.entries()),s=i.next();!s.done;s=i.next()){var o=pu(s.value,2),a=o[0],c=o[1],l=this.normalizeInstanceIdentifier(a);try{var u=this.getOrInitializeService({instanceIdentifier:l});c.resolve(u)}catch(h){}}}catch(h){n={error:h}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=Ji),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return iO(this,void 0,void 0,function(){var e;return sO(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(qw(qw([],pu(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),pu(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=Ji),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=Ji),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var i=e.options,s=i===void 0?{}:i,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var c=Qf(this.instancesDeferred.entries()),l=c.next();!l.done;l=c.next()){var u=pu(l.value,2),h=u[0],d=u[1],f=this.normalizeInstanceIdentifier(h);o===f&&d.resolve(a)}}catch(g){n={error:g}}finally{try{l&&!l.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var r,i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);var o=this.instances.get(i);return o&&e(o,i),function(){s.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,i,s=this.onInitCallbacks.get(n);if(!!s)try{for(var o=Qf(s),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(e,n)}catch(l){}}}catch(l){r={error:l}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,i=r===void 0?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:oO(n),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=Ji),this.component?this.component.multipleInstances?e:Ji:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function oO(t){return t===Ji?void 0:t}function aO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ww=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new jw(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=[];var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const Hw={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},cO=Te.INFO,lO={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},uO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=lO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fo{constructor(e){this.name=e,this._logLevel=cO,this._logHandler=uO,this._userLogHandler=null,Yf.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}function hO(t){Yf.forEach(e=>{e.setLogLevel(t)})}function dO(t,e){for(const n of Yf){let r=null;e&&e.level&&(r=Hw[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch(l){return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:Te[s].toLowerCase(),message:a,args:o,type:i.name})}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kw="@firebase/app",gO="0.7.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=new fo("@firebase/app"),mO="@firebase/app-compat",yO="@firebase/analytics-compat",_O="@firebase/analytics",vO="@firebase/app-check-compat",wO="@firebase/app-check",EO="@firebase/auth",IO="@firebase/auth-compat",bO="@firebase/database",TO="@firebase/database-compat",SO="@firebase/functions",CO="@firebase/functions-compat",AO="@firebase/installations",NO="@firebase/installations-compat",RO="@firebase/messaging",kO="@firebase/messaging-compat",PO="@firebase/performance",OO="@firebase/performance-compat",DO="@firebase/remote-config",xO="@firebase/remote-config-compat",LO="@firebase/storage",MO="@firebase/storage-compat",FO="@firebase/firestore",UO="@firebase/firestore-compat",VO="firebase",BO="9.1.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="[DEFAULT]",$O={[Kw]:"fire-core",[mO]:"fire-core-compat",[_O]:"fire-analytics",[yO]:"fire-analytics-compat",[wO]:"fire-app-check",[vO]:"fire-app-check-compat",[EO]:"fire-auth",[IO]:"fire-auth-compat",[bO]:"fire-rtdb",[TO]:"fire-rtdb-compat",[SO]:"fire-fn",[CO]:"fire-fn-compat",[AO]:"fire-iid",[NO]:"fire-iid-compat",[RO]:"fire-fcm",[kO]:"fire-fcm-compat",[PO]:"fire-perf",[OO]:"fire-perf-compat",[DO]:"fire-rc",[xO]:"fire-rc-compat",[LO]:"fire-gcs",[MO]:"fire-gcs-compat",[FO]:"fire-fst",[UO]:"fire-fst-compat","fire-js":"fire-js",[VO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new Map,qa=new Map;function gu(t,e){try{t.container.addComponent(e)}catch(n){Jf.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zw(t,e){t.container.addOrOverwriteComponent(e)}function ni(t){const e=t.name;if(qa.has(e))return Jf.debug(`There were multiple attempts to register component ${e}.`),!1;qa.set(e,t);for(const n of ti.values())gu(n,t);return!0}function Gw(t,e){return t.container.getProvider(e)}function qO(t,e,n=Xi){Gw(t,e).clearInstance(n)}function jO(){qa.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},ja=new Gi("app","Firebase",WO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ja.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=BO;function Qw(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Xi,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw ja.create("bad-app-name",{appName:String(r)});const i=ti.get(r);if(i){if(Kf(t,i.options)&&Kf(n,i.config))return i;throw ja.create("duplicate-app",{appName:r})}const s=new Ww(r);for(const a of qa.values())s.addComponent(a);const o=new HO(t,n,s);return ti.set(r,o),o}function KO(t=Xi){const e=ti.get(t);if(!e)throw ja.create("no-app",{appName:t});return e}function zO(){return Array.from(ti.values())}async function Yw(t){const e=t.name;ti.has(e)&&(ti.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function ii(t,e,n){var r;let i=(r=$O[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jf.warn(a.join(" "));return}ni(new Ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Jw(t,e){if(t!==null&&typeof t!="function")throw ja.create("invalid-log-argument");dO(t,e)}function Xw(t){hO(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(t){ni(new Ln("platform-logger",e=>new fO(e),"PRIVATE")),ii(Kw,gO,t),ii("fire-js","")}GO();var QO=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:ri,_DEFAULT_ENTRY_NAME:Xi,_addComponent:gu,_addOrOverwriteComponent:zw,_apps:ti,_clearComponents:jO,_components:qa,_getProvider:Gw,_registerComponent:ni,_removeServiceInstance:qO,deleteApp:Yw,getApp:KO,getApps:zO,initializeApp:Qw,onLog:Jw,registerVersion:ii,setLogLevel:Xw,FirebaseError:xn});/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e,n){this._delegate=e,this.firebase=n,gu(e,new Ln("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Yw(this._delegate)))}_getService(e,n=Xi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Xi){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){gu(this._delegate,e)}_addOrOverwriteComponent(e){zw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Zw=new Gi("app-compat","Firebase",JO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XO(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:ii,setLogLevel:Xw,onLog:Jw,apps:null,SDK_VERSION:ri,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:QO}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||Xi,!bn(e,l))throw Zw.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,u={}){const h=Qw(l,u);if(bn(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const u=l.name,h=u.replace("-compat","");if(ni(l)&&l.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[h]!="function")throw Zw.create("invalid-app-argument",{appName:u});return f[h]()};l.serviceProps!==void 0&&Ua(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...f){return this._getService.bind(this,u).apply(this,l.multipleInstances?f:[])}}return l.type==="PUBLIC"?n[h]:null}function c(l,u){return u==="serverAuth"?null:u}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(){const t=XO(YO);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:eE,extendNamespace:e,createSubscribe:Bw,ErrorFactory:Gi,deepExtend:Ua});function e(n){Ua(t,n)}return t}const ZO=eE();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=new fo("@firebase/app-compat"),eD="@firebase/app-compat",tD="0.1.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(t){ii(eD,tD,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(HP()&&self.firebase!==void 0){tE.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&tE.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const po=ZO;nD();var rD="firebase",iD="9.1.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */po.registerVersion(rD,iD,"app-compat");var sD=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},z,Xf=Xf||{},le=sD||self;function mu(){}function Zf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Wa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function oD(t){return Object.prototype.hasOwnProperty.call(t,ep)&&t[ep]||(t[ep]=++aD)}var ep="closure_uid_"+(1e9*Math.random()>>>0),aD=0;function cD(t,e,n){return t.call.apply(t.bind,arguments)}function lD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function xt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?xt=cD:xt=lD,xt.apply(null,arguments)}function yu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Lt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function si(){this.s=this.s,this.o=this.o}var uD=0,hD={};si.prototype.s=!1;si.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),uD!=0)){var t=oD(this);delete hD[t]}};si.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const nE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},rE=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function dD(t){e:{var e=rx;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function iE(t){return Array.prototype.concat.apply([],arguments)}function tp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function _u(t){return/^[\s\xa0]*$/.test(t)}var sE=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Zt(t,e){return t.indexOf(e)!=-1}function np(t,e){return t<e?-1:t>e?1:0}var en;e:{var oE=le.navigator;if(oE){var aE=oE.userAgent;if(aE){en=aE;break e}}en=""}function rp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function cE(t){const e={};for(const n in t)e[n]=t[n];return e}var lE="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function uE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<lE.length;s++)n=lE[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ip(t){return ip[" "](t),t}ip[" "]=mu;function fD(t){var e=mD;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var pD=Zt(en,"Opera"),go=Zt(en,"Trident")||Zt(en,"MSIE"),hE=Zt(en,"Edge"),sp=hE||go,dE=Zt(en,"Gecko")&&!(Zt(en.toLowerCase(),"webkit")&&!Zt(en,"Edge"))&&!(Zt(en,"Trident")||Zt(en,"MSIE"))&&!Zt(en,"Edge"),gD=Zt(en.toLowerCase(),"webkit")&&!Zt(en,"Edge");function fE(){var t=le.document;return t?t.documentMode:void 0}var vu;e:{var op="",ap=function(){var t=en;if(dE)return/rv:([^\);]+)(\)|;)/.exec(t);if(hE)return/Edge\/([\d\.]+)/.exec(t);if(go)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(gD)return/WebKit\/(\S+)/.exec(t);if(pD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ap&&(op=ap?ap[1]:""),go){var cp=fE();if(cp!=null&&cp>parseFloat(op)){vu=String(cp);break e}}vu=op}var mD={};function yD(){return fD(function(){let t=0;const e=sE(String(vu)).split("."),n=sE("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=np(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||np(i[2].length==0,s[2].length==0)||np(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var lp;if(le.document&&go){var pE=fE();lp=pE||parseInt(vu,10)||void 0}else lp=void 0;var _D=lp,vD=function(){if(!le.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{le.addEventListener("test",mu,e),le.removeEventListener("test",mu,e)}catch(n){}return t}();function Ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ht.prototype.h=function(){this.defaultPrevented=!0};function Ha(t,e){if(Ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(dE){e:{try{ip(e.nodeName);var i=!0;break e}catch(s){}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:wD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ha.Z.h.call(this)}}Lt(Ha,Ht);var wD={2:"touch",3:"pen",4:"mouse"};Ha.prototype.h=function(){Ha.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ka="closure_listenable_"+(1e6*Math.random()|0),ED=0;function ID(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++ED,this.ca=this.fa=!1}function wu(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Eu(t){this.src=t,this.g={},this.h=0}Eu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=hp(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ID(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function up(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=nE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(wu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var dp="closure_lm_"+(1e6*Math.random()|0),fp={};function gE(t,e,n,r,i){if(r&&r.once)return yE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)gE(t,e[s],n,r,i);return null}return n=yp(n),t&&t[Ka]?t.N(e,n,Wa(r)?!!r.capture:!!r,i):mE(t,e,n,!1,r,i)}function mE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Wa(i)?!!i.capture:!!i,a=gp(t);if(a||(t[dp]=a=new Eu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=bD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)vD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(vE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function bD(){function t(n){return e.call(t.src,t.listener,n)}var e=TD;return t}function yE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)yE(t,e[s],n,r,i);return null}return n=yp(n),t&&t[Ka]?t.O(e,n,Wa(r)?!!r.capture:!!r,i):mE(t,e,n,!0,r,i)}function _E(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)_E(t,e[s],n,r,i);else r=Wa(r)?!!r.capture:!!r,n=yp(n),t&&t[Ka]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=hp(s,n,r,i),-1<n&&(wu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=gp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hp(e,n,r,i)),(n=-1<t?e[t]:null)&&pp(n))}function pp(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[Ka])up(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(vE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=gp(e))?(up(n,t),n.h==0&&(n.src=null,e[dp]=null)):wu(t)}}}function vE(t){return t in fp?fp[t]:fp[t]="on"+t}function TD(t,e){if(t.ca)t=!0;else{e=new Ha(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&pp(t),t=n.call(r,e)}return t}function gp(t){return t=t[dp],t instanceof Eu?t:null}var mp="__closure_events_fn_"+(1e9*Math.random()>>>0);function yp(t){return typeof t=="function"?t:(t[mp]||(t[mp]=function(e){return t.handleEvent(e)}),t[mp])}function vt(){si.call(this),this.i=new Eu(this),this.P=this,this.I=null}Lt(vt,si);vt.prototype[Ka]=!0;vt.prototype.removeEventListener=function(t,e,n,r){_E(this,t,e,n,r)};function Mt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ht(e,t);else if(e instanceof Ht)e.target=e.target||t;else{var i=e;e=new Ht(r,t),uE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Iu(o,r,!0,e)&&i}if(o=e.g=t,i=Iu(o,r,!0,e)&&i,i=Iu(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Iu(o,r,!1,e)&&i}vt.prototype.M=function(){if(vt.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)wu(n[r]);delete t.g[e],t.h--}}this.I=null};vt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};vt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Iu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&up(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var _p=le.JSON.stringify;function SD(){var t=EE;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class CD{constructor(){this.h=this.g=null}add(e,n){const r=wE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var wE=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new AD,t=>t.reset());class AD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ND(t){le.setTimeout(()=>{throw t},0)}function vp(t,e){wp||RD(),Ep||(wp(),Ep=!0),EE.add(t,e)}var wp;function RD(){var t=le.Promise.resolve(void 0);wp=function(){t.then(kD)}}var Ep=!1,EE=new CD;function kD(){for(var t;t=SD();){try{t.h.call(t.g)}catch(n){ND(n)}var e=wE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ep=!1}function bu(t,e){vt.call(this),this.h=t||1,this.g=e||le,this.j=xt(this.kb,this),this.l=Date.now()}Lt(bu,vt);z=bu.prototype;z.da=!1;z.S=null;z.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Mt(this,"tick"),this.da&&(Ip(this),this.start()))}};z.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ip(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}z.M=function(){bu.Z.M.call(this),Ip(this),delete this.g};function bp(t,e,n){if(typeof t=="function")n&&(t=xt(t,n));else if(t&&typeof t.handleEvent=="function")t=xt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:le.setTimeout(t,e||0)}function IE(t){t.g=bp(()=>{t.g=null,t.i&&(t.i=!1,IE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class PD extends si{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:IE(this)}M(){super.M(),this.g&&(le.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function za(t){si.call(this),this.h=t,this.g={}}Lt(za,si);var bE=[];function TE(t,e,n,r){Array.isArray(n)||(n&&(bE[0]=n.toString()),n=bE);for(var i=0;i<n.length;i++){var s=gE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function SE(t){rp(t.g,function(e,n){this.g.hasOwnProperty(n)&&pp(e)},t),t.g={}}za.prototype.M=function(){za.Z.M.call(this),SE(this)};za.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Tu(){this.g=!0}Tu.prototype.Aa=function(){this.g=!1};function OD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function DD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function mo(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+LD(t,n)+(r?" "+r:"")})}function xD(t,e){t.info(function(){return"TIMEOUT: "+e})}Tu.prototype.info=function(){};function LD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return _p(n)}catch(a){return e}}var Zi={},CE=null;function Su(){return CE=CE||new vt}Zi.Ma="serverreachability";function AE(t){Ht.call(this,Zi.Ma,t)}Lt(AE,Ht);function Ga(t){const e=Su();Mt(e,new AE(e,t))}Zi.STAT_EVENT="statevent";function NE(t,e){Ht.call(this,Zi.STAT_EVENT,t),this.stat=e}Lt(NE,Ht);function tn(t){const e=Su();Mt(e,new NE(e,t))}Zi.Na="timingevent";function RE(t,e){Ht.call(this,Zi.Na,t),this.size=e}Lt(RE,Ht);function Qa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return le.setTimeout(function(){t()},e)}var Cu={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},kE={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Tp(){}Tp.prototype.h=null;function PE(t){return t.h||(t.h=t.i())}function OE(){}var Ya={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Sp(){Ht.call(this,"d")}Lt(Sp,Ht);function Cp(){Ht.call(this,"c")}Lt(Cp,Ht);var Ap;function Au(){}Lt(Au,Tp);Au.prototype.g=function(){return new XMLHttpRequest};Au.prototype.i=function(){return{}};Ap=new Au;function Ja(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new za(this),this.P=MD,t=sp?125:void 0,this.W=new bu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new DE}function DE(){this.i=null,this.g="",this.h=!1}var MD=45e3,Np={},Nu={};z=Ja.prototype;z.setTimeout=function(t){this.P=t};function Rp(t,e,n){t.K=1,t.v=Du(Rr(e)),t.s=n,t.U=!0,xE(t,null)}function xE(t,e){t.F=Date.now(),Xa(t),t.A=Rr(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),jE(n.h,"t",r),t.C=0,n=t.l.H,t.h=new DE,t.g=dI(t.l,n?e:null,!t.s),0<t.O&&(t.L=new PD(xt(t.Ia,t,t.g),t.O)),TE(t.V,t.g,"readystatechange",t.gb),e=t.H?cE(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Ga(1),OD(t.j,t.u,t.A,t.m,t.X,t.s)}z.gb=function(t){t=t.target;const e=this.L;e&&kr(t)==3?e.l():this.Ia(t)};z.Ia=function(t){try{if(t==this.g)e:{const u=kr(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||sp||this.g&&(this.h.h||this.g.ga()||tI(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Ga(3):Ga(2)),Ru(this);var n=this.g.ba();this.N=n;t:if(LE(this)){var r=tI(this.g);t="";var i=r.length,s=kr(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){es(this),Za(this);var o="";break t}this.h.i=new le.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,DD(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_u(a)){var l=a;break t}}l=null}if(n=l)mo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,kp(this,n);else{this.i=!1,this.o=3,tn(12),es(this),Za(this);break e}}this.U?(ME(this,u,o),sp&&this.i&&u==3&&(TE(this.V,this.W,"tick",this.fb),this.W.start())):(mo(this.j,this.m,o,null),kp(this,o)),u==4&&es(this),this.i&&!this.I&&(u==4?cI(this.l,this):(this.i=!1,Xa(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tn(12)):(this.o=0,tn(13)),es(this),Za(this)}}}catch(u){}finally{}};function LE(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function ME(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=FD(t,n),i==Nu){e==4&&(t.o=4,tn(14),r=!1),mo(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Np){t.o=4,tn(15),mo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else mo(t.j,t.m,i,null),kp(t,i);LE(t)&&i!=Nu&&i!=Np&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tn(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),$p(e),e.L=!0,tn(11))):(mo(t.j,t.m,n,"[Invalid Chunked Response]"),es(t),Za(t))}z.fb=function(){if(this.g){var t=kr(this.g),e=this.g.ga();this.C<e.length&&(Ru(this),ME(this,t,e),this.i&&t!=4&&Xa(this))}};function FD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Nu:(n=Number(e.substring(n,r)),isNaN(n)?Np:(r+=1,r+n>e.length?Nu:(e=e.substr(r,n),t.C=r+n,e)))}z.cancel=function(){this.I=!0,es(this)};function Xa(t){t.Y=Date.now()+t.P,FE(t,t.P)}function FE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Qa(xt(t.eb,t),e)}function Ru(t){t.B&&(le.clearTimeout(t.B),t.B=null)}z.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(xD(this.j,this.A),this.K!=2&&(Ga(3),tn(17)),es(this),this.o=2,Za(this)):FE(this,this.Y-t)};function Za(t){t.l.G==0||t.I||cI(t.l,t)}function es(t){Ru(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ip(t.W),SE(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function kp(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Dp(n.i,t))){if(n.I=t.N,!t.J&&Dp(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Vu(n),Fu(n);else break e;Bp(n),tn(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Qa(xt(n.ab,n),6e3));if(1>=KE(n.i)&&n.ka){try{n.ka()}catch(l){}n.ka=void 0}}else rs(n,11)}else if((t.J||n.g==t)&&Vu(n),!_u(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const u=l[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;!s.g&&(Zt(g,"spdy")||Zt(g,"quic")||Zt(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(xp(s,s.h),s.h=null))}if(r.D){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.sa=y,Ye(r.F,r.D,y))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=hI(r,r.H?r.la:null,r.W),o.J){zE(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ru(a),Xa(a)),r.g=o}else oI(r);0<n.l.length&&Uu(n)}else l[0]!="stop"&&l[0]!="close"||rs(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?rs(n,7):Up(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}Ga(4)}catch(l){}}function UD(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(Zf(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Pp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zf(t)||typeof t=="string")rE(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(Zf(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=UD(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function yo(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof yo)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}z=yo.prototype;z.R=function(){Op(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};z.T=function(){return Op(this),this.g.concat()};function Op(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];ts(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],ts(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}z.get=function(t,e){return ts(this.h,t)?this.h[t]:e};z.set=function(t,e){ts(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};z.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function ts(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var UE=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function VD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ns(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof ns){this.g=e!==void 0?e:t.g,ku(this,t.j),this.s=t.s,Pu(this,t.i),Ou(this,t.m),this.l=t.l,e=t.h;var n=new nc;n.i=e.i,e.g&&(n.g=new yo(e.g),n.h=e.h),VE(this,n),this.o=t.o}else t&&(n=String(t).match(UE))?(this.g=!!e,ku(this,n[1]||"",!0),this.s=ec(n[2]||""),Pu(this,n[3]||"",!0),Ou(this,n[4]),this.l=ec(n[5]||"",!0),VE(this,n[6]||"",!0),this.o=ec(n[7]||"")):(this.g=!!e,this.h=new nc(null,this.g))}ns.prototype.toString=function(){var t=[],e=this.j;e&&t.push(tc(e,BE,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(tc(e,BE,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(tc(n,n.charAt(0)=="/"?WD:jD,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",tc(n,KD)),t.join("")};function Rr(t){return new ns(t)}function ku(t,e,n){t.j=n?ec(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Pu(t,e,n){t.i=n?ec(e,!0):e}function Ou(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function VE(t,e,n){e instanceof nc?(t.h=e,zD(t.h,t.g)):(n||(e=tc(e,HD)),t.h=new nc(e,t.g))}function Ye(t,e,n){t.h.set(e,n)}function Du(t){return Ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function BD(t){return t instanceof ns?Rr(t):new ns(t,void 0)}function $D(t,e,n,r){var i=new ns(null,void 0);return t&&ku(i,t),e&&Pu(i,e),n&&Ou(i,n),r&&(i.l=r),i}function ec(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function tc(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,qD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var BE=/[#\/\?@]/g,jD=/[#\?:]/g,WD=/[#\?]/g,HD=/[#\?@]/g,KD=/#/g;function nc(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function oi(t){t.g||(t.g=new yo,t.h=0,t.i&&VD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}z=nc.prototype;z.add=function(t,e){oi(this),this.i=null,t=_o(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function $E(t,e){oi(t),e=_o(t,e),ts(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,ts(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Op(t)))}function qE(t,e){return oi(t),e=_o(t,e),ts(t.g.h,e)}z.forEach=function(t,e){oi(this),this.g.forEach(function(n,r){rE(n,function(i){t.call(e,i,r,this)},this)},this)};z.T=function(){oi(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};z.R=function(t){oi(this);var e=[];if(typeof t=="string")qE(this,t)&&(e=iE(e,this.g.get(_o(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=iE(e,t[n])}return e};z.set=function(t,e){return oi(this),this.i=null,t=_o(this,t),qE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};z.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function jE(t,e,n){$E(t,e),0<n.length&&(t.i=null,t.g.set(_o(t,e),tp(n)),t.h+=n.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function _o(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function zD(t,e){e&&!t.j&&(oi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&($E(this,r),jE(this,i,n))},t)),t.j=e}var GD=class{constructor(t,e){this.h=t,this.g=e}};function WE(t){this.l=t||QD,le.PerformanceNavigationTiming?(t=le.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(le.g&&le.g.Ea&&le.g.Ea()&&le.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QD=10;function HE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function KE(t){return t.h?1:t.g?t.g.size:0}function Dp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xp(t,e){t.g?t.g.add(e):t.h=e}function zE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}WE.prototype.cancel=function(){if(this.i=GE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function GE(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return tp(t.i)}function Lp(){}Lp.prototype.stringify=function(t){return le.JSON.stringify(t,void 0)};Lp.prototype.parse=function(t){return le.JSON.parse(t,void 0)};function YD(){this.g=new Lp}function JD(t,e,n){const r=n||"";try{Pp(t,function(i,s){let o=i;Wa(i)&&(o=_p(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function XD(t,e){const n=new Tu;if(le.Image){const r=new Image;r.onload=yu(xu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=yu(xu,n,r,"TestLoadImage: error",!1,e),r.onabort=yu(xu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=yu(xu,n,r,"TestLoadImage: timeout",!1,e),le.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function xu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function rc(t){this.l=t.$b||null,this.j=t.ib||!1}Lt(rc,Tp);rc.prototype.g=function(){return new Lu(this.l,this.j)};rc.prototype.i=function(t){return function(){return t}}({});function Lu(t,e){vt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Mp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Lt(Lu,vt);var Mp=0;z=Lu.prototype;z.open=function(t,e){if(this.readyState!=Mp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,sc(this)};z.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||le).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ic(this)),this.readyState=Mp};z.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,sc(this)),this.g&&(this.readyState=3,sc(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof le.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;QE(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function QE(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}z.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ic(this):sc(this),this.readyState==3&&QE(this)}};z.Ua=function(t){this.g&&(this.response=this.responseText=t,ic(this))};z.Ta=function(t){this.g&&(this.response=t,ic(this))};z.ha=function(){this.g&&ic(this)};function ic(t){t.readyState=4,t.l=null,t.j=null,t.A=null,sc(t)}z.setRequestHeader=function(t,e){this.v.append(t,e)};z.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function sc(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Lu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ZD=le.JSON.parse;function st(t){vt.call(this),this.headers=new yo,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=YE,this.K=this.L=!1}Lt(st,vt);var YE="",ex=/^https?$/i,tx=["POST","PUT"];z=st.prototype;z.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ap.g(),this.C=this.u?PE(this.u):PE(Ap),this.g.onreadystatechange=xt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){JE(this,s);return}t=n||"";const i=new yo(this.headers);r&&Pp(r,function(s,o){i.set(o,s)}),r=dD(i.T()),n=le.FormData&&t instanceof le.FormData,!(0<=nE(tx,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{eI(this),0<this.B&&((this.K=nx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=xt(this.pa,this)):this.A=bp(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){JE(this,s)}};function nx(t){return go&&yD()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function rx(t){return t.toLowerCase()=="content-type"}z.pa=function(){typeof Xf!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Mt(this,"timeout"),this.abort(8))};function JE(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,XE(t),Mu(t)}function XE(t){t.D||(t.D=!0,Mt(t,"complete"),Mt(t,"error"))}z.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Mt(this,"complete"),Mt(this,"abort"),Mu(this))};z.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mu(this,!0)),st.Z.M.call(this)};z.Fa=function(){this.s||(this.F||this.v||this.l?ZE(this):this.cb())};z.cb=function(){ZE(this)};function ZE(t){if(t.h&&typeof Xf!="undefined"&&(!t.C[1]||kr(t)!=4||t.ba()!=2)){if(t.v&&kr(t)==4)bp(t.Fa,0,t);else if(Mt(t,"readystatechange"),kr(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(UE)[1]||null;if(!i&&le.self&&le.self.location){var s=le.self.location.protocol;i=s.substr(0,s.length-1)}r=!ex.test(i?i.toLowerCase():"")}n=r}if(n)Mt(t,"complete"),Mt(t,"success");else{t.m=6;try{var o=2<kr(t)?t.g.statusText:""}catch(c){o=""}t.j=o+" ["+t.ba()+"]",XE(t)}}finally{Mu(t)}}}}function Mu(t,e){if(t.g){eI(t);const n=t.g,r=t.C[0]?mu:null;t.g=null,t.C=null,e||Mt(t,"ready");try{n.onreadystatechange=r}catch(i){}}}function eI(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(le.clearTimeout(t.A),t.A=null)}function kr(t){return t.g?t.g.readyState:0}z.ba=function(){try{return 2<kr(this)?this.g.status:-1}catch(t){return-1}};z.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}};z.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ZD(e)}};function tI(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case YE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}z.Da=function(){return this.m};z.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function ix(t){let e="";return rp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Fp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ix(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ye(t,e,n))}function oc(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function nI(t){this.za=0,this.l=[],this.h=new Tu,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=oc("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=oc("baseRetryDelayMs",5e3,t),this.$a=oc("retryDelaySeedMs",1e4,t),this.Ya=oc("forwardChannelMaxRetries",2,t),this.ra=oc("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new WE(t&&t.concurrentRequestLimit),this.Ca=new YD,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}z=nI.prototype;z.ma=8;z.G=1;function Up(t){if(rI(t),t.G==3){var e=t.V++,n=Rr(t.F);Ye(n,"SID",t.J),Ye(n,"RID",e),Ye(n,"TYPE","terminate"),ac(t,n),e=new Ja(t,t.h,e,void 0),e.K=2,e.v=Du(Rr(n)),n=!1,le.navigator&&le.navigator.sendBeacon&&(n=le.navigator.sendBeacon(e.v.toString(),"")),!n&&le.Image&&(new Image().src=e.v,n=!0),n||(e.g=dI(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Xa(e)}uI(t)}z.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}};function Fu(t){t.g&&($p(t),t.g.cancel(),t.g=null)}function rI(t){Fu(t),t.u&&(le.clearTimeout(t.u),t.u=null),Vu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&le.clearTimeout(t.m),t.m=null)}function Vp(t,e){t.l.push(new GD(t.Za++,e)),t.G==3&&Uu(t)}function Uu(t){HE(t.i)||t.m||(t.m=!0,vp(t.Ha,t),t.C=0)}function sx(t,e){return KE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=Qa(xt(t.Ha,t,e),lI(t,t.C)),t.C++,!0)}z.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ja(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=cE(s),uE(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=sI(this,i,e),n=Rr(this.F),Ye(n,"RID",t),Ye(n,"CVER",22),this.D&&Ye(n,"X-HTTP-Session-Id",this.D),ac(this,n),this.o&&s&&Fp(n,this.o,s),xp(this.i,i),this.Ra&&Ye(n,"TYPE","init"),this.ja?(Ye(n,"$req",e),Ye(n,"SID","null"),i.$=!0,Rp(i,n,null)):Rp(i,n,e),this.G=2}}else this.G==3&&(t?iI(this,t):this.l.length==0||HE(this.i)||iI(this))};function iI(t,e){var n;e?n=e.m:n=t.V++;const r=Rr(t.F);Ye(r,"SID",t.J),Ye(r,"RID",n),Ye(r,"AID",t.U),ac(t,r),t.o&&t.s&&Fp(r,t.o,t.s),n=new Ja(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=sI(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),xp(t.i,n),Rp(n,r,e)}function ac(t,e){t.j&&Pp({},function(n,r){Ye(e,r,n)})}function sI(t,e,n){n=Math.min(t.l.length,n);var r=t.j?xt(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const u=i[c].g;if(l-=s,0>l)s=Math.max(0,i[c].h-100),a=!1;else try{JD(u,o,"req"+l+"_")}catch(h){r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function oI(t){t.g||t.u||(t.Y=1,vp(t.Ga,t),t.A=0)}function Bp(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=Qa(xt(t.Ga,t),lI(t,t.A)),t.A++,!0)}z.Ga=function(){if(this.u=null,aI(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Qa(xt(this.bb,this),t)}};z.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,tn(10),Fu(this),aI(this))};function $p(t){t.B!=null&&(le.clearTimeout(t.B),t.B=null)}function aI(t){t.g=new Ja(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Rr(t.oa);Ye(e,"RID","rpc"),Ye(e,"SID",t.J),Ye(e,"CI",t.N?"0":"1"),Ye(e,"AID",t.U),ac(t,e),Ye(e,"TYPE","xmlhttp"),t.o&&t.s&&Fp(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Du(Rr(e)),n.s=null,n.U=!0,xE(n,t)}z.ab=function(){this.v!=null&&(this.v=null,Fu(this),Bp(this),tn(19))};function Vu(t){t.v!=null&&(le.clearTimeout(t.v),t.v=null)}function cI(t,e){var n=null;if(t.g==e){Vu(t),$p(t),t.g=null;var r=2}else if(Dp(t.i,e))n=e.D,zE(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Su(),Mt(r,new RE(r,n,e,i)),Uu(t)}else oI(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&sx(t,e)||r==2&&Bp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:rs(t,5);break;case 4:rs(t,10);break;case 3:rs(t,6);break;default:rs(t,2)}}}function lI(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function rs(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=xt(t.jb,t);n||(n=new ns("//www.google.com/images/cleardot.gif"),le.location&&le.location.protocol=="http"||ku(n,"https"),Du(n)),XD(n.toString(),r)}else tn(2);t.G=0,t.j&&t.j.va(e),uI(t),rI(t)}z.jb=function(t){t?(this.h.info("Successfully pinged google.com"),tn(2)):(this.h.info("Failed to ping google.com"),tn(1))};function uI(t){t.G=0,t.I=-1,t.j&&((GE(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,tp(t.l),t.l.length=0),t.j.ua())}function hI(t,e,n){let r=BD(n);if(r.i!="")e&&Pu(r,e+"."+r.i),Ou(r,r.m);else{const i=le.location;r=$D(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&rp(t.aa,function(i,s){Ye(r,s,i)}),e=t.D,n=t.sa,e&&n&&Ye(r,e,n),Ye(r,"VER",t.ma),ac(t,r),r}function dI(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new st(new rc({ib:!0})):new st(t.qa),e.L=t.H,e}function fI(){}z=fI.prototype;z.xa=function(){};z.wa=function(){};z.va=function(){};z.ua=function(){};z.Oa=function(){};function Bu(){if(go&&!(10<=Number(_D)))throw Error("Environmental error: no available transport.")}Bu.prototype.g=function(t,e){return new Tn(t,e)};function Tn(t,e){vt.call(this),this.g=new nI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!_u(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!_u(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new vo(this)}Lt(Tn,vt);Tn.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),vp(xt(t.hb,t,e))),tn(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=hI(t,null,t.W),Uu(t)};Tn.prototype.close=function(){Up(this.g)};Tn.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,Vp(this.g,e)}else this.v?(e={},e.__data__=_p(t),Vp(this.g,e)):Vp(this.g,t)};Tn.prototype.M=function(){this.g.j=null,delete this.j,Up(this.g),delete this.g,Tn.Z.M.call(this)};function pI(t){Sp.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Lt(pI,Sp);function gI(){Cp.call(this),this.status=1}Lt(gI,Cp);function vo(t){this.g=t}Lt(vo,fI);vo.prototype.xa=function(){Mt(this.g,"a")};vo.prototype.wa=function(t){Mt(this.g,new pI(t))};vo.prototype.va=function(t){Mt(this.g,new gI(t))};vo.prototype.ua=function(){Mt(this.g,"b")};Bu.prototype.createWebChannel=Bu.prototype.g;Tn.prototype.send=Tn.prototype.u;Tn.prototype.open=Tn.prototype.m;Tn.prototype.close=Tn.prototype.close;Cu.NO_ERROR=0;Cu.TIMEOUT=8;Cu.HTTP_ERROR=6;kE.COMPLETE="complete";OE.EventType=Ya;Ya.OPEN="a";Ya.CLOSE="b";Ya.ERROR="c";Ya.MESSAGE="d";vt.prototype.listen=vt.prototype.N;st.prototype.listenOnce=st.prototype.O;st.prototype.getLastError=st.prototype.La;st.prototype.getLastErrorCode=st.prototype.Da;st.prototype.getStatus=st.prototype.ba;st.prototype.getResponseJson=st.prototype.Qa;st.prototype.getResponseText=st.prototype.ga;st.prototype.send=st.prototype.ea;var ox=function(){return new Bu},ax=function(){return Su()},qp=Cu,cx=kE,lx=Zi,mI={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ux=rc,$u=OE,hx=st;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wo="9.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new fo("@firebase/firestore");function jp(){return ai.logLevel}function dx(t){ai.setLogLevel(t)}function M(t,...e){if(ai.logLevel<=Te.DEBUG){const n=e.map(Wp);ai.debug(`Firestore (${wo}): ${t}`,...n)}}function ot(t,...e){if(ai.logLevel<=Te.ERROR){const n=e.map(Wp);ai.error(`Firestore (${wo}): ${t}`,...n)}}function cc(t,...e){if(ai.logLevel<=Te.WARN){const n=e.map(Wp);ai.warn(`Firestore (${wo}): ${t}`,...n)}}function Wp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch(n){return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${wo}) INTERNAL ASSERTION FAILED: `+t;throw ot(e),new Error(e)}function ce(t,e){t||ee()}function fx(t,e){t||ee()}function $(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class px{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ft.UNAUTHENTICATED))}shutdown(){}}class gx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class mx{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new wt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{M("FirebaseCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(M("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(M("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new yI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Ft(e)}}class yx{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Ft.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class _x{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new yx(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.g(r),this.p=r=>n.writeSequenceNumber(r))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn.T=-1;class _I{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=vx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Eo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function vI(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new R(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Et(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new Et(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function is(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function EI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return lc.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof lc?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends lc{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new R(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const wx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ut extends lc{construct(e,n,r){return new Ut(e,n,r)}static isValidIdentifier(e){return wx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new R(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new R(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new R(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new R(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ut(n)}static emptyPath(){return new Ut([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.fields=e,e.sort(Ut.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Eo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ex(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new It(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new It(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const Ix=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ci(t){if(ce(!!t),typeof t=="string"){let e=0;const n=Ix.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:at(t.seconds),nanos:at(t.nanos)}}function at(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function bo(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function II(t){const e=t.mapValue.fields.__previous_value__;return Hp(e)?II(e):e}function uc(t){const e=ci(t.mapValue.fields.__local_write_time__.timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t){return t==null}function qu(t){return t===0&&1/t==-1/0}function bI(t){return typeof t=="number"&&Number.isInteger(t)&&!qu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(De.fromString(e))}static fromName(e){return new X(De.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new De(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hp(t)?4:10:ee()}function lr(t,e){const n=os(t);if(n!==os(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return uc(t).isEqual(uc(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ci(r.timestampValue),o=ci(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return bo(r.bytesValue).isEqual(bo(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return at(r.geoPointValue.latitude)===at(i.geoPointValue.latitude)&&at(r.geoPointValue.longitude)===at(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return at(r.integerValue)===at(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=at(r.doubleValue),o=at(i.doubleValue);return s===o?qu(s)===qu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Eo(t.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(wI(s)!==wI(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!lr(s[a],o[a])))return!1;return!0}(t,e);default:return ee()}}function hc(t,e){return(t.values||[]).find(n=>lr(n,e))!==void 0}function To(t,e){const n=os(t),r=os(e);if(n!==r)return we(n,r);switch(n){case 0:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=at(i.integerValue||i.doubleValue),a=at(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return TI(t.timestampValue,e.timestampValue);case 4:return TI(uc(t),uc(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(i,s){const o=bo(i),a=bo(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=we(o[c],a[c]);if(l!==0)return l}return we(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=we(at(i.latitude),at(s.latitude));return o!==0?o:we(at(i.longitude),at(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=To(o[c],a[c]);if(l)return l}return we(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),c=s.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=we(a[u],l[u]);if(h!==0)return h;const d=To(o[a[u]],c[l[u]]);if(d!==0)return d}return we(a.length,l.length)}(t.mapValue,e.mapValue);default:throw ee()}}function TI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=ci(t),r=ci(e),i=we(n.seconds,r.seconds);return i!==0?i:we(n.nanos,r.nanos)}function Kp(t){return zp(t)}function zp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ci(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?bo(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,X.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=zp(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${zp(r.fields[a])}`;return s+"}"}(t.mapValue):ee();var e,n}function ju(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gp(t){return!!t&&"integerValue"in t}function Qp(t){return!!t&&"arrayValue"in t}function SI(t){return!!t&&"nullValue"in t}function CI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wu(t){return!!t&&"mapValue"in t}function dc(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return is(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=dc(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=dc(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=dc(n)}setAll(e){let n=Ut.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=dc(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){is(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Kt(dc(this.value))}}function AI(t){const e=[];return is(t.fields,(n,r)=>{const i=new Ut([n]);if(Wu(r)){const s=AI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Io(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n,r,i,s){this.key=e,this.documentType=n,this.version=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new Je(e,0,fe.min(),Kt.empty(),0)}static newFoundDocument(e,n,r){return new Je(e,1,n,r,0)}static newNoDocument(e,n){return new Je(e,2,n,Kt.empty(),0)}static newUnknownDocument(e,n){return new Je(e,3,n,Kt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Je(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.A=null}}function NI(t,e=null,n=[],r=[],i=null,s=null,o=null){return new bx(t,e,n,r,i,s,o)}function fc(t){const e=$(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sx(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ss(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=zu(e.startAt)),e.endAt&&(n+="|ub:",n+=zu(e.endAt)),e.A=n}return e.A}function Tx(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Kp(r.value)}`;var r}).join(", ")}]`),ss(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+zu(t.startAt)),t.endAt&&(e+=", endAt: "+zu(t.endAt)),`Target(${e})`}function Hu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!Dx(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!lr(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!PI(t.startAt,e.startAt)&&PI(t.endAt,e.endAt)}function Ku(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class nn extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,r):new Cx(e,n,r):n==="array-contains"?new Rx(e,r):n==="in"?new kx(e,r):n==="not-in"?new Px(e,r):n==="array-contains-any"?new Ox(e,r):new nn(e,n,r)}static R(e,n,r){return n==="in"?new Ax(e,r):new Nx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(To(n,this.value)):n!==null&&os(this.value)===os(n)&&this.P(To(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Sx(t){return t.field.canonicalString()+t.op.toString()+Kp(t.value)}class Cx extends nn{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.P(n)}}class Ax extends nn{constructor(e,n){super(e,"in",n),this.keys=RI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Nx extends nn{constructor(e,n){super(e,"not-in",n),this.keys=RI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function RI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class Rx extends nn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qp(n)&&hc(n.arrayValue,this.value)}}class kx extends nn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&hc(this.value.arrayValue,n)}}class Px extends nn{constructor(e,n){super(e,"not-in",n)}matches(e){if(hc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!hc(this.value.arrayValue,n)}}class Ox extends nn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>hc(this.value.arrayValue,r))}}class pc{constructor(e,n){this.position=e,this.before=n}}function zu(t){return`${t.before?"b":"a"}:${t.position.map(e=>Kp(e)).join(",")}`}class So{constructor(e,n="asc"){this.field=e,this.dir=n}}function Dx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function kI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=To(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function PI(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!lr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.V=null,this.S=null,this.startAt,this.endAt}}function OI(t,e,n,r,i,s,o,a){return new Pr(t,e,n,r,i,s,o,a)}function Co(t){return new Pr(t)}function Gu(t){return!ss(t.limit)&&t.limitType==="F"}function Qu(t){return!ss(t.limit)&&t.limitType==="L"}function Yp(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Jp(t){for(const e of t.filters)if(e.v())return e.field;return null}function Xp(t){return t.collectionGroup!==null}function Ao(t){const e=$(t);if(e.V===null){e.V=[];const n=Jp(e),r=Yp(e);if(n!==null&&r===null)n.isKeyField()||e.V.push(new So(n)),e.V.push(new So(Ut.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.V.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new So(Ut.keyField(),s))}}}return e.V}function Mn(t){const e=$(t);if(!e.S)if(e.limitType==="F")e.S=NI(e.path,e.collectionGroup,Ao(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ao(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new So(s.field,o))}const r=e.endAt?new pc(e.endAt.position,!e.endAt.before):null,i=e.startAt?new pc(e.startAt.position,!e.startAt.before):null;e.S=NI(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.S}function DI(t,e,n){return new Pr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gc(t,e){return Hu(Mn(t),Mn(e))&&t.limitType===e.limitType}function xI(t){return`${fc(Mn(t))}|lt:${t.limitType}`}function Zp(t){return`Query(target=${Tx(Mn(t))}; limitType=${t.limitType})`}function mc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):X.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!kI(n.startAt,Ao(n),r)||n.endAt&&kI(n.endAt,Ao(n),r))}(t,e)}function LI(t){return(e,n)=>{let r=!1;for(const i of Ao(t)){const s=xx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function xx(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?To(a,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qu(e)?"-0":e}}function FI(t){return{integerValue:""+t}}function UI(t,e){return bI(e)?FI(e):MI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this._=void 0}}function Lx(t,e,n){return t instanceof No?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof as?BI(t,e):t instanceof cs?$I(t,e):function(r,i){const s=VI(r,i),o=qI(s)+qI(r.C);return Gp(s)&&Gp(r.C)?FI(o):MI(r.N,o)}(t,e)}function Mx(t,e,n){return t instanceof as?BI(t,e):t instanceof cs?$I(t,e):n}function VI(t,e){return t instanceof Ro?Gp(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class No extends Yu{}class as extends Yu{constructor(e){super(),this.elements=e}}function BI(t,e){const n=jI(e);for(const r of t.elements)n.some(i=>lr(i,r))||n.push(r);return{arrayValue:{values:n}}}class cs extends Yu{constructor(e){super(),this.elements=e}}function $I(t,e){let n=jI(e);for(const r of t.elements)n=n.filter(i=>!lr(i,r));return{arrayValue:{values:n}}}class Ro extends Yu{constructor(e,n){super(),this.N=e,this.C=n}}function qI(t){return at(t.integerValue||t.doubleValue)}function jI(t){return Qp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n){this.field=e,this.transform=n}}function Fx(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof as&&r instanceof as||n instanceof cs&&r instanceof cs?Eo(n.elements,r.elements,lr):n instanceof Ro&&r instanceof Ro?lr(n.C,r.C):n instanceof No&&r instanceof No}(t.transform,e.transform)}class Ux{constructor(e,n){this.version=e,this.transformResults=n}}class ct{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ct}static exists(e){return new ct(void 0,e)}static updateTime(e){return new ct(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ju(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xu{}function Vx(t,e,n){t instanceof _c?function(r,i,s){const o=r.value.clone(),a=zI(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof li?function(r,i,s){if(!Ju(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=zI(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(KI(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function eg(t,e,n){t instanceof _c?function(r,i,s){if(!Ju(r.precondition,i))return;const o=r.value.clone(),a=GI(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(HI(i),o).setHasLocalMutations()}(t,e,n):t instanceof li?function(r,i,s){if(!Ju(r.precondition,i))return;const o=GI(r.fieldTransforms,s,i),a=i.data;a.setAll(KI(r)),a.setAll(o),i.convertToFoundDocument(HI(i),a).setHasLocalMutations()}(t,e,n):function(r,i){Ju(r.precondition,i)&&i.convertToNoDocument(fe.min())}(t,e)}function Bx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=VI(r.transform,i||null);s!=null&&(n==null&&(n=Kt.empty()),n.set(r.field,s))}return n||null}function WI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Eo(n,r,(i,s)=>Fx(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function HI(t){return t.isFoundDocument()?t.version:fe.min()}class _c extends Xu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class li extends Xu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function KI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zI(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Mx(o,a,n[i]))}return r}function GI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Lx(s,o,e))}return r}class vc extends Xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class tg extends Xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,Se;function QI(t){switch(t){case E.OK:return ee();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0;default:return ee()}}function YI(t){if(t===void 0)return ot("GRPC error has no .code"),E.UNKNOWN;switch(t){case lt.OK:return E.OK;case lt.CANCELLED:return E.CANCELLED;case lt.UNKNOWN:return E.UNKNOWN;case lt.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case lt.INTERNAL:return E.INTERNAL;case lt.UNAVAILABLE:return E.UNAVAILABLE;case lt.UNAUTHENTICATED:return E.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case lt.NOT_FOUND:return E.NOT_FOUND;case lt.ALREADY_EXISTS:return E.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return E.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case lt.ABORTED:return E.ABORTED;case lt.OUT_OF_RANGE:return E.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return E.UNIMPLEMENTED;case lt.DATA_LOSS:return E.DATA_LOSS;default:return ee()}}(Se=lt||(lt={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){this.comparator=e,this.root=n||Vt.EMPTY}insert(e,n){return new ft(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Vt.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Vt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zu(this.root,e,this.comparator,!0)}}class Zu{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Vt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Vt.RED,this.left=i!=null?i:Vt.EMPTY,this.right=s!=null?s:Vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Vt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Vt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Vt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}Vt.EMPTY=null,Vt.RED=!0,Vt.BLACK=!1;Vt.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new JI(this.data.getIterator())}getIteratorFrom(e){return new JI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class JI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=new ft(X.comparator);function Fn(){return qx}const jx=new ft(X.comparator);function ng(){return jx}const Wx=new ft(X.comparator);function XI(){return Wx}const Hx=new et(X.comparator);function Me(...t){let e=Hx;for(const n of t)e=e.add(n);return e}const Kx=new et(we);function eh(){return Kx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Ec.createSynthesizedTargetChangeForCurrentChange(e,n)),new wc(fe.min(),r,eh(),Fn(),Me())}}class Ec{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Ec(It.EMPTY_BYTE_STRING,n,Me(),Me(),Me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n,r,i){this.k=e,this.removedTargetIds=n,this.key=r,this.$=i}}class ZI{constructor(e,n){this.targetId=e,this.O=n}}class eb{constructor(e,n,r=It.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class tb{constructor(){this.F=0,this.M=rb(),this.L=It.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=Me(),n=Me(),r=Me();return this.M.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ee()}}),new Ec(this.L,this.B,e,n,r)}G(){this.U=!1,this.M=rb()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class zx{constructor(e){this.tt=e,this.et=new Map,this.nt=Fn(),this.st=nb(),this.it=new et(we)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ct(e){this.forEachTarget(e,n=>{const r=this.ut(n);switch(e.state){case 0:this.ht(n)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(n);break;case 3:this.ht(n)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),r.j(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((r,i)=>{this.ht(i)&&n(i)})}ft(e){const n=e.targetId,r=e.O.count,i=this.dt(n);if(i){const s=i.target;if(Ku(s))if(r===0){const o=new X(s.path);this.at(n,o,Je.newNoDocument(o,fe.min()))}else ce(r===1);else this.wt(n)!==r&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((s,o)=>{const a=this.dt(o);if(a){if(s.current&&Ku(a.target)){const c=new X(a.target.path);this.nt.get(c)!==null||this.gt(o,c)||this.at(o,c,Je.newNoDocument(c,e))}s.K&&(n.set(o,s.W()),s.G())}});let r=Me();this.st.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.dt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))});const i=new wc(e,n,this.it,this.nt,r);return this.nt=Fn(),this.st=nb(),this.it=new et(we),i}ot(e,n){if(!this.ht(e))return;const r=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,r),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}at(e,n,r){if(!this.ht(e))return;const i=this.ut(e);this.gt(e,n)?i.H(n,1):i.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),r&&(this.nt=this.nt.insert(n,r))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new tb,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new et(we),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||M("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Et(e)}lt(e){this.et.set(e,new tb),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function nb(){return new ft(X.comparator)}function rb(){return new ft(X.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gx=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Qx=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Yx{constructor(e,n){this.databaseId=e,this.D=n}}function Ic(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ib(t,e){return t.D?e.toBase64():e.toUint8Array()}function Jx(t,e){return Ic(t,e.toTimestamp())}function bt(t){return ce(!!t),fe.fromTimestamp(function(e){const n=ci(e);return new Et(n.seconds,n.nanos)}(t))}function rg(t,e){return function(n){return new De(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function sb(t){const e=De.fromString(t);return ce(yb(e)),e}function bc(t,e){return rg(t.databaseId,e.path)}function ur(t,e){const n=sb(e);if(n.get(1)!==t.databaseId.projectId)throw new R(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new R(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(ab(n))}function ig(t,e){return rg(t.databaseId,e)}function ob(t){const e=sb(t);return e.length===4?De.emptyPath():ab(e)}function Tc(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ab(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function cb(t,e,n){return{name:bc(t,e),fields:n.value.mapValue.fields}}function lb(t,e,n){const r=ur(t,e.name),i=bt(e.updateTime),s=new Kt({mapValue:{fields:e.fields}}),o=Je.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Xx(t,e){return"found"in e?function(n,r){ce(!!r.found),r.found.name,r.found.updateTime;const i=ur(n,r.found.name),s=bt(r.found.updateTime),o=new Kt({mapValue:{fields:r.found.fields}});return Je.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){ce(!!r.missing),ce(!!r.readTime);const i=ur(n,r.missing),s=bt(r.readTime);return Je.newNoDocument(i,s)}(t,e):ee()}function Zx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,l){return c.D?(ce(l===void 0||typeof l=="string"),It.fromBase64String(l||"")):(ce(l===void 0||l instanceof Uint8Array),It.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:YI(c.code);return new R(l,c.message||"")}(o);n=new eb(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ur(t,r.document.name),s=bt(r.document.updateTime),o=new Kt({mapValue:{fields:r.document.fields}}),a=Je.newFoundDocument(i,s,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new th(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ur(t,r.document),s=r.readTime?bt(r.readTime):fe.min(),o=Je.newNoDocument(i,s),a=r.removedTargetIds||[];n=new th([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ur(t,r.document),s=r.removedTargetIds||[];n=new th([],s,i,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new $x(i),o=r.targetId;n=new ZI(o,s)}}return n}function nh(t,e){let n;if(e instanceof _c)n={update:cb(t,e.key,e.value)};else if(e instanceof vc)n={delete:bc(t,e.key)};else if(e instanceof li)n={update:cb(t,e.key,e.data),updateMask:oL(e.fieldMask)};else{if(!(e instanceof tg))return ee();n={verify:bc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof No)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof as)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof cs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ro)return{fieldPath:s.field.canonicalString(),increment:o.C};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Jx(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function ub(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?ct.updateTime(bt(i.updateTime)):i.exists!==void 0?ct.exists(i.exists):ct.none()}(e.currentDocument):ct.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)ce(o.setToServerValue==="REQUEST_TIME"),a=new No;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new as(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new cs(l)}else"increment"in o?a=new Ro(s,o.increment):ee();const c=Ut.fromServerFormat(o.fieldPath);return new yc(c,a)}(t,i)):[];if(e.update){e.update.name;const i=ur(t,e.update.name),s=new Kt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Io(c.map(l=>Ut.fromServerFormat(l)))}(e.updateMask);return new li(i,s,o,n,r)}return new _c(i,s,n,r)}if(e.delete){const i=ur(t,e.delete);return new vc(i,n)}if(e.verify){const i=ur(t,e.verify);return new tg(i,n)}return ee()}function eL(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?bt(r.updateTime):bt(i);return s.isEqual(fe.min())&&(s=bt(i)),new Ux(s,r.transformResults||[])}(n,e))):[]}function hb(t,e){return{documents:[ig(t,e.path)]}}function db(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ig(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ig(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const c=a.map(l=>function(u){if(u.op==="=="){if(CI(u.value))return{unaryFilter:{field:ko(u.field),op:"IS_NAN"}};if(SI(u.value))return{unaryFilter:{field:ko(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(CI(u.value))return{unaryFilter:{field:ko(u.field),op:"IS_NOT_NAN"}};if(SI(u.value))return{unaryFilter:{field:ko(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ko(u.field),op:rL(u.op),value:u.value}}}(l));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(c=>function(l){return{field:ko(l.field),direction:nL(l.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,c){return a.D||ss(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=gb(e.startAt)),e.endAt&&(n.structuredQuery.endAt=gb(e.endAt)),n}function fb(t){let e=ob(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=pb(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new So(Po(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,ss(h)?null:h}(n.limit));let c=null;n.startAt&&(c=mb(n.startAt));let l=null;return n.endAt&&(l=mb(n.endAt)),OI(e,i,o,s,a,"F",c,l)}function tL(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ee()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function pb(t){return t?t.unaryFilter!==void 0?[sL(t)]:t.fieldFilter!==void 0?[iL(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>pb(e)).reduce((e,n)=>e.concat(n)):ee():[]}function gb(t){return{before:t.before,values:t.position}}function mb(t){const e=!!t.before,n=t.values||[];return new pc(n,e)}function nL(t){return Gx[t]}function rL(t){return Qx[t]}function ko(t){return{fieldPath:t.canonicalString()}}function Po(t){return Ut.fromServerFormat(t.fieldPath)}function iL(t){return nn.create(Po(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return ee()}}(t.fieldFilter.op),t.fieldFilter.value)}function sL(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Po(t.unaryFilter.field);return nn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Po(t.unaryFilter.field);return nn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Po(t.unaryFilter.field);return nn.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Po(t.unaryFilter.field);return nn.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return ee()}}function oL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function yb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=_b(e)),e=aL(t.get(n),e);return _b(e)}function aL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function _b(t){return t+""}function Or(t){const e=t.length;if(ce(e>=2),e===2)return ce(t.charAt(0)===""&&t.charAt(1)===""),De.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&ee(),t.charAt(o+1)){case"":const a=t.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:ee()}s=o+2}return new De(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e,n){this.seconds=e,this.nanoseconds=n}}class Cn{constructor(e,n,r){this.ownerId=e,this.allowTabSynchronization=n,this.leaseTimestampMs=r}}Cn.store="owner",Cn.key="owner";class ui{constructor(e,n,r){this.userId=e,this.lastAcknowledgedBatchId=n,this.lastStreamToken=r}}ui.store="mutationQueues",ui.keyPath="userId";class Ke{constructor(e,n,r,i,s){this.userId=e,this.batchId=n,this.localWriteTimeMs=r,this.baseMutations=i,this.mutations=s}}Ke.store="mutations",Ke.keyPath="batchId",Ke.userMutationsIndex="userMutationsIndex",Ke.userMutationsKeyPath=["userId","batchId"];class zt{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,n){return[e,Gn(n)]}static key(e,n,r){return[e,Gn(n),r]}}zt.store="documentMutations",zt.PLACEHOLDER=new zt;class lL{constructor(e,n){this.path=e,this.readTime=n}}class uL{constructor(e,n){this.path=e,this.version=n}}class tt{constructor(e,n,r,i,s,o){this.unknownDocument=e,this.noDocument=n,this.document=r,this.hasCommittedMutations=i,this.readTime=s,this.parentPath=o}}tt.store="remoteDocuments",tt.readTimeIndex="readTimeIndex",tt.readTimeIndexPath="readTime",tt.collectionReadTimeIndex="collectionReadTimeIndex",tt.collectionReadTimeIndexPath=["parentPath","readTime"];class hr{constructor(e){this.byteSize=e}}hr.store="remoteDocumentGlobal",hr.key="remoteDocumentGlobalKey";class dn{constructor(e,n,r,i,s,o,a){this.targetId=e,this.canonicalId=n,this.readTime=r,this.resumeToken=i,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=o,this.query=a}}dn.store="targets",dn.keyPath="targetId",dn.queryTargetsIndexName="queryTargetsIndex",dn.queryTargetsKeyPath=["canonicalId","targetId"];class Bt{constructor(e,n,r){this.targetId=e,this.path=n,this.sequenceNumber=r}}Bt.store="targetDocuments",Bt.keyPath=["targetId","path"],Bt.documentTargetsIndex="documentTargetsIndex",Bt.documentTargetsKeyPath=["path","targetId"];class An{constructor(e,n,r,i){this.highestTargetId=e,this.highestListenSequenceNumber=n,this.lastRemoteSnapshotVersion=r,this.targetCount=i}}An.key="targetGlobalKey",An.store="targetGlobal";class ls{constructor(e,n){this.collectionId=e,this.parent=n}}ls.store="collectionParents",ls.keyPath=["collectionId","parent"];class Dr{constructor(e,n,r,i){this.clientId=e,this.updateTimeMs=n,this.networkEnabled=r,this.inForeground=i}}Dr.store="clientMetadata",Dr.keyPath="clientId";class Oo{constructor(e,n,r){this.bundleId=e,this.createTime=n,this.version=r}}Oo.store="bundles",Oo.keyPath="bundleId";class Do{constructor(e,n,r){this.name=e,this.readTime=n,this.bundledQuery=r}}Do.store="namedQueries",Do.keyPath="name";const hL=[ui.store,Ke.store,zt.store,tt.store,dn.store,Cn.store,An.store,Bt.store,Dr.store,hr.store,ls.store,Oo.store,Do.store],vb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.Tt=new wt,this.transaction.oncomplete=()=>{this.Tt.resolve()},this.transaction.onabort=()=>{n.error?this.Tt.reject(new Sc(e,n.error)):this.Tt.resolve()},this.transaction.onerror=r=>{const i=sg(r.target.error);this.Tt.reject(new Sc(e,i))}}static open(e,n,r,i){try{return new rh(n,e.transaction(i,r))}catch(s){throw new Sc(n,s)}}get It(){return this.Tt.promise}abort(e){e&&this.Tt.reject(e),this.aborted||(M("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const n=this.transaction.objectStore(e);return new fL(n)}}class Qn{constructor(e,n,r){this.name=e,this.version=n,this.At=r,Qn.Rt(He())===12.2&&ot("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return M("SimpleDb","Removing database:",e),hs(window.indexedDB.deleteDatabase(e)).toPromise()}static bt(){if(!uu())return!1;if(Qn.Pt())return!0;const e=He(),n=Qn.Rt(e),r=0<n&&n<10,i=Qn.vt(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static Pt(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.Vt)==="YES"}static St(e,n){return e.store(n)}static Rt(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static vt(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async Dt(e){return this.db||(M("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Sc(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new R(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new R(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Sc(e,o))},i.onupgradeneeded=s=>{M("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.At.Ct(o,i.transaction,s.oldVersion,this.version).next(()=>{M("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Nt&&(this.db.onversionchange=n=>this.Nt(n)),this.db}xt(e){this.Nt=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.Dt(e);const a=rh.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).catch(l=>(a.abort(l),A.reject(l))).toPromise();return c.catch(()=>{}),await a.It,c}catch(a){const c=a.name!=="FirebaseError"&&o<3;if(M("SimpleDb","Transaction failed with error:",a.message,"Retrying:",c),this.close(),!c)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class dL{constructor(e){this.kt=e,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(e){this.kt=e}done(){this.$t=!0}Mt(e){this.Ot=e}delete(){return hs(this.kt.delete())}}class Sc extends R{constructor(e,n){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function us(t){return t.name==="IndexedDbTransactionError"}class fL{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(M("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(M("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),hs(r)}add(e){return M("SimpleDb","ADD",this.store.name,e,e),hs(this.store.add(e))}get(e){return hs(this.store.get(e)).next(n=>(n===void 0&&(n=null),M("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return M("SimpleDb","DELETE",this.store.name,e),hs(this.store.delete(e))}count(){return M("SimpleDb","COUNT",this.store.name),hs(this.store.count())}Lt(e,n){const r=this.cursor(this.options(e,n)),i=[];return this.Bt(r,(s,o)=>{i.push(o)}).next(()=>i)}Ut(e,n){M("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.qt=!1;const i=this.cursor(r);return this.Bt(i,(s,o,a)=>a.delete())}Kt(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.Bt(i,n)}jt(e){const n=this.cursor({});return new A((r,i)=>{n.onerror=s=>{const o=sg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}Bt(e,n){const r=[];return new A((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new dL(a),l=n(a.primaryKey,a.value,c);if(l instanceof A){const u=l.catch(h=>(c.done(),A.reject(h)));r.push(u)}c.isDone?i():c.Ft===null?a.continue():a.continue(c.Ft)}}).next(()=>A.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.qt?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function hs(t){return new A((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=sg(r.target.error);n(i)}})}let Eb=!1;function sg(t){const e=Qn.Rt(He());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new R("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Eb||(Eb=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib extends wb{constructor(e,n){super(),this.Qt=e,this.currentSequenceNumber=n}}function fn(t,e){const n=$(t);return Qn.St(n.Qt,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Vx(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&eg(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&eg(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(fe.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Me())}isEqual(e){return this.batchId===e.batchId&&Eo(this.mutations,e.mutations,(n,r)=>WI(n,r))&&Eo(this.baseMutations,e.baseMutations,(n,r)=>WI(n,r))}}class ag{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=XI();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ag(e,n,r,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,r,i,s=fe.min(),o=fe.min(),a=It.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new hi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(e){this.Wt=e}}function cg(t,e){if(e.document)return lb(t.Wt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const n=X.fromSegments(e.noDocument.path),r=Lo(e.noDocument.readTime),i=Je.newNoDocument(n,r);return e.hasCommittedMutations?i.setHasCommittedMutations():i}if(e.unknownDocument){const n=X.fromSegments(e.unknownDocument.path),r=Lo(e.unknownDocument.version);return Je.newUnknownDocument(n,r)}return ee()}function Tb(t,e,n){const r=lg(n),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const s=function(a,c){return{name:bc(a,c.key),fields:c.data.value.mapValue.fields,updateTime:Ic(a,c.version.toTimestamp())}}(t.Wt,e),o=e.hasCommittedMutations;return new tt(null,null,s,o,r,i)}if(e.isNoDocument()){const s=e.key.path.toArray(),o=xo(e.version),a=e.hasCommittedMutations;return new tt(null,new lL(s,o),null,a,r,i)}if(e.isUnknownDocument()){const s=e.key.path.toArray(),o=xo(e.version);return new tt(new uL(s,o),null,null,!0,r,i)}return ee()}function lg(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Sb(t){const e=new Et(t[0],t[1]);return fe.fromTimestamp(e)}function xo(t){const e=t.toTimestamp();return new cL(e.seconds,e.nanoseconds)}function Lo(t){const e=new Et(t.seconds,t.nanoseconds);return fe.fromTimestamp(e)}function Mo(t,e){const n=(e.baseMutations||[]).map(s=>ub(t.Wt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>ub(t.Wt,s)),i=Et.fromMillis(e.localWriteTimeMs);return new og(e.batchId,i,n,r)}function Cc(t){const e=Lo(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Lo(t.lastLimboFreeSnapshotVersion):fe.min();let r;var i;return t.query.documents!==void 0?(ce((i=t.query).documents.length===1),r=Mn(Co(ob(i.documents[0])))):r=function(s){return Mn(fb(s))}(t.query),new hi(r,t.targetId,0,t.lastListenSequenceNumber,e,n,It.fromBase64String(t.resumeToken))}function Cb(t,e){const n=xo(e.snapshotVersion),r=xo(e.lastLimboFreeSnapshotVersion);let i;i=Ku(e.target)?hb(t.Wt,e.target):db(t.Wt,e.target);const s=e.resumeToken.toBase64();return new dn(e.targetId,fc(e.target),n,s,e.sequenceNumber,r,i)}function ug(t){const e=fb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?DI(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL{getBundleMetadata(e,n){return Ab(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:Lo(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return Ab(e).put({bundleId:(r=n).id,createTime:xo(bt(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return Nb(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:ug(i.bundledQuery),readTime:Lo(i.readTime)};var i})}saveNamedQuery(e,n){return Nb(e).put(function(r){return{name:r.name,readTime:xo(bt(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function Ab(t){return fn(t,Oo.store)}function Nb(t){return fn(t,Do.store)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(){this.Gt=new hg}addToCollectionParentIndex(e,n){return this.Gt.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.Gt.getEntries(n))}}class hg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new et(De.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new et(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(){this.zt=new hg}addToCollectionParentIndex(e,n){if(!this.zt.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.zt.add(n)});const s={collectionId:r,parent:Gn(i)};return Rb(e).put(s)}return A.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[vI(n),""],!1,!0);return Rb(e).Lt(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Or(o.parent))}return r})}}function Rb(t){return fn(t,ls.store)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class pn{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new pn(e,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t,e,n){const r=t.store(Ke.store),i=t.store(zt.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Kt({range:o},(u,h,d)=>(a++,d.delete()));s.push(c.next(()=>{ce(a===1)}));const l=[];for(const u of n.mutations){const h=zt.key(e,u.key.path,n.batchId);s.push(i.delete(h)),l.push(u.key)}return A.waitFor(s).next(()=>l)}function ih(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw ee();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn.DEFAULT_COLLECTION_PERCENTILE=10,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pn.DEFAULT=new pn(41943040,pn.DEFAULT_COLLECTION_PERCENTILE,pn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pn.DISABLED=new pn(-1,0,0);class dg{constructor(e,n,r,i){this.userId=e,this.N=n,this.Ht=r,this.referenceDelegate=i,this.Jt={}}static Yt(e,n,r,i){ce(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new dg(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return di(e).Kt({index:Ke.userMutationsIndex,range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Fo(e),o=di(e);return o.add({}).next(a=>{ce(typeof a=="number");const c=new og(a,n,r,i),l=function(d,f,g){const y=g.baseMutations.map(w=>nh(d.Wt,w)),_=g.mutations.map(w=>nh(d.Wt,w));return new Ke(f,g.batchId,g.localWriteTime.toMillis(),y,_)}(this.N,this.userId,c),u=[];let h=new et((d,f)=>we(d.canonicalString(),f.canonicalString()));for(const d of i){const f=zt.key(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),u.push(o.put(l)),u.push(s.put(f,zt.PLACEHOLDER))}return h.forEach(d=>{u.push(this.Ht.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Jt[a]=c.keys()}),A.waitFor(u).next(()=>c)})}lookupMutationBatch(e,n){return di(e).get(n).next(r=>r?(ce(r.userId===this.userId),Mo(this.N,r)):null)}Xt(e,n){return this.Jt[n]?A.resolve(this.Jt[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Jt[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return di(e).Kt({index:Ke.userMutationsIndex,range:i},(o,a,c)=>{a.userId===this.userId&&(ce(a.batchId>=r),s=Mo(this.N,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return di(e).Kt({index:Ke.userMutationsIndex,range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return di(e).Lt(Ke.userMutationsIndex,n).next(r=>r.map(i=>Mo(this.N,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=zt.prefixForPath(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Fo(e).Kt({range:i},(o,a,c)=>{const[l,u,h]=o,d=Or(u);if(l===this.userId&&n.path.isEqual(d))return di(e).get(h).next(f=>{if(!f)throw ee();ce(f.userId===this.userId),s.push(Mo(this.N,f))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(we);const i=[];return n.forEach(s=>{const o=zt.prefixForPath(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=Fo(e).Kt({range:a},(l,u,h)=>{const[d,f,g]=l,y=Or(f);d===this.userId&&s.path.isEqual(y)?r=r.add(g):h.done()});i.push(c)}),A.waitFor(i).next(()=>this.Zt(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=zt.prefixForPath(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new et(we);return Fo(e).Kt({range:o},(c,l,u)=>{const[h,d,f]=c,g=Or(d);h===this.userId&&r.isPrefixOf(g)?g.length===i&&(a=a.add(f)):u.done()}).next(()=>this.Zt(e,a))}Zt(e,n){const r=[],i=[];return n.forEach(s=>{i.push(di(e).get(s).next(o=>{if(o===null)throw ee();ce(o.userId===this.userId),r.push(Mo(this.N,o))}))}),A.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return Pb(e.Qt,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.te(n.batchId)}),A.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}te(e){delete this.Jt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return A.resolve();const r=IDBKeyRange.lowerBound(zt.prefixForUser(this.userId)),i=[];return Fo(e).Kt({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=Or(s[1]);i.push(c)}else a.done()}).next(()=>{ce(i.length===0)})})}containsKey(e,n){return Ob(e,this.userId,n)}ee(e){return Db(e).get(this.userId).next(n=>n||new ui(this.userId,-1,""))}}function Ob(t,e,n){const r=zt.prefixForPath(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Fo(t).Kt({range:s,qt:!0},(a,c,l)=>{const[u,h,d]=a;u===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function di(t){return fn(t,Ke.store)}function Fo(t){return fn(t,zt.store)}function Db(t){return fn(t,ui.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new ds(0)}static ie(){return new ds(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(e,n){this.referenceDelegate=e,this.N=n}allocateTargetId(e){return this.re(e).next(n=>{const r=new ds(n.highestTargetId);return n.highestTargetId=r.next(),this.oe(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.re(e).next(n=>fe.fromTimestamp(new Et(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.re(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.re(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.oe(e,i)))}addTargetData(e,n){return this.ae(e,n).next(()=>this.re(e).next(r=>(r.targetCount+=1,this.ce(n,r),this.oe(e,r))))}updateTargetData(e,n){return this.ae(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Uo(e).delete(n.targetId)).next(()=>this.re(e)).next(r=>(ce(r.targetCount>0),r.targetCount-=1,this.oe(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Uo(e).Kt((o,a)=>{const c=Cc(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>A.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Uo(e).Kt((r,i)=>{const s=Cc(i);n(s)})}re(e){return xb(e).get(An.key).next(n=>(ce(n!==null),n))}oe(e,n){return xb(e).put(An.key,n)}ae(e,n){return Uo(e).put(Cb(this.N,n))}ce(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.re(e).next(n=>n.targetCount)}getTargetData(e,n){const r=fc(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Uo(e).Kt({range:i,index:dn.queryTargetsIndexName},(o,a,c)=>{const l=Cc(a);Hu(n,l.target)&&(s=l,c.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=fi(e);return n.forEach(o=>{const a=Gn(o.path);i.push(s.put(new Bt(r,a))),i.push(this.referenceDelegate.addReference(e,r,o))}),A.waitFor(i)}removeMatchingKeys(e,n,r){const i=fi(e);return A.forEach(n,s=>{const o=Gn(s.path);return A.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=fi(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=fi(e);let s=Me();return i.Kt({range:r,qt:!0},(o,a,c)=>{const l=Or(o[1]),u=new X(l);s=s.add(u)}).next(()=>s)}containsKey(e,n){const r=Gn(n.path),i=IDBKeyRange.bound([r],[vI(r)],!1,!0);let s=0;return fi(e).Kt({index:Bt.documentTargetsIndex,qt:!0,range:i},([o,a],c,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}Et(e,n){return Uo(e).get(n).next(r=>r?Cc(r):null)}}function Uo(t){return fn(t,dn.store)}function xb(t){return fn(t,An.store)}function fi(t){return fn(t,Bt.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fs(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==vb)throw t;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb([t,e],[n,r]){const i=we(t,n);return i===0?we(e,r):i}class _L{constructor(e){this.ue=e,this.buffer=new et(Lb),this.he=0}le(){return++this.he}fe(e){const n=[e,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Lb(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class vL{constructor(e,n){this.garbageCollector=e,this.asyncQueue=n,this.de=!1,this.we=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this._e(e)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return this.we!==null}_e(e){const n=this.de?3e5:6e4;M("LruGarbageCollector",`Garbage collection scheduled in ${n}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",n,async()=>{this.we=null,this.de=!0;try{await e.collectGarbage(this.garbageCollector)}catch(r){us(r)?M("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r):await fs(r)}await this._e(e)})}}class wL{constructor(e,n){this.me=e,this.params=n}calculateTargetCount(e,n){return this.me.ge(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return A.resolve(Sn.T);const r=new _L(n);return this.me.forEachTarget(e,i=>r.fe(i.sequenceNumber)).next(()=>this.me.ye(e,i=>r.fe(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.me.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.me.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(kb)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),kb):this.pe(e,n))}getCacheSize(e){return this.me.getCacheSize(e)}pe(e,n){let r,i,s,o,a,c,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),jp()<=Te.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(l-c)+`ms
Total Duration: ${l-u}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new wL(r,i)}(this,n)}ge(e){const n=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Ee(e){let n=0;return this.ye(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}ye(e,n){return this.Te(e,(r,i)=>n(i))}addReference(e,n,r){return sh(e,r)}removeReference(e,n,r){return sh(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return sh(e,n)}Ie(e,n){return function(r,i){let s=!1;return Db(r).jt(o=>Ob(r,o,i).next(a=>(a&&(s=!0),A.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Te(e,(o,a)=>{if(a<=n){const c=this.Ie(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o),fi(e).delete([0,Gn(o.path)])))});i.push(c)}}).next(()=>A.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return sh(e,n)}Te(e,n){const r=fi(e);let i,s=Sn.T;return r.Kt({index:Bt.documentTargetsIndex},([o,a],{path:c,sequenceNumber:l})=>{o===0?(s!==Sn.T&&n(new X(Or(i)),s),s=l,i=c):s=Sn.T}).next(()=>{s!==Sn.T&&n(new X(Or(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function sh(t,e){return fi(t).put(function(n,r){return new Bt(0,Gn(n.path),r)}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){is(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return EI(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(){this.changes=new Vo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:fe.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:Je.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(e,n){this.N=e,this.Ht=n}addEntry(e,n,r){return pi(e).put(oh(n),r)}removeEntry(e,n){const r=pi(e),i=oh(n);return r.delete(i)}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Ae(e,r)))}getEntry(e,n){return pi(e).get(oh(n)).next(r=>this.Re(n,r))}be(e,n){return pi(e).get(oh(n)).next(r=>({document:this.Re(n,r),size:ih(r)}))}getEntries(e,n){let r=Fn();return this.Pe(e,n,(i,s)=>{const o=this.Re(i,s);r=r.insert(i,o)}).next(()=>r)}ve(e,n){let r=Fn(),i=new ft(X.comparator);return this.Pe(e,n,(s,o)=>{const a=this.Re(s,o);r=r.insert(s,a),i=i.insert(s,ih(o))}).next(()=>({documents:r,Ve:i}))}Pe(e,n,r){if(n.isEmpty())return A.resolve();const i=IDBKeyRange.bound(n.first().path.toArray(),n.last().path.toArray()),s=n.getIterator();let o=s.getNext();return pi(e).Kt({range:i},(a,c,l)=>{const u=X.fromSegments(a);for(;o&&X.comparator(o,u)<0;)r(o,null),o=s.getNext();o&&o.isEqual(u)&&(r(o,c),o=s.hasNext()?s.getNext():null),o?l.Mt(o.path.toArray()):l.done()}).next(()=>{for(;o;)r(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,n,r){let i=Fn();const s=n.path.length+1,o={};if(r.isEqual(fe.min())){const a=n.path.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=n.path.toArray(),c=lg(r);o.range=IDBKeyRange.lowerBound([a,c],!0),o.index=tt.collectionReadTimeIndex}return pi(e).Kt(o,(a,c,l)=>{if(a.length!==s)return;const u=cg(this.N,c);n.path.isPrefixOf(u.key.path)?mc(n,u)&&(i=i.insert(u.key,u)):l.done()}).next(()=>i)}newChangeBuffer(e){return new bL(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Fb(e).get(hr.key).next(n=>(ce(!!n),n))}Ae(e,n){return Fb(e).put(hr.key,n)}Re(e,n){if(n){const r=cg(this.N,n);if(!(r.isNoDocument()&&r.version.isEqual(fe.min())))return r}return Je.newInvalidDocument(e)}}class bL extends Mb{constructor(e,n){super(),this.Se=e,this.trackRemovals=n,this.De=new Vo(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new et((s,o)=>we(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.De.get(s);if(o.document.isValidDocument()){const c=Tb(this.Se.N,o.document,this.getReadTime(s));i=i.add(s.path.popLast()),r+=ih(c)-a,n.push(this.Se.addEntry(e,s,c))}else if(r-=a,this.trackRemovals){const c=Tb(this.Se.N,Je.newNoDocument(s,fe.min()),this.getReadTime(s));n.push(this.Se.addEntry(e,s,c))}else n.push(this.Se.removeEntry(e,s))}),i.forEach(s=>{n.push(this.Se.Ht.addToCollectionParentIndex(e,s))}),n.push(this.Se.updateMetadata(e,r)),A.waitFor(n)}getFromCache(e,n){return this.Se.be(e,n).next(r=>(this.De.set(n,r.size),r.document))}getAllFromCache(e,n){return this.Se.ve(e,n).next(({documents:r,Ve:i})=>(i.forEach((s,o)=>{this.De.set(s,o)}),r))}}function Fb(t){return fn(t,hr.store)}function pi(t){return fn(t,tt.store)}function oh(t){return t.path.toArray()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TL{constructor(e){this.N=e}Ct(e,n,r,i){ce(r<i&&r>=0&&i<=11);const s=new rh("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore(Cn.store)}(e),function(a){a.createObjectStore(ui.store,{keyPath:ui.keyPath}),a.createObjectStore(Ke.store,{keyPath:Ke.keyPath,autoIncrement:!0}).createIndex(Ke.userMutationsIndex,Ke.userMutationsKeyPath,{unique:!0}),a.createObjectStore(zt.store)}(e),Ub(e),function(a){a.createObjectStore(tt.store)}(e));let o=A.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore(Bt.store),a.deleteObjectStore(dn.store),a.deleteObjectStore(An.store)}(e),Ub(e)),o=o.next(()=>function(a){const c=a.store(An.store),l=new An(0,0,fe.min().toTimestamp(),0);return c.put(An.key,l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store(Ke.store).Lt().next(l=>{a.deleteObjectStore(Ke.store),a.createObjectStore(Ke.store,{keyPath:Ke.keyPath,autoIncrement:!0}).createIndex(Ke.userMutationsIndex,Ke.userMutationsKeyPath,{unique:!0});const u=c.store(Ke.store),h=l.map(d=>u.put(d));return A.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore(Dr.store,{keyPath:Dr.keyPath})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ce(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore(hr.store)}(e),this.Ne(s)))),r<7&&i>=7&&(o=o.next(()=>this.xe(s))),r<8&&i>=8&&(o=o.next(()=>this.ke(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const c=a.objectStore(tt.store);c.createIndex(tt.readTimeIndex,tt.readTimeIndexPath,{unique:!1}),c.createIndex(tt.collectionReadTimeIndex,tt.collectionReadTimeIndexPath,{unique:!1})}(n)})),r<10&&i>=10&&(o=o.next(()=>this.$e(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(Oo.store,{keyPath:Oo.keyPath})})(e),function(a){a.createObjectStore(Do.store,{keyPath:Do.keyPath})}(e)})),o}Ne(e){let n=0;return e.store(tt.store).Kt((r,i)=>{n+=ih(i)}).next(()=>{const r=new hr(n);return e.store(hr.store).put(hr.key,r)})}Ce(e){const n=e.store(ui.store),r=e.store(Ke.store);return n.Lt().next(i=>A.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.Lt(Ke.userMutationsIndex,o).next(a=>A.forEach(a,c=>{ce(c.userId===s.userId);const l=Mo(this.N,c);return Pb(e,s.userId,l).next(()=>{})}))}))}xe(e){const n=e.store(Bt.store),r=e.store(tt.store);return e.store(An.store).get(An.key).next(i=>{const s=[];return r.Kt((o,a)=>{const c=new De(o),l=function(u){return[0,Gn(u)]}(c);s.push(n.get(l).next(u=>u?A.resolve():(h=>n.put(new Bt(0,Gn(h),i.highestListenSequenceNumber)))(c)))}).next(()=>A.waitFor(s))})}ke(e,n){e.createObjectStore(ls.store,{keyPath:ls.keyPath});const r=n.store(ls.store),i=new hg,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Gn(c)})}};return n.store(tt.store).Kt({qt:!0},(o,a)=>{const c=new De(o);return s(c.popLast())}).next(()=>n.store(zt.store).Kt({qt:!0},([o,a,c],l)=>{const u=Or(a);return s(u.popLast())}))}$e(e){const n=e.store(dn.store);return n.Kt((r,i)=>{const s=Cc(i),o=Cb(this.N,s);return n.put(o)})}}function Ub(t){t.createObjectStore(Bt.store,{keyPath:Bt.keyPath}).createIndex(Bt.documentTargetsIndex,Bt.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(dn.store,{keyPath:dn.keyPath}).createIndex(dn.queryTargetsIndexName,dn.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(An.store)}const fg="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class pg{constructor(e,n,r,i,s,o,a,c,l,u){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Oe=s,this.window=o,this.document=a,this.Fe=l,this.Me=u,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=h=>Promise.resolve(),!pg.bt())throw new R(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new EL(this,i),this.We=n+"main",this.N=new bb(c),this.Ge=new Qn(this.We,11,new TL(this.N)),this.ze=new yL(this.referenceDelegate,this.N),this.Ht=new mL,this.He=function(h,d){return new IL(h,d)}(this.N,this.Ht),this.Je=new pL,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,u===!1&&ot("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new R(E.FAILED_PRECONDITION,fg);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ze.getHighestSequenceNumber(e))}).then(e=>{this.Le=new Sn(e,this.Fe)}).then(()=>{this.Be=!0}).catch(e=>(this.Ge&&this.Ge.close(),Promise.reject(e)))}nn(e){return this.Qe=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ge.xt(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Xe()}))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ah(e).put(new Dr(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.sn(e).next(n=>{n||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)))})}).next(()=>this.rn(e)).next(n=>this.isPrimary&&!n?this.on(e).next(()=>!1):!!n&&this.an(e).next(()=>!0))).catch(e=>{if(us(e))return M("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return M("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable(()=>this.Qe(e)),this.isPrimary=e})}sn(e){return Ac(e).get(Cn.key).next(n=>A.resolve(this.cn(n)))}un(e){return ah(e).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=fn(n,Dr.store);return r.Lt().next(i=>{const s=this.fn(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return A.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ye)for(const n of e)this.Ye.removeItem(this.dn(n.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Xe().then(()=>this.hn()).then(()=>this.en()))}cn(e){return!!e&&e.ownerId===this.clientId}rn(e){return this.Me?A.resolve(!0):Ac(e).get(Cn.key).next(n=>{if(n!==null&&this.ln(n.leaseTimestampMs,5e3)&&!this.wn(n.ownerId)){if(this.cn(n)&&this.networkEnabled)return!0;if(!this.cn(n)){if(!n.allowTabSynchronization)throw new R(E.FAILED_PRECONDITION,fg);return!1}}return!(!this.networkEnabled||!this.inForeground)||ah(e).Lt().next(r=>this.fn(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&M("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[Cn.store,Dr.store],e=>{const n=new Ib(e,Sn.T);return this.on(n).next(()=>this.un(n))}),this.Ge.close(),this.yn()}fn(e,n){return e.filter(r=>this.ln(r.updateTimeMs,n)&&!this.wn(r.clientId))}pn(){return this.runTransaction("getActiveClients","readonly",e=>ah(e).Lt().next(n=>this.fn(n,18e5).map(r=>r.clientId)))}get started(){return this.Be}getMutationQueue(e){return dg.Yt(e,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(e,n,r){M("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite";let s;return this.Ge.runTransaction(e,i,hL,o=>(s=new Ib(o,this.Le?this.Le.next():Sn.T),n==="readwrite-primary"?this.sn(s).next(a=>!!a||this.rn(s)).next(a=>{if(!a)throw ot(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)),new R(E.FAILED_PRECONDITION,vb);return r(s)}).next(a=>this.an(s).next(()=>a)):this.En(s).next(()=>r(s)))).then(o=>(s.raiseOnCommittedEvent(),o))}En(e){return Ac(e).get(Cn.key).next(n=>{if(n!==null&&this.ln(n.leaseTimestampMs,5e3)&&!this.wn(n.ownerId)&&!this.cn(n)&&!(this.Me||this.allowTabSynchronization&&n.allowTabSynchronization))throw new R(E.FAILED_PRECONDITION,fg)})}an(e){const n=new Cn(this.clientId,this.allowTabSynchronization,Date.now());return Ac(e).put(Cn.key,n)}static bt(){return Qn.bt()}on(e){const n=Ac(e);return n.get(Cn.key).next(r=>this.cn(r)?(M("IndexedDbPersistence","Releasing primary lease."),n.delete(Cn.key)):A.resolve())}ln(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(ot(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ze(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.qe=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Xe()))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground=this.document.visibilityState==="visible")}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ue=()=>{this._n(),GP()&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(e){var n;try{const r=((n=this.Ye)===null||n===void 0?void 0:n.getItem(this.dn(e)))!==null;return M("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return ot("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(e){ot("Failed to set zombie client id.",e)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch(e){}}dn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ac(t){return fn(t,Cn.store)}function ah(t){return fn(t,Dr.store)}function gg(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(e,n){this.progress=e,this.Tn=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,n,r){this.He=e,this.In=n,this.Ht=r}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Rn(e,n,r))}Rn(e,n,r){return this.He.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}bn(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Pn(e,n){return this.He.getEntries(e,n).next(r=>this.vn(e,r).next(()=>r))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return X.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Vn(e,n.path):Xp(n)?this.Sn(e,n,r):this.Dn(e,n,r)}Vn(e,n){return this.An(e,new X(n)).next(r=>{let i=ng();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Sn(e,n,r){const i=n.collectionGroup;let s=ng();return this.Ht.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const c=function(l,u){return new Pr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.Dn(e,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}Dn(e,n,r){let i,s;return this.He.getDocumentsMatchingQuery(e,n,r).next(o=>(i=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Cn(e,s,i).next(a=>{i=a;for(const c of s)for(const l of c.mutations){const u=l.key;let h=i.get(u);h==null&&(h=Je.newInvalidDocument(u),i=i.insert(u,h)),eg(l,h,c.localWriteTime),h.isFoundDocument()||(i=i.remove(u))}}))).next(()=>(i.forEach((o,a)=>{mc(n,a)||(i=i.remove(o))}),i))}Cn(e,n,r){let i=Me();for(const o of n)for(const a of o.mutations)a instanceof li&&r.get(a.key)===null&&(i=i.add(a.key));let s=r;return this.He.getEntries(e,i).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(s=s.insert(a,c))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Nn=r,this.xn=i}static kn(e,n){let r=Me(),i=Me();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new mg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(fe.min())?this.Fn(e,n):this.On.Pn(e,i).next(s=>{const o=this.Mn(n,s);return(Gu(n)||Qu(n))&&this.Ln(n.limitType,o,i,r)?this.Fn(e,n):(jp()<=Te.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Zp(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Mn(e,n){let r=new et(LI(e));return n.forEach((i,s)=>{mc(e,s)&&(r=r.add(s))}),r}Ln(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(e,n){return jp()<=Te.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Zp(n)),this.On.getDocumentsMatchingQuery(e,n,fe.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e,n,r,i){this.persistence=e,this.Bn=n,this.N=i,this.Un=new ft(we),this.qn=new Vo(s=>fc(s),Hu),this.Kn=fe.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new Vb(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function $b(t,e,n,r){return new CL(t,e,n,r)}async function qb(t,e){const n=$(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(c=>(a=c,r=n.persistence.getMutationQueue(e),i=new Vb(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(c=>{const l=[],u=[];let h=Me();for(const d of a){l.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}for(const d of c){u.push(d.batchId);for(const f of d.mutations)h=h.add(f.key)}return i.Pn(o,h).next(d=>({Wn:d,removedBatchIds:l,addedBatchIds:u}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function AL(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let d=A.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(a,f)).next(g=>{const y=c.docVersions.get(f);ce(y!==null),g.version.compareTo(y)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&l.addEntry(g,c.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,u))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.In.performConsistencyCheck(r)).next(()=>n.Qn.Pn(r,i))})}function jb(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function NL(t,e){const n=$(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const a=[];e.targetChanges.forEach((l,u)=>{const h=i.get(u);if(!h)return;a.push(n.ze.removeMatchingKeys(s,l.removedDocuments,u).next(()=>n.ze.addMatchingKeys(s,l.addedDocuments,u)));const d=l.resumeToken;if(d.approximateByteSize()>0){const f=h.withResumeToken(d,r).withSequenceNumber(s.currentSequenceNumber);i=i.insert(u,f),function(g,y,_){return ce(y.resumeToken.approximateByteSize()>0),g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(h,f,l)&&a.push(n.ze.updateTargetData(s,f))}});let c=Fn();if(e.documentUpdates.forEach((l,u)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(Wb(s,o,e.documentUpdates,r,void 0).next(l=>{c=l})),!r.isEqual(fe.min())){const l=n.ze.getLastRemoteSnapshotVersion(s).next(u=>n.ze.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.Qn.vn(s,c)).next(()=>c)}).then(s=>(n.Un=i,s))}function Wb(t,e,n,r,i){let s=Me();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=Fn();return n.forEach((c,l)=>{const u=o.get(c),h=(i==null?void 0:i.get(c))||r;l.isNoDocument()&&l.version.isEqual(fe.min())?(e.removeEntry(c,h),a=a.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l,h),a=a.insert(c,l)):M("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),a})}function RL(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(r,e)))}function Bo(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.ze.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.ze.allocateTargetId(r).next(o=>(i=new hi(e,o,0,r.currentSequenceNumber),n.ze.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Un.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Un=n.Un.insert(r.targetId,r),n.qn.set(e,r.targetId)),r})}async function $o(t,e,n){const r=$(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!us(o))throw o;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function ch(t,e,n){const r=$(t);let i=fe.min(),s=Me();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=$(a),h=u.qn.get(l);return h!==void 0?A.resolve(u.Un.get(h)):u.ze.getTargetData(c,l)}(r,o,Mn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Bn.getDocumentsMatchingQuery(o,e,n?i:fe.min(),n?s:Me())).next(a=>({documents:a,Gn:s})))}function Hb(t,e){const n=$(t),r=$(n.ze),i=n.Un.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.Et(s,e).next(o=>o?o.target:null))}function Kb(t){const e=$(t);return e.persistence.runTransaction("Get new document changes","readonly",n=>function(r,i,s){const o=$(r);let a=Fn(),c=lg(s);const l=pi(i),u=IDBKeyRange.lowerBound(c,!0);return l.Kt({index:tt.readTimeIndex,range:u},(h,d)=>{const f=cg(o.N,d);a=a.insert(f.key,f),c=d.readTime}).next(()=>({Tn:a,readTime:Sb(c)}))}(e.jn,n,e.Kn)).then(({Tn:n,readTime:r})=>(e.Kn=r,n))}async function kL(t){const e=$(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",n=>function(r){const i=pi(r);let s=fe.min();return i.Kt({index:tt.readTimeIndex,reverse:!0},(o,a,c)=>{a.readTime&&(s=Sb(a.readTime)),c.done()}).next(()=>s)}(n)).then(n=>{e.Kn=n})}async function PL(t,e,n,r){const i=$(t);let s=Me(),o=Fn(),a=XI();for(const u of n){const h=e.zn(u.metadata.name);u.document&&(s=s.add(h)),o=o.insert(h,e.Hn(u)),a=a.insert(h,e.Jn(u.metadata.readTime))}const c=i.jn.newChangeBuffer({trackRemovals:!0}),l=await Bo(i,function(u){return Mn(Co(De.fromString(`__bundle__/docs/${u}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>Wb(u,c,o,fe.min(),a).next(h=>(c.apply(u),h)).next(h=>i.ze.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.ze.addMatchingKeys(u,s,l.targetId)).next(()=>i.Qn.vn(u,h)).next(()=>h)))}async function OL(t,e,n=Me()){const r=await Bo(t,Mn(ug(e.bundledQuery))),i=$(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=bt(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Je.saveNamedQuery(s,e);const a=r.withResumeToken(It.EMPTY_BYTE_STRING,o);return i.Un=i.Un.insert(a.targetId,a),i.ze.updateTargetData(s,a).next(()=>i.ze.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.ze.addMatchingKeys(s,n,r.targetId)).next(()=>i.Je.saveNamedQuery(s,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return A.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var r;return this.Yn.set(n.id,{id:(r=n).id,version:r.version,createTime:bt(r.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:ug(r.bundledQuery),readTime:bt(r.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(){this.Zn=new et(Tt.ts),this.es=new et(Tt.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Tt(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Tt(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}cs(e){const n=new X(new De([])),r=new Tt(n,e),i=new Tt(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new X(new De([])),r=new Tt(n,e),i=new Tt(n,e+1);let s=Me();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Tt(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Tt{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return X.comparator(e.key,n.key)||we(e.ls,n.ls)}static ns(e,n){return we(e.ls,n.ls)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new et(Tt.ts)}checkEmpty(e){return A.resolve(this.In.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new og(s,n,r,i);this.In.push(o);for(const a of i)this.ds=this.ds.add(new Tt(a.key,s)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this._s(r),s=i<0?0:i;return A.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return A.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Tt(n,0),i=new Tt(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this.ws(o.ls);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(we);return n.forEach(i=>{const s=new Tt(i,0),o=new Tt(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),A.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const o=new Tt(new X(s),0);let a=new et(we);return this.ds.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.ls)),!0)},o),A.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this.ws(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.ys(n.batchId,"removed")===0),this.In.shift();let r=this.ds;return A.forEach(n.mutations,i=>{const s=new Tt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,n){const r=new Tt(n,0),i=this.ds.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.In.length,A.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LL{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new ft(X.comparator),this.size=0}addEntry(e,n,r){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.ps(n);return this.docs=this.docs.insert(i,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.clone():Je.newInvalidDocument(n))}getEntries(e,n){let r=Fn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.clone():Je.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r){let i=Fn();const s=new X(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||mc(n,c)&&(i=i.insert(c.key,c.clone()))}return A.resolve(i)}Es(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ML(this)}getSize(e){return A.resolve(this.size)}}class ML extends Mb{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.document.isValidDocument()?n.push(this.Se.addEntry(e,i.document,this.getReadTime(r))):this.Se.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FL{constructor(e){this.persistence=e,this.Ts=new Vo(n=>fc(n),Hu),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Is=0,this.As=new yg,this.targetCount=0,this.Rs=ds.se()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Is&&(this.Is=n),A.resolve()}ae(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new ds(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.ae(n),A.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UL{constructor(e,n){this.bs={},this.Le=new Sn(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new FL(this),this.Ht=new gL,this.He=function(r,i){return new LL(r,i)}(this.Ht,r=>this.referenceDelegate.Ps(r)),this.N=new bb(n),this.Je=new DL(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new xL(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,r){M("MemoryPersistence","Starting transaction:",e);const i=new VL(this.Le.next());return this.referenceDelegate.vs(),r(i).next(s=>this.referenceDelegate.Vs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ss(e,n){return A.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class VL extends wb{constructor(e){super(),this.currentSequenceNumber=e}}class _g{constructor(e){this.persistence=e,this.Ds=new yg,this.Cs=null}static Ns(e){return new _g(e)}get xs(){if(this.Cs)return this.Cs;throw ee()}addReference(e,n,r){return this.Ds.addReference(r,n),this.xs.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Ds.removeReference(r,n),this.xs.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),A.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(i=>this.xs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.xs,r=>{const i=X.fromPath(r);return this.ks(e,i).next(s=>{s||n.removeEntry(i)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return A.or([()=>A.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t,e){return`firestore_clients_${t}_${e}`}function Gb(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function vg(t,e){return`firestore_targets_${t}_${e}`}class lh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static $s(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new R(i.error.code,i.error.message))),o?new lh(e,n,i.state,s):(ot("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Nc{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static $s(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new R(r.error.code,r.error.message))),s?new Nc(e,r.state,i):(ot("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class uh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static $s(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=eh();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=bI(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new uh(e,s):(ot("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class wg{constructor(e,n){this.clientId=e,this.onlineState=n}static $s(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new wg(n.clientId,n.onlineState):(ot("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Eg{constructor(){this.activeTargetIds=eh()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ig{constructor(e,n,r,i,s){this.window=e,this.Oe=n,this.persistenceKey=r,this.Ls=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new ft(we),this.started=!1,this.Ks=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.js=zb(this.persistenceKey,this.Ls),this.Qs=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new Eg),this.Ws=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Hs=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Js=function(a){return`firestore_bundle_loaded_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.pn();for(const r of e){if(r===this.Ls)continue;const i=this.getItem(zb(this.persistenceKey,r));if(i){const s=uh.$s(r,i);s&&(this.qs=this.qs.insert(s.clientId,s))}}this.Ys();const n=this.storage.getItem(this.Hs);if(n){const r=this.Xs(n);r&&this.Zs(r)}for(const r of this.Ks)this.Us(r);this.Ks=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Qs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(e){let n=!1;return this.qs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.ei(e,"pending")}updateMutationState(e,n,r){this.ei(e,n,r),this.ni(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(vg(this.persistenceKey,e));if(r){const i=Nc.$s(e,r);i&&(n=i.state)}}return this.si.Fs(e),this.Ys(),n}removeLocalQueryTarget(e){this.si.Ms(e),this.Ys()}isLocalQueryTarget(e){return this.si.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(vg(this.persistenceKey,e))}updateQueryState(e,n,r){this.ii(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.ni(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.ri(e)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return M("SharedClientState","READ",e,n),n}setItem(e,n){M("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){M("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Us(e){const n=e;if(n.storageArea===this.storage){if(M("SharedClientState","EVENT",n.key,n.newValue),n.key===this.js)return void ot("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ws.test(n.key)){if(n.newValue==null){const r=this.ai(n.key);return this.ci(r,null)}{const r=this.ui(n.key,n.newValue);if(r)return this.ci(r.clientId,r)}}else if(this.Gs.test(n.key)){if(n.newValue!==null){const r=this.hi(n.key,n.newValue);if(r)return this.li(r)}}else if(this.zs.test(n.key)){if(n.newValue!==null){const r=this.fi(n.key,n.newValue);if(r)return this.di(r)}}else if(n.key===this.Hs){if(n.newValue!==null){const r=this.Xs(n.newValue);if(r)return this.Zs(r)}}else if(n.key===this.Qs){const r=function(i){let s=Sn.T;if(i!=null)try{const o=JSON.parse(i);ce(typeof o=="number"),s=o}catch(o){ot("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Sn.T&&this.sequenceNumberHandler(r)}else if(n.key===this.Js)return this.syncEngine.wi()}}else this.Ks.push(n)})}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(e,n,r){const i=new lh(this.currentUser,e,n,r),s=Gb(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Os())}ni(e){const n=Gb(this.persistenceKey,this.currentUser,e);this.removeItem(n)}ri(e){const n={clientId:this.Ls,onlineState:e};this.storage.setItem(this.Hs,JSON.stringify(n))}ii(e,n,r){const i=vg(this.persistenceKey,e),s=new Nc(e,n,r);this.setItem(i,s.Os())}oi(){this.setItem(this.Js,"value-not-used")}ai(e){const n=this.Ws.exec(e);return n?n[1]:null}ui(e,n){const r=this.ai(e);return uh.$s(r,n)}hi(e,n){const r=this.Gs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return lh.$s(new Ft(s),i,n)}fi(e,n){const r=this.zs.exec(e),i=Number(r[1]);return Nc.$s(i,n)}Xs(e){return wg.$s(e)}async li(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine._i(e.batchId,e.state,e.error);M("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}di(e){return this.syncEngine.mi(e.targetId,e.state,e.error)}ci(e,n){const r=n?this.qs.insert(e,n):this.qs.remove(e),i=this.ti(this.qs),s=this.ti(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.gi(o,a).then(()=>{this.qs=r})}Zs(e){this.qs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ti(e){let n=eh();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class Qb{constructor(){this.yi=new Eg,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,r){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new Eg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{Ei(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $L={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qL{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jL extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,r,i){const s=this.Bi(e,n);M("RestConnection","Sending: ",s,r);const o={};return this.Ui(o,i),this.qi(e,s,o,r).then(a=>(M("RestConnection","Received: ",a),a),a=>{throw cc("RestConnection",`${e} failed with error: `,a,"url: ",s,"request:",r),a})}Ki(e,n,r,i){return this.Li(e,n,r,i)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+wo,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const r in n.authHeaders)n.authHeaders.hasOwnProperty(r)&&(e[r]=n.authHeaders[r])}Bi(e,n){const r=$L[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,r,i){return new Promise((s,o)=>{const a=new hx;a.listenOnce(cx.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case qp.NO_ERROR:const l=a.getResponseJson();M("Connection","XHR received:",JSON.stringify(l)),s(l);break;case qp.TIMEOUT:M("Connection",'RPC "'+e+'" timed out'),o(new R(E.DEADLINE_EXCEEDED,"Request time out"));break;case qp.HTTP_ERROR:const u=a.getStatus();if(M("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(f){const g=f.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(g)>=0?g:E.UNKNOWN}(h.status);o(new R(d,h.message))}else o(new R(E.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new R(E.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{M("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,r,15)})}ji(e,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=ox(),s=ax(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new ux({})),this.Ui(o.initMessageHeaders,n),lu()||Va()||KP()||Hf()||zP()||Wf()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");M("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let l=!1,u=!1;const h=new qL({vi:f=>{u?M("Connection","Not sending because WebChannel is closed:",f):(l||(M("Connection","Opening WebChannel transport."),c.open(),l=!0),M("Connection","WebChannel sending:",f),c.send(f))},Vi:()=>c.close()}),d=(f,g,y)=>{f.listen(g,_=>{try{y(_)}catch(w){setTimeout(()=>{throw w},0)}})};return d(c,$u.EventType.OPEN,()=>{u||M("Connection","WebChannel transport opened.")}),d(c,$u.EventType.CLOSE,()=>{u||(u=!0,M("Connection","WebChannel transport closed"),h.$i())}),d(c,$u.EventType.ERROR,f=>{u||(u=!0,cc("Connection","WebChannel transport errored:",f),h.$i(new R(E.UNAVAILABLE,"The operation could not be completed")))}),d(c,$u.EventType.MESSAGE,f=>{var g;if(!u){const y=f.data[0];ce(!!y);const _=y,w=_.error||((g=_[0])===null||g===void 0?void 0:g.error);if(w){M("Connection","WebChannel received error:",w);const S=w.status;let L=function(G){const se=lt[G];if(se!==void 0)return YI(se)}(S),U=w.message;L===void 0&&(L=E.INTERNAL,U="Unknown error status: "+S+" with message "+w.message),u=!0,h.$i(new R(L,U)),c.close()}else M("Connection","WebChannel received:",y),h.Oi(y)}}),d(s,lx.STAT_EVENT,f=>{f.stat===mI.PROXY?M("Connection","Detected buffering proxy"):f.stat===mI.NOPROXY&&M("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(){return typeof window!="undefined"?window:null}function hh(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(t){return new Yx(t,!0)}class bg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Oe=e,this.timerId=n,this.Qi=r,this.Wi=i,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),i=Math.max(0,n-r);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n,r,i,s,o){this.Oe=e,this.er=r,this.nr=i,this.credentialsProvider=s,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new bg(e,n)}ar(){return this.state===1||this.state===2||this.state===4}cr(){return this.state===2}start(){this.state!==3?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&this.ir===null&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,n){this._r(),this.rr.cancel(),this.sr++,e!==3?this.rr.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(ot(n.toString()),ot("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):n&&n.code===E.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),n=this.sr;this.credentialsProvider.getToken().then(r=>{this.sr===n&&this.yr(r)},r=>{e(()=>{const i=new R(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.pr(i)})})}yr(e){const n=this.gr(this.sr);this.stream=this.Er(e),this.stream.Si(()=>{n(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(r=>{n(()=>this.pr(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return n=>{this.Oe.enqueueAndForget(()=>this.sr===e?n():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WL extends Xb{constructor(e,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle",n,r,s),this.N=i}Er(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const n=Zx(this.N,e),r=function(i){if(!("targetChange"in i))return fe.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?fe.min():s.readTime?bt(s.readTime):fe.min()}(e);return this.listener.Tr(n,r)}Ir(e){const n={};n.database=Tc(this.N),n.addTarget=function(i,s){let o;const a=s.target;return o=Ku(a)?{documents:hb(i,a)}:{query:db(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=ib(i,s.resumeToken):s.snapshotVersion.compareTo(fe.min())>0&&(o.readTime=Ic(i,s.snapshotVersion.toTimestamp())),o}(this.N,e);const r=tL(this.N,e);r&&(n.labels=r),this.wr(n)}Ar(e){const n={};n.database=Tc(this.N),n.removeTarget=e,this.wr(n)}}class HL extends Xb{constructor(e,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle",n,r,s),this.N=i,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(e){return this.nr.ji("Write",e)}onMessage(e){if(ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const n=eL(e.writeResults,e.commitTime),r=bt(e.commitTime);return this.listener.vr(r,n)}return ce(!e.writeResults||e.writeResults.length===0),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=Tc(this.N),this.wr(e)}Pr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>nh(this.N,r))};this.wr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL extends class{}{constructor(e,n,r){super(),this.credentials=e,this.nr=n,this.N=r,this.Dr=!1}Cr(){if(this.Dr)throw new R(E.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,r){return this.Cr(),this.credentials.getToken().then(i=>this.nr.Li(e,n,r,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new R(E.UNKNOWN,i.toString())})}Ki(e,n,r){return this.Cr(),this.credentials.getToken().then(i=>this.nr.Ki(e,n,r,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new R(E.UNKNOWN,i.toString())})}terminate(){this.Dr=!0}}class zL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){this.Nr===0&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(e){this.state==="Online"?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,e==="Online"&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(ot(n),this.$r=!1):M("OnlineStateTracker",n)}Br(){this.kr!==null&&(this.kr.cancel(),this.kr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=s,this.Qr.Ei(o=>{r.enqueueAndForget(async()=>{gi(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=$(a);c.Kr.add(4),await qo(c),c.Wr.set("Unknown"),c.Kr.delete(4),await kc(c)}(this))})}),this.Wr=new zL(r,i)}}async function kc(t){if(gi(t))for(const e of t.jr)await e(!0)}async function qo(t){for(const e of t.jr)await e(!1)}function dh(t,e){const n=$(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),Cg(n)?Sg(n):Wo(n).cr()&&Tg(n,e))}function Pc(t,e){const n=$(t),r=Wo(n);n.qr.delete(e),r.cr()&&Zb(n,e),n.qr.size===0&&(r.cr()?r.lr():gi(n)&&n.Wr.set("Unknown"))}function Tg(t,e){t.Gr.Y(e.targetId),Wo(t).Ir(e)}function Zb(t,e){t.Gr.Y(e),Wo(t).Ar(e)}function Sg(t){t.Gr=new zx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),Wo(t).start(),t.Wr.Or()}function Cg(t){return gi(t)&&!Wo(t).ar()&&t.qr.size>0}function gi(t){return $(t).Kr.size===0}function eT(t){t.Gr=void 0}async function QL(t){t.qr.forEach((e,n)=>{Tg(t,e)})}async function YL(t,e){eT(t),Cg(t)?(t.Wr.Lr(e),Sg(t)):t.Wr.set("Unknown")}async function JL(t,e,n){if(t.Wr.set("Online"),e instanceof eb&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.qr.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.qr.delete(o),r.Gr.removeTarget(o))}(t,e)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fh(t,r)}else if(e instanceof th?t.Gr.rt(e):e instanceof ZI?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(fe.min()))try{const r=await jb(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Gr._t(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.qr.get(c);l&&i.qr.set(c,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.qr.get(a);if(!c)return;i.qr.set(a,c.withResumeToken(It.EMPTY_BYTE_STRING,c.snapshotVersion)),Zb(i,a);const l=new hi(c.target,a,1,c.sequenceNumber);Tg(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await fh(t,r)}}async function fh(t,e,n){if(!us(e))throw e;t.Kr.add(1),await qo(t),t.Wr.set("Offline"),n||(n=()=>jb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await kc(t)})}function tT(t,e){return e().catch(n=>fh(t,n,e))}async function jo(t){const e=$(t),n=mi(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;XL(e);)try{const i=await RL(e.localStore,r);if(i===null){e.Ur.length===0&&n.lr();break}r=i.batchId,ZL(e,i)}catch(i){await fh(e,i)}nT(e)&&rT(e)}function XL(t){return gi(t)&&t.Ur.length<10}function ZL(t,e){t.Ur.push(e);const n=mi(t);n.cr()&&n.br&&n.Pr(e.mutations)}function nT(t){return gi(t)&&!mi(t).ar()&&t.Ur.length>0}function rT(t){mi(t).start()}async function e1(t){mi(t).Sr()}async function t1(t){const e=mi(t);for(const n of t.Ur)e.Pr(n.mutations)}async function n1(t,e,n){const r=t.Ur.shift(),i=ag.from(r,e,n);await tT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await jo(t)}async function r1(t,e){e&&mi(t).br&&await async function(n,r){if(i=r.code,QI(i)&&i!==E.ABORTED){const s=n.Ur.shift();mi(n).hr(),await tT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await jo(n)}var i}(t,e),nT(t)&&rT(t)}async function Ag(t,e){const n=$(t);e?(n.Kr.delete(2),await kc(n)):e||(n.Kr.add(2),await qo(n),n.Wr.set("Unknown"))}function Wo(t){return t.zr||(t.zr=function(e,n,r){const i=$(e);return i.Cr(),new WL(n,i.nr,i.credentials,i.N,r)}(t.datastore,t.asyncQueue,{Si:QL.bind(null,t),Ci:YL.bind(null,t),Tr:JL.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),Cg(t)?Sg(t):t.Wr.set("Unknown")):(await t.zr.stop(),eT(t))})),t.zr}function mi(t){return t.Hr||(t.Hr=function(e,n,r){const i=$(e);return i.Cr(),new HL(n,i.nr,i.credentials,i.N,r)}(t.datastore,t.asyncQueue,{Si:e1.bind(null,t),Ci:r1.bind(null,t),Vr:t1.bind(null,t),vr:n1.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await jo(t)):(await t.Hr.stop(),t.Ur.length>0&&(M("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ng(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ho(t,e){if(ot("AsyncQueue",`${e}: ${t}`),us(t))return new R(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=ng(),this.sortedSet=new ft(this.comparator)}static emptySet(e){return new Ko(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ko)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ko;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(){this.Jr=new ft(X.comparator)}track(e){const n=e.doc.key,r=this.Jr.get(n);r?e.type!==0&&r.type===3?this.Jr=this.Jr.insert(n,e):e.type===3&&r.type!==1?this.Jr=this.Jr.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Jr=this.Jr.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Jr=this.Jr.remove(n):e.type===1&&r.type===2?this.Jr=this.Jr.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):ee():this.Jr=this.Jr.insert(n,e)}Yr(){const e=[];return this.Jr.inorderTraversal((n,r)=>{e.push(r)}),e}}class zo{constructor(e,n,r,i,s,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new zo(e,n,Ko.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this.Xr=void 0,this.listeners=[]}}class s1{constructor(){this.queries=new Vo(e=>xI(e),gc),this.onlineState="Unknown",this.Zr=new Set}}async function Rg(t,e){const n=$(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new i1),i)try{s.Xr=await n.onListen(r)}catch(o){const a=Ho(o,`Initialization of query '${Zp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.eo(n.onlineState),s.Xr&&e.no(s.Xr)&&Pg(n)}async function kg(t,e){const n=$(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function o1(t,e){const n=$(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.no(i)&&(r=!0);o.Xr=i}}r&&Pg(n)}function a1(t,e,n){const r=$(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Pg(t){t.Zr.forEach(e=>{e.next()})}class Og{constructor(e,n,r){this.query=e,this.so=n,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=r||{}}no(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new zo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.io?this.oo(e)&&(this.so.next(e),n=!0):this.ao(e,this.onlineState)&&(this.co(e),n=!0),this.ro=e,n}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let n=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),n=!0),n}ao(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.uo||!r)&&(!e.docs.isEmpty()||n==="Offline")}oo(e){if(e.docChanges.length>0)return!0;const n=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}co(e){e=zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n){this.payload=e,this.byteLength=n}ho(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this.N=e}zn(e){return ur(this.N,e)}Hn(e){return e.metadata.exists?lb(this.N,e.document,!1):Je.newNoDocument(this.zn(e.metadata.name),this.Jn(e.metadata.readTime))}Jn(e){return bt(e)}}class l1{constructor(e,n,r){this.lo=e,this.localStore=n,this.N=r,this.queries=[],this.documents=[],this.progress=oT(e)}fo(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++n):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++n),n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}wo(e){const n=new Map,r=new sT(this.N);for(const i of e)if(i.metadata.queries){const s=r.zn(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||Me()).add(s);n.set(o,a)}}return n}async complete(){const e=await PL(this.localStore,new sT(this.N),this.documents,this.lo.id),n=this.wo(this.documents);for(const r of this.queries)await OL(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",new SL(Object.assign({},this.progress),e)}}function oT(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e){this.key=e}}class cT{constructor(e){this.key=e}}class lT{constructor(e,n){this.query=e,this._o=n,this.mo=null,this.current=!1,this.yo=Me(),this.mutatedKeys=Me(),this.po=LI(e),this.Eo=new Ko(this.po)}get To(){return this._o}Io(e,n){const r=n?n.Ao:new iT,i=n?n.Eo:this.Eo;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=Gu(this.query)&&i.size===this.query.limit?i.last():null,l=Qu(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=mc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let _=!1;d&&f?d.data.isEqual(f.data)?g!==y&&(r.track({type:3,doc:f}),_=!0):this.Ro(d,f)||(r.track({type:2,doc:f}),_=!0,(c&&this.po(f,c)>0||l&&this.po(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),_=!0):d&&!f&&(r.track({type:1,doc:d}),_=!0,(c||l)&&(a=!0)),_&&(f?(o=o.add(f),s=y?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),Gu(this.query)||Qu(this.query))for(;o.size>this.query.limit;){const u=Gu(this.query)?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Eo:o,Ao:r,Ln:a,mutatedKeys:s}}Ro(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Eo;this.Eo=e.Eo,this.mutatedKeys=e.mutatedKeys;const s=e.Ao.Yr();s.sort((l,u)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return f(h)-f(d)}(l.type,u.type)||this.po(l.doc,u.doc)),this.bo(r);const o=n?this.Po():[],a=this.yo.size===0&&this.current?1:0,c=a!==this.mo;return this.mo=a,s.length!==0||c?{snapshot:new zo(this.query,e.Eo,i,s,e.mutatedKeys,a===0,c,!1),vo:o}:{vo:o}}eo(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new iT,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.Eo.has(e)&&!this.Eo.get(e).hasLocalMutations}bo(e){e&&(e.addedDocuments.forEach(n=>this._o=this._o.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this._o=this._o.delete(n)),this.current=e.current)}Po(){if(!this.current)return[];const e=this.yo;this.yo=Me(),this.Eo.forEach(r=>{this.Vo(r.key)&&(this.yo=this.yo.add(r.key))});const n=[];return e.forEach(r=>{this.yo.has(r)||n.push(new cT(r))}),this.yo.forEach(r=>{e.has(r)||n.push(new aT(r))}),n}So(e){this._o=e.Gn,this.yo=Me();const n=this.Io(e.documents);return this.applyChanges(n,!0)}Do(){return zo.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,this.mo===0)}}class u1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class h1{constructor(e){this.key=e,this.Co=!1}}class d1{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new Vo(a=>xI(a),gc),this.ko=new Map,this.$o=new Set,this.Oo=new ft(X.comparator),this.Fo=new Map,this.Mo=new yg,this.Lo={},this.Bo=new Map,this.Uo=ds.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return this.qo===!0}}async function f1(t,e){const n=Ug(t);let r,i;const s=n.xo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const o=await Bo(n.localStore,Mn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Dg(n,e,r,a==="current"),n.isPrimaryClient&&dh(n.remoteStore,o)}return i}async function Dg(t,e,n,r){t.Ko=(u,h,d)=>async function(f,g,y,_){let w=g.view.Io(y);w.Ln&&(w=await ch(f.localStore,g.query,!1).then(({documents:U})=>g.view.Io(U,w)));const S=_&&_.targetChanges.get(g.targetId),L=g.view.applyChanges(w,f.isPrimaryClient,S);return Mg(f,g.targetId,L.vo),L.snapshot}(t,u,h,d);const i=await ch(t.localStore,e,!0),s=new lT(e,i.Gn),o=s.Io(i.documents),a=Ec.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=s.applyChanges(o,t.isPrimaryClient,a);Mg(t,n,c.vo);const l=new u1(e,n,s);return t.xo.set(e,l),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}async function p1(t,e){const n=$(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter(s=>!gc(s,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await $o(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Pc(n.remoteStore,r.targetId),Go(n,r.targetId)}).catch(fs)):(Go(n,r.targetId),await $o(n.localStore,r.targetId,!0))}async function g1(t,e,n){const r=Vg(t);try{const i=await function(s,o){const a=$(s),c=Et.now(),l=o.reduce((h,d)=>h.add(d.key),Me());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,l).next(d=>{u=d;const f=[];for(const g of o){const y=Bx(g,u.get(g.key));y!=null&&f.push(new li(g.key,y,AI(y.value.mapValue),ct.exists(!0)))}return a.In.addMutationBatch(h,c,f,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Lo[s.currentUser.toKey()];c||(c=new ft(we)),c=c.insert(o,a),s.Lo[s.currentUser.toKey()]=c}(r,i.batchId,n),await xr(r,i.changes),await jo(r.remoteStore)}catch(i){const s=Ho(i,"Failed to persist write");n.reject(s)}}async function uT(t,e){const n=$(t);try{const r=await NL(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fo.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Co=!0:i.modifiedDocuments.size>0?ce(o.Co):i.removedDocuments.size>0&&(ce(o.Co),o.Co=!1))}),await xr(n,r,e)}catch(r){await fs(r)}}function hT(t,e,n){const r=$(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xo.forEach((s,o)=>{const a=o.view.eo(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=$(s);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.eo(o)&&(c=!0)}),c&&Pg(a)}(r.eventManager,e),i.length&&r.No.Tr(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function m1(t,e,n){const r=$(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),s=i&&i.key;if(s){let o=new ft(X.comparator);o=o.insert(s,Je.newNoDocument(s,fe.min()));const a=Me().add(s),c=new wc(fe.min(),new Map,new et(we),o,a);await uT(r,c),r.Oo=r.Oo.remove(s),r.Fo.delete(e),Fg(r)}else await $o(r.localStore,e,!1).then(()=>Go(r,e,n)).catch(fs)}async function y1(t,e){const n=$(t),r=e.batch.batchId;try{const i=await AL(n.localStore,e);Lg(n,r,null),xg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xr(n,i)}catch(i){await fs(i)}}async function _1(t,e,n){const r=$(t);try{const i=await function(s,o){const a=$(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.In.lookupMutationBatch(c,o).next(u=>(ce(u!==null),l=u.keys(),a.In.removeMutationBatch(c,u))).next(()=>a.In.performConsistencyCheck(c)).next(()=>a.Qn.Pn(c,l))})}(r.localStore,e);Lg(r,e,n),xg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xr(r,i)}catch(i){await fs(i)}}async function v1(t,e){const n=$(t);gi(n.remoteStore)||M("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=$(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.In.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Bo.get(r)||[];i.push(e),n.Bo.set(r,i)}catch(r){const i=Ho(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function xg(t,e){(t.Bo.get(e)||[]).forEach(n=>{n.resolve()}),t.Bo.delete(e)}function Lg(t,e,n){const r=$(t);let i=r.Lo[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}function Go(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(r=>{t.Mo.containsKey(r)||dT(t,r)})}function dT(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);n!==null&&(Pc(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),Fg(t))}function Mg(t,e,n){for(const r of n)r instanceof aT?(t.Mo.addReference(r.key,e),w1(t,r)):r instanceof cT?(M("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||dT(t,r.key)):ee()}function w1(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(M("SyncEngine","New document in limbo: "+n),t.$o.add(r),Fg(t))}function Fg(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new X(De.fromString(e)),r=t.Uo.next();t.Fo.set(r,new h1(n)),t.Oo=t.Oo.insert(n,r),dh(t.remoteStore,new hi(Mn(Co(n.path)),r,2,Sn.T))}}async function xr(t,e,n){const r=$(t),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach((a,c)=>{o.push(r.Ko(c,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l.fromCache?"not-current":"current"),i.push(l);const u=mg.kn(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.No.Tr(i),await async function(a,c){const l=$(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,h=>A.forEach(h.Nn,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>A.forEach(h.xn,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!us(u))throw u;M("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Un.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);l.Un=l.Un.insert(h,g)}}}(r.localStore,s))}async function E1(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const r=await qb(n.localStore,e);n.currentUser=e,function(i,s){i.Bo.forEach(o=>{o.forEach(a=>{a.reject(new R(E.CANCELLED,s))})}),i.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xr(n,r.Wn)}}function I1(t,e){const n=$(t),r=n.Fo.get(e);if(r&&r.Co)return Me().add(r.key);{let i=Me();const s=n.ko.get(e);if(!s)return i;for(const o of s){const a=n.xo.get(o);i=i.unionWith(a.view.To)}return i}}async function b1(t,e){const n=$(t),r=await ch(n.localStore,e.query,!0),i=e.view.So(r);return n.isPrimaryClient&&Mg(n,e.targetId,i.vo),i}async function T1(t){const e=$(t);return Kb(e.localStore).then(n=>xr(e,n))}async function S1(t,e,n,r){const i=$(t),s=await function(o,a){const c=$(o),l=$(c.In);return c.persistence.runTransaction("Lookup mutation documents","readonly",u=>l.Xt(u,a).next(h=>h?c.Qn.Pn(u,h):A.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await jo(i.remoteStore):n==="acknowledged"||n==="rejected"?(Lg(i,e,r||null),xg(i,e),function(o,a){$($(o).In).te(a)}(i.localStore,e)):ee(),await xr(i,s)):M("SyncEngine","Cannot apply mutation batch with id: "+e)}async function C1(t,e){const n=$(t);if(Ug(n),Vg(n),e===!0&&n.qo!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await fT(n,r.toArray());n.qo=!0,await Ag(n.remoteStore,!0);for(const s of i)dh(n.remoteStore,s)}else if(e===!1&&n.qo!==!1){const r=[];let i=Promise.resolve();n.ko.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Go(n,o),$o(n.localStore,o,!0))),Pc(n.remoteStore,o)}),await i,await fT(n,r),function(s){const o=$(s);o.Fo.forEach((a,c)=>{Pc(o.remoteStore,c)}),o.Mo.us(),o.Fo=new Map,o.Oo=new ft(X.comparator)}(n),n.qo=!1,await Ag(n.remoteStore,!1)}}async function fT(t,e,n){const r=$(t),i=[],s=[];for(const o of e){let a;const c=r.ko.get(o);if(c&&c.length!==0){a=await Bo(r.localStore,Mn(c[0]));for(const l of c){const u=r.xo.get(l),h=await b1(r,u);h.snapshot&&s.push(h.snapshot)}}else{const l=await Hb(r.localStore,o);a=await Bo(r.localStore,l),await Dg(r,pT(l),o,!1)}i.push(a)}return r.No.Tr(s),i}function pT(t){return OI(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function A1(t){const e=$(t);return $($(e.localStore).persistence).pn()}async function N1(t,e,n,r){const i=$(t);if(i.qo)M("SyncEngine","Ignoring unexpected query state notification.");else if(i.ko.has(e))switch(n){case"current":case"not-current":{const s=await Kb(i.localStore),o=wc.createSynthesizedRemoteEventForCurrentChange(e,n==="current");await xr(i,s,o);break}case"rejected":await $o(i.localStore,e,!0),Go(i,e,r);break;default:ee()}}async function R1(t,e,n){const r=Ug(t);if(r.qo){for(const i of e){if(r.ko.has(i)){M("SyncEngine","Adding an already active target "+i);continue}const s=await Hb(r.localStore,i),o=await Bo(r.localStore,s);await Dg(r,pT(s),o.targetId,!1),dh(r.remoteStore,o)}for(const i of n)r.ko.has(i)&&await $o(r.localStore,i,!1).then(()=>{Pc(r.remoteStore,i),Go(r,i)}).catch(fs)}}function Ug(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=I1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=m1.bind(null,e),e.No.Tr=o1.bind(null,e.eventManager),e.No.jo=a1.bind(null,e.eventManager),e}function Vg(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=y1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_1.bind(null,e),e}function k1(t,e,n){const r=$(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const f=$(h),g=bt(d.createTime);return f.persistence.runTransaction("hasNewerBundle","readonly",y=>f.Je.getBundleMetadata(y,d.id)).then(y=>!!y&&y.createTime.compareTo(g)>=0)}(i.localStore,a))return await s.close(),void o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a));o._updateProgress(oT(a));const c=new l1(a,i.localStore,s.N);let l=await s.Qo();for(;l;){const h=await c.fo(l);h&&o._updateProgress(h),l=await s.Qo()}const u=await c.complete();await xr(i,u.Tn,void 0),await function(h,d){const f=$(h);return f.persistence.runTransaction("Save bundle","readwrite",g=>f.Je.saveBundleMetadata(g,d))}(i.localStore,a),o._completeWith(u.progress)}catch(a){cc("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a)}})(r,e,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class gT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=Rc(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return $b(this.persistence,new Bb,e.initialUser,this.N)}Go(e){return new UL(_g.Ns,this.N)}Wo(e){return new Qb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mT extends gT{constructor(e,n,r){super(),this.Jo=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await kL(this.localStore),await this.Jo.initialize(this,e),await Vg(this.Jo.syncEngine),await jo(this.Jo.remoteStore),await this.persistence.nn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Ho(e){return $b(this.persistence,new Bb,e.initialUser,this.N)}zo(e){const n=this.persistence.referenceDelegate.garbageCollector;return new vL(n,e.asyncQueue)}Go(e){const n=gg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?pn.withCacheSize(this.cacheSizeBytes):pn.DEFAULT;return new pg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,Jb(),hh(),this.N,this.sharedClientState,!!this.forceOwnership)}Wo(e){return new Qb}}class P1 extends mT{constructor(e,n){super(e,n,!1),this.Jo=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Jo.syncEngine;this.sharedClientState instanceof Ig&&(this.sharedClientState.syncEngine={_i:S1.bind(null,n),mi:N1.bind(null,n),gi:R1.bind(null,n),pn:A1.bind(null,n),wi:T1.bind(null,n)},await this.sharedClientState.start()),await this.persistence.nn(async r=>{await C1(this.Jo.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):r||this.gcScheduler.stop())})}Wo(e){const n=Jb();if(!Ig.bt(n))throw new R(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=gg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ig(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Bg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hT(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=E1.bind(null,this.syncEngine),await Ag(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new s1}createDatastore(e){const n=Rc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new jL(i));var i;return function(s,o,a){return new KL(s,o,a)}(e.credentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>hT(this.syncEngine,a,0),o=Yb.bt()?new Yb:new BL,new GL(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,l){const u=new d1(r,i,s,o,a,c);return l&&(u.qo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=$(e);M("RemoteStore","RemoteStore shutting down."),n.Kr.add(5),await qo(n),n.Qr.shutdown(),n.Wr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,n){this.Zo=e,this.N=n,this.metadata=new wt,this.buffer=new Uint8Array,this.ta=new TextDecoder("utf-8"),this.ea().then(r=>{r&&r.ho()?this.metadata.resolve(r.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.payload)}`))},r=>this.metadata.reject(r))}close(){return this.Zo.cancel()}async getMetadata(){return this.metadata.promise}async Qo(){return await this.getMetadata(),this.ea()}async ea(){const e=await this.na();if(e===null)return null;const n=this.ta.decode(e),r=Number(n);isNaN(r)&&this.sa(`length string (${n}) is not valid number`);const i=await this.ia(r);return new c1(JSON.parse(i),e.length+r)}ra(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async na(){for(;this.ra()<0&&!await this.oa(););if(this.buffer.length===0)return null;const e=this.ra();e<0&&this.sa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async ia(e){for(;this.buffer.length<e;)await this.oa()&&this.sa("Reached the end of bundle when more is expected.");const n=this.ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}sa(e){throw this.Zo.cancel(),new Error(`Invalid bundle format: ${e}`)}async oa(){const e=await this.Zo.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new R(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=$(r),o=Tc(s.N)+"/documents",a={documents:i.map(h=>bc(s.N,h))},c=await s.Ki("BatchGetDocuments",o,a),l=new Map;c.forEach(h=>{const d=Xx(s.N,h);l.set(d.key.toString(),d)});const u=[];return i.forEach(h=>{const d=l.get(h.toString());ce(!!d),u.push(d)}),u}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new vc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=X.fromPath(r);this.mutations.push(new tg(i,this.precondition(i)))}),await async function(n,r){const i=$(n),s=Tc(i.N)+"/documents",o={writes:r.map(a=>nh(i.N,a))};await i.Li("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw ee();n=fe.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new R(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?ct.updateTime(n):ct.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(fe.min()))throw new R(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ct.updateTime(n)}return ct.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(e,n,r,i){this.asyncQueue=e,this.datastore=n,this.updateFunction=r,this.deferred=i,this.aa=5,this.rr=new bg(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi(async()=>{const e=new D1(this.datastore),n=this.ua(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ha(i)}))}).catch(r=>{this.ha(r)})})}ua(e){try{const n=this.updateFunction(e);return!ss(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}ha(e){this.aa>0&&this.la(e)?(this.aa-=1,this.asyncQueue.enqueueAndForget(()=>(this.ca(),Promise.resolve()))):this.deferred.reject(e)}la(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!QI(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,r){this.credentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Ft.UNAUTHENTICATED,this.clientId=_I.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async i=>{M("FirestoreClient","Received user=",i.uid),await this.credentialListener(i),this.user=i})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const r=Ho(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _T(t,e){t.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await qb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function vT(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $g(t);M("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>async function(s,o){const a=$(s);a.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const c=gi(a);a.Kr.add(3),await qo(a),c&&a.Wr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Kr.delete(3),await kc(a)}(e.remoteStore,i)),t.onlineComponents=e}async function $g(t){return t.offlineComponents||(M("FirestoreClient","Using default OfflineComponentProvider"),await _T(t,new gT)),t.offlineComponents}async function gh(t){return t.onlineComponents||(M("FirestoreClient","Using default OnlineComponentProvider"),await vT(t,new Bg)),t.onlineComponents}function wT(t){return $g(t).then(e=>e.persistence)}function qg(t){return $g(t).then(e=>e.localStore)}function ET(t){return gh(t).then(e=>e.remoteStore)}function jg(t){return gh(t).then(e=>e.syncEngine)}async function Qo(t){const e=await gh(t),n=e.eventManager;return n.onListen=f1.bind(null,e.syncEngine),n.onUnlisten=p1.bind(null,e.syncEngine),n}function M1(t){return t.asyncQueue.enqueue(async()=>{const e=await wT(t),n=await ET(t);return e.setNetworkEnabled(!0),function(r){const i=$(r);return i.Kr.delete(0),kc(i)}(n)})}function F1(t){return t.asyncQueue.enqueue(async()=>{const e=await wT(t),n=await ET(t);return e.setNetworkEnabled(!1),async function(r){const i=$(r);i.Kr.add(0),await qo(i),i.Wr.set("Offline")}(n)})}function U1(t,e){const n=new wt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const l=$(a);return l.persistence.runTransaction("read document","readonly",u=>l.Qn.An(u,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new R(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Ho(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await qg(t),e,n)),n.promise}function IT(t,e,n={}){const r=new wt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new ph({next:h=>{s.enqueueAndForget(()=>kg(i,u));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new R(E.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new R(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Og(Co(o.path),l,{includeMetadataChanges:!0,uo:!0});return Rg(i,u)}(await Qo(t),t.asyncQueue,e,n,r)),r.promise}function V1(t,e){const n=new wt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await ch(r,i,!0),a=new lT(i,o.Gn),c=a.Io(o.documents),l=a.applyChanges(c,!1);s.resolve(l.snapshot)}catch(o){const a=Ho(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await qg(t),e,n)),n.promise}function bT(t,e,n={}){const r=new wt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const l=new ph({next:h=>{s.enqueueAndForget(()=>kg(i,u)),h.fromCache&&a.source==="server"?c.reject(new R(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Og(o,l,{includeMetadataChanges:!0,uo:!0});return Rg(i,u)}(await Qo(t),t.asyncQueue,e,n,r)),r.promise}function B1(t,e){const n=new ph(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){$(r).Zr.add(i),i.next()}(await Qo(t),n)),()=>{n.Xo(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){$(r).Zr.delete(i)}(await Qo(t),n))}}function $1(t,e){const n=new wt;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(i){return gh(i).then(s=>s.datastore)}(t);new x1(t.asyncQueue,r,e,n).run()}),n.promise}function q1(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(c,l){return new O1(c,l)}(function(c,l){if(c instanceof Uint8Array)return yT(c,l);if(c instanceof ArrayBuffer)return yT(new Uint8Array(c),l);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Rc(e));t.asyncQueue.enqueueAndForget(async()=>{k1(await jg(t),i,r)})}function j1(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=$(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Je.getNamedQuery(s,r))}(await qg(t),e))}class W1{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t,e,n){if(!n)throw new R(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ST(t,e,n,r){if(e===!0&&r===!0)throw new R(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function CT(t){if(!X.isDocumentKey(t))throw new R(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function AT(t){if(X.isDocumentKey(t))throw new R(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Pe(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mh(t);throw new R(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function NT(t,e){if(e<=0)throw new R(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new R(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ST("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new RT({}),this._settingsFrozen=!1,e instanceof Yo?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new R(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yo(r.options.projectId)}(e))}get app(){if(!this._app)throw new R(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new RT(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new px;switch(n.type){case"gapi":const r=n.client;return ce(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new _x(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new R(E.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=TT.get(e);n&&(M("ComponentProvider","Removing Datastore"),TT.delete(e),n.terminate())}(this),Promise.resolve()}}function H1(t,e,n,r={}){var i;const s=(t=Pe(t,Oc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&cc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Ft.MOCK_USER;else{o=Mw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new R(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ft(c)}t._credentials=new gx(new yI(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}}class Gt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gt(this.firestore,e,this._query)}}class dr extends Gt{constructor(e,n,r){super(e,n,Co(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new X(e))}withConverter(e){return new dr(this.firestore,e,this._path)}}function kT(t,e,...n){if(t=K(t),Wg("collection","path",e),t instanceof Oc){const r=De.fromString(e,...n);return AT(r),new dr(t,null,r)}{if(!(t instanceof ze||t instanceof dr))throw new R(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return AT(r),new dr(t.firestore,null,r)}}function K1(t,e){if(t=Pe(t,Oc),Wg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new R(E.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Gt(t,null,function(n){return new Pr(De.emptyPath(),n)}(e))}function yh(t,e,...n){if(t=K(t),arguments.length===1&&(e=_I.I()),Wg("doc","path",e),t instanceof Oc){const r=De.fromString(e,...n);return CT(r),new ze(t,null,new X(r))}{if(!(t instanceof ze||t instanceof dr))throw new R(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return CT(r),new ze(t.firestore,t instanceof dr?t.converter:null,new X(r))}}function PT(t,e){return t=K(t),e=K(e),(t instanceof ze||t instanceof dr)&&(e instanceof ze||e instanceof dr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function OT(t,e){return t=K(t),e=K(e),t instanceof Gt&&e instanceof Gt&&t.firestore===e.firestore&&gc(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new bg(this,"async_queue_retry"),this.Ea=()=>{const n=hh();n&&M("AsyncQueue","Visibility state changed to "+n.visibilityState),this.rr.tr()};const e=hh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ta(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const n=hh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ea)}}enqueue(e){if(this.Ta(),this.wa)return new Promise(()=>{});const n=new wt;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.da.push(e),this.Aa()))}async Aa(){if(this.da.length!==0){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!us(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(e){const n=this.fa.then(()=>(this.ga=!0,e().catch(r=>{throw this.ma=r,this.ga=!1,ot("INTERNAL UNHANDLED ERROR: ",function(i){let s=i.message||"";return i.stack&&(s=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),s}(r)),r}).then(r=>(this.ga=!1,r))));return this.fa=n,n}enqueueAfterDelay(e,n,r){this.Ta(),this.pa.indexOf(e)>-1&&(n=0);const i=Ng.createAndSchedule(this,e,n,r,s=>this.Ra(s));return this._a.push(i),i}Ta(){this.ma&&ee()}verifyOperationInProgress(){}async ba(){let e;do e=this.fa,await e;while(e!==this.fa)}Pa(e){for(const n of this._a)if(n.timerId===e)return!0;return!1}va(e){return this.ba().then(()=>{this._a.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._a)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ba()})}Va(e){this.pa.push(e)}Ra(e){const n=this._a.indexOf(e);this._a.splice(n,1)}}function Hg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class G1{constructor(){this._progressObserver={},this._taskCompletionResolver=new wt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=-1;class nt extends Oc{constructor(e,n){super(e,n),this.type="firestore",this._queue=new z1,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||DT(this),this._firestoreClient.terminate()}}function St(t){return t._firestoreClient||DT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function DT(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new W1(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new L1(t._credentials,t._queue,r)}function Y1(t,e){LT(t=Pe(t,nt));const n=St(t),r=t._freezeSettings(),i=new Bg;return xT(n,i,new mT(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function J1(t){LT(t=Pe(t,nt));const e=St(t),n=t._freezeSettings(),r=new Bg;return xT(e,r,new P1(r,n.cacheSizeBytes))}function xT(t,e,n){const r=new wt;return t.asyncQueue.enqueue(async()=>{try{await _T(t,n),await vT(t,e),r.resolve()}catch(i){if(!function(s){return s.name==="FirebaseError"?s.code===E.FAILED_PRECONDITION||s.code===E.UNIMPLEMENTED:typeof DOMException!="undefined"&&s instanceof DOMException?s.code===22||s.code===20||s.code===11:!0}(i))throw i;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function X1(t){if(t._initialized&&!t._terminated)throw new R(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new wt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Qn.bt())return Promise.resolve();const r=n+"main";await Qn.delete(r)}(gg(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function Z1(t){return function(e){const n=new wt;return e.asyncQueue.enqueueAndForget(async()=>v1(await jg(e),n)),n.promise}(St(t=Pe(t,nt)))}function eM(t){return M1(St(t=Pe(t,nt)))}function tM(t){return F1(St(t=Pe(t,nt)))}function nM(t,e){const n=St(t=Pe(t,nt)),r=new G1;return q1(n,t._databaseId,e,r),r}function rM(t,e){return j1(St(t=Pe(t,nt)),e).then(n=>n?new Gt(t,null,n.query):null)}function LT(t){if(t._initialized||t._terminated)throw new R(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fr(It.fromBase64String(e))}catch(n){throw new R(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fr(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iM=/^__.*__$/;class sM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new li(e,this.data,this.fieldMask,n,this.fieldTransforms):new _c(e,this.data,n,this.fieldTransforms)}}class MT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new li(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function FT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class vh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.N=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Sa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new vh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Ca({path:r,xa:!1});return i.ka(e),i}$a(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Ca({path:r,xa:!1});return i.Sa(),i}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return Eh(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(e.length===0)throw this.Fa("Document fields must not be empty");if(FT(this.Da)&&iM.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class oM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=r||Rc(e)}Ba(e,n,r,i=!1){return new vh({Da:e,methodName:n,La:r,path:Ut.emptyPath(),xa:!1,Ma:i},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function gs(t){const e=t._freezeSettings(),n=Rc(t._databaseId);return new oM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wh(t,e,n,r,i,s={}){const o=t.Ba(s.merge||s.mergeFields?2:0,e,n,i);Qg("Data must be an object, but it was:",o,r);const a=BT(r,o);let c,l;if(s.merge)c=new Io(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=Yg(e,h,n);if(!o.contains(d))throw new R(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);qT(u,d)||u.push(d)}c=new Io(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new sM(new Kt(a),c,l)}class Dc extends ps{_toFieldTransform(e){if(e.Da!==2)throw e.Da===1?e.Fa(`${this._methodName}() can only appear at the top level of your update data`):e.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dc}}function UT(t,e,n){return new vh({Da:3,La:e.settings.La,methodName:t._methodName,xa:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}class Kg extends ps{_toFieldTransform(e){return new yc(e.path,new No)}isEqual(e){return e instanceof Kg}}class aM extends ps{constructor(e,n){super(e),this.Ua=n}_toFieldTransform(e){const n=UT(this,e,!0),r=this.Ua.map(s=>ms(s,n)),i=new as(r);return new yc(e.path,i)}isEqual(e){return this===e}}class cM extends ps{constructor(e,n){super(e),this.Ua=n}_toFieldTransform(e){const n=UT(this,e,!0),r=this.Ua.map(s=>ms(s,n)),i=new cs(r);return new yc(e.path,i)}isEqual(e){return this===e}}class lM extends ps{constructor(e,n){super(e),this.qa=n}_toFieldTransform(e){const n=new Ro(e.N,UI(e.N,this.qa));return new yc(e.path,n)}isEqual(e){return this===e}}function zg(t,e,n,r){const i=t.Ba(1,e,n);Qg("Data must be an object, but it was:",i,r);const s=[],o=Kt.empty();is(r,(c,l)=>{const u=Jg(e,c,n);l=K(l);const h=i.$a(u);if(l instanceof Dc)s.push(u);else{const d=ms(l,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new Io(s);return new MT(o,a,i.fieldTransforms)}function Gg(t,e,n,r,i,s){const o=t.Ba(1,e,n),a=[Yg(e,r,n)],c=[i];if(s.length%2!=0)throw new R(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Yg(e,s[d])),c.push(s[d+1]);const l=[],u=Kt.empty();for(let d=a.length-1;d>=0;--d)if(!qT(l,a[d])){const f=a[d];let g=c[d];g=K(g);const y=o.$a(f);if(g instanceof Dc)l.push(f);else{const _=ms(g,y);_!=null&&(l.push(f),u.set(f,_))}}const h=new Io(l);return new MT(u,h,o.fieldTransforms)}function VT(t,e,n,r=!1){return ms(n,t.Ba(r?4:3,e))}function ms(t,e){if($T(t=K(t)))return Qg("Unsupported field value:",e,t),BT(t,e);if(t instanceof ps)return function(n,r){if(!FT(r.Da))throw r.Fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&e.Da!==4)throw e.Fa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=ms(o,r.Oa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=K(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return UI(r.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Et.fromDate(n);return{timestampValue:Ic(r.N,i)}}if(n instanceof Et){const i=new Et(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ic(r.N,i)}}if(n instanceof _h)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof fr)return{bytesValue:ib(r.N,n._byteString)};if(n instanceof ze){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:rg(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Fa(`Unsupported field value: ${mh(n)}`)}(t,e)}function BT(t,e){const n={};return EI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):is(t,(r,i)=>{const s=ms(i,e.Na(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function $T(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Et||t instanceof _h||t instanceof fr||t instanceof ze||t instanceof ps)}function Qg(t,e,n){if(!$T(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=mh(n);throw r==="an object"?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function Yg(t,e,n){if((e=K(e))instanceof yi)return e._internalPath;if(typeof e=="string")return Jg(t,e);throw Eh("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const uM=new RegExp("[~\\*/\\[\\]]");function Jg(t,e,n){if(e.search(uM)>=0)throw Eh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yi(...e.split("."))._internalPath}catch(r){throw Eh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Eh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new R(E.INVALID_ARGUMENT,a+t+c)}function qT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ih("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hM extends xc{data(){return super.data()}}function Ih(t,e){return typeof e=="string"?Jg(t,e):e instanceof yi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Lr extends xc{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Lc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ih("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Lc extends Lr{data(e={}){return super.data(e)}}class _i{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ys(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Lc(this._firestore,this._userDataWriter,r.key,r,new ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Lc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ys(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Lc(r._firestore,r._userDataWriter,o.doc.key,o.doc,new ys(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:dM(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}function jT(t,e){return t instanceof Lr&&e instanceof Lr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof _i&&e instanceof _i&&t._firestore===e._firestore&&OT(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(t){if(Qu(t)&&t.explicitOrderBy.length===0)throw new R(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mc{}function vi(t,...e){for(const n of e)t=n._apply(t);return t}class fM extends Mc{constructor(e,n,r){super(),this.Ka=e,this.ja=n,this.Qa=r,this.type="where"}_apply(e){const n=gs(e.firestore),r=function(i,s,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new R(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on FieldPath.documentId().`);if(l==="in"||l==="not-in"){YT(u,l);const f=[];for(const g of u)f.push(QT(a,i,g));h={arrayValue:{values:f}}}else h=QT(a,i,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||YT(u,l),h=VT(o,s,u,l==="in"||l==="not-in");const d=nn.create(c,l,h);return function(f,g){if(g.v()){const _=Jp(f);if(_!==null&&!_.isEqual(g.field))throw new R(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${_.toString()}' and '${g.field.toString()}'`);const w=Yp(f);w!==null&&JT(f,g.field,w)}const y=function(_,w){for(const S of _.filters)if(w.indexOf(S.op)>=0)return S.op;return null}(f,function(_){switch(_){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(y!==null)throw y===g.op?new R(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new R(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${y.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.Ka,this.ja,this.Qa);return new Gt(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new Pr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function pM(t,e,n){const r=e,i=Ih("where",t);return new fM(i,r,n)}class gM extends Mc{constructor(e,n){super(),this.Ka=e,this.Wa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new R(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new R(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new So(i,s);return function(a,c){if(Yp(a)===null){const l=Jp(a);l!==null&&JT(a,l,c.field)}}(r,o),o}(e._query,this.Ka,this.Wa);return new Gt(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Pr(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function mM(t,e="asc"){const n=e,r=Ih("orderBy",t);return new gM(r,n)}class HT extends Mc{constructor(e,n,r){super(),this.type=e,this.Ga=n,this.za=r}_apply(e){return new Gt(e.firestore,e.converter,DI(e._query,this.Ga,this.za))}}function yM(t){return NT("limit",t),new HT("limit",t,"F")}function _M(t){return NT("limitToLast",t),new HT("limitToLast",t,"L")}class KT extends Mc{constructor(e,n,r){super(),this.type=e,this.Ha=n,this.Ja=r}_apply(e){const n=GT(e,this.type,this.Ha,this.Ja);return new Gt(e.firestore,e.converter,function(r,i){return new Pr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function vM(...t){return new KT("startAt",t,!0)}function wM(...t){return new KT("startAfter",t,!1)}class zT extends Mc{constructor(e,n,r){super(),this.type=e,this.Ha=n,this.Ja=r}_apply(e){const n=GT(e,this.type,this.Ha,this.Ja);return new Gt(e.firestore,e.converter,function(r,i){return new Pr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function EM(...t){return new zT("endBefore",t,!0)}function IM(...t){return new zT("endAt",t,!1)}function GT(t,e,n,r){if(n[0]=K(n[0]),n[0]instanceof xc)return function(i,s,o,a,c){if(!a)throw new R(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of Ao(i))if(u.field.isKeyField())l.push(ju(s,a.key));else{const h=a.data.field(u.field);if(Hp(h))throw new R(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=u.field.canonicalString();throw new R(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new pc(l,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=gs(t.firestore);return function(s,o,a,c,l,u){const h=s.explicitOrderBy;if(l.length>h.length)throw new R(E.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let f=0;f<l.length;f++){const g=l[f];if(h[f].field.isKeyField()){if(typeof g!="string")throw new R(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!Xp(s)&&g.indexOf("/")!==-1)throw new R(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const y=s.path.child(De.fromString(g));if(!X.isDocumentKey(y))throw new R(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${c}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const _=new X(y);d.push(ju(o,_))}else{const y=VT(a,c,g);d.push(y)}}return new pc(d,u)}(t._query,t.firestore._databaseId,i,e,n,r)}}function QT(t,e,n){if(typeof(n=K(n))=="string"){if(n==="")throw new R(E.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Xp(e)&&n.indexOf("/")!==-1)throw new R(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!X.isDocumentKey(r))throw new R(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ju(t,new X(r))}if(n instanceof ze)return ju(t,n._key);throw new R(E.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${mh(n)}.`)}function YT(t,e){if(!Array.isArray(t)||t.length===0)throw new R(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new R(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function JT(t,e,n){if(!n.isEqual(e))throw new R(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{convertValue(e,n="none"){switch(os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return at(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(bo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ee()}}convertObject(e,n){const r={};return is(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new _h(at(e.latitude),at(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=II(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(uc(e));default:return null}}convertTimestamp(e){const n=ci(e);return new Et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);ce(yb(r));const i=new Yo(r.get(1),r.get(3)),s=new X(r.popFirst(5));return i.isEqual(n)||ot(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class bM extends Xg{constructor(e){super(),this.firestore=e}convertBytes(e){return new fr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=gs(e)}set(e,n,r){this._verifyNotCommitted();const i=wi(e,this._firestore),s=bh(i.converter,n,r),o=wh(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,ct.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=wi(e,this._firestore);let o;return o=typeof(n=K(n))=="string"||n instanceof yi?Gg(this._dataReader,"WriteBatch.update",s._key,n,r,i):zg(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,ct.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=wi(e,this._firestore);return this._mutations=this._mutations.concat(new vc(n._key,ct.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new R(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function wi(t,e){if((t=K(t)).firestore!==e)throw new R(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SM(t){t=Pe(t,ze);const e=Pe(t.firestore,nt);return IT(St(e),t._key).then(n=>Zg(e,t,n))}class _s extends Xg{constructor(e){super(),this.firestore=e}convertBytes(e){return new fr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}function CM(t){t=Pe(t,ze);const e=Pe(t.firestore,nt),n=St(e),r=new _s(e);return U1(n,t._key).then(i=>new Lr(e,r,t._key,i,new ys(i!==null&&i.hasLocalMutations,!0),t.converter))}function AM(t){t=Pe(t,ze);const e=Pe(t.firestore,nt);return IT(St(e),t._key,{source:"server"}).then(n=>Zg(e,t,n))}function NM(t){t=Pe(t,Gt);const e=Pe(t.firestore,nt),n=St(e),r=new _s(e);return WT(t._query),bT(n,t._query).then(i=>new _i(e,r,t,i))}function RM(t){t=Pe(t,Gt);const e=Pe(t.firestore,nt),n=St(e),r=new _s(e);return V1(n,t._query).then(i=>new _i(e,r,t,i))}function kM(t){t=Pe(t,Gt);const e=Pe(t.firestore,nt),n=St(e),r=new _s(e);return bT(n,t._query,{source:"server"}).then(i=>new _i(e,r,t,i))}function XT(t,e,n){t=Pe(t,ze);const r=Pe(t.firestore,nt),i=bh(t.converter,e,n);return Fc(r,[wh(gs(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ct.none())])}function ZT(t,e,n,...r){t=Pe(t,ze);const i=Pe(t.firestore,nt),s=gs(i);let o;return o=typeof(e=K(e))=="string"||e instanceof yi?Gg(s,"updateDoc",t._key,e,n,r):zg(s,"updateDoc",t._key,e),Fc(i,[o.toMutation(t._key,ct.exists(!0))])}function PM(t){return Fc(Pe(t.firestore,nt),[new vc(t._key,ct.none())])}function OM(t,e){const n=Pe(t.firestore,nt),r=yh(t),i=bh(t.converter,e);return Fc(n,[wh(gs(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ct.exists(!1))]).then(()=>r)}function e0(t,...e){var n,r,i;t=K(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Hg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Hg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,l,u;if(t instanceof ze)l=Pe(t.firestore,nt),u=Co(t._key.path),c={next:h=>{e[o]&&e[o](Zg(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Pe(t,Gt);l=Pe(h.firestore,nt),u=h._query;const d=new _s(l);c={next:f=>{e[o]&&e[o](new _i(l,d,h,f))},error:e[o+1],complete:e[o+2]},WT(t._query)}return function(h,d,f,g){const y=new ph(g),_=new Og(d,y,f);return h.asyncQueue.enqueueAndForget(async()=>Rg(await Qo(h),_)),()=>{y.Xo(),h.asyncQueue.enqueueAndForget(async()=>kg(await Qo(h),_))}}(St(l),u,a,c)}function DM(t,e){return B1(St(t=Pe(t,nt)),Hg(e)?e:{next:e})}function Fc(t,e){return function(n,r){const i=new wt;return n.asyncQueue.enqueueAndForget(async()=>g1(await jg(n),r,i)),i.promise}(St(t),e)}function Zg(t,e,n){const r=n.docs.get(e._key),i=new _s(t);return new Lr(t,i,e._key,r,new ys(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=gs(e)}get(e){const n=wi(e,this._firestore),r=new bM(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return ee();const s=i[0];if(s.isFoundDocument())return new xc(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new xc(this._firestore,r,n._key,null,n.converter);throw ee()})}set(e,n,r){const i=wi(e,this._firestore),s=bh(i.converter,n,r),o=wh(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=wi(e,this._firestore);let o;return o=typeof(n=K(n))=="string"||n instanceof yi?Gg(this._dataReader,"Transaction.update",s._key,n,r,i):zg(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=wi(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=wi(e,this._firestore),r=new _s(this._firestore);return super.get(e).then(i=>new Lr(this._firestore,r,n._key,i._document,new ys(!1,!1),n.converter))}}function LM(t,e){return $1(St(t),n=>e(new xM(t,n)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MM(){return new Dc("deleteField")}function FM(){return new Kg("serverTimestamp")}function UM(...t){return new aM("arrayUnion",t)}function VM(...t){return new cM("arrayRemove",t)}function BM(t){return new lM("increment",t)}var $M;(function(t){wo=t})(ri),ni(new Ln("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new nt(n,new mx(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),ii("@firebase/firestore","3.1.0",$M);const qM="@firebase/firestore-compat",jM="0.1.3";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new R("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(){if(typeof Uint8Array=="undefined")throw new R("unimplemented","Uint8Arrays are not available in this environment.")}function n0(){if(!Ex())throw new R("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Uc{constructor(e){this._delegate=e}static fromBase64String(e){return n0(),new Uc(fr.fromBase64String(e))}static fromUint8Array(e){return t0(),new Uc(fr.fromUint8Array(e))}toBase64(){return n0(),this._delegate.toBase64()}toUint8Array(){return t0(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t){return WM(t,["next","error","complete"])}function WM(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{enableIndexedDbPersistence(e,n){return Y1(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return J1(e._delegate)}clearIndexedDbPersistence(e){return X1(e._delegate)}}class r0{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Yo||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&cc("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){H1(this._delegate,e,n,r)}enableNetwork(){return eM(this._delegate)}disableNetwork(){return tM(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,ST("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Z1(this._delegate)}onSnapshotsInSync(e){return DM(this._delegate,e)}get app(){if(!this._appCompat)throw new R("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Jo(this,kT(this._delegate,e))}catch(n){throw rn(n,"collection()","Firestore.collection()")}}doc(e){try{return new Un(this,yh(this._delegate,e))}catch(n){throw rn(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new sn(this,K1(this._delegate,e))}catch(n){throw rn(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return LM(this._delegate,n=>e(new i0(this,n)))}batch(){return St(this._delegate),new s0(new TM(this._delegate,e=>Fc(this._delegate,e)))}loadBundle(e){return nM(this._delegate,e)}namedQuery(e){return rM(this._delegate,e).then(n=>n?new sn(this,n):null)}}class Th extends Xg{constructor(e){super();this.firestore=e}convertBytes(e){return new Uc(new fr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Un.forKey(n,this.firestore,null)}}function KM(t){dx(t)}class i0{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Th(e)}get(e){const n=ws(e);return this._delegate.get(n).then(r=>new Vc(this._firestore,new Lr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=ws(e);return r?(em("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=ws(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=ws(e);return this._delegate.delete(n),this}}class s0{constructor(e){this._delegate=e}set(e,n,r){const i=ws(e);return r?(em("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=ws(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=ws(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class vs{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new Lc(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Bc(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=vs.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new vs(e,new Th(e),n),i.set(n,s)),s}}vs.INSTANCES=new WeakMap;class Un{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Th(e)}static forPath(e,n,r){if(e.length%2!=0)throw new R("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Un(n,new ze(n._delegate,r,new X(e)))}static forKey(e,n,r){return new Un(n,new ze(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Jo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Jo(this.firestore,kT(this._delegate,e))}catch(n){throw rn(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=K(e),e instanceof ze?PT(this._delegate,e):!1}set(e,n){n=em("DocumentReference.set",n);try{return n?XT(this._delegate,e,n):XT(this._delegate,e)}catch(r){throw rn(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?ZT(this._delegate,e):ZT(this._delegate,e,n,...r)}catch(i){throw rn(i,"updateDoc()","DocumentReference.update()")}}delete(){return PM(this._delegate)}onSnapshot(...e){const n=o0(e),r=a0(e,i=>new Vc(this.firestore,new Lr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return e0(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=CM(this._delegate):(e==null?void 0:e.source)==="server"?n=AM(this._delegate):n=SM(this._delegate),n.then(r=>new Vc(this.firestore,new Lr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Un(this.firestore,e?this._delegate.withConverter(vs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function rn(t,e,n){return t.message=t.message.replace(e,n),t}function o0(t){for(const e of t)if(typeof e=="object"&&!tm(e))return e;return{}}function a0(t,e){var n,r;let i;return tm(t[0])?i=t[0]:tm(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Vc{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Un(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return jT(this._delegate,e._delegate)}}class Bc extends Vc{data(e){const n=this._delegate.data(e);return fx(n!==void 0),n}}class sn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Th(e)}where(e,n,r){try{return new sn(this.firestore,vi(this._delegate,pM(e,n,r)))}catch(i){throw rn(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new sn(this.firestore,vi(this._delegate,mM(e,n)))}catch(r){throw rn(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new sn(this.firestore,vi(this._delegate,yM(e)))}catch(n){throw rn(n,"limit()","Query.limit()")}}limitToLast(e){try{return new sn(this.firestore,vi(this._delegate,_M(e)))}catch(n){throw rn(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new sn(this.firestore,vi(this._delegate,vM(...e)))}catch(n){throw rn(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new sn(this.firestore,vi(this._delegate,wM(...e)))}catch(n){throw rn(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new sn(this.firestore,vi(this._delegate,EM(...e)))}catch(n){throw rn(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new sn(this.firestore,vi(this._delegate,IM(...e)))}catch(n){throw rn(n,"endAt()","Query.endAt()")}}isEqual(e){return OT(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=RM(this._delegate):(e==null?void 0:e.source)==="server"?n=kM(this._delegate):n=NM(this._delegate),n.then(r=>new nm(this.firestore,new _i(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=o0(e),r=a0(e,i=>new nm(this.firestore,new _i(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return e0(this._delegate,n,r)}withConverter(e){return new sn(this.firestore,e?this._delegate.withConverter(vs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class zM{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Bc(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class nm{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new sn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Bc(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new zM(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Bc(this._firestore,r))})}isEqual(e){return jT(this._delegate,e._delegate)}}class Jo extends sn{constructor(e,n){super(e,n);this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Un(this.firestore,e):null}doc(e){try{return e===void 0?new Un(this.firestore,yh(this._delegate)):new Un(this.firestore,yh(this._delegate,e))}catch(n){throw rn(n,"doc()","CollectionReference.doc()")}}add(e){return OM(this._delegate,e).then(n=>new Un(this.firestore,n))}isEqual(e){return PT(this._delegate,e._delegate)}withConverter(e){return new Jo(this.firestore,e?this._delegate.withConverter(vs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ws(t){return Pe(t,ze)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(...e){this._delegate=new yi(...e)}static documentId(){return new rm(Ut.keyField().canonicalString())}isEqual(e){return e=K(e),e instanceof yi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this._delegate=e}static serverTimestamp(){const e=FM();return e._methodName="FieldValue.serverTimestamp",new Es(e)}static delete(){const e=MM();return e._methodName="FieldValue.delete",new Es(e)}static arrayUnion(...e){const n=UM(...e);return n._methodName="FieldValue.arrayUnion",new Es(n)}static arrayRemove(...e){const n=VM(...e);return n._methodName="FieldValue.arrayRemove",new Es(n)}static increment(e){const n=BM(e);return n._methodName="FieldValue.increment",new Es(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GM={Firestore:r0,GeoPoint:_h,Timestamp:Et,Blob:Uc,Transaction:i0,WriteBatch:s0,DocumentReference:Un,DocumentSnapshot:Vc,Query:sn,QueryDocumentSnapshot:Bc,QuerySnapshot:nm,CollectionReference:Jo,FieldPath:rm,FieldValue:Es,setLogLevel:KM,CACHE_SIZE_UNLIMITED:Q1};function QM(t,e){t.INTERNAL.registerComponent(new Ln("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},GM)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YM(t){QM(t,(e,n)=>new r0(e,n,new HM)),t.registerVersion(qM,jM)}YM(po);const JM="@firebase/database",XM="0.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let c0="";function l0(t){c0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZM{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),dt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ba(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ZM(e)}}catch(e){}return new eF},Is=u0("localStorage"),im=u0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new fo("@firebase/database"),h0=function(){let t=1;return function(){return t++}}(),d0=function(t){const e=rO(t),n=new eO;n.update(e);const r=n.digest();return $f.encodeByteArray(r)},$c=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=$c.apply(null,r):typeof r=="object"?e+=dt(r):e+=r,e+=" "}return e};let bs=null,f0=!0;const p0=function(t,e){O(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Xo.logLevel=Te.VERBOSE,bs=Xo.log.bind(Xo),e&&im.set("logging_enabled",!0)):typeof t=="function"?bs=t:(bs=null,im.remove("logging_enabled"))},Ct=function(...t){if(f0===!0&&(f0=!1,bs===null&&im.get("logging_enabled")===!0&&p0(!0)),bs){const e=$c.apply(null,t);bs(e)}},qc=function(t){return function(...e){Ct(t,...e)}},sm=function(...t){const e="FIREBASE INTERNAL ERROR: "+$c(...t);Xo.error(e)},pr=function(...t){const e=`FIREBASE FATAL ERROR: ${$c(...t)}`;throw Xo.error(e),new Error(e)},on=function(...t){const e="FIREBASE WARNING: "+$c(...t);Xo.warn(e)},tF=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&on("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Sh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},nF=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Mr="[MIN_NAME]",gr="[MAX_NAME]",Ts=function(t,e){if(t===e)return 0;if(t===Mr||e===gr)return-1;if(e===Mr||t===gr)return 1;{const n=Ch(t),r=Ch(e);return n!==null?r!==null?n-r==0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},rF=function(t,e){return t===e?0:t<e?-1:1},jc=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+dt(e))},om=function(t){if(typeof t!="object"||t===null)return dt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=dt(e[r]),n+=":",n+=om(t[e[r]]);return n+="}",n},g0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function At(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const m0=function(t){O(!Sh(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,c;t===0?(s=0,o=0,i=1/t==-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const u=l.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},iF=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sF=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function oF(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const aF=new RegExp("^-?(0*)\\d{1,10}$"),y0=-2147483648,am=2147483647,Ch=function(t){if(aF.test(t)){const e=Number(t);if(e>=y0&&e<=am)return e}return null},Zo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw on("Exception was thrown by user callback.",n),e},Math.floor(0))}},cF=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wc=function(t,e){const n=setTimeout(t,e);return typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lF{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){on(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uF{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ct("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',on(e)}}class ea{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ea.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="5",_0="v",v0="s",w0="r",E0="f",I0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,b0="ls",hF="p",lm="ac",T0="websocket",S0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Is.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Is.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function dF(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function A0(t,e,n){O(typeof e=="string","typeof type must == string"),O(typeof n=="object","typeof params must == object");let r;if(e===T0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===S0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dF(t)&&(n.ns=t.namespace);const i=[];return At(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fF{constructor(){this.counters_={}}incrementCounter(e,n=1){bn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return jP(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um={},hm={};function dm(t){const e=t.toString();return um[e]||(um[e]=new fF),um[e]}function pF(t,e){const n=t.toString();return hm[n]||(hm[n]=e()),hm[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gF{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Zo(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0="start",mF="close",yF="pLPCommand",_F="pRTLPCB",R0="id",k0="pw",P0="ser",vF="cb",wF="seg",EF="ts",IF="d",bF="dframe",O0=1870,D0=30,TF=O0-D0,SF=25e3,CF=3e4;class ta{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qc(e),this.stats_=dm(n),this.urlFn=c=>(this.appCheckToken&&(c[lm]=this.appCheckToken),A0(n,S0,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new gF(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(CF)),nF(()=>{if(this.isClosed_)return;this.scriptTagHolder=new fm((...s)=>{const[o,a,c,l,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===N0)this.id=a,this.password=c;else if(o===mF)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[N0]="t",r[P0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[vF]=this.scriptTagHolder.uniqueCallbackIdentifier),r[_0]=cm,this.transportSessionId&&(r[v0]=this.transportSessionId),this.lastSessionId&&(r[b0]=this.lastSessionId),this.applicationId&&(r[hF]=this.applicationId),this.appCheckToken&&(r[lm]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&I0.test(location.hostname)&&(r[w0]=E0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ta.forceAllow_=!0}static forceDisallow(){ta.forceDisallow_=!0}static isAvailable(){return ta.forceAllow_?!0:!ta.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!iF()&&!sF()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=xw(n),i=g0(r,TF);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[bF]="t",r[R0]=e,r[k0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=dt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class fm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=h0(),window[yF+this.uniqueCallbackIdentifier]=e,window[_F+this.uniqueCallbackIdentifier]=n,this.myIFrame=fm.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,"javascript:".length)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ct("frame writing exception"),a.stack&&Ct(a.stack),Ct(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ct("No IE domain setting required")}catch(n){const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[R0]=this.myID,e[k0]=this.myPW,e[P0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+D0+r.length<=O0;){const o=this.pendingSegs.shift();r=r+"&"+wF+i+"="+o.seg+"&"+EF+i+"="+o.ts+"&"+IF+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(SF)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ct("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch(r){}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AF=16384,NF=45e3;let Ah=null;typeof MozWebSocket!="undefined"?Ah=MozWebSocket:typeof WebSocket!="undefined"&&(Ah=WebSocket);class Yn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qc(this.connId),this.stats_=dm(n),this.connURL=Yn.connectionURL_(n,o,a,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i){const s={};return s[_0]=cm,typeof location!="undefined"&&location.hostname&&I0.test(location.hostname)&&(s[w0]=E0),n&&(s[v0]=n),r&&(s[b0]=r),i&&(s[lm]=i),A0(e,T0,s)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Is.set("previous_websocket_failure",!0);try{if(!Fw()){const r={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Ah(this.connURL,[],r)}}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Yn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ah!==null&&!Yn.forceDisallow_}static previouslyFailed(){return Is.isInMemoryStorage||Is.get("previous_websocket_failure")===!0}markConnectionHealthy(){Is.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ba(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=dt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=g0(n,AF);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(NF))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Yn.responsesRequiredToBeHealthy=2;Yn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ta,Yn]}initTransports_(e){const n=Yn&&Yn.isAvailable();let r=n&&!Yn.previouslyFailed();if(e.webSocketOnly&&(n||on("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Yn];else{const i=this.transports_=[];for(const s of pm.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RF=6e4,kF=5e3,PF=10*1024,OF=100*1024,gm="t",x0="d",DF="s",L0="r",xF="e",M0="o",F0="a",U0="n",V0="p",LF="h";class MF{constructor(e,n,r,i,s,o,a,c,l,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qc("c:"+this.id+":"),this.transportManager_=new pm(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Wc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>OF?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>PF?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(gm in e){const n=e[gm];n===F0?this.upgradeIfSecondaryHealthy_():n===L0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===M0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=jc("t",e),r=jc("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:V0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:F0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:U0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=jc("t",e),r=jc("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=jc(gm,e);if(x0 in e){const r=e[x0];if(n===LF)this.onHandshake_(r);else if(n===U0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===DF?this.onConnectionShutdown_(r):n===L0?this.onReset_(r):n===xF?sm("Server Error: "+r):n===M0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):sm("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),cm!==r&&on("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Wc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(RF))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kF))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:V0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Is.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){O(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh extends $0{constructor(){super(["online"]);this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!lu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Nh}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=32,j0=768;class xe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Oe(){return new xe("")}function me(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ei(t){return t.pieces_.length-t.pieceNum_}function Be(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new xe(t.pieces_,e)}function mm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function FF(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Hc(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function W0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new xe(e,0)}function Xe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof xe)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new xe(n,0)}function ye(t){return t.pieceNum_>=t.pieces_.length}function an(t,e){const n=me(t),r=me(e);if(n===null)return e;if(n===r)return an(Be(t),Be(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function UF(t,e){const n=Hc(t,0),r=Hc(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Ts(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function ym(t,e){if(Ei(t)!==Ei(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Vn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ei(t)>Ei(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class VF{constructor(e,n){this.errorPrefix_=n,this.parts_=Hc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=fu(this.parts_[r]);H0(this)}}function BF(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=fu(e),H0(t)}function $F(t){const e=t.parts_.pop();t.byteLength_-=fu(e),t.parts_.length>0&&(t.byteLength_-=1)}function H0(t){if(t.byteLength_>j0)throw new Error(t.errorPrefix_+"has a key path longer than "+j0+" bytes ("+t.byteLength_+").");if(t.parts_.length>q0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+q0+") or object contains a cycle "+Ss(t))}function Ss(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m extends $0{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new _m}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=1e3,qF=60*5*1e3,jF=3*1e3,K0=30*1e3,WF=1.3,HF=3e4,KF="server_kill",z0=3;class Fr extends B0{constructor(e,n,r,i,s,o,a,c){super();if(this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Fr.nextPersistentConnectionId_++,this.log_=qc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Kc,this.maxReconnectDelay_=qF,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Fw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_m.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Nh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(dt(s)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new un,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:o=>{const a=o.d;o.s==="ok"?(this.onDataUpdate_(r.p,a,!1,null),n.resolve(a)):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout(()=>{const o=this.outstandingGets_[s];o===void 0||i!==o||(delete this.outstandingGets_[s],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),n.reject(new Error("Client is offline.")))},jF),this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;Fr.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bn(e,"w")){const r=Qi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();on(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ZP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=K0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=XP(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+dt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):sm("Unrecognized action received from server: "+dt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Kc,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Kc,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>HF&&(this.reconnectDelay_=Kc),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*WF)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},l=function(h){O(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ct("getToken() completed but was canceled"):(Ct("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new MF(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,f=>{on(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(KF)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&on(h),c())}}}interrupt(e){Ct("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ct("Resuming connection for reason: "+e),delete this.interruptReasons_[e],hu(this.interruptReasons_)&&(this.reconnectDelay_=Kc,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>om(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new xe(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ct("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=z0&&(this.reconnectDelay_=K0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ct("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=z0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+c0.replace(/\./g,"-")]=1,lu()?e["framework.cordova"]=1:Va()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Nh.getInstance().currentlyOnline();return hu(this.interruptReasons_)&&e}}Fr.nextPersistentConnectionId_=0;Fr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new _e(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new _e(Mr,e),i=new _e(Mr,n);return this.compare(r,i)!==0}minPost(){return _e.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kh;class G0 extends Rh{static get __EMPTY_NODE(){return kh}static set __EMPTY_NODE(e){kh=e}compare(e,n){return Ts(e.name,n.name)}isDefinedOn(e){throw uo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return _e.MIN}maxPost(){return new _e(gr,kh)}makePost(e,n){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new _e(e,kh)}toString(){return".key"}}const mr=new G0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Nt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Nt.RED,this.left=i!=null?i:gn.EMPTY_NODE,this.right=s!=null?s:gn.EMPTY_NODE}copy(e,n,r,i,s){return new Nt(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return gn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return gn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Nt.RED=!0;Nt.BLACK=!1;class zF{copy(e,n,r,i,s){return this}insert(e,n,r){return new Nt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class gn{constructor(e,n=gn.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new gn(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Nt.BLACK,null,null))}remove(e){return new gn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Nt.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ph(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ph(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ph(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ph(this.root_,null,this.comparator_,!0,e)}}gn.EMPTY_NODE=new zF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GF(t,e){return Ts(t.name,e.name)}function vm(t,e){return Ts(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wm;function QF(t){wm=t}const Q0=function(t){return typeof t=="number"?"number:"+m0(t):"string:"+t},Y0=function(t){if(t.isLeafNode()){const e=t.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bn(e,".sv"),"Priority must be a string or number.")}else O(t===wm||t.isEmpty(),"priority of unexpected type.");O(t===wm||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J0;class Rt{constructor(e,n=Rt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Y0(this.priorityNode_)}static set __childrenNodeConstructor(e){J0=e}static get __childrenNodeConstructor(){return J0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Rt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Rt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ye(e)?this:me(e)===".priority"?this.priorityNode_:Rt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Rt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=me(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(O(r!==".priority"||Ei(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Rt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Be(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Q0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=m0(this.value_):e+=this.value_,this.lazyHash_=d0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Rt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Rt.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Rt.VALUE_TYPE_ORDER.indexOf(n),s=Rt.VALUE_TYPE_ORDER.indexOf(r);return O(i>=0,"Unknown leaf type: "+n),O(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Rt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let X0,Z0;function YF(t){X0=t}function JF(t){Z0=t}class XF extends Rh{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ts(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return _e.MIN}maxPost(){return new _e(gr,new Rt("[PRIORITY-POST]",Z0))}makePost(e,n){const r=X0(e);return new _e(n,new Rt("[PRIORITY-POST]",r))}toString(){return".priority"}}const $e=new XF;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZF=Math.log(2);class eU{constructor(e){const n=s=>parseInt(Math.log(s)/ZF,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Oh=function(t,e,n,r){t.sort(e);const i=function(c,l){const u=l-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new Nt(d,h.node,Nt.BLACK,null,null);{const f=parseInt(u/2,10)+c,g=i(c,f),y=i(f+1,l);return h=t[f],d=n?n(h):h,new Nt(d,h.node,Nt.BLACK,g,y)}},s=function(c){let l=null,u=null,h=t.length;const d=function(g,y){const _=h-g,w=h;h-=g;const S=i(_+1,w),L=t[_],U=n?n(L):L;f(new Nt(U,L.node,y,null,S))},f=function(g){l?(l.left=g,l=g):(u=g,l=g)};for(let g=0;g<c.count;++g){const y=c.nextBitIsOne(),_=Math.pow(2,c.count-(g+1));y?d(_,Nt.BLACK):(d(_,Nt.BLACK),d(_,Nt.RED))}return u},o=new eU(t.length),a=s(o);return new gn(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Em;const na={};class Ur{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return O(na&&$e,"ChildrenNode.ts has not been loaded"),Em=Em||new Ur({".priority":na},{".priority":$e}),Em}get(e){const n=Qi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof gn?n:null}hasIndex(e){return bn(this.indexSet_,e.toString())}addIndex(e,n){O(e!==mr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(_e.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Oh(r,e.getCompare()):a=na;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new Ur(u,l)}addToIndexes(e,n){const r=du(this.indexes_,(i,s)=>{const o=Qi(this.indexSet_,s);if(O(o,"Missing index implementation for "+s),i===na)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(_e.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Oh(a,o.getCompare())}else return na;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new _e(e.name,a))),c.insert(e,e.node)}});return new Ur(r,this.indexSet_)}removeFromIndexes(e,n){const r=du(this.indexes_,i=>{if(i===na)return i;{const s=n.get(e.name);return s?i.remove(new _e(e.name,s)):i}});return new Ur(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zc;class oe{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Y0(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return zc||(zc=new oe(new gn(vm),null,Ur.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zc}updatePriority(e){return this.children_.isEmpty()?this:new oe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?zc:n}}getChild(e){const n=me(e);return n===null?this:this.getImmediateChild(n).getChild(Be(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(O(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new _e(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?zc:this.priorityNode_;return new oe(i,o,s)}}updateChild(e,n){const r=me(e);if(r===null)return n;{O(me(e)!==".priority"||Ei(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Be(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild($e,(o,a)=>{n[o]=a.val(e),r++,s&&oe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Q0(this.getPriority().val())+":"),this.forEachChild($e,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":d0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new _e(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new _e(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new _e(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,_e.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,_e.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Gc?-1:0}withIndex(e){if(e===mr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new oe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===mr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator($e),i=n.getIterator($e);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===mr?null:this.indexMap_.get(e.toString())}}oe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class tU extends oe{constructor(){super(new gn(vm),oe.EMPTY_NODE,Ur.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return oe.EMPTY_NODE}isEmpty(){return!1}}const Gc=new tU;Object.defineProperties(_e,{MIN:{value:new _e(Mr,oe.EMPTY_NODE)},MAX:{value:new _e(gr,Gc)}});G0.__EMPTY_NODE=oe.EMPTY_NODE;Rt.__childrenNodeConstructor=oe;QF(Gc);JF(Gc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nU=!0;function Ze(t,e=null){if(t===null)return oe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Rt(n,Ze(e))}if(!(t instanceof Array)&&nU){const n=[];let r=!1;if(At(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Ze(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new _e(o,c)))}}),n.length===0)return oe.EMPTY_NODE;const s=Oh(n,GF,o=>o.name,vm);if(r){const o=Oh(n,$e.getCompare());return new oe(s,Ze(e),new Ur({".priority":o},{".priority":$e}))}else return new oe(s,Ze(e),Ur.Default)}else{let n=oe.EMPTY_NODE;return At(t,(r,i)=>{if(bn(t,r)&&r.substring(0,1)!=="."){const s=Ze(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ze(e))}}YF(Ze);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im extends Rh{constructor(e){super();this.indexPath_=e,O(!ye(e)&&me(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ts(e.name,n.name):s}makePost(e,n){const r=Ze(e),i=oe.EMPTY_NODE.updateChild(this.indexPath_,r);return new _e(n,i)}maxPost(){const e=oe.EMPTY_NODE.updateChild(this.indexPath_,Gc);return new _e(gr,e)}toString(){return Hc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU extends Rh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ts(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return _e.MIN}maxPost(){return _e.MAX}makePost(e,n){const r=Ze(e);return new _e(n,r)}toString(){return".value"}}const bm=new rU;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Tm="-",eS="z",tS=786,iU=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=ra.charAt(n%64),n=Math.floor(n/64);O(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ra.charAt(e[i]);return O(o.length===20,"nextPushId: Length should be 20."),o}}(),nS=function(t){if(t===""+am)return Tm;const e=Ch(t);if(e!=null)return""+(e+1);const n=new Array(t.length);for(let o=0;o<n.length;o++)n[o]=t.charAt(o);if(n.length<tS)return n.push(Tm),n.join("");let r=n.length-1;for(;r>=0&&n[r]===eS;)r--;if(r===-1)return gr;const i=n[r],s=ra.charAt(ra.indexOf(i)+1);return n[r]=s,n.slice(0,r+1).join("")},rS=function(t){if(t===""+y0)return Mr;const e=Ch(t);if(e!=null)return""+(e-1);const n=new Array(t.length);for(let r=0;r<n.length;r++)n[r]=t.charAt(r);return n[n.length-1]===Tm?n.length===1?""+am:(delete n[n.length-1],n.join("")):(n[n.length-1]=ra.charAt(ra.indexOf(n[n.length-1])-1),n.join("")+eS.repeat(tS-n.length))};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(t){return{type:"value",snapshotNode:t}}function ia(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Qc(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Yc(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function sU(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){O(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Qc(n,a)):O(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ia(n,r)):o.trackChildChange(Yc(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild($e,(i,s)=>{n.hasChild(i)||r.trackChildChange(Qc(i,s))}),n.isLeafNode()||n.forEachChild($e,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Yc(i,s,o))}else r.trackChildChange(ia(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?oe.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this.indexedFilter_=new Sm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Jc.getStartPost_(e),this.endPost_=Jc.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new _e(n,r))||(r=oe.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=oe.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(oe.EMPTY_NODE);const s=this;return n.forEachChild($e,(o,a)=>{s.matches(new _e(o,a))||(i=i.updateImmediateChild(o,oe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oU{constructor(e){this.rangedFilter_=new Jc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new _e(n,r))||(r=oe.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=oe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=oe.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let c;if(this.reverse_?c=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:c=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,c)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(oe.EMPTY_NODE);let s,o,a,c;if(this.reverse_){c=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const h=this.index_.getCompare();a=(d,f)=>h(f,d)}else c=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let l=0,u=!1;for(;c.hasNext();){const h=c.getNext();!u&&a(s,h)<=0&&(u=!0),u&&l<this.limit_&&a(h,o)<=0?l++:i=i.updateImmediateChild(h.name,oe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;O(a.numChildren()===this.limit_,"");const c=new _e(n,r),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,c);if(u&&!r.isEmpty()&&f>=0)return s!=null&&s.trackChildChange(Yc(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Qc(n,h));const y=a.updateImmediateChild(n,oe.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(ia(d.name,d.node)),y.updateImmediateChild(d.name,d.node)):y}}else return r.isEmpty()?e:u&&o(l,c)>=0?(s!=null&&(s.trackChildChange(Qc(l.name,l.node)),s.trackChildChange(ia(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(l.name,oe.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$e}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Mr}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:gr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$e}copy(){const e=new Dh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function aU(t){return t.loadsAllData()?new Sm(t.getIndex()):t.hasLimit()?new oU(t):new Jc(t)}function cU(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function lU(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Cm(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function uU(t,e,n){let r;if(t.index_===mr)typeof e=="string"&&(e=nS(e)),r=Cm(t,e,n);else{let i;n==null?i=gr:i=nS(n),r=Cm(t,e,i)}return r.startAfterSet_=!0,r}function Am(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function hU(t,e,n){let r,i;return t.index_===mr?(typeof e=="string"&&(e=rS(e)),i=Am(t,e,n)):(n==null?r=Mr:r=rS(n),i=Am(t,e,r)),i.endBeforeSet_=!0,i}function xh(t,e){const n=t.copy();return n.index_=e,n}function sS(t){const e={};if(t.isDefault())return e;let n;return t.index_===$e?n="$priority":t.index_===bm?n="$value":t.index_===mr?n="$key":(O(t.index_ instanceof Im,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=dt(n),t.startSet_&&(e.startAt=dt(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+dt(t.indexStartName_))),t.endSet_&&(e.endAt=dt(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+dt(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function oS(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==$e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh extends B0{constructor(e,n,r,i){super();this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=qc("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Lh.getListenId_(e,r),a={};this.listens_[o]=a;const c=sS(e._queryParams);this.restRequest_(s+".json",c,(l,u)=>{let h=u;if(l===404&&(h=null,l=null),l===null&&this.onDataUpdate_(s,h,!1,r),Qi(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,n){const r=Lh.getListenId_(e,n);delete this.listens_[r]}get(e){const n=sS(e._queryParams),r=e._path.toString(),i=new un;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Yi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ba(a.responseText)}catch(l){on("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&on("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dU{constructor(){this.rootNode_=oe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(){return{value:null,children:new Map}}function sa(t,e,n){if(ye(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=me(e);t.children.has(r)||t.children.set(r,Mh());const i=t.children.get(r);e=Be(e),sa(i,e,n)}}function Nm(t,e){if(ye(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild($e,(r,i)=>{sa(t,new xe(r),i)}),Nm(t,e)}}else if(t.children.size>0){const n=me(e);return e=Be(e),t.children.has(n)&&Nm(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Rm(t,e,n){t.value!==null?n(e,t.value):fU(t,(r,i)=>{const s=new xe(e.toString()+"/"+r);Rm(i,s,n)})}function fU(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pU{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&At(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=10*1e3,gU=30*1e3,mU=5*60*1e3;class yU{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new pU(e);const r=aS+(gU-aS)*Math.random();Wc(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;At(e,(i,s)=>{s>0&&bn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Wc(this.reportStats_.bind(this),Math.floor(Math.random()*2*mU))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Jn||(Jn={}));function km(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Pm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Om(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Jn.ACK_USER_WRITE,this.source=km()}operationForChild(e){if(ye(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new xe(e));return new Fh(Oe(),n,this.revert)}}else return O(me(this.path)===e,"operationForChild called for unrelated child."),new Fh(Be(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n){this.source=e,this.path=n,this.type=Jn.LISTEN_COMPLETE}operationForChild(e){return ye(this.path)?new Xc(this.source,Oe()):new Xc(this.source,Be(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Jn.OVERWRITE}operationForChild(e){return ye(this.path)?new Cs(this.source,Oe(),this.snap.getImmediateChild(e)):new Cs(this.source,Be(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Jn.MERGE}operationForChild(e){if(ye(this.path)){const n=this.children.subtree(new xe(e));return n.isEmpty()?null:n.value?new Cs(this.source,Oe(),n.value):new oa(this.source,Oe(),n)}else return O(me(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new oa(this.source,Be(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ye(e))return this.isFullyInitialized()&&!this.filtered_;const n=me(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _U{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function vU(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(sU(o.childName,o.snapshotNode))}),Zc(t,i,"child_removed",e,r,n),Zc(t,i,"child_added",e,r,n),Zc(t,i,"child_moved",s,r,n),Zc(t,i,"child_changed",e,r,n),Zc(t,i,"value",e,r,n),i}function Zc(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,c)=>EU(t,a,c)),o.forEach(a=>{const c=wU(t,a,s);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function wU(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function EU(t,e,n){if(e.childName==null||n.childName==null)throw uo("Should only compare child_ events.");const r=new _e(e.childName,e.snapshotNode),i=new _e(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t,e){return{eventCache:t,serverCache:e}}function el(t,e,n,r){return Uh(new Ii(e,n,r),t.serverCache)}function cS(t,e,n,r){return Uh(t.eventCache,new Ii(e,n,r))}function Vh(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function As(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dm;const IU=()=>(Dm||(Dm=new gn(rF)),Dm);class qe{constructor(e,n=IU()){this.value=e,this.children=n}static fromObject(e){let n=new qe(null);return At(e,(r,i)=>{n=n.set(new xe(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Oe(),value:this.value};if(ye(e))return null;{const r=me(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Be(e),n);return s!=null?{path:Xe(new xe(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ye(e))return this;{const n=me(e),r=this.children.get(n);return r!==null?r.subtree(Be(e)):new qe(null)}}set(e,n){if(ye(e))return new qe(n,this.children);{const r=me(e),s=(this.children.get(r)||new qe(null)).set(Be(e),n),o=this.children.insert(r,s);return new qe(this.value,o)}}remove(e){if(ye(e))return this.children.isEmpty()?new qe(null):new qe(null,this.children);{const n=me(e),r=this.children.get(n);if(r){const i=r.remove(Be(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new qe(null):new qe(this.value,s)}else return this}}get(e){if(ye(e))return this.value;{const n=me(e),r=this.children.get(n);return r?r.get(Be(e)):null}}setTree(e,n){if(ye(e))return n;{const r=me(e),s=(this.children.get(r)||new qe(null)).setTree(Be(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new qe(this.value,o)}}fold(e){return this.fold_(Oe(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Xe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Oe(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(ye(e))return null;{const s=me(e),o=this.children.get(s);return o?o.findOnPath_(Be(e),Xe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Oe(),n)}foreachOnPath_(e,n,r){if(ye(e))return this;{this.value&&r(n,this.value);const i=me(e),s=this.children.get(i);return s?s.foreachOnPath_(Be(e),Xe(n,i),r):new qe(null)}}foreach(e){this.foreach_(Oe(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Xe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.writeTree_=e}static empty(){return new Xn(new qe(null))}}function tl(t,e,n){if(ye(e))return new Xn(new qe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=an(i,e);return s=s.updateChild(o,n),new Xn(t.writeTree_.set(i,s))}else{const i=new qe(n),s=t.writeTree_.setTree(e,i);return new Xn(s)}}}function xm(t,e,n){let r=t;return At(n,(i,s)=>{r=tl(r,Xe(e,i),s)}),r}function lS(t,e){if(ye(e))return Xn.empty();{const n=t.writeTree_.setTree(e,new qe(null));return new Xn(n)}}function Lm(t,e){return Ns(t,e)!=null}function Ns(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(an(n.path,e)):null}function uS(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild($e,(r,i)=>{e.push(new _e(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new _e(r,i.value))}),e}function bi(t,e){if(ye(e))return t;{const n=Ns(t,e);return n!=null?new Xn(new qe(n)):new Xn(t.writeTree_.subtree(e))}}function Mm(t){return t.writeTree_.isEmpty()}function aa(t,e){return hS(Oe(),t.writeTree_,e)}function hS(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(O(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=hS(Xe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Xe(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t,e){return mS(e,t)}function bU(t,e,n,r,i){O(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=tl(t.visibleWrites,e,n)),t.lastWriteId=r}function TU(t,e,n,r){O(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=xm(t.visibleWrites,e,n),t.lastWriteId=r}function SU(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function CU(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);O(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&AU(a,r.path)?i=!1:Vn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return NU(t),!0;if(r.snap)t.visibleWrites=lS(t.visibleWrites,r.path);else{const a=r.children;At(a,c=>{t.visibleWrites=lS(t.visibleWrites,Xe(r.path,c))})}return!0}else return!1}function AU(t,e){if(t.snap)return Vn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Vn(Xe(t.path,n),e))return!0;return!1}function NU(t){t.visibleWrites=dS(t.allWrites,RU,Oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function RU(t){return t.visible}function dS(t,e,n){let r=Xn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Vn(n,o)?(a=an(n,o),r=tl(r,a,s.snap)):Vn(o,n)&&(a=an(o,n),r=tl(r,Oe(),s.snap.getChild(a)));else if(s.children){if(Vn(n,o))a=an(n,o),r=xm(r,a,s.children);else if(Vn(o,n))if(a=an(o,n),ye(a))r=xm(r,Oe(),s.children);else{const c=Qi(s.children,me(a));if(c){const l=c.getChild(Be(a));r=tl(r,Oe(),l)}}}else throw uo("WriteRecord should have .snap or .children")}}return r}function fS(t,e,n,r,i){if(!r&&!i){const s=Ns(t.visibleWrites,e);if(s!=null)return s;{const o=bi(t.visibleWrites,e);if(Mm(o))return n;if(n==null&&!Lm(o,Oe()))return null;{const a=n||oe.EMPTY_NODE;return aa(o,a)}}}else{const s=bi(t.visibleWrites,e);if(!i&&Mm(s))return n;if(!i&&n==null&&!Lm(s,Oe()))return null;{const o=function(l){return(l.visible||i)&&(!r||!~r.indexOf(l.writeId))&&(Vn(l.path,e)||Vn(e,l.path))},a=dS(t.allWrites,o,e),c=n||oe.EMPTY_NODE;return aa(a,c)}}}function kU(t,e,n){let r=oe.EMPTY_NODE;const i=Ns(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild($e,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=bi(t.visibleWrites,e);return n.forEachChild($e,(o,a)=>{const c=aa(bi(s,new xe(o)),a);r=r.updateImmediateChild(o,c)}),uS(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=bi(t.visibleWrites,e);return uS(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function PU(t,e,n,r,i){O(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Xe(e,n);if(Lm(t.visibleWrites,s))return null;{const o=bi(t.visibleWrites,s);return Mm(o)?i.getChild(n):aa(o,i.getChild(n))}}function OU(t,e,n,r){const i=Xe(e,n),s=Ns(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=bi(t.visibleWrites,i);return aa(o,r.getNode().getImmediateChild(n))}else return null}function DU(t,e){return Ns(t.visibleWrites,e)}function xU(t,e,n,r,i,s,o){let a;const c=bi(t.visibleWrites,e),l=Ns(c,Oe());if(l!=null)a=l;else if(n!=null)a=aa(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let f=d.getNext();for(;f&&u.length<i;)h(f,r)!==0&&u.push(f),f=d.getNext();return u}else return[]}function LU(){return{visibleWrites:Xn.empty(),allWrites:[],lastWriteId:-1}}function $h(t,e,n,r){return fS(t.writeTree,t.treePath,e,n,r)}function Fm(t,e){return kU(t.writeTree,t.treePath,e)}function pS(t,e,n,r){return PU(t.writeTree,t.treePath,e,n,r)}function qh(t,e){return DU(t.writeTree,Xe(t.treePath,e))}function MU(t,e,n,r,i,s){return xU(t.writeTree,t.treePath,e,n,r,i,s)}function Um(t,e,n){return OU(t.writeTree,t.treePath,e,n)}function gS(t,e){return mS(Xe(t.treePath,e),t.writeTree)}function mS(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FU{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;O(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),O(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Yc(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Qc(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ia(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Yc(r,e.snapshotNode,i.oldSnap));else throw uo("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UU{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const yS=new UU;class Vm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ii(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Um(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:As(this.viewCache_),s=MU(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VU(t){return{filter:t}}function BU(t,e){O(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function $U(t,e,n,r,i){const s=new FU;let o,a;if(n.type===Jn.OVERWRITE){const l=n;l.source.fromUser?o=Bm(t,e,l.path,l.snap,r,i,s):(O(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!ye(l.path),o=jh(t,e,l.path,l.snap,r,i,a,s))}else if(n.type===Jn.MERGE){const l=n;l.source.fromUser?o=jU(t,e,l.path,l.children,r,i,s):(O(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=$m(t,e,l.path,l.children,r,i,a,s))}else if(n.type===Jn.ACK_USER_WRITE){const l=n;l.revert?o=KU(t,e,l.path,r,i,s):o=WU(t,e,l.path,l.affectedTree,r,i,s)}else if(n.type===Jn.LISTEN_COMPLETE)o=HU(t,e,n.path,r,s);else throw uo("Unknown operation type: "+n.type);const c=s.getChanges();return qU(e,o,c),{viewCache:o,changes:c}}function qU(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Vh(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(iS(Vh(e)))}}function _S(t,e,n,r,i,s){const o=e.eventCache;if(qh(r,n)!=null)return e;{let a,c;if(ye(n))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=As(e),u=l instanceof oe?l:oe.EMPTY_NODE,h=Fm(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const l=$h(r,As(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=me(n);if(l===".priority"){O(Ei(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=pS(r,n,u,c);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Be(n);let h;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=pS(r,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(l).updateChild(u,d):h=o.getNode().getImmediateChild(l)}else h=Um(r,l,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),l,h,u,i,s):a=o.getNode()}}return el(e,a,o.isFullyInitialized()||ye(n),t.filter.filtersNodes())}}function jh(t,e,n,r,i,s,o,a){const c=e.serverCache;let l;const u=o?t.filter:t.filter.getIndexedFilter();if(ye(n))l=u.updateFullNode(c.getNode(),r,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(n,r);l=u.updateFullNode(c.getNode(),f,null)}else{const f=me(n);if(!c.isCompleteForPath(n)&&Ei(n)>1)return e;const g=Be(n),_=c.getNode().getImmediateChild(f).updateChild(g,r);f===".priority"?l=u.updatePriority(c.getNode(),_):l=u.updateChild(c.getNode(),f,_,g,yS,null)}const h=cS(e,l,c.isFullyInitialized()||ye(n),u.filtersNodes()),d=new Vm(i,h,s);return _S(t,h,n,i,d,a)}function Bm(t,e,n,r,i,s,o){const a=e.eventCache;let c,l;const u=new Vm(i,e,s);if(ye(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=el(e,l,!0,t.filter.filtersNodes());else{const h=me(n);if(h===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),c=el(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=Be(n),f=a.getNode().getImmediateChild(h);let g;if(ye(d))g=r;else{const y=u.getCompleteChild(h);y!=null?mm(d)===".priority"&&y.getChild(W0(d)).isEmpty()?g=y:g=y.updateChild(d,r):g=oe.EMPTY_NODE}if(f.equals(g))c=e;else{const y=t.filter.updateChild(a.getNode(),h,g,d,u,o);c=el(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function vS(t,e){return t.eventCache.isCompleteForChild(e)}function jU(t,e,n,r,i,s,o){let a=e;return r.foreach((c,l)=>{const u=Xe(n,c);vS(e,me(u))&&(a=Bm(t,a,u,l,i,s,o))}),r.foreach((c,l)=>{const u=Xe(n,c);vS(e,me(u))||(a=Bm(t,a,u,l,i,s,o))}),a}function wS(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function $m(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;ye(n)?l=r:l=new qe(null).setTree(n,r);const u=e.serverCache.getNode();return l.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),g=wS(t,f,d);c=jh(t,c,new xe(h),g,i,s,o,a)}}),l.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===void 0;if(!u.hasChild(h)&&!f){const g=e.serverCache.getNode().getImmediateChild(h),y=wS(t,g,d);c=jh(t,c,new xe(h),y,i,s,o,a)}}),c}function WU(t,e,n,r,i,s,o){if(qh(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(ye(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return jh(t,e,n,c.getNode().getChild(n),i,s,a,o);if(ye(n)){let l=new qe(null);return c.getNode().forEachChild(mr,(u,h)=>{l=l.set(new xe(u),h)}),$m(t,e,n,l,i,s,a,o)}else return e}else{let l=new qe(null);return r.foreach((u,h)=>{const d=Xe(n,u);c.isCompleteForPath(d)&&(l=l.set(u,c.getNode().getChild(d)))}),$m(t,e,n,l,i,s,a,o)}}function HU(t,e,n,r,i){const s=e.serverCache,o=cS(e,s.getNode(),s.isFullyInitialized()||ye(n),s.isFiltered());return _S(t,o,n,r,yS,i)}function KU(t,e,n,r,i,s){let o;if(qh(r,n)!=null)return e;{const a=new Vm(r,e,i),c=e.eventCache.getNode();let l;if(ye(n)||me(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=$h(r,As(e));else{const h=e.serverCache.getNode();O(h instanceof oe,"serverChildren would be complete if leaf node"),u=Fm(r,h)}u=u,l=t.filter.updateFullNode(c,u,s)}else{const u=me(n);let h=Um(r,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?l=t.filter.updateChild(c,u,h,Be(n),a,s):e.eventCache.getNode().hasChild(u)?l=t.filter.updateChild(c,u,oe.EMPTY_NODE,Be(n),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$h(r,As(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||qh(r,Oe())!=null,el(e,l,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zU{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Sm(r.getIndex()),s=aU(r);this.processor_=VU(s);const o=n.serverCache,a=n.eventCache,c=i.updateFullNode(oe.EMPTY_NODE,o.getNode(),null),l=s.updateFullNode(oe.EMPTY_NODE,a.getNode(),null),u=new Ii(c,o.isFullyInitialized(),i.filtersNodes()),h=new Ii(l,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Uh(h,u),this.eventGenerator_=new _U(this.query_)}get query(){return this.query_}}function GU(t){return t.viewCache_.serverCache.getNode()}function QU(t){return Vh(t.viewCache_)}function YU(t,e){const n=As(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ye(e)&&!n.getImmediateChild(me(e)).isEmpty())?n.getChild(e):null}function ES(t){return t.eventRegistrations_.length===0}function JU(t,e){t.eventRegistrations_.push(e)}function IS(t,e,n){const r=[];if(n){O(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function bS(t,e,n,r){e.type===Jn.MERGE&&e.source.queryId!==null&&(O(As(t.viewCache_),"We should always have a full cache before handling merges"),O(Vh(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=$U(t.processor_,i,e,n,r);return BU(t.processor_,s.viewCache),O(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,TS(t,s.changes,s.viewCache.eventCache.getNode(),null)}function XU(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild($e,(s,o)=>{r.push(ia(s,o))}),n.isFullyInitialized()&&r.push(iS(n.getNode())),TS(t,r,n.getNode(),e)}function TS(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return vU(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wh;class SS{constructor(){this.views=new Map}}function ZU(t){O(!Wh,"__referenceConstructor has already been defined"),Wh=t}function eV(){return O(Wh,"Reference.ts has not been loaded"),Wh}function tV(t){return t.views.size===0}function qm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return O(s!=null,"SyncTree gave us an op for an invalid query."),bS(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(bS(o,e,n,r));return s}}function CS(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=$h(n,i?r:null),c=!1;a?c=!0:r instanceof oe?(a=Fm(n,r),c=!1):(a=oe.EMPTY_NODE,c=!1);const l=Uh(new Ii(a,c,!1),new Ii(r,i,!1));return new zU(e,l)}return o}function nV(t,e,n,r,i,s){const o=CS(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),JU(o,n),XU(o,n)}function rV(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Si(t);if(i==="default")for(const[c,l]of t.views.entries())o=o.concat(IS(l,n,r)),ES(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const c=t.views.get(i);c&&(o=o.concat(IS(c,n,r)),ES(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||s.push(c.query)))}return a&&!Si(t)&&s.push(new(eV())(e._repo,e._path)),{removed:s,events:o}}function AS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ti(t,e){let n=null;for(const r of t.views.values())n=n||YU(r,e);return n}function NS(t,e){if(e._queryParams.loadsAllData())return Hh(t);{const r=e._queryIdentifier;return t.views.get(r)}}function RS(t,e){return NS(t,e)!=null}function Si(t){return Hh(t)!=null}function Hh(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kh;function iV(t){O(!Kh,"__referenceConstructor has already been defined"),Kh=t}function sV(){return O(Kh,"Reference.ts has not been loaded"),Kh}let oV=1;class kS{constructor(e){this.listenProvider_=e,this.syncPointTree_=new qe(null),this.pendingWriteTree_=LU(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function jm(t,e,n,r,i){return bU(t.pendingWriteTree_,e,n,r,i),i?ca(t,new Cs(km(),e,n)):[]}function aV(t,e,n,r){TU(t.pendingWriteTree_,e,n,r);const i=qe.fromObject(n);return ca(t,new oa(km(),e,i))}function Ci(t,e,n=!1){const r=SU(t.pendingWriteTree_,e);if(CU(t.pendingWriteTree_,e)){let s=new qe(null);return r.snap!=null?s=s.set(Oe(),!0):At(r.children,o=>{s=s.set(new xe(o),!0)}),ca(t,new Fh(r.path,s,n))}else return[]}function nl(t,e,n){return ca(t,new Cs(Pm(),e,n))}function cV(t,e,n){const r=qe.fromObject(n);return ca(t,new oa(Pm(),e,r))}function lV(t,e){return ca(t,new Xc(Pm(),e))}function uV(t,e,n){const r=Hm(t,n);if(r){const i=Km(r),s=i.path,o=i.queryId,a=an(s,e),c=new Xc(Om(o),a);return zm(t,s,c)}else return[]}function Wm(t,e,n,r){const i=e._path,s=t.syncPointTree_.get(i);let o=[];if(s&&(e._queryIdentifier==="default"||RS(s,e))){const a=rV(s,e,n,r);tV(s)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=a.removed;o=a.events;const l=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(h,d)=>Si(d));if(l&&!u){const h=t.syncPointTree_.subtree(i);if(!h.isEmpty()){const d=pV(h);for(let f=0;f<d.length;++f){const g=d[f],y=g.query,_=xS(t,g);t.listenProvider_.startListening(rl(y),Gh(t,y),_.hashFn,_.onComplete)}}}if(!u&&c.length>0&&!r)if(l){const h=null;t.listenProvider_.stopListening(rl(e),h)}else c.forEach(h=>{const d=t.queryToTagMap.get(Qh(h));t.listenProvider_.stopListening(rl(h),d)});gV(t,c)}return o}function hV(t,e,n,r){const i=Hm(t,r);if(i!=null){const s=Km(i),o=s.path,a=s.queryId,c=an(o,e),l=new Cs(Om(a),c,n);return zm(t,o,l)}else return[]}function dV(t,e,n,r){const i=Hm(t,r);if(i){const s=Km(i),o=s.path,a=s.queryId,c=an(o,e),l=qe.fromObject(n),u=new oa(Om(a),c,l);return zm(t,o,u)}else return[]}function PS(t,e,n){const r=e._path;let i=null,s=!1;t.syncPointTree_.foreachOnPath(r,(h,d)=>{const f=an(h,r);i=i||Ti(d,f),s=s||Si(d)});let o=t.syncPointTree_.get(r);o?(s=s||Si(o),i=i||Ti(o,Oe())):(o=new SS,t.syncPointTree_=t.syncPointTree_.set(r,o));let a;i!=null?a=!0:(a=!1,i=oe.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((d,f)=>{const g=Ti(f,Oe());g&&(i=i.updateImmediateChild(d,g))}));const c=RS(o,e);if(!c&&!e._queryParams.loadsAllData()){const h=Qh(e);O(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const d=mV();t.queryToTagMap.set(h,d),t.tagToQueryMap.set(d,h)}const l=Bh(t.pendingWriteTree_,r);let u=nV(o,e,n,l,i,a);if(!c&&!s){const h=NS(o,e);u=u.concat(yV(t,e,h))}return u}function zh(t,e,n){const r=!0,i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=an(o,e),l=Ti(a,c);if(l)return l});return fS(i,e,s,n,r)}function fV(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(l,u)=>{const h=an(l,n);r=r||Ti(u,h)});let i=t.syncPointTree_.get(n);i?r=r||Ti(i,Oe()):(i=new SS,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Ii(r,!0,!1):null,a=Bh(t.pendingWriteTree_,e._path),c=CS(i,e,a,s?o.getNode():oe.EMPTY_NODE,s);return QU(c)}function ca(t,e){return OS(e,t.syncPointTree_,null,Bh(t.pendingWriteTree_,Oe()))}function OS(t,e,n,r){if(ye(t.path))return DS(t,e,n,r);{const i=e.get(Oe());n==null&&i!=null&&(n=Ti(i,Oe()));let s=[];const o=me(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,u=gS(r,o);s=s.concat(OS(a,c,l,u))}return i&&(s=s.concat(qm(i,t,r,n))),s}}function DS(t,e,n,r){const i=e.get(Oe());n==null&&i!=null&&(n=Ti(i,Oe()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=gS(r,o),u=t.operationForChild(o);u&&(s=s.concat(DS(u,a,c,l)))}),i&&(s=s.concat(qm(i,t,r,n))),s}function xS(t,e){const n=e.query,r=Gh(t,n);return{hashFn:()=>(GU(e)||oe.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?uV(t,n._path,r):lV(t,n._path);{const s=oF(i,n);return Wm(t,n,null,s)}}}}function Gh(t,e){const n=Qh(e);return t.queryToTagMap.get(n)}function Qh(t){return t._path.toString()+"$"+t._queryIdentifier}function Hm(t,e){return t.tagToQueryMap.get(e)}function Km(t){const e=t.indexOf("$");return O(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new xe(t.substr(0,e))}}function zm(t,e,n){const r=t.syncPointTree_.get(e);O(r,"Missing sync point for query tag that we're tracking");const i=Bh(t.pendingWriteTree_,e);return qm(r,n,i,null)}function pV(t){return t.fold((e,n,r)=>{if(n&&Si(n))return[Hh(n)];{let i=[];return n&&(i=AS(n)),At(r,(s,o)=>{i=i.concat(o)}),i}})}function rl(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(sV())(t._repo,t._path):t}function gV(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Qh(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function mV(){return oV++}function yV(t,e,n){const r=e._path,i=Gh(t,e),s=xS(t,n),o=t.listenProvider_.startListening(rl(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)O(!Si(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,h)=>{if(!ye(l)&&u&&Si(u))return[Hh(u).query];{let d=[];return u&&(d=d.concat(AS(u).map(f=>f.query))),At(h,(f,g)=>{d=d.concat(g)}),d}});for(let l=0;l<c.length;++l){const u=c[l];t.listenProvider_.stopListening(rl(u),Gh(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Gm(n)}node(){return this.node_}}class Qm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Xe(this.path_,e);return new Qm(this.syncTree_,n)}node(){return zh(this.syncTree_,this.path_)}}const _V=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},LS=function(t,e,n){if(!t||typeof t!="object")return t;if(O(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return vV(t[".sv"],e,n);if(typeof t[".sv"]=="object")return wV(t[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},vV=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:O(!1,"Unexpected server value: "+t)}},wV=function(t,e,n){t.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&O(!1,"Unexpected increment value: "+r);const i=e.node();if(O(i!==null&&typeof i!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},MS=function(t,e,n,r){return Jm(e,new Qm(n,t),r)},Ym=function(t,e,n){return Jm(t,new Gm(e),n)};function Jm(t,e,n){const r=t.getPriority().val(),i=LS(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=LS(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Rt(a,Ze(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Rt(i))),o.forEachChild($e,(a,c)=>{const l=Jm(c,e.getImmediateChild(a),n);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Yh(t,e){let n=e instanceof xe?e:new xe(e),r=t,i=me(n);for(;i!==null;){const s=Qi(r.node.children,i)||{children:{},childCount:0};r=new Xm(i,r,s),n=Be(n),i=me(n)}return r}function Rs(t){return t.node.value}function Zm(t,e){t.node.value=e,ey(t)}function FS(t){return t.node.childCount>0}function EV(t){return Rs(t)===void 0&&!FS(t)}function Jh(t,e){At(t.node.children,(n,r)=>{e(new Xm(n,t,r))})}function US(t,e,n,r){n&&!r&&e(t),Jh(t,i=>{US(i,e,!0,r)}),n&&r&&e(t)}function IV(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function il(t){return new xe(t.parent===null?t.name:il(t.parent)+"/"+t.name)}function ey(t){t.parent!==null&&bV(t.parent,t.name,t)}function bV(t,e,n){const r=EV(n),i=bn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ey(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ey(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TV=/[\[\].#$\/\u0000-\u001F\u007F]/,SV=/[\[\].#$\u0000-\u001F\u007F]/,ty=10*1024*1024,Xh=function(t){return typeof t=="string"&&t.length!==0&&!TV.test(t)},VS=function(t){return typeof t=="string"&&t.length!==0&&!SV.test(t)},CV=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),VS(t)},sl=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Sh(t)||t&&typeof t=="object"&&bn(t,".sv")},yr=function(t,e,n,r){r&&e===void 0||ol(hn(t,"value"),e,n)},ol=function(t,e,n){const r=n instanceof xe?new VF(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ss(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ss(r)+" with contents = "+e.toString());if(Sh(e))throw new Error(t+"contains "+e.toString()+" "+Ss(r));if(typeof e=="string"&&e.length>ty/3&&fu(e)>ty)throw new Error(t+"contains a string greater than "+ty+" utf8 bytes "+Ss(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(At(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Xh(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ss(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);BF(r,o),ol(t,a,r),$F(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ss(r)+" in addition to actual children.")}},AV=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Hc(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Xh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(UF);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Vn(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},BS=function(t,e,n,r){if(r&&e===void 0)return;const i=hn(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];At(e,(o,a)=>{const c=new xe(o);if(ol(i,a,Xe(n,c)),mm(c)===".priority"&&!sl(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(c)}),AV(i,s)},ny=function(t,e,n){if(!(n&&e===void 0)){if(Sh(e))throw new Error(hn(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!sl(e))throw new Error(hn(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},al=function(t,e,n,r){if(!(r&&n===void 0)&&!Xh(n))throw new Error(hn(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},cl=function(t,e,n,r){if(!(r&&n===void 0)&&!VS(n))throw new Error(hn(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},NV=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),cl(t,e,n,r)},Bn=function(t,e){if(me(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},$S=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!CV(n))throw new Error(hn(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RV{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Zh(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ym(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function ry(t,e,n){Zh(t,n),qS(t,r=>ym(r,e))}function $n(t,e,n){Zh(t,n),qS(t,r=>Vn(r,e)||Vn(e,r))}function qS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(kV(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function kV(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();bs&&Ct("event: "+n.toString()),Zo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS="repo_interrupt",PV=25;class OV{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RV,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mh(),this.transactionQueueTree_=new Xm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function DV(t,e,n){if(t.stats_=dm(t.repoInfo_),t.forceRestClient_||cF())t.server_=new Lh(t.repoInfo_,(r,i,s,o)=>{HS(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>KS(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{dt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Fr(t.repoInfo_,e,(r,i,s,o)=>{HS(t,r,i,s,o)},r=>{KS(t,r)},r=>{xV(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=pF(t.repoInfo_,()=>new yU(t.stats_,t.server_)),t.infoData_=new dU,t.infoSyncTree_=new kS({startListening:(r,i,s,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=nl(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),iy(t,"connected",!1),t.serverSyncTree_=new kS({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,c)=>{const l=o(a,c);$n(t.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function WS(t){const n=t.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ll(t){return _V({timestamp:WS(t)})}function HS(t,e,n,r,i){t.dataUpdateCount++;const s=new xe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const c=du(n,l=>Ze(l));o=dV(t.serverSyncTree_,s,c,i)}else{const c=Ze(n);o=hV(t.serverSyncTree_,s,c,i)}else if(r){const c=du(n,l=>Ze(l));o=cV(t.serverSyncTree_,s,c)}else{const c=Ze(n);o=nl(t.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=ua(t,s)),$n(t.eventQueue_,a,o)}function KS(t,e){iy(t,"connected",e),e===!1&&FV(t)}function xV(t,e){At(e,(n,r)=>{iy(t,n,r)})}function iy(t,e,n){const r=new xe("/.info/"+e),i=Ze(n);t.infoData_.updateSnapshot(r,i);const s=nl(t.infoSyncTree_,r,i);$n(t.eventQueue_,r,s)}function ed(t){return t.nextWriteId_++}function LV(t,e){const n=fV(t.serverSyncTree_,e);return n!=null?Promise.resolve(n):t.server_.get(e).then(r=>{const i=Ze(r).withIndex(e._queryParams.getIndex()),s=nl(t.serverSyncTree_,e._path,i);return ry(t.eventQueue_,e._path,s),Promise.resolve(i)},r=>(la(t,"get for query "+dt(e)+" failed: "+r),Promise.reject(new Error(r))))}function sy(t,e,n,r,i){la(t,"set",{path:e.toString(),value:n,priority:r});const s=ll(t),o=Ze(n,r),a=zh(t.serverSyncTree_,e),c=Ym(o,a,s),l=ed(t),u=jm(t.serverSyncTree_,e,c,l,!0);Zh(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,f)=>{const g=d==="ok";g||on("set at "+e+" failed: "+d);const y=Ci(t.serverSyncTree_,l,!g);$n(t.eventQueue_,e,y),Ai(t,i,d,f)});const h=cy(t,e);ua(t,h),$n(t.eventQueue_,h,[])}function MV(t,e,n,r){la(t,"update",{path:e.toString(),value:n});let i=!0;const s=ll(t),o={};if(At(n,(a,c)=>{i=!1,o[a]=MS(Xe(e,a),Ze(c),t.serverSyncTree_,s)}),i)Ct("update() called with empty data.  Don't do anything."),Ai(t,r,"ok",void 0);else{const a=ed(t),c=aV(t.serverSyncTree_,e,o,a);Zh(t.eventQueue_,c),t.server_.merge(e.toString(),n,(l,u)=>{const h=l==="ok";h||on("update at "+e+" failed: "+l);const d=Ci(t.serverSyncTree_,a,!h),f=d.length>0?ua(t,e):e;$n(t.eventQueue_,f,d),Ai(t,r,l,u)}),At(n,l=>{const u=cy(t,Xe(e,l));ua(t,u)}),$n(t.eventQueue_,e,[])}}function FV(t){la(t,"onDisconnectEvents");const e=ll(t),n=Mh();Rm(t.onDisconnect_,Oe(),(i,s)=>{const o=MS(i,s,t.serverSyncTree_,e);sa(n,i,o)});let r=[];Rm(n,Oe(),(i,s)=>{r=r.concat(nl(t.serverSyncTree_,i,s));const o=cy(t,i);ua(t,o)}),t.onDisconnect_=Mh(),$n(t.eventQueue_,Oe(),r)}function UV(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&Nm(t.onDisconnect_,e),Ai(t,n,r,i)})}function zS(t,e,n,r){const i=Ze(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&sa(t.onDisconnect_,e,i),Ai(t,r,s,o)})}function VV(t,e,n,r,i){const s=Ze(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&sa(t.onDisconnect_,e,s),Ai(t,i,o,a)})}function BV(t,e,n,r){if(hu(n)){Ct("onDisconnect().update() called with empty data.  Don't do anything."),Ai(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&At(n,(o,a)=>{const c=Ze(a);sa(t.onDisconnect_,Xe(e,o),c)}),Ai(t,r,i,s)})}function $V(t,e,n){let r;me(e._path)===".info"?r=PS(t.infoSyncTree_,e,n):r=PS(t.serverSyncTree_,e,n),ry(t.eventQueue_,e._path,r)}function oy(t,e,n){let r;me(e._path)===".info"?r=Wm(t.infoSyncTree_,e,n):r=Wm(t.serverSyncTree_,e,n),ry(t.eventQueue_,e._path,r)}function GS(t){t.persistentConnection_&&t.persistentConnection_.interrupt(jS)}function qV(t){t.persistentConnection_&&t.persistentConnection_.resume(jS)}function la(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ct(n,...e)}function Ai(t,e,n,r){e&&Zo(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function jV(t,e,n,r,i,s){la(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:h0(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=ay(t,e,void 0);o.currentInputSnapshot=a;const c=o.update(a.val());if(c===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{ol("transaction failed: Data returned ",c,o.path),o.status=0;const l=Yh(t.transactionQueueTree_,e),u=Rs(l)||[];u.push(o),Zm(l,u);let h;typeof c=="object"&&c!==null&&bn(c,".priority")?(h=Qi(c,".priority"),O(sl(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(zh(t.serverSyncTree_,e)||oe.EMPTY_NODE).getPriority().val();const d=ll(t),f=Ze(c,h),g=Ym(f,a,d);o.currentOutputSnapshotRaw=f,o.currentOutputSnapshotResolved=g,o.currentWriteId=ed(t);const y=jm(t.serverSyncTree_,e,g,o.currentWriteId,o.applyLocally);$n(t.eventQueue_,e,y),td(t,t.transactionQueueTree_)}}function ay(t,e,n){return zh(t.serverSyncTree_,e,n)||oe.EMPTY_NODE}function td(t,e=t.transactionQueueTree_){if(e||nd(t,e),Rs(e)){const n=YS(t,e);O(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&WV(t,il(e),n)}else FS(e)&&Jh(e,n=>{td(t,n)})}function WV(t,e,n){const r=n.map(l=>l.currentWriteId),i=ay(t,e,r);let s=i;const o=i.hash();for(let l=0;l<n.length;l++){const u=n[l];O(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=an(e,u.path);s=s.updateChild(h,u.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,l=>{la(t,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Ci(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();nd(t,Yh(t.transactionQueueTree_,e)),td(t,t.transactionQueueTree_),$n(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Zo(h[d])}else{if(l==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{on("transaction at "+c.toString()+" failed: "+l);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=l}ua(t,e)}},o)}function ua(t,e){const n=QS(t,e),r=il(n),i=YS(t,n);return HV(t,i,r),r}function HV(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=an(n,c.path);let u=!1,h;if(O(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Ci(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=PV)u=!0,h="maxretry",i=i.concat(Ci(t.serverSyncTree_,c.currentWriteId,!0));else{const d=ay(t,c.path,o);c.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){ol("transaction failed: Data returned ",f,c.path);let g=Ze(f);typeof f=="object"&&f!=null&&bn(f,".priority")||(g=g.updatePriority(d.getPriority()));const _=c.currentWriteId,w=ll(t),S=Ym(g,d,w);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=S,c.currentWriteId=ed(t),o.splice(o.indexOf(_),1),i=i.concat(jm(t.serverSyncTree_,c.path,S,c.currentWriteId,c.applyLocally)),i=i.concat(Ci(t.serverSyncTree_,_,!0))}else u=!0,h="nodata",i=i.concat(Ci(t.serverSyncTree_,c.currentWriteId,!0))}$n(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}nd(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Zo(r[a]);td(t,t.transactionQueueTree_)}function QS(t,e){let n,r=t.transactionQueueTree_;for(n=me(e);n!==null&&Rs(r)===void 0;)r=Yh(r,n),e=Be(e),n=me(e);return r}function YS(t,e){const n=[];return JS(t,e,n),n.sort((r,i)=>r.order-i.order),n}function JS(t,e,n){const r=Rs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Jh(e,i=>{JS(t,i,n)})}function nd(t,e){const n=Rs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Zm(e,n.length>0?n:void 0)}Jh(e,r=>{nd(t,r)})}function cy(t,e){const n=il(QS(t,e)),r=Yh(t.transactionQueueTree_,e);return IV(r,i=>{ly(t,i)}),ly(t,r),US(r,i=>{ly(t,i)}),n}function ly(t,e){const n=Rs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(O(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(O(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ci(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Zm(e,void 0):n.length=s+1,$n(t.eventQueue_,il(e),i);for(let o=0;o<r.length;o++)Zo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KV(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(s){}e+="/"+i}return e}function zV(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):on(`Invalid query segment '${n}' in query '${t}'`)}return e}const uy=function(t,e){const n=GV(t),r=n.namespace;n.domain==="firebase.com"&&pr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&pr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||tF();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new C0(n.host,n.secure,r,e,i,"",r!==n.subdomain),path:new xe(n.pathString)}},GV=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=KV(t.substring(u,h)));const d=zV(t.substring(Math.min(t.length,h)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")n="localhost";else if(f.split(".").length<=2)n=f;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+dt(this.snapshot.exportVal())}}class ZS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return O(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QV{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new un;return UV(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Bn("OnDisconnect.remove",this._path);const e=new un;return zS(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Bn("OnDisconnect.set",this._path),yr("OnDisconnect.set",e,this._path,!1);const n=new un;return zS(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Bn("OnDisconnect.setWithPriority",this._path),yr("OnDisconnect.setWithPriority",e,this._path,!1),ny("OnDisconnect.setWithPriority",n,!1);const r=new un;return VV(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){Bn("OnDisconnect.update",this._path),BS("OnDisconnect.update",e,this._path,!1);const n=new un;return BV(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return ye(this._path)?null:mm(this._path)}get ref(){return new qn(this._repo,this._path)}get _queryIdentifier(){const e=oS(this._queryParams),n=om(e);return n==="{}"?"default":n}get _queryObject(){return oS(this._queryParams)}isEqual(e){if(e=K(e),!(e instanceof mn))return!1;const n=this._repo===e._repo,r=ym(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+FF(this._path)}}function rd(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Ni(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===mr){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==Mr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==gr)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===$e){if(e!=null&&!sl(e)||n!=null&&!sl(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(O(t.getIndex()instanceof Im||t.getIndex()===bm,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function id(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class qn extends mn{constructor(e,n){super(e,n,new Dh,!1)}get parent(){const e=W0(this._path);return e===null?null:new qn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ks{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new xe(e),r=Ps(this.ref,e);return new ks(this._node.getChild(n),r,$e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ks(i,Ps(this.ref,r),$e)))}hasChild(e){const n=new xe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function tC(t,e){return t=K(t),t._checkNotDeleted("ref"),e!==void 0?Ps(t._root,e):t._root}function nC(t,e){t=K(t),t._checkNotDeleted("refFromURL");const n=uy(e,t._repo.repoInfo_.nodeAdmin);$S("refFromURL",n);const r=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&r.host!==t._repo.repoInfo_.host&&pr("refFromURL: Host name does not match the current database: (found "+r.host+" but expected "+t._repo.repoInfo_.host+")"),tC(t,n.path.toString())}function Ps(t,e){return t=K(t),me(t._path)===null?NV("child","path",e,!1):cl("child","path",e,!1),new qn(t._repo,Xe(t._path,e))}function YV(t,e){t=K(t),Bn("push",t._path),yr("push",e,t._path,!0);const n=WS(t._repo),r=iU(n),i=Ps(t,r),s=Ps(t,r);let o;return e!=null?o=hy(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function JV(t){return Bn("remove",t._path),hy(t,null)}function hy(t,e){t=K(t),Bn("set",t._path),yr("set",e,t._path,!1);const n=new un;return sy(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function XV(t,e){t=K(t),Bn("setPriority",t._path),ny("setPriority",e,!1);const n=new un;return sy(t._repo,Xe(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function ZV(t,e,n){if(Bn("setWithPriority",t._path),yr("setWithPriority",e,t._path,!1),ny("setWithPriority",n,!1),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const r=new un;return sy(t._repo,t._path,e,n,r.wrapCallback(()=>{})),r.promise}function eB(t,e){BS("update",e,t._path,!1);const n=new un;return MV(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function tB(t){return t=K(t),LV(t._repo,t).then(e=>new ks(e,new qn(t._repo,t._path),t._queryParams.getIndex()))}class sd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new XS("value",this,new ks(e.snapshotNode,new qn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ZS(this,e,n):null}matches(e){return e instanceof sd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class od{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ZS(this,e,n):null}createEvent(e,n){O(e.childName!=null,"Child events should have a childName.");const r=Ps(new qn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new XS(e.type,this,new ks(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof od?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function ul(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const c=n,l=(u,h)=>{oy(t._repo,t,a),c(u,h)};l.userCallback=n.userCallback,l.context=n.context,n=l}const o=new eC(n,s||void 0),a=e==="value"?new sd(o):new od(e,o);return $V(t._repo,t,a),()=>oy(t._repo,t,a)}function dy(t,e,n,r){return ul(t,"value",e,n,r)}function rC(t,e,n,r){return ul(t,"child_added",e,n,r)}function iC(t,e,n,r){return ul(t,"child_changed",e,n,r)}function sC(t,e,n,r){return ul(t,"child_moved",e,n,r)}function oC(t,e,n,r){return ul(t,"child_removed",e,n,r)}function aC(t,e,n){let r=null;const i=n?new eC(n):null;e==="value"?r=new sd(i):e&&(r=new od(e,i)),oy(t._repo,t,r)}class Zn{}class cC extends Zn{constructor(e,n){super();this._value=e,this._key=n}_apply(e){yr("endAt",this._value,e._path,!0);const n=Am(e._queryParams,this._value,this._key);if(id(n),Ni(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new mn(e._repo,e._path,n,e._orderByCalled)}}function nB(t,e){return al("endAt","key",e,!0),new cC(t,e)}class rB extends Zn{constructor(e,n){super();this._value=e,this._key=n}_apply(e){yr("endBefore",this._value,e._path,!1);const n=hU(e._queryParams,this._value,this._key);if(id(n),Ni(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new mn(e._repo,e._path,n,e._orderByCalled)}}function iB(t,e){return al("endBefore","key",e,!0),new rB(t,e)}class lC extends Zn{constructor(e,n){super();this._value=e,this._key=n}_apply(e){yr("startAt",this._value,e._path,!0);const n=Cm(e._queryParams,this._value,this._key);if(id(n),Ni(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new mn(e._repo,e._path,n,e._orderByCalled)}}function sB(t=null,e){return al("startAt","key",e,!0),new lC(t,e)}class oB extends Zn{constructor(e,n){super();this._value=e,this._key=n}_apply(e){yr("startAfter",this._value,e._path,!1);const n=uU(e._queryParams,this._value,this._key);if(id(n),Ni(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new mn(e._repo,e._path,n,e._orderByCalled)}}function aB(t,e){return al("startAfter","key",e,!0),new oB(t,e)}class cB extends Zn{constructor(e){super();this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new mn(e._repo,e._path,cU(e._queryParams,this._limit),e._orderByCalled)}}function lB(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new cB(t)}class uB extends Zn{constructor(e){super();this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new mn(e._repo,e._path,lU(e._queryParams,this._limit),e._orderByCalled)}}function hB(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new uB(t)}class dB extends Zn{constructor(e){super();this._path=e}_apply(e){rd(e,"orderByChild");const n=new xe(this._path);if(ye(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Im(n),i=xh(e._queryParams,r);return Ni(i),new mn(e._repo,e._path,i,!0)}}function fB(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return cl("orderByChild","path",t,!1),new dB(t)}class pB extends Zn{_apply(e){rd(e,"orderByKey");const n=xh(e._queryParams,mr);return Ni(n),new mn(e._repo,e._path,n,!0)}}function gB(){return new pB}class mB extends Zn{_apply(e){rd(e,"orderByPriority");const n=xh(e._queryParams,$e);return Ni(n),new mn(e._repo,e._path,n,!0)}}function yB(){return new mB}class _B extends Zn{_apply(e){rd(e,"orderByValue");const n=xh(e._queryParams,bm);return Ni(n),new mn(e._repo,e._path,n,!0)}}function vB(){return new _B}class wB extends Zn{constructor(e,n){super();this._value=e,this._key=n}_apply(e){if(yr("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new cC(this._value,this._key)._apply(new lC(this._value,this._key)._apply(e))}}function EB(t,e){return al("equalTo","key",e,!0),new wB(t,e)}function er(t,...e){let n=K(t);for(const r of e)n=r._apply(n);return n}ZU(qn);iV(qn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IB="FIREBASE_DATABASE_EMULATOR_HOST",fy={};let bB=!1;function TB(t,e,n,r){t.repoInfo_=new C0(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function uC(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||pr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ct("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=uy(s,i),a=o.repoInfo,c,l;typeof process!="undefined"&&(l=process.env[IB]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=uy(s,i),a=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new ea(ea.OWNER):new uF(t.name,t.options,e);$S("Invalid Firebase Database URL",o),ye(o.path)||pr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=CB(a,t,u,new lF(t.name,n));return new AB(h,t)}function SB(t,e){const n=fy[e];(!n||n[t.key]!==t)&&pr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),GS(t),delete n[t.key]}function CB(t,e,n,r){let i=fy[e.name];i||(i={},fy[e.name]=i);let s=i[t.toURLString()];return s&&pr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new OV(t,bB,n,r),i[t.toURLString()]=s,s}class AB{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(DV(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qn(this._repo,Oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(SB(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&pr("Cannot call "+e+" on a deleted database.")}}function NB(t,e,n,r={}){t=K(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&pr("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&pr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ea(ea.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Mw(r.mockUserToken,t.app.options.projectId);s=new ea(o)}TB(i,e,n,s)}function RB(t){t=K(t),t._checkNotDeleted("goOffline"),GS(t._repo)}function kB(t){t=K(t),t._checkNotDeleted("goOnline"),qV(t._repo)}function PB(t,e){p0(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OB(t){l0(ri),ni(new Ln("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return uC(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),ii(JM,XM,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DB={".sv":"timestamp"};function xB(){return DB}function LB(t){return{".sv":{increment:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MB{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function FB(t,e,n){var r;if(t=K(t),Bn("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=n==null?void 0:n.applyLocally)!==null&&r!==void 0?r:!0,s=new un,o=(c,l,u)=>{let h=null;c?s.reject(c):(h=new ks(u,new qn(t._repo,t._path),$e),s.resolve(new MB(l,h)))},a=dy(t,()=>{});return jV(t._repo,t._path,e,o,a,i),s.promise}Fr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Fr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};OB();const UB="@firebase/database-compat",VB="0.1.1";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BB=new fo("@firebase/database-compat"),hC=function(t){const e="FIREBASE WARNING: "+t;BB.warn(e)};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $B=function(t,e,n,r){if(!(r&&n===void 0)&&typeof n!="boolean")throw new Error(hn(t,e)+"must be a boolean.")},qB=function(t,e,n){if(!(n&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(hn(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jB{constructor(e){this._delegate=e}cancel(e){ae("OnDisconnect.cancel",0,1,arguments.length),_t("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),r=>e(r)),n}remove(e){ae("OnDisconnect.remove",0,1,arguments.length),_t("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),r=>e(r)),n}set(e,n){ae("OnDisconnect.set",1,2,arguments.length),_t("OnDisconnect.set","onComplete",n,!0);const r=this._delegate.set(e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){ae("OnDisconnect.setWithPriority",2,3,arguments.length),_t("OnDisconnect.setWithPriority","onComplete",r,!0);const i=this._delegate.setWithPriority(e,n);return r&&i.then(()=>r(null),s=>r(s)),i}update(e,n){if(ae("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,hC("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}_t("OnDisconnect.update","onComplete",n,!0);const r=this._delegate.update(e);return n&&r.then(()=>n(null),i=>n(i)),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WB{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return ae("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this._database=e,this._delegate=n}val(){return ae("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return ae("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return ae("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return ae("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return ae("DataSnapshot.child",0,1,arguments.length),e=String(e),cl("DataSnapshot.child","path",e,!1),new Ri(this._database,this._delegate.child(e))}hasChild(e){return ae("DataSnapshot.hasChild",1,1,arguments.length),cl("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return ae("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return ae("DataSnapshot.forEach",1,1,arguments.length),_t("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new Ri(this._database,n)))}hasChildren(){return ae("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return ae("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return ae("DataSnapshot.ref",0,0,arguments.length),new Nn(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class $t{constructor(e,n){this.database=e,this._delegate=n}on(e,n,r,i){var s;ae("Query.on",2,4,arguments.length),_t("Query.on","callback",n,!1);const o=$t.getCancelAndContextArgs_("Query.on",r,i),a=(l,u)=>{n.call(o.context,new Ri(this.database,l),u)};a.userCallback=n,a.context=o.context;const c=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return dy(this._delegate,a,c),n;case"child_added":return rC(this._delegate,a,c),n;case"child_removed":return oC(this._delegate,a,c),n;case"child_changed":return iC(this._delegate,a,c),n;case"child_moved":return sC(this._delegate,a,c),n;default:throw new Error(hn("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,r){if(ae("Query.off",0,3,arguments.length),qB("Query.off",e,!0),_t("Query.off","callback",n,!0),$w("Query.off","context",r,!0),n){const i=()=>{};i.userCallback=n,i.context=r,aC(this._delegate,e,i)}else aC(this._delegate,e)}get(){return tB(this._delegate).then(e=>new Ri(this.database,e))}once(e,n,r,i){ae("Query.once",1,4,arguments.length),_t("Query.once","callback",n,!0);const s=$t.getCancelAndContextArgs_("Query.once",r,i),o=new un,a=(l,u)=>{const h=new Ri(this.database,l);n&&n.call(s.context,h,u),o.resolve(h)};a.userCallback=n,a.context=s.context;const c=l=>{s.cancel&&s.cancel.call(s.context,l),o.reject(l)};switch(e){case"value":dy(this._delegate,a,c,{onlyOnce:!0});break;case"child_added":rC(this._delegate,a,c,{onlyOnce:!0});break;case"child_removed":oC(this._delegate,a,c,{onlyOnce:!0});break;case"child_changed":iC(this._delegate,a,c,{onlyOnce:!0});break;case"child_moved":sC(this._delegate,a,c,{onlyOnce:!0});break;default:throw new Error(hn("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return ae("Query.limitToFirst",1,1,arguments.length),new $t(this.database,er(this._delegate,lB(e)))}limitToLast(e){return ae("Query.limitToLast",1,1,arguments.length),new $t(this.database,er(this._delegate,hB(e)))}orderByChild(e){return ae("Query.orderByChild",1,1,arguments.length),new $t(this.database,er(this._delegate,fB(e)))}orderByKey(){return ae("Query.orderByKey",0,0,arguments.length),new $t(this.database,er(this._delegate,gB()))}orderByPriority(){return ae("Query.orderByPriority",0,0,arguments.length),new $t(this.database,er(this._delegate,yB()))}orderByValue(){return ae("Query.orderByValue",0,0,arguments.length),new $t(this.database,er(this._delegate,vB()))}startAt(e=null,n){return ae("Query.startAt",0,2,arguments.length),new $t(this.database,er(this._delegate,sB(e,n)))}startAfter(e=null,n){return ae("Query.startAfter",0,2,arguments.length),new $t(this.database,er(this._delegate,aB(e,n)))}endAt(e=null,n){return ae("Query.endAt",0,2,arguments.length),new $t(this.database,er(this._delegate,nB(e,n)))}endBefore(e=null,n){return ae("Query.endBefore",0,2,arguments.length),new $t(this.database,er(this._delegate,iB(e,n)))}equalTo(e,n){return ae("Query.equalTo",1,2,arguments.length),new $t(this.database,er(this._delegate,EB(e,n)))}toString(){return ae("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return ae("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if(ae("Query.isEqual",1,1,arguments.length),!(e instanceof $t)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,r){const i={cancel:void 0,context:void 0};if(n&&r)i.cancel=n,_t(e,"cancel",i.cancel,!0),i.context=r,$w(e,"context",i.context,!0);else if(n)if(typeof n=="object"&&n!==null)i.context=n;else if(typeof n=="function")i.cancel=n;else throw new Error(hn(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return i}get ref(){return new Nn(this.database,new qn(this._delegate._repo,this._delegate._path))}}class Nn extends $t{constructor(e,n){super(e,new mn(n._repo,n._path,new Dh,!1));this.database=e,this._delegate=n}getKey(){return ae("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return ae("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Nn(this.database,Ps(this._delegate,e))}getParent(){ae("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Nn(this.database,e):null}getRoot(){return ae("Reference.root",0,0,arguments.length),new Nn(this.database,this._delegate.root)}set(e,n){ae("Reference.set",1,2,arguments.length),_t("Reference.set","onComplete",n,!0);const r=hy(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}update(e,n){if(ae("Reference.update",1,2,arguments.length),Array.isArray(e)){const i={};for(let s=0;s<e.length;++s)i[""+s]=e[s];e=i,hC("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Bn("Reference.update",this._delegate._path),_t("Reference.update","onComplete",n,!0);const r=eB(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}setWithPriority(e,n,r){ae("Reference.setWithPriority",2,3,arguments.length),_t("Reference.setWithPriority","onComplete",r,!0);const i=ZV(this._delegate,e,n);return r&&i.then(()=>r(null),s=>r(s)),i}remove(e){ae("Reference.remove",0,1,arguments.length),_t("Reference.remove","onComplete",e,!0);const n=JV(this._delegate);return e&&n.then(()=>e(null),r=>e(r)),n}transaction(e,n,r){ae("Reference.transaction",1,3,arguments.length),_t("Reference.transaction","transactionUpdate",e,!1),_t("Reference.transaction","onComplete",n,!0),$B("Reference.transaction","applyLocally",r,!0);const i=FB(this._delegate,e,{applyLocally:r}).then(s=>new WB(s.committed,new Ri(this.database,s.snapshot)));return n&&i.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),i}setPriority(e,n){ae("Reference.setPriority",1,2,arguments.length),_t("Reference.setPriority","onComplete",n,!0);const r=XV(this._delegate,e);return n&&r.then(()=>n(null),i=>n(i)),r}push(e,n){ae("Reference.push",0,2,arguments.length),_t("Reference.push","onComplete",n,!0);const r=YV(this._delegate,e),i=r.then(o=>new Nn(this.database,o));n&&i.then(()=>n(null),o=>n(o));const s=new Nn(this.database,r);return s.then=i.then.bind(i),s.catch=i.catch.bind(i,void 0),s}onDisconnect(){return Bn("Reference.onDisconnect",this._delegate._path),new jB(new QV(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete()}}useEmulator(e,n,r={}){NB(this._delegate,e,n,r)}ref(e){if(ae("database.ref",0,1,arguments.length),e instanceof Nn){const n=nC(this._delegate,e.toString());return new Nn(this,n)}else{const n=tC(this._delegate,e);return new Nn(this,n)}}refFromURL(e){ae("database.refFromURL",1,1,arguments.length);const r=nC(this._delegate,e);return new Nn(this,r)}goOffline(){return ae("database.goOffline",0,0,arguments.length),RB(this._delegate)}goOnline(){return ae("database.goOnline",0,0,arguments.length),kB(this._delegate)}}hl.ServerValue={TIMESTAMP:xB(),increment:t=>LB(t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HB({app:t,url:e,version:n,customAuthImpl:r,namespace:i,nodeAdmin:s=!1}){l0(n);const o=new jw("auth-internal",new Ww("database-standalone"));return o.setComponent(new Ln("auth-internal",()=>r,"PRIVATE")),{instance:new hl(uC(t,o,void 0,e,s),t),namespace:i}}var KB=Object.freeze({__proto__:null,initStandalone:HB});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zB=hl.ServerValue;function GB(t){t.INTERNAL.registerComponent(new Ln("database-compat",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app-compat").getImmediate(),i=e.getProvider("database").getImmediate({identifier:n});return new hl(i,r)},"PUBLIC").setServiceProps({Reference:Nn,Query:$t,Database:hl,DataSnapshot:Ri,enableLogging:PB,INTERNAL:KB,ServerValue:zB}).setMultipleInstances(!0)),t.registerVersion(UB,VB)}GB(po);const dl={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},ha={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QB(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function dC(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YB=QB,JB=dC,fC=new Gi("auth","Firebase",dC());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=new fo("@firebase/auth");function ad(t,...e){pC.logLevel<=Te.ERROR&&pC.error(`Auth (${ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,...e){throw py(t,...e)}function jt(t,...e){return py(t,...e)}function gC(t,e,n){const r=Object.assign(Object.assign({},JB()),{[e]:n});return new Gi("auth","Firebase",r).create(e,{appName:t.name})}function da(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&qt(t,"argument-error"),gC(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function py(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fC.create(t,...e)}function D(t,e,...n){if(!t)throw py(e,...n)}function _r(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ad(e),new Error(e)}function tr(t,e){t||_r(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=new Map;function Rn(t){tr(t instanceof Function,"Expected a class definition");let e=mC.get(t);return e?(tr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mC.set(t,e),e)}function XB(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gy(){return yC()==="http:"||yC()==="https:"}function yC(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZB(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gy()||Wf()||"connection"in navigator)?navigator.onLine:!0}function e$(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n){this.shortDelay=e,this.longDelay=n,tr(n>e,"Short delay should be less than long delay!"),this.isMobile=lu()||Va()}get(){return ZB()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t,e){tr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;_r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;_r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;_r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t$={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n$=new pl(3e4,6e4);function pt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kt(t,e,n,r,i={}){return _C(t,i,()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Yi(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(yy.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),yy.fetch()(vC(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function _C(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},t$),e);try{const i=new r$(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw cd(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw cd(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw cd(t,"email-already-in-use",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw gC(t,u,l);qt(t,u)}}catch(i){if(i instanceof xn)throw i;qt(t,"network-request-failed")}}async function Vr(t,e,n,r,i={}){const s=await kt(t,e,n,r,i);return"mfaPendingCredential"in s&&qt(t,"multi-factor-auth-required",{serverResponse:s}),s}function vC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?my(t.config,i):`${t.config.apiScheme}://${i}`}class r${constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(jt(this.auth,"timeout")),n$.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cd(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=jt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i$(t,e){return kt(t,"POST","/v1/accounts:delete",e)}async function s$(t,e){return kt(t,"POST","/v1/accounts:update",e)}async function o$(t,e){return kt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}async function a$(t,e=!1){const n=K(t),r=await n.getIdToken(e),i=ld(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:gl(_y(i.auth_time)),issuedAtTime:gl(_y(i.iat)),expirationTime:gl(_y(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _y(t){return Number(t)*1e3}function ld(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ad("JWT malformed, contained fewer than 3 sections"),null;try{const i=qf(n);return i?JSON.parse(i):(ad("Failed to decode base64 JWT payload"),null)}catch(i){return ad("Caught error parsing JWT payload as JSON",i),null}}function c$(t){const e=ld(t);return D(e,"internal-error"),D(typeof e.exp!="undefined","internal-error"),D(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&l$(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function l$({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u${constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gl(this.lastLoginAt),this.creationTime=gl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ml(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Br(t,o$(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?f$(s.providerUserInfo):[],a=d$(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new wC(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function h$(t){const e=K(t);await ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function d$(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function f$(t){return t.map(e=>{var{providerId:n}=e,r=Gf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p$(t,e){const n=await _C(t,{},()=>{const r=Yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=vC(t,i,"/v1/token",`key=${s}`);return yy.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken!="undefined","internal-error"),D(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):c$(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await p$(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new yl;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yl,this.toJSON())}_performRefresh(){return _r("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t,e){D(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Os{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Gf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new u$(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.metadata=new wC(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Br(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return a$(this,e)}reload(){return h$(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Os(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ml(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Br(this,i$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=n.createdAt)!==null&&l!==void 0?l:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:U,isAnonymous:G,providerData:se,stsTokenManager:te}=n;D(L&&te,e,"internal-error");const he=yl.fromJSON(this.name,te);D(typeof L=="string",e,"internal-error"),ki(h,e.name),ki(d,e.name),D(typeof U=="boolean",e,"internal-error"),D(typeof G=="boolean",e,"internal-error"),ki(f,e.name),ki(g,e.name),ki(y,e.name),ki(_,e.name),ki(w,e.name),ki(S,e.name);const Q=new Os({uid:L,auth:e,email:d,emailVerified:U,displayName:h,isAnonymous:G,photoURL:g,phoneNumber:f,tenantId:y,stsTokenManager:he,createdAt:w,lastLoginAt:S});return se&&Array.isArray(se)&&(Q.providerData=se.map(pe=>Object.assign({},pe))),_&&(Q._redirectEventId=_),Q}static async _fromIdTokenResponse(e,n,r=!1){const i=new yl;i.updateFromServerResponse(n);const s=new Os({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ml(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}EC.type="NONE";const _l=EC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t,e,n){return`firebase:${t}:${e}:${n}`}class fa{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ds(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ds("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Os._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fa(Rn(_l),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Rn(_l);const o=Ds(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Os._fromJSON(e,u);l!==s&&(a=h),s=l;break}}catch(u){}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new fa(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch(u){}})),new fa(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(SC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CC(e))return"Blackberry";if(AC(e))return"Webos";if(vy(e))return"Safari";if((e.includes("chrome/")||TC(e))&&!e.includes("edge/"))return"Chrome";if(vl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bC(t=He()){return/firefox\//i.test(t)}function vy(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function TC(t=He()){return/crios\//i.test(t)}function SC(t=He()){return/iemobile/i.test(t)}function vl(t=He()){return/android/i.test(t)}function CC(t=He()){return/blackberry/i.test(t)}function AC(t=He()){return/webos/i.test(t)}function pa(t=He()){return/iphone|ipad|ipod/i.test(t)}function g$(t=He()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function m$(t=He()){var e;return pa(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function y$(){return Hf()&&document.documentMode===10}function NC(t=He()){return pa(t)||vl(t)||AC(t)||CC(t)||/windows phone/i.test(t)||SC(t)}function _$(){try{return!!(window&&window!==window.top)}catch(t){return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(t,e=[]){let n;switch(t){case"Browser":n=IC(He());break;case"Worker":n=`${IC(He())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ri}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v${constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kC(this),this.idTokenSubscription=new kC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fC,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await fa.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ml(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=e$()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?K(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await fa.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=RC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Pt(t){return K(t)}class kC{constructor(e){this.auth=e,this.observer=null,this.addObserver=Bw(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function w$(t,e,n){const r=Pt(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n==null?void 0:n.disableWarnings),s=PC(e),{host:o,port:a}=E$(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),I$(i)}function PC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function E$(t){const e=PC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:OC(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:OC(o)}}}function OC(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function I$(t){function e(){const n=document.createElement("p"),r=n.style;n.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",n.classList.add("firebase-emulator-warning"),document.body.appendChild(n)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&!t&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,n){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DC(t,e){return kt(t,"POST","/v1/accounts:resetPassword",pt(t,e))}async function xC(t,e){return kt(t,"POST","/v1/accounts:update",e)}async function b$(t,e){return kt(t,"POST","/v1/accounts:update",pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T$(t,e){return Vr(t,"POST","/v1/accounts:signInWithPassword",pt(t,e))}async function ud(t,e){return kt(t,"POST","/v1/accounts:sendOobCode",pt(t,e))}async function S$(t,e){return ud(t,e)}async function C$(t,e){return ud(t,e)}async function A$(t,e){return ud(t,e)}async function N$(t,e){return ud(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R$(t,e){return Vr(t,"POST","/v1/accounts:signInWithEmailLink",pt(t,e))}async function k$(t,e){return Vr(t,"POST","/v1/accounts:signInWithEmailLink",pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends ga{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new wl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new wl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return T$(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return R$(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return xC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return k$(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(t,e){return Vr(t,"POST","/v1/accounts:signInWithIdp",pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P$="http://localhost";class vr extends ga{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Gf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new vr(r,i);return Object.assign(o,s),o}_getIdTokenResponse(e){const n=this.buildRequest();return $r(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$r(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$r(e,n)}buildRequest(){const e={requestUri:P$,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O$(t,e){return kt(t,"POST","/v1/accounts:sendVerificationCode",pt(t,e))}async function D$(t,e){return Vr(t,"POST","/v1/accounts:signInWithPhoneNumber",pt(t,e))}async function x$(t,e){const n=await Vr(t,"POST","/v1/accounts:signInWithPhoneNumber",pt(t,e));if(n.temporaryProof)throw cd(t,"account-exists-with-different-credential",n);return n}const L$={USER_NOT_FOUND:"user-not-found"};async function M$(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Vr(t,"POST","/v1/accounts:signInWithPhoneNumber",pt(t,n),L$)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends ga{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new xs({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new xs({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return D$(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return x$(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return M$(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new xs({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F$(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function U$(t){const e=ho($a(t)).link,n=e?ho($a(e)).deep_link_id:null,r=ho($a(t)).deep_link_id;return(r?ho($a(r)).link:null)||r||n||e||t}class hd{constructor(e){var n,r,i,s,o,a;const c=ho($a(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=F$((i=c.mode)!==null&&i!==void 0?i:null);D(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=U$(e);try{return new hd(n)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.providerId=Pi.PROVIDER_ID}static credential(e,n){return wl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=hd.parseLink(n);return D(r,"argument-error"),wl._fromEmailAndCode(e,r.code,r.tenantId)}}Pi.PROVIDER_ID="password";Pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma extends Oi{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ya extends ma{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return D("providerId"in n&&"signInMethod"in n,"argument-error"),vr._fromParams(n)}credential(e){return this._credential(e)}_credential(e){return D(e.idToken||e.accessToken,"argument-error"),vr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ya.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ya.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new ya(a)._credential({idToken:n,accessToken:r,rawNonce:o,pendingToken:s})}catch(c){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends ma{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch(n){return null}}}wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";wr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends ma{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return vr._fromParams({providerId:Er.PROVIDER_ID,signInMethod:Er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Er.credentialFromTaggedObject(e)}static credentialFromError(e){return Er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Er.credential(n,r)}catch(i){return null}}}Er.GOOGLE_SIGN_IN_METHOD="google.com";Er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends ma{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ir.credential(e.oauthAccessToken)}catch(n){return null}}}Ir.GITHUB_SIGN_IN_METHOD="github.com";Ir.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V$="http://localhost";class dd extends ga{constructor(e,n){super(e,e);this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return $r(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$r(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$r(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new dd(r,s)}static _create(e,n){return new dd(e,n)}buildRequest(){return{requestUri:V$,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends ma{constructor(){super("twitter.com")}static credential(e,n){return vr._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return br.credential(n,r)}catch(i){return null}}}br.TWITTER_SIGN_IN_METHOD="twitter.com";br.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC(t,e){return Vr(t,"POST","/v1/accounts:signUp",pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Os._fromIdTokenResponse(e,r,i),o=MC(r);return new jn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=MC(r);return new jn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function MC(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B$(t){var e;const n=Pt(t);if(await n._initializationPromise,(e=n.currentUser)===null||e===void 0?void 0:e.isAnonymous)return new jn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await LC(n,{returnSecureToken:!0}),i=await jn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd extends xn{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,this.name="FirebaseError",Object.setPrototypeOf(this,fd.prototype),this.appName=e.name,this.code=n.code,this.tenantId=(s=e.tenantId)!==null&&s!==void 0?s:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(e,n,r,i){return new fd(e,n,r,i)}}function FC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fd._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $$(t,e){const n=K(t);await pd(!0,n,e);const{providerUserInfo:r}=await s$(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=UC(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function wy(t,e,n=!1){const r=await Br(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jn._forOperation(t,"link",r)}async function pd(t,e,n){await ml(e);const r=UC(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";D(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VC(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Br(t,FC(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=ld(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),jn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BC(t,e,n=!1){const r="signIn",i=await FC(t,r,e),s=await jn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function gd(t,e){return BC(Pt(t),e)}async function $C(t,e){const n=K(t);return await pd(!1,n,e.providerId),wy(n,e)}async function qC(t,e){return VC(K(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q$(t,e){return Vr(t,"POST","/v1/accounts:signInWithCustomToken",pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j$(t,e){const n=Pt(t),r=await q$(n,{token:e,returnSecureToken:!0}),i=await jn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Ey._fromServerResponse(e,n):qt(e,"internal-error")}}class Ey extends md{constructor(e){super("phone",e);this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Ey(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t,e,n){var r;D(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),D(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(D(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(D(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W$(t,e,n){const r=K(t),i={requestType:"PASSWORD_RESET",email:e};n&&yd(r,i,n),await C$(r,i)}async function H$(t,e,n){await DC(K(t),{oobCode:e,newPassword:n})}async function K$(t,e){await b$(K(t),{oobCode:e})}async function jC(t,e){const n=K(t),r=await DC(n,{oobCode:e}),i=r.requestType;switch(D(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":D(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":D(r.mfaInfo,n,"internal-error");default:D(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=md._fromServerResponse(Pt(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function z$(t,e){const{data:n}=await jC(K(t),e);return n.email}async function G$(t,e,n){const r=Pt(t),i=await LC(r,{returnSecureToken:!0,email:e,password:n}),s=await jn._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Q$(t,e,n){return gd(K(t),Pi.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y$(t,e,n){const r=K(t),i={requestType:"EMAIL_SIGNIN",email:e};D(n.handleCodeInApp,r,"argument-error"),n&&yd(r,i,n),await A$(r,i)}function J$(t,e){const n=hd.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function X$(t,e,n){const r=K(t),i=Pi.credentialWithLink(e,n||fl());return D(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),gd(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z$(t,e){return kt(t,"POST","/v1/accounts:createAuthUri",pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eq(t,e){const n=gy()?fl():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await Z$(K(t),r);return i||[]}async function tq(t,e){const n=K(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&yd(n.auth,i,e);const{email:s}=await S$(n.auth,i);s!==t.email&&await t.reload()}async function nq(t,e,n){const r=K(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&yd(r.auth,s,n);const{email:o}=await N$(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rq(t,e){return kt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iq(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=K(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Br(r,rq(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function sq(t,e){return WC(K(t),e,null)}function oq(t,e){return WC(K(t),null,e)}async function WC(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Br(t,xC(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aq(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=ld(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new _a(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new cq(s,i);case"github.com":return new lq(s,i);case"google.com":return new uq(s,i);case"twitter.com":return new hq(s,i,t.screenName||null);case"custom":case"anonymous":return new _a(s,null);default:return new _a(s,r,i)}}class _a{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class HC extends _a{constructor(e,n,r,i){super(e,n,r);this.username=i}}class cq extends _a{constructor(e,n){super(e,"facebook.com",n)}}class lq extends HC{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class uq extends _a{constructor(e,n){super(e,"google.com",n)}}class hq extends HC{constructor(e,n,r){super(e,"twitter.com",n,r)}}function dq(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:aq(n)}class Ls{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new Ls("enroll",e)}static _fromMfaPendingCredential(e){return new Ls("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e==null?void 0:e.multiFactorSession){if((n=e.multiFactorSession)===null||n===void 0?void 0:n.pendingCredential)return Ls._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((r=e.multiFactorSession)===null||r===void 0?void 0:r.idToken)return Ls._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Pt(e),i=(n.serverResponse.mfaInfo||[]).map(o=>md._fromServerResponse(r,o));D(n.serverResponse.mfaPendingCredential,r,"internal-error");const s=Ls._fromMfaPendingCredential(n.serverResponse.mfaPendingCredential);return new Iy(s,i,async o=>{const a=await o._process(r,s);delete n.serverResponse.mfaInfo,delete n.serverResponse.mfaPendingCredential;const c=Object.assign(Object.assign({},n.serverResponse),{idToken:a.idToken,refreshToken:a.refreshToken});switch(n.operationType){case"signIn":const l=await jn._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return D(n.user,r,"internal-error"),jn._forOperation(n.user,n.operationType,c);default:qt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function fq(t,e){var n;const r=K(t),i=e;return D(e.operationType,r,"argument-error"),D((n=i.serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Iy._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pq(t,e){return kt(t,"POST","/v2/accounts/mfaEnrollment:start",pt(t,e))}function gq(t,e){return kt(t,"POST","/v2/accounts/mfaEnrollment:finalize",pt(t,e))}function mq(t,e){return kt(t,"POST","/v2/accounts/mfaEnrollment:withdraw",pt(t,e))}class by{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>md._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new by(e)}async getSession(){return Ls._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const r=e,i=await this.getSession(),s=await Br(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await Br(this.user,mq(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const Ty=new WeakMap;function yq(t){const e=K(t);return Ty.has(e)||Ty.set(e,by._fromUser(e)),Ty.get(e)}const _d="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n){this.storage=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_d,"1"),this.storage.removeItem(_d),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _q(){const t=He();return vy(t)||pa(t)}const vq=1e3,wq=10;class zC extends KC{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_q()&&_$(),this.fallbackToPolling=NC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);y$()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wq):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vq)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zC.type="LOCAL";const Sy=zC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC extends KC{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}GC.type="SESSION";const Ms=GC;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eq(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new vd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await Eq(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iq{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=El("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return window}function bq(t){gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(){return typeof gt().WorkerGlobalScope!="undefined"&&typeof gt().importScripts=="function"}async function Tq(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}function Sq(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Cq(){return Cy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC="firebaseLocalStorageDb",Aq=1,wd="firebaseLocalStorage",YC="fbase_key";class Il{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ed(t,e){return t.transaction([wd],e?"readwrite":"readonly").objectStore(wd)}function Nq(){const t=indexedDB.deleteDatabase(QC);return new Il(t).toPromise()}function Ay(){const t=indexedDB.open(QC,Aq);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wd,{keyPath:YC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wd)?e(r):(r.close(),await Nq(),e(await Ay()))})})}async function JC(t,e,n){const r=Ed(t,!0).put({[YC]:e,value:n});return new Il(r).toPromise()}async function Rq(t,e){const n=Ed(t,!1).get(e),r=await new Il(n).toPromise();return r===void 0?null:r.value}function XC(t,e){const n=Ed(t,!0).delete(e);return new Il(n).toPromise()}const kq=800,Pq=3;class ZC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ay(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Pq)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vd._getInstance(Cq()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Tq(),!this.activeServiceWorker)return;this.sender=new Iq(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sq()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ay();return await JC(e,_d,"1"),await XC(e,_d),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>JC(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Rq(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>XC(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ed(i,!1).getAll();return new Il(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kq)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ZC.type="LOCAL";const Id=ZC;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oq(t,e){return kt(t,"POST","/v2/accounts/mfaSignIn:start",pt(t,e))}function Dq(t,e){return kt(t,"POST","/v2/accounts/mfaSignIn:finalize",pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xq(t){return(await kt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lq(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function eA(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=jt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Lq().appendChild(r)})}function tA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mq=500,Fq=6e4,bd=1e12;class Uq{constructor(e){this.auth=e,this.counter=bd,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new Vq(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||bd;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||bd;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||bd;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class Vq{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;D(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Bq(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch(r){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch(r){}this.isVisible&&this.execute()},Fq)},Mq))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Bq(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=tA("rcb"),$q=new pl(3e4,6e4),qq="https://www.google.com/recaptcha/api.js?";class jq{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!gt().grecaptcha}load(e,n=""){return D(Wq(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(gt().grecaptcha):new Promise((r,i)=>{const s=gt().setTimeout(()=>{i(jt(e,"network-request-failed"))},$q.get());gt()[Ny]=()=>{gt().clearTimeout(s),delete gt()[Ny];const a=gt().grecaptcha;if(!a){i(jt(e,"internal-error"));return}const c=a.render;a.render=(l,u)=>{const h=c(l,u);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${qq}?${Yi({onload:Ny,render:"explicit",hl:n})}`;eA(o).catch(()=>{clearTimeout(s),i(jt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!gt().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Wq(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class Hq{async load(e){return new Uq(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="recaptcha",Kq={theme:"light",type:"image"};class zq{constructor(e,n=Object.assign({},Kq),r){this.parameters=n,this.type=nA,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Pt(r),this.isInvisible=this.parameters.size==="invisible",D(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;D(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Hq:new jq,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){D(!this.parameters.sitekey,this.auth,"argument-error"),D(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),D(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=gt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){D(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){D(gy()&&!Cy(),this.auth,"internal-error"),await Gq(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await xq(this.auth);D(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return D(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Gq(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=xs._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function Qq(t,e,n){const r=Pt(t),i=await Td(r,e,K(n));return new Ry(i,s=>gd(r,s))}async function Yq(t,e,n){const r=K(t);await pd(!1,r,"phone");const i=await Td(r.auth,e,K(n));return new Ry(i,s=>$C(r,s))}async function Jq(t,e,n){const r=K(t),i=await Td(r.auth,e,K(n));return new Ry(i,s=>qC(r,s))}async function Td(t,e,n){var r;const i=await n.verify();try{D(typeof i=="string",t,"argument-error"),D(n.type===nA,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return D(o.type==="enroll",t,"internal-error"),(await pq(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{D(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return D(a,t,"missing-multi-factor-info"),(await Oq(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await O$(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function Xq(t,e){await wy(K(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.providerId=nr.PROVIDER_ID,this.auth=Pt(e)}verifyPhoneNumber(e,n){return Td(this.auth,e,K(n))}static credential(e,n){return xs._fromVerification(e,n)}static credentialFromResult(e){const n=e;return nr.credentialFromTaggedObject(n)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?xs._fromTokenResponse(n,r):null}}nr.PROVIDER_ID="phone";nr.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t,e){return e?Rn(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky extends ga{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return $r(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $r(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $r(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Zq(t){return BC(t.auth,new ky(t),t.bypassAuthState)}function ej(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),VC(n,new ky(t),t.bypassAuthState)}async function tj(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),wy(n,new ky(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zq;case"linkViaPopup":case"linkViaRedirect":return tj;case"reauthViaPopup":case"reauthViaRedirect":return ej;default:qt(this.auth,"internal-error")}}resolve(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nj=new pl(2e3,1e4);async function rj(t,e,n){const r=Pt(t);da(t,e,Oi);const i=Fs(r,n);return new qr(r,"signInViaPopup",e,i).executeNotNull()}async function ij(t,e,n){const r=K(t);da(r.auth,e,Oi);const i=Fs(r.auth,n);return new qr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function sj(t,e,n){const r=K(t);da(r.auth,e,Oi);const i=Fs(r.auth,n);return new qr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class qr extends rA{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,qr.currentPopupAction&&qr.currentPopupAction.cancel(),qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){tr(this.filter.length===1,"Popup operations only handle one event");const e=El();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,nj.get())};e()}}qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oj="pendingRedirect",Py=new Map;class aj extends rA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Py.get(this.auth._key());if(!e){try{const r=await cj(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Py.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cj(t,e){const n=iA(e),r=await Dy(t)._get(n)==="true";return await Dy(t)._remove(n),r}async function Oy(t,e){return Dy(t)._set(iA(e),"true")}function lj(){Py.clear()}function Dy(t){return Rn(t._redirectPersistence)}function iA(t){return Ds(oj,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uj(t,e,n){return hj(t,e,n)}async function hj(t,e,n){const r=Pt(t);da(t,e,Oi);const i=Fs(r,n);return await Oy(i,r),i._openRedirect(r,e,"signInViaRedirect")}function dj(t,e,n){return fj(t,e,n)}async function fj(t,e,n){const r=K(t);da(r.auth,e,Oi);const i=Fs(r.auth,n);await Oy(i,r.auth);const s=await sA(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function pj(t,e,n){return gj(t,e,n)}async function gj(t,e,n){const r=K(t);da(r.auth,e,Oi);const i=Fs(r.auth,n);await pd(!1,r,e.providerId),await Oy(i,r.auth);const s=await sA(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function mj(t,e){return await Pt(t)._initializationPromise,Sd(t,e,!1)}async function Sd(t,e,n=!1){const r=Pt(t),i=Fs(r,e),o=await new aj(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function sA(t){const e=El(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yj=10*60*1e3;class oA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_j(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cA(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(jt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yj&&this.cachedEventUids.clear(),this.cachedEventUids.has(aA(e))}saveEventToCache(e){this.cachedEventUids.add(aA(e)),this.lastProcessedEventTime=Date.now()}}function aA(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _j(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cA(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(t,e={}){return kt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vj=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wj=/^https?/;async function Ej(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lA(t);for(const n of e)try{if(Ij(n))return}catch(r){}qt(t,"unauthorized-domain")}function Ij(t){const e=fl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wj.test(n))return!1;if(vj.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bj=new pl(3e4,6e4);function uA(){const t=gt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Tj(t){return new Promise((e,n)=>{var r,i,s;function o(){uA(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{uA(),n(jt(t,"network-request-failed"))},timeout:bj.get()})}if((i=(r=gt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=gt().gapi)===null||s===void 0?void 0:s.load)o();else{const a=tA("iframefcb");return gt()[a]=()=>{gapi.load?o():n(jt(t,"network-request-failed"))},eA(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Cd=null,e})}let Cd=null;function Sj(t){return Cd=Cd||Tj(t),Cd}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cj=new pl(5e3,15e3),Aj="__/auth/iframe",Nj="emulator/auth/iframe",Rj={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},kj=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pj(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?my(e,Nj):`https://${t.config.authDomain}/${Aj}`,r={apiKey:e.apiKey,appName:t.name,v:ri},i=kj.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Yi(r).slice(1)}`}async function Oj(t){const e=await Sj(t),n=gt().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:Pj(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rj,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=jt(t,"network-request-failed"),a=gt().setTimeout(()=>{s(o)},Cj.get());function c(){gt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dj={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xj=500,Lj=600,Mj="_blank",Fj="http://localhost";class hA{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Uj(t,e,n,r=xj,i=Lj){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Dj),{width:r.toString(),height:i.toString(),top:s,left:o}),l=He().toLowerCase();n&&(a=TC(l)?Mj:n),bC(l)&&(e=e||Fj,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(m$(l)&&a!=="_self")return Vj(e||"",a),new hA(null);const h=window.open(e||"",a,u);D(h,t,"popup-blocked");try{h.focus()}catch(d){}return new hA(h)}function Vj(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bj="__/auth/handler",$j="emulator/auth/handler";function xy(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ri,eventId:i};if(e instanceof Oi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(s||{}))o[c]=l}if(e instanceof ma){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${qj(t)}?${Yi(a).slice(1)}`}function qj({config:t}){return t.emulator?my(t,$j):`https://${t.authDomain}/${Bj}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="webStorageSupport";class jj{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ms,this._completeRedirectFn=Sd}async _openPopup(e,n,r,i){var s;tr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=xy(e,n,r,fl(),i);return Uj(e,o,El())}async _openRedirect(e,n,r,i){return await this._originValidation(e),bq(xy(e,n,r,fl(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await Oj(e),r=new oA(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ly,{type:Ly},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ly];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ej(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return NC()||vy()||pa()}}const Wj=jj;class Hj{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return _r("unexpected MultiFactorSessionType")}}}class My extends Hj{constructor(e){super("phone");this.credential=e}static _fromCredential(e){return new My(e)}_finalizeEnroll(e,n,r){return gq(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return Dq(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class dA{constructor(){}static assertion(e){return My._fromCredential(e)}}dA.FACTOR_ID="phone";var Kj="@firebase/auth",zj="0.18.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gj{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qj(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Yj(t){ni(new Ln("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{D(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),D(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:RC(t)},c=new v$(o,a);return XB(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ni(new Ln("auth-internal",e=>{const n=Pt(e.getProvider("auth").getImmediate());return(r=>new Gj(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ii(Kj,zj,Qj(t))}Yj("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jj=2e3;async function Xj(t,e,n){var r;const{BuildInfo:i}=Us();tr(e.sessionId,"AuthEvent did not contain a session ID");const s=await rW(e.sessionId),o={};return pa()?o.ibi=i.packageName:vl()?o.apn=i.packageName:qt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,xy(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function Zj(t){const{BuildInfo:e}=Us(),n={};pa()?n.iosBundleId=e.packageName:vl()?n.androidPackageName=e.packageName:qt(t,"operation-not-supported-in-this-environment"),await lA(t,n)}function eW(t){const{cordova:e}=Us();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,g$()?"_blank":"_system","location=yes"),n(i)})})}async function tW(t,e,n){const{cordova:r}=Us();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(jt(t,"redirect-cancelled-by-user"))},Jj))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(c),document.addEventListener("resume",l,!1),vl()&&document.addEventListener("visibilitychange",u,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{i()}}function nW(t){var e,n,r,i,s,o,a,c,l,u;const h=Us();D(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),D(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),D(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((u=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function rW(t){const e=iW(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function iW(t){if(tr(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sW=20;class oW extends oA{constructor(){super(...arguments);this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function aW(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:uW(),postBody:null,tenantId:t.tenantId,error:jt(t,"no-auth-event")}}function cW(t,e){return Fy()._set(Uy(t),e)}async function fA(t){const e=await Fy()._get(Uy(t));return e&&await Fy()._remove(Uy(t)),e}function lW(t,e){var n,r;const i=dW(e);if(i.includes("/__/auth/callback")){const s=Ad(i),o=s.firebaseError?hW(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],c=a?jt(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function uW(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<sW;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Fy(){return Rn(Sy)}function Uy(t){return Ds("authEvent",t.config.apiKey,t.name)}function hW(t){try{return JSON.parse(t)}catch(e){return null}}function dW(t){const e=Ad(t),n=e.link?decodeURIComponent(e.link):void 0,r=Ad(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Ad(i).link||i||r||n||t}function Ad(t){if(!(t==null?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return ho(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fW=500;class pW{constructor(){this._redirectPersistence=Ms,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Sd}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new oW(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){qt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){nW(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),lj(),await this._originValidation(e);const o=aW(e,r,i);await cW(e,o);const a=await Xj(e,o,n),c=await eW(a);return tW(e,s,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Zj(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Us(),o=setTimeout(async()=>{await fA(e),n.onEvent(pA())},fW),a=async u=>{clearTimeout(o);const h=await fA(e);let d=null;h&&(u==null?void 0:u.url)&&(d=lW(h,u.url)),n.onEvent(d||pA())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,l=`${s.packageName.toLowerCase()}://`;Us().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(l)&&a({url:u}),typeof c=="function")try{c(u)}catch(h){console.error(h)}}}}const gW=pW;function pA(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:jt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mW(t,e){Pt(t)._logFramework(e)}var yW="@firebase/auth-compat",_W="0.1.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vW=1e3;function Nd(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function wW(){return Nd()==="http:"||Nd()==="https:"}function gA(t=He()){return!!((Nd()==="file:"||Nd()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function EW(){return Va()||jf()}function IW(){return Hf()&&(document==null?void 0:document.documentMode)===11}function bW(t=He()){return/Edge\/\d+/.test(t)}function TW(t=He()){return IW()||bW(t)}function mA(){try{const t=self.localStorage,e=El();if(t)return t.setItem(e,"1"),t.removeItem(e),TW()?uu():!0}catch(t){return Vy()&&uu()}return!1}function Vy(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function By(){return(wW()||Wf()||gA())&&!EW()&&mA()&&!Vy()}function yA(){return gA()&&typeof document!="undefined"}async function SW(){return yA()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},vW);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn={LOCAL:"local",NONE:"none",SESSION:"session"},bl=D,_A="persistence";function CW(t,e){if(bl(Object.values(kn).includes(e),t,"invalid-persistence-type"),Va()){bl(e!==kn.SESSION,t,"unsupported-persistence-type");return}if(jf()){bl(e===kn.NONE,t,"unsupported-persistence-type");return}if(Vy()){bl(e===kn.NONE||e===kn.LOCAL&&uu(),t,"unsupported-persistence-type");return}bl(e===kn.NONE||mA(),t,"unsupported-persistence-type")}async function $y(t){await t._initializationPromise;const e=vA(),n=Ds(_A,t.config.apiKey,t.name);(e==null?void 0:e.sessionStorage)&&e.sessionStorage.setItem(n,t._getPersistence())}function AW(t,e){const n=vA();if(!(n==null?void 0:n.sessionStorage))return[];const r=Ds(_A,t,e);switch(n.sessionStorage.getItem(r)){case kn.NONE:return[_l];case kn.LOCAL:return[Id,Ms];case kn.SESSION:return[Ms];default:return[]}}function vA(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NW=D;class Di{constructor(){this.browserResolver=Rn(Wj),this.cordovaResolver=Rn(gW),this.underlyingResolver=null,this._redirectPersistence=Ms,this._completeRedirectFn=Sd}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return yA()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return NW(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await SW();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wA(t){return t.unwrap()}function RW(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kW(t){return EA(t)}function PW(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new OW(t,fq(t,e))}else if(r){const i=EA(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function EA(t){const{_tokenResponse:e}=t instanceof xn?t.customData:t;if(!e)return null;if(!(t instanceof xn)&&"temporaryProof"in e&&"phoneNumber"in e)return nr.credentialFromResult(t);const n=e.providerId;if(!n||n===dl.PASSWORD)return null;let r;switch(n){case dl.GOOGLE:r=Er;break;case dl.FACEBOOK:r=wr;break;case dl.GITHUB:r=Ir;break;case dl.TWITTER:r=br;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?dd._create(n,a):vr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new ya(n).credential({idToken:i,accessToken:s,rawNonce:c})}return t instanceof xn?r.credentialFromError(t):r.credentialFromResult(t)}async function yn(t,e){let n;try{n=await e}catch(s){throw s instanceof xn&&PW(t,s),s}const{operationType:r,user:i}=n;return{operationType:r,credential:kW(n),additionalUserInfo:dq(n),user:jr.getOrCreate(i)}}async function qy(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>yn(t,n.confirm(r))}}class OW{constructor(e,n){this.resolver=n,this.auth=RW(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return yn(wA(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this._delegate=e,this.multiFactor=yq(e)}static getOrCreate(e){return jr.USER_MAP.has(e)||jr.USER_MAP.set(e,new jr(e)),jr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return yn(this.auth,$C(this._delegate,e))}async linkWithPhoneNumber(e,n){return qy(this.auth,Yq(this._delegate,e,n))}async linkWithPopup(e){return yn(this.auth,sj(this._delegate,e,Di))}async linkWithRedirect(e){return await $y(Pt(this.auth)),pj(this._delegate,e,Di)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return yn(this.auth,qC(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return qy(this.auth,Jq(this._delegate,e,n))}reauthenticateWithPopup(e){return yn(this.auth,ij(this._delegate,e,Di))}async reauthenticateWithRedirect(e){return await $y(Pt(this.auth)),dj(this._delegate,e,Di)}sendEmailVerification(e){return tq(this._delegate,e)}async unlink(e){return await $$(this._delegate,e),this}updateEmail(e){return sq(this._delegate,e)}updatePassword(e){return oq(this._delegate,e)}updatePhoneNumber(e){return Xq(this._delegate,e)}updateProfile(e){return iq(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return nq(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}jr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=D;class jy{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Tl(r,"invalid-api-key",{appName:e.name});let i=[_l];if(typeof window!="undefined"){i=AW(r,e.name);for(const o of[Id,Sy,Ms])i.includes(o)||i.push(o)}Tl(r,"invalid-api-key",{appName:e.name});const s=typeof window!="undefined"?Di:void 0;this._delegate=n.initialize({options:{persistence:i,popupRedirectResolver:s}}),this._delegate._updateErrorMap(YB),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?jr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){w$(this._delegate,e,n)}applyActionCode(e){return K$(this._delegate,e)}checkActionCode(e){return jC(this._delegate,e)}confirmPasswordReset(e,n){return H$(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return yn(this._delegate,G$(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return eq(this._delegate,e)}isSignInWithEmailLink(e){return J$(this._delegate,e)}async getRedirectResult(){Tl(By(),this._delegate,"operation-not-supported-in-this-environment");const e=await mj(this._delegate,Di);return e?yn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){mW(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=IA(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=IA(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return Y$(this._delegate,e,n)}sendPasswordResetEmail(e,n){return W$(this._delegate,e,n||void 0)}async setPersistence(e){CW(this._delegate,e);let n;switch(e){case kn.SESSION:n=Ms;break;case kn.LOCAL:n=await Rn(Id)._isAvailable()?Id:Sy;break;case kn.NONE:n=_l;break;default:return qt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return yn(this._delegate,B$(this._delegate))}signInWithCredential(e){return yn(this._delegate,gd(this._delegate,e))}signInWithCustomToken(e){return yn(this._delegate,j$(this._delegate,e))}signInWithEmailAndPassword(e,n){return yn(this._delegate,Q$(this._delegate,e,n))}signInWithEmailLink(e,n){return yn(this._delegate,X$(this._delegate,e,n))}signInWithPhoneNumber(e,n){return qy(this._delegate,Qq(this._delegate,e,n))}async signInWithPopup(e){return Tl(By(),this._delegate,"operation-not-supported-in-this-environment"),yn(this._delegate,rj(this._delegate,e,Di))}async signInWithRedirect(e){return Tl(By(),this._delegate,"operation-not-supported-in-this-environment"),await $y(this._delegate),uj(this._delegate,e,Di)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return z$(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}jy.Persistence=kn;function IA(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&jr.getOrCreate(o)),error:e,complete:n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.providerId="phone",this._delegate=new nr(wA(po.auth()))}static credential(e,n){return nr.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Wy.PHONE_SIGN_IN_METHOD=nr.PHONE_SIGN_IN_METHOD;Wy.PROVIDER_ID=nr.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DW=D;class xW{constructor(e,n,r=po.app()){var i;DW((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new zq(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LW="auth-compat";function MW(t){t.INTERNAL.registerComponent(new Ln(LW,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new jy(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ha.EMAIL_SIGNIN,PASSWORD_RESET:ha.PASSWORD_RESET,RECOVER_EMAIL:ha.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ha.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ha.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ha.VERIFY_EMAIL}},EmailAuthProvider:Pi,FacebookAuthProvider:wr,GithubAuthProvider:Ir,GoogleAuthProvider:Er,OAuthProvider:ya,PhoneAuthProvider:Wy,PhoneMultiFactorGenerator:dA,RecaptchaVerifier:xW,TwitterAuthProvider:br,Auth:jy,AuthCredential:ga,Error:xn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(yW,_W)}MW(po);/**
  * vee-validate v4.5.2
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */function Vs(t){return typeof t=="function"}function Rd(t){return t==null}const va=t=>t!==null&&!!t&&typeof t=="object"&&!Array.isArray(t);function bA(t){return Number(t)>=0}function FW(t){const e=parseFloat(t);return isNaN(e)?t:e}const TA={};function WH(t,e){VW(t,e),TA[t]=e}function UW(t){return TA[t]}function VW(t,e){if(!Vs(e))throw new Error(`Extension Error: The validator '${t}' must be a function.`)}const Bs=Symbol("vee-validate-form"),BW=Symbol("vee-validate-field-instance"),kd=Symbol("Default empty value");function Hy(t){return Vs(t)&&!!t.__locatorRef}function $W(t){return["input","textarea","select"].includes(t)}function qW(t,e){return $W(t)&&e.type==="file"}function Sl(t){return!!t&&Vs(t.validate)}function Cl(t){return t==="checkbox"||t==="radio"}function jW(t){return va(t)||Array.isArray(t)}function WW(t){return Array.isArray(t)?t.length===0:va(t)&&Object.keys(t).length===0}function Pd(t){return/^\[.+\]$/i.test(t)}function HW(t){return SA(t)&&t.multiple}function SA(t){return t.tagName==="SELECT"}function KW(t,e){const n=![!1,null,void 0,0].includes(e.multiple)&&!Number.isNaN(e.multiple);return t==="select"&&"multiple"in e&&n}function zW(t,e){return KW(t,e)||qW(t,e)}function GW(t){return Ky(t)&&t.target&&"submit"in t.target}function Ky(t){return t?!!(typeof Event!="undefined"&&Vs(Event)&&t instanceof Event||t&&t.srcElement):!1}function zy(t,e){return e in t&&t[e]!==kd}function Gy(t){return Pd(t)?t.replace(/\[|\]/gi,""):t}function Ot(t,e,n){return t?Pd(e)?t[Gy(e)]:(e||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((i,s)=>jW(i)&&s in i?i[s]:n,t):n}function wa(t,e,n){if(Pd(e)){t[Gy(e)]=n;return}const r=e.split(/\.|\[(\d+)\]/).filter(Boolean);let i=t;for(let s=0;s<r.length;s++){if(s===r.length-1){i[r[s]]=n;return}(!(r[s]in i)||Rd(i[r[s]]))&&(i[r[s]]=bA(r[s+1])?[]:{}),i=i[r[s]]}}function Qy(t,e){if(Array.isArray(t)&&bA(e)){t.splice(Number(e),1);return}va(t)&&delete t[e]}function Yy(t,e){if(Pd(e)){delete t[Gy(e)];return}const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let r=t;for(let s=0;s<n.length;s++){if(s===n.length-1){Qy(r,n[s]);break}if(!(n[s]in r)||Rd(r[n[s]]))break;r=r[n[s]]}const i=n.map((s,o)=>Ot(t,n.slice(0,o).join(".")));for(let s=i.length-1;s>=0;s--)if(!!WW(i[s])){if(s===0){Qy(t,n[0]);continue}Qy(i[s-1],n[s-1])}}function Qt(t){return Object.keys(t)}function Al(t,e=void 0){const n=pv();return(n==null?void 0:n.provides[t])||wn(t,e)}function CA(t){Ev(`[vee-validate]: ${t}`)}function Jy(t,e,n){if(Array.isArray(t)){const r=[...t],i=r.indexOf(e);return i>=0?r.splice(i,1):r.push(e),r}return t===e?n:e}function QW(t,e=0){let n=null,r=[];return function(...i){return n&&window.clearTimeout(n),n=window.setTimeout(()=>{const s=t(...i);r.forEach(o=>o(s)),r=[]},e),new Promise(s=>r.push(s))}}const Od=(t,e,n)=>e.slots.default?typeof t=="string"||!t?e.slots.default(n()):{default:()=>{var r,i;return(i=(r=e.slots).default)===null||i===void 0?void 0:i.call(r,n())}}:e.slots.default;function Xy(t){if(AA(t))return t._value}function AA(t){return"_value"in t}function Zy(t){if(!Ky(t))return t;const e=t.target;if(Cl(e.type)&&AA(e))return Xy(e);if(e.type==="file"&&e.files)return Array.from(e.files);if(HW(e))return Array.from(e.options).filter(n=>n.selected&&!n.disabled).map(Xy);if(SA(e)){const n=Array.from(e.options).find(r=>r.selected);return n?Xy(n):e.value}return e.value}function NA(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?va(t)&&t._$$isNormalized?t:va(t)?Object.keys(t).reduce((n,r)=>{const i=YW(t[r]);return t[r]!==!1&&(n[r]=RA(i)),n},e):typeof t!="string"?e:t.split("|").reduce((n,r)=>{const i=JW(r);return i.name&&(n[i.name]=RA(i.params)),n},e):e}function YW(t){return t===!0?[]:Array.isArray(t)||va(t)?t:[t]}function RA(t){const e=n=>typeof n=="string"&&n[0]==="@"?XW(n.slice(1)):n;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,r)=>(n[r]=e(t[r]),n),{})}const JW=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function XW(t){const e=n=>Ot(n,t)||n[t];return e.__locatorRef=t,e}function ZW(t){return Array.isArray(t)?t.filter(Hy):Qt(t).filter(e=>Hy(t[e])).map(e=>t[e])}const eH={generateMessage:({field:t})=>`${t} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let e_=Object.assign({},eH);const t_=()=>e_,tH=t=>{e_=Object.assign(Object.assign({},e_),t)},HH=tH;async function kA(t,e,n={}){const r=n==null?void 0:n.bails,i={name:(n==null?void 0:n.name)||"{field}",rules:e,bails:r!=null?r:!0,formData:(n==null?void 0:n.values)||{}},o=(await nH(i,t)).errors;return{errors:o,valid:!o.length}}async function nH(t,e){if(Sl(t.rules))return rH(e,t.rules,{bails:t.bails});if(Vs(t.rules)){const o={field:t.name,form:t.formData,value:e},a=await t.rules(e,o),c=typeof a!="string"&&a,l=typeof a=="string"?a:PA(o);return{errors:c?[]:[l]}}const n=Object.assign(Object.assign({},t),{rules:NA(t.rules)}),r=[],i=Object.keys(n.rules),s=i.length;for(let o=0;o<s;o++){const a=i[o],c=await iH(n,e,{name:a,params:n.rules[a]});if(c.error&&(r.push(c.error),t.bails))return{errors:r}}return{errors:r}}async function rH(t,e,n){var r;return{errors:await e.validate(t,{abortEarly:(r=n.bails)!==null&&r!==void 0?r:!0}).then(()=>[]).catch(s=>{if(s.name==="ValidationError")return s.errors;throw s})}}async function iH(t,e,n){const r=UW(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const i=sH(n.params,t.formData),s={field:t.name,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:i})},o=await r(e,i,s);return typeof o=="string"?{error:o}:{error:o?void 0:PA(s)}}function PA(t){const e=t_().generateMessage;return e?e(t):"Field is invalid"}function sH(t,e){const n=r=>Hy(r)?r(e):r;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((r,i)=>(r[i]=n(t[i]),r),{})}async function oH(t,e){const n=await t.validate(e,{abortEarly:!1}).then(()=>[]).catch(s=>{if(s.name!=="ValidationError")throw s;return s.inner||[]}),r={},i={};for(const s of n){const o=s.errors;r[s.path]={valid:!o.length,errors:o},o.length&&(i[s.path]=o[0])}return{valid:!n.length,results:r,errors:i}}async function aH(t,e,n){const i=Qt(t).map(async l=>{var u,h,d;const f=await kA(Ot(e,l),t[l],{name:((u=n==null?void 0:n.names)===null||u===void 0?void 0:u[l])||l,values:e,bails:(d=(h=n==null?void 0:n.bailsMap)===null||h===void 0?void 0:h[l])!==null&&d!==void 0?d:!0});return Object.assign(Object.assign({},f),{path:l})});let s=!0;const o=await Promise.all(i),a={},c={};for(const l of o)a[l.path]={valid:l.valid,errors:l.errors},l.valid||(s=!1,c[l.path]=l.errors[0]);return{valid:s,results:a,errors:c}}function OA(t,e,n){typeof n.value=="object"&&(n.value=mt(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||e==="__proto__"?Object.defineProperty(t,e,n):t[e]=n.value}function mt(t){if(typeof t!="object")return t;var e=0,n,r,i,s=Object.prototype.toString.call(t);if(s==="[object Object]"?i=Object.create(t.__proto__||null):s==="[object Array]"?i=Array(t.length):s==="[object Set]"?(i=new Set,t.forEach(function(o){i.add(mt(o))})):s==="[object Map]"?(i=new Map,t.forEach(function(o,a){i.set(mt(a),mt(o))})):s==="[object Date]"?i=new Date(+t):s==="[object RegExp]"?i=new RegExp(t.source,t.flags):s==="[object DataView]"?i=new t.constructor(mt(t.buffer)):s==="[object ArrayBuffer]"?i=t.slice(0):s.slice(-6)==="Array]"&&(i=new t.constructor(t)),i){for(r=Object.getOwnPropertySymbols(t);e<r.length;e++)OA(i,r[e],Object.getOwnPropertyDescriptor(t,r[e]));for(e=0,r=Object.getOwnPropertyNames(t);e<r.length;e++)Object.hasOwnProperty.call(i,n=r[e])&&i[n]===t[n]||OA(i,n,Object.getOwnPropertyDescriptor(t,n))}return i||t}var Dd=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,i,s;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(i=r;i--!=0;)if(!t(e[i],n[i]))return!1;return!0}if(e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(i of e.entries())if(!n.has(i[0]))return!1;for(i of e.entries())if(!t(i[1],n.get(i[0])))return!1;return!0}if(e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(i of e.entries())if(!n.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if(r=e.length,r!=n.length)return!1;for(i=r;i--!=0;)if(e[i]!==n[i])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(s=Object.keys(e),r=s.length,r!==Object.keys(n).length)return!1;for(i=r;i--!=0;)if(!Object.prototype.hasOwnProperty.call(n,s[i]))return!1;for(i=r;i--!=0;){var o=s[i];if(!t(e[o],n[o]))return!1}return!0}return e!==e&&n!==n};let DA=0;function cH(t,e){const{value:n,initialValue:r,setInitialValue:i}=lH(t,e.modelValue,!e.standalone),{errorMessage:s,errors:o,setErrors:a}=hH(t,!e.standalone),c=uH(n,r,o),l=DA>=Number.MAX_SAFE_INTEGER?0:++DA;function u(h){var d;"value"in h&&(n.value=h.value),"errors"in h&&a(h.errors),"touched"in h&&(c.touched=(d=h.touched)!==null&&d!==void 0?d:c.touched),"initialValue"in h&&i(h.initialValue)}return{id:l,path:t,value:n,initialValue:r,meta:c,errors:o,errorMessage:s,setState:u}}function lH(t,e,n){const r=n?Al(Bs,void 0):void 0,i=Kn(Z(e));function s(){return r?Ot(r.meta.value.initialValues,Z(t),Z(i)):Z(i)}function o(u){if(!r){i.value=u;return}r.setFieldInitialValue(Z(t),u)}const a=Le(s);if(!r)return{value:Kn(s()),initialValue:a,setInitialValue:o};const c=e?Z(e):Ot(r.values,Z(t),Z(a));return r.stageInitialValue(Z(t),c),{value:Le({get(){return Ot(r.values,Z(t))},set(u){r.setFieldValue(Z(t),u)}}),initialValue:a,setInitialValue:o}}function uH(t,e,n){const r=zr({touched:!1,pending:!1,valid:!0,validated:!!Z(n).length,initialValue:Le(()=>Z(e)),dirty:Le(()=>!Dd(Z(t),Z(e)))});return cn(n,i=>{r.valid=!i.length},{immediate:!0,flush:"sync"}),r}function hH(t,e){const n=e?Al(Bs,void 0):void 0;function r(s){return s?Array.isArray(s)?s:[s]:[]}if(!n){const s=Kn([]);return{errors:s,errorMessage:Le(()=>s.value[0]),setErrors:o=>{s.value=r(o)}}}const i=Le(()=>n.errorBag.value[Z(t)]||[]);return{errors:i,errorMessage:Le(()=>i.value[0]),setErrors:s=>{n.setFieldErrorBag(Z(t),r(s))}}}function dH(t,e,n){return Cl(n==null?void 0:n.type)?gH(t,e,n):xA(t,e,n)}function xA(t,e,n){const{initialValue:r,validateOnMount:i,bails:s,type:o,checkedValue:a,label:c,validateOnValueUpdate:l,uncheckedValue:u,standalone:h}=fH(Z(t),n),d=h?void 0:Al(Bs),{id:f,value:g,initialValue:y,meta:_,setState:w,errors:S,errorMessage:L}=cH(t,{modelValue:r,standalone:h}),U=()=>{_.touched=!0},G=Le(()=>{let j=Z(e);const Re=Z(d==null?void 0:d.schema);return Re&&!Sl(Re)&&(j=pH(Re,Z(t))||j),Sl(j)||Vs(j)?j:NA(j)});async function se(j){var Re,je;return(d==null?void 0:d.validateSchema)?(Re=(await d.validateSchema(j)).results[Z(t)])!==null&&Re!==void 0?Re:{valid:!0,errors:[]}:kA(g.value,G.value,{name:Z(c)||Z(t),values:(je=d==null?void 0:d.values)!==null&&je!==void 0?je:{},bails:s})}async function te(){_.pending=!0,_.validated=!0;const j=await se("validated-only");return w({errors:j.errors}),_.pending=!1,j}async function he(){const j=await se("silent");return _.valid=j.valid,j}function Q(j){return!(j==null?void 0:j.mode)||(j==null?void 0:j.mode)==="force"||(j==null?void 0:j.mode)==="validated-only"?te():he()}const pe=(j,Re=!0)=>{const je=Zy(j);g.value=je,!l&&Re&&te()};Gl(()=>{if(i)return te();(!d||!d.validateSchema)&&he()});function Ee(j){_.touched=j}let H;function be(){H=cn(g,l?te:he,{deep:!0})}be();function Ge(j){var Re;H==null||H();const je=j&&"value"in j?j.value:y.value;w({value:mt(je),initialValue:mt(je),touched:(Re=j==null?void 0:j.touched)!==null&&Re!==void 0?Re:!1,errors:(j==null?void 0:j.errors)||[]}),_.pending=!1,_.validated=!1,he(),Zs(()=>{be()})}function Wt(j){g.value=j}function Ce(j){w({errors:Array.isArray(j)?j:[j]})}const ve={id:f,name:t,label:c,value:g,meta:_,errors:S,errorMessage:L,type:o,checkedValue:a,uncheckedValue:u,bails:s,resetField:Ge,handleReset:()=>Ge(),validate:Q,handleChange:pe,handleBlur:U,setState:w,setTouched:Ee,setErrors:Ce,setValue:Wt};if(zs(BW,ve),it(e)&&typeof Z(e)!="function"&&cn(e,(j,Re)=>{Dd(j,Re)||(_.validated?te():he())},{deep:!0}),!d)return ve;d.register(ve),Ca(()=>{d.unregister(ve)});const Ie=Le(()=>{const j=G.value;return!j||Vs(j)||Sl(j)?{}:Object.keys(j).reduce((Re,je)=>{const Yt=ZW(j[je]).map(ut=>ut.__locatorRef).reduce((ut,Tr)=>{const T=Ot(d.values,Tr)||d.values[Tr];return T!==void 0&&(ut[Tr]=T),ut},{});return Object.assign(Re,Yt),Re},{})});return cn(Ie,(j,Re)=>{if(!Object.keys(j).length)return;!Dd(j,Re)&&(_.validated?te():he())}),ve}function fH(t,e){const n=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,rules:"",label:t,validateOnValueUpdate:!0,standalone:!1});if(!e)return n();const r="valueProp"in e?e.valueProp:e.checkedValue;return Object.assign(Object.assign(Object.assign({},n()),e||{}),{checkedValue:r})}function pH(t,e){if(!!t)return t[e]}function gH(t,e,n){const r=(n==null?void 0:n.standalone)?void 0:Al(Bs),i=n==null?void 0:n.checkedValue,s=n==null?void 0:n.uncheckedValue;function o(a){const c=a.handleChange,l=Le(()=>{const h=Z(a.value),d=Z(i);return Array.isArray(h)?h.includes(d):d===h});function u(h,d=!0){var f,g;if(l.value===((g=(f=h)===null||f===void 0?void 0:f.target)===null||g===void 0?void 0:g.checked))return;let y=Zy(h);r||(y=Jy(Z(a.value),Z(i),Z(s))),c(y,d)}return Ca(()=>{l.value&&u(Z(i),!1)}),Object.assign(Object.assign({},a),{checked:l,checkedValue:i,uncheckedValue:s,handleChange:u})}return o(xA(t,e,n))}const KH=Gs({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>t_().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:kd},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1}},setup(t,e){const n=Gr(t,"rules"),r=Gr(t,"name"),i=Gr(t,"label"),s=Gr(t,"uncheckedValue"),o=zy(t,"onUpdate:modelValue"),{errors:a,value:c,errorMessage:l,validate:u,handleChange:h,handleBlur:d,setTouched:f,resetField:g,handleReset:y,meta:_,checked:w,setErrors:S}=dH(r,n,{validateOnMount:t.validateOnMount,bails:t.bails,standalone:t.standalone,type:e.attrs.type,initialValue:_H(t,e),checkedValue:e.attrs.value,uncheckedValue:s,label:i,validateOnValueUpdate:!1}),L=o?function(pe,Ee=!0){h(pe,Ee),e.emit("update:modelValue",c.value)}:h,U=Q=>{Cl(e.attrs.type)||(c.value=Zy(Q))},G=o?function(pe){U(pe),e.emit("update:modelValue",c.value)}:U,se=Le(()=>{const{validateOnInput:Q,validateOnChange:pe,validateOnBlur:Ee,validateOnModelUpdate:H}=mH(t),be=[d,e.attrs.onBlur,Ee?u:void 0].filter(Boolean),Ge=[Ie=>L(Ie,Q),e.attrs.onInput].filter(Boolean),Wt=[Ie=>L(Ie,pe),e.attrs.onChange].filter(Boolean),Ce={name:t.name,onBlur:be,onInput:Ge,onChange:Wt};H&&(Ce["onUpdate:modelValue"]=[L]),Cl(e.attrs.type)&&w?Ce.checked=w.value:Ce.value=c.value;const ve=LA(t,e);return zW(ve,e.attrs)&&delete Ce.value,Ce}),te=Gr(t,"modelValue");cn(te,Q=>{Q===kd&&c.value===void 0||Q!==yH(c.value,t.modelModifiers)&&(c.value=Q===kd?void 0:Q,u())});function he(){return{field:se.value,value:c.value,meta:_,errors:a.value,errorMessage:l.value,validate:u,resetField:g,handleChange:L,handleInput:G,handleReset:y,handleBlur:d,setTouched:f,setErrors:S}}return e.expose({setErrors:S,setTouched:f,reset:g,validate:u,handleChange:h}),()=>{const Q=ff(LA(t,e)),pe=Od(Q,e,he);return Q?Wi(Q,Object.assign(Object.assign({},e.attrs),se.value),pe):pe}}});function LA(t,e){let n=t.as||"";return!t.as&&!e.slots.default&&(n="input"),n}function mH(t){var e,n,r,i;const{validateOnInput:s,validateOnChange:o,validateOnBlur:a,validateOnModelUpdate:c}=t_();return{validateOnInput:(e=t.validateOnInput)!==null&&e!==void 0?e:s,validateOnChange:(n=t.validateOnChange)!==null&&n!==void 0?n:o,validateOnBlur:(r=t.validateOnBlur)!==null&&r!==void 0?r:a,validateOnModelUpdate:(i=t.validateOnModelUpdate)!==null&&i!==void 0?i:c}}function yH(t,e){return e.number?FW(t):t}function _H(t,e){return Cl(e.attrs.type)?zy(t,"modelValue")?t.modelValue:void 0:zy(t,"modelValue")?t.modelValue:e.attrs.value}let vH=0;function wH(t){const e=vH++,n=Kn({}),r=Kn(!1),i=Kn(0),s={},o=zr(mt(Z(t==null?void 0:t.initialValues)||{})),{errorBag:a,setErrorBag:c,setFieldErrorBag:l}=bH(t==null?void 0:t.initialErrors),u=Le(()=>Qt(a.value).reduce((I,N)=>{const q=a.value[N];return q&&q.length&&(I[N]=q[0]),I},{}));function h(I){const N=n.value[I];return Array.isArray(N)?N[0]:N}function d(I){return!!n.value[I]}const f=Le(()=>Qt(n.value).reduce((I,N)=>{const q=h(N);return q&&(I[N]=Z(q.label||q.name)||""),I},{})),g=Le(()=>Qt(n.value).reduce((I,N)=>{var q;const V=h(N);return V&&(I[N]=(q=V.bails)!==null&&q!==void 0?q:!0),I},{})),y=Object.assign({},(t==null?void 0:t.initialErrors)||{}),{initialValues:_,originalInitialValues:w,setInitialValues:S}=IH(n,o,t==null?void 0:t.initialValues),L=EH(n,o,_,u),U=t==null?void 0:t.validationSchema,G={formId:e,fieldsByPath:n,values:o,errorBag:a,errors:u,schema:U,submitCount:i,meta:L,isSubmitting:r,fieldArraysLookup:s,validateSchema:Z(U)?B:void 0,validate:j,register:ve,unregister:Ie,setFieldErrorBag:l,validateField:Re,setFieldValue:pe,setValues:Ee,setErrors:Q,setFieldError:he,setFieldTouched:H,setTouched:be,resetForm:Ge,handleSubmit:je,stageInitialValue:Tr,unsetInitialValue:ut,setFieldInitialValue:Yt};function se(I){return Array.isArray(I)}function te(I,N){return Array.isArray(I)?I.forEach(N):N(I)}function he(I,N){l(I,N)}function Q(I){c(I)}function pe(I,N,{force:q}={force:!1}){var V;const p=n.value[I],m=mt(N);if(!p){wa(o,I,m);return}if(se(p)&&((V=p[0])===null||V===void 0?void 0:V.type)==="checkbox"&&!Array.isArray(N)){const b=mt(Jy(Ot(o,I)||[],N,void 0));wa(o,I,b);return}let v=N;!se(p)&&p.type==="checkbox"&&!q&&(v=mt(Jy(Ot(o,I),N,Z(p.uncheckedValue)))),wa(o,I,v)}function Ee(I){Qt(o).forEach(N=>{delete o[N]}),Qt(I).forEach(N=>{pe(N,I[N])}),Object.values(s).forEach(N=>N&&N.reset())}function H(I,N){const q=n.value[I];q&&te(q,V=>V.setTouched(N))}function be(I){Qt(I).forEach(N=>{H(N,!!I[N])})}function Ge(I){(I==null?void 0:I.values)?(S(I.values),Ee(I==null?void 0:I.values)):(S(w.value),Ee(w.value)),Object.values(n.value).forEach(N=>{!N||te(N,q=>q.resetField())}),(I==null?void 0:I.touched)&&be(I.touched),Q((I==null?void 0:I.errors)||{}),i.value=(I==null?void 0:I.submitCount)||0}function Wt(I,N){const q=Xd(I),V=N;if(!n.value[V]){n.value[V]=q;return}const p=n.value[V];p&&!Array.isArray(p)&&(n.value[V]=[p]),n.value[V]=[...n.value[V],q]}function Ce(I,N){const q=N,V=n.value[q];if(!!V){if(!se(V)&&I.id===V.id){delete n.value[q];return}if(se(V)){const p=V.findIndex(m=>m.id===I.id);if(p===-1)return;if(V.splice(p,1),V.length===1){n.value[q]=V[0];return}V.length||delete n.value[q]}}}function ve(I){const N=Z(I.name);Wt(I,N),it(I.name)&&cn(I.name,async(V,p)=>{await Zs(),Ce(I,p),Wt(I,V),(u.value[p]||u.value[V])&&Re(V),await Zs(),d(p)||Yy(o,p)});const q=Z(I.errorMessage);q&&(y==null?void 0:y[N])!==q&&Re(N),delete y[N]}function Ie(I){const N=Z(I.name);Ce(I,N),Zs(()=>{d(N)||(he(N,void 0),Yy(o,N))})}async function j(I){if(G.validateSchema)return G.validateSchema((I==null?void 0:I.mode)||"force");const N=await Promise.all(Object.values(n.value).map(p=>{const m=Array.isArray(p)?p[0]:p;return m?m.validate(I).then(v=>({key:Z(m.name),valid:v.valid,errors:v.errors})):Promise.resolve({key:"",valid:!0,errors:[]})})),q={},V={};for(const p of N)q[p.key]={valid:p.valid,errors:p.errors},p.errors.length&&(V[p.key]=p.errors[0]);return{valid:N.every(p=>p.valid),results:q,errors:V}}async function Re(I){const N=n.value[I];return N?Array.isArray(N)?N.map(q=>q.validate())[0]:N.validate():(Ev(`field with name ${I} was not found`),Promise.resolve({errors:[],valid:!0}))}function je(I,N){return function(V){return V instanceof Event&&(V.preventDefault(),V.stopPropagation()),be(Qt(n.value).reduce((p,m)=>(p[m]=!0,p),{})),r.value=!0,i.value++,j().then(p=>{if(p.valid&&typeof I=="function")return I(mt(o),{evt:V,setErrors:Q,setFieldError:he,setTouched:be,setFieldTouched:H,setValues:Ee,setFieldValue:pe,resetForm:Ge});!p.valid&&typeof N=="function"&&N({values:mt(o),evt:V,errors:p.errors,results:p.results})}).then(p=>(r.value=!1,p),p=>{throw r.value=!1,p})}}function Yt(I,N){wa(_.value,I,mt(N))}function ut(I){Yy(_.value,I)}function Tr(I,N){wa(o,I,N),Yt(I,N)}async function T(){const I=Z(U);return I?Sl(I)?await oH(I,o):await aH(I,o,{names:f.value,bailsMap:g.value}):{valid:!0,results:{},errors:{}}}const Y=QW(T,5);async function B(I){const N=await Y(),q=G.fieldsByPath.value||{},V=Qt(G.errorBag.value);return[...new Set([...Qt(N.results),...Qt(q),...V])].reduce((m,v)=>{const b=q[v],C=(N.results[v]||{errors:[]}).errors,x={errors:C,valid:!C.length};if(m.results[v]=x,x.valid||(m.errors[v]=x.errors[0]),!b)return he(v,C),m;if(te(b,P=>P.meta.valid=x.valid),I==="silent")return m;const W=Array.isArray(b)?b.some(P=>P.meta.validated):b.meta.validated;return I==="validated-only"&&!W||te(b,P=>P.setState({errors:x.errors})),m},{valid:N.valid,results:{},errors:{}})}const ne=je((I,{evt:N})=>{GW(N)&&N.target.submit()});return Gl(()=>{if((t==null?void 0:t.initialErrors)&&Q(t.initialErrors),(t==null?void 0:t.initialTouched)&&be(t.initialTouched),t==null?void 0:t.validateOnMount){j();return}G.validateSchema&&G.validateSchema("silent")}),it(U)&&cn(U,()=>{var I;(I=G.validateSchema)===null||I===void 0||I.call(G,"validated-only")}),zs(Bs,G),{errors:u,meta:L,values:o,isSubmitting:r,submitCount:i,validate:j,validateField:Re,handleReset:()=>Ge(),resetForm:Ge,handleSubmit:je,submitForm:ne,setFieldError:he,setErrors:Q,setFieldValue:pe,setValues:Ee,setFieldTouched:H,setTouched:be}}function EH(t,e,n,r){const i={touched:"some",pending:"some",valid:"every"},s=Le(()=>!Dd(e,Z(n))),o=Le(()=>{const a=Object.values(t.value).flat(1).filter(Boolean);return Qt(i).reduce((c,l)=>{const u=i[l];return c[l]=a[u](h=>h.meta[l]),c},{})});return Le(()=>Object.assign(Object.assign({initialValues:Z(n)},o.value),{valid:o.value.valid&&!Qt(r.value).length,dirty:s.value}))}function IH(t,e,n){const r=Kn(mt(Z(n))||{}),i=Kn(mt(Z(n))||{});function s(o,a=!1){r.value=mt(o),i.value=mt(o),!!a&&Qt(t.value).forEach(c=>{const l=t.value[c],u=Array.isArray(l)?l.some(d=>d.meta.touched):l==null?void 0:l.meta.touched;if(!l||u)return;const h=Ot(r.value,c);wa(e,c,mt(h))})}return it(n)&&cn(n,o=>{s(o,!0)},{deep:!0}),{initialValues:r,originalInitialValues:i,setInitialValues:s}}function bH(t){const e=Kn({});function n(s){return Array.isArray(s)?s:s?[s]:[]}function r(s,o){if(!o){delete e.value[s];return}e.value[s]=n(o)}function i(s){e.value=Qt(s).reduce((o,a)=>{const c=s[a];return c&&(o[a]=n(c)),o},{})}return t&&i(t),{errorBag:e,setErrorBag:i,setFieldErrorBag:r}}const zH=Gs({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0}},setup(t,e){const n=Gr(t,"initialValues"),r=Gr(t,"validationSchema"),{errors:i,values:s,meta:o,isSubmitting:a,submitCount:c,validate:l,validateField:u,handleReset:h,resetForm:d,handleSubmit:f,submitForm:g,setErrors:y,setFieldError:_,setFieldValue:w,setValues:S,setFieldTouched:L,setTouched:U}=wH({validationSchema:r.value?r:void 0,initialValues:n,initialErrors:t.initialErrors,initialTouched:t.initialTouched,validateOnMount:t.validateOnMount}),G=t.onSubmit?f(t.onSubmit,t.onInvalidSubmit):g;function se(Q){Ky(Q)&&Q.preventDefault(),h(),typeof e.attrs.onReset=="function"&&e.attrs.onReset()}function te(Q,pe){return f(typeof Q=="function"&&!pe?Q:pe,t.onInvalidSubmit)(Q)}function he(){return{meta:o.value,errors:i.value,values:s,isSubmitting:a.value,submitCount:c.value,validate:l,validateField:u,handleSubmit:te,handleReset:h,submitForm:g,setErrors:y,setFieldError:_,setFieldValue:w,setValues:S,setFieldTouched:L,setTouched:U,resetForm:d}}return e.expose({setFieldError:_,setErrors:y,setFieldValue:w,setValues:S,setFieldTouched:L,setTouched:U,resetForm:d,validate:l,validateField:u}),function(){const pe=t.as==="form"?t.as:ff(t.as),Ee=Od(pe,e,he);if(!t.as)return Ee;const H=t.as==="form"?{novalidate:!0}:{};return Wi(pe,Object.assign(Object.assign(Object.assign({},H),e.attrs),{onSubmit:G,onReset:se}),Ee)}}});let TH=0;function SH(t){const e=TH++,n=Al(Bs,void 0),r=Kn([]),i=()=>{},s={fields:jl(r),remove:i,push:i,swap:i,insert:i,update:i,replace:i,prepend:i};if(!n)return CA("FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly"),s;if(!Z(t))return CA("FieldArray requires a field path to be provided, did you forget to pass the `name` prop?"),s;let o=0;function a(){const w=Ot(n==null?void 0:n.values,Z(t),[]);r.value=w.map(l),c()}a();function c(){const w=r.value.length;for(let S=0;S<w;S++){const L=r.value[S];L.isFirst=S===0,L.isLast=S===w-1}}function l(w){const S=o++;return{key:S,value:Le(()=>{const U=Ot(n==null?void 0:n.values,Z(t),[]),G=r.value.findIndex(se=>se.key===S);return G===-1?w:U[G]}),isFirst:!1,isLast:!1}}function u(w){const S=Z(t),L=Ot(n==null?void 0:n.values,S);if(!L||!Array.isArray(L))return;const U=[...L];U.splice(w,1),n==null||n.unsetInitialValue(S+`[${w}]`),n==null||n.setFieldValue(S,U),r.value.splice(w,1),c()}function h(w){const S=Z(t),L=Ot(n==null?void 0:n.values,S),U=Rd(L)?[]:L;if(!Array.isArray(U))return;const G=[...U];G.push(w),n==null||n.stageInitialValue(S+`[${G.length-1}]`,w),n==null||n.setFieldValue(S,G),r.value.push(l(w)),c()}function d(w,S){const L=Z(t),U=Ot(n==null?void 0:n.values,L);if(!Array.isArray(U)||!U[w]||!U[S])return;const G=[...U],se=[...r.value],te=G[w];G[w]=G[S],G[S]=te;const he=se[w];se[w]=se[S],se[S]=he,n==null||n.setFieldValue(L,G),r.value=se,c()}function f(w,S){const L=Z(t),U=Ot(n==null?void 0:n.values,L);if(!Array.isArray(U)||U.length<w)return;const G=[...U],se=[...r.value];G.splice(w,0,S),se.splice(w,0,l(S)),n==null||n.setFieldValue(L,G),r.value=se,c()}function g(w){const S=Z(t);n==null||n.setFieldValue(S,w),a()}function y(w,S){const L=Z(t),U=Ot(n==null?void 0:n.values,L);!Array.isArray(U)||U.length-1<w||n==null||n.setFieldValue(`${L}[${w}]`,S)}function _(w){const S=Z(t),L=Ot(n==null?void 0:n.values,S),U=Rd(L)?[]:L;if(!Array.isArray(U))return;const G=[w,...U];n==null||n.stageInitialValue(S+`[${G.length-1}]`,w),n==null||n.setFieldValue(S,G),r.value.unshift(l(w)),c()}return n.fieldArraysLookup[e]={reset:a},Ca(()=>{delete n.fieldArraysLookup[e]}),{fields:jl(r),remove:u,push:h,swap:d,insert:f,update:y,replace:g,prepend:_}}Gs({name:"FieldArray",inheritAttrs:!1,props:{name:{type:String,required:!0}},setup(t,e){const{push:n,remove:r,swap:i,insert:s,replace:o,update:a,prepend:c,fields:l}=SH(Gr(t,"name"));function u(){return{fields:l.value,push:n,remove:r,swap:i,insert:s,update:a,replace:o,prepend:c}}return e.expose({push:n,remove:r,swap:i,insert:s,update:a,replace:o,prepend:c}),()=>Od(void 0,e,u)}});const GH=Gs({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(t,e){const n=wn(Bs,void 0),r=Le(()=>n==null?void 0:n.errors.value[t.name]);function i(){return{message:r.value}}return()=>{if(!r.value)return;const s=t.as?ff(t.as):t.as,o=Od(s,e,i),a=Object.assign({role:"alert"},e.attrs);return!s&&(Array.isArray(o)||!o)&&(o==null?void 0:o.length)?o:(Array.isArray(o)||!o)&&!(o==null?void 0:o.length)?Wi(s||"span",a,r.value):Wi(s,a,o)}}});export{$H as A,zr as B,MH as C,Kn as D,GH as E,zH as F,or as G,xH as H,kH as I,LH as J,Vv as T,UH as a,gR as b,VH as c,jH as d,HH as e,po as f,WH as g,FH as h,BH as i,Le as j,OH as k,En as l,fv as m,Ld as n,fR as o,DH as p,Md as q,PH as r,NH as s,RH as t,qH as u,_R as v,ON as w,AH as x,ff as y,KH as z};
