"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[4145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},15080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={},i="6. Classes, Constructors & inline functions",o={unversionedId:"Year2/2006/06",id:"Year2/2006/06",title:"6. Classes, Constructors & inline functions",description:"21/02/23",source:"@site/docs/Year2/2006/06.md",sourceDirName:"Year2/2006",slug:"/Year2/2006/06",permalink:"/Year2/2006/06",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"5. Namespaces and introduction to standard class library",permalink:"/Year2/2006/05"},next:{title:"7.  Static members, this, references, const",permalink:"/Year2/2006/07"}},s={},u=[{value:"new &amp; delete",id:"new--delete",level:2},{value:"Classes and structs",id:"classes-and-structs",level:2},{value:"Constructors and Destructors",id:"constructors-and-destructors",level:2},{value:"Default Constructor",id:"default-constructor",level:3},{value:"Inline functions &amp; Member functions and data",id:"inline-functions--member-functions-and-data",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"6-classes-constructors--inline-functions"},"6. Classes, Constructors & inline functions"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"21/02/23")),(0,a.kt)("h2",{id:"new--delete"},"new & delete"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Same kind of problems occur with ",(0,a.kt)("inlineCode",{parentName:"li"},"new")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"delete")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"malloc()")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"free()"))),(0,a.kt)("h2",{id:"classes-and-structs"},"Classes and structs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In C++ you can add functions to ",(0,a.kt)("inlineCode",{parentName:"li"},"structs"),", use inheritance etc"),(0,a.kt)("li",{parentName:"ul"},"Do not treat them like C items"),(0,a.kt)("li",{parentName:"ul"},"Implementing some of these features may require that some hidden data is created"),(0,a.kt)("li",{parentName:"ul"},"Only thing difference is encapsulation, ",(0,a.kt)("inlineCode",{parentName:"li"},"struct")," is public, ",(0,a.kt)("inlineCode",{parentName:"li"},"class")," is private"),(0,a.kt)("li",{parentName:"ul"},"Good C++ practises",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Data only and no member function: use a struct. You get the guarantees about size and positions of member data that you get in a C ",(0,a.kt)("inlineCode",{parentName:"li"},"struct")),(0,a.kt)("li",{parentName:"ul"},"If you add member functions then use a ",(0,a.kt)("inlineCode",{parentName:"li"},"class")))),(0,a.kt)("li",{parentName:"ul"},"Data and methods in class are either ",(0,a.kt)("inlineCode",{parentName:"li"},"private")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"public")),(0,a.kt)("li",{parentName:"ul"},"Interface methods can be:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mutators")," - Change the 'state' of the object"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Accessors")," - Only query values, no changes")))),(0,a.kt)("h2",{id:"constructors-and-destructors"},"Constructors and Destructors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Constructor - Called when an object is created",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Created on the stack, when new is used"))),(0,a.kt)("li",{parentName:"ul"},"Destructor - Called when an object is destroyed",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When objects on stack are destroyed. When delete is used to destroy an object"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"malloc")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"free")," do not create objects")),(0,a.kt)("h3",{id:"default-constructor"},"Default Constructor"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Constructor which can be called with no parameters or has default values for all parameters"),(0,a.kt)("li",{parentName:"ul"},"Used whenever no parameters are specified")),(0,a.kt)("p",null,"Initialisation lists are used a LOT in C++"),(0,a.kt)("h2",{id:"inline-functions--member-functions-and-data"},"Inline functions & Member functions and data"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Act exactly line normal function but no function call is made"),(0,a.kt)("li",{parentName:"ul"},"Useful for small fast one time functions")))}d.isMDXComponent=!0}}]);