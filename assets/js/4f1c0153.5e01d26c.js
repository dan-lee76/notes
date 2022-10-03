"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[2304],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>h});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),c=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=c(e.components);return r.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(t),h=n,y=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return t?r.createElement(y,l(l({ref:a},m),{},{components:t})):r.createElement(y,l({ref:a},m))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9140:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(7462),n=(t(7294),t(3905));const i={},l=void 0,o={unversionedId:"Year1/Programming Paradigms/Java/22.03.17 - Parametric Polymorphism and Boxing",id:"Year1/Programming Paradigms/Java/22.03.17 - Parametric Polymorphism and Boxing",title:"22.03.17 - Parametric Polymorphism and Boxing",description:"Can initialise an array as size 0, then create a new array with required size, copy data from the initial array, then overwrite the initial array with the new array",source:"@site/docs/Year1/1009 - Programming Paradigms/Java/22.03.17 - Parametric Polymorphism and Boxing.md",sourceDirName:"Year1/1009 - Programming Paradigms/Java",slug:"/Year1/Programming Paradigms/Java/22.03.17 - Parametric Polymorphism and Boxing",permalink:"/Year1/Programming Paradigms/Java/22.03.17 - Parametric Polymorphism and Boxing",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"final",permalink:"/Year1/Programming Paradigms/Java/22.03.11 - Patterns and Inner classes"},next:{title:"Iterator Pattern",permalink:"/Year1/Programming Paradigms/Java/22.03.18 - Iterator Pattern"}},s={},c=[{value:"Better way for a generic class",id:"better-way-for-a-generic-class",level:2},{value:"Type Erasure",id:"type-erasure",level:2},{value:"Extracting the data",id:"extracting-the-data",level:2},{value:"Basic Data Types",id:"basic-data-types",level:2},{value:"Autoboxing",id:"autoboxing",level:2},{value:"Summary",id:"summary",level:2}],m={toc:c};function p(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Can initialise an array as size 0, then create a new array with required size, copy data from the initial array, then overwrite the initial array with the new array"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"public class ArrayInt\n{\n    private int size = 0;\n    private int[] data = new int[0];\n    public void add( int val )\n    {\n        int[] newData = new int[size+1];\n        if ( size > 0 )\n            System.arraycopy( data, 0, newData, 0, size);\n        newData[size] = val;\n        size++;\n        data = newData;\n    }\n}\n")),(0,n.kt)("h1",{id:"parametric-polymorphism"},"Parametric Polymorphism"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Most OO languages support this. Can use parametric polymorphism to make a ",(0,n.kt)("strong",{parentName:"li"},"generic")," class which can store ANY type of data"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"One type")," which is ",(0,n.kt)("strong",{parentName:"li"},"parameterised")," on ",(0,n.kt)("strong",{parentName:"li"},"another type"))),(0,n.kt)("h2",{id:"better-way-for-a-generic-class"},"Better way for a generic class"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Parameterise the original class to avoid having to create different types but still check the types at COMPILE time. Need to say which type it stores when creating the object."),(0,n.kt)("li",{parentName:"ul"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"<T>")," after the class name"),(0,n.kt)("li",{parentName:"ul"},"Change types from ",(0,n.kt)("inlineCode",{parentName:"li"},"int")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"T")," throughout ")),(0,n.kt)("h1",{id:"the-problems"},"The problems"),(0,n.kt)("h2",{id:"type-erasure"},"Type Erasure"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type exists at compile time, but not at runtime."),(0,n.kt)("li",{parentName:"ul"},"Type is 'erased' at compile time so runtime sees it as some base-class type(Object)"),(0,n.kt)("li",{parentName:"ul"},"This causes an issue as cannot write code which needs to know the real type at runtime.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"To fix this can use the base class as it IS-AN Object, so create an array of objects instead")))),(0,n.kt)("h2",{id:"extracting-the-data"},"Extracting the data"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Want a T and have an array objects, problem was caused by using Object instead of T"),(0,n.kt)("li",{parentName:"ul"},"To resolve this, can safely cast the object - because we know they are all of type T, from when we stored them")),(0,n.kt)("h2",{id:"basic-data-types"},"Basic Data Types"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"int, bool , float, etc are NOT classes"),(0,n.kt)("li",{parentName:"ul"},"For each basic data type there is a wrapper class, which will wrap up the data in an object."),(0,n.kt)("li",{parentName:"ul"},"Boxing: wrapping up a data type in an object"),(0,n.kt)("li",{parentName:"ul"},"Unboxing: extracting the data again"),(0,n.kt)("li",{parentName:"ul"},"Auto-boxing: automatically doing this")),(0,n.kt)("h2",{id:"autoboxing"},"Autoboxing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Whenever an object is needed, you have a basic data type, the compiler will create the code to convert to the wrapper class automatically"),(0,n.kt)("li",{parentName:"ul"},"Due to this, in many cases can treat basic data types as if they are objects")),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Can create classes which are generic"),(0,n.kt)("li",{parentName:"ul"},"This is Parametric Polymorphism"),(0,n.kt)("li",{parentName:"ul"},"Can create instances of a class which work with a specific other class"),(0,n.kt)("li",{parentName:"ul"},"The class has to do exactly the same thing regardless of the actual class"),(0,n.kt)("li",{parentName:"ul"},"The class will not be known at runtime"),(0,n.kt)("li",{parentName:"ul"},"You CAN use the class type at compile time.")))}p.isMDXComponent=!0}}]);