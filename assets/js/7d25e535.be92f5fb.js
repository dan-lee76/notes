"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[3497],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const l={},o="2. Sudoku (3)",i={unversionedId:"Year2/2003/02",id:"Year2/2003/02",title:"2. Sudoku (3)",description:"09/02/23",source:"@site/docs/Year2/2003/02.md",sourceDirName:"Year2/2003",slug:"/Year2/2003/02",permalink:"/Year2/2003/02",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"Sudoku (2)",permalink:"/Year2/2003/01"},next:{title:"0.  Introduction",permalink:"/Year2/2006/00"}},c={},s=[{value:"Blocked Matrices",id:"blocked-matrices",level:2},{value:"Void",id:"void",level:3},{value:"Safe",id:"safe",level:3},{value:"Solve4 &amp; Search",id:"solve4--search",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"2-sudoku-3"},"2. Sudoku (3)"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"09/02/23")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"choices")," - takes your easy grid, replaces each blank cell with 1-9 (all possible choices)\n",(0,a.kt)("inlineCode",{parentName:"p"},"collapse")," - takes all the possible values\n",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," - no duplicates in any row, column, box etc\n",(0,a.kt)("inlineCode",{parentName:"p"},"prune")," - removes any choices which occur in single entries\n",(0,a.kt)("inlineCode",{parentName:"p"},"fix prune")," - "),(0,a.kt)("h2",{id:"blocked-matrices"},"Blocked Matrices"),(0,a.kt)("p",null,"Choice matrix being void and safe"),(0,a.kt)("h3",{id:"void"},"Void"),(0,a.kt)("p",null,"If at least one cell has no choices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"void :: Matrix Choices -> Bool\nvoid m = any (any null) m -- any - will take predicate and check to see if it holds true for combination. In this case if true for any null \n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"any :: (a -> Bool) -> [a] -> Bool")),(0,a.kt)("h3",{id:"safe"},"Safe"),(0,a.kt)("p",null,"If all the rows, columns, boxes are consistent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"safe :: Matrix Choices -> Bool\nsafe m = all consistent (rows m) && all consistent (cols m) && all consisntent (boxs m)\n\nconsistent :: Row Choices -> Bool\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"blocked :: Matrix Choices -> Bool\nblocked m = void m || not (safe m) -- empty cells || duplicated single cells\n")),(0,a.kt)("h2",{id:"solve4--search"},"Solve4 & Search"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"solve4 = search . prune . choices \n\nsearch :: Matrix Choices -> [Grid]\nsearch m | blocked m = []\n        | all (all single) m = collapse m\n        | otherwise = [g | m' <- expand m, g <- search (prune m')] -- Expand will expand only the first cell which has more than one option. Prune will remove any 'silly choice' then do it again etc\n\nsingle :: [a] -> Bool\nsingle [_] = True\nsingle _ = False\n")))}u.isMDXComponent=!0}}]);