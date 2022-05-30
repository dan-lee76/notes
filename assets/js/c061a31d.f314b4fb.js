"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[7200],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=c(n),d=i,f=y["".concat(s,".").concat(d)]||y[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},63:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={},s=void 0,c={unversionedId:"Year1/AI/22.03.29 - Bayes Rule and Uncertainties",id:"Year1/AI/22.03.29 - Bayes Rule and Uncertainties",title:"22.03.29 - Bayes Rule and Uncertainties",description:"Knowledge Based Systems",source:"@site/docs/Year1/1008-AI/22.03.29 - Bayes Rule and Uncertainties.md",sourceDirName:"Year1/1008-AI",slug:"/Year1/AI/22.03.29 - Bayes Rule and Uncertainties",permalink:"/Year1/AI/22.03.29 - Bayes Rule and Uncertainties",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"22.03.22 - Evolutionary Algorithms",permalink:"/Year1/AI/22.03.22 - Evolutionary Algorithms"},next:{title:"Knowledge Based Systems",permalink:"/Year1/AI/22.04.05 - Knowledge Representation & Reasoning"}},u={},p=[{value:"Knowledge Based Systems",id:"knowledge-based-systems",level:2},{value:"Probability",id:"probability",level:2},{value:"Bayes Rule",id:"bayes-rule",level:2}],y={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"knowledge-based-systems"},"Knowledge Based Systems"),(0,a.kt)("p",null,"To consider decisions we must introduce methods that can cope with uncertainty"),(0,a.kt)("h2",{id:"probability"},"Probability"),(0,a.kt)("p",null,"Basic statistical methods deal with uncertainty via probability"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Probability = (number of desired outcomes)/ (total number of outcomes)")),(0,a.kt)("h2",{id:"bayes-rule"},"Bayes Rule"),(0,a.kt)("p",null,"The fundamental notion of Bayesian Statistics is that of conditional probability\n$$P(H|E)$$\nThe probability of a Hypothesis (H) being true based on evidence (E)"),(0,a.kt)("p",null,"$$P(H|E)=\\frac{P(E|H)*P(H)}{P(E)}$$"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"$P(H|E)$ - Probability that hypothesis is true given evidence"),(0,a.kt)("li",{parentName:"ul"},"$P(E|H)$ - Probability that we will observe evidence given that hypothesis is true"),(0,a.kt)("li",{parentName:"ul"},"$P(H)$ - That ",(0,a.kt)("em",{parentName:"li"},"a priori")," probability that hypothesis is true in the absence of any specific evidence"),(0,a.kt)("li",{parentName:"ul"},"$P(E)$ - Probability of observing ",(0,a.kt)("em",{parentName:"li"},"E")," in the absence of any specific hypothesis")))}d.isMDXComponent=!0}}]);