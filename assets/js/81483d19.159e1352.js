"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[4381],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,d=p["".concat(s,".").concat(m)]||p[m]||h[m]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8512:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return h}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={},s=void 0,l={unversionedId:"Year1/AI/22.03.08 - Heuristic Search",id:"Year1/AI/22.03.08 - Heuristic Search",title:"22.03.08 - Heuristic Search",description:"Also learnt about:",source:"@site/docs/Year1/1008-AI/22.03.08 - Heuristic Search.md",sourceDirName:"Year1/1008-AI",slug:"/Year1/AI/22.03.08 - Heuristic Search",permalink:"/Year1/AI/22.03.08 - Heuristic Search",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"Breadth First Search",permalink:"/Year1/AI/22.03.01 - Search Strategies"},next:{title:"Game Playing",permalink:"/Year1/AI/22.03.15 - Game Playing"}},u={},h=[{value:"Blind Search vs. Heuristic Searches",id:"blind-search-vs-heuristic-searches",level:2},{value:"Heuristic Search",id:"heuristic-search",level:2},{value:"A* Algorithm",id:"a-algorithm",level:3},{value:"How to estimate h",id:"how-to-estimate-h",level:4}],p={toc:h};function m(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Also learnt about:\n",(0,i.kt)("a",{parentName:"p",href:"../1008%20-%20AI/22.03.01%20-%20Search%20Strategies.md#depth-first-search"},"Depth First Search"),"\n",(0,i.kt)("a",{parentName:"p",href:"../1008%20-%20AI/22.03.01%20-%20Search%20Strategies.md#uniform-cost-search-vs-bfs"},"Uniform Cost Search vs BFS")),(0,i.kt)("h2",{id:"blind-search-vs-heuristic-searches"},"Blind Search vs. Heuristic Searches"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Blind Search")," (DFS, BFS, UCS) Use same search just different queue - Blindly choose where to search in the search tree. But when problems get large, not practical any more"),(0,i.kt)("h2",{id:"heuristic-search"},"Heuristic Search"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Explore the next best node: more likely to lead to the goal state"),(0,i.kt)("li",{parentName:"ul"},"Using domain knowledge, so called informed search"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Heuristic function"),": Educated guesses, intuitive judgements on how close a node is to the goal.")),(0,i.kt)("h3",{id:"a-algorithm"},"A* Algorithm"),(0,i.kt)("p",null,"Combines the cost so far and the estimated heuristic cost to the goal\n$f(n) = g(n) + h(n)$ "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"g - path cost from the initial state to current state"),(0,i.kt)("li",{parentName:"ul"},"h - heuristic cost from current state to a goal state"),(0,i.kt)("li",{parentName:"ul"},"f - an evaluation of the state: estimated cost of the cheapest solution through $n$")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"2d0aa2c23742b2a39a5adb7236930d7b.png",src:r(5650).Z,width:"468",height:"223"})),(0,i.kt)("p",null,"h = 0 | A* becomes UCS, complete and optimal, but search undirected\nh too large thus dominates g | becomes greedy and lose optimality"),(0,i.kt)("h4",{id:"how-to-estimate-h"},"How to estimate h"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Optimal and complete: if the heuristic is admissible"),(0,i.kt)("li",{parentName:"ul"},"Admissible: the heuristic must never over estimate the cost to reach the goal. h(n) a valid lower bound on cost to the goal ")),(0,i.kt)("p",null,"$h_1$ in the wrong position\n$h_2$ sum of the distances from their goal position\nGood Heuristics\n",(0,i.kt)("img",{alt:"9c63757e6c266f5594333fc0ea50187f.png",src:r(5531).Z,width:"251",height:"253"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Admissible"),(0,i.kt)("li",{parentName:"ol"},"The closer the estimate of the heuristic to the actual cost, the better")),(0,i.kt)("h1",{id:"computerphile-video"},"Computerphile Video"),(0,i.kt)("p",null,"A* - Small extension to djstraks which adds a heuristic to say how much closer were getting. Tells you how far have we got to go"))}m.isMDXComponent=!0},5650:function(e,t,r){t.Z=r.p+"assets/images/2d0aa2c23742b2a39a5adb7236930d7b-21d204f77eaa225b96bf90d35a0c3637.png"},5531:function(e,t,r){t.Z=r.p+"assets/images/9c63757e6c266f5594333fc0ea50187f-61ce77538004b0c900d3b2332a8a78c8.png"}}]);