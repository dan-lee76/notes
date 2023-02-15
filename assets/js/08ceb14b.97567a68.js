"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[1435],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>h});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},o=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,o=m(e,["components","mdxType","originalType","parentName"]),u=p(t),h=i,k=u["".concat(l,".").concat(h)]||u[h]||c[h]||s;return t?n.createElement(k,r(r({ref:a},o),{},{components:t})):n.createElement(k,r({ref:a},o))}));function h(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var s=t.length,r=new Array(s);r[0]=u;var m={};for(var l in a)hasOwnProperty.call(a,l)&&(m[l]=a[l]);m.originalType=e,m.mdxType="string"==typeof e?e:i,r[1]=m;for(var p=2;p<s;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},33169:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>m,toc:()=>p});var n=t(87462),i=(t(67294),t(3905));const s={},r="12. Memory Management",m={unversionedId:"Year2/2007/12",id:"Year2/2007/12",title:"12. Memory Management",description:"31/10/22",source:"@site/docs/Year2/2007/12.md",sourceDirName:"Year2/2007",slug:"/Year2/2007/12",permalink:"/Year2/2007/12",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"11. Readers/writers problem(2)",permalink:"/Year2/2007/11"},next:{title:"13. Memory Management 2",permalink:"/Year2/2007/13"}},l={},p=[{value:"Memory Management",id:"memory-management",level:2},{value:"Memory Hierarchies",id:"memory-hierarchies",level:3},{value:"OS Responsibilities",id:"os-responsibilities",level:3},{value:"Partitioning",id:"partitioning",level:2},{value:"Contiguous Approaches",id:"contiguous-approaches",level:3},{value:"Mono-Programming",id:"mono-programming",level:2},{value:"Shortcomings",id:"shortcomings",level:3},{value:"Simulating",id:"simulating",level:3},{value:"Multi-Programming",id:"multi-programming",level:2},{value:"Caveats",id:"caveats",level:3},{value:"Partitioning",id:"partitioning-1",level:2},{value:"Fixed partitions of equal size",id:"fixed-partitions-of-equal-size",level:3},{value:"Disadvantages",id:"disadvantages",level:4},{value:"Fixed partitions of non-equal size",id:"fixed-partitions-of-non-equal-size",level:3},{value:"Fixed Partitions (Allocation Methods)",id:"fixed-partitions-allocation-methods",level:3}],o={toc:p};function c(e){let{components:a,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},o,s,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"12-memory-management"},"12. Memory Management"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"31/10/22")),(0,i.kt)("h2",{id:"memory-management"},"Memory Management"),(0,i.kt)("h3",{id:"memory-hierarchies"},"Memory Hierarchies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Computers typically have memory hierarchies:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Registers, L1/l2/L3 cache"),(0,i.kt)("li",{parentName:"ul"},"Main Memory (RAM)"),(0,i.kt)("li",{parentName:"ul"},"Disks"))),(0,i.kt)("li",{parentName:"ul"},"\"Higher memory\" is faster, more expensive and volatile 'lower memory' is slower, cheaper and non-volatile"),(0,i.kt)("li",{parentName:"ul"},"OS provides a memory abstractions"),(0,i.kt)("li",{parentName:"ul"},"Memory can be seen as one linear array of bytes/words")),(0,i.kt)("h3",{id:"os-responsibilities"},"OS Responsibilities"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Allocate/de-allocate memory when requested by process. keep track of used/unused memory"),(0,i.kt)("li",{parentName:"ul"},"Distribute memory between processes and simulate a 'larger than available' memory space"),(0,i.kt)("li",{parentName:"ul"},"Control access when multi programming is applied"),(0,i.kt)("li",{parentName:"ul"},"Transparently move data from memory to disk and vice versa")),(0,i.kt)("h2",{id:"partitioning"},"Partitioning"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(39676).Z,width:"656",height:"511"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contiguous memory management models")," - allocate memory in one single block without any holes or gaps"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Non-contiguous memory management models")," - capable of allocating memory in multiple blocks, or segments, which may be placed anywhere in physical memory")),(0,i.kt)("h3",{id:"contiguous-approaches"},"Contiguous Approaches"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mono-programming")," - one single partition for user processes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Multi-programming")," with fixed partitions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Fixed equal sized partitions"),(0,i.kt)("li",{parentName:"ul"},"Fixed non-equal sized partitions"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Multi-programming")," with dynamic partitions")),(0,i.kt)("h2",{id:"mono-programming"},"Mono-Programming"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Only one single user process is in memory/executed at any point in time"),(0,i.kt)("li",{parentName:"ul"},"A fixed region of memory is allocated to the OS, the remaining memory is reserved for a single process"),(0,i.kt)("li",{parentName:"ul"},"This process has direct access to physical memory"),(0,i.kt)("li",{parentName:"ul"},"Process is allocated contiguous block of memory"),(0,i.kt)("li",{parentName:"ul"},"One process is allocated the entire memory space, and the process is always located in the same address space"),(0,i.kt)("li",{parentName:"ul"},"Overlays allow the program to control the memory. Programmer can use more memory than available")),(0,i.kt)("h3",{id:"shortcomings"},"Shortcomings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Direct access to the physical memory means it may have access to OS memory"),(0,i.kt)("li",{parentName:"ul"},"OS can be seen as a process - have two processes anyway"),(0,i.kt)("li",{parentName:"ul"},"Low utilisation of hardware resources"),(0,i.kt)("li",{parentName:"ul"},"Mono programming is unacceptable as multi programming is expected on modern machines")),(0,i.kt)("p",null,"Direct memory access/mono programming are common in basic embedded systems, microwaves, washing machines etc"),(0,i.kt)("h3",{id:"simulating"},"Simulating"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Simulate multi-programming through swapping",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Swap process out to the disk and load a new one"),(0,i.kt)("li",{parentName:"ul"},"Apply threads within the same process")))),(0,i.kt)("h2",{id:"multi-programming"},"Multi-Programming"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There are ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"n")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," processes in memory"),(0,i.kt)("li",{parentName:"ul"},"A process spends ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"p")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," percent of its time waiting for I/O"),(0,i.kt)("li",{parentName:"ul"},"CPU utilisation is calculated as 1 minus the time that all processes are waiting for. ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mn",{parentName:"mrow"},"1"),(0,i.kt)("mo",{parentName:"mrow"},"\u2212"),(0,i.kt)("mi",{parentName:"mrow"},"p")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"1-p")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"1"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))),(0,i.kt)("li",{parentName:"ul"},"Probability that all ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"n")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," processes are waiting for I/O is ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mi",{parentName:"msup"},"p"),(0,i.kt)("mi",{parentName:"msup"},"n"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p^n")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8588em",verticalAlign:"-0.1944em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.6644em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"n"))))))))))))," ")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(19250).Z,width:"537",height:"102"})),(0,i.kt)("h3",{id:"caveats"},"Caveats"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This model assumes that all processes are independent, not true"),(0,i.kt)("li",{parentName:"ul"},"More complex models could be built queuing theory, but we can still use this simplistic model to make approximate predictions ")),(0,i.kt)("h2",{id:"partitioning-1"},"Partitioning"),(0,i.kt)("h3",{id:"fixed-partitions-of-equal-size"},"Fixed partitions of equal size"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Divide memory into static, contiguous and equal sized partitions that have a fixed size and fixed location",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Any process can take any partition"),(0,i.kt)("li",{parentName:"ul"},"Allocation of fixed equal sized partitions to process is trivial"),(0,i.kt)("li",{parentName:"ul"},"Very little overhead and simple implementation"),(0,i.kt)("li",{parentName:"ul"},"The OS keeps a track of which partitions are being used and which ones are free")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(78447).Z,width:"123",height:"467"})),(0,i.kt)("h4",{id:"disadvantages"},"Disadvantages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Low memory utilisation and internal fragmentation: partition may be unnecessarily large"),(0,i.kt)("li",{parentName:"ul"},"Overlays must be used if a program does not fit into a partition")),(0,i.kt)("h3",{id:"fixed-partitions-of-non-equal-size"},"Fixed partitions of non-equal size"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Divide memory into static and non-equal sized partitions that have a fixed size and fixed location. "),(0,i.kt)("li",{parentName:"ul"},"Reduces internal fragmentation"),(0,i.kt)("li",{parentName:"ul"},"The allocation of process to partitions must be carefully considered")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(78864).Z,width:"123",height:"466"})),(0,i.kt)("h3",{id:"fixed-partitions-allocation-methods"},"Fixed Partitions (Allocation Methods)"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(56149).Z,width:"792",height:"512"}),"\nOne private queue per partition"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Assigns each process to the smallest partition that it would fit in"),(0,i.kt)("li",{parentName:"ul"},"Reduces internal fragmentation"),(0,i.kt)("li",{parentName:"ul"},"Can reduce memory utilisation and result in starvation")),(0,i.kt)("p",null,"A single shared queue for all partitions can allocate small process to large partitions but result in increased internal fragmentation"))}c.isMDXComponent=!0},39676:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/20221031131258-825bdbdebae0de47481ba973d7d079d8.png"},19250:(e,a,t)=>{t.d(a,{Z:()=>n});const n="data:image/png;base64,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"},78447:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/20221031170820-66ab7cec3f165140bc72eb65a5a9911f.png"},78864:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/20221102114351-efb171d8f5f5beff0f3bed975d4a7800.png"},56149:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/20221102114428-ad9c74e6711ed7fc6206fda2c3a51bc7.png"}}]);