"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[2304],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=n,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||i;return a?r.createElement(d,o(o({ref:t},u),{},{components:a})):r.createElement(d,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9140:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],l={},s=void 0,c={unversionedId:"Year1/Programming Paradigms/Java/22.03.17 - Parametric Polymorphism and Boxing",id:"Year1/Programming Paradigms/Java/22.03.17 - Parametric Polymorphism and Boxing",title:"22.03.17 - Parametric Polymorphism and Boxing",description:"Can initialise an array as size 0, then create a new array with required size, copy data from the initial array, then overwrite the initial array with the new array",source:"@site/docs/Year1/1009 - Programming Paradigms/Java/22.03.17 - Parametric Polymorphism and Boxing.md",sourceDirName:"Year1/1009 - Programming Paradigms/Java",slug:"/Year1/Programming Paradigms/Java/22.03.17 - Parametric Polymorphism and Boxing",permalink:"/Year1/Programming Paradigms/Java/22.03.17 - Parametric Polymorphism and Boxing",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"final",permalink:"/Year1/Programming Paradigms/Java/22.03.11 - Patterns and Inner classes"},next:{title:"Iterator Pattern",permalink:"/Year1/Programming Paradigms/Java/22.03.18 - Iterator Pattern"}},u={},m=[{value:"Better way for a generic class",id:"better-way-for-a-generic-class",level:2},{value:"Type Erasure",id:"type-erasure",level:2},{value:"Extracting the data",id:"extracting-the-data",level:2},{value:"Basic Data Types",id:"basic-data-types",level:2},{value:"Autoboxing",id:"autoboxing",level:2},{value:"Summary",id:"summary",level:2}],p={toc:m};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Can initialise an array as size 0, then create a new array with required size, copy data from the initial array, then overwrite the initial array with the new array"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class ArrayInt\n{\n    private int size = 0;\n    private int[] data = new int[0];\n    public void add( int val )\n    {\n        int[] newData = new int[size+1];\n        if ( size > 0 )\n            System.arraycopy( data, 0, newData, 0, size);\n        newData[size] = val;\n        size++;\n        data = newData;\n    }\n}\n")),(0,i.kt)("h1",{id:"parametric-polymorphism"},"Parametric Polymorphism"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Most OO languages support this. Can use parametric polymorphism to make a ",(0,i.kt)("strong",{parentName:"li"},"generic")," class which can store ANY type of data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"One type")," which is ",(0,i.kt)("strong",{parentName:"li"},"parameterised")," on ",(0,i.kt)("strong",{parentName:"li"},"another type"))),(0,i.kt)("h2",{id:"better-way-for-a-generic-class"},"Better way for a generic class"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parameterise the original class to avoid having to create different types but still check the types at COMPILE time. Need to say which type it stores when creating the object."),(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"<T>")," after the class name"),(0,i.kt)("li",{parentName:"ul"},"Change types from ",(0,i.kt)("inlineCode",{parentName:"li"},"int")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"T")," throughout ")),(0,i.kt)("h1",{id:"the-problems"},"The problems"),(0,i.kt)("h2",{id:"type-erasure"},"Type Erasure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type exists at compile time, but not at runtime."),(0,i.kt)("li",{parentName:"ul"},"Type is 'erased' at compile time so runtime sees it as some base-class type(Object)"),(0,i.kt)("li",{parentName:"ul"},"This causes an issue as cannot write code which needs to know the real type at runtime.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"To fix this can use the base class as it IS-AN Object, so create an array of objects instead")))),(0,i.kt)("h2",{id:"extracting-the-data"},"Extracting the data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Want a T and have an array objects, problem was caused by using Object instead of T"),(0,i.kt)("li",{parentName:"ul"},"To resolve this, can safely cast the object - because we know they are all of type T, from when we stored them")),(0,i.kt)("h2",{id:"basic-data-types"},"Basic Data Types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"int, bool , float, etc are NOT classes"),(0,i.kt)("li",{parentName:"ul"},"For each basic data type there is a wrapper class, which will wrap up the data in an object."),(0,i.kt)("li",{parentName:"ul"},"Boxing: wrapping up a data type in an object"),(0,i.kt)("li",{parentName:"ul"},"Unboxing: extracting the data again"),(0,i.kt)("li",{parentName:"ul"},"Auto-boxing: automatically doing this")),(0,i.kt)("h2",{id:"autoboxing"},"Autoboxing"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Whenever an object is needed, you have a basic data type, the compiler will create the code to convert to the wrapper class automatically"),(0,i.kt)("li",{parentName:"ul"},"Due to this, in many cases can treat basic data types as if they are objects")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can create classes which are generic"),(0,i.kt)("li",{parentName:"ul"},"This is Parametric Polymorphism"),(0,i.kt)("li",{parentName:"ul"},"Can create instances of a class which work with a specific other class"),(0,i.kt)("li",{parentName:"ul"},"The class has to do exactly the same thing regardless of the actual class"),(0,i.kt)("li",{parentName:"ul"},"The class will not be known at runtime"),(0,i.kt)("li",{parentName:"ul"},"You CAN use the class type at compile time.")))}h.isMDXComponent=!0}}]);