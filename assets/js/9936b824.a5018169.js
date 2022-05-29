"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[8691],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=u(a),p=r,h=d["".concat(l,".").concat(p)]||d[p]||c[p]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6013:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={},l=void 0,u={unversionedId:"Year1/Maths 2/22.03.09 - Direct Methods",id:"Year1/Maths 2/22.03.09 - Direct Methods",title:"22.03.09 - Direct Methods",description:"- Cramers Method requires the calculation of 1 determinant of a $n$ order matrix and $n$ determinate of $n$ order matrices",source:"@site/docs/Year1/1043 - Maths 2/22.03.09 - Direct Methods.md",sourceDirName:"Year1/1043 - Maths 2",slug:"/Year1/Maths 2/22.03.09 - Direct Methods",permalink:"/docs/Year1/Maths 2/22.03.09 - Direct Methods",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rouch\xe8-Capelli Theorem",permalink:"/docs/Year1/Maths 2/22.03.02 - Systems of Linear Equations (Part 2)"},next:{title:"Definition of Vector Space",permalink:"/docs/Year1/Maths 2/22.03.23 - Vector Spaces"}},m={},c=[{value:"Elementary Row Operations",id:"elementary-row-operations",level:2},{value:"Equivalent Matrices and Equivalent Systems",id:"equivalent-matrices-and-equivalent-systems",level:2},{value:"Direct Methods",id:"direct-methods",level:2}],d={toc:c};function p(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/Year1/Maths%202/22.02.23%20-%20Systems%20of%20Linear%20Equations#cramers-theorem"},"Cramers Method")," requires the calculation of 1 determinant of a $n$ order matrix and $n$ determinate of $n$ order matrices"),(0,i.kt)("li",{parentName:"ul"},"Means $n!+n(n!)$ elementary operations"),(0,i.kt)("li",{parentName:"ul"},"Need to find alternative methods as takes too long")),(0,i.kt)("h1",{id:"theoretical-foundations-of-direct-methods"},"Theoretical Foundations of Direct Methods"),(0,i.kt)("h2",{id:"elementary-row-operations"},"Elementary Row Operations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"$E_1$: Swap of two rows $a_i$ and $a_j$\n$$a_i \\leftarrow a_j$$\n$$a_j \\leftarrow a_i$$"),(0,i.kt)("li",{parentName:"ul"},"$E_2$: Multiplication of a row $a_i$ by a scalar $\\lambda\\in\\R$\n$$a_i\\leftarrow\\lambda a_i$$"),(0,i.kt)("li",{parentName:"ul"},"$E_3$: Substitution of a row $a_i$ by the sum of the row $a_i$ to another row $a_j$:\n$$a_i\\leftarrow a_i+a_j$$")),(0,i.kt)("h2",{id:"equivalent-matrices-and-equivalent-systems"},"Equivalent Matrices and Equivalent Systems"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Equivalent Matrices"),": Apply the elementary row operations on $A$, obtain new matrix $C\\in\\R_{m,n}$. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Equivalent Systems"),": 2 systems of linear equations in the same variables: $Ax=b$ and $Cx=d$. These two systems are equivalent if they have the same solutions"),(0,i.kt)("p",null,"Consider a system of $m$ linear equations in $n$ variables $Ax=b$. Let $A^c\\in\\R",(0,i.kt)("em",{parentName:"p"},"{m,n+1}$ be the complete matrix associated with this system.\nIf another system of linear equations is associated with a complete matrix $A^{'c}\\in\\R"),"{m,n+1}$ equivalent to $A^c$, then the two systems are equivalent"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"$E_1$: The swap of two rows, the equations of the system are swapped, no effect on the solution of the system"),(0,i.kt)("li",{parentName:"ul"},"$E_2$: Same solutions, modified systems is equivalent to the original one"),(0,i.kt)("li",{parentName:"ul"},"$E_3$: After operation, the modified system is equivalent in solutions to the original one")),(0,i.kt)("h2",{id:"direct-methods"},"Direct Methods"),(0,i.kt)("p",null,"Direct methods are methods for solving systems of linear equations by manipulating the original matrix to produce an equivalent system that can be easily solved. A typical manipulation is the transformation of a system of linear equation into triangular system"),(0,i.kt)("h1",{id:"gaussian-elimination"},"Gaussian Elimination"),(0,i.kt)("p",null,"$Ax=b$"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Construct the complete matrix $A^c$"),(0,i.kt)("li",{parentName:"ol"},"Apply the elementary row operations to obtain a staircase complete matrix and triangular incomplete matrix, that is ",(0,i.kt)("strong",{parentName:"li"},"we add rows to obtain a null element in the desired position")),(0,i.kt)("li",{parentName:"ol"},"Write down the new system of linear equations"),(0,i.kt)("li",{parentName:"ol"},"Solve the $n^{th}$ equations of the system and use the result to solve the $(n-1)^{th}$"),(0,i.kt)("li",{parentName:"ol"},"Continue recursively until the first equation")),(0,i.kt)("p",null,"To obtain the matrix would do:\n$$r^{(2)}",(0,i.kt)("em",{parentName:"p"},"2=r^{(1)}_2+(\\frac{-a^{(1)}"),"{2,1}}{a^{(1)}_{1,1}})\\times r^{(1)}_1$$\nAs it keeps going on, it gets longer and longer, to create a matrices with leading zeros"),(0,i.kt)("p",null,"Dan Method:\n$$a",(0,i.kt)("em",{parentName:"p"},"{n,m}-(a"),"{n,1}\\times a_{n-1,m})$$\nThis completes the first 2 rows and first column. Then have to increase m, to do second column"),(0,i.kt)("h1",{id:"lu-factorisation"},"LU factorisation"),(0,i.kt)("p",null,"Direct method that transforms a Matrix into a matrix product $LU$ where $L$ is a lower triangular matrix having the diagonal elements all equal to 1 and $U$ is an upper triangular matrix\n$$Ax=b\\Rightarrow LUx=b$$\nPose $Ux=y$ solve at first the triangular system $Ly=b$ and then extract $x$ from the triangular system $Ux=y$\nDoes not alter the vector of known terms $b$. "),(0,i.kt)("p",null,"If working with non singular matrix, then split any matrix into a product such that $A=LU$.\nIf non-singular matrix and is square, and has det of 0, then $\\exists!$ lower traingular matrix $L$ having all the diagonal elements equal to 1 and $\\exists!$ upper triangular matrix $U$ such that $A=LU$"),(0,i.kt)("h1",{id:"equivalence-of-gaussian-elimination-and-lu-factorisation"},"Equivalence of Gaussian elimination and LU factorisation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gaussian elimination and LU factorisation are both direct methods"),(0,i.kt)("li",{parentName:"ul"},"They are not identical but they are equivalent"),(0,i.kt)("li",{parentName:"ul"},"Whilst performing the algorithm the LU factorisation is implicitly performed"),(0,i.kt)("li",{parentName:"ul"},"Both Gaussian elimination and LU factorisation have a lower complexity than theoretical methods"),(0,i.kt)("li",{parentName:"ul"},"The complexity is in the order of $n^3$ operations")),(0,i.kt)("h1",{id:"short-introduction-to-iterative-methods"},"Short introduction to Iterative Methods"),(0,i.kt)("p",null,"Jacobi's Method - Starts from an initial guess $x^{(0)}$, iteratively apply some formulas to detect the solution of the system.\nUnlike direct methods that converge to the theoretical solution in a finite time, iterative methods are ",(0,i.kt)("em",{parentName:"p"},"approximate")," since they ",(0,i.kt)("em",{parentName:"p"},"converge"),", under some conditions\n",(0,i.kt)("img",{alt:"de24a6992d8ae1212eee0928d816f2a3.png",src:a(4439).Z,width:"1043",height:"621"})))}p.isMDXComponent=!0},4439:function(e,t,a){t.Z=a.p+"assets/images/de24a6992d8ae1212eee0928d816f2a3-ef9bbcc0ddfc80023d3cf62e14d75dbc.png"}}]);