"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[9018],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),A=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=A(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=A(n),g=i,b=d["".concat(o,".").concat(g)]||d[g]||p[g]||l;return n?a.createElement(b,r(r({ref:t},u),{},{components:n})):a.createElement(b,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var A=2;A<l;A++)r[A]=n[A];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7192:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return s},metadata:function(){return A},toc:function(){return p}});var a=n(7462),i=n(3366),l=(n(7294),n(3905)),r=["components"],s={},o="22.02.07 - Entity Relationship Modelling",A={unversionedId:"Year1/Databases/22.02.07 - ER Modelling",id:"Year1/Databases/22.02.07 - ER Modelling",title:"22.02.07 - Entity Relationship Modelling",description:"Database Design",source:"@site/docs/Year1/1004-Databases/22.02.07 - ER Modelling.md",sourceDirName:"Year1/1004-Databases",slug:"/Year1/Databases/22.02.07 - ER Modelling",permalink:"/Year1/Databases/22.02.07 - ER Modelling",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"22.01.31 - Introduction & Overview",permalink:"/Year1/Databases/22.01.31 - Introduction & Overview"},next:{title:"22.02.07 - Introduction to relational databases",permalink:"/Year1/Databases/22.02.07 - Introduction to relational databases"}},u={},p=[{value:"Database Design",id:"database-design",level:2},{value:"Entity/Relationship Modelling",id:"entityrelationship-modelling",level:2},{value:"Entities",id:"entities",level:3},{value:"Attributes",id:"attributes",level:3},{value:"Relationships",id:"relationships",level:3},{value:"Cardinality Ratios",id:"cardinality-ratios",level:4},{value:"Making E/R Models",id:"making-er-models",level:2},{value:"Removing M:M relationships",id:"removing-mm-relationships",level:3},{value:"1:1 Relationships",id:"11-relationships",level:3},{value:"Debugging Designs",id:"debugging-designs",level:2}],d={toc:p};function g(e){var t=e.components,s=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"220207---entity-relationship-modelling"},"22.02.07 - Entity Relationship Modelling"),(0,l.kt)("h2",{id:"database-design"},"Database Design"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Can create a design that is independent of DBMS"),(0,l.kt)("li",{parentName:"ul"},"Often results in a more efficient and simpler queries once the database has been created")),(0,l.kt)("h2",{id:"entityrelationship-modelling"},"Entity/Relationship Modelling"),(0,l.kt)("p",null,"Used for Conceptual design"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Entities")," - objects or items of interest"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Attributes")," - properties of an entity"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Relationships")," - links between entities")),(0,l.kt)("p",null,"Represented as E/R diagrams that"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Give a conceptual view of the database"),(0,l.kt)("li",{parentName:"ul"},"Independent of the choice of DBMS"),(0,l.kt)("li",{parentName:"ul"},"Identify some problems in a design")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"3f2d7a96d4f0591da7e7d526b8fae8d0.png",src:n(8095).Z,width:"535",height:"518"})),(0,l.kt)("h3",{id:"entities"},"Entities"),(0,l.kt)("p",null,"Represent objects or things of interest. Physical things or more abstract things\nEntities have:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"General types or class"),(0,l.kt)("li",{parentName:"ul"},"Instances of that particular type"),(0,l.kt)("li",{parentName:"ul"},"Attributes")),(0,l.kt)("p",null,"Have attributes, but attributes have no smaller parts\nCan have relationships between them, but an attribute belongs to a single entity\n",(0,l.kt)("em",{parentName:"p"},"Represent Entities as boxes with rounded corners. Labelled with the names of the class of objects represented by that entity")),(0,l.kt)("h3",{id:"attributes"},"Attributes"),(0,l.kt)("p",null,"Facts, aspects, properties or details about an entity\nAttributes have:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A name"),(0,l.kt)("li",{parentName:"ul"},"Associated entity"),(0,l.kt)("li",{parentName:"ul"},"Domains of possible values"),(0,l.kt)("li",{parentName:"ul"},"Each instance of the associated entity, a value from the attributes domain")),(0,l.kt)("p",null,"Attribute belongs to a single entity\n",(0,l.kt)("em",{parentName:"p"},"Represented as ovals. Linked to its entity by a line. Name of the attribute is written in the oval.")),(0,l.kt)("h3",{id:"relationships"},"Relationships"),(0,l.kt)("p",null,"Are an association between two or more entities\nRelationships have:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Name"),(0,l.kt)("li",{parentName:"ul"},"Set of entities that participate in them"),(0,l.kt)("li",{parentName:"ul"},"A degree - number of entities that participate"),(0,l.kt)("li",{parentName:"ul"},"Cardinality Ratio")),(0,l.kt)("h4",{id:"cardinality-ratios"},"Cardinality Ratios"),(0,l.kt)("p",null,"Each entity in a relationship can participate in zero, one, or more than one instances of that relationship"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"One to One (1:1)"),(0,l.kt)("li",{parentName:"ul"},"One to Many (1:M)"),(0,l.kt)("li",{parentName:"ul"},"Many to Many (M:M)")),(0,l.kt)("p",null,"Relationships are shown as links between two entities\nName is given in a diamond box. Ends of the link show cardinality "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Screenshot_20220207_231359.png",src:n(9920).Z,width:"514",height:"120"})),(0,l.kt)("h2",{id:"making-er-models"},"Making E/R Models"),(0,l.kt)("p",null,"Need to identify:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Entities (Nouns)"),(0,l.kt)("li",{parentName:"ul"},"Attributes (Nouns, facts or properties)"),(0,l.kt)("li",{parentName:"ul"},"Relationships (Verbs, between two entities)"),(0,l.kt)("li",{parentName:"ul"},"Cardinality Ratios\nObtain these from a problem description")),(0,l.kt)("h3",{id:"removing-mm-relationships"},"Removing M:M relationships"),(0,l.kt)("p",null,"Many to Many relationships are difficult to represent in a database\nCan split a many to many relationship into two one to many relationships by creating an additional entity"),(0,l.kt)("p",null,"Entities can have attributes but attributes have no smaller parts\nEntities can have relationships between them, but an attribute belongs to a single entity  "),(0,l.kt)("h3",{id:"11-relationships"},"1:1 Relationships"),(0,l.kt)("p",null,"Some relationships between entities, A and B, might be redundant if"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It is a 1:1 relationship between A and B"),(0,l.kt)("li",{parentName:"ul"},"Every A is related to a B and every B is related to an A")),(0,l.kt)("h2",{id:"debugging-designs"},"Debugging Designs"),(0,l.kt)("p",null,"E/R diagrams can be used to plan queries. If cant find useful information from diagram, need to change the design"))}g.isMDXComponent=!0},8095:function(e,t,n){t.Z=n.p+"assets/images/3f2d7a96d4f0591da7e7d526b8fae8d0-53df84ae175ab5cec939d5de5ec6e469.png"},9920:function(e,t){t.Z="data:image/png;base64,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"}}]);