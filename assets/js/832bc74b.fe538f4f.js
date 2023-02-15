"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[1912],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||c;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<c;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95586:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const c={},o="5.  Predicate Logic",l={unversionedId:"Year2/2009/IFR/05",id:"Year2/2009/IFR/05",title:"5.  Predicate Logic",description:"21/10/22",source:"@site/docs/Year2/2009/IFR/05.md",sourceDirName:"Year2/2009/IFR",slug:"/Year2/2009/IFR/05",permalink:"/Year2/2009/IFR/05",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"4. The law of the excluded middle",permalink:"/Year2/2009/IFR/04"},next:{title:"6. Predicate Logic (2)",permalink:"/Year2/2009/IFR/06"}},i={},s=[{value:"Types",id:"types",level:2},{value:"Predicates and Relations",id:"predicates-and-relations",level:2},{value:"Predicates (<em>properties of elements</em>)",id:"predicates-properties-of-elements",level:3},{value:"Relations (<em>Predicates with several inputs</em>)",id:"relations-predicates-with-several-inputs",level:3},{value:"Quantifiers",id:"quantifiers",level:2},{value:"Example Proofs",id:"example-proofs",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"5--predicate-logic"},"5.  Predicate Logic"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"21/10/22"),"\n",(0,r.kt)("em",{parentName:"p"},"Lecture conducted by a tutor")),(0,r.kt)("p",null,"Prove propositions using tactics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"assume & applying for \\to, \xac"),(0,r.kt)("li",{parentName:"ul"},"constructor & cases for ^"),(0,r.kt)("li",{parentName:"ul"},"left/right & cases for v"),(0,r.kt)("li",{parentName:"ul"},"constructor for true"),(0,r.kt)("li",{parentName:"ul"},"cases for false\nIntuitonistic logic: prove theorems by combining...\nClassical logic: use magic (em & raa)")),(0,r.kt)("h2",{id:"types"},"Types"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"#check \u2115")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"\\bn"),", natural numbers 0,1,2,....\n",(0,r.kt)("inlineCode",{parentName:"p"},"#check bool")," - tt,ff\n",(0,r.kt)("inlineCode",{parentName:"p"},"#check list \u2115")),(0,r.kt)("p",null,"Types are like sets\nTypes have terms (",(0,r.kt)("em",{parentName:"p"},"elements"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lean"},"#check 3\n#check tt\n#check [3,4,5]\n")),(0,r.kt)("h2",{id:"predicates-and-relations"},"Predicates and Relations"),(0,r.kt)("h3",{id:"predicates-properties-of-elements"},"Predicates (",(0,r.kt)("em",{parentName:"h3"},"properties of elements"),")"),(0,r.kt)("p",null,"Prime : \u2115 \u2192 Prop\nPrime 3 : -- Prop, Prime 4: Prop\nisZero : \u2115 \u2192 Prop"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lean"},"def isZero : \u2115 \u2192 Prop | 0 := true | _ := false\n#check isZero\n#check isZero 0\n#check isZero 4\n#check isZero 3\n")),(0,r.kt)("h3",{id:"relations-predicates-with-several-inputs"},"Relations (",(0,r.kt)("em",{parentName:"h3"},"Predicates with several inputs"),")"),(0,r.kt)("p",null,"le : \u2115 \u2192 (\u2115 \u2192 Prop)\nle 2 3 means 2 is less or equal to 3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lean"},"#check 2 \u2264 3\n#check 5 \u2264 3\n")),(0,r.kt)("p",null,"A relation for every type: equality"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lean"},"#check 3 = 3\n#check 3 = 4\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"namespace social")," - Non-mathematical example: type of social media access\n",(0,r.kt)("inlineCode",{parentName:"p"},"constant Account : Type")," - Predicate: is this account a bot?\n",(0,r.kt)("inlineCode",{parentName:"p"},"constant isBot : Account \u2192 Prop")," - Relation: the 'follows' relation follows acc1 acc2 means that acc1 follows acc2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lean"},"constant follows : Account \u2192 Account \u2192 Prop\nconstant account1 : Account\nconstant account2 : Account\n#check account1 = account2\n")),(0,r.kt)("h2",{id:"quantifiers"},"Quantifiers"),(0,r.kt)("p",null,"\u2200 : universal quantifier (",(0,r.kt)("inlineCode",{parentName:"p"},"\\forall"),")\n",(0,r.kt)("inlineCode",{parentName:"p"},"#check \u2200 x : Account , isBot x")),(0,r.kt)("p",null,"\u2203 : existential quanitifier (",(0,r.kt)("inlineCode",{parentName:"p"},"\\exists"),")\n",(0,r.kt)("inlineCode",{parentName:"p"},"#check \u2203 x : Account, isBot x")),(0,r.kt)("p",null,"Can use quantifiers in definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lean"},"def haveCommonFollower (acc1 acc2 : Account) : Prop\n  := \u2203 acc3 : Account, follows acc3 acc1 \u2227 follows acc3 acc2\n#check haveCommonFollower\n\ndef fakeFollowing (acc : Account) : Prop\n  := \u2200 acc' : Account, follows acc' acc \u2192 isBot acc'\n#check fakeFollowing\n\nend social\n")),(0,r.kt)("p",null,"\u2200 x : A, (\u2203 x : A ..x..) .. x ..\nscope, shadowing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lean"},"variables A B C : Type\nvariables P Q R : Prop\nvariables PP QQ : A \u2192 Prop\n\nexample : (\u2200 x : A, PP x) \u2192 (\u2200 y : A, PP y \u2192 QQ y) \u2192 (\u2200 z : A, QQ z) :=\n\nbegin\n  assume h g z,\n  apply g,\n  apply h,\nend\n\n\nexample : (\u2203 x : A, PP x) \u2192 (\u2200 y : A, PP y \u2192 QQ y) \u2192 (\u2203 z : A, QQ z) :=\nbegin\n  assume h g,\n  cases h with z pz,\n  existsi z,\n  apply g,\n  exact pz,\nend\n")),(0,r.kt)("h2",{id:"example-proofs"},"Example Proofs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lean"},"example : (\u2200 x : A, PP x \u2227 QQ x) \u2194 (\u2200 x : A, PP x) \u2227 (\u2200 x : A, QQ x) :=\nbegin\n  constructor,\n  assume h,\n  constructor,\n  assume x,\n  have f : PP x \u2227 QQ x,\n  apply h,\n  cases f with px qx,\n  exact px,\n  assume x,\n  have f: PP x \u2227 QQ x,\n  apply h,\n  cases f with px qx,\n  exact qx,\n  assume h x,\n  cases h with Px Qx,\n  constructor,\n  apply Px,\n  apply Qx,\nend\n")))}u.isMDXComponent=!0}}]);