"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[1914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},i="2. Request-Reply and Java UDP",o={unversionedId:"Year2/2014/02",id:"Year2/2014/02",title:"2. Request-Reply and Java UDP",description:"07/02/23",source:"@site/docs/Year2/2014/02.md",sourceDirName:"Year2/2014",slug:"/Year2/2014/02",permalink:"/Year2/2014/02",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"1.  Network (and virtualisation)",permalink:"/Year2/2014/01"},next:{title:"4. (Network) Security",permalink:"/Year2/2014/04"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Heterogeneity",id:"heterogeneity",level:3},{value:"Failure Handling",id:"failure-handling",level:3},{value:"Concurrency",id:"concurrency",level:3},{value:"Request-reply Protocols",id:"request-reply-protocols",level:2},{value:"Implementation",id:"implementation",level:3},{value:"TCP vs UDP",id:"tcp-vs-udp",level:3},{value:"Java UDP Programming",id:"java-udp-programming",level:2},{value:"UDP Considerations",id:"udp-considerations",level:3},{value:"Java Data Encoding",id:"java-data-encoding",level:2}],u={toc:p};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2-request-reply-and-java-udp"},"2. Request-Reply and Java UDP"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"07/02/23")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://moodle.nottingham.ac.uk/pluginfile.php/9364061/mod_page/content/1/03%20Request-Reply%20and%20UDP.pdf"},"MoodlePDF")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Network protocol - Set of rules on how to communicate. If everyone follows the same rules then effective communication is achieved"),(0,r.kt)("li",{parentName:"ul"},"Distributed System Challenges - Common challenges consist of",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Heterogeneity")," - coping with system component variability"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Failure Handing")," - Coping with partial failure"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Concurrency")," - Correctness and performance with concurrency"),(0,r.kt)("li",{parentName:"ul"},"Openness - To extension or reproduction"),(0,r.kt)("li",{parentName:"ul"},"Security - Protection form threats"),(0,r.kt)("li",{parentName:"ul"},"Transparency - Selective abstraction"),(0,r.kt)("li",{parentName:"ul"},"Quality of Service - Performance & other non-functional characteristics")))),(0,r.kt)("h3",{id:"heterogeneity"},"Heterogeneity"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All the parts of a distributed system has to work together, even if they are different"),(0,r.kt)("li",{parentName:"ul"},"Will mean using common protocols, interfaces and encoding "),(0,r.kt)("li",{parentName:"ul"},"E.g. Java Data IO Streams")),(0,r.kt)("h3",{id:"failure-handling"},"Failure Handling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can fail in complicated ways, (different parts can fail at different times)"),(0,r.kt)("li",{parentName:"ul"},"Coping with failure typically requires some level of redundancy, and specific means detecting and responding to partial failures"),(0,r.kt)("li",{parentName:"ul"},"E,g, simple TCP server")),(0,r.kt)("h3",{id:"concurrency"},"Concurrency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The different processes in a distributed system normally run concurrently"),(0,r.kt)("li",{parentName:"ul"},"This may requires additional checks and communication to ensure global consistency"),(0,r.kt)("li",{parentName:"ul"},"Use alternative approaches with weaker consistency"),(0,r.kt)("li",{parentName:"ul"},"E.g. The example TCP server is multi-threaded so that it can serve multiple independent clients concurrently")),(0,r.kt)("h2",{id:"request-reply-protocols"},"Request-reply Protocols"),(0,r.kt)("p",null,"Typical pattern for ",(0,r.kt)("strong",{parentName:"p"},"client-server")," interaction. Request and response are messages carried by selected inter process communication mechanism (TCP, UDP)"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(712).Z,width:"526",height:"300"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Within the client, the server needs to be identified by a remote reference; IP, port, optional additional process-internal identifiers."),(0,r.kt)("li",{parentName:"ul"},"Server may support several different operations"),(0,r.kt)("li",{parentName:"ul"},"Client and server must agree on how arguments are encoded"),(0,r.kt)("li",{parentName:"ul"},"Client normally blocks until the response is received. Protocols can be reply-less(one-way) or asynchronous (reply is read by the client and later operated on)")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5367).Z,width:"1533",height:"736"}),"\nUDP Request - Only know if its been successful if you receive a response. Don't know if the response or reply got lost etc. Can set a timer to resend out request incase it got lost."),(0,r.kt)("h3",{id:"implementation"},"Implementation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Message Identifiers")," - Each request is given a unique ID. Useful to help match responses to requests at the client"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Failure Model")," - Can suffer from communication omission faults and process omission faults. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timeouts")," - Client typically uses a timeout to detect a ",(0,r.kt)("em",{parentName:"li"},"missing")," reply. Client will re-transmit the request if time exceeds limit."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Duplicate request messages")," - Can be detected in the server from the duplicate message identifier.  If response has already been sent then the response will need to be sent again."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"History")," - With ",(0,r.kt)("em",{parentName:"li"},"idempotent")," operations performing the operation twice makes no difference. Yet sometimes the server should not execute a duplicate request. Results get held in history.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Idempotent/Idempotence")," - Making multiple identical requests that have the same effect as making a single request. "),(0,r.kt)("h3",{id:"tcp-vs-udp"},"TCP vs UDP"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"TCP"),(0,r.kt)("th",{parentName:"tr",align:null},"UDP"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Establish connection first"),(0,r.kt)("td",{parentName:"tr",align:null},"No connection overhead")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Request/reply = stream of bytes"),(0,r.kt)("td",{parentName:"tr",align:null},"Request/reply = 1 message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"No size limit"),(0,r.kt)("td",{parentName:"tr",align:null},"Few KB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reliably delivered in order"),(0,r.kt)("td",{parentName:"tr",align:null},"May be lost or out of order")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTP, SMTP"),(0,r.kt)("td",{parentName:"tr",align:null},"DNS, DHCP")))),(0,r.kt)("h2",{id:"java-udp-programming"},"Java UDP Programming"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DatagramPacket")," - Representing a UDP datagram"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DatagramSocket")," - Representing a UDP socket")),(0,r.kt)("h3",{id:"udp-considerations"},"UDP Considerations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Message Size")," - Hard limit of 65508 bytes, but often 8k or less. Larger sizes are broken up into fragments"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Blocking")," - Receive normally blocks until a message is received. Socket timeout can be specified"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Receive from any")," - Normally a socket will accept messages from any sender"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Failure Model")," - Best effort, checksum used to check for corruption, out of order packets etc"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Uses of UDP")," - Small messages and very simple interactions (DNS). Also supports Multicast communicaiton",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Avoids overheads of TCP")))),(0,r.kt)("h2",{id:"java-data-encoding"},"Java Data Encoding"),(0,r.kt)("p",null,"TCP - Sequence of bytes\nUDP - Array of bytes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Marshalling")," - Process of converting program data to network form"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unmarshalling")," - The converse"),(0,r.kt)("p",null,"JSON - Cross-language UTF-8 text-based encoding including maps and arrays\nXML - Cross-language text-based encoding with HTML-like markup"))}c.isMDXComponent=!0},5367:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/20230207112507-65ff050711ca4ddd19167a572e2b4e74.png"},712:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/20230207134059-0c6a44a62b7ff4b8c17c0d94642fe873.png"}}]);