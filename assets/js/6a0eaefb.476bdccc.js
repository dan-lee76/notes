"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[494],{3905:(a,e,t)=>{t.d(e,{Zo:()=>o,kt:()=>c});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var l=n.createContext({}),i=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},o=function(a){var e=i(a.components);return n.createElement(l.Provider,{value:e},a.children)},k={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,l=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),N=i(t),c=s,u=N["".concat(l,".").concat(c)]||N[c]||k[c]||r;return t?n.createElement(u,m(m({ref:e},o),{},{components:t})):n.createElement(u,m({ref:e},o))}));function c(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,m=new Array(r);m[0]=N;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p.mdxType="string"==typeof a?a:s,m[1]=p;for(var i=2;i<r;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},30708:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>m,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var n=t(87462),s=(t(67294),t(3905));const r={},m="12. Abstract Data Types - Stacks & Queues",p={unversionedId:"Year2/2009/ADE/12",id:"Year2/2009/ADE/12",title:"12. Abstract Data Types - Stacks & Queues",description:"13/02/23",source:"@site/docs/Year2/2009/ADE/12.md",sourceDirName:"Year2/2009/ADE",slug:"/Year2/2009/ADE/12",permalink:"/Year2/2009/ADE/12",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"11. The Vector Data Type, and Amortised Analysis",permalink:"/Year2/2009/ADE/11"},next:{title:"13. Heaps & Maps",permalink:"/Year2/2009/ADE/13"}},l={},i=[{value:"The Stack ADT",id:"the-stack-adt",level:2},{value:"Applications",id:"applications",level:3},{value:"The Queue ADT",id:"the-queue-adt",level:2},{value:"Applications of Queues",id:"applications-of-queues",level:3},{value:"Queue using Array as the CDT",id:"queue-using-array-as-the-cdt",level:3},{value:"Why not just use an Array instead of a Queue ADT?",id:"why-not-just-use-an-array-instead-of-a-queue-adt",level:3},{value:"Narrow Vs. Wide ADT",id:"narrow-vs-wide-adt",level:3},{value:"Stacks and Queues by using linked lists",id:"stacks-and-queues-by-using-linked-lists",level:2},{value:"Usage of Simplest linked list",id:"usage-of-simplest-linked-list",level:3},{value:"Priority Queues",id:"priority-queues",level:2},{value:"Total Order Relations",id:"total-order-relations",level:3},{value:"Comparator",id:"comparator",level:3},{value:"Heaps",id:"heaps",level:2},{value:"Height of a Heap",id:"height-of-a-heap",level:3},{value:"Heaps and Priority Queues",id:"heaps-and-priority-queues",level:3}],o={toc:i};function k(a){let{components:e,...r}=a;return(0,s.kt)("wrapper",(0,n.Z)({},o,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"12-abstract-data-types---stacks--queues"},"12. Abstract Data Types - Stacks & Queues"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"13/02/23")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"ADT - Abstract Data Type")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Only concerned with specifying the interface"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"Behaviour")," as seen from the outside"),(0,s.kt)("li",{parentName:"ul"},"Specifies the methods provided - and possibly requirements on their complexity")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"CDT - Concrete Data Type (CDT)")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Some structure and algorithm used for an actual implementation"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"Behaviour as seen form the inside"))),(0,s.kt)("h2",{id:"the-stack-adt"},"The Stack ADT"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The Stack ADT stores arbitrary (references to) objects"),(0,s.kt)("li",{parentName:"ul"},"Insertions and deletions follow ",(0,s.kt)("strong",{parentName:"li"},"last-in first-out (LIFO)"))),(0,s.kt)("h3",{id:"applications"},"Applications"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Direct applications")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Page-visited history in a Web browser"),(0,s.kt)("li",{parentName:"ul"},"Undo sequence in a text editor"),(0,s.kt)("li",{parentName:"ul"},"Chain of method calls in the JVM")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Indirect applications")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Auxiliary data structure for algorithms"),(0,s.kt)("li",{parentName:"ul"},"Components of other data structures")),(0,s.kt)("h2",{id:"the-queue-adt"},"The Queue ADT"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Stores arbitrary objects"),(0,s.kt)("li",{parentName:"ul"},"Insertions and deletions follow the ",(0,s.kt)("strong",{parentName:"li"},"first-in first-out FIFO")," scheme"),(0,s.kt)("li",{parentName:"ul"},"Insertions are at the rear of the queue and removals are at the front of the queue")),(0,s.kt)("h3",{id:"applications-of-queues"},"Applications of Queues"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Direct applications")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Waiting lists"),(0,s.kt)("li",{parentName:"ul"},"Access to shared resources"),(0,s.kt)("li",{parentName:"ul"},"Event queues in GUIs and simulations\n",(0,s.kt)("strong",{parentName:"li"},"Indirect applications")),(0,s.kt)("li",{parentName:"ul"},"Auxiliary data structure for algorithms"),(0,s.kt)("li",{parentName:"ul"},"Components of other data structures")),(0,s.kt)("h3",{id:"queue-using-array-as-the-cdt"},"Queue using Array as the CDT"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Use an array of size ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"N")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"N")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N")))))," in a circular fashion"),(0,s.kt)("li",{parentName:"ul"},"Two variables keep track of the front and rear",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f")))))," index of the front element"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"r")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"r")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r")))))," index immediately past the rear element"))),(0,s.kt)("li",{parentName:"ul"},"Array location ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"r")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"r")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r")))))," is kept empty")),(0,s.kt)("h3",{id:"why-not-just-use-an-array-instead-of-a-queue-adt"},"Why not just use an Array instead of a Queue ADT?"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Conceptual Clarity"),(0,s.kt)("li",{parentName:"ul"},"Self-Documentation"),(0,s.kt)("li",{parentName:"ul"},"Safety of coding - prevents kludges"),(0,s.kt)("li",{parentName:"ul"},"Potential Compiler Optimisations"),(0,s.kt)("li",{parentName:"ul"},"Easier to change to a dynamically sizeable data structure")),(0,s.kt)("h3",{id:"narrow-vs-wide-adt"},"Narrow Vs. Wide ADT"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Narrow")," - small set of methods"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Stack ADT"),(0,s.kt)("li",{parentName:"ul"},"less flexible to use"),(0,s.kt)("li",{parentName:"ul"},"more flexible to implement, hence maybe more efficient")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Wide")," - Large set of methods"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Java Stack"),(0,s.kt)("li",{parentName:"ul"},"more flexible to use"),(0,s.kt)("li",{parentName:"ul"},"Possibly more difficult to implement efficiently")),(0,s.kt)("p",null,"Finding a good balance is a difficult design decision"),(0,s.kt)("h2",{id:"stacks-and-queues-by-using-linked-lists"},"Stacks and Queues by using linked lists"),(0,s.kt)("h3",{id:"usage-of-simplest-linked-list"},"Usage of Simplest linked list"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Could use them for any ADT"),(0,s.kt)("li",{parentName:"ul"},"Observe that insertion and removal at head are very efficient, O(1)"),(0,s.kt)("li",{parentName:"ul"},"If insert two elements then remove two elements, get LIFO\n.....")),(0,s.kt)("h2",{id:"priority-queues"},"Priority Queues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Stores a collection of entries"),(0,s.kt)("li",{parentName:"ul"},"Each entry is a pair (key, value)")),(0,s.kt)("h3",{id:"total-order-relations"},"Total Order Relations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Keys in a priority queue can be arbitrary objects on which an order is defined (between all different pairs)"),(0,s.kt)("li",{parentName:"ul"},"Two distinct entries in a priority queue can have the same key")),(0,s.kt)("h3",{id:"comparator"},"Comparator"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A comparator encapsulates the action of comparing two objects according to a given total order relation"),(0,s.kt)("li",{parentName:"ul"},"A generic priority queue uses an auxiliary comparator"),(0,s.kt)("li",{parentName:"ul"},"The comparator is external to the keys being compared"),(0,s.kt)("li",{parentName:"ul"},"When the priority queue needs to compare two keys, it uses its comparator")),(0,s.kt)("h2",{id:"heaps"},"Heaps"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A heap is a binary tree, storing key-value pairs at its nodes and satisfying the following properties:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Heap order")," - for every internal node v other than the root"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Complete Binary Tree")," - Let ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"h")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h")))))," be the height of the heap"))),(0,s.kt)("li",{parentName:"ul"},"The last node of a heap is the rightmost node of depth ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"h")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"))))))),(0,s.kt)("h3",{id:"height-of-a-heap"},"Height of a Heap"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Theorem"),": A heap storing ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," keys has a height ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"log"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061"),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(\\log n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mop"},"lo",(0,s.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\n",(0,s.kt)("strong",{parentName:"p"},"Proof"),": This uses just the complete binary tree property"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Let ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"h")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h")))))," be the height of a heap storing ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"n")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," keys"),(0,s.kt)("li",{parentName:"ul"},"The perfect binary tree of height ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"h"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h-1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," and ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"2"),(0,s.kt)("mi",{parentName:"msup"},"h")),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"1")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^h-1")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9324em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"2"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"h")))))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1")))))," nodes"),(0,s.kt)("li",{parentName:"ul"},"Our trees has at least more")),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(52471).Z,width:"737",height:"219"})),(0,s.kt)("h3",{id:"heaps-and-priority-queues"},"Heaps and Priority Queues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Can use a heap to implement a priority queue"),(0,s.kt)("li",{parentName:"ul"},"Store a (key, element) item at each node"),(0,s.kt)("li",{parentName:"ul"},"Keep track of the position of the last node\n",(0,s.kt)("img",{src:t(35036).Z,width:"737",height:"219"}))))}k.isMDXComponent=!0},52471:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/20230313124846-24e8bce0fc3cb55b2805e8f447baab68.png"},35036:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/20230313125000-aa658df3f41370764f34bb06145e67d1.png"}}]);