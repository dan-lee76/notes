"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[3905],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=o(t),d=r,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||s;return t?n.createElement(k,i(i({ref:a},m),{},{components:t})):n.createElement(k,i({ref:a},m))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=u;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<s;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},83719:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var n=t(87462),r=(t(67294),t(3905));const s={},i="Design & Graphs + R Advanced",l={unversionedId:"Year3/3021/04",id:"Year3/3021/04",title:"Design & Graphs + R Advanced",description:"Design Criteria",source:"@site/docs/Year3/3021/04.md",sourceDirName:"Year3/3021",slug:"/Year3/3021/04",permalink:"/Year3/3021/04",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year3",previous:{title:"Data and Image + R Fundamentals",permalink:"/Year3/3021/02"},next:{title:"Multivariate Data Visualisation",permalink:"/Year3/3021/05"}},p={},o=[{value:"Design Criteria",id:"design-criteria",level:2},{value:"Choosing Visual Encodings",id:"choosing-visual-encodings",level:3},{value:"Design Criteria to Follow",id:"design-criteria-to-follow",level:3},{value:"Mackinlay&#39;s Design Algorithm",id:"mackinlays-design-algorithm",level:3},{value:"Graphs",id:"graphs",level:2},{value:"Data Processing",id:"data-processing",level:2}],m={toc:o};function c(e){let{components:a,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"design--graphs--r-advanced"},"Design & Graphs + R Advanced"),(0,r.kt)("h2",{id:"design-criteria"},"Design Criteria"),(0,r.kt)("h3",{id:"choosing-visual-encodings"},"Choosing Visual Encodings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Assume k visual encodings and n data attributes. Need to pick the best encoding among a combinatorial set of possibilities of size ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mo",{parentName:"msup",stretchy:"false"},")"),(0,r.kt)("mi",{parentName:"msup"},"k"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(n+1)^k")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0991em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k"))))))))))))),(0,r.kt)("li",{parentName:"ul"},"Principle of consistency - Properties of the image should match the properties of the data"),(0,r.kt)("li",{parentName:"ul"},"Principle of Importance Ordering - Encode the most important information in the most effective way")),(0,r.kt)("h3",{id:"design-criteria-to-follow"},"Design Criteria to Follow"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expressiveness")," - Tell the truth"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Effectiveness")," - Use proper encoding")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(83671).Z,width:"757",height:"433"})),(0,r.kt)("h3",{id:"mackinlays-design-algorithm"},"Mackinlay's Design Algorithm"),(0,r.kt)("p",null,"APT (A Presentation Tool)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User formally specifies data model and type"),(0,r.kt)("li",{parentName:"ul"},"APT searches over design space"),(0,r.kt)("li",{parentName:"ul"},'Output the "most effective" visualisation')),(0,r.kt)("p",null,"Limitations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Does not cover many visualisation techniques",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Networks, maps, 3d etc"))),(0,r.kt)("li",{parentName:"ul"},"Does not consider interaction"),(0,r.kt)("li",{parentName:"ul"},"Does not consider semantics/conventions"),(0,r.kt)("li",{parentName:"ul"},"Assume single visualisation as output")),(0,r.kt)("h2",{id:"graphs"},"Graphs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 - Univariate data"),(0,r.kt)("li",{parentName:"ul"},"2 - Bivariate data"),(0,r.kt)("li",{parentName:"ul"},"3 - Trivariate data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"3 - Hypervariate data")))),(0,r.kt)("h2",{id:"data-processing"},"Data Processing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Need to clear data, and quality")))}c.isMDXComponent=!0},83671:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Pasted image 20241022102909-65cbde88a8b703b6d4d40a89899be260.png"}}]);