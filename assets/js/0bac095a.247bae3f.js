"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[1067],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||s;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<s;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1263:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const s={},i="Functions",l={unversionedId:"Year1/Programming Paradigms/Haskell/22.02.14 - Defining Functions",id:"Year1/Programming Paradigms/Haskell/22.02.14 - Defining Functions",title:"Functions",description:"Conditional Expressions",source:"@site/docs/Year1/1009 - Programming Paradigms/Haskell/22.02.14 - Defining Functions.md",sourceDirName:"Year1/1009 - Programming Paradigms/Haskell",slug:"/Year1/Programming Paradigms/Haskell/22.02.14 - Defining Functions",permalink:"/Year1/Programming Paradigms/Haskell/22.02.14 - Defining Functions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"22.02.09 - Types and Classes",permalink:"/Year1/Programming Paradigms/Haskell/22.02.09 - Types and Classes"},next:{title:"22.02.16 - List Comprehensions",permalink:"/Year1/Programming Paradigms/Haskell/22.02.16 - List Comprehensions"}},o={},u=[{value:"Conditional Expressions",id:"conditional-expressions",level:2},{value:"Guarded Equations",id:"guarded-equations",level:2},{value:"Pattern Matching",id:"pattern-matching",level:2},{value:"List Patterns",id:"list-patterns",level:2},{value:"Lambda Expressions",id:"lambda-expressions",level:2},{value:"Why they&#39;re useful",id:"why-theyre-useful",level:3},{value:"Operator Sections",id:"operator-sections",level:2}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"functions"},"Functions"),(0,a.kt)("h2",{id:"conditional-expressions"},"Conditional Expressions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"abs :: Int -> Int\nabs n = if n >= 0 then n else -n\n")),(0,a.kt)("p",null,"Can be nested"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"signum :: Int -> Int\nsignum n = if n < 0 then -1 else\n            if n == 0 then 0 else 1\n")),(0,a.kt)("p",null,"Conditional expressions must always have an else branch, which avoids any possible ....... # 1"),(0,a.kt)("h2",{id:"guarded-equations"},"Guarded Equations"),(0,a.kt)("p",null,"Alternative is guarded equations"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"abs n | n >= 0  = n\n            | otherwise = n\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"|")," means such that"),(0,a.kt)("h2",{id:"pattern-matching"},"Pattern Matching"),(0,a.kt)("p",null,"Clear definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"not :: Bool -> Bool\nnot False = True\nnot True = False\n")),(0,a.kt)("p",null,"Symbol ",(0,a.kt)("inlineCode",{parentName:"p"},"_")," is a while card that matches any argument values. "),(0,a.kt)("p",null,"Patterns are matched in order."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"_ && _ = False\nTrue && True = True\n")),(0,a.kt)("p",null,"Any 2 arguments would satisfy the first one, so True would never be outputted\nPatterns may not repeat variables."),(0,a.kt)("h2",{id:"list-patterns"},"List Patterns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Internally, every non-empty list is constructed by repeated use of an (:) called 'cons' that adds an element to the start of a list"),(0,a.kt)("li",{parentName:"ul"},"Functions on lists can be defined used ",(0,a.kt)("inlineCode",{parentName:"li"},"x:xs")," patterns"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"x:xs")," patterns only match non-empty lists"),(0,a.kt)("li",{parentName:"ul"},"Patterns must be parenthesised, because application has priority over (:)")),(0,a.kt)("h2",{id:"lambda-expressions"},"Lambda Expressions"),(0,a.kt)("p",null,"Constructed without naming the functions by using lambda expressions. Nameless function that takes a number x and returns the result x+x"),(0,a.kt)("p",null,"Typed as ",(0,a.kt)("inlineCode",{parentName:"p"},"\\.")," "),(0,a.kt)("h3",{id:"why-theyre-useful"},"Why they're useful"),(0,a.kt)("p",null,"Used to give a formal mean to functions defined using currying\nCan be used to avoid naming functions that are only referenced once,"),(0,a.kt)("h2",{id:"operator-sections"},"Operator Sections"),(0,a.kt)("p",null,"An operator written between its two arguments can be converted into a curried function written before its two arguments by using parentheses."))}c.isMDXComponent=!0}}]);