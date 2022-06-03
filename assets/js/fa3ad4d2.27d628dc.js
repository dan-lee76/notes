"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[3984],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5019:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={},u="22.03.14 - Config Development",s={unversionedId:"Year1/Software Engineer/22.03.14 - Config_Development",id:"Year1/Software Engineer/22.03.14 - Config_Development",title:"22.03.14 - Config Development",description:"1. Version control",source:"@site/docs/Year1/1003 - Software Engineer/22.03.14 - Config_Development.md",sourceDirName:"Year1/1003 - Software Engineer",slug:"/Year1/Software Engineer/22.03.14 - Config_Development",permalink:"/Year1/Software Engineer/22.03.14 - Config_Development",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"22.03.08 - Release & Acceptance Testing",permalink:"/Year1/Software Engineer/22.03.08 - Release & Acceptance Testing"},next:{title:"22.03.15 - Advanced Version Control",permalink:"/Year1/Software Engineer/22.03.15 - Advanced Version Control"}},c={},p=[{value:"Version Control",id:"version-control",level:2},{value:"Continuous Integration",id:"continuous-integration",level:2},{value:"Build Configurations",id:"build-configurations",level:2},{value:"Automatic Deployment",id:"automatic-deployment",level:2}],f={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"220314---config-development"},"22.03.14 - Config Development"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Version control"),(0,i.kt)("li",{parentName:"ol"},"Continuous Integration"),(0,i.kt)("li",{parentName:"ol"},"Build Configurations"),(0,i.kt)("li",{parentName:"ol"},"Automatic Deployment")),(0,i.kt)("h2",{id:"version-control"},"Version Control"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"From git can pull old versions of code. Can create a branch which represents v2.5"),(0,i.kt)("li",{parentName:"ul"},"Many strategies for using version control, manage versions and to see the expected reading"),(0,i.kt)("li",{parentName:"ul"},"Have different ways of branching, can branch for release, maintenance, feature, team. All depends on the company"),(0,i.kt)("li",{parentName:"ul"},"Need to always have a safe version in working mainline, don't want to damage it. Instead work on a branch off these mainlines"),(0,i.kt)("li",{parentName:"ul"},"Only once everything passes tests in branch, can then merge it into mainline"),(0,i.kt)("li",{parentName:"ul"},"Only head developers have access to modify the main branch, so no damage gets pushed. Someone always has the responsibility to protecting the mainline.")),(0,i.kt)("h2",{id:"continuous-integration"},"Continuous Integration"),(0,i.kt)("p",null,"Code changes go directly into mainline of version control"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"automatically builds complete software as submitted, release-tests all new contributions"),(0,i.kt)("li",{parentName:"ul"},"successful build == accepted submission."),(0,i.kt)("li",{parentName:"ul"},"Always have a working mainline in version control"),(0,i.kt)("li",{parentName:"ul"},"Have automatic build scripts to deploy them")),(0,i.kt)("p",null,"Benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Supports TDD - all submissions need to integrate successfully"),(0,i.kt)("li",{parentName:"ul"},"Integration ","[and testing]"," is figured out form the start"),(0,i.kt)("li",{parentName:"ul"},"Identifies bugs quickly because integration happens sooner ")),(0,i.kt)("h2",{id:"build-configurations"},"Build Configurations"),(0,i.kt)("p",null,"Configuration for a new version includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Versions of components are included"),(0,i.kt)("li",{parentName:"ul"},"Which platform-specific libraries to bundle in"),(0,i.kt)("li",{parentName:"ul"},"Which test suite to perform"),(0,i.kt)("li",{parentName:"ul"},"Where to deploy the build")),(0,i.kt)("p",null,"A release is then built based on the configuration, several versions can be created for different platforms"),(0,i.kt)("p",null,"Companies are always refining build configs and scripts"),(0,i.kt)("h2",{id:"automatic-deployment"},"Automatic Deployment"),(0,i.kt)("p",null,"Like jamies auto marker"))}m.isMDXComponent=!0}}]);