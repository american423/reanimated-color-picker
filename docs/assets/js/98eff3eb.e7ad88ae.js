"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var i=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),u=l,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||a;return n?i.createElement(k,r(r({ref:t},c),{},{components:n})):i.createElement(k,r({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:l,r[1]=o;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(7462),l=(n(7294),n(3905));const a={sidebar_position:1,description:"Responsible for managing the built-in components"},r="ColorPicker Wrapper",o={unversionedId:"API/ColorPicker",id:"API/ColorPicker",title:"ColorPicker Wrapper",description:"Responsible for managing the built-in components",source:"@site/docs/API/ColorPicker.md",sourceDirName:"API",slug:"/API/ColorPicker",permalink:"/reanimated-color-picker/docs/API/ColorPicker",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Responsible for managing the built-in components"},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/reanimated-color-picker/docs/category/api"},next:{title:"HueSlider",permalink:"/reanimated-color-picker/docs/API/HueSlider"}},p={},d=[{value:"Props",id:"props",level:2},{value:"<code>value</code>",id:"value",level:3},{value:"<code>sliderThickness</code>",id:"sliderthickness",level:3},{value:"<code>thumbSize</code>",id:"thumbsize",level:3},{value:"<code>thumbShape</code>",id:"thumbshape",level:3},{value:"<code>style</code>",id:"style",level:3},{value:"<code>onChange</code>",id:"onchange",level:3},{value:"<code>onComplete</code>",id:"oncomplete",level:3}],c={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"colorpicker-wrapper"},"ColorPicker Wrapper"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"ColorPicker")," Wrapper is responsible for managing the built-in components.")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"All built-in components should be wrapped within the ",(0,l.kt)("inlineCode",{parentName:"p"},"ColorPicker")," component.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You can nest components within the ",(0,l.kt)("inlineCode",{parentName:"li"},"ColorPicker")," wrapper to achieve the desired level of customization.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<ColorPicker>\n  <Preview />\n\n  <View>\n    <Panel1 />\n    <HueSlider vertical />\n  </View>\n\n  <View>\n    <Text>Opacity</Text>\n    <OpacitySlider />\n  </View>\n\n  <Swatches />\n</ColorPicker>\n")),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"value"},(0,l.kt)("inlineCode",{parentName:"h3"},"value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The initial color that should be displayed when the ",(0,l.kt)("inlineCode",{parentName:"li"},"ColorPicker")," is loaded."),(0,l.kt)("li",{parentName:"ul"},"If the ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," property is modified, the ",(0,l.kt)("inlineCode",{parentName:"li"},"ColorPicker")," will automatically update the displayed color."),(0,l.kt)("li",{parentName:"ul"},"Accepts: ",(0,l.kt)("inlineCode",{parentName:"li"},"'hex' | 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hsv' | 'hsva' | 'hwb' | 'hwba' | named colors")," formats."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type: string")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default: '#418181'"))),(0,l.kt)("h3",{id:"sliderthickness"},(0,l.kt)("inlineCode",{parentName:"h3"},"sliderThickness")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A global property that allows for changing the thickness of all descendant slider components."),(0,l.kt)("li",{parentName:"ul"},"The thickness refers to the ",(0,l.kt)("inlineCode",{parentName:"li"},"width")," of the slider in the case of a ",(0,l.kt)("inlineCode",{parentName:"li"},"vertical")," orientation, and the ",(0,l.kt)("inlineCode",{parentName:"li"},"height")," in the case of a ",(0,l.kt)("inlineCode",{parentName:"li"},"horizontal")," orientation."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type: number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default: 25"))),(0,l.kt)("h3",{id:"thumbsize"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumbSize")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A global property for changing the thumb size of all descendant slider components."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type: number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default: 35"))),(0,l.kt)("h3",{id:"thumbshape"},(0,l.kt)("inlineCode",{parentName:"h3"},"thumbShape")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A global property that allows for the alteration of the thumb shape and appearance of all descendant slider components."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type: string")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default: 'ring'")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"values:"),(0,l.kt)("shapes",null))),(0,l.kt)("h3",{id:"style"},(0,l.kt)("inlineCode",{parentName:"h3"},"style")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The container style of the ",(0,l.kt)("inlineCode",{parentName:"li"},"ColorPicker"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type: ViewStyle"))),(0,l.kt)("admonition",{title:"note",type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"Certain style properties will be overridden."))),(0,l.kt)("h3",{id:"onchange"},(0,l.kt)("inlineCode",{parentName:"h3"},"onChange")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Triggers every time the user modifies the color."),(0,l.kt)("li",{parentName:"ul"},"The passed color object has the following properties: ",(0,l.kt)("inlineCode",{parentName:"li"},"hex"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"rgb"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"rgba"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"hsv"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"hsva"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"hwb"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"hwba"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"hsl"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"hsla")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type: (color: object) => void")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default: null"))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"To prevent performance issues, it is best to avoid using ",(0,l.kt)("inlineCode",{parentName:"li"},"setState")," in the ",(0,l.kt)("inlineCode",{parentName:"li"},"onChange")," callback."),(0,l.kt)("li",{parentName:"ul"},"It is highly recommended to utilize the ",(0,l.kt)("inlineCode",{parentName:"li"},"useSharedValue")," function from the ",(0,l.kt)("inlineCode",{parentName:"li"},"react-native-reanimated")," library."))),(0,l.kt)("h3",{id:"oncomplete"},(0,l.kt)("inlineCode",{parentName:"h3"},"onComplete")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Triggered upon the user releasing the slider handle or clicking on a swatch."),(0,l.kt)("li",{parentName:"ul"},"The passed color object has the following properties: ",(0,l.kt)("inlineCode",{parentName:"li"},"hex"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"rgb"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"rgba"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"hsv"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"hsva"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"hwb"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"hwba"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"hsl"),", and ",(0,l.kt)("inlineCode",{parentName:"li"},"hsla")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type: (color: object) => void")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"default: null"))))}m.isMDXComponent=!0}}]);