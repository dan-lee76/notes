"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[4388],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||s;return t?n.createElement(g,i(i({ref:a},m),{},{components:t})):n.createElement(g,i({ref:a},m))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=u;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5754:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const s={},i=void 0,o={unversionedId:"Year1/Programming Paradigms/Haskell/22.02.16 - List Comprehensions",id:"Year1/Programming Paradigms/Haskell/22.02.16 - List Comprehensions",title:"22.02.16 - List Comprehensions",description:"Set Comprehensions",source:"@site/docs/Year1/1009 - Programming Paradigms/Haskell/22.02.16 - List Comprehensions.md",sourceDirName:"Year1/1009 - Programming Paradigms/Haskell",slug:"/Year1/Programming Paradigms/Haskell/22.02.16 - List Comprehensions",permalink:"/Year1/Programming Paradigms/Haskell/22.02.16 - List Comprehensions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"Functions",permalink:"/Year1/Programming Paradigms/Haskell/22.02.14 - Defining Functions"},next:{title:"22.02.21 - Recursive Functions",permalink:"/Year1/Programming Paradigms/Haskell/22.02.21 - Recursive Functions"}},l={},p=[{value:"Set Comprehensions",id:"set-comprehensions",level:2},{value:"Dependant generators",id:"dependant-generators",level:2},{value:"Guards",id:"guards",level:2},{value:"The zip function",id:"the-zip-function",level:2},{value:"String Comprehensions-",id:"string-comprehensions-",level:2}],m={toc:p};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"set-comprehensions"},"Set Comprehensions"),(0,r.kt)("p",null," Comprehension notation can be used to construct new sets from old sets\n",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"x"),(0,r.kt)("mn",{parentName:"msup"},"2")),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2223"),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mo",{parentName:"mrow"},"\u2208"),(0,r.kt)("mn",{parentName:"mrow"},"1..5")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"{x^2 | x \\in {1..5}}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2223"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"1..5")))))))),(0,r.kt)("p",null," In haskell can be done with list comprehension"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"[x^2 | x <- [1..5]]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The expression ",(0,r.kt)("inlineCode",{parentName:"li"},"x <- [1..5]")," is a generator, states how to generate values for x. Can be used multiple times separated by commas."),(0,r.kt)("li",{parentName:"ul"},"Changing the order of the generators changes the order of the elements in the final list."),(0,r.kt)("li",{parentName:"ul"},"Multiple generators are like nested loops, with later generators being more deeply nested loops")),(0,r.kt)("h2",{id:"dependant-generators"},"Dependant generators"),(0,r.kt)("p",null,"Later generators can depend on the variables that are introduced by earlier generators\nUsing a dependent generator we can define the library function that concatenates a lists of lists"),(0,r.kt)("h2",{id:"guards"},"Guards"),(0,r.kt)("p",null,"Use guards to restrict the values produced by earlier generators\n",(0,r.kt)("inlineCode",{parentName:"p"},"[x | x <- [1..10], even x]"),"\nUsing a guard we can define a function that maps a positive integer to its list of factors"),(0,r.kt)("h2",{id:"the-zip-function"},"The zip function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"zip :: [a] -> [b] -> [(a,b)]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Maps two lists to a lists of pairs of their corresponding elements."),(0,r.kt)("li",{parentName:"ul"},"Define a function that returns the list of app pairs of adjacent elements from a list "),(0,r.kt)("li",{parentName:"ul"},"Using pairs can define a function that decides if the elements in a list are sorted"),(0,r.kt)("li",{parentName:"ul"},"Using zip can define a function that returns the list of all positions of a value in a list")),(0,r.kt)("h2",{id:"string-comprehensions-"},"String Comprehensions-"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A string is a sequence of characters enclosed in double quotes. Internally, strings are represented as a lists of characters. "),(0,r.kt)("li",{parentName:"ul"},"Any polymorphic function that operates on lists can also be applied to strings"),(0,r.kt)("li",{parentName:"ul"},"List comprehensions can also work them")))}c.isMDXComponent=!0}}]);