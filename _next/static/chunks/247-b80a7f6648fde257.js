(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{8435:function(e){var t="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,f,c,u;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(f=s;0!==f--;)if(!i(e[f],a[f]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(f=u.next()).done;)if(!a.has(f.value[0]))return!1;for(u=e.entries();!(f=u.next()).done;)if(!i(f.value[1],a.get(f.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(f=u.next()).done;)if(!a.has(f.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(f=s;0!==f--;)if(e[f]!==a[f])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(c=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(f=s;0!==f--;)if(!Object.prototype.hasOwnProperty.call(a,c[f]))return!1;if(t&&e instanceof Element)return!1;for(f=s;0!==f--;)if(("_owner"!==c[f]&&"__v"!==c[f]&&"__o"!==c[f]||!e.$$typeof)&&!i(e[c[f]],a[c[f]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},2247:function(e,t,n){"use strict";n.d(t,{D:function(){return be}});var r=n(2784);function o(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect();return{width:n.width/1,height:n.height/1,top:n.top/1,right:n.right/1,bottom:n.bottom/1,left:n.left/1,x:n.left/1,y:n.top/1}}function i(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function a(e){var t=i(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function s(e){return e instanceof i(e).Element||e instanceof Element}function f(e){return e instanceof i(e).HTMLElement||e instanceof HTMLElement}function c(e){return"undefined"!==typeof ShadowRoot&&(e instanceof i(e).ShadowRoot||e instanceof ShadowRoot)}function u(e){return e?(e.nodeName||"").toLowerCase():null}function p(e){return((s(e)?e.ownerDocument:e.document)||window.document).documentElement}function l(e){return o(p(e)).left+a(e).scrollLeft}function d(e){return i(e).getComputedStyle(e)}function m(e){var t=d(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function h(e,t,n){void 0===n&&(n=!1);var r=f(t),s=f(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(t),c=p(t),d=o(e,s),h={scrollLeft:0,scrollTop:0},v={x:0,y:0};return(r||!r&&!n)&&(("body"!==u(t)||m(c))&&(h=function(e){return e!==i(e)&&f(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:a(e);var t}(t)),f(t)?((v=o(t,!0)).x+=t.clientLeft,v.y+=t.clientTop):c&&(v.x=l(c))),{x:d.left+h.scrollLeft-v.x,y:d.top+h.scrollTop-v.y,width:d.width,height:d.height}}function v(e){var t=o(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function y(e){return"html"===u(e)?e:e.assignedSlot||e.parentNode||(c(e)?e.host:null)||p(e)}function g(e){return["html","body","#document"].indexOf(u(e))>=0?e.ownerDocument.body:f(e)&&m(e)?e:g(y(e))}function b(e,t){var n;void 0===t&&(t=[]);var r=g(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),a=i(r),s=o?[a].concat(a.visualViewport||[],m(r)?r:[]):r,f=t.concat(s);return o?f:f.concat(b(y(s)))}function w(e){return["table","td","th"].indexOf(u(e))>=0}function O(e){return f(e)&&"fixed"!==d(e).position?e.offsetParent:null}function x(e){for(var t=i(e),n=O(e);n&&w(n)&&"static"===d(n).position;)n=O(n);return n&&("html"===u(n)||"body"===u(n)&&"static"===d(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&f(e)&&"fixed"===d(e).position)return null;for(var n=y(e);f(n)&&["html","body"].indexOf(u(n))<0;){var r=d(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var j="top",E="bottom",D="right",k="left",M="auto",A=[j,E,D,k],S="start",L="end",P="viewport",B="popper",R=A.reduce((function(e,t){return e.concat([t+"-"+S,t+"-"+L])}),[]),W=[].concat(A,[M]).reduce((function(e,t){return e.concat([t,t+"-"+S,t+"-"+L])}),[]),H=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function T(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function C(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var _={placement:"bottom",modifiers:[],strategy:"absolute"};function q(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function U(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?_:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},_,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],f=!1,c={state:o,setOptions:function(n){var f="function"===typeof n?n(o.options):n;u(),o.options=Object.assign({},i,o.options,f),o.scrollParents={reference:s(e)?b(e):e.contextElement?b(e.contextElement):[],popper:b(t)};var p=function(e){var t=T(e);return H.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=p.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:c,options:r}),f=function(){};a.push(s||f)}})),c.update()},forceUpdate:function(){if(!f){var e=o.elements,t=e.reference,n=e.popper;if(q(t,n)){o.rects={reference:h(t,x(n),"fixed"===o.options.strategy),popper:v(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,s=i.options,u=void 0===s?{}:s,p=i.name;"function"===typeof a&&(o=a({state:o,options:u,name:p,instance:c})||o)}else o.reset=!1,r=-1}}},update:C((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){u(),f=!0}};if(!q(e,t))return c;function u(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var N={passive:!0};var V={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=void 0===o||o,s=r.resize,f=void 0===s||s,c=i(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach((function(e){e.addEventListener("scroll",n.update,N)})),f&&c.addEventListener("resize",n.update,N),function(){a&&u.forEach((function(e){e.removeEventListener("scroll",n.update,N)})),f&&c.removeEventListener("resize",n.update,N)}},data:{}};function z(e){return e.split("-")[0]}function F(e){return e.split("-")[1]}function I(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function X(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?z(o):null,a=o?F(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case j:t={x:s,y:n.y-r.height};break;case E:t={x:s,y:n.y+n.height};break;case D:t={x:n.x+n.width,y:f};break;case k:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?I(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case S:t[c]=t[c]-(n[u]/2-r[u]/2);break;case L:t[c]=t[c]+(n[u]/2-r[u]/2)}}return t}var Y={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=X({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},$=Math.max,G=Math.min,J=Math.round,K={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Q(e){var t,n=e.popper,r=e.popperRect,o=e.placement,a=e.variation,s=e.offsets,f=e.position,c=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,m=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:J(J(t*r)/r)||0,y:J(J(n*r)/r)||0}}(s):"function"===typeof l?l(s):s,h=m.x,v=void 0===h?0:h,y=m.y,g=void 0===y?0:y,b=s.hasOwnProperty("x"),w=s.hasOwnProperty("y"),O=k,M=j,A=window;if(u){var S=x(n),P="clientHeight",B="clientWidth";S===i(n)&&"static"!==d(S=p(n)).position&&"absolute"===f&&(P="scrollHeight",B="scrollWidth"),S=S,o!==j&&(o!==k&&o!==D||a!==L)||(M=E,g-=S[P]-r.height,g*=c?1:-1),o!==k&&(o!==j&&o!==E||a!==L)||(O=D,v-=S[B]-r.width,v*=c?1:-1)}var R,W=Object.assign({position:f},u&&K);return c?Object.assign({},W,((R={})[M]=w?"0":"",R[O]=b?"0":"",R.transform=(A.devicePixelRatio||1)<=1?"translate("+v+"px, "+g+"px)":"translate3d("+v+"px, "+g+"px, 0)",R)):Object.assign({},W,((t={})[M]=w?g+"px":"",t[O]=b?v+"px":"",t.transform="",t))}var Z={left:"right",right:"left",bottom:"top",top:"bottom"};function ee(e){return e.replace(/left|right|bottom|top/g,(function(e){return Z[e]}))}var te={start:"end",end:"start"};function ne(e){return e.replace(/start|end/g,(function(e){return te[e]}))}function re(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&c(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function oe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ie(e,t){return t===P?oe(function(e){var t=i(e),n=p(e),r=t.visualViewport,o=n.clientWidth,a=n.clientHeight,s=0,f=0;return r&&(o=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,f=r.offsetTop)),{width:o,height:a,x:s+l(e),y:f}}(e)):f(t)?function(e){var t=o(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):oe(function(e){var t,n=p(e),r=a(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=$(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=$(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),f=-r.scrollLeft+l(e),c=-r.scrollTop;return"rtl"===d(o||n).direction&&(f+=$(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:s,x:f,y:c}}(p(e)))}function ae(e,t,n){var r="clippingParents"===t?function(e){var t=b(y(e)),n=["absolute","fixed"].indexOf(d(e).position)>=0&&f(e)?x(e):e;return s(n)?t.filter((function(e){return s(e)&&re(e,n)&&"body"!==u(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=ie(e,n);return t.top=$(r.top,t.top),t.right=G(r.right,t.right),t.bottom=G(r.bottom,t.bottom),t.left=$(r.left,t.left),t}),ie(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function se(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function fe(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function ce(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=void 0===r?e.placement:r,a=n.boundary,f=void 0===a?"clippingParents":a,c=n.rootBoundary,u=void 0===c?P:c,l=n.elementContext,d=void 0===l?B:l,m=n.altBoundary,h=void 0!==m&&m,v=n.padding,y=void 0===v?0:v,g=se("number"!==typeof y?y:fe(y,A)),b=d===B?"reference":B,w=e.rects.popper,O=e.elements[h?b:d],x=ae(s(O)?O:O.contextElement||p(e.elements.popper),f,u),k=o(e.elements.reference),M=X({reference:k,element:w,strategy:"absolute",placement:i}),S=oe(Object.assign({},w,M)),L=d===B?S:k,R={top:x.top-L.top+g.top,bottom:L.bottom-x.bottom+g.bottom,left:x.left-L.left+g.left,right:L.right-x.right+g.right},W=e.modifiersData.offset;if(d===B&&W){var H=W[i];Object.keys(R).forEach((function(e){var t=[D,E].indexOf(e)>=0?1:-1,n=[j,E].indexOf(e)>=0?"y":"x";R[e]+=H[n]*t}))}return R}function ue(e,t,n){return $(e,G(t,n))}function pe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function le(e){return[j,D,E,k].some((function(t){return e[t]>=0}))}var de=U({defaultModifiers:[V,Y,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:z(t.placement),variation:F(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Q(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Q(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];f(o)&&u(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});f(r)&&u(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=W.reduce((function(e,n){return e[n]=function(e,t,n){var r=z(e),o=[k,j].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[k,D].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,p=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=z(v),g=f||(y===v||!m?[ee(v)]:function(e){if(z(e)===M)return[];var t=ee(e);return[ne(e),t,ne(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat(z(n)===M?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?W:f,u=F(r),p=u?s?R:R.filter((function(e){return F(e)===u})):A,l=p.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=p);var d=l.reduce((function(t,n){return t[n]=ce(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[z(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:p,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,O=t.rects.popper,x=new Map,L=!0,P=b[0],B=0;B<b.length;B++){var H=b[B],T=z(H),C=F(H)===S,_=[j,E].indexOf(T)>=0,q=_?"width":"height",U=ce(t,{placement:H,boundary:u,rootBoundary:p,altBoundary:l,padding:c}),N=_?C?D:k:C?E:j;w[q]>O[q]&&(N=ee(N));var V=ee(N),I=[];if(i&&I.push(U[T]<=0),s&&I.push(U[N]<=0,U[V]<=0),I.every((function(e){return e}))){P=H,L=!1;break}x.set(H,I)}if(L)for(var X=function(e){var t=b.find((function(t){var n=x.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},Y=m?3:1;Y>0;Y--){if("break"===X(Y))break}t.placement!==P&&(t.modifiersData[r]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,u=n.altBoundary,p=n.padding,l=n.tether,d=void 0===l||l,m=n.tetherOffset,h=void 0===m?0:m,y=ce(t,{boundary:f,rootBoundary:c,padding:p,altBoundary:u}),g=z(t.placement),b=F(t.placement),w=!b,O=I(g),M="x"===O?"y":"x",A=t.modifiersData.popperOffsets,L=t.rects.reference,P=t.rects.popper,B="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,R={x:0,y:0};if(A){if(i||s){var W="y"===O?j:k,H="y"===O?E:D,T="y"===O?"height":"width",C=A[O],_=A[O]+y[W],q=A[O]-y[H],U=d?-P[T]/2:0,N=b===S?L[T]:P[T],V=b===S?-P[T]:-L[T],X=t.elements.arrow,Y=d&&X?v(X):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},K=J[W],Q=J[H],Z=ue(0,L[T],Y[T]),ee=w?L[T]/2-U-Z-K-B:N-Z-K-B,te=w?-L[T]/2+U+Z+Q+B:V+Z+Q+B,ne=t.elements.arrow&&x(t.elements.arrow),re=ne?"y"===O?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][O]:0,ie=A[O]+ee-oe-re,ae=A[O]+te-oe;if(i){var se=ue(d?G(_,ie):_,C,d?$(q,ae):q);A[O]=se,R[O]=se-C}if(s){var fe="x"===O?j:k,pe="x"===O?E:D,le=A[M],de=le+y[fe],me=le-y[pe],he=ue(d?G(de,ie):de,le,d?$(me,ae):me);A[M]=he,R[M]=he-le}}t.modifiersData[r]=R}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=z(n.placement),f=I(s),c=[k,D].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return se("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:fe(e,A))}(o.padding,n),p=v(i),l="y"===f?j:k,d="y"===f?E:D,m=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],h=a[f]-n.rects.reference[f],y=x(i),g=y?"y"===f?y.clientHeight||0:y.clientWidth||0:0,b=m/2-h/2,w=u[l],O=g-p[c]-u[d],M=g/2-p[c]/2+b,S=ue(w,M,O),L=f;n.modifiersData[r]=((t={})[L]=S,t.centerOffset=S-M,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&re(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ce(t,{elementContext:"reference"}),s=ce(t,{altBoundary:!0}),f=pe(a,r),c=pe(s,o,i),u=le(f),p=le(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}}]}),me=n(8435),he=n.n(me),ve=function(e){return e.reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,e}),{})},ye="undefined"!==typeof window&&window.document&&window.document.createElement?r.useLayoutEffect:r.useEffect,ge=[],be=function(e,t,n){void 0===n&&(n={});var o=r.useRef(null),i={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||ge},a=r.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),s=a[0],f=a[1],c=r.useMemo((function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(e){var t=e.state,n=Object.keys(t.elements);f({styles:ve(n.map((function(e){return[e,t.styles[e]||{}]}))),attributes:ve(n.map((function(e){return[e,t.attributes[e]]})))})},requires:["computeStyles"]}}),[]),u=r.useMemo((function(){var e={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[c,{name:"applyStyles",enabled:!1}])};return he()(o.current,e)?o.current||e:(o.current=e,e)}),[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,c]),p=r.useRef();return ye((function(){p.current&&p.current.setOptions(u)}),[u]),ye((function(){if(null!=e&&null!=t){var r=(n.createPopper||de)(e,t,u);return p.current=r,function(){r.destroy(),p.current=null}}}),[e,t,n.createPopper]),{state:p.current?p.current.state:null,styles:s.styles,attributes:s.attributes,update:p.current?p.current.update:null,forceUpdate:p.current?p.current.forceUpdate:null}}}}]);