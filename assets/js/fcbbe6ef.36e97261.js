"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[5169],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3825:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={},o="1. OO and Java Programming Refresher (1)",i={unversionedId:"Year2/2013/01",id:"Year2/2013/01",title:"1. OO and Java Programming Refresher (1)",description:"07/10/22",source:"@site/docs/Year2/2013/01.md",sourceDirName:"Year2/2013",slug:"/Year2/2013/01",permalink:"/Year2/2013/01",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"0. Introduction to Developing Maintainable Software",permalink:"/Year2/2013/00"},next:{title:"2. OO and Java Programming Refresher (2)",permalink:"/Year2/2013/02"}},s={},c=[{value:"Basic OO Concepts",id:"basic-oo-concepts",level:2},{value:"Encapsulation",id:"encapsulation",level:2},{value:"&quot;this&quot;",id:"this",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Passing Data",id:"passing-data",level:2},{value:"Overloaded Methods",id:"overloaded-methods",level:2},{value:"Static Fields",id:"static-fields",level:2},{value:"Static Methods",id:"static-methods",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-oo-and-java-programming-refresher-1"},"1. OO and Java Programming Refresher (1)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"07/10/22")),(0,r.kt)("h2",{id:"basic-oo-concepts"},"Basic OO Concepts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Abstraction: Simple things like objects represent more complex underlying code and data"),(0,r.kt)("li",{parentName:"ul"},"Encapsulation: The ability to protect some components of the object from external access"),(0,r.kt)("li",{parentName:"ul"},"Inheritance: The ability for a class to extend or override functionality of another class"),(0,r.kt)("li",{parentName:"ul"},"Polymorphism: The provision of a single interface to entities of different types",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Compile time polymorphism: Method overloading"),(0,r.kt)("li",{parentName:"ul"},"Run time polymorphism: Method overriding")))),(0,r.kt)("h2",{id:"encapsulation"},"Encapsulation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hiding the implementation details of a class (all fields and helper methods private)"),(0,r.kt)("li",{parentName:"ul"},"Helps with program maintenance: a change in one class does not affect other classes"),(0,r.kt)("li",{parentName:"ul"},"A client of a class interacts with the class only through well-documented public constructors and methods; this facilitates team development")),(0,r.kt)("h2",{id:"this"},'"this"'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Refers to the implicit parameter inside the class")),(0,r.kt)("h2",{id:"constructors"},"Constructors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Constructors of a class can call each other using the keyword "this" (this can avoid code duplicating)'),(0,r.kt)("li",{parentName:"ul"},"Constructors are invoked using the operator new."),(0,r.kt)("li",{parentName:"ul"},'Parameters passed to "new" must match the number, types and order of parameters expected by one of the constructors')),(0,r.kt)("h2",{id:"passing-data"},"Passing Data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Passing by value: Copying of data, where changes to the copied value are not reflected in the original value"),(0,r.kt)("li",{parentName:"ul"},"Passing by reference: aliasing of data, where changes to the aliased value are reflected in the original value"),(0,r.kt)("li",{parentName:"ul"},"Value associated with an object is actually a pointer, called an object reference. These are passed by value")),(0,r.kt)("h2",{id:"overloaded-methods"},"Overloaded Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Methods of the same class that have the same name but different numbers or types of parameters are called overloaded methods"),(0,r.kt)("li",{parentName:"ul"},"Compiler treats these as completely different methods"),(0,r.kt)("li",{parentName:"ul"},"The compiler knows which one to call based on the number and the types of the parameters passed to the method"),(0,r.kt)("li",{parentName:"ul"},"The return type alone is not sufficient for making a distinction between overloaded methods")),(0,r.kt)("h2",{id:"static-fields"},"Static Fields"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Static field (class field or variable): is shared by all objects of the class. Normally stored with class code, separately from instance variables"),(0,r.kt)("li",{parentName:"ul"},"Non-static field (instance field or instance variable): belongs to an individual object."),(0,r.kt)("li",{parentName:"ul"},"Usually static fields are NOT initialised in constructors; either in declarations or in public static methods or just use their default value."),(0,r.kt)("li",{parentName:"ul"},"If a class has only static fields, there is no point in creating objects of that class, all of them would be identical.")),(0,r.kt)("h2",{id:"static-methods"},"Static Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can access and manipulate class's statics fields. Belong to the class, not an instance of it."),(0,r.kt)("li",{parentName:"ul"},"Static methods cannot access instance fields or call methods of the class; instance methods can access all fields and call all methods of their class - both static and non static"),(0,r.kt)("li",{parentName:"ul"},"Usually take input from the parameters, then return some value")))}d.isMDXComponent=!0}}]);