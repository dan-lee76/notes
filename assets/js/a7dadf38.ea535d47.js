"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[304],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},61766:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},l="5. Namespaces and introduction to standard class library",s={unversionedId:"Year2/2006/05",id:"Year2/2006/05",title:"5. Namespaces and introduction to standard class library",description:"16/02/23",source:"@site/docs/Year2/2006/05.md",sourceDirName:"Year2/2006",slug:"/Year2/2006/05",permalink:"/Year2/2006/05",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"4. Structs, Unions, Data Sizes",permalink:"/Year2/2006/04"},next:{title:"6. Classes, Constructors & inline functions",permalink:"/Year2/2006/06"}},o={},p=[{value:"Namespaces and scoping",id:"namespaces-and-scoping",level:2},{value:"Scoping Operator",id:"scoping-operator",level:3},{value:"Standard class library classes",id:"standard-class-library-classes",level:2},{value:"Streams",id:"streams",level:3},{value:"File access",id:"file-access",level:4},{value:"Standard Template Library",id:"standard-template-library",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"5-namespaces-and-introduction-to-standard-class-library"},"5. Namespaces and introduction to standard class library"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"16/02/23")),(0,r.kt)("h2",{id:"namespaces-and-scoping"},"Namespaces and scoping"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Namespaces are used to avoid name conflicts"),(0,r.kt)("li",{parentName:"ul"},"To avoid needing to keep saying ",(0,r.kt)("inlineCode",{parentName:"li"},"<namespace>::")," you can use ",(0,r.kt)("inlineCode",{parentName:"li"},"using namespace >namespace")),(0,r.kt)("li",{parentName:"ul"},"The standard class library is in the ",(0,r.kt)("inlineCode",{parentName:"li"},"std")," namespace")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},"namespace <NamespaceName>\n{\n    //Insert code\n}\n")),(0,r.kt)("h3",{id:"scoping-operator"},"Scoping Operator"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can use the scoping operator to call global functions or access global variables.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"::")," with nothing before it"))),(0,r.kt)("li",{parentName:"ul"},"Also used to denote that a function is a class member in a definition"),(0,r.kt)("li",{parentName:"ul"},"Left of scoping operator is ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"blank")," - to access a global variable/function"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"class name")," - to access member of that class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"namespace name")," - to use that namespace")))),(0,r.kt)("h2",{id:"standard-class-library-classes"},"Standard class library classes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"String class is in the ",(0,r.kt)("inlineCode",{parentName:"li"},"std")," namespace"),(0,r.kt)("li",{parentName:"ul"},"Can be accessed as ",(0,r.kt)("inlineCode",{parentName:"li"},"std::string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string()")," - Default empty string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string(const char* str);")," - From a ",(0,r.kt)("inlineCode",{parentName:"li"},"char*")," type string"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string(const string& str);")," - From another string - copy the constructor")),(0,r.kt)("h3",{id:"streams"},"Streams"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"C++ input/output classes use streams"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"istream cin;")," = ",(0,r.kt)("inlineCode",{parentName:"li"},"stdin")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ostream cout;")," = ",(0,r.kt)("inlineCode",{parentName:"li"},"stdout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ostream cerr;")," = ",(0,r.kt)("inlineCode",{parentName:"li"},"stderr")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endl")," sent to a stream will output ",(0,r.kt)("inlineCode",{parentName:"li"},"\\n")," and flush"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},">>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"<<")," operators overloaded for input/output")),(0,r.kt)("h4",{id:"file-access"},"File access"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ifstream")," object - open the file for input\n",(0,r.kt)("inlineCode",{parentName:"p"},"ofstream")," object - open the file for output\n",(0,r.kt)("inlineCode",{parentName:"p"},"fstream")," object - specify what to open file for\nUse the ",(0,r.kt)("inlineCode",{parentName:"p"},"<<")," and ",(0,r.kt)("inlineCode",{parentName:"p"},">>")," to read/write"),(0,r.kt)("h2",{id:"standard-template-library"},"Standard Template Library"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"These are template classes.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"map")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"list")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"set")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deque")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"multimap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"multiset"))))))}m.isMDXComponent=!0}}]);