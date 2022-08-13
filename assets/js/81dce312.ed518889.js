"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[9290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},o="Modelling Req.",s={unversionedId:"Year1/Software Engineer/Reading/Modelling_Validating Requirements",id:"Year1/Software Engineer/Reading/Modelling_Validating Requirements",title:"Modelling Req.",description:"User Stories",source:"@site/docs/Year1/1003 - Software Engineer/Reading/Modelling_Validating Requirements.md",sourceDirName:"Year1/1003 - Software Engineer/Reading",slug:"/Year1/Software Engineer/Reading/Modelling_Validating Requirements",permalink:"/Year1/Software Engineer/Reading/Modelling_Validating Requirements",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"GANTT and Agile Planning",permalink:"/Year1/Software Engineer/Reading/Gantt Charts and Agile Planning"},next:{title:"Personas & Use Case",permalink:"/Year1/Software Engineer/Reading/Personas & Use Case"}},l={},c=[{value:"User Stories",id:"user-stories",level:2},{value:"Activity Diagrams",id:"activity-diagrams",level:2},{value:"Sequence Diagrams",id:"sequence-diagrams",level:2},{value:"Top Risks of requirements engineering",id:"top-risks-of-requirements-engineering",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"modelling-req"},"Modelling Req."),(0,i.kt)("h2",{id:"user-stories"},"User Stories"),(0,i.kt)("p",null,"Very slim and high-level requirements artefacts.\nImportant considerations for writing user stores (informal)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Stakeholders write user stories"),(0,i.kt)("li",{parentName:"ol"},"Use the simplest tool"),(0,i.kt)("li",{parentName:"ol"},"Remember non-functional requirements"),(0,i.kt)("li",{parentName:"ol"},"Indicate the estimated size"),(0,i.kt)("li",{parentName:"ol"},"Indicate the priority"),(0,i.kt)("li",{parentName:"ol"},"Optionally include a unique identifier")),(0,i.kt)("p",null,"2 errors where user stories affect the planning process on agile projects:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Scheduling"),(0,i.kt)("li",{parentName:"ol"},"Estimating")),(0,i.kt)("p",null,"Epics are large user stories, ones which are too big to implement in a single iteration."),(0,i.kt)("p",null,"Themes are a collection of related user stories. Used to organise stories into releases."),(0,i.kt)("h2",{id:"activity-diagrams"},"Activity Diagrams"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"59d0895ba249b9e8c88ef13665f8fdaf.png",src:n(3994).Z,width:"910",height:"425"}),"\n",(0,i.kt)("img",{alt:"7fc7aa7f242bcaa29c6a491993c8f61b.png",src:n(5346).Z,width:"699",height:"517"}),"\nCan have 'swim' lanes so show who/what is performing the activity.\nCan have a timer Icon to signify when the action should be carried out"),(0,i.kt)("h2",{id:"sequence-diagrams"},"Sequence Diagrams"),(0,i.kt)("p",null,"Most popular for dynamic modelling.\nTypically used to model:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Usage scenarios"),(0,i.kt)("li",{parentName:"ul"},"The logic of methods"),(0,i.kt)("li",{parentName:"ul"},"The logic of services ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"9e1173197d071b41d6e9703c96dab0ac.png",src:n(6834).Z,width:"604",height:"500"})),(0,i.kt)("p",null,"Helps identify significant methods/services, such as checking to see if the applicant already exists."),(0,i.kt)("p",null,"The sequential nature of the logic is shown via the ordering of the messages. The first message starts in the top left corner, then appears below and so forth"),(0,i.kt)("p",null,"Top of the diagram represents classifiers of their instances, typically use cases, objects, classes or actors."),(0,i.kt)("p",null,"Dashed lines are object lifetimes, represent the life span of the object during the scenario"),(0,i.kt)("p",null,"Asynchronous message - where the sender doesn't wait for the result of the message, instead it processes the result when and if it ever comes back\nSynchronous message- where the sender waits for the results before continuing on."),(0,i.kt)("p",null,"Sequence diagrams are effectively a form of visual coding\nDont create a complete set of sequence diagrams for the system. Only create a sequence diagram when you have complex logic that you want to think through"),(0,i.kt)("h2",{id:"top-risks-of-requirements-engineering"},"Top Risks of requirements engineering"),(0,i.kt)("p",null,"Need to get the requirements right, otherwise the project will fail."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Overlooking a crucial requirement",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Common issue scalability, not thinking how demand/use can increase dramatically. Most solutions to fix this is by starting over from scratch"))),(0,i.kt)("li",{parentName:"ul"},"Inadequate customer representation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Need to interact with customers"))),(0,i.kt)("li",{parentName:"ul"},"Modelling only functional requirements",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Focused on the things the systems supposed to do"))),(0,i.kt)("li",{parentName:"ul"},"Not inspecting requirement"),(0,i.kt)("li",{parentName:"ul"},"Attempting to perfect requirements before beginning construction",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Don't need to understand the entire project in the beginning(requirement)"))),(0,i.kt)("li",{parentName:"ul"},"Representing requirements in the form of designs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Don't include technology as this relates to design. "),(0,i.kt)("li",{parentName:"ul"},"Don't let designs creep into the requirements specification, run the risk of choosing a particular solution that might not be the best one to implement")))),(0,i.kt)("p",null,"Biggest risk is not performing requirements engineering at all. These are your projects foundations. If let them unstated, no opportunity to examine and negotiate them with the customer. And wont know when you're ready to release your product."))}p.isMDXComponent=!0},3994:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/59d0895ba249b9e8c88ef13665f8fdaf-84f15648e4f2adf1dd68c78e3270612d.png"},5346:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/7fc7aa7f242bcaa29c6a491993c8f61b-026c04b0049c14b749406e2d7613ff5c.png"},6834:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/9e1173197d071b41d6e9703c96dab0ac-f6e11b7abd366dd5c68f50e1824532cb.png"}}]);