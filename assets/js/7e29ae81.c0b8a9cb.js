"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[8205],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(a),c=n,N=p["".concat(o,".").concat(c)]||p[c]||d[c]||i;return a?r.createElement(N,s(s({ref:t},u),{},{components:a})):r.createElement(N,s({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var m=2;m<i;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},45777:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const i={},s="6. Name Services and DNS",l={unversionedId:"Year2/2014/06",id:"Year2/2014/06",title:"6. Name Services and DNS",description:"24/02/23",source:"@site/docs/Year2/2014/06.md",sourceDirName:"Year2/2014",slug:"/Year2/2014/06",permalink:"/Year2/2014/06",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"5. Java RMI",permalink:"/Year2/2014/05"},next:{title:"7.  WWW and HTPP",permalink:"/Year2/2014/07"}},o={},m=[{value:"Name Services and Directory Services",id:"name-services-and-directory-services",level:2},{value:"Names",id:"names",level:3},{value:"Names in distributed systems",id:"names-in-distributed-systems",level:3},{value:"URIs, URNs, URLs",id:"uris-urns-urls",level:3},{value:"Name Services",id:"name-services",level:3},{value:"Example: JavaRMI Registry",id:"example-javarmi-registry",level:3},{value:"Summary",id:"summary",level:3},{value:"DNS - Domain Name System",id:"dns---domain-name-system",level:2},{value:"Lesser used recrods",id:"lesser-used-recrods",level:3},{value:"Multiple Records/values",id:"multiple-recordsvalues",level:3},{value:"Administrative Domains",id:"administrative-domains",level:3},{value:"Name resolution",id:"name-resolution",level:3},{value:"Cacheing",id:"cacheing",level:3},{value:"Other Notes on DNS",id:"other-notes-on-dns",level:3},{value:"Summary",id:"summary-1",level:3}],u={toc:m};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"6-name-services-and-dns"},"6. Name Services and DNS"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"24/02/23")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://moodle.nottingham.ac.uk/pluginfile.php/9396608/mod_page/content/1/08%20Name%20Services%20and%20DNS.pdf"},"MoodlePDF")),(0,n.kt)("h2",{id:"name-services-and-directory-services"},"Name Services and Directory Services"),(0,n.kt)("h3",{id:"names"},"Names"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Name")," uniquely distinguishes one thing from other like it"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Identifiers")," are names intended for machine use"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Descriptions")," are statements about some aspect of a thing")),(0,n.kt)("h3",{id:"names-in-distributed-systems"},"Names in distributed systems"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pure name")," is just an array of bits"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Address")," specifically ",(0,n.kt)("strong",{parentName:"li"},"locates")," a resource"),(0,n.kt)("li",{parentName:"ul"},"Different ",(0,n.kt)("strong",{parentName:"li"},"services")," may use different name")),(0,n.kt)("h3",{id:"uris-urns-urls"},"URIs, URNs, URLs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Uniform Resource Identifiers (URI)")," - service-independent names"),(0,n.kt)("li",{parentName:"ul"},"Uniform resource Names (URNs) - pure names"),(0,n.kt)("li",{parentName:"ul"},"Uniform Resource Locators (URLs) - include information to locate and access a resource")),(0,n.kt)("h3",{id:"name-services"},"Name Services"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Name Service")," - Names are bound to attributes of the object/resource"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Name Space")," - Is the set of possible names in a name service. May be flat or hierarchical. Given name may be bound or unbound. Can be subdivided into name contexts"),(0,n.kt)("li",{parentName:"ul"},"Can be independent of the distributed system")),(0,n.kt)("h3",{id:"example-javarmi-registry"},"Example: JavaRMI Registry"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The rmiregistry application provides the name service")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Directory Services")," allow clients to look up names or address using more flexible queries. SQL-like queries over attribute values"),(0,n.kt)("h3",{id:"summary"},"Summary"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A name distinguishes one particular thing from others like it",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Identifiers are names typically intended for machine use"))),(0,n.kt)("li",{parentName:"ul"},"A name service allows a (pure) name to be resolved to an address or other attributes bound to that name"),(0,n.kt)("li",{parentName:"ul"},"WWW URI includes URLs and URNs"),(0,n.kt)("li",{parentName:"ul"},"A directory service allows resources to be looked up flexibly than a name service")),(0,n.kt)("h2",{id:"dns---domain-name-system"},"DNS - Domain Name System"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name space is hierarchical, comprising",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Name components or labels"))),(0,n.kt)("li",{parentName:"ul"},"Absolute but not relative. Default domains are often configured to try as a possible suffix for unqualified names"),(0,n.kt)("li",{parentName:"ul"},"Attributes are encoded as ",(0,n.kt)("strong",{parentName:"li"},"Resource Records")," of various types for various purposes"),(0,n.kt)("li",{parentName:"ul"},"Host name resolution, i.e. mapping a domain name to an IP address",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DNS A and AAAA records - IP addresses"),(0,n.kt)("li",{parentName:"ul"},"CNAME records specify an aliases. Automatically checked when resolving a domain name to an IP address")))),(0,n.kt)("h3",{id:"lesser-used-recrods"},"Lesser used recrods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Mail host location")," - finding mail server to send internet mail to (MX records)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Reverse resolution")," - IP address to domain name. Uses PTR records"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Host Information")," - OS. Uses HINFO records"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Service Lookup")," - Bonjour/DNS-SD. Uses dns SRV records ",(0,n.kt)("a",{parentName:"li",href:"#14.md"},"Lecture 15")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Arbitrary Information")," - TXT records")),(0,n.kt)("h3",{id:"multiple-recordsvalues"},"Multiple Records/values"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Single domain name can have multiple records of the ",(0,n.kt)("strong",{parentName:"li"},"same")," type"),(0,n.kt)("li",{parentName:"ul"},"Multiple NS/MX/A records. ")),(0,n.kt)("h3",{id:"administrative-domains"},"Administrative Domains"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Administrative domain")," - Subset of namespace with a single administrative authority"),(0,n.kt)("li",{parentName:"ul"},"Can correspond to a domain name suffix"),(0,n.kt)("li",{parentName:"ul"},"Authorities look after that root domain e.g .uk, .ac.uk, .com. Should be non-profit organisations.")),(0,n.kt)("h3",{id:"name-resolution"},"Name resolution"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DNS name resolution is performed by a resolver "),(0,n.kt)("li",{parentName:"ul"},"First name server may not know the answer, but knows the address of a different name server to ask"),(0,n.kt)("li",{parentName:"ul"},"Steps can be handled",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Iteratively")," - Resolver asks each name server in turn, or"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Recursively")," - the first server ask is the second and so on")))),(0,n.kt)("h3",{id:"cacheing"},"Cacheing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Every response has a time to live (ttl)"),(0,n.kt)("li",{parentName:"ul"},"This determines how long things are cached for"),(0,n.kt)("li",{parentName:"ul"},"This is critical to the performance of DNS"),(0,n.kt)("li",{parentName:"ul"},"Cached responses are non-authoritative")),(0,n.kt)("h3",{id:"other-notes-on-dns"},"Other Notes on DNS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Dynamic DNS (DDNS) - Records may be updated automatically"),(0,n.kt)("li",{parentName:"ul"},"Rather insecure, secure extensions for DNS (DNSSEC) are not universally available/used"),(0,n.kt)("li",{parentName:"ul"},"DNS over HTTPS (DOH) is a proposed standard for browsers to do DNS over HTTPS to trusted DoH servers"),(0,n.kt)("li",{parentName:"ul"},"DNS can be done by multicast without a server"),(0,n.kt)("li",{parentName:"ul"},"DNS is also used to exfiltrate data or as a hidden control channel")),(0,n.kt)("h3",{id:"summary-1"},"Summary"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DNS is a global name service used in the internet",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Supports host name resolution (A records), service aliases (CNAME)"))),(0,n.kt)("li",{parentName:"ul"},"DNS is divided into administrative domains or zones",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Each is independently controlled and partially deligated"))),(0,n.kt)("li",{parentName:"ul"},"DNS clients use a resolver to resolve domain names."),(0,n.kt)("li",{parentName:"ul"},"DNS includes caching in resolvers and servers for scalability and performance")))}d.isMDXComponent=!0}}]);