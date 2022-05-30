"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[169],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5359:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],s={},l="Basis of a Vector Space",c={unversionedId:"Year1/1043/22.03.30 - Vector Spaces 2",id:"Year1/1043/22.03.30 - Vector Spaces 2",title:"Basis of a Vector Space",description:"Basis",source:"@site/docs/Year1/1043/22.03.30 - Vector Spaces 2.md",sourceDirName:"Year1/1043",slug:"/Year1/1043/22.03.30 - Vector Spaces 2",permalink:"/Year1/1043/22.03.30 - Vector Spaces 2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"Definition of Vector Space",permalink:"/Year1/1043/22.03.23 - Vector Spaces"},next:{title:"Basic Definitions of Mappings",permalink:"/Year1/1043/22.04.06 - Linear Mapping"}},p={},d=[{value:"Basis",id:"basis",level:2},{value:"Null Vector and Linear Dependence",id:"null-vector-and-linear-dependence",level:2},{value:"Steinitz Lemma",id:"steinitz-lemma",level:2},{value:"Corollary of the Steinitz Lemma",id:"corollary-of-the-steinitz-lemma",level:3},{value:"Order of a Basis",id:"order-of-a-basis",level:2},{value:"Dimension of a Vector Space",id:"dimension-of-a-vector-space",level:2},{value:"Linear independence and dimension",id:"linear-independence-and-dimension",level:2},{value:"Reduction and Extension of a basis",id:"reduction-and-extension-of-a-basis",level:2},{value:"Unique Representation",id:"unique-representation",level:2},{value:"Grassmanns Formula",id:"grassmanns-formula",level:2}],u={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basis-of-a-vector-space"},"Basis of a Vector Space"),(0,i.kt)("h2",{id:"basis"},"Basis"),(0,i.kt)("p",null,"Vector space is said to be ",(0,i.kt)("em",{parentName:"p"},"finite-dimensional")," if $\\exists$ a finite number of vectors such that the vector space $(L,+,.)=(E,+,.)$ where the span $L$ is $L(v_1..)$."),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"basis")," $B=","{","v_1...","}","$ of $(E,+,.)$ is a set of vectors $\\in E$ that verify the following properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"They are ",(0,i.kt)("a",{parentName:"li",href:"../1043%20-%20Maths%202/22.02.09%20-%20Matrices.md#linear-independence"},"linearly independent")),(0,i.kt)("li",{parentName:"ul"},"They span $E$, i.e. $E = L(v_1..)$")),(0,i.kt)("h2",{id:"null-vector-and-linear-dependence"},"Null Vector and Linear Dependence"),(0,i.kt)("p",null,"If one of the vectors is equal to the null vector, then these vectors are ",(0,i.kt)("a",{parentName:"p",href:"../1043%20-%20Maths%202/22.02.09%20-%20Matrices.md#linear-dependence"},"linear dependent")),(0,i.kt)("h2",{id:"steinitz-lemma"},"Steinitz Lemma"),(0,i.kt)("p",null," $(E,+,.)$ = Finite-dimensional vector space\n$L(v_1..)=E$ = E its span\nLet $w_1...$ be $s$ linearly independent vectors $\\in E$\nFollows that $s\\le n$, the number of a set of linearly independent vectors cannot be higher than the number of vectors spanning the vector space."),(0,i.kt)("h3",{id:"corollary-of-the-steinitz-lemma"},"Corollary of the Steinitz Lemma"),(0,i.kt)("p",null," ^continuation\n$B=","{","w_1...","}","$ be its basis, it follows that $s\\le n$.\nThe vectors composing the basis are linearly independent. For the Steinitzs Lemma, it follows immediately that $s\\le n$"),(0,i.kt)("h1",{id:"dimension-of-a-basis"},"Dimension of a Basis"),(0,i.kt)("h2",{id:"order-of-a-basis"},"Order of a Basis"),(0,i.kt)("p",null,"Number of vectors composing a basis is said ",(0,i.kt)("em",{parentName:"p"},"order of a basis"),"\nAll the bases of a vector spaces have the same order"),(0,i.kt)("h2",{id:"dimension-of-a-vector-space"},"Dimension of a Vector Space"),(0,i.kt)("p",null,"The order of a basis is said dimension is indicated with dim $(E,+,.)$ or dim($E$).\nThe ",(0,i.kt)("em",{parentName:"p"},"dimension")," dim $(E,+,.)=n$ of a vector space is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the maximum number of linearly independent  vectors of E"),(0,i.kt)("li",{parentName:"ul"},"the minimum number of vectors spanning E")),(0,i.kt)("h2",{id:"linear-independence-and-dimension"},"Linear independence and dimension"),(0,i.kt)("p",null,"The vectors span the vectors if and only if they are linearly independent"),(0,i.kt)("h1",{id:"grassmann-formula"},"Grassmann Formula"),(0,i.kt)("h2",{id:"reduction-and-extension-of-a-basis"},"Reduction and Extension of a basis"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Basis Reduction Theorem")," - If some vectors are removed a basis of $(E,+,.)$ is obtained\n",(0,i.kt)("strong",{parentName:"p"},"Basis Extension Theorem")," - Let $w_1..$ be $s$ linearly independent vectors of the vector space. If $w_1..$ are not already a basis, they can be extended to a basis (by adding other linearly independent vectors)"),(0,i.kt)("h2",{id:"unique-representation"},"Unique Representation"),(0,i.kt)("p",null,"If the $n$ vectors are linearly dependent while $n-1$ is linearly independent, there is a unique way to express one vectors as linear combination of others\n(How you would represent other lines with one another, identify them with lambdas)"),(0,i.kt)("h2",{id:"grassmanns-formula"},"Grassmanns Formula"),(0,i.kt)("p",null,"Let $(U,+,.)$ and $(V,+,.)$ be vector subspace of $(E,+,.)$. Then,\n$$dim(U+V)+dim(U\\cap V) = dim(U) + dim(V)$$"))}m.isMDXComponent=!0}}]);