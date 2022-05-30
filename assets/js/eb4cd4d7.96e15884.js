"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[9213],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2746:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Introduction to Software Engineering",c={unversionedId:"Year1/Software Engineer/22.01.31 - Introduction",id:"Year1/Software Engineer/22.01.31 - Introduction",title:"Introduction to Software Engineering",description:"Aims",source:"@site/docs/Year1/1003 - Software Engineer/22.01.31 - Introduction.md",sourceDirName:"Year1/1003 - Software Engineer",slug:"/Year1/Software Engineer/22.01.31 - Introduction",permalink:"/Year1/Software Engineer/22.01.31 - Introduction",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Year 1",permalink:"/Year1/"},next:{title:"Git ready for teams",permalink:"/Year1/Software Engineer/22.02.01 - Git"}},u={},p=[{value:"Aims",id:"aims",level:2},{value:"Top 10 SE mistakes",id:"top-10-se-mistakes",level:2},{value:"Dorseys Conclusions",id:"dorseys-conclusions",level:3},{value:"Core Process Stages",id:"core-process-stages",level:2},{value:"Waterfall Model",id:"waterfall-model",level:3},{value:"V-Model",id:"v-model",level:3},{value:"Problems with waterfall and V",id:"problems-with-waterfall-and-v",level:3},{value:"Problems with iterative models",id:"problems-with-iterative-models",level:3}],d={toc:p};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-software-engineering"},"Introduction to Software Engineering"),(0,o.kt)("h2",{id:"aims"},"Aims"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Overview of the whole Software Engineering process"),(0,o.kt)("li",{parentName:"ol"},"Give you initial practical experience of work at different stages of the process"),(0,o.kt)("li",{parentName:"ol"},"Prepare you for Software Engineering group project in year 2")),(0,o.kt)("h2",{id:"top-10-se-mistakes"},"Top 10 SE mistakes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Presume 'good code' is the only thing that matters"),(0,o.kt)("li",{parentName:"ol"},"Aim to finish at the delivery deadline "),(0,o.kt)("li",{parentName:"ol"},"Don't design a data model, let the code produce data it needs"),(0,o.kt)("li",{parentName:"ol"},"Use a Technical Lead that has never built a similar system, rather than choose/hire someone who has"),(0,o.kt)("li",{parentName:"ol"},"Hire 40 developers to make the coding go faster"),(0,o.kt)("li",{parentName:"ol"},"Build the system in the language you know best, rather than 'the best tool for the job'"),(0,o.kt)("li",{parentName:"ol"},"Hire a junior developer to handle the migration"),(0,o.kt)("li",{parentName:"ol"},"Skip the testing phase because the project is behind schedule"),(0,o.kt)("li",{parentName:"ol"},"Change code, without planning, to meet newly discovered requirements"),(0,o.kt)("li",{parentName:"ol"},"Buy a commercial, off the shelf package and customise it a lot")),(0,o.kt)("h3",{id:"dorseys-conclusions"},"Dorseys Conclusions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Don't cut corners. In long run, this result is system failure or an inadequate system that doesn't meet the user requires."),(0,o.kt)("li",{parentName:"ol"},"Audit each major deliverable and step along the way for accuracy and correctness"),(0,o.kt)("li",{parentName:"ol"},"Carefully monitor top management support for the project"),(0,o.kt)("li",{parentName:"ol"},"Secure the correct technical lead for the job")),(0,o.kt)("h2",{id:"core-process-stages"},"Core Process Stages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Specification")," - What the system should do and its development constraints "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Development")," - Production of the software system"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Validation")," - checking that the software is what the customer wanted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Evolution")," - Changing code in response to demands")),(0,o.kt)("h3",{id:"waterfall-model"},"Waterfall Model"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"6923326e3eafabdde0b09c9a35235a27.png",src:n(6093).Z,width:"1474",height:"892"})),(0,o.kt)("h3",{id:"v-model"},"V-Model"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"fca38299d973b8c707e74c817523a69f.png",src:n(1794).Z,width:"1222",height:"886"})),(0,o.kt)("h3",{id:"problems-with-waterfall-and-v"},"Problems with waterfall and V"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Needs stable and 'perfect' requirements"),(0,o.kt)("li",{parentName:"ul"},"Can't always anticipate what you are going to have to do"),(0,o.kt)("li",{parentName:"ul"},"Does not account for revision or refactoring"),(0,o.kt)("li",{parentName:"ul"},"Too inflexible and static"),(0,o.kt)("li",{parentName:"ul"},"Depends on getting each stage exactly right")),(0,o.kt)("h3",{id:"problems-with-iterative-models"},"Problems with iterative models"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lack of process visibility"),(0,o.kt)("li",{parentName:"ul"},"Too much doing and not enough planning"),(0,o.kt)("li",{parentName:"ul"},"Special skills"),(0,o.kt)("li",{parentName:"ul"},"Lightweight documentation tone to mean no documentation")))}m.isMDXComponent=!0},6093:function(e,t,n){t.Z=n.p+"assets/images/6923326e3eafabdde0b09c9a35235a27-660d1f74fb61620c384a01981ae48d97.png"},1794:function(e,t,n){t.Z=n.p+"assets/images/fca38299d973b8c707e74c817523a69f-1b65e2c6115ced6af7364977ca37246d.png"}}]);