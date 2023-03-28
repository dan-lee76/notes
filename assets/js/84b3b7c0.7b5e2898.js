"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[7631],{3905:(e,n,t)=>{t.d(n,{Zo:()=>i,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},i=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),m=p(t),f=r,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||l;return t?a.createElement(d,c(c({ref:n},i),{},{components:t})):a.createElement(d,c({ref:n},i))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,c=new Array(l);c[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<l;p++)c[p]=t[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85589:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const l={},c="13.  Making Append Vanish (2)",o={unversionedId:"Year2/2003/13",id:"Year2/2003/13",title:"13.  Making Append Vanish (2)",description:"23/03/23",source:"@site/docs/Year2/2003/13.md",sourceDirName:"Year2/2003",slug:"/Year2/2003/13",permalink:"/Year2/2003/13",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"12. Making Append Vanish",permalink:"/Year2/2003/12"},next:{title:"0.  Introduction",permalink:"/Year2/2006/00"}},s={},p=[{value:"Compiler",id:"compiler",level:2},{value:"Source Language",id:"source-language",level:3},{value:"Semantics/Meaning",id:"semanticsmeaning",level:3},{value:"Target Language (Virtual Machine)",id:"target-language-virtual-machine",level:3},{value:"Semantics",id:"semantics",level:3},{value:"Compiler",id:"compiler-1",level:3},{value:"Compiler Correctness",id:"compiler-correctness",level:3}],i={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"13--making-append-vanish-2"},"13.  Making Append Vanish (2)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"23/03/23")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"data Tree = Leaf Int | Node Tree Tree\nflatten :: Tree -> [Int]\nflatten (Leaf n) = [n]\nflatten (Node l r) = flatten l ++ flatten r\n\nflatten' t ns = flatten t ++ ns\n")),(0,r.kt)("p",null,"Base Case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"flatten' (Leaf n) ns\n=\nflatten (Leaf n) ++ ns\n=\n[n] ++ ns\n= \nn : ns\n\nflatten' (Leaf n) ns = n : ns\n")),(0,r.kt)("p",null,"Inductive Case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"flatten' (Node l r) ns\n= flatten (Node l r) ++ ns\n= (flatten l ++ flatten r) ++ ns\n= flatten l ++ (flatten r ++ ns)\n= flatten l ++ (flatten' r ns)\n= flatten' l (flatten' r ns)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"flatten' :: Tree -> [Int] -> [Int]\nflatten' (Leaf n) ns = n : ns\nflatten' (Node l r) ns = flatten' l (flatten' r ns)\n\nflatten :: Tree -> [Int]\nflatten t = flatten' t []\n\n")),(0,r.kt)("h2",{id:"compiler"},"Compiler"),(0,r.kt)("h3",{id:"source-language"},"Source Language"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"data Expr = Val Int | Add Expr Expr\n")),(0,r.kt)("h3",{id:"semanticsmeaning"},"Semantics/Meaning"),(0,r.kt)("p",null,"Correctness of our compiler. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"eval :: Exp -> Int\neval (Val n) = n\neval (Add x y) = eval x + eval\n")),(0,r.kt)("h3",{id:"target-language-virtual-machine"},"Target Language (Virtual Machine)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"type Stack = [Int]\ntype Code = [Op]\ndata Op = PUSH Int | ADD\n")),(0,r.kt)("h3",{id:"semantics"},"Semantics"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"exec :: Code -> Stack -> Stack\nexec [] s = s\nexec (PUSH n : c) s = exec c (n : s)\nexec (ADD : c) (m:n:s) = exec c (n+m : s)\n")),(0,r.kt)("h3",{id:"compiler-1"},"Compiler"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"comp :: Expr -> Code\ncomp (Val n) = [PUSH n]\ncomp (Add x y) = comp x ++ comp y ++ [ADD]\n")),(0,r.kt)("h3",{id:"compiler-correctness"},"Compiler Correctness"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"exec (comp e) s = (eval e) : s\n")))}u.isMDXComponent=!0}}]);