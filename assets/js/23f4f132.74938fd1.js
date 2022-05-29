"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[7755],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8417:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="How to write good specs",p={unversionedId:"Year1/Software Engineer/Reading/Specs & Prototyping",id:"Year1/Software Engineer/Reading/Specs & Prototyping",title:"How to write good specs",description:"As a specs writer need to trick people into reading your stuff, and not make someone with small brains to leak out through eye-sockets.",source:"@site/docs/Year1/1003 - Software Engineer/Reading/Specs & Prototyping.md",sourceDirName:"Year1/1003 - Software Engineer/Reading",slug:"/Year1/Software Engineer/Reading/Specs & Prototyping",permalink:"/docs/Year1/Software Engineer/Reading/Specs & Prototyping",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Retrospectives vs Post-Mortems",permalink:"/docs/Year1/Software Engineer/Reading/Retrospectives vs Post-Mortems"},next:{title:"TDD - Agile Alliance",permalink:"/docs/Year1/Software Engineer/Reading/TDD and SE Practices"}},c={},u=[],f={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-write-good-specs"},"How to write good specs"),(0,a.kt)("p",null,"As a specs writer need to trick people into reading your stuff, and not make someone with small brains to leak out through eye-sockets."),(0,a.kt)("p",null,"Four Rules:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Be funny",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Best place is inside the examples section"),(0,a.kt)("li",{parentName:"ul"},"If don't think you can be funny due to 'professionalism', then change job "))),(0,a.kt)("li",{parentName:"ol"},"Writing a spec is like writing code for a brain to execute",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Ask yourself if the person reading the spec will understand it at a deep level. "))),(0,a.kt)("li",{parentName:"ol"},"Write as simply as possible",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use the most simple language possible, even if it doesn't seem professional"),(0,a.kt)("li",{parentName:"ul"},"Use big fonts and don't make the page seem full of words, add loads of white space and vary the fonts."),(0,a.kt)("li",{parentName:"ul"},"Screenshots are a must! "))),(0,a.kt)("li",{parentName:"ol"},"Review and reread several times",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"When you find a sentence that isn't super easy to understand, rewrite it."))),(0,a.kt)("li",{parentName:"ol"},"Templates considered harmful",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Don't have sections on templates which aren't an important for every feature"),(0,a.kt)("li",{parentName:"ul"},"Want people to read. Drop the idea of a template")))),(0,a.kt)("h1",{id:"apple-on-prototypes"},"Apple on Prototypes"))}d.isMDXComponent=!0}}]);