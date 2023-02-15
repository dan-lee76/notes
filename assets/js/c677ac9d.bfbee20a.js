"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[5088],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},i="The Standard Prelude",s={unversionedId:"Year1/Programming Paradigms/Haskell/22.02.07 - First Steps",id:"Year1/Programming Paradigms/Haskell/22.02.07 - First Steps",title:"The Standard Prelude",description:"Starting the interpreter is done by ghci",source:"@site/docs/Year1/1009 - Programming Paradigms/Haskell/22.02.07 - First Steps.md",sourceDirName:"Year1/1009 - Programming Paradigms/Haskell",slug:"/Year1/Programming Paradigms/Haskell/22.02.07 - First Steps",permalink:"/Year1/Programming Paradigms/Haskell/22.02.07 - First Steps",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"22.02.02 - Functional Language",permalink:"/Year1/Programming Paradigms/Haskell/22.02.02 - Functional Language"},next:{title:"22.02.09 - Types and Classes",permalink:"/Year1/Programming Paradigms/Haskell/22.02.09 - Types and Classes"}},o={},p=[{value:"Naming requirements",id:"naming-requirements",level:2},{value:"The layout Rule",id:"the-layout-rule",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-standard-prelude"},"The Standard Prelude"),(0,r.kt)("p",null,"Starting the interpreter is done by ",(0,r.kt)("inlineCode",{parentName:"p"},"ghci"),"\nHaskell comes with a large number of standard library functions. Also provides many useful functions on lists"),(0,r.kt)("p",null,"Select first number of list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"head [1,2,3,4]\n1\n")),(0,r.kt)("p",null,"Remove the first element:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"tail [1,2,3,4]\n[2,3,4,5]\n")),(0,r.kt)("p",null,"Select the nth element of a list: ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," is known as a bang"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"[1,2,3,4,5] !! 2\n3\n")),(0,r.kt)("p",null,"Select the first n elements of a list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"take 3 [1,2,3,4,5]\n[1,2,3]\n")),(0,r.kt)("p",null,"Remove the first n elements:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"drop 3 [1,2,3,4,5]\n[4,5]\n")),(0,r.kt)("p",null,"Calculate the length of a list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"length [1,2,3,4,5]\n5\n")),(0,r.kt)("p",null,"Calculate the sum of a list of numbers. Sum is 0 if list is empty. 0 is identity for addition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"sum [1,2,3,4,5]\n15\n")),(0,r.kt)("p",null,"Calculate the product of a list. Would return 1 if the list is empty. 1 is identity for multiplication:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"product [1,2,3,4,5]\n120\n")),(0,r.kt)("p",null,"Append two lists:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"[1,2,3] ++ [4,5]\n[1,2,3,4,5]\n")),(0,r.kt)("p",null,"Reverse a list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"reverse [1,2,3,4,5]\n[5,4,3,2,1]\n")),(0,r.kt)("h1",{id:"function-application"},"Function Application"),(0,r.kt)("p",null,"In maths function application is denoted using parentheses and multiplication of denoted using juxtaposition or space. In maths it would look like:\n",(0,r.kt)("inlineCode",{parentName:"p"},"f(a,b) + c d"),"\nIn haskell is denoted using space and multiplication denoted using ",(0,r.kt)("em",{parentName:"p"},":\n`f a b + c"),"d",(0,r.kt)("inlineCode",{parentName:"p"},"Function application is assume to have higher priority than all other operators"),"f a + b",(0,r.kt)("inlineCode",{parentName:"p"},"means (haskell does this)"),"(f a) + b",(0,r.kt)("inlineCode",{parentName:"p"},"rather than"),"f(a+b)`"),(0,r.kt)("h1",{id:"haskell-scripts"},"Haskell scripts"),(0,r.kt)("p",null,"Can define your own functions\nNew functions are defined within a script, a text file comprising a sequence of definitions. Normally have ",(0,r.kt)("inlineCode",{parentName:"p"},".hs")," "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"``")),(0,r.kt)("p",null,"Is a infix operator. x ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," y is just syntactic sugar for ",(0,r.kt)("inlineCode",{parentName:"p"},"f x y"),"\nHave to reload ",(0,r.kt)("inlineCode",{parentName:"p"},":reload")," once files been saved to ghci no there's a change"),(0,r.kt)("h2",{id:"naming-requirements"},"Naming requirements"),(0,r.kt)("p",null,"Function and argument names must begin with a lower-case letter\nBy convention, list arguments usually have an ",(0,r.kt)("em",{parentName:"p"},"s")," suffix on their name"),(0,r.kt)("h2",{id:"the-layout-rule"},"The layout Rule"),(0,r.kt)("p",null,"In a sequence of definitions, each definition must begin in precisely the same column\nMeans you don't have to do explicitly grouping, using {}, can instead use indentation/columns for definitions"))}c.isMDXComponent=!0}}]);