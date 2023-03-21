"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[1795],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},46677:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={},i="12. Overlay Networks and Peer-to-Peer",o={unversionedId:"Year2/2014/12",id:"Year2/2014/12",title:"12. Overlay Networks and Peer-to-Peer",description:"21/03/23",source:"@site/docs/Year2/2014/12.md",sourceDirName:"Year2/2014",slug:"/Year2/2014/12",permalink:"/Year2/2014/12",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"11. Indirect Communication (2)",permalink:"/Year2/2014/11"},next:{title:"Lab Work Answers",permalink:"/Year2/2014/lab_work"}},s={},p=[{value:"Overlay Networks",id:"overlay-networks",level:2},{value:"Types of overlay network",id:"types-of-overlay-network",level:3},{value:"Overlay routing vs IP routing",id:"overlay-routing-vs-ip-routing",level:3},{value:"Overlay networks and p2p",id:"overlay-networks-and-p2p",level:3},{value:"Peer-to-Peer",id:"peer-to-peer",level:2},{value:"Application",id:"application",level:3},{value:"Characteristics of P2P systems",id:"characteristics-of-p2p-systems",level:3},{value:"Typical P2P Goals",id:"typical-p2p-goals",level:3},{value:"Overlay networks and P2P",id:"overlay-networks-and-p2p-1",level:3},{value:"P2P Examples",id:"p2p-examples",level:2},{value:"P2P Middleware - Pastry",id:"p2p-middleware---pastry",level:3}],u={toc:p};function d(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"12-overlay-networks-and-peer-to-peer"},"12. Overlay Networks and Peer-to-Peer"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"21/03/23")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://moodle.nottingham.ac.uk/pluginfile.php/9422863/mod_page/content/1/15%20Overlay%20networks%20and%20P2P.pdf"},"MoodlePDF")),(0,n.kt)("h2",{id:"overlay-networks"},"Overlay Networks"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The internet = generic universal communication service"),(0,n.kt)("li",{parentName:"ul"},"Overlay network = virtual network",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"On top of an existing network"))),(0,n.kt)("li",{parentName:"ul"},"Multiple overlay networks can exist on an existing network")),(0,n.kt)("h3",{id:"types-of-overlay-network"},"Types of overlay network"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tailored to a specific application or service",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Distributed hash tables"),(0,n.kt)("li",{parentName:"ul"},"Peer-to-peer file sharing"),(0,n.kt)("li",{parentName:"ul"},"Content distribution networks"))),(0,n.kt)("li",{parentName:"ul"},"Tailored for challenging network environments",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Wireless ad hoc networks"),(0,n.kt)("li",{parentName:"ul"},"Delay/disruption tolerant networks"))),(0,n.kt)("li",{parentName:"ul"},"Offering additional network features",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"(Wide area) Multicast, e.g. MBone"),(0,n.kt)("li",{parentName:"ul"},"Resilience"),(0,n.kt)("li",{parentName:"ul"},"Security, e.g. VPNs, TOR")))),(0,n.kt)("h3",{id:"overlay-routing-vs-ip-routing"},"Overlay routing vs IP routing"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"IP"),(0,n.kt)("th",{parentName:"tr",align:null},"Overlay Network"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Includes every node"),(0,n.kt)("td",{parentName:"tr",align:null},"Includes specific nodes/processes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Uses IP addresses"),(0,n.kt)("td",{parentName:"tr",align:null},"Defines own addresses")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Fixed address assignment to nodes"),(0,n.kt)("td",{parentName:"tr",align:null},"Addresses may be assigned to objects/data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"No replication"),(0,n.kt)("td",{parentName:"tr",align:null},"Often replicated")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Stable network topology"),(0,n.kt)("td",{parentName:"tr",align:null},"Often volatile network")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Fixed (next hop) routing"),(0,n.kt)("td",{parentName:"tr",align:null},"Overlay-defined routing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Simple local join (DHCP,etc)"),(0,n.kt)("td",{parentName:"tr",align:null},"Overlay network specific join")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Must trust whole network"),(0,n.kt)("td",{parentName:"tr",align:null},"Need not trust whole network")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"No anonymity for address owners"),(0,n.kt)("td",{parentName:"tr",align:null},"Can have anonymity for address owners")))),(0,n.kt)("h3",{id:"overlay-networks-and-p2p"},"Overlay networks and p2p"),(0,n.kt)("p",null,"Overlay network is effectively another communication paradigm"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"P2P system can be seen as",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Set of (equivalent) process"),(0,n.kt)("li",{parentName:"ul"},"Communicating via a dedicated application-specific overlay network"))),(0,n.kt)("li",{parentName:"ul"},"The overlay network provides the communication services needed by the p2p application")),(0,n.kt)("h2",{id:"peer-to-peer"},"Peer-to-Peer"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Client-server approach - The server(s) are owned and managed by single service provider"),(0,n.kt)("li",{parentName:"ul"},"P2P aims to be completely decentralised")),(0,n.kt)("h3",{id:"application"},"Application"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"File sharing"),(0,n.kt)("li",{parentName:"ul"},"Teleconferencing"),(0,n.kt)("li",{parentName:"ul"},"Multiplayer (LAN) gaming"),(0,n.kt)("li",{parentName:"ul"},"P2P middlewear")),(0,n.kt)("h3",{id:"characteristics-of-p2p-systems"},"Characteristics of P2P systems"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Each user(node) contributes resources"),(0,n.kt)("li",{parentName:"ul"},"All nodes have the same functional capabilities and responsibilities"),(0,n.kt)("li",{parentName:"ul"},"Correct operation does not depend on any centrally administered system")),(0,n.kt)("h3",{id:"typical-p2p-goals"},"Typical P2P Goals"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Global scalability"),(0,n.kt)("li",{parentName:"ul"},"Load balancing"),(0,n.kt)("li",{parentName:"ul"},"Optimisation for local interactions between neighbouring peers"),(0,n.kt)("li",{parentName:"ul"},"Accommodating to highly dynamic host availability "),(0,n.kt)("li",{parentName:"ul"},"Security of data in an environment with heterogeneous trust"),(0,n.kt)("li",{parentName:"ul"},"Anonymity, deniability and resistance to censorship")),(0,n.kt)("h3",{id:"overlay-networks-and-p2p-1"},"Overlay networks and P2P"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A p2p system can be seen as",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Set of equivalent processes"),(0,n.kt)("li",{parentName:"ul"},"Communicating via a dedicated application-specific overlay network")))),(0,n.kt)("h2",{id:"p2p-examples"},"P2P Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Napster - Centralised indexes of P2P music sharing"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{src:a(17561).Z,width:"603",height:"303"})),(0,n.kt)("li",{parentName:"ul"},"Gnutella - 2nd gen P2P file sharing. Two tier systems where some nodes are elected ultrapeers.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ultrapeers - form the core network. Global IP,  highly inter-connected"),(0,n.kt)("li",{parentName:"ul"},"Leaf - connecting to ultrapeers"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{src:a(9060).Z,width:"659",height:"348"})),(0,n.kt)("li",{parentName:"ul"},"Skype - Hybrid system, centralised servers for log-in/payment",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Supernodes - Dynamically selected ordinary hosts with suitable network access"),(0,n.kt)("li",{parentName:"ul"},"Ordinary Hosts - After initial login are directed to a super node"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("img",{src:a(24472).Z,width:"455",height:"363"})),(0,n.kt)("li",{parentName:"ul"},"Distributed hash tables (DHT) - Network maintains a set of values (files). Each value associated with a unique key (GUID)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Peers can add/remove/get")))),(0,n.kt)("h3",{id:"p2p-middleware---pastry"},"P2P Middleware - Pastry"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Provides a flexible P2P facility on which applications can be built",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Add/remove resources"),(0,n.kt)("li",{parentName:"ul"},"Route requests to resources"),(0,n.kt)("li",{parentName:"ul"},"Join/leave overlay network"))),(0,n.kt)("li",{parentName:"ul"},"Distributed hash table"),(0,n.kt)("li",{parentName:"ul"},"Distributed object location and routing")))}d.isMDXComponent=!0},17561:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Pasted image 20230321113541-23d835649f18b3f7e79edf9d1395a529.png"},9060:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Pasted image 20230321113709-3f8628f7e92d4af7e5ebc08edb4ae3ab.png"},24472:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Pasted image 20230321114324-1e8882466386a7214a2543d6c36d6c53.png"}}]);