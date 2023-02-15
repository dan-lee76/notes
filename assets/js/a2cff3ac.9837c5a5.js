"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[3822],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=l.createContext({}),s=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||n;return a?l.createElement(f,i(i({ref:t},u),{},{components:a})):l.createElement(f,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<n;s++)i[s]=a[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},32642:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var l=a(87462),r=(a(67294),a(3905));const n={},i="3. Stack, local variables and static locals",o={unversionedId:"Year2/2006/03",id:"Year2/2006/03",title:"3. Stack, local variables and static locals",description:"09/02/23",source:"@site/docs/Year2/2006/03.md",sourceDirName:"Year2/2006",slug:"/Year2/2006/03",permalink:"/Year2/2006/03",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"2. Pointer Arithmetic",permalink:"/Year2/2006/02"},next:{title:"4. Structs, Unions, Data Sizes",permalink:"/Year2/2006/04"}},c={},s=[{value:"Stack",id:"stack",level:2},{value:"Lifetime of a local variables",id:"lifetime-of-a-local-variables",level:2},{value:"\u26a0\ufe0fDANGER\u26a0\ufe0f",id:"\ufe0fdanger\ufe0f",level:3},{value:"Global and static local variables",id:"global-and-static-local-variables",level:2},{value:"Global Variables",id:"global-variables",level:3},{value:"Local Variables",id:"local-variables",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"3-stack-local-variables-and-static-locals"},"3. Stack, local variables and static locals"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"09/02/23")),(0,r.kt)("h2",{id:"stack"},"Stack"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Stack is LIFO"),(0,r.kt)("li",{parentName:"ul"},"Function calls (Stack frames) are store on a stack in memory"),(0,r.kt)("li",{parentName:"ul"},"Most stacks go down in memory address"),(0,r.kt)("li",{parentName:"ul"},"Values are stored together in the stack frame")),(0,r.kt)("h2",{id:"lifetime-of-a-local-variables"},"Lifetime of a local variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Local variables exist for the duration of the stack frame they are in"),(0,r.kt)("li",{parentName:"ul"},"They get destroyed; if you use ",(0,r.kt)("inlineCode",{parentName:"li"},"malloc()")," you need to call ",(0,r.kt)("inlineCode",{parentName:"li"},"free()"),(0,r.kt)("img",{src:a(63486).Z,width:"830",height:"438"}))),(0,r.kt)("h3",{id:"\ufe0fdanger\ufe0f"},"\u26a0\ufe0fDANGER\u26a0\ufe0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your local variables only exist for as long as the block in which they are defined. "),(0,r.kt)("li",{parentName:"ul"},"Do not access them after that"),(0,r.kt)("li",{parentName:"ul"},"Do not assume that they keep their value after the function ends")),(0,r.kt)("h2",{id:"global-and-static-local-variables"},"Global and static local variables"),(0,r.kt)("h3",{id:"global-variables"},"Global Variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Variables are declared outside of all functions and last for the duration of the program"),(0,r.kt)("li",{parentName:"ul"},"All functions in the file can access goals"),(0,r.kt)("li",{parentName:"ul"},"Can be hidden from other files")),(0,r.kt)("h3",{id:"local-variables"},"Local Variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can be ",(0,r.kt)("inlineCode",{parentName:"li"},"static"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Means not moving/unchanging"),(0,r.kt)("li",{parentName:"ul"},"NOT the same as static member variables"),(0,r.kt)("li",{parentName:"ul"},"NOT the same as ",(0,r.kt)("inlineCode",{parentName:"li"},"const")))),(0,r.kt)("li",{parentName:"ul"},"Static local variables remember their value between function calls")))}p.isMDXComponent=!0},63486:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/20230209091852-a3c6d7a1260623e304ef899b65a5c73a.png"}}]);