"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[1615],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1364:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={},s="Interfaces, Buttons and Event Handlers",u={unversionedId:"Year1/Programming Paradigms/Java/22.03.04 - Interfaces",id:"Year1/Programming Paradigms/Java/22.03.04 - Interfaces",title:"Interfaces, Buttons and Event Handlers",description:"Patterns",source:"@site/docs/Year1/1009 - Programming Paradigms/Java/22.03.04 - Interfaces.md",sourceDirName:"Year1/1009 - Programming Paradigms/Java",slug:"/Year1/Programming Paradigms/Java/22.03.04 - Interfaces",permalink:"/notes/docs/Year1/Programming Paradigms/Java/22.03.04 - Interfaces",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"22.03.03 - Layout Managers and Labels",permalink:"/notes/docs/Year1/Programming Paradigms/Java/22.03.03 - Layout Managers and Labels"},next:{title:"final",permalink:"/notes/docs/Year1/Programming Paradigms/Java/22.03.11 - Patterns and Inner classes"}},c={},m=[{value:"Patterns",id:"patterns",level:2},{value:"Layout managers",id:"layout-managers",level:2},{value:"Strategy Pattern",id:"strategy-pattern",level:2},{value:"Summary",id:"summary",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Observer Pattern",id:"observer-pattern",level:2},{value:"JButton",id:"jbutton",level:2}],p={toc:m};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"interfaces-buttons-and-event-handlers"},"Interfaces, Buttons and Event Handlers"),(0,l.kt)("h1",{id:"design-patterns"},"Design Patterns"),(0,l.kt)("h2",{id:"patterns"},"Patterns"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Patterns help us to identify ways in which a problem can be solved",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Can identify the problem"),(0,l.kt)("li",{parentName:"ul"},"Look at how people have solved this in the past"),(0,l.kt)("li",{parentName:"ul"},"Much less 'thinking' and 'working out'"),(0,l.kt)("li",{parentName:"ul"},"Avoid potential pitfalls later on"))),(0,l.kt)("li",{parentName:"ul"},"Usually many good ways to solve a problem")),(0,l.kt)("h2",{id:"layout-managers"},"Layout managers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Containers ask their layout manager to do the work"),(0,l.kt)("li",{parentName:"ul"},"Container calls functions in the base class Layout Manager"),(0,l.kt)("li",{parentName:"ul"},"Positioning of components"),(0,l.kt)("li",{parentName:"ul"},"Key design pattern feature: the container has delegated some of its work to another class - the layout manager")),(0,l.kt)("h2",{id:"strategy-pattern"},"Strategy Pattern"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This is a ",(0,l.kt)("strong",{parentName:"li"},"Behavioural Pattern")),(0,l.kt)("li",{parentName:"ul"},"Allow objects ",(0,l.kt)("em",{parentName:"li"},"behaviour")," to change at runtime"),(0,l.kt)("li",{parentName:"ul"},"Strategies should be interchangeable",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Should be same regardless of layout manager")))),(0,l.kt)("h1",{id:"sub-type-polymorphism-and-interfaces"},"(Sub-type) Polymorphism and Interfaces"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Normally hide the data inside the class, and expose some kind of interface to the outside world"),(0,l.kt)("li",{parentName:"ul"},"When using polymorphism to allow behaviour to be changed at runtime, don't care how it is implemented inside the class"),(0,l.kt)("li",{parentName:"ul"},"Only care what functions/methods are available"),(0,l.kt)("li",{parentName:"ul"},"An abstract method is a method without implementation")),(0,l.kt)("h2",{id:"summary"},"Summary"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"f87da27f009e80ac44f76bfdfeea4829.png",src:a(1546).Z,width:"615",height:"461"})),(0,l.kt)("h2",{id:"interfaces"},"Interfaces"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If not have implementations for any of the methods, can use an interface instead of a class"),(0,l.kt)("li",{parentName:"ul"},"Interface is a set of functions without implementations",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Sub class MUST implement ALL functions (or be abstract)"))),(0,l.kt)("li",{parentName:"ul"},"Subclass implements interfaces but extends a class"),(0,l.kt)("li",{parentName:"ul"},"Class can only extend one class"),(0,l.kt)("li",{parentName:"ul"},"Can 'implement' many interfaces ")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"0f2b520542f1af9f746049562e6f4094.png",src:a(5631).Z,width:"836",height:"469"})),(0,l.kt)("h1",{id:"jbuttons"},"JButtons"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java Swing uses the Observer Pattern to monitor event handlers"),(0,l.kt)("li",{parentName:"ul"},"Uses an interface, the ActionListener",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"An interface is just an abstract class which can use as a superclass")))),(0,l.kt)("h2",{id:"observer-pattern"},"Observer Pattern"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Is a common pattern to use when we want to notify other objects that something has happened",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Object to notify supports some interface (Observer)"),(0,l.kt)("li",{parentName:"ul"},"Notifying object keeps a list/array/etc of there to notify"),(0,l.kt)("li",{parentName:"ul"},"Notifying object considers these as the base class/interface and calls a method")))),(0,l.kt)("h2",{id:"jbutton"},"JButton"),(0,l.kt)("p",null,"To handle key presses, JButton needs an object to tell"))}d.isMDXComponent=!0},5631:function(e,t,a){t.Z=a.p+"assets/images/0f2b520542f1af9f746049562e6f4094-d405aa232bdfb1bc2dcbdc8c3ddb3c42.png"},1546:function(e,t,a){t.Z=a.p+"assets/images/f87da27f009e80ac44f76bfdfeea4829-9b2d96a39866c660d11a483550d9da86.png"}}]);