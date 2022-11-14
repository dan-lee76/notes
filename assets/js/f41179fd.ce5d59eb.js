"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[3174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},l="14. GUIs",o={unversionedId:"Year2/2013/14",id:"Year2/2013/14",title:"14. GUIs",description:"14/11/22",source:"@site/docs/Year2/2013/14.md",sourceDirName:"Year2/2013",slug:"/Year2/2013/14",permalink:"/Year2/2013/14",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"13. Introduction to Maven & Gradle",permalink:"/Year2/2013/13"},next:{title:"Year in Industry",permalink:"/Year2/Misc/Industry"}},s={},p=[{value:"GUIs",id:"guis",level:2},{value:"Peers GUI guidance",id:"peers-gui-guidance",level:2},{value:"Java FX",id:"java-fx",level:2},{value:"Stage and Scene",id:"stage-and-scene",level:3},{value:"Properties &amp; Binding",id:"properties--binding",level:3},{value:"Lambda Expressions",id:"lambda-expressions",level:2},{value:"Node Class",id:"node-class",level:2},{value:"Built-in Layout Panes",id:"built-in-layout-panes",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"14-guis"},"14. GUIs"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"14/11/22")),(0,r.kt)("h2",{id:"guis"},"GUIs"),(0,r.kt)("p",null,"GUIs are a form of user interface that allow users to interact with electronic devices through graphical icons as primary notation, instead of text-based user interfaces, typed etc."),(0,r.kt)("h2",{id:"peers-gui-guidance"},"Peers GUI guidance"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Keep it simple"),(0,r.kt)("li",{parentName:"ol"},"Create consistency and use common elements"),(0,r.kt)("li",{parentName:"ol"},"Be purposeful in page layout"),(0,r.kt)("li",{parentName:"ol"},"Strategically use colour and texture"),(0,r.kt)("li",{parentName:"ol"},"Use typography to create hierarchy and clarity"),(0,r.kt)("li",{parentName:"ol"},"Make sure that the system communicates whats happening"),(0,r.kt)("li",{parentName:"ol"},"Think about the defaults")),(0,r.kt)("p",null,"Under the hood GUIs are event-driven. The user decides the order of execution depending whether they interact with the program. The system is waiting for something to happen"),(0,r.kt)("h2",{id:"java-fx"},"Java FX"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can deploy GUIs to table, phone, desktop"),(0,r.kt)("li",{parentName:"ul"},"Able to separate GUI code from program code using an XML description file (FXML)"),(0,r.kt)("li",{parentName:"ul"},"Supports idea of properties (variables that represent the state of an instantiated object)"),(0,r.kt)("li",{parentName:"ul"},"Can use CSS"),(0,r.kt)("li",{parentName:"ul"},"Special effects/animations supported"),(0,r.kt)("li",{parentName:"ul"},"Comes with media player")),(0,r.kt)("h3",{id:"stage-and-scene"},"Stage and Scene"),(0,r.kt)("p",null,"Stage:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Think of it as an application windows"),(0,r.kt)("li",{parentName:"ul"},"Depending on OS, there may be only one"),(0,r.kt)("li",{parentName:"ul"},"Equivalent to Swing's JFrame\nScene:"),(0,r.kt)("li",{parentName:"ul"},"Equivalent to a content pane"),(0,r.kt)("li",{parentName:"ul"},"Holds other objects")),(0,r.kt)("p",null,"Summary:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the OS allows each application can have multiple stages - windows. Each stage can switch between multiple scenes. Scenes contain nodes - layout and regular components"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{src:n(630).Z,width:"507",height:"186"}))),(0,r.kt)("h3",{id:"properties--binding"},"Properties & Binding"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JavaFX properties (observable containers) are often used in conjunction with binding, a powerful mechanism for expressing direct relationships between variables"),(0,r.kt)("li",{parentName:"ul"},"When objects participate in bindings, changes made to one object will automatically be reflected in another object"),(0,r.kt)("li",{parentName:"ul"},"Can also change listeners to be notified when the property value has changed")),(0,r.kt)("h2",{id:"lambda-expressions"},"Lambda Expressions"),(0,r.kt)("p",null,"Short blocks of code which take in parameters and return a value\nFrom:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'btn.setOnAction(new EventHandler<ActionEvent>() {\n    @Override\n    public void handle(ActionEvent event) {\n        System.out.println("Bye!");\n        System.exit(0);\n    }\n})\n')),(0,r.kt)("p",null,"To:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'btn.setOnAction(e->{\n    System.out.println("Bye!");\n    System.exit(0);\n})\n')),(0,r.kt)("h2",{id:"node-class"},"Node Class"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fundamental to JavaFX"),(0,r.kt)("li",{parentName:"ul"},"Used to represent controls, layouts, shapes. "),(0,r.kt)("li",{parentName:"ul"},"Can apply effects to nodes")),(0,r.kt)("h2",{id:"built-in-layout-panes"},"Built-in Layout Panes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Vbox"),": Provides an easy way for arranging a series of nodes in a single row"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TilePane"),": Places all of the nodes in a grid in which each cell, or tile, is the same size. Nodes can be laid out horizontally (in rows) or vertically (in columns)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GridPane"),": Allows to create a flexible grid of rows and columns in which to lay out nodes; nodes can be placed in any cell in the grid and can span cells as needed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BorderPane"),": Provides fine regions in which to place nodes; top, bottom, left, right, and centre"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HBox"),": Provides an easy way for arranging a series of nodes in a single column"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FlowPane"),": Nodes are laid out consecutively and wrap at the boundary set for the pane; nodes can flow vertically(in columns) or horizontally (in rows)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"StackPane"),": Places all of the nodes within a single stack with each new node added on top of the previous"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AnchorPane"),": Allows to anchor nodes to the top, bottom, left side, right side, or centre of the pane; as the window is resized, the nodes maintain their position relative to their anchor point\n",(0,r.kt)("img",{src:n(7543).Z,width:"627",height:"366"}))))}u.isMDXComponent=!0},630:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Pasted image 20221114172910-4487d734085b814d53ec88d6345ecb94.png"},7543:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Pasted image 20221114201713-3662152a2c2043d68b67f637027961e9.png"}}]);