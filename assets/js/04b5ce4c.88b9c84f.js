"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[3746],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=c(n),m=a,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||i;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4460:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={},l=void 0,c={unversionedId:"Year1/Software Engineer/22.03.08 - Release & Acceptance Testing",id:"Year1/Software Engineer/22.03.08 - Release & Acceptance Testing",title:"22.03.08 - Release & Acceptance Testing",description:"1. Release Testing - Is the software ready for release",source:"@site/docs/Year1/1003 - Software Engineer/22.03.08 - Release & Acceptance Testing.md",sourceDirName:"Year1/1003 - Software Engineer",slug:"/Year1/Software Engineer/22.03.08 - Release & Acceptance Testing",permalink:"/notes/docs/Year1/Software Engineer/22.03.08 - Release & Acceptance Testing",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"22.03.07 - Unit Testing & TDD",permalink:"/notes/docs/Year1/Software Engineer/22.03.07 - Unit Testing & TDD"},next:{title:"22.03.14 - Config_Development",permalink:"/notes/docs/Year1/Software Engineer/22.03.14 - Config_Development"}},p={},u=[{value:"Release Testing",id:"release-testing",level:2},{value:"Integration vs Release Testing",id:"integration-vs-release-testing",level:3},{value:"1) Performance-driven strategy",id:"1-performance-driven-strategy",level:3},{value:"2) High-Level Spec-driven strategy",id:"2-high-level-spec-driven-strategy",level:3},{value:"3) Scenario-driven strategy",id:"3-scenario-driven-strategy",level:3},{value:"Acceptance Testing",id:"acceptance-testing",level:2},{value:"Alpha User Testing",id:"alpha-user-testing",level:2},{value:"Beta User Testing",id:"beta-user-testing",level:2}],g={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Release Testing - Is the software ready for release"),(0,i.kt)("li",{parentName:"ol"},"Acceptance Testing - Is the client happy to pay"),(0,i.kt)("li",{parentName:"ol"},"There are other stages of acceptance though"),(0,i.kt)("li",{parentName:"ol"},"Subsequent user testing is the start of evolution")),(0,i.kt)("h2",{id:"release-testing"},"Release Testing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Is the programme ready and done?"),(0,i.kt)("li",{parentName:"ul"},"After Unit testing and sub system integration testing"),(0,i.kt)("li",{parentName:"ul"},"Release testing is the whole system works together"),(0,i.kt)("li",{parentName:"ul"},'"Process is concerned with finding errors that result from unanticipated interactions between components"')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Primary goal"),": Convince the company that the software is good enough to give to the customer\n",(0,i.kt)("strong",{parentName:"p"},"Team Role"),": Not let the software go to acceptance test until its ready\n",(0,i.kt)("strong",{parentName:"p"},"Way to do this"),": Show that it meets all of the specs"),(0,i.kt)("p",null,"Nearly impossible to test all interactions comprehensively, instead would do this strategy:"),(0,i.kt)("h3",{id:"integration-vs-release-testing"},"Integration vs Release Testing"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A separate team that has not been involved in the system development should be responsible for release testing"),(0,i.kt)("li",{parentName:"ol"},"Rather than finding integration bugs, check that system meets the spec"),(0,i.kt)("li",{parentName:"ol"},"Validation testing, black box rather than white box")),(0,i.kt)("p",null,"Nearly impossible to test all interactions comprehensively, instead would do this strategy:"),(0,i.kt)("h3",{id:"1-performance-driven-strategy"},"1) Performance-driven strategy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once the system is all complete and integrated"),(0,i.kt)("li",{parentName:"ul"},"non-function things like performance"),(0,i.kt)("li",{parentName:"ul"},"Testing the performance limits includes testing functionality to do it")),(0,i.kt)("h3",{id:"2-high-level-spec-driven-strategy"},"2) High-Level Spec-driven strategy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Develop a series of tests that relate to different specifications")),(0,i.kt)("h3",{id:"3-scenario-driven-strategy"},"3) Scenario-driven strategy"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/notes/docs/Year1/Software%20Engineer/22.02.08%20-%20Req.%20Gathering"},"22.02.08 - Req. Gathering"),"\nCustomer scenarios and how they can be satisfied"),(0,i.kt)("h2",{id:"acceptance-testing"},"Acceptance Testing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Takes place after Release Testing"),(0,i.kt)("li",{parentName:"ul"},"Final testing stage before the system is accepted for active use"),(0,i.kt)("li",{parentName:"ul"},"Formal test by the customer to agree that it is ready"),(0,i.kt)("li",{parentName:"ul"},"May reveal requirements problems that do not meet the users needs, or the performance is unacceptable ")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define Acceptance Criteria. Should take place early in the process before contract of system signed"),(0,i.kt)("li",{parentName:"ol"},"Plan Acceptance Testing. Might mean importing real data"),(0,i.kt)("li",{parentName:"ol"},"Derive Acceptance Tests. After criteria and the plan has been designed"),(0,i.kt)("li",{parentName:"ol"},"Run Tests.; Any training or actual environment of use"),(0,i.kt)("li",{parentName:"ol"},"Negotiate test results. Negotiate if each problem is good enough for use"),(0,i.kt)("li",{parentName:"ol"},"Reject/accept system. If the system is good enough for use")),(0,i.kt)("p",null,"Number of important implications:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Have to begin by documenting what you agreed to build and accommodate of reasonable things that were not predicted"),(0,i.kt)("li",{parentName:"ol"},"The project does not end when you finish system testing"),(0,i.kt)("li",{parentName:"ol"},"When is the best time to do acceptance testing")),(0,i.kt)("p",null,"Accept/Reject stage - Customers may be willing to accept the software at a certain stage if they require it ASAP, then provide them with an updated version later on"),(0,i.kt)("h2",{id:"alpha-user-testing"},"Alpha User Testing"),(0,i.kt)("p",null,"Real users doing actual tasks\nUse a section of real people(clients)\nPractise real usage on small percentage of the team"),(0,i.kt)("h2",{id:"beta-user-testing"},"Beta User Testing"),(0,i.kt)("p",null,"Where the software is released for limited general use\nLimited group is allowed to use a release candidate\nUsers feedback problems as bug reports\nAlso used as a form of marketing"))}m.isMDXComponent=!0}}]);