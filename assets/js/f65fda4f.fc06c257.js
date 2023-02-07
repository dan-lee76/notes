"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[2289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="0. Introduction to Operating systems and Concurrency",s={unversionedId:"Year2/2007/00",id:"Year2/2007/00",title:"0. Introduction to Operating systems and Concurrency",description:"03/10/22",source:"@site/docs/Year2/2007/00.md",sourceDirName:"Year2/2007",slug:"/Year2/2007/00",permalink:"/Year2/2007/00",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"2. Pointer Arithmetic",permalink:"/Year2/2006/02"},next:{title:"1. Introduction (2)",permalink:"/Year2/2007/01"}},l={},c=[{value:"Goals",id:"goals",level:2},{value:"Defining Operating Systems",id:"defining-operating-systems",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"0-introduction-to-operating-systems-and-concurrency"},"0. Introduction to Operating systems and Concurrency"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"03/10/22")),(0,a.kt)("h2",{id:"goals"},"Goals"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Introduction to the fundamental concepts, key principles and internals of (old and new) operating systems and concurrency"),(0,a.kt)("li",{parentName:"ul"},"Better understanding on how application programs interact with the OS"),(0,a.kt)("li",{parentName:"ul"},"Basic understanding of writing concurrent/parallel code and OS principles related to concurrency")),(0,a.kt)("p",null,"50% Coursework 20 Credits"),(0,a.kt)("h2",{id:"defining-operating-systems"},"Defining Operating Systems"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"File Systems"),": Where is the file physically written on the disk and how is it retrieved"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Abstraction"),": Why looks the instruction the same independent of the device?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Concurrency"),": What if multiple programs access the same file simultaneously?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Security"),": Why is the access denied?")),(0,a.kt)("p",null,"An operating system is a layer of indirection on top of the hardware."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It provides ",(0,a.kt)("strong",{parentName:"li"},"abstractions")," for application programs."),(0,a.kt)("li",{parentName:"ul"},"Provides a cleaner and easier interface to the hardware and hides the complexity of 'bare metal'"),(0,a.kt)("li",{parentName:"ul"},"Also allows the programmer to be lazy and use common routines")),(0,a.kt)("p",null,"Many modern OS use ",(0,a.kt)("strong",{parentName:"p"},"multi-programming")," to ",(0,a.kt)("strong",{parentName:"p"},"improve ux")," and ",(0,a.kt)("strong",{parentName:"p"},"maximise resource utilisation"),". However this creates important consequences"),(0,a.kt)("p",null,"The OS must allocate/share resources fairly and safely between competing processes\nThe execution of multiple programs (processes) needs to be interleaved with one another.\n(This requires ",(0,a.kt)("strong",{parentName:"p"},"context switches")," and ",(0,a.kt)("strong",{parentName:"p"},"process scheduling"),")"))}u.isMDXComponent=!0}}]);