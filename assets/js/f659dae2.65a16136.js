"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[602],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7144:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},o="12. Software Design Patterns",s={unversionedId:"Year2/2013/12",id:"Year2/2013/12",title:"12. Software Design Patterns",description:"07/11/22",source:"@site/docs/Year2/2013/12.md",sourceDirName:"Year2/2013",slug:"/Year2/2013/12",permalink:"/Year2/2013/12",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"11. Protocols",permalink:"/Year2/2013/11"},next:{title:"13. Introduction to Maven & Gradle",permalink:"/Year2/2013/13"}},l={},c=[{value:"Design Patterns",id:"design-patterns",level:2},{value:"Creational Patterns",id:"creational-patterns",level:3},{value:"Structural Patterns",id:"structural-patterns",level:3},{value:"Behavioural Patterns",id:"behavioural-patterns",level:3},{value:"Singleton",id:"singleton",level:2},{value:"Benefits",id:"benefits",level:3},{value:"Challenges",id:"challenges",level:3},{value:"The Factory Patterns",id:"the-factory-patterns",level:2},{value:"Abstract Factories",id:"abstract-factories",level:3},{value:"Participants in the Factory",id:"participants-in-the-factory",level:3},{value:"<em>Notes</em>",id:"notes",level:3},{value:"Scope of use",id:"scope-of-use",level:3},{value:"Adaptor Pattern (Structural)",id:"adaptor-pattern-structural",level:2},{value:"Observer Pattern",id:"observer-pattern",level:2},{value:"MVC - Model-View-Controller",id:"mvc---model-view-controller",level:2},{value:"Benefits",id:"benefits-1",level:3}],u={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"12-software-design-patterns"},"12. Software Design Patterns"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"07/11/22")),(0,r.kt)("h2",{id:"design-patterns"},"Design Patterns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A solution that addresses problem which repeatedly occurs, describes the core of the solution to that problem in such a way that it can use the pattern repeatedly"),(0,r.kt)("li",{parentName:"ul"},"Pattern provides an abstract description of a design problem and how a general arrangement of elements solves it"),(0,r.kt)("li",{parentName:"ul"},"Identifies the participating classes and instances, their roles and collaborations, and the distribution of responsibilities.")),(0,r.kt)("p",null,"Pattern specification has four essential elements:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Name: Usable handle to describe a design problem"),(0,r.kt)("li",{parentName:"ol"},"Problem: When to apply a pattern"),(0,r.kt)("li",{parentName:"ol"},"Solution: Describes the elements that make up the design and the relationship"),(0,r.kt)("li",{parentName:"ol"},"Consequences: Describes the results and trade-offs of applying the pattern")),(0,r.kt)("p",null,"Organised into two separate ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Purpose - Reflects what the pattern does",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Creational: Concern the process of object creation"),(0,r.kt)("li",{parentName:"ul"},"Structural: Deal with the composition of class and objects"),(0,r.kt)("li",{parentName:"ul"},"Behavioural: Characterise the way in which classes and objects interact and distribute responsibility"))),(0,r.kt)("li",{parentName:"ul"},"Scope - Specifies whether the pattern applies to classes or objects",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Class: These patterns deal with relationships between lasses and sub-classes"),(0,r.kt)("li",{parentName:"ul"},"Object: Deal with object relationships")))),(0,r.kt)("h3",{id:"creational-patterns"},"Creational Patterns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Abstract factory  - Interface to create related objects without declaring the concrete class"),(0,r.kt)("li",{parentName:"ul"},"Builder - The same construction process can create different representations"),(0,r.kt)("li",{parentName:"ul"},"Factory Method - Defers instantiation to sub classes"),(0,r.kt)("li",{parentName:"ul"},"Prototype - Create new objects by copying the prototype"),(0,r.kt)("li",{parentName:"ul"},"Singleton - Ensures that one and only one instance of a class is created")),(0,r.kt)("h3",{id:"structural-patterns"},"Structural Patterns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adaptor - Provides compatible interfaces for classes that couldn't work together otherwise"),(0,r.kt)("li",{parentName:"ul"},"Bridge - Decoupling of abstraction and implementation so that the two can be independent"),(0,r.kt)("li",{parentName:"ul"},"Composite - Put objects into a tree structure to represent the hierarchies"),(0,r.kt)("li",{parentName:"ul"},"Decorator - Lets individual instances have addition of dynamically adding new function"),(0,r.kt)("li",{parentName:"ul"},"Facade - Providing a unified interface to a set of interfaces"),(0,r.kt)("li",{parentName:"ul"},"Flyweight - Use sharing to support large numbers of complex objects"),(0,r.kt)("li",{parentName:"ul"},"Proxy - Provide a placeholder for another object to access its controls")),(0,r.kt)("h3",{id:"behavioural-patterns"},"Behavioural Patterns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chain of responsibility - Give more than one object the change to handle a request"),(0,r.kt)("li",{parentName:"ul"},"Command - Encapsulate a request as an object"),(0,r.kt)("li",{parentName:"ul"},"Interpreter - Convert problems expressed in natural langue into a representation"),(0,r.kt)("li",{parentName:"ul"},"Iterator - Access to objects without exposing underlying representation"),(0,r.kt)("li",{parentName:"ul"},"Mediator - Promotes loose coupling by preventing objects from referring to each other"),(0,r.kt)("li",{parentName:"ul"},"Memento - Capture and display an objects internal state"),(0,r.kt)("li",{parentName:"ul"},"Observer - Define a one to many relationship so that when one object changes state, all its dependants are notified."),(0,r.kt)("li",{parentName:"ul"},"State - Allow an object to alter its behaviour when its internal state changes"),(0,r.kt)("li",{parentName:"ul"},"Strategy - Define and encapsulate a family of algorithm. Let the algorithm vary independently of who is using it"),(0,r.kt)("li",{parentName:"ul"},"Template Method - Define the skeleton of an algorithm, and let sub classes redefine certain steps without changing the structure of the algorithm"),(0,r.kt)("li",{parentName:"ul"},"Visitor - Define a new operation without changing the classes")),(0,r.kt)("h2",{id:"singleton"},"Singleton"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Single instance of a class to exist in the system"),(0,r.kt)("li",{parentName:"ul"},"Ensure a class only has one instance, and provide a single point of access to it."),(0,r.kt)("li",{parentName:"ul"},"Need to have one instance easily accessible and we need to ensure additional instances of the class can not be created")),(0,r.kt)("h3",{id:"benefits"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Controlled access to sole instance "),(0,r.kt)("li",{parentName:"ul"},"Reduced namespace"),(0,r.kt)("li",{parentName:"ul"},"Can easily transform into concrete factory by permitting a variable number of instances")),(0,r.kt)("h3",{id:"challenges"},"Challenges"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Concurrent requests"),(0,r.kt)("li",{parentName:"ul"},"Threading"),(0,r.kt)("li",{parentName:"ul"},"Might not have all the information needed at the point of static initialisation ")),(0,r.kt)("h2",{id:"the-factory-patterns"},"The Factory Patterns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creational patterns which abstract and encapsulate the object instantiation process"),(0,r.kt)("li",{parentName:"ul"},"Hide how objects are created and service the system independent of how its objects are created"),(0,r.kt)("li",{parentName:"ul"},"Class creational patterns, focus on use of inheritance"),(0,r.kt)("li",{parentName:"ul"},"Factory method pattern can save you from awkward dependencies in OOD by letting you define an interface for creating an object."),(0,r.kt)("li",{parentName:"ul"},"Used when the class does not know precisely which class of objects it must create")),(0,r.kt)("h3",{id:"abstract-factories"},"Abstract Factories"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What we just discussed were concrete factories"),(0,r.kt)("li",{parentName:"ul"},"Go one step further with the abstract factory"),(0,r.kt)("li",{parentName:"ul"},"An abstract factory is a factory of factories"),(0,r.kt)("li",{parentName:"ul"},"Used when you need an interface for creating related objects without specifying their classes")),(0,r.kt)("h3",{id:"participants-in-the-factory"},"Participants in the Factory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Abstract Factory - declares an interface for operations that create abstract products"),(0,r.kt)("li",{parentName:"ul"},"Concrete Factory - Implements operations to create concrete products"),(0,r.kt)("li",{parentName:"ul"},"Abstract Product - Declares an interface for a type of product objects"),(0,r.kt)("li",{parentName:"ul"},"Product - Defines a product to be create by the corresponding Concrete Factory ; implements the abstract product interface"),(0,r.kt)("li",{parentName:"ul"},"Client - uses the interfaces declared by the abstract factory and abstract product classes")),(0,r.kt)("h3",{id:"notes"},(0,r.kt)("em",{parentName:"h3"},"Notes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Abstract Factory class determines the actual type of the concrete object and creates it, it returns an abstract pointer to the concrete object just created"),(0,r.kt)("li",{parentName:"ul"},"This prevents the client from knowing anything about the actual creation of the object"),(0,r.kt)("li",{parentName:"ul"},"The objects of the concrete type, created by the factory, are accessed by the client only through the abstract interface")),(0,r.kt)("h3",{id:"scope-of-use"},"Scope of use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When the system needs to be independent from the way the products it works with are created"),(0,r.kt)("li",{parentName:"ul"},"If the system is or should be configured to work with multiple families of products"),(0,r.kt)("li",{parentName:"ul"},"If a family of products is designed to work only all together"),(0,r.kt)("li",{parentName:"ul"},"When the creation of a library of products is needed, for which is relevant only the interface and not the implementation ")),(0,r.kt)("h2",{id:"adaptor-pattern-structural"},"Adaptor Pattern (Structural)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pattern involves a single class which is responsible to join functionalities of independent or incompatible interfaces",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Class adaptor - Relies on multiple inheritance"),(0,r.kt)("li",{parentName:"ul"},"Object adaptor - Relies on object composition")))),(0,r.kt)("h2",{id:"observer-pattern"},"Observer Pattern"),(0,r.kt)("p",null,"Used when there is one-to-many relationship between objects such as if one object is modified, its dependent objects are to be notified automatically. "),(0,r.kt)("p",null,"Loose Coupling - Two objects are loosely coupled if they interact but have very little knowledge of each other"),(0,r.kt)("h2",{id:"mvc---model-view-controller"},"MVC - Model-View-Controller"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The classic design pattern"),(0,r.kt)("li",{parentName:"ul"},"Used for data-driven user applications, and tasks can be organised into sub-systems"),(0,r.kt)("li",{parentName:"ul"},"Model (Data Interface) - Communicates with data source to read and write data"),(0,r.kt)("li",{parentName:"ul"},"View (Visual Representation of Data) - Requests model for data and prevents it in a user-friendly visual display"),(0,r.kt)("li",{parentName:"ul"},"Controller (User Interface) - Listens to the user in order to request data or state in the GUI and notify the model or view accordingly")),(0,r.kt)("h3",{id:"benefits-1"},"Benefits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Organisation of code - Maintainable, easy to find what you need"),(0,r.kt)("li",{parentName:"ul"},"Ease of development - Build and test components/subsystems independently"),(0,r.kt)("li",{parentName:"ul"},"Flexibility - Swap out views for different presentations of the same data. Swap out models to change data storage without affecting user")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(33221).Z,width:"491",height:"159"})))}p.isMDXComponent=!0},33221:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);