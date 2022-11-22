"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[2546],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),b=c(t),m=r,f=b["".concat(l,".").concat(m)]||b[m]||u[m]||s;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=b;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},3096:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const s={},i="13. Lists, Basic properties, Monoid",o={unversionedId:"Year2/2009/13",id:"Year2/2009/13",title:"13. Lists, Basic properties, Monoid",description:"18/11/22",source:"@site/docs/Year2/2009/13.md",sourceDirName:"Year2/2009",slug:"/Year2/2009/13",permalink:"/Year2/2009/13",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"12. Deciding Equality of Natural Numbers (\u2115)",permalink:"/Year2/2009/12"},next:{title:"14. Reverse, Definition of Sorted",permalink:"/Year2/2009/14"}},l={},c=[],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"13-lists-basic-properties-monoid"},"13. Lists, Basic properties, Monoid"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"18/11/22")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lean"},"\nset_option pp.structure_projections false\n\n#check [1,2,3]\n\n#check [tt,ff]\n\n--#check [1,tt]\n#check [[1,2],[3,4,5]]\n\n#check [] -- empty list\n-- nill  \n-- LISP, first funcitonal language\n#check 1::[2,3]\n-- cons \n\nnamespace mylists\n\n-- inductive list(A : Type)\n-- | nil : list\n-- | cons : A \u2192 list \u2192 list\n\n\nopen list\n\nlocal notation (name := cons)\n  a :: l := cons a l\n\n#check (1 :: 2 :: 3 :: nil)\n\nvariables {A B C : Type} -- {} make things more curly (implicet type)\nopen list\n\nexample : \u2200 a:A, \u2200 as:list A, [] \u2260 a :: as :=\nbegin\n  assume a as h,\n  contradiction,\nend\n\ndef tl : list A \u2192 list A\n| [] := []\n| (a :: as) := as\n\nexample : \u2200 a b : A, \u2200 as bs : list A, a :: as = b :: bs \u2192 as = bs :=\nbegin\n  assume a b as bs eq,\n  change (tl (a :: as) = bs),\n  rw eq,\n  refl,\nend\n\nexample : \u2200 a b : A, \u2200 as bs : list A, a :: as = b :: bs \u2192 as = bs :=\nbegin\n  assume a b as bs eq,\n  injection eq,\nend\n\n/-\ndef hd : list A \u2192 A\n| [] := sorry\n| (a :: as) := a\n-/\n\nexample : \u2200 a b : A, \u2200 as bs : list A, a :: as = b :: bs \u2192 a = b :=\nbegin\n  assume a b as bs eq,\n  injection eq,\n  -- Challenge: Without the use of injeciton\nend\n\n#eval ([1,2,3] ++ [4,5])\n\n\ndef app' : list A \u2192 list A \u2192 list A \n| as [] := as\n| as (b :: bs) := b :: (app' as bs)\n\n\n#eval (app' [1,2,3] [4,5])\n\ndef app : list A \u2192 list A \u2192 list A\n| [] as := as\n| (b :: bs) as := b :: (app bs as)\n\n#eval (app [1,2,3] [4,5])\n\ntheorem lneutr : \u2200 as : list A, [] ++ as = as :=\nbegin\n  assume as,\n  dsimp[(++)],\n  refl,\nend\n\ntheorem rneutr : \u2200 as : list A, as ++ [] = as :=\nbegin\n  assume as,\n  induction as with a as' ih,\n  dsimp[(++)],\n  refl,\n  dsimp[(++)],\n  dsimp[(++)] at ih,\n  rw ih,\nend\n\ntheorem assoc : \u2200 as bs cs : list A, (as ++ bs) ++ cs == as ++ (bs ++ cs) :=\nbegin\n  assume as bs cs,\n  sorry,\nend\n  \nend mylists\n\n\n")))}u.isMDXComponent=!0}}]);