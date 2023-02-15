"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[575],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return r?a.createElement(f,i(i({ref:t},m),{},{components:r})):a.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79113:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},i="Iterator Pattern",l={unversionedId:"Year1/Programming Paradigms/Java/22.03.18 - Iterator Pattern",id:"Year1/Programming Paradigms/Java/22.03.18 - Iterator Pattern",title:"Iterator Pattern",description:"- Method to move through (iterate through) the elements of something",source:"@site/docs/Year1/1009 - Programming Paradigms/Java/22.03.18 - Iterator Pattern.md",sourceDirName:"Year1/1009 - Programming Paradigms/Java",slug:"/Year1/Programming Paradigms/Java/22.03.18 - Iterator Pattern",permalink:"/Year1/Programming Paradigms/Java/22.03.18 - Iterator Pattern",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"22.03.17 - Parametric Polymorphism and Boxing",permalink:"/Year1/Programming Paradigms/Java/22.03.17 - Parametric Polymorphism and Boxing"},next:{title:"Alternatives to Inner Classes",permalink:"/Year1/Programming Paradigms/Java/22.03.25 - Anonymous Classes"}},s={},c=[{value:"Java support for Iterator and Iterable",id:"java-support-for-iterator-and-iterable",level:2},{value:"Two interfaces to know",id:"two-interfaces-to-know",level:2}],m={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"iterator-pattern"},"Iterator Pattern"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Method to move through (iterate through) the elements of something"),(0,n.kt)("li",{parentName:"ul"},"Retrieve an iterator, which remembers its position and allows you to move to the next element"),(0,n.kt)("li",{parentName:"ul"},"Retrieve/create an iterator, which remembers its position and allows you to move to the next element")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"eacc8f14059762efcd0d99ef9b6b09dd.png",src:r(60068).Z,width:"725",height:"288"})),(0,n.kt)("h2",{id:"java-support-for-iterator-and-iterable"},"Java support for Iterator and Iterable"),(0,n.kt)("p",null,"Iterator interface exists. For each loops can be used with them - simplified version"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public interface Iterator<T>{\n    boolean hasNext();\n    T next();\n}\n")),(0,n.kt)("p",null,"Iterable interface also exists, to create an Iterator. "),(0,n.kt)("h2",{id:"two-interfaces-to-know"},"Two interfaces to know"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Iterable (on the container to iterate through). Interface with a method to create an iterator"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Iterator <T> iterator()")),(0,n.kt)("li",{parentName:"ul"},"Iterator (object to do the iteration). Interface to allow checking if there is a next object and if so retrieving it and moving on"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"boolean hasNext() \\n T next()"))))}p.isMDXComponent=!0},60068:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/eacc8f14059762efcd0d99ef9b6b09dd-ed3dd763f82e46056c1a0a93427ab3a7.png"}}]);