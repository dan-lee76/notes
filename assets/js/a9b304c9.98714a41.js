"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[8789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={},o=void 0,l={unversionedId:"Year1/AI/22.02.15 - Machine Learning (INTRO)",id:"Year1/AI/22.02.15 - Machine Learning (INTRO)",title:"22.02.15 - Machine Learning (INTRO)",description:"Machine Learning: definition",source:"@site/docs/Year1/1008-AI/22.02.15 - Machine Learning (INTRO).md",sourceDirName:"Year1/1008-AI",slug:"/Year1/AI/22.02.15 - Machine Learning (INTRO)",permalink:"/Year1/AI/22.02.15 - Machine Learning (INTRO)",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"Introduction to Machine Learning",permalink:"/Year1/AI/22.02.08 - Machine Learning_ ANN"},next:{title:"22.02.22 - Machine Learning_ Techniques",permalink:"/Year1/AI/22.02.22 - Machine Learning_ Techniques"}},s={},c=[{value:"Machine Learning: definition",id:"machine-learning-definition",level:2},{value:"Data",id:"data",level:2},{value:"Process",id:"process",level:2},{value:"Evaluation of models",id:"evaluation-of-models",level:3},{value:"Data Mining",id:"data-mining",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"machine-learning-definition"},"Machine Learning: definition"),(0,r.kt)("p",null,"Program said to learn from experience E with respect to some class of task T and performance measure P if its performance at tasks in T, as measure by P, improved with experience E. Let the program learn by themselves"),(0,r.kt)("h2",{id:"data"},"Data"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Models and algorithms",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Doesn't require knowledge engineers"))),(0,r.kt)("li",{parentName:"ol"},"Powerful and cheaper computation"),(0,r.kt)("li",{parentName:"ol"},"Massive data warehouse")),(0,r.kt)("h2",{id:"process"},"Process"),(0,r.kt)("p",null,"Partition the total dataset into subsets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learning the parameters of the model"),(0,r.kt)("li",{parentName:"ul"},"How to generalise to independent data (issue of overfitting). Unbiased estimate of how well the model works"),(0,r.kt)("li",{parentName:"ul"},"Over fitting - When a statistical model fits exactly against its training data. When this happens the algorithm cannot perform accurately against unseen data")),(0,r.kt)("h3",{id:"evaluation-of-models"},"Evaluation of models"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"70% training, 30% testing"),(0,r.kt)("li",{parentName:"ul"},"Multiple runs using different partitions i.e K-fold cross-validation")),(0,r.kt)("h2",{id:"data-mining"},"Data Mining"),(0,r.kt)("p",null,"Exploration and analysis of large quantities of data to discover valid, novel, useful and understandable patterns in data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Valid: Hold on new data with some certainty"),(0,r.kt)("li",{parentName:"ul"},"Novel: non-obvious to the system"),(0,r.kt)("li",{parentName:"ul"},"Useful: should be possible to act on the item"),(0,r.kt)("li",{parentName:"ul"},"Understandable: humans should be able to interpret the patter/model")),(0,r.kt)("p",null,"Machine Learning: predicts with models\nData mining: explains patterns"))}p.isMDXComponent=!0}}]);