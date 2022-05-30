"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[5004],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6183:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),s=["components"],i={},o=void 0,c={unversionedId:"Year1/Programming Paradigms/Haskell/22.03.07 - Declaring Types and Classes",id:"Year1/Programming Paradigms/Haskell/22.03.07 - Declaring Types and Classes",title:"22.03.07 - Declaring Types and Classes",description:"Type Declarations",source:"@site/docs/Year1/1009 - Programming Paradigms/Haskell/22.03.07 - Declaring Types and Classes.md",sourceDirName:"Year1/1009 - Programming Paradigms/Haskell",slug:"/Year1/Programming Paradigms/Haskell/22.03.07 - Declaring Types and Classes",permalink:"/Year1/Programming Paradigms/Haskell/22.03.07 - Declaring Types and Classes",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"22.03.02 - Thinking Recursively",permalink:"/Year1/Programming Paradigms/Haskell/22.03.02 - Thinking Recursively"},next:{title:"22.03.09 - The Countdown Problem",permalink:"/Year1/Programming Paradigms/Haskell/22.03.09 - The Countdown Problem"}},u={},p=[{value:"Type Declarations",id:"type-declarations",level:2},{value:"Data Declarations",id:"data-declarations",level:2},{value:"Recursive Types",id:"recursive-types",level:2},{value:"Arithmetic Expressions",id:"arithmetic-expressions",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"type-declarations"},"Type Declarations"),(0,l.kt)("p",null,"New name for an existing type can be defined using a type declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"type String = [Char]\n")),(0,l.kt)("p",null,"Type declarations can be used to make other types easier to read"),(0,l.kt)("p",null,"Like function definitions, type declarations can also have parameters:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"type Pair a = (a,a)\n")),(0,l.kt)("p",null,"Type declarations can be nested, but never recursive"),(0,l.kt)("h2",{id:"data-declarations"},"Data Declarations"),(0,l.kt)("p",null,"New type can be defined by specifying its values using a data declaration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"data Bool = False | True\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The two values are called the constructors"),(0,l.kt)("li",{parentName:"ul"},"Type and constructor names must always begin with an upper-case letter"),(0,l.kt)("li",{parentName:"ul"},"Data declarations are similar to context free grammars. The former specifies the values of a type, the latter the sentences of a language")),(0,l.kt)("p",null,"Values of new types can be used in the same ways as those of built in types\nThe constructors in a data declaration can also have parameters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Shape has values of the form Circle r where r is a float, and Rect x y where x and y are floats"),(0,l.kt)("li",{parentName:"ul"},"Circle and Rect can be viewed as functions that construct values of type shape")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Circle :: Float -> Shape\nRect :: Float -> Float -> Shape\n")),(0,l.kt)("p",null,"Data declarations can also have parameters"),(0,l.kt)("h2",{id:"recursive-types"},"Recursive Types"),(0,l.kt)("p",null,"New types can be declared in terms of themselves:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"data Nat = Zero | Succ Nat\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A value of type Nat is either Zero or of the form Succ n where n :: Nat."),(0,l.kt)("li",{parentName:"ul"},"Nat is natural numbers, where Zero represents 0 and Succ represents the successor function 1+. (Bit like proof with TIM S(S(S(0))))"),(0,l.kt)("li",{parentName:"ul"},"Using recursion is easier to define functions that convert between values of type Nat and Int"),(0,l.kt)("li",{parentName:"ul"},"Using recursion the function add can be defined without the need for conversions")),(0,l.kt)("p",null,"Can add two natural numbers by converting them to integers, adding, then converting them back. However using recursion the function can be defined without the need for conversions"),(0,l.kt)("h2",{id:"arithmetic-expressions"},"Arithmetic Expressions"),(0,l.kt)("p",null,"Simple form of expressions built up from integers using addition and multiplication\nThree constructors have types:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Val :: Int -> Expr\nAdd :: Expr -> Expr -> Expr\nMul :: Expr -> Expr -> Expr\n")),(0,l.kt)("p",null,"Many functions on expressions can be defined by replacing the constructors by other functions using a suitable fold function. E.g:\n",(0,l.kt)("inlineCode",{parentName:"p"},"eval = folde id (+) (*)")))}m.isMDXComponent=!0}}]);