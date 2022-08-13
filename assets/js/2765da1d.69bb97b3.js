"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[1493],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=i,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={},a="22.02.01 - Git",l={unversionedId:"Year1/Software Engineer/22.02.01 - Git",id:"Year1/Software Engineer/22.02.01 - Git",title:"22.02.01 - Git",description:"When using git pull sees if there is a difference between the server and local copy",source:"@site/docs/Year1/1003 - Software Engineer/22.02.01 - Git.md",sourceDirName:"Year1/1003 - Software Engineer",slug:"/Year1/Software Engineer/22.02.01 - Git",permalink:"/Year1/Software Engineer/22.02.01 - Git",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"22.01.31 - Introduction to Software Engineering",permalink:"/Year1/Software Engineer/22.01.31 - Introduction"},next:{title:"22.02.07 - Requirements",permalink:"/Year1/Software Engineer/22.02.07 - Requirements"}},p={},s=[{value:"Top Tips",id:"top-tips",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"220201---git"},"22.02.01 - Git"),(0,i.kt)("p",null,"When using ",(0,i.kt)("inlineCode",{parentName:"p"},"git pull")," sees if there is a difference between the server and local copy\nHave an official source on server and a working copy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keep a history of everything"),(0,i.kt)("li",{parentName:"ul"},"Designed to stop multiple people overwriting changes by mistake"),(0,i.kt)("li",{parentName:"ul"},"Lets you work on copies (branches)")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git add")," - move file to the main code folder\n",(0,i.kt)("inlineCode",{parentName:"p"},"git commit")," - commit into the main code folder\n",(0,i.kt)("inlineCode",{parentName:"p"},"git log")," - See history of code, can see it at any time, step backwards to a previous commit. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- Can roll back an entire git folder\n- Can extract a single file out of an old commit\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git tag")," - Gives friendly name to a commit. Can be a working version that is ready for release"),(0,i.kt)("p",null,"Multiple people have their own copy, ",(0,i.kt)("inlineCode",{parentName:"p"},"git push")," updates to server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- Git will handle anything thats easy, easy when someone else has edited a different bit of the same file\n- When it cant - itll ask you to do it 'intelligently'\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git pull")," - brings down the latest version. Should do it before coding, andbefore pushing to see if there is any changes\n",(0,i.kt)("inlineCode",{parentName:"p"},"git diff")," - show you the difference between the two files\n",(0,i.kt)("inlineCode",{parentName:"p"},"git stash")," - stores everything in process, can then pop it out later. Keeps it secure\n",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," - ignore files to push "),(0,i.kt)("h2",{id:"top-tips"},"Top Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use good commit messages"),(0,i.kt)("li",{parentName:"ul"},"Get on top of markdown, to make things nice"),(0,i.kt)("li",{parentName:"ul"},"Configure your git")))}u.isMDXComponent=!0}}]);