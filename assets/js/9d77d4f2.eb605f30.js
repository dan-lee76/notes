"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[8665],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,o(o({ref:n},u),{},{components:t})):r.createElement(m,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7094:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],s={},l=void 0,c={unversionedId:"Year1/AI/22.02.22 - Machine Learning_ Techniques",id:"Year1/AI/22.02.22 - Machine Learning_ Techniques",title:"22.02.22 - Machine Learning_ Techniques",description:"Types of Tasks",source:"@site/docs/Year1/1008-AI/22.02.22 - Machine Learning_ Techniques.md",sourceDirName:"Year1/1008-AI",slug:"/Year1/AI/22.02.22 - Machine Learning_ Techniques",permalink:"/Year1/AI/22.02.22 - Machine Learning_ Techniques",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"22.02.15 - Machine Learning (INTRO)",permalink:"/Year1/AI/22.02.15 - Machine Learning (INTRO)"},next:{title:"22.03.01 - Search Space and Search Tree",permalink:"/Year1/AI/22.03.01 - Search Space and Search Tree"}},u={},p=[{value:"Types of Tasks",id:"types-of-tasks",level:2},{value:"Supervised Learning",id:"supervised-learning",level:2},{value:"Regression",id:"regression",level:3},{value:"Decision Tree",id:"decision-tree",level:3},{value:"Neural Networks",id:"neural-networks",level:3},{value:"Supervised Learning: Applications",id:"supervised-learning-applications",level:2},{value:"Clustering",id:"clustering",level:3},{value:"Association Rules",id:"association-rules",level:3}],d={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"types-of-tasks"},"Types of Tasks"),(0,a.kt)("p",null,"Supervised Learning - Function from labelled training data, each example consisting of an input and a desired output (Classifications, regression)"),(0,a.kt)("p",null,"Unsupervised Learning - Function to describe hidden structure from unlabelled data. There is basically no output"),(0,a.kt)("p",null,"Classification - Learn to predict to which set a instance belongs to based on pre-labeled (classified) instances\nSupervised learning, many approaches: regression, decision trees, neural networks"),(0,a.kt)("h2",{id:"supervised-learning"},"Supervised Learning"),(0,a.kt)("h3",{id:"regression"},"Regression"),(0,a.kt)("p",null,"Estimated relationship between variable Y and variable(s) X\nFunction: Based on the given data to minimise its mean squared error (MSE) to 'fit' the data"),(0,a.kt)("h3",{id:"decision-tree"},"Decision Tree"),(0,a.kt)("p",null,"Internal Nodes: decision rules on features (decision variables, input)\nLeaf Nodes: a predicted class label(output)\n|Pros|Cons|\n|----|----|\n|Reasonable training time| Only simple decision boundaries|\n|Handle large features|Problem with lots of missing data|\n|Easy to implement|Cannot handle complicated relationship|\n|Easy to interpret| "),(0,a.kt)("h3",{id:"neural-networks"},"Neural Networks"),(0,a.kt)("p",null,"Set of neurons connected by directed weighted edges\n|Pros|Cons|\n|----|----|\n|Cam learn more complicated class boundaries|Hard to implement|\n|Can be more accurate| Slow training time|\n|Can handle large number of features|Can over fit the data|\n| |Hard to interpret|"),(0,a.kt)("h2",{id:"supervised-learning-applications"},"Supervised Learning: Applications"),(0,a.kt)("h3",{id:"clustering"},"Clustering"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Given: Un-labeled data set D and Similarity/distance metric"),(0,a.kt)("li",{parentName:"ul"},"Goal: Find 'natural' partitioning, or groups of similar data points"),(0,a.kt)("li",{parentName:"ul"},"Application: Divide a market into distinct subsets of customers")),(0,a.kt)("h3",{id:"association-rules"},"Association Rules"),(0,a.kt)("p",null,"Discover correlation between any two or more variables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Given: Set of records containing items"),(0,a.kt)("li",{parentName:"ul"},"Goal: Produce dependency rules, to predict occurrence of one variable based on occurrences of another variable"),(0,a.kt)("li",{parentName:"ul"},"Application: Market basket analysis")),(0,a.kt)("p",null,"Correlation $\\ne$ Causation"))}f.isMDXComponent=!0}}]);