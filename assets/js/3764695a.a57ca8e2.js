"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[1385],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3045:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Introduction",u={unversionedId:"Year1/Programming Paradigms/Haskell/22.03.23 - Lazy Evaluation",id:"Year1/Programming Paradigms/Haskell/22.03.23 - Lazy Evaluation",title:"Introduction",description:"- Avoids doing unnecessary evaluation",source:"@site/docs/Year1/1009 - Programming Paradigms/Haskell/22.03.23 - Lazy Evaluation.md",sourceDirName:"Year1/1009 - Programming Paradigms/Haskell",slug:"/Year1/Programming Paradigms/Haskell/22.03.23 - Lazy Evaluation",permalink:"/notes/docs/Year1/Programming Paradigms/Haskell/22.03.23 - Lazy Evaluation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"22.03.21 - Exercises on interaction",permalink:"/notes/docs/Year1/Programming Paradigms/Haskell/22.03.21 - Exercises on interaction"},next:{title:"Functional language",permalink:"/notes/docs/Year1/Programming Paradigms/Haskell/Revision"}},m={},c=[{value:"Termination",id:"termination",level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Avoids doing unnecessary evaluation"),(0,i.kt)("li",{parentName:"ul"},"Ensures termination whenever possible"),(0,i.kt)("li",{parentName:"ul"},"Supports programming with infinite lists"),(0,i.kt)("li",{parentName:"ul"},"Allows programs to be more modular")),(0,i.kt)("h1",{id:"evaluation-strategies"},"Evaluation Strategies"),(0,i.kt)("p",null,"Two main strategies for deciding which reducible expression (redex) to consider next:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Choose a redex that is innermost, does not contain another redex"),(0,i.kt)("li",{parentName:"ul"},"Chose a redex that is outermost, not contained in another redux")),(0,i.kt)("h2",{id:"termination"},"Termination"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"infinity = 1 + infinity"),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"fst (0, infinity")," -> results in ",(0,i.kt)("inlineCode",{parentName:"p"},"0")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Outermost evaluation may give a result when innermost evaluation fails to terminate"),(0,i.kt)("li",{parentName:"ul"},"If any evaluation sequence terminates, then so does outermost, with the same result"),(0,i.kt)("li",{parentName:"ul"},"Outermost evaluation may require more steps that innermost. However this can easily be avoided by using pointers to indicate sharing of arguments")),(0,i.kt)("p",null,"Lazy evaluation = outermost evaluation + sharing of arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lazy evaluation ensures termination whenever possible, but never requires more steps than innermost evaluation and sometimes fewer")),(0,i.kt)("h1",{id:"infinite-lists"},"Infinite lists"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In general, lazy evaluation expressions are only evaluated as much as required by the context in which they are used"),(0,i.kt)("li",{parentName:"ul"},"Hence, ones is really a potentially infinite list")),(0,i.kt)("h1",{id:"modular-programming"},"Modular Programming"),(0,i.kt)("p",null,"Lazy evaluation allows us to make programs more modular by separating control from data\nWithout using lazy evaluation the control and data parts would need to be combined into one"),(0,i.kt)("h1",{id:"generating-primes"},"Generating Primes"),(0,i.kt)("p",null,"To generate the infinite sequence of primes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Write down the infinite sequence 2,3,4...,"),(0,i.kt)("li",{parentName:"ol"},"Mark the first number p as being prime"),(0,i.kt)("li",{parentName:"ol"},"Delete all multiple of p from the sequence"),(0,i.kt)("li",{parentName:"ol"},"Return to the second step")))}d.isMDXComponent=!0}}]);