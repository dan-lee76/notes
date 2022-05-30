"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[5109],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=i,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||a;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7920:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return f}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={},s=void 0,u={unversionedId:"Year1/Programming Paradigms/Haskell/22.02.28 - Higher-Order Functions",id:"Year1/Programming Paradigms/Haskell/22.02.28 - Higher-Order Functions",title:"22.02.28 - Higher-Order Functions",description:"A function is Higher-Order if it takes a function as an argument or returns a function as a result",source:"@site/docs/Year1/1009 - Programming Paradigms/Haskell/22.02.28 - Higher-Order Functions.md",sourceDirName:"Year1/1009 - Programming Paradigms/Haskell",slug:"/Year1/Programming Paradigms/Haskell/22.02.28 - Higher-Order Functions",permalink:"/Year1/Programming Paradigms/Haskell/22.02.28 - Higher-Order Functions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"22.02.21 - Recursive Functions",permalink:"/Year1/Programming Paradigms/Haskell/22.02.21 - Recursive Functions"},next:{title:"22.03.02 - Thinking Recursively",permalink:"/Year1/Programming Paradigms/Haskell/22.03.02 - Thinking Recursively"}},c={},f=[{value:"Why are they useful",id:"why-are-they-useful",level:2},{value:"Foldr Function",id:"foldr-function",level:2},{value:"Why its Useful",id:"why-its-useful",level:3},{value:"Other Library Functions",id:"other-library-functions",level:2}],p={toc:f};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A function is Higher-Order if it takes a function as an argument or returns a function as a result"),(0,a.kt)("h2",{id:"why-are-they-useful"},"Why are they useful"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Common programming idioms")," can be encoded as functions within the language itself"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Domain Specific Languages")," can be defined as collections of higher-order functions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Algebraic Properties")," of higher-order functions can be used to reason about programs")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"twice")," - calls a function twice\n",(0,a.kt)("inlineCode",{parentName:"p"},"map")," - applies a function to every item in a list\n",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," - Selects every element from a list that satisfies a predicate"),(0,a.kt)("h2",{id:"foldr-function"},"Foldr Function"),(0,a.kt)("p",null,"Number of functions on lists can be defined using the following simple pattern of recursion (primitive recursion):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"f [] = v\nf (x:xs) = x ? f xs\n")),(0,a.kt)("p",null,"F maps the empty list to some value v, and any non-empty list to some function ? applied to its head and f of its tail. "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"foldr")," (fold right) - encapsulates this simple pattern of recursion with the function ? and the value v as arguments. Takes care of all the recursion. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"foldr :: (a -> b -> b) -> b -> [a] -> b\nfoldr f v [] = v\nfoldr f v (x:xs) = f x (foldr f v xs)\n")),(0,a.kt)("p",null,"f is the function, v is return statement, and [] is the list"),(0,a.kt)("p",null,"Think foldr ",(0,a.kt)("strong",{parentName:"p"},"non-recursively"),", as simultaneously replacing each (:) in a list by a given function, and [] by a given value"),(0,a.kt)("p",null,"Can be used to define many more functions than might first be expected"),(0,a.kt)("p",null,"Foldr  - Is building a function that does the matching and the recursion "),(0,a.kt)("h3",{id:"why-its-useful"},"Why its Useful"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Some recursive functions on list, such as sum, are simpler to define using foldr."),(0,a.kt)("li",{parentName:"ul"},"Properties of functions defined using foldr can be proved using algebraic properties of foldr, such as fusion and the banana split rule"),(0,a.kt)("li",{parentName:"ul"},"Advanced program optimisations can be simplest if foldr is used in place of explicit recursion")),(0,a.kt)("h2",{id:"other-library-functions"},"Other Library Functions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".")," returns the composition of two functions as a single function\nFunction composition simple way of cascading or one function after another\n",(0,a.kt)("inlineCode",{parentName:"p"},"all")," decides if every element of a list satisfies a given predicate\n",(0,a.kt)("inlineCode",{parentName:"p"},"any")," decides if at least one element of a list satisfies a predicate\n",(0,a.kt)("inlineCode",{parentName:"p"},"takeWhile")," selects elements from a list while a predicate holds of all the elements\n",(0,a.kt)("inlineCode",{parentName:"p"},"dropWhile")," removes elements while a predicate holds of all the elements"))}m.isMDXComponent=!0}}]);