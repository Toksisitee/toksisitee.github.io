"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[526],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=s(n),k=a,m=g["".concat(p,".").concat(k)]||g[k]||d[k]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8968:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return g}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:4},p="Data Types",s={unversionedId:"mv-api/mv-types",id:"mv-api/mv-types",title:"Data Types",description:"This is a list of the available data types.",source:"@site/docs/mv-api/mv-types.md",sourceDirName:"mv-api",slug:"/mv-api/mv-types",permalink:"/docs/mv-api/mv-types",editUrl:"https://github.com/Toksisitee/docs/mv-api/mv-types.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Enums",permalink:"/docs/mv-api/mv-enums"},next:{title:"Data Structures",permalink:"/docs/mv-api/mv-structs"}},u=[{value:"SBYTE",id:"sbyte",children:[],level:2},{value:"UBYTE",id:"ubyte",children:[],level:2},{value:"SWORD",id:"sword",children:[],level:2},{value:"UWORD",id:"uword",children:[],level:2},{value:"DWORD",id:"dword",children:[],level:2},{value:"SINT",id:"sint",children:[],level:2},{value:"UINT",id:"uint",children:[],level:2},{value:"SLONG",id:"slong",children:[],level:2},{value:"ULONG",id:"ulong",children:[],level:2},{value:"char",id:"char",children:[],level:2},{value:"unsigned char",id:"unsigned-char",children:[],level:2},{value:"short",id:"short",children:[],level:2},{value:"unsigned short",id:"unsigned-short",children:[],level:2},{value:"int",id:"int",children:[],level:2},{value:"unsigned Int",id:"unsigned-int",children:[],level:2},{value:"long",id:"long",children:[],level:2},{value:"unsigned long",id:"unsigned-long",children:[],level:2},{value:"size_t",id:"size_t",children:[],level:2},{value:"float",id:"float",children:[],level:2},{value:"double",id:"double",children:[],level:2},{value:"bool",id:"bool",children:[],level:2},{value:"std::string",id:"stdstring",children:[],level:2}],d={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"data-types"},"Data Types"),(0,l.kt)("p",null,"This is a list of the available data types."),(0,l.kt)("h2",{id:"sbyte"},"SBYTE"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SBYTE")," is a typedef of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#char"},"char")),".",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range:")," -128 to +127.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range Hex"),": 0x80 to 0x7F"),(0,l.kt)("h2",{id:"ubyte"},"UBYTE"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UBYTE")," is a typedef of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#unsigned-char"},"unsigned char")),".",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range:")," 0 to 255.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range Hex"),": 0x00 to 0xFF"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"sword"},"SWORD"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SWORD")," is a typedef of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#short"},"signed short")),".",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range:")," -32,768 to +32,767."),(0,l.kt)("h2",{id:"uword"},"UWORD"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UWORD")," is a typedef of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#unsigned-short"},"unsigned short")),".",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range:")," 0 to 65,535."),(0,l.kt)("h2",{id:"dword"},"DWORD"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UWORD")," is a typedef of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#unsigned-long"},"unsigned long")),".",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range:")," 0 to 4,294,967,295.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range Hex:")," 0x00 to 0xFFFFFFFF"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"sint"},"SINT"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SINT")," is a typedef of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#int"},"int")),".",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range:")," -2,147,483,648 to 2,147,483,647",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range Hex:")," 0x80000000 to 0x7FFFFFFF"),(0,l.kt)("h2",{id:"uint"},"UINT"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UINT")," is a typedef of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#unsigned-int"},"unsigned int")),".",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range:")," 0 to 4,294,967,295.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range Hex:")," 0x00 to 0xFFFFFFFF"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"slong"},"SLONG"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SLONG")," is a typedef of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#long"},"signed long")),".",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range:")," -2,147,483,648 to 2,147,483,647",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range Hex:")," 0x80000000 to 0x7FFFFFFF"),(0,l.kt)("h2",{id:"ulong"},"ULONG"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ULONG")," is a typedef of ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"#unsigned-long"},"unsigned long")),".",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range:")," 0 to 4,294,967,295.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range Hex:")," 0x00 to 0xFFFFFFFF"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"char"},"char"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Value Range:")," -128 to +127, or 0x80 to 0x7F in hexadecimal notation."),(0,l.kt)("h2",{id:"unsigned-char"},"unsigned char"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Value Range:")," 0 to 255, or 0 to 0xFF in hexadecimal notation."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"short"},"short"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Value Range:")," -32,768 to +32,767."),(0,l.kt)("h2",{id:"unsigned-short"},"unsigned short"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Value Range:")," 0 to 65,535."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"int"},"int"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Value Range:")," -2,147,483,648 to 2,147,483,647",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range Hex:")," 0x80000000 to 0x7FFFFFFF"),(0,l.kt)("h2",{id:"unsigned-int"},"unsigned Int"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Value Range:")," 0 to 4,294,967,295.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range Hex:")," 0x00 to 0xFFFFFFFF"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"long"},"long"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Value Range:")," -2,147,483,648 to 2,147,483,647",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range Hex:")," 0x80000000 to 0x7FFFFFFF"),(0,l.kt)("h2",{id:"unsigned-long"},"unsigned long"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Value Range:")," 0 to 4,294,967,295.",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Value Range Hex:")," 0x00 to 0xFFFFFFFF"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"size_t"},"size_t"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"float"},"float"),(0,l.kt)("p",null,"This data type can contain decimal points, e.g. 1.0f, 0.007f, -2.0f",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Precision:")," 7 decimal digits precision"),(0,l.kt)("h2",{id:"double"},"double"),(0,l.kt)("p",null,"This data type can contain decimal points, e.g. 7543.0, 0.00754, -2.0",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Precision:")," 15 decimal digits precision"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"bool"},"bool"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Value:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"stdstring"},"std::string"),(0,l.kt)("p",null,"Strings are objects that represent sequences of characters."),(0,l.kt)("hr",null))}g.isMDXComponent=!0}}]);