var Yn=Array.isArray,tn=Array.prototype.indexOf,Mn=Array.from,jn=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,nn=Object.getOwnPropertyDescriptors,Un=Object.prototype,Bn=Array.prototype,rn=Object.getPrototypeOf;const Hn=()=>{};function Vn(t){return t()}function gt(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,Tt=4,U=8,it=16,x=32,B=64,K=128,m=256,$=512,c=1024,R=2048,I=4096,C=8192,tt=16384,en=32768,kt=65536,Gn=1<<17,ln=1<<19,At=1<<20,dt=Symbol("$state"),Kn=Symbol("legacy props"),$n=Symbol("");function xt(t){return t===this.v}function sn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Rt(t){return!sn(t,this.v)}function an(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function un(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function on(t){throw new Error("https://svelte.dev/e/effect_orphan")}function fn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Wn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Jn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function _n(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let nt=!1;function Qn(){nt=!0}const Xn=1,tr=2,nr=4,rr=8,er=16,lr=1,sr=2,vn="[",pn="[!",hn="]",St={},ar=Symbol();function Dt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let i=null;function yt(t){i=t}function ur(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},nt&&!n&&(i.l={s:null,u:null,r1:[],r2:_t(!1)})}function or(t){const n=i;if(n!==null){const a=n.e;if(a!==null){var r=f,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];J(s.effect),z(s.reaction),Lt(s.fn)}}finally{J(r),z(e)}}i=n.p,n.m=!0}return{}}function rt(){return!nt||i!==null&&i.l===null}function _t(t,n){var r={f:0,v:t,reactions:null,equals:xt,rv:0,wv:0};return r}function fr(t){return Ot(_t(t))}function dn(t,n=!1){var e;const r=_t(t);return n||(r.equals=Rt),nt&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function ir(t,n=!1){return Ot(dn(t,n))}function Ot(t){return u!==null&&!k&&u.f&w&&(E===null?On([t]):E.push(t)),t}function _r(t,n){return u!==null&&!k&&rt()&&u.f&(w|it)&&(E===null||!E.includes(t))&&cn(),yn(t,n)}function yn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=$t(),It(t,R),rt()&&f!==null&&f.f&c&&!(f.f&(x|B))&&(T===null?In([t]):T.push(t))),n}function It(t,n){var r=t.reactions;if(r!==null)for(var e=rt(),l=r.length,s=0;s<l;s++){var a=r[s],_=a.f;_&R||!e&&a===f||(g(a,n),_&(c|m)&&(_&w?It(a,I):lt(a)))}}let P=!1;function cr(t){P=t}let A;function Y(t){if(t===null)throw Dt(),St;return A=t}function vr(){return Y(F(A))}function pr(t){if(P){if(F(A)!==null)throw Dt(),St;A=t}}function hr(){for(var t=0,n=A;;){if(n.nodeType===8){var r=n.data;if(r===hn){if(t===0)return n;t-=1}else(r===vn||r===pn)&&(t+=1)}var e=F(n);n.remove(),n=e}}var wt,Nt,bt;function dr(){if(wt===void 0){wt=window;var t=Element.prototype,n=Node.prototype;Nt=ht(n,"firstChild").get,bt=ht(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function st(t=""){return document.createTextNode(t)}function at(t){return Nt.call(t)}function F(t){return bt.call(t)}function yr(t,n){if(!P)return at(t);var r=at(A);if(r===null)r=A.appendChild(st());else if(n&&r.nodeType!==3){var e=st();return r==null||r.before(e),Y(e),e}return Y(r),r}function wr(t,n){if(!P){var r=at(t);return r instanceof Comment&&r.data===""?F(r):r}return A}function Er(t,n=1,r=!1){let e=P?A:t;for(var l;n--;)l=e,e=F(e);if(!P)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=st();return e===null?l==null||l.after(a):e.before(a),Y(a),a}return Y(e),e}function mr(t){t.textContent=""}function qt(t){var n=w|R,r=u!==null&&u.f&w?u:null;return f===null||r!==null&&r.f&m?n|=m:f.f|=At,{ctx:i,deps:null,effects:null,equals:xt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function gr(t){const n=qt(t);return n.equals=Rt,n}function Ct(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)O(n[r])}}function wn(t){for(var n=t.parent;n!==null;){if(!(n.f&w))return n;n=n.parent}return null}function En(t){var n,r=f;J(wn(t));try{Ct(t),n=Wt(t)}finally{J(r)}return n}function Pt(t){var n=En(t),r=(S||t.f&m)&&t.deps!==null?I:c;g(t,r),t.equals(n)||(t.v=n,t.wv=$t())}function Ft(t){f===null&&u===null&&on(),u!==null&&u.f&m&&f===null&&un(),ct&&an()}function mn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var l=(t&B)!==0,s=f,a={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var _=b;try{Et(!0),vt(a),a.f|=en}catch(N){throw O(a),N}finally{Et(_)}}else n!==null&&lt(a);var y=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(At|K))===0;if(!y&&!l&&e&&(s!==null&&mn(a,s),u!==null&&u.f&w)){var v=u;(v.effects??(v.effects=[])).push(a)}return a}function Tr(t){const n=L(U,null,!1);return g(n,c),n.teardown=t,n}function kr(t){Ft();var n=f!==null&&(f.f&x)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Lt(t);return e}}function Ar(t){return Ft(),gn(t)}function xr(t){const n=L(B,t,!0);return(r={})=>new Promise(e=>{r.outro?An(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Lt(t){return L(Tt,t,!1)}function gn(t){return L(U,t,!0)}function Rr(t,n=[],r=qt){const e=n.map(r);return Tn(()=>t(...e.map(Fn)))}function Tn(t,n=0){return L(U|it|n,t,!0)}function Sr(t,n=!0){return L(U|x,t,!0,n)}function Yt(t){var n=t.teardown;if(n!==null){const r=ct,e=u;mt(!0),z(null);try{n.call(null)}finally{mt(r),z(e)}}}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function kn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&x||O(n),n=r}}function O(t,n=!0){var r=!1;if((n||t.f&ln)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:F(e);e.remove(),e=s}r=!0}Mt(t,n&&!r),X(t,0),g(t,tt);var a=t.transitions;if(a!==null)for(const y of a)y.stop();Yt(t);var _=t.parent;_!==null&&_.first!==null&&jt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function jt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function An(t,n){var r=[];Ut(t,r,!0),xn(r,()=>{O(t),n&&n()})}function xn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Ut(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&kt)!==0||(e.f&x)!==0;Ut(e,n,s?r:!1),e=l}}}function Dr(t){Bt(t,!0)}function Bt(t,n){if(t.f&C){t.f^=C,t.f&c||(t.f^=c),H(t)&&(g(t,R),lt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&kt)!==0||(r.f&x)!==0;Bt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}const Rn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let Z=!1,W=!1,ut=[],ot=[];function Ht(){Z=!1;const t=ut.slice();ut=[],gt(t)}function Vt(){W=!1;const t=ot.slice();ot=[],gt(t)}function Or(t){Z||(Z=!0,queueMicrotask(Ht)),ut.push(t)}function Ir(t){W||(W=!0,Rn(Vt)),ot.push(t)}function Sn(){Z&&Ht(),W&&Vt()}const Gt=0,Dn=1;let V=!1,G=Gt,M=!1,j=null,b=!1,ct=!1;function Et(t){b=t}function mt(t){ct=t}let D=[],q=0;let u=null,k=!1;function z(t){u=t}let f=null;function J(t){f=t}let E=null;function On(t){E=t}let p=null,d=0,T=null;function In(t){T=t}let Kt=1,Q=0,S=!1;function $t(){return++Kt}function H(t){var v;var n=t.f;if(n&R)return!0;if(n&I){var r=t.deps,e=(n&m)!==0;if(r!==null){var l,s,a=(n&$)!==0,_=e&&f!==null&&!S,y=r.length;if(a||_){for(l=0;l<y;l++)s=r[l],(a||!((v=s==null?void 0:s.reactions)!=null&&v.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=$)}for(l=0;l<y;l++)if(s=r[l],H(s)&&Pt(s),s.wv>t.wv)return!0}(!e||f!==null&&!S)&&g(t,c)}return!1}function Nn(t,n){for(var r=n;r!==null;){if(r.f&K)try{r.fn(t);return}catch{r.f^=K}r=r.parent}throw V=!1,t}function bn(t){return(t.f&tt)===0&&(t.parent===null||(t.parent.f&K)===0)}function et(t,n,r,e){if(V){if(r===null&&(V=!1),bn(n))throw t;return}r!==null&&(V=!0);{Nn(t,n);return}}function Zt(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&w?Zt(s,n,r+1):n===s&&(r===0?g(s,R):s.f&c&&g(s,I),lt(s))}}function Wt(t){var pt;var n=p,r=d,e=T,l=u,s=S,a=E,_=i,y=k,v=t.f;p=null,d=0,T=null,u=v&(x|B)?null:t,S=(v&m)!==0&&(!b||l===null||y),E=null,yt(t.ctx),k=!1,Q++;try{var N=(0,t.fn)(),h=t.deps;if(p!==null){var o;if(X(t,d),h!==null&&d>0)for(h.length=d+p.length,o=0;o<p.length;o++)h[d+o]=p[o];else t.deps=h=p;if(!S)for(o=d;o<h.length;o++)((pt=h[o]).reactions??(pt.reactions=[])).push(t)}else h!==null&&d<h.length&&(X(t,d),h.length=d);if(rt()&&T!==null&&!(t.f&(w|I|R)))for(o=0;o<T.length;o++)Zt(T[o],t);return l!==null&&Q++,N}finally{p=n,d=r,T=e,u=l,S=s,E=a,yt(_),k=y}}function qn(t,n){let r=n.reactions;if(r!==null){var e=tn.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&w&&(p===null||!p.includes(n))&&(g(n,I),n.f&(m|$)||(n.f^=$),Ct(n),X(n,0))}function X(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)qn(t,r[e])}function vt(t){var n=t.f;if(!(n&tt)){g(t,c);var r=f,e=i;f=t;try{n&it?kn(t):Mt(t),Yt(t);var l=Wt(t);t.teardown=typeof l=="function"?l:null,t.wv=Kt;var s=t.deps,a}catch(_){et(_,t,r,e||t.ctx)}finally{f=r}}}function zt(){if(q>1e3){q=0;try{fn()}catch(t){if(j!==null)et(t,j,null);else throw t}}q++}function Jt(t){var n=t.length;if(n!==0){zt();var r=b;b=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&c||(l.f^=c);var s=[];Qt(l,s),Cn(s)}}finally{b=r}}}function Cn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(tt|C)))try{H(e)&&(vt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?jt(e):e.fn=null))}catch(l){et(l,e,null,e.ctx)}}}function Pn(){if(M=!1,q>1001)return;const t=D;D=[],Jt(t),M||(q=0,j=null)}function lt(t){G===Gt&&(M||(M=!0,queueMicrotask(Pn))),j=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(B|x)){if(!(r&c))return;n.f^=c}}D.push(n)}function Qt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&x)!==0,a=s&&(l&c)!==0,_=r.next;if(!a&&!(l&C))if(l&U){if(s)r.f^=c;else{var y=u;try{u=r,H(r)&&vt(r)}catch(o){et(o,r,null,r.ctx)}finally{u=y}}var v=r.first;if(v!==null){r=v;continue}}else l&Tt&&e.push(r);if(_===null){let o=r.parent;for(;o!==null;){if(t===o)break t;var N=o.next;if(N!==null){r=N;continue t}o=o.parent}}r=_}for(var h=0;h<e.length;h++)v=e[h],n.push(v),Qt(v,n)}function Xt(t){var n=G,r=D;try{zt();const l=[];G=Dn,D=l,M=!1,Jt(r);var e=t==null?void 0:t();return Sn(),(D.length>0||l.length>0)&&Xt(),q=0,j=null,e}finally{G=n,D=r}}async function Nr(){await Promise.resolve(),Xt()}function Fn(t){var n=t.f,r=(n&w)!==0;if(u!==null&&!k){E!==null&&E.includes(t)&&_n();var e=u.deps;t.rv<Q&&(t.rv=Q,p===null&&e!==null&&e[d]===t?d++:p===null?p=[t]:(!S||!p.includes(t))&&p.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,s=l.parent;s!==null&&!(s.f&m)&&(l.f^=m)}return r&&(l=t,H(l)&&Pt(l)),t.v}function br(t){var n=k;try{return k=!0,t()}finally{k=n}}const Ln=~(R|I|c);function g(t,n){t.f=t.f&Ln|n}function qr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(dt in t)ft(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&dt in r&&ft(r)}}}function ft(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ft(t[e],n)}catch{}const r=rn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=nn(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{at as $,Bn as A,_t as B,zn as C,_r as D,kt as E,ht as F,f as G,Jn as H,rn as I,Yn as J,Wn as K,Gn as L,x as M,J as N,Kn as O,tr as P,gr as Q,B as R,dt as S,nr as T,ar as U,Rt as V,Xn as W,rr as X,er as Y,dn as Z,st as _,Sr as a,lr as a0,sr as a1,vr as a2,Y as a3,z as a4,u as a5,Tr as a6,Or as a7,jn as a8,dr as a9,vn as aa,F as ab,St as ac,cr as ad,hn as ae,Dt as af,Zn as ag,mr as ah,Mn as ai,xr as aj,pn as ak,hr as al,Dr as am,An as an,Lt as ao,gn as ap,Xt as aq,Nr as ar,fr as as,Ir as at,$n as au,nn as av,rt as aw,ir as ax,Tn as b,A as c,O as d,i as e,wr as f,br as g,P as h,Ar as i,gt as j,Fn as k,nt as l,qr as m,Hn as n,qt as o,Qn as p,ur as q,Vn as r,sn as s,Rr as t,kr as u,or as v,yr as w,pr as x,Er as y,Un as z};
