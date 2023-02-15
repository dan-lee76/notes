"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[2932],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),d=n,f=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<o;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},45714:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={},s=void 0,c={unversionedId:"Year1/AI/22.03.01 - Search Space and Search Tree",id:"Year1/AI/22.03.01 - Search Space and Search Tree",title:"22.03.01 - Search Space and Search Tree",description:"Problem Search Space",source:"@site/docs/Year1/1008-AI/22.03.01 - Search Space and Search Tree.md",sourceDirName:"Year1/1008-AI",slug:"/Year1/AI/22.03.01 - Search Space and Search Tree",permalink:"/Year1/AI/22.03.01 - Search Space and Search Tree",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"22.02.22 - Machine Learning_ Techniques",permalink:"/Year1/AI/22.02.22 - Machine Learning_ Techniques"},next:{title:"Breadth First Search",permalink:"/Year1/AI/22.03.01 - Search Strategies"}},l={},i=[{value:"Problem Search Space",id:"problem-search-space",level:2},{value:"Trees",id:"trees",level:2},{value:"Trees vs. Search Space",id:"trees-vs-search-space",level:2},{value:"Search Trees",id:"search-trees",level:2},{value:"Issues",id:"issues",level:3},{value:"General Search",id:"general-search",level:3}],p={toc:i};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"problem-search-space"},"Problem Search Space"),(0,n.kt)("p",null,"Define the problem as a search. Important in science and engineering. Any problem can be seen as a search for the 'right answer'"),(0,n.kt)("p",null,"Search Space - Set of all possible solutions to a problem\nSearch Algorithms - Input: a problem, Return: a solution to the problem"),(0,n.kt)("h2",{id:"trees"},"Trees"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2fab016035181aab40f1519272a7eb1d.png",src:r(2837).Z,width:"546",height:"330"}),"\nShows how the data can be represented"),(0,n.kt)("h2",{id:"trees-vs-search-space"},"Trees vs. Search Space"),(0,n.kt)("p",null,"States - nodes | Possible states of the problem\nSearch Space - all nodes in the tree | Set of all states reachable from the initial state\nOperator - branches | Set of actions that move one state to another"),(0,n.kt)("p",null,"Neighbourhood - All possible states reachable from a given state\nGoal Test - Test to a state tell if the search reached a state that solves the problem\nPath cost - How much it costs to take a particular path"),(0,n.kt)("p",null,"By using states and operators we can define the problem into the nodes and branches in a search tree. If you check all of the possible states, the possible states should be included in the tree."),(0,n.kt)("p",null,"Improve Search Techniques:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Define the problem into smaller search tree"),(0,n.kt)("li",{parentName:"ol"},"Improve search efficiency through the tree")),(0,n.kt)("h2",{id:"search-trees"},"Search Trees"),(0,n.kt)("h3",{id:"issues"},"Issues"),(0,n.kt)("p",null,"Tree Size:\nBranching Factor: Average no. of branches of all nodes in a tree."),(0,n.kt)("p",null,"Claude Shannon (1949): how computers could play chess"),(0,n.kt)("p",null,"Search trees grow very quickly (exponentially)"),(0,n.kt)("h3",{id:"general-search"},"General Search"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Function General-Search(p, QUEUING-FN) returns a solution or failure\n    nodes = Make-Queue(Make-Node(Initial-State[p]))\n    Loop do\n        If nodes is empty then return failure\n        node = Remove-Front(nodes)\n        If Goal-Test[p] on State(node) succeeds then returm node\n        nodes = QUEUING-FN(nodes, Expand(node, Operators[p]))\n    End\nEnd Function\n")),(0,n.kt)("p",null,"Data structures: ",(0,n.kt)("inlineCode",{parentName:"p"},"nodes:Queue"),"; ",(0,n.kt)("inlineCode",{parentName:"p"},"nodes:state"),";"))}h.isMDXComponent=!0},2837:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2fab016035181aab40f1519272a7eb1d-4d3b3f32e7e9167f15c452367fe01221.png"}}]);