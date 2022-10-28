"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[2928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l="5. Documentation and Version Control",i={unversionedId:"Year2/2013/05",id:"Year2/2013/05",title:"5. Documentation and Version Control",description:"24/10/21",source:"@site/docs/Year2/2013/05.md",sourceDirName:"Year2/2013",slug:"/Year2/2013/05",permalink:"/Year2/2013/05",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"4.  Object Oriented Analysis & Design with UML",permalink:"/Year2/2013/04"},next:{title:"6. Object Oriented Design in Depth",permalink:"/Year2/2013/06"}},u={},c=[{value:"Documenting Code",id:"documenting-code",level:2},{value:"Professional Level Source Code Documentation",id:"professional-level-source-code-documentation",level:3},{value:"IDEs",id:"ides",level:3},{value:"Useful Javadoc Tags",id:"useful-javadoc-tags",level:3},{value:"Version Control",id:"version-control",level:2},{value:"Concurrency Management",id:"concurrency-management",level:3},{value:"Working Copy",id:"working-copy",level:3}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"5-documentation-and-version-control"},"5. Documentation and Version Control"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"24/10/21")),(0,a.kt)("h2",{id:"documenting-code"},"Documenting Code"),(0,a.kt)("h3",{id:"professional-level-source-code-documentation"},"Professional Level Source Code Documentation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Code comments are essentials for maintenance as they are key to having another person be able to understand what you have done"),(0,a.kt)("li",{parentName:"ul"},"Semi-Automatic documentation enables:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Standard comment formatting and structure"),(0,a.kt)("li",{parentName:"ul"},"Less typing, some automation"))),(0,a.kt)("li",{parentName:"ul"},"Examples include Doxygen and Javadoc. ")),(0,a.kt)("h3",{id:"ides"},"IDEs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Many tools are build into IDEs, it is great for helping create maintainable code including in-built testing help"),(0,a.kt)("li",{parentName:"ul"},"Javadoc is great for java documentation. This comes with JDK and requires you to tag your code with special comments")),(0,a.kt)("h3",{id:"useful-javadoc-tags"},"Useful Javadoc Tags"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@<tag>")," - Syntax. Generates easy to use HTML based output as a living document.Updated each compile time.\nUseful tags:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@param"),": explain a method parameter"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@return"),": to annotate a method return value"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@throws"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"@exception"),": for your exception handling"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"@deprecated"),": bits of the code you no longer use"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{@code}"),": puts syntax in your documentation ")),(0,a.kt)("h2",{id:"version-control"},"Version Control"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ability to recover old versions and examine source code history"),(0,a.kt)("li",{parentName:"ul"},"Works across networks (fosters collaboration)"),(0,a.kt)("li",{parentName:"ul"},"Similar with a networked file system + backup + additional functionality. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Repository"),": Stores a file system tree. Remembers every change ever written to it"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Concurrency Management"),": Simultaneous occurrence; coincidence. Ways to deal with concurrency:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Problem of file sharing"),(0,a.kt)("li",{parentName:"ul"},"Lock-modify-unlock solution"),(0,a.kt)("li",{parentName:"ul"},"Copy-modify-merge solution"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Lock-Modify-Unlock Solution"),": Serialisation. There is no protection for breaking dependencies between files. False sense of security ")),(0,a.kt)("h3",{id:"concurrency-management"},"Concurrency Management"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Copy-modify-merge model: for text files",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Users work in parallel"),(0,a.kt)("li",{parentName:"ul"},"Concurrent changes are automatically merged"),(0,a.kt)("li",{parentName:"ul"},"Conflicts can generally be managed"))),(0,a.kt)("li",{parentName:"ul"},"The lock-modify-unlock model: for all types")),(0,a.kt)("h3",{id:"working-copy"},"Working Copy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Regular directory tree"),(0,a.kt)("li",{parentName:"ul"},"It does not unless specifically told:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Incorporate others people changes"),(0,a.kt)("li",{parentName:"ul"},"Make your own changes available to others"))),(0,a.kt)("li",{parentName:"ul"},"A typical repository = severl projects"),(0,a.kt)("li",{parentName:"ul"},"Each project = subdirectory")))}p.isMDXComponent=!0}}]);