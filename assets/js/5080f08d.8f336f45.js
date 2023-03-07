"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[7587],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),c=n,f=d["".concat(o,".").concat(c)]||d[c]||m[c]||l;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76607:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={},i="8.  HTTP Servers and APIs",s={unversionedId:"Year2/2014/08",id:"Year2/2014/08",title:"8.  HTTP Servers and APIs",description:"03/03/23",source:"@site/docs/Year2/2014/08.md",sourceDirName:"Year2/2014",slug:"/Year2/2014/08",permalink:"/Year2/2014/08",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"7.  WWW and HTPP",permalink:"/Year2/2014/07"},next:{title:"9. Physical and Architectural Models",permalink:"/Year2/2014/09"}},o={},p=[{value:"HTTP Servers",id:"http-servers",level:2},{value:"Routing Requests",id:"routing-requests",level:3},{value:"Handling Requests",id:"handling-requests",level:3},{value:"HTTP APIs",id:"http-apis",level:2},{value:"Defining HTTP APIs",id:"defining-http-apis",level:3},{value:"Types of HTTP API",id:"types-of-http-api",level:3},{value:"HTML Form- or Query-Style Operations",id:"html-form--or-query-style-operations",level:3},{value:"REST - Representational State Transfer",id:"rest---representational-state-transfer",level:3},{value:"Remote Procedure Call (RPC)",id:"remote-procedure-call-rpc",level:3}],u={toc:p};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"8--http-servers-and-apis"},"8.  HTTP Servers and APIs"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"03/03/23")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://moodle.nottingham.ac.uk/pluginfile.php/9398826/mod_page/content/1/10%20HTTP%20Servers%20and%20APIs.pdf"},"MoodlePDF")),(0,n.kt)("h2",{id:"http-servers"},"HTTP Servers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"HTTP servers normally run on well-defined ports"),(0,n.kt)("li",{parentName:"ul"},"http (80), https(443)"),(0,n.kt)("li",{parentName:"ul"},"So all TCP connection requests to a host will (initially) arrive at the same process"),(0,n.kt)("li",{parentName:"ul"},"So TCP port numbers (layer 4) are NOT normally useful for distinguishing between services using HTTP on a single host"),(0,n.kt)("li",{parentName:"ul"},"Each server will require typically explicit configuration")),(0,n.kt)("h3",{id:"routing-requests"},"Routing Requests"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Server can handle each request differently depending on its:"),(0,n.kt)("li",{parentName:"ul"},"URL domain (host) name"),(0,n.kt)("li",{parentName:"ul"},"URL path"),(0,n.kt)("li",{parentName:"ul"},"Identified file type/extension"),(0,n.kt)("li",{parentName:"ul"},"Client IP address"),(0,n.kt)("li",{parentName:"ul"},"HTTP Headers")),(0,n.kt)("h3",{id:"handling-requests"},"Handling Requests"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Static file")," serving - the web server uses the URL path to identify a file which is copied back as the response body"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CGI")," - the server executes a program (identified by the URL) in a separate process to handle the request"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Dynamically loadable module")," - the server loads a runtime engine to execute a file in a scripting language"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Reverse proxy")," - the original server becomes an HTTP client to pass the request onto another web server"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Custom web server")," written using a language-specific web server framework - the web server includes the code to handle specific requests")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(96957).Z,width:"813",height:"463"})),(0,n.kt)("h2",{id:"http-apis"},"HTTP APIs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"HTTP is often used as a standard transport mechanism for program-to-program interaction"),(0,n.kt)("li",{parentName:"ul"},"Normally defined in terms of permitted combinations of",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"URL -> services and operation or resource (REST)"),(0,n.kt)("li",{parentName:"ul"},"HTTP method"),(0,n.kt)("li",{parentName:"ul"},"Authentication requirements"),(0,n.kt)("li",{parentName:"ul"},"Request data"),(0,n.kt)("li",{parentName:"ul"},"Response data"),(0,n.kt)("li",{parentName:"ul"},"Error responses")))),(0,n.kt)("h3",{id:"defining-http-apis"},"Defining HTTP APIs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Usually language-independent "),(0,n.kt)("li",{parentName:"ul"},"Can be defined; manual documentation, automatically from the server implementation, machine-readable interface definition/specification")),(0,n.kt)("h3",{id:"types-of-http-api"},"Types of HTTP API"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Form-/query-style"),(0,n.kt)("li",{parentName:"ul"},"REST (REpresentational State Transfer)"),(0,n.kt)("li",{parentName:"ul"},"RPC (Remote Procedure Call)"),(0,n.kt)("li",{parentName:"ul"},"Can be a mixture of both")),(0,n.kt)("h3",{id:"html-form--or-query-style-operations"},"HTML Form- or Query-Style Operations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"URL defines the server and operation (path)"),(0,n.kt)("li",{parentName:"ul"},"HTTP method is GET (normal navigation or data requests) or POST (operations with side effects)"),(0,n.kt)("li",{parentName:"ul"},"Arguments are a list of names and text variables",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"In the URL query (GET)"),(0,n.kt)("li",{parentName:"ul"},"In the request body (form POST), encoded either"))),(0,n.kt)("li",{parentName:"ul"},"Response body is machine readable results"),(0,n.kt)("li",{parentName:"ul"},"Errors may be signalled by HTTP status and/or response body")),(0,n.kt)("h3",{id:"rest---representational-state-transfer"},"REST - Representational State Transfer"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"URL identifies a specific resource (database record)"),(0,n.kt)("li",{parentName:"ul"},"HTTP method identifies operation to perform"),(0,n.kt)("li",{parentName:"ul"},"For GET the response body (result) is an external data representation of the identified resource"),(0,n.kt)("li",{parentName:"ul"},"For PUT/POST the only argument - the request body is also a new representation of the identified resource"),(0,n.kt)("li",{parentName:"ul"},"Errors are signalled by HTTP status whenever possible")),(0,n.kt)("h3",{id:"remote-procedure-call-rpc"},"Remote Procedure Call (RPC)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"URL typically identifies a specific service"),(0,n.kt)("li",{parentName:"ul"},"HTTP method is normally POST"),(0,n.kt)("li",{parentName:"ul"},"Body of request encodes a list of arguments, and a specific operation name is not specified by URL"),(0,n.kt)("li",{parentName:"ul"},"Response body encodes status and results of operation"),(0,n.kt)("li",{parentName:"ul"},"Errors normally signalled within the response body")))}m.isMDXComponent=!0},96957:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/20230303122030-ac1ae9e3d3ef17010eb4143353fb1576.png"}}]);