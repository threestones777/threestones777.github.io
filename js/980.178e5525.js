"use strict";(self["webpackChunkiMe"]=self["webpackChunkiMe"]||[]).push([[980],{980:function(e,t,n){n.d(t,{c:function(){return y}});var i=n(587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */let o;const a=e=>(e.forEach((e=>{for(const t in e)if(e.hasOwnProperty(t)){const n=e[t];if("easing"===t){const i="animation-timing-function";e[i]=n,delete e[t]}else{const i=r(t);i!==t&&(e[i]=n,delete e[t])}}})),e),r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=e=>{if(void 0===o){const t=void 0!==e.style.animationName,n=void 0!==e.style.webkitAnimationName;o=!t&&n?"-webkit-":""}return o},f=(e,t,n)=>{const i=t.startsWith("animation")?s(e):"";e.style.setProperty(i+t,n)},l=(e,t)=>{const n=t.startsWith("animation")?s(e):"";e.style.removeProperty(n+t)},c=(e,t)=>{let n;const i={passive:!0},o=()=>{n&&n()},a=n=>{e===n.target&&(o(),t(n))};return e&&(e.addEventListener("webkitAnimationEnd",a,i),e.addEventListener("animationend",a,i),n=()=>{e.removeEventListener("webkitAnimationEnd",a,i),e.removeEventListener("animationend",a,i)}),o},d=(e=[])=>e.map((e=>{const t=e.offset,n=[];for(const i in e)e.hasOwnProperty(i)&&"offset"!==i&&n.push(`${i}: ${e[i]};`);return`${100*t}% { ${n.join(" ")} }`})).join(" "),m=[],h=e=>{let t=m.indexOf(e);return t<0&&(t=m.push(e)-1),`ion-animation-${t}`},u=e=>{const t=e.getRootNode();return t.head||t},p=(e,t,n)=>{const i=u(n),o=s(n),a=i.querySelector("#"+e);if(a)return a;const r=(n.ownerDocument||document).createElement("style");return r.id=e,r.textContent=`@${o}keyframes ${e} { ${t} } @${o}keyframes ${e}-alt { ${t} }`,i.appendChild(r),r},g=(e=[],t)=>{if(void 0!==t){const n=Array.isArray(t)?t:[t];return[...e,...n]}return e},y=e=>{let t,n,o,r,s,m,u,y,v,E,$,A,b,C=[],w=[],k=[],T=!1,S={},D=[],L=[],P={},F=0,R=!1,N=!1,O=!0,W=!1,K=!0,M=!1;const x=e,I=[],j=[],q=[],z=[],Z=[],B=[],G=[],H=[],J=[],Q=[],U="function"===typeof AnimationEffect||"function"===typeof window.AnimationEffect,V="function"===typeof Element&&"function"===typeof Element.prototype.animate&&U,X=100,Y=()=>Q,_=e=>(z.forEach((t=>{t.destroy(e)})),ee(e),q.length=0,z.length=0,C.length=0,oe(),T=!1,K=!0,b),ee=e=>{ae(),e&&re()},te=()=>{R=!1,N=!1,K=!0,v=void 0,E=void 0,$=void 0,F=0,W=!1,O=!0,M=!1},ne=()=>0!==F&&!M,ie=(e,t)=>{const n=(null===t||void 0===t?void 0:t.oneTimeCallback)?j:I;return n.push({c:e,o:t}),b},oe=()=>(I.length=0,j.length=0,b),ae=()=>{if(V)Q.forEach((e=>{e.cancel()})),Q.length=0;else{const e=q.slice();(0,i.r)((()=>{e.forEach((e=>{l(e,"animation-name"),l(e,"animation-duration"),l(e,"animation-timing-function"),l(e,"animation-iteration-count"),l(e,"animation-delay"),l(e,"animation-play-state"),l(e,"animation-fill-mode"),l(e,"animation-direction")}))}))}},re=()=>{Z.forEach((e=>{(null===e||void 0===e?void 0:e.parentNode)&&e.parentNode.removeChild(e)})),Z.length=0},se=e=>(B.push(e),b),fe=e=>(G.push(e),b),le=e=>(H.push(e),b),ce=e=>(J.push(e),b),de=e=>(w=g(w,e),b),me=e=>(k=g(k,e),b),he=(e={})=>(S=e,b),ue=(e=[])=>{for(const t of e)S[t]="";return b},pe=e=>(D=g(D,e),b),ge=e=>(L=g(L,e),b),ye=(e={})=>(P=e,b),ve=(e=[])=>{for(const t of e)P[t]="";return b},Ee=()=>void 0!==s?s:u?u.getFill():"both",$e=()=>void 0!==v?v:void 0!==m?m:u?u.getDirection():"normal",Ae=()=>R?"linear":void 0!==o?o:u?u.getEasing():"linear",be=()=>N?0:void 0!==E?E:void 0!==n?n:u?u.getDuration():0,Ce=()=>void 0!==r?r:u?u.getIterations():1,we=()=>void 0!==$?$:void 0!==t?t:u?u.getDelay():0,ke=()=>C,Te=e=>(m=e,He(!0),b),Se=e=>(s=e,He(!0),b),De=e=>(t=e,He(!0),b),Le=e=>(o=e,He(!0),b),Pe=e=>(V||0!==e||(e=1),n=e,He(!0),b),Fe=e=>(r=e,He(!0),b),Re=e=>(u=e,b),Ne=e=>{if(null!=e)if(1===e.nodeType)q.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)q.push(e[t]);else console.error("Invalid addElement value");return b},Oe=e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent(b),z.push(t);else e.parent(b),z.push(e);return b},We=e=>{const t=C!==e;return C=e,t&&Ke(C),b},Ke=e=>{V?Y().forEach((t=>{if(t.effect.setKeyframes)t.effect.setKeyframes(e);else{const n=new KeyframeEffect(t.effect.target,e,t.effect.getTiming());t.effect=n}})):je()},Me=()=>{B.forEach((e=>e())),G.forEach((e=>e()));const e=w,t=k,n=S;q.forEach((i=>{const o=i.classList;e.forEach((e=>o.add(e))),t.forEach((e=>o.remove(e)));for(const e in n)n.hasOwnProperty(e)&&f(i,e,n[e])}))},xe=()=>{_e(),H.forEach((e=>e())),J.forEach((e=>e()));const e=O?1:0,t=D,n=L,i=P;q.forEach((e=>{const o=e.classList;t.forEach((e=>o.add(e))),n.forEach((e=>o.remove(e)));for(const t in i)i.hasOwnProperty(t)&&f(e,t,i[t])})),I.forEach((t=>t.c(e,b))),j.forEach((t=>t.c(e,b))),j.length=0,K=!0,O&&(W=!0),O=!0},Ie=()=>{0!==F&&(F--,0===F&&(xe(),u&&u.animationFinish()))},je=(t=!0)=>{re();const n=a(C);q.forEach((o=>{if(n.length>0){const a=d(n);A=void 0!==e?e:h(a);const r=p(A,a,o);Z.push(r),f(o,"animation-duration",`${be()}ms`),f(o,"animation-timing-function",Ae()),f(o,"animation-delay",`${we()}ms`),f(o,"animation-fill-mode",Ee()),f(o,"animation-direction",$e());const s=Ce()===1/0?"infinite":Ce().toString();f(o,"animation-iteration-count",s),f(o,"animation-play-state","paused"),t&&f(o,"animation-name",`${r.id}-alt`),(0,i.r)((()=>{f(o,"animation-name",r.id||null)}))}}))},qe=()=>{q.forEach((e=>{const t=e.animate(C,{id:x,delay:we(),duration:be(),easing:Ae(),iterations:Ce(),fill:Ee(),direction:$e()});t.pause(),Q.push(t)})),Q.length>0&&(Q[0].onfinish=()=>{Ie()})},ze=(e=!0)=>{Me(),C.length>0&&(V?qe():je(e)),T=!0},Ze=e=>{if(e=Math.min(Math.max(e,0),.9999),V)Q.forEach((t=>{t.currentTime=t.effect.getComputedTiming().delay+be()*e,t.pause()}));else{const t=`-${be()*e}ms`;q.forEach((e=>{C.length>0&&(f(e,"animation-delay",t),f(e,"animation-play-state","paused"))}))}},Be=e=>{Q.forEach((e=>{e.effect.updateTiming({delay:we(),duration:be(),easing:Ae(),iterations:Ce(),fill:Ee(),direction:$e()})})),void 0!==e&&Ze(e)},Ge=(e=!0,t)=>{(0,i.r)((()=>{q.forEach((n=>{f(n,"animation-name",A||null),f(n,"animation-duration",`${be()}ms`),f(n,"animation-timing-function",Ae()),f(n,"animation-delay",void 0!==t?`-${t*be()}ms`:`${we()}ms`),f(n,"animation-fill-mode",Ee()||null),f(n,"animation-direction",$e()||null);const o=Ce()===1/0?"infinite":Ce().toString();f(n,"animation-iteration-count",o),e&&f(n,"animation-name",`${A}-alt`),(0,i.r)((()=>{f(n,"animation-name",A||null)}))}))}))},He=(e=!1,t=!0,n)=>(e&&z.forEach((i=>{i.update(e,t,n)})),V?Be(n):Ge(t,n),b),Je=(e=!1,t)=>(z.forEach((n=>{n.progressStart(e,t)})),Ve(),R=e,T||ze(),He(!1,!0,t),b),Qe=e=>(z.forEach((t=>{t.progressStep(e)})),Ze(e),b),Ue=(e,t,n)=>(R=!1,z.forEach((i=>{i.progressEnd(e,t,n)})),void 0!==n&&(E=n),W=!1,O=!0,0===e?(v="reverse"===$e()?"normal":"reverse","reverse"===v&&(O=!1),V?(He(),Ze(1-t)):($=(1-t)*be()*-1,He(!1,!1))):1===e&&(V?(He(),Ze(t)):($=t*be()*-1,He(!1,!1))),void 0!==e&&(ie((()=>{E=void 0,v=void 0,$=void 0}),{oneTimeCallback:!0}),u||ot()),b),Ve=()=>{T&&(V?Q.forEach((e=>{e.pause()})):q.forEach((e=>{f(e,"animation-play-state","paused")})),M=!0)},Xe=()=>(z.forEach((e=>{e.pause()})),Ve(),b),Ye=()=>{y=void 0,Ie()},_e=()=>{y&&clearTimeout(y)},et=()=>{if(_e(),(0,i.r)((()=>{q.forEach((e=>{C.length>0&&f(e,"animation-play-state","running")}))})),0===C.length||0===q.length)Ie();else{const e=we()||0,t=be()||0,n=Ce()||1;isFinite(n)&&(y=setTimeout(Ye,e+t*n+X)),c(q[0],(()=>{_e(),(0,i.r)((()=>{tt(),(0,i.r)(Ie)}))}))}},tt=()=>{q.forEach((e=>{l(e,"animation-duration"),l(e,"animation-delay"),l(e,"animation-play-state")}))},nt=()=>{Q.forEach((e=>{e.play()})),0!==C.length&&0!==q.length||Ie()},it=()=>{V?(Ze(0),Be()):Ge()},ot=e=>new Promise((t=>{(null===e||void 0===e?void 0:e.sync)&&(N=!0,ie((()=>N=!1),{oneTimeCallback:!0})),T||ze(),W&&(it(),W=!1),K&&(F=z.length+1,K=!1),ie((()=>t()),{oneTimeCallback:!0}),z.forEach((e=>{e.play()})),V?nt():et(),M=!1})),at=()=>{z.forEach((e=>{e.stop()})),T&&(ae(),T=!1),te()},rt=(e,t)=>{const n=C[0];return void 0===n||void 0!==n.offset&&0!==n.offset?C=[{offset:0,[e]:t},...C]:n[e]=t,b},st=(e,t)=>{const n=C[C.length-1];return void 0===n||void 0!==n.offset&&1!==n.offset?C=[...C,{offset:1,[e]:t}]:n[e]=t,b},ft=(e,t,n)=>rt(e,t).to(e,n);return b={parentAnimation:u,elements:q,childAnimations:z,id:x,animationFinish:Ie,from:rt,to:st,fromTo:ft,parent:Re,play:ot,pause:Xe,stop:at,destroy:_,keyframes:We,addAnimation:Oe,addElement:Ne,update:He,fill:Se,direction:Te,iterations:Fe,duration:Pe,easing:Le,delay:De,getWebAnimations:Y,getKeyframes:ke,getFill:Ee,getDirection:$e,getDelay:we,getIterations:Ce,getEasing:Ae,getDuration:be,afterAddRead:le,afterAddWrite:ce,afterClearStyles:ve,afterStyles:ye,afterRemoveClass:ge,afterAddClass:pe,beforeAddRead:se,beforeAddWrite:fe,beforeClearStyles:ue,beforeStyles:he,beforeRemoveClass:me,beforeAddClass:de,onFinish:ie,isRunning:ne,progressStart:Je,progressStep:Qe,progressEnd:Ue}}}}]);
//# sourceMappingURL=980.178e5525.js.map