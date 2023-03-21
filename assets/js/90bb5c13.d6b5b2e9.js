"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[4537],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},89457:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={},l="11. Indirect Communication (2)",s={unversionedId:"Year2/2014/11",id:"Year2/2014/11",title:"11. Indirect Communication (2)",description:"14/03/23",source:"@site/docs/Year2/2014/11.md",sourceDirName:"Year2/2014",slug:"/Year2/2014/11",permalink:"/Year2/2014/11",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"10. Indirect Communication (1)",permalink:"/Year2/2014/10"},next:{title:"12. Overlay Networks and Peer-to-Peer",permalink:"/Year2/2014/12"}},o={},u=[{value:"Message Queues",id:"message-queues",level:2},{value:"Message Queue Operations",id:"message-queue-operations",level:3},{value:"Implementation Notes",id:"implementation-notes",level:3},{value:"Distributed Shared Memory",id:"distributed-shared-memory",level:2},{value:"Tuple Spaces",id:"tuple-spaces",level:2},{value:"Characteristics",id:"characteristics",level:3},{value:"Example: Redis",id:"example-redis",level:2}],p={toc:u};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"11-indirect-communication-2"},"11. Indirect Communication (2)"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"14/03/23")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://moodle.nottingham.ac.uk/pluginfile.php/9418539/mod_page/content/4/13%20Indirect%20Communication%202.pdf?time=1678721057822"},"MoodlePDF")),(0,n.kt)("h2",{id:"message-queues"},"Message Queues"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Message queues (MQ) support 1-1 communication. (1-M of multicast & pub-sub)"),(0,n.kt)("li",{parentName:"ul"},"Space uncoupled - messages are sent via message queues"),(0,n.kt)("li",{parentName:"ul"},"Time uncoupled - message queues exist independently of message producers and consumers"),(0,n.kt)("li",{parentName:"ul"},"Also known as message-oriented middleware (MOM)"),(0,n.kt)("li",{parentName:"ul"},"Commonly used for integrating back-office systems")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(52154).Z,width:"791",height:"389"})),(0,n.kt)("h3",{id:"message-queue-operations"},"Message Queue Operations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Send")," - add a message to a queue. Typically to the tail of the queue, can be configured"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Receive")," - Take a message from a queue. Typically head, can be configured"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Poll")," - Check head of queue without taking the message"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Notify")," - Inform a potential consumer that a message is available")),(0,n.kt)("h3",{id:"implementation-notes"},"Implementation Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Messages typically comprises of:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Destination - identifying the queue"),(0,n.kt)("li",{parentName:"ul"},"Metadata or header - priority, delivery mode"),(0,n.kt)("li",{parentName:"ul"},"Body - payload or content of message"))),(0,n.kt)("li",{parentName:"ul"},"Message queues are typically persistent and reliable")),(0,n.kt)("p",null,"Java Messaging Service (JMS) is a common API specification"),(0,n.kt)("h2",{id:"distributed-shared-memory"},"Distributed Shared Memory"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DSM systems emulate shared memory between processes on different computers"),(0,n.kt)("li",{parentName:"ul"},"The DSM system sends messages between nodes to maintain a consistent view of memory"),(0,n.kt)("li",{parentName:"ul"},"Much slower than local shared memory"),(0,n.kt)("li",{parentName:"ul"},"Typically requires additional disciplines such as use of locks\n",(0,n.kt)("img",{src:a(58375).Z,width:"791",height:"389"}))),(0,n.kt)("h2",{id:"tuple-spaces"},"Tuple Spaces"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Several processes can share a single tuple space",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Similar to distributed shared memory"))),(0,n.kt)("li",{parentName:"ul"},"All values are tuples"),(0,n.kt)("li",{parentName:"ul"},"Tuples can be written to (write), read from (read) or taken from (take = read and delete) the tuple space"),(0,n.kt)("li",{parentName:"ul"},"Reads and takes are done by pattern matching")),(0,n.kt)("h3",{id:"characteristics"},"Characteristics"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Like message queues, tuple spaces are both space uncoupled and time uncoupled"),(0,n.kt)("li",{parentName:"ul"},"(many) Tuple spaces can also support transactions",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"automatically group a sequence of read/take.write operations")))),(0,n.kt)("p",null,"JavaSpaces is a tool for tuple space communication part of JINI. Strictly is an object space"),(0,n.kt)("h2",{id:"example-redis"},"Example: Redis"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Is an in-memory data structure store, used as a database, cache, and message broker"),(0,n.kt)("li",{parentName:"ul"},"Provides data structures"),(0,n.kt)("li",{parentName:"ul"},"Each data-structure is identified by a key")))}c.isMDXComponent=!0},52154:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/20230314111013-fea155a4ae8cd737f6ecd7a2229a7a98.png"},58375:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/20230314111811-20a924f808a0f830015783ae9c6fc785.png"}}]);