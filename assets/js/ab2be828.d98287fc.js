"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[5591],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,g=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},369:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={},o=void 0,l={unversionedId:"Year1/Programming Paradigms/Haskell/22.03.02 - Thinking Recursively",id:"Year1/Programming Paradigms/Haskell/22.03.02 - Thinking Recursively",title:"22.03.02 - Thinking Recursively",description:"What are recursive functions?",source:"@site/docs/Year1/1009 - Programming Paradigms/Haskell/22.03.02 - Thinking Recursively.md",sourceDirName:"Year1/1009 - Programming Paradigms/Haskell",slug:"/Year1/Programming Paradigms/Haskell/22.03.02 - Thinking Recursively",permalink:"/Year1/Programming Paradigms/Haskell/22.03.02 - Thinking Recursively",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"22.02.28 - Higher-Order Functions",permalink:"/Year1/Programming Paradigms/Haskell/22.02.28 - Higher-Order Functions"},next:{title:"22.03.07 - Declaring Types and Classes",permalink:"/Year1/Programming Paradigms/Haskell/22.03.07 - Declaring Types and Classes"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"What are recursive functions?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"A recursive function is a function defined in terms of itself, self referential"))),(0,a.kt)("p",null,"Why are they useful?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Many, if not most functions have a simple recursive definition.\n",(0,a.kt)("em",{parentName:"p"},"fundamentally recursion is the only way of doing any kind of loop"))),(0,a.kt)("p",null,"Why are they difficult at first?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Different way of thinking. Alternative way to looping."))),(0,a.kt)("h1",{id:"way-to-write-a-recursive-function"},"Way to write a recursive function"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Name the function"),(0,a.kt)("li",{parentName:"ol"},"Write down its type"),(0,a.kt)("li",{parentName:"ol"},"Enumerate the cases (skeleton)"),(0,a.kt)("li",{parentName:"ol"},"Define the simple cases (Base Case (Non recursive Case))"),(0,a.kt)("li",{parentName:"ol"},"List the 'ingredients'"),(0,a.kt)("li",{parentName:"ol"},"Define the other case"),(0,a.kt)("li",{parentName:"ol"},"Think about the result")))}p.isMDXComponent=!0}}]);