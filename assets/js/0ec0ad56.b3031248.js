"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[5904],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>k});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},o=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,m=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),N=i(t),k=s,h=N["".concat(l,".").concat(k)]||N[k]||c[k]||m;return t?n.createElement(h,r(r({ref:a},o),{},{components:t})):n.createElement(h,r({ref:a},o))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var m=t.length,r=new Array(m);r[0]=N;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:s,r[1]=p;for(var i=2;i<m;i++)r[i]=t[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},4625:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>m,metadata:()=>p,toc:()=>i});var n=t(7462),s=(t(7294),t(3905));const m={},r="16. Virtual Memory & Page Replacement",p={unversionedId:"Year2/2007/16",id:"Year2/2007/16",title:"16. Virtual Memory & Page Replacement",description:"14/11/22",source:"@site/docs/Year2/2007/16.md",sourceDirName:"Year2/2007",slug:"/Year2/2007/16",permalink:"/Year2/2007/16",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"15. Paging & Virtual Memory",permalink:"/Year2/2007/15"},next:{title:"17. Page Replacement, Working/Resident Threads & Thrashing",permalink:"/Year2/2007/17"}},l={},i=[{value:"Virtual Memory",id:"virtual-memory",level:2},{value:"Translation look aside buffers (TLBs)",id:"translation-look-aside-buffers-tlbs",level:3},{value:"Inverted Page Tables",id:"inverted-page-tables",level:3},{value:"Implementation details",id:"implementation-details",level:3},{value:"Demand Paging",id:"demand-paging",level:2},{value:"Pre-Paging",id:"pre-paging",level:2},{value:"Page Replacement",id:"page-replacement",level:2},{value:"Optimal Page Replacement",id:"optimal-page-replacement",level:3},{value:"FIFO",id:"fifo",level:3}],o={toc:i};function c(e){let{components:a,...m}=e;return(0,s.kt)("wrapper",(0,n.Z)({},o,m,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"16-virtual-memory--page-replacement"},"16. Virtual Memory & Page Replacement"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"14/11/22")),(0,s.kt)("h2",{id:"virtual-memory"},"Virtual Memory"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Memory organisation of multi-level page tables",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"The root page table is always maintained in memory"),(0,s.kt)("li",{parentName:"ul"},"Page tables themselves are maintained in virtual memory due to their size"))),(0,s.kt)("li",{parentName:"ul"},"With two levels, every memory reference already becomes 3 times slower:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Assuming that the second level page table is already in main memory"),(0,s.kt)("li",{parentName:"ul"},"Memory access already forms a bottleneck under normal circumstances")))),(0,s.kt)("h3",{id:"translation-look-aside-buffers-tlbs"},"Translation look aside buffers (TLBs)"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Basically  a cache, most used page tables. Associative memory")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"TLBs are usually located inside the MMU",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"They cache the most frequently used page table entries"),(0,s.kt)("li",{parentName:"ul"},"They can be searched in parallel"))),(0,s.kt)("li",{parentName:"ul"},"The principle behind them is similar to other types of caching in operating systems"),(0,s.kt)("li",{parentName:"ul"},"Remember: locality states that processes make a large number of references to a small number of pages")),(0,s.kt)("h3",{id:"inverted-page-tables"},"Inverted Page Tables"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Normal")," - Is proportional to the number of pages in the virtual address space ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2192")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\to")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192")))))," this can be prohibitive for modern machines"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Inverted")," - Size is proportional to the size of main memory"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The inverted table contains one entry for every frame (not page) and it indexes entries by frame number.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"When a process references a page, the OS must search the (entire) inverted page table for the corresponding entry ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2192")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\to")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192")))))," this could be too slow")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Solution: Use a hash function that transforms page numbers into frame numbers")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The frame number will be the index of the inverted page table")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Process Identifier(PID) - The process that owns this page")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Virtual Page Number (VPN) - We don't know if its in memory")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Protection bits (Read/Write/Execution)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Chaining Pointer - The field points toward the next frame that has exactly the same VPN. Need to solve collisions\n",(0,s.kt)("img",{src:t(7065).Z,width:"755",height:"552"})))),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Advantages"),(0,s.kt)("th",{parentName:"tr",align:null},"Disadvantages"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"OS maintains a single inverted page table for all processes"),(0,s.kt)("td",{parentName:"tr",align:null},"Virtual-to-physical translation becomes much harder/slower")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Saves lots of space"),(0,s.kt)("td",{parentName:"tr",align:null},"Hash tables eliminates the need of searching the whole inverted table, need to handle collisions")))),(0,s.kt)("p",null,"TLBs are particularly necessary to improve their performance\nPages are shuttled between primary and secondary memory"),(0,s.kt)("p",null,"Two key decisions have to be made using virtual memory"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Which pages are loaded and when ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2192")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\to")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192")))))," predictions can be made"),(0,s.kt)("li",{parentName:"ul"},"What pages are removed from memory and when ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2192")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\to")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192")))))," page replacement algorithms\nPages are shuttled between primary and secondary memory")),(0,s.kt)("h3",{id:"implementation-details"},"Implementation details"),(0,s.kt)("p",null,"Avoid unnecessary pages and page replacement is important"),(0,s.kt)("p",null,(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"ma")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"ma")))))," = denote the memory access time\n",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"p")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"p")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p")))))," = page fault rate\n",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"t")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"pft")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))," = page fault time\nEffective access time is given by:\n",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msub",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msub"},"T"),(0,s.kt)("mi",{parentName:"msub"},"a")),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"\xd7"),(0,s.kt)("mi",{parentName:"mrow"},"m"),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"+"),(0,s.kt)("mi",{parentName:"mrow"},"p"),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow"},"\xd7"),(0,s.kt)("mi",{parentName:"mrow"},"p")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"T_a = (1-p)\\times ma+pft\\times p")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"T"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.1514em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a")))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"ma"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,s.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"p"))))),"\n",(0,s.kt)("em",{parentName:"p"},"Not considering here TLBs")),(0,s.kt)("h2",{id:"demand-paging"},"Demand Paging"),(0,s.kt)("p",null,"Starts the process with no pages in memory"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"First instruction will immediately cause a page fault"),(0,s.kt)("li",{parentName:"ul"},"More page faults will follow, but they will stabilise over time until moving to the next locality"),(0,s.kt)("li",{parentName:"ul"},"The set of pages that is currently being used is called its working set/resident set\nPages are only loaded when needed")),(0,s.kt)("h2",{id:"pre-paging"},"Pre-Paging"),(0,s.kt)("p",null,"When the process is started, all pages expected to be used could be brought into memory at once"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"This can drastically reduce the page fault rate"),(0,s.kt)("li",{parentName:"ul"},"Retrieving multiple (contiguously stored) pages reduces transfer times\nPre-paging loads pages before page faults are generated")),(0,s.kt)("h2",{id:"page-replacement"},"Page Replacement"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"OS must choose a page to remove when a new one is loaded"),(0,s.kt)("li",{parentName:"ul"},"This choice is made by page replacement algorithms and takes into account",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"When the page is last used/expected to be used again"),(0,s.kt)("li",{parentName:"ul"},"Whether the page has been modified "))),(0,s.kt)("li",{parentName:"ul"},"Replacement choices have to be made intelligently to save time/avoid thrashing ")),(0,s.kt)("h3",{id:"optimal-page-replacement"},"Optimal Page Replacement"),(0,s.kt)("p",null,"Optimal world"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Each page is labelled with the number of instructions that will be executed/length of time before it is used again"),(0,s.kt)("li",{parentName:"ul"},"The page which is not going to be referenced for the longest time is the optimal one to remove\nOptimal approach is not possible to implement"),(0,s.kt)("li",{parentName:"ul"},"It can be used for post execution analysis"),(0,s.kt)("li",{parentName:"ul"},"It provides a lower bound on the number of page faults")),(0,s.kt)("h3",{id:"fifo"},"FIFO"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Maintains a linked list and new pages are added at the end of the list"),(0,s.kt)("li",{parentName:"ul"},"The oldest page at the head of the list is evicted when a page fault occurs"),(0,s.kt)("li",{parentName:"ul"},"The (dis-)advantages are:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Easy to understand/implement"),(0,s.kt)("li",{parentName:"ul"},"It performs poorly ",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mo",{parentName:"mrow"},"\u2192")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\to")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192")))))," heavily used pages are just as likely to be evicted as a lightly used pages")))),(0,s.kt)("p",null,(0,s.kt)("img",{src:t(6099).Z,width:"842",height:"511"})))}c.isMDXComponent=!0},7065:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/20221114000400-53aec572ab0050589608a38cb8faf2aa.png"},6099:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/20221114134223-1ec326b6efe41c468b38520c933a15b4.png"}}]);