"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[2372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},27931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},l="9. Bounded buffer & dining philosophers problem",i={unversionedId:"Year2/2007/09",id:"Year2/2007/09",title:"9. Bounded buffer & dining philosophers problem",description:"24/10/22",source:"@site/docs/Year2/2007/09.md",sourceDirName:"Year2/2007",slug:"/Year2/2007/09",permalink:"/Year2/2007/09",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"8. Mutexs & Semaphores",permalink:"/Year2/2007/08"},next:{title:"10.   Parallel dining philosophers & Readers/writers problem",permalink:"/Year2/2007/10"}},s={},p=[{value:"The Producer/Consumer Problem - First Attempt",id:"the-producerconsumer-problem---first-attempt",level:2},{value:"The Dining Philosophers Problem",id:"the-dining-philosophers-problem",level:2},{value:"Solution 1 - <em>Deadlock</em>",id:"solution-1---deadlock",level:3},{value:"Solution 2: Global Mutex/Semaphore",id:"solution-2-global-mutexsemaphore",level:3}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"9-bounded-buffer--dining-philosophers-problem"},"9. Bounded buffer & dining philosophers problem"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"24/10/22")),(0,o.kt)("p",null,"Temporary variables: Copies the value of items inside the critical section. Decrements the delay_consumer semaphore to make it consistent"),(0,o.kt)("h2",{id:"the-producerconsumer-problem---first-attempt"},"The Producer/Consumer Problem - First Attempt"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/Year2/2007/08#first-version"},"continued"),"\n",(0,o.kt)("em",{parentName:"p"},"One Consumer, One Producer, Unbounded Buffer: solution"),"\nAny manipulations of count will have to be synchronised. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Race conditions still exist",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When the consumer has exhausted the buffer, should have gone to sleep, but the producer increments ",(0,o.kt)("inlineCode",{parentName:"li"},"items")," before the consumer checks it")))),(0,o.kt)("p",null,"Race condition:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Consumer has removed the last element"),(0,o.kt)("li",{parentName:"ul"},"Producer adds a new element"),(0,o.kt)("li",{parentName:"ul"},"Consumer should have gone to sleep, but no longer will"),(0,o.kt)("li",{parentName:"ul"},"Consumer 'consumes' non existing elements")),(0,o.kt)("p",null,"A different variant of the problem has ",(0,o.kt)("em",{parentName:"p"},"n")," consumers, ",(0,o.kt)("em",{parentName:"p"},"m")," producers, and a fixed buffer size ",(0,o.kt)("em",{parentName:"p"},"N"),". The solution is based on 3 semaphores:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- `sync`: used to enforce mutual exclusion for the buffer\n- `empty`: keeps track of the number of empty buffers, initialised to *N*\n- *full*: keeps track of the number of full buffers, initialised to 0\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"empty")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"full")," are counting semaphores and represent resources")),(0,o.kt)("h2",{id:"the-dining-philosophers-problem"},"The Dining Philosophers Problem"),(0,o.kt)("p",null,"The Problem:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"5 Philosophers are sitting on a round table"),(0,o.kt)("li",{parentName:"ul"},"Each one has a plate of spaghetti"),(0,o.kt)("li",{parentName:"ul"},"The spaghetti is too slippery, and each philosopher needs 2 forks to be able to each"),(0,o.kt)("li",{parentName:"ul"},"When hungry (in between thinking), the philosopher tried to acquire the fork on his left and right.\nForks are represented by semaphores (initialised to 1)"),(0,o.kt)("li",{parentName:"ul"},"1 if the fork is available: philosopher can continue"),(0,o.kt)("li",{parentName:"ul"},"0 if the fork is not available: the philosopher goes to sleep if trying to acquire it ")),(0,o.kt)("h3",{id:"solution-1---deadlock"},"Solution 1 - ",(0,o.kt)("em",{parentName:"h3"},"Deadlock")),(0,o.kt)("p",null,"First approach: Every philosopher picks up one fork and waits for the second one to become available(without putting the first one down)\n",(0,o.kt)("img",{src:n(75047).Z,width:"1194",height:"239"})),(0,o.kt)("p",null,"This causes a deadlock. This can be prevented by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Putting the forks down and waiting a random time (Ethernet networks)"),(0,o.kt)("li",{parentName:"ul"},"Putting one additional fork on the table"),(0,o.kt)("li",{parentName:"ul"},"One global mutex/lock set by the philosopher when they want to eat. ",(0,o.kt)("em",{parentName:"li"},"Solution does not result in maximum parallelism (only one eats at a time)"))),(0,o.kt)("h3",{id:"solution-2-global-mutexsemaphore"},"Solution 2: Global Mutex/Semaphore"),(0,o.kt)("p",null,"Dan Terms: Global mutex, if enabled, no one else can eat, therefore only one person can eat at a time?\n",(0,o.kt)("img",{src:n(40271).Z,width:"1402",height:"903"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4997).Z,width:"2209",height:"516"})))}m.isMDXComponent=!0},75047:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/20221024102034-a312c50e7eafe2ba461c8f8cb5c29374.png"},40271:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/20221028100449-844271e1c1e52d07999b5925173c466c.png"},4997:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/20221028100659-d904eb5914ddfca56d3b7ff06a53fac9.png"}}]);