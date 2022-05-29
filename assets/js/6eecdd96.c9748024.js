"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[3275],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),f=a,g=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return t?n.createElement(g,o(o({ref:r},u),{},{components:t})):n.createElement(g,o({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},158:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={},l=void 0,s={unversionedId:"Year1/Programming Paradigms/Haskell/22.03.21 - Exercises on interaction",id:"Year1/Programming Paradigms/Haskell/22.03.21 - Exercises on interaction",title:"22.03.21 - Exercises on interaction",description:"IO a",source:"@site/docs/Year1/1009 - Programming Paradigms/Haskell/22.03.21 - Exercises on interaction.md",sourceDirName:"Year1/1009 - Programming Paradigms/Haskell",slug:"/Year1/Programming Paradigms/Haskell/22.03.21 - Exercises on interaction",permalink:"/docs/Year1/Programming Paradigms/Haskell/22.03.21 - Exercises on interaction",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"22.03.16 - Interactive Programming",permalink:"/docs/Year1/Programming Paradigms/Haskell/22.03.16 - Interactive Programming"},next:{title:"Introduction",permalink:"/docs/Year1/Programming Paradigms/Haskell/22.03.23 - Lazy Evaluation"}},u={},p=[{value:"Primitives",id:"primitives",level:2}],m={toc:p};function f(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IO a"),"\nActions that return a value of type a"),(0,i.kt)("h2",{id:"primitives"},"Primitives"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-haskell"},"getChar :: IO Char\nputChar :: Char -> IO()\nreturn :: a -> IO a -- returns a 'void' result value\ngetLine :: IO String\nputStr :: String -> IO()\nputStrLn :: String -> IO()\n")))}f.isMDXComponent=!0}}]);