"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[4623],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5068:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={},l="Code Conventions",u={unversionedId:"Year1/Software Engineer/Reading/Coding Conventions and Maintainability",id:"Year1/Software Engineer/Reading/Coding Conventions and Maintainability",title:"Code Conventions",description:"Maintainability is a desired property of software. Software maintenance is about responding to change using both current and new software assets.",source:"@site/docs/Year1/1003 - Software Engineer/Reading/Coding Conventions and Maintainability.md",sourceDirName:"Year1/1003 - Software Engineer/Reading",slug:"/Year1/Software Engineer/Reading/Coding Conventions and Maintainability",permalink:"/Year1/Software Engineer/Reading/Coding Conventions and Maintainability",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"Overview",permalink:"/Year1/Software Engineer/Reading/10 Reasons why systems projects fail"},next:{title:"Continuous Integration",permalink:"/Year1/Software Engineer/Reading/Continuous Integration"}},c={},d=[],p={toc:d};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"code-conventions"},"Code Conventions"),(0,o.kt)("p",null,"Maintainability is a desired property of software. Software maintenance is about responding to change using both current and new software assets.\nComplex software can become maintainable when it is understandable, whether through good documentation or through improved code readability"),(0,o.kt)("p",null,"Code conventions appear to support maintainability over a wide range of contexts, and benefit the entire organisation."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Not all relevant, and aren't always used when in a rush"),(0,o.kt)("li",{parentName:"ul"},"Some conventions may seem important to some but others would disagree"),(0,o.kt)("li",{parentName:"ul"},"Is normally secondary to compliance with functional specifications"),(0,o.kt)("li",{parentName:"ul"},"On avg, the more code was added, more violations appeared. These were mainly commenting and final local variable violations. These accounted for 2/3 of the violations"),(0,o.kt)("li",{parentName:"ul"},"Also prevalent were instances of numeric and string literals hard-coded into source code, and missing braces")),(0,o.kt)("h1",{id:"maintainable-code"},"Maintainable Code"),(0,o.kt)("p",null,"Allows you to quickly and easily:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fix a bug, without introducing a new bug as you do so"),(0,o.kt)("li",{parentName:"ul"},"Add new features, without introducing bugs as you do so"),(0,o.kt)("li",{parentName:"ul"},"Improve Usability"),(0,o.kt)("li",{parentName:"ul"},"Increase performance"),(0,o.kt)("li",{parentName:"ul"},"Make a fix that prevents a bug from occurring in future"),(0,o.kt)("li",{parentName:"ul"},"Make changes to support new environments, operating systems or tools"),(0,o.kt)("li",{parentName:"ul"},"Bring new developers on board your project")),(0,o.kt)("p",null,"Need to make the code understandable, so add comments and make it easy to understand\nMaking code maintainable is especially useful in open source as can get over people to fix issues and the project can keep going on "),(0,o.kt)("p",null,"Have code review to ensure its understandable and there are no errors.\nCode reviews and pair programming are good uses to help maintainability. Only use them where errors are prone and highest impact on successful function"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Need to be able to understand the code after programming it (after few months)"),(0,o.kt)("li",{parentName:"ul"},"Make sure the code is easy to change"),(0,o.kt)("li",{parentName:"ul"},"Easy to verify a change"),(0,o.kt)("li",{parentName:"ul"},"Can you make a change with only a low risk of breaking existing features, if it does break is it easy to fix?")))}f.isMDXComponent=!0}}]);