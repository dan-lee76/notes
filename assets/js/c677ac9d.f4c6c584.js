"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[5088],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2386:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],o={},s="The Standard Prelude",u={unversionedId:"Year1/Programming Paradigms/Haskell/22.02.07 - First Steps",id:"Year1/Programming Paradigms/Haskell/22.02.07 - First Steps",title:"The Standard Prelude",description:"Starting the interpreter is done by ghci",source:"@site/docs/Year1/1009 - Programming Paradigms/Haskell/22.02.07 - First Steps.md",sourceDirName:"Year1/1009 - Programming Paradigms/Haskell",slug:"/Year1/Programming Paradigms/Haskell/22.02.07 - First Steps",permalink:"/Year1/Programming Paradigms/Haskell/22.02.07 - First Steps",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"22.02.02 - Functional Language",permalink:"/Year1/Programming Paradigms/Haskell/22.02.02 - Functional Language"},next:{title:"22.02.09 - Types and Classes",permalink:"/Year1/Programming Paradigms/Haskell/22.02.09 - Types and Classes"}},p={},c=[{value:"Naming requirements",id:"naming-requirements",level:2},{value:"The layout Rule",id:"the-layout-rule",level:2}],m={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"the-standard-prelude"},"The Standard Prelude"),(0,l.kt)("p",null,"Starting the interpreter is done by ",(0,l.kt)("inlineCode",{parentName:"p"},"ghci"),"\nHaskell comes with a large number of standard library functions. Also provides many useful functions on lists"),(0,l.kt)("p",null,"Select first number of list:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"head [1,2,3,4]\n1\n")),(0,l.kt)("p",null,"Remove the first element:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"tail [1,2,3,4]\n[2,3,4,5]\n")),(0,l.kt)("p",null,"Select the nth element of a list: ",(0,l.kt)("inlineCode",{parentName:"p"},"!")," is known as a bang"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"[1,2,3,4,5] !! 2\n3\n")),(0,l.kt)("p",null,"Select the first n elements of a list:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"take 3 [1,2,3,4,5]\n[1,2,3]\n")),(0,l.kt)("p",null,"Remove the first n elements:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"drop 3 [1,2,3,4,5]\n[4,5]\n")),(0,l.kt)("p",null,"Calculate the length of a list:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"length [1,2,3,4,5]\n5\n")),(0,l.kt)("p",null,"Calculate the sum of a list of numbers. Sum is 0 if list is empty. 0 is identity for addition:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"sum [1,2,3,4,5]\n15\n")),(0,l.kt)("p",null,"Calculate the product of a list. Would return 1 if the list is empty. 1 is identity for multiplication:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"product [1,2,3,4,5]\n120\n")),(0,l.kt)("p",null,"Append two lists:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"[1,2,3] ++ [4,5]\n[1,2,3,4,5]\n")),(0,l.kt)("p",null,"Reverse a list:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"reverse [1,2,3,4,5]\n[5,4,3,2,1]\n")),(0,l.kt)("h1",{id:"function-application"},"Function Application"),(0,l.kt)("p",null,"In maths function application is denoted using parentheses and multiplication of denoted using juxtaposition or space. In maths it would look like:\n",(0,l.kt)("inlineCode",{parentName:"p"},"f(a,b) + c d"),"\nIn haskell is denoted using space and multiplication denoted using ",(0,l.kt)("em",{parentName:"p"},":\n`f a b + c"),"d",(0,l.kt)("inlineCode",{parentName:"p"},"Function application is assume to have higher priority than all other operators"),"f a + b",(0,l.kt)("inlineCode",{parentName:"p"},"means (haskell does this)"),"(f a) + b",(0,l.kt)("inlineCode",{parentName:"p"},"rather than"),"f(a+b)`"),(0,l.kt)("h1",{id:"haskell-scripts"},"Haskell scripts"),(0,l.kt)("p",null,"Can define your own functions\nNew functions are defined within a script, a text file comprising a sequence of definitions. Normally have ",(0,l.kt)("inlineCode",{parentName:"p"},".hs")," "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"``")),(0,l.kt)("p",null,"Is a infix operator. x ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," y is just syntactic sugar for ",(0,l.kt)("inlineCode",{parentName:"p"},"f x y"),"\nHave to reload ",(0,l.kt)("inlineCode",{parentName:"p"},":reload")," once files been saved to ghci no there's a change"),(0,l.kt)("h2",{id:"naming-requirements"},"Naming requirements"),(0,l.kt)("p",null,"Function and argument names must begin with a lower-case letter\nBy convention, list arguments usually have an ",(0,l.kt)("em",{parentName:"p"},"s")," suffix on their name"),(0,l.kt)("h2",{id:"the-layout-rule"},"The layout Rule"),(0,l.kt)("p",null,"In a sequence of definitions, each definition must begin in precisely the same column\nMeans you don't have to do explicitly grouping, using {}, can instead use indentation/columns for definitions"))}d.isMDXComponent=!0}}]);