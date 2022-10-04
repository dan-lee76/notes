"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[4346],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="1. Introduction (2)",s={unversionedId:"Year2/2007/1",id:"Year2/2007/1",title:"1. Introduction (2)",description:"04/10/22",source:"@site/docs/Year2/2007/1.md",sourceDirName:"Year2/2007",slug:"/Year2/2007/1",permalink:"/Year2/2007/1",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"0. Introduction to Operating systems and Concurrency",permalink:"/Year2/2007/0"},next:{title:"0. Introduction to Algorithms Correctness and Efficiency",permalink:"/Year2/2009/0"}},l={},c=[{value:"Computer Hardware (CPU Design)",id:"computer-hardware-cpu-design",level:2},{value:"Registers",id:"registers",level:3},{value:"History",id:"history",level:3},{value:"Multi-Core, hyper-threaded processors",id:"multi-core-hyper-threaded-processors",level:3},{value:"Timer Interrupts",id:"timer-interrupts",level:3},{value:"Mirco Kernels",id:"mirco-kernels",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-introduction-2"},"1. Introduction (2)"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"04/10/22")),(0,a.kt)("h2",{id:"computer-hardware-cpu-design"},"Computer Hardware (CPU Design)"),(0,a.kt)("p",null,"Basic Cycle - Fetch Decode Execute\nHigher end - Have multiple processor pipelines, which will do multiple things at once. Order they put into the holding buffer is not necessary going to be in the same execution order."),(0,a.kt)("h3",{id:"registers"},"Registers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Data Registers")," - Any sort of data for special functions. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Program Counter-")," Holds the next instruction."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Program status word"),"  - admin, stores the mode bit. Which mode the CPU is in, kernel mode or user mode."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"User Mode")," - Direct access to a subset of instructions the CPU can carry out"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Kernel mode")," - Access to the full set of instructions. Including privileged memory locations. "),(0,a.kt)("li",{parentName:"ul"},"Normally compiler decides which mode to use")),(0,a.kt)("p",null,"When running program data would be stored in the same address, even if run more than once. But value wont affect the program/value"),(0,a.kt)("p",null,"Name given to a variable, is a synonym, to the location of an address.\nOne cannot know where in memory an executable will run. Variables require memory, they need to have a memory address"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Logical Address Space")," - Used by the processor and the compiler (starts at 0). What you use when you write code. Every process has one. ","[0, MAX^64]"," (theoretically)^4"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Physical Address Space")," - Seen by the hardware/OS. ","[0,MAX]"," (Determined by the amount of physical memory)\nMemory management unit is responsible for address translation\n",(0,a.kt)("inlineCode",{parentName:"li"},"physical = logical + x"))),(0,a.kt)("p",null,"Different processes require different address translation.\nContext switching requires updating the MMU"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For MacOS: Memory address is always random, to make code less predictable and as a security measure.")),(0,a.kt)("h3",{id:"history"},"History"),(0,a.kt)("p",null,"Originally single core with high clock power, caused too much heat. Especially with more transistors and things getting closer together\nInstead, they now have more cores to distribute the load and heat. Can use parallelism automatically to share the load."),(0,a.kt)("h3",{id:"multi-core-hyper-threaded-processors"},"Multi-Core, hyper-threaded processors"),(0,a.kt)("p",null,"Evolution in hardware has implications on operating system design.\nThe process scheduling needs to account for load balancing and CPU affinity. Now need to decide when and WHERE it is going to run."),(0,a.kt)("h3",{id:"timer-interrupts"},"Timer Interrupts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Interrupts temporarily pause a processes normal operation.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Timer interrupts by CPU clock"),(0,a.kt)("li",{parentName:"ul"},"I/O interrupts for I/O completion or error codes"),(0,a.kt)("li",{parentName:"ul"},"Software generated "))),(0,a.kt)("li",{parentName:"ul"},"Context switches (switches between processes) can be initiated by timer interrupts after a set time")),(0,a.kt)("h2",{id:"mirco-kernels"},"Mirco Kernels"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"20221004134320.png",src:r(789).Z,width:"776",height:"383"})),(0,a.kt)("p",null,"Running it as user mode, if you do damage, less damage would be compared to kernel mode"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Monolithic Systems")," - All procedures into one single executable running in kernel mode. However, they are difficult to maintain. Current versions of Windows, and Linux are implemented as this."))}p.isMDXComponent=!0},789:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/20221004134320-16755c2ac001f9d8c85b036a3c709215.png"}}]);