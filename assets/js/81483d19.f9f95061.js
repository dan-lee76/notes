"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[4381],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>N});var s=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,s,n=function(e,a){if(null==e)return{};var t,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=s.createContext({}),l=function(e){var a=s.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},o=function(e){var a=l(e.components);return s.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},h=s.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),h=l(t),N=n,k=h["".concat(i,".").concat(N)]||h[N]||c[N]||r;return t?s.createElement(k,m(m({ref:a},o),{},{components:t})):s.createElement(k,m({ref:a},o))}));function N(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,m=new Array(r);m[0]=h;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,m[1]=p;for(var l=2;l<r;l++)m[l]=t[l];return s.createElement.apply(null,m)}return s.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8512:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>m,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var s=t(7462),n=(t(7294),t(3905));const r={},m=void 0,p={unversionedId:"Year1/AI/22.03.08 - Heuristic Search",id:"Year1/AI/22.03.08 - Heuristic Search",title:"22.03.08 - Heuristic Search",description:"Also learnt about:",source:"@site/docs/Year1/1008-AI/22.03.08 - Heuristic Search.md",sourceDirName:"Year1/1008-AI",slug:"/Year1/AI/22.03.08 - Heuristic Search",permalink:"/Year1/AI/22.03.08 - Heuristic Search",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"Breadth First Search",permalink:"/Year1/AI/22.03.01 - Search Strategies"},next:{title:"Game Playing",permalink:"/Year1/AI/22.03.15 - Game Playing"}},i={},l=[{value:"Blind Search vs. Heuristic Searches",id:"blind-search-vs-heuristic-searches",level:2},{value:"Heuristic Search",id:"heuristic-search",level:2},{value:"A* Algorithm",id:"a-algorithm",level:3},{value:"How to estimate h",id:"how-to-estimate-h",level:4}],o={toc:l};function c(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},o,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Also learnt about:\n",(0,n.kt)("a",{parentName:"p",href:"../1008%20-%20AI/22.03.01%20-%20Search%20Strategies.md#depth-first-search"},"Depth First Search"),"\n",(0,n.kt)("a",{parentName:"p",href:"../1008%20-%20AI/22.03.01%20-%20Search%20Strategies.md#uniform-cost-search-vs-bfs"},"Uniform Cost Search vs BFS")),(0,n.kt)("h2",{id:"blind-search-vs-heuristic-searches"},"Blind Search vs. Heuristic Searches"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Blind Search")," (DFS, BFS, UCS) Use same search just different queue - Blindly choose where to search in the search tree. But when problems get large, not practical any more"),(0,n.kt)("h2",{id:"heuristic-search"},"Heuristic Search"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Explore the next best node: more likely to lead to the goal state"),(0,n.kt)("li",{parentName:"ul"},"Using domain knowledge, so called informed search"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Heuristic function"),": Educated guesses, intuitive judgements on how close a node is to the goal.")),(0,n.kt)("h3",{id:"a-algorithm"},"A* Algorithm"),(0,n.kt)("p",null,"Combines the cost so far and the estimated heuristic cost to the goal\n",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"f"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mi",{parentName:"mrow"},"g"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,n.kt)("mo",{parentName:"mrow"},"+"),(0,n.kt)("mi",{parentName:"mrow"},"h"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,n.kt)("mi",{parentName:"mrow"},"n"),(0,n.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(n) = g(n) + h(n)")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,n.kt)("span",{parentName:"span",className:"mopen"},"("),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,n.kt)("span",{parentName:"span",className:"mclose"},")")))))," "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"g - path cost from the initial state to current state"),(0,n.kt)("li",{parentName:"ul"},"h - heuristic cost from current state to a goal state"),(0,n.kt)("li",{parentName:"ul"},"f - an evaluation of the state: estimated cost of the cheapest solution through ",(0,n.kt)("span",{parentName:"li",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"n")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"))))))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"2d0aa2c23742b2a39a5adb7236930d7b.png",src:t(5650).Z,width:"468",height:"223"})),(0,n.kt)("p",null,"h = 0 | A* becomes UCS, complete and optimal, but search undirected\nh too large thus dominates g | becomes greedy and lose optimality"),(0,n.kt)("h4",{id:"how-to-estimate-h"},"How to estimate h"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Optimal and complete: if the heuristic is admissible"),(0,n.kt)("li",{parentName:"ul"},"Admissible: the heuristic must never over estimate the cost to reach the goal. h(n) a valid lower bound on cost to the goal ")),(0,n.kt)("p",null,(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"h"),(0,n.kt)("mn",{parentName:"msub"},"1"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h_1")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"1")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))))))))," in the wrong position\n",(0,n.kt)("span",{parentName:"p",className:"math math-inline"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("msub",{parentName:"mrow"},(0,n.kt)("mi",{parentName:"msub"},"h"),(0,n.kt)("mn",{parentName:"msub"},"2"))),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"h_2")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8444em",verticalAlign:"-0.15em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,n.kt)("span",{parentName:"span",className:"msupsub"},(0,n.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,n.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,n.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,n.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,n.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,n.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,n.kt)("span",{parentName:"span",className:"vlist-r"},(0,n.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,n.kt)("span",{parentName:"span"}))))))))))," sum of the distances from their goal position\nGood Heuristics\n",(0,n.kt)("img",{alt:"9c63757e6c266f5594333fc0ea50187f.png",src:t(5531).Z,width:"251",height:"253"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Admissible"),(0,n.kt)("li",{parentName:"ol"},"The closer the estimate of the heuristic to the actual cost, the better")),(0,n.kt)("h1",{id:"computerphile-video"},"Computerphile Video"),(0,n.kt)("p",null,"A* - Small extension to djstraks which adds a heuristic to say how much closer were getting. Tells you how far have we got to go"))}c.isMDXComponent=!0},5650:(e,a,t)=>{t.d(a,{Z:()=>s});const s=t.p+"assets/images/2d0aa2c23742b2a39a5adb7236930d7b-21d204f77eaa225b96bf90d35a0c3637.png"},5531:(e,a,t)=>{t.d(a,{Z:()=>s});const s=t.p+"assets/images/9c63757e6c266f5594333fc0ea50187f-61ce77538004b0c900d3b2332a8a78c8.png"}}]);