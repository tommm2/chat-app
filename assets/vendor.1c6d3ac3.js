function Hu(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const sE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oE=Hu(sE);function Zf(t){return!!t||t===""}function Ku(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Xe(r)?uE(r):Ku(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Xe(t))return t;if(ze(t))return t}}const aE=/;(?![^(]*\))/g,cE=/:(.+)/;function uE(t){const e={};return t.split(aE).forEach(n=>{if(n){const r=n.split(cE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Wu(t){let e="";if(Xe(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=Wu(t[n]);r&&(e+=r+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Cx=t=>t==null?"":ue(t)||ze(t)&&(t.toString===ip||!de(t.toString))?JSON.stringify(t,ep,2):String(t),ep=(t,e)=>e&&e.__v_isRef?ep(t,e.value):Ri(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:np(e)?{[`Set(${e.size})`]:[...e.values()]}:ze(e)&&!ue(e)&&!sp(e)?String(e):e,ke={},Ci=[],hn=()=>{},lE=()=>!1,hE=/^on[^a-z]/,Ta=t=>hE.test(t),Gu=t=>t.startsWith("onUpdate:"),pt=Object.assign,tp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},dE=Object.prototype.hasOwnProperty,Te=(t,e)=>dE.call(t,e),ue=Array.isArray,Ri=t=>Sa(t)==="[object Map]",np=t=>Sa(t)==="[object Set]",de=t=>typeof t=="function",Xe=t=>typeof t=="string",Qu=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",rp=t=>ze(t)&&de(t.then)&&de(t.catch),ip=Object.prototype.toString,Sa=t=>ip.call(t),fE=t=>Sa(t).slice(8,-1),sp=t=>Sa(t)==="[object Object]",Yu=t=>Xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Aa=Hu(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Na=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},pE=/-(\w)/g,vn=Na(t=>t.replace(pE,(e,n)=>n?n.toUpperCase():"")),mE=/\B([A-Z])/g,ki=Na(t=>t.replace(mE,"-$1").toLowerCase()),Ca=Na(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ju=Na(t=>t?`on${Ca(t)}`:""),zs=(t,e)=>!Object.is(t,e),Ra=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ka=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Oa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let op;const gE=()=>op||(op=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Rr;const Da=[];class yE{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Rr&&(this.parent=Rr,this.index=(Rr.scopes||(Rr.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(Da.push(this),Rr=this)}off(){this.active&&(Da.pop(),Rr=Da[Da.length-1])}stop(e){if(this.active){if(this.effects.forEach(n=>n.stop()),this.cleanups.forEach(n=>n()),this.scopes&&this.scopes.forEach(n=>n.stop(!0)),this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.active=!1}}}function vE(t,e){e=e||Rr,e&&e.active&&e.effects.push(t)}const Xu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ap=t=>(t.w&Xn)>0,cp=t=>(t.n&Xn)>0,wE=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Xn},_E=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];ap(i)&&!cp(i)?i.delete(t):e[n++]=i,i.w&=~Xn,i.n&=~Xn}e.length=n}},Zu=new WeakMap;let Hs=0,Xn=1;const el=30,Ks=[];let kr;const Or=Symbol(""),tl=Symbol("");class nl{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],vE(this,r)}run(){if(!this.active)return this.fn();if(!Ks.includes(this))try{return Ks.push(kr=this),IE(),Xn=1<<++Hs,Hs<=el?wE(this):up(this),this.fn()}finally{Hs<=el&&_E(this),Xn=1<<--Hs,Zn(),Ks.pop();const e=Ks.length;kr=e>0?Ks[e-1]:void 0}}stop(){this.active&&(up(this),this.onStop&&this.onStop(),this.active=!1)}}function up(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Oi=!0;const rl=[];function Dr(){rl.push(Oi),Oi=!1}function IE(){rl.push(Oi),Oi=!0}function Zn(){const t=rl.pop();Oi=t===void 0?!0:t}function zt(t,e,n){if(!lp())return;let r=Zu.get(t);r||Zu.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=Xu()),hp(i)}function lp(){return Oi&&kr!==void 0}function hp(t,e){let n=!1;Hs<=el?cp(t)||(t.n|=Xn,n=!ap(t)):n=!t.has(kr),n&&(t.add(kr),kr.deps.push(t))}function Ln(t,e,n,r,i,s){const o=Zu.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ue(t))o.forEach((c,u)=>{(u==="length"||u>=r)&&a.push(c)});else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ue(t)?Yu(n)&&a.push(o.get("length")):(a.push(o.get(Or)),Ri(t)&&a.push(o.get(tl)));break;case"delete":ue(t)||(a.push(o.get(Or)),Ri(t)&&a.push(o.get(tl)));break;case"set":Ri(t)&&a.push(o.get(Or));break}if(a.length===1)a[0]&&il(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);il(Xu(c))}}function il(t,e){for(const n of ue(t)?t:[...t])(n!==kr||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const EE=Hu("__proto__,__v_isRef,__isVue"),dp=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(Qu)),bE=sl(),TE=sl(!1,!0),SE=sl(!0),fp=AE();function AE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ie(this);for(let s=0,o=this.length;s<o;s++)zt(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Ie)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Dr();const r=Ie(this)[e].apply(this,n);return Zn(),r}}),t}function sl(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_raw"&&s===(t?e?qE:Ep:e?Ip:_p).get(r))return r;const o=ue(r);if(!t&&o&&Te(fp,i))return Reflect.get(fp,i,s);const a=Reflect.get(r,i,s);return(Qu(i)?dp.has(i):EE(i))||(t||zt(r,"get",i),e)?a:He(a)?!o||!Yu(i)?a.value:a:ze(a)?t?Va(a):Pr(a):a}}const NE=pp(),CE=pp(!0);function pp(t=!1){return function(n,r,i,s){let o=n[r];if(!t&&(i=Ie(i),o=Ie(o),!ue(n)&&He(o)&&!He(i)))return o.value=i,!0;const a=ue(n)&&Yu(r)?Number(r)<n.length:Te(n,r),c=Reflect.set(n,r,i,s);return n===Ie(s)&&(a?zs(i,o)&&Ln(n,"set",r,i):Ln(n,"add",r,i)),c}}function RE(t,e){const n=Te(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ln(t,"delete",e,void 0),r}function kE(t,e){const n=Reflect.has(t,e);return(!Qu(e)||!dp.has(e))&&zt(t,"has",e),n}function OE(t){return zt(t,"iterate",ue(t)?"length":Or),Reflect.ownKeys(t)}const mp={get:bE,set:NE,deleteProperty:RE,has:kE,ownKeys:OE},DE={get:SE,set(t,e){return!0},deleteProperty(t,e){return!0}},PE=pt({},mp,{get:TE,set:CE}),ol=t=>t,Pa=t=>Reflect.getPrototypeOf(t);function xa(t,e,n=!1,r=!1){t=t.__v_raw;const i=Ie(t),s=Ie(e);e!==s&&!n&&zt(i,"get",e),!n&&zt(i,"get",s);const{has:o}=Pa(i),a=r?ol:n?ll:Ws;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function La(t,e=!1){const n=this.__v_raw,r=Ie(n),i=Ie(t);return t!==i&&!e&&zt(r,"has",t),!e&&zt(r,"has",i),t===i?n.has(t):n.has(t)||n.has(i)}function Ma(t,e=!1){return t=t.__v_raw,!e&&zt(Ie(t),"iterate",Or),Reflect.get(t,"size",t)}function gp(t){t=Ie(t);const e=Ie(this);return Pa(e).has.call(e,t)||(e.add(t),Ln(e,"add",t,t)),this}function yp(t,e){e=Ie(e);const n=Ie(this),{has:r,get:i}=Pa(n);let s=r.call(n,t);s||(t=Ie(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?zs(e,o)&&Ln(n,"set",t,e):Ln(n,"add",t,e),this}function vp(t){const e=Ie(this),{has:n,get:r}=Pa(e);let i=n.call(e,t);i||(t=Ie(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Ln(e,"delete",t,void 0),s}function wp(){const t=Ie(this),e=t.size!==0,n=t.clear();return e&&Ln(t,"clear",void 0,void 0),n}function Fa(t,e){return function(r,i){const s=this,o=s.__v_raw,a=Ie(o),c=e?ol:t?ll:Ws;return!t&&zt(a,"iterate",Or),o.forEach((u,l)=>r.call(i,c(u),c(l),s))}}function Ua(t,e,n){return function(...r){const i=this.__v_raw,s=Ie(i),o=Ri(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...r),l=n?ol:e?ll:Ws;return!e&&zt(s,"iterate",c?tl:Or),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function er(t){return function(...e){return t==="delete"?!1:this}}function xE(){const t={get(s){return xa(this,s)},get size(){return Ma(this)},has:La,add:gp,set:yp,delete:vp,clear:wp,forEach:Fa(!1,!1)},e={get(s){return xa(this,s,!1,!0)},get size(){return Ma(this)},has:La,add:gp,set:yp,delete:vp,clear:wp,forEach:Fa(!1,!0)},n={get(s){return xa(this,s,!0)},get size(){return Ma(this,!0)},has(s){return La.call(this,s,!0)},add:er("add"),set:er("set"),delete:er("delete"),clear:er("clear"),forEach:Fa(!0,!1)},r={get(s){return xa(this,s,!0,!0)},get size(){return Ma(this,!0)},has(s){return La.call(this,s,!0)},add:er("add"),set:er("set"),delete:er("delete"),clear:er("clear"),forEach:Fa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Ua(s,!1,!1),n[s]=Ua(s,!0,!1),e[s]=Ua(s,!1,!0),r[s]=Ua(s,!0,!0)}),[t,n,e,r]}const[LE,ME,FE,UE]=xE();function al(t,e){const n=e?t?UE:FE:t?ME:LE;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Te(n,i)&&i in r?n:r,i,s)}const VE={get:al(!1,!1)},$E={get:al(!1,!0)},BE={get:al(!0,!1)},_p=new WeakMap,Ip=new WeakMap,Ep=new WeakMap,qE=new WeakMap;function jE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zE(t){return t.__v_skip||!Object.isExtensible(t)?0:jE(fE(t))}function Pr(t){return t&&t.__v_isReadonly?t:cl(t,!1,mp,VE,_p)}function HE(t){return cl(t,!1,PE,$E,Ip)}function Va(t){return cl(t,!0,DE,BE,Ep)}function cl(t,e,n,r,i){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=zE(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Di(t){return bp(t)?Di(t.__v_raw):!!(t&&t.__v_isReactive)}function bp(t){return!!(t&&t.__v_isReadonly)}function Tp(t){return Di(t)||bp(t)}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function ul(t){return ka(t,"__v_skip",!0),t}const Ws=t=>ze(t)?Pr(t):t,ll=t=>ze(t)?Va(t):t;function Sp(t){lp()&&(t=Ie(t),t.dep||(t.dep=Xu()),hp(t.dep))}function Ap(t,e){t=Ie(t),t.dep&&il(t.dep)}function He(t){return Boolean(t&&t.__v_isRef===!0)}function dn(t){return Np(t,!1)}function KE(t){return Np(t,!0)}function Np(t,e){return He(t)?t:new WE(t,e)}class WE{constructor(e,n){this._shallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ie(e),this._value=n?e:Ws(e)}get value(){return Sp(this),this._value}set value(e){e=this._shallow?e:Ie(e),zs(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Ws(e),Ap(this))}}function J(t){return He(t)?t.value:t}const GE={get:(t,e,n)=>J(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return He(i)&&!He(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Cp(t){return Di(t)?t:new Proxy(t,GE)}class QE{constructor(e,n){this._object=e,this._key=n,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}function tr(t,e){const n=t[e];return He(n)?n:new QE(t,e)}class YE{constructor(e,n,r){this._setter=n,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new nl(e,()=>{this._dirty||(this._dirty=!0,Ap(this))}),this.__v_isReadonly=r}get value(){const e=Ie(this);return Sp(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ne(t,e){let n,r;const i=de(t);return i?(n=t,r=hn):(n=t.get,r=t.set),new YE(n,r,i||!r)}Promise.resolve();function JE(t,e,...n){const r=t.vnode.props||ke;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||ke;d?i=n.map(p=>p.trim()):h&&(i=n.map(Oa))}let a,c=r[a=Ju(e)]||r[a=Ju(vn(e))];!c&&s&&(c=r[a=Ju(ki(e))]),c&&nn(c,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,nn(u,t,6,i)}}function Rp(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!de(t)){const c=u=>{const l=Rp(u,e,!0);l&&(a=!0,pt(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(r.set(t,null),null):(ue(s)?s.forEach(c=>o[c]=null):pt(o,s),r.set(t,o),o)}function hl(t,e){return!t||!Ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(t,e[0].toLowerCase()+e.slice(1))||Te(t,ki(e))||Te(t,e))}let Zt=null,$a=null;function Ba(t){const e=Zt;return Zt=t,$a=t&&t.type.__scopeId||null,e}function Rx(t){$a=t}function kx(){$a=null}function XE(t,e=Zt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&tm(-1);const s=Ba(e),o=t(...i);return Ba(s),r._d&&tm(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function dl(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:E}=t;let I,w;const C=Ba(t);try{if(n.shapeFlag&4){const U=i||r;I=En(l.call(U,U,h,s,p,d,g)),w=c}else{const U=e;I=En(U.length>1?U(s,{attrs:c,slots:a,emit:u}):U(s,null)),w=e.props?c:ZE(c)}}catch(U){Qs.length=0,Ja(U,t,1),I=Ht(In)}let M=I;if(w&&E!==!1){const U=Object.keys(w),{shapeFlag:K}=M;U.length&&K&(1|6)&&(o&&U.some(Gu)&&(w=eb(w,o)),M=Li(M,w))}return n.dirs&&(M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),I=M,Ba(C),I}const ZE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ta(n))&&((e||(e={}))[n]=t[n]);return e},eb=(t,e)=>{const n={};for(const r in t)(!Gu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function tb(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?kp(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!hl(u,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?kp(r,o,u):!0:!!o;return!1}function kp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!hl(n,s))return!0}return!1}function nb({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const rb=t=>t.__isSuspense;function ib(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):sT(t)}function Pi(t,e){if(rt){let n=rt.provides;const r=rt.parent&&rt.parent.provides;r===n&&(n=rt.provides=Object.create(r)),n[t]=e}}function en(t,e,n=!1){const r=rt||Zt;if(r){const i=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&de(e)?e.call(r.proxy):e}}function sb(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return za(()=>{t.isMounted=!0}),Gs(()=>{t.isUnmounting=!0}),t}const tn=[Function,Array],ob={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tn,onEnter:tn,onAfterEnter:tn,onEnterCancelled:tn,onBeforeLeave:tn,onLeave:tn,onAfterLeave:tn,onLeaveCancelled:tn,onBeforeAppear:tn,onAppear:tn,onAfterAppear:tn,onAppearCancelled:tn},setup(t,{slots:e}){const n=sm(),r=sb();let i;return()=>{const s=e.default&&xp(e.default(),!0);if(!s||!s.length)return;const o=Ie(t),{mode:a}=o,c=s[0];if(r.isLeaving)return pl(c);const u=Pp(c);if(!u)return pl(c);const l=fl(u,o,r,n);ml(u,l);const h=n.subTree,d=h&&Pp(h);let p=!1;const{getTransitionKey:g}=u.type;if(g){const E=g();i===void 0?i=E:E!==i&&(i=E,p=!0)}if(d&&d.type!==In&&(!Fr(u,d)||p)){const E=fl(d,o,r,n);if(ml(d,E),a==="out-in")return r.isLeaving=!0,E.afterLeave=()=>{r.isLeaving=!1,n.update()},pl(c);a==="in-out"&&u.type!==In&&(E.delayLeave=(I,w,C)=>{const M=Dp(r,d);M[String(d.key)]=d,I._leaveCb=()=>{w(),I._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=C})}return c}}},Op=ob;function Dp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function fl(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:E,onAppear:I,onAfterAppear:w,onAppearCancelled:C}=e,M=String(t.key),U=Dp(n,t),K=(Z,ce)=>{Z&&nn(Z,r,9,ce)},ie={mode:s,persisted:o,beforeEnter(Z){let ce=a;if(!n.isMounted)if(i)ce=E||a;else return;Z._leaveCb&&Z._leaveCb(!0);const W=U[M];W&&Fr(t,W)&&W.el._leaveCb&&W.el._leaveCb(),K(ce,[Z])},enter(Z){let ce=c,W=u,he=l;if(!n.isMounted)if(i)ce=I||c,W=w||u,he=C||l;else return;let me=!1;const z=Z._enterCb=ye=>{me||(me=!0,ye?K(he,[Z]):K(W,[Z]),ie.delayedLeave&&ie.delayedLeave(),Z._enterCb=void 0)};ce?(ce(Z,z),ce.length<=1&&z()):z()},leave(Z,ce){const W=String(t.key);if(Z._enterCb&&Z._enterCb(!0),n.isUnmounting)return ce();K(h,[Z]);let he=!1;const me=Z._leaveCb=z=>{he||(he=!0,ce(),z?K(g,[Z]):K(p,[Z]),Z._leaveCb=void 0,U[W]===t&&delete U[W])};U[W]=t,d?(d(Z,me),d.length<=1&&me()):me()},clone(Z){return fl(Z,e,n,r)}};return ie}function pl(t){if(qa(t))return t=Li(t),t.children=null,t}function Pp(t){return qa(t)?t.children?t.children[0]:void 0:t}function ml(t,e){t.shapeFlag&6&&t.component?ml(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function xp(t,e=!1){let n=[],r=0;for(let i=0;i<t.length;i++){const s=t[i];s.type===_n?(s.patchFlag&128&&r++,n=n.concat(xp(s.children,e))):(e||s.type!==In)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function xi(t){return de(t)?{setup:t,name:t.name}:t}const gl=t=>!!t.type.__asyncLoader,qa=t=>t.type.__isKeepAlive;function ab(t,e){Lp(t,"a",e)}function cb(t,e){Lp(t,"da",e)}function Lp(t,e,n=rt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}t()});if(ja(e,r,n),n){let i=n.parent;for(;i&&i.parent;)qa(i.parent.vnode)&&ub(r,e,n,i),i=i.parent}}function ub(t,e,n,r){const i=ja(e,t,r,!0);Mp(()=>{tp(r[e],i)},n)}function ja(t,e,n=rt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Dr(),Mi(n);const a=nn(e,n,t,o);return Ur(),Zn(),a});return r?i.unshift(s):i.push(s),s}}const Mn=t=>(e,n=rt)=>(!Ya||t==="sp")&&ja(t,e,n),lb=Mn("bm"),za=Mn("m"),hb=Mn("bu"),db=Mn("u"),Gs=Mn("bum"),Mp=Mn("um"),fb=Mn("sp"),pb=Mn("rtg"),mb=Mn("rtc");function gb(t,e=rt){ja("ec",t,e)}let yl=!0;function yb(t){const e=Vp(t),n=t.proxy,r=t.ctx;yl=!1,e.beforeCreate&&Fp(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:E,deactivated:I,beforeDestroy:w,beforeUnmount:C,destroyed:M,unmounted:U,render:K,renderTracked:ie,renderTriggered:Z,errorCaptured:ce,serverPrefetch:W,expose:he,inheritAttrs:me,components:z,directives:ye,filters:Fe}=e;if(u&&vb(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const fe in o){const ge=o[fe];de(ge)&&(r[fe]=ge.bind(n))}if(i){const fe=i.call(n,n);ze(fe)&&(t.data=Pr(fe))}if(yl=!0,s)for(const fe in s){const ge=s[fe],q=de(ge)?ge.bind(n,n):de(ge.get)?ge.get.bind(n,n):hn,be=!de(ge)&&de(ge.set)?ge.set.bind(n):hn,De=Ne({get:q,set:be});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>De.value,set:kt=>De.value=kt})}if(a)for(const fe in a)Up(a[fe],r,n,fe);if(c){const fe=de(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(ge=>{Pi(ge,fe[ge])})}l&&Fp(l,t,"c");function we(fe,ge){ue(ge)?ge.forEach(q=>fe(q.bind(n))):ge&&fe(ge.bind(n))}if(we(lb,h),we(za,d),we(hb,p),we(db,g),we(ab,E),we(cb,I),we(gb,ce),we(mb,ie),we(pb,Z),we(Gs,C),we(Mp,U),we(fb,W),ue(he))if(he.length){const fe=t.exposed||(t.exposed={});he.forEach(ge=>{Object.defineProperty(fe,ge,{get:()=>n[ge],set:q=>n[ge]=q})})}else t.exposed||(t.exposed={});K&&t.render===hn&&(t.render=K),me!=null&&(t.inheritAttrs=me),z&&(t.components=z),ye&&(t.directives=ye)}function vb(t,e,n=hn,r=!1){ue(t)&&(t=vl(t));for(const i in t){const s=t[i];let o;ze(s)?"default"in s?o=en(s.from||i,s.default,!0):o=en(s.from||i):o=en(s),He(o)&&r?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Fp(t,e,n){nn(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Up(t,e,n,r){const i=r.includes(".")?Em(n,r):()=>n[r];if(Xe(t)){const s=e[t];de(s)&&rn(i,s)}else if(de(t))rn(i,t.bind(n));else if(ze(t))if(ue(t))t.forEach(s=>Up(s,e,n,r));else{const s=de(t.handler)?t.handler.bind(n):e[t.handler];de(s)&&rn(i,s,t)}}function Vp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(u=>Ha(c,u,o,!0)),Ha(c,e,o)),s.set(e,c),c}function Ha(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Ha(t,s,n,!0),i&&i.forEach(o=>Ha(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=wb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const wb={data:$p,props:xr,emits:xr,methods:xr,computed:xr,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:xr,directives:xr,watch:Ib,provide:$p,inject:_b};function $p(t,e){return e?t?function(){return pt(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function _b(t,e){return xr(vl(t),vl(e))}function vl(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ot(t,e){return t?[...new Set([].concat(t,e))]:e}function xr(t,e){return t?pt(pt(Object.create(null),t),e):e}function Ib(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const r in e)n[r]=Ot(t[r],e[r]);return n}function Eb(t,e,n,r=!1){const i={},s={};ka(s,Wa,1),t.propsDefaults=Object.create(null),Bp(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:HE(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function bb(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=Ie(i),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];const p=e[d];if(c)if(Te(s,d))p!==s[d]&&(s[d]=p,u=!0);else{const g=vn(d);i[g]=wl(c,a,g,p,t,!1)}else p!==s[d]&&(s[d]=p,u=!0)}}}else{Bp(t,e,i,s)&&(u=!0);let l;for(const h in a)(!e||!Te(e,h)&&((l=ki(h))===h||!Te(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(i[h]=wl(c,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!Te(e,h))&&(delete s[h],u=!0)}u&&Ln(t,"set","$attrs")}function Bp(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Aa(c))continue;const u=e[c];let l;i&&Te(i,l=vn(c))?!s||!s.includes(l)?n[l]=u:(a||(a={}))[l]=u:hl(t.emitsOptions,c)||u!==r[c]&&(r[c]=u,o=!0)}if(s){const c=Ie(n),u=a||ke;for(let l=0;l<s.length;l++){const h=s[l];n[h]=wl(i,c,h,u[h],t,!Te(u,h))}}return o}function wl(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=Te(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&de(c)){const{propsDefaults:u}=i;n in u?r=u[n]:(Mi(i),r=u[n]=c.call(null,e),Ur())}else r=c}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ki(n))&&(r=!0))}return r}function qp(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let c=!1;if(!de(t)){const l=h=>{c=!0;const[d,p]=qp(h,e,!0);pt(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!s&&!c)return r.set(t,Ci),Ci;if(ue(s))for(let l=0;l<s.length;l++){const h=vn(s[l]);jp(h)&&(o[h]=ke)}else if(s)for(const l in s){const h=vn(l);if(jp(h)){const d=s[l],p=o[h]=ue(d)||de(d)?{type:d}:d;if(p){const g=Kp(Boolean,p.type),E=Kp(String,p.type);p[0]=g>-1,p[1]=E<0||g<E,(g>-1||Te(p,"default"))&&a.push(h)}}}const u=[o,a];return r.set(t,u),u}function jp(t){return t[0]!=="$"}function zp(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Hp(t,e){return zp(t)===zp(e)}function Kp(t,e){return ue(e)?e.findIndex(n=>Hp(n,t)):de(e)&&Hp(e,t)?0:-1}const Wp=t=>t[0]==="_"||t==="$stable",_l=t=>ue(t)?t.map(En):[En(t)],Tb=(t,e,n)=>{const r=XE((...i)=>_l(e(...i)),n);return r._c=!1,r},Gp=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Wp(i))continue;const s=t[i];if(de(s))e[i]=Tb(i,s,r);else if(s!=null){const o=_l(s);e[i]=()=>o}}},Qp=(t,e)=>{const n=_l(e);t.slots.default=()=>n},Sb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Ie(e),ka(e,"_",n)):Gp(e,t.slots={})}else t.slots={},e&&Qp(t,e);ka(t.slots,Wa,1)},Ab=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=ke;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(pt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,Gp(e,i)),o=e}else e&&(Qp(t,e),o={default:1});if(s)for(const a in i)!Wp(a)&&!(a in o)&&delete i[a]};function Ox(t,e){const n=Zt;if(n===null)return t;const r=n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,u=ke]=e[s];de(o)&&(o={mounted:o,updated:o}),o.deep&&Vr(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u})}return t}function Lr(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let c=a.dir[r];c&&(Dr(),nn(c,n,8,[t.el,a,t,e]),Zn())}}function Yp(){return{app:null,config:{isNativeTag:lE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nb=0;function Cb(t,e){return function(r,i=null){i!=null&&!ze(i)&&(i=null);const s=Yp(),o=new Set;let a=!1;const c=s.app={_uid:Nb++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:aT,get config(){return s.config},set config(u){},use(u,...l){return o.has(u)||(u&&de(u.install)?(o.add(u),u.install(c,...l)):de(u)&&(o.add(u),u(c,...l))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,l){return l?(s.components[u]=l,c):s.components[u]},directive(u,l){return l?(s.directives[u]=l,c):s.directives[u]},mount(u,l,h){if(!a){const d=Ht(r,i);return d.appContext=s,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,Rl(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return s.provides[u]=l,c}};return c}}const Dt=ib;function Rb(t){return kb(t)}function kb(t,e){const n=gE();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:p=hn,cloneNode:g,insertStaticContent:E}=t,I=(f,m,y,b=null,S=null,P=null,j=!1,O=null,L=!!m.dynamicChildren)=>{if(f===m)return;f&&!Fr(f,m)&&(b=ee(f),Je(f,S,P,!0),f=null),m.patchFlag===-2&&(L=!1,m.dynamicChildren=null);const{type:k,ref:ne,shapeFlag:Q}=m;switch(k){case Tl:w(f,m,y,b);break;case In:C(f,m,y,b);break;case Sl:f==null&&M(m,y,b,j);break;case _n:ye(f,m,y,b,S,P,j,O,L);break;default:Q&1?ie(f,m,y,b,S,P,j,O,L):Q&6?Fe(f,m,y,b,S,P,j,O,L):(Q&64||Q&128)&&k.process(f,m,y,b,S,P,j,O,L,N)}ne!=null&&S&&Il(ne,f&&f.ref,P,m||f,!m)},w=(f,m,y,b)=>{if(f==null)r(m.el=a(m.children),y,b);else{const S=m.el=f.el;m.children!==f.children&&u(S,m.children)}},C=(f,m,y,b)=>{f==null?r(m.el=c(m.children||""),y,b):m.el=f.el},M=(f,m,y,b)=>{[f.el,f.anchor]=E(f.children,m,y,b)},U=({el:f,anchor:m},y,b)=>{let S;for(;f&&f!==m;)S=d(f),r(f,y,b),f=S;r(m,y,b)},K=({el:f,anchor:m})=>{let y;for(;f&&f!==m;)y=d(f),i(f),f=y;i(m)},ie=(f,m,y,b,S,P,j,O,L)=>{j=j||m.type==="svg",f==null?Z(m,y,b,S,P,j,O,L):he(f,m,S,P,j,O,L)},Z=(f,m,y,b,S,P,j,O)=>{let L,k;const{type:ne,props:Q,shapeFlag:re,transition:ae,patchFlag:_e,dirs:Ue}=f;if(f.el&&g!==void 0&&_e===-1)L=f.el=g(f.el);else{if(L=f.el=o(f.type,P,Q&&Q.is,Q),re&8?l(L,f.children):re&16&&W(f.children,L,null,b,S,P&&ne!=="foreignObject",j,O),Ue&&Lr(f,null,b,"created"),Q){for(const Pe in Q)Pe!=="value"&&!Aa(Pe)&&s(L,Pe,null,Q[Pe],P,f.children,b,S,V);"value"in Q&&s(L,"value",null,Q.value),(k=Q.onVnodeBeforeMount)&&wn(k,b,f)}ce(L,f,f.scopeId,j,b)}Ue&&Lr(f,null,b,"beforeMount");const Re=(!S||S&&!S.pendingBranch)&&ae&&!ae.persisted;Re&&ae.beforeEnter(L),r(L,m,y),((k=Q&&Q.onVnodeMounted)||Re||Ue)&&Dt(()=>{k&&wn(k,b,f),Re&&ae.enter(L),Ue&&Lr(f,null,b,"mounted")},S)},ce=(f,m,y,b,S)=>{if(y&&p(f,y),b)for(let P=0;P<b.length;P++)p(f,b[P]);if(S){let P=S.subTree;if(m===P){const j=S.vnode;ce(f,j,j.scopeId,j.slotScopeIds,S.parent)}}},W=(f,m,y,b,S,P,j,O,L=0)=>{for(let k=L;k<f.length;k++){const ne=f[k]=O?nr(f[k]):En(f[k]);I(null,ne,m,y,b,S,P,j,O)}},he=(f,m,y,b,S,P,j)=>{const O=m.el=f.el;let{patchFlag:L,dynamicChildren:k,dirs:ne}=m;L|=f.patchFlag&16;const Q=f.props||ke,re=m.props||ke;let ae;(ae=re.onVnodeBeforeUpdate)&&wn(ae,y,m,f),ne&&Lr(m,f,y,"beforeUpdate");const _e=S&&m.type!=="foreignObject";if(k?me(f.dynamicChildren,k,O,y,b,_e,P):j||q(f,m,O,null,y,b,_e,P,!1),L>0){if(L&16)z(O,m,Q,re,y,b,S);else if(L&2&&Q.class!==re.class&&s(O,"class",null,re.class,S),L&4&&s(O,"style",Q.style,re.style,S),L&8){const Ue=m.dynamicProps;for(let Re=0;Re<Ue.length;Re++){const Pe=Ue[Re],ln=Q[Pe],Ni=re[Pe];(Ni!==ln||Pe==="value")&&s(O,Pe,ln,Ni,S,f.children,y,b,V)}}L&1&&f.children!==m.children&&l(O,m.children)}else!j&&k==null&&z(O,m,Q,re,y,b,S);((ae=re.onVnodeUpdated)||ne)&&Dt(()=>{ae&&wn(ae,y,m,f),ne&&Lr(m,f,y,"updated")},b)},me=(f,m,y,b,S,P,j)=>{for(let O=0;O<m.length;O++){const L=f[O],k=m[O],ne=L.el&&(L.type===_n||!Fr(L,k)||L.shapeFlag&(6|64))?h(L.el):y;I(L,k,ne,null,b,S,P,j,!0)}},z=(f,m,y,b,S,P,j)=>{if(y!==b){for(const O in b){if(Aa(O))continue;const L=b[O],k=y[O];L!==k&&O!=="value"&&s(f,O,k,L,j,m.children,S,P,V)}if(y!==ke)for(const O in y)!Aa(O)&&!(O in b)&&s(f,O,y[O],null,j,m.children,S,P,V);"value"in b&&s(f,"value",y.value,b.value)}},ye=(f,m,y,b,S,P,j,O,L)=>{const k=m.el=f?f.el:a(""),ne=m.anchor=f?f.anchor:a("");let{patchFlag:Q,dynamicChildren:re,slotScopeIds:ae}=m;ae&&(O=O?O.concat(ae):ae),f==null?(r(k,y,b),r(ne,y,b),W(m.children,y,ne,S,P,j,O,L)):Q>0&&Q&64&&re&&f.dynamicChildren?(me(f.dynamicChildren,re,y,S,P,j,O),(m.key!=null||S&&m===S.subTree)&&Jp(f,m,!0)):q(f,m,y,ne,S,P,j,O,L)},Fe=(f,m,y,b,S,P,j,O,L)=>{m.slotScopeIds=O,f==null?m.shapeFlag&512?S.ctx.activate(m,y,b,j,L):Tt(m,y,b,S,P,j,L):we(f,m,L)},Tt=(f,m,y,b,S,P,j)=>{const O=f.component=jb(f,b,S);if(qa(f)&&(O.ctx.renderer=N),zb(O),O.asyncDep){if(S&&S.registerDep(O,fe),!f.el){const L=O.subTree=Ht(In);C(null,L,m,y)}return}fe(O,f,m,y,S,P,j)},we=(f,m,y)=>{const b=m.component=f.component;if(tb(f,m,y))if(b.asyncDep&&!b.asyncResolved){ge(b,m,y);return}else b.next=m,rT(b.update),b.update();else m.component=f.component,m.el=f.el,b.vnode=m},fe=(f,m,y,b,S,P,j)=>{const O=()=>{if(f.isMounted){let{next:ne,bu:Q,u:re,parent:ae,vnode:_e}=f,Ue=ne,Re;L.allowRecurse=!1,ne?(ne.el=_e.el,ge(f,ne,j)):ne=_e,Q&&Ra(Q),(Re=ne.props&&ne.props.onVnodeBeforeUpdate)&&wn(Re,ae,ne,_e),L.allowRecurse=!0;const Pe=dl(f),ln=f.subTree;f.subTree=Pe,I(ln,Pe,h(ln.el),ee(ln),f,S,P),ne.el=Pe.el,Ue===null&&nb(f,Pe.el),re&&Dt(re,S),(Re=ne.props&&ne.props.onVnodeUpdated)&&Dt(()=>wn(Re,ae,ne,_e),S)}else{let ne;const{el:Q,props:re}=m,{bm:ae,m:_e,parent:Ue}=f,Re=gl(m);if(L.allowRecurse=!1,ae&&Ra(ae),!Re&&(ne=re&&re.onVnodeBeforeMount)&&wn(ne,Ue,m),L.allowRecurse=!0,Q&&F){const Pe=()=>{f.subTree=dl(f),F(Q,f.subTree,f,S,null)};Re?m.type.__asyncLoader().then(()=>!f.isUnmounted&&Pe()):Pe()}else{const Pe=f.subTree=dl(f);I(null,Pe,y,b,f,S,P),m.el=Pe.el}if(_e&&Dt(_e,S),!Re&&(ne=re&&re.onVnodeMounted)){const Pe=m;Dt(()=>wn(ne,Ue,Pe),S)}m.shapeFlag&256&&f.a&&Dt(f.a,S),f.isMounted=!0,m=y=b=null}},L=new nl(O,()=>mm(f.update),f.scope),k=f.update=L.run.bind(L);k.id=f.uid,L.allowRecurse=k.allowRecurse=!0,k()},ge=(f,m,y)=>{m.component=f;const b=f.vnode.props;f.vnode=m,f.next=null,bb(f,m.props,b,y),Ab(f,m.children,y),Dr(),Pl(void 0,f.update),Zn()},q=(f,m,y,b,S,P,j,O,L=!1)=>{const k=f&&f.children,ne=f?f.shapeFlag:0,Q=m.children,{patchFlag:re,shapeFlag:ae}=m;if(re>0){if(re&128){De(k,Q,y,b,S,P,j,O,L);return}else if(re&256){be(k,Q,y,b,S,P,j,O,L);return}}ae&8?(ne&16&&V(k,S,P),Q!==k&&l(y,Q)):ne&16?ae&16?De(k,Q,y,b,S,P,j,O,L):V(k,S,P,!0):(ne&8&&l(y,""),ae&16&&W(Q,y,b,S,P,j,O,L))},be=(f,m,y,b,S,P,j,O,L)=>{f=f||Ci,m=m||Ci;const k=f.length,ne=m.length,Q=Math.min(k,ne);let re;for(re=0;re<Q;re++){const ae=m[re]=L?nr(m[re]):En(m[re]);I(f[re],ae,y,null,S,P,j,O,L)}k>ne?V(f,S,P,!0,!1,Q):W(m,y,b,S,P,j,O,L,Q)},De=(f,m,y,b,S,P,j,O,L)=>{let k=0;const ne=m.length;let Q=f.length-1,re=ne-1;for(;k<=Q&&k<=re;){const ae=f[k],_e=m[k]=L?nr(m[k]):En(m[k]);if(Fr(ae,_e))I(ae,_e,y,null,S,P,j,O,L);else break;k++}for(;k<=Q&&k<=re;){const ae=f[Q],_e=m[re]=L?nr(m[re]):En(m[re]);if(Fr(ae,_e))I(ae,_e,y,null,S,P,j,O,L);else break;Q--,re--}if(k>Q){if(k<=re){const ae=re+1,_e=ae<ne?m[ae].el:b;for(;k<=re;)I(null,m[k]=L?nr(m[k]):En(m[k]),y,_e,S,P,j,O,L),k++}}else if(k>re)for(;k<=Q;)Je(f[k],S,P,!0),k++;else{const ae=k,_e=k,Ue=new Map;for(k=_e;k<=re;k++){const jt=m[k]=L?nr(m[k]):En(m[k]);jt.key!=null&&Ue.set(jt.key,k)}let Re,Pe=0;const ln=re-_e+1;let Ni=!1,Yf=0;const js=new Array(ln);for(k=0;k<ln;k++)js[k]=0;for(k=ae;k<=Q;k++){const jt=f[k];if(Pe>=ln){Je(jt,S,P,!0);continue}let yn;if(jt.key!=null)yn=Ue.get(jt.key);else for(Re=_e;Re<=re;Re++)if(js[Re-_e]===0&&Fr(jt,m[Re])){yn=Re;break}yn===void 0?Je(jt,S,P,!0):(js[yn-_e]=k+1,yn>=Yf?Yf=yn:Ni=!0,I(jt,m[yn],y,null,S,P,j,O,L),Pe++)}const Jf=Ni?Ob(js):Ci;for(Re=Jf.length-1,k=ln-1;k>=0;k--){const jt=_e+k,yn=m[jt],Xf=jt+1<ne?m[jt+1].el:b;js[k]===0?I(null,yn,y,Xf,S,P,j,O,L):Ni&&(Re<0||k!==Jf[Re]?kt(yn,y,Xf,2):Re--)}}},kt=(f,m,y,b,S=null)=>{const{el:P,type:j,transition:O,children:L,shapeFlag:k}=f;if(k&6){kt(f.component.subTree,m,y,b);return}if(k&128){f.suspense.move(m,y,b);return}if(k&64){j.move(f,m,y,N);return}if(j===_n){r(P,m,y);for(let Q=0;Q<L.length;Q++)kt(L[Q],m,y,b);r(f.anchor,m,y);return}if(j===Sl){U(f,m,y);return}if(b!==2&&k&1&&O)if(b===0)O.beforeEnter(P),r(P,m,y),Dt(()=>O.enter(P),S);else{const{leave:Q,delayLeave:re,afterLeave:ae}=O,_e=()=>r(P,m,y),Ue=()=>{Q(P,()=>{_e(),ae&&ae()})};re?re(P,_e,Ue):Ue()}else r(P,m,y)},Je=(f,m,y,b=!1,S=!1)=>{const{type:P,props:j,ref:O,children:L,dynamicChildren:k,shapeFlag:ne,patchFlag:Q,dirs:re}=f;if(O!=null&&Il(O,null,y,f,!0),ne&256){m.ctx.deactivate(f);return}const ae=ne&1&&re,_e=!gl(f);let Ue;if(_e&&(Ue=j&&j.onVnodeBeforeUnmount)&&wn(Ue,m,f),ne&6)G(f.component,y,b);else{if(ne&128){f.suspense.unmount(y,b);return}ae&&Lr(f,null,m,"beforeUnmount"),ne&64?f.type.remove(f,m,y,S,N,b):k&&(P!==_n||Q>0&&Q&64)?V(k,m,y,!1,!0):(P===_n&&Q&(128|256)||!S&&ne&16)&&V(L,m,y),b&&xn(f)}(_e&&(Ue=j&&j.onVnodeUnmounted)||ae)&&Dt(()=>{Ue&&wn(Ue,m,f),ae&&Lr(f,null,m,"unmounted")},y)},xn=f=>{const{type:m,el:y,anchor:b,transition:S}=f;if(m===_n){T(y,b);return}if(m===Sl){K(f);return}const P=()=>{i(y),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(f.shapeFlag&1&&S&&!S.persisted){const{leave:j,delayLeave:O}=S,L=()=>j(y,P);O?O(f.el,P,L):L()}else P()},T=(f,m)=>{let y;for(;f!==m;)y=d(f),i(f),f=y;i(m)},G=(f,m,y)=>{const{bum:b,scope:S,update:P,subTree:j,um:O}=f;b&&Ra(b),S.stop(),P&&(P.active=!1,Je(j,f,m,y)),O&&Dt(O,m),Dt(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},V=(f,m,y,b=!1,S=!1,P=0)=>{for(let j=P;j<f.length;j++)Je(f[j],m,y,b,S)},ee=f=>f.shapeFlag&6?ee(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),_=(f,m,y)=>{f==null?m._vnode&&Je(m._vnode,null,null,!0):I(m._vnode||null,f,m,null,null,null,y),vm(),m._vnode=f},N={p:I,um:Je,m:kt,r:xn,mt:Tt,mc:W,pc:q,pbc:me,n:ee,o:t};let B,F;return e&&([B,F]=e(N)),{render:_,hydrate:B,createApp:Cb(_,B)}}function Il(t,e,n,r,i=!1){if(ue(t)){t.forEach((d,p)=>Il(d,e&&(ue(e)?e[p]:e),n,r,i));return}if(gl(r)&&!i)return;const s=r.shapeFlag&4?Rl(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:c}=t,u=e&&e.r,l=a.refs===ke?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Xe(u)?(l[u]=null,Te(h,u)&&(h[u]=null)):He(u)&&(u.value=null)),Xe(c)){const d=()=>{l[c]=o,Te(h,c)&&(h[c]=o)};o?(d.id=-1,Dt(d,n)):d()}else if(He(c)){const d=()=>{c.value=o};o?(d.id=-1,Dt(d,n)):d()}else de(c)&&Fn(c,a,12,[o,l])}function wn(t,e,n,r=null){nn(t,e,7,[n,r])}function Jp(t,e,n=!1){const r=t.children,i=e.children;if(ue(r)&&ue(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=nr(i[s]),a.el=o.el),n||Jp(o,a))}}function Ob(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Db=t=>t.__isTeleport,El="components";function Dx(t,e){return Zp(El,t,!0,e)||t}const Xp=Symbol();function bl(t){return Xe(t)?Zp(El,t,!1)||t:t||Xp}function Zp(t,e,n=!0,r=!1){const i=Zt||rt;if(i){const s=i.type;if(t===El){const a=lm(s);if(a&&(a===e||a===vn(e)||a===Ca(vn(e))))return s}const o=em(i[t]||s[t],e)||em(i.appContext[t],e);return!o&&r?s:o}}function em(t,e){return t&&(t[e]||t[vn(e)]||t[Ca(vn(e))])}const _n=Symbol(void 0),Tl=Symbol(void 0),In=Symbol(void 0),Sl=Symbol(void 0),Qs=[];let Mr=null;function Pb(t=!1){Qs.push(Mr=t?null:[])}function xb(){Qs.pop(),Mr=Qs[Qs.length-1]||null}let Ka=1;function tm(t){Ka+=t}function nm(t){return t.dynamicChildren=Ka>0?Mr||Ci:null,xb(),Ka>0&&Mr&&Mr.push(t),t}function Px(t,e,n,r,i,s){return nm(im(t,e,n,r,i,s,!0))}function Lb(t,e,n,r,i){return nm(Ht(t,e,n,r,i,!0))}function Al(t){return t?t.__v_isVNode===!0:!1}function Fr(t,e){return t.type===e.type&&t.key===e.key}const Wa="__vInternal",rm=({key:t})=>t!=null?t:null,Ga=({ref:t})=>t!=null?Xe(t)||He(t)||de(t)?{i:Zt,r:t}:t:null;function im(t,e=null,n=null,r=0,i=null,s=t===_n?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rm(e),ref:e&&Ga(e),scopeId:$a,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(Nl(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Xe(n)?8:16),Ka>0&&!o&&Mr&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Mr.push(c),c}const Ht=Mb;function Mb(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===Xp)&&(t=In),Al(t)){const a=Li(t,e,!0);return n&&Nl(a,n),a}if(Yb(t)&&(t=t.__vccOpts),e){e=Fb(e);let{class:a,style:c}=e;a&&!Xe(a)&&(e.class=Wu(a)),ze(c)&&(Tp(c)&&!ue(c)&&(c=pt({},c)),e.style=Ku(c))}const o=Xe(t)?1:rb(t)?128:Db(t)?64:ze(t)?4:de(t)?2:0;return im(t,e,n,r,i,o,s,!0)}function Fb(t){return t?Tp(t)||Wa in t?pt({},t):t:null}function Li(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?Vb(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&rm(a),ref:e&&e.ref?n&&i?ue(i)?i.concat(Ga(e)):[i,Ga(e)]:Ga(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_n?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Li(t.ssContent),ssFallback:t.ssFallback&&Li(t.ssFallback),el:t.el,anchor:t.anchor}}function Ub(t=" ",e=0){return Ht(Tl,null,t,e)}function xx(t="",e=!1){return e?(Pb(),Lb(In,null,t)):Ht(In,null,t)}function En(t){return t==null||typeof t=="boolean"?Ht(In):ue(t)?Ht(_n,null,t.slice()):typeof t=="object"?nr(t):Ht(Tl,null,String(t))}function nr(t){return t.el===null||t.memo?t:Li(t)}function Nl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&(1|64)){const i=e.default;i&&(i._c&&(i._d=!1),Nl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Wa in e)?e._ctx=Zt:i===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:Zt},n=32):(e=String(e),r&64?(n=16,e=[Ub(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Wu([e.class,r.class]));else if(i==="style")e.style=Ku([e.style,r.style]);else if(Ta(i)){const s=e[i],o=r[i];s!==o&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function Lx(t,e,n,r){let i;const s=n&&n[r];if(ue(t)||Xe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(ze(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];i[a]=e(t[u],u,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const Cl=t=>t?om(t)?Rl(t)||t.proxy:Cl(t.parent):null,Qa=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Cl(t.parent),$root:t=>Cl(t.root),$emit:t=>t.emit,$options:t=>Vp(t),$forceUpdate:t=>()=>mm(t.update),$nextTick:t=>Vi.bind(t.proxy),$watch:t=>oT.bind(t)}),$b={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 0:return r[e];case 1:return i[e];case 3:return n[e];case 2:return s[e]}else{if(r!==ke&&Te(r,e))return o[e]=0,r[e];if(i!==ke&&Te(i,e))return o[e]=1,i[e];if((u=t.propsOptions[0])&&Te(u,e))return o[e]=2,s[e];if(n!==ke&&Te(n,e))return o[e]=3,n[e];yl&&(o[e]=4)}}const l=Qa[e];let h,d;if(l)return e==="$attrs"&&zt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ke&&Te(n,e))return o[e]=3,n[e];if(d=c.config.globalProperties,Te(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;if(i!==ke&&Te(i,e))i[e]=n;else if(r!==ke&&Te(r,e))r[e]=n;else if(Te(t.props,e))return!1;return e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return n[o]!==void 0||t!==ke&&Te(t,o)||e!==ke&&Te(e,o)||(a=s[0])&&Te(a,o)||Te(r,o)||Te(Qa,o)||Te(i.config.globalProperties,o)}},Bb=Yp();let qb=0;function jb(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Bb,s={uid:qb++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,update:null,scope:new yE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qp(r,i),emitsOptions:Rp(r,i),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=JE.bind(null,s),t.ce&&t.ce(s),s}let rt=null;const sm=()=>rt||Zt,Mi=t=>{rt=t,t.scope.on()},Ur=()=>{rt&&rt.scope.off(),rt=null};function om(t){return t.vnode.shapeFlag&4}let Ya=!1;function zb(t,e=!1){Ya=e;const{props:n,children:r}=t.vnode,i=om(t);Eb(t,n,i,e),Sb(t,r);const s=i?Hb(t,e):void 0;return Ya=!1,s}function Hb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ul(new Proxy(t.ctx,$b));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Wb(t):null;Mi(t),Dr();const s=Fn(r,t,0,[t.props,i]);if(Zn(),Ur(),rp(s)){if(s.then(Ur,Ur),e)return s.then(o=>{am(t,o,e)}).catch(o=>{Ja(o,t,0)});t.asyncDep=s}else am(t,s,e)}else um(t,e)}function am(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=Cp(e)),um(t,n)}let cm;function um(t,e,n){const r=t.type;if(!t.render){if(!e&&cm&&!r.render){const i=r.template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=pt(pt({isCustomElement:s,delimiters:a},o),c);r.render=cm(i,u)}}t.render=r.render||hn}Mi(t),Dr(),yb(t),Zn(),Ur()}function Kb(t){return new Proxy(t.attrs,{get(e,n){return zt(t,"get","$attrs"),e[n]}})}function Wb(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Kb(t))},slots:t.slots,emit:t.emit,expose:e}}function Rl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Cp(ul(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qa)return Qa[n](t)}}))}const Gb=/(?:^|[-_])(\w)/g,Qb=t=>t.replace(Gb,e=>e.toUpperCase()).replace(/[-_]/g,"");function lm(t){return de(t)&&t.displayName||t.name}function hm(t,e,n=!1){let r=lm(e);if(!r&&e.__file){const i=e.__file.match(/([^/\\]+)\.\w+$/);i&&(r=i[1])}if(!r&&t&&t.parent){const i=s=>{for(const o in s)if(s[o]===e)return o};r=i(t.components||t.parent.type.components)||i(t.appContext.components)}return r?Qb(r):n?"App":"Anonymous"}function Yb(t){return de(t)&&"__vccOpts"in t}const Ys=[];function dm(t,...e){Dr();const n=Ys.length?Ys[Ys.length-1].component:null,r=n&&n.appContext.config.warnHandler,i=Jb();if(r)Fn(r,n,11,[t+e.join(""),n&&n.proxy,i.map(({vnode:s})=>`at <${hm(n,s.type)}>`).join(`
`),i]);else{const s=[`[Vue warn]: ${t}`,...e];i.length&&s.push(`
`,...Xb(i)),console.warn(...s)}Zn()}function Jb(){let t=Ys[Ys.length-1];if(!t)return[];const e=[];for(;t;){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const r=t.component&&t.component.parent;t=r&&r.vnode}return e}function Xb(t){const e=[];return t.forEach((n,r)=>{e.push(...r===0?[]:[`
`],...Zb(n))}),e}function Zb({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",r=t.component?t.component.parent==null:!1,i=` at <${hm(t.component,t.type,r)}`,s=">"+n;return t.props?[i,...eT(t.props),s]:[i+s]}function eT(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach(r=>{e.push(...fm(r,t[r]))}),n.length>3&&e.push(" ..."),e}function fm(t,e,n){return Xe(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):typeof e=="number"||typeof e=="boolean"||e==null?n?e:[`${t}=${e}`]:He(e)?(e=fm(t,Ie(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):de(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=Ie(e),n?e:[`${t}=`,e])}function Fn(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){Ja(s,e,n)}return i}function nn(t,e,n,r){if(de(t)){const s=Fn(t,e,n,r);return s&&rp(s)&&s.catch(o=>{Ja(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(nn(t[s],e,n,r));return i}function Ja(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Fn(c,null,10,[t,o,a]);return}}tT(t,n,i,r)}function tT(t,e,n,r=!0){console.error(t)}let Xa=!1,kl=!1;const Kt=[];let Un=0;const Js=[];let Xs=null,Fi=0;const Zs=[];let rr=null,Ui=0;const pm=Promise.resolve();let Ol=null,Dl=null;function Vi(t){const e=Ol||pm;return t?e.then(this?t.bind(this):t):e}function nT(t){let e=Un+1,n=Kt.length;for(;e<n;){const r=e+n>>>1;eo(Kt[r])<t?e=r+1:n=r}return e}function mm(t){(!Kt.length||!Kt.includes(t,Xa&&t.allowRecurse?Un+1:Un))&&t!==Dl&&(t.id==null?Kt.push(t):Kt.splice(nT(t.id),0,t),gm())}function gm(){!Xa&&!kl&&(kl=!0,Ol=pm.then(wm))}function rT(t){const e=Kt.indexOf(t);e>Un&&Kt.splice(e,1)}function ym(t,e,n,r){ue(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),gm()}function iT(t){ym(t,Xs,Js,Fi)}function sT(t){ym(t,rr,Zs,Ui)}function Pl(t,e=null){if(Js.length){for(Dl=e,Xs=[...new Set(Js)],Js.length=0,Fi=0;Fi<Xs.length;Fi++)Xs[Fi]();Xs=null,Fi=0,Dl=null,Pl(t,e)}}function vm(t){if(Zs.length){const e=[...new Set(Zs)];if(Zs.length=0,rr){rr.push(...e);return}for(rr=e,rr.sort((n,r)=>eo(n)-eo(r)),Ui=0;Ui<rr.length;Ui++)rr[Ui]();rr=null,Ui=0}}const eo=t=>t.id==null?1/0:t.id;function wm(t){kl=!1,Xa=!0,Pl(t),Kt.sort((n,r)=>eo(n)-eo(r));const e=hn;try{for(Un=0;Un<Kt.length;Un++){const n=Kt[Un];n&&n.active!==!1&&Fn(n,null,14)}}finally{Un=0,Kt.length=0,vm(),Xa=!1,Ol=null,(Kt.length||Js.length||Zs.length)&&wm(t)}}const _m={};function rn(t,e,n){return Im(t,e,n)}function Im(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=ke){const a=rt;let c,u=!1,l=!1;if(He(t)?(c=()=>t.value,u=!!t._shallow):Di(t)?(c=()=>t,r=!0):ue(t)?(l=!0,u=t.some(Di),c=()=>t.map(w=>{if(He(w))return w.value;if(Di(w))return Vr(w);if(de(w))return Fn(w,a,2)})):de(t)?e?c=()=>Fn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),nn(t,a,3,[d])}:c=hn,e&&r){const w=c;c=()=>Vr(w())}let h,d=w=>{h=I.onStop=()=>{Fn(w,a,4)}};if(Ya)return d=hn,e?n&&nn(e,a,3,[c(),l?[]:void 0,d]):c(),hn;let p=l?[]:_m;const g=()=>{if(!!I.active)if(e){const w=I.run();(r||u||(l?w.some((C,M)=>zs(C,p[M])):zs(w,p)))&&(h&&h(),nn(e,a,3,[w,p===_m?void 0:p,d]),p=w)}else I.run()};g.allowRecurse=!!e;let E;i==="sync"?E=g:i==="post"?E=()=>Dt(g,a&&a.suspense):E=()=>{!a||a.isMounted?iT(g):g()};const I=new nl(c,E);return e?n?g():p=I.run():i==="post"?Dt(I.run.bind(I),a&&a.suspense):I.run(),()=>{I.stop(),a&&a.scope&&tp(a.scope.effects,I)}}function oT(t,e,n){const r=this.proxy,i=Xe(t)?t.includes(".")?Em(r,t):()=>r[t]:t.bind(r,r);let s;de(e)?s=e:(s=e.handler,n=e);const o=rt;Mi(this);const a=Im(i,s.bind(r),n);return o?Mi(o):Ur(),a}function Em(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Vr(t,e){if(!ze(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),He(t))Vr(t.value,e);else if(ue(t))for(let n=0;n<t.length;n++)Vr(t[n],e);else if(np(t)||Ri(t))t.forEach(n=>{Vr(n,e)});else if(sp(t))for(const n in t)Vr(t[n],e);return t}function $r(t,e,n){const r=arguments.length;return r===2?ze(e)&&!ue(e)?Al(e)?Ht(t,null,[e]):Ht(t,e):Ht(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Al(n)&&(n=[n]),Ht(t,e,n))}const aT="3.2.19",cT="http://www.w3.org/2000/svg",$i=typeof document!="undefined"?document:null,bm=new Map,uT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?$i.createElementNS(cT,t):$i.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>$i.createTextNode(t),createComment:t=>$i.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$i.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r){const i=n?n.previousSibling:e.lastChild;let s=bm.get(t);if(!s){const o=$i.createElement("template");if(o.innerHTML=r?`<svg>${t}</svg>`:t,s=o.content,r){const a=s.firstChild;for(;a.firstChild;)s.appendChild(a.firstChild);s.removeChild(a)}bm.set(t,s)}return e.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function lT(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function hT(t,e,n){const r=t.style,i=r.display;if(!n)t.removeAttribute("style");else if(Xe(n))e!==n&&(r.cssText=n);else{for(const s in n)xl(r,s,n[s]);if(e&&!Xe(e))for(const s in e)n[s]==null&&xl(r,s,"")}"_vod"in t&&(r.display=i)}const Tm=/\s*!important$/;function xl(t,e,n){if(ue(n))n.forEach(r=>xl(t,e,r));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=dT(t,e);Tm.test(n)?t.setProperty(ki(r),n.replace(Tm,""),"important"):t[r]=n}}const Sm=["Webkit","Moz","ms"],Ll={};function dT(t,e){const n=Ll[e];if(n)return n;let r=vn(e);if(r!=="filter"&&r in t)return Ll[e]=r;r=Ca(r);for(let i=0;i<Sm.length;i++){const s=Sm[i]+r;if(s in t)return Ll[e]=s}return e}const Am="http://www.w3.org/1999/xlink";function fT(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Am,e.slice(6,e.length)):t.setAttributeNS(Am,e,n);else{const s=oE(e);n==null||s&&!Zf(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function pT(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"){t._value=n;const a=n==null?"":n;t.value!==a&&(t.value=a),n==null&&t.removeAttribute(e);return}if(n===""||n==null){const a=typeof t[e];if(a==="boolean"){t[e]=Zf(n);return}else if(n==null&&a==="string"){t[e]="",t.removeAttribute(e);return}else if(a==="number"){try{t[e]=0}catch(c){}t.removeAttribute(e);return}}try{t[e]=n}catch(a){}}let Za=Date.now,Nm=!1;if(typeof window!="undefined"){Za()>document.createEvent("Event").timeStamp&&(Za=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);Nm=!!(t&&Number(t[1])<=53)}let Ml=0;const mT=Promise.resolve(),gT=()=>{Ml=0},yT=()=>Ml||(mT.then(gT),Ml=Za());function Bi(t,e,n,r){t.addEventListener(e,n,r)}function vT(t,e,n,r){t.removeEventListener(e,n,r)}function wT(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,c]=_T(e);if(r){const u=s[e]=IT(r,i);Bi(t,a,u,c)}else o&&(vT(t,a,o,c),s[e]=void 0)}}const Cm=/(?:Once|Passive|Capture)$/;function _T(t){let e;if(Cm.test(t)){e={};let n;for(;n=t.match(Cm);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[ki(t.slice(2)),e]}function IT(t,e){const n=r=>{const i=r.timeStamp||Za();(Nm||i>=n.attached-1)&&nn(ET(r,n.value),e,5,[r])};return n.value=t,n.attached=yT(),n}function ET(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r(i))}else return e}const Rm=/^on[a-z]/,bT=(t,e,n,r,i=!1,s,o,a,c)=>{e==="class"?lT(t,r,i):e==="style"?hT(t,n,r):Ta(e)?Gu(e)||wT(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):TT(t,e,r,i))?pT(t,e,r,s,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),fT(t,e,r,i))};function TT(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Rm.test(e)&&de(n)):e==="spellcheck"||e==="draggable"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Rm.test(e)&&Xe(n)?!1:e in t}const ir="transition",to="animation",km=(t,{slots:e})=>$r(Op,ST(t),e);km.displayName="Transition";const Om={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};km.props=pt({},Op.props,Om);const Br=(t,e=[])=>{ue(t)?t.forEach(n=>n(...e)):t&&t(...e)},Dm=t=>t?ue(t)?t.some(e=>e.length>1):t.length>1:!1;function ST(t){const e={};for(const z in t)z in Om||(e[z]=t[z]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:u=o,appearToClass:l=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=AT(i),E=g&&g[0],I=g&&g[1],{onBeforeEnter:w,onEnter:C,onEnterCancelled:M,onLeave:U,onLeaveCancelled:K,onBeforeAppear:ie=w,onAppear:Z=C,onAppearCancelled:ce=M}=e,W=(z,ye,Fe)=>{qi(z,ye?l:a),qi(z,ye?u:o),Fe&&Fe()},he=(z,ye)=>{qi(z,p),qi(z,d),ye&&ye()},me=z=>(ye,Fe)=>{const Tt=z?Z:C,we=()=>W(ye,z,Fe);Br(Tt,[ye,we]),Pm(()=>{qi(ye,z?c:s),sr(ye,z?l:a),Dm(Tt)||xm(ye,r,E,we)})};return pt(e,{onBeforeEnter(z){Br(w,[z]),sr(z,s),sr(z,o)},onBeforeAppear(z){Br(ie,[z]),sr(z,c),sr(z,u)},onEnter:me(!1),onAppear:me(!0),onLeave(z,ye){const Fe=()=>he(z,ye);sr(z,h),RT(),sr(z,d),Pm(()=>{qi(z,h),sr(z,p),Dm(U)||xm(z,r,I,Fe)}),Br(U,[z,Fe])},onEnterCancelled(z){W(z,!1),Br(M,[z])},onAppearCancelled(z){W(z,!0),Br(ce,[z])},onLeaveCancelled(z){he(z),Br(K,[z])}})}function AT(t){if(t==null)return null;if(ze(t))return[Fl(t.enter),Fl(t.leave)];{const e=Fl(t);return[e,e]}}function Fl(t){return Oa(t)}function sr(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function qi(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Pm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let NT=0;function xm(t,e,n,r){const i=t._endId=++NT,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=CT(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,d),s()},d=p=>{p.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,d)}function CT(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),i=r(ir+"Delay"),s=r(ir+"Duration"),o=Lm(i,s),a=r(to+"Delay"),c=r(to+"Duration"),u=Lm(a,c);let l=null,h=0,d=0;e===ir?o>0&&(l=ir,h=o,d=s.length):e===to?u>0&&(l=to,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?ir:to:null,d=l?l===ir?s.length:c.length:0);const p=l===ir&&/\b(transform|all)(,|$)/.test(n[ir+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:p}}function Lm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Mm(n)+Mm(t[r])))}function Mm(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function RT(){return document.body.offsetHeight}const Fm=t=>{const e=t.props["onUpdate:modelValue"];return ue(e)?n=>Ra(e,n):e};function kT(t){t.target.composing=!0}function Um(t){const e=t.target;e.composing&&(e.composing=!1,OT(e,"input"))}function OT(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const Mx={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=Fm(i);const s=r||i.props&&i.props.type==="number";Bi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n?a=a.trim():s&&(a=Oa(a)),t._assign(a)}),n&&Bi(t,"change",()=>{t.value=t.value.trim()}),e||(Bi(t,"compositionstart",kT),Bi(t,"compositionend",Um),Bi(t,"change",Um))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},s){if(t._assign=Fm(s),t.composing||document.activeElement===t&&(n||r&&t.value.trim()===e||(i||t.type==="number")&&Oa(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},DT=["ctrl","shift","alt","meta"],PT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>DT.some(n=>t[`${n}Key`]&&!e.includes(n))},Fx=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=PT[e[i]];if(s&&s(n,e))return}return t(n,...r)},xT=pt({patchProp:bT},uT);let Vm;function LT(){return Vm||(Vm=Rb(xT))}const Ux=(...t)=>{const e=LT().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=MT(r);if(!i)return;const s=e._component;!de(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function MT(t){return Xe(t)?document.querySelector(t):t}/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */const $m=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ji=t=>$m?Symbol(t):"_vr_"+t,FT=ji("rvlm"),Bm=ji("rvd"),ec=ji("r"),Ul=ji("rl"),Vl=ji("rvl"),zi=typeof window!="undefined";function UT(t){return t.__esModule||$m&&t[Symbol.toStringTag]==="Module"}const Oe=Object.assign;function $l(t,e){const n={};for(const r in e){const i=e[r];n[r]=Array.isArray(i)?i.map(t):t(i)}return n}const no=()=>{},VT=/\/$/,$T=t=>t.replace(VT,"");function Bl(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(r=e.slice(0,a),s=e.slice(a+1,c>-1?c:e.length),i=t(s)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=zT(r!=null?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function BT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function qT(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Hi(e.matched[r],n.matched[i])&&jm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function jm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!jT(t[n],e[n]))return!1;return!0}function jT(t,e){return Array.isArray(t)?zm(t,e):Array.isArray(e)?zm(e,t):t===e}function zm(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function zT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i=n.length-1,s,o;for(s=0;s<r.length;s++)if(o=r[s],!(i===1||o==="."))if(o==="..")i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var ro;(function(t){t.pop="pop",t.push="push"})(ro||(ro={}));var io;(function(t){t.back="back",t.forward="forward",t.unknown=""})(io||(io={}));function HT(t){if(!t)if(zi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$T(t)}const KT=/^[^#]+#/;function WT(t,e){return t.replace(KT,"#")+e}function GT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const tc=()=>({left:window.pageXOffset,top:window.pageYOffset});function QT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=GT(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Hm(t,e){return(history.state?history.state.position-e:-1)+t}const ql=new Map;function YT(t,e){ql.set(t,e)}function JT(t){const e=ql.get(t);return ql.delete(t),e}let XT=()=>location.protocol+"//"+location.host;function Km(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(a);return c[0]!=="/"&&(c="/"+c),qm(c,"")}return qm(n,t)+r+i}function ZT(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const p=Km(t,location),g=n.value,E=e.value;let I=0;if(d){if(n.value=p,e.value=d,o&&o===g){o=null;return}I=E?d.position-E.position:0}else r(p);i.forEach(w=>{w(n.value,g,{delta:I,type:ro.pop,direction:I?I>0?io.forward:io.back:io.unknown})})};function c(){o=n.value}function u(d){i.push(d);const p=()=>{const g=i.indexOf(d);g>-1&&i.splice(g,1)};return s.push(p),p}function l(){const{history:d}=window;!d.state||d.replaceState(Oe({},d.state,{scroll:tc()}),"")}function h(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Wm(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?tc():null}}function e0(t){const{history:e,location:n}=window,r={value:Km(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:XT()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),i.value=u}catch(p){console.error(p),n[l?"replace":"assign"](d)}}function o(c,u){const l=Oe({},e.state,Wm(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,l,!0),r.value=c}function a(c,u){const l=Oe({},i.value,e.state,{forward:c,scroll:tc()});s(l.current,l,!0);const h=Oe({},Wm(r.value,c,null),{position:l.position+1},u);s(c,h,!1),r.value=c}return{location:r,state:i,push:a,replace:o}}function t0(t){t=HT(t);const e=e0(t),n=ZT(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=Oe({location:"",base:t,go:r,createHref:WT.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Vx(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),t0(t)}function n0(t){return typeof t=="string"||t&&typeof t=="object"}function Gm(t){return typeof t=="string"||typeof t=="symbol"}const or={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qm=ji("nf");var Ym;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ym||(Ym={}));function Ki(t,e){return Oe(new Error,{type:t,[Qm]:!0},e)}function qr(t,e){return t instanceof Error&&Qm in t&&(e==null||!!(t.type&e))}const Jm="[^/]+?",r0={sensitive:!1,strict:!1,start:!0,end:!0},i0=/[.+*?^${}()[\]/\\]/g;function s0(t,e){const n=Oe({},r0,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const d=u[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(i0,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:E,optional:I,regexp:w}=d;s.push({name:g,repeatable:E,optional:I});const C=w||Jm;if(C!==Jm){p+=10;try{new RegExp(`(${C})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${g}" (${C}): `+U.message)}}let M=E?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(M=I&&u.length<2?`(?:/${M})`:"/"+M),I&&(M+="?"),i+=M,p+=20,I&&(p+=-8),E&&(p+=-20),C===".*"&&(p+=-50)}l.push(p)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const p=l[d]||"",g=s[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const p of d)if(p.type===0)l+=p.value;else if(p.type===1){const{value:g,repeatable:E,optional:I}=p,w=g in u?u[g]:"";if(Array.isArray(w)&&!E)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const C=Array.isArray(w)?w.join("/"):w;if(!C)if(I)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);l+=C}}return l}return{re:o,score:r,keys:s,parse:a,stringify:c}}function o0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function a0(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=o0(r[n],i[n]);if(s)return s;n++}return i.length-r.length}const c0={type:0,value:""},u0=/[a-zA-Z0-9_]/;function l0(t){if(!t)return[[]];if(t==="/")return[[c0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,c,u="",l="";function h(){!u||(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:u0.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function h0(t,e,n){const r=s0(l0(t.path),n),i=Oe(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function d0(t,e){const n=[],r=new Map;e=Zm({strict:!1,end:!0,sensitive:!1},e);function i(l){return r.get(l)}function s(l,h,d){const p=!d,g=p0(l);g.aliasOf=d&&d.record;const E=Zm(e,l),I=[g];if("alias"in l){const M=typeof l.alias=="string"?[l.alias]:l.alias;for(const U of M)I.push(Oe({},g,{components:d?d.record.components:g.components,path:U,aliasOf:d?d.record:g}))}let w,C;for(const M of I){const{path:U}=M;if(h&&U[0]!=="/"){const K=h.record.path,ie=K[K.length-1]==="/"?"":"/";M.path=h.record.path+(U&&ie+U)}if(w=h0(M,h,E),d?d.alias.push(w):(C=C||w,C!==w&&C.alias.push(w),p&&l.name&&!Xm(w)&&o(l.name)),"children"in g){const K=g.children;for(let ie=0;ie<K.length;ie++)s(K[ie],w,d&&d.children[ie])}d=d||w,c(w)}return C?()=>{o(C)}:no}function o(l){if(Gm(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&a0(l,n[h])>=0;)h++;n.splice(h,0,l),l.record.name&&!Xm(l)&&r.set(l.record.name,l)}function u(l,h){let d,p={},g,E;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw Ki(1,{location:l});E=d.record.name,p=Oe(f0(h.params,d.keys.filter(C=>!C.optional).map(C=>C.name)),l.params),g=d.stringify(p)}else if("path"in l)g=l.path,d=n.find(C=>C.re.test(g)),d&&(p=d.parse(g),E=d.record.name);else{if(d=h.name?r.get(h.name):n.find(C=>C.re.test(h.path)),!d)throw Ki(1,{location:l,currentLocation:h});E=d.record.name,p=Oe({},h.params,l.params),g=d.stringify(p)}const I=[];let w=d;for(;w;)I.unshift(w.record),w=w.parent;return{name:E,path:g,params:p,matched:I,meta:g0(I)}}return t.forEach(l=>s(l)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function f0(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function p0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:m0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function m0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Xm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function g0(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function Zm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const eg=/#/g,y0=/&/g,v0=/\//g,w0=/=/g,_0=/\?/g,tg=/\+/g,I0=/%5B/g,E0=/%5D/g,ng=/%5E/g,b0=/%60/g,rg=/%7B/g,T0=/%7C/g,ig=/%7D/g,S0=/%20/g;function jl(t){return encodeURI(""+t).replace(T0,"|").replace(I0,"[").replace(E0,"]")}function A0(t){return jl(t).replace(rg,"{").replace(ig,"}").replace(ng,"^")}function zl(t){return jl(t).replace(tg,"%2B").replace(S0,"+").replace(eg,"%23").replace(y0,"%26").replace(b0,"`").replace(rg,"{").replace(ig,"}").replace(ng,"^")}function N0(t){return zl(t).replace(w0,"%3D")}function C0(t){return jl(t).replace(eg,"%23").replace(_0,"%3F")}function R0(t){return t==null?"":C0(t).replace(v0,"%2F")}function nc(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function k0(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(tg," "),o=s.indexOf("="),a=nc(o<0?s:s.slice(0,o)),c=o<0?null:nc(s.slice(o+1));if(a in e){let u=e[a];Array.isArray(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function sg(t){let e="";for(let n in t){const r=t[n];if(n=N0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(s=>s&&zl(s)):[r&&zl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function O0(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}function so(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ar(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ki(4,{from:n,to:e})):h instanceof Error?a(h):n0(h)?a(Ki(2,{from:e,to:h})):(s&&r.enterCallbacks[i]===s&&typeof h=="function"&&s.push(h),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Hl(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(D0(a)){const u=(a.__vccOpts||a)[e];u&&i.push(ar(u,n,r,s,o))}else{let c=a();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const l=UT(u)?u.default:u;s.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&ar(d,n,r,s,o)()}))}}return i}function D0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function og(t){const e=en(ec),n=en(Ul),r=Ne(()=>e.resolve(J(t.to))),i=Ne(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(Hi.bind(null,l));if(d>-1)return d;const p=ag(c[u-2]);return u>1&&ag(l)===p&&h[h.length-1].path!==p?h.findIndex(Hi.bind(null,c[u-2])):d}),s=Ne(()=>i.value>-1&&M0(n.params,r.value.params)),o=Ne(()=>i.value>-1&&i.value===n.matched.length-1&&jm(n.params,r.value.params));function a(c={}){return L0(c)?e[J(t.replace)?"replace":"push"](J(t.to)).catch(no):Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const P0=xi({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:og,setup(t,{slots:e}){const n=Pr(og(t)),{options:r}=en(ec),i=Ne(()=>({[cg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[cg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:$r("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),x0=P0;function L0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function M0(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function ag(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const cg=(t,e,n)=>t!=null?t:e!=null?e:n,F0=xi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=en(Vl),i=Ne(()=>t.route||r.value),s=en(Bm,0),o=Ne(()=>i.value.matched[s]);Pi(Bm,s+1),Pi(FT,o),Pi(Vl,i);const a=dn();return rn(()=>[a.value,o.value,t.name],([c,u,l],[h,d,p])=>{u&&(u.instances[l]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!Hi(u,d)||!h)&&(u.enterCallbacks[l]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=i.value,u=o.value,l=u&&u.components[t.name],h=t.name;if(!l)return ug(n.default,{Component:l,route:c});const d=u.props[t.name],p=d?d===!0?c.params:typeof d=="function"?d(c):d:null,E=$r(l,Oe({},p,e,{onVnodeUnmounted:I=>{I.component.isUnmounted&&(u.instances[h]=null)},ref:a}));return ug(n.default,{Component:E,route:c})||E}}});function ug(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const U0=F0;function $x(t){const e=d0(t.routes,t),n=t.parseQuery||k0,r=t.stringifyQuery||sg,i=t.history,s=so(),o=so(),a=so(),c=KE(or);let u=or;zi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=$l.bind(null,T=>""+T),h=$l.bind(null,R0),d=$l.bind(null,nc);function p(T,G){let V,ee;return Gm(T)?(V=e.getRecordMatcher(T),ee=G):ee=T,e.addRoute(ee,V)}function g(T){const G=e.getRecordMatcher(T);G&&e.removeRoute(G)}function E(){return e.getRoutes().map(T=>T.record)}function I(T){return!!e.getRecordMatcher(T)}function w(T,G){if(G=Oe({},G||c.value),typeof T=="string"){const F=Bl(n,T,G.path),f=e.resolve({path:F.path},G),m=i.createHref(F.fullPath);return Oe(F,f,{params:d(f.params),hash:nc(F.hash),redirectedFrom:void 0,href:m})}let V;if("path"in T)V=Oe({},T,{path:Bl(n,T.path,G.path).path});else{const F=Oe({},T.params);for(const f in F)F[f]==null&&delete F[f];V=Oe({},T,{params:h(T.params)}),G.params=h(G.params)}const ee=e.resolve(V,G),_=T.hash||"";ee.params=l(d(ee.params));const N=BT(r,Oe({},T,{hash:A0(_),path:ee.path})),B=i.createHref(N);return Oe({fullPath:N,hash:_,query:r===sg?O0(T.query):T.query||{}},ee,{redirectedFrom:void 0,href:B})}function C(T){return typeof T=="string"?Bl(n,T,c.value.path):Oe({},T)}function M(T,G){if(u!==T)return Ki(8,{from:G,to:T})}function U(T){return Z(T)}function K(T){return U(Oe(C(T),{replace:!0}))}function ie(T){const G=T.matched[T.matched.length-1];if(G&&G.redirect){const{redirect:V}=G;let ee=typeof V=="function"?V(T):V;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=C(ee):{path:ee},ee.params={}),Oe({query:T.query,hash:T.hash,params:T.params},ee)}}function Z(T,G){const V=u=w(T),ee=c.value,_=T.state,N=T.force,B=T.replace===!0,F=ie(V);if(F)return Z(Oe(C(F),{state:_,force:N,replace:B}),G||V);const f=V;f.redirectedFrom=G;let m;return!N&&qT(r,ee,V)&&(m=Ki(16,{to:f,from:ee}),be(ee,ee,!0,!1)),(m?Promise.resolve(m):W(f,ee)).catch(y=>qr(y)?y:fe(y,f,ee)).then(y=>{if(y){if(qr(y,2))return Z(Oe(C(y.to),{state:_,force:N,replace:B}),G||f)}else y=me(f,ee,!0,B,_);return he(f,ee,y),y})}function ce(T,G){const V=M(T,G);return V?Promise.reject(V):Promise.resolve()}function W(T,G){let V;const[ee,_,N]=V0(T,G);V=Hl(ee.reverse(),"beforeRouteLeave",T,G);for(const F of ee)F.leaveGuards.forEach(f=>{V.push(ar(f,T,G))});const B=ce.bind(null,T,G);return V.push(B),Wi(V).then(()=>{V=[];for(const F of s.list())V.push(ar(F,T,G));return V.push(B),Wi(V)}).then(()=>{V=Hl(_,"beforeRouteUpdate",T,G);for(const F of _)F.updateGuards.forEach(f=>{V.push(ar(f,T,G))});return V.push(B),Wi(V)}).then(()=>{V=[];for(const F of T.matched)if(F.beforeEnter&&!G.matched.includes(F))if(Array.isArray(F.beforeEnter))for(const f of F.beforeEnter)V.push(ar(f,T,G));else V.push(ar(F.beforeEnter,T,G));return V.push(B),Wi(V)}).then(()=>(T.matched.forEach(F=>F.enterCallbacks={}),V=Hl(N,"beforeRouteEnter",T,G),V.push(B),Wi(V))).then(()=>{V=[];for(const F of o.list())V.push(ar(F,T,G));return V.push(B),Wi(V)}).catch(F=>qr(F,8)?F:Promise.reject(F))}function he(T,G,V){for(const ee of a.list())ee(T,G,V)}function me(T,G,V,ee,_){const N=M(T,G);if(N)return N;const B=G===or,F=zi?history.state:{};V&&(ee||B?i.replace(T.fullPath,Oe({scroll:B&&F&&F.scroll},_)):i.push(T.fullPath,_)),c.value=T,be(T,G,V,B),q()}let z;function ye(){z=i.listen((T,G,V)=>{const ee=w(T),_=ie(ee);if(_){Z(Oe(_,{replace:!0}),ee).catch(no);return}u=ee;const N=c.value;zi&&YT(Hm(N.fullPath,V.delta),tc()),W(ee,N).catch(B=>qr(B,4|8)?B:qr(B,2)?(Z(B.to,ee).then(F=>{qr(F,4|16)&&!V.delta&&V.type===ro.pop&&i.go(-1,!1)}).catch(no),Promise.reject()):(V.delta&&i.go(-V.delta,!1),fe(B,ee,N))).then(B=>{B=B||me(ee,N,!1),B&&(V.delta?i.go(-V.delta,!1):V.type===ro.pop&&qr(B,4|16)&&i.go(-1,!1)),he(ee,N,B)}).catch(no)})}let Fe=so(),Tt=so(),we;function fe(T,G,V){q(T);const ee=Tt.list();return ee.length?ee.forEach(_=>_(T,G,V)):console.error(T),Promise.reject(T)}function ge(){return we&&c.value!==or?Promise.resolve():new Promise((T,G)=>{Fe.add([T,G])})}function q(T){we||(we=!0,ye(),Fe.list().forEach(([G,V])=>T?V(T):G()),Fe.reset())}function be(T,G,V,ee){const{scrollBehavior:_}=t;if(!zi||!_)return Promise.resolve();const N=!V&&JT(Hm(T.fullPath,0))||(ee||!V)&&history.state&&history.state.scroll||null;return Vi().then(()=>_(T,G,N)).then(B=>B&&QT(B)).catch(B=>fe(B,T,G))}const De=T=>i.go(T);let kt;const Je=new Set;return{currentRoute:c,addRoute:p,removeRoute:g,hasRoute:I,getRoutes:E,resolve:w,options:t,push:U,replace:K,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Tt.add,isReady:ge,install(T){const G=this;T.component("RouterLink",x0),T.component("RouterView",U0),T.config.globalProperties.$router=G,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>J(c)}),zi&&!kt&&c.value===or&&(kt=!0,U(i.location).catch(_=>{}));const V={};for(const _ in or)V[_]=Ne(()=>c.value[_]);T.provide(ec,G),T.provide(Ul,Pr(V)),T.provide(Vl,c);const ee=T.unmount;Je.add(T),T.unmount=function(){Je.delete(T),Je.size<1&&(u=or,z&&z(),c.value=or,kt=!1,we=!1),ee()}}}}function Wi(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function V0(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>Hi(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Hi(u,c))||i.push(c))}return[n,r,i]}function Bx(){return en(ec)}function qx(){return en(Ul)}function jx(t){return{all:t=t||new Map,on:function(e,n){var r=t.get(e);r?r.push(n):t.set(e,[n])},off:function(e,n){var r=t.get(e);r&&(n?r.splice(r.indexOf(n)>>>0,1):t.set(e,[]))},emit:function(e,n){var r=t.get(e);r&&r.slice().map(function(i){i(n)}),(r=t.get("*"))&&r.slice().map(function(i){i(e,n)})}}}/**
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
 */const lg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},hg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(n[l],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},B0=function(t){const e=lg(t);return hg.encodeByteArray(e,!0)},dg=function(t){return B0(t).replace(/\./g,"")},q0=function(t){try{return hg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function rc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!j0(n)||(t[n]=rc(t[n],e[n]));return t}function j0(t){return t!=="__proto__"}/**
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
 */class z0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function H0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[dg(JSON.stringify(n)),dg(JSON.stringify(o)),a].join(".")}/**
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
 */function xe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fg(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Kl(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(t){return!1}}function K0(){return typeof self=="object"&&self.self===self}function Wl(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ic(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function W0(){return xe().indexOf("Electron/")>=0}function Gl(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function G0(){return xe().indexOf("MSAppHost/")>=0}function Q0(){return!Kl()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sc(){return typeof indexedDB=="object"}/**
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
 */const Y0="FirebaseError";class sn extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=Y0,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jr.prototype.create)}}class jr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?J0(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new sn(i,a,r)}}function J0(t,e){return t.replace(X0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const X0=/\{\$([^}]+)}/g;/**
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
 */function pg(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Z0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ql(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(mg(s)&&mg(o)){if(!Ql(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function mg(t){return t!==null&&typeof t=="object"}/**
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
 */function Gi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function oo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gg(t,e){const n=new eS(t,e);return n.subscribe.bind(n)}class eS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Yl),i.error===void 0&&(i.error=Yl),i.complete===void 0&&(i.complete=Yl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(o){}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yl(){}/**
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
 */function te(t){return t&&t._delegate?t._delegate:t}/*! *****************************************************************************
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
***************************************************************************** */function Jl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function nS(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(l){try{u(r.next(l))}catch(h){o(h)}}function c(l){try{u(r.throw(l))}catch(h){o(h)}}function u(l){l.done?s(l.value):i(l.value).then(a,c)}u((r=r.apply(t,e||[])).next())})}function rS(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(l){return c([u,l])}}function c(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(l){u=[6,l],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function Xl(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function oc(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function yg(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Vn=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
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
 */var zr="[DEFAULT]";/**
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
 */var iS=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new z0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch(s){}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(oS(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch(h){}try{for(var i=Xl(this.instancesDeferred.entries()),s=i.next();!s.done;s=i.next()){var o=oc(s.value,2),a=o[0],c=o[1],u=this.normalizeInstanceIdentifier(a);try{var l=this.getOrInitializeService({instanceIdentifier:u});c.resolve(l)}catch(h){}}}catch(h){n={error:h}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=zr),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return nS(this,void 0,void 0,function(){var e;return rS(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(yg(yg([],oc(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),oc(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=zr),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=zr),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var i=e.options,s=i===void 0?{}:i,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var c=Xl(this.instancesDeferred.entries()),u=c.next();!u.done;u=c.next()){var l=oc(u.value,2),h=l[0],d=l[1],p=this.normalizeInstanceIdentifier(h);o===p&&d.resolve(a)}}catch(g){n={error:g}}finally{try{u&&!u.done&&(r=c.return)&&r.call(c)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var r,i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);var o=this.instances.get(i);return o&&e(o,i),function(){s.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,i,s=this.onInitCallbacks.get(n);if(!!s)try{for(var o=Xl(s),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(e,n)}catch(u){}}}catch(u){r={error:u}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,i=r===void 0?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:sS(n),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=zr),this.component?this.component.multipleInstances?e:zr:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function sS(t){return t===zr?void 0:t}function oS(t){return t.instantiationMode==="EAGER"}/**
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
 */var aS=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new iS(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
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
 */const Zl=[];var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const vg={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},cS=Ee.INFO,uS={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},lS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=uS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ac{constructor(e){this.name=e,this._logLevel=cS,this._logHandler=lS,this._userLogHandler=null,Zl.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}function hS(t){Zl.forEach(e=>{e.setLogLevel(t)})}function dS(t,e){for(const n of Zl){let r=null;e&&e.level&&(r=vg[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch(u){return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:Ee[s].toLowerCase(),message:a,args:o,type:i.name})}}}/**
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
 */class fS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wg="@firebase/app",mS="0.7.2";/**
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
 */const eh=new ac("@firebase/app"),gS="@firebase/app-compat",yS="@firebase/analytics-compat",vS="@firebase/analytics",wS="@firebase/app-check-compat",_S="@firebase/app-check",IS="@firebase/auth",ES="@firebase/auth-compat",bS="@firebase/database",TS="@firebase/database-compat",SS="@firebase/functions",AS="@firebase/functions-compat",NS="@firebase/installations",CS="@firebase/installations-compat",RS="@firebase/messaging",kS="@firebase/messaging-compat",OS="@firebase/performance",DS="@firebase/performance-compat",PS="@firebase/remote-config",xS="@firebase/remote-config-compat",LS="@firebase/storage",MS="@firebase/storage-compat",FS="@firebase/firestore",US="@firebase/firestore-compat",VS="firebase",$S="9.1.1";/**
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
 */const Hr="[DEFAULT]",BS={[wg]:"fire-core",[gS]:"fire-core-compat",[vS]:"fire-analytics",[yS]:"fire-analytics-compat",[_S]:"fire-app-check",[wS]:"fire-app-check-compat",[IS]:"fire-auth",[ES]:"fire-auth-compat",[bS]:"fire-rtdb",[TS]:"fire-rtdb-compat",[SS]:"fire-fn",[AS]:"fire-fn-compat",[NS]:"fire-iid",[CS]:"fire-iid-compat",[RS]:"fire-fcm",[kS]:"fire-fcm-compat",[OS]:"fire-perf",[DS]:"fire-perf-compat",[PS]:"fire-rc",[xS]:"fire-rc-compat",[LS]:"fire-gcs",[MS]:"fire-gcs-compat",[FS]:"fire-fst",[US]:"fire-fst-compat","fire-js":"fire-js",[VS]:"fire-js-all"};/**
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
 */const cr=new Map,ao=new Map;function cc(t,e){try{t.container.addComponent(e)}catch(n){eh.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _g(t,e){t.container.addOrOverwriteComponent(e)}function Kr(t){const e=t.name;if(ao.has(e))return eh.debug(`There were multiple attempts to register component ${e}.`),!1;ao.set(e,t);for(const n of cr.values())cc(n,t);return!0}function Ig(t,e){return t.container.getProvider(e)}function qS(t,e,n=Hr){Ig(t,e).clearInstance(n)}function jS(){ao.clear()}/**
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
 */const zS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},co=new jr("app","Firebase",zS);/**
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
 */class HS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw co.create("app-deleted",{appName:this._name})}}/**
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
 */const Wr=$S;function Eg(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Hr,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw co.create("bad-app-name",{appName:String(r)});const i=cr.get(r);if(i){if(Ql(t,i.options)&&Ql(n,i.config))return i;throw co.create("duplicate-app",{appName:r})}const s=new aS(r);for(const a of ao.values())s.addComponent(a);const o=new HS(t,n,s);return cr.set(r,o),o}function KS(t=Hr){const e=cr.get(t);if(!e)throw co.create("no-app",{appName:t});return e}function WS(){return Array.from(cr.values())}async function bg(t){const e=t.name;cr.has(e)&&(cr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Gr(t,e,n){var r;let i=(r=BS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),eh.warn(a.join(" "));return}Kr(new Vn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Tg(t,e){if(t!==null&&typeof t!="function")throw co.create("invalid-log-argument");dS(t,e)}function Sg(t){hS(t)}/**
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
 */function GS(t){Kr(new Vn("platform-logger",e=>new fS(e),"PRIVATE")),Gr(wg,mS,t),Gr("fire-js","")}GS();var QS=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:Wr,_DEFAULT_ENTRY_NAME:Hr,_addComponent:cc,_addOrOverwriteComponent:_g,_apps:cr,_clearComponents:jS,_components:ao,_getProvider:Ig,_registerComponent:Kr,_removeServiceInstance:qS,deleteApp:bg,getApp:KS,getApps:WS,initializeApp:Eg,onLog:Tg,registerVersion:Gr,setLogLevel:Sg,FirebaseError:sn});/**
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
 */class YS{constructor(e,n){this._delegate=e,this.firebase=n,cc(e,new Vn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),bg(this._delegate)))}_getService(e,n=Hr){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Hr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){cc(this._delegate,e)}_addOrOverwriteComponent(e){_g(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const JS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Ag=new jr("app-compat","Firebase",JS);/**
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
 */function XS(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Gr,setLogLevel:Sg,onLog:Tg,apps:null,SDK_VERSION:Wr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:QS}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Hr,!pg(e,u))throw Ag.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,l={}){const h=Eg(u,l);if(pg(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Kr(u)&&u.type==="PUBLIC"){const d=(p=i())=>{if(typeof p[h]!="function")throw Ag.create("invalid-app-argument",{appName:l});return p[h]()};u.serviceProps!==void 0&&rc(d,u.serviceProps),n[h]=d,t.prototype[h]=function(...p){return this._getService.bind(this,l).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?n[h]:null}function c(u,l){return l==="serverAuth"?null:l}return n}/**
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
 */function Ng(){const t=XS(YS);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Ng,extendNamespace:e,createSubscribe:gg,ErrorFactory:jr,deepExtend:rc});function e(n){rc(t,n)}return t}const ZS=Ng();/**
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
 */const Cg=new ac("@firebase/app-compat"),eA="@firebase/app-compat",tA="0.1.3";/**
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
 */function nA(t){Gr(eA,tA,t)}/**
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
 */if(K0()&&self.firebase!==void 0){Cg.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Cg.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const uo=ZS;nA();var rA="firebase",iA="9.1.1";/**
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
 */uo.registerVersion(rA,iA,"app-compat");var sA=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},H,th=th||{},oe=sA||self;function uc(){}function nh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function lo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function oA(t){return Object.prototype.hasOwnProperty.call(t,rh)&&t[rh]||(t[rh]=++aA)}var rh="closure_uid_"+(1e9*Math.random()>>>0),aA=0;function cA(t,e,n){return t.call.apply(t.bind,arguments)}function uA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function mt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?mt=cA:mt=uA,mt.apply(null,arguments)}function lc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function gt(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ur(){this.s=this.s,this.o=this.o}var lA=0,hA={};ur.prototype.s=!1;ur.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),lA!=0)){var t=oA(this);delete hA[t]}};ur.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Rg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},kg=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function dA(t){e:{var e=rN;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function Og(t){return Array.prototype.concat.apply([],arguments)}function ih(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function hc(t){return/^[\s\xa0]*$/.test(t)}var Dg=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Pt(t,e){return t.indexOf(e)!=-1}function sh(t,e){return t<e?-1:t>e?1:0}var xt;e:{var Pg=oe.navigator;if(Pg){var xg=Pg.userAgent;if(xg){xt=xg;break e}}xt=""}function oh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Lg(t){const e={};for(const n in t)e[n]=t[n];return e}var Mg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fg(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Mg.length;s++)n=Mg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ah(t){return ah[" "](t),t}ah[" "]=uc;function fA(t){var e=gA;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var pA=Pt(xt,"Opera"),Yi=Pt(xt,"Trident")||Pt(xt,"MSIE"),Ug=Pt(xt,"Edge"),ch=Ug||Yi,Vg=Pt(xt,"Gecko")&&!(Pt(xt.toLowerCase(),"webkit")&&!Pt(xt,"Edge"))&&!(Pt(xt,"Trident")||Pt(xt,"MSIE"))&&!Pt(xt,"Edge"),mA=Pt(xt.toLowerCase(),"webkit")&&!Pt(xt,"Edge");function $g(){var t=oe.document;return t?t.documentMode:void 0}var dc;e:{var uh="",lh=function(){var t=xt;if(Vg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ug)return/Edge\/([\d\.]+)/.exec(t);if(Yi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(mA)return/WebKit\/(\S+)/.exec(t);if(pA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(lh&&(uh=lh?lh[1]:""),Yi){var hh=$g();if(hh!=null&&hh>parseFloat(uh)){dc=String(hh);break e}}dc=uh}var gA={};function yA(){return fA(function(){let t=0;const e=Dg(String(dc)).split("."),n=Dg("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=sh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||sh(i[2].length==0,s[2].length==0)||sh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var dh;if(oe.document&&Yi){var Bg=$g();dh=Bg||parseInt(dc,10)||void 0}else dh=void 0;var vA=dh,wA=function(){if(!oe.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{oe.addEventListener("test",uc,e),oe.removeEventListener("test",uc,e)}catch(n){}return t}();function St(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}St.prototype.h=function(){this.defaultPrevented=!0};function ho(t,e){if(St.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Vg){e:{try{ah(e.nodeName);var i=!0;break e}catch(s){}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_A[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ho.Z.h.call(this)}}gt(ho,St);var _A={2:"touch",3:"pen",4:"mouse"};ho.prototype.h=function(){ho.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var fo="closure_listenable_"+(1e6*Math.random()|0),IA=0;function EA(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++IA,this.ca=this.fa=!1}function fc(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function pc(t){this.src=t,this.g={},this.h=0}pc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ph(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new EA(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function fh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Rg(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(fc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ph(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var mh="closure_lm_"+(1e6*Math.random()|0),gh={};function qg(t,e,n,r,i){if(r&&r.once)return zg(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)qg(t,e[s],n,r,i);return null}return n=_h(n),t&&t[fo]?t.N(e,n,lo(r)?!!r.capture:!!r,i):jg(t,e,n,!1,r,i)}function jg(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=lo(i)?!!i.capture:!!i,a=vh(t);if(a||(t[mh]=a=new pc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=bA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)wA||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Kg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function bA(){function t(n){return e.call(t.src,t.listener,n)}var e=TA;return t}function zg(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)zg(t,e[s],n,r,i);return null}return n=_h(n),t&&t[fo]?t.O(e,n,lo(r)?!!r.capture:!!r,i):jg(t,e,n,!0,r,i)}function Hg(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Hg(t,e[s],n,r,i);else r=lo(r)?!!r.capture:!!r,n=_h(n),t&&t[fo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ph(s,n,r,i),-1<n&&(fc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=vh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ph(e,n,r,i)),(n=-1<t?e[t]:null)&&yh(n))}function yh(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[fo])fh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Kg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vh(e))?(fh(n,t),n.h==0&&(n.src=null,e[mh]=null)):fc(t)}}}function Kg(t){return t in gh?gh[t]:gh[t]="on"+t}function TA(t,e){if(t.ca)t=!0;else{e=new ho(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&yh(t),t=n.call(r,e)}return t}function vh(t){return t=t[mh],t instanceof pc?t:null}var wh="__closure_events_fn_"+(1e9*Math.random()>>>0);function _h(t){return typeof t=="function"?t:(t[wh]||(t[wh]=function(e){return t.handleEvent(e)}),t[wh])}function it(){ur.call(this),this.i=new pc(this),this.P=this,this.I=null}gt(it,ur);it.prototype[fo]=!0;it.prototype.removeEventListener=function(t,e,n,r){Hg(this,t,e,n,r)};function yt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new St(e,t);else if(e instanceof St)e.target=e.target||t;else{var i=e;e=new St(r,t),Fg(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=mc(o,r,!0,e)&&i}if(o=e.g=t,i=mc(o,r,!0,e)&&i,i=mc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=mc(o,r,!1,e)&&i}it.prototype.M=function(){if(it.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)fc(n[r]);delete t.g[e],t.h--}}this.I=null};it.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};it.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function mc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&fh(t.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ih=oe.JSON.stringify;function SA(){var t=Gg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class AA{constructor(){this.h=this.g=null}add(e,n){const r=Wg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Wg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new NA,t=>t.reset());class NA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function CA(t){oe.setTimeout(()=>{throw t},0)}function Eh(t,e){bh||RA(),Th||(bh(),Th=!0),Gg.add(t,e)}var bh;function RA(){var t=oe.Promise.resolve(void 0);bh=function(){t.then(kA)}}var Th=!1,Gg=new AA;function kA(){for(var t;t=SA();){try{t.h.call(t.g)}catch(n){CA(n)}var e=Wg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Th=!1}function gc(t,e){it.call(this),this.h=t||1,this.g=e||oe,this.j=mt(this.kb,this),this.l=Date.now()}gt(gc,it);H=gc.prototype;H.da=!1;H.S=null;H.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),yt(this,"tick"),this.da&&(Sh(this),this.start()))}};H.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Sh(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}H.M=function(){gc.Z.M.call(this),Sh(this),delete this.g};function Ah(t,e,n){if(typeof t=="function")n&&(t=mt(t,n));else if(t&&typeof t.handleEvent=="function")t=mt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:oe.setTimeout(t,e||0)}function Qg(t){t.g=Ah(()=>{t.g=null,t.i&&(t.i=!1,Qg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class OA extends ur{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Qg(this)}M(){super.M(),this.g&&(oe.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function po(t){ur.call(this),this.h=t,this.g={}}gt(po,ur);var Yg=[];function Jg(t,e,n,r){Array.isArray(n)||(n&&(Yg[0]=n.toString()),n=Yg);for(var i=0;i<n.length;i++){var s=qg(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Xg(t){oh(t.g,function(e,n){this.g.hasOwnProperty(n)&&yh(e)},t),t.g={}}po.prototype.M=function(){po.Z.M.call(this),Xg(this)};po.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function yc(){this.g=!0}yc.prototype.Aa=function(){this.g=!1};function DA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function PA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ji(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+LA(t,n)+(r?" "+r:"")})}function xA(t,e){t.info(function(){return"TIMEOUT: "+e})}yc.prototype.info=function(){};function LA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ih(n)}catch(a){return e}}var Qr={},Zg=null;function vc(){return Zg=Zg||new it}Qr.Ma="serverreachability";function ey(t){St.call(this,Qr.Ma,t)}gt(ey,St);function mo(t){const e=vc();yt(e,new ey(e,t))}Qr.STAT_EVENT="statevent";function ty(t,e){St.call(this,Qr.STAT_EVENT,t),this.stat=e}gt(ty,St);function Lt(t){const e=vc();yt(e,new ty(e,t))}Qr.Na="timingevent";function ny(t,e){St.call(this,Qr.Na,t),this.size=e}gt(ny,St);function go(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return oe.setTimeout(function(){t()},e)}var wc={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ry={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Nh(){}Nh.prototype.h=null;function iy(t){return t.h||(t.h=t.i())}function sy(){}var yo={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ch(){St.call(this,"d")}gt(Ch,St);function Rh(){St.call(this,"c")}gt(Rh,St);var kh;function _c(){}gt(_c,Nh);_c.prototype.g=function(){return new XMLHttpRequest};_c.prototype.i=function(){return{}};kh=new _c;function vo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new po(this),this.P=MA,t=ch?125:void 0,this.W=new gc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new oy}function oy(){this.i=null,this.g="",this.h=!1}var MA=45e3,Oh={},Ic={};H=vo.prototype;H.setTimeout=function(t){this.P=t};function Dh(t,e,n){t.K=1,t.v=Ac($n(e)),t.s=n,t.U=!0,ay(t,null)}function ay(t,e){t.F=Date.now(),wo(t),t.A=$n(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),gy(n.h,"t",r),t.C=0,n=t.l.H,t.h=new oy,t.g=Vy(t.l,n?e:null,!t.s),0<t.O&&(t.L=new OA(mt(t.Ia,t,t.g),t.O)),Jg(t.V,t.g,"readystatechange",t.gb),e=t.H?Lg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),mo(1),DA(t.j,t.u,t.A,t.m,t.X,t.s)}H.gb=function(t){t=t.target;const e=this.L;e&&Bn(t)==3?e.l():this.Ia(t)};H.Ia=function(t){try{if(t==this.g)e:{const l=Bn(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||ch||this.g&&(this.h.h||this.g.ga()||Cy(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?mo(3):mo(2)),Ec(this);var n=this.g.ba();this.N=n;t:if(cy(this)){var r=Cy(this.g);t="";var i=r.length,s=Bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Yr(this),_o(this);var o="";break t}this.h.i=new oe.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,PA(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!hc(a)){var u=a;break t}}u=null}if(n=u)Ji(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ph(this,n);else{this.i=!1,this.o=3,Lt(12),Yr(this),_o(this);break e}}this.U?(uy(this,l,o),ch&&this.i&&l==3&&(Jg(this.V,this.W,"tick",this.fb),this.W.start())):(Ji(this.j,this.m,o,null),Ph(this,o)),l==4&&Yr(this),this.i&&!this.I&&(l==4?Ly(this.l,this):(this.i=!1,wo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Lt(12)):(this.o=0,Lt(13)),Yr(this),_o(this)}}}catch(l){}finally{}};function cy(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function uy(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=FA(t,n),i==Ic){e==4&&(t.o=4,Lt(14),r=!1),Ji(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Oh){t.o=4,Lt(15),Ji(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ji(t.j,t.m,i,null),Ph(t,i);cy(t)&&i!=Ic&&i!=Oh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),zh(e),e.L=!0,Lt(11))):(Ji(t.j,t.m,n,"[Invalid Chunked Response]"),Yr(t),_o(t))}H.fb=function(){if(this.g){var t=Bn(this.g),e=this.g.ga();this.C<e.length&&(Ec(this),uy(this,t,e),this.i&&t!=4&&wo(this))}};function FA(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ic:(n=Number(e.substring(n,r)),isNaN(n)?Oh:(r+=1,r+n>e.length?Ic:(e=e.substr(r,n),t.C=r+n,e)))}H.cancel=function(){this.I=!0,Yr(this)};function wo(t){t.Y=Date.now()+t.P,ly(t,t.P)}function ly(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=go(mt(t.eb,t),e)}function Ec(t){t.B&&(oe.clearTimeout(t.B),t.B=null)}H.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(xA(this.j,this.A),this.K!=2&&(mo(3),Lt(17)),Yr(this),this.o=2,_o(this)):ly(this,this.Y-t)};function _o(t){t.l.G==0||t.I||Ly(t.l,t)}function Yr(t){Ec(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Sh(t.W),Xg(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ph(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Mh(n.i,t))){if(n.I=t.N,!t.J&&Mh(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Dc(n),kc(n);else break e;jh(n),Lt(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=go(mt(n.ab,n),6e3));if(1>=wy(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else Zr(n,11)}else if((t.J||n.g==t)&&Dc(n),!hc(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const l=u[3];l!=null&&(n.ma=l,n.h.info("VER="+n.ma));const h=u[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;!s.g&&(Pt(g,"spdy")||Pt(g,"quic")||Pt(g,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Fh(s,s.h),s.h=null))}if(r.D){const E=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.sa=E,Ve(r.F,r.D,E))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=Uy(r,r.H?r.la:null,r.W),o.J){_y(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ec(a),wo(a)),r.g=o}else Py(r);0<n.l.length&&Oc(n)}else u[0]!="stop"&&u[0]!="close"||Zr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Zr(n,7):Bh(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}mo(4)}catch(u){}}function UA(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(nh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function xh(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(nh(t)||typeof t=="string")kg(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(nh(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=UA(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Xi(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Xi)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}H=Xi.prototype;H.R=function(){Lh(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};H.T=function(){return Lh(this),this.g.concat()};function Lh(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Jr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Jr(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}H.get=function(t,e){return Jr(this.h,t)?this.h[t]:e};H.set=function(t,e){Jr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};H.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Jr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var hy=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function VA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Xr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Xr){this.g=e!==void 0?e:t.g,bc(this,t.j),this.s=t.s,Tc(this,t.i),Sc(this,t.m),this.l=t.l,e=t.h;var n=new bo;n.i=e.i,e.g&&(n.g=new Xi(e.g),n.h=e.h),dy(this,n),this.o=t.o}else t&&(n=String(t).match(hy))?(this.g=!!e,bc(this,n[1]||"",!0),this.s=Io(n[2]||""),Tc(this,n[3]||"",!0),Sc(this,n[4]),this.l=Io(n[5]||"",!0),dy(this,n[6]||"",!0),this.o=Io(n[7]||"")):(this.g=!!e,this.h=new bo(null,this.g))}Xr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Eo(e,fy,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Eo(e,fy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Eo(n,n.charAt(0)=="/"?zA:jA,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Eo(n,KA)),t.join("")};function $n(t){return new Xr(t)}function bc(t,e,n){t.j=n?Io(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Tc(t,e,n){t.i=n?Io(e,!0):e}function Sc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function dy(t,e,n){e instanceof bo?(t.h=e,WA(t.h,t.g)):(n||(e=Eo(e,HA)),t.h=new bo(e,t.g))}function Ve(t,e,n){t.h.set(e,n)}function Ac(t){return Ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $A(t){return t instanceof Xr?$n(t):new Xr(t,void 0)}function BA(t,e,n,r){var i=new Xr(null,void 0);return t&&bc(i,t),e&&Tc(i,e),n&&Sc(i,n),r&&(i.l=r),i}function Io(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Eo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,qA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var fy=/[#\/\?@]/g,jA=/[#\?:]/g,zA=/[#\?]/g,HA=/[#\?@]/g,KA=/#/g;function bo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function lr(t){t.g||(t.g=new Xi,t.h=0,t.i&&VA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}H=bo.prototype;H.add=function(t,e){lr(this),this.i=null,t=Zi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function py(t,e){lr(t),e=Zi(t,e),Jr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Jr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Lh(t)))}function my(t,e){return lr(t),e=Zi(t,e),Jr(t.g.h,e)}H.forEach=function(t,e){lr(this),this.g.forEach(function(n,r){kg(n,function(i){t.call(e,i,r,this)},this)},this)};H.T=function(){lr(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};H.R=function(t){lr(this);var e=[];if(typeof t=="string")my(this,t)&&(e=Og(e,this.g.get(Zi(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Og(e,t[n])}return e};H.set=function(t,e){return lr(this),this.i=null,t=Zi(this,t),my(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};H.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function gy(t,e,n){py(t,e),0<n.length&&(t.i=null,t.g.set(Zi(t,e),ih(n)),t.h+=n.length)}H.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Zi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function WA(t,e){e&&!t.j&&(lr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(py(this,r),gy(this,i,n))},t)),t.j=e}var GA=class{constructor(t,e){this.h=t,this.g=e}};function yy(t){this.l=t||QA,oe.PerformanceNavigationTiming?(t=oe.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(oe.g&&oe.g.Ea&&oe.g.Ea()&&oe.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QA=10;function vy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function wy(t){return t.h?1:t.g?t.g.size:0}function Mh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Fh(t,e){t.g?t.g.add(e):t.h=e}function _y(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}yy.prototype.cancel=function(){if(this.i=Iy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Iy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return ih(t.i)}function Uh(){}Uh.prototype.stringify=function(t){return oe.JSON.stringify(t,void 0)};Uh.prototype.parse=function(t){return oe.JSON.parse(t,void 0)};function YA(){this.g=new Uh}function JA(t,e,n){const r=n||"";try{xh(t,function(i,s){let o=i;lo(i)&&(o=Ih(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function XA(t,e){const n=new yc;if(oe.Image){const r=new Image;r.onload=lc(Nc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=lc(Nc,n,r,"TestLoadImage: error",!1,e),r.onabort=lc(Nc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=lc(Nc,n,r,"TestLoadImage: timeout",!1,e),oe.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Nc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function To(t){this.l=t.$b||null,this.j=t.ib||!1}gt(To,Nh);To.prototype.g=function(){return new Cc(this.l,this.j)};To.prototype.i=function(t){return function(){return t}}({});function Cc(t,e){it.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Vh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}gt(Cc,it);var Vh=0;H=Cc.prototype;H.open=function(t,e){if(this.readyState!=Vh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ao(this)};H.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||oe).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};H.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,So(this)),this.readyState=Vh};H.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ao(this)),this.g&&(this.readyState=3,Ao(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof oe.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ey(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function Ey(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}H.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?So(this):Ao(this),this.readyState==3&&Ey(this)}};H.Ua=function(t){this.g&&(this.response=this.responseText=t,So(this))};H.Ta=function(t){this.g&&(this.response=t,So(this))};H.ha=function(){this.g&&So(this)};function So(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ao(t)}H.setRequestHeader=function(t,e){this.v.append(t,e)};H.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};H.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ao(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Cc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ZA=oe.JSON.parse;function Ke(t){it.call(this),this.headers=new Xi,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=by,this.K=this.L=!1}gt(Ke,it);var by="",eN=/^https?$/i,tN=["POST","PUT"];H=Ke.prototype;H.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():kh.g(),this.C=this.u?iy(this.u):iy(kh),this.g.onreadystatechange=mt(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Ty(this,s);return}t=n||"";const i=new Xi(this.headers);r&&xh(r,function(s,o){i.set(o,s)}),r=dA(i.T()),n=oe.FormData&&t instanceof oe.FormData,!(0<=Rg(tN,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ny(this),0<this.B&&((this.K=nN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=mt(this.pa,this)):this.A=Ah(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ty(this,s)}};function nN(t){return Yi&&yA()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function rN(t){return t.toLowerCase()=="content-type"}H.pa=function(){typeof th!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,yt(this,"timeout"),this.abort(8))};function Ty(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Sy(t),Rc(t)}function Sy(t){t.D||(t.D=!0,yt(t,"complete"),yt(t,"error"))}H.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,yt(this,"complete"),yt(this,"abort"),Rc(this))};H.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rc(this,!0)),Ke.Z.M.call(this)};H.Fa=function(){this.s||(this.F||this.v||this.l?Ay(this):this.cb())};H.cb=function(){Ay(this)};function Ay(t){if(t.h&&typeof th!="undefined"&&(!t.C[1]||Bn(t)!=4||t.ba()!=2)){if(t.v&&Bn(t)==4)Ah(t.Fa,0,t);else if(yt(t,"readystatechange"),Bn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(hy)[1]||null;if(!i&&oe.self&&oe.self.location){var s=oe.self.location.protocol;i=s.substr(0,s.length-1)}r=!eN.test(i?i.toLowerCase():"")}n=r}if(n)yt(t,"complete"),yt(t,"success");else{t.m=6;try{var o=2<Bn(t)?t.g.statusText:""}catch(c){o=""}t.j=o+" ["+t.ba()+"]",Sy(t)}}finally{Rc(t)}}}}function Rc(t,e){if(t.g){Ny(t);const n=t.g,r=t.C[0]?uc:null;t.g=null,t.C=null,e||yt(t,"ready");try{n.onreadystatechange=r}catch(i){}}}function Ny(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(oe.clearTimeout(t.A),t.A=null)}function Bn(t){return t.g?t.g.readyState:0}H.ba=function(){try{return 2<Bn(this)?this.g.status:-1}catch(t){return-1}};H.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}};H.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ZA(e)}};function Cy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case by:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}H.Da=function(){return this.m};H.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function iN(t){let e="";return oh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function $h(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=iN(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ve(t,e,n))}function No(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ry(t){this.za=0,this.l=[],this.h=new yc,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=No("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=No("baseRetryDelayMs",5e3,t),this.$a=No("retryDelaySeedMs",1e4,t),this.Ya=No("forwardChannelMaxRetries",2,t),this.ra=No("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new yy(t&&t.concurrentRequestLimit),this.Ca=new YA,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}H=Ry.prototype;H.ma=8;H.G=1;function Bh(t){if(ky(t),t.G==3){var e=t.V++,n=$n(t.F);Ve(n,"SID",t.J),Ve(n,"RID",e),Ve(n,"TYPE","terminate"),Co(t,n),e=new vo(t,t.h,e,void 0),e.K=2,e.v=Ac($n(n)),n=!1,oe.navigator&&oe.navigator.sendBeacon&&(n=oe.navigator.sendBeacon(e.v.toString(),"")),!n&&oe.Image&&(new Image().src=e.v,n=!0),n||(e.g=Vy(e.l,null),e.g.ea(e.v)),e.F=Date.now(),wo(e)}Fy(t)}H.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}};function kc(t){t.g&&(zh(t),t.g.cancel(),t.g=null)}function ky(t){kc(t),t.u&&(oe.clearTimeout(t.u),t.u=null),Dc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&oe.clearTimeout(t.m),t.m=null)}function qh(t,e){t.l.push(new GA(t.Za++,e)),t.G==3&&Oc(t)}function Oc(t){vy(t.i)||t.m||(t.m=!0,Eh(t.Ha,t),t.C=0)}function sN(t,e){return wy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=go(mt(t.Ha,t,e),My(t,t.C)),t.C++,!0)}H.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new vo(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=Lg(s),Fg(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Dy(this,i,e),n=$n(this.F),Ve(n,"RID",t),Ve(n,"CVER",22),this.D&&Ve(n,"X-HTTP-Session-Id",this.D),Co(this,n),this.o&&s&&$h(n,this.o,s),Fh(this.i,i),this.Ra&&Ve(n,"TYPE","init"),this.ja?(Ve(n,"$req",e),Ve(n,"SID","null"),i.$=!0,Dh(i,n,null)):Dh(i,n,e),this.G=2}}else this.G==3&&(t?Oy(this,t):this.l.length==0||vy(this.i)||Oy(this))};function Oy(t,e){var n;e?n=e.m:n=t.V++;const r=$n(t.F);Ve(r,"SID",t.J),Ve(r,"RID",n),Ve(r,"AID",t.U),Co(t,r),t.o&&t.s&&$h(r,t.o,t.s),n=new vo(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Dy(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Fh(t.i,n),Dh(n,r,e)}function Co(t,e){t.j&&xh({},function(n,r){Ve(e,r,n)})}function Dy(t,e,n){n=Math.min(t.l.length,n);var r=t.j?mt(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let u=i[c].h;const l=i[c].g;if(u-=s,0>u)s=Math.max(0,i[c].h-100),a=!1;else try{JA(l,o,"req"+u+"_")}catch(h){r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function Py(t){t.g||t.u||(t.Y=1,Eh(t.Ga,t),t.A=0)}function jh(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=go(mt(t.Ga,t),My(t,t.A)),t.A++,!0)}H.Ga=function(){if(this.u=null,xy(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=go(mt(this.bb,this),t)}};H.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Lt(10),kc(this),xy(this))};function zh(t){t.B!=null&&(oe.clearTimeout(t.B),t.B=null)}function xy(t){t.g=new vo(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=$n(t.oa);Ve(e,"RID","rpc"),Ve(e,"SID",t.J),Ve(e,"CI",t.N?"0":"1"),Ve(e,"AID",t.U),Co(t,e),Ve(e,"TYPE","xmlhttp"),t.o&&t.s&&$h(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ac($n(e)),n.s=null,n.U=!0,ay(n,t)}H.ab=function(){this.v!=null&&(this.v=null,kc(this),jh(this),Lt(19))};function Dc(t){t.v!=null&&(oe.clearTimeout(t.v),t.v=null)}function Ly(t,e){var n=null;if(t.g==e){Dc(t),zh(t),t.g=null;var r=2}else if(Mh(t.i,e))n=e.D,_y(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=vc(),yt(r,new ny(r,n,e,i)),Oc(t)}else Py(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&sN(t,e)||r==2&&jh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Zr(t,5);break;case 4:Zr(t,10);break;case 3:Zr(t,6);break;default:Zr(t,2)}}}function My(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Zr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=mt(t.jb,t);n||(n=new Xr("//www.google.com/images/cleardot.gif"),oe.location&&oe.location.protocol=="http"||bc(n,"https"),Ac(n)),XA(n.toString(),r)}else Lt(2);t.G=0,t.j&&t.j.va(e),Fy(t),ky(t)}H.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Lt(2)):(this.h.info("Failed to ping google.com"),Lt(1))};function Fy(t){t.G=0,t.I=-1,t.j&&((Iy(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,ih(t.l),t.l.length=0),t.j.ua())}function Uy(t,e,n){let r=$A(n);if(r.i!="")e&&Tc(r,e+"."+r.i),Sc(r,r.m);else{const i=oe.location;r=BA(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&oh(t.aa,function(i,s){Ve(r,s,i)}),e=t.D,n=t.sa,e&&n&&Ve(r,e,n),Ve(r,"VER",t.ma),Co(t,r),r}function Vy(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ke(new To({ib:!0})):new Ke(t.qa),e.L=t.H,e}function $y(){}H=$y.prototype;H.xa=function(){};H.wa=function(){};H.va=function(){};H.ua=function(){};H.Oa=function(){};function Pc(){if(Yi&&!(10<=Number(vA)))throw Error("Environmental error: no available transport.")}Pc.prototype.g=function(t,e){return new Wt(t,e)};function Wt(t,e){it.call(this),this.g=new Ry(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!hc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!hc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new es(this)}gt(Wt,it);Wt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Eh(mt(t.hb,t,e))),Lt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Uy(t,null,t.W),Oc(t)};Wt.prototype.close=function(){Bh(this.g)};Wt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,qh(this.g,e)}else this.v?(e={},e.__data__=Ih(t),qh(this.g,e)):qh(this.g,t)};Wt.prototype.M=function(){this.g.j=null,delete this.j,Bh(this.g),delete this.g,Wt.Z.M.call(this)};function By(t){Ch.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}gt(By,Ch);function qy(){Rh.call(this),this.status=1}gt(qy,Rh);function es(t){this.g=t}gt(es,$y);es.prototype.xa=function(){yt(this.g,"a")};es.prototype.wa=function(t){yt(this.g,new By(t))};es.prototype.va=function(t){yt(this.g,new qy(t))};es.prototype.ua=function(){yt(this.g,"b")};Pc.prototype.createWebChannel=Pc.prototype.g;Wt.prototype.send=Wt.prototype.u;Wt.prototype.open=Wt.prototype.m;Wt.prototype.close=Wt.prototype.close;wc.NO_ERROR=0;wc.TIMEOUT=8;wc.HTTP_ERROR=6;ry.COMPLETE="complete";sy.EventType=yo;yo.OPEN="a";yo.CLOSE="b";yo.ERROR="c";yo.MESSAGE="d";it.prototype.listen=it.prototype.N;Ke.prototype.listenOnce=Ke.prototype.O;Ke.prototype.getLastError=Ke.prototype.La;Ke.prototype.getLastErrorCode=Ke.prototype.Da;Ke.prototype.getStatus=Ke.prototype.ba;Ke.prototype.getResponseJson=Ke.prototype.Qa;Ke.prototype.getResponseText=Ke.prototype.ga;Ke.prototype.send=Ke.prototype.ea;var oN=function(){return new Pc},aN=function(){return vc()},Hh=wc,cN=ry,uN=Qr,jy={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},lN=To,xc=sy,hN=Ke;/**
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
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
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
 */let ts="9.1.0";/**
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
 */const hr=new ac("@firebase/firestore");function Kh(){return hr.logLevel}function dN(t){hr.setLogLevel(t)}function x(t,...e){if(hr.logLevel<=Ee.DEBUG){const n=e.map(Wh);hr.debug(`Firestore (${ts}): ${t}`,...n)}}function We(t,...e){if(hr.logLevel<=Ee.ERROR){const n=e.map(Wh);hr.error(`Firestore (${ts}): ${t}`,...n)}}function Ro(t,...e){if(hr.logLevel<=Ee.WARN){const n=e.map(Wh);hr.warn(`Firestore (${ts}): ${t}`,...n)}}function Wh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch(n){return t}/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${ts}) INTERNAL ASSERTION FAILED: `+t;throw We(e),new Error(e)}function se(t,e){t||X()}function fN(t,e){t||X()}function $(t,e){return t}/**
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
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends Error{constructor(e,n){super(n),this.code=e,this.message=n,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class st{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class zy{constructor(e,n){this.user=n,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class pN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class mN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gN{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new st;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new st,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{x("FirebaseCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(x("FirebaseCredentialsProvider","Auth not yet detected"),s.resolve(),s=new st)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(x("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string"),new zy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string"),new vt(e)}}class yN{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=vt.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},n=this.h.auth.getAuthHeaderValueForFirstParty([]);return n&&(e.Authorization=n),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class vN{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new yN(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}/**
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
 */class Gt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.g(r),this.p=r=>n.writeSequenceNumber(r))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}/**
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
 */function wN(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */Gt.T=-1;class Hy{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=wN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function ns(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function Ky(t){return t+"\0"}/**
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
 */class ot{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new R(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new R(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new R(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ot(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new ot(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function Wy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ei(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ko{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ko.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ko?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ae extends ko{construct(e,n,r){return new Ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new R(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ae(n)}static emptyPath(){return new Ae([])}}const _N=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends ko{construct(e,n,r){return new wt(e,n,r)}static isValidIdentifier(e){return _N.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new wt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new R(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new R(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new R(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new R(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
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
 */class rs{constructor(e){this.fields=e,e.sort(wt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */function IN(){return typeof atob!="undefined"}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new at(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new at(n)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const EN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function dr(t){if(se(!!t),typeof t=="string"){let e=0;const n=EN.exec(t);if(se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function is(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */function Gh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Qy(t){const e=t.mapValue.fields.__previous_value__;return Gh(e)?Qy(e):e}function Oo(t){const e=dr(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
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
 */function ti(t){return t==null}function Lc(t){return t===0&&1/t==-1/0}function Yy(t){return typeof t=="number"&&Number.isInteger(t)&&!Lc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ae.fromString(e))}static fromName(e){return new Y(Ae.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&Ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ae(e.slice()))}}/**
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
 */function ni(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gh(t)?4:10:X()}function bn(t,e){const n=ni(t);if(n!==ni(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oo(t).isEqual(Oo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=dr(r.timestampValue),o=dr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return is(r.bytesValue).isEqual(is(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ge(r.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(r.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ge(r.integerValue)===Ge(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ge(r.doubleValue),o=Ge(i.doubleValue);return s===o?Lc(s)===Lc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ns(t.arrayValue.values||[],e.arrayValue.values||[],bn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Wy(s)!==Wy(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!bn(s[a],o[a])))return!1;return!0}(t,e);default:return X()}}function Do(t,e){return(t.values||[]).find(n=>bn(n,e))!==void 0}function ss(t,e){const n=ni(t),r=ni(e);if(n!==r)return pe(n,r);switch(n){case 0:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ge(i.integerValue||i.doubleValue),a=Ge(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Jy(t.timestampValue,e.timestampValue);case 4:return Jy(Oo(t),Oo(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(i,s){const o=is(i),a=is(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=pe(o[c],a[c]);if(u!==0)return u}return pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=pe(Ge(i.latitude),Ge(s.latitude));return o!==0?o:pe(Ge(i.longitude),Ge(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=ss(o[c],a[c]);if(u)return u}return pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),c=s.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=pe(a[l],u[l]);if(h!==0)return h;const d=ss(o[a[l]],c[u[l]]);if(d!==0)return d}return pe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw X()}}function Jy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=dr(t),r=dr(e),i=pe(n.seconds,r.seconds);return i!==0?i:pe(n.nanos,r.nanos)}function Qh(t){return Yh(t)}function Yh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=dr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?is(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Y.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Yh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Yh(r.fields[a])}`;return s+"}"}(t.mapValue):X();var e,n}function Mc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Jh(t){return!!t&&"integerValue"in t}function Xh(t){return!!t&&"arrayValue"in t}function Xy(t){return!!t&&"nullValue"in t}function Zy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fc(t){return!!t&&"mapValue"in t}function Po(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ei(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Po(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Po(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
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
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Po(n)}setAll(e){let n=wt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Po(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ei(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new At(Po(this.value))}}function ev(t){const e=[];return ei(t.fields,(n,r)=>{const i=new wt([n]);if(Fc(r)){const s=ev(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new rs(e)}/**
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
 */class $e{constructor(e,n,r,i,s){this.key=e,this.documentType=n,this.version=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new $e(e,0,le.min(),At.empty(),0)}static newFoundDocument(e,n,r){return new $e(e,1,n,r,0)}static newNoDocument(e,n){return new $e(e,2,n,At.empty(),0)}static newUnknownDocument(e,n){return new $e(e,3,n,At.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new $e(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.A=null}}function tv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new bN(t,e,n,r,i,s,o)}function xo(t){const e=$(t);if(e.A===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>SN(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ti(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=$c(e.startAt)),e.endAt&&(n+="|ub:",n+=$c(e.endAt)),e.A=n}return e.A}function TN(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Qh(r.value)}`;var r}).join(", ")}]`),ti(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+$c(t.startAt)),t.endAt&&(e+=", endAt: "+$c(t.endAt)),`Target(${e})`}function Uc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!PN(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!bn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!iv(t.startAt,e.startAt)&&iv(t.endAt,e.endAt)}function Vc(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Mt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.R(e,n,r):new AN(e,n,r):n==="array-contains"?new RN(e,r):n==="in"?new kN(e,r):n==="not-in"?new ON(e,r):n==="array-contains-any"?new DN(e,r):new Mt(e,n,r)}static R(e,n,r){return n==="in"?new NN(e,r):new CN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.P(ss(n,this.value)):n!==null&&ni(this.value)===ni(n)&&this.P(ss(n,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function SN(t){return t.field.canonicalString()+t.op.toString()+Qh(t.value)}class AN extends Mt{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.P(n)}}class NN extends Mt{constructor(e,n){super(e,"in",n),this.keys=nv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class CN extends Mt{constructor(e,n){super(e,"not-in",n),this.keys=nv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class RN extends Mt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xh(n)&&Do(n.arrayValue,this.value)}}class kN extends Mt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Do(this.value.arrayValue,n)}}class ON extends Mt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Do(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Do(this.value.arrayValue,n)}}class DN extends Mt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Do(this.value.arrayValue,r))}}class Lo{constructor(e,n){this.position=e,this.before=n}}function $c(t){return`${t.before?"b":"a"}:${t.position.map(e=>Qh(e)).join(",")}`}class os{constructor(e,n="asc"){this.field=e,this.dir=n}}function PN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function rv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=ss(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function iv(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class qn{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.V=null,this.S=null,this.startAt,this.endAt}}function sv(t,e,n,r,i,s,o,a){return new qn(t,e,n,r,i,s,o,a)}function as(t){return new qn(t)}function Bc(t){return!ti(t.limit)&&t.limitType==="F"}function qc(t){return!ti(t.limit)&&t.limitType==="L"}function Zh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ed(t){for(const e of t.filters)if(e.v())return e.field;return null}function td(t){return t.collectionGroup!==null}function cs(t){const e=$(t);if(e.V===null){e.V=[];const n=ed(e),r=Zh(e);if(n!==null&&r===null)n.isKeyField()||e.V.push(new os(n)),e.V.push(new os(wt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.V.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new os(wt.keyField(),s))}}}return e.V}function on(t){const e=$(t);if(!e.S)if(e.limitType==="F")e.S=tv(e.path,e.collectionGroup,cs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of cs(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new os(s.field,o))}const r=e.endAt?new Lo(e.endAt.position,!e.endAt.before):null,i=e.startAt?new Lo(e.startAt.position,!e.startAt.before):null;e.S=tv(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.S}function ov(t,e,n){return new qn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mo(t,e){return Uc(on(t),on(e))&&t.limitType===e.limitType}function av(t){return`${xo(on(t))}|lt:${t.limitType}`}function nd(t){return`Query(target=${TN(on(t))}; limitType=${t.limitType})`}function Fo(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Y.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!rv(n.startAt,cs(n),r)||n.endAt&&rv(n.endAt,cs(n),r))}(t,e)}function cv(t){return(e,n)=>{let r=!1;for(const i of cs(t)){const s=xN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function xN(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),c=o.data.field(i);return a!==null&&c!==null?ss(a,c):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */function uv(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lc(e)?"-0":e}}function lv(t){return{integerValue:""+t}}function hv(t,e){return Yy(e)?lv(e):uv(t,e)}/**
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
 */class jc{constructor(){this._=void 0}}function LN(t,e,n){return t instanceof us?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ri?fv(t,e):t instanceof ii?pv(t,e):function(r,i){const s=dv(r,i),o=mv(s)+mv(r.C);return Jh(s)&&Jh(r.C)?lv(o):uv(r.N,o)}(t,e)}function MN(t,e,n){return t instanceof ri?fv(t,e):t instanceof ii?pv(t,e):n}function dv(t,e){return t instanceof ls?Jh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class us extends jc{}class ri extends jc{constructor(e){super(),this.elements=e}}function fv(t,e){const n=gv(e);for(const r of t.elements)n.some(i=>bn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ii extends jc{constructor(e){super(),this.elements=e}}function pv(t,e){let n=gv(e);for(const r of t.elements)n=n.filter(i=>!bn(i,r));return{arrayValue:{values:n}}}class ls extends jc{constructor(e,n){super(),this.N=e,this.C=n}}function mv(t){return Ge(t.integerValue||t.doubleValue)}function gv(t){return Xh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Uo{constructor(e,n){this.field=e,this.transform=n}}function FN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ri&&r instanceof ri||n instanceof ii&&r instanceof ii?ns(n.elements,r.elements,bn):n instanceof ls&&r instanceof ls?bn(n.C,r.C):n instanceof us&&r instanceof us}(t.transform,e.transform)}class UN{constructor(e,n){this.version=e,this.transformResults=n}}class Qe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qe}static exists(e){return new Qe(void 0,e)}static updateTime(e){return new Qe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Hc{}function VN(t,e,n){t instanceof Vo?function(r,i,s){const o=r.value.clone(),a=_v(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof fr?function(r,i,s){if(!zc(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=_v(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(wv(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function rd(t,e,n){t instanceof Vo?function(r,i,s){if(!zc(r.precondition,i))return;const o=r.value.clone(),a=Iv(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(vv(i),o).setHasLocalMutations()}(t,e,n):t instanceof fr?function(r,i,s){if(!zc(r.precondition,i))return;const o=Iv(r.fieldTransforms,s,i),a=i.data;a.setAll(wv(r)),a.setAll(o),i.convertToFoundDocument(vv(i),a).setHasLocalMutations()}(t,e,n):function(r,i){zc(r.precondition,i)&&i.convertToNoDocument(le.min())}(t,e)}function $N(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=dv(r.transform,i||null);s!=null&&(n==null&&(n=At.empty()),n.set(r.field,s))}return n||null}function yv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ns(n,r,(i,s)=>FN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function vv(t){return t.isFoundDocument()?t.version:le.min()}class Vo extends Hc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class fr extends Hc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function wv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _v(t,e,n){const r=new Map;se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,MN(o,a,n[i]))}return r}function Iv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,LN(s,o,e))}return r}class $o extends Hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class id extends Hc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
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
 */class BN{constructor(e){this.count=e}}/**
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
 */var Ye,ve;function Ev(t){switch(t){case v.OK:return X();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0;default:return X()}}function bv(t){if(t===void 0)return We("GRPC error has no .code"),v.UNKNOWN;switch(t){case Ye.OK:return v.OK;case Ye.CANCELLED:return v.CANCELLED;case Ye.UNKNOWN:return v.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return v.INTERNAL;case Ye.UNAVAILABLE:return v.UNAVAILABLE;case Ye.UNAUTHENTICATED:return v.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case Ye.NOT_FOUND:return v.NOT_FOUND;case Ye.ALREADY_EXISTS:return v.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return v.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case Ye.ABORTED:return v.ABORTED;case Ye.OUT_OF_RANGE:return v.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return v.UNIMPLEMENTED;case Ye.DATA_LOSS:return v.DATA_LOSS;default:return X()}}(ve=Ye||(Ye={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ze{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new Ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Kc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Kc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Kc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Kc(this.root,e,this.comparator,!0)}}class Kc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:_t.RED,this.left=i!=null?i:_t.EMPTY,this.right=s!=null?s:_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new _t(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return _t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(t,e,n,r,i){return this}insert(t,e,n){return new _t(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Be{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tv(this.data.getIterator())}getIteratorFrom(e){return new Tv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class Tv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */const qN=new Ze(Y.comparator);function an(){return qN}const jN=new Ze(Y.comparator);function sd(){return jN}const zN=new Ze(Y.comparator);function Sv(){return zN}const HN=new Be(Y.comparator);function Ce(...t){let e=HN;for(const n of t)e=e.add(n);return e}const KN=new Be(pe);function Wc(){return KN}/**
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
 */class Bo{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,qo.createSynthesizedTargetChangeForCurrentChange(e,n)),new Bo(le.min(),r,Wc(),an(),Ce())}}class qo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new qo(at.EMPTY_BYTE_STRING,n,Ce(),Ce(),Ce())}}/**
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
 */class Gc{constructor(e,n,r,i){this.k=e,this.removedTargetIds=n,this.key=r,this.$=i}}class Av{constructor(e,n){this.targetId=e,this.O=n}}class Nv{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Cv{constructor(){this.F=0,this.M=kv(),this.L=at.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return this.F!==0}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=Ce(),n=Ce(),r=Ce();return this.M.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:X()}}),new qo(this.L,this.B,e,n,r)}G(){this.U=!1,this.M=kv()}H(e,n){this.U=!0,this.M=this.M.insert(e,n)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class WN{constructor(e){this.tt=e,this.et=new Map,this.nt=an(),this.st=Rv(),this.it=new Be(pe)}rt(e){for(const n of e.k)e.$&&e.$.isFoundDocument()?this.ot(n,e.$):this.at(n,e.key,e.$);for(const n of e.removedTargetIds)this.at(n,e.key,e.$)}ct(e){this.forEachTarget(e,n=>{const r=this.ut(n);switch(e.state){case 0:this.ht(n)&&r.j(e.resumeToken);break;case 1:r.X(),r.q||r.G(),r.j(e.resumeToken);break;case 2:r.X(),r.q||this.removeTarget(n);break;case 3:this.ht(n)&&(r.Z(),r.j(e.resumeToken));break;case 4:this.ht(n)&&(this.lt(n),r.j(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.et.forEach((r,i)=>{this.ht(i)&&n(i)})}ft(e){const n=e.targetId,r=e.O.count,i=this.dt(n);if(i){const s=i.target;if(Vc(s))if(r===0){const o=new Y(s.path);this.at(n,o,$e.newNoDocument(o,le.min()))}else se(r===1);else this.wt(n)!==r&&(this.lt(n),this.it=this.it.add(n))}}_t(e){const n=new Map;this.et.forEach((s,o)=>{const a=this.dt(o);if(a){if(s.current&&Vc(a.target)){const c=new Y(a.target.path);this.nt.get(c)!==null||this.gt(o,c)||this.at(o,c,$e.newNoDocument(c,e))}s.K&&(n.set(o,s.W()),s.G())}});let r=Ce();this.st.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.dt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))});const i=new Bo(e,n,this.it,this.nt,r);return this.nt=an(),this.st=Rv(),this.it=new Be(pe),i}ot(e,n){if(!this.ht(e))return;const r=this.gt(e,n.key)?2:0;this.ut(e).H(n.key,r),this.nt=this.nt.insert(n.key,n),this.st=this.st.insert(n.key,this.yt(n.key).add(e))}at(e,n,r){if(!this.ht(e))return;const i=this.ut(e);this.gt(e,n)?i.H(n,1):i.J(n),this.st=this.st.insert(n,this.yt(n).delete(e)),r&&(this.nt=this.nt.insert(n,r))}removeTarget(e){this.et.delete(e)}wt(e){const n=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let n=this.et.get(e);return n||(n=new Cv,this.et.set(e,n)),n}yt(e){let n=this.st.get(e);return n||(n=new Be(pe),this.st=this.st.insert(e,n)),n}ht(e){const n=this.dt(e)!==null;return n||x("WatchChangeAggregator","Detected inactive target",e),n}dt(e){const n=this.et.get(e);return n&&n.q?null:this.tt.Et(e)}lt(e){this.et.set(e,new Cv),this.tt.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}gt(e,n){return this.tt.getRemoteKeysForTarget(e).has(n)}}function Rv(){return new Ze(Y.comparator)}function kv(){return new Ze(Y.comparator)}/**
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
 */const GN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),QN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class YN{constructor(e,n){this.databaseId=e,this.D=n}}function jo(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ov(t,e){return t.D?e.toBase64():e.toUint8Array()}function JN(t,e){return jo(t,e.toTimestamp())}function ct(t){return se(!!t),le.fromTimestamp(function(e){const n=dr(e);return new ot(n.seconds,n.nanos)}(t))}function od(t,e){return function(n){return new Ae(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Dv(t){const e=Ae.fromString(t);return se(zv(e)),e}function zo(t,e){return od(t.databaseId,e.path)}function Tn(t,e){const n=Dv(e);if(n.get(1)!==t.databaseId.projectId)throw new R(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new R(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(xv(n))}function ad(t,e){return od(t.databaseId,e)}function Pv(t){const e=Dv(t);return e.length===4?Ae.emptyPath():xv(e)}function Ho(t){return new Ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xv(t){return se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lv(t,e,n){return{name:zo(t,e),fields:n.value.mapValue.fields}}function Mv(t,e,n){const r=Tn(t,e.name),i=ct(e.updateTime),s=new At({mapValue:{fields:e.fields}}),o=$e.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function XN(t,e){return"found"in e?function(n,r){se(!!r.found),r.found.name,r.found.updateTime;const i=Tn(n,r.found.name),s=ct(r.found.updateTime),o=new At({mapValue:{fields:r.found.fields}});return $e.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){se(!!r.missing),se(!!r.readTime);const i=Tn(n,r.missing),s=ct(r.readTime);return $e.newNoDocument(i,s)}(t,e):X()}function ZN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.D?(se(u===void 0||typeof u=="string"),at.fromBase64String(u||"")):(se(u===void 0||u instanceof Uint8Array),at.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?v.UNKNOWN:bv(c.code);return new R(u,c.message||"")}(o);n=new Nv(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Tn(t,r.document.name),s=ct(r.document.updateTime),o=new At({mapValue:{fields:r.document.fields}}),a=$e.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Gc(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Tn(t,r.document),s=r.readTime?ct(r.readTime):le.min(),o=$e.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Gc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Tn(t,r.document),s=r.removedTargetIds||[];n=new Gc([],s,i,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new BN(i),o=r.targetId;n=new Av(o,s)}}return n}function Qc(t,e){let n;if(e instanceof Vo)n={update:Lv(t,e.key,e.value)};else if(e instanceof $o)n={delete:zo(t,e.key)};else if(e instanceof fr)n={update:Lv(t,e.key,e.data),updateMask:oC(e.fieldMask)};else{if(!(e instanceof id))return X();n={verify:zo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof us)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ri)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ii)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ls)return{fieldPath:s.field.canonicalString(),increment:o.C};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:JN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X()}(t,e.precondition)),n}function Fv(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Qe.updateTime(ct(i.updateTime)):i.exists!==void 0?Qe.exists(i.exists):Qe.none()}(e.currentDocument):Qe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)se(o.setToServerValue==="REQUEST_TIME"),a=new us;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new ri(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new ii(u)}else"increment"in o?a=new ls(s,o.increment):X();const c=wt.fromServerFormat(o.fieldPath);return new Uo(c,a)}(t,i)):[];if(e.update){e.update.name;const i=Tn(t,e.update.name),s=new At({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new rs(c.map(u=>wt.fromServerFormat(u)))}(e.updateMask);return new fr(i,s,o,n,r)}return new Vo(i,s,n,r)}if(e.delete){const i=Tn(t,e.delete);return new $o(i,n)}if(e.verify){const i=Tn(t,e.verify);return new id(i,n)}return X()}function eC(t,e){return t&&t.length>0?(se(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?ct(r.updateTime):ct(i);return s.isEqual(le.min())&&(s=ct(i)),new UN(s,r.transformResults||[])}(n,e))):[]}function Uv(t,e){return{documents:[ad(t,e.path)]}}function Vv(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ad(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ad(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const c=a.map(u=>function(l){if(l.op==="=="){if(Zy(l.value))return{unaryFilter:{field:hs(l.field),op:"IS_NAN"}};if(Xy(l.value))return{unaryFilter:{field:hs(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Zy(l.value))return{unaryFilter:{field:hs(l.field),op:"IS_NOT_NAN"}};if(Xy(l.value))return{unaryFilter:{field:hs(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hs(l.field),op:rC(l.op),value:l.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(c=>function(u){return{field:hs(u.field),direction:nC(u.dir)}}(c))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,c){return a.D||ti(c)?c:{value:c}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=qv(e.startAt)),e.endAt&&(n.structuredQuery.endAt=qv(e.endAt)),n}function $v(t){let e=Pv(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){se(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=Bv(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new os(ds(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,ti(h)?null:h}(n.limit));let c=null;n.startAt&&(c=jv(n.startAt));let u=null;return n.endAt&&(u=jv(n.endAt)),sv(e,i,o,s,a,"F",c,u)}function tC(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return X()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Bv(t){return t?t.unaryFilter!==void 0?[sC(t)]:t.fieldFilter!==void 0?[iC(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Bv(e)).reduce((e,n)=>e.concat(n)):X():[]}function qv(t){return{before:t.before,values:t.position}}function jv(t){const e=!!t.before,n=t.values||[];return new Lo(n,e)}function nC(t){return GN[t]}function rC(t){return QN[t]}function hs(t){return{fieldPath:t.canonicalString()}}function ds(t){return wt.fromServerFormat(t.fieldPath)}function iC(t){return Mt.create(ds(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return X()}}(t.fieldFilter.op),t.fieldFilter.value)}function sC(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ds(t.unaryFilter.field);return Mt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ds(t.unaryFilter.field);return Mt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ds(t.unaryFilter.field);return Mt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ds(t.unaryFilter.field);return Mt.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return X()}}function oC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function fn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Hv(e)),e=aC(t.get(n),e);return Hv(e)}function aC(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Hv(t){return t+""}function jn(t){const e=t.length;if(se(e>=2),e===2)return se(t.charAt(0)===""&&t.charAt(1)===""),Ae.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&X(),t.charAt(o+1)){case"":const a=t.substring(s,o);let c;i.length===0?c=a:(i+=a,c=i,i=""),r.push(c);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:X()}s=o+2}return new Ae(r)}/**
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
 */class cC{constructor(e,n){this.seconds=e,this.nanoseconds=n}}class Qt{constructor(e,n,r){this.ownerId=e,this.allowTabSynchronization=n,this.leaseTimestampMs=r}}Qt.store="owner",Qt.key="owner";class pr{constructor(e,n,r){this.userId=e,this.lastAcknowledgedBatchId=n,this.lastStreamToken=r}}pr.store="mutationQueues",pr.keyPath="userId";class Le{constructor(e,n,r,i,s){this.userId=e,this.batchId=n,this.localWriteTimeMs=r,this.baseMutations=i,this.mutations=s}}Le.store="mutations",Le.keyPath="batchId",Le.userMutationsIndex="userMutationsIndex",Le.userMutationsKeyPath=["userId","batchId"];class Nt{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,n){return[e,fn(n)]}static key(e,n,r){return[e,fn(n),r]}}Nt.store="documentMutations",Nt.PLACEHOLDER=new Nt;class uC{constructor(e,n){this.path=e,this.readTime=n}}class lC{constructor(e,n){this.path=e,this.version=n}}class qe{constructor(e,n,r,i,s,o){this.unknownDocument=e,this.noDocument=n,this.document=r,this.hasCommittedMutations=i,this.readTime=s,this.parentPath=o}}qe.store="remoteDocuments",qe.readTimeIndex="readTimeIndex",qe.readTimeIndexPath="readTime",qe.collectionReadTimeIndex="collectionReadTimeIndex",qe.collectionReadTimeIndexPath=["parentPath","readTime"];class Sn{constructor(e){this.byteSize=e}}Sn.store="remoteDocumentGlobal",Sn.key="remoteDocumentGlobalKey";class Vt{constructor(e,n,r,i,s,o,a){this.targetId=e,this.canonicalId=n,this.readTime=r,this.resumeToken=i,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=o,this.query=a}}Vt.store="targets",Vt.keyPath="targetId",Vt.queryTargetsIndexName="queryTargetsIndex",Vt.queryTargetsKeyPath=["canonicalId","targetId"];class It{constructor(e,n,r){this.targetId=e,this.path=n,this.sequenceNumber=r}}It.store="targetDocuments",It.keyPath=["targetId","path"],It.documentTargetsIndex="documentTargetsIndex",It.documentTargetsKeyPath=["path","targetId"];class Yt{constructor(e,n,r,i){this.highestTargetId=e,this.highestListenSequenceNumber=n,this.lastRemoteSnapshotVersion=r,this.targetCount=i}}Yt.key="targetGlobalKey",Yt.store="targetGlobal";class si{constructor(e,n){this.collectionId=e,this.parent=n}}si.store="collectionParents",si.keyPath=["collectionId","parent"];class zn{constructor(e,n,r,i){this.clientId=e,this.updateTimeMs=n,this.networkEnabled=r,this.inForeground=i}}zn.store="clientMetadata",zn.keyPath="clientId";class fs{constructor(e,n,r){this.bundleId=e,this.createTime=n,this.version=r}}fs.store="bundles",fs.keyPath="bundleId";class ps{constructor(e,n,r){this.name=e,this.readTime=n,this.bundledQuery=r}}ps.store="namedQueries",ps.keyPath="name";const hC=[pr.store,Le.store,Nt.store,qe.store,Vt.store,Qt.store,Yt.store,It.store,zn.store,Sn.store,si.store,fs.store,ps.store],Kv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Wv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}/**
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
 */class Yc{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.Tt=new st,this.transaction.oncomplete=()=>{this.Tt.resolve()},this.transaction.onabort=()=>{n.error?this.Tt.reject(new Ko(e,n.error)):this.Tt.resolve()},this.transaction.onerror=r=>{const i=cd(r.target.error);this.Tt.reject(new Ko(e,i))}}static open(e,n,r,i){try{return new Yc(n,e.transaction(i,r))}catch(s){throw new Ko(n,s)}}get It(){return this.Tt.promise}abort(e){e&&this.Tt.reject(e),this.aborted||(x("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const n=this.transaction.objectStore(e);return new fC(n)}}class pn{constructor(e,n,r){this.name=e,this.version=n,this.At=r,pn.Rt(xe())===12.2&&We("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return x("SimpleDb","Removing database:",e),ai(window.indexedDB.deleteDatabase(e)).toPromise()}static bt(){if(!sc())return!1;if(pn.Pt())return!0;const e=xe(),n=pn.Rt(e),r=0<n&&n<10,i=pn.vt(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static Pt(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.Vt)==="YES"}static St(e,n){return e.store(n)}static Rt(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static vt(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async Dt(e){return this.db||(x("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Ko(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new R(v.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new R(v.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Ko(e,o))},i.onupgradeneeded=s=>{x("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.At.Ct(o,i.transaction,s.oldVersion,this.version).next(()=>{x("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Nt&&(this.db.onversionchange=n=>this.Nt(n)),this.db}xt(e){this.Nt=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.Dt(e);const a=Yc.open(this.db,e,s?"readonly":"readwrite",r),c=i(a).catch(u=>(a.abort(u),A.reject(u))).toPromise();return c.catch(()=>{}),await a.It,c}catch(a){const c=a.name!=="FirebaseError"&&o<3;if(x("SimpleDb","Transaction failed with error:",a.message,"Retrying:",c),this.close(),!c)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class dC{constructor(e){this.kt=e,this.$t=!1,this.Ot=null}get isDone(){return this.$t}get Ft(){return this.Ot}set cursor(e){this.kt=e}done(){this.$t=!0}Mt(e){this.Ot=e}delete(){return ai(this.kt.delete())}}class Ko extends R{constructor(e,n){super(v.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function oi(t){return t.name==="IndexedDbTransactionError"}class fC{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(x("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(x("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ai(r)}add(e){return x("SimpleDb","ADD",this.store.name,e,e),ai(this.store.add(e))}get(e){return ai(this.store.get(e)).next(n=>(n===void 0&&(n=null),x("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return x("SimpleDb","DELETE",this.store.name,e),ai(this.store.delete(e))}count(){return x("SimpleDb","COUNT",this.store.name),ai(this.store.count())}Lt(e,n){const r=this.cursor(this.options(e,n)),i=[];return this.Bt(r,(s,o)=>{i.push(o)}).next(()=>i)}Ut(e,n){x("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.qt=!1;const i=this.cursor(r);return this.Bt(i,(s,o,a)=>a.delete())}Kt(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.Bt(i,n)}jt(e){const n=this.cursor({});return new A((r,i)=>{n.onerror=s=>{const o=cd(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}Bt(e,n){const r=[];return new A((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const c=new dC(a),u=n(a.primaryKey,a.value,c);if(u instanceof A){const l=u.catch(h=>(c.done(),A.reject(h)));r.push(l)}c.isDone?i():c.Ft===null?a.continue():a.continue(c.Ft)}}).next(()=>A.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.qt?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ai(t){return new A((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=cd(r.target.error);n(i)}})}let Gv=!1;function cd(t){const e=pn.Rt(xe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new R("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Gv||(Gv=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
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
 */class Qv extends Wv{constructor(e,n){super(),this.Qt=e,this.currentSequenceNumber=n}}function $t(t,e){const n=$(t);return pn.St(n.Qt,e)}/**
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
 */class ud{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&VN(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&rd(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&rd(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(le.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ce())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,(n,r)=>yv(n,r))&&ns(this.baseMutations,e.baseMutations,(n,r)=>yv(n,r))}}class ld{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){se(e.mutations.length===r.length);let i=Sv();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ld(e,n,r,i)}}/**
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
 */class mr{constructor(e,n,r,i,s=le.min(),o=le.min(),a=at.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Yv{constructor(e){this.Wt=e}}function hd(t,e){if(e.document)return Mv(t.Wt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const n=Y.fromSegments(e.noDocument.path),r=gs(e.noDocument.readTime),i=$e.newNoDocument(n,r);return e.hasCommittedMutations?i.setHasCommittedMutations():i}if(e.unknownDocument){const n=Y.fromSegments(e.unknownDocument.path),r=gs(e.unknownDocument.version);return $e.newUnknownDocument(n,r)}return X()}function Jv(t,e,n){const r=dd(n),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const s=function(a,c){return{name:zo(a,c.key),fields:c.data.value.mapValue.fields,updateTime:jo(a,c.version.toTimestamp())}}(t.Wt,e),o=e.hasCommittedMutations;return new qe(null,null,s,o,r,i)}if(e.isNoDocument()){const s=e.key.path.toArray(),o=ms(e.version),a=e.hasCommittedMutations;return new qe(null,new uC(s,o),null,a,r,i)}if(e.isUnknownDocument()){const s=e.key.path.toArray(),o=ms(e.version);return new qe(new lC(s,o),null,null,!0,r,i)}return X()}function dd(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function Xv(t){const e=new ot(t[0],t[1]);return le.fromTimestamp(e)}function ms(t){const e=t.toTimestamp();return new cC(e.seconds,e.nanoseconds)}function gs(t){const e=new ot(t.seconds,t.nanoseconds);return le.fromTimestamp(e)}function ys(t,e){const n=(e.baseMutations||[]).map(s=>Fv(t.Wt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Fv(t.Wt,s)),i=ot.fromMillis(e.localWriteTimeMs);return new ud(e.batchId,i,n,r)}function Wo(t){const e=gs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?gs(t.lastLimboFreeSnapshotVersion):le.min();let r;var i;return t.query.documents!==void 0?(se((i=t.query).documents.length===1),r=on(as(Pv(i.documents[0])))):r=function(s){return on($v(s))}(t.query),new mr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,at.fromBase64String(t.resumeToken))}function Zv(t,e){const n=ms(e.snapshotVersion),r=ms(e.lastLimboFreeSnapshotVersion);let i;i=Vc(e.target)?Uv(t.Wt,e.target):Vv(t.Wt,e.target);const s=e.resumeToken.toBase64();return new Vt(e.targetId,xo(e.target),n,s,e.sequenceNumber,r,i)}function fd(t){const e=$v({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ov(e,e.limit,"L"):e}/**
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
 */class pC{getBundleMetadata(e,n){return ew(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:gs(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return ew(e).put({bundleId:(r=n).id,createTime:ms(ct(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return tw(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:fd(i.bundledQuery),readTime:gs(i.readTime)};var i})}saveNamedQuery(e,n){return tw(e).put(function(r){return{name:r.name,readTime:ms(ct(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function ew(t){return $t(t,fs.store)}function tw(t){return $t(t,ps.store)}/**
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
 */class mC{constructor(){this.Gt=new pd}addToCollectionParentIndex(e,n){return this.Gt.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.Gt.getEntries(n))}}class pd{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Be(Ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Be(Ae.comparator)).toArray()}}/**
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
 */class gC{constructor(){this.zt=new pd}addToCollectionParentIndex(e,n){if(!this.zt.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.zt.add(n)});const s={collectionId:r,parent:fn(i)};return nw(e).put(s)}return A.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[Ky(n),""],!1,!0);return nw(e).Lt(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(jn(o.parent))}return r})}}function nw(t){return $t(t,si.store)}/**
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
 */const rw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Bt{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Bt(e,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function iw(t,e,n){const r=t.store(Le.store),i=t.store(Nt.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Kt({range:o},(l,h,d)=>(a++,d.delete()));s.push(c.next(()=>{se(a===1)}));const u=[];for(const l of n.mutations){const h=Nt.key(e,l.key.path,n.batchId);s.push(i.delete(h)),u.push(l.key)}return A.waitFor(s).next(()=>u)}function Jc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw X();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Bt.DEFAULT_COLLECTION_PERCENTILE=10,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Bt.DEFAULT=new Bt(41943040,Bt.DEFAULT_COLLECTION_PERCENTILE,Bt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Bt.DISABLED=new Bt(-1,0,0);class md{constructor(e,n,r,i){this.userId=e,this.N=n,this.Ht=r,this.referenceDelegate=i,this.Jt={}}static Yt(e,n,r,i){se(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new md(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return gr(e).Kt({index:Le.userMutationsIndex,range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=vs(e),o=gr(e);return o.add({}).next(a=>{se(typeof a=="number");const c=new ud(a,n,r,i),u=function(d,p,g){const E=g.baseMutations.map(w=>Qc(d.Wt,w)),I=g.mutations.map(w=>Qc(d.Wt,w));return new Le(p,g.batchId,g.localWriteTime.toMillis(),E,I)}(this.N,this.userId,c),l=[];let h=new Be((d,p)=>pe(d.canonicalString(),p.canonicalString()));for(const d of i){const p=Nt.key(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(s.put(p,Nt.PLACEHOLDER))}return h.forEach(d=>{l.push(this.Ht.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Jt[a]=c.keys()}),A.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return gr(e).get(n).next(r=>r?(se(r.userId===this.userId),ys(this.N,r)):null)}Xt(e,n){return this.Jt[n]?A.resolve(this.Jt[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Jt[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return gr(e).Kt({index:Le.userMutationsIndex,range:i},(o,a,c)=>{a.userId===this.userId&&(se(a.batchId>=r),s=ys(this.N,a)),c.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return gr(e).Kt({index:Le.userMutationsIndex,range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return gr(e).Lt(Le.userMutationsIndex,n).next(r=>r.map(i=>ys(this.N,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Nt.prefixForPath(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return vs(e).Kt({range:i},(o,a,c)=>{const[u,l,h]=o,d=jn(l);if(u===this.userId&&n.path.isEqual(d))return gr(e).get(h).next(p=>{if(!p)throw X();se(p.userId===this.userId),s.push(ys(this.N,p))});c.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(pe);const i=[];return n.forEach(s=>{const o=Nt.prefixForPath(this.userId,s.path),a=IDBKeyRange.lowerBound(o),c=vs(e).Kt({range:a},(u,l,h)=>{const[d,p,g]=u,E=jn(p);d===this.userId&&s.path.isEqual(E)?r=r.add(g):h.done()});i.push(c)}),A.waitFor(i).next(()=>this.Zt(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Nt.prefixForPath(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new Be(pe);return vs(e).Kt({range:o},(c,u,l)=>{const[h,d,p]=c,g=jn(d);h===this.userId&&r.isPrefixOf(g)?g.length===i&&(a=a.add(p)):l.done()}).next(()=>this.Zt(e,a))}Zt(e,n){const r=[],i=[];return n.forEach(s=>{i.push(gr(e).get(s).next(o=>{if(o===null)throw X();se(o.userId===this.userId),r.push(ys(this.N,o))}))}),A.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return iw(e.Qt,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.te(n.batchId)}),A.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}te(e){delete this.Jt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return A.resolve();const r=IDBKeyRange.lowerBound(Nt.prefixForUser(this.userId)),i=[];return vs(e).Kt({range:r},(s,o,a)=>{if(s[0]===this.userId){const c=jn(s[1]);i.push(c)}else a.done()}).next(()=>{se(i.length===0)})})}containsKey(e,n){return sw(e,this.userId,n)}ee(e){return ow(e).get(this.userId).next(n=>n||new pr(this.userId,-1,""))}}function sw(t,e,n){const r=Nt.prefixForPath(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return vs(t).Kt({range:s,qt:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===i&&(o=!0),u.done()}).next(()=>o)}function gr(t){return $t(t,Le.store)}function vs(t){return $t(t,Nt.store)}function ow(t){return $t(t,pr.store)}/**
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
 */class ci{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new ci(0)}static ie(){return new ci(-1)}}/**
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
 */class yC{constructor(e,n){this.referenceDelegate=e,this.N=n}allocateTargetId(e){return this.re(e).next(n=>{const r=new ci(n.highestTargetId);return n.highestTargetId=r.next(),this.oe(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.re(e).next(n=>le.fromTimestamp(new ot(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.re(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.re(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.oe(e,i)))}addTargetData(e,n){return this.ae(e,n).next(()=>this.re(e).next(r=>(r.targetCount+=1,this.ce(n,r),this.oe(e,r))))}updateTargetData(e,n){return this.ae(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ws(e).delete(n.targetId)).next(()=>this.re(e)).next(r=>(se(r.targetCount>0),r.targetCount-=1,this.oe(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ws(e).Kt((o,a)=>{const c=Wo(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))}).next(()=>A.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ws(e).Kt((r,i)=>{const s=Wo(i);n(s)})}re(e){return aw(e).get(Yt.key).next(n=>(se(n!==null),n))}oe(e,n){return aw(e).put(Yt.key,n)}ae(e,n){return ws(e).put(Zv(this.N,n))}ce(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.re(e).next(n=>n.targetCount)}getTargetData(e,n){const r=xo(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ws(e).Kt({range:i,index:Vt.queryTargetsIndexName},(o,a,c)=>{const u=Wo(a);Uc(n,u.target)&&(s=u,c.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=yr(e);return n.forEach(o=>{const a=fn(o.path);i.push(s.put(new It(r,a))),i.push(this.referenceDelegate.addReference(e,r,o))}),A.waitFor(i)}removeMatchingKeys(e,n,r){const i=yr(e);return A.forEach(n,s=>{const o=fn(s.path);return A.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=yr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=yr(e);let s=Ce();return i.Kt({range:r,qt:!0},(o,a,c)=>{const u=jn(o[1]),l=new Y(u);s=s.add(l)}).next(()=>s)}containsKey(e,n){const r=fn(n.path),i=IDBKeyRange.bound([r],[Ky(r)],!1,!0);let s=0;return yr(e).Kt({index:It.documentTargetsIndex,qt:!0,range:i},([o,a],c,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}Et(e,n){return ws(e).get(n).next(r=>r?Wo(r):null)}}function ws(t){return $t(t,Vt.store)}function aw(t){return $t(t,Yt.store)}function yr(t){return $t(t,It.store)}/**
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
 */async function ui(t){if(t.code!==v.FAILED_PRECONDITION||t.message!==Kv)throw t;x("LocalStore","Unexpectedly lost primary lease")}/**
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
 */function cw([t,e],[n,r]){const i=pe(t,n);return i===0?pe(e,r):i}class vC{constructor(e){this.ue=e,this.buffer=new Be(cw),this.he=0}le(){return++this.he}fe(e){const n=[e,this.le()];if(this.buffer.size<this.ue)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();cw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class wC{constructor(e,n){this.garbageCollector=e,this.asyncQueue=n,this.de=!1,this.we=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this._e(e)}stop(){this.we&&(this.we.cancel(),this.we=null)}get started(){return this.we!==null}_e(e){const n=this.de?3e5:6e4;x("LruGarbageCollector",`Garbage collection scheduled in ${n}ms`),this.we=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",n,async()=>{this.we=null,this.de=!0;try{await e.collectGarbage(this.garbageCollector)}catch(r){oi(r)?x("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r):await ui(r)}await this._e(e)})}}class _C{constructor(e,n){this.me=e,this.params=n}calculateTargetCount(e,n){return this.me.ge(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return A.resolve(Gt.T);const r=new vC(n);return this.me.forEachTarget(e,i=>r.fe(i.sequenceNumber)).next(()=>this.me.ye(e,i=>r.fe(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.me.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.me.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(rw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rw):this.pe(e,n))}getCacheSize(e){return this.me.getCacheSize(e)}pe(e,n){let r,i,s,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Kh()<=Ee.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
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
 */class IC{constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new _C(r,i)}(this,n)}ge(e){const n=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Ee(e){let n=0;return this.ye(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}ye(e,n){return this.Te(e,(r,i)=>n(i))}addReference(e,n,r){return Xc(e,r)}removeReference(e,n,r){return Xc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Xc(e,n)}Ie(e,n){return function(r,i){let s=!1;return ow(r).jt(o=>sw(r,o,i).next(a=>(a&&(s=!0),A.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Te(e,(o,a)=>{if(a<=n){const c=this.Ie(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o),yr(e).delete([0,fn(o.path)])))});i.push(c)}}).next(()=>A.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Xc(e,n)}Te(e,n){const r=yr(e);let i,s=Gt.T;return r.Kt({index:It.documentTargetsIndex},([o,a],{path:c,sequenceNumber:u})=>{o===0?(s!==Gt.T&&n(new Y(jn(i)),s),s=u,i=c):s=Gt.T}).next(()=>{s!==Gt.T&&n(new Y(jn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Xc(t,e){return yr(t).put(function(n,r){return new It(0,fn(n.path),r)}(e,t.currentSequenceNumber))}/**
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
 */class _s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){ei(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Gy(this.inner)}}/**
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
 */class uw{constructor(){this.changes=new _s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:le.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:$e.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class EC{constructor(e,n){this.N=e,this.Ht=n}addEntry(e,n,r){return vr(e).put(Zc(n),r)}removeEntry(e,n){const r=vr(e),i=Zc(n);return r.delete(i)}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Ae(e,r)))}getEntry(e,n){return vr(e).get(Zc(n)).next(r=>this.Re(n,r))}be(e,n){return vr(e).get(Zc(n)).next(r=>({document:this.Re(n,r),size:Jc(r)}))}getEntries(e,n){let r=an();return this.Pe(e,n,(i,s)=>{const o=this.Re(i,s);r=r.insert(i,o)}).next(()=>r)}ve(e,n){let r=an(),i=new Ze(Y.comparator);return this.Pe(e,n,(s,o)=>{const a=this.Re(s,o);r=r.insert(s,a),i=i.insert(s,Jc(o))}).next(()=>({documents:r,Ve:i}))}Pe(e,n,r){if(n.isEmpty())return A.resolve();const i=IDBKeyRange.bound(n.first().path.toArray(),n.last().path.toArray()),s=n.getIterator();let o=s.getNext();return vr(e).Kt({range:i},(a,c,u)=>{const l=Y.fromSegments(a);for(;o&&Y.comparator(o,l)<0;)r(o,null),o=s.getNext();o&&o.isEqual(l)&&(r(o,c),o=s.hasNext()?s.getNext():null),o?u.Mt(o.path.toArray()):u.done()}).next(()=>{for(;o;)r(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,n,r){let i=an();const s=n.path.length+1,o={};if(r.isEqual(le.min())){const a=n.path.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=n.path.toArray(),c=dd(r);o.range=IDBKeyRange.lowerBound([a,c],!0),o.index=qe.collectionReadTimeIndex}return vr(e).Kt(o,(a,c,u)=>{if(a.length!==s)return;const l=hd(this.N,c);n.path.isPrefixOf(l.key.path)?Fo(n,l)&&(i=i.insert(l.key,l)):u.done()}).next(()=>i)}newChangeBuffer(e){return new bC(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return lw(e).get(Sn.key).next(n=>(se(!!n),n))}Ae(e,n){return lw(e).put(Sn.key,n)}Re(e,n){if(n){const r=hd(this.N,n);if(!(r.isNoDocument()&&r.version.isEqual(le.min())))return r}return $e.newInvalidDocument(e)}}class bC extends uw{constructor(e,n){super(),this.Se=e,this.trackRemovals=n,this.De=new _s(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new Be((s,o)=>pe(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.De.get(s);if(o.document.isValidDocument()){const c=Jv(this.Se.N,o.document,this.getReadTime(s));i=i.add(s.path.popLast()),r+=Jc(c)-a,n.push(this.Se.addEntry(e,s,c))}else if(r-=a,this.trackRemovals){const c=Jv(this.Se.N,$e.newNoDocument(s,le.min()),this.getReadTime(s));n.push(this.Se.addEntry(e,s,c))}else n.push(this.Se.removeEntry(e,s))}),i.forEach(s=>{n.push(this.Se.Ht.addToCollectionParentIndex(e,s))}),n.push(this.Se.updateMetadata(e,r)),A.waitFor(n)}getFromCache(e,n){return this.Se.be(e,n).next(r=>(this.De.set(n,r.size),r.document))}getAllFromCache(e,n){return this.Se.ve(e,n).next(({documents:r,Ve:i})=>(i.forEach((s,o)=>{this.De.set(s,o)}),r))}}function lw(t){return $t(t,Sn.store)}function vr(t){return $t(t,qe.store)}function Zc(t){return t.path.toArray()}/**
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
 */class TC{constructor(e){this.N=e}Ct(e,n,r,i){se(r<i&&r>=0&&i<=11);const s=new Yc("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore(Qt.store)}(e),function(a){a.createObjectStore(pr.store,{keyPath:pr.keyPath}),a.createObjectStore(Le.store,{keyPath:Le.keyPath,autoIncrement:!0}).createIndex(Le.userMutationsIndex,Le.userMutationsKeyPath,{unique:!0}),a.createObjectStore(Nt.store)}(e),hw(e),function(a){a.createObjectStore(qe.store)}(e));let o=A.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore(It.store),a.deleteObjectStore(Vt.store),a.deleteObjectStore(Yt.store)}(e),hw(e)),o=o.next(()=>function(a){const c=a.store(Yt.store),u=new Yt(0,0,le.min().toTimestamp(),0);return c.put(Yt.key,u)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store(Le.store).Lt().next(u=>{a.deleteObjectStore(Le.store),a.createObjectStore(Le.store,{keyPath:Le.keyPath,autoIncrement:!0}).createIndex(Le.userMutationsIndex,Le.userMutationsKeyPath,{unique:!0});const l=c.store(Le.store),h=u.map(d=>l.put(d));return A.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore(zn.store,{keyPath:zn.keyPath})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ce(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore(Sn.store)}(e),this.Ne(s)))),r<7&&i>=7&&(o=o.next(()=>this.xe(s))),r<8&&i>=8&&(o=o.next(()=>this.ke(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const c=a.objectStore(qe.store);c.createIndex(qe.readTimeIndex,qe.readTimeIndexPath,{unique:!1}),c.createIndex(qe.collectionReadTimeIndex,qe.collectionReadTimeIndexPath,{unique:!1})}(n)})),r<10&&i>=10&&(o=o.next(()=>this.$e(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(fs.store,{keyPath:fs.keyPath})})(e),function(a){a.createObjectStore(ps.store,{keyPath:ps.keyPath})}(e)})),o}Ne(e){let n=0;return e.store(qe.store).Kt((r,i)=>{n+=Jc(i)}).next(()=>{const r=new Sn(n);return e.store(Sn.store).put(Sn.key,r)})}Ce(e){const n=e.store(pr.store),r=e.store(Le.store);return n.Lt().next(i=>A.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.Lt(Le.userMutationsIndex,o).next(a=>A.forEach(a,c=>{se(c.userId===s.userId);const u=ys(this.N,c);return iw(e,s.userId,u).next(()=>{})}))}))}xe(e){const n=e.store(It.store),r=e.store(qe.store);return e.store(Yt.store).get(Yt.key).next(i=>{const s=[];return r.Kt((o,a)=>{const c=new Ae(o),u=function(l){return[0,fn(l)]}(c);s.push(n.get(u).next(l=>l?A.resolve():(h=>n.put(new It(0,fn(h),i.highestListenSequenceNumber)))(c)))}).next(()=>A.waitFor(s))})}ke(e,n){e.createObjectStore(si.store,{keyPath:si.keyPath});const r=n.store(si.store),i=new pd,s=o=>{if(i.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:fn(c)})}};return n.store(qe.store).Kt({qt:!0},(o,a)=>{const c=new Ae(o);return s(c.popLast())}).next(()=>n.store(Nt.store).Kt({qt:!0},([o,a,c],u)=>{const l=jn(a);return s(l.popLast())}))}$e(e){const n=e.store(Vt.store);return n.Kt((r,i)=>{const s=Wo(i),o=Zv(this.N,s);return n.put(o)})}}function hw(t){t.createObjectStore(It.store,{keyPath:It.keyPath}).createIndex(It.documentTargetsIndex,It.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(Vt.store,{keyPath:Vt.keyPath}).createIndex(Vt.queryTargetsIndexName,Vt.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(Yt.store)}const gd="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class yd{constructor(e,n,r,i,s,o,a,c,u,l){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Oe=s,this.window=o,this.document=a,this.Fe=u,this.Me=l,this.Le=null,this.Be=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ue=null,this.inForeground=!1,this.qe=null,this.Ke=null,this.je=Number.NEGATIVE_INFINITY,this.Qe=h=>Promise.resolve(),!yd.bt())throw new R(v.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new IC(this,i),this.We=n+"main",this.N=new Yv(c),this.Ge=new pn(this.We,11,new TC(this.N)),this.ze=new yC(this.referenceDelegate,this.N),this.Ht=new gC,this.He=function(h,d){return new EC(h,d)}(this.N,this.Ht),this.Je=new pC,this.window&&this.window.localStorage?this.Ye=this.window.localStorage:(this.Ye=null,l===!1&&We("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Xe().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new R(v.FAILED_PRECONDITION,gd);return this.Ze(),this.tn(),this.en(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ze.getHighestSequenceNumber(e))}).then(e=>{this.Le=new Gt(e,this.Fe)}).then(()=>{this.Be=!0}).catch(e=>(this.Ge&&this.Ge.close(),Promise.reject(e)))}nn(e){return this.Qe=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ge.xt(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Xe()}))}Xe(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>eu(e).put(new zn(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.sn(e).next(n=>{n||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)))})}).next(()=>this.rn(e)).next(n=>this.isPrimary&&!n?this.on(e).next(()=>!1):!!n&&this.an(e).next(()=>!0))).catch(e=>{if(oi(e))return x("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return x("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Oe.enqueueRetryable(()=>this.Qe(e)),this.isPrimary=e})}sn(e){return Go(e).get(Qt.key).next(n=>A.resolve(this.cn(n)))}un(e){return eu(e).delete(this.clientId)}async hn(){if(this.isPrimary&&!this.ln(this.je,18e5)){this.je=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=$t(n,zn.store);return r.Lt().next(i=>{const s=this.fn(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return A.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ye)for(const n of e)this.Ye.removeItem(this.dn(n.clientId))}}en(){this.Ke=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Xe().then(()=>this.hn()).then(()=>this.en()))}cn(e){return!!e&&e.ownerId===this.clientId}rn(e){return this.Me?A.resolve(!0):Go(e).get(Qt.key).next(n=>{if(n!==null&&this.ln(n.leaseTimestampMs,5e3)&&!this.wn(n.ownerId)){if(this.cn(n)&&this.networkEnabled)return!0;if(!this.cn(n)){if(!n.allowTabSynchronization)throw new R(v.FAILED_PRECONDITION,gd);return!1}}return!(!this.networkEnabled||!this.inForeground)||eu(e).Lt().next(r=>this.fn(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&x("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Be=!1,this._n(),this.Ke&&(this.Ke.cancel(),this.Ke=null),this.mn(),this.gn(),await this.Ge.runTransaction("shutdown","readwrite",[Qt.store,zn.store],e=>{const n=new Qv(e,Gt.T);return this.on(n).next(()=>this.un(n))}),this.Ge.close(),this.yn()}fn(e,n){return e.filter(r=>this.ln(r.updateTimeMs,n)&&!this.wn(r.clientId))}pn(){return this.runTransaction("getActiveClients","readonly",e=>eu(e).Lt().next(n=>this.fn(n,18e5).map(r=>r.clientId)))}get started(){return this.Be}getMutationQueue(e){return md.Yt(e,this.N,this.Ht,this.referenceDelegate)}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getIndexManager(){return this.Ht}getBundleCache(){return this.Je}runTransaction(e,n,r){x("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite";let s;return this.Ge.runTransaction(e,i,hC,o=>(s=new Qv(o,this.Le?this.Le.next():Gt.T),n==="readwrite-primary"?this.sn(s).next(a=>!!a||this.rn(s)).next(a=>{if(!a)throw We(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.Qe(!1)),new R(v.FAILED_PRECONDITION,Kv);return r(s)}).next(a=>this.an(s).next(()=>a)):this.En(s).next(()=>r(s)))).then(o=>(s.raiseOnCommittedEvent(),o))}En(e){return Go(e).get(Qt.key).next(n=>{if(n!==null&&this.ln(n.leaseTimestampMs,5e3)&&!this.wn(n.ownerId)&&!this.cn(n)&&!(this.Me||this.allowTabSynchronization&&n.allowTabSynchronization))throw new R(v.FAILED_PRECONDITION,gd)})}an(e){const n=new Qt(this.clientId,this.allowTabSynchronization,Date.now());return Go(e).put(Qt.key,n)}static bt(){return pn.bt()}on(e){const n=Go(e);return n.get(Qt.key).next(r=>this.cn(r)?(x("IndexedDbPersistence","Releasing primary lease."),n.delete(Qt.key)):A.resolve())}ln(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(We(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ze(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.qe=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Xe()))},this.document.addEventListener("visibilitychange",this.qe),this.inForeground=this.document.visibilityState==="visible")}mn(){this.qe&&(this.document.removeEventListener("visibilitychange",this.qe),this.qe=null)}tn(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ue=()=>{this._n(),Q0()&&navigator.appVersion.match("Version/14")&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ue))}gn(){this.Ue&&(this.window.removeEventListener("pagehide",this.Ue),this.Ue=null)}wn(e){var n;try{const r=((n=this.Ye)===null||n===void 0?void 0:n.getItem(this.dn(e)))!==null;return x("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return We("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}_n(){if(this.Ye)try{this.Ye.setItem(this.dn(this.clientId),String(Date.now()))}catch(e){We("Failed to set zombie client id.",e)}}yn(){if(this.Ye)try{this.Ye.removeItem(this.dn(this.clientId))}catch(e){}}dn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Go(t){return $t(t,Qt.store)}function eu(t){return $t(t,zn.store)}function vd(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class SC{constructor(e,n){this.progress=e,this.Tn=n}}/**
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
 */class dw{constructor(e,n,r){this.He=e,this.In=n,this.Ht=r}An(e,n){return this.In.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.Rn(e,n,r))}Rn(e,n,r){return this.He.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}bn(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}Pn(e,n){return this.He.getEntries(e,n).next(r=>this.vn(e,r).next(()=>r))}vn(e,n){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.bn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return Y.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Vn(e,n.path):td(n)?this.Sn(e,n,r):this.Dn(e,n,r)}Vn(e,n){return this.An(e,new Y(n)).next(r=>{let i=sd();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Sn(e,n,r){const i=n.collectionGroup;let s=sd();return this.Ht.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const c=function(u,l){return new qn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.Dn(e,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}Dn(e,n,r){let i,s;return this.He.getDocumentsMatchingQuery(e,n,r).next(o=>(i=o,this.In.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Cn(e,s,i).next(a=>{i=a;for(const c of s)for(const u of c.mutations){const l=u.key;let h=i.get(l);h==null&&(h=$e.newInvalidDocument(l),i=i.insert(l,h)),rd(u,h,c.localWriteTime),h.isFoundDocument()||(i=i.remove(l))}}))).next(()=>(i.forEach((o,a)=>{Fo(n,a)||(i=i.remove(o))}),i))}Cn(e,n,r){let i=Ce();for(const o of n)for(const a of o.mutations)a instanceof fr&&r.get(a.key)===null&&(i=i.add(a.key));let s=r;return this.He.getEntries(e,i).next(o=>(o.forEach((a,c)=>{c.isFoundDocument()&&(s=s.insert(a,c))}),s))}}/**
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
 */class wd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Nn=r,this.xn=i}static kn(e,n){let r=Ce(),i=Ce();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wd(e,n.fromCache,r,i)}}/**
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
 */class fw{$n(e){this.On=e}getDocumentsMatchingQuery(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(le.min())?this.Fn(e,n):this.On.Pn(e,i).next(s=>{const o=this.Mn(n,s);return(Bc(n)||qc(n))&&this.Ln(n.limitType,o,i,r)?this.Fn(e,n):(Kh()<=Ee.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),nd(n)),this.On.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}Mn(e,n){let r=new Be(cv(e));return n.forEach((i,s)=>{Fo(e,s)&&(r=r.add(s))}),r}Ln(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(e,n){return Kh()<=Ee.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",nd(n)),this.On.getDocumentsMatchingQuery(e,n,le.min())}}/**
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
 */class AC{constructor(e,n,r,i){this.persistence=e,this.Bn=n,this.N=i,this.Un=new Ze(pe),this.qn=new _s(s=>xo(s),Uc),this.Kn=le.min(),this.In=e.getMutationQueue(r),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new dw(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Un))}}function pw(t,e,n,r){return new AC(t,e,n,r)}async function mw(t,e){const n=$(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.In.getAllMutationBatches(o).next(c=>(a=c,r=n.persistence.getMutationQueue(e),i=new dw(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(c=>{const u=[],l=[];let h=Ce();for(const d of a){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of c){l.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return i.Pn(o,h).next(d=>({Wn:d,removedBatchIds:u,addedBatchIds:l}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function NC(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.jn.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=A.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(g=>{const E=c.docVersions.get(p);se(E!==null),g.version.compareTo(E)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&u.addEntry(g,c.commitVersion))})}),d.next(()=>o.In.removeMutationBatch(a,l))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.In.performConsistencyCheck(r)).next(()=>n.Qn.Pn(r,i))})}function gw(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ze.getLastRemoteSnapshotVersion(n))}function CC(t,e){const n=$(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const a=[];e.targetChanges.forEach((u,l)=>{const h=i.get(l);if(!h)return;a.push(n.ze.removeMatchingKeys(s,u.removedDocuments,l).next(()=>n.ze.addMatchingKeys(s,u.addedDocuments,l)));const d=u.resumeToken;if(d.approximateByteSize()>0){const p=h.withResumeToken(d,r).withSequenceNumber(s.currentSequenceNumber);i=i.insert(l,p),function(g,E,I){return se(E.resumeToken.approximateByteSize()>0),g.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(h,p,u)&&a.push(n.ze.updateTargetData(s,p))}});let c=an();if(e.documentUpdates.forEach((u,l)=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(yw(s,o,e.documentUpdates,r,void 0).next(u=>{c=u})),!r.isEqual(le.min())){const u=n.ze.getLastRemoteSnapshotVersion(s).next(l=>n.ze.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.Qn.vn(s,c)).next(()=>c)}).then(s=>(n.Un=i,s))}function yw(t,e,n,r,i){let s=Ce();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=an();return n.forEach((c,u)=>{const l=o.get(c),h=(i==null?void 0:i.get(c))||r;u.isNoDocument()&&u.version.isEqual(le.min())?(e.removeEntry(c,h),a=a.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u,h),a=a.insert(c,u)):x("LocalStore","Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)}),a})}function RC(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.In.getNextMutationBatchAfterBatchId(r,e)))}function Is(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.ze.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.ze.allocateTargetId(r).next(o=>(i=new mr(e,o,0,r.currentSequenceNumber),n.ze.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Un.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Un=n.Un.insert(r.targetId,r),n.qn.set(e,r.targetId)),r})}async function Es(t,e,n){const r=$(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!oi(o))throw o;x("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function tu(t,e,n){const r=$(t);let i=le.min(),s=Ce();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=$(a),h=l.qn.get(u);return h!==void 0?A.resolve(l.Un.get(h)):l.ze.getTargetData(c,u)}(r,o,on(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Bn.getDocumentsMatchingQuery(o,e,n?i:le.min(),n?s:Ce())).next(a=>({documents:a,Gn:s})))}function vw(t,e){const n=$(t),r=$(n.ze),i=n.Un.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.Et(s,e).next(o=>o?o.target:null))}function ww(t){const e=$(t);return e.persistence.runTransaction("Get new document changes","readonly",n=>function(r,i,s){const o=$(r);let a=an(),c=dd(s);const u=vr(i),l=IDBKeyRange.lowerBound(c,!0);return u.Kt({index:qe.readTimeIndex,range:l},(h,d)=>{const p=hd(o.N,d);a=a.insert(p.key,p),c=d.readTime}).next(()=>({Tn:a,readTime:Xv(c)}))}(e.jn,n,e.Kn)).then(({Tn:n,readTime:r})=>(e.Kn=r,n))}async function kC(t){const e=$(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",n=>function(r){const i=vr(r);let s=le.min();return i.Kt({index:qe.readTimeIndex,reverse:!0},(o,a,c)=>{a.readTime&&(s=Xv(a.readTime)),c.done()}).next(()=>s)}(n)).then(n=>{e.Kn=n})}async function OC(t,e,n,r){const i=$(t);let s=Ce(),o=an(),a=Sv();for(const l of n){const h=e.zn(l.metadata.name);l.document&&(s=s.add(h)),o=o.insert(h,e.Hn(l)),a=a.insert(h,e.Jn(l.metadata.readTime))}const c=i.jn.newChangeBuffer({trackRemovals:!0}),u=await Is(i,function(l){return on(as(Ae.fromString(`__bundle__/docs/${l}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",l=>yw(l,c,o,le.min(),a).next(h=>(c.apply(l),h)).next(h=>i.ze.removeMatchingKeysForTargetId(l,u.targetId).next(()=>i.ze.addMatchingKeys(l,s,u.targetId)).next(()=>i.Qn.vn(l,h)).next(()=>h)))}async function DC(t,e,n=Ce()){const r=await Is(t,on(fd(e.bundledQuery))),i=$(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=ct(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Je.saveNamedQuery(s,e);const a=r.withResumeToken(at.EMPTY_BYTE_STRING,o);return i.Un=i.Un.insert(a.targetId,a),i.ze.updateTargetData(s,a).next(()=>i.ze.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.ze.addMatchingKeys(s,n,r.targetId)).next(()=>i.Je.saveNamedQuery(s,e))})}/**
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
 */class PC{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return A.resolve(this.Yn.get(n))}saveBundleMetadata(e,n){var r;return this.Yn.set(n.id,{id:(r=n).id,version:r.version,createTime:ct(r.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:fd(r.bundledQuery),readTime:ct(r.readTime)}}(n)),A.resolve()}}/**
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
 */class _d{constructor(){this.Zn=new Be(ut.ts),this.es=new Be(ut.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new ut(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new ut(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}cs(e){const n=new Y(new Ae([])),r=new ut(n,e),i=new ut(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}us(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new Y(new Ae([])),r=new ut(n,e),i=new ut(n,e+1);let s=Ce();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ut(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return Y.comparator(e.key,n.key)||pe(e.ls,n.ls)}static ns(e,n){return pe(e.ls,n.ls)||Y.comparator(e.key,n.key)}}/**
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
 */class xC{constructor(e,n){this.Ht=e,this.referenceDelegate=n,this.In=[],this.fs=1,this.ds=new Be(ut.ts)}checkEmpty(e){return A.resolve(this.In.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const o=new ud(s,n,r,i);this.In.push(o);for(const a of i)this.ds=this.ds.add(new ut(a.key,s)),this.Ht.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.ws(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this._s(r),s=i<0?0:i;return A.resolve(this.In.length>s?this.In[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.In.length===0?-1:this.fs-1)}getAllMutationBatches(e){return A.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),i=new ut(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this.ws(o.ls);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(pe);return n.forEach(i=>{const s=new ut(i,0),o=new ut(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),A.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new ut(new Y(s),0);let a=new Be(pe);return this.ds.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.ls)),!0)},o),A.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this.ws(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){se(this.ys(n.batchId,"removed")===0),this.In.shift();let r=this.ds;return A.forEach(n.mutations,i=>{const s=new ut(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}te(e){}containsKey(e,n){const r=new ut(n,0),i=this.ds.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.In.length,A.resolve()}ys(e,n){return this._s(e)}_s(e){return this.In.length===0?0:e-this.In[0].batchId}ws(e){const n=this._s(e);return n<0||n>=this.In.length?null:this.In[n]}}/**
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
 */class LC{constructor(e,n){this.Ht=e,this.ps=n,this.docs=new Ze(Y.comparator),this.size=0}addEntry(e,n,r){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.ps(n);return this.docs=this.docs.insert(i,{document:n.clone(),size:a,readTime:r}),this.size+=a-o,this.Ht.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.clone():$e.newInvalidDocument(n))}getEntries(e,n){let r=an();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.clone():$e.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r){let i=an();const s=new Y(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:c,readTime:u}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;u.compareTo(r)<=0||Fo(n,c)&&(i=i.insert(c.key,c.clone()))}return A.resolve(i)}Es(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new MC(this)}getSize(e){return A.resolve(this.size)}}class MC extends uw{constructor(e){super(),this.Se=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.document.isValidDocument()?n.push(this.Se.addEntry(e,i.document,this.getReadTime(r))):this.Se.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.Se.getEntry(e,n)}getAllFromCache(e,n){return this.Se.getEntries(e,n)}}/**
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
 */class FC{constructor(e){this.persistence=e,this.Ts=new _s(n=>xo(n),Uc),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Is=0,this.As=new _d,this.targetCount=0,this.Rs=ci.se()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Is&&(this.Is=n),A.resolve()}ae(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new ci(n),this.highestTargetId=n),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.ae(n),A.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.cs(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.cs(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.As.containsKey(n))}}/**
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
 */class UC{constructor(e,n){this.bs={},this.Le=new Gt(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new FC(this),this.Ht=new mC,this.He=function(r,i){return new LC(r,i)}(this.Ht,r=>this.referenceDelegate.Ps(r)),this.N=new Yv(n),this.Je=new PC(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let n=this.bs[e.toKey()];return n||(n=new xC(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,n,r){x("MemoryPersistence","Starting transaction:",e);const i=new VC(this.Le.next());return this.referenceDelegate.vs(),r(i).next(s=>this.referenceDelegate.Vs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ss(e,n){return A.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class VC extends Wv{constructor(e){super(),this.currentSequenceNumber=e}}class Id{constructor(e){this.persistence=e,this.Ds=new _d,this.Cs=null}static Ns(e){return new Id(e)}get xs(){if(this.Cs)return this.Cs;throw X()}addReference(e,n,r){return this.Ds.addReference(r,n),this.xs.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Ds.removeReference(r,n),this.xs.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),A.resolve()}removeTarget(e,n){this.Ds.cs(n.targetId).forEach(i=>this.xs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}vs(){this.Cs=new Set}Vs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.xs,r=>{const i=Y.fromPath(r);return this.ks(e,i).next(s=>{s||n.removeEntry(i)})}).next(()=>(this.Cs=null,n.apply(e)))}updateLimboDocument(e,n){return this.ks(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}Ps(e){return 0}ks(e,n){return A.or([()=>A.resolve(this.Ds.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ss(e,n)])}}/**
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
 */function _w(t,e){return`firestore_clients_${t}_${e}`}function Iw(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Ed(t,e){return`firestore_targets_${t}_${e}`}class nu{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static $s(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new R(i.error.code,i.error.message))),o?new nu(e,n,i.state,s):(We("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Qo{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static $s(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new R(r.error.code,r.error.message))),s?new Qo(e,r.state,i):(We("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Os(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ru{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static $s(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Wc();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Yy(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new ru(e,s):(We("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class bd{constructor(e,n){this.clientId=e,this.onlineState=n}static $s(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new bd(n.clientId,n.onlineState):(We("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Td{constructor(){this.activeTargetIds=Wc()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sd{constructor(e,n,r,i,s){this.window=e,this.Oe=n,this.persistenceKey=r,this.Ls=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Bs=this.Us.bind(this),this.qs=new Ze(pe),this.started=!1,this.Ks=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.js=_w(this.persistenceKey,this.Ls),this.Qs=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.qs=this.qs.insert(this.Ls,new Td),this.Ws=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Gs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.zs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Hs=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Js=function(a){return`firestore_bundle_loaded_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.Bs)}static bt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.pn();for(const r of e){if(r===this.Ls)continue;const i=this.getItem(_w(this.persistenceKey,r));if(i){const s=ru.$s(r,i);s&&(this.qs=this.qs.insert(s.clientId,s))}}this.Ys();const n=this.storage.getItem(this.Hs);if(n){const r=this.Xs(n);r&&this.Zs(r)}for(const r of this.Ks)this.Us(r);this.Ks=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Qs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ti(this.qs)}isActiveQueryTarget(e){let n=!1;return this.qs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.ei(e,"pending")}updateMutationState(e,n,r){this.ei(e,n,r),this.ni(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Ed(this.persistenceKey,e));if(r){const i=Qo.$s(e,r);i&&(n=i.state)}}return this.si.Fs(e),this.Ys(),n}removeLocalQueryTarget(e){this.si.Ms(e),this.Ys()}isLocalQueryTarget(e){return this.si.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ed(this.persistenceKey,e))}updateQueryState(e,n,r){this.ii(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.ni(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.ri(e)}notifyBundleLoaded(){this.oi()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Bs),this.removeItem(this.js),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return x("SharedClientState","READ",e,n),n}setItem(e,n){x("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){x("SharedClientState","REMOVE",e),this.storage.removeItem(e)}Us(e){const n=e;if(n.storageArea===this.storage){if(x("SharedClientState","EVENT",n.key,n.newValue),n.key===this.js)return void We("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Ws.test(n.key)){if(n.newValue==null){const r=this.ai(n.key);return this.ci(r,null)}{const r=this.ui(n.key,n.newValue);if(r)return this.ci(r.clientId,r)}}else if(this.Gs.test(n.key)){if(n.newValue!==null){const r=this.hi(n.key,n.newValue);if(r)return this.li(r)}}else if(this.zs.test(n.key)){if(n.newValue!==null){const r=this.fi(n.key,n.newValue);if(r)return this.di(r)}}else if(n.key===this.Hs){if(n.newValue!==null){const r=this.Xs(n.newValue);if(r)return this.Zs(r)}}else if(n.key===this.Qs){const r=function(i){let s=Gt.T;if(i!=null)try{const o=JSON.parse(i);se(typeof o=="number"),s=o}catch(o){We("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Gt.T&&this.sequenceNumberHandler(r)}else if(n.key===this.Js)return this.syncEngine.wi()}}else this.Ks.push(n)})}}get si(){return this.qs.get(this.Ls)}Ys(){this.setItem(this.js,this.si.Os())}ei(e,n,r){const i=new nu(this.currentUser,e,n,r),s=Iw(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Os())}ni(e){const n=Iw(this.persistenceKey,this.currentUser,e);this.removeItem(n)}ri(e){const n={clientId:this.Ls,onlineState:e};this.storage.setItem(this.Hs,JSON.stringify(n))}ii(e,n,r){const i=Ed(this.persistenceKey,e),s=new Qo(e,n,r);this.setItem(i,s.Os())}oi(){this.setItem(this.Js,"value-not-used")}ai(e){const n=this.Ws.exec(e);return n?n[1]:null}ui(e,n){const r=this.ai(e);return ru.$s(r,n)}hi(e,n){const r=this.Gs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return nu.$s(new vt(s),i,n)}fi(e,n){const r=this.zs.exec(e),i=Number(r[1]);return Qo.$s(i,n)}Xs(e){return bd.$s(e)}async li(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine._i(e.batchId,e.state,e.error);x("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}di(e){return this.syncEngine.mi(e.targetId,e.state,e.error)}ci(e,n){const r=n?this.qs.insert(e,n):this.qs.remove(e),i=this.ti(this.qs),s=this.ti(r),o=[],a=[];return s.forEach(c=>{i.has(c)||o.push(c)}),i.forEach(c=>{s.has(c)||a.push(c)}),this.syncEngine.gi(o,a).then(()=>{this.qs=r})}Zs(e){this.qs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ti(e){let n=Wc();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class Ew{constructor(){this.yi=new Td,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,n,r){this.pi[e]=n}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new Td,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
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
 */class $C{Ei(e){}shutdown(){}}/**
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
 */class bw{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){x("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){x("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const BC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class qC{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}/**
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
 */class jC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,n,r,i){const s=this.Bi(e,n);x("RestConnection","Sending: ",s,r);const o={};return this.Ui(o,i),this.qi(e,s,o,r).then(a=>(x("RestConnection","Received: ",a),a),a=>{throw Ro("RestConnection",`${e} failed with error: `,a,"url: ",s,"request:",r),a})}Ki(e,n,r,i){return this.Li(e,n,r,i)}Ui(e,n){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+ts,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n)for(const r in n.authHeaders)n.authHeaders.hasOwnProperty(r)&&(e[r]=n.authHeaders[r])}Bi(e,n){const r=BC[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,n,r,i){return new Promise((s,o)=>{const a=new hN;a.listenOnce(cN.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Hh.NO_ERROR:const u=a.getResponseJson();x("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Hh.TIMEOUT:x("Connection",'RPC "'+e+'" timed out'),o(new R(v.DEADLINE_EXCEEDED,"Request time out"));break;case Hh.HTTP_ERROR:const l=a.getStatus();if(x("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(p){const g=p.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(g)>=0?g:v.UNKNOWN}(h.status);o(new R(d,h.message))}else o(new R(v.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new R(v.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{x("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,r,15)})}ji(e,n){const r=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=oN(),s=aN(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new lN({})),this.Ui(o.initMessageHeaders,n),fg()||ic()||W0()||Gl()||G0()||Wl()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");x("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,l=!1;const h=new qC({vi:p=>{l?x("Connection","Not sending because WebChannel is closed:",p):(u||(x("Connection","Opening WebChannel transport."),c.open(),u=!0),x("Connection","WebChannel sending:",p),c.send(p))},Vi:()=>c.close()}),d=(p,g,E)=>{p.listen(g,I=>{try{E(I)}catch(w){setTimeout(()=>{throw w},0)}})};return d(c,xc.EventType.OPEN,()=>{l||x("Connection","WebChannel transport opened.")}),d(c,xc.EventType.CLOSE,()=>{l||(l=!0,x("Connection","WebChannel transport closed"),h.$i())}),d(c,xc.EventType.ERROR,p=>{l||(l=!0,Ro("Connection","WebChannel transport errored:",p),h.$i(new R(v.UNAVAILABLE,"The operation could not be completed")))}),d(c,xc.EventType.MESSAGE,p=>{var g;if(!l){const E=p.data[0];se(!!E);const I=E,w=I.error||((g=I[0])===null||g===void 0?void 0:g.error);if(w){x("Connection","WebChannel received error:",w);const C=w.status;let M=function(K){const ie=Ye[K];if(ie!==void 0)return bv(ie)}(C),U=w.message;M===void 0&&(M=v.INTERNAL,U="Unknown error status: "+C+" with message "+w.message),l=!0,h.$i(new R(M,U)),c.close()}else x("Connection","WebChannel received:",E),h.Oi(E)}}),d(s,uN.STAT_EVENT,p=>{p.stat===jy.PROXY?x("Connection","Detected buffering proxy"):p.stat===jy.NOPROXY&&x("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ki()},0),h}}/**
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
 */function Tw(){return typeof window!="undefined"?window:null}function iu(){return typeof document!="undefined"?document:null}/**
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
 */function Yo(t){return new YN(t,!0)}class Ad{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Oe=e,this.timerId=n,this.Qi=r,this.Wi=i,this.Gi=s,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const n=Math.floor(this.zi+this.Zi()),r=Math.max(0,Date.now()-this.Ji),i=Math.max(0,n-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.zi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,i,()=>(this.Ji=Date.now(),e())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){this.Hi!==null&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){this.Hi!==null&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}/**
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
 */class Sw{constructor(e,n,r,i,s,o){this.Oe=e,this.er=r,this.nr=i,this.credentialsProvider=s,this.listener=o,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new Ad(e,n)}ar(){return this.state===1||this.state===2||this.state===4}cr(){return this.state===2}start(){this.state!==3?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&this.ir===null&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,n){this._r(),this.rr.cancel(),this.sr++,e!==3?this.rr.reset():n&&n.code===v.RESOURCE_EXHAUSTED?(We(n.toString()),We("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):n&&n.code===v.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),this.stream!==null&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(n)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),n=this.sr;this.credentialsProvider.getToken().then(r=>{this.sr===n&&this.yr(r)},r=>{e(()=>{const i=new R(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.pr(i)})})}yr(e){const n=this.gr(this.sr);this.stream=this.Er(e),this.stream.Si(()=>{n(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(r=>{n(()=>this.pr(r))}),this.stream.onMessage(r=>{n(()=>this.onMessage(r))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(e){return x("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return n=>{this.Oe.enqueueAndForget(()=>this.sr===e?n():(x("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zC extends Sw{constructor(e,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle",n,r,s),this.N=i}Er(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const n=ZN(this.N,e),r=function(i){if(!("targetChange"in i))return le.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?le.min():s.readTime?ct(s.readTime):le.min()}(e);return this.listener.Tr(n,r)}Ir(e){const n={};n.database=Ho(this.N),n.addTarget=function(i,s){let o;const a=s.target;return o=Vc(a)?{documents:Uv(i,a)}:{query:Vv(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=Ov(i,s.resumeToken):s.snapshotVersion.compareTo(le.min())>0&&(o.readTime=jo(i,s.snapshotVersion.toTimestamp())),o}(this.N,e);const r=tC(this.N,e);r&&(n.labels=r),this.wr(n)}Ar(e){const n={};n.database=Ho(this.N),n.removeTarget=e,this.wr(n)}}class HC extends Sw{constructor(e,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle",n,r,s),this.N=i,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(e){return this.nr.ji("Write",e)}onMessage(e){if(se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const n=eC(e.writeResults,e.commitTime),r=ct(e.commitTime);return this.listener.vr(r,n)}return se(!e.writeResults||e.writeResults.length===0),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=Ho(this.N),this.wr(e)}Pr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Qc(this.N,r))};this.wr(n)}}/**
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
 */class KC extends class{}{constructor(e,n,r){super(),this.credentials=e,this.nr=n,this.N=r,this.Dr=!1}Cr(){if(this.Dr)throw new R(v.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,n,r){return this.Cr(),this.credentials.getToken().then(i=>this.nr.Li(e,n,r,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new R(v.UNKNOWN,i.toString())})}Ki(e,n,r){return this.Cr(),this.credentials.getToken().then(i=>this.nr.Ki(e,n,r,i)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&this.credentials.invalidateToken(),i):new R(v.UNKNOWN,i.toString())})}terminate(){this.Dr=!0}}class WC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){this.Nr===0&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(e){this.state==="Online"?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,e==="Online"&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(We(n),this.$r=!1):x("OnlineStateTracker",n)}Br(){this.kr!==null&&(this.kr.cancel(),this.kr=null)}}/**
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
 */class GC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=s,this.Qr.Ei(o=>{r.enqueueAndForget(async()=>{wr(this)&&(x("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=$(a);c.Kr.add(4),await bs(c),c.Wr.set("Unknown"),c.Kr.delete(4),await Jo(c)}(this))})}),this.Wr=new WC(r,i)}}async function Jo(t){if(wr(t))for(const e of t.jr)await e(!0)}async function bs(t){for(const e of t.jr)await e(!1)}function su(t,e){const n=$(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),Rd(n)?Cd(n):Ss(n).cr()&&Nd(n,e))}function Xo(t,e){const n=$(t),r=Ss(n);n.qr.delete(e),r.cr()&&Aw(n,e),n.qr.size===0&&(r.cr()?r.lr():wr(n)&&n.Wr.set("Unknown"))}function Nd(t,e){t.Gr.Y(e.targetId),Ss(t).Ir(e)}function Aw(t,e){t.Gr.Y(e),Ss(t).Ar(e)}function Cd(t){t.Gr=new WN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),Ss(t).start(),t.Wr.Or()}function Rd(t){return wr(t)&&!Ss(t).ar()&&t.qr.size>0}function wr(t){return $(t).Kr.size===0}function Nw(t){t.Gr=void 0}async function QC(t){t.qr.forEach((e,n)=>{Nd(t,e)})}async function YC(t,e){Nw(t),Rd(t)?(t.Wr.Lr(e),Cd(t)):t.Wr.set("Unknown")}async function JC(t,e,n){if(t.Wr.set("Online"),e instanceof Nv&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.qr.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.qr.delete(o),r.Gr.removeTarget(o))}(t,e)}catch(r){x("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ou(t,r)}else if(e instanceof Gc?t.Gr.rt(e):e instanceof Av?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(le.min()))try{const r=await gw(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Gr._t(s);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.qr.get(c);u&&i.qr.set(c,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const c=i.qr.get(a);if(!c)return;i.qr.set(a,c.withResumeToken(at.EMPTY_BYTE_STRING,c.snapshotVersion)),Aw(i,a);const u=new mr(c.target,a,1,c.sequenceNumber);Nd(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){x("RemoteStore","Failed to raise snapshot:",r),await ou(t,r)}}async function ou(t,e,n){if(!oi(e))throw e;t.Kr.add(1),await bs(t),t.Wr.set("Offline"),n||(n=()=>gw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{x("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await Jo(t)})}function Cw(t,e){return e().catch(n=>ou(t,n,e))}async function Ts(t){const e=$(t),n=_r(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;XC(e);)try{const i=await RC(e.localStore,r);if(i===null){e.Ur.length===0&&n.lr();break}r=i.batchId,ZC(e,i)}catch(i){await ou(e,i)}Rw(e)&&kw(e)}function XC(t){return wr(t)&&t.Ur.length<10}function ZC(t,e){t.Ur.push(e);const n=_r(t);n.cr()&&n.br&&n.Pr(e.mutations)}function Rw(t){return wr(t)&&!_r(t).ar()&&t.Ur.length>0}function kw(t){_r(t).start()}async function eR(t){_r(t).Sr()}async function tR(t){const e=_r(t);for(const n of t.Ur)e.Pr(n.mutations)}async function nR(t,e,n){const r=t.Ur.shift(),i=ld.from(r,e,n);await Cw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ts(t)}async function rR(t,e){e&&_r(t).br&&await async function(n,r){if(i=r.code,Ev(i)&&i!==v.ABORTED){const s=n.Ur.shift();_r(n).hr(),await Cw(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Ts(n)}var i}(t,e),Rw(t)&&kw(t)}async function kd(t,e){const n=$(t);e?(n.Kr.delete(2),await Jo(n)):e||(n.Kr.add(2),await bs(n),n.Wr.set("Unknown"))}function Ss(t){return t.zr||(t.zr=function(e,n,r){const i=$(e);return i.Cr(),new zC(n,i.nr,i.credentials,i.N,r)}(t.datastore,t.asyncQueue,{Si:QC.bind(null,t),Ci:YC.bind(null,t),Tr:JC.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),Rd(t)?Cd(t):t.Wr.set("Unknown")):(await t.zr.stop(),Nw(t))})),t.zr}function _r(t){return t.Hr||(t.Hr=function(e,n,r){const i=$(e);return i.Cr(),new HC(n,i.nr,i.credentials,i.N,r)}(t.datastore,t.asyncQueue,{Si:eR.bind(null,t),Ci:rR.bind(null,t),Vr:tR.bind(null,t),vr:nR.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await Ts(t)):(await t.Hr.stop(),t.Ur.length>0&&(x("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr}/**
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
 */class Od{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new st,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Od(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function As(t,e){if(We("AsyncQueue",`${e}: ${t}`),oi(t))return new R(v.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ns{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=sd(),this.sortedSet=new Ze(this.comparator)}static emptySet(e){return new Ns(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ow{constructor(){this.Jr=new Ze(Y.comparator)}track(e){const n=e.doc.key,r=this.Jr.get(n);r?e.type!==0&&r.type===3?this.Jr=this.Jr.insert(n,e):e.type===3&&r.type!==1?this.Jr=this.Jr.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Jr=this.Jr.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Jr=this.Jr.remove(n):e.type===1&&r.type===2?this.Jr=this.Jr.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Jr=this.Jr.insert(n,{type:2,doc:e.doc}):X():this.Jr=this.Jr.insert(n,e)}Yr(){const e=[];return this.Jr.inorderTraversal((n,r)=>{e.push(r)}),e}}class Cs{constructor(e,n,r,i,s,o,a,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Cs(e,n,Ns.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class iR{constructor(){this.Xr=void 0,this.listeners=[]}}class sR{constructor(){this.queries=new _s(e=>av(e),Mo),this.onlineState="Unknown",this.Zr=new Set}}async function Dd(t,e){const n=$(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new iR),i)try{s.Xr=await n.onListen(r)}catch(o){const a=As(o,`Initialization of query '${nd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.eo(n.onlineState),s.Xr&&e.no(s.Xr)&&xd(n)}async function Pd(t,e){const n=$(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function oR(t,e){const n=$(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.no(i)&&(r=!0);o.Xr=i}}r&&xd(n)}function aR(t,e,n){const r=$(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function xd(t){t.Zr.forEach(e=>{e.next()})}class Ld{constructor(e,n,r){this.query=e,this.so=n,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=r||{}}no(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.io?this.oo(e)&&(this.so.next(e),n=!0):this.ao(e,this.onlineState)&&(this.co(e),n=!0),this.ro=e,n}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let n=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),n=!0),n}ao(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.uo||!r)&&(!e.docs.isEmpty()||n==="Offline")}oo(e){if(e.docChanges.length>0)return!0;const n=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}co(e){e=Cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}/**
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
 */class cR{constructor(e,n){this.payload=e,this.byteLength=n}ho(){return"metadata"in this.payload}}/**
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
 */class Dw{constructor(e){this.N=e}zn(e){return Tn(this.N,e)}Hn(e){return e.metadata.exists?Mv(this.N,e.document,!1):$e.newNoDocument(this.zn(e.metadata.name),this.Jn(e.metadata.readTime))}Jn(e){return ct(e)}}class uR{constructor(e,n,r){this.lo=e,this.localStore=n,this.N=r,this.queries=[],this.documents=[],this.progress=Pw(e)}fo(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++n):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++n),n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}wo(e){const n=new Map,r=new Dw(this.N);for(const i of e)if(i.metadata.queries){const s=r.zn(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||Ce()).add(s);n.set(o,a)}}return n}async complete(){const e=await OC(this.localStore,new Dw(this.N),this.documents,this.lo.id),n=this.wo(this.documents);for(const r of this.queries)await DC(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",new SC(Object.assign({},this.progress),e)}}function Pw(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class xw{constructor(e){this.key=e}}class Lw{constructor(e){this.key=e}}class Mw{constructor(e,n){this.query=e,this._o=n,this.mo=null,this.current=!1,this.yo=Ce(),this.mutatedKeys=Ce(),this.po=cv(e),this.Eo=new Ns(this.po)}get To(){return this._o}Io(e,n){const r=n?n.Ao:new Ow,i=n?n.Eo:this.Eo;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=Bc(this.query)&&i.size===this.query.limit?i.last():null,u=qc(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const d=i.get(l),p=Fo(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),E=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let I=!1;d&&p?d.data.isEqual(p.data)?g!==E&&(r.track({type:3,doc:p}),I=!0):this.Ro(d,p)||(r.track({type:2,doc:p}),I=!0,(c&&this.po(p,c)>0||u&&this.po(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),I=!0):d&&!p&&(r.track({type:1,doc:d}),I=!0,(c||u)&&(a=!0)),I&&(p?(o=o.add(p),s=E?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),Bc(this.query)||qc(this.query))for(;o.size>this.query.limit;){const l=Bc(this.query)?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{Eo:o,Ao:r,Ln:a,mutatedKeys:s}}Ro(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Eo;this.Eo=e.Eo,this.mutatedKeys=e.mutatedKeys;const s=e.Ao.Yr();s.sort((u,l)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return p(h)-p(d)}(u.type,l.type)||this.po(u.doc,l.doc)),this.bo(r);const o=n?this.Po():[],a=this.yo.size===0&&this.current?1:0,c=a!==this.mo;return this.mo=a,s.length!==0||c?{snapshot:new Cs(this.query,e.Eo,i,s,e.mutatedKeys,a===0,c,!1),vo:o}:{vo:o}}eo(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new Ow,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.Eo.has(e)&&!this.Eo.get(e).hasLocalMutations}bo(e){e&&(e.addedDocuments.forEach(n=>this._o=this._o.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this._o=this._o.delete(n)),this.current=e.current)}Po(){if(!this.current)return[];const e=this.yo;this.yo=Ce(),this.Eo.forEach(r=>{this.Vo(r.key)&&(this.yo=this.yo.add(r.key))});const n=[];return e.forEach(r=>{this.yo.has(r)||n.push(new Lw(r))}),this.yo.forEach(r=>{e.has(r)||n.push(new xw(r))}),n}So(e){this._o=e.Gn,this.yo=Ce();const n=this.Io(e.documents);return this.applyChanges(n,!0)}Do(){return Cs.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,this.mo===0)}}class lR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class hR{constructor(e){this.key=e,this.Co=!1}}class dR{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.No={},this.xo=new _s(a=>av(a),Mo),this.ko=new Map,this.$o=new Set,this.Oo=new Ze(Y.comparator),this.Fo=new Map,this.Mo=new _d,this.Lo={},this.Bo=new Map,this.Uo=ci.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return this.qo===!0}}async function fR(t,e){const n=Bd(t);let r,i;const s=n.xo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const o=await Is(n.localStore,on(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Md(n,e,r,a==="current"),n.isPrimaryClient&&su(n.remoteStore,o)}return i}async function Md(t,e,n,r){t.Ko=(l,h,d)=>async function(p,g,E,I){let w=g.view.Io(E);w.Ln&&(w=await tu(p.localStore,g.query,!1).then(({documents:U})=>g.view.Io(U,w)));const C=I&&I.targetChanges.get(g.targetId),M=g.view.applyChanges(w,p.isPrimaryClient,C);return Vd(p,g.targetId,M.vo),M.snapshot}(t,l,h,d);const i=await tu(t.localStore,e,!0),s=new Mw(e,i.Gn),o=s.Io(i.documents),a=qo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),c=s.applyChanges(o,t.isPrimaryClient,a);Vd(t,n,c.vo);const u=new lR(e,n,s);return t.xo.set(e,u),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}async function pR(t,e){const n=$(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter(s=>!Mo(s,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Es(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Xo(n.remoteStore,r.targetId),Rs(n,r.targetId)}).catch(ui)):(Rs(n,r.targetId),await Es(n.localStore,r.targetId,!0))}async function mR(t,e,n){const r=qd(t);try{const i=await function(s,o){const a=$(s),c=ot.now(),u=o.reduce((h,d)=>h.add(d.key),Ce());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Qn.Pn(h,u).next(d=>{l=d;const p=[];for(const g of o){const E=$N(g,l.get(g.key));E!=null&&p.push(new fr(g.key,E,ev(E.value.mapValue),Qe.exists(!0)))}return a.In.addMutationBatch(h,c,p,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let c=s.Lo[s.currentUser.toKey()];c||(c=new Ze(pe)),c=c.insert(o,a),s.Lo[s.currentUser.toKey()]=c}(r,i.batchId,n),await Hn(r,i.changes),await Ts(r.remoteStore)}catch(i){const s=As(i,"Failed to persist write");n.reject(s)}}async function Fw(t,e){const n=$(t);try{const r=await CC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fo.get(s);o&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Co=!0:i.modifiedDocuments.size>0?se(o.Co):i.removedDocuments.size>0&&(se(o.Co),o.Co=!1))}),await Hn(n,r,e)}catch(r){await ui(r)}}function Uw(t,e,n){const r=$(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xo.forEach((s,o)=>{const a=o.view.eo(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=$(s);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.eo(o)&&(c=!0)}),c&&xd(a)}(r.eventManager,e),i.length&&r.No.Tr(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gR(t,e,n){const r=$(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),s=i&&i.key;if(s){let o=new Ze(Y.comparator);o=o.insert(s,$e.newNoDocument(s,le.min()));const a=Ce().add(s),c=new Bo(le.min(),new Map,new Be(pe),o,a);await Fw(r,c),r.Oo=r.Oo.remove(s),r.Fo.delete(e),$d(r)}else await Es(r.localStore,e,!1).then(()=>Rs(r,e,n)).catch(ui)}async function yR(t,e){const n=$(t),r=e.batch.batchId;try{const i=await NC(n.localStore,e);Ud(n,r,null),Fd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Hn(n,i)}catch(i){await ui(i)}}async function vR(t,e,n){const r=$(t);try{const i=await function(s,o){const a=$(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.In.lookupMutationBatch(c,o).next(l=>(se(l!==null),u=l.keys(),a.In.removeMutationBatch(c,l))).next(()=>a.In.performConsistencyCheck(c)).next(()=>a.Qn.Pn(c,u))})}(r.localStore,e);Ud(r,e,n),Fd(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Hn(r,i)}catch(i){await ui(i)}}async function wR(t,e){const n=$(t);wr(n.remoteStore)||x("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=$(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.In.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Bo.get(r)||[];i.push(e),n.Bo.set(r,i)}catch(r){const i=As(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function Fd(t,e){(t.Bo.get(e)||[]).forEach(n=>{n.resolve()}),t.Bo.delete(e)}function Ud(t,e,n){const r=$(t);let i=r.Lo[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}function Rs(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(r=>{t.Mo.containsKey(r)||Vw(t,r)})}function Vw(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);n!==null&&(Xo(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),$d(t))}function Vd(t,e,n){for(const r of n)r instanceof xw?(t.Mo.addReference(r.key,e),_R(t,r)):r instanceof Lw?(x("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||Vw(t,r.key)):X()}function _R(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(x("SyncEngine","New document in limbo: "+n),t.$o.add(r),$d(t))}function $d(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new Y(Ae.fromString(e)),r=t.Uo.next();t.Fo.set(r,new hR(n)),t.Oo=t.Oo.insert(n,r),su(t.remoteStore,new mr(on(as(n.path)),r,2,Gt.T))}}async function Hn(t,e,n){const r=$(t),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach((a,c)=>{o.push(r.Ko(c,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),i.push(u);const l=wd.kn(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.No.Tr(i),await async function(a,c){const u=$(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>A.forEach(c,h=>A.forEach(h.Nn,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>A.forEach(h.xn,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!oi(l))throw l;x("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Un.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.Un=u.Un.insert(h,g)}}}(r.localStore,s))}async function IR(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){x("SyncEngine","User change. New user:",e.toKey());const r=await mw(n.localStore,e);n.currentUser=e,function(i,s){i.Bo.forEach(o=>{o.forEach(a=>{a.reject(new R(v.CANCELLED,s))})}),i.Bo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Hn(n,r.Wn)}}function ER(t,e){const n=$(t),r=n.Fo.get(e);if(r&&r.Co)return Ce().add(r.key);{let i=Ce();const s=n.ko.get(e);if(!s)return i;for(const o of s){const a=n.xo.get(o);i=i.unionWith(a.view.To)}return i}}async function bR(t,e){const n=$(t),r=await tu(n.localStore,e.query,!0),i=e.view.So(r);return n.isPrimaryClient&&Vd(n,e.targetId,i.vo),i}async function TR(t){const e=$(t);return ww(e.localStore).then(n=>Hn(e,n))}async function SR(t,e,n,r){const i=$(t),s=await function(o,a){const c=$(o),u=$(c.In);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.Xt(l,a).next(h=>h?c.Qn.Pn(l,h):A.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await Ts(i.remoteStore):n==="acknowledged"||n==="rejected"?(Ud(i,e,r||null),Fd(i,e),function(o,a){$($(o).In).te(a)}(i.localStore,e)):X(),await Hn(i,s)):x("SyncEngine","Cannot apply mutation batch with id: "+e)}async function AR(t,e){const n=$(t);if(Bd(n),qd(n),e===!0&&n.qo!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await $w(n,r.toArray());n.qo=!0,await kd(n.remoteStore,!0);for(const s of i)su(n.remoteStore,s)}else if(e===!1&&n.qo!==!1){const r=[];let i=Promise.resolve();n.ko.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Rs(n,o),Es(n.localStore,o,!0))),Xo(n.remoteStore,o)}),await i,await $w(n,r),function(s){const o=$(s);o.Fo.forEach((a,c)=>{Xo(o.remoteStore,c)}),o.Mo.us(),o.Fo=new Map,o.Oo=new Ze(Y.comparator)}(n),n.qo=!1,await kd(n.remoteStore,!1)}}async function $w(t,e,n){const r=$(t),i=[],s=[];for(const o of e){let a;const c=r.ko.get(o);if(c&&c.length!==0){a=await Is(r.localStore,on(c[0]));for(const u of c){const l=r.xo.get(u),h=await bR(r,l);h.snapshot&&s.push(h.snapshot)}}else{const u=await vw(r.localStore,o);a=await Is(r.localStore,u),await Md(r,Bw(u),o,!1)}i.push(a)}return r.No.Tr(s),i}function Bw(t){return sv(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function NR(t){const e=$(t);return $($(e.localStore).persistence).pn()}async function CR(t,e,n,r){const i=$(t);if(i.qo)x("SyncEngine","Ignoring unexpected query state notification.");else if(i.ko.has(e))switch(n){case"current":case"not-current":{const s=await ww(i.localStore),o=Bo.createSynthesizedRemoteEventForCurrentChange(e,n==="current");await Hn(i,s,o);break}case"rejected":await Es(i.localStore,e,!0),Rs(i,e,r);break;default:X()}}async function RR(t,e,n){const r=Bd(t);if(r.qo){for(const i of e){if(r.ko.has(i)){x("SyncEngine","Adding an already active target "+i);continue}const s=await vw(r.localStore,i),o=await Is(r.localStore,s);await Md(r,Bw(s),o.targetId,!1),su(r.remoteStore,o)}for(const i of n)r.ko.has(i)&&await Es(r.localStore,i,!1).then(()=>{Xo(r.remoteStore,i),Rs(r,i)}).catch(ui)}}function Bd(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ER.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gR.bind(null,e),e.No.Tr=oR.bind(null,e.eventManager),e.No.jo=aR.bind(null,e.eventManager),e}function qd(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vR.bind(null,e),e}function kR(t,e,n){const r=$(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const p=$(h),g=ct(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",E=>p.Je.getBundleMetadata(E,d.id)).then(E=>!!E&&E.createTime.compareTo(g)>=0)}(i.localStore,a))return await s.close(),void o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a));o._updateProgress(Pw(a));const c=new uR(a,i.localStore,s.N);let u=await s.Qo();for(;u;){const h=await c.fo(u);h&&o._updateProgress(h),u=await s.Qo()}const l=await c.complete();await Hn(i,l.Tn,void 0),await function(h,d){const p=$(h);return p.persistence.runTransaction("Save bundle","readwrite",g=>p.Je.saveBundleMetadata(g,d))}(i.localStore,a),o._completeWith(l.progress)}catch(a){Ro("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a)}})(r,e,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class qw{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=Yo(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return pw(this.persistence,new fw,e.initialUser,this.N)}Go(e){return new UC(Id.Ns,this.N)}Wo(e){return new Ew}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jw extends qw{constructor(e,n,r){super(),this.Jo=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await kC(this.localStore),await this.Jo.initialize(this,e),await qd(this.Jo.syncEngine),await Ts(this.Jo.remoteStore),await this.persistence.nn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Ho(e){return pw(this.persistence,new fw,e.initialUser,this.N)}zo(e){const n=this.persistence.referenceDelegate.garbageCollector;return new wC(n,e.asyncQueue)}Go(e){const n=vd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Bt.withCacheSize(this.cacheSizeBytes):Bt.DEFAULT;return new yd(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,Tw(),iu(),this.N,this.sharedClientState,!!this.forceOwnership)}Wo(e){return new Ew}}class OR extends jw{constructor(e,n){super(e,n,!1),this.Jo=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Jo.syncEngine;this.sharedClientState instanceof Sd&&(this.sharedClientState.syncEngine={_i:SR.bind(null,n),mi:CR.bind(null,n),gi:RR.bind(null,n),pn:NR.bind(null,n),wi:TR.bind(null,n)},await this.sharedClientState.start()),await this.persistence.nn(async r=>{await AR(this.Jo.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):r||this.gcScheduler.stop())})}Wo(e){const n=Tw();if(!Sd.bt(n))throw new R(v.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=vd(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Sd(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class jd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Uw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=IR.bind(null,this.syncEngine),await kd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new sR}createDatastore(e){const n=Yo(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new jC(i));var i;return function(s,o,a){return new KC(s,o,a)}(e.credentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Uw(this.syncEngine,a,0),o=bw.bt()?new bw:new $C,new GC(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,c,u){const l=new dR(r,i,s,o,a,c);return u&&(l.qo=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=$(e);x("RemoteStore","RemoteStore shutting down."),n.Kr.add(5),await bs(n),n.Qr.shutdown(),n.Wr.set("Unknown")}(this.remoteStore)}}/**
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
 */function zw(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
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
 */class au{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class DR{constructor(e,n){this.Zo=e,this.N=n,this.metadata=new st,this.buffer=new Uint8Array,this.ta=new TextDecoder("utf-8"),this.ea().then(r=>{r&&r.ho()?this.metadata.resolve(r.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.payload)}`))},r=>this.metadata.reject(r))}close(){return this.Zo.cancel()}async getMetadata(){return this.metadata.promise}async Qo(){return await this.getMetadata(),this.ea()}async ea(){const e=await this.na();if(e===null)return null;const n=this.ta.decode(e),r=Number(n);isNaN(r)&&this.sa(`length string (${n}) is not valid number`);const i=await this.ia(r);return new cR(JSON.parse(i),e.length+r)}ra(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async na(){for(;this.ra()<0&&!await this.oa(););if(this.buffer.length===0)return null;const e=this.ra();e<0&&this.sa("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async ia(e){for(;this.buffer.length<e;)await this.oa()&&this.sa("Reached the end of bundle when more is expected.");const n=this.ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}sa(e){throw this.Zo.cancel(),new Error(`Invalid bundle format: ${e}`)}async oa(){const e=await this.Zo.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class PR{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new R(v.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=$(r),o=Ho(s.N)+"/documents",a={documents:i.map(h=>zo(s.N,h))},c=await s.Ki("BatchGetDocuments",o,a),u=new Map;c.forEach(h=>{const d=XN(s.N,h);u.set(d.key.toString(),d)});const l=[];return i.forEach(h=>{const d=u.get(h.toString());se(!!d),l.push(d)}),l}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new $o(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=Y.fromPath(r);this.mutations.push(new id(i,this.precondition(i)))}),await async function(n,r){const i=$(n),s=Ho(i.N)+"/documents",o={writes:r.map(a=>Qc(i.N,a))};await i.Li("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw X();n=le.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new R(v.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?Qe.updateTime(n):Qe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(le.min()))throw new R(v.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Qe.updateTime(n)}return Qe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class xR{constructor(e,n,r,i){this.asyncQueue=e,this.datastore=n,this.updateFunction=r,this.deferred=i,this.aa=5,this.rr=new Ad(this.asyncQueue,"transaction_retry")}run(){this.aa-=1,this.ca()}ca(){this.rr.Xi(async()=>{const e=new PR(this.datastore),n=this.ua(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ha(i)}))}).catch(r=>{this.ha(r)})})}ua(e){try{const n=this.updateFunction(e);return!ti(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}ha(e){this.aa>0&&this.la(e)?(this.aa-=1,this.asyncQueue.enqueueAndForget(()=>(this.ca(),Promise.resolve()))):this.deferred.reject(e)}la(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!Ev(n)}return!1}}/**
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
 */class LR{constructor(e,n,r){this.credentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=vt.UNAUTHENTICATED,this.clientId=Hy.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(n,async i=>{x("FirestoreClient","Received user=",i.uid),await this.credentialListener(i),this.user=i})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new st;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(n){const r=As(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hw(t,e){t.asyncQueue.verifyOperationInProgress(),x("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await mw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Kw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zd(t);x("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>async function(s,o){const a=$(s);a.asyncQueue.verifyOperationInProgress(),x("RemoteStore","RemoteStore received new credentials");const c=wr(a);a.Kr.add(3),await bs(a),c&&a.Wr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Kr.delete(3),await Jo(a)}(e.remoteStore,i)),t.onlineComponents=e}async function zd(t){return t.offlineComponents||(x("FirestoreClient","Using default OfflineComponentProvider"),await Hw(t,new qw)),t.offlineComponents}async function cu(t){return t.onlineComponents||(x("FirestoreClient","Using default OnlineComponentProvider"),await Kw(t,new jd)),t.onlineComponents}function Ww(t){return zd(t).then(e=>e.persistence)}function Hd(t){return zd(t).then(e=>e.localStore)}function Gw(t){return cu(t).then(e=>e.remoteStore)}function Kd(t){return cu(t).then(e=>e.syncEngine)}async function ks(t){const e=await cu(t),n=e.eventManager;return n.onListen=fR.bind(null,e.syncEngine),n.onUnlisten=pR.bind(null,e.syncEngine),n}function MR(t){return t.asyncQueue.enqueue(async()=>{const e=await Ww(t),n=await Gw(t);return e.setNetworkEnabled(!0),function(r){const i=$(r);return i.Kr.delete(0),Jo(i)}(n)})}function FR(t){return t.asyncQueue.enqueue(async()=>{const e=await Ww(t),n=await Gw(t);return e.setNetworkEnabled(!1),async function(r){const i=$(r);i.Kr.add(0),await bs(i),i.Wr.set("Offline")}(n)})}function UR(t,e){const n=new st;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,c){const u=$(a);return u.persistence.runTransaction("read document","readonly",l=>u.Qn.An(l,c))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new R(v.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=As(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await Hd(t),e,n)),n.promise}function Qw(t,e,n={}){const r=new st;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new au({next:h=>{s.enqueueAndForget(()=>Pd(i,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new R(v.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new R(v.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Ld(as(o.path),u,{includeMetadataChanges:!0,uo:!0});return Dd(i,l)}(await ks(t),t.asyncQueue,e,n,r)),r.promise}function VR(t,e){const n=new st;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await tu(r,i,!0),a=new Mw(i,o.Gn),c=a.Io(o.documents),u=a.applyChanges(c,!1);s.resolve(u.snapshot)}catch(o){const a=As(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await Hd(t),e,n)),n.promise}function Yw(t,e,n={}){const r=new st;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,c){const u=new au({next:h=>{s.enqueueAndForget(()=>Pd(i,l)),h.fromCache&&a.source==="server"?c.reject(new R(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Ld(o,u,{includeMetadataChanges:!0,uo:!0});return Dd(i,l)}(await ks(t),t.asyncQueue,e,n,r)),r.promise}function $R(t,e){const n=new au(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){$(r).Zr.add(i),i.next()}(await ks(t),n)),()=>{n.Xo(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){$(r).Zr.delete(i)}(await ks(t),n))}}function BR(t,e){const n=new st;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(i){return cu(i).then(s=>s.datastore)}(t);new xR(t.asyncQueue,r,e,n).run()}),n.promise}function qR(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(c,u){return new DR(c,u)}(function(c,u){if(c instanceof Uint8Array)return zw(c,u);if(c instanceof ArrayBuffer)return zw(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,Yo(e));t.asyncQueue.enqueueAndForget(async()=>{kR(await Kd(t),i,r)})}function jR(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=$(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Je.getNamedQuery(s,r))}(await Hd(t),e))}class zR{constructor(e,n,r,i,s,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Os{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Os&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Jw=new Map;/**
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
 */function Wd(t,e,n){if(!n)throw new R(v.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Xw(t,e,n,r){if(e===!0&&r===!0)throw new R(v.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zw(t){if(!Y.isDocumentKey(t))throw new R(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function e_(t){if(Y.isDocumentKey(t))throw new R(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function uu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Se(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uu(t);throw new R(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function t_(t,e){if(e<=0)throw new R(v.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class n_{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new R(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Xw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Zo{constructor(e,n){this._credentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new n_({}),this._settingsFrozen=!1,e instanceof Os?this._databaseId=e:(this._app=e,this._databaseId=function(r){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new R(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Os(r.options.projectId)}(e))}get app(){if(!this._app)throw new R(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new n_(e),e.credentials!==void 0&&(this._credentials=function(n){if(!n)return new pN;switch(n.type){case"gapi":const r=n.client;return se(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new vN(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new R(v.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Jw.get(e);n&&(x("ComponentProvider","Removing Datastore"),Jw.delete(e),n.terminate())}(this),Promise.resolve()}}function HR(t,e,n,r={}){var i;const s=(t=Se(t,Zo))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Ro("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=vt.MOCK_USER;else{o=H0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new R(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new vt(c)}t._credentials=new mN(new zy(o,a))}}/**
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
 */class Me{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new An(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}}class Ct{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ct(this.firestore,e,this._query)}}class An extends Ct{constructor(e,n,r){super(e,n,as(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new Y(e))}withConverter(e){return new An(this.firestore,e,this._path)}}function r_(t,e,...n){if(t=te(t),Wd("collection","path",e),t instanceof Zo){const r=Ae.fromString(e,...n);return e_(r),new An(t,null,r)}{if(!(t instanceof Me||t instanceof An))throw new R(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return e_(r),new An(t.firestore,null,r)}}function KR(t,e){if(t=Se(t,Zo),Wd("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new R(v.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ct(t,null,function(n){return new qn(Ae.emptyPath(),n)}(e))}function lu(t,e,...n){if(t=te(t),arguments.length===1&&(e=Hy.I()),Wd("doc","path",e),t instanceof Zo){const r=Ae.fromString(e,...n);return Zw(r),new Me(t,null,new Y(r))}{if(!(t instanceof Me||t instanceof An))throw new R(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ae.fromString(e,...n));return Zw(r),new Me(t.firestore,t instanceof An?t.converter:null,new Y(r))}}function i_(t,e){return t=te(t),e=te(e),(t instanceof Me||t instanceof An)&&(e instanceof Me||e instanceof An)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function s_(t,e){return t=te(t),e=te(e),t instanceof Ct&&e instanceof Ct&&t.firestore===e.firestore&&Mo(t._query,e._query)&&t.converter===e.converter}/**
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
 */class WR{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new Ad(this,"async_queue_retry"),this.Ea=()=>{const n=iu();n&&x("AsyncQueue","Visibility state changed to "+n.visibilityState),this.rr.tr()};const e=iu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ta(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const n=iu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Ea)}}enqueue(e){if(this.Ta(),this.wa)return new Promise(()=>{});const n=new st;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.da.push(e),this.Aa()))}async Aa(){if(this.da.length!==0){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!oi(e))throw e;x("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(e){const n=this.fa.then(()=>(this.ga=!0,e().catch(r=>{throw this.ma=r,this.ga=!1,We("INTERNAL UNHANDLED ERROR: ",function(i){let s=i.message||"";return i.stack&&(s=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),s}(r)),r}).then(r=>(this.ga=!1,r))));return this.fa=n,n}enqueueAfterDelay(e,n,r){this.Ta(),this.pa.indexOf(e)>-1&&(n=0);const i=Od.createAndSchedule(this,e,n,r,s=>this.Ra(s));return this._a.push(i),i}Ta(){this.ma&&X()}verifyOperationInProgress(){}async ba(){let e;do e=this.fa,await e;while(e!==this.fa)}Pa(e){for(const n of this._a)if(n.timerId===e)return!0;return!1}va(e){return this.ba().then(()=>{this._a.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._a)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ba()})}Va(e){this.pa.push(e)}Ra(e){const n=this._a.indexOf(e);this._a.splice(n,1)}}function Gd(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class GR{constructor(){this._progressObserver={},this._taskCompletionResolver=new st,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const QR=-1;class je extends Zo{constructor(e,n){super(e,n),this.type="firestore",this._queue=new WR,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||o_(this),this._firestoreClient.terminate()}}function lt(t){return t._firestoreClient||o_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function o_(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new zR(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new LR(t._credentials,t._queue,r)}function YR(t,e){c_(t=Se(t,je));const n=lt(t),r=t._freezeSettings(),i=new jd;return a_(n,i,new jw(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function JR(t){c_(t=Se(t,je));const e=lt(t),n=t._freezeSettings(),r=new jd;return a_(e,r,new OR(r,n.cacheSizeBytes))}function a_(t,e,n){const r=new st;return t.asyncQueue.enqueue(async()=>{try{await Hw(t,n),await Kw(t,e),r.resolve()}catch(i){if(!function(s){return s.name==="FirebaseError"?s.code===v.FAILED_PRECONDITION||s.code===v.UNIMPLEMENTED:typeof DOMException!="undefined"&&s instanceof DOMException?s.code===22||s.code===20||s.code===11:!0}(i))throw i;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function XR(t){if(t._initialized&&!t._terminated)throw new R(v.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new st;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!pn.bt())return Promise.resolve();const r=n+"main";await pn.delete(r)}(vd(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function ZR(t){return function(e){const n=new st;return e.asyncQueue.enqueueAndForget(async()=>wR(await Kd(e),n)),n.promise}(lt(t=Se(t,je)))}function ek(t){return MR(lt(t=Se(t,je)))}function tk(t){return FR(lt(t=Se(t,je)))}function nk(t,e){const n=lt(t=Se(t,je)),r=new GR;return qR(n,t._databaseId,e,r),r}function rk(t,e){return jR(lt(t=Se(t,je)),e).then(n=>n?new Ct(t,null,n.query):null)}function c_(t){if(t._initialized||t._terminated)throw new R(v.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Ir{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new R(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nn(at.fromBase64String(e))}catch(n){throw new R(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Nn(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class li{constructor(e){this._methodName=e}}/**
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
 */class hu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new R(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new R(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
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
 */const ik=/^__.*__$/;class sk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vo(e,this.data,n,this.fieldTransforms)}}class u_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new fr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function l_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class du{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.N=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Sa(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new du(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Ca({path:r,xa:!1});return i.ka(e),i}$a(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Ca({path:r,xa:!1});return i.Sa(),i}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return pu(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(e.length===0)throw this.Fa("Document fields must not be empty");if(l_(this.Da)&&ik.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class ok{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.N=r||Yo(e)}Ba(e,n,r,i=!1){return new du({Da:e,methodName:n,La:r,path:wt.emptyPath(),xa:!1,Ma:i},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function hi(t){const e=t._freezeSettings(),n=Yo(t._databaseId);return new ok(t._databaseId,!!e.ignoreUndefinedProperties,n)}function fu(t,e,n,r,i,s={}){const o=t.Ba(s.merge||s.mergeFields?2:0,e,n,i);Xd("Data must be an object, but it was:",o,r);const a=f_(r,o);let c,u;if(s.merge)c=new rs(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Zd(e,h,n);if(!o.contains(d))throw new R(v.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);m_(l,d)||l.push(d)}c=new rs(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new sk(new At(a),c,u)}class ea extends li{_toFieldTransform(e){if(e.Da!==2)throw e.Da===1?e.Fa(`${this._methodName}() can only appear at the top level of your update data`):e.Fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ea}}function h_(t,e,n){return new du({Da:3,La:e.settings.La,methodName:t._methodName,xa:n},e.databaseId,e.N,e.ignoreUndefinedProperties)}class Qd extends li{_toFieldTransform(e){return new Uo(e.path,new us)}isEqual(e){return e instanceof Qd}}class ak extends li{constructor(e,n){super(e),this.Ua=n}_toFieldTransform(e){const n=h_(this,e,!0),r=this.Ua.map(s=>di(s,n)),i=new ri(r);return new Uo(e.path,i)}isEqual(e){return this===e}}class ck extends li{constructor(e,n){super(e),this.Ua=n}_toFieldTransform(e){const n=h_(this,e,!0),r=this.Ua.map(s=>di(s,n)),i=new ii(r);return new Uo(e.path,i)}isEqual(e){return this===e}}class uk extends li{constructor(e,n){super(e),this.qa=n}_toFieldTransform(e){const n=new ls(e.N,hv(e.N,this.qa));return new Uo(e.path,n)}isEqual(e){return this===e}}function Yd(t,e,n,r){const i=t.Ba(1,e,n);Xd("Data must be an object, but it was:",i,r);const s=[],o=At.empty();ei(r,(c,u)=>{const l=ef(e,c,n);u=te(u);const h=i.$a(l);if(u instanceof ea)s.push(l);else{const d=di(u,h);d!=null&&(s.push(l),o.set(l,d))}});const a=new rs(s);return new u_(o,a,i.fieldTransforms)}function Jd(t,e,n,r,i,s){const o=t.Ba(1,e,n),a=[Zd(e,r,n)],c=[i];if(s.length%2!=0)throw new R(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Zd(e,s[d])),c.push(s[d+1]);const u=[],l=At.empty();for(let d=a.length-1;d>=0;--d)if(!m_(u,a[d])){const p=a[d];let g=c[d];g=te(g);const E=o.$a(p);if(g instanceof ea)u.push(p);else{const I=di(g,E);I!=null&&(u.push(p),l.set(p,I))}}const h=new rs(u);return new u_(l,h,o.fieldTransforms)}function d_(t,e,n,r=!1){return di(n,t.Ba(r?4:3,e))}function di(t,e){if(p_(t=te(t)))return Xd("Unsupported field value:",e,t),f_(t,e);if(t instanceof li)return function(n,r){if(!l_(r.Da))throw r.Fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xa&&e.Da!==4)throw e.Fa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=di(o,r.Oa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=te(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return hv(r.N,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ot.fromDate(n);return{timestampValue:jo(r.N,i)}}if(n instanceof ot){const i=new ot(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:jo(r.N,i)}}if(n instanceof hu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Nn)return{bytesValue:Ov(r.N,n._byteString)};if(n instanceof Me){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.Fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:od(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Fa(`Unsupported field value: ${uu(n)}`)}(t,e)}function f_(t,e){const n={};return Gy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ei(t,(r,i)=>{const s=di(i,e.Na(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function p_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof hu||t instanceof Nn||t instanceof Me||t instanceof li)}function Xd(t,e,n){if(!p_(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=uu(n);throw r==="an object"?e.Fa(t+" a custom object"):e.Fa(t+" "+r)}}function Zd(t,e,n){if((e=te(e))instanceof Ir)return e._internalPath;if(typeof e=="string")return ef(t,e);throw pu("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const lk=new RegExp("[~\\*/\\[\\]]");function ef(t,e,n){if(e.search(lk)>=0)throw pu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ir(...e.split("."))._internalPath}catch(r){throw pu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new R(v.INVALID_ARGUMENT,a+t+c)}function m_(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ta{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hk extends ta{data(){return super.data()}}function mu(t,e){return typeof e=="string"?ef(t,e):e instanceof Ir?e._internalPath:e._delegate._internalPath}/**
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
 */class fi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Kn extends ta{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new na(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class na extends Kn{data(e={}){return super.data(e)}}class Er{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new fi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new na(this._firestore,this._userDataWriter,r.key,r,new fi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new R(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new na(r._firestore,r._userDataWriter,o.doc.key,o.doc,new fi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new na(r._firestore,r._userDataWriter,o.doc.key,o.doc,new fi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:dk(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}function g_(t,e){return t instanceof Kn&&e instanceof Kn?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Er&&e instanceof Er&&t._firestore===e._firestore&&s_(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function y_(t){if(qc(t)&&t.explicitOrderBy.length===0)throw new R(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ra{}function br(t,...e){for(const n of e)t=n._apply(t);return t}class fk extends ra{constructor(e,n,r){super(),this.Ka=e,this.ja=n,this.Qa=r,this.type="where"}_apply(e){const n=hi(e.firestore),r=function(i,s,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new R(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on FieldPath.documentId().`);if(u==="in"||u==="not-in"){b_(l,u);const p=[];for(const g of l)p.push(E_(a,i,g));h={arrayValue:{values:p}}}else h=E_(a,i,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||b_(l,u),h=d_(o,s,l,u==="in"||u==="not-in");const d=Mt.create(c,u,h);return function(p,g){if(g.v()){const I=ed(p);if(I!==null&&!I.isEqual(g.field))throw new R(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${I.toString()}' and '${g.field.toString()}'`);const w=Zh(p);w!==null&&T_(p,g.field,w)}const E=function(I,w){for(const C of I.filters)if(w.indexOf(C.op)>=0)return C.op;return null}(p,function(I){switch(I){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(E!==null)throw E===g.op?new R(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new R(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${E.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.Ka,this.ja,this.Qa);return new Ct(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new qn(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function pk(t,e,n){const r=e,i=mu("where",t);return new fk(i,r,n)}class mk extends ra{constructor(e,n){super(),this.Ka=e,this.Wa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new R(v.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new R(v.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new os(i,s);return function(a,c){if(Zh(a)===null){const u=ed(a);u!==null&&T_(a,u,c.field)}}(r,o),o}(e._query,this.Ka,this.Wa);return new Ct(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new qn(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function gk(t,e="asc"){const n=e,r=mu("orderBy",t);return new mk(r,n)}class v_ extends ra{constructor(e,n,r){super(),this.type=e,this.Ga=n,this.za=r}_apply(e){return new Ct(e.firestore,e.converter,ov(e._query,this.Ga,this.za))}}function yk(t){return t_("limit",t),new v_("limit",t,"F")}function vk(t){return t_("limitToLast",t),new v_("limitToLast",t,"L")}class w_ extends ra{constructor(e,n,r){super(),this.type=e,this.Ha=n,this.Ja=r}_apply(e){const n=I_(e,this.type,this.Ha,this.Ja);return new Ct(e.firestore,e.converter,function(r,i){return new qn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function wk(...t){return new w_("startAt",t,!0)}function _k(...t){return new w_("startAfter",t,!1)}class __ extends ra{constructor(e,n,r){super(),this.type=e,this.Ha=n,this.Ja=r}_apply(e){const n=I_(e,this.type,this.Ha,this.Ja);return new Ct(e.firestore,e.converter,function(r,i){return new qn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function Ik(...t){return new __("endBefore",t,!0)}function Ek(...t){return new __("endAt",t,!1)}function I_(t,e,n,r){if(n[0]=te(n[0]),n[0]instanceof ta)return function(i,s,o,a,c){if(!a)throw new R(v.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of cs(i))if(l.field.isKeyField())u.push(Mc(s,a.key));else{const h=a.data.field(l.field);if(Gh(h))throw new R(v.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new R(v.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Lo(u,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=hi(t.firestore);return function(s,o,a,c,u,l){const h=s.explicitOrderBy;if(u.length>h.length)throw new R(v.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<u.length;p++){const g=u[p];if(h[p].field.isKeyField()){if(typeof g!="string")throw new R(v.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!td(s)&&g.indexOf("/")!==-1)throw new R(v.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const E=s.path.child(Ae.fromString(g));if(!Y.isDocumentKey(E))throw new R(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${c}() must result in a valid document path, but '${E}' is not because it contains an odd number of segments.`);const I=new Y(E);d.push(Mc(o,I))}else{const E=d_(a,c,g);d.push(E)}}return new Lo(d,l)}(t._query,t.firestore._databaseId,i,e,n,r)}}function E_(t,e,n){if(typeof(n=te(n))=="string"){if(n==="")throw new R(v.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!td(e)&&n.indexOf("/")!==-1)throw new R(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ae.fromString(n));if(!Y.isDocumentKey(r))throw new R(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Mc(t,new Y(r))}if(n instanceof Me)return Mc(t,n._key);throw new R(v.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${uu(n)}.`)}function b_(t,e){if(!Array.isArray(t)||t.length===0)throw new R(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new R(v.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function T_(t,e,n){if(!n.isEqual(e))throw new R(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class tf{convertValue(e,n="none"){switch(ni(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){const r={};return ei(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new hu(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Qy(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oo(e));default:return null}}convertTimestamp(e){const n=dr(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ae.fromString(e);se(zv(r));const i=new Os(r.get(1),r.get(3)),s=new Y(r.popFirst(5));return i.isEqual(n)||We(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function gu(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class bk extends tf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}/**
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
 */class Tk{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=hi(e)}set(e,n,r){this._verifyNotCommitted();const i=Tr(e,this._firestore),s=gu(i.converter,n,r),o=fu(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Qe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Tr(e,this._firestore);let o;return o=typeof(n=te(n))=="string"||n instanceof Ir?Jd(this._dataReader,"WriteBatch.update",s._key,n,r,i):Yd(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Qe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Tr(e,this._firestore);return this._mutations=this._mutations.concat(new $o(n._key,Qe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new R(v.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Tr(t,e){if((t=te(t)).firestore!==e)throw new R(v.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */function Sk(t){t=Se(t,Me);const e=Se(t.firestore,je);return Qw(lt(e),t._key).then(n=>nf(e,t,n))}class pi extends tf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}function Ak(t){t=Se(t,Me);const e=Se(t.firestore,je),n=lt(e),r=new pi(e);return UR(n,t._key).then(i=>new Kn(e,r,t._key,i,new fi(i!==null&&i.hasLocalMutations,!0),t.converter))}function Nk(t){t=Se(t,Me);const e=Se(t.firestore,je);return Qw(lt(e),t._key,{source:"server"}).then(n=>nf(e,t,n))}function Ck(t){t=Se(t,Ct);const e=Se(t.firestore,je),n=lt(e),r=new pi(e);return y_(t._query),Yw(n,t._query).then(i=>new Er(e,r,t,i))}function Rk(t){t=Se(t,Ct);const e=Se(t.firestore,je),n=lt(e),r=new pi(e);return VR(n,t._query).then(i=>new Er(e,r,t,i))}function kk(t){t=Se(t,Ct);const e=Se(t.firestore,je),n=lt(e),r=new pi(e);return Yw(n,t._query,{source:"server"}).then(i=>new Er(e,r,t,i))}function S_(t,e,n){t=Se(t,Me);const r=Se(t.firestore,je),i=gu(t.converter,e,n);return ia(r,[fu(hi(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Qe.none())])}function A_(t,e,n,...r){t=Se(t,Me);const i=Se(t.firestore,je),s=hi(i);let o;return o=typeof(e=te(e))=="string"||e instanceof Ir?Jd(s,"updateDoc",t._key,e,n,r):Yd(s,"updateDoc",t._key,e),ia(i,[o.toMutation(t._key,Qe.exists(!0))])}function Ok(t){return ia(Se(t.firestore,je),[new $o(t._key,Qe.none())])}function Dk(t,e){const n=Se(t.firestore,je),r=lu(t),i=gu(t.converter,e);return ia(n,[fu(hi(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Qe.exists(!1))]).then(()=>r)}function N_(t,...e){var n,r,i;t=te(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Gd(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Gd(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let c,u,l;if(t instanceof Me)u=Se(t.firestore,je),l=as(t._key.path),c={next:h=>{e[o]&&e[o](nf(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Se(t,Ct);u=Se(h.firestore,je),l=h._query;const d=new pi(u);c={next:p=>{e[o]&&e[o](new Er(u,d,h,p))},error:e[o+1],complete:e[o+2]},y_(t._query)}return function(h,d,p,g){const E=new au(g),I=new Ld(d,E,p);return h.asyncQueue.enqueueAndForget(async()=>Dd(await ks(h),I)),()=>{E.Xo(),h.asyncQueue.enqueueAndForget(async()=>Pd(await ks(h),I))}}(lt(u),l,a,c)}function Pk(t,e){return $R(lt(t=Se(t,je)),Gd(e)?e:{next:e})}function ia(t,e){return function(n,r){const i=new st;return n.asyncQueue.enqueueAndForget(async()=>mR(await Kd(n),r,i)),i.promise}(lt(t),e)}function nf(t,e,n){const r=n.docs.get(e._key),i=new pi(t);return new Kn(t,i,e._key,r,new fi(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class xk extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=hi(e)}get(e){const n=Tr(e,this._firestore),r=new bk(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return X();const s=i[0];if(s.isFoundDocument())return new ta(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new ta(this._firestore,r,n._key,null,n.converter);throw X()})}set(e,n,r){const i=Tr(e,this._firestore),s=gu(i.converter,n,r),o=fu(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Tr(e,this._firestore);let o;return o=typeof(n=te(n))=="string"||n instanceof Ir?Jd(this._dataReader,"Transaction.update",s._key,n,r,i):Yd(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Tr(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Tr(e,this._firestore),r=new pi(this._firestore);return super.get(e).then(i=>new Kn(this._firestore,r,n._key,i._document,new fi(!1,!1),n.converter))}}function Lk(t,e){return BR(lt(t),n=>e(new xk(t,n)))}/**
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
 */function Mk(){return new ea("deleteField")}function Fk(){return new Qd("serverTimestamp")}function Uk(...t){return new ak("arrayUnion",t)}function Vk(...t){return new ck("arrayRemove",t)}function $k(t){return new uk("increment",t)}var Bk;(function(t){ts=t})(Wr),Kr(new Vn("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new je(n,new gN(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),Gr("@firebase/firestore","3.1.0",Bk);const qk="@firebase/firestore-compat",jk="0.1.3";/**
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
 */function rf(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new R("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function C_(){if(typeof Uint8Array=="undefined")throw new R("unimplemented","Uint8Arrays are not available in this environment.")}function R_(){if(!IN())throw new R("unimplemented","Blobs are unavailable in Firestore in this environment.")}class sa{constructor(e){this._delegate=e}static fromBase64String(e){return R_(),new sa(Nn.fromBase64String(e))}static fromUint8Array(e){return C_(),new sa(Nn.fromUint8Array(e))}toBase64(){return R_(),this._delegate.toBase64()}toUint8Array(){return C_(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function sf(t){return zk(t,["next","error","complete"])}function zk(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class Hk{enableIndexedDbPersistence(e,n){return YR(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return JR(e._delegate)}clearIndexedDbPersistence(e){return XR(e._delegate)}}class k_{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Os||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Ro("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){HR(this._delegate,e,n,r)}enableNetwork(){return ek(this._delegate)}disableNetwork(){return tk(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,Xw("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return ZR(this._delegate)}onSnapshotsInSync(e){return Pk(this._delegate,e)}get app(){if(!this._appCompat)throw new R("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ds(this,r_(this._delegate,e))}catch(n){throw Ft(n,"collection()","Firestore.collection()")}}doc(e){try{return new cn(this,lu(this._delegate,e))}catch(n){throw Ft(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ut(this,KR(this._delegate,e))}catch(n){throw Ft(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Lk(this._delegate,n=>e(new O_(this,n)))}batch(){return lt(this._delegate),new D_(new Tk(this._delegate,e=>ia(this._delegate,e)))}loadBundle(e){return nk(this._delegate,e)}namedQuery(e){return rk(this._delegate,e).then(n=>n?new Ut(this,n):null)}}class yu extends tf{constructor(e){super();this.firestore=e}convertBytes(e){return new sa(new Nn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return cn.forKey(n,this.firestore,null)}}function Kk(t){dN(t)}class O_{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new yu(e)}get(e){const n=gi(e);return this._delegate.get(n).then(r=>new oa(this._firestore,new Kn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=gi(e);return r?(rf("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=gi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=gi(e);return this._delegate.delete(n),this}}class D_{constructor(e){this._delegate=e}set(e,n,r){const i=gi(e);return r?(rf("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=gi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=gi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class mi{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new na(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new aa(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=mi.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new mi(e,new yu(e),n),i.set(n,s)),s}}mi.INSTANCES=new WeakMap;class cn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new yu(e)}static forPath(e,n,r){if(e.length%2!=0)throw new R("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new cn(n,new Me(n._delegate,r,new Y(e)))}static forKey(e,n,r){return new cn(n,new Me(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ds(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ds(this.firestore,r_(this._delegate,e))}catch(n){throw Ft(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=te(e),e instanceof Me?i_(this._delegate,e):!1}set(e,n){n=rf("DocumentReference.set",n);try{return n?S_(this._delegate,e,n):S_(this._delegate,e)}catch(r){throw Ft(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?A_(this._delegate,e):A_(this._delegate,e,n,...r)}catch(i){throw Ft(i,"updateDoc()","DocumentReference.update()")}}delete(){return Ok(this._delegate)}onSnapshot(...e){const n=P_(e),r=x_(e,i=>new oa(this.firestore,new Kn(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return N_(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Ak(this._delegate):(e==null?void 0:e.source)==="server"?n=Nk(this._delegate):n=Sk(this._delegate),n.then(r=>new oa(this.firestore,new Kn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new cn(this.firestore,e?this._delegate.withConverter(mi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ft(t,e,n){return t.message=t.message.replace(e,n),t}function P_(t){for(const e of t)if(typeof e=="object"&&!sf(e))return e;return{}}function x_(t,e){var n,r;let i;return sf(t[0])?i=t[0]:sf(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class oa{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new cn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return g_(this._delegate,e._delegate)}}class aa extends oa{data(e){const n=this._delegate.data(e);return fN(n!==void 0),n}}class Ut{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new yu(e)}where(e,n,r){try{return new Ut(this.firestore,br(this._delegate,pk(e,n,r)))}catch(i){throw Ft(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Ut(this.firestore,br(this._delegate,gk(e,n)))}catch(r){throw Ft(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ut(this.firestore,br(this._delegate,yk(e)))}catch(n){throw Ft(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Ut(this.firestore,br(this._delegate,vk(e)))}catch(n){throw Ft(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ut(this.firestore,br(this._delegate,wk(...e)))}catch(n){throw Ft(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ut(this.firestore,br(this._delegate,_k(...e)))}catch(n){throw Ft(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ut(this.firestore,br(this._delegate,Ik(...e)))}catch(n){throw Ft(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ut(this.firestore,br(this._delegate,Ek(...e)))}catch(n){throw Ft(n,"endAt()","Query.endAt()")}}isEqual(e){return s_(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Rk(this._delegate):(e==null?void 0:e.source)==="server"?n=kk(this._delegate):n=Ck(this._delegate),n.then(r=>new of(this.firestore,new Er(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=P_(e),r=x_(e,i=>new of(this.firestore,new Er(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return N_(this._delegate,n,r)}withConverter(e){return new Ut(this.firestore,e?this._delegate.withConverter(mi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Wk{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new aa(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class of{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Ut(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new aa(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new Wk(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new aa(this._firestore,r))})}isEqual(e){return g_(this._delegate,e._delegate)}}class Ds extends Ut{constructor(e,n){super(e,n);this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new cn(this.firestore,e):null}doc(e){try{return e===void 0?new cn(this.firestore,lu(this._delegate)):new cn(this.firestore,lu(this._delegate,e))}catch(n){throw Ft(n,"doc()","CollectionReference.doc()")}}add(e){return Dk(this._delegate,e).then(n=>new cn(this.firestore,n))}isEqual(e){return i_(this._delegate,e._delegate)}withConverter(e){return new Ds(this.firestore,e?this._delegate.withConverter(mi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function gi(t){return Se(t,Me)}/**
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
 */class af{constructor(...e){this._delegate=new Ir(...e)}static documentId(){return new af(wt.keyField().canonicalString())}isEqual(e){return e=te(e),e instanceof Ir?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class yi{constructor(e){this._delegate=e}static serverTimestamp(){const e=Fk();return e._methodName="FieldValue.serverTimestamp",new yi(e)}static delete(){const e=Mk();return e._methodName="FieldValue.delete",new yi(e)}static arrayUnion(...e){const n=Uk(...e);return n._methodName="FieldValue.arrayUnion",new yi(n)}static arrayRemove(...e){const n=Vk(...e);return n._methodName="FieldValue.arrayRemove",new yi(n)}static increment(e){const n=$k(e);return n._methodName="FieldValue.increment",new yi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const Gk={Firestore:k_,GeoPoint:hu,Timestamp:ot,Blob:sa,Transaction:O_,WriteBatch:D_,DocumentReference:cn,DocumentSnapshot:oa,Query:Ut,QueryDocumentSnapshot:aa,QuerySnapshot:of,CollectionReference:Ds,FieldPath:af,FieldValue:yi,setLogLevel:Kk,CACHE_SIZE_UNLIMITED:QR};function Qk(t,e){t.INTERNAL.registerComponent(new Vn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},Gk)))}/**
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
 */function Yk(t){Qk(t,(e,n)=>new k_(e,n,new Hk)),t.registerVersion(qk,jk)}Yk(uo);const ca={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ps={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function Jk(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function L_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xk=Jk,Zk=L_,M_=new jr("auth","Firebase",L_());/**
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
 */const F_=new ac("@firebase/auth");function vu(t,...e){F_.logLevel<=Ee.ERROR&&F_.error(`Auth (${Wr}): ${t}`,...e)}/**
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
 */function Et(t,...e){throw cf(t,...e)}function bt(t,...e){return cf(t,...e)}function U_(t,e,n){const r=Object.assign(Object.assign({},Zk()),{[e]:n});return new jr("auth","Firebase",r).create(e,{appName:t.name})}function xs(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Et(t,"argument-error"),U_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return M_.create(t,...e)}function D(t,e,...n){if(!t)throw cf(e,...n)}function Cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vu(e),new Error(e)}function mn(t,e){t||Cn(e)}/**
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
 */const V_=new Map;function Jt(t){mn(t instanceof Function,"Expected a class definition");let e=V_.get(t);return e?(mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,V_.set(t,e),e)}function eO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function ua(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uf(){return $_()==="http:"||$_()==="https:"}function $_(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function tO(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uf()||Wl()||"connection"in navigator)?navigator.onLine:!0}function nO(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class la{constructor(e,n){this.shortDelay=e,this.longDelay=n,mn(n>e,"Short delay should be less than long delay!"),this.isMobile=fg()||ic()}get(){return tO()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function lf(t,e){mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class hf{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const iO=new la(3e4,6e4);function et(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ht(t,e,n,r,i={}){return B_(t,i,()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Gi(Object.assign({key:t.config.apiKey},o)).slice(1),c=new(hf.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&c.set("X-Firebase-Locale",t.languageCode),hf.fetch()(q_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function B_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rO),e);try{const i=new sO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw wu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wu(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw wu(t,"email-already-in-use",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw U_(t,l,u);Et(t,l)}}catch(i){if(i instanceof sn)throw i;Et(t,"network-request-failed")}}async function Wn(t,e,n,r,i={}){const s=await ht(t,e,n,r,i);return"mfaPendingCredential"in s&&Et(t,"multi-factor-auth-required",{serverResponse:s}),s}function q_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?lf(t.config,i):`${t.config.apiScheme}://${i}`}class sO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bt(this.auth,"timeout")),iO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=bt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function oO(t,e){return ht(t,"POST","/v1/accounts:delete",e)}async function aO(t,e){return ht(t,"POST","/v1/accounts:update",e)}async function cO(t,e){return ht(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ha(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}async function uO(t,e=!1){const n=te(t),r=await n.getIdToken(e),i=_u(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ha(df(i.auth_time)),issuedAtTime:ha(df(i.iat)),expirationTime:ha(df(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function df(t){return Number(t)*1e3}function _u(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vu("JWT malformed, contained fewer than 3 sections"),null;try{const i=q0(n);return i?JSON.parse(i):(vu("Failed to decode base64 JWT payload"),null)}catch(i){return vu("Caught error parsing JWT payload as JSON",i),null}}function lO(t){const e=_u(t);return D(e,"internal-error"),D(typeof e.exp!="undefined","internal-error"),D(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Gn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sn&&hO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class dO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class j_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ha(this.lastLoginAt),this.creationTime=ha(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function da(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Gn(t,cO(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?mO(s.providerUserInfo):[],a=pO(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new j_(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function fO(t){const e=te(t);await da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function mO(t){return t.map(e=>{var{providerId:n}=e,r=Jl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function gO(t,e){const n=await B_(t,{},()=>{const r=Gi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=q_(t,i,"/v1/token",`key=${s}`);return hf.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class fa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken!="undefined","internal-error"),D(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):lO(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await gO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fa;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fa,this.toJSON())}_performRefresh(){return Cn("not implemented")}}/**
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
 */function Sr(t,e){D(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class vi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Jl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new dO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.metadata=new j_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Gn(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uO(this,e)}reload(){return fO(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new vi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await da(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gn(this,oO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(u=n.createdAt)!==null&&u!==void 0?u:void 0,C=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:M,emailVerified:U,isAnonymous:K,providerData:ie,stsTokenManager:Z}=n;D(M&&Z,e,"internal-error");const ce=fa.fromJSON(this.name,Z);D(typeof M=="string",e,"internal-error"),Sr(h,e.name),Sr(d,e.name),D(typeof U=="boolean",e,"internal-error"),D(typeof K=="boolean",e,"internal-error"),Sr(p,e.name),Sr(g,e.name),Sr(E,e.name),Sr(I,e.name),Sr(w,e.name),Sr(C,e.name);const W=new vi({uid:M,auth:e,email:d,emailVerified:U,displayName:h,isAnonymous:K,photoURL:g,phoneNumber:p,tenantId:E,stsTokenManager:ce,createdAt:w,lastLoginAt:C});return ie&&Array.isArray(ie)&&(W.providerData=ie.map(he=>Object.assign({},he))),I&&(W._redirectEventId=I),W}static async _fromIdTokenResponse(e,n,r=!1){const i=new fa;i.updateFromServerResponse(n);const s=new vi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await da(s),s}}/**
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
 */class z_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}z_.type="NONE";const pa=z_;/**
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
 */function wi(t,e,n){return`firebase:${t}:${e}:${n}`}class Ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=wi(this.userKey,i.apiKey,s),this.fullPersistenceKey=wi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ls(Jt(pa),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Jt(pa);const o=wi(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=vi._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch(l){}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ls(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch(l){}})),new Ls(s,e,r))}}/**
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
 */function H_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(G_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(K_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Q_(e))return"Blackberry";if(Y_(e))return"Webos";if(ff(e))return"Safari";if((e.includes("chrome/")||W_(e))&&!e.includes("edge/"))return"Chrome";if(ma(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function K_(t=xe()){return/firefox\//i.test(t)}function ff(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function W_(t=xe()){return/crios\//i.test(t)}function G_(t=xe()){return/iemobile/i.test(t)}function ma(t=xe()){return/android/i.test(t)}function Q_(t=xe()){return/blackberry/i.test(t)}function Y_(t=xe()){return/webos/i.test(t)}function Ms(t=xe()){return/iphone|ipad|ipod/i.test(t)}function yO(t=xe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function vO(t=xe()){var e;return Ms(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function wO(){return Gl()&&document.documentMode===10}function J_(t=xe()){return Ms(t)||ma(t)||Y_(t)||Q_(t)||/windows phone/i.test(t)||G_(t)}function _O(){try{return!!(window&&window!==window.top)}catch(t){return!1}}/**
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
 */function X_(t,e=[]){let n;switch(t){case"Browser":n=H_(xe());break;case"Worker":n=`${H_(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Wr}/${r}`}/**
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
 */class IO{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Z_(this),this.idTokenSubscription=new Z_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=M_,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jt(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await Ls.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await da(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?te(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jt(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[Jt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=X_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function dt(t){return te(t)}class Z_{constructor(e){this.auth=e,this.observer=null,this.addObserver=gg(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function EO(t,e,n){const r=dt(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n==null?void 0:n.disableWarnings),s=eI(e),{host:o,port:a}=bO(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),TO(i)}function eI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bO(t){const e=eI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tI(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:tI(o)}}}function tI(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function TO(t){function e(){const n=document.createElement("p"),r=n.style;n.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",n.classList.add("firebase-emulator-warning"),document.body.appendChild(n)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&!t&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Fs{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Cn("not implemented")}_getIdTokenResponse(e){return Cn("not implemented")}_linkToIdToken(e,n){return Cn("not implemented")}_getReauthenticationResolver(e){return Cn("not implemented")}}/**
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
 */async function nI(t,e){return ht(t,"POST","/v1/accounts:resetPassword",et(t,e))}async function rI(t,e){return ht(t,"POST","/v1/accounts:update",e)}async function SO(t,e){return ht(t,"POST","/v1/accounts:update",et(t,e))}/**
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
 */async function AO(t,e){return Wn(t,"POST","/v1/accounts:signInWithPassword",et(t,e))}async function Iu(t,e){return ht(t,"POST","/v1/accounts:sendOobCode",et(t,e))}async function NO(t,e){return Iu(t,e)}async function CO(t,e){return Iu(t,e)}async function RO(t,e){return Iu(t,e)}async function kO(t,e){return Iu(t,e)}/**
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
 */async function OO(t,e){return Wn(t,"POST","/v1/accounts:signInWithEmailLink",et(t,e))}async function DO(t,e){return Wn(t,"POST","/v1/accounts:signInWithEmailLink",et(t,e))}/**
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
 */class ga extends Fs{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ga(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ga(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return AO(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return OO(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return rI(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return DO(e,{idToken:n,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Qn(t,e){return Wn(t,"POST","/v1/accounts:signInWithIdp",et(t,e))}/**
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
 */const PO="http://localhost";class Rn extends Fs{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Jl(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Rn(r,i);return Object.assign(o,s),o}_getIdTokenResponse(e){const n=this.buildRequest();return Qn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qn(e,n)}buildRequest(){const e={requestUri:PO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gi(n)}return e}}/**
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
 */async function xO(t,e){return ht(t,"POST","/v1/accounts:sendVerificationCode",et(t,e))}async function LO(t,e){return Wn(t,"POST","/v1/accounts:signInWithPhoneNumber",et(t,e))}async function MO(t,e){const n=await Wn(t,"POST","/v1/accounts:signInWithPhoneNumber",et(t,e));if(n.temporaryProof)throw wu(t,"account-exists-with-different-credential",n);return n}const FO={USER_NOT_FOUND:"user-not-found"};async function UO(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Wn(t,"POST","/v1/accounts:signInWithPhoneNumber",et(t,n),FO)}/**
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
 */class _i extends Fs{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new _i({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new _i({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return LO(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return MO(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return UO(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new _i({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function VO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $O(t){const e=Qi(oo(t)).link,n=e?Qi(oo(e)).deep_link_id:null,r=Qi(oo(t)).deep_link_id;return(r?Qi(oo(r)).link:null)||r||n||e||t}class Eu{constructor(e){var n,r,i,s,o,a;const c=Qi(oo(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=VO((i=c.mode)!==null&&i!==void 0?i:null);D(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$O(e);try{return new Eu(n)}catch(r){return null}}}/**
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
 */class Ar{constructor(){this.providerId=Ar.PROVIDER_ID}static credential(e,n){return ga._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Eu.parseLink(n);return D(r,"argument-error"),ga._fromEmailAndCode(e,r.code,r.tenantId)}}Ar.PROVIDER_ID="password";Ar.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ar.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Nr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Us extends Nr{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Vs extends Us{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return D("providerId"in n&&"signInMethod"in n,"argument-error"),Rn._fromParams(n)}credential(e){return this._credential(e)}_credential(e){return D(e.idToken||e.accessToken,"argument-error"),Rn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Vs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Vs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Vs(a)._credential({idToken:n,accessToken:r,rawNonce:o,pendingToken:s})}catch(c){return null}}}/**
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
 */class kn extends Us{constructor(){super("facebook.com")}static credential(e){return Rn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch(n){return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
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
 */class On extends Us{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Rn._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return On.credential(n,r)}catch(i){return null}}}On.GOOGLE_SIGN_IN_METHOD="google.com";On.PROVIDER_ID="google.com";/**
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
 */class Dn extends Us{constructor(){super("github.com")}static credential(e){return Rn._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch(n){return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
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
 */const BO="http://localhost";class bu extends Fs{constructor(e,n){super(e,e);this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Qn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Qn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Qn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new bu(r,s)}static _create(e,n){return new bu(e,n)}buildRequest(){return{requestUri:BO,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */class Pn extends Us{constructor(){super("twitter.com")}static credential(e,n){return Rn._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pn.credential(n,r)}catch(i){return null}}}Pn.TWITTER_SIGN_IN_METHOD="twitter.com";Pn.PROVIDER_ID="twitter.com";/**
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
 */async function iI(t,e){return Wn(t,"POST","/v1/accounts:signUp",et(t,e))}/**
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
 */class un{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await vi._fromIdTokenResponse(e,r,i),o=sI(r);return new un({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=sI(r);return new un({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function sI(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function qO(t){var e;const n=dt(t);if(await n._initializationPromise,(e=n.currentUser)===null||e===void 0?void 0:e.isAnonymous)return new un({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await iI(n,{returnSecureToken:!0}),i=await un._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Tu extends sn{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,this.name="FirebaseError",Object.setPrototypeOf(this,Tu.prototype),this.appName=e.name,this.code=n.code,this.tenantId=(s=e.tenantId)!==null&&s!==void 0?s:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(e,n,r,i){return new Tu(e,n,r,i)}}function oI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tu._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function aI(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function jO(t,e){const n=te(t);await Su(!0,n,e);const{providerUserInfo:r}=await aO(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=aI(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function pf(t,e,n=!1){const r=await Gn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return un._forOperation(t,"link",r)}async function Su(t,e,n){await da(e);const r=aI(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";D(r.has(n)===t,e.auth,i)}/**
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
 */async function cI(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Gn(t,oI(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=_u(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),un._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),s}}/**
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
 */async function uI(t,e,n=!1){const r="signIn",i=await oI(t,r,e),s=await un._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Au(t,e){return uI(dt(t),e)}async function lI(t,e){const n=te(t);return await Su(!1,n,e.providerId),pf(n,e)}async function hI(t,e){return cI(te(t),e)}/**
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
 */async function zO(t,e){return Wn(t,"POST","/v1/accounts:signInWithCustomToken",et(t,e))}/**
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
 */async function HO(t,e){const n=dt(t),r=await zO(n,{token:e,returnSecureToken:!0}),i=await un._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class Nu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?mf._fromServerResponse(e,n):Et(e,"internal-error")}}class mf extends Nu{constructor(e){super("phone",e);this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new mf(n)}}/**
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
 */function Cu(t,e,n){var r;D(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),D(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(D(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(D(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function KO(t,e,n){const r=te(t),i={requestType:"PASSWORD_RESET",email:e};n&&Cu(r,i,n),await CO(r,i)}async function WO(t,e,n){await nI(te(t),{oobCode:e,newPassword:n})}async function GO(t,e){await SO(te(t),{oobCode:e})}async function dI(t,e){const n=te(t),r=await nI(n,{oobCode:e}),i=r.requestType;switch(D(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":D(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":D(r.mfaInfo,n,"internal-error");default:D(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Nu._fromServerResponse(dt(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function QO(t,e){const{data:n}=await dI(te(t),e);return n.email}async function YO(t,e,n){const r=dt(t),i=await iI(r,{returnSecureToken:!0,email:e,password:n}),s=await un._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function JO(t,e,n){return Au(te(t),Ar.credential(e,n))}/**
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
 */async function XO(t,e,n){const r=te(t),i={requestType:"EMAIL_SIGNIN",email:e};D(n.handleCodeInApp,r,"argument-error"),n&&Cu(r,i,n),await RO(r,i)}function ZO(t,e){const n=Eu.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function eD(t,e,n){const r=te(t),i=Ar.credentialWithLink(e,n||ua());return D(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Au(r,i)}/**
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
 */async function tD(t,e){return ht(t,"POST","/v1/accounts:createAuthUri",et(t,e))}/**
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
 */async function nD(t,e){const n=uf()?ua():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await tD(te(t),r);return i||[]}async function rD(t,e){const n=te(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&Cu(n.auth,i,e);const{email:s}=await NO(n.auth,i);s!==t.email&&await t.reload()}async function iD(t,e,n){const r=te(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&Cu(r.auth,s,n);const{email:o}=await kO(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function sD(t,e){return ht(t,"POST","/v1/accounts:update",e)}/**
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
 */async function oD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=te(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Gn(r,sD(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function aD(t,e){return fI(te(t),e,null)}function cD(t,e){return fI(te(t),null,e)}async function fI(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Gn(t,rI(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function uD(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=_u(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new $s(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new lD(s,i);case"github.com":return new hD(s,i);case"google.com":return new dD(s,i);case"twitter.com":return new fD(s,i,t.screenName||null);case"custom":case"anonymous":return new $s(s,null);default:return new $s(s,r,i)}}class $s{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class pI extends $s{constructor(e,n,r,i){super(e,n,r);this.username=i}}class lD extends $s{constructor(e,n){super(e,"facebook.com",n)}}class hD extends pI{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class dD extends $s{constructor(e,n){super(e,"google.com",n)}}class fD extends pI{constructor(e,n,r){super(e,"twitter.com",n,r)}}function pD(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:uD(n)}class Ii{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new Ii("enroll",e)}static _fromMfaPendingCredential(e){return new Ii("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e==null?void 0:e.multiFactorSession){if((n=e.multiFactorSession)===null||n===void 0?void 0:n.pendingCredential)return Ii._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((r=e.multiFactorSession)===null||r===void 0?void 0:r.idToken)return Ii._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class gf{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=dt(e),i=(n.serverResponse.mfaInfo||[]).map(o=>Nu._fromServerResponse(r,o));D(n.serverResponse.mfaPendingCredential,r,"internal-error");const s=Ii._fromMfaPendingCredential(n.serverResponse.mfaPendingCredential);return new gf(s,i,async o=>{const a=await o._process(r,s);delete n.serverResponse.mfaInfo,delete n.serverResponse.mfaPendingCredential;const c=Object.assign(Object.assign({},n.serverResponse),{idToken:a.idToken,refreshToken:a.refreshToken});switch(n.operationType){case"signIn":const u=await un._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(u.user),u;case"reauthenticate":return D(n.user,r,"internal-error"),un._forOperation(n.user,n.operationType,c);default:Et(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function mD(t,e){var n;const r=te(t),i=e;return D(e.operationType,r,"argument-error"),D((n=i.serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),gf._fromError(r,i)}/**
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
 */function gD(t,e){return ht(t,"POST","/v2/accounts/mfaEnrollment:start",et(t,e))}function yD(t,e){return ht(t,"POST","/v2/accounts/mfaEnrollment:finalize",et(t,e))}function vD(t,e){return ht(t,"POST","/v2/accounts/mfaEnrollment:withdraw",et(t,e))}class yf{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Nu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new yf(e)}async getSession(){return Ii._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const r=e,i=await this.getSession(),s=await Gn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await Gn(this.user,vD(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const vf=new WeakMap;function wD(t){const e=te(t);return vf.has(e)||vf.set(e,yf._fromUser(e)),vf.get(e)}const Ru="__sak";/**
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
 */class mI{constructor(e,n){this.storage=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ru,"1"),this.storage.removeItem(Ru),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
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
 */function _D(){const t=xe();return ff(t)||Ms(t)}const ID=1e3,ED=10;class gI extends mI{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_D()&&_O(),this.fallbackToPolling=J_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);wO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ED):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ID)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gI.type="LOCAL";const wf=gI;/**
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
 */class yI extends mI{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yI.type="SESSION";const Ei=yI;/**
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
 */function bD(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ku{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ku(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await bD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ku.receivers=[];/**
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
 */function ya(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class TD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=ya("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tt(){return window}function SD(t){tt().location.href=t}/**
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
 */function _f(){return typeof tt().WorkerGlobalScope!="undefined"&&typeof tt().importScripts=="function"}async function AD(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}function ND(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function CD(){return _f()?self:null}/**
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
 */const vI="firebaseLocalStorageDb",RD=1,Ou="firebaseLocalStorage",wI="fbase_key";class va{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Du(t,e){return t.transaction([Ou],e?"readwrite":"readonly").objectStore(Ou)}function kD(){const t=indexedDB.deleteDatabase(vI);return new va(t).toPromise()}function If(){const t=indexedDB.open(vI,RD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ou,{keyPath:wI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ou)?e(r):(r.close(),await kD(),e(await If()))})})}async function _I(t,e,n){const r=Du(t,!0).put({[wI]:e,value:n});return new va(r).toPromise()}async function OD(t,e){const n=Du(t,!1).get(e),r=await new va(n).toPromise();return r===void 0?null:r.value}function II(t,e){const n=Du(t,!0).delete(e);return new va(n).toPromise()}const DD=800,PD=3;class EI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await If(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>PD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _f()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ku._getInstance(CD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AD(),!this.activeServiceWorker)return;this.sender=new TD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ND()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await If();return await _I(e,Ru,"1"),await II(e,Ru),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_I(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>OD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>II(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Du(i,!1).getAll();return new va(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}EI.type="LOCAL";const Pu=EI;/**
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
 */function xD(t,e){return ht(t,"POST","/v2/accounts/mfaSignIn:start",et(t,e))}function LD(t,e){return ht(t,"POST","/v2/accounts/mfaSignIn:finalize",et(t,e))}/**
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
 */async function MD(t){return(await ht(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function FD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function bI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=bt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",FD().appendChild(r)})}function TI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */const UD=500,VD=6e4,xu=1e12;class $D{constructor(e){this.auth=e,this.counter=xu,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new BD(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||xu;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||xu;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||xu;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class BD{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;D(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=qD(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch(r){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch(r){}this.isVisible&&this.execute()},VD)},UD))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function qD(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Ef=TI("rcb"),jD=new la(3e4,6e4),zD="https://www.google.com/recaptcha/api.js?";class HD{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!tt().grecaptcha}load(e,n=""){return D(KD(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve(tt().grecaptcha):new Promise((r,i)=>{const s=tt().setTimeout(()=>{i(bt(e,"network-request-failed"))},jD.get());tt()[Ef]=()=>{tt().clearTimeout(s),delete tt()[Ef];const a=tt().grecaptcha;if(!a){i(bt(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${zD}?${Gi({onload:Ef,render:"explicit",hl:n})}`;bI(o).catch(()=>{clearTimeout(s),i(bt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!tt().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function KD(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class WD{async load(e){return new $D(e)}clearedOneInstance(){}}/**
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
 */const SI="recaptcha",GD={theme:"light",type:"image"};class QD{constructor(e,n=Object.assign({},GD),r){this.parameters=n,this.type=SI,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=dt(r),this.isInvisible=this.parameters.size==="invisible",D(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;D(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new WD:new HD,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){D(!this.parameters.sitekey,this.auth,"argument-error"),D(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),D(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=tt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){D(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){D(uf()&&!_f(),this.auth,"internal-error"),await YD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await MD(this.auth);D(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return D(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function YD(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class bf{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=_i._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function JD(t,e,n){const r=dt(t),i=await Lu(r,e,te(n));return new bf(i,s=>Au(r,s))}async function XD(t,e,n){const r=te(t);await Su(!1,r,"phone");const i=await Lu(r.auth,e,te(n));return new bf(i,s=>lI(r,s))}async function ZD(t,e,n){const r=te(t),i=await Lu(r.auth,e,te(n));return new bf(i,s=>hI(r,s))}async function Lu(t,e,n){var r;const i=await n.verify();try{D(typeof i=="string",t,"argument-error"),D(n.type===SI,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return D(o.type==="enroll",t,"internal-error"),(await gD(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{D(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return D(a,t,"missing-multi-factor-info"),(await xD(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await xO(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function eP(t,e){await pf(te(t),e)}/**
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
 */class gn{constructor(e){this.providerId=gn.PROVIDER_ID,this.auth=dt(e)}verifyPhoneNumber(e,n){return Lu(this.auth,e,te(n))}static credential(e,n){return _i._fromVerification(e,n)}static credentialFromResult(e){const n=e;return gn.credentialFromTaggedObject(n)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?_i._fromTokenResponse(n,r):null}}gn.PROVIDER_ID="phone";gn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function bi(t,e){return e?Jt(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Tf extends Fs{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Qn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tP(t){return uI(t.auth,new Tf(t),t.bypassAuthState)}function nP(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),cI(n,new Tf(t),t.bypassAuthState)}async function rP(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),pf(n,new Tf(t),t.bypassAuthState)}/**
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
 */class AI{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tP;case"linkViaPopup":case"linkViaRedirect":return rP;case"reauthViaPopup":case"reauthViaRedirect":return nP;default:Et(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const iP=new la(2e3,1e4);async function sP(t,e,n){const r=dt(t);xs(t,e,Nr);const i=bi(r,n);return new Yn(r,"signInViaPopup",e,i).executeNotNull()}async function oP(t,e,n){const r=te(t);xs(r.auth,e,Nr);const i=bi(r.auth,n);return new Yn(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function aP(t,e,n){const r=te(t);xs(r.auth,e,Nr);const i=bi(r.auth,n);return new Yn(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Yn extends AI{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,Yn.currentPopupAction&&Yn.currentPopupAction.cancel(),Yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=ya();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,iP.get())};e()}}Yn.currentPopupAction=null;/**
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
 */const cP="pendingRedirect",Sf=new Map;class uP extends AI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Sf.get(this.auth._key());if(!e){try{const r=await lP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sf.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lP(t,e){const n=NI(e),r=await Nf(t)._get(n)==="true";return await Nf(t)._remove(n),r}async function Af(t,e){return Nf(t)._set(NI(e),"true")}function hP(){Sf.clear()}function Nf(t){return Jt(t._redirectPersistence)}function NI(t){return wi(cP,t.config.apiKey,t.name)}/**
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
 */function dP(t,e,n){return fP(t,e,n)}async function fP(t,e,n){const r=dt(t);xs(t,e,Nr);const i=bi(r,n);return await Af(i,r),i._openRedirect(r,e,"signInViaRedirect")}function pP(t,e,n){return mP(t,e,n)}async function mP(t,e,n){const r=te(t);xs(r.auth,e,Nr);const i=bi(r.auth,n);await Af(i,r.auth);const s=await CI(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function gP(t,e,n){return yP(t,e,n)}async function yP(t,e,n){const r=te(t);xs(r.auth,e,Nr);const i=bi(r.auth,n);await Su(!1,r,e.providerId),await Af(i,r.auth);const s=await CI(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function vP(t,e){return await dt(t)._initializationPromise,Mu(t,e,!1)}async function Mu(t,e,n=!1){const r=dt(t),i=bi(r,e),o=await new uP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function CI(t){const e=ya(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const wP=10*60*1e3;class RI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!_P(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!OI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wP&&this.cachedEventUids.clear(),this.cachedEventUids.has(kI(e))}saveEventToCache(e){this.cachedEventUids.add(kI(e)),this.lastProcessedEventTime=Date.now()}}function kI(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function OI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function _P(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return OI(t);default:return!1}}/**
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
 */async function DI(t,e={}){return ht(t,"GET","/v1/projects",e)}/**
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
 */const IP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,EP=/^https?/;async function bP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DI(t);for(const n of e)try{if(TP(n))return}catch(r){}Et(t,"unauthorized-domain")}function TP(t){const e=ua(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!EP.test(n))return!1;if(IP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const SP=new la(3e4,6e4);function PI(){const t=tt().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AP(t){return new Promise((e,n)=>{var r,i,s;function o(){PI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{PI(),n(bt(t,"network-request-failed"))},timeout:SP.get()})}if((i=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=tt().gapi)===null||s===void 0?void 0:s.load)o();else{const a=TI("iframefcb");return tt()[a]=()=>{gapi.load?o():n(bt(t,"network-request-failed"))},bI(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw Fu=null,e})}let Fu=null;function NP(t){return Fu=Fu||AP(t),Fu}/**
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
 */const CP=new la(5e3,15e3),RP="__/auth/iframe",kP="emulator/auth/iframe",OP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},DP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PP(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?lf(e,kP):`https://${t.config.authDomain}/${RP}`,r={apiKey:e.apiKey,appName:t.name,v:Wr},i=DP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Gi(r).slice(1)}`}async function xP(t){const e=await NP(t),n=tt().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:PP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=bt(t,"network-request-failed"),a=tt().setTimeout(()=>{s(o)},CP.get());function c(){tt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const LP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MP=500,FP=600,UP="_blank",VP="http://localhost";class xI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function $P(t,e,n,r=MP,i=FP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},LP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=xe().toLowerCase();n&&(a=W_(u)?UP:n),K_(u)&&(e=e||VP,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(vO(u)&&a!=="_self")return BP(e||"",a),new xI(null);const h=window.open(e||"",a,l);D(h,t,"popup-blocked");try{h.focus()}catch(d){}return new xI(h)}function BP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qP="__/auth/handler",jP="emulator/auth/handler";function Cf(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Wr,eventId:i};if(e instanceof Nr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Z0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof Us){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${zP(t)}?${Gi(a).slice(1)}`}function zP({config:t}){return t.emulator?lf(t,jP):`https://${t.authDomain}/${qP}`}/**
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
 */const Rf="webStorageSupport";class HP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ei,this._completeRedirectFn=Mu}async _openPopup(e,n,r,i){var s;mn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Cf(e,n,r,ua(),i);return $P(e,o,ya())}async _openRedirect(e,n,r,i){return await this._originValidation(e),SD(Cf(e,n,r,ua(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(mn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await xP(e),r=new RI(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rf,{type:Rf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rf];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return J_()||ff()||Ms()}}const KP=HP;class WP{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Cn("unexpected MultiFactorSessionType")}}}class kf extends WP{constructor(e){super("phone");this.credential=e}static _fromCredential(e){return new kf(e)}_finalizeEnroll(e,n,r){return yD(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return LD(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class LI{constructor(){}static assertion(e){return kf._fromCredential(e)}}LI.FACTOR_ID="phone";var GP="@firebase/auth",QP="0.18.1";/**
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
 */class YP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function JP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function XP(t){Kr(new Vn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{D(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),D(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:X_(t)},c=new IO(o,a);return eO(c,n),c})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kr(new Vn("auth-internal",e=>{const n=dt(e.getProvider("auth").getImmediate());return(r=>new YP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gr(GP,QP,JP(t))}XP("Browser");/**
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
 */function Ti(){return window}/**
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
 */const ZP=2e3;async function e1(t,e,n){var r;const{BuildInfo:i}=Ti();mn(e.sessionId,"AuthEvent did not contain a session ID");const s=await s1(e.sessionId),o={};return Ms()?o.ibi=i.packageName:ma()?o.apn=i.packageName:Et(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Cf(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function t1(t){const{BuildInfo:e}=Ti(),n={};Ms()?n.iosBundleId=e.packageName:ma()?n.androidPackageName=e.packageName:Et(t,"operation-not-supported-in-this-environment"),await DI(t,n)}function n1(t){const{cordova:e}=Ti();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,yO()?"_blank":"_system","location=yes"),n(i)})})}async function r1(t,e,n){const{cordova:r}=Ti();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(bt(t,"redirect-cancelled-by-user"))},ZP))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),ma()&&document.addEventListener("visibilitychange",l,!1),i=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{i()}}function i1(t){var e,n,r,i,s,o,a,c,u,l;const h=Ti();D(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),D(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),D(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),D(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function s1(t){const e=o1(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function o1(t){if(mn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const a1=20;class c1 extends RI{constructor(){super(...arguments);this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function u1(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:d1(),postBody:null,tenantId:t.tenantId,error:bt(t,"no-auth-event")}}function l1(t,e){return Of()._set(Df(t),e)}async function MI(t){const e=await Of()._get(Df(t));return e&&await Of()._remove(Df(t)),e}function h1(t,e){var n,r;const i=p1(e);if(i.includes("/__/auth/callback")){const s=Uu(i),o=s.firebaseError?f1(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],c=a?bt(a):null;return c?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function d1(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<a1;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Of(){return Jt(wf)}function Df(t){return wi("authEvent",t.config.apiKey,t.name)}function f1(t){try{return JSON.parse(t)}catch(e){return null}}function p1(t){const e=Uu(t),n=e.link?decodeURIComponent(e.link):void 0,r=Uu(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Uu(i).link||i||r||n||t}function Uu(t){if(!(t==null?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return Qi(n.join("?"))}/**
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
 */const m1=500;class g1{constructor(){this._redirectPersistence=Ei,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Mu}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new c1(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Et(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){i1(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),hP(),await this._originValidation(e);const o=u1(e,r,i);await l1(e,o);const a=await e1(e,o,n),c=await n1(a);return r1(e,s,c)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=t1(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ti(),o=setTimeout(async()=>{await MI(e),n.onEvent(FI())},m1),a=async l=>{clearTimeout(o);const h=await MI(e);let d=null;h&&(l==null?void 0:l.url)&&(d=h1(h,l.url)),n.onEvent(d||FI())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=i,u=`${s.packageName.toLowerCase()}://`;Ti().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const y1=g1;function FI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:bt("no-auth-event")}}/**
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
 */function v1(t,e){dt(t)._logFramework(e)}var w1="@firebase/auth-compat",_1="0.1.4";/**
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
 */const I1=1e3;function Vu(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function E1(){return Vu()==="http:"||Vu()==="https:"}function UI(t=xe()){return!!((Vu()==="file:"||Vu()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function b1(){return ic()||Kl()}function T1(){return Gl()&&(document==null?void 0:document.documentMode)===11}function S1(t=xe()){return/Edge\/\d+/.test(t)}function A1(t=xe()){return T1()||S1(t)}function VI(){try{const t=self.localStorage,e=ya();if(t)return t.setItem(e,"1"),t.removeItem(e),A1()?sc():!0}catch(t){return Pf()&&sc()}return!1}function Pf(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function xf(){return(E1()||Wl()||UI())&&!b1()&&VI()&&!Pf()}function $I(){return UI()&&typeof document!="undefined"}async function N1(){return $I()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},I1);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}/**
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
 */const Xt={LOCAL:"local",NONE:"none",SESSION:"session"},wa=D,BI="persistence";function C1(t,e){if(wa(Object.values(Xt).includes(e),t,"invalid-persistence-type"),ic()){wa(e!==Xt.SESSION,t,"unsupported-persistence-type");return}if(Kl()){wa(e===Xt.NONE,t,"unsupported-persistence-type");return}if(Pf()){wa(e===Xt.NONE||e===Xt.LOCAL&&sc(),t,"unsupported-persistence-type");return}wa(e===Xt.NONE||VI(),t,"unsupported-persistence-type")}async function Lf(t){await t._initializationPromise;const e=qI(),n=wi(BI,t.config.apiKey,t.name);(e==null?void 0:e.sessionStorage)&&e.sessionStorage.setItem(n,t._getPersistence())}function R1(t,e){const n=qI();if(!(n==null?void 0:n.sessionStorage))return[];const r=wi(BI,t,e);switch(n.sessionStorage.getItem(r)){case Xt.NONE:return[pa];case Xt.LOCAL:return[Pu,Ei];case Xt.SESSION:return[Ei];default:return[]}}function qI(){return typeof window!="undefined"?window:null}/**
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
 */const k1=D;class Cr{constructor(){this.browserResolver=Jt(KP),this.cordovaResolver=Jt(y1),this.underlyingResolver=null,this._redirectPersistence=Ei,this._completeRedirectFn=Mu}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return $I()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return k1(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await N1();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function jI(t){return t.unwrap()}function O1(t){return t.wrapped()}/**
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
 */function D1(t){return zI(t)}function P1(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new x1(t,mD(t,e))}else if(r){const i=zI(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function zI(t){const{_tokenResponse:e}=t instanceof sn?t.customData:t;if(!e)return null;if(!(t instanceof sn)&&"temporaryProof"in e&&"phoneNumber"in e)return gn.credentialFromResult(t);const n=e.providerId;if(!n||n===ca.PASSWORD)return null;let r;switch(n){case ca.GOOGLE:r=On;break;case ca.FACEBOOK:r=kn;break;case ca.GITHUB:r=Dn;break;case ca.TWITTER:r=Pn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?bu._create(n,a):Rn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Vs(n).credential({idToken:i,accessToken:s,rawNonce:c})}return t instanceof sn?r.credentialFromError(t):r.credentialFromResult(t)}async function qt(t,e){let n;try{n=await e}catch(s){throw s instanceof sn&&P1(t,s),s}const{operationType:r,user:i}=n;return{operationType:r,credential:D1(n),additionalUserInfo:pD(n),user:Jn.getOrCreate(i)}}async function Mf(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>qt(t,n.confirm(r))}}class x1{constructor(e,n){this.resolver=n,this.auth=O1(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return qt(jI(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Jn{constructor(e){this._delegate=e,this.multiFactor=wD(e)}static getOrCreate(e){return Jn.USER_MAP.has(e)||Jn.USER_MAP.set(e,new Jn(e)),Jn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return qt(this.auth,lI(this._delegate,e))}async linkWithPhoneNumber(e,n){return Mf(this.auth,XD(this._delegate,e,n))}async linkWithPopup(e){return qt(this.auth,aP(this._delegate,e,Cr))}async linkWithRedirect(e){return await Lf(dt(this.auth)),gP(this._delegate,e,Cr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return qt(this.auth,hI(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Mf(this.auth,ZD(this._delegate,e,n))}reauthenticateWithPopup(e){return qt(this.auth,oP(this._delegate,e,Cr))}async reauthenticateWithRedirect(e){return await Lf(dt(this.auth)),pP(this._delegate,e,Cr)}sendEmailVerification(e){return rD(this._delegate,e)}async unlink(e){return await jO(this._delegate,e),this}updateEmail(e){return aD(this._delegate,e)}updatePassword(e){return cD(this._delegate,e)}updatePhoneNumber(e){return eP(this._delegate,e)}updateProfile(e){return oD(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return iD(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Jn.USER_MAP=new WeakMap;/**
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
 */const _a=D;class Ff{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;_a(r,"invalid-api-key",{appName:e.name});let i=[pa];if(typeof window!="undefined"){i=R1(r,e.name);for(const o of[Pu,wf,Ei])i.includes(o)||i.push(o)}_a(r,"invalid-api-key",{appName:e.name});const s=typeof window!="undefined"?Cr:void 0;this._delegate=n.initialize({options:{persistence:i,popupRedirectResolver:s}}),this._delegate._updateErrorMap(Xk),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Jn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){EO(this._delegate,e,n)}applyActionCode(e){return GO(this._delegate,e)}checkActionCode(e){return dI(this._delegate,e)}confirmPasswordReset(e,n){return WO(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return qt(this._delegate,YO(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return nD(this._delegate,e)}isSignInWithEmailLink(e){return ZO(this._delegate,e)}async getRedirectResult(){_a(xf(),this._delegate,"operation-not-supported-in-this-environment");const e=await vP(this._delegate,Cr);return e?qt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){v1(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=HI(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=HI(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return XO(this._delegate,e,n)}sendPasswordResetEmail(e,n){return KO(this._delegate,e,n||void 0)}async setPersistence(e){C1(this._delegate,e);let n;switch(e){case Xt.SESSION:n=Ei;break;case Xt.LOCAL:n=await Jt(Pu)._isAvailable()?Pu:wf;break;case Xt.NONE:n=pa;break;default:return Et("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return qt(this._delegate,qO(this._delegate))}signInWithCredential(e){return qt(this._delegate,Au(this._delegate,e))}signInWithCustomToken(e){return qt(this._delegate,HO(this._delegate,e))}signInWithEmailAndPassword(e,n){return qt(this._delegate,JO(this._delegate,e,n))}signInWithEmailLink(e,n){return qt(this._delegate,eD(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Mf(this._delegate,JD(this._delegate,e,n))}async signInWithPopup(e){return _a(xf(),this._delegate,"operation-not-supported-in-this-environment"),qt(this._delegate,sP(this._delegate,e,Cr))}async signInWithRedirect(e){return _a(xf(),this._delegate,"operation-not-supported-in-this-environment"),await Lf(this._delegate),dP(this._delegate,e,Cr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return QO(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Ff.Persistence=Xt;function HI(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Jn.getOrCreate(o)),error:e,complete:n}}/**
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
 */class Uf{constructor(){this.providerId="phone",this._delegate=new gn(jI(uo.auth()))}static credential(e,n){return gn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Uf.PHONE_SIGN_IN_METHOD=gn.PHONE_SIGN_IN_METHOD;Uf.PROVIDER_ID=gn.PROVIDER_ID;/**
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
 */const L1=D;class M1{constructor(e,n,r=uo.app()){var i;L1((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new QD(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const F1="auth-compat";function U1(t){t.INTERNAL.registerComponent(new Vn(F1,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Ff(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ps.EMAIL_SIGNIN,PASSWORD_RESET:Ps.PASSWORD_RESET,RECOVER_EMAIL:Ps.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ps.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ps.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ps.VERIFY_EMAIL}},EmailAuthProvider:Ar,FacebookAuthProvider:kn,GithubAuthProvider:Dn,GoogleAuthProvider:On,OAuthProvider:Vs,PhoneAuthProvider:Uf,PhoneMultiFactorGenerator:LI,RecaptchaVerifier:M1,TwitterAuthProvider:Pn,Auth:Ff,AuthCredential:Fs,Error:sn}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(w1,_1)}U1(uo);/**
  * vee-validate v4.5.2
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */function Si(t){return typeof t=="function"}function $u(t){return t==null}const Bs=t=>t!==null&&!!t&&typeof t=="object"&&!Array.isArray(t);function KI(t){return Number(t)>=0}function V1(t){const e=parseFloat(t);return isNaN(e)?t:e}const WI={};function zx(t,e){B1(t,e),WI[t]=e}function $1(t){return WI[t]}function B1(t,e){if(!Si(e))throw new Error(`Extension Error: The validator '${t}' must be a function.`)}const Ai=Symbol("vee-validate-form"),q1=Symbol("vee-validate-field-instance"),Bu=Symbol("Default empty value");function Vf(t){return Si(t)&&!!t.__locatorRef}function j1(t){return["input","textarea","select"].includes(t)}function z1(t,e){return j1(t)&&e.type==="file"}function Ia(t){return!!t&&Si(t.validate)}function Ea(t){return t==="checkbox"||t==="radio"}function H1(t){return Bs(t)||Array.isArray(t)}function K1(t){return Array.isArray(t)?t.length===0:Bs(t)&&Object.keys(t).length===0}function qu(t){return/^\[.+\]$/i.test(t)}function W1(t){return GI(t)&&t.multiple}function GI(t){return t.tagName==="SELECT"}function G1(t,e){const n=![!1,null,void 0,0].includes(e.multiple)&&!Number.isNaN(e.multiple);return t==="select"&&"multiple"in e&&n}function Q1(t,e){return G1(t,e)||z1(t,e)}function Y1(t){return $f(t)&&t.target&&"submit"in t.target}function $f(t){return t?!!(typeof Event!="undefined"&&Si(Event)&&t instanceof Event||t&&t.srcElement):!1}function Bf(t,e){return e in t&&t[e]!==Bu}function qf(t){return qu(t)?t.replace(/\[|\]/gi,""):t}function ft(t,e,n){return t?qu(e)?t[qf(e)]:(e||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((i,s)=>H1(i)&&s in i?i[s]:n,t):n}function qs(t,e,n){if(qu(e)){t[qf(e)]=n;return}const r=e.split(/\.|\[(\d+)\]/).filter(Boolean);let i=t;for(let s=0;s<r.length;s++){if(s===r.length-1){i[r[s]]=n;return}(!(r[s]in i)||$u(i[r[s]]))&&(i[r[s]]=KI(r[s+1])?[]:{}),i=i[r[s]]}}function jf(t,e){if(Array.isArray(t)&&KI(e)){t.splice(Number(e),1);return}Bs(t)&&delete t[e]}function zf(t,e){if(qu(e)){delete t[qf(e)];return}const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let r=t;for(let s=0;s<n.length;s++){if(s===n.length-1){jf(r,n[s]);break}if(!(n[s]in r)||$u(r[n[s]]))break;r=r[n[s]]}const i=n.map((s,o)=>ft(t,n.slice(0,o).join(".")));for(let s=i.length-1;s>=0;s--)if(!!K1(i[s])){if(s===0){jf(t,n[0]);continue}jf(i[s-1],n[s-1])}}function Rt(t){return Object.keys(t)}function ba(t,e=void 0){const n=sm();return(n==null?void 0:n.provides[t])||en(t,e)}function QI(t){dm(`[vee-validate]: ${t}`)}function Hf(t,e,n){if(Array.isArray(t)){const r=[...t],i=r.indexOf(e);return i>=0?r.splice(i,1):r.push(e),r}return t===e?n:e}function J1(t,e=0){let n=null,r=[];return function(...i){return n&&window.clearTimeout(n),n=window.setTimeout(()=>{const s=t(...i);r.forEach(o=>o(s)),r=[]},e),new Promise(s=>r.push(s))}}const ju=(t,e,n)=>e.slots.default?typeof t=="string"||!t?e.slots.default(n()):{default:()=>{var r,i;return(i=(r=e.slots).default)===null||i===void 0?void 0:i.call(r,n())}}:e.slots.default;function Kf(t){if(YI(t))return t._value}function YI(t){return"_value"in t}function Wf(t){if(!$f(t))return t;const e=t.target;if(Ea(e.type)&&YI(e))return Kf(e);if(e.type==="file"&&e.files)return Array.from(e.files);if(W1(e))return Array.from(e.options).filter(n=>n.selected&&!n.disabled).map(Kf);if(GI(e)){const n=Array.from(e.options).find(r=>r.selected);return n?Kf(n):e.value}return e.value}function JI(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?Bs(t)&&t._$$isNormalized?t:Bs(t)?Object.keys(t).reduce((n,r)=>{const i=X1(t[r]);return t[r]!==!1&&(n[r]=XI(i)),n},e):typeof t!="string"?e:t.split("|").reduce((n,r)=>{const i=Z1(r);return i.name&&(n[i.name]=XI(i.params)),n},e):e}function X1(t){return t===!0?[]:Array.isArray(t)||Bs(t)?t:[t]}function XI(t){const e=n=>typeof n=="string"&&n[0]==="@"?ex(n.slice(1)):n;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,r)=>(n[r]=e(t[r]),n),{})}const Z1=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function ex(t){const e=n=>ft(n,t)||n[t];return e.__locatorRef=t,e}function tx(t){return Array.isArray(t)?t.filter(Vf):Rt(t).filter(e=>Vf(t[e])).map(e=>t[e])}const nx={generateMessage:({field:t})=>`${t} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let Gf=Object.assign({},nx);const Qf=()=>Gf,rx=t=>{Gf=Object.assign(Object.assign({},Gf),t)},Hx=rx;async function ZI(t,e,n={}){const r=n==null?void 0:n.bails,i={name:(n==null?void 0:n.name)||"{field}",rules:e,bails:r!=null?r:!0,formData:(n==null?void 0:n.values)||{}},o=(await ix(i,t)).errors;return{errors:o,valid:!o.length}}async function ix(t,e){if(Ia(t.rules))return sx(e,t.rules,{bails:t.bails});if(Si(t.rules)){const o={field:t.name,form:t.formData,value:e},a=await t.rules(e,o),c=typeof a!="string"&&a,u=typeof a=="string"?a:eE(o);return{errors:c?[]:[u]}}const n=Object.assign(Object.assign({},t),{rules:JI(t.rules)}),r=[],i=Object.keys(n.rules),s=i.length;for(let o=0;o<s;o++){const a=i[o],c=await ox(n,e,{name:a,params:n.rules[a]});if(c.error&&(r.push(c.error),t.bails))return{errors:r}}return{errors:r}}async function sx(t,e,n){var r;return{errors:await e.validate(t,{abortEarly:(r=n.bails)!==null&&r!==void 0?r:!0}).then(()=>[]).catch(s=>{if(s.name==="ValidationError")return s.errors;throw s})}}async function ox(t,e,n){const r=$1(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const i=ax(n.params,t.formData),s={field:t.name,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:i})},o=await r(e,i,s);return typeof o=="string"?{error:o}:{error:o?void 0:eE(s)}}function eE(t){const e=Qf().generateMessage;return e?e(t):"Field is invalid"}function ax(t,e){const n=r=>Vf(r)?r(e):r;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((r,i)=>(r[i]=n(t[i]),r),{})}async function cx(t,e){const n=await t.validate(e,{abortEarly:!1}).then(()=>[]).catch(s=>{if(s.name!=="ValidationError")throw s;return s.inner||[]}),r={},i={};for(const s of n){const o=s.errors;r[s.path]={valid:!o.length,errors:o},o.length&&(i[s.path]=o[0])}return{valid:!n.length,results:r,errors:i}}async function ux(t,e,n){const i=Rt(t).map(async u=>{var l,h,d;const p=await ZI(ft(e,u),t[u],{name:((l=n==null?void 0:n.names)===null||l===void 0?void 0:l[u])||u,values:e,bails:(d=(h=n==null?void 0:n.bailsMap)===null||h===void 0?void 0:h[u])!==null&&d!==void 0?d:!0});return Object.assign(Object.assign({},p),{path:u})});let s=!0;const o=await Promise.all(i),a={},c={};for(const u of o)a[u.path]={valid:u.valid,errors:u.errors},u.valid||(s=!1,c[u.path]=u.errors[0]);return{valid:s,results:a,errors:c}}function tE(t,e,n){typeof n.value=="object"&&(n.value=nt(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||e==="__proto__"?Object.defineProperty(t,e,n):t[e]=n.value}function nt(t){if(typeof t!="object")return t;var e=0,n,r,i,s=Object.prototype.toString.call(t);if(s==="[object Object]"?i=Object.create(t.__proto__||null):s==="[object Array]"?i=Array(t.length):s==="[object Set]"?(i=new Set,t.forEach(function(o){i.add(nt(o))})):s==="[object Map]"?(i=new Map,t.forEach(function(o,a){i.set(nt(a),nt(o))})):s==="[object Date]"?i=new Date(+t):s==="[object RegExp]"?i=new RegExp(t.source,t.flags):s==="[object DataView]"?i=new t.constructor(nt(t.buffer)):s==="[object ArrayBuffer]"?i=t.slice(0):s.slice(-6)==="Array]"&&(i=new t.constructor(t)),i){for(r=Object.getOwnPropertySymbols(t);e<r.length;e++)tE(i,r[e],Object.getOwnPropertyDescriptor(t,r[e]));for(e=0,r=Object.getOwnPropertyNames(t);e<r.length;e++)Object.hasOwnProperty.call(i,n=r[e])&&i[n]===t[n]||tE(i,n,Object.getOwnPropertyDescriptor(t,n))}return i||t}var zu=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var r,i,s;if(Array.isArray(e)){if(r=e.length,r!=n.length)return!1;for(i=r;i--!=0;)if(!t(e[i],n[i]))return!1;return!0}if(e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(i of e.entries())if(!n.has(i[0]))return!1;for(i of e.entries())if(!t(i[1],n.get(i[0])))return!1;return!0}if(e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(i of e.entries())if(!n.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if(r=e.length,r!=n.length)return!1;for(i=r;i--!=0;)if(e[i]!==n[i])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(s=Object.keys(e),r=s.length,r!==Object.keys(n).length)return!1;for(i=r;i--!=0;)if(!Object.prototype.hasOwnProperty.call(n,s[i]))return!1;for(i=r;i--!=0;){var o=s[i];if(!t(e[o],n[o]))return!1}return!0}return e!==e&&n!==n};let nE=0;function lx(t,e){const{value:n,initialValue:r,setInitialValue:i}=hx(t,e.modelValue,!e.standalone),{errorMessage:s,errors:o,setErrors:a}=fx(t,!e.standalone),c=dx(n,r,o),u=nE>=Number.MAX_SAFE_INTEGER?0:++nE;function l(h){var d;"value"in h&&(n.value=h.value),"errors"in h&&a(h.errors),"touched"in h&&(c.touched=(d=h.touched)!==null&&d!==void 0?d:c.touched),"initialValue"in h&&i(h.initialValue)}return{id:u,path:t,value:n,initialValue:r,meta:c,errors:o,errorMessage:s,setState:l}}function hx(t,e,n){const r=n?ba(Ai,void 0):void 0,i=dn(J(e));function s(){return r?ft(r.meta.value.initialValues,J(t),J(i)):J(i)}function o(l){if(!r){i.value=l;return}r.setFieldInitialValue(J(t),l)}const a=Ne(s);if(!r)return{value:dn(s()),initialValue:a,setInitialValue:o};const c=e?J(e):ft(r.values,J(t),J(a));return r.stageInitialValue(J(t),c),{value:Ne({get(){return ft(r.values,J(t))},set(l){r.setFieldValue(J(t),l)}}),initialValue:a,setInitialValue:o}}function dx(t,e,n){const r=Pr({touched:!1,pending:!1,valid:!0,validated:!!J(n).length,initialValue:Ne(()=>J(e)),dirty:Ne(()=>!zu(J(t),J(e)))});return rn(n,i=>{r.valid=!i.length},{immediate:!0,flush:"sync"}),r}function fx(t,e){const n=e?ba(Ai,void 0):void 0;function r(s){return s?Array.isArray(s)?s:[s]:[]}if(!n){const s=dn([]);return{errors:s,errorMessage:Ne(()=>s.value[0]),setErrors:o=>{s.value=r(o)}}}const i=Ne(()=>n.errorBag.value[J(t)]||[]);return{errors:i,errorMessage:Ne(()=>i.value[0]),setErrors:s=>{n.setFieldErrorBag(J(t),r(s))}}}function px(t,e,n){return Ea(n==null?void 0:n.type)?yx(t,e,n):rE(t,e,n)}function rE(t,e,n){const{initialValue:r,validateOnMount:i,bails:s,type:o,checkedValue:a,label:c,validateOnValueUpdate:u,uncheckedValue:l,standalone:h}=mx(J(t),n),d=h?void 0:ba(Ai),{id:p,value:g,initialValue:E,meta:I,setState:w,errors:C,errorMessage:M}=lx(t,{modelValue:r,standalone:h}),U=()=>{I.touched=!0},K=Ne(()=>{let q=J(e);const be=J(d==null?void 0:d.schema);return be&&!Ia(be)&&(q=gx(be,J(t))||q),Ia(q)||Si(q)?q:JI(q)});async function ie(q){var be,De;return(d==null?void 0:d.validateSchema)?(be=(await d.validateSchema(q)).results[J(t)])!==null&&be!==void 0?be:{valid:!0,errors:[]}:ZI(g.value,K.value,{name:J(c)||J(t),values:(De=d==null?void 0:d.values)!==null&&De!==void 0?De:{},bails:s})}async function Z(){I.pending=!0,I.validated=!0;const q=await ie("validated-only");return w({errors:q.errors}),I.pending=!1,q}async function ce(){const q=await ie("silent");return I.valid=q.valid,q}function W(q){return!(q==null?void 0:q.mode)||(q==null?void 0:q.mode)==="force"||(q==null?void 0:q.mode)==="validated-only"?Z():ce()}const he=(q,be=!0)=>{const De=Wf(q);g.value=De,!u&&be&&Z()};za(()=>{if(i)return Z();(!d||!d.validateSchema)&&ce()});function me(q){I.touched=q}let z;function ye(){z=rn(g,u?Z:ce,{deep:!0})}ye();function Fe(q){var be;z==null||z();const De=q&&"value"in q?q.value:E.value;w({value:nt(De),initialValue:nt(De),touched:(be=q==null?void 0:q.touched)!==null&&be!==void 0?be:!1,errors:(q==null?void 0:q.errors)||[]}),I.pending=!1,I.validated=!1,ce(),Vi(()=>{ye()})}function Tt(q){g.value=q}function we(q){w({errors:Array.isArray(q)?q:[q]})}const fe={id:p,name:t,label:c,value:g,meta:I,errors:C,errorMessage:M,type:o,checkedValue:a,uncheckedValue:l,bails:s,resetField:Fe,handleReset:()=>Fe(),validate:W,handleChange:he,handleBlur:U,setState:w,setTouched:me,setErrors:we,setValue:Tt};if(Pi(q1,fe),He(e)&&typeof J(e)!="function"&&rn(e,(q,be)=>{zu(q,be)||(I.validated?Z():ce())},{deep:!0}),!d)return fe;d.register(fe),Gs(()=>{d.unregister(fe)});const ge=Ne(()=>{const q=K.value;return!q||Si(q)||Ia(q)?{}:Object.keys(q).reduce((be,De)=>{const kt=tx(q[De]).map(Je=>Je.__locatorRef).reduce((Je,xn)=>{const T=ft(d.values,xn)||d.values[xn];return T!==void 0&&(Je[xn]=T),Je},{});return Object.assign(be,kt),be},{})});return rn(ge,(q,be)=>{if(!Object.keys(q).length)return;!zu(q,be)&&(I.validated?Z():ce())}),fe}function mx(t,e){const n=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,rules:"",label:t,validateOnValueUpdate:!0,standalone:!1});if(!e)return n();const r="valueProp"in e?e.valueProp:e.checkedValue;return Object.assign(Object.assign(Object.assign({},n()),e||{}),{checkedValue:r})}function gx(t,e){if(!!t)return t[e]}function yx(t,e,n){const r=(n==null?void 0:n.standalone)?void 0:ba(Ai),i=n==null?void 0:n.checkedValue,s=n==null?void 0:n.uncheckedValue;function o(a){const c=a.handleChange,u=Ne(()=>{const h=J(a.value),d=J(i);return Array.isArray(h)?h.includes(d):d===h});function l(h,d=!0){var p,g;if(u.value===((g=(p=h)===null||p===void 0?void 0:p.target)===null||g===void 0?void 0:g.checked))return;let E=Wf(h);r||(E=Hf(J(a.value),J(i),J(s))),c(E,d)}return Gs(()=>{u.value&&l(J(i),!1)}),Object.assign(Object.assign({},a),{checked:u,checkedValue:i,uncheckedValue:s,handleChange:l})}return o(rE(t,e,n))}const Kx=xi({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>Qf().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:Bu},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1}},setup(t,e){const n=tr(t,"rules"),r=tr(t,"name"),i=tr(t,"label"),s=tr(t,"uncheckedValue"),o=Bf(t,"onUpdate:modelValue"),{errors:a,value:c,errorMessage:u,validate:l,handleChange:h,handleBlur:d,setTouched:p,resetField:g,handleReset:E,meta:I,checked:w,setErrors:C}=px(r,n,{validateOnMount:t.validateOnMount,bails:t.bails,standalone:t.standalone,type:e.attrs.type,initialValue:_x(t,e),checkedValue:e.attrs.value,uncheckedValue:s,label:i,validateOnValueUpdate:!1}),M=o?function(he,me=!0){h(he,me),e.emit("update:modelValue",c.value)}:h,U=W=>{Ea(e.attrs.type)||(c.value=Wf(W))},K=o?function(he){U(he),e.emit("update:modelValue",c.value)}:U,ie=Ne(()=>{const{validateOnInput:W,validateOnChange:he,validateOnBlur:me,validateOnModelUpdate:z}=vx(t),ye=[d,e.attrs.onBlur,me?l:void 0].filter(Boolean),Fe=[ge=>M(ge,W),e.attrs.onInput].filter(Boolean),Tt=[ge=>M(ge,he),e.attrs.onChange].filter(Boolean),we={name:t.name,onBlur:ye,onInput:Fe,onChange:Tt};z&&(we["onUpdate:modelValue"]=[M]),Ea(e.attrs.type)&&w?we.checked=w.value:we.value=c.value;const fe=iE(t,e);return Q1(fe,e.attrs)&&delete we.value,we}),Z=tr(t,"modelValue");rn(Z,W=>{W===Bu&&c.value===void 0||W!==wx(c.value,t.modelModifiers)&&(c.value=W===Bu?void 0:W,l())});function ce(){return{field:ie.value,value:c.value,meta:I,errors:a.value,errorMessage:u.value,validate:l,resetField:g,handleChange:M,handleInput:K,handleReset:E,handleBlur:d,setTouched:p,setErrors:C}}return e.expose({setErrors:C,setTouched:p,reset:g,validate:l,handleChange:h}),()=>{const W=bl(iE(t,e)),he=ju(W,e,ce);return W?$r(W,Object.assign(Object.assign({},e.attrs),ie.value),he):he}}});function iE(t,e){let n=t.as||"";return!t.as&&!e.slots.default&&(n="input"),n}function vx(t){var e,n,r,i;const{validateOnInput:s,validateOnChange:o,validateOnBlur:a,validateOnModelUpdate:c}=Qf();return{validateOnInput:(e=t.validateOnInput)!==null&&e!==void 0?e:s,validateOnChange:(n=t.validateOnChange)!==null&&n!==void 0?n:o,validateOnBlur:(r=t.validateOnBlur)!==null&&r!==void 0?r:a,validateOnModelUpdate:(i=t.validateOnModelUpdate)!==null&&i!==void 0?i:c}}function wx(t,e){return e.number?V1(t):t}function _x(t,e){return Ea(e.attrs.type)?Bf(t,"modelValue")?t.modelValue:void 0:Bf(t,"modelValue")?t.modelValue:e.attrs.value}let Ix=0;function Ex(t){const e=Ix++,n=dn({}),r=dn(!1),i=dn(0),s={},o=Pr(nt(J(t==null?void 0:t.initialValues)||{})),{errorBag:a,setErrorBag:c,setFieldErrorBag:u}=Sx(t==null?void 0:t.initialErrors),l=Ne(()=>Rt(a.value).reduce((_,N)=>{const B=a.value[N];return B&&B.length&&(_[N]=B[0]),_},{}));function h(_){const N=n.value[_];return Array.isArray(N)?N[0]:N}function d(_){return!!n.value[_]}const p=Ne(()=>Rt(n.value).reduce((_,N)=>{const B=h(N);return B&&(_[N]=J(B.label||B.name)||""),_},{})),g=Ne(()=>Rt(n.value).reduce((_,N)=>{var B;const F=h(N);return F&&(_[N]=(B=F.bails)!==null&&B!==void 0?B:!0),_},{})),E=Object.assign({},(t==null?void 0:t.initialErrors)||{}),{initialValues:I,originalInitialValues:w,setInitialValues:C}=Tx(n,o,t==null?void 0:t.initialValues),M=bx(n,o,I,l),U=t==null?void 0:t.validationSchema,K={formId:e,fieldsByPath:n,values:o,errorBag:a,errors:l,schema:U,submitCount:i,meta:M,isSubmitting:r,fieldArraysLookup:s,validateSchema:J(U)?V:void 0,validate:q,register:fe,unregister:ge,setFieldErrorBag:u,validateField:be,setFieldValue:he,setValues:me,setErrors:W,setFieldError:ce,setFieldTouched:z,setTouched:ye,resetForm:Fe,handleSubmit:De,stageInitialValue:xn,unsetInitialValue:Je,setFieldInitialValue:kt};function ie(_){return Array.isArray(_)}function Z(_,N){return Array.isArray(_)?_.forEach(N):N(_)}function ce(_,N){u(_,N)}function W(_){c(_)}function he(_,N,{force:B}={force:!1}){var F;const f=n.value[_],m=nt(N);if(!f){qs(o,_,m);return}if(ie(f)&&((F=f[0])===null||F===void 0?void 0:F.type)==="checkbox"&&!Array.isArray(N)){const b=nt(Hf(ft(o,_)||[],N,void 0));qs(o,_,b);return}let y=N;!ie(f)&&f.type==="checkbox"&&!B&&(y=nt(Hf(ft(o,_),N,J(f.uncheckedValue)))),qs(o,_,y)}function me(_){Rt(o).forEach(N=>{delete o[N]}),Rt(_).forEach(N=>{he(N,_[N])}),Object.values(s).forEach(N=>N&&N.reset())}function z(_,N){const B=n.value[_];B&&Z(B,F=>F.setTouched(N))}function ye(_){Rt(_).forEach(N=>{z(N,!!_[N])})}function Fe(_){(_==null?void 0:_.values)?(C(_.values),me(_==null?void 0:_.values)):(C(w.value),me(w.value)),Object.values(n.value).forEach(N=>{!N||Z(N,B=>B.resetField())}),(_==null?void 0:_.touched)&&ye(_.touched),W((_==null?void 0:_.errors)||{}),i.value=(_==null?void 0:_.submitCount)||0}function Tt(_,N){const B=ul(_),F=N;if(!n.value[F]){n.value[F]=B;return}const f=n.value[F];f&&!Array.isArray(f)&&(n.value[F]=[f]),n.value[F]=[...n.value[F],B]}function we(_,N){const B=N,F=n.value[B];if(!!F){if(!ie(F)&&_.id===F.id){delete n.value[B];return}if(ie(F)){const f=F.findIndex(m=>m.id===_.id);if(f===-1)return;if(F.splice(f,1),F.length===1){n.value[B]=F[0];return}F.length||delete n.value[B]}}}function fe(_){const N=J(_.name);Tt(_,N),He(_.name)&&rn(_.name,async(F,f)=>{await Vi(),we(_,f),Tt(_,F),(l.value[f]||l.value[F])&&be(F),await Vi(),d(f)||zf(o,f)});const B=J(_.errorMessage);B&&(E==null?void 0:E[N])!==B&&be(N),delete E[N]}function ge(_){const N=J(_.name);we(_,N),Vi(()=>{d(N)||(ce(N,void 0),zf(o,N))})}async function q(_){if(K.validateSchema)return K.validateSchema((_==null?void 0:_.mode)||"force");const N=await Promise.all(Object.values(n.value).map(f=>{const m=Array.isArray(f)?f[0]:f;return m?m.validate(_).then(y=>({key:J(m.name),valid:y.valid,errors:y.errors})):Promise.resolve({key:"",valid:!0,errors:[]})})),B={},F={};for(const f of N)B[f.key]={valid:f.valid,errors:f.errors},f.errors.length&&(F[f.key]=f.errors[0]);return{valid:N.every(f=>f.valid),results:B,errors:F}}async function be(_){const N=n.value[_];return N?Array.isArray(N)?N.map(B=>B.validate())[0]:N.validate():(dm(`field with name ${_} was not found`),Promise.resolve({errors:[],valid:!0}))}function De(_,N){return function(F){return F instanceof Event&&(F.preventDefault(),F.stopPropagation()),ye(Rt(n.value).reduce((f,m)=>(f[m]=!0,f),{})),r.value=!0,i.value++,q().then(f=>{if(f.valid&&typeof _=="function")return _(nt(o),{evt:F,setErrors:W,setFieldError:ce,setTouched:ye,setFieldTouched:z,setValues:me,setFieldValue:he,resetForm:Fe});!f.valid&&typeof N=="function"&&N({values:nt(o),evt:F,errors:f.errors,results:f.results})}).then(f=>(r.value=!1,f),f=>{throw r.value=!1,f})}}function kt(_,N){qs(I.value,_,nt(N))}function Je(_){zf(I.value,_)}function xn(_,N){qs(o,_,N),kt(_,N)}async function T(){const _=J(U);return _?Ia(_)?await cx(_,o):await ux(_,o,{names:p.value,bailsMap:g.value}):{valid:!0,results:{},errors:{}}}const G=J1(T,5);async function V(_){const N=await G(),B=K.fieldsByPath.value||{},F=Rt(K.errorBag.value);return[...new Set([...Rt(N.results),...Rt(B),...F])].reduce((m,y)=>{const b=B[y],S=(N.results[y]||{errors:[]}).errors,P={errors:S,valid:!S.length};if(m.results[y]=P,P.valid||(m.errors[y]=P.errors[0]),!b)return ce(y,S),m;if(Z(b,O=>O.meta.valid=P.valid),_==="silent")return m;const j=Array.isArray(b)?b.some(O=>O.meta.validated):b.meta.validated;return _==="validated-only"&&!j||Z(b,O=>O.setState({errors:P.errors})),m},{valid:N.valid,results:{},errors:{}})}const ee=De((_,{evt:N})=>{Y1(N)&&N.target.submit()});return za(()=>{if((t==null?void 0:t.initialErrors)&&W(t.initialErrors),(t==null?void 0:t.initialTouched)&&ye(t.initialTouched),t==null?void 0:t.validateOnMount){q();return}K.validateSchema&&K.validateSchema("silent")}),He(U)&&rn(U,()=>{var _;(_=K.validateSchema)===null||_===void 0||_.call(K,"validated-only")}),Pi(Ai,K),{errors:l,meta:M,values:o,isSubmitting:r,submitCount:i,validate:q,validateField:be,handleReset:()=>Fe(),resetForm:Fe,handleSubmit:De,submitForm:ee,setFieldError:ce,setErrors:W,setFieldValue:he,setValues:me,setFieldTouched:z,setTouched:ye}}function bx(t,e,n,r){const i={touched:"some",pending:"some",valid:"every"},s=Ne(()=>!zu(e,J(n))),o=Ne(()=>{const a=Object.values(t.value).flat(1).filter(Boolean);return Rt(i).reduce((c,u)=>{const l=i[u];return c[u]=a[l](h=>h.meta[u]),c},{})});return Ne(()=>Object.assign(Object.assign({initialValues:J(n)},o.value),{valid:o.value.valid&&!Rt(r.value).length,dirty:s.value}))}function Tx(t,e,n){const r=dn(nt(J(n))||{}),i=dn(nt(J(n))||{});function s(o,a=!1){r.value=nt(o),i.value=nt(o),!!a&&Rt(t.value).forEach(c=>{const u=t.value[c],l=Array.isArray(u)?u.some(d=>d.meta.touched):u==null?void 0:u.meta.touched;if(!u||l)return;const h=ft(r.value,c);qs(e,c,nt(h))})}return He(n)&&rn(n,o=>{s(o,!0)},{deep:!0}),{initialValues:r,originalInitialValues:i,setInitialValues:s}}function Sx(t){const e=dn({});function n(s){return Array.isArray(s)?s:s?[s]:[]}function r(s,o){if(!o){delete e.value[s];return}e.value[s]=n(o)}function i(s){e.value=Rt(s).reduce((o,a)=>{const c=s[a];return c&&(o[a]=n(c)),o},{})}return t&&i(t),{errorBag:e,setErrorBag:i,setFieldErrorBag:r}}const Wx=xi({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0}},setup(t,e){const n=tr(t,"initialValues"),r=tr(t,"validationSchema"),{errors:i,values:s,meta:o,isSubmitting:a,submitCount:c,validate:u,validateField:l,handleReset:h,resetForm:d,handleSubmit:p,submitForm:g,setErrors:E,setFieldError:I,setFieldValue:w,setValues:C,setFieldTouched:M,setTouched:U}=Ex({validationSchema:r.value?r:void 0,initialValues:n,initialErrors:t.initialErrors,initialTouched:t.initialTouched,validateOnMount:t.validateOnMount}),K=t.onSubmit?p(t.onSubmit,t.onInvalidSubmit):g;function ie(W){$f(W)&&W.preventDefault(),h(),typeof e.attrs.onReset=="function"&&e.attrs.onReset()}function Z(W,he){return p(typeof W=="function"&&!he?W:he,t.onInvalidSubmit)(W)}function ce(){return{meta:o.value,errors:i.value,values:s,isSubmitting:a.value,submitCount:c.value,validate:u,validateField:l,handleSubmit:Z,handleReset:h,submitForm:g,setErrors:E,setFieldError:I,setFieldValue:w,setValues:C,setFieldTouched:M,setTouched:U,resetForm:d}}return e.expose({setFieldError:I,setErrors:E,setFieldValue:w,setValues:C,setFieldTouched:M,setTouched:U,resetForm:d,validate:u,validateField:l}),function(){const he=t.as==="form"?t.as:bl(t.as),me=ju(he,e,ce);if(!t.as)return me;const z=t.as==="form"?{novalidate:!0}:{};return $r(he,Object.assign(Object.assign(Object.assign({},z),e.attrs),{onSubmit:K,onReset:ie}),me)}}});let Ax=0;function Nx(t){const e=Ax++,n=ba(Ai,void 0),r=dn([]),i=()=>{},s={fields:Va(r),remove:i,push:i,swap:i,insert:i,update:i,replace:i,prepend:i};if(!n)return QI("FieldArray requires being a child of `<Form/>` or `useForm` being called before it. Array fields may not work correctly"),s;if(!J(t))return QI("FieldArray requires a field path to be provided, did you forget to pass the `name` prop?"),s;let o=0;function a(){const w=ft(n==null?void 0:n.values,J(t),[]);r.value=w.map(u),c()}a();function c(){const w=r.value.length;for(let C=0;C<w;C++){const M=r.value[C];M.isFirst=C===0,M.isLast=C===w-1}}function u(w){const C=o++;return{key:C,value:Ne(()=>{const U=ft(n==null?void 0:n.values,J(t),[]),K=r.value.findIndex(ie=>ie.key===C);return K===-1?w:U[K]}),isFirst:!1,isLast:!1}}function l(w){const C=J(t),M=ft(n==null?void 0:n.values,C);if(!M||!Array.isArray(M))return;const U=[...M];U.splice(w,1),n==null||n.unsetInitialValue(C+`[${w}]`),n==null||n.setFieldValue(C,U),r.value.splice(w,1),c()}function h(w){const C=J(t),M=ft(n==null?void 0:n.values,C),U=$u(M)?[]:M;if(!Array.isArray(U))return;const K=[...U];K.push(w),n==null||n.stageInitialValue(C+`[${K.length-1}]`,w),n==null||n.setFieldValue(C,K),r.value.push(u(w)),c()}function d(w,C){const M=J(t),U=ft(n==null?void 0:n.values,M);if(!Array.isArray(U)||!U[w]||!U[C])return;const K=[...U],ie=[...r.value],Z=K[w];K[w]=K[C],K[C]=Z;const ce=ie[w];ie[w]=ie[C],ie[C]=ce,n==null||n.setFieldValue(M,K),r.value=ie,c()}function p(w,C){const M=J(t),U=ft(n==null?void 0:n.values,M);if(!Array.isArray(U)||U.length<w)return;const K=[...U],ie=[...r.value];K.splice(w,0,C),ie.splice(w,0,u(C)),n==null||n.setFieldValue(M,K),r.value=ie,c()}function g(w){const C=J(t);n==null||n.setFieldValue(C,w),a()}function E(w,C){const M=J(t),U=ft(n==null?void 0:n.values,M);!Array.isArray(U)||U.length-1<w||n==null||n.setFieldValue(`${M}[${w}]`,C)}function I(w){const C=J(t),M=ft(n==null?void 0:n.values,C),U=$u(M)?[]:M;if(!Array.isArray(U))return;const K=[w,...U];n==null||n.stageInitialValue(C+`[${K.length-1}]`,w),n==null||n.setFieldValue(C,K),r.value.unshift(u(w)),c()}return n.fieldArraysLookup[e]={reset:a},Gs(()=>{delete n.fieldArraysLookup[e]}),{fields:Va(r),remove:l,push:h,swap:d,insert:p,update:E,replace:g,prepend:I}}xi({name:"FieldArray",inheritAttrs:!1,props:{name:{type:String,required:!0}},setup(t,e){const{push:n,remove:r,swap:i,insert:s,replace:o,update:a,prepend:c,fields:u}=Nx(tr(t,"name"));function l(){return{fields:u.value,push:n,remove:r,swap:i,insert:s,update:a,replace:o,prepend:c}}return e.expose({push:n,remove:r,swap:i,insert:s,update:a,replace:o,prepend:c}),()=>ju(void 0,e,l)}});const Gx=xi({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(t,e){const n=en(Ai,void 0),r=Ne(()=>n==null?void 0:n.errors.value[t.name]);function i(){return{message:r.value}}return()=>{if(!r.value)return;const s=t.as?bl(t.as):t.as,o=ju(s,e,i),a=Object.assign({role:"alert"},e.attrs);return!s&&(Array.isArray(o)||!o)&&(o==null?void 0:o.length)?o:(Array.isArray(o)||!o)&&!(o==null?void 0:o.length)?$r(s||"span",a,r.value):$r(s,a,o)}}});export{Pr as A,Fx as B,_n as C,Lx as D,Gx as E,Wx as F,Ox as G,Mx as H,km as T,Vx as a,Lb as b,$x as c,Hx as d,zx as e,uo as f,Ux as g,dn as h,Px as i,Ht as j,im as k,xx as l,jx as m,Wu as n,Pb as o,Rx as p,kx as q,Dx as r,Ub as s,za as t,Bx as u,Cx as v,XE as w,bl as x,Kx as y,qx as z};
