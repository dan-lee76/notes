"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[5979],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=r,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},l="Class Diagrams",c={unversionedId:"Year1/Programming Paradigms/Java/22.02.24 - Class Diagrams & Exceptions",id:"Year1/Programming Paradigms/Java/22.02.24 - Class Diagrams & Exceptions",title:"Class Diagrams",description:"Use diagrams to represent the relationship between classes.",source:"@site/docs/Year1/1009 - Programming Paradigms/Java/22.02.24 - Class Diagrams & Exceptions.md",sourceDirName:"Year1/1009 - Programming Paradigms/Java",slug:"/Year1/Programming Paradigms/Java/22.02.24 - Class Diagrams & Exceptions",permalink:"/notes/docs/Year1/Programming Paradigms/Java/22.02.24 - Class Diagrams & Exceptions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"22.02.18 - Inheritance and Class Diagrams",permalink:"/notes/docs/Year1/Programming Paradigms/Java/22.02.18 - Inheritance and Class Diagrams"},next:{title:"Class Libraries",permalink:"/notes/docs/Year1/Programming Paradigms/Java/22.02.25 - Swing GUIs"}},p={},u=[{value:"Object",id:"object",level:2},{value:"Background Info",id:"background-info",level:2},{value:"RuntimeException",id:"runtimeexception",level:2},{value:"Throwing your own exceptions",id:"throwing-your-own-exceptions",level:2},{value:"Object lifetime in Java",id:"object-lifetime-in-java",level:2}],m={toc:u};function f(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"class-diagrams"},"Class Diagrams"),(0,o.kt)("p",null,"Use diagrams to represent the relationship between classes. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"352f9b2d3f5195640e5c50f4dfe5fa0f.png",src:n(202).Z,width:"850",height:"499"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Aggregation (containment)"),": is a specialised form of association. Defines ",(0,o.kt)("strong",{parentName:"p"},"one way relationship")," that specifies a ",(0,o.kt)("strong",{parentName:"p"},"'has a'")," relationship between two classes.\n",(0,o.kt)("strong",{parentName:"p"},"Association"),": Indicates that a class knows about, and holds a reference to another class.\n",(0,o.kt)("strong",{parentName:"p"},"Composition"),": Way to combine objects or data types into more complex ones"),(0,o.kt)("h2",{id:"object"},"Object"),(0,o.kt)("p",null,"All classes in java are subclasses of Object. If dont say what a class extends then it extends the class called Object"),(0,o.kt)("p",null,"Object has a few methods of its own. Every object inherits these and can add their own implementation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"toString()")," - get a String object to represent it"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"equals (Object obOther)")," - Determine whether two objects are equivalent"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hashCode()")," - Get unique id for the object"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getClass()")," - Get a class object for the object")),(0,o.kt)("h1",{id:"exceptions"},"Exceptions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Like extra return value types to report exceptional events")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When is thrown, function will end unless the exception is caught")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Could be a problem"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Function COULD raise an exception then you must either:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Catch the exception in the function"),(0,o.kt)("li",{parentName:"ul"},"Label the function so that it is clear that it raises an exception"))),(0,o.kt)("li",{parentName:"ul"},"Least the caller knows of the risk"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Allows you to report error conditions that can be handled, not catching will cause an end to the program"))),(0,o.kt)("h2",{id:"background-info"},"Background Info"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Can throw any Throwable object, not just an Exception object")),(0,o.kt)("h2",{id:"runtimeexception"},"RuntimeException"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Special subclass of Exception. Covers things that are not predictable or are common from many places and you don't want to have to always check for"),(0,o.kt)("li",{parentName:"ul"},"Don't have to declare throwing a RuntimeException"),(0,o.kt)("li",{parentName:"ul"},"Avoid using them unless you don't want to force the claler to check for the exception")),(0,o.kt)("h2",{id:"throwing-your-own-exceptions"},"Throwing your own exceptions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Can throw your own exception types to indicate an error that you cant indicate through a return value"),(0,o.kt)("li",{parentName:"ul"},"Create sub-class of Exception")),(0,o.kt)("h2",{id:"object-lifetime-in-java"},"Object lifetime in Java"),(0,o.kt)("p",null,"Compiler creates .class files from .java files which are platform independent. Can compile on one os and execute on another\nJVM is responsible for everything else inc memory management etc"))}f.isMDXComponent=!0},202:function(e,t,n){t.Z=n.p+"assets/images/352f9b2d3f5195640e5c50f4dfe5fa0f-f087b0a6a2be2fd18d0557fbea9a4d92.png"}}]);