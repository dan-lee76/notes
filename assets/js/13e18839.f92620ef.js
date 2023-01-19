"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[9795],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),g=r,d=m["".concat(s,".").concat(g)]||m[g]||c[g]||o;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3437:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={},i=void 0,l={unversionedId:"Year1/Programming Paradigms/Haskell/22.02.02 - Functional Language",id:"Year1/Programming Paradigms/Haskell/22.02.02 - Functional Language",title:"22.02.02 - Functional Language",description:"Functional Language",source:"@site/docs/Year1/1009 - Programming Paradigms/Haskell/22.02.02 - Functional Language.md",sourceDirName:"Year1/1009 - Programming Paradigms/Haskell",slug:"/Year1/Programming Paradigms/Haskell/22.02.02 - Functional Language",permalink:"/Year1/Programming Paradigms/Haskell/22.02.02 - Functional Language",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"Haskell",permalink:"/Year1/Programming Paradigms/22.04.01 - Wrap up lecture"},next:{title:"The Standard Prelude",permalink:"/Year1/Programming Paradigms/Haskell/22.02.07 - First Steps"}},s={},p=[{value:"Functional Language",id:"functional-language",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functional-language"},"Functional Language"),(0,r.kt)("p",null,"Functional programming is style of programming maths"),(0,r.kt)("p",null,"Easier to program functional than using computation method with assignments (java/c/for loop)"),(0,r.kt)("p",null,"Instead of doing for loop can do. This builds a list 1 - 10\n",(0,r.kt)("inlineCode",{parentName:"p"},"sum [1..10]")),(0,r.kt)("p",null,"1987 - An international committee starts the development of Haskell, the standard lazy functional language"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"f(x:xs) = f ys ++ [x] ++ f zs")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"++")," - appends lists together\n",(0,r.kt)("inlineCode",{parentName:"p"},":")," - Takes single item(number) and moves it into the list. Can also be used to break apart the list. ",(0,r.kt)("inlineCode",{parentName:"p"},"x:xs")," always adds a new element ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," to the start of a list ",(0,r.kt)("inlineCode",{parentName:"p"},"xs")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"[a | a \u2190 xs, a \u2264 x]"),"\nBuilding a set of all values ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),", such that is is element of ",(0,r.kt)("inlineCode",{parentName:"p"},"xs")," and a is ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2264")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"x")))}c.isMDXComponent=!0}}]);