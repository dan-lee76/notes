"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[8856],{3905:(n,e,t)=>{t.d(e,{Zo:()=>c,kt:()=>u});var r=t(67294);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,s=function(n,e){if(null==n)return{};var t,r,s={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}var a=r.createContext({}),p=function(n){var e=r.useContext(a),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},c=function(n){var e=p(n.components);return r.createElement(a.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,s=n.mdxType,o=n.originalType,a=n.parentName,c=i(n,["components","mdxType","originalType","parentName"]),d=p(t),u=s,y=d["".concat(a,".").concat(u)]||d[u]||m[u]||o;return t?r.createElement(y,l(l({ref:e},c),{},{components:t})):r.createElement(y,l({ref:e},c))}));function u(n,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var a in e)hasOwnProperty.call(e,a)&&(i[a]=e[a]);i.originalType=n,i.mdxType="string"==typeof n?n:s,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35257:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),s=(t(67294),t(3905));const o={},l="15. Collatz & Sorting",i={unversionedId:"Year2/2009/IFR/15",id:"Year2/2009/IFR/15",title:"15. Collatz & Sorting",description:"28/11/22",source:"@site/docs/Year2/2009/IFR/15.md",sourceDirName:"Year2/2009/IFR",slug:"/Year2/2009/IFR/15",permalink:"/Year2/2009/IFR/15",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"14. Reverse, Definition of Sorted",permalink:"/Year2/2009/IFR/14"},next:{title:"16. Permutation",permalink:"/Year2/2009/IFR/16"}},a={},p=[],c={toc:p};function m(n){let{components:e,...t}=n;return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"15-collatz--sorting"},"15. Collatz & Sorting"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"28/11/22")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-lean"},"set_option pp.structure_projections false\nvariables {A B C : Type}\nopen nat\n\ndef leb : \u2115 \u2192 \u2115 \u2192 bool\n| 0 n := tt\n| (succ n) 0 := ff\n| (succ m) (succ n) := leb m n\n\ntheorem leb_ok : \u2200 m n : \u2115, m \u2264 n \u2194 leb m n = tt :=\nbegin\n  sorry,\nend\n\ndef ins : \u2115 \u2192 list \u2115 \u2192 list \u2115 \n| n [] := [n]\n| n (m :: ms) :=\n  if (leb n m) then n :: m :: ms\n  else m :: (ins n ms)\n\n\ndef sort : list \u2115 \u2192 list \u2115 \n| [] := []\n| (n :: ns) := ins n (sort ns)\n\n#eval (sort [ 5,3,2,4,1])\n\n-- sort sorts\n-- Sorted : list \u2115 \u2192 Prop\n\n\ninductive Le_list : \u2115 \u2192 list \u2115 \u2192 Prop\n| le_nil : \u2200 n : \u2115, Le_list n []\n| le_cons : \u2200 m n : \u2115, \u2200 ns : list \u2115 , m \u2264 n \u2192 Le_list m ns \u2192 Le_list m (n :: ns)\n\ninductive Sorted : list \u2115 \u2192 Prop\n| sorted_nil : Sorted []\n| sorted_cons : \u2200 ms : list \u2115, \u2200 n : \u2115, Le_list n ms \u2192 Sorted ms \u2192 Sorted (n :: ms)\n\nopen Sorted\nopen Le_list\n\nexample : Sorted [3,6,8] :=\nbegin\n  apply sorted_cons,\n  apply le_cons,\n  sorry,\n  apply le_cons,\n  sorry,\n  apply le_nil,\n  apply sorted_cons,\n  apply le_cons,\n  sorry,\n  apply le_nil,\n  apply sorted_cons,\n  apply le_nil,\n  apply sorted_nil,\nend\n\nexample : \xacSorted [8,6,3] :=\nbegin\n  assume h,\n  cases h with _ _ h1 h2,\n  cases h1 with _ _ _ _ h3,\n  sorry,\n\nend\n\nopen list\n\nlemma sgl_sorted : \u2200 n : \u2115, Sorted [n] :=\nbegin\n  assume n,\n  apply sorted_cons,\n  apply le_nil,\n  apply sorted_nil,\nend\n\nlemma ins_le_lem : \u2200 m n : \u2115, \u2200 ms : list \u2115, Le_list n ms \u2192 n \u2264 m \u2192 Le_list n (ins m ms) :=\nbegin\n  sorry,\nend\n\n\nlemma ins_lem : \u2200 ns : list \u2115, \u2200 n : \u2115, Sorted ns \u2192 Sorted (ins n ns) :=\nbegin\n  assume ns n sns,\n  induction ns with n' ns' ih,\n  dsimp[ins],\n  apply sgl_sorted,\n  dsimp[ins],\n  cases eq : (leb n n'),\n  simp,\n  cases sns with _ _ h2 h3,\n  apply sorted_cons,\n  apply ins_le_lem,\n  exact h2,\n  sorry,\n  apply ih,\n  exact h3,\n  simp,\n  apply sorted_cons,\n  apply le_cons,\n  sorry,\n  cases sns with _ _ h2 h3,\n  sorry,\n  sorry,\nend\n\n\n\ntheorem sort_sorts : \u2200 ns : list \u2115 , Sorted (sort ns) :=\nbegin\n  assume ns,\n  induction ns with n ns' ih,\n  dsimp [sort],\n  apply sorted_nil,\n  dsimp [sort],\n  apply ins_lem,\n  exact ih,\nend\n")))}m.isMDXComponent=!0}}]);