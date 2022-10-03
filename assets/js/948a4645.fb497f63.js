"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[6294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=u(n),m=o,p=h["".concat(s,".").concat(m)]||h[m]||c[m]||a;return n?i.createElement(p,r(r({ref:t},d),{},{components:n})):i.createElement(p,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(7462),o=(n(7294),n(3905));const a={},r="Continuous Integration",l={unversionedId:"Year1/Software Engineer/Reading/Continuous Integration",id:"Year1/Software Engineer/Reading/Continuous Integration",title:"Continuous Integration",description:"Development practice where members of a team integrate their work frequently, usually daily. Verified by an automated build (including tests) to detect any errors.",source:"@site/docs/Year1/1003 - Software Engineer/Reading/Continuous Integration.md",sourceDirName:"Year1/1003 - Software Engineer/Reading",slug:"/Year1/Software Engineer/Reading/Continuous Integration",permalink:"/Year1/Software Engineer/Reading/Continuous Integration",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"Code Conventions & Maintainable Code",permalink:"/Year1/Software Engineer/Reading/Coding Conventions and Maintainability"},next:{title:"GANTT and Agile Planning",permalink:"/Year1/Software Engineer/Reading/Gantt Charts and Agile Planning"}},s={},u=[{value:"Practices of Continuous Integration",id:"practices-of-continuous-integration",level:2},{value:"Maintain a single source repository",id:"maintain-a-single-source-repository",level:3},{value:"Automate the Build",id:"automate-the-build",level:3},{value:"Make your build self-testing",id:"make-your-build-self-testing",level:3},{value:"Everyone commits to the mainline every day",id:"everyone-commits-to-the-mainline-every-day",level:3},{value:"Every commit should build the mainline on an integration machine",id:"every-commit-should-build-the-mainline-on-an-integration-machine",level:3},{value:"Fix broken builds immediately",id:"fix-broken-builds-immediately",level:3},{value:"Keep the builds fast",id:"keep-the-builds-fast",level:3},{value:"Test in a clone of the production environment",id:"test-in-a-clone-of-the-production-environment",level:3},{value:"Make it easy for anyone to get the latest executable",id:"make-it-easy-for-anyone-to-get-the-latest-executable",level:3},{value:"Everyone can see whats happening",id:"everyone-can-see-whats-happening",level:3},{value:"Automate deployment",id:"automate-deployment",level:3},{value:"Benefits of continuous integration",id:"benefits-of-continuous-integration",level:2},{value:"Introducing continuous integration",id:"introducing-continuous-integration",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"continuous-integration"},"Continuous Integration"),(0,o.kt)("p",null,"Development practice where members of a team integrate their work frequently, usually daily. Verified by an automated build (including tests) to detect any errors."),(0,o.kt)("p",null,"Originated from Extreme Programming development process."),(0,o.kt)("p",null,"Program off from the mainline. Builds on local machine and run tests, then commits and builds/tests on an integration server. Only then, when it passes all the tests, is the code complete and ready to be merged into mainline. If it doesn't pass the integration server, then the developer can quickly fix the issue and see what caused it (what new sections of code). Similar to how we did the coursework"),(0,o.kt)("h2",{id:"practices-of-continuous-integration"},"Practices of Continuous Integration"),(0,o.kt)("h3",{id:"maintain-a-single-source-repository"},"Maintain a single source repository"),(0,o.kt)("p",null,"Repos and source control arent part of all projects. Everything should be inside the repository, including tests scripts, properties files, database schema, install scripts, and third part libraries. Everything required for a build and sometimes an IDE config, so people can share the same IDE setups."),(0,o.kt)("h3",{id:"automate-the-build"},"Automate the Build"),(0,o.kt)("p",null,"Make use of build environments such as ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ant")," for Java."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Everyone should be able to bring in a virgin machine, check the sources out of the repository, issue a single command, and have a running system on their machine.")),(0,o.kt)("p",null,"Have it so the build tool checks the object files to see if they need to be re compiled depending on if they were edited etc. Can have an IDE build the code on the developers machine but must have a separate one on the main server such as ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ant"),"."),(0,o.kt)("h3",{id:"make-your-build-self-testing"},"Make your build self-testing"),(0,o.kt)("p",null,"Should include automated tests in the build process.\nFor it to be self-testing, the build should fail if one of the tests fails. Should be able to check large portions of the code for any bugs.\nImperfect tests, run frequently, are much better than perfect tests that are never written at all."),(0,o.kt)("h3",{id:"everyone-commits-to-the-mainline-every-day"},"Everyone commits to the mainline every day"),(0,o.kt)("p",null,"Need to update their code with the mainline, build, if it passes then they can commit to the mainline. With commits happening every few hours, a conflict can be detected quickly and not much data would be lost. Because there is only a few hours between commits, there's only so many places where the problem could be hiding."),(0,o.kt)("p",null,"Developers should commit at least once a day, and regularly to find the bugs. This will create less conflicts down the line. This breaks down their work and create a sense they have completed some work."),(0,o.kt)("h3",{id:"every-commit-should-build-the-mainline-on-an-integration-machine"},"Every commit should build the mainline on an integration machine"),(0,o.kt)("p",null,"Developer should do a build on the mainline and fix any bugs, then their commit would be classed as complete. Shouldn't go home until the mainline build has passed. Nightly builds take too long to find bugs as it can be a whole day before anyone discovers them, and a lot of code to go through to find whats caused it."),(0,o.kt)("h3",{id:"fix-broken-builds-immediately"},"Fix broken builds immediately"),(0,o.kt)("p",null,"If mainline fails, fix immediately. Point of CI, is to always have a stable build."),(0,o.kt)("h3",{id:"keep-the-builds-fast"},"Keep the builds fast"),(0,o.kt)("p",null,"Create multiple pipelines.\n",(0,o.kt)("strong",{parentName:"p"},"Commit Build")," - Is the build that is needed when someone commits to the mainline. Needs to be quick. Once complete other people can work on the code with confidence.\nCan run parallel tests on separate machines. Have it so there are two test stages, a 10 min one and a thorough one. This ensures the mainline is in a safe stage, if the 10 min one fails, should be fixed immediately with high importance, whereas the thorough one isn't a drop all scenario."),(0,o.kt)("h3",{id:"test-in-a-clone-of-the-production-environment"},"Test in a clone of the production environment"),(0,o.kt)("p",null,"Should duplicate the production environment as much as possible and to understand the risks you are accepting for every difference between tests and production.  Have an artificial environment for commit tests so they're quick. Secondary testing would have the production clone."),(0,o.kt)("h3",{id:"make-it-easy-for-anyone-to-get-the-latest-executable"},"Make it easy for anyone to get the latest executable"),(0,o.kt)("p",null,"Make sure there is a well known place where people can find the latest executable. "),(0,o.kt)("h3",{id:"everyone-can-see-whats-happening"},"Everyone can see whats happening"),(0,o.kt)("p",null,"Have it so there's lights to know the current state of a build, or even a web page."),(0,o.kt)("h3",{id:"automate-deployment"},"Automate deployment"),(0,o.kt)("p",null,"Need to have scripts which allow the moving of executable around multiple environments. Need to have automated rollback feature. Also seen it where they roll out build to different nodes or users, seeing how they interact and gradually rolling it out."),(0,o.kt)("h2",{id:"benefits-of-continuous-integration"},"Benefits of continuous integration"),(0,o.kt)("p",null,"Most wide ranging benefit of continuous integration is the reduced risk. CI completely removes the long integration blind spot. At all times know where you are. CI also makes it dramatically easier to find bugs and remove them. Since there is only a small amount of code which as been committed, its fresh in memory and can use diff debugging.\nThis results in frequent development which results in users getting new features more rapidly."),(0,o.kt)("h2",{id:"introducing-continuous-integration"},"Introducing continuous integration"),(0,o.kt)("p",null,"One of the first steps is to get the build automated. Having a CI build of a few hours is better than nothing. Getting it down to the 10 min mark is best and ideal. Keep an eye on build times and take action as soon as you start going slower than 10 mins."))}c.isMDXComponent=!0}}]);