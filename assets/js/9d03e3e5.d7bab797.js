"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[3759],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},l="4. RPCs & RMI",o={unversionedId:"Year2/2014/04",id:"Year2/2014/04",title:"4. RPCs & RMI",description:"14/02/23",source:"@site/docs/Year2/2014/04.md",sourceDirName:"Year2/2014",slug:"/Year2/2014/04",permalink:"/Year2/2014/04",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"3. (Network) Security",permalink:"/Year2/2014/03"},next:{title:"Lab Work Answers",permalink:"/Year2/2014/lab_work"}},s={},c=[{value:"Remote Procedure Calls",id:"remote-procedure-calls",level:2},{value:"Programming with Interfaces",id:"programming-with-interfaces",level:3},{value:"Local vs Remote procedure calls",id:"local-vs-remote-procedure-calls",level:3},{value:"CORBA IDL Example",id:"corba-idl-example",level:3},{value:"RPC call semantics",id:"rpc-call-semantics",level:3},{value:"Transparency",id:"transparency",level:3},{value:"Remote Method Invocation",id:"remote-method-invocation",level:2},{value:"Distributed Objects",id:"distributed-objects",level:3},{value:"Implementing RMI",id:"implementing-rmi",level:3},{value:"Java RMI",id:"java-rmi",level:2},{value:"Serialisable vs Remote",id:"serialisable-vs-remote",level:3},{value:"RMI Registry",id:"rmi-registry",level:3}],p={toc:c};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"4-rpcs--rmi"},"4. RPCs & RMI"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"14/02/23")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://moodle.nottingham.ac.uk/pluginfile.php/9375263/mod_page/content/2/05%20RPC%20and%20RMI.pdf"},"MoodlePDF")),(0,r.kt)("h2",{id:"remote-procedure-calls"},"Remote Procedure Calls"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Concept that programmers should be able to invoke remote operations in the same way as local procedure calls"),(0,r.kt)("li",{parentName:"ul"},"The starting point is the programmers perspective"),(0,r.kt)("li",{parentName:"ul"},"Three key considerations; Interfaces, Semantics, Transparency")),(0,r.kt)("h3",{id:"programming-with-interfaces"},"Programming with Interfaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Many languages support modularisation with programmer-defined interfaces. Defines a public contract"),(0,r.kt)("li",{parentName:"ul"},"Code external to the module can only use things in the interface. Need to understand the interface, not the implementation"),(0,r.kt)("li",{parentName:"ul"},"A module can be replaced by another with the same interface and nothing else needs to be changed")),(0,r.kt)("h3",{id:"local-vs-remote-procedure-calls"},"Local vs Remote procedure calls"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Different modules may be running in different processes but can still have defined interfaces"),(0,r.kt)("li",{parentName:"ul"},"Not normally possible for code in one process to access variables in another process. Single machine blocks of shared memory can be created to share variables between processes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Call by reference")," parameter passing is not possible between processes over networks"),(0,r.kt)("li",{parentName:"ul"},"A reference or pointer is not meaningful in another process",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Reference = an address in local process memory"))),(0,r.kt)("li",{parentName:"ul"},"Parameters need to be clearly identifiable as passed ",(0,r.kt)("strong",{parentName:"li"},"to")," the procedure ",(0,r.kt)("strong",{parentName:"li"},"(in)"),", returned ",(0,r.kt)("strong",{parentName:"li"},"from")," it ",(0,r.kt)("strong",{parentName:"li"},"(out)")," or ",(0,r.kt)("strong",{parentName:"li"},"both (inout)"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Interface definition languages (IDLs)")," - Interfaces defined using a language built-in interface."),(0,r.kt)("h3",{id:"corba-idl-example"},"CORBA IDL Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// In file Person.idl  \nstruct Person {  \n    string name;  \n    string place;  \n    long year;  \n};  \ninterface PersonList {  \n    readonly attribute string listname;  \n    void addPerson(in Person p);  \n    void getPerson(in string name, out Person p);  \n    long number();  \n};\n")),(0,r.kt)("h3",{id:"rpc-call-semantics"},"RPC call semantics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Local procedure call semantics are always exactly one"),(0,r.kt)("li",{parentName:"ul"},"Remote procedure calls can have different semantics",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Maybe")," semantics - executed once or not at all"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"At-least-once")," semantics - the caller receives a result or an exception is raised"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"At-most-once")," semantics - the caller receives a result or an exception is raised")))),(0,r.kt)("h3",{id:"transparency"},"Transparency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RPCs are a good example of access (and location) transparency"),(0,r.kt)("li",{parentName:"ul"},"In practice is often limited. Remote operations can ",(0,r.kt)("strong",{parentName:"li"},"fail")," in more and different ways. Also typically slower"),(0,r.kt)("li",{parentName:"ul"},"Most RPC systems will strongly resemble local procedure calls but with some additional elements")),(0,r.kt)("h2",{id:"remote-method-invocation"},"Remote Method Invocation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Applies the concept of RPC to distributed objects"),(0,r.kt)("li",{parentName:"ul"},"Same as RPC in terms of interfaces, call semantics and transparency"),(0,r.kt)("li",{parentName:"ul"},"Also allows object-oriented concepts to be used"),(0,r.kt)("li",{parentName:"ul"},"Also allows references to objects to passed over the network, giving more options for parameter passing")),(0,r.kt)("h3",{id:"distributed-objects"},"Distributed Objects"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Since each object encapsulates its own state, different objects in the same system can be hosted by different processes"),(0,r.kt)("li",{parentName:"ul"},"Adopting the client-server paradigm, invoking a method on an object in another process is a RMI"),(0,r.kt)("li",{parentName:"ul"},"A remote object reference represents a particular object anywhere with a distributed system"),(0,r.kt)("li",{parentName:"ul"},"A remote interface specifies which of an object methods can be invoked remotely")),(0,r.kt)("h3",{id:"implementing-rmi"},"Implementing RMI"),(0,r.kt)("p",null,"Remote reference to ",(0,r.kt)("em",{parentName:"p"},"B")," must identify both the process and the specific object. If passed to another process will create a proxy object in that process\n",(0,r.kt)("img",{src:n(26676).Z,width:"765",height:"543"})),(0,r.kt)("p",null,"Object ",(0,r.kt)("em",{parentName:"p"},"A")," (in the client) makes a local method invocation on the proxy. The process hosting the original object has a shared dispatcher for the objects it hosts\n",(0,r.kt)("img",{src:n(4228).Z,width:"765",height:"543"})),(0,r.kt)("h2",{id:"java-rmi"},"Java RMI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java-specific RMI middle-ware, and specific to the Java language."),(0,r.kt)("li",{parentName:"ul"},"Many similarities with other distributed object systems (COBRA)")),(0,r.kt)("p",null,"Remote interfaces in Java RMI - Defines using Javas ",(0,r.kt)("inlineCode",{parentName:"p"},"interface")," mechanism. However has to extend ",(0,r.kt)("inlineCode",{parentName:"p"},"java.rmi.remote")," and throw a ",(0,r.kt)("inlineCode",{parentName:"p"},"RemoteException"),". Arguments and return values must be serialisable "),(0,r.kt)("h3",{id:"serialisable-vs-remote"},"Serialisable vs Remote"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Primitive types - converted to a standard external representation and sent to the other processes"),(0,r.kt)("li",{parentName:"ul"},"Instances which implement ",(0,r.kt)("inlineCode",{parentName:"li"},"java.io.Serializable")," - converted to a standard external representation (send a copy)"),(0,r.kt)("li",{parentName:"ul"},"Instances which implement ",(0,r.kt)("inlineCode",{parentName:"li"},"java.rmi.Remote")," - Causes a new remote reference to be created and sent (send a remote reference)")),(0,r.kt)("p",null,"Implementing a Remote Object - Each remote interfaces needs an implementation that will be run in the server process. Implementation extends ",(0,r.kt)("inlineCode",{parentName:"p"},"java.rmi.server.UnicastRemoteObject")," and constructor throws ",(0,r.kt)("inlineCode",{parentName:"p"},"java.rmi.RemoteException")),(0,r.kt)("h3",{id:"rmi-registry"},"RMI Registry"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RMI provides a standard broker application called the rmiregistry"),(0,r.kt)("li",{parentName:"ul"},"Remote objects are identified using URL-like strings"),(0,r.kt)("li",{parentName:"ul"},"Before a remote object can be found its hosting process must register it using ",(0,r.kt)("inlineCode",{parentName:"li"},"bind")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"rebind")),(0,r.kt)("li",{parentName:"ul"},"A client can then ",(0,r.kt)("inlineCode",{parentName:"li"},"list")," registered objects and/or obtain a remote reference to a registered object with lookup")))}m.isMDXComponent=!0},26676:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/20230214221635-2a6f78f0f68122dc7289bd26af973952.png"},4228:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/20230214221906-461b0a1215d5bb10372090163cc37ee0.png"}}]);