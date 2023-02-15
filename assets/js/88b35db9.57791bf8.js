"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[2142],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>y});var n=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function l(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):l(l({},t),e)),s},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(s),y=a,d=m["".concat(i,".").concat(y)]||m[y]||p[y]||r;return s?n.createElement(d,l(l({ref:t},c),{},{components:s})):n.createElement(d,l({ref:t},c))}));function y(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=s.length,l=new Array(r);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=s[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,s)}m.displayName="MDXCreateElement"},72153:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=s(87462),a=(s(67294),s(3905));const r={},l="10. Subsystems",o={unversionedId:"Year2/2013/10",id:"Year2/2013/10",title:"10. Subsystems",description:"31/10/22",source:"@site/docs/Year2/2013/10.md",sourceDirName:"Year2/2013",slug:"/Year2/2013/10",permalink:"/Year2/2013/10",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"9. Software Hierarchies",permalink:"/Year2/2013/09"},next:{title:"11. Protocols",permalink:"/Year2/2013/11"}},i={},u=[{value:"Subsystem",id:"subsystem",level:2},{value:"Collaboration Graphs",id:"collaboration-graphs",level:3},{value:"Superclass vs Subsystem",id:"superclass-vs-subsystem",level:3},{value:"Contracts",id:"contracts",level:3},{value:"Subsystems from Top",id:"subsystems-from-top",level:3},{value:"Subsystems are Conceptual",id:"subsystems-are-conceptual",level:3},{value:"Identifying Subsystems",id:"identifying-subsystems",level:2},{value:"Coupling",id:"coupling",level:3},{value:"Simplifying Interactions",id:"simplifying-interactions",level:2}],c={toc:u};function p(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"10-subsystems"},"10. Subsystems"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"31/10/22")),(0,a.kt)("h2",{id:"subsystem"},"Subsystem"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Inital design - classes, responsibilities, collaborations"),(0,a.kt)("li",{parentName:"ul"},"Second stage - analyse hierarchies, identify contracts"),(0,a.kt)("li",{parentName:"ul"},"New goals: Simplify patterns of communication, identify subsystems, design good interface to subsystems and classes")),(0,a.kt)("h3",{id:"collaboration-graphs"},"Collaboration Graphs"),(0,a.kt)("p",null,"Represent the flow of information in system during execution.\nCollaboration graph includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Classes and their hierarchies"),(0,a.kt)("li",{parentName:"ul"},"Contracts"),(0,a.kt)("li",{parentName:"ul"},"Collaborations")),(0,a.kt)("p",null,"Subsystems - Groups of classes that collaborate among themselves to support a set of contracts\nFrom outside - The classes work closely together to provide a clearly defined unit of functionality\nFrom inside - Classes can have some complex interrelationships of collaborations"),(0,a.kt)("h3",{id:"superclass-vs-subsystem"},"Superclass vs Subsystem"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Superclass groups a set of classes with identical responsibilities"),(0,a.kt)("li",{parentName:"ul"},"Subsystem is a group of classes with different responsibilities that can work together to fulfil a greater responsibilities ")),(0,a.kt)("h3",{id:"contracts"},"Contracts"),(0,a.kt)("p",null,"Subsystems also support contracts. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Collaboration from a class outside the subsystem to a class inside subsystem is redefined to be a collaboration with subsystem"),(0,a.kt)("li",{parentName:"ul"},"The contract used for collaboration becomes a subsystem contract. This delegates contract to the class that supports it")),(0,a.kt)("h3",{id:"subsystems-from-top"},"Subsystems from Top"),(0,a.kt)("p",null,"Help simplify a design near the end of design"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Used early in design:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Identify its major subsystems"),(0,a.kt)("li",{parentName:"ul"},"Treat them as classes"),(0,a.kt)("li",{parentName:"ul"},"Decompose subsystems into other subsystems"))),(0,a.kt)("li",{parentName:"ul"},"Used to start out a class:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Too complex or has too many responsibilities"),(0,a.kt)("li",{parentName:"ul"},"Gets subdivided into more classes that combine into subsystem")))),(0,a.kt)("h3",{id:"subsystems-are-conceptual"},"Subsystems are Conceptual"),(0,a.kt)("p",null,"Only conceptual units"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"They don't exist at execution time but their classes do"),(0,a.kt)("li",{parentName:"ul"},"Don't directly fulfil responsibilities ")),(0,a.kt)("h2",{id:"identifying-subsystems"},"Identifying Subsystems"),(0,a.kt)("p",null,"Look for strongly coupled classes\nCoupling is a measure of how much they depend on each other"),(0,a.kt)("h3",{id:"coupling"},"Coupling"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Frequently used collaborations"),(0,a.kt)("li",{parentName:"ul"},"A web of many collaborations among a set of classes that are connected to reset of the graph with fewer collaborations ")),(0,a.kt)("h2",{id:"simplifying-interactions"},"Simplifying Interactions"),(0,a.kt)("p",null,"Should help to simplify class interactions "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Complex interactions are hard to maintain, lead to spaghetti code, and are generally to be avoided"),(0,a.kt)("li",{parentName:"ul"},"Area of complexity in graph should be focus of effort"),(0,a.kt)("li",{parentName:"ul"},"Proposed change should simplify graph")))}p.isMDXComponent=!0}}]);