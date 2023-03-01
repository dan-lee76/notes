"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[3443],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,d=c["".concat(o,".").concat(k)]||c[k]||u[k]||s;return a?n.createElement(d,l(l({ref:t},m),{},{components:a})):n.createElement(d,l({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},64282:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={},l=void 0,i={unversionedId:"Year1/Programming Paradigms/Haskell/22.02.09 - Types and Classes",id:"Year1/Programming Paradigms/Haskell/22.02.09 - Types and Classes",title:"22.02.09 - Types and Classes",description:"A type is a name for a collection of related.",source:"@site/docs/Year1/1009 - Programming Paradigms/Haskell/22.02.09 - Types and Classes.md",sourceDirName:"Year1/1009 - Programming Paradigms/Haskell",slug:"/Year1/Programming Paradigms/Haskell/22.02.09 - Types and Classes",permalink:"/Year1/Programming Paradigms/Haskell/22.02.09 - Types and Classes",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"The Standard Prelude",permalink:"/Year1/Programming Paradigms/Haskell/22.02.07 - First Steps"},next:{title:"Functions",permalink:"/Year1/Programming Paradigms/Haskell/22.02.14 - Defining Functions"}},o={},p=[{value:"Types in Haskell",id:"types-in-haskell",level:2},{value:"Basic Types",id:"basic-types",level:2},{value:"List Types",id:"list-types",level:2},{value:"Tuple Types",id:"tuple-types",level:2},{value:"Function Types",id:"function-types",level:2},{value:"Curried Functions",id:"curried-functions",level:2},{value:"Currying Contentions",id:"currying-contentions",level:2},{value:"Polymorphic Functions",id:"polymorphic-functions",level:2},{value:"Overloaded Functions",id:"overloaded-functions",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A type is a name for a collection of related.\nBasic type ",(0,r.kt)("em",{parentName:"p"},"Bool")," contains two logic values ",(0,r.kt)("em",{parentName:"p"},"True")," and ",(0,r.kt)("em",{parentName:"p"},"False")),(0,r.kt)("p",null,"Type Error - Applying a function to one or more arguments of the wrong type"),(0,r.kt)("h2",{id:"types-in-haskell"},"Types in Haskell"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Expression ",(0,r.kt)("em",{parentName:"li"},"e")," would produce a value of type ",(0,r.kt)("em",{parentName:"li"},"t"),", then ",(0,r.kt)("em",{parentName:"li"},"e")," has type ",(0,r.kt)("em",{parentName:"li"},"t"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"e :: t")))),(0,r.kt)("li",{parentName:"ul"},"Type inference - Calculates the type of any expression"),(0,r.kt)("li",{parentName:"ul"},"Errors found at compile time to makes programs safer and faster"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},":type")," calculates the type of an expression without evaluating it")),(0,r.kt)("h2",{id:"basic-types"},"Basic Types"),(0,r.kt)("p",null,"Bool - Logical Values\nChar - Single Characters\nString - Strings of characters\nInt - Integer Numbers\nFloat - Floating-point numbers"),(0,r.kt)("h2",{id:"list-types"},"List Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A list is a sequence of values of the same type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"[t]")," is the type of lists with elements of type ",(0,r.kt)("inlineCode",{parentName:"li"},"t")),(0,r.kt)("li",{parentName:"ul"},"The type of a list says nothing about its length"),(0,r.kt)("li",{parentName:"ul"},"Type of the elements is unrestricted, can have lists of listst"),(0,r.kt)("li",{parentName:"ul"},"Heterogeneous - Can only contain elements of the same type")),(0,r.kt)("h2",{id:"tuple-types"},"Tuple Types"),(0,r.kt)("p",null,"A sequence of values of different types"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"(False, 'a', True) :: (Bool,Char,Bool)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The type of a tuple encodes its size"),(0,r.kt)("li",{parentName:"ul"},"The type of the components is unrestricted")),(0,r.kt)("h2",{id:"function-types"},"Function Types"),(0,r.kt)("p",null,"Function is a mapping from values of one type to values of another type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"even :: Int -> Bool\n")),(0,r.kt)("p",null,"General case t1 ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow"},"\u2192")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\to")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u2192")))))," t2 is the type of functions that map values of type t1 to values to type t2\nThe argument and result types are unrestricted"),(0,r.kt)("h2",{id:"curried-functions"},"Curried Functions"),(0,r.kt)("p",null,"Functions with multiple arguments are also possible by returning functions as results"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add and add",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"`")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2018"))))),"  produce the same final result, but add",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2018")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"`")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u2018"))))),"  takes them one at a time "),(0,r.kt)("li",{parentName:"ul"},"Functions that take their arguments one at a time are called curried function"),(0,r.kt)("li",{parentName:"ul"},"Functions with more than two arguments can be curried by returning nested Functions")),(0,r.kt)("p",null,"Curried functions are more flexible than functions on tuples, because useful functions can often be made by partially applying a curried function"),(0,r.kt)("h2",{id:"currying-contentions"},"Currying Contentions"),(0,r.kt)("p",null,"To avoid excess parentheses when using curried functions, 2 simple conventions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"-> associates to the right"),(0,r.kt)("li",{parentName:"ul"},"As a consequence, it is then natural for function application to associate to the left"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mult x y z")," means (mult x) y) z")),(0,r.kt)("h2",{id:"polymorphic-functions"},"Polymorphic Functions"),(0,r.kt)("p",null,'Function is called polymorphic ("of many forms") if its type contains one or more type variables'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type variables can be instantiated to different types in different circumstances"),(0,r.kt)("li",{parentName:"ul"},"Type variables must begin with a lower-case letter, usually named a,b,c, etc\nPolymorphic: The type has a type variable such as 'a'\nInstantiate: Process of making an instance of an object using the class definition")),(0,r.kt)("h2",{id:"overloaded-functions"},"Overloaded Functions"),(0,r.kt)("p",null,"Polymorphic function is called overloaded if its type contains one or more class constraints"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can be instantiated to any types that satisfy the constraints"),(0,r.kt)("li",{parentName:"ul"},"3 types classes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Num")," - Numeric types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Eq")," - Equality types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Ord")," - Ordered types")))))}u.isMDXComponent=!0}}]);