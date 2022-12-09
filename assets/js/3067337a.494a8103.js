"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[4751],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=i,d=c["".concat(o,".").concat(h)]||c[h]||m[h]||n;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2707:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(7462),i=(a(7294),a(3905));const n={},l=void 0,s={unversionedId:"Year2/2007/23",id:"Year2/2007/23",title:"23",description:"fil# 23. Virtualisation",source:"@site/docs/Year2/2007/23.md",sourceDirName:"Year2/2007",slug:"/Year2/2007/23",permalink:"/Year2/2007/23",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year2",previous:{title:"22. File System Recovery & Defag",permalink:"/Year2/2007/22"},next:{title:"0. Introduction to Algorithms Correctness and Efficiency",permalink:"/Year2/2009/00"}},o={},p=[{value:"What is Virtualisation",id:"what-is-virtualisation",level:2},{value:"Basic Idea",id:"basic-idea",level:3},{value:"Components",id:"components",level:3},{value:"Main properties",id:"main-properties",level:3},{value:"Requirements for Virtualisation",id:"requirements-for-virtualisation",level:3},{value:"Approaches to Virtualisation",id:"approaches-to-virtualisation",level:2},{value:"Types of hypervisors",id:"types-of-hypervisors",level:3},{value:"VMMs",id:"vmms",level:3},{value:"Native Virtual Machines (Type 1 Hypervisors)",id:"native-virtual-machines-type-1-hypervisors",level:4},{value:"Hosted Virtual Machines (Type 2 Hypervisors)",id:"hosted-virtual-machines-type-2-hypervisors",level:4},{value:"What needs to be",id:"what-needs-to-be",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"fil# 23. Virtualisation\n",(0,i.kt)("em",{parentName:"p"},"09/12/22")),(0,i.kt)("h2",{id:"what-is-virtualisation"},"What is Virtualisation"),(0,i.kt)("h3",{id:"basic-idea"},"Basic Idea"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Abstract hardware of a single computer into several different execution environments."),(0,i.kt)("li",{parentName:"ul"},"Similar to layered approach, but layer creates virtual system (virtual machine) on which operation systems or applications can run several components"),(0,i.kt)("li",{parentName:"ul"},"A failure in a particular VM does not result in bringing down any others."),(0,i.kt)("li",{parentName:"ul"},"Virtual machine visualises an entire physical machine",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Providing the illusion that software has full control over the hardware"),(0,i.kt)("li",{parentName:"ul"},"As implication, you can run multiple instances of the as OS on the same machine.")))),(0,i.kt)("h3",{id:"components"},"Components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Host")," - underlying hardware system"),(0,i.kt)("li",{parentName:"ul"},"Virtual machine manager (VMM) or ",(0,i.kt)("strong",{parentName:"li"},"hypervisor")," - creates and runs virtual machines by providing an interface that is identical to the host"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Guest")," - process provided with virtual copy of the host")),(0,i.kt)("h3",{id:"main-properties"},"Main properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Isolation")," - each VM is independent, so failures do not affect the host"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Encapsulation")," - state can be captured into a file",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Check pointing, migration. It is easier than migrating processes. Just move the memory image that contains OS tables"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Interposition")," - All guest actions go through the monitor which can inspect, modify, deny operations"),(0,i.kt)("li",{parentName:"ul"},"Fewer physical machines save money on hardware and electricity")),(0,i.kt)("h3",{id:"requirements-for-virtualisation"},"Requirements for Virtualisation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Safety")," - the hypervisor should have full control of the virtualised resources"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Fidelity")," - the behaviour of a program on a VM should be identical to that of the same program running on bare hardware. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Efficiency")," - much of the code in the VM should run without intervention by the hypervisor (overheads). For instance with VMware:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CPU intensive apps: 2-10% overhead"),(0,i.kt)("li",{parentName:"ul"},"I/O intensive apps: 25-60% overhead")))),(0,i.kt)("h2",{id:"approaches-to-virtualisation"},"Approaches to Virtualisation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Java VM is very different from the physical machine that runs it")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Like a simulator or emulator that you can run old Nintendo games on")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Full Virtualisation")," - Tries to trick the guest into believing that it has the entire system")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Paravirtualisation")," - VM does not simulate hardware. It offers a set of hypercalls which allows the guest to send explicitly requests to the hypervisor (as a system call offers kernel services to applications)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Process-level virtualisation")," - The aim is to simply allow a process that has written for a different OS to run. Wine in linux to run windows applications; Cygwin to run linux shell on windows"))),(0,i.kt)("h3",{id:"types-of-hypervisors"},"Types of hypervisors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Natives (Type 1)")," - Like an OS, since it is the only programming running in the most privileged mode. Its job is to support multiple copies of the actual hardware"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hosted (Type 2)")," - Relies on a OS to allocate a schedule resources, very much like a regular process\n",(0,i.kt)("img",{src:a(3882).Z,width:"402",height:"254"}))),(0,i.kt)("h3",{id:"vmms"},"VMMs"),(0,i.kt)("h4",{id:"native-virtual-machines-type-1-hypervisors"},"Native Virtual Machines (Type 1 Hypervisors)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hypervisor installs directly on hardware"),(0,i.kt)("li",{parentName:"ul"},"Hypervisor is the real kernel"),(0,i.kt)("li",{parentName:"ul"},"OS runs in user mode",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Virtual kernel mode"),(0,i.kt)("li",{parentName:"ul"},"Privileged instructions need to be processed by the Hypervisor"),(0,i.kt)("li",{parentName:"ul"},"Hardware VT technology will be necessary"))),(0,i.kt)("li",{parentName:"ul"},"Acknowledged as preferred architecture for high-end servers"),(0,i.kt)("li",{parentName:"ul"},"Paravirutalised-based VMs are typically based on type 1 hypervisors")),(0,i.kt)("h4",{id:"hosted-virtual-machines-type-2-hypervisors"},"Hosted Virtual Machines (Type 2 Hypervisors)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Installs and runs VMs as an application on an existing OS"),(0,i.kt)("li",{parentName:"ul"},"Relies on host scheduling. May not be suitable for intensive VM workloads"),(0,i.kt)("li",{parentName:"ul"},"I/O path is slow because it required world switch"),(0,i.kt)("li",{parentName:"ul"},"Process-level virtualisation will reply on type 2 hypervisors. Needs an OS.")),(0,i.kt)("h3",{id:"what-needs-to-be"},"What needs to be"),(0,i.kt)("p",null,"Hypervisor must virtualise:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Privileged instructions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Not safe to let guest kernel run in kernel mode. VM needs two modes; virtual user modes and virtual kernel mode. Both run in real user mode"),(0,i.kt)("li",{parentName:"ul"},"When guest OS executes an instruction that is allowed only when the CPU really is in kernel mode(map virtual pages to physical pages):",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Type-1 hypervisors: In CPU without Virtual Technology the instruction fails, and the OS crashes"),(0,i.kt)("li",{parentName:"ul"},"Type-2 hypervisors could work without VT - privileged instructions are emulated (binary translation)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Trap-and-emulate")," - When attempting a privileged instruction in user mode causes an error(trap). VMM gains control and executes it. Returns control to guest in user mode"))),(0,i.kt)("li",{parentName:"ul"},"CPU",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Need to multiplex VMs on CPU. Can do this with:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Time-slice - Each VM will time slice its OS/Applications during its quantum"))),(0,i.kt)("li",{parentName:"ul"},"For type-1 - Need a relatively simple scheduler"))),(0,i.kt)("li",{parentName:"ul"},"Memory",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The hypervisor partitions memory among VMs; Assigns hardware pages to VM, Needs to control mappings for isolation"),(0,i.kt)("li",{parentName:"ul"},"In each VM, the OS creates and manages page tables. But these tables are not used by the MMU"),(0,i.kt)("li",{parentName:"ul"},"For each VM, the hypervisor creates a shadow page table that maps virtual pages used by the VM onto the actual pages the hypervisor gave it"))),(0,i.kt)("li",{parentName:"ul"},"I/O devices",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Guest OSs cannot interact directly with I/O devices - but the guest OS thinks it 'owns' the device"),(0,i.kt)("li",{parentName:"ul"},"VMM receives interrupts and exceptions"),(0,i.kt)("li",{parentName:"ul"},"Type 1 hypervisors run the drivers"),(0,i.kt)("li",{parentName:"ul"},"Type 2 hypervisors - Driver knows about hypervisor/VMM and cooperates to pass the buck to a real device driver on the underlying host OS")))))}m.isMDXComponent=!0},3882:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/20221209092837-9f7d6ae90075d6d6e0df996a36d5d5fb.png"}}]);