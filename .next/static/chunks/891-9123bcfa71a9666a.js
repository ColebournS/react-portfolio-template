(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[891],{1163:function(e,t,n){e.exports=n(880)},2271:function(e,t,n){"use strict";n.d(t,{J:function(){return be}});var r=n(7294);function o(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,o),r}var l,u,a=((u=a||{})[u.None=0]="None",u[u.RenderStrategy=1]="RenderStrategy",u[u.Static=2]="Static",u),i=((l=i||{})[l.Unmount=0]="Unmount",l[l.Hidden=1]="Hidden",l);function s({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:l,visible:u=!0,name:a}){let i=f(t,e);if(u)return c(i,n,r,a);let s=null!=l?l:0;if(2&s){let{static:e=!1,...t}=i;if(e)return c(t,n,r,a)}if(1&s){let{unmount:e=!0,...t}=i;return o(e?0:1,{0:()=>null,1:()=>c({...t,hidden:!0,style:{display:"none"}},n,r,a)})}return c(i,n,r,a)}function c(e,t={},n,o){let{as:l=n,children:u,refName:a="ref",...i}=v(e,["unmount","static"]),s=void 0!==e.ref?{[a]:e.ref}:{},c="function"==typeof u?u(t):u;i.className&&"function"==typeof i.className&&(i.className=i.className(t));let p={};if(l===r.Fragment&&Object.keys(d(i)).length>0){if(!(0,r.isValidElement)(c)||Array.isArray(c)&&c.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(i).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,r.cloneElement)(c,Object.assign({},f(c.props,d(v(i,["ref"]))),p,s))}return(0,r.createElement)(l,Object.assign({},v(i,["ref"]),l!==r.Fragment&&s,l!==r.Fragment&&p),c)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e,...t){let o=n[r];for(let n of o){if(e.defaultPrevented)return;n(e,...t)}}});return t}function p(e){var t;return Object.assign((0,r.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function d(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function v(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let m="undefined"!=typeof window?r.useLayoutEffect:r.useEffect;function b(e){let t=(0,r.useRef)(e);return m((()=>{t.current=e}),[e]),t}let y=function(e){let t=b(e);return r.useCallback(((...e)=>t.current(...e)),[t])},E=Symbol();function P(e,t=!0){return Object.assign(e,{[E]:t})}function w(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=y((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[E])))?void 0:n}let g={serverHandoffComplete:!1};var h;let S=0;function O(){return++S}let F=null!=(h=r.useId)?h:function(){let e=function(){let[e,t]=(0,r.useState)(g.serverHandoffComplete);return(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>{!1===g.serverHandoffComplete&&(g.serverHandoffComplete=!0)}),[]),e}(),[t,n]=r.useState(e?O:null);return m((()=>{null===t&&n(O())}),[t]),null!=t?""+t:void 0};var I=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(I||{});function x(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}function N(e){return"undefined"==typeof window?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let C=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var T,k=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(k||{}),L=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(L||{}),D=((T=D||{})[T.Previous=-1]="Previous",T[T.Next=1]="Next",T);function A(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(C))}var M=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(M||{});function j(e,t=0){var n;return e!==(null==(n=N(e))?void 0:n.body)&&o(t,{0:()=>e.matches(C),1(){let t=e;for(;null!==t;){if(t.matches(C))return!0;t=t.parentElement}return!1}})}let H=["textarea","input"].join(",");function R(e,t,n=!0){let r,o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?n?function(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let l=r.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}(e):e:A(e),u=o.activeElement,a=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),i=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,l.indexOf(u))-1;if(4&t)return Math.max(0,l.indexOf(u))+1;if(8&t)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=32&t?{preventScroll:!0}:{},c=0,f=l.length;do{if(c>=f||c+f<=0)return 0;let e=i+c;if(16&t)e=(e+f)%f;else{if(e<0)return 3;if(e>=f)return 1}r=l[e],null==r||r.focus(s),c+=a}while(r!==o.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,H))&&n}(r)&&r.select(),r.hasAttribute("tabindex")||r.setAttribute("tabindex","0"),2}let B=(0,r.createContext)(null);B.displayName="OpenClosedContext";var $=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))($||{});function U(){return(0,r.useContext)(B)}function W({value:e,children:t}){return r.createElement(B.Provider,{value:e},t)}function _(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function G(e,t,n){let o=b(t);(0,r.useEffect)((()=>{function t(e){o.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}function K(...e){return(0,r.useMemo)((()=>N(...e)),[...e])}function q(e,t,n,o){let l=b(n);(0,r.useEffect)((()=>{function n(e){l.current(e)}return(e=null!=e?e:window).addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}),[e,t,o])}var V=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(V||{});let J=p((function(e,t){let{features:n=1,...r}=e;return s({ourProps:{ref:t,"aria-hidden":2===(2&n)||void 0,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4===(4&n)&&2!==(2&n)&&{display:"none"}}},theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})}));var Y=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Y||{});function z(){let e=(0,r.useRef)(0);return G("keydown",(t=>{"Tab"===t.key&&(e.current=t.shiftKey?1:0)}),!0),e}var Q,X=((Q=X||{})[Q.Open=0]="Open",Q[Q.Closed=1]="Closed",Q),Z=(e=>(e[e.TogglePopover=0]="TogglePopover",e[e.ClosePopover=1]="ClosePopover",e[e.SetButton=2]="SetButton",e[e.SetButtonId=3]="SetButtonId",e[e.SetPanel=4]="SetPanel",e[e.SetPanelId=5]="SetPanelId",e))(Z||{});let ee={0:e=>({...e,popoverState:o(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},te=(0,r.createContext)(null);function ne(e){let t=(0,r.useContext)(te);if(null===t){let t=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ne),t}return t}te.displayName="PopoverContext";let re=(0,r.createContext)(null);function oe(e){let t=(0,r.useContext)(re);if(null===t){let t=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,oe),t}return t}re.displayName="PopoverAPIContext";let le=(0,r.createContext)(null);function ue(){return(0,r.useContext)(le)}le.displayName="PopoverGroupContext";let ae=(0,r.createContext)(null);function ie(e,t){return o(t.type,ee,e,t)}ae.displayName="PopoverPanelContext";let se=p((function(e,t){var n;let l=`headlessui-popover-button-${F()}`,u=`headlessui-popover-panel-${F()}`,a=(0,r.useRef)(null),i=w(t,P((e=>{a.current=e}))),c=(0,r.useReducer)(ie,{popoverState:1,button:null,buttonId:l,panel:null,panelId:u,beforePanelSentinel:(0,r.createRef)(),afterPanelSentinel:(0,r.createRef)()}),[{popoverState:f,button:p,panel:d,beforePanelSentinel:v,afterPanelSentinel:m},b]=c,E=K(null!=(n=a.current)?n:p);(0,r.useEffect)((()=>b({type:3,buttonId:l})),[l,b]),(0,r.useEffect)((()=>b({type:5,panelId:u})),[u,b]);let g=(0,r.useMemo)((()=>{if(!p||!d)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(p))^Number(null==e?void 0:e.contains(d)))return!0;return!1}),[p,d]),h=(0,r.useMemo)((()=>({buttonId:l,panelId:u,close:()=>b({type:1})})),[l,u,b]),S=ue(),O=null==S?void 0:S.registerPopover,I=y((()=>{var e;return null!=(e=null==S?void 0:S.isFocusWithinPopoverGroup())?e:(null==E?void 0:E.activeElement)&&((null==p?void 0:p.contains(E.activeElement))||(null==d?void 0:d.contains(E.activeElement)))}));(0,r.useEffect)((()=>null==O?void 0:O(h)),[O,h]),q(null==E?void 0:E.defaultView,"focus",(e=>{var t,n,r,o;0===f&&(I()||!p||!d||null!=(n=null==(t=v.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=m.current)?void 0:r.contains)&&o.call(r,e.target)||b({type:1}))}),!0),function(e,t,n=!0){let o=(0,r.useRef)(!1);function l(n,r){if(!o.current||n.defaultPrevented)return;let l=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),u=r(n);if(null!==u&&u.ownerDocument.documentElement.contains(u)){for(let e of l){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(u))return}return!j(u,M.Loose)&&-1!==u.tabIndex&&n.preventDefault(),t(n,u)}}(0,r.useEffect)((()=>{requestAnimationFrame((()=>{o.current=n}))}),[n]),G("click",(e=>l(e,(e=>e.target))),!0),G("blur",(e=>l(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}([p,d],((e,t)=>{b({type:1}),j(t,M.Loose)||(e.preventDefault(),null==p||p.focus())}),0===f);let x=y((e=>{b({type:1});let t=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:p:p;null==t||t.focus()})),N=(0,r.useMemo)((()=>({close:x,isPortalled:g})),[x,g]),C=(0,r.useMemo)((()=>({open:0===f,close:x})),[f,x]),T=e,k={ref:i};return r.createElement(te.Provider,{value:c},r.createElement(re.Provider,{value:N},r.createElement(W,{value:o(f,{0:$.Open,1:$.Closed})},s({ourProps:k,theirProps:T,slot:C,defaultTag:"div",name:"Popover"}))))})),ce=p((function(e,t){let[n,l]=ne("Popover.Button"),{isPortalled:u}=oe("Popover.Button"),a=(0,r.useRef)(null),i=`headlessui-focus-sentinel-${F()}`,c=ue(),f=null==c?void 0:c.closeOthers,p=(0,r.useContext)(ae),d=null!==p&&p===n.panelId,v=w(a,t,d?null:e=>l({type:2,button:e})),b=w(a,t),E=K(a),P=y((e=>{var t,r,o;if(d){if(1===n.popoverState)return;switch(e.key){case I.Space:case I.Enter:e.preventDefault(),null==(r=(t=e.target).click)||r.call(t),l({type:1}),null==(o=n.button)||o.focus()}}else switch(e.key){case I.Space:case I.Enter:e.preventDefault(),e.stopPropagation(),1===n.popoverState&&(null==f||f(n.buttonId)),l({type:0});break;case I.Escape:if(0!==n.popoverState)return null==f?void 0:f(n.buttonId);if(!a.current||(null==E?void 0:E.activeElement)&&!a.current.contains(E.activeElement))return;e.preventDefault(),e.stopPropagation(),l({type:1})}})),g=y((e=>{d||e.key===I.Space&&e.preventDefault()})),h=y((t=>{var r,o;x(t.currentTarget)||e.disabled||(d?(l({type:1}),null==(r=n.button)||r.focus()):(t.preventDefault(),t.stopPropagation(),1===n.popoverState&&(null==f||f(n.buttonId)),l({type:0}),null==(o=n.button)||o.focus()))})),S=y((e=>{e.preventDefault(),e.stopPropagation()})),O=0===n.popoverState,N=(0,r.useMemo)((()=>({open:O})),[O]),C=function(e,t){let[n,o]=(0,r.useState)((()=>_(e)));return m((()=>{o(_(e))}),[e.type,e.as]),m((()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")}),[n,t]),n}(e,a),T=e,L=d?{ref:b,type:C,onKeyDown:P,onClick:h}:{ref:v,id:n.buttonId,type:C,"aria-expanded":e.disabled?void 0:0===n.popoverState,"aria-controls":n.panel?n.panelId:void 0,onKeyDown:P,onKeyUp:g,onClick:h,onMouseDown:S},D=z(),A=y((()=>{let e=n.panel;e&&o(D.current,{[Y.Forwards]:()=>R(e,k.First),[Y.Backwards]:()=>R(e,k.Last)})}));return r.createElement(r.Fragment,null,s({ourProps:L,theirProps:T,slot:N,defaultTag:"button",name:"Popover.Button"}),O&&!d&&u&&r.createElement(J,{id:i,features:V.Focusable,as:"button",type:"button",onFocus:A}))})),fe=a.RenderStrategy|a.Static,pe=p((function(e,t){let[{popoverState:n},o]=ne("Popover.Overlay"),l=w(t),u=`headlessui-popover-overlay-${F()}`,a=U(),i=null!==a?a===$.Open:0===n,c=y((e=>{if(x(e.currentTarget))return e.preventDefault();o({type:1})}));return s({ourProps:{ref:l,id:u,"aria-hidden":!0,onClick:c},theirProps:e,slot:(0,r.useMemo)((()=>({open:0===n})),[n]),defaultTag:"div",features:fe,visible:i,name:"Popover.Overlay"})})),de=a.RenderStrategy|a.Static,ve=p((function(e,t){let{focus:n=!1,...l}=e,[u,a]=ne("Popover.Panel"),{close:i,isPortalled:c}=oe("Popover.Panel"),f=`headlessui-focus-sentinel-before-${F()}`,p=`headlessui-focus-sentinel-after-${F()}`,d=(0,r.useRef)(null),v=w(d,t,(e=>{a({type:4,panel:e})})),m=K(d),b=U(),E=null!==b?b===$.Open:0===u.popoverState,P=y((e=>{var t;if(e.key===I.Escape){if(0!==u.popoverState||!d.current||(null==m?void 0:m.activeElement)&&!d.current.contains(m.activeElement))return;e.preventDefault(),e.stopPropagation(),a({type:1}),null==(t=u.button)||t.focus()}}));(0,r.useEffect)((()=>{var t;e.static||1===u.popoverState&&(null==(t=e.unmount)||t)&&a({type:4,panel:null})}),[u.popoverState,e.unmount,e.static,a]),(0,r.useEffect)((()=>{if(!n||0!==u.popoverState||!d.current)return;let e=null==m?void 0:m.activeElement;d.current.contains(e)||R(d.current,k.First)}),[n,d,u.popoverState]);let g=(0,r.useMemo)((()=>({open:0===u.popoverState,close:i})),[u,i]),h={ref:v,id:u.panelId,onKeyDown:P,onBlur:n&&0===u.popoverState?e=>{var t,n,r,o,l;let i=e.relatedTarget;!i||!d.current||null!=(t=d.current)&&t.contains(i)||(a({type:1}),((null==(r=null==(n=u.beforePanelSentinel.current)?void 0:n.contains)?void 0:r.call(n,i))||(null==(l=null==(o=u.afterPanelSentinel.current)?void 0:o.contains)?void 0:l.call(o,i)))&&i.focus({preventScroll:!0}))}:void 0,tabIndex:-1},S=z(),O=y((()=>{let e=d.current;e&&o(S.current,{[Y.Forwards]:()=>{R(e,k.First)},[Y.Backwards]:()=>{var e;null==(e=u.button)||e.focus({preventScroll:!0})}})})),x=y((()=>{let e=d.current;e&&o(S.current,{[Y.Forwards]:()=>{var e,t,n;if(!u.button)return;let r=A(),o=r.indexOf(u.button),l=r.slice(0,o+1),a=[...r.slice(o+1),...l];for(let i of a.slice())if((null==(t=null==(e=null==i?void 0:i.id)?void 0:e.startsWith)?void 0:t.call(e,"headlessui-focus-sentinel-"))||(null==(n=u.panel)?void 0:n.contains(i))){let e=a.indexOf(i);-1!==e&&a.splice(e,1)}R(a,k.First,!1)},[Y.Backwards]:()=>R(e,k.Last)})}));return r.createElement(ae.Provider,{value:u.panelId},E&&c&&r.createElement(J,{id:f,ref:u.beforePanelSentinel,features:V.Focusable,as:"button",type:"button",onFocus:O}),s({ourProps:h,theirProps:l,slot:g,defaultTag:"div",features:de,visible:E,name:"Popover.Panel"}),E&&c&&r.createElement(J,{id:p,ref:u.afterPanelSentinel,features:V.Focusable,as:"button",type:"button",onFocus:x}))})),me=p((function(e,t){let n=(0,r.useRef)(null),o=w(n,t),[l,u]=(0,r.useState)([]),a=y((e=>{u((t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t}))})),i=y((e=>(u((t=>[...t,e])),()=>a(e)))),c=y((()=>{var e;let t=N(n);if(!t)return!1;let r=t.activeElement;return!(null==(e=n.current)||!e.contains(r))||l.some((e=>{var n,o;return(null==(n=t.getElementById(e.buttonId))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId))?void 0:o.contains(r))}))})),f=y((e=>{for(let t of l)t.buttonId!==e&&t.close()})),p=(0,r.useMemo)((()=>({registerPopover:i,unregisterPopover:a,isFocusWithinPopoverGroup:c,closeOthers:f})),[i,a,c,f]),d=(0,r.useMemo)((()=>({})),[]),v=e,m={ref:o};return r.createElement(le.Provider,{value:p},s({ourProps:m,theirProps:v,slot:d,defaultTag:"div",name:"Popover.Group"}))})),be=Object.assign(se,{Button:ce,Overlay:pe,Panel:ve,Group:me})}}]);