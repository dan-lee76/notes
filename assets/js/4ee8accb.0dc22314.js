"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[5979],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},90089:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},o="Class Diagrams",l={unversionedId:"Year1/Programming Paradigms/Java/22.02.24 - Class Diagrams & Exceptions",id:"Year1/Programming Paradigms/Java/22.02.24 - Class Diagrams & Exceptions",title:"Class Diagrams",description:"Use diagrams to represent the relationship between classes.",source:"@site/docs/Year1/1009 - Programming Paradigms/Java/22.02.24 - Class Diagrams & Exceptions.md",sourceDirName:"Year1/1009 - Programming Paradigms/Java",slug:"/Year1/Programming Paradigms/Java/22.02.24 - Class Diagrams & Exceptions",permalink:"/Year1/Programming Paradigms/Java/22.02.24 - Class Diagrams & Exceptions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"22.02.18 - Inheritance and Class Diagrams",permalink:"/Year1/Programming Paradigms/Java/22.02.18 - Inheritance and Class Diagrams"},next:{title:"Class Libraries",permalink:"/Year1/Programming Paradigms/Java/22.02.25 - Swing GUIs"}},s={},c=[{value:"Object",id:"object",level:2},{value:"Background Info",id:"background-info",level:2},{value:"RuntimeException",id:"runtimeexception",level:2},{value:"Throwing your own exceptions",id:"throwing-your-own-exceptions",level:2},{value:"Object lifetime in Java",id:"object-lifetime-in-java",level:2}],p={toc:c};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-diagrams"},"Class Diagrams"),(0,r.kt)("p",null,"Use diagrams to represent the relationship between classes. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"352f9b2d3f5195640e5c50f4dfe5fa0f.png",src:a(70202).Z,width:"850",height:"499"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Aggregation (containment)"),": is a specialised form of association. Defines ",(0,r.kt)("strong",{parentName:"p"},"one way relationship")," that specifies a ",(0,r.kt)("strong",{parentName:"p"},"'has a'")," relationship between two classes.\n",(0,r.kt)("strong",{parentName:"p"},"Association"),": Indicates that a class knows about, and holds a reference to another class.\n",(0,r.kt)("strong",{parentName:"p"},"Composition"),": Way to combine objects or data types into more complex ones"),(0,r.kt)("h2",{id:"object"},"Object"),(0,r.kt)("p",null,"All classes in java are subclasses of Object. If dont say what a class extends then it extends the class called Object"),(0,r.kt)("p",null,"Object has a few methods of its own. Every object inherits these and can add their own implementation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toString()")," - get a String object to represent it"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"equals (Object obOther)")," - Determine whether two objects are equivalent"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hashCode()")," - Get unique id for the object"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getClass()")," - Get a class object for the object")),(0,r.kt)("h1",{id:"exceptions"},"Exceptions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Like extra return value types to report exceptional events")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When is thrown, function will end unless the exception is caught")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Could be a problem"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Function COULD raise an exception then you must either:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Catch the exception in the function"),(0,r.kt)("li",{parentName:"ul"},"Label the function so that it is clear that it raises an exception"))),(0,r.kt)("li",{parentName:"ul"},"Least the caller knows of the risk"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Allows you to report error conditions that can be handled, not catching will cause an end to the program"))),(0,r.kt)("h2",{id:"background-info"},"Background Info"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can throw any Throwable object, not just an Exception object")),(0,r.kt)("h2",{id:"runtimeexception"},"RuntimeException"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Special subclass of Exception. Covers things that are not predictable or are common from many places and you don't want to have to always check for"),(0,r.kt)("li",{parentName:"ul"},"Don't have to declare throwing a RuntimeException"),(0,r.kt)("li",{parentName:"ul"},"Avoid using them unless you don't want to force the claler to check for the exception")),(0,r.kt)("h2",{id:"throwing-your-own-exceptions"},"Throwing your own exceptions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can throw your own exception types to indicate an error that you cant indicate through a return value"),(0,r.kt)("li",{parentName:"ul"},"Create sub-class of Exception")),(0,r.kt)("h2",{id:"object-lifetime-in-java"},"Object lifetime in Java"),(0,r.kt)("p",null,"Compiler creates .class files from .java files which are platform independent. Can compile on one os and execute on another\nJVM is responsible for everything else inc memory management etc"))}m.isMDXComponent=!0},70202:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/352f9b2d3f5195640e5c50f4dfe5fa0f-f087b0a6a2be2fd18d0557fbea9a4d92.png"}}]);