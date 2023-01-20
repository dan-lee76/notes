"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2016:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const s={},o="2. Processes",l={unversionedId:"Year2/2007/02",id:"Year2/2007/02",title:"2. Processes",description:"07/10/22",source:"@site/docs/Year2/2007/02.md",sourceDirName:"Year2/2007",slug:"/Year2/2007/02",permalink:"/Year2/2007/02",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"1. Introduction (2)",permalink:"/Year2/2007/01"},next:{title:"3. Process Scheduling",permalink:"/Year2/2007/03"}},i={},c=[{value:"Processes",id:"processes",level:2},{value:"Context Switching",id:"context-switching",level:2},{value:"Process Implementation",id:"process-implementation",level:2},{value:"Process States and Transitions",id:"process-states-and-transitions",level:2},{value:"Context Switching - Multi-programming",id:"context-switching---multi-programming",level:2},{value:"Process",id:"process",level:2},{value:"System Calls",id:"system-calls",level:2},{value:"Fork",id:"fork",level:3}],p={toc:c};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2-processes"},"2. Processes"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"07/10/22")),(0,a.kt)("h2",{id:"processes"},"Processes"),(0,a.kt)("p",null,"A process is a running instance of a program. The program is passive and 'sits' on the disk. A process may be active and may hold resources"),(0,a.kt)("p",null,"A process has control structures - they store all necessary information related to the management of the program"),(0,a.kt)("h2",{id:"context-switching"},"Context Switching"),(0,a.kt)("p",null,"A process control box contains:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Process identification (PiD, UID, Parent PiD)"),(0,a.kt)("li",{parentName:"ul"},"Process control information (process state, scheduling information)"),(0,a.kt)("li",{parentName:"ul"},"Process state information (user registers, pc etc)")),(0,a.kt)("p",null,"The process control block is necessary for context switching in multi programmed systems\xa0\xa0\xa0\xa0"),(0,a.kt)("p",null,"Process control blocks are kernel data structures:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"They are stored in the process table"),(0,a.kt)("li",{parentName:"ul"},"They are accessible in ",(0,a.kt)("a",{parentName:"li",href:"/Year2/2007/01#registers"},"kernel mode")," only"),(0,a.kt)("li",{parentName:"ul"},'Direct "user-mode access" could compromise their integrity'),(0,a.kt)("li",{parentName:"ul"},"They are accessed through system calls")),(0,a.kt)("h2",{id:"process-implementation"},"Process Implementation"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(7185).Z,width:"1265",height:"761"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Process table holds a process control block for each process"),(0,a.kt)("li",{parentName:"ul"},"Info about status of resources is maintained in tables",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Process tables")," - process control blocks"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Memory tables")," - memory allocation, protection, virtual memory etc"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"I/O tables")," - Availability, status, transfer information"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"File tables")," - Location, status"))),(0,a.kt)("li",{parentName:"ul"},"Tables are in kernel space and cross referenced. ")),(0,a.kt)("h2",{id:"process-states-and-transitions"},"Process States and Transitions"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4780).Z,width:"929",height:"454"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"New")," process has just been created and is waiting to be admitted"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ready")," process is waiting for the CPU to become available"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Running")," process 'owns' the CPU"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Blocked")," process cannot continue (waiting for IO)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Terminated")," process is no longer executable"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Suspended")," process is swapped out\nThe interrupts lie on the basis of the transitions")),(0,a.kt)("h2",{id:"context-switching---multi-programming"},"Context Switching - Multi-programming"),(0,a.kt)("p",null,"Mutli-programming goes back to the 'MULTICS' age\nThis is achieved by alternating processes and context switching"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Single processor systems result in concurrent execution"),(0,a.kt)("li",{parentName:"ul"},"True parallelism requires multiple processors")),(0,a.kt)("p",null,"Save CPU State -> The process control block is updated\nRestore CPU State -> the process control block read"),(0,a.kt)("p",null,"A trade-off exists between the length of time-slice and context switching."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Slow time slices - good response times. low utilisation"),(0,a.kt)("li",{parentName:"ul"},"Long time slices - poor response times, better utilisation ")),(0,a.kt)("h2",{id:"process"},"Process"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A process memory image contains the program code and a data segment (stack or heap)"),(0,a.kt)("li",{parentName:"ul"},"Every process has its own logical address space"),(0,a.kt)("li",{parentName:"ul"},"Some OS use address space layout randomisation.")),(0,a.kt)("h2",{id:"system-calls"},"System Calls"),(0,a.kt)("p",null,"True system calls are 'wrapped' in the OS libraries following a well defined interface"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unit: ",(0,a.kt)("inlineCode",{parentName:"li"},"fork()")," generates an exact copy of the parent"),(0,a.kt)("li",{parentName:"ul"},"Windows: ",(0,a.kt)("inlineCode",{parentName:"li"},"NTCreateProcess()")),(0,a.kt)("li",{parentName:"ul"},"Linux: ",(0,a.kt)("inlineCode",{parentName:"li"},"Clone()"))),(0,a.kt)("p",null,"System calls are necessary to notify the OS and the process has terminated. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Resources must be de-allocated"),(0,a.kt)("li",{parentName:"ul"},"Output must be flushed"),(0,a.kt)("li",{parentName:"ul"},"Process admin may have to be carried out")),(0,a.kt)("h3",{id:"fork"},"Fork"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fork()")," creates an exact copy of the current process. ",(0,a.kt)("strong",{parentName:"li"},"The first instruction carried out by the child in the first one after the ",(0,a.kt)("inlineCode",{parentName:"strong"},"fork")," call")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fork()")," returns the process identifier of the child process to the parent process"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"fork()")," returns 0 to the child process")))}u.isMDXComponent=!0},7185:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/20221007110526-788aa699a1530acd74a4aa16c2d77cbd.png"},4780:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/20221007111037-7da3e50e02a7213e1f6b3b47a20902e1.png"}}]);