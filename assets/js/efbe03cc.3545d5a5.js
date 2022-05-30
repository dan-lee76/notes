"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[608],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(a),g=n,f=m["".concat(l,".").concat(g)]||m[g]||p[g]||i;return a?r.createElement(f,s(s({ref:t},u),{},{components:a})):r.createElement(f,s({ref:t},u))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},844:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),s=["components"],o={},l="Class Libraries",c={unversionedId:"Year1/Programming Paradigms/Java/22.02.25 - Swing GUIs",id:"Year1/Programming Paradigms/Java/22.02.25 - Swing GUIs",title:"Class Libraries",description:"Have a library of classes available",source:"@site/docs/Year1/1009 - Programming Paradigms/Java/22.02.25 - Swing GUIs.md",sourceDirName:"Year1/1009 - Programming Paradigms/Java",slug:"/Year1/Programming Paradigms/Java/22.02.25 - Swing GUIs",permalink:"/Year1/Programming Paradigms/Java/22.02.25 - Swing GUIs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"Class Diagrams",permalink:"/Year1/Programming Paradigms/Java/22.02.24 - Class Diagrams & Exceptions"},next:{title:"22.03.03 - Layout Managers and Labels",permalink:"/Year1/Programming Paradigms/Java/22.03.03 - Layout Managers and Labels"}},u={},p=[{value:"Java swing user interface classes",id:"java-swing-user-interface-classes",level:2},{value:"Aggregation",id:"aggregation",level:3},{value:"Inheritance",id:"inheritance",level:3}],m={toc:p};function g(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"class-libraries"},"Class Libraries"),(0,i.kt)("p",null,"Have a library of classes available\nMay just re-use existing classes to make the program. Can make objects of a class type"),(0,i.kt)("p",null,"Nouns: Used to help identify objects\nVerbs: Used to identify functionality"),(0,i.kt)("p",null,"Currently considering ER-diagrams"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ER diagrams we care about the data, how to group it and how it is related to other data"),(0,i.kt)("li",{parentName:"ul"},"In OO class diagrams we care about what is done and what is doing it."),(0,i.kt)("li",{parentName:"ul"},"If have a class library we will usually start by looking at what it can do and fit our plans around it - work out how to use it for our needs"),(0,i.kt)("li",{parentName:"ul"},"Java Swing provides a lot of 'base classes' that can create objects from, or inherit own classes to alter behaviour.")),(0,i.kt)("h2",{id:"java-swing-user-interface-classes"},"Java swing user interface classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Top Level Window: JFrame"),(0,i.kt)("li",{parentName:"ul"},"Controls/Components",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"JButton"),(0,i.kt)("li",{parentName:"ul"},"JLabel"),(0,i.kt)("li",{parentName:"ul"},"JTextField"),(0,i.kt)("li",{parentName:"ul"},"JListbox"))),(0,i.kt)("li",{parentName:"ul"},"Other useful classes include font and layout managers")),(0,i.kt)("p",null,"Object references are not objects. The store references to objects. Similar to a pointer\nObjects get created using new.\nStatic variables are ",(0,i.kt)("strong",{parentName:"p"},"NOT")," in objects - they are shared\nStatic methods are ",(0,i.kt)("strong",{parentName:"p"},"NOT")," associated with a specific object"),(0,i.kt)("h3",{id:"aggregation"},"Aggregation"),(0,i.kt)("p",null,"If the new class must have the original class. Should use aggregation if part of the interface is not used or has to be changed to avoid an illogical situation. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Create new functionality by taking other classes and combining them into a new class. Attach an common interface to this new class for interoperability with other code")),(0,i.kt)("h3",{id:"inheritance"},"Inheritance"),(0,i.kt)("p",null,"If the new class is more or less as the original class. The new class is now a subclass of the original class. Only use if we need almost all of the functionality without major changes."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Extend the functionality of a class by creating a subclass. Override superclass members in the subclasses to provide new functionality. Make methods abstract/virtual to force subclasses to "fill-in-the-blanks" when the superclass wants a particular interface but is agnostic about its implementation.')))}g.isMDXComponent=!0}}]);