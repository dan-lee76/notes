"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[3984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i="22.03.14 - Config Development",l={unversionedId:"Year1/Software Engineer/22.03.14 - Config_Development",id:"Year1/Software Engineer/22.03.14 - Config_Development",title:"22.03.14 - Config Development",description:"1. Version control",source:"@site/docs/Year1/1003 - Software Engineer/22.03.14 - Config_Development.md",sourceDirName:"Year1/1003 - Software Engineer",slug:"/Year1/Software Engineer/22.03.14 - Config_Development",permalink:"/Year1/Software Engineer/22.03.14 - Config_Development",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"22.03.08 - Release & Acceptance Testing",permalink:"/Year1/Software Engineer/22.03.08 - Release & Acceptance Testing"},next:{title:"22.03.15 - Advanced Version Control",permalink:"/Year1/Software Engineer/22.03.15 - Advanced Version Control"}},s={},u=[{value:"Version Control",id:"version-control",level:2},{value:"Continuous Integration",id:"continuous-integration",level:2},{value:"Build Configurations",id:"build-configurations",level:2},{value:"Automatic Deployment",id:"automatic-deployment",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"220314---config-development"},"22.03.14 - Config Development"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Version control"),(0,o.kt)("li",{parentName:"ol"},"Continuous Integration"),(0,o.kt)("li",{parentName:"ol"},"Build Configurations"),(0,o.kt)("li",{parentName:"ol"},"Automatic Deployment")),(0,o.kt)("h2",{id:"version-control"},"Version Control"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"From git can pull old versions of code. Can create a branch which represents v2.5"),(0,o.kt)("li",{parentName:"ul"},"Many strategies for using version control, manage versions and to see the expected reading"),(0,o.kt)("li",{parentName:"ul"},"Have different ways of branching, can branch for release, maintenance, feature, team. All depends on the company"),(0,o.kt)("li",{parentName:"ul"},"Need to always have a safe version in working mainline, don't want to damage it. Instead work on a branch off these mainlines"),(0,o.kt)("li",{parentName:"ul"},"Only once everything passes tests in branch, can then merge it into mainline"),(0,o.kt)("li",{parentName:"ul"},"Only head developers have access to modify the main branch, so no damage gets pushed. Someone always has the responsibility to protecting the mainline.")),(0,o.kt)("h2",{id:"continuous-integration"},"Continuous Integration"),(0,o.kt)("p",null,"Code changes go directly into mainline of version control"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"automatically builds complete software as submitted, release-tests all new contributions"),(0,o.kt)("li",{parentName:"ul"},"successful build == accepted submission."),(0,o.kt)("li",{parentName:"ul"},"Always have a working mainline in version control"),(0,o.kt)("li",{parentName:"ul"},"Have automatic build scripts to deploy them")),(0,o.kt)("p",null,"Benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Supports TDD - all submissions need to integrate successfully"),(0,o.kt)("li",{parentName:"ul"},"Integration ","[and testing]"," is figured out form the start"),(0,o.kt)("li",{parentName:"ul"},"Identifies bugs quickly because integration happens sooner ")),(0,o.kt)("h2",{id:"build-configurations"},"Build Configurations"),(0,o.kt)("p",null,"Configuration for a new version includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Versions of components are included"),(0,o.kt)("li",{parentName:"ul"},"Which platform-specific libraries to bundle in"),(0,o.kt)("li",{parentName:"ul"},"Which test suite to perform"),(0,o.kt)("li",{parentName:"ul"},"Where to deploy the build")),(0,o.kt)("p",null,"A release is then built based on the configuration, several versions can be created for different platforms"),(0,o.kt)("p",null,"Companies are always refining build configs and scripts"),(0,o.kt)("h2",{id:"automatic-deployment"},"Automatic Deployment"),(0,o.kt)("p",null,"Like jamies auto marker"))}p.isMDXComponent=!0}}]);