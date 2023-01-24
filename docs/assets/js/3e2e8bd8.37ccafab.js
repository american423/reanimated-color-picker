"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:6,sidebar_label:"Panel1",description:"A square-shaped slider, reminiscent of Adobe style, is utilized to adjust the brightness and saturation of colors."},l="<Panel1 />",o={unversionedId:"API/Panel1",id:"API/Panel1",title:"<Panel1 />",description:"A square-shaped slider, reminiscent of Adobe style, is utilized to adjust the brightness and saturation of colors.",source:"@site/docs/API/Panel1.md",sourceDirName:"API",slug:"/API/Panel1",permalink:"/reanimated-color-picker/docs/API/Panel1",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Panel1",description:"A square-shaped slider, reminiscent of Adobe style, is utilized to adjust the brightness and saturation of colors."},sidebar:"tutorialSidebar",previous:{title:"OpacitySlider",permalink:"/reanimated-color-picker/docs/API/OpacitySlider"},next:{title:"Panel2",permalink:"/reanimated-color-picker/docs/API/Panel2"}},s={},p=[{value:"Props",id:"props",level:2},{value:"<code>thumbSize</code>",id:"thumbsize",level:3},{value:"<code>thumbColor</code>",id:"thumbcolor",level:3},{value:"<code>thumbShape</code>",id:"thumbshape",level:3},{value:"<code>style</code>",id:"style",level:3}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"panel1-"},(0,a.kt)("inlineCode",{parentName:"h1"},"<Panel1 />")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"panel1",src:n(3285).Z,width:"200",height:"200"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A square-shaped slider, reminiscent of Adobe style, is utilized to adjust the brightness and saturation of colors..")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Move the handle horizontally to change the color's saturation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Move the handle vertically to change the color's brightness."))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("a",{parentName:"li",href:"./HueSlider"},(0,a.kt)("inlineCode",{parentName:"a"},"<HueSlider />"))," component also to gain control over the three color channels."))),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("h3",{id:"thumbsize"},(0,a.kt)("inlineCode",{parentName:"h3"},"thumbSize")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Panel's handle (thumb) size (height","*","width)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type: number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default: 35"))),(0,a.kt)("h3",{id:"thumbcolor"},(0,a.kt)("inlineCode",{parentName:"h3"},"thumbColor")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change thumb's color."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type: string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default"),": interactive","*")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"mdxAdmonitionTitle"},"*","interactive")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The color of the thumb will be adjusted according to the contrast ratio, in the absence of a specific color value."))),(0,a.kt)("h3",{id:"thumbshape"},(0,a.kt)("inlineCode",{parentName:"h3"},"thumbShape")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change thumb's shape and appearance."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type: string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"values"),": ",(0,a.kt)("shapes",null)),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default: 'ring'"))),(0,a.kt)("h3",{id:"style"},(0,a.kt)("inlineCode",{parentName:"h3"},"style")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Panel's container style."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type: ViewStyle"))),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Certain style properties will be overridden."))))}d.isMDXComponent=!0},3285:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/panel1-c31025911dc1b7f813aae4c59b347951.png"}}]);