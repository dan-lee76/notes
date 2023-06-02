"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[4852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,b=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?i.createElement(b,s(s({ref:t},p),{},{components:n})):i.createElement(b,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<a;u++)s[u]=n[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const a={},s="10. Indirect Communication (1)",o={unversionedId:"Year2/2014/10",id:"Year2/2014/10",title:"10. Indirect Communication (1)",description:"10/03/23",source:"@site/docs/Year2/2014/10.md",sourceDirName:"Year2/2014",slug:"/Year2/2014/10",permalink:"/Year2/2014/10",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"9. Physical and Architectural Models",permalink:"/Year2/2014/09"},next:{title:"11. Indirect Communication (2)",permalink:"/Year2/2014/11"}},l={},u=[{value:"Indirect Communication",id:"indirect-communication",level:2},{value:"Indirect communication paradigms",id:"indirect-communication-paradigms",level:3},{value:"Group Communication",id:"group-communication",level:2},{value:"Options",id:"options",level:3},{value:"Implementation Issues",id:"implementation-issues",level:3},{value:"Reliability",id:"reliability",level:4},{value:"Ordering",id:"ordering",level:4},{value:"Group Membership Management",id:"group-membership-management",level:4},{value:"Publish-Subscribe",id:"publish-subscribe",level:2},{value:"Applications",id:"applications",level:3},{value:"Pub-sub characteristics and options",id:"pub-sub-characteristics-and-options",level:3},{value:"Subscription (filter) model",id:"subscription-filter-model",level:3},{value:"Centralised vs Distributed implementations",id:"centralised-vs-distributed-implementations",level:3},{value:"Event routing in a distributed event system",id:"event-routing-in-a-distributed-event-system",level:3}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"10-indirect-communication-1"},"10. Indirect Communication (1)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"10/03/23")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://moodle.nottingham.ac.uk/pluginfile.php/9414527/mod_page/content/2/12%20Indirect%20communication%201.pdf"},"MoodlePDF")),(0,r.kt)("h2",{id:"indirect-communication"},"Indirect Communication"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Communication between entities in a distributed system through an intermediary with no direct coupling between the send and the receiver(s)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Space Uncoupling")," - The sender does not (need to) know the identity of the receiver(s) and vice versa. E.g. partitions can be replaced, updated, replicated, migrated\n",(0,r.kt)("strong",{parentName:"p"},"Time Uncoupling")," - The sender(s) and receiver(s) can have independent lifetimes. E.g. in a volatile environment "),(0,r.kt)("p",null,'Asynchronous message passing = "synchronisation uncoupling"'),(0,r.kt)("h3",{id:"indirect-communication-paradigms"},"Indirect communication paradigms"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A range of paradigms where; a message is ",(0,r.kt)("em",{parentName:"li"},"not")," addressed to one specific entity, but, is sent to many entities and/or is sent via some intermediary")),(0,r.kt)("h2",{id:"group-communication"},"Group Communication"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An application-level abstraction of multicast communication (may be implemented over IP Multicast but doesn't have to be)"),(0,r.kt)("li",{parentName:"ul"},"Typical applications: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Reliable distribution to large numbers of clients(finance)"),(0,r.kt)("li",{parentName:"ul"},"Collaborative applications"),(0,r.kt)("li",{parentName:"ul"},"Fault-tolerance"),(0,r.kt)("li",{parentName:"ul"},"System monitoring and management")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Group programming model")," - There are groups that processes can join or leave. A message sent to a group is delivered to all members of that group"),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("p",null,"Closed and open groups (Non-members cannot send to closed groups)\n",(0,r.kt)("img",{src:n(12117).Z,width:"791",height:"389"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Overlapping")," and ",(0,r.kt)("strong",{parentName:"li"},"non-overlapping")," groups - Non-overlapping => each process can be a member of at most one group at any moment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Synchronous")," and ",(0,r.kt)("strong",{parentName:"li"},"asynchronous")," communication - Synchronous ",(0,r.kt)("em",{parentName:"li"},"group")," communication => does a sender blocks until ",(0,r.kt)("em",{parentName:"li"},"all")," group members have received the message/replied")),(0,r.kt)("h3",{id:"implementation-issues"},"Implementation Issues"),(0,r.kt)("h4",{id:"reliability"},"Reliability"),(0,r.kt)("p",null,"For a group communication extends that for direct communication:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Integrity - The message received is the same as the one sent, and no messages are delivered twice"),(0,r.kt)("li",{parentName:"ul"},"Validity - Any outgoing message is eventually delivered"),(0,r.kt)("li",{parentName:"ul"},"Plus Agreement - If the message is delivered to one process, then it is delivered to all processes in the group")),(0,r.kt)("h4",{id:"ordering"},"Ordering"),(0,r.kt)("p",null,"Ordering constrains are imposed on delivered messages; typically a trade-off -> stricter ordering constrains => longer delays and more messages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FIFO - Messages from one sender are delivered in the same order in which they were sent"),(0,r.kt)("li",{parentName:"ul"},"Casual order - If one message happens before another then it is delivered first"),(0,r.kt)("li",{parentName:"ul"},"Total order - All messages are delivered in the same order in every process")),(0,r.kt)("h4",{id:"group-membership-management"},"Group Membership Management"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Group membership is fundamental. System must be able to map groups to members"),(0,r.kt)("li",{parentName:"ul"},"Normally requires an explicit management interface"),(0,r.kt)("li",{parentName:"ul"},"For reliable communication there must also be failure detection",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Member crashes - must be removed from the group"),(0,r.kt)("li",{parentName:"ul"},"Network partitions - group partitions on half of it fails"))),(0,r.kt)("li",{parentName:"ul"},"The group may provide notification of group changes")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(87736).Z,width:"1289",height:"626"})),(0,r.kt)("h2",{id:"publish-subscribe"},"Publish-Subscribe"),(0,r.kt)("p",null,"(Distributed event-based systems)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Publishers publish structured events"),(0,r.kt)("li",{parentName:"ul"},"Subscribers express interest in particular events"),(0,r.kt)("li",{parentName:"ul"},"An event service matches published events to subscriptions, notifying subscribers accordingly"),(0,r.kt)("li",{parentName:"ul"},"Optionally, publishers may also advertise that they produce certain types of event")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(23083).Z,width:"1289",height:"626"})),(0,r.kt)("h3",{id:"applications"},"Applications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Financial information systems"),(0,r.kt)("li",{parentName:"ul"},"Live feeds of realtime data"),(0,r.kt)("li",{parentName:"ul"},"Cooperative work with events of shared interest"),(0,r.kt)("li",{parentName:"ul"},"Ubiquitous computing"),(0,r.kt)("li",{parentName:"ul"},"Monitoring applications")),(0,r.kt)("h3",{id:"pub-sub-characteristics-and-options"},"Pub-sub characteristics and options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Heterogeneity")," - Publishers and subscribers can be created with different technologies and completed independently of each other"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Asynchronicity")," - Publishing an event is almost always asynchronous"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Delivery guarantees")," - Systems can vary in reliability and ordering of events")),(0,r.kt)("h3",{id:"subscription-filter-model"},"Subscription (filter) model"),(0,r.kt)("p",null,"How subscriptions are expressed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Channel-based")," - Each event is published to a specific channel | subscribers subscribe to channels"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Topic-based")," - Each event has a topic (or subject) | subscribers identify topic(s) of interest"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Content-based")," - Each event has structured content | subscribers specify patterns to be matched by each event"),(0,r.kt)("li",{parentName:"ul"},"Type-based - Events are type | subscribers specify types of interest"),(0,r.kt)("li",{parentName:"ul"},"Objects of interest - events are linked to a specific object | subscribers specify the objects of interest"),(0,r.kt)("li",{parentName:"ul"},"Semantic filtering - events are described using a formal ontology"),(0,r.kt)("li",{parentName:"ul"},"Complex event processing - subscriptions are based on more than on event")),(0,r.kt)("h3",{id:"centralised-vs-distributed-implementations"},"Centralised vs Distributed implementations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A centralised event service - relatively easy to construct. The event service becomes a bottleneck"),(0,r.kt)("li",{parentName:"ul"},"A distributed event service - more complex, but more scalable")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2900).Z,width:"1289",height:"626"})),(0,r.kt)("h3",{id:"event-routing-in-a-distributed-event-system"},"Event routing in a distributed event system"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flooding")," - every event is sent to every event broker"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Filtering")," - Event brokers share subscription information and forward events to where valid subscriptions exist",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Advertisements from publishers may help to filter subscription information for forwarding "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Rendezvous")," - There is a way to identify particular event brokers to handle matching events and subscriptions")))}c.isMDXComponent=!0},12117:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/20230314132754-229daaf0304f79fbe9262c4df2a0dbfc.png"},87736:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/20230314134035-6d701a843247294c70c5a95afb3b5fa4.png"},23083:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/20230314134531-87d4c44c3708d6be46df881bd4b19739.png"},2900:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/20230314135338-e6ff293ae8a2f9043c6a3952c17b47dd.png"}}]);