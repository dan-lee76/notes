"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[9563],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2708:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},c="Constructors",l={unversionedId:"Year1/Programming Paradigms/Java/22.02.17 - Aggregation",id:"Year1/Programming Paradigms/Java/22.02.17 - Aggregation",title:"Constructors",description:"Methods called to initialise new objects",source:"@site/docs/Year1/1009 - Programming Paradigms/Java/22.02.17 - Aggregation.md",sourceDirName:"Year1/1009 - Programming Paradigms/Java",slug:"/Year1/Programming Paradigms/Java/22.02.17 - Aggregation",permalink:"/Year1/Programming Paradigms/Java/22.02.17 - Aggregation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"22.02.10 - Introduction to Objected Oriented Desig",permalink:"/Year1/Programming Paradigms/Java/22.02.10 - Introduction to Objected Oriented Desig"},next:{title:"22.02.18 - Inheritance and Class Diagrams",permalink:"/Year1/Programming Paradigms/Java/22.02.18 - Inheritance and Class Diagrams"}},u={},m=[{value:"Current object reference",id:"current-object-reference",level:2},{value:"Static Members",id:"static-members",level:2},{value:"Imports and Packages",id:"imports-and-packages",level:2},{value:"Generic Types",id:"generic-types",level:2},{value:"Composition/Aggregation",id:"compositionaggregation",level:2}],p={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"constructors"},"Constructors"),(0,o.kt)("p",null,"Methods called to initialise new objects"),(0,o.kt)("p",null,"Private = Protected\nStatic function - Uses the methods on the object"),(0,o.kt)("p",null,"Constructors - A function which will automatically be called when object is created. Has same name as class. Used to initialise the object"),(0,o.kt)("p",null,"Default Constructor - used when you pass no parameters to new."),(0,o.kt)("h2",{id:"current-object-reference"},"Current object reference"),(0,o.kt)("p",null,"Methods (non-static member functions) know which object they are acting upon\n'this' is an object reference to the current object. Can miss it out and will be assumed.\nSometimes need to tell something else which object you are working on, and you commonly use 'this' to do so"),(0,o.kt)("h2",{id:"static-members"},"Static Members"),(0,o.kt)("p",null,"Static members (functions and data) are ",(0,o.kt)("strong",{parentName:"p"},"not")," associated with any specific object. Have not 'this'\nOften shared between all of the objects of that class, rather than a specific object"),(0,o.kt)("h1",{id:"arraylist"},"ArrayList"),(0,o.kt)("p",null,"Standard Java classes. Stores items as a list. Can grow. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"abstraction"),": don't need to know how it is implemented, only know its interface.")),(0,o.kt)("h2",{id:"imports-and-packages"},"Imports and Packages"),(0,o.kt)("p",null,"Code is organised into a hierarchical structure of packages\nAll standard classes are in packages and don't need to say which package the class you want to use is from\nArray list is in the ",(0,o.kt)("inlineCode",{parentName:"p"},"java.util")," package."),(0,o.kt)("h2",{id:"generic-types"},"Generic Types"),(0,o.kt)("p",null,"Array list is a generic type\nIn java, generic has  a",(0,o.kt)("inlineCode",{parentName:"p"},"<type>")," added at the end of the name to say what it is\nRuntime behaviour cannot depend upon the parameterised type"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Behaviour must be the same regardless of the type of object"),(0,o.kt)("li",{parentName:"ul"},"This is Parametric Polymorphic")),(0,o.kt)("h1",{id:"abstraction"},"Abstraction"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Do not need to know how the classes are implemented in order to use them"),(0,o.kt)("li",{parentName:"ul"},"Hiding all but the information the user needs"),(0,o.kt)("li",{parentName:"ul"},"Also allows user to change the implementation of a class later if needed. Nothing that uses it should need to change - key for decomposition")),(0,o.kt)("h2",{id:"compositionaggregation"},"Composition/Aggregation"),(0,o.kt)("p",null,"Can be though of as one object containing, or 'having' another\nAggregation and Composition are both important in oops. Both mean that an object is composed of, or 'aggregates', other objects."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Aggregation"),": Items are contained in, or from a part of, the container item, but have a lifetime of their own\n",(0,o.kt)("strong",{parentName:"p"},"Composition"),": The composed items only last as long as the containing item lasts, so they cease existing when container does"))}d.isMDXComponent=!0}}]);