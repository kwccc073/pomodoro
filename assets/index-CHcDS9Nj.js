import{g as L,o as j,a as x,n as W,u as b,b as U,r as _,w as B,c as k,_ as D,s as I,d as F,e as R,f as y,V as q,h as m,i as C,t as P,j as O}from"./index-CiAkyGTm.js";import{u as z}from"./list-CKvRSXwg.js";import{u as H}from"./settings-DzudpfZI.js";import{V as E,a as $}from"./VRow-Br7FUvi_.js";function A(e){return L()?(j(e),!0):!1}function T(){const e=new Set,t=o=>{e.delete(o)};return{on:o=>{e.add(o);const r=()=>t(o);return A(r),{off:r}},off:t,trigger:(...o)=>Promise.all(Array.from(e).map(r=>r(...o)))}}function V(e){return typeof e=="function"?e():b(e)}const J=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const K=Object.prototype.toString,Q=e=>K.call(e)==="[object Object]",X=()=>{};function Y(e){return U()}function Z(e,t=!0,n){Y()?x(e,n):t?e():W(e)}function ee(e){var t;const n=V(e);return(t=n==null?void 0:n.$el)!=null?t:n}const M=J?window:void 0;function te(...e){let t,n,i,o;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,i,o]=e,t=M):[t,n,i,o]=e,!t)return X;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const r=[],s=()=>{r.forEach(l=>l()),r.length=0},p=(l,u,c,f)=>(l.addEventListener(u,c,f),()=>l.removeEventListener(u,c,f)),g=B(()=>[ee(t),V(o)],([l,u])=>{if(s(),!l)return;const c=Q(u)?{...u}:u;r.push(...n.flatMap(f=>i.map(h=>p(l,f,h,c))))},{immediate:!0,flush:"post"}),v=()=>{g(),s()};return A(v),v}function ne(){const e=_(!1),t=U();return t&&x(()=>{e.value=!0},t),e}function oe(e){const t=ne();return k(()=>(t.value,!!e()))}function re(e={}){const{window:t=M,requestPermissions:n=!0}=e,i=e,o=oe(()=>{if(!t||!("Notification"in t))return!1;try{new Notification("")}catch{return!1}return!0}),r=_(o.value&&"permission"in Notification&&Notification.permission==="granted"),s=_(null),p=async()=>{if(o.value)return!r.value&&Notification.permission!=="denied"&&await Notification.requestPermission()==="granted"&&(r.value=!0),r.value},{on:g,trigger:v}=T(),{on:l,trigger:u}=T(),{on:c,trigger:f}=T(),{on:h,trigger:w}=T(),N=async a=>{if(!o.value||!r.value)return;const d=Object.assign({},i,a);return s.value=new Notification(d.title||"",d),s.value.onclick=v,s.value.onshow=u,s.value.onerror=f,s.value.onclose=w,s.value},S=()=>{s.value&&s.value.close(),s.value=null};if(n&&Z(p),A(S),o.value&&t){const a=t.document;te(a,"visibilitychange",d=>{d.preventDefault(),a.visibilityState==="visible"&&S()})}return{isSupported:o,notification:s,ensurePermissions:p,permissionGranted:r,show:N,close:S,onClick:g,onShow:l,onError:c,onClose:h}}const se={class:"btns"},ie={__name:"index",setup(e){const t={STOP:0,COUNTING:1,PAUSE:2},n=_(t.STOP),i=z(),{currentItem:o,items:r,timeleft:s}=I(i),{setCurrentItem:p,countdown:g,setFinishItem:v}=i,l=H(),{selectedAlarmFile:u}=I(l);let c=0;const f=()=>{n.value===t.STOP&&r.value.length>0&&p(),n.value=t.COUNTING,c=setInterval(()=>{g(),s.value===0&&w()},1e3)},h=()=>{n.value=t.PAUSE,clearInterval(c)},w=()=>{clearInterval(c),n.value=t.STOP;const a=new Audio;a.src=u.value,a.play();const{show:d,isSupported:G}=re({title:"事項完成",body:o.value,icon:new URL(""+new URL("tomato-tm_sgEMz.png",import.meta.url).href,import.meta.url).href});G.value&&d(),v(),r.value.length>0&&f()},N=k(()=>o.value.length>0?o.value:r.value.length>0?"點擊開始":"沒有事項"),S=k(()=>{const a=Math.floor(s.value/60).toString().padStart(2,"0"),d=(s.value%60).toString().padStart(2,"0");return a+":"+d});return(a,d)=>(F(),R(q,null,{default:y(()=>[m($,null,{default:y(()=>[m(E,{cols:"12"},{default:y(()=>[C("h1",null,"目前事項："+P(N.value),1),C("h2",null,"剩餘時間："+P(S.value),1)]),_:1}),m(E,{cols:"12"},{default:y(()=>[C("div",se,[m(O,{icon:"mdi-play",onClick:f,disabled:n.value===t.COUNTING||b(o).length===0&&b(r).length===0},null,8,["disabled"]),m(O,{icon:"mdi-pause",disabled:n.value!==t.COUNTING,onClick:h},null,8,["disabled"]),m(O,{icon:"mdi-skip-next",disabled:b(o).length===0,onClick:w},null,8,["disabled"])])]),_:1})]),_:1})]),_:1}))}},fe=D(ie,[["__scopeId","data-v-52c37f7a"]]);export{fe as default};