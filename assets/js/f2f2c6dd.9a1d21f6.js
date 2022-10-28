"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[2317],{3905:(e,i,t)=>{t.d(i,{Zo:()=>c,kt:()=>m});var n=t(7294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function l(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?l(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function r(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),p=function(e){var i=n.useContext(o),t=i;return e&&(t="function"==typeof e?e(i):s(s({},i),e)),t},c=function(e){var i=p(e.components);return n.createElement(o.Provider,{value:i},e.children)},u={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},d=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,b=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return t?n.createElement(b,s(s({ref:i},c),{},{components:t})):n.createElement(b,s({ref:i},c))}));function m(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=d;var r={};for(var o in i)hasOwnProperty.call(i,o)&&(r[o]=i[o]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var p=2;p<l;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5018:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const l={},s="7. Software Design: Responsibilities",r={unversionedId:"Year2/2013/07",id:"Year2/2013/07",title:"7. Software Design: Responsibilities",description:"Class Responsibilities",source:"@site/docs/Year2/2013/07.md",sourceDirName:"Year2/2013",slug:"/Year2/2013/07",permalink:"/Year2/2013/07",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"6. Object Oriented Design in Depth",permalink:"/Year2/2013/06"},next:{title:"Year in Industry",permalink:"/Year2/Misc/Industry"}},o={},p=[{value:"Class Responsibilities",id:"class-responsibilities",level:2},{value:"Guidelines for identifying responsibilities",id:"guidelines-for-identifying-responsibilities",level:3},{value:"Assigning Responsibilities",id:"assigning-responsibilities",level:2},{value:"Guidelines",id:"guidelines",level:3},{value:"System and Class Intelligence",id:"system-and-class-intelligence",level:2},{value:"System intelligence",id:"system-intelligence",level:3},{value:"Class Intelligence",id:"class-intelligence",level:3},{value:"Centralised Intelligence",id:"centralised-intelligence",level:3},{value:"Advantage",id:"advantage",level:4},{value:"Disadvantages",id:"disadvantages",level:4},{value:"Distributed Intelligence",id:"distributed-intelligence",level:3},{value:"Responsibility Guidelines",id:"responsibility-guidelines",level:2},{value:"Examining Class Relationships",id:"examining-class-relationships",level:2},{value:"Is-a-Kind-Of (Inheritance)",id:"is-a-kind-of-inheritance",level:3},{value:"Is-Part-Of (Composition)",id:"is-part-of-composition",level:3},{value:"Unassigned Responsibilities",id:"unassigned-responsibilities",level:2}],c={toc:p};function u(e){let{components:i,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:i,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"7-software-design-responsibilities"},"7. Software Design: Responsibilities"),(0,a.kt)("h2",{id:"class-responsibilities"},"Class Responsibilities"),(0,a.kt)("p",null,"Two kinds of responsibilities:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Knowledge maintained by object"),(0,a.kt)("li",{parentName:"ul"},"Actions an object can perform\nShould represent purpose of object in system\nDefine services provided by object to system:"),(0,a.kt)("li",{parentName:"ul"},"Information object can return to client object"),(0,a.kt)("li",{parentName:"ul"},"An action object can perform for client object\nRepresent only publicity available service"),(0,a.kt)("li",{parentName:"ul"},"Other knowledge and actions may need to be implemented by a class, but definition of these should be delayed")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Concentrate on what class does, not how it does it")),(0,a.kt)("h3",{id:"guidelines-for-identifying-responsibilities"},"Guidelines for identifying responsibilities"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Examine verbs in requirements specification",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Each verb may indicate a responsibility, turn passive voice sentences into active voice and examine"))),(0,a.kt)("li",{parentName:"ol"},"Examine information nouns in requirements specification",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"May become an attribute of a class or a part of a composite class "))),(0,a.kt)("li",{parentName:"ol"},"Perform a system walk through",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Scenarios should be based on functional view "))),(0,a.kt)("li",{parentName:"ol"},"Re-examine candidate classes",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Name/statement of class may imply responsibilities. Attributes of the class may need to be managed")))),(0,a.kt)("h2",{id:"assigning-responsibilities"},"Assigning Responsibilities"),(0,a.kt)("p",null,"Identified responsibilities must be assigned to classes."),(0,a.kt)("h3",{id:"guidelines"},"Guidelines"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Distribute system intelligence evenly"),(0,a.kt)("li",{parentName:"ul"},"State responsibilities as generally as possible"),(0,a.kt)("li",{parentName:"ul"},"Keep behaviour(actions) with related information"),(0,a.kt)("li",{parentName:"ul"},"Keep information about one thing in one place")),(0,a.kt)("h2",{id:"system-and-class-intelligence"},"System and Class Intelligence"),(0,a.kt)("h3",{id:"system-intelligence"},"System intelligence"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What the system knows"),(0,a.kt)("li",{parentName:"ul"},"What actions the system can perform"),(0,a.kt)("li",{parentName:"ul"},"The impact the system has on other systems"),(0,a.kt)("li",{parentName:"ul"},"Class intelligence is determined by:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"What services does it provide (server view)"),(0,a.kt)("li",{parentName:"ul"},"What services does it use (client view)")))),(0,a.kt)("h3",{id:"class-intelligence"},"Class Intelligence"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Server view: What class knows, what actions it can perform"),(0,a.kt)("li",{parentName:"ul"},"Client view: How many other classes does the class know. How much does it need to know about those server classes.")),(0,a.kt)("h3",{id:"centralised-intelligence"},"Centralised Intelligence"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Taken to extreme: One object incorporates most/all of system intelligence "),(0,a.kt)("li",{parentName:"ul"},"Centralised control: Top-down design with main program under complete control and other objects serving as simple data structure entities ")),(0,a.kt)("h4",{id:"advantage"},"Advantage"),(0,a.kt)("p",null,"Easier to get initial understanding of overall control flow and information flow: only need to understand one object"),(0,a.kt)("h4",{id:"disadvantages"},"Disadvantages"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hard-wires system behaviour (less adaptable)"),(0,a.kt)("li",{parentName:"ul"},"Integrates multiple design decisions into a single class: makes it less likely that one implementation decision can be changed without affecting others"),(0,a.kt)("li",{parentName:"ul"},"Less code/design sharing"),(0,a.kt)("li",{parentName:"ul"},"Major problem when working in teams")),(0,a.kt)("h3",{id:"distributed-intelligence"},"Distributed Intelligence"),(0,a.kt)("p",null,"Goal - Distribute intelligence as evenly as possible among classes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Minimise number of intelligent classes"),(0,a.kt)("li",{parentName:"ul"},"Aim: all classes are equally intelligent ...")),(0,a.kt)("p",null,"IF a class has particularly long list"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Responsibilities are expressed at too low level of detail"),(0,a.kt)("li",{parentName:"ol"},"Might be able to move some to other classes"),(0,a.kt)("li",{parentName:"ol"},"If still too long, perhaps the class should be subdivided")),(0,a.kt)("h2",{id:"responsibility-guidelines"},"Responsibility Guidelines"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"State responsibilities as generally as possible"),(0,a.kt)("li",{parentName:"ul"},"Leads to more ",(0,a.kt)("em",{parentName:"li"},"shared")," responsibilities"),(0,a.kt)("li",{parentName:"ul"},"May lead to more general classes"),(0,a.kt)("li",{parentName:"ul"},"Keep behaviour with related information"),(0,a.kt)("li",{parentName:"ul"},"Keep information about one thing in one place",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Maintenance should not be shared. Leads to duplication of information"),(0,a.kt)("li",{parentName:"ul"},"If more than one object, must know the information:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Assign the info to the object/class with the least amount of responsibilities"),(0,a.kt)("li",{parentName:"ol"},"Can be collapsed into single object/class if objects require little info"),(0,a.kt)("li",{parentName:"ol"},"Create a new object to take the responsibility of managing the information"))))),(0,a.kt)("li",{parentName:"ul"},"Split shared responsibilities ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Split into more specific components which get distributed")))),(0,a.kt)("h2",{id:"examining-class-relationships"},"Examining Class Relationships"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Application-specific relationships between classes. May be many application-specific relationships between classes, identifying these my indicate new responsibilities. ")),(0,a.kt)("h3",{id:"is-a-kind-of-inheritance"},"Is-a-Kind-Of (Inheritance)"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Look for parent/child relationship"),"\nShared attributes or behaviour can imply this"),(0,a.kt)("h3",{id:"is-part-of-composition"},"Is-Part-Of (Composition)"),(0,a.kt)("p",null,"No shared behaviour implied\nDefines an object hierarchy, not a class hierarchy\nAn object is often composed of parts and has responsibilities for those parts, not vice versa. "),(0,a.kt)("h2",{id:"unassigned-responsibilities"},"Unassigned Responsibilities"),(0,a.kt)("p",null,"Difficulties in assigning responsibilities can occur because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A class is missing - May need to add a class to handle a set of unassigned responsibilities"),(0,a.kt)("li",{parentName:"ul"},"Responsibility could be assigned to more than other class - Sometimes the assignment is not obvious. Make a tentative arbitrary assignment")))}u.isMDXComponent=!0}}]);