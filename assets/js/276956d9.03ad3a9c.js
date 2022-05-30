"use strict";(self.webpackChunknottes=self.webpackChunknottes||[]).push([[5876],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),k=i,c=d["".concat(s,".").concat(k)]||d[k]||u[k]||l;return a?n.createElement(c,r(r({ref:t},m),{},{components:a})):n.createElement(c,r({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2198:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(7462),i=a(3366),l=(a(7294),a(3905)),r=["components"],o={},s="Revision",p={unversionedId:"Year1/Databases/Revision",id:"Year1/Databases/Revision",title:"Revision",description:"Introduction to relational databases",source:"@site/docs/Year1/1004-Databases/Revision.md",sourceDirName:"Year1/1004-Databases",slug:"/Year1/Databases/Revision",permalink:"/Year1/Databases/Revision",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"year1",previous:{title:"22.03.21 - PHP",permalink:"/Year1/Databases/22.03.21 - PHP"},next:{title:"AI fundamental Issues",permalink:"/Year1/AI/22.02.01 - AI Fundamental Issues"}},m={},u=[{value:"Introduction to relational databases",id:"introduction-to-relational-databases",level:2},{value:"Relations",id:"relations",level:3},{value:"Referential Integrity",id:"referential-integrity",level:3},{value:"E/R Modelling",id:"er-modelling",level:2},{value:"Removing M:M relationships",id:"removing-mm-relationships",level:3},{value:"Introduction to SQL",id:"introduction-to-sql",level:2},{value:"SQL Syntax",id:"sql-syntax",level:3},{value:"HTML &amp; CSS",id:"html--css",level:2},{value:"Tables &amp; Lists",id:"tables--lists",level:3},{value:"DOM",id:"dom",level:3},{value:"Javascript",id:"javascript",level:2},{value:"PHP",id:"php",level:2},{value:"Arrays",id:"arrays",level:3},{value:"SQL",id:"sql",level:3}],d={toc:u};function k(e){var t=e.components,o=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"revision"},"Revision"),(0,l.kt)("h2",{id:"introduction-to-relational-databases"},"Introduction to relational databases"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Database"),": Shared collection of logically related data and a description of the data designed to meet the needs of an organisation"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Database Management System"),": Software system which enables the user to control the database"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Application Program"),": Program which interacts with a database through the DBMS")),(0,l.kt)("h3",{id:"relations"},"Relations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Information stored as records in relations (tables)"),(0,l.kt)("li",{parentName:"ul"},"Data is stored in relations (tables)"),(0,l.kt)("li",{parentName:"ul"},"Relations are made up of attributes (columns) | Set of tuples with the same schema | Each column has a domain, a set from which all possible values for that column can come."),(0,l.kt)("li",{parentName:"ul"},"Data takes the form of tuples (rows)")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"5dba29f948d9ef890360d0fff798218f.png",src:a(8270).Z,width:"284",height:"288"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Degree of a relation")," - How long each tuple is or how many columns the table has\n",(0,l.kt)("strong",{parentName:"p"},"Cardinality of a relation")," - How many different tuples there are, or how many rows a table has"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Attributes")," are named columns in a relation\n",(0,l.kt)("strong",{parentName:"p"},"Schema")," defines the attributes for a relation. (Set of attributes)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Candidate Keys"),": Set of attributes in a relation in which, every tuple has a unique value and no proper subset (minimality). Can have multiple columns joined together to create candidate keys.\n",(0,l.kt)("strong",{parentName:"p"},"Primary Key"),": One Candidate key is chose to identify the tuples in a relation. Often a special ID is used.\n",(0,l.kt)("strong",{parentName:"p"},"NULL"),": Missing information/unknown value.\n",(0,l.kt)("strong",{parentName:"p"},"Entity Integrity"),": Primary Keys cannot contain NULL values as it contradicts the notion of the key.\n",(0,l.kt)("strong",{parentName:"p"},"Foreign Keys"),": Used to link data in two relations. If it matches a primary/candidate key value in a second relation. (Referential Integrity)"),(0,l.kt)("h3",{id:"referential-integrity"},"Referential Integrity"),(0,l.kt)("p",null,"When relations are updated, this might be violated. Usually occurs when a referenced tuple is updated or deleted"),(0,l.kt)("p",null,"Number of options when this occurs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"RESTRICT")," \u2013 stop the user from doing something"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CASCADE")," \u2013 let the changes flow on"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SET NULL")," \u2013 make referencing values null"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SET DEFAULT")," \u2013 make referencing values the default for their column")),(0,l.kt)("h2",{id:"er-modelling"},"E/R Modelling"),(0,l.kt)("p",null,"Can create a database design that is independent of DBMS, which is often more efficient and simpler queries once the database has been created."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Entities")," - Object or items of interest"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Attributes")," - Properties of an entity"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Relationships")," - Links between entities")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Screenshot_20220207_231359.png",src:a(9920).Z,width:"514",height:"120"})," Drawing a relation"),(0,l.kt)("h3",{id:"removing-mm-relationships"},"Removing M:M relationships"),(0,l.kt)("p",null,"M:M are difficult to represent in a database. We can split a many to many into two one to many relationships by creating an additional entity."),(0,l.kt)("p",null,"Entities can have attributes but attributes have no smaller parts. Attribute belongs to single entry, entities between them all."),(0,l.kt)("h2",{id:"introduction-to-sql"},"Introduction to SQL"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Relations"),(0,l.kt)("th",{parentName:"tr",align:null},"E/R Diagrams"),(0,l.kt)("th",{parentName:"tr",align:null},"SQL"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Relation"),(0,l.kt)("td",{parentName:"tr",align:null},"Entity"),(0,l.kt)("td",{parentName:"tr",align:null},"Table")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tuple"),(0,l.kt)("td",{parentName:"tr",align:null},"Instance"),(0,l.kt)("td",{parentName:"tr",align:null},"Row")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("td",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("td",{parentName:"tr",align:null},"Column or field")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Foreign Key"),(0,l.kt)("td",{parentName:"tr",align:null},"M:1 Relationship"),(0,l.kt)("td",{parentName:"tr",align:null},"Foreign Key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Primary Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("td",{parentName:"tr",align:null},"Primary Key")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When implementing, can approximate the domains of the attributes by assigning types to each columns, Relationships may be represented by foreign keys."),(0,l.kt)("li",{parentName:"ul"},"When creating relationships, 1:1 are not used, only M:1"),(0,l.kt)("li",{parentName:"ul"},"Can specify the engine used to store files onto disk, have to declare which specific table to use.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"- **MyISAM** - Default, very fast, ignores all foreign key constraints\n- **InnoDB** - Offers transactions and foreign keys (We use this one)\n- **Memory** - Stored in RAM\n- \n")),(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"ON UPDATE CASCADE"),": Referencing rows are updated in child tables when its updated in the parent table"),(0,l.kt)("em",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"em"},"ON DELETE CASCADE"),": Referencing rows are deleted in child tables when its deleted in the parent table"))),(0,l.kt)("h3",{id:"sql-syntax"},"SQL Syntax"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DROP")," - Delete table"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER TABLE")," - Change columns, and definitions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"INSERT")," - Add new row to a table"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UPDATE")," - Change rows in a table"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DELETE")," - Remove row from table"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"WHERE")," - Specifies query, conditional statement"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SELECT")," - The get query. Can be nested inside another query to form a subquery.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IN"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"EXISTS"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"ALL/ANY"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"NOT")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DISTINCT")," - Removes duplicates"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALL")," - Retains duplicates. Used as default if neither is supplied"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IN")," - Can see if a given value is in a set of values. Use ",(0,l.kt)("inlineCode",{parentName:"li"},"NOT")," to do opposite"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"EXISTS")," - Cant see whether there is at least one element in a given set"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ANY/ALL")," - Compare a single value to a set of values")),(0,l.kt)("p",null,"Can combine information from two or more tables. If the tables have columns with the same name, ambiguity will result. Can be resolved by referencing column names with the table name. ",(0,l.kt)("inlineCode",{parentName:"p"},"TableName.ColumnName")),(0,l.kt)("p",null,"Subqueries can be used to search a selected value of data. Have options for handling sets; ",(0,l.kt)("inlineCode",{parentName:"p"},"IN"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"EXISTS"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"ALL/ANY"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"NOT")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"[AS]")," - Aliases. Rename columns or tables"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE"),(0,l.kt)("td",{parentName:"tr",align:null},"A Day, Mont, Year"),(0,l.kt)("td",{parentName:"tr",align:null},"'1981-12-16\u2019 or \u201881-12-16'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Time"),(0,l.kt)("td",{parentName:"tr",align:null},"House, Minutes, Seconds"),(0,l.kt)("td",{parentName:"tr",align:null},"\u201915:24:39\u2019")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATETIME"),(0,l.kt)("td",{parentName:"tr",align:null},"Combination of above"),(0,l.kt)("td",{parentName:"tr",align:null},"\u20181981-12-16 15:24:39\u2019")))),(0,l.kt)("h2",{id:"html--css"},"HTML & CSS"),(0,l.kt)("p",null,"URL = Uniform Resource Locator. ",(0,l.kt)("inlineCode",{parentName:"p"},"scheme://prefix.domain:port/path/filename")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Static HTML - Web page is a file on a server"),(0,l.kt)("li",{parentName:"ul"},"Dynamic HTML - Web pages consist of HTML that is generated by software (PHP)"),(0,l.kt)("li",{parentName:"ul"},"Client-Server Paradigm - Information flows between server and client based on requests."),(0,l.kt)("li",{parentName:"ul"},"URL = Uniform Resource Locator"),(0,l.kt)("li",{parentName:"ul"},"Use of tags are controlled by CSS. A tag together with its content is called an element"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Attributes")," - Optionally a start tag, may include one or more attributes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Empty Elements"),"- Elements with no content (",(0,l.kt)("inlineCode",{parentName:"li"},"<br>"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"<hr>"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<div>")," - blocks of content"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<span>")," - inline content"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<em>")," - Emphasised"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<mark>")," - highlighted"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"<del>")," - deleted (strikeout)")),(0,l.kt)("h3",{id:"tables--lists"},"Tables & Lists"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"<table>")," - Starts table\n",(0,l.kt)("inlineCode",{parentName:"p"},"<th>")," - Table Heading/Column\n",(0,l.kt)("inlineCode",{parentName:"p"},"<tr>")," - Table ro w\n",(0,l.kt)("inlineCode",{parentName:"p"},"<td>")," - Table data\n",(0,l.kt)("inlineCode",{parentName:"p"},"<ul>")," - Unordered List\n",(0,l.kt)("inlineCode",{parentName:"p"},"<ol>")," - Ordered List\n",(0,l.kt)("inlineCode",{parentName:"p"},"<li>")," - List Item"),(0,l.kt)("h3",{id:"dom"},"DOM"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Document Object Model"),(0,l.kt)("li",{parentName:"ul"},"Allows scripts to identify and change elements of a web page."),(0,l.kt)("li",{parentName:"ul"},"HTML ID is used to uniquely identify elements"),(0,l.kt)("li",{parentName:"ul"},"DOM values are the content of tags"),(0,l.kt)("li",{parentName:"ul"},"DOM methods are actions that you can perform on HTML elements")),(0,l.kt)("h2",{id:"javascript"},"Javascript"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Interpreted language, client-side rather than server-side."),(0,l.kt)("li",{parentName:"ul"},"Variables declared using ",(0,l.kt)("inlineCode",{parentName:"li"},"var"),". Doesn't care about ",(0,l.kt)("inlineCode",{parentName:"li"},"int")," etc. Can mix and match variables throughout the program"),(0,l.kt)("li",{parentName:"ul"},"Arrays will fill in gaps with ",(0,l.kt)("inlineCode",{parentName:"li"},"undefined"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"push()")," - adds an element to the end of the array"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"indexOf()")," - Check whether an array already contains a specific value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"join()")," - Gives control over how the array values are concatenated together"))),(0,l.kt)("li",{parentName:"ul"},"No type checking of parameters"),(0,l.kt)("li",{parentName:"ul"},"Objects are like variables but contain many values."),(0,l.kt)("li",{parentName:"ul"},"DOM - Abstract model that defines the interface between documents and application programs"),(0,l.kt)("li",{parentName:"ul"},"API HTML DOM - Standard object model and programming interface for HTML."),(0,l.kt)("li",{parentName:"ul"},"An ",(0,l.kt)("em",{parentName:"li"},"event")," is a notification that something specific has occured, function executed in response to the appearance of an event"),(0,l.kt)("li",{parentName:"ul"},"Registration - Connecting an event handler to an event"),(0,l.kt)("li",{parentName:"ul"},"When doing JS forms, use ",(0,l.kt)("inlineCode",{parentName:"li"},"getElementById"),", then get values by doing that.name.value."),(0,l.kt)("li",{parentName:"ul"},"Regex can be used for validation. Put it inside of ",(0,l.kt)("inlineCode",{parentName:"li"},"/ /"),". ",(0,l.kt)("inlineCode",{parentName:"li"},"[]")," indicate range, ",(0,l.kt)("inlineCode",{parentName:"li"},"a-z")," means all letters, ",(0,l.kt)("inlineCode",{parentName:"li"},"0-9")," means all numbers. ",(0,l.kt)("inlineCode",{parentName:"li"},"^")," denotes negation. ",(0,l.kt)("inlineCode",{parentName:"li"},"test")," checks if fields contains characters other than the ones side of ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"),".")),(0,l.kt)("h2",{id:"php"},"PHP"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$")," - to declare and use variables. Don't have to specify what data type it is"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},".")," - String concatenation uses the period. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'""')," - Use with echo to evaluate PHP literals"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"echo")," - output to display, similar to how print works"),(0,l.kt)("li",{parentName:"ul"},"Multiple string functions:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"strlen, strcmp, strpos, substr"),(0,l.kt)("li",{parentName:"ul"},"chop - remove white space from the right end"),(0,l.kt)("li",{parentName:"ul"},"trim - remove white space from both ends"),(0,l.kt)("li",{parentName:"ul"},"ltrim - remove white space from the left end"),(0,l.kt)("li",{parentName:"ul"},"strtolower, strtoupper"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NULL")," - Avoid ",(0,l.kt)("inlineCode",{parentName:"li"},"NOT IN")," when using ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),". Should instead use ",(0,l.kt)("inlineCode",{parentName:"li"},"IS NULL"),"  or ",(0,l.kt)("inlineCode",{parentName:"li"},"IS NOT NULL"))),(0,l.kt)("h3",{id:"arrays"},"Arrays"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PHP array is a generalisation of the arrays of other languages. Also a mapping of keys to values, where the keys can be numbers or strings."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"is_array()")," - check if a variable is an array"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unset()")," - to destroy an array"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"count()")," - to sort an array"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"shuffle()")," - to shuffle the elements of an array"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"explode()")," - to convert the words of a sentence into an array")),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Functions"),": Objects can be passed by reference whereas everything else by value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Inheritance"),": Data members can be declared public, private, protected. Can override a function implemented in the base class with  function derived class.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"$_POST")," - retrieves data from post request."))),(0,l.kt)("h3",{id:"sql"},"SQL"),(0,l.kt)("p",null,"Connecting to database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);\nif($conn->connect_error){\n    die($conn->connect_error);}\n")),(0,l.kt)("p",null,"Parsing a query and fetching/executing it"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'$query = "SELECT * FROM db_user";\n$result = $conn->query($query);\n$row = $result->fetch_array(MYSQLI_ASSOC)){...}\n')),(0,l.kt)("p",null,"Prepare Stage: Statement template is sent to the database server so it can perform syntax check and initialise the server"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$query = \"INSERT INTO db_user VALUES (?,?,?)\";\n$stmt = $conn->prepare($query);\n$stmt->bind_param('sss',$forename,$surname,$username);\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Execute Stage: Client binds parameter values and sends them to the server, where the server creates a statement")))}k.isMDXComponent=!0},8270:function(e,t,a){t.Z=a.p+"assets/images/5dba29f948d9ef890360d0fff798218f-ac842f0dbd375e55c29bb0a83f68163f.png"},9920:function(e,t){t.Z="data:image/png;base64,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"}}]);