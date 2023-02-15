"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[9184],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?n.createElement(f,o(o({ref:r},c),{},{components:t})):n.createElement(f,o({ref:r},c))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},78615:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const i={},o="11. Readers/writers problem(2)",l={unversionedId:"Year2/2007/11",id:"Year2/2007/11",title:"11. Readers/writers problem(2)",description:"31/10/22",source:"@site/docs/Year2/2007/11.md",sourceDirName:"Year2/2007",slug:"/Year2/2007/11",permalink:"/Year2/2007/11",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"10.   Parallel dining philosophers & Readers/writers problem",permalink:"/Year2/2007/10"},next:{title:"12. Memory Management",permalink:"/Year2/2007/12"}},s={},p=[{value:"Solution 3 - Writers 3",id:"solution-3---writers-3",level:3}],c={toc:p};function u(e){let{components:r,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"11-readerswriters-problem2"},"11. Readers/writers problem(2)"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"31/10/22")),(0,a.kt)("h3",{id:"solution-3---writers-3"},"Solution 3 - Writers 3"),(0,a.kt)("p",null,"Give priority to writers and uses:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iReadCount"),". ",(0,a.kt)("inlineCode",{parentName:"li"},"iWriteCount")," - to keep track of the number of readers/writers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sRead/sWrite")," to synchronise the readers/writers critical section"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sReadTry")," to stop readers when there is a writers waiting"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sReasource")," to synchronise the resource for reading/writing\n",(0,a.kt)("img",{src:t(87059).Z,width:"651",height:"389"}))))}u.isMDXComponent=!0},87059:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/20221031111521-ddcda901bf095899da171afb16403801.png"}}]);