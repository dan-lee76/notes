"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[7358],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>h});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=s(r),h=a,m=f["".concat(c,".").concat(h)]||f[h]||u[h]||i;return r?t.createElement(m,l(l({ref:n},p),{},{components:r})):t.createElement(m,l({ref:n},p))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},78019:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=r(87462),a=(r(67294),r(3905));const i={},l="Sudoku (2)",o={unversionedId:"Year2/2003/01",id:"Year2/2003/01",title:"Sudoku (2)",description:"06/02/23",source:"@site/docs/Year2/2003/01.md",sourceDirName:"Year2/2003",slug:"/Year2/2003/01",permalink:"/Year2/2003/01",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"0. Introduction to AFP",permalink:"/Year2/2003/00"},next:{title:"2. Sudoku (3)",permalink:"/Year2/2003/02"}},c={},s=[{value:"A basic solver",id:"a-basic-solver",level:2},{value:"Function Composition",id:"function-composition",level:3},{value:"Making Choices",id:"making-choices",level:2},{value:"Making Collapse",id:"making-collapse",level:2},{value:"Pruning the search space",id:"pruning-the-search-space",level:2},{value:"Recursive Pruning",id:"recursive-pruning",level:2}],p={toc:s};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sudoku-2"},"Sudoku (2)"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"06/02/23")),(0,a.kt)("h2",{id:"a-basic-solver"},"A basic solver"),(0,a.kt)("h3",{id:"function-composition"},"Function Composition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"-- Defined by\n(f.g)x = f(g x)\n-- Or clever way\nf . g = \\x -> f (g x)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"solve :: Grid -> [Grid]\nsolve = filter valid . collapse . choices\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"filter")," - library function that keeps all elements of a list that satisfy a given property. ",(0,a.kt)("inlineCode",{parentName:"p"},"filter even [1..10] = [2,4,6,8.10]")),(0,a.kt)("h2",{id:"making-choices"},"Making Choices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"type Choices = [Value] -- List of values 1-9\nchoices :: Grid -> Matrix Choices\nchoices g = map (map choice) g\n            where \n                choice v = if v == '.' then\n                    ['1'..'9']\n                    else\n                        [v]\n")),(0,a.kt)("p",null,"or as\n",(0,a.kt)("inlineCode",{parentName:"p"},"choices = map (map choice")),(0,a.kt)("h2",{id:"making-collapse"},"Making Collapse"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"cp [[1,2],[3,4],[5,6]] = [[1,3,5],[1,3,6],[1,4,5],..] -- Chooses all the possible combinations as a list\ncp :: [[a]] -> [[a]]\ncp [] = [[]]\ncp (xs:xss) = [y:ys | y <- xs,ys <- cp xss] \n\ncollapse :: Matrix [a] -> [Matrix a]\ncollapse m = cp (map cp m) -- Collapse each row | cp.. will collapse each col\n")),(0,a.kt)("p",null,"This Sudoku solver will solve, but is incredibly slow. We will be dead by then"),(0,a.kt)("h2",{id:"pruning-the-search-space"},"Pruning the search space"),(0,a.kt)("p",null,"Check this section again (30 mins)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'prune :: Matrix Choices -> Matrix Choices-- Prune out any choices which are single entry in the column\nprune = pruneBy boxes . proneBy cols . pruneBy rows where proneBy f = f . map reduce . f\n\nreduce :: Row Choices -> Row Choices\n> reduce ["1234","1","34","3"]\n> ["24","1","4","3"]\n\nsolve2 = filter valid . collapse . prune . choices\n')),(0,a.kt)("p",null,"Can keep reducing to make the choice list smaller. Can keep iterating to remove repeated choices. Will end up reaching a fixed point"),(0,a.kt)("h2",{id:"recursive-pruning"},"Recursive Pruning"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"solve3 = filter valid . collapse . fix prune . choices\n\nfix :: Eq a => (a -> a) -> a -> a\nfix f x = if x == x' then x else fix f x'\n        where x' = f x\n")))}u.isMDXComponent=!0}}]);