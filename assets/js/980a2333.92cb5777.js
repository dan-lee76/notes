"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[9563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,g=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={},i="Constructors",s={unversionedId:"Year1/Programming Paradigms/Java/22.02.17 - Aggregation",id:"Year1/Programming Paradigms/Java/22.02.17 - Aggregation",title:"Constructors",description:"Methods called to initialise new objects",source:"@site/docs/Year1/1009 - Programming Paradigms/Java/22.02.17 - Aggregation.md",sourceDirName:"Year1/1009 - Programming Paradigms/Java",slug:"/Year1/Programming Paradigms/Java/22.02.17 - Aggregation",permalink:"/Year1/Programming Paradigms/Java/22.02.17 - Aggregation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"22.02.10 - Introduction to Objected Oriented Desig",permalink:"/Year1/Programming Paradigms/Java/22.02.10 - Introduction to Objected Oriented Desig"},next:{title:"22.02.18 - Inheritance and Class Diagrams",permalink:"/Year1/Programming Paradigms/Java/22.02.18 - Inheritance and Class Diagrams"}},c={},l=[{value:"Current object reference",id:"current-object-reference",level:2},{value:"Static Members",id:"static-members",level:2},{value:"Imports and Packages",id:"imports-and-packages",level:2},{value:"Generic Types",id:"generic-types",level:2},{value:"Composition/Aggregation",id:"compositionaggregation",level:2}],m={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"constructors"},"Constructors"),(0,r.kt)("p",null,"Methods called to initialise new objects"),(0,r.kt)("p",null,"Private = Protected\nStatic function - Uses the methods on the object"),(0,r.kt)("p",null,"Constructors - A function which will automatically be called when object is created. Has same name as class. Used to initialise the object"),(0,r.kt)("p",null,"Default Constructor - used when you pass no parameters to new."),(0,r.kt)("h2",{id:"current-object-reference"},"Current object reference"),(0,r.kt)("p",null,"Methods (non-static member functions) know which object they are acting upon\n'this' is an object reference to the current object. Can miss it out and will be assumed.\nSometimes need to tell something else which object you are working on, and you commonly use 'this' to do so"),(0,r.kt)("h2",{id:"static-members"},"Static Members"),(0,r.kt)("p",null,"Static members (functions and data) are ",(0,r.kt)("strong",{parentName:"p"},"not")," associated with any specific object. Have not 'this'\nOften shared between all of the objects of that class, rather than a specific object"),(0,r.kt)("h1",{id:"arraylist"},"ArrayList"),(0,r.kt)("p",null,"Standard Java classes. Stores items as a list. Can grow. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"abstraction"),": don't need to know how it is implemented, only know its interface.")),(0,r.kt)("h2",{id:"imports-and-packages"},"Imports and Packages"),(0,r.kt)("p",null,"Code is organised into a hierarchical structure of packages\nAll standard classes are in packages and don't need to say which package the class you want to use is from\nArray list is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util")," package."),(0,r.kt)("h2",{id:"generic-types"},"Generic Types"),(0,r.kt)("p",null,"Array list is a generic type\nIn java, generic has  a",(0,r.kt)("inlineCode",{parentName:"p"},"<type>")," added at the end of the name to say what it is\nRuntime behaviour cannot depend upon the parameterised type"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Behaviour must be the same regardless of the type of object"),(0,r.kt)("li",{parentName:"ul"},"This is Parametric Polymorphic")),(0,r.kt)("h1",{id:"abstraction"},"Abstraction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Do not need to know how the classes are implemented in order to use them"),(0,r.kt)("li",{parentName:"ul"},"Hiding all but the information the user needs"),(0,r.kt)("li",{parentName:"ul"},"Also allows user to change the implementation of a class later if needed. Nothing that uses it should need to change - key for decomposition")),(0,r.kt)("h2",{id:"compositionaggregation"},"Composition/Aggregation"),(0,r.kt)("p",null,"Can be though of as one object containing, or 'having' another\nAggregation and Composition are both important in oops. Both mean that an object is composed of, or 'aggregates', other objects."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Aggregation"),": Items are contained in, or from a part of, the container item, but have a lifetime of their own\n",(0,r.kt)("strong",{parentName:"p"},"Composition"),": The composed items only last as long as the containing item lasts, so they cease existing when container does"))}p.isMDXComponent=!0}}]);