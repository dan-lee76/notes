"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[5475],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),d=i,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||n;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<n;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},41026:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var r=a(87462),i=(a(67294),a(3905));const n={},l="24.  Virtualisation & the Cloud",o={unversionedId:"Year2/2007/24",id:"Year2/2007/24",title:"24.  Virtualisation & the Cloud",description:"Cloud Computing",source:"@site/docs/Year2/2007/24.md",sourceDirName:"Year2/2007",slug:"/Year2/2007/24",permalink:"/Year2/2007/24",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"23. Virtualisation",permalink:"/Year2/2007/23"},next:{title:"25. Revision",permalink:"/Year2/2007/25"}},s={},u=[{value:"Cloud Computing",id:"cloud-computing",level:2},{value:"Basic Cloud Characteristics",id:"basic-cloud-characteristics",level:3},{value:"Caveats",id:"caveats",level:3},{value:"Virtualisation",id:"virtualisation",level:3},{value:"Cloud Service Models",id:"cloud-service-models",level:3},{value:"Iass",id:"iass",level:4},{value:"Pass",id:"pass",level:4},{value:"Saas",id:"saas",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"24--virtualisation--the-cloud"},"24.  Virtualisation & the Cloud"),(0,i.kt)("h2",{id:"cloud-computing"},"Cloud Computing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Computational paradigm"),(0,i.kt)("li",{parentName:"ul"},"Out-source your computation and storage needs to a well-managed data centre"),(0,i.kt)("li",{parentName:"ul"},"No worries about the physical machines: power, cooling, maintenance"),(0,i.kt)("li",{parentName:"ul"},"Virtualisation provides the necessary isolation to share multiple clients on a single physical machine")),(0,i.kt)("h3",{id:"basic-cloud-characteristics"},"Basic Cloud Characteristics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Number of characteristics define cloud data, applications services & infrastructure"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Remotely hosted")," - services or data are hosted on remote infrastructure No-need-to-know in terms of the underlying details of infrastructure, application interface with the infrastructure via the APIs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ubiquitous")," - services or data are available from anywhere"),(0,i.kt)("li",{parentName:"ul"},"Flexibility and elastically allow these systems to scale up and down will:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Utilising resources of all kinds"),(0,i.kt)("li",{parentName:"ul"},"CPU, storage, server capacity, load balancing, databases"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Commodified")," - result is utility computing model similar to traditional utilities, like gas and electricity ")),(0,i.kt)("h3",{id:"caveats"},"Caveats"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Easier for IT managers to deal with the computing"),(0,i.kt)("li",{parentName:"ul"},"Scalability, backups, depreciation, reliability, performance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rapid elasticity")," is currently one of the key challenges in cloud computing"),(0,i.kt)("li",{parentName:"ul"},"Capabilities can be rapidly and elastically provisioned "),(0,i.kt)("li",{parentName:"ul"},"To the consumer, resources often appear to be unlimited and can be purchased in any quantity at a time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Optimisation")," of the current usage will save energy!"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Prediction")," techniques may help alleviate the problem based on historical data")),(0,i.kt)("h3",{id:"virtualisation"},"Virtualisation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Allows to carry out multiple OS and carry out a clever management"),(0,i.kt)("li",{parentName:"ul"},"Challenge is to move the VM from the hardware that needs servicing to a new machine without taking it down at all"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Non-live migration")," - Instead of shutting down computer, just pause the VM (checkpointing), then copy over the memory pages used by the VM to the new hardware as quickly as possible"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Live Migration")," - Idea is to start moving the virtual machine while it is still operational")),(0,i.kt)("h3",{id:"cloud-service-models"},"Cloud Service Models"),(0,i.kt)("h4",{id:"iass"},"Iass"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provides resources of the underlying cloud infrastructure to customers"),(0,i.kt)("li",{parentName:"ul"},"VM's with different OSs and other visualised hardware, processing, storage networks "),(0,i.kt)("li",{parentName:"ul"},"End-user: typically a system administrator")),(0,i.kt)("h4",{id:"pass"},"Pass"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provides service in the form of a platform on which the customer's applications can run"),(0,i.kt)("li",{parentName:"ul"},"Tools to create your own applications"),(0,i.kt)("li",{parentName:"ul"},"End-user: developers")),(0,i.kt)("h4",{id:"saas"},"Saas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Provides service to customer in the form of software")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Applications that run on the cloud")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"End-user: regular users\n",(0,i.kt)("img",{src:a(81653).Z,width:"1205",height:"924"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Private - Implemented within the internal IT environment of an organisation ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Public - An organisation selling cloud services to the general public")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Community - Somewhere in between private and public")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Hybrid - Composed of two or more clouds\n",(0,i.kt)("img",{src:a(14160).Z,width:"1638",height:"424"})))))}p.isMDXComponent=!0},81653:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/20221212150155-2bfdb840bae32b66a4a7daa4ca17c31a.png"},14160:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/20221212150422-4919a385807ee6e2f31c48a9d64a0654.png"}}]);