"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[3746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||g[m]||i;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4460:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},s="22.03.08 - Release & Acceptance Testing",l={unversionedId:"Year1/Software Engineer/22.03.08 - Release & Acceptance Testing",id:"Year1/Software Engineer/22.03.08 - Release & Acceptance Testing",title:"22.03.08 - Release & Acceptance Testing",description:"1. Release Testing - Is the software ready for release",source:"@site/docs/Year1/1003 - Software Engineer/22.03.08 - Release & Acceptance Testing.md",sourceDirName:"Year1/1003 - Software Engineer",slug:"/Year1/Software Engineer/22.03.08 - Release & Acceptance Testing",permalink:"/Year1/Software Engineer/22.03.08 - Release & Acceptance Testing",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"22.03.07 - Unit Testing & TDD",permalink:"/Year1/Software Engineer/22.03.07 - Unit Testing & TDD"},next:{title:"22.03.14 - Config Development",permalink:"/Year1/Software Engineer/22.03.14 - Config_Development"}},o={},c=[{value:"Release Testing",id:"release-testing",level:2},{value:"Integration vs Release Testing",id:"integration-vs-release-testing",level:3},{value:"1) Performance-driven strategy",id:"1-performance-driven-strategy",level:3},{value:"2) High-Level Spec-driven strategy",id:"2-high-level-spec-driven-strategy",level:3},{value:"3) Scenario-driven strategy",id:"3-scenario-driven-strategy",level:3},{value:"Acceptance Testing",id:"acceptance-testing",level:2},{value:"Alpha User Testing",id:"alpha-user-testing",level:2},{value:"Beta User Testing",id:"beta-user-testing",level:2}],p={toc:c};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"220308---release--acceptance-testing"},"22.03.08 - Release & Acceptance Testing"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Release Testing - Is the software ready for release"),(0,r.kt)("li",{parentName:"ol"},"Acceptance Testing - Is the client happy to pay"),(0,r.kt)("li",{parentName:"ol"},"There are other stages of acceptance though"),(0,r.kt)("li",{parentName:"ol"},"Subsequent user testing is the start of evolution")),(0,r.kt)("h2",{id:"release-testing"},"Release Testing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Is the programme ready and done?"),(0,r.kt)("li",{parentName:"ul"},"After Unit testing and sub system integration testing"),(0,r.kt)("li",{parentName:"ul"},"Release testing is the whole system works together"),(0,r.kt)("li",{parentName:"ul"},'"Process is concerned with finding errors that result from unanticipated interactions between components"')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Primary goal"),": Convince the company that the software is good enough to give to the customer\n",(0,r.kt)("strong",{parentName:"p"},"Team Role"),": Not let the software go to acceptance test until its ready\n",(0,r.kt)("strong",{parentName:"p"},"Way to do this"),": Show that it meets all of the specs"),(0,r.kt)("p",null,"Nearly impossible to test all interactions comprehensively, instead would do this strategy:"),(0,r.kt)("h3",{id:"integration-vs-release-testing"},"Integration vs Release Testing"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A separate team that has not been involved in the system development should be responsible for release testing"),(0,r.kt)("li",{parentName:"ol"},"Rather than finding integration bugs, check that system meets the spec"),(0,r.kt)("li",{parentName:"ol"},"Validation testing, black box rather than white box")),(0,r.kt)("p",null,"Nearly impossible to test all interactions comprehensively, instead would do this strategy:"),(0,r.kt)("h3",{id:"1-performance-driven-strategy"},"1) Performance-driven strategy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once the system is all complete and integrated"),(0,r.kt)("li",{parentName:"ul"},"non-function things like performance"),(0,r.kt)("li",{parentName:"ul"},"Testing the performance limits includes testing functionality to do it")),(0,r.kt)("h3",{id:"2-high-level-spec-driven-strategy"},"2) High-Level Spec-driven strategy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Develop a series of tests that relate to different specifications")),(0,r.kt)("h3",{id:"3-scenario-driven-strategy"},"3) Scenario-driven strategy"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Year1/Software%20Engineer/22.02.08%20-%20Req.%20Gathering"},"22.02.08 - Req. Gathering"),"\nCustomer scenarios and how they can be satisfied"),(0,r.kt)("h2",{id:"acceptance-testing"},"Acceptance Testing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Takes place after Release Testing"),(0,r.kt)("li",{parentName:"ul"},"Final testing stage before the system is accepted for active use"),(0,r.kt)("li",{parentName:"ul"},"Formal test by the customer to agree that it is ready"),(0,r.kt)("li",{parentName:"ul"},"May reveal requirements problems that do not meet the users needs, or the performance is unacceptable ")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Define Acceptance Criteria. Should take place early in the process before contract of system signed"),(0,r.kt)("li",{parentName:"ol"},"Plan Acceptance Testing. Might mean importing real data"),(0,r.kt)("li",{parentName:"ol"},"Derive Acceptance Tests. After criteria and the plan has been designed"),(0,r.kt)("li",{parentName:"ol"},"Run Tests.; Any training or actual environment of use"),(0,r.kt)("li",{parentName:"ol"},"Negotiate test results. Negotiate if each problem is good enough for use"),(0,r.kt)("li",{parentName:"ol"},"Reject/accept system. If the system is good enough for use")),(0,r.kt)("p",null,"Number of important implications:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Have to begin by documenting what you agreed to build and accommodate of reasonable things that were not predicted"),(0,r.kt)("li",{parentName:"ol"},"The project does not end when you finish system testing"),(0,r.kt)("li",{parentName:"ol"},"When is the best time to do acceptance testing")),(0,r.kt)("p",null,"Accept/Reject stage - Customers may be willing to accept the software at a certain stage if they require it ASAP, then provide them with an updated version later on"),(0,r.kt)("h2",{id:"alpha-user-testing"},"Alpha User Testing"),(0,r.kt)("p",null,"Real users doing actual tasks\nUse a section of real people(clients)\nPractise real usage on small percentage of the team"),(0,r.kt)("h2",{id:"beta-user-testing"},"Beta User Testing"),(0,r.kt)("p",null,"Where the software is released for limited general use\nLimited group is allowed to use a release candidate\nUsers feedback problems as bug reports\nAlso used as a form of marketing"))}g.isMDXComponent=!0}}]);