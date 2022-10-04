"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[8813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="Introduction to Operating systems and concurrency",s={unversionedId:"Year2/2007/Introduction",id:"Year2/2007/Introduction",title:"Introduction to Operating systems and concurrency",description:"03/10/22",source:"@site/docs/Year2/2007/Introduction.md",sourceDirName:"Year2/2007",slug:"/Year2/2007/Introduction",permalink:"/Year2/2007/Introduction",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"Introduction 2",permalink:"/Year2/2007/0410"},next:{title:"Introduction to Algorithms Correctness and Efficiency",permalink:"/Year2/2009/Introduction"}},l={},c=[{value:"Goals",id:"goals",level:2},{value:"Defining Operating Systems",id:"defining-operating-systems",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-operating-systems-and-concurrency"},"Introduction to Operating systems and concurrency"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"03/10/22")),(0,o.kt)("h2",{id:"goals"},"Goals"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introduction to the fundamental concepts, key principles and internals of (old and new) operating systems and concurrency"),(0,o.kt)("li",{parentName:"ul"},"Better understanding on how application programs interact with the OS"),(0,o.kt)("li",{parentName:"ul"},"Basic understanding of writing concurrent/parallel code and OS principles related to concurrency")),(0,o.kt)("p",null,"50% Coursework 20 Credits"),(0,o.kt)("h2",{id:"defining-operating-systems"},"Defining Operating Systems"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"File Systems"),": Where is the file physically written on the disk and how is it retrieved"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Abstraction"),": Why looks the instruction the same independent of the device?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Concurrency"),": What if multiple programs access the same file simultaneously?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Security"),": Why is the access denied?")),(0,o.kt)("p",null,"An operating system is a layer of indirection on top of the hardware."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It provides ",(0,o.kt)("strong",{parentName:"li"},"abstractions")," for application programs."),(0,o.kt)("li",{parentName:"ul"},"Provides a cleaner and easier interface to the hardware and hides the complexity of 'bare metal'"),(0,o.kt)("li",{parentName:"ul"},"Also allows the programmer to be lazy and use common routines")),(0,o.kt)("p",null,"Many modern OS use ",(0,o.kt)("strong",{parentName:"p"},"multi-programming")," to ",(0,o.kt)("strong",{parentName:"p"},"improve ux")," and ",(0,o.kt)("strong",{parentName:"p"},"maximise resource utilisation"),". However this creates important consequences"),(0,o.kt)("p",null,"The OS must allocate/share resources fairly and safely between competing processes\nThe execution of multiple programs (processes) needs to be interleaved with one another.\n(This requires ",(0,o.kt)("strong",{parentName:"p"},"context switches")," and ",(0,o.kt)("strong",{parentName:"p"},"process scheduling"),")"))}u.isMDXComponent=!0}}]);