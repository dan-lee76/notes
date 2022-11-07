"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[7441],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>p});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var u=r.createContext({}),m=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},d=function(n){var e=m(n.components);return r.createElement(u.Provider,{value:e},n.children)},l={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,u=n.parentName,d=c(n,["components","mdxType","originalType","parentName"]),s=m(t),p=o,f=s["".concat(u,".").concat(p)]||s[p]||l[p]||a;return t?r.createElement(f,i(i({ref:e},d),{},{components:t})):r.createElement(f,i({ref:e},d))}));function p(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=s;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=n,c.mdxType="string"==typeof n?n:o,i[1]=c;for(var m=2;m<a;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1124:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var r=t(7462),o=(t(7294),t(3905));const a={},i="10. Addition & commutative monoid",c={unversionedId:"Year2/2009/10",id:"Year2/2009/10",title:"10. Addition & commutative monoid",description:"07/11/22",source:"@site/docs/Year2/2009/10.md",sourceDirName:"Year2/2009",slug:"/Year2/2009/10",permalink:"/Year2/2009/10",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"9. Natural numbers & Peano arithmetic",permalink:"/Year2/2009/09"},next:{title:"0. Introduction to Developing Maintainable Software",permalink:"/Year2/2013/00"}},u={},m=[],d={toc:m};function l(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"10-addition--commutative-monoid"},"10. Addition & commutative monoid"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"07/11/22")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lean"},"/-\nnatural numbers \u2115 : {0,1,2,..}\n\nPiano Arithmetic\n  zero : \u2115 \n  succ : \u2115 \u2192 \u2115 \n\nsuc(suc(suc(zer0))) 3\nstructural recursion \ninduction\n\ndouble \u2115 \u2192 \u2115 \n  double zero = zero\n  double (succ n) = succ(succ(double n))\n\nhalf \u2115 \u2192 \u2115  \n\n-/\n\nnamespace l11\nset_option pp.structure_projections true\nopen nat\n\ndef add : \u2115 \u2192 \u2115 \u2192 \u2115\n| n zero := n\n| n (succ m) := succ (add n m)\n\n#reduce (add 7 3)\n\nlocal notation (name := add)\n  m + n := add m n\n\n#reduce (7+3)\n\ntheorem lneutr: \u2200 n : \u2115 , 0 + n = n :=\nbegin\n  assume n,\n  induction n with n' ih,\n  dsimp[(+),add],\n  refl,\n  dsimp[(+),add],\n  rewrite ih,\n  \nend\n\ntheorem rneutr: \u2200 n : \u2115 , n + 0 = n :=\nbegin\n  assume n,\n  dsimp[(+), add],\n  refl,\nend\n\n\ntheorem assoc : \u2200 l m n : \u2115, (l + m) + n = l + (m + n) :=\nbegin\n  assume l m n,\n  induction n with n' ih,\n  -- (l+m)+0 = l+m\n  -- l+(m+0) = l+m\n  dsimp[(+),add],\n  refl,\n\n  -- (l + m) + succ n' = succ((l+m) + n')\n  -- l + (m + succ n') = l+(succ (m + n'))\n  -- = succ (l + (m + n'))\n  dsimp[(+),add],\n  rewrite ih,\nend\n\nlemma add_succ : \u2200 m n : \u2115, (succ m) + n = succ (m + n) :=\nbegin\n  assume m n,\n  induction n with n' ih,\n  dsimp[(+),add],\n  refl,\n\n  dsimp[(+),add],\n  rewrite ih,\n  \nend\n\ntheorem comm : \u2200 m n : \u2115, m + n = n + m :=\nbegin\n  assume m n,\n  induction n with n' ih,\n  dsimp[(+),add],\n  rewrite lneutr,\n  \n  rewrite add_succ,\n  dsimp[(+),add],\n  rewrite ih,\nend\n\nend l11\n")))}l.isMDXComponent=!0}}]);