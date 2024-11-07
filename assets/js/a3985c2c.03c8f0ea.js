"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[5552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={},i="12. Template Functions & classes",o={unversionedId:"Year2/2006/12",id:"Year2/2006/12",title:"12. Template Functions & classes",description:"14/03/23",source:"@site/docs/Year2/2006/12.md",sourceDirName:"Year2/2006",slug:"/Year2/2006/12",permalink:"/Year2/2006/12",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"11. Casting and Operator overloading",permalink:"/Year2/2006/11"},next:{title:"13. Exceptions and RAII",permalink:"/Year2/2006/13"}},c={},p=[{value:"Template Functions",id:"template-functions",level:2},{value:"What they actually do",id:"what-they-actually-do",level:3},{value:"How to create template functions",id:"how-to-create-template-functions",level:3},{value:"Template classes",id:"template-classes",level:2},{value:"Alter external member function definitions",id:"alter-external-member-function-definitions",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"12-template-functions--classes"},"12. Template Functions & classes"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"14/03/23")),(0,r.kt)("p",null,"Do not use a macro where the evaluation of the parameters may have a side-effect.\n",(0,r.kt)("inlineCode",{parentName:"p"},"max(a++,b++)")," -> Evaluating these parameters alters a value "),(0,r.kt)("h2",{id:"template-functions"},"Template Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can use function overloading to have multiple versions of the same function"),(0,r.kt)("li",{parentName:"ul"},"Specify how to create functions of a certain format, if they are ever needed, e.g.:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"template <typename T>\nT mymax(T a, T b){\nreturn a > b ? a : b;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type placeholders are used, and are replaced implicitly.")),(0,r.kt)("h3",{id:"what-they-actually-do"},"What they actually do"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The compiler will actually generate the functions which are needed, according to the parameters"),(0,r.kt)("li",{parentName:"ul"},"If there are any problems, it will not compile"),(0,r.kt)("li",{parentName:"ul"},"this is NOT something done at runtime")),(0,r.kt)("h3",{id:"how-to-create-template-functions"},"How to create template functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Easy way to create these functions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"First manually generate a function for specific types"),(0,r.kt)("li",{parentName:"ul"},"Next replace all copies of the types by an identifier"),(0,r.kt)("li",{parentName:"ul"},"Then add the keyword ",(0,r.kt)("inlineCode",{parentName:"li"},"template")," at the beginning and put the type(s) in the ",(0,r.kt)("inlineCode",{parentName:"li"},"<>")," with keyword ",(0,r.kt)("inlineCode",{parentName:"li"},"typename")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"class"),")")))),(0,r.kt)("h2",{id:"template-classes"},"Template classes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can make template forms of entire classes as well as individual functions"),(0,r.kt)("li",{parentName:"ul"},"Much easier if the methods are defined inline within the class declaration")),(0,r.kt)("h3",{id:"alter-external-member-function-definitions"},"Alter external member function definitions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add prior to each member function definition ",(0,r.kt)("inlineCode",{parentName:"li"},"template <typename T>")),(0,r.kt)("li",{parentName:"ul"},"Add the ",(0,r.kt)("inlineCode",{parentName:"li"},"<T>")," to the end of the class name in any external member function implementation/definition"),(0,r.kt)("li",{parentName:"ul"},"Find each occurrence of the templated type and replace it by the templated type name")))}u.isMDXComponent=!0}}]);