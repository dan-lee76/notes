"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o="0. Introduction to Developing Maintainable Software",l={unversionedId:"Year2/2013/00",id:"Year2/2013/00",title:"0. Introduction to Developing Maintainable Software",description:"03/10/22",source:"@site/docs/Year2/2013/00.md",sourceDirName:"Year2/2013",slug:"/Year2/2013/00",permalink:"/Year2/2013/00",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"Class Test Revision",permalink:"/Year2/2009/class_test"},next:{title:"1. OO and Java Programming Refresher (1)",permalink:"/Year2/2013/01"}},s={},c=[{value:"Core attributes of maintainable software",id:"core-attributes-of-maintainable-software",level:2},{value:"Developing Maintainable Software",id:"developing-maintainable-software",level:2},{value:"Three principles for developing maintainable software",id:"three-principles-for-developing-maintainable-software",level:3},{value:"Main Categories of Maintenance",id:"main-categories-of-maintenance",level:3},{value:"Software Maintenance Process",id:"software-maintenance-process",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"0-introduction-to-developing-maintainable-software"},"0. Introduction to Developing Maintainable Software"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"03/10/22")),(0,r.kt)("h2",{id:"core-attributes-of-maintainable-software"},"Core attributes of maintainable software"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Readable Code"),(0,r.kt)("li",{parentName:"ul"},"Strong documentation"),(0,r.kt)("li",{parentName:"ul"},"Consistent variable/functions conventions"),(0,r.kt)("li",{parentName:"ul"},"Standard code layout (whitespace/variables)"),(0,r.kt)("li",{parentName:"ul"},"Testability")),(0,r.kt)("h2",{id:"developing-maintainable-software"},"Developing Maintainable Software"),(0,r.kt)("h3",{id:"three-principles-for-developing-maintainable-software"},"Three principles for developing maintainable software"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Maintainability benefits most from adhering to simple guidelines",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Never write methods that have more than 15 lines of code"))),(0,r.kt)("li",{parentName:"ul"},"Maintainability is not an afterthought, but should be addressed from the very beginning of a development project"),(0,r.kt)("li",{parentName:"ul"},"Some violations are worse than other; the more a software system compiles with the guidelines, the more maintainable it is")),(0,r.kt)("p",null,"What software maintenance involves: The process for managing and executing software maintenance activities is described. However, also need to consider how we can reduce the effort of maintenance."),(0,r.kt)("h3",{id:"main-categories-of-maintenance"},"Main Categories of Maintenance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Corrective maintenance: Finding and fixing errors in the system"),(0,r.kt)("li",{parentName:"ul"},"Adaptive Maintenance: The system has to be adapted to changes in the environment in which it operates"),(0,r.kt)("li",{parentName:"ul"},"Perfective + Preventive Maintenance: Users of the system have new or changed requirements. Ways identified to increase the quality or prevent future bugs.")),(0,r.kt)("h3",{id:"software-maintenance-process"},"Software Maintenance Process"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Understanding the client"),(0,r.kt)("li",{parentName:"ul"},"Understanding the existing code"),(0,r.kt)("li",{parentName:"ul"},"Refactoring the existing code"),(0,r.kt)("li",{parentName:"ul"},"Extending the existing code"),(0,r.kt)("li",{parentName:"ul"},"Working as a team"),(0,r.kt)("li",{parentName:"ul"},"Managing client expectations"),(0,r.kt)("li",{parentName:"ul"},"Managing the maintenance process")))}u.isMDXComponent=!0}}]);