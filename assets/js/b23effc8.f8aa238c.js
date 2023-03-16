"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[981],{3905:(a,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>k});var n=t(67294);function m(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){m(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function p(a,e){if(null==a)return{};var t,n,m=function(a,e){if(null==a)return{};var t,n,m={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(m[t]=a[t]);return m}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(m[t]=a[t])}return m}var l=n.createContext({}),o=function(a){var e=n.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},i=function(a){var e=o(a.components);return n.createElement(l.Provider,{value:e},a.children)},N={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,m=a.mdxType,s=a.originalType,l=a.parentName,i=p(a,["components","mdxType","originalType","parentName"]),c=o(t),k=m,d=c["".concat(l,".").concat(k)]||c[k]||N[k]||s;return t?n.createElement(d,r(r({ref:e},i),{},{components:t})):n.createElement(d,r({ref:e},i))}));function k(a,e){var t=arguments,m=e&&e.mdxType;if("string"==typeof a||m){var s=t.length,r=new Array(s);r[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p.mdxType="string"==typeof a?a:m,r[1]=p;for(var o=2;o<s;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},18797:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>N,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var n=t(87462),m=(t(67294),t(3905));const s={},r="11. Induction",p={unversionedId:"Year2/2003/11",id:"Year2/2003/11",title:"11. Induction",description:"16/03/23",source:"@site/docs/Year2/2003/11.md",sourceDirName:"Year2/2003",slug:"/Year2/2003/11",permalink:"/Year2/2003/11",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"10.  Reasoning about programs",permalink:"/Year2/2003/10"},next:{title:"0.  Introduction",permalink:"/Year2/2006/00"}},l={},o=[{value:"Induction on Numbers",id:"induction-on-numbers",level:2},{value:"Example: given",id:"example-given",level:2},{value:"Example: show that",id:"example-show-that",level:2},{value:"Inductive Case",id:"inductive-case",level:3},{value:"Induction on Lists",id:"induction-on-lists",level:2},{value:"Example: given",id:"example-given-1",level:2}],i={toc:o};function N(a){let{components:e,...t}=a;return(0,m.kt)("wrapper",(0,n.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"11-induction"},"11. Induction"),(0,m.kt)("p",null,(0,m.kt)("em",{parentName:"p"},"16/03/23")),(0,m.kt)("h2",{id:"induction-on-numbers"},"Induction on Numbers"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-haskell"},"data Nata = Zero | Succ Nat\n\n")),(0,m.kt)("p",null,"Induction used to break down a problem.\nNeed to prove a base case\nE.g\n",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2200"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,m.kt)("mi",{parentName:"mrow"},"P"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\forall n. P(n)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u2200"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord"},"."),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\nBase Case: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"P"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"z"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"r"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"P(zero)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"zero"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\nInductive Case: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2200"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"P"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mo",{parentName:"mrow"},">"),(0,m.kt)("mi",{parentName:"mrow"},"P"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"S"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\forall n. [P(n) => P(Succ)]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u2200"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord"},"."),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"=>"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"cc"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")]")))))),(0,m.kt)("h2",{id:"example-given"},"Example: given"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-haskell"},"add :: Nat -> Nat -> Nat\nadd Zero m = m\nadd (Succ n) m = Succ (add n m)\n")),(0,m.kt)("p",null,"Show that"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-haskell"},"add n Zero = n\n")),(0,m.kt)("p",null,"P(n) = add n Zero = n"),(0,m.kt)("p",null,"Base Case: ",(0,m.kt)("inlineCode",{parentName:"p"},"P(zero)")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-haskell"},"add Zero Zero = Zero\n")),(0,m.kt)("p",null,"???????"),(0,m.kt)("h2",{id:"example-show-that"},"Example: show that"),(0,m.kt)("p",null,"Start reasoning with the largest sub-expression. Good approach because large things can usually be simplified by applying definitions"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-haskell"},"add x (add y z) = add (add x y) z\n")),(0,m.kt)("p",null,"X appears twice in the recursive position, y is once, z is none"),(0,m.kt)("p",null,(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"P"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},"\u2261")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"P(x) \\equiv")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2261")))))," ",(0,m.kt)("inlineCode",{parentName:"p"},"add x (add y z) = add (add x y) z")),(0,m.kt)("p",null,"Base case : P(zero) i.e"),(0,m.kt)("p",null,"Work way down, then when get suck, work way up"),(0,m.kt)("h1",{id:"add-zero-add-y-z--add-add-zero-y-z"},(0,m.kt)("inlineCode",{parentName:"h1"},"add Zero (add y z) = add (add Zero y) z")),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"add Zero (add y z)"),"\n= applying add\n",(0,m.kt)("inlineCode",{parentName:"p"},"add y z"),"\n= unapplying add\n",(0,m.kt)("inlineCode",{parentName:"p"},"add (add Zero y) z")),(0,m.kt)("h3",{id:"inductive-case"},"Inductive Case"),(0,m.kt)("p",null,(0,m.kt)("inlineCode",{parentName:"p"},"P(x) => P(Succ x)")," i.e."),(0,m.kt)("h1",{id:"add-x-add-y-z--add-add-x-y-z--add-succ-x-add-y-z--add-add-succ-x-y-z"},(0,m.kt)("inlineCode",{parentName:"h1"},"add x (add y z) = add (add x y) z => add (Succ x) (add y z) = add (add (Succ x) y) z")),(0,m.kt)("p",null,"add (Succ x) (add y z)\n-- Can apply the def of addition\n= Succ (add x (add y z))\n= Succ(add (add x y) z)\n= add (Succ (add x y)) z\n= add(add (Succ x) y) z"),(0,m.kt)("h2",{id:"induction-on-lists"},"Induction on Lists"),(0,m.kt)("p",null,"Base Case: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"P"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"P([])")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"(["),(0,m.kt)("span",{parentName:"span",className:"mclose"},"])"))))),"\nInductive Case: ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2200"),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2200"),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,m.kt)("mi",{parentName:"mrow"},"P"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mo",{parentName:"mrow"},">"),(0,m.kt)("mi",{parentName:"mrow"},"P"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mo",{parentName:"mrow"},":"),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\forall x.\\forall xs. [P(xs) => P(xs:xs]")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u2200"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mord"},".\u2200"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord"},"."),(0,m.kt)("span",{parentName:"span",className:"mopen"},"["),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"=>"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},":"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"]"))))),"\n",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2200"),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,m.kt)("mi",{parentName:"mrow"},"P"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mi",{parentName:"mrow"},"x"),(0,m.kt)("mi",{parentName:"mrow"},"s"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\forall xs. P(xs)")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u2200"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mord"},"."),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," "),(0,m.kt)("h2",{id:"example-given-1"},"Example: given"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-haskell"},"rev :: [a] -> [a]\nrev [] = []\nrev (x:xs) = rev xs ++ [x]\n")),(0,m.kt)("p",null,"show that\n",(0,m.kt)("inlineCode",{parentName:"p"},"rev(rev xs) = xs")),(0,m.kt)("p",null,"Base Case: ",(0,m.kt)("inlineCode",{parentName:"p"},"rev(rev []))"),"\nInductive Case: ",(0,m.kt)("inlineCode",{parentName:"p"},"rev(rev xs) = xs => rev(rev(x:xs)) = x:xs")),(0,m.kt)("p",null,"rev(rev (x:xs))\n= rev(rev xs ++ ","[x]",")\n= rev ","[x]"," ++ rev(rev xs)\n= ","[x]"," ++ rev(rev xs)\n-- Apply inductive hyp\n= ","[x]"," ++ xs\n= x : xs\nTo not get stuck, use an auxiliary word"),(0,m.kt)("p",null,"Distributivity lemma\n",(0,m.kt)("inlineCode",{parentName:"p"},"rev(xs ++ ys) = rev ys ++ rev xs")),(0,m.kt)("p",null,"Singleton list lemma\n",(0,m.kt)("inlineCode",{parentName:"p"},"rev [x] = [x]")))}N.isMDXComponent=!0}}]);