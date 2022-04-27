this.kubio=this.kubio||{},this.kubio.formatLibrary=function(e){var t={};function n(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(o,l,function(t){return e[t]}.bind(null,l));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=540)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},101:function(e,t,n){"use strict";var o=n(0);t.a=function(e){let{icon:t,size:n=24,...l}=e;return Object(o.cloneElement)(t,{width:n,height:n,...l})}},13:function(e,t){!function(){e.exports=this.wp.blockEditor}()},14:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)){if(o.length){var c=l.apply(null,o);c&&e.push(c)}}else if("object"===r)if(o.toString===Object.prototype.toString)for(var a in o)n.call(o,a)&&o[a]&&e.push(a);else e.push(o.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(o=function(){return l}.apply(t,[]))||(e.exports=o)}()},15:function(e,t){!function(){e.exports=this.kubio.icons}()},2:function(e,t){!function(){e.exports=this.lodash}()},25:function(e,t){!function(){e.exports=this.kubio.globalData}()},3:function(e,t){!function(){e.exports=this.wp.components}()},37:function(e,t){!function(){e.exports=this.wp.richText}()},4:function(e,t){!function(){e.exports=this.kubio.core}()},493:function(e,t,n){"use strict";var o=n(0),l=n(6);const r=Object(o.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(l.Path,{d:"M6.9 7L3 17.8h1.7l1-2.8h4.1l1 2.8h1.7L8.6 7H6.9zm-.7 6.6l1.5-4.3 1.5 4.3h-3zM21.6 17c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1s-.3-.1-.4-.2c-.1-.1-.1-.3-.1-.6V12c0-.5 0-1-.1-1.4-.1-.4-.3-.7-.5-1-.2-.2-.5-.4-.9-.5-.4 0-.8-.1-1.3-.1s-1 .1-1.4.2c-.4.1-.7.3-1 .4-.2.2-.4.3-.6.5-.1.2-.2.4-.2.7 0 .3.1.5.2.8.2.2.4.3.8.3.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.6-.4.2-.2.4-.3.7-.4.3-.1.6-.1.8-.1.3 0 .6 0 .8.1.2.1.4.3.5.5.1.2.2.5.2.9v1.1c0 .3-.1.5-.3.6-.2.2-.5.3-.9.4-.3.1-.7.3-1.1.4-.4.1-.8.3-1.1.5-.3.2-.6.4-.8.7-.2.3-.3.7-.3 1.2 0 .6.2 1.1.5 1.4.3.4.9.5 1.6.5.5 0 1-.1 1.4-.3.4-.2.8-.6 1.1-1.1 0 .4.1.7.3 1 .2.3.6.4 1.2.4.4 0 .7-.1.9-.2.2-.1.5-.3.7-.4h-.3zm-3-.9c-.2.4-.5.7-.8.8-.3.2-.6.2-.8.2-.4 0-.6-.1-.9-.3-.2-.2-.3-.6-.3-1.1 0-.5.1-.9.3-1.2s.5-.5.8-.7c.3-.2.7-.3 1-.5.3-.1.6-.3.7-.6v3.4z"}));t.a=r},5:function(e,t){!function(){e.exports=this.kubio.controls}()},540:function(e,t,n){"use strict";n.r(t),n.d(t,"CustomFormatsToolbar",(function(){return W}));var o=n(37),l=n(0),r=n(25),c=n(13),a=n(1),i=n(101),u=n(6);var s=Object(l.createElement)(u.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(l.createElement)(u.Path,{d:"M12.9 6h-2l-4 11h1.9l1.1-3h4.2l1.1 3h1.9L12.9 6zm-2.5 6.5l1.5-4.9 1.7 4.9h-3.2z"}));function b(e,t,n){const l=Object(o.getActiveFormat)(n,t);if(!l)return;const r=l.attributes.style;if(r){var c,a;const t=new RegExp(`${e}:(.*?)(;|$)`);return null===(c=r.match(t))||void 0===c||null===(a=c[1])||void 0===a?void 0:a.trim()}}const f=e=>{var t,n,o;return(null===(t=e.current)||void 0===t||null===(n=t.closest("[data-type]"))||void 0===n||null===(o=n.getAttribute("data-type"))||void 0===o?void 0:o.startsWith("kubio/"))||!1};var m=n(5),p=n(3);function h(e){let{name:t,value:n,onChange:r,onClose:c,contentRef:a,onReset:i,currentColor:u}=e;const s=Object(o.useAnchorRef)({ref:a,value:n,settings:j});return Object(l.createElement)(p.__experimentalStyleProvider,{document:document},Object(l.createElement)(p.Popover,{value:n,onClose:c,onFocusOutside:c,className:"kubio-components-inline-color-popover kubio-color-popover",anchorRef:s},Object(l.createElement)(m.GutentagColorPickerWithPalette,{value:u,onChange:e=>r(Object(o.applyFormat)(n,{type:t,attributes:{style:`color:${e}`}})),hasButton:!0,onButtonClick:i})))}const v="kubio/text-color",O=Object(a.__)("Text color","kubio");const j={name:v,title:O,tagName:"span",className:"kubio-has-inline-color",attributes:{style:"style"},edit:function(e){let{value:t,onChange:n,isActive:a,activeAttributes:u,contentRef:b}=e;const[m,p]=Object(l.useState)(!1),j=Object(l.useCallback)((()=>p(!0)),[p]),d=Object(l.useCallback)((()=>p(!1)),[p]),g=function(e,t){const n=Object(o.getActiveFormat)(t,e);if(!n)return;const l=n.attributes.style;var r,c;return l?null===(r=l.match(/color:(.*?)(;|$)/))||void 0===r||null===(c=r[1])||void 0===c?void 0:c.trim():void 0}(v,t),{parseVariableColor:y}=Object(r.useGlobalDataColors)(),k=Object(l.useMemo)((()=>{if(g)return{backgroundColor:y(g)}}),[g]);return f(b)?Object(l.createElement)(l.Fragment,null,Object(l.createElement)(c.RichTextToolbarButton,{key:a?"text-color":"text-color-not-active",className:"kubio-format-library-text-color-button",name:a?"italic":void 0,icon:Object(l.createElement)(l.Fragment,null,Object(l.createElement)(i.a,{icon:s}),a&&Object(l.createElement)("span",{className:"kubio-format-library-text-color-button__indicator",style:k})),title:O,onClick:j}),m&&Object(l.createElement)(h,{name:v,onClose:d,activeAttributes:u,value:t,currentColor:g,onChange:e=>{n(e)},onReset:()=>{n(Object(o.removeFormat)(t,v)),d()},contentRef:b})):Object(l.createElement)(l.Fragment,null)}};var d=n(2),g=n.n(d);const y=e=>{let{name:t,children:n,...o}=e,r="RichText.ToolbarControls";return t&&(r+=`.${t}`),Object(l.createElement)(p.Fill,{name:r},n)};var k=n(7),_=n(4),x=n(15),E=n(493),F=n(14),C=n.n(F);const w=[{label:Object(a.__)("100 (thin)","kubio"),value:100},{label:Object(a.__)("200 (extra light)","kubio"),value:200},{label:Object(a.__)("300 (light)","kubio"),value:300},{label:Object(a.__)("400 (normal)","kubio"),value:400},{label:Object(a.__)("500 (medium)","kubio"),value:500},{label:Object(a.__)("600 (semi bold)","kubio"),value:600},{label:Object(a.__)("700 (bold)","kubio"),value:700},{label:Object(a.__)("800 (extra bold)","kubio"),value:800},{label:Object(a.__)("900 (heavy)","kubio"),value:900}],R=e=>{let{isActive:t,value:n,onChange:i,onReset:u,contentRef:s,formatValue:b}=e;const f=Object(o.useAnchorRef)({ref:s,value:b,settings:T}),{getFontWeights:h}=Object(r.useGlobalDataFonts)(),[v,O]=Object(l.useState)(!1);Object(l.useEffect)((()=>{O(!1)}),[b.start||0,b.end||0]);const j=g.a.get(n,"fontFamily"),d=g.a.get(n,"fontWeight"),y=h(j),F=Object(_.useDeepMemo)((()=>w.filter((e=>{let{value:t}=e;return-1!==y.indexOf(t)}))),[y]),R={value:j,onChange:e=>{const t=h(e).some((e=>e===d));if(t)i("fontFamily",e);else{i("",{fontFamily:e,fontWeight:400})}}},N={value:d,onChange:e=>{i("fontWeight",e)},options:F,onReset:u};return Object(l.createElement)(l.Fragment,null,Object(l.createElement)(p.ToolbarButton,{className:C()({"is-pressed":t}),icon:E.a,onClick:()=>{O(!v)},label:"Typography"}),v&&Object(l.createElement)(c.URLPopover,{value:n,className:"block-editor-rich-text__inline-font-family",anchorRef:f},Object(l.createElement)("div",{className:"block-editor-rich-text__inline-format-toolbar block-editor-rich-text__inline-font-family kubio-options-popover "},Object(l.createElement)("div",{className:"block-editor-rich-text__typography-toolbar__container"},Object(l.createElement)(p.BaseControl,null,Object(l.createElement)(p.Flex,{className:"kubio-font-family-container"},Object(l.createElement)(p.FlexBlock,null,Object(l.createElement)("span",{className:"kubio-font-family-label"},Object(a.__)("Font family","kubio"))),Object(l.createElement)(p.FlexItem,null,Object(l.createElement)(m.FontPicker,Object(k.a)({label:Object(a.__)("Font family","kubio"),placeholder:Object(a.__)("Inherited","kubio")},R))),Object(l.createElement)(p.FlexItem,{className:"kubio-font-family__reset"},Object(l.createElement)(p.Button,{isSmall:!0,icon:x.ResetIcon,label:Object(a.__)("Reset","kubio"),className:"kubio-popover-options-icon",onClick:u})))),Object(l.createElement)(p.BaseControl,null,Object(l.createElement)(m.GutentagSelectControl,Object(k.a)({label:Object(a.__)("Font weight","kubio"),placeholder:Object(a.__)("Inherited","kubio"),allowReset:!0},N)))))))},N="font-family-weight",S=Object(a.__)("Font","kubio"),P="kubio/font-family-weight";const T={name:P,title:S,slotId:N,tagName:"span",className:"kubio-has-inline-font-family-weight",attributes:{style:"style"},edit:e=>{let{value:t,onChange:n,isActive:r,contentRef:c}=e;const a=b("font-family",P,t),i=function(e,t){let n=b("font-weight",e,t);isNaN(n)||(n=parseFloat(n));return n}(P,t),u={fontFamily:a,fontWeight:i},s=e=>{let{fontFamily:l,fontWeight:r}=e;const c=[];l&&c.push(`font-family: ${l}`),r&&c.push(`font-weight: ${r}`);const a=c.join(";");n(Object(o.applyFormat)(t,{type:P,attributes:{style:a}}))};return f(c)?Object(l.createElement)(y,{name:N},Object(l.createElement)(R,{formatValue:t,onChange:(e,t)=>{let n=g.a.cloneDeep(u);e?g.a.set(n,e,t):n=t,s(n)},value:u,isActive:r,onReset:()=>{n(Object(o.removeFormat)(t,P))},contentRef:c})):Object(l.createElement)(l.Fragment,null)}},A=[T],B=A.map((e=>e.slotId)).filter(Boolean),M=()=>Object(l.createElement)(l.Fragment,null,B.map((e=>Object(l.createElement)(p.Slot,{name:`RichText.ToolbarControls.${e}`,key:e})))),W=e=>{const{addWrapper:t=!0}=e;return!0===t?Object(l.createElement)(c.BlockControls,{group:"inline"},Object(l.createElement)(M,null)):Object(l.createElement)(M,null)};let $=[j];$=$.concat(A),$.forEach((e=>{let{name:t,...n}=e;Object(o.registerFormatType)(t,n)}))},6:function(e,t){!function(){e.exports=this.wp.primitives}()},7:function(e,t,n){"use strict";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},o.apply(this,arguments)}n.d(t,"a",(function(){return o}))}});