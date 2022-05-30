"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[2682],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,h=p["".concat(l,".").concat(f)]||p[f]||c[f]||r;return n?o.createElement(h,i(i({ref:t},m),{},{components:n})):o.createElement(h,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5572:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={},l="Rouch\xe8-Capelli Theorem",u={unversionedId:"Year1/1043/22.03.02 - Systems of Linear Equations (Part 2)",id:"Year1/1043/22.03.02 - Systems of Linear Equations (Part 2)",title:"Rouch\xe8-Capelli Theorem",description:"Solutions for systems of linear equations",source:"@site/docs/Year1/1043/22.03.02 - Systems of Linear Equations (Part 2).md",sourceDirName:"Year1/1043",slug:"/Year1/1043/22.03.02 - Systems of Linear Equations (Part 2)",permalink:"/Year1/1043/22.03.02 - Systems of Linear Equations (Part 2)",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Systems of Linear Equations",permalink:"/Year1/1043/22.02.23 - Systems of Linear Equations"},next:{title:"22.03.09 - Direct Methods",permalink:"/Year1/1043/22.03.09 - Direct Methods"}},m={},c=[{value:"Solutions for systems of linear equations",id:"solutions-for-systems-of-linear-equations",level:2},{value:"Theorem",id:"theorem",level:2},{value:"Cases",id:"cases",level:3},{value:"General Solutions of Undetermined Systems",id:"general-solutions-of-undetermined-systems",level:2},{value:"General solution of a system",id:"general-solution-of-a-system",level:2},{value:"Combination of solutions",id:"combination-of-solutions",level:2},{value:"Special Property",id:"special-property",level:2}],p={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rouch\xe8-capelli-theorem"},"Rouch\xe8-Capelli Theorem"),(0,r.kt)("h2",{id:"solutions-for-systems-of-linear-equations"},"Solutions for systems of linear equations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"compatible")," if it has at least one solution"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"determined")," if it has only one solution"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"undetermined")," if it has infinite solutions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"incompatible")," if it has no solutions. Has a split $A^c=A|b$")),(0,r.kt)("h2",{id:"theorem"},"Theorem"),(0,r.kt)("p",null,"$Ax=b$ is compatible if and only if both the complete and incomplete matrices ($A|A^c$) are characterised by the same rank $\\rho",(0,r.kt)("em",{parentName:"p"},"A = \\rho"),"{A^c}=\\rho$ named rank of the system"),(0,r.kt)("h3",{id:"cases"},"Cases"),(0,r.kt)("p",null,"$\\rho",(0,r.kt)("em",{parentName:"p"},"a<\\rho"),"{a^c}$ - Incompatible, no solutions\n$\\rho",(0,r.kt)("em",{parentName:"p"},"a=\\rho"),"{a^c}$ - system is compatible. Under these conditions, three cases can be identified:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"$\\rho",(0,r.kt)("em",{parentName:"li"},"a=\\rho"),"{a^c}=\\rho=n=m$ - System is a Cramers system and can be solved Cramers method "),(0,r.kt)("li",{parentName:"ol"},"$\\rho",(0,r.kt)("em",{parentName:"li"},"a=\\rho"),"{a^c}=\\rho=n<m, \\rho$ equations of the system  compose a Cramers system. The remaining $m-\\rho$ are linear combination of the other, these equations are redundant and only 1 solution"),(0,r.kt)("li",{parentName:"ol"},"$\\rho",(0,r.kt)("em",{parentName:"li"},"a=\\rho"),"{a^c}=\\rho\\begin{cases}< n","\\","\\le m\\end{cases}$ is undetermined and has $\\infty^{n-\\rho}$")),(0,r.kt)("p",null,"How to choose the equations to cancel?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cannot cancel any equations"),(0,r.kt)("li",{parentName:"ul"},"Need to ensure that the cancellation of an equation does not change the rank of the incomplete matrix $A$"),(0,r.kt)("li",{parentName:"ul"},"Have to cancel only linearly dependent equations, that is rows of the matrix $A^c$")),(0,r.kt)("h2",{id:"general-solutions-of-undetermined-systems"},"General Solutions of Undetermined Systems"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select the $\\rho$ rows linearly independent rows of the complete matrix $A^c$"),(0,r.kt)("li",{parentName:"ul"},"Choose (arbitrarily) $n-\\rho$ variables and replace them with parameters"),(0,r.kt)("li",{parentName:"ul"},"Solve the system of linear equations with respect to the remaining variables"),(0,r.kt)("li",{parentName:"ul"},"Express the parametric vector as a sum of vectors, where each parameter appears in only one vector")),(0,r.kt)("h1",{id:"homogeneous-systems-of-linear-equations"},"Homogeneous Systems of Linear Equations"),(0,r.kt)("p",null,"Homogeneous if the vector of known terms $b$ is composed for only zeros and is indicated with O. Solution of at least null vector"),(0,r.kt)("h2",{id:"general-solution-of-a-system"},"General solution of a system"),(0,r.kt)("p",null,"If a solution of the homogeneous system then $\\lambda$ is also a solution to the system"),(0,r.kt)("h2",{id:"combination-of-solutions"},"Combination of solutions"),(0,r.kt)("p",null,"If $\\alpha$ and $\\beta$ are both solutions then every linear combination of these two n-tuple is solution of the system.\n$$\\forall\\lambda,\\mu\\in\\R.(\\lambda\\alpha_1+\\mu\\beta_1,\\lambda\\alpha_2+\\mu\\beta_2,...,\\lambda\\alpha_n+\\mu\\beta_n)$$"),(0,r.kt)("h2",{id:"special-property"},"Special Property"),(0,r.kt)("p",null,"Homogeneous system of $n$ equations in $n+1$ variables. System has $\\infty^1$ solutions proportionate to the n-tuple"))}f.isMDXComponent=!0}}]);