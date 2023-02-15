"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[2720],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),b=r,f=m["".concat(s,".").concat(b)]||m[b]||u[b]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},i="8. Collaborations & Class Relationships",l={unversionedId:"Year2/2013/08",id:"Year2/2013/08",title:"8. Collaborations & Class Relationships",description:"31/10/22",source:"@site/docs/Year2/2013/08.md",sourceDirName:"Year2/2013",slug:"/Year2/2013/08",permalink:"/Year2/2013/08",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"7. Software Design: Responsibilities",permalink:"/Year2/2013/07"},next:{title:"9. Software Hierarchies",permalink:"/Year2/2013/09"}},s={},c=[{value:"Collaborations",id:"collaborations",level:2},{value:"Patterns of class collaborations and relationships",id:"patterns-of-class-collaborations-and-relationships",level:2},{value:"Composite vs. Container Objects",id:"composite-vs-container-objects",level:2},{value:"Composite objects",id:"composite-objects",level:3},{value:"Container objects",id:"container-objects",level:3},{value:"Recording Collaborations",id:"recording-collaborations",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"8-collaborations--class-relationships"},"8. Collaborations & Class Relationships"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"31/10/22")),(0,r.kt)("h2",{id:"collaborations"},"Collaborations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Represents a request form a client to a server client have responsibilities to perform.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Fulfil that responsibility by itself"))),(0,r.kt)("li",{parentName:"ul"},"Server provides services representing its responsibilities",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Single collaboration is one-way from client to server"))),(0,r.kt)("li",{parentName:"ul"},"Doesn't mean information only flows in one direction",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Each collaboration addresses one responsibility in server. Each helps to fulfil one responsibility of client - but, one client responsibility may need many collaborations")))),(0,r.kt)("h2",{id:"patterns-of-class-collaborations-and-relationships"},"Patterns of class collaborations and relationships"),(0,r.kt)("p",null,"Represent flow of control and information in system. Also defines the communication pattern\nLook for dependencies among responsibilities"),(0,r.kt)("p",null,"For each responsibility of each class:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Is class capable of fulfilling the responsibility itself?"),(0,r.kt)("li",{parentName:"ol"},"No? What does it need?"),(0,r.kt)("li",{parentName:"ol"},"From what classes can it acquire what it needs"),(0,r.kt)("li",{parentName:"ol"},"Shared responsibilities also define collaborations\nFor each class:"),(0,r.kt)("li",{parentName:"ol"},"What does this class do or know?"),(0,r.kt)("li",{parentName:"ol"},"What other classes need these actions or information?")),(0,r.kt)("h2",{id:"composite-vs-container-objects"},"Composite vs. Container Objects"),(0,r.kt)("h3",{id:"composite-objects"},"Composite objects"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Object hierarchies")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each component has a different role to play in composite(responsible for parts)"),(0,r.kt)("li",{parentName:"ul"},"Parts do not know about composite, but provide service to it"),(0,r.kt)("li",{parentName:"ul"},"Composite collaborates with its components")),(0,r.kt)("h3",{id:"container-objects"},"Container objects"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"sets, arrays, lists, etc")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Elements in a container are functionally identical; all serve same role"),(0,r.kt)("li",{parentName:"ul"},"Containers may need to collaborate with their elements")),(0,r.kt)("h2",{id:"recording-collaborations"},"Recording Collaborations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Write collaborating server classes."),(0,r.kt)("li",{parentName:"ul"},"If client responsibility needs 2 collaborations with same server class, write twice"),(0,r.kt)("li",{parentName:"ul"},"If responsibility requires collaboration with another instance of same (or parent) class, include it")))}u.isMDXComponent=!0}}]);