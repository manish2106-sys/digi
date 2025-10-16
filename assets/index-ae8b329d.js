(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Zg={exports:{}},Dl={},ey={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=Symbol.for("react.element"),pE=Symbol.for("react.portal"),mE=Symbol.for("react.fragment"),gE=Symbol.for("react.strict_mode"),yE=Symbol.for("react.profiler"),_E=Symbol.for("react.provider"),vE=Symbol.for("react.context"),wE=Symbol.for("react.forward_ref"),EE=Symbol.for("react.suspense"),TE=Symbol.for("react.memo"),IE=Symbol.for("react.lazy"),fp=Symbol.iterator;function SE(t){return t===null||typeof t!="object"?null:(t=fp&&t[fp]||t["@@iterator"],typeof t=="function"?t:null)}var ty={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ny=Object.assign,ry={};function Wi(t,e,n){this.props=t,this.context=e,this.refs=ry,this.updater=n||ty}Wi.prototype.isReactComponent={};Wi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Wi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function iy(){}iy.prototype=Wi.prototype;function Oh(t,e,n){this.props=t,this.context=e,this.refs=ry,this.updater=n||ty}var Lh=Oh.prototype=new iy;Lh.constructor=Oh;ny(Lh,Wi.prototype);Lh.isPureReactComponent=!0;var pp=Array.isArray,sy=Object.prototype.hasOwnProperty,Mh={current:null},oy={key:!0,ref:!0,__self:!0,__source:!0};function ay(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)sy.call(e,r)&&!oy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Eo,type:t,key:s,ref:o,props:i,_owner:Mh.current}}function AE(t,e){return{$$typeof:Eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Eo}function CE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mp=/\/+/g;function Vu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?CE(""+t.key):e.toString(36)}function wa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Eo:case pE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Vu(o,0):r,pp(i)?(n="",t!=null&&(n=t.replace(mp,"$&/")+"/"),wa(i,e,n,"",function(h){return h})):i!=null&&(bh(i)&&(i=AE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(mp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",pp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Vu(s,l);o+=wa(s,e,n,u,i)}else if(u=SE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Vu(s,l++),o+=wa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yo(t,e,n){if(t==null)return t;var r=[],i=0;return wa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function RE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},Ea={transition:null},PE={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:Mh};function ly(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:Yo,forEach:function(t,e,n){Yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yo(t,function(){e++}),e},toArray:function(t){return Yo(t,function(e){return e})||[]},only:function(t){if(!bh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=Wi;Z.Fragment=mE;Z.Profiler=yE;Z.PureComponent=Oh;Z.StrictMode=gE;Z.Suspense=EE;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PE;Z.act=ly;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ny({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)sy.call(e,u)&&!oy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Eo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:vE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_E,_context:t},t.Consumer=t};Z.createElement=ay;Z.createFactory=function(t){var e=ay.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:wE,render:t}};Z.isValidElement=bh;Z.lazy=function(t){return{$$typeof:IE,_payload:{_status:-1,_result:t},_init:RE}};Z.memo=function(t,e){return{$$typeof:TE,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Ea.transition;Ea.transition={};try{t()}finally{Ea.transition=e}};Z.unstable_act=ly;Z.useCallback=function(t,e){return at.current.useCallback(t,e)};Z.useContext=function(t){return at.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return at.current.useDeferredValue(t)};Z.useEffect=function(t,e){return at.current.useEffect(t,e)};Z.useId=function(){return at.current.useId()};Z.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return at.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};Z.useRef=function(t){return at.current.useRef(t)};Z.useState=function(t){return at.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return at.current.useTransition()};Z.version="18.3.1";ey.exports=Z;var ye=ey.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE=ye,NE=Symbol.for("react.element"),xE=Symbol.for("react.fragment"),DE=Object.prototype.hasOwnProperty,VE=kE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,OE={key:!0,ref:!0,__self:!0,__source:!0};function uy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)DE.call(e,r)&&!OE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:NE,type:t,key:s,ref:o,props:i,_owner:VE.current}}Dl.Fragment=xE;Dl.jsx=uy;Dl.jsxs=uy;Zg.exports=Dl;var F=Zg.exports,cy={exports:{}},Tt={},hy={exports:{}},dy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,W){var G=L.length;L.push(W);e:for(;0<G;){var le=G-1>>>1,Ae=L[le];if(0<i(Ae,W))L[le]=W,L[G]=Ae,G=le;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var W=L[0],G=L.pop();if(G!==W){L[0]=G;e:for(var le=0,Ae=L.length,_r=Ae>>>1;le<_r;){var St=2*(le+1)-1,vr=L[St],Ot=St+1,Pn=L[Ot];if(0>i(vr,G))Ot<Ae&&0>i(Pn,vr)?(L[le]=Pn,L[Ot]=G,le=Ot):(L[le]=vr,L[St]=G,le=St);else if(Ot<Ae&&0>i(Pn,G))L[le]=Pn,L[Ot]=G,le=Ot;else break e}}return W}function i(L,W){var G=L.sortIndex-W.sortIndex;return G!==0?G:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,g=3,A=!1,k=!1,x=!1,D=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(L){for(var W=n(h);W!==null;){if(W.callback===null)r(h);else if(W.startTime<=L)r(h),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(h)}}function V(L){if(x=!1,C(L),!k)if(n(u)!==null)k=!0,gt(U);else{var W=n(h);W!==null&&Te(V,W.startTime-L)}}function U(L,W){k=!1,x&&(x=!1,I(y),y=-1),A=!0;var G=g;try{for(C(W),p=n(u);p!==null&&(!(p.expirationTime>W)||L&&!S());){var le=p.callback;if(typeof le=="function"){p.callback=null,g=p.priorityLevel;var Ae=le(p.expirationTime<=W);W=t.unstable_now(),typeof Ae=="function"?p.callback=Ae:p===n(u)&&r(u),C(W)}else r(u);p=n(u)}if(p!==null)var _r=!0;else{var St=n(h);St!==null&&Te(V,St.startTime-W),_r=!1}return _r}finally{p=null,g=G,A=!1}}var z=!1,_=null,y=-1,w=5,T=-1;function S(){return!(t.unstable_now()-T<w)}function P(){if(_!==null){var L=t.unstable_now();T=L;var W=!0;try{W=_(!0,L)}finally{W?E():(z=!1,_=null)}}else z=!1}var E;if(typeof v=="function")E=function(){v(P)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,be=ae.port2;ae.port1.onmessage=P,E=function(){be.postMessage(null)}}else E=function(){D(P,0)};function gt(L){_=L,z||(z=!0,E())}function Te(L,W){y=D(function(){L(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){k||A||(k=!0,gt(U))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(L){switch(g){case 1:case 2:case 3:var W=3;break;default:W=g}var G=g;g=W;try{return L()}finally{g=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var G=g;g=L;try{return W()}finally{g=G}},t.unstable_scheduleCallback=function(L,W,G){var le=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?le+G:le):G=le,L){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=G+Ae,L={id:f++,callback:W,priorityLevel:L,startTime:G,expirationTime:Ae,sortIndex:-1},G>le?(L.sortIndex=G,e(h,L),n(u)===null&&L===n(h)&&(x?(I(y),y=-1):x=!0,Te(V,G-le))):(L.sortIndex=Ae,e(u,L),k||A||(k=!0,gt(U))),L},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(L){var W=g;return function(){var G=g;g=W;try{return L.apply(this,arguments)}finally{g=G}}}})(dy);hy.exports=dy;var LE=hy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ME=ye,Et=LE;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fy=new Set,Gs={};function Kr(t,e){xi(t,e),xi(t+"Capture",e)}function xi(t,e){for(Gs[t]=e,t=0;t<e.length;t++)fy.add(e[t])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_c=Object.prototype.hasOwnProperty,bE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gp={},yp={};function FE(t){return _c.call(yp,t)?!0:_c.call(gp,t)?!1:bE.test(t)?yp[t]=!0:(gp[t]=!0,!1)}function UE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jE(t,e,n,r){if(e===null||typeof e>"u"||UE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fh=/[\-:]([a-z])/g;function Uh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fh,Uh);qe[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fh,Uh);qe[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fh,Uh);qe[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function jh(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jE(e,n,i,r)&&(n=null),r||i===null?FE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Cn=ME.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jo=Symbol.for("react.element"),ai=Symbol.for("react.portal"),li=Symbol.for("react.fragment"),zh=Symbol.for("react.strict_mode"),vc=Symbol.for("react.profiler"),py=Symbol.for("react.provider"),my=Symbol.for("react.context"),Bh=Symbol.for("react.forward_ref"),wc=Symbol.for("react.suspense"),Ec=Symbol.for("react.suspense_list"),$h=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),gy=Symbol.for("react.offscreen"),_p=Symbol.iterator;function ys(t){return t===null||typeof t!="object"?null:(t=_p&&t[_p]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,Ou;function As(t){if(Ou===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ou=e&&e[1]||""}return`
`+Ou+t}var Lu=!1;function Mu(t,e){if(!t||Lu)return"";Lu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Lu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?As(t):""}function zE(t){switch(t.tag){case 5:return As(t.type);case 16:return As("Lazy");case 13:return As("Suspense");case 19:return As("SuspenseList");case 0:case 2:case 15:return t=Mu(t.type,!1),t;case 11:return t=Mu(t.type.render,!1),t;case 1:return t=Mu(t.type,!0),t;default:return""}}function Tc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case li:return"Fragment";case ai:return"Portal";case vc:return"Profiler";case zh:return"StrictMode";case wc:return"Suspense";case Ec:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case my:return(t.displayName||"Context")+".Consumer";case py:return(t._context.displayName||"Context")+".Provider";case Bh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $h:return e=t.displayName||null,e!==null?e:Tc(t.type)||"Memo";case bn:e=t._payload,t=t._init;try{return Tc(t(e))}catch{}}return null}function BE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tc(e);case 8:return e===zh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $E(t){var e=yy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zo(t){t._valueTracker||(t._valueTracker=$E(t))}function _y(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=yy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ba(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ic(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vy(t,e){e=e.checked,e!=null&&jh(t,"checked",e,!1)}function Sc(t,e){vy(t,e);var n=ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ac(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ac(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ac(t,e,n){(e!=="number"||Ba(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Cs=Array.isArray;function wi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Cc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ep(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Cs(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function wy(t,e){var n=ar(e.value),r=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Tp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ey(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ey(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ea,Ty=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ea=ea||document.createElement("div"),ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ea.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Qs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},HE=["Webkit","ms","Moz","O"];Object.keys(Vs).forEach(function(t){HE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vs[e]=Vs[t]})});function Iy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vs.hasOwnProperty(t)&&Vs[t]?(""+e).trim():e+"px"}function Sy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Iy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var WE=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pc(t,e){if(e){if(WE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function kc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nc=null;function Hh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xc=null,Ei=null,Ti=null;function Ip(t){if(t=So(t)){if(typeof xc!="function")throw Error(b(280));var e=t.stateNode;e&&(e=bl(e),xc(t.stateNode,t.type,e))}}function Ay(t){Ei?Ti?Ti.push(t):Ti=[t]:Ei=t}function Cy(){if(Ei){var t=Ei,e=Ti;if(Ti=Ei=null,Ip(t),e)for(t=0;t<e.length;t++)Ip(e[t])}}function Ry(t,e){return t(e)}function Py(){}var bu=!1;function ky(t,e,n){if(bu)return t(e,n);bu=!0;try{return Ry(t,e,n)}finally{bu=!1,(Ei!==null||Ti!==null)&&(Py(),Cy())}}function Xs(t,e){var n=t.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var Dc=!1;if(gn)try{var _s={};Object.defineProperty(_s,"passive",{get:function(){Dc=!0}}),window.addEventListener("test",_s,_s),window.removeEventListener("test",_s,_s)}catch{Dc=!1}function qE(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Os=!1,$a=null,Ha=!1,Vc=null,KE={onError:function(t){Os=!0,$a=t}};function GE(t,e,n,r,i,s,o,l,u){Os=!1,$a=null,qE.apply(KE,arguments)}function QE(t,e,n,r,i,s,o,l,u){if(GE.apply(this,arguments),Os){if(Os){var h=$a;Os=!1,$a=null}else throw Error(b(198));Ha||(Ha=!0,Vc=h)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ny(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Sp(t){if(Gr(t)!==t)throw Error(b(188))}function XE(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Sp(i),t;if(s===r)return Sp(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function xy(t){return t=XE(t),t!==null?Dy(t):null}function Dy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dy(t);if(e!==null)return e;t=t.sibling}return null}var Vy=Et.unstable_scheduleCallback,Ap=Et.unstable_cancelCallback,YE=Et.unstable_shouldYield,JE=Et.unstable_requestPaint,Re=Et.unstable_now,ZE=Et.unstable_getCurrentPriorityLevel,Wh=Et.unstable_ImmediatePriority,Oy=Et.unstable_UserBlockingPriority,Wa=Et.unstable_NormalPriority,e1=Et.unstable_LowPriority,Ly=Et.unstable_IdlePriority,Vl=null,Xt=null;function t1(t){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(Vl,t,void 0,(t.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:i1,n1=Math.log,r1=Math.LN2;function i1(t){return t>>>=0,t===0?32:31-(n1(t)/r1|0)|0}var ta=64,na=4194304;function Rs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Rs(l):(s&=o,s!==0&&(r=Rs(s)))}else o=n&~i,o!==0?r=Rs(o):s!==0&&(r=Rs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-zt(e),i=1<<n,r|=t[n],e&=~i;return r}function s1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function o1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=s1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Oc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function My(){var t=ta;return ta<<=1,!(ta&4194240)&&(ta=64),t}function Fu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function To(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zt(e),t[e]=n}function a1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-zt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-zt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function by(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Fy,Kh,Uy,jy,zy,Lc=!1,ra=[],Gn=null,Qn=null,Xn=null,Ys=new Map,Js=new Map,Un=[],l1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cp(t,e){switch(t){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Xn=null;break;case"pointerover":case"pointerout":Ys.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(e.pointerId)}}function vs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=So(e),e!==null&&Kh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function u1(t,e,n,r,i){switch(e){case"focusin":return Gn=vs(Gn,t,e,n,r,i),!0;case"dragenter":return Qn=vs(Qn,t,e,n,r,i),!0;case"mouseover":return Xn=vs(Xn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ys.set(s,vs(Ys.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Js.set(s,vs(Js.get(s)||null,t,e,n,r,i)),!0}return!1}function By(t){var e=Pr(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ny(n),e!==null){t.blockedOn=e,zy(t.priority,function(){Uy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ta(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Nc=r,n.target.dispatchEvent(r),Nc=null}else return e=So(n),e!==null&&Kh(e),t.blockedOn=n,!1;e.shift()}return!0}function Rp(t,e,n){Ta(t)&&n.delete(e)}function c1(){Lc=!1,Gn!==null&&Ta(Gn)&&(Gn=null),Qn!==null&&Ta(Qn)&&(Qn=null),Xn!==null&&Ta(Xn)&&(Xn=null),Ys.forEach(Rp),Js.forEach(Rp)}function ws(t,e){t.blockedOn===e&&(t.blockedOn=null,Lc||(Lc=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,c1)))}function Zs(t){function e(i){return ws(i,t)}if(0<ra.length){ws(ra[0],t);for(var n=1;n<ra.length;n++){var r=ra[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Gn!==null&&ws(Gn,t),Qn!==null&&ws(Qn,t),Xn!==null&&ws(Xn,t),Ys.forEach(e),Js.forEach(e),n=0;n<Un.length;n++)r=Un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)By(n),n.blockedOn===null&&Un.shift()}var Ii=Cn.ReactCurrentBatchConfig,Ka=!0;function h1(t,e,n,r){var i=oe,s=Ii.transition;Ii.transition=null;try{oe=1,Gh(t,e,n,r)}finally{oe=i,Ii.transition=s}}function d1(t,e,n,r){var i=oe,s=Ii.transition;Ii.transition=null;try{oe=4,Gh(t,e,n,r)}finally{oe=i,Ii.transition=s}}function Gh(t,e,n,r){if(Ka){var i=Mc(t,e,n,r);if(i===null)Gu(t,e,r,Ga,n),Cp(t,r);else if(u1(i,t,e,n,r))r.stopPropagation();else if(Cp(t,r),e&4&&-1<l1.indexOf(t)){for(;i!==null;){var s=So(i);if(s!==null&&Fy(s),s=Mc(t,e,n,r),s===null&&Gu(t,e,r,Ga,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Gu(t,e,r,null,n)}}var Ga=null;function Mc(t,e,n,r){if(Ga=null,t=Hh(r),t=Pr(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ny(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ga=t,null}function $y(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ZE()){case Wh:return 1;case Oy:return 4;case Wa:case e1:return 16;case Ly:return 536870912;default:return 16}default:return 16}}var Wn=null,Qh=null,Ia=null;function Hy(){if(Ia)return Ia;var t,e=Qh,n=e.length,r,i="value"in Wn?Wn.value:Wn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ia=i.slice(t,1<r?1-r:void 0)}function Sa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ia(){return!0}function Pp(){return!1}function It(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ia:Pp,this.isPropagationStopped=Pp,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),e}var qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xh=It(qi),Io=we({},qi,{view:0,detail:0}),f1=It(Io),Uu,ju,Es,Ol=we({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Es&&(Es&&t.type==="mousemove"?(Uu=t.screenX-Es.screenX,ju=t.screenY-Es.screenY):ju=Uu=0,Es=t),Uu)},movementY:function(t){return"movementY"in t?t.movementY:ju}}),kp=It(Ol),p1=we({},Ol,{dataTransfer:0}),m1=It(p1),g1=we({},Io,{relatedTarget:0}),zu=It(g1),y1=we({},qi,{animationName:0,elapsedTime:0,pseudoElement:0}),_1=It(y1),v1=we({},qi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),w1=It(v1),E1=we({},qi,{data:0}),Np=It(E1),T1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=S1[t])?!!e[t]:!1}function Yh(){return A1}var C1=we({},Io,{key:function(t){if(t.key){var e=T1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yh,charCode:function(t){return t.type==="keypress"?Sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),R1=It(C1),P1=we({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xp=It(P1),k1=we({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yh}),N1=It(k1),x1=we({},qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),D1=It(x1),V1=we({},Ol,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),O1=It(V1),L1=[9,13,27,32],Jh=gn&&"CompositionEvent"in window,Ls=null;gn&&"documentMode"in document&&(Ls=document.documentMode);var M1=gn&&"TextEvent"in window&&!Ls,Wy=gn&&(!Jh||Ls&&8<Ls&&11>=Ls),Dp=String.fromCharCode(32),Vp=!1;function qy(t,e){switch(t){case"keyup":return L1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ky(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ui=!1;function b1(t,e){switch(t){case"compositionend":return Ky(e);case"keypress":return e.which!==32?null:(Vp=!0,Dp);case"textInput":return t=e.data,t===Dp&&Vp?null:t;default:return null}}function F1(t,e){if(ui)return t==="compositionend"||!Jh&&qy(t,e)?(t=Hy(),Ia=Qh=Wn=null,ui=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wy&&e.locale!=="ko"?null:e.data;default:return null}}var U1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!U1[t.type]:e==="textarea"}function Gy(t,e,n,r){Ay(r),e=Qa(e,"onChange"),0<e.length&&(n=new Xh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ms=null,eo=null;function j1(t){s_(t,0)}function Ll(t){var e=di(t);if(_y(e))return t}function z1(t,e){if(t==="change")return e}var Qy=!1;if(gn){var Bu;if(gn){var $u="oninput"in document;if(!$u){var Lp=document.createElement("div");Lp.setAttribute("oninput","return;"),$u=typeof Lp.oninput=="function"}Bu=$u}else Bu=!1;Qy=Bu&&(!document.documentMode||9<document.documentMode)}function Mp(){Ms&&(Ms.detachEvent("onpropertychange",Xy),eo=Ms=null)}function Xy(t){if(t.propertyName==="value"&&Ll(eo)){var e=[];Gy(e,eo,t,Hh(t)),ky(j1,e)}}function B1(t,e,n){t==="focusin"?(Mp(),Ms=e,eo=n,Ms.attachEvent("onpropertychange",Xy)):t==="focusout"&&Mp()}function $1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(eo)}function H1(t,e){if(t==="click")return Ll(e)}function W1(t,e){if(t==="input"||t==="change")return Ll(e)}function q1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $t=typeof Object.is=="function"?Object.is:q1;function to(t,e){if($t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!_c.call(e,i)||!$t(t[i],e[i]))return!1}return!0}function bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fp(t,e){var n=bp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bp(n)}}function Yy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jy(){for(var t=window,e=Ba();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ba(t.document)}return e}function Zh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function K1(t){var e=Jy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yy(n.ownerDocument.documentElement,n)){if(r!==null&&Zh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Fp(n,s);var o=Fp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var G1=gn&&"documentMode"in document&&11>=document.documentMode,ci=null,bc=null,bs=null,Fc=!1;function Up(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fc||ci==null||ci!==Ba(r)||(r=ci,"selectionStart"in r&&Zh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bs&&to(bs,r)||(bs=r,r=Qa(bc,"onSelect"),0<r.length&&(e=new Xh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ci)))}function sa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hi={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},Hu={},Zy={};gn&&(Zy=document.createElement("div").style,"AnimationEvent"in window||(delete hi.animationend.animation,delete hi.animationiteration.animation,delete hi.animationstart.animation),"TransitionEvent"in window||delete hi.transitionend.transition);function Ml(t){if(Hu[t])return Hu[t];if(!hi[t])return t;var e=hi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zy)return Hu[t]=e[n];return t}var e_=Ml("animationend"),t_=Ml("animationiteration"),n_=Ml("animationstart"),r_=Ml("transitionend"),i_=new Map,jp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,e){i_.set(t,e),Kr(e,[t])}for(var Wu=0;Wu<jp.length;Wu++){var qu=jp[Wu],Q1=qu.toLowerCase(),X1=qu[0].toUpperCase()+qu.slice(1);mr(Q1,"on"+X1)}mr(e_,"onAnimationEnd");mr(t_,"onAnimationIteration");mr(n_,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(r_,"onTransitionEnd");xi("onMouseEnter",["mouseout","mouseover"]);xi("onMouseLeave",["mouseout","mouseover"]);xi("onPointerEnter",["pointerout","pointerover"]);xi("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ps="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ps));function zp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,QE(r,e,void 0,t),t.currentTarget=null}function s_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;zp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;zp(i,l,h),s=u}}}if(Ha)throw t=Vc,Ha=!1,Vc=null,t}function de(t,e){var n=e[$c];n===void 0&&(n=e[$c]=new Set);var r=t+"__bubble";n.has(r)||(o_(e,t,2,!1),n.add(r))}function Ku(t,e,n){var r=0;e&&(r|=4),o_(n,t,r,e)}var oa="_reactListening"+Math.random().toString(36).slice(2);function no(t){if(!t[oa]){t[oa]=!0,fy.forEach(function(n){n!=="selectionchange"&&(Y1.has(n)||Ku(n,!1,t),Ku(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oa]||(e[oa]=!0,Ku("selectionchange",!1,e))}}function o_(t,e,n,r){switch($y(e)){case 1:var i=h1;break;case 4:i=d1;break;default:i=Gh}n=i.bind(null,e,n,t),i=void 0,!Dc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Gu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Pr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}ky(function(){var h=s,f=Hh(n),p=[];e:{var g=i_.get(t);if(g!==void 0){var A=Xh,k=t;switch(t){case"keypress":if(Sa(n)===0)break e;case"keydown":case"keyup":A=R1;break;case"focusin":k="focus",A=zu;break;case"focusout":k="blur",A=zu;break;case"beforeblur":case"afterblur":A=zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=m1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=N1;break;case e_:case t_:case n_:A=_1;break;case r_:A=D1;break;case"scroll":A=f1;break;case"wheel":A=O1;break;case"copy":case"cut":case"paste":A=w1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=xp}var x=(e&4)!==0,D=!x&&t==="scroll",I=x?g!==null?g+"Capture":null:g;x=[];for(var v=h,C;v!==null;){C=v;var V=C.stateNode;if(C.tag===5&&V!==null&&(C=V,I!==null&&(V=Xs(v,I),V!=null&&x.push(ro(v,V,C)))),D)break;v=v.return}0<x.length&&(g=new A(g,k,null,n,f),p.push({event:g,listeners:x}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==Nc&&(k=n.relatedTarget||n.fromElement)&&(Pr(k)||k[yn]))break e;if((A||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,A?(k=n.relatedTarget||n.toElement,A=h,k=k?Pr(k):null,k!==null&&(D=Gr(k),k!==D||k.tag!==5&&k.tag!==6)&&(k=null)):(A=null,k=h),A!==k)){if(x=kp,V="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=xp,V="onPointerLeave",I="onPointerEnter",v="pointer"),D=A==null?g:di(A),C=k==null?g:di(k),g=new x(V,v+"leave",A,n,f),g.target=D,g.relatedTarget=C,V=null,Pr(f)===h&&(x=new x(I,v+"enter",k,n,f),x.target=C,x.relatedTarget=D,V=x),D=V,A&&k)t:{for(x=A,I=k,v=0,C=x;C;C=ni(C))v++;for(C=0,V=I;V;V=ni(V))C++;for(;0<v-C;)x=ni(x),v--;for(;0<C-v;)I=ni(I),C--;for(;v--;){if(x===I||I!==null&&x===I.alternate)break t;x=ni(x),I=ni(I)}x=null}else x=null;A!==null&&Bp(p,g,A,x,!1),k!==null&&D!==null&&Bp(p,D,k,x,!0)}}e:{if(g=h?di(h):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var U=z1;else if(Op(g))if(Qy)U=W1;else{U=$1;var z=B1}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(U=H1);if(U&&(U=U(t,h))){Gy(p,U,n,f);break e}z&&z(t,g,h),t==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&Ac(g,"number",g.value)}switch(z=h?di(h):window,t){case"focusin":(Op(z)||z.contentEditable==="true")&&(ci=z,bc=h,bs=null);break;case"focusout":bs=bc=ci=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,Up(p,n,f);break;case"selectionchange":if(G1)break;case"keydown":case"keyup":Up(p,n,f)}var _;if(Jh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ui?qy(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Wy&&n.locale!=="ko"&&(ui||y!=="onCompositionStart"?y==="onCompositionEnd"&&ui&&(_=Hy()):(Wn=f,Qh="value"in Wn?Wn.value:Wn.textContent,ui=!0)),z=Qa(h,y),0<z.length&&(y=new Np(y,t,null,n,f),p.push({event:y,listeners:z}),_?y.data=_:(_=Ky(n),_!==null&&(y.data=_)))),(_=M1?b1(t,n):F1(t,n))&&(h=Qa(h,"onBeforeInput"),0<h.length&&(f=new Np("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=_))}s_(p,e)})}function ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Qa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xs(t,n),s!=null&&r.unshift(ro(t,s,i)),s=Xs(t,e),s!=null&&r.push(ro(t,s,i))),t=t.return}return r}function ni(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Xs(n,s),u!=null&&o.unshift(ro(n,u,l))):i||(u=Xs(n,s),u!=null&&o.push(ro(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var J1=/\r\n?/g,Z1=/\u0000|\uFFFD/g;function $p(t){return(typeof t=="string"?t:""+t).replace(J1,`
`).replace(Z1,"")}function aa(t,e,n){if(e=$p(e),$p(t)!==e&&n)throw Error(b(425))}function Xa(){}var Uc=null,jc=null;function zc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bc=typeof setTimeout=="function"?setTimeout:void 0,eT=typeof clearTimeout=="function"?clearTimeout:void 0,Hp=typeof Promise=="function"?Promise:void 0,tT=typeof queueMicrotask=="function"?queueMicrotask:typeof Hp<"u"?function(t){return Hp.resolve(null).then(t).catch(nT)}:Bc;function nT(t){setTimeout(function(){throw t})}function Qu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Zs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zs(e)}function Yn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Wp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ki=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Ki,io="__reactProps$"+Ki,yn="__reactContainer$"+Ki,$c="__reactEvents$"+Ki,rT="__reactListeners$"+Ki,iT="__reactHandles$"+Ki;function Pr(t){var e=t[Qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[yn]||n[Qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Wp(t);t!==null;){if(n=t[Qt])return n;t=Wp(t)}return e}t=n,n=t.parentNode}return null}function So(t){return t=t[Qt]||t[yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function di(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function bl(t){return t[io]||null}var Hc=[],fi=-1;function gr(t){return{current:t}}function me(t){0>fi||(t.current=Hc[fi],Hc[fi]=null,fi--)}function ce(t,e){fi++,Hc[fi]=t.current,t.current=e}var lr={},tt=gr(lr),dt=gr(!1),br=lr;function Di(t,e){var n=t.type.contextTypes;if(!n)return lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ft(t){return t=t.childContextTypes,t!=null}function Ya(){me(dt),me(tt)}function qp(t,e,n){if(tt.current!==lr)throw Error(b(168));ce(tt,e),ce(dt,n)}function a_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,BE(t)||"Unknown",i));return we({},n,r)}function Ja(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,br=tt.current,ce(tt,t),ce(dt,dt.current),!0}function Kp(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=a_(t,e,br),r.__reactInternalMemoizedMergedChildContext=t,me(dt),me(tt),ce(tt,t)):me(dt),ce(dt,n)}var un=null,Fl=!1,Xu=!1;function l_(t){un===null?un=[t]:un.push(t)}function sT(t){Fl=!0,l_(t)}function yr(){if(!Xu&&un!==null){Xu=!0;var t=0,e=oe;try{var n=un;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}un=null,Fl=!1}catch(i){throw un!==null&&(un=un.slice(t+1)),Vy(Wh,yr),i}finally{oe=e,Xu=!1}}return null}var pi=[],mi=0,Za=null,el=0,At=[],Ct=0,Fr=null,cn=1,hn="";function Ar(t,e){pi[mi++]=el,pi[mi++]=Za,Za=t,el=e}function u_(t,e,n){At[Ct++]=cn,At[Ct++]=hn,At[Ct++]=Fr,Fr=t;var r=cn;t=hn;var i=32-zt(r)-1;r&=~(1<<i),n+=1;var s=32-zt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cn=1<<32-zt(e)+i|n<<i|r,hn=s+t}else cn=1<<s|n<<i|r,hn=t}function ed(t){t.return!==null&&(Ar(t,1),u_(t,1,0))}function td(t){for(;t===Za;)Za=pi[--mi],pi[mi]=null,el=pi[--mi],pi[mi]=null;for(;t===Fr;)Fr=At[--Ct],At[Ct]=null,hn=At[--Ct],At[Ct]=null,cn=At[--Ct],At[Ct]=null}var wt=null,vt=null,ge=!1,Ft=null;function c_(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,vt=Yn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:cn,overflow:hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,vt=null,!0):!1;default:return!1}}function Wc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qc(t){if(ge){var e=vt;if(e){var n=e;if(!Gp(t,e)){if(Wc(t))throw Error(b(418));e=Yn(n.nextSibling);var r=wt;e&&Gp(t,e)?c_(r,n):(t.flags=t.flags&-4097|2,ge=!1,wt=t)}}else{if(Wc(t))throw Error(b(418));t.flags=t.flags&-4097|2,ge=!1,wt=t}}}function Qp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function la(t){if(t!==wt)return!1;if(!ge)return Qp(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zc(t.type,t.memoizedProps)),e&&(e=vt)){if(Wc(t))throw h_(),Error(b(418));for(;e;)c_(t,e),e=Yn(e.nextSibling)}if(Qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=Yn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=wt?Yn(t.stateNode.nextSibling):null;return!0}function h_(){for(var t=vt;t;)t=Yn(t.nextSibling)}function Vi(){vt=wt=null,ge=!1}function nd(t){Ft===null?Ft=[t]:Ft.push(t)}var oT=Cn.ReactCurrentBatchConfig;function Ts(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function ua(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xp(t){var e=t._init;return e(t._payload)}function d_(t){function e(I,v){if(t){var C=I.deletions;C===null?(I.deletions=[v],I.flags|=16):C.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function i(I,v){return I=tr(I,v),I.index=0,I.sibling=null,I}function s(I,v,C){return I.index=C,t?(C=I.alternate,C!==null?(C=C.index,C<v?(I.flags|=2,v):C):(I.flags|=2,v)):(I.flags|=1048576,v)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,v,C,V){return v===null||v.tag!==6?(v=rc(C,I.mode,V),v.return=I,v):(v=i(v,C),v.return=I,v)}function u(I,v,C,V){var U=C.type;return U===li?f(I,v,C.props.children,V,C.key):v!==null&&(v.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===bn&&Xp(U)===v.type)?(V=i(v,C.props),V.ref=Ts(I,v,C),V.return=I,V):(V=xa(C.type,C.key,C.props,null,I.mode,V),V.ref=Ts(I,v,C),V.return=I,V)}function h(I,v,C,V){return v===null||v.tag!==4||v.stateNode.containerInfo!==C.containerInfo||v.stateNode.implementation!==C.implementation?(v=ic(C,I.mode,V),v.return=I,v):(v=i(v,C.children||[]),v.return=I,v)}function f(I,v,C,V,U){return v===null||v.tag!==7?(v=Vr(C,I.mode,V,U),v.return=I,v):(v=i(v,C),v.return=I,v)}function p(I,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return v=rc(""+v,I.mode,C),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Jo:return C=xa(v.type,v.key,v.props,null,I.mode,C),C.ref=Ts(I,null,v),C.return=I,C;case ai:return v=ic(v,I.mode,C),v.return=I,v;case bn:var V=v._init;return p(I,V(v._payload),C)}if(Cs(v)||ys(v))return v=Vr(v,I.mode,C,null),v.return=I,v;ua(I,v)}return null}function g(I,v,C,V){var U=v!==null?v.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return U!==null?null:l(I,v,""+C,V);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Jo:return C.key===U?u(I,v,C,V):null;case ai:return C.key===U?h(I,v,C,V):null;case bn:return U=C._init,g(I,v,U(C._payload),V)}if(Cs(C)||ys(C))return U!==null?null:f(I,v,C,V,null);ua(I,C)}return null}function A(I,v,C,V,U){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(C)||null,l(v,I,""+V,U);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Jo:return I=I.get(V.key===null?C:V.key)||null,u(v,I,V,U);case ai:return I=I.get(V.key===null?C:V.key)||null,h(v,I,V,U);case bn:var z=V._init;return A(I,v,C,z(V._payload),U)}if(Cs(V)||ys(V))return I=I.get(C)||null,f(v,I,V,U,null);ua(v,V)}return null}function k(I,v,C,V){for(var U=null,z=null,_=v,y=v=0,w=null;_!==null&&y<C.length;y++){_.index>y?(w=_,_=null):w=_.sibling;var T=g(I,_,C[y],V);if(T===null){_===null&&(_=w);break}t&&_&&T.alternate===null&&e(I,_),v=s(T,v,y),z===null?U=T:z.sibling=T,z=T,_=w}if(y===C.length)return n(I,_),ge&&Ar(I,y),U;if(_===null){for(;y<C.length;y++)_=p(I,C[y],V),_!==null&&(v=s(_,v,y),z===null?U=_:z.sibling=_,z=_);return ge&&Ar(I,y),U}for(_=r(I,_);y<C.length;y++)w=A(_,I,y,C[y],V),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?y:w.key),v=s(w,v,y),z===null?U=w:z.sibling=w,z=w);return t&&_.forEach(function(S){return e(I,S)}),ge&&Ar(I,y),U}function x(I,v,C,V){var U=ys(C);if(typeof U!="function")throw Error(b(150));if(C=U.call(C),C==null)throw Error(b(151));for(var z=U=null,_=v,y=v=0,w=null,T=C.next();_!==null&&!T.done;y++,T=C.next()){_.index>y?(w=_,_=null):w=_.sibling;var S=g(I,_,T.value,V);if(S===null){_===null&&(_=w);break}t&&_&&S.alternate===null&&e(I,_),v=s(S,v,y),z===null?U=S:z.sibling=S,z=S,_=w}if(T.done)return n(I,_),ge&&Ar(I,y),U;if(_===null){for(;!T.done;y++,T=C.next())T=p(I,T.value,V),T!==null&&(v=s(T,v,y),z===null?U=T:z.sibling=T,z=T);return ge&&Ar(I,y),U}for(_=r(I,_);!T.done;y++,T=C.next())T=A(_,I,y,T.value,V),T!==null&&(t&&T.alternate!==null&&_.delete(T.key===null?y:T.key),v=s(T,v,y),z===null?U=T:z.sibling=T,z=T);return t&&_.forEach(function(P){return e(I,P)}),ge&&Ar(I,y),U}function D(I,v,C,V){if(typeof C=="object"&&C!==null&&C.type===li&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Jo:e:{for(var U=C.key,z=v;z!==null;){if(z.key===U){if(U=C.type,U===li){if(z.tag===7){n(I,z.sibling),v=i(z,C.props.children),v.return=I,I=v;break e}}else if(z.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===bn&&Xp(U)===z.type){n(I,z.sibling),v=i(z,C.props),v.ref=Ts(I,z,C),v.return=I,I=v;break e}n(I,z);break}else e(I,z);z=z.sibling}C.type===li?(v=Vr(C.props.children,I.mode,V,C.key),v.return=I,I=v):(V=xa(C.type,C.key,C.props,null,I.mode,V),V.ref=Ts(I,v,C),V.return=I,I=V)}return o(I);case ai:e:{for(z=C.key;v!==null;){if(v.key===z)if(v.tag===4&&v.stateNode.containerInfo===C.containerInfo&&v.stateNode.implementation===C.implementation){n(I,v.sibling),v=i(v,C.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=ic(C,I.mode,V),v.return=I,I=v}return o(I);case bn:return z=C._init,D(I,v,z(C._payload),V)}if(Cs(C))return k(I,v,C,V);if(ys(C))return x(I,v,C,V);ua(I,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,v!==null&&v.tag===6?(n(I,v.sibling),v=i(v,C),v.return=I,I=v):(n(I,v),v=rc(C,I.mode,V),v.return=I,I=v),o(I)):n(I,v)}return D}var Oi=d_(!0),f_=d_(!1),tl=gr(null),nl=null,gi=null,rd=null;function id(){rd=gi=nl=null}function sd(t){var e=tl.current;me(tl),t._currentValue=e}function Kc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Si(t,e){nl=t,rd=gi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ht=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(rd!==t)if(t={context:t,memoizedValue:e,next:null},gi===null){if(nl===null)throw Error(b(308));gi=t,nl.dependencies={lanes:0,firstContext:t}}else gi=gi.next=t;return e}var kr=null;function od(t){kr===null?kr=[t]:kr.push(t)}function p_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,od(e)):(n.next=i.next,i.next=n),e.interleaved=n,_n(t,r)}function _n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fn=!1;function ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_n(t,n)}return i=r.interleaved,i===null?(e.next=e,od(r)):(e.next=i.next,i.next=e),r.interleaved=e,_n(t,n)}function Aa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qh(t,n)}}function Yp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rl(t,e,n,r){var i=t.updateQueue;Fn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,A=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,x=l;switch(g=e,A=n,x.tag){case 1:if(k=x.payload,typeof k=="function"){p=k.call(A,p,g);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,g=typeof k=="function"?k.call(A,p,g):k,g==null)break e;p=we({},p,g);break e;case 2:Fn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=p):f=f.next=A,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=p}}function Jp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var Ao={},Yt=gr(Ao),so=gr(Ao),oo=gr(Ao);function Nr(t){if(t===Ao)throw Error(b(174));return t}function ld(t,e){switch(ce(oo,e),ce(so,t),ce(Yt,Ao),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Rc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Rc(e,t)}me(Yt),ce(Yt,e)}function Li(){me(Yt),me(so),me(oo)}function g_(t){Nr(oo.current);var e=Nr(Yt.current),n=Rc(e,t.type);e!==n&&(ce(so,t),ce(Yt,n))}function ud(t){so.current===t&&(me(Yt),me(so))}var _e=gr(0);function il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yu=[];function cd(){for(var t=0;t<Yu.length;t++)Yu[t]._workInProgressVersionPrimary=null;Yu.length=0}var Ca=Cn.ReactCurrentDispatcher,Ju=Cn.ReactCurrentBatchConfig,Ur=0,ve=null,De=null,je=null,sl=!1,Fs=!1,ao=0,aT=0;function Qe(){throw Error(b(321))}function hd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$t(t[n],e[n]))return!1;return!0}function dd(t,e,n,r,i,s){if(Ur=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ca.current=t===null||t.memoizedState===null?hT:dT,t=n(r,i),Fs){s=0;do{if(Fs=!1,ao=0,25<=s)throw Error(b(301));s+=1,je=De=null,e.updateQueue=null,Ca.current=fT,t=n(r,i)}while(Fs)}if(Ca.current=ol,e=De!==null&&De.next!==null,Ur=0,je=De=ve=null,sl=!1,e)throw Error(b(300));return t}function fd(){var t=ao!==0;return ao=0,t}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?ve.memoizedState=je=t:je=je.next=t,je}function Vt(){if(De===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var e=je===null?ve.memoizedState:je.next;if(e!==null)je=e,De=t;else{if(t===null)throw Error(b(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},je===null?ve.memoizedState=je=t:je=je.next=t}return je}function lo(t,e){return typeof e=="function"?e(t):e}function Zu(t){var e=Vt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=De,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Ur&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ve.lanes|=f,jr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,$t(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ec(t){var e=Vt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$t(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function y_(){}function __(t,e){var n=ve,r=Vt(),i=e(),s=!$t(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,pd(E_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,uo(9,w_.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(b(349));Ur&30||v_(n,e,i)}return i}function v_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function w_(t,e,n,r){e.value=n,e.getSnapshot=r,T_(e)&&I_(t)}function E_(t,e,n){return n(function(){T_(e)&&I_(t)})}function T_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$t(t,n)}catch{return!0}}function I_(t){var e=_n(t,1);e!==null&&Bt(e,t,1,-1)}function Zp(t){var e=Kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:t},e.queue=t,t=t.dispatch=cT.bind(null,ve,t),[e.memoizedState,t]}function uo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function S_(){return Vt().memoizedState}function Ra(t,e,n,r){var i=Kt();ve.flags|=t,i.memoizedState=uo(1|e,n,void 0,r===void 0?null:r)}function Ul(t,e,n,r){var i=Vt();r=r===void 0?null:r;var s=void 0;if(De!==null){var o=De.memoizedState;if(s=o.destroy,r!==null&&hd(r,o.deps)){i.memoizedState=uo(e,n,s,r);return}}ve.flags|=t,i.memoizedState=uo(1|e,n,s,r)}function em(t,e){return Ra(8390656,8,t,e)}function pd(t,e){return Ul(2048,8,t,e)}function A_(t,e){return Ul(4,2,t,e)}function C_(t,e){return Ul(4,4,t,e)}function R_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function P_(t,e,n){return n=n!=null?n.concat([t]):null,Ul(4,4,R_.bind(null,e,t),n)}function md(){}function k_(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function N_(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function x_(t,e,n){return Ur&21?($t(n,e)||(n=My(),ve.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n)}function lT(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Ju.transition;Ju.transition={};try{t(!1),e()}finally{oe=n,Ju.transition=r}}function D_(){return Vt().memoizedState}function uT(t,e,n){var r=er(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},V_(t))O_(e,n);else if(n=p_(t,e,n,r),n!==null){var i=ot();Bt(n,t,r,i),L_(n,e,r)}}function cT(t,e,n){var r=er(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(V_(t))O_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,$t(l,o)){var u=e.interleaved;u===null?(i.next=i,od(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=p_(t,e,i,r),n!==null&&(i=ot(),Bt(n,t,r,i),L_(n,e,r))}}function V_(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function O_(t,e){Fs=sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function L_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qh(t,n)}}var ol={readContext:Dt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},hT={readContext:Dt,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:em,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ra(4194308,4,R_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ra(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ra(4,2,t,e)},useMemo:function(t,e){var n=Kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=uT.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:Zp,useDebugValue:md,useDeferredValue:function(t){return Kt().memoizedState=t},useTransition:function(){var t=Zp(!1),e=t[0];return t=lT.bind(null,t[1]),Kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=Kt();if(ge){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),ze===null)throw Error(b(349));Ur&30||v_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,em(E_.bind(null,r,s,t),[t]),r.flags|=2048,uo(9,w_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Kt(),e=ze.identifierPrefix;if(ge){var n=hn,r=cn;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=aT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dT={readContext:Dt,useCallback:k_,useContext:Dt,useEffect:pd,useImperativeHandle:P_,useInsertionEffect:A_,useLayoutEffect:C_,useMemo:N_,useReducer:Zu,useRef:S_,useState:function(){return Zu(lo)},useDebugValue:md,useDeferredValue:function(t){var e=Vt();return x_(e,De.memoizedState,t)},useTransition:function(){var t=Zu(lo)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:y_,useSyncExternalStore:__,useId:D_,unstable_isNewReconciler:!1},fT={readContext:Dt,useCallback:k_,useContext:Dt,useEffect:pd,useImperativeHandle:P_,useInsertionEffect:A_,useLayoutEffect:C_,useMemo:N_,useReducer:ec,useRef:S_,useState:function(){return ec(lo)},useDebugValue:md,useDeferredValue:function(t){var e=Vt();return De===null?e.memoizedState=t:x_(e,De.memoizedState,t)},useTransition:function(){var t=ec(lo)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:y_,useSyncExternalStore:__,useId:D_,unstable_isNewReconciler:!1};function Mt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jl={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=er(t),s=pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Jn(t,s,i),e!==null&&(Bt(e,t,i,r),Aa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=er(t),s=pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Jn(t,s,i),e!==null&&(Bt(e,t,i,r),Aa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=er(t),i=pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Jn(t,i,r),e!==null&&(Bt(e,t,r,n),Aa(e,t,r))}};function tm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!to(n,r)||!to(i,s):!0}function M_(t,e,n){var r=!1,i=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=ft(e)?br:tt.current,r=e.contextTypes,s=(r=r!=null)?Di(t,i):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function nm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&jl.enqueueReplaceState(e,e.state,null)}function Qc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ad(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=ft(e)?br:tt.current,i.context=Di(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&jl.enqueueReplaceState(i,i.state,null),rl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Mi(t,e){try{var n="",r=e;do n+=zE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function tc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var pT=typeof WeakMap=="function"?WeakMap:Map;function b_(t,e,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ll||(ll=!0,oh=r),Xc(t,e)},n}function F_(t,e,n){n=pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xc(t,e),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function rm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new pT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=PT.bind(null,t,e,n),e.then(t,t))}function im(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pn(-1,1),e.tag=2,Jn(n,e,1))),n.lanes|=1),t)}var mT=Cn.ReactCurrentOwner,ht=!1;function st(t,e,n,r){e.child=t===null?f_(e,null,n,r):Oi(e,t.child,n,r)}function om(t,e,n,r,i){n=n.render;var s=e.ref;return Si(e,i),r=dd(t,e,n,r,s,i),n=fd(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vn(t,e,i)):(ge&&n&&ed(e),e.flags|=1,st(t,e,r,i),e.child)}function am(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Id(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,U_(t,e,s,r,i)):(t=xa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:to,n(o,r)&&t.ref===e.ref)return vn(t,e,i)}return e.flags|=1,t=tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function U_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(to(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ht=!0);else return e.lanes=t.lanes,vn(t,e,i)}return Yc(t,e,n,r,i)}function j_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(_i,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(_i,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(_i,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(_i,_t),_t|=r;return st(t,e,i,n),e.child}function z_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yc(t,e,n,r,i){var s=ft(n)?br:tt.current;return s=Di(e,s),Si(e,i),n=dd(t,e,n,r,s,i),r=fd(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vn(t,e,i)):(ge&&r&&ed(e),e.flags|=1,st(t,e,n,i),e.child)}function lm(t,e,n,r,i){if(ft(n)){var s=!0;Ja(e)}else s=!1;if(Si(e,i),e.stateNode===null)Pa(t,e),M_(e,n,r),Qc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Dt(h):(h=ft(n)?br:tt.current,h=Di(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&nm(e,o,r,h),Fn=!1;var g=e.memoizedState;o.state=g,rl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||dt.current||Fn?(typeof f=="function"&&(Gc(e,n,f,r),u=e.memoizedState),(l=Fn||tm(e,n,l,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,m_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Mt(e.type,l),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dt(u):(u=ft(n)?br:tt.current,u=Di(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&nm(e,o,r,u),Fn=!1,g=e.memoizedState,o.state=g,rl(e,r,o,i);var k=e.memoizedState;l!==p||g!==k||dt.current||Fn?(typeof A=="function"&&(Gc(e,n,A,r),k=e.memoizedState),(h=Fn||tm(e,n,h,r,g,k,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Jc(t,e,n,r,s,i)}function Jc(t,e,n,r,i,s){z_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Kp(e,n,!1),vn(t,e,s);r=e.stateNode,mT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Oi(e,t.child,null,s),e.child=Oi(e,null,l,s)):st(t,e,l,s),e.memoizedState=r.state,i&&Kp(e,n,!0),e.child}function B_(t){var e=t.stateNode;e.pendingContext?qp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qp(t,e.context,!1),ld(t,e.containerInfo)}function um(t,e,n,r,i){return Vi(),nd(i),e.flags|=256,st(t,e,n,r),e.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function eh(t){return{baseLanes:t,cachePool:null,transitions:null}}function $_(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(_e,i&1),t===null)return qc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=$l(o,r,0,null),t=Vr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=eh(n),e.memoizedState=Zc,t):gd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return gT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=tr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=tr(l,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?eh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Zc,r}return s=t.child,t=s.sibling,r=tr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gd(t,e){return e=$l({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ca(t,e,n,r){return r!==null&&nd(r),Oi(e,t.child,null,n),t=gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=tc(Error(b(422))),ca(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=$l({mode:"visible",children:r.children},i,0,null),s=Vr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Oi(e,t.child,null,o),e.child.memoizedState=eh(o),e.memoizedState=Zc,s);if(!(e.mode&1))return ca(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=tc(s,r,void 0),ca(t,e,o,r)}if(l=(o&t.childLanes)!==0,ht||l){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_n(t,i),Bt(r,t,i,-1))}return Td(),r=tc(Error(b(421))),ca(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=kT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=Yn(i.nextSibling),wt=e,ge=!0,Ft=null,t!==null&&(At[Ct++]=cn,At[Ct++]=hn,At[Ct++]=Fr,cn=t.id,hn=t.overflow,Fr=e),e=gd(e,r.children),e.flags|=4096,e)}function cm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kc(t.return,e,n)}function nc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function H_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cm(t,n,e);else if(t.tag===19)cm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&il(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),nc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&il(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}nc(e,!0,n,null,s);break;case"together":nc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yT(t,e,n){switch(e.tag){case 3:B_(e),Vi();break;case 5:g_(e);break;case 1:ft(e.type)&&Ja(e);break;case 4:ld(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(tl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?$_(t,e,n):(ce(_e,_e.current&1),t=vn(t,e,n),t!==null?t.sibling:null);ce(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return H_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,j_(t,e,n)}return vn(t,e,n)}var W_,th,q_,K_;W_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};th=function(){};q_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Nr(Yt.current);var s=null;switch(n){case"input":i=Ic(t,i),r=Ic(t,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=Cc(t,i),r=Cc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xa)}Pc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Gs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Gs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};K_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Is(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function _T(t,e,n){var r=e.pendingProps;switch(td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return ft(e.type)&&Ya(),Xe(e),null;case 3:return r=e.stateNode,Li(),me(dt),me(tt),cd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(la(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ft!==null&&(uh(Ft),Ft=null))),th(t,e),Xe(e),null;case 5:ud(e);var i=Nr(oo.current);if(n=e.type,t!==null&&e.stateNode!=null)q_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return Xe(e),null}if(t=Nr(Yt.current),la(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qt]=e,r[io]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Ps.length;i++)de(Ps[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":vp(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":Ep(r,s),de("invalid",r)}Pc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&aa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&aa(r.textContent,l,t),i=["children",""+l]):Gs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Zo(r),wp(r,s,!0);break;case"textarea":Zo(r),Tp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ey(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qt]=e,t[io]=r,W_(t,e,!1,!1),e.stateNode=t;e:{switch(o=kc(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ps.length;i++)de(Ps[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":vp(t,r),i=Ic(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),de("invalid",t);break;case"textarea":Ep(t,r),i=Cc(t,r),de("invalid",t);break;default:i=r}Pc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Sy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ty(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Qs(t,u):typeof u=="number"&&Qs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Gs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&jh(t,s,u,o))}switch(n){case"input":Zo(t),wp(t,r,!1);break;case"textarea":Zo(t),Tp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?wi(t,!!r.multiple,s,!1):r.defaultValue!=null&&wi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)K_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Nr(oo.current),Nr(Yt.current),la(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qt]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:aa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&aa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=e,e.stateNode=r}return Xe(e),null;case 13:if(me(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&vt!==null&&e.mode&1&&!(e.flags&128))h_(),Vi(),e.flags|=98560,s=!1;else if(s=la(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Qt]=e}else Vi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else Ft!==null&&(uh(Ft),Ft=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Oe===0&&(Oe=3):Td())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return Li(),th(t,e),t===null&&no(e.stateNode.containerInfo),Xe(e),null;case 10:return sd(e.type._context),Xe(e),null;case 17:return ft(e.type)&&Ya(),Xe(e),null;case 19:if(me(_e),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Is(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=il(t),o!==null){for(e.flags|=128,Is(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>bi&&(e.flags|=128,r=!0,Is(s,!1),e.lanes=4194304)}else{if(!r)if(t=il(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Is(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Xe(e),null}else 2*Re()-s.renderingStartTime>bi&&n!==1073741824&&(e.flags|=128,r=!0,Is(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=_e.current,ce(_e,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return Ed(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function vT(t,e){switch(td(e),e.tag){case 1:return ft(e.type)&&Ya(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Li(),me(dt),me(tt),cd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ud(e),null;case 13:if(me(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Vi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(_e),null;case 4:return Li(),null;case 10:return sd(e.type._context),null;case 22:case 23:return Ed(),null;case 24:return null;default:return null}}var ha=!1,Ze=!1,wT=typeof WeakSet=="function"?WeakSet:Set,$=null;function yi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function nh(t,e,n){try{n()}catch(r){Se(t,e,r)}}var hm=!1;function ET(t,e){if(Uc=Ka,t=Jy(),Zh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var A;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)g=p,p=A;for(;;){if(p===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(A=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(jc={focusedElem:t,selectionRange:n},Ka=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,D=k.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?x:Mt(e.type,x),D);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(V){Se(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return k=hm,hm=!1,k}function Us(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&nh(e,n,s)}i=i.next}while(i!==r)}}function zl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function rh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function G_(t){var e=t.alternate;e!==null&&(t.alternate=null,G_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qt],delete e[io],delete e[$c],delete e[rT],delete e[iT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Q_(t){return t.tag===5||t.tag===3||t.tag===4}function dm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xa));else if(r!==4&&(t=t.child,t!==null))for(ih(t,e,n),t=t.sibling;t!==null;)ih(t,e,n),t=t.sibling}function sh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sh(t,e,n),t=t.sibling;t!==null;)sh(t,e,n),t=t.sibling}var Be=null,bt=!1;function Ln(t,e,n){for(n=n.child;n!==null;)X_(t,e,n),n=n.sibling}function X_(t,e,n){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(Vl,n)}catch{}switch(n.tag){case 5:Ze||yi(n,e);case 6:var r=Be,i=bt;Be=null,Ln(t,e,n),Be=r,bt=i,Be!==null&&(bt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(bt?(t=Be,n=n.stateNode,t.nodeType===8?Qu(t.parentNode,n):t.nodeType===1&&Qu(t,n),Zs(t)):Qu(Be,n.stateNode));break;case 4:r=Be,i=bt,Be=n.stateNode.containerInfo,bt=!0,Ln(t,e,n),Be=r,bt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nh(n,e,o),i=i.next}while(i!==r)}Ln(t,e,n);break;case 1:if(!Ze&&(yi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}Ln(t,e,n);break;case 21:Ln(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Ln(t,e,n),Ze=r):Ln(t,e,n);break;default:Ln(t,e,n)}}function fm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wT),e.forEach(function(r){var i=NT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,bt=!1;break e;case 3:Be=l.stateNode.containerInfo,bt=!0;break e;case 4:Be=l.stateNode.containerInfo,bt=!0;break e}l=l.return}if(Be===null)throw Error(b(160));X_(s,o,i),Be=null,bt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Se(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Y_(e,t),e=e.sibling}function Y_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Lt(e,t),qt(t),r&4){try{Us(3,t,t.return),zl(3,t)}catch(x){Se(t,t.return,x)}try{Us(5,t,t.return)}catch(x){Se(t,t.return,x)}}break;case 1:Lt(e,t),qt(t),r&512&&n!==null&&yi(n,n.return);break;case 5:if(Lt(e,t),qt(t),r&512&&n!==null&&yi(n,n.return),t.flags&32){var i=t.stateNode;try{Qs(i,"")}catch(x){Se(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&vy(i,s),kc(l,o);var h=kc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Sy(i,p):f==="dangerouslySetInnerHTML"?Ty(i,p):f==="children"?Qs(i,p):jh(i,f,p,h)}switch(l){case"input":Sc(i,s);break;case"textarea":wy(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?wi(i,!!s.multiple,A,!1):g!==!!s.multiple&&(s.defaultValue!=null?wi(i,!!s.multiple,s.defaultValue,!0):wi(i,!!s.multiple,s.multiple?[]:"",!1))}i[io]=s}catch(x){Se(t,t.return,x)}}break;case 6:if(Lt(e,t),qt(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Se(t,t.return,x)}}break;case 3:if(Lt(e,t),qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zs(e.containerInfo)}catch(x){Se(t,t.return,x)}break;case 4:Lt(e,t),qt(t);break;case 13:Lt(e,t),qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vd=Re())),r&4&&fm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(h=Ze)||f,Lt(e,t),Ze=h):Lt(e,t),qt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(p=$=f;$!==null;){switch(g=$,A=g.child,g.tag){case 0:case 11:case 14:case 15:Us(4,g,g.return);break;case 1:yi(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(x){Se(r,n,x)}}break;case 5:yi(g,g.return);break;case 22:if(g.memoizedState!==null){mm(p);continue}}A!==null?(A.return=g,$=A):mm(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Iy("display",o))}catch(x){Se(t,t.return,x)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(x){Se(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Lt(e,t),qt(t),r&4&&fm(t);break;case 21:break;default:Lt(e,t),qt(t)}}function qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Q_(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Qs(i,""),r.flags&=-33);var s=dm(t);sh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=dm(t);ih(t,l,o);break;default:throw Error(b(161))}}catch(u){Se(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function TT(t,e,n){$=t,J_(t)}function J_(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ha;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ze;l=ha;var h=Ze;if(ha=o,(Ze=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?gm(i):u!==null?(u.return=o,$=u):gm(i);for(;s!==null;)$=s,J_(s),s=s.sibling;$=i,ha=l,Ze=h}pm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):pm(t)}}function pm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||zl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jp(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Zs(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Ze||e.flags&512&&rh(e)}catch(g){Se(e,e.return,g)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function mm(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function gm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{zl(4,e)}catch(u){Se(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Se(e,i,u)}}var s=e.return;try{rh(e)}catch(u){Se(e,s,u)}break;case 5:var o=e.return;try{rh(e)}catch(u){Se(e,o,u)}}}catch(u){Se(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var IT=Math.ceil,al=Cn.ReactCurrentDispatcher,yd=Cn.ReactCurrentOwner,xt=Cn.ReactCurrentBatchConfig,ie=0,ze=null,ke=null,We=0,_t=0,_i=gr(0),Oe=0,co=null,jr=0,Bl=0,_d=0,js=null,ct=null,vd=0,bi=1/0,ln=null,ll=!1,oh=null,Zn=null,da=!1,qn=null,ul=0,zs=0,ah=null,ka=-1,Na=0;function ot(){return ie&6?Re():ka!==-1?ka:ka=Re()}function er(t){return t.mode&1?ie&2&&We!==0?We&-We:oT.transition!==null?(Na===0&&(Na=My()),Na):(t=oe,t!==0||(t=window.event,t=t===void 0?16:$y(t.type)),t):1}function Bt(t,e,n,r){if(50<zs)throw zs=0,ah=null,Error(b(185));To(t,n,r),(!(ie&2)||t!==ze)&&(t===ze&&(!(ie&2)&&(Bl|=n),Oe===4&&jn(t,We)),pt(t,r),n===1&&ie===0&&!(e.mode&1)&&(bi=Re()+500,Fl&&yr()))}function pt(t,e){var n=t.callbackNode;o1(t,e);var r=qa(t,t===ze?We:0);if(r===0)n!==null&&Ap(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ap(n),e===1)t.tag===0?sT(ym.bind(null,t)):l_(ym.bind(null,t)),tT(function(){!(ie&6)&&yr()}),n=null;else{switch(by(r)){case 1:n=Wh;break;case 4:n=Oy;break;case 16:n=Wa;break;case 536870912:n=Ly;break;default:n=Wa}n=ov(n,Z_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Z_(t,e){if(ka=-1,Na=0,ie&6)throw Error(b(327));var n=t.callbackNode;if(Ai()&&t.callbackNode!==n)return null;var r=qa(t,t===ze?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cl(t,r);else{e=r;var i=ie;ie|=2;var s=tv();(ze!==t||We!==e)&&(ln=null,bi=Re()+500,Dr(t,e));do try{CT();break}catch(l){ev(t,l)}while(1);id(),al.current=s,ie=i,ke!==null?e=0:(ze=null,We=0,e=Oe)}if(e!==0){if(e===2&&(i=Oc(t),i!==0&&(r=i,e=lh(t,i))),e===1)throw n=co,Dr(t,0),jn(t,r),pt(t,Re()),n;if(e===6)jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!ST(i)&&(e=cl(t,r),e===2&&(s=Oc(t),s!==0&&(r=s,e=lh(t,s))),e===1))throw n=co,Dr(t,0),jn(t,r),pt(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Cr(t,ct,ln);break;case 3:if(jn(t,r),(r&130023424)===r&&(e=vd+500-Re(),10<e)){if(qa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Bc(Cr.bind(null,t,ct,ln),e);break}Cr(t,ct,ln);break;case 4:if(jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-zt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*IT(r/1960))-r,10<r){t.timeoutHandle=Bc(Cr.bind(null,t,ct,ln),r);break}Cr(t,ct,ln);break;case 5:Cr(t,ct,ln);break;default:throw Error(b(329))}}}return pt(t,Re()),t.callbackNode===n?Z_.bind(null,t):null}function lh(t,e){var n=js;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=cl(t,e),t!==2&&(e=ct,ct=n,e!==null&&uh(e)),t}function uh(t){ct===null?ct=t:ct.push.apply(ct,t)}function ST(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jn(t,e){for(e&=~_d,e&=~Bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zt(e),r=1<<n;t[n]=-1,e&=~r}}function ym(t){if(ie&6)throw Error(b(327));Ai();var e=qa(t,0);if(!(e&1))return pt(t,Re()),null;var n=cl(t,e);if(t.tag!==0&&n===2){var r=Oc(t);r!==0&&(e=r,n=lh(t,r))}if(n===1)throw n=co,Dr(t,0),jn(t,e),pt(t,Re()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,ct,ln),pt(t,Re()),null}function wd(t,e){var n=ie;ie|=1;try{return t(e)}finally{ie=n,ie===0&&(bi=Re()+500,Fl&&yr())}}function zr(t){qn!==null&&qn.tag===0&&!(ie&6)&&Ai();var e=ie;ie|=1;var n=xt.transition,r=oe;try{if(xt.transition=null,oe=1,t)return t()}finally{oe=r,xt.transition=n,ie=e,!(ie&6)&&yr()}}function Ed(){_t=_i.current,me(_i)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,eT(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(td(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ya();break;case 3:Li(),me(dt),me(tt),cd();break;case 5:ud(r);break;case 4:Li();break;case 13:me(_e);break;case 19:me(_e);break;case 10:sd(r.type._context);break;case 22:case 23:Ed()}n=n.return}if(ze=t,ke=t=tr(t.current,null),We=_t=e,Oe=0,co=null,_d=Bl=jr=0,ct=js=null,kr!==null){for(e=0;e<kr.length;e++)if(n=kr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}kr=null}return t}function ev(t,e){do{var n=ke;try{if(id(),Ca.current=ol,sl){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}sl=!1}if(Ur=0,je=De=ve=null,Fs=!1,ao=0,yd.current=null,n===null||n.return===null){Oe=1,co=e,ke=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=im(o);if(A!==null){A.flags&=-257,sm(A,o,l,s,e),A.mode&1&&rm(s,h,e),e=A,u=h;var k=e.updateQueue;if(k===null){var x=new Set;x.add(u),e.updateQueue=x}else k.add(u);break e}else{if(!(e&1)){rm(s,h,e),Td();break e}u=Error(b(426))}}else if(ge&&l.mode&1){var D=im(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),sm(D,o,l,s,e),nd(Mi(u,l));break e}}s=u=Mi(u,l),Oe!==4&&(Oe=2),js===null?js=[s]:js.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=b_(s,u,e);Yp(s,I);break e;case 1:l=u;var v=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Zn===null||!Zn.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=F_(s,l,e);Yp(s,V);break e}}s=s.return}while(s!==null)}rv(n)}catch(U){e=U,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function tv(){var t=al.current;return al.current=ol,t===null?ol:t}function Td(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),ze===null||!(jr&268435455)&&!(Bl&268435455)||jn(ze,We)}function cl(t,e){var n=ie;ie|=2;var r=tv();(ze!==t||We!==e)&&(ln=null,Dr(t,e));do try{AT();break}catch(i){ev(t,i)}while(1);if(id(),ie=n,al.current=r,ke!==null)throw Error(b(261));return ze=null,We=0,Oe}function AT(){for(;ke!==null;)nv(ke)}function CT(){for(;ke!==null&&!YE();)nv(ke)}function nv(t){var e=sv(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?rv(t):ke=e,yd.current=null}function rv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vT(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,ke=null;return}}else if(n=_T(n,e,_t),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Oe===0&&(Oe=5)}function Cr(t,e,n){var r=oe,i=xt.transition;try{xt.transition=null,oe=1,RT(t,e,n,r)}finally{xt.transition=i,oe=r}return null}function RT(t,e,n,r){do Ai();while(qn!==null);if(ie&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(a1(t,s),t===ze&&(ke=ze=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||da||(da=!0,ov(Wa,function(){return Ai(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xt.transition,xt.transition=null;var o=oe;oe=1;var l=ie;ie|=4,yd.current=null,ET(t,n),Y_(n,t),K1(jc),Ka=!!Uc,jc=Uc=null,t.current=n,TT(n),JE(),ie=l,oe=o,xt.transition=s}else t.current=n;if(da&&(da=!1,qn=t,ul=i),s=t.pendingLanes,s===0&&(Zn=null),t1(n.stateNode),pt(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ll)throw ll=!1,t=oh,oh=null,t;return ul&1&&t.tag!==0&&Ai(),s=t.pendingLanes,s&1?t===ah?zs++:(zs=0,ah=t):zs=0,yr(),null}function Ai(){if(qn!==null){var t=by(ul),e=xt.transition,n=oe;try{if(xt.transition=null,oe=16>t?16:t,qn===null)var r=!1;else{if(t=qn,qn=null,ul=0,ie&6)throw Error(b(331));var i=ie;for(ie|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:Us(8,f,s)}var p=f.child;if(p!==null)p.return=f,$=p;else for(;$!==null;){f=$;var g=f.sibling,A=f.return;if(G_(f),f===h){$=null;break}if(g!==null){g.return=A,$=g;break}$=A}}}var k=s.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var D=x.sibling;x.sibling=null,x=D}while(x!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Us(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,$=I;break e}$=s.return}}var v=t.current;for($=v;$!==null;){o=$;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,$=C;else e:for(o=v;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:zl(9,l)}}catch(U){Se(l,l.return,U)}if(l===o){$=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,$=V;break e}$=l.return}}if(ie=i,yr(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(Vl,t)}catch{}r=!0}return r}finally{oe=n,xt.transition=e}}return!1}function _m(t,e,n){e=Mi(n,e),e=b_(t,e,1),t=Jn(t,e,1),e=ot(),t!==null&&(To(t,1,e),pt(t,e))}function Se(t,e,n){if(t.tag===3)_m(t,t,n);else for(;e!==null;){if(e.tag===3){_m(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){t=Mi(n,t),t=F_(e,t,1),e=Jn(e,t,1),t=ot(),e!==null&&(To(e,1,t),pt(e,t));break}}e=e.return}}function PT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(We&n)===n&&(Oe===4||Oe===3&&(We&130023424)===We&&500>Re()-vd?Dr(t,0):_d|=n),pt(t,e)}function iv(t,e){e===0&&(t.mode&1?(e=na,na<<=1,!(na&130023424)&&(na=4194304)):e=1);var n=ot();t=_n(t,e),t!==null&&(To(t,e,n),pt(t,n))}function kT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),iv(t,n)}function NT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),iv(t,n)}var sv;sv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dt.current)ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ht=!1,yT(t,e,n);ht=!!(t.flags&131072)}else ht=!1,ge&&e.flags&1048576&&u_(e,el,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pa(t,e),t=e.pendingProps;var i=Di(e,tt.current);Si(e,n),i=dd(null,e,r,t,i,n);var s=fd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ft(r)?(s=!0,Ja(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ad(e),i.updater=jl,e.stateNode=i,i._reactInternals=e,Qc(e,r,t,n),e=Jc(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&ed(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=DT(r),t=Mt(r,t),i){case 0:e=Yc(null,e,r,t,n);break e;case 1:e=lm(null,e,r,t,n);break e;case 11:e=om(null,e,r,t,n);break e;case 14:e=am(null,e,r,Mt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Yc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),lm(t,e,r,i,n);case 3:e:{if(B_(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,m_(t,e),rl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Mi(Error(b(423)),e),e=um(t,e,r,n,i);break e}else if(r!==i){i=Mi(Error(b(424)),e),e=um(t,e,r,n,i);break e}else for(vt=Yn(e.stateNode.containerInfo.firstChild),wt=e,ge=!0,Ft=null,n=f_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vi(),r===i){e=vn(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return g_(e),t===null&&qc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,zc(r,i)?o=null:s!==null&&zc(r,s)&&(e.flags|=32),z_(t,e),st(t,e,o,n),e.child;case 6:return t===null&&qc(e),null;case 13:return $_(t,e,n);case 4:return ld(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Oi(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),om(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(tl,r._currentValue),r._currentValue=o,s!==null)if($t(s.value,o)){if(s.children===i.children&&!dt.current){e=vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=pn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Kc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Kc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Si(e,n),i=Dt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),am(t,e,r,i,n);case 15:return U_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Pa(t,e),e.tag=1,ft(r)?(t=!0,Ja(e)):t=!1,Si(e,n),M_(e,r,i),Qc(e,r,i,n),Jc(null,e,r,!0,t,n);case 19:return H_(t,e,n);case 22:return j_(t,e,n)}throw Error(b(156,e.tag))};function ov(t,e){return Vy(t,e)}function xT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new xT(t,e,n,r)}function Id(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DT(t){if(typeof t=="function")return Id(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bh)return 11;if(t===$h)return 14}return 2}function tr(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Id(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case li:return Vr(n.children,i,s,e);case zh:o=8,i|=8;break;case vc:return t=Nt(12,n,e,i|2),t.elementType=vc,t.lanes=s,t;case wc:return t=Nt(13,n,e,i),t.elementType=wc,t.lanes=s,t;case Ec:return t=Nt(19,n,e,i),t.elementType=Ec,t.lanes=s,t;case gy:return $l(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case py:o=10;break e;case my:o=9;break e;case Bh:o=11;break e;case $h:o=14;break e;case bn:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Vr(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function $l(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=gy,t.lanes=n,t.stateNode={isHidden:!1},t}function rc(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function ic(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function VT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fu(0),this.expirationTimes=Fu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sd(t,e,n,r,i,s,o,l,u){return t=new VT(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ad(s),t}function OT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ai,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function av(t){if(!t)return lr;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(ft(n))return a_(t,n,e)}return e}function lv(t,e,n,r,i,s,o,l,u){return t=Sd(n,r,!0,t,i,s,o,l,u),t.context=av(null),n=t.current,r=ot(),i=er(n),s=pn(r,i),s.callback=e??null,Jn(n,s,i),t.current.lanes=i,To(t,i,r),pt(t,r),t}function Hl(t,e,n,r){var i=e.current,s=ot(),o=er(i);return n=av(n),e.context===null?e.context=n:e.pendingContext=n,e=pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Jn(i,e,o),t!==null&&(Bt(t,i,o,s),Aa(t,i,o)),o}function hl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ad(t,e){vm(t,e),(t=t.alternate)&&vm(t,e)}function LT(){return null}var uv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cd(t){this._internalRoot=t}Wl.prototype.render=Cd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Hl(t,e,null,null)};Wl.prototype.unmount=Cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zr(function(){Hl(null,t,null,null)}),e[yn]=null}};function Wl(t){this._internalRoot=t}Wl.prototype.unstable_scheduleHydration=function(t){if(t){var e=jy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Un.length&&e!==0&&e<Un[n].priority;n++);Un.splice(n,0,t),n===0&&By(t)}};function Rd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ql(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wm(){}function MT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=hl(o);s.call(h)}}var o=lv(e,r,t,0,null,!1,!1,"",wm);return t._reactRootContainer=o,t[yn]=o.current,no(t.nodeType===8?t.parentNode:t),zr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=hl(u);l.call(h)}}var u=Sd(t,0,!1,null,null,!1,!1,"",wm);return t._reactRootContainer=u,t[yn]=u.current,no(t.nodeType===8?t.parentNode:t),zr(function(){Hl(e,u,n,r)}),u}function Kl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=hl(o);l.call(u)}}Hl(e,o,t,i)}else o=MT(n,e,t,i,r);return hl(o)}Fy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Rs(e.pendingLanes);n!==0&&(qh(e,n|1),pt(e,Re()),!(ie&6)&&(bi=Re()+500,yr()))}break;case 13:zr(function(){var r=_n(t,1);if(r!==null){var i=ot();Bt(r,t,1,i)}}),Ad(t,1)}};Kh=function(t){if(t.tag===13){var e=_n(t,134217728);if(e!==null){var n=ot();Bt(e,t,134217728,n)}Ad(t,134217728)}};Uy=function(t){if(t.tag===13){var e=er(t),n=_n(t,e);if(n!==null){var r=ot();Bt(n,t,e,r)}Ad(t,e)}};jy=function(){return oe};zy=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};xc=function(t,e,n){switch(e){case"input":if(Sc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=bl(r);if(!i)throw Error(b(90));_y(r),Sc(r,i)}}}break;case"textarea":wy(t,n);break;case"select":e=n.value,e!=null&&wi(t,!!n.multiple,e,!1)}};Ry=wd;Py=zr;var bT={usingClientEntryPoint:!1,Events:[So,di,bl,Ay,Cy,wd]},Ss={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FT={bundleType:Ss.bundleType,version:Ss.version,rendererPackageName:Ss.rendererPackageName,rendererConfig:Ss.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xy(t),t===null?null:t.stateNode},findFiberByHostInstance:Ss.findFiberByHostInstance||LT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fa.isDisabled&&fa.supportsFiber)try{Vl=fa.inject(FT),Xt=fa}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bT;Tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rd(e))throw Error(b(200));return OT(t,e,null,n)};Tt.createRoot=function(t,e){if(!Rd(t))throw Error(b(299));var n=!1,r="",i=uv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Sd(t,1,!1,null,null,n,!1,r,i),t[yn]=e.current,no(t.nodeType===8?t.parentNode:t),new Cd(e)};Tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=xy(e),t=t===null?null:t.stateNode,t};Tt.flushSync=function(t){return zr(t)};Tt.hydrate=function(t,e,n){if(!ql(e))throw Error(b(200));return Kl(null,t,e,!0,n)};Tt.hydrateRoot=function(t,e,n){if(!Rd(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=uv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lv(e,null,t,1,n??null,i,!1,s,o),t[yn]=e.current,no(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Wl(e)};Tt.render=function(t,e,n){if(!ql(e))throw Error(b(200));return Kl(null,t,e,!1,n)};Tt.unmountComponentAtNode=function(t){if(!ql(t))throw Error(b(40));return t._reactRootContainer?(zr(function(){Kl(null,null,t,!1,function(){t._reactRootContainer=null,t[yn]=null})}),!0):!1};Tt.unstable_batchedUpdates=wd;Tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ql(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Kl(t,e,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function cv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cv)}catch(t){console.error(t)}}cv(),cy.exports=Tt;var UT=cy.exports,hv,Em=UT;hv=Em.createRoot,Em.hydrateRoot;const jT=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(g=64)),r.push(n[f],n[p],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new BT;const g=s<<2|l>>4;if(r.push(g),h!==64){const A=l<<4&240|h>>2;if(r.push(A),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class BT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $T=function(t){const e=dv(t);return fv.encodeByteArray(e,!0)},dl=function(t){return $T(t).replace(/\./g,"")},pv=function(t){try{return fv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=()=>HT().__FIREBASE_DEFAULTS__,qT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pv(t[1]);return e&&JSON.parse(e)},Gl=()=>{try{return jT()||WT()||qT()||KT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mv=t=>{var e,n;return(n=(e=Gl())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},GT=t=>{const e=mv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gv=()=>{var t;return(t=Gl())==null?void 0:t.config},yv=t=>{var e;return(e=Gl())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _v(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},l="";return[dl(JSON.stringify(n)),dl(JSON.stringify(o)),l].join(".")}const Bs={};function YT(){const t={prod:[],emulator:[]};for(const e of Object.keys(Bs))Bs[e]?t.emulator.push(e):t.prod.push(e);return t}function JT(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Tm=!1;function vv(t,e){if(typeof window>"u"||typeof document>"u"||!Gi(window.location.host)||Bs[t]===e||Bs[t]||Tm)return;Bs[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=YT().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,A){g.setAttribute("width","24"),g.setAttribute("id",A),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Tm=!0,o()},g}function f(g,A){g.setAttribute("id",A),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=JT(r),A=n("text"),k=document.getElementById(A)||document.createElement("span"),x=n("learnmore"),D=document.getElementById(x)||document.createElement("a"),I=n("preprendIcon"),v=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const C=g.element;l(C),f(D,x);const V=h();u(v,I),C.append(v,k,D,V),document.body.appendChild(C)}s?(k.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function eI(){var e;const t=(e=Gl())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iI(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sI(){return!eI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oI(){try{return typeof indexedDB=="object"}catch{return!1}}function aI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lI,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Co.prototype.create)}}class Co{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?uI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,l,r)}}function uI(t,e){return t.replace(cI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const cI=/\{\$([^}]+)}/g;function hI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Br(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Im(s)&&Im(o)){if(!Br(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Im(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function dI(t,e){const n=new fI(t,e);return n.subscribe.bind(n)}class fI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=sc),i.error===void 0&&(i.error=sc),i.complete===void 0&&(i.complete=sc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){return t&&t._delegate?t._delegate:t}class $r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new QT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yI(e))try{this.getOrInitializeService({instanceIdentifier:Rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rr){return this.instances.has(e)}getOptions(e=Rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rr){return this.component?this.component.multipleInstances?e:Rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gI(t){return t===Rr?void 0:t}function yI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const vI={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},wI=ee.INFO,EI={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},TI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=EI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pd{constructor(e){this.name=e,this._logLevel=wI,this._logHandler=TI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const II=(t,e)=>e.some(n=>t instanceof n);let Sm,Am;function SI(){return Sm||(Sm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AI(){return Am||(Am=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wv=new WeakMap,ch=new WeakMap,Ev=new WeakMap,oc=new WeakMap,kd=new WeakMap;function CI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wv.set(n,t)}).catch(()=>{}),kd.set(e,t),e}function RI(t){if(ch.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ch.set(t,e)}let hh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ch.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ev.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function PI(t){hh=t(hh)}function kI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ac(this),e,...n);return Ev.set(r,e.sort?e.sort():[e]),nr(r)}:AI().includes(t)?function(...e){return t.apply(ac(this),e),nr(wv.get(this))}:function(...e){return nr(t.apply(ac(this),e))}}function NI(t){return typeof t=="function"?kI(t):(t instanceof IDBTransaction&&RI(t),II(t,SI())?new Proxy(t,hh):t)}function nr(t){if(t instanceof IDBRequest)return CI(t);if(oc.has(t))return oc.get(t);const e=NI(t);return e!==t&&(oc.set(t,e),kd.set(e,t)),e}const ac=t=>kd.get(t);function xI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=nr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(nr(o.result),u.oldVersion,u.newVersion,nr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const DI=["get","getKey","getAll","getAllKeys","count"],VI=["put","add","delete","clear"],lc=new Map;function Cm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lc.get(e))return lc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=VI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||DI.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return lc.set(e,s),s}PI(t=>({...t,get:(e,n,r)=>Cm(e,n)||t.get(e,n,r),has:(e,n)=>!!Cm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dh="@firebase/app",Rm="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new Pd("@firebase/app"),MI="@firebase/app-compat",bI="@firebase/analytics-compat",FI="@firebase/analytics",UI="@firebase/app-check-compat",jI="@firebase/app-check",zI="@firebase/auth",BI="@firebase/auth-compat",$I="@firebase/database",HI="@firebase/data-connect",WI="@firebase/database-compat",qI="@firebase/functions",KI="@firebase/functions-compat",GI="@firebase/installations",QI="@firebase/installations-compat",XI="@firebase/messaging",YI="@firebase/messaging-compat",JI="@firebase/performance",ZI="@firebase/performance-compat",eS="@firebase/remote-config",tS="@firebase/remote-config-compat",nS="@firebase/storage",rS="@firebase/storage-compat",iS="@firebase/firestore",sS="@firebase/ai",oS="@firebase/firestore-compat",aS="firebase",lS="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="[DEFAULT]",uS={[dh]:"fire-core",[MI]:"fire-core-compat",[FI]:"fire-analytics",[bI]:"fire-analytics-compat",[jI]:"fire-app-check",[UI]:"fire-app-check-compat",[zI]:"fire-auth",[BI]:"fire-auth-compat",[$I]:"fire-rtdb",[HI]:"fire-data-connect",[WI]:"fire-rtdb-compat",[qI]:"fire-fn",[KI]:"fire-fn-compat",[GI]:"fire-iid",[QI]:"fire-iid-compat",[XI]:"fire-fcm",[YI]:"fire-fcm-compat",[JI]:"fire-perf",[ZI]:"fire-perf-compat",[eS]:"fire-rc",[tS]:"fire-rc-compat",[nS]:"fire-gcs",[rS]:"fire-gcs-compat",[iS]:"fire-fst",[oS]:"fire-fst-compat",[sS]:"fire-vertex","fire-js":"fire-js",[aS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Map,cS=new Map,ph=new Map;function Pm(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fi(t){const e=t.name;if(ph.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;ph.set(e,t);for(const n of fl.values())Pm(n,t);for(const n of cS.values())Pm(n,t);return!0}function Nd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new Co("app","Firebase",hS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=lS;function Tv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:fh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw rr.create("bad-app-name",{appName:String(i)});if(n||(n=gv()),!n)throw rr.create("no-options");const s=fl.get(i);if(s){if(Br(n,s.options)&&Br(r,s.config))return s;throw rr.create("duplicate-app",{appName:i})}const o=new _I(i);for(const u of ph.values())o.addComponent(u);const l=new dS(n,r,o);return fl.set(i,l),l}function Iv(t=fh){const e=fl.get(t);if(!e&&t===fh&&gv())return Tv();if(!e)throw rr.create("no-app",{appName:t});return e}function ir(t,e,n){let r=uS[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(o.join(" "));return}Fi(new $r(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS="firebase-heartbeat-database",pS=1,ho="firebase-heartbeat-store";let uc=null;function Sv(){return uc||(uc=xI(fS,pS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ho)}catch(n){console.warn(n)}}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),uc}async function mS(t){try{const n=(await Sv()).transaction(ho),r=await n.objectStore(ho).get(Av(t));return await n.done,r}catch(e){if(e instanceof Rn)wn.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function km(t,e){try{const r=(await Sv()).transaction(ho,"readwrite");await r.objectStore(ho).put(e,Av(t)),await r.done}catch(n){if(n instanceof Rn)wn.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(r.message)}}}function Av(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=1024,yS=30;class _S{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nm();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>yS){const o=ES(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nm(),{heartbeatsToSend:r,unsentEntries:i}=vS(this._heartbeatsCache.heartbeats),s=dl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return wn.warn(n),""}}}function Nm(){return new Date().toISOString().substring(0,10)}function vS(t,e=gS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),xm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oI()?aI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return km(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return km(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function xm(t){return dl(JSON.stringify({version:2,heartbeats:t})).length}function ES(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TS(t){Fi(new $r("platform-logger",e=>new OI(e),"PRIVATE")),Fi(new $r("heartbeat",e=>new _S(e),"PRIVATE")),ir(dh,Rm,t),ir(dh,Rm,"esm2020"),ir("fire-js","")}TS("");var IS="firebase",SS="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir(IS,SS,"app");function Cv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AS=Cv,Rv=new Co("auth","Firebase",Cv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl=new Pd("@firebase/auth");function CS(t,...e){pl.logLevel<=ee.WARN&&pl.warn(`Auth (${Qi}): ${t}`,...e)}function Da(t,...e){pl.logLevel<=ee.ERROR&&pl.error(`Auth (${Qi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,...e){throw xd(t,...e)}function Jt(t,...e){return xd(t,...e)}function Pv(t,e,n){const r={...AS(),[e]:n};return new Co("auth","Firebase",r).create(e,{appName:t.name})}function mn(t){return Pv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rv.create(t,...e)}function Q(t,e,...n){if(!t)throw xd(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Da(e),new Error(e)}function Tn(t,e){t||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function RS(){return Dm()==="http:"||Dm()==="https:"}function Dm(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RS()||nI()||"connection"in navigator)?navigator.onLine:!0}function kS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=ZT()||rI()}get(){return PS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],DS=new Po(3e4,6e4);function ko(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Xi(t,e,n,r,i={}){return Nv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Ro({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return tI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Gi(t.emulatorConfig.host)&&(h.credentials="include"),kv.fetch()(await xv(t,t.config.apiHost,n,l),h)})}async function Nv(t,e,n){t._canInitEmulator=!1;const r={...NS,...e};try{const i=new VS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw pa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw pa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw pa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw pa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Pv(t,f,h);En(t,f)}}catch(i){if(i instanceof Rn)throw i;En(t,"network-request-failed",{message:String(i)})}}async function Vd(t,e,n,r,i={}){const s=await Xi(t,e,n,r,i);return"mfaPendingCredential"in s&&En(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function xv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Dd(t.config,i):`${t.config.apiScheme}://${i}`;return xS.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class VS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),DS.get())})}}function pa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Jt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OS(t,e){return Xi(t,"POST","/v1/accounts:delete",e)}async function ml(t,e){return Xi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LS(t,e=!1){const n=mt(t),r=await n.getIdToken(e),i=Od(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:$s(cc(i.auth_time)),issuedAtTime:$s(cc(i.iat)),expirationTime:$s(cc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function cc(t){return Number(t)*1e3}function Od(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Da("JWT malformed, contained fewer than 3 sections"),null;try{const i=pv(n);return i?JSON.parse(i):(Da("Failed to decode base64 JWT payload"),null)}catch(i){return Da("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vm(t){const e=Od(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&MS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function MS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$s(this.lastLoginAt),this.creationTime=$s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await fo(t,ml(e,{idToken:n}));Q(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?Dv(i.providerUserInfo):[],o=US(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new gh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function FS(t){const e=mt(t);await gl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function US(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Dv(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(t,e){const n=await Nv(t,{},async()=>{const r=Ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await xv(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Gi(t.emulatorConfig.host)&&(u.credentials="include"),kv.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zS(t,e){return Xi(t,"POST","/v2/accounts:revokeToken",ko(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=Vm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ci;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ci,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ut{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new bS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new gh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await fo(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LS(this,e)}reload(){return FS(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ut({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rt(this.auth.app))return Promise.reject(mn(this.auth));const e=await this.getIdToken();return await fo(this,OS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:A,providerData:k,stsTokenManager:x}=n;Q(p&&x,e,"internal-error");const D=Ci.fromJSON(this.name,x);Q(typeof p=="string",e,"internal-error"),Mn(r,e.name),Mn(i,e.name),Q(typeof g=="boolean",e,"internal-error"),Q(typeof A=="boolean",e,"internal-error"),Mn(s,e.name),Mn(o,e.name),Mn(l,e.name),Mn(u,e.name),Mn(h,e.name),Mn(f,e.name);const I=new Ut({uid:p,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:D,createdAt:h,lastLoginAt:f});return k&&Array.isArray(k)&&(I.providerData=k.map(v=>({...v}))),u&&(I._redirectEventId=u),I}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ci;i.updateFromServerResponse(n);const s=new Ut({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await gl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Dv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ci;l.updateFromIdToken(r);const u=new Ut({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new gh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=new Map;function fn(t){Tn(t instanceof Function,"Expected a class definition");let e=Om.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Om.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vv.type="NONE";const Lm=Vv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t,e,n){return`firebase:${t}:${e}:${n}`}class Ri{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Va(this.userKey,i.apiKey,s),this.fullPersistenceKey=Va("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ml(this.auth,{idToken:e}).catch(()=>{});return n?Ut._fromGetAccountInfoResponse(this.auth,n,e):null}return Ut._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ri(fn(Lm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||fn(Lm);const o=Va(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await ml(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Ut._fromGetAccountInfoResponse(e,g,f)}else p=Ut._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ri(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ri(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ov(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uv(e))return"Blackberry";if(jv(e))return"Webos";if(Lv(e))return"Safari";if((e.includes("chrome/")||Mv(e))&&!e.includes("edge/"))return"Chrome";if(Fv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ov(t=nt()){return/firefox\//i.test(t)}function Lv(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mv(t=nt()){return/crios\//i.test(t)}function bv(t=nt()){return/iemobile/i.test(t)}function Fv(t=nt()){return/android/i.test(t)}function Uv(t=nt()){return/blackberry/i.test(t)}function jv(t=nt()){return/webos/i.test(t)}function Ld(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BS(t=nt()){var e;return Ld(t)&&!!((e=window.navigator)!=null&&e.standalone)}function $S(){return iI()&&document.documentMode===10}function zv(t=nt()){return Ld(t)||Fv(t)||jv(t)||Uv(t)||/windows phone/i.test(t)||bv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t,e=[]){let n;switch(t){case"Browser":n=Mm(nt());break;case"Worker":n=`${Mm(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(t,e={}){return Xi(t,"GET","/v2/passwordPolicy",ko(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=6;class KS{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??qS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bm(this),this.idTokenSubscription=new bm(this),this.beforeStateQueue=new HS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ri.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ml(this,{idToken:e}),r=await Ut._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Rt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rt(this.app))return Promise.reject(mn(this));const n=e?mt(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rt(this.app)?Promise.reject(mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rt(this.app)?Promise.reject(mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WS(this),n=new KS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Co("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Ri.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&CS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function No(t){return mt(t)}class bm{constructor(e){this.auth=e,this.observer=null,this.addObserver=dI(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Md={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QS(t){Md=t}function XS(t){return Md.loadJS(t)}function YS(){return Md.gapiScript}function JS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t,e){const n=Nd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Br(s,e??{}))return i;En(i,"already-initialized")}return n.initialize({options:e})}function eA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tA(t,e,n){const r=No(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=$v(e),{host:o,port:l}=nA(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(Br(h,r.config.emulator)&&Br(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Gi(o)?(_v(`${s}//${o}${u}`),vv("Auth",!0)):i||rA()}function $v(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function nA(t){const e=$v(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Fm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Fm(o)}}}function Fm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function rA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(t,e){return Vd(t,"POST","/v1/accounts:signInWithIdp",ko(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="http://localhost";class Hr extends Hv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Hr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Pi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Pi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Pi(e,n)}buildRequest(){const e={requestUri:iA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ro(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends Wv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends xo{constructor(){super("facebook.com")}static credential(e){return Hr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends xo{constructor(){super("github.com")}static credential(e){return Hr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends xo{constructor(){super("twitter.com")}static credential(e,n){return Hr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sA(t,e){return Vd(t,"POST","/v1/accounts:signUp",ko(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ut._fromIdTokenResponse(e,r,i),o=Um(r);return new In({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Um(r);return new In({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Um(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oA(t){var i;if(Rt(t.app))return Promise.reject(mn(t));const e=No(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new In({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await sA(e,{returnSecureToken:!0}),r=await In._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl extends Rn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,yl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new yl(e,n,r,i)}}function qv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?yl._fromErrorAndOperation(t,s,e,r):s})}async function aA(t,e,n=!1){const r=await fo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return In._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(t,e,n=!1){const{auth:r}=t;if(Rt(r.app))return Promise.reject(mn(r));const i="reauthenticate";try{const s=await fo(t,qv(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=Od(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),In._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&En(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(t,e,n=!1){if(Rt(t.app))return Promise.reject(mn(t));const r="signIn",i=await qv(t,r,e),s=await In._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(t,e){return Vd(t,"POST","/v1/accounts:signInWithCustomToken",ko(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(t,e){if(Rt(t.app))return Promise.reject(mn(t));const n=No(t),r=await cA(n,{token:e,returnSecureToken:!0}),i=await In._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}function dA(t,e,n,r){return mt(t).onIdTokenChanged(e,n,r)}function fA(t,e,n){return mt(t).beforeAuthStateChanged(e,n)}function pA(t,e,n,r){return mt(t).onAuthStateChanged(e,n,r)}function mA(t){return mt(t).signOut()}const _l="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_l,"1"),this.storage.removeItem(_l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA=1e3,yA=10;class Gv extends Kv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);$S()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gv.type="LOCAL";const _A=Gv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv extends Kv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qv.type="SESSION";const Xv=Qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ql(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await vA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ql.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=bd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return window}function EA(t){Zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function TA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function SA(){return Yv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="firebaseLocalStorageDb",AA=1,vl="firebaseLocalStorage",Zv="fbase_key";class Do{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xl(t,e){return t.transaction([vl],e?"readwrite":"readonly").objectStore(vl)}function CA(){const t=indexedDB.deleteDatabase(Jv);return new Do(t).toPromise()}function yh(){const t=indexedDB.open(Jv,AA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vl,{keyPath:Zv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vl)?e(r):(r.close(),await CA(),e(await yh()))})})}async function jm(t,e,n){const r=Xl(t,!0).put({[Zv]:e,value:n});return new Do(r).toPromise()}async function RA(t,e){const n=Xl(t,!1).get(e),r=await new Do(n).toPromise();return r===void 0?null:r.value}function zm(t,e){const n=Xl(t,!0).delete(e);return new Do(n).toPromise()}const PA=800,kA=3;class e0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>kA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ql._getInstance(SA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await TA(),!this.activeServiceWorker)return;this.sender=new wA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yh();return await jm(e,_l,"1"),await zm(e,_l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Xl(i,!1).getAll();return new Do(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}e0.type="LOCAL";const NA=e0;new Po(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t,e){return e?fn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd extends Hv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function DA(t){return uA(t.auth,new Fd(t),t.bypassAuthState)}function VA(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),lA(n,new Fd(t),t.bypassAuthState)}async function OA(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),aA(n,new Fd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return DA;case"linkViaPopup":case"linkViaRedirect":return OA;case"reauthViaPopup":case"reauthViaRedirect":return VA;default:En(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LA=new Po(2e3,1e4);class vi extends t0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vi.currentPopupAction&&vi.currentPopupAction.cancel(),vi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=bd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LA.get())};e()}}vi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA="pendingRedirect",Oa=new Map;class bA extends t0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Oa.get(this.auth._key());if(!e){try{const r=await FA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Oa.set(this.auth._key(),e)}return this.bypassAuthState||Oa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FA(t,e){const n=zA(e),r=jA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function UA(t,e){Oa.set(t._key(),e)}function jA(t){return fn(t._redirectPersistence)}function zA(t){return Va(MA,t.config.apiKey,t.name)}async function BA(t,e,n=!1){if(Rt(t.app))return Promise.reject(mn(t));const r=No(t),i=xA(r,e),o=await new bA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=10*60*1e3;class HA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!n0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$A&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bm(e))}saveEventToCache(e){this.cachedEventUids.add(Bm(e)),this.lastProcessedEventTime=Date.now()}}function Bm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function n0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return n0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(t,e={}){return Xi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GA=/^https?/;async function QA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qA(t);for(const n of e)try{if(XA(n))return}catch{}En(t,"unauthorized-domain")}function XA(t){const e=mh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GA.test(n))return!1;if(KA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=new Po(3e4,6e4);function $m(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JA(t){return new Promise((e,n)=>{var i,s,o;function r(){$m(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$m(),n(Jt(t,"network-request-failed"))},timeout:YA.get()})}if((s=(i=Zt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Zt().gapi)!=null&&o.load)r();else{const l=JS("iframefcb");return Zt()[l]=()=>{gapi.load?r():n(Jt(t,"network-request-failed"))},XS(`${YS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw La=null,e})}let La=null;function ZA(t){return La=La||JA(t),La}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=new Po(5e3,15e3),tC="__/auth/iframe",nC="emulator/auth/iframe",rC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sC(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dd(e,nC):`https://${t.config.authDomain}/${tC}`,r={apiKey:e.apiKey,appName:t.name,v:Qi},i=iC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ro(r).slice(1)}`}async function oC(t){const e=await ZA(t),n=Zt().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:sC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Jt(t,"network-request-failed"),l=Zt().setTimeout(()=>{s(o)},eC.get());function u(){Zt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lC=500,uC=600,cC="_blank",hC="http://localhost";class Hm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dC(t,e,n,r=lC,i=uC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...aC,width:r.toString(),height:i.toString(),top:s,left:o},h=nt().toLowerCase();n&&(l=Mv(h)?cC:n),Ov(h)&&(e=e||hC,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[A,k])=>`${g}${A}=${k},`,"");if(BS(h)&&l!=="_self")return fC(e||"",l),new Hm(null);const p=window.open(e||"",l,f);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new Hm(p)}function fC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC="__/auth/handler",mC="emulator/auth/handler",gC=encodeURIComponent("fac");async function Wm(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qi,eventId:i};if(e instanceof Wv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",hI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(s||{}))o[f]=p}if(e instanceof xo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${gC}=${encodeURIComponent(u)}`:"";return`${yC(t)}?${Ro(l).slice(1)}${h}`}function yC({config:t}){return t.emulator?Dd(t,mC):`https://${t.authDomain}/${pC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="webStorageSupport";class _C{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xv,this._completeRedirectFn=BA,this._overrideRedirectResult=UA}async _openPopup(e,n,r,i){var o;Tn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Wm(e,n,r,mh(),i);return dC(e,s,bd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Wm(e,n,r,mh(),i);return EA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Tn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oC(e),r=new HA(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hc,{type:hc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[hc];s!==void 0&&n(!!s),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zv()||Lv()||Ld()}}const vC=_C;var qm="@firebase/auth",Km="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TC(t){Fi(new $r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bv(t)},h=new GS(r,i,s,u);return eA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fi(new $r("auth-internal",e=>{const n=No(e.getProvider("auth").getImmediate());return(r=>new wC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(qm,Km,EC(t)),ir(qm,Km,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=5*60,SC=yv("authIdTokenMaxAge")||IC;let Gm=null;const AC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>SC)return;const i=n==null?void 0:n.token;Gm!==i&&(Gm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function CC(t=Iv()){const e=Nd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZS(t,{popupRedirectResolver:vC,persistence:[NA,_A,Xv]}),r=yv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=AC(s.toString());fA(n,o,()=>o(n.currentUser)),dA(n,l=>o(l))}}const i=mv("auth");return i&&tA(n,`http://${i}`),n}function RC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}QS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Jt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",RC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TC("Browser");var Qm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sr,r0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function w(){}w.prototype=y.prototype,_.F=y.prototype,_.prototype=new w,_.prototype.constructor=_,_.D=function(T,S,P){for(var E=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)E[ae-2]=arguments[ae];return y.prototype[S].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,y,w){w||(w=0);const T=Array(16);if(typeof y=="string")for(var S=0;S<16;++S)T[S]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(S=0;S<16;++S)T[S]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=_.g[0],w=_.g[1],S=_.g[2];let P=_.g[3],E;E=y+(P^w&(S^P))+T[0]+3614090360&4294967295,y=w+(E<<7&4294967295|E>>>25),E=P+(S^y&(w^S))+T[1]+3905402710&4294967295,P=y+(E<<12&4294967295|E>>>20),E=S+(w^P&(y^w))+T[2]+606105819&4294967295,S=P+(E<<17&4294967295|E>>>15),E=w+(y^S&(P^y))+T[3]+3250441966&4294967295,w=S+(E<<22&4294967295|E>>>10),E=y+(P^w&(S^P))+T[4]+4118548399&4294967295,y=w+(E<<7&4294967295|E>>>25),E=P+(S^y&(w^S))+T[5]+1200080426&4294967295,P=y+(E<<12&4294967295|E>>>20),E=S+(w^P&(y^w))+T[6]+2821735955&4294967295,S=P+(E<<17&4294967295|E>>>15),E=w+(y^S&(P^y))+T[7]+4249261313&4294967295,w=S+(E<<22&4294967295|E>>>10),E=y+(P^w&(S^P))+T[8]+1770035416&4294967295,y=w+(E<<7&4294967295|E>>>25),E=P+(S^y&(w^S))+T[9]+2336552879&4294967295,P=y+(E<<12&4294967295|E>>>20),E=S+(w^P&(y^w))+T[10]+4294925233&4294967295,S=P+(E<<17&4294967295|E>>>15),E=w+(y^S&(P^y))+T[11]+2304563134&4294967295,w=S+(E<<22&4294967295|E>>>10),E=y+(P^w&(S^P))+T[12]+1804603682&4294967295,y=w+(E<<7&4294967295|E>>>25),E=P+(S^y&(w^S))+T[13]+4254626195&4294967295,P=y+(E<<12&4294967295|E>>>20),E=S+(w^P&(y^w))+T[14]+2792965006&4294967295,S=P+(E<<17&4294967295|E>>>15),E=w+(y^S&(P^y))+T[15]+1236535329&4294967295,w=S+(E<<22&4294967295|E>>>10),E=y+(S^P&(w^S))+T[1]+4129170786&4294967295,y=w+(E<<5&4294967295|E>>>27),E=P+(w^S&(y^w))+T[6]+3225465664&4294967295,P=y+(E<<9&4294967295|E>>>23),E=S+(y^w&(P^y))+T[11]+643717713&4294967295,S=P+(E<<14&4294967295|E>>>18),E=w+(P^y&(S^P))+T[0]+3921069994&4294967295,w=S+(E<<20&4294967295|E>>>12),E=y+(S^P&(w^S))+T[5]+3593408605&4294967295,y=w+(E<<5&4294967295|E>>>27),E=P+(w^S&(y^w))+T[10]+38016083&4294967295,P=y+(E<<9&4294967295|E>>>23),E=S+(y^w&(P^y))+T[15]+3634488961&4294967295,S=P+(E<<14&4294967295|E>>>18),E=w+(P^y&(S^P))+T[4]+3889429448&4294967295,w=S+(E<<20&4294967295|E>>>12),E=y+(S^P&(w^S))+T[9]+568446438&4294967295,y=w+(E<<5&4294967295|E>>>27),E=P+(w^S&(y^w))+T[14]+3275163606&4294967295,P=y+(E<<9&4294967295|E>>>23),E=S+(y^w&(P^y))+T[3]+4107603335&4294967295,S=P+(E<<14&4294967295|E>>>18),E=w+(P^y&(S^P))+T[8]+1163531501&4294967295,w=S+(E<<20&4294967295|E>>>12),E=y+(S^P&(w^S))+T[13]+2850285829&4294967295,y=w+(E<<5&4294967295|E>>>27),E=P+(w^S&(y^w))+T[2]+4243563512&4294967295,P=y+(E<<9&4294967295|E>>>23),E=S+(y^w&(P^y))+T[7]+1735328473&4294967295,S=P+(E<<14&4294967295|E>>>18),E=w+(P^y&(S^P))+T[12]+2368359562&4294967295,w=S+(E<<20&4294967295|E>>>12),E=y+(w^S^P)+T[5]+4294588738&4294967295,y=w+(E<<4&4294967295|E>>>28),E=P+(y^w^S)+T[8]+2272392833&4294967295,P=y+(E<<11&4294967295|E>>>21),E=S+(P^y^w)+T[11]+1839030562&4294967295,S=P+(E<<16&4294967295|E>>>16),E=w+(S^P^y)+T[14]+4259657740&4294967295,w=S+(E<<23&4294967295|E>>>9),E=y+(w^S^P)+T[1]+2763975236&4294967295,y=w+(E<<4&4294967295|E>>>28),E=P+(y^w^S)+T[4]+1272893353&4294967295,P=y+(E<<11&4294967295|E>>>21),E=S+(P^y^w)+T[7]+4139469664&4294967295,S=P+(E<<16&4294967295|E>>>16),E=w+(S^P^y)+T[10]+3200236656&4294967295,w=S+(E<<23&4294967295|E>>>9),E=y+(w^S^P)+T[13]+681279174&4294967295,y=w+(E<<4&4294967295|E>>>28),E=P+(y^w^S)+T[0]+3936430074&4294967295,P=y+(E<<11&4294967295|E>>>21),E=S+(P^y^w)+T[3]+3572445317&4294967295,S=P+(E<<16&4294967295|E>>>16),E=w+(S^P^y)+T[6]+76029189&4294967295,w=S+(E<<23&4294967295|E>>>9),E=y+(w^S^P)+T[9]+3654602809&4294967295,y=w+(E<<4&4294967295|E>>>28),E=P+(y^w^S)+T[12]+3873151461&4294967295,P=y+(E<<11&4294967295|E>>>21),E=S+(P^y^w)+T[15]+530742520&4294967295,S=P+(E<<16&4294967295|E>>>16),E=w+(S^P^y)+T[2]+3299628645&4294967295,w=S+(E<<23&4294967295|E>>>9),E=y+(S^(w|~P))+T[0]+4096336452&4294967295,y=w+(E<<6&4294967295|E>>>26),E=P+(w^(y|~S))+T[7]+1126891415&4294967295,P=y+(E<<10&4294967295|E>>>22),E=S+(y^(P|~w))+T[14]+2878612391&4294967295,S=P+(E<<15&4294967295|E>>>17),E=w+(P^(S|~y))+T[5]+4237533241&4294967295,w=S+(E<<21&4294967295|E>>>11),E=y+(S^(w|~P))+T[12]+1700485571&4294967295,y=w+(E<<6&4294967295|E>>>26),E=P+(w^(y|~S))+T[3]+2399980690&4294967295,P=y+(E<<10&4294967295|E>>>22),E=S+(y^(P|~w))+T[10]+4293915773&4294967295,S=P+(E<<15&4294967295|E>>>17),E=w+(P^(S|~y))+T[1]+2240044497&4294967295,w=S+(E<<21&4294967295|E>>>11),E=y+(S^(w|~P))+T[8]+1873313359&4294967295,y=w+(E<<6&4294967295|E>>>26),E=P+(w^(y|~S))+T[15]+4264355552&4294967295,P=y+(E<<10&4294967295|E>>>22),E=S+(y^(P|~w))+T[6]+2734768916&4294967295,S=P+(E<<15&4294967295|E>>>17),E=w+(P^(S|~y))+T[13]+1309151649&4294967295,w=S+(E<<21&4294967295|E>>>11),E=y+(S^(w|~P))+T[4]+4149444226&4294967295,y=w+(E<<6&4294967295|E>>>26),E=P+(w^(y|~S))+T[11]+3174756917&4294967295,P=y+(E<<10&4294967295|E>>>22),E=S+(y^(P|~w))+T[2]+718787259&4294967295,S=P+(E<<15&4294967295|E>>>17),E=w+(P^(S|~y))+T[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(S+(E<<21&4294967295|E>>>11))&4294967295,_.g[2]=_.g[2]+S&4294967295,_.g[3]=_.g[3]+P&4294967295}r.prototype.v=function(_,y){y===void 0&&(y=_.length);const w=y-this.blockSize,T=this.C;let S=this.h,P=0;for(;P<y;){if(S==0)for(;P<=w;)i(this,_,P),P+=this.blockSize;if(typeof _=="string"){for(;P<y;)if(T[S++]=_.charCodeAt(P++),S==this.blockSize){i(this,T),S=0;break}}else for(;P<y;)if(T[S++]=_[P++],S==this.blockSize){i(this,T),S=0;break}}this.h=S,this.o+=y},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var w=_.length-8;w<_.length;++w)_[w]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,w=0;w<4;++w)for(let T=0;T<32;T+=8)_[y++]=this.g[w]>>>T&255;return _};function s(_,y){var w=l;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=y(_)}function o(_,y){this.h=y;const w=[];let T=!0;for(let S=_.length-1;S>=0;S--){const P=_[S]|0;T&&P==y||(w[S]=P,T=!1)}this.g=w}var l={};function u(_){return-128<=_&&_<128?s(_,function(y){return new o([y|0],y<0?-1:0)}):new o([_|0],_<0?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return p;if(_<0)return D(h(-_));const y=[];let w=1;for(let T=0;_>=w;T++)y[T]=_/w|0,w*=4294967296;return new o(y,0)}function f(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return D(f(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(y,8));let T=p;for(let P=0;P<_.length;P+=8){var S=Math.min(8,_.length-P);const E=parseInt(_.substring(P,P+S),y);S<8?(S=h(Math.pow(y,S)),T=T.j(S).add(h(E))):(T=T.j(w),T=T.add(h(E)))}return T}var p=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-D(this).m();let _=0,y=1;for(let w=0;w<this.g.length;w++){const T=this.i(w);_+=(T>=0?T:4294967296+T)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(k(this))return"0";if(x(this))return"-"+D(this).toString(_);const y=h(Math.pow(_,6));var w=this;let T="";for(;;){const S=V(w,y).g;w=I(w,S.j(y));let P=((w.g.length>0?w.g[0]:w.h)>>>0).toString(_);if(w=S,k(w))return P+T;for(;P.length<6;)P="0"+P;T=P+T}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function k(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function x(_){return _.h==-1}t.l=function(_){return _=I(this,_),x(_)?-1:k(_)?0:1};function D(_){const y=_.g.length,w=[];for(let T=0;T<y;T++)w[T]=~_.g[T];return new o(w,~_.h).add(g)}t.abs=function(){return x(this)?D(this):this},t.add=function(_){const y=Math.max(this.g.length,_.g.length),w=[];let T=0;for(let S=0;S<=y;S++){let P=T+(this.i(S)&65535)+(_.i(S)&65535),E=(P>>>16)+(this.i(S)>>>16)+(_.i(S)>>>16);T=E>>>16,P&=65535,E&=65535,w[S]=E<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function I(_,y){return _.add(D(y))}t.j=function(_){if(k(this)||k(_))return p;if(x(this))return x(_)?D(this).j(D(_)):D(D(this).j(_));if(x(_))return D(this.j(D(_)));if(this.l(A)<0&&_.l(A)<0)return h(this.m()*_.m());const y=this.g.length+_.g.length,w=[];for(var T=0;T<2*y;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(let S=0;S<_.g.length;S++){const P=this.i(T)>>>16,E=this.i(T)&65535,ae=_.i(S)>>>16,be=_.i(S)&65535;w[2*T+2*S]+=E*be,v(w,2*T+2*S),w[2*T+2*S+1]+=P*be,v(w,2*T+2*S+1),w[2*T+2*S+1]+=E*ae,v(w,2*T+2*S+1),w[2*T+2*S+2]+=P*ae,v(w,2*T+2*S+2)}for(_=0;_<y;_++)w[_]=w[2*_+1]<<16|w[2*_];for(_=y;_<2*y;_++)w[_]=0;return new o(w,0)};function v(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function C(_,y){this.g=_,this.h=y}function V(_,y){if(k(y))throw Error("division by zero");if(k(_))return new C(p,p);if(x(_))return y=V(D(_),y),new C(D(y.g),D(y.h));if(x(y))return y=V(_,D(y)),new C(D(y.g),y.h);if(_.g.length>30){if(x(_)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,T=y;T.l(_)<=0;)w=U(w),T=U(T);var S=z(w,1),P=z(T,1);for(T=z(T,2),w=z(w,2);!k(T);){var E=P.add(T);E.l(_)<=0&&(S=S.add(w),P=E),T=z(T,1),w=z(w,1)}return y=I(_,S.j(y)),new C(S,y)}for(S=p;_.l(y)>=0;){for(w=Math.max(1,Math.floor(_.m()/y.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),P=h(w),E=P.j(y);x(E)||E.l(_)>0;)w-=T,P=h(w),E=P.j(y);k(P)&&(P=g),S=S.add(P),_=I(_,E)}return new C(S,_)}t.B=function(_){return V(this,_).h},t.and=function(_){const y=Math.max(this.g.length,_.g.length),w=[];for(let T=0;T<y;T++)w[T]=this.i(T)&_.i(T);return new o(w,this.h&_.h)},t.or=function(_){const y=Math.max(this.g.length,_.g.length),w=[];for(let T=0;T<y;T++)w[T]=this.i(T)|_.i(T);return new o(w,this.h|_.h)},t.xor=function(_){const y=Math.max(this.g.length,_.g.length),w=[];for(let T=0;T<y;T++)w[T]=this.i(T)^_.i(T);return new o(w,this.h^_.h)};function U(_){const y=_.g.length+1,w=[];for(let T=0;T<y;T++)w[T]=_.i(T)<<1|_.i(T-1)>>>31;return new o(w,_.h)}function z(_,y){const w=y>>5;y%=32;const T=_.g.length-w,S=[];for(let P=0;P<T;P++)S[P]=y>0?_.i(P+w)>>>y|_.i(P+w+1)<<32-y:_.i(P+w);return new o(S,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,r0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,sr=o}).apply(typeof Qm<"u"?Qm:typeof self<"u"?self:typeof window<"u"?window:{});var ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var i0,ks,s0,Ma,_h,o0,a0,l0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ma=="object"&&ma];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var R=a[m];if(!(R in d))break e;d=d[R]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(c){var d=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&d.push([m,c[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,R,N){for(var j=Array(arguments.length-2),J=2;J<arguments.length;J++)j[J-2]=arguments[J];return c.prototype[R].apply(m,j)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const c=a.length;if(c>0){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function k(a,c){for(let m=1;m<arguments.length;m++){const R=arguments[m];var d=typeof R;if(d=d!="object"?d:R?Array.isArray(R)?"array":d:"null",d=="array"||d=="object"&&typeof R.length=="number"){d=a.length||0;const N=R.length||0;a.length=d+N;for(let j=0;j<N;j++)a[d+j]=R[j]}else a.push(R)}}class x{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function D(a){o.setTimeout(()=>{throw a},0)}function I(){var a=_;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class v{constructor(){this.h=this.g=null}add(c,d){const m=C.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var C=new x(()=>new V,a=>a.reset());class V{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let U,z=!1,_=new v,y=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(w)}};function w(){for(var a;a=I();){try{a.h.call(a.g)}catch(d){D(d)}var c=C;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}z=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function ae(a,c){S.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p(ae,S),ae.prototype.init=function(a,c){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ae.Z.h.call(this)},ae.prototype.h=function(){ae.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var be="closure_listenable_"+(Math.random()*1e6|0),gt=0;function Te(a,c,d,m,R){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=R,this.key=++gt,this.da=this.fa=!1}function L(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function W(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function G(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function le(a){const c={};for(const d in a)c[d]=a[d];return c}const Ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _r(a,c){let d,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(d in m)a[d]=m[d];for(let N=0;N<Ae.length;N++)d=Ae[N],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function St(a){this.src=a,this.g={},this.h=0}St.prototype.add=function(a,c,d,m,R){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const j=Ot(a,c,m,R);return j>-1?(c=a[j],d||(c.fa=!1)):(c=new Te(c,this.src,N,!!m,R),c.fa=d,a.push(c)),c};function vr(a,c){const d=c.type;if(d in a.g){var m=a.g[d],R=Array.prototype.indexOf.call(m,c,void 0),N;(N=R>=0)&&Array.prototype.splice.call(m,R,1),N&&(L(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Ot(a,c,d,m){for(let R=0;R<a.length;++R){const N=a[R];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==m)return R}return-1}var Pn="closure_lm_"+(Math.random()*1e6|0),hu={};function pf(a,c,d,m,R){if(m&&m.once)return gf(a,c,d,m,R);if(Array.isArray(c)){for(let N=0;N<c.length;N++)pf(a,c[N],d,m,R);return null}return d=mu(d),a&&a[be]?a.J(c,d,l(m)?!!m.capture:!!m,R):mf(a,c,d,!1,m,R)}function mf(a,c,d,m,R,N){if(!c)throw Error("Invalid event type");const j=l(R)?!!R.capture:!!R;let J=fu(a);if(J||(a[Pn]=J=new St(a)),d=J.add(c,d,m,j,N),d.proxy)return d;if(m=jw(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)P||(R=j),R===void 0&&(R=!1),a.addEventListener(c.toString(),m,R);else if(a.attachEvent)a.attachEvent(_f(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function jw(){function a(d){return c.call(a.src,a.listener,d)}const c=zw;return a}function gf(a,c,d,m,R){if(Array.isArray(c)){for(let N=0;N<c.length;N++)gf(a,c[N],d,m,R);return null}return d=mu(d),a&&a[be]?a.K(c,d,l(m)?!!m.capture:!!m,R):mf(a,c,d,!0,m,R)}function yf(a,c,d,m,R){if(Array.isArray(c))for(var N=0;N<c.length;N++)yf(a,c[N],d,m,R);else m=l(m)?!!m.capture:!!m,d=mu(d),a&&a[be]?(a=a.i,N=String(c).toString(),N in a.g&&(c=a.g[N],d=Ot(c,d,m,R),d>-1&&(L(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[N],a.h--)))):a&&(a=fu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Ot(c,d,m,R)),(d=a>-1?c[a]:null)&&du(d))}function du(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[be])vr(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(_f(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=fu(c))?(vr(d,a),d.h==0&&(d.src=null,c[Pn]=null)):L(a)}}}function _f(a){return a in hu?hu[a]:hu[a]="on"+a}function zw(a,c){if(a.da)a=!0;else{c=new ae(c,this);const d=a.listener,m=a.ha||a.src;a.fa&&du(a),a=d.call(m,c)}return a}function fu(a){return a=a[Pn],a instanceof St?a:null}var pu="__closure_events_fn_"+(Math.random()*1e9>>>0);function mu(a){return typeof a=="function"?a:(a[pu]||(a[pu]=function(c){return a.handleEvent(c)}),a[pu])}function Ge(){T.call(this),this.i=new St(this),this.M=this,this.G=null}p(Ge,T),Ge.prototype[be]=!0,Ge.prototype.removeEventListener=function(a,c,d,m){yf(this,a,c,d,m)};function rt(a,c){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new S(c,a);else if(c instanceof S)c.target=c.target||a;else{var R=c;c=new S(m,a),_r(c,R)}R=!0;let N,j;if(d)for(j=d.length-1;j>=0;j--)N=c.g=d[j],R=Uo(N,m,!0,c)&&R;if(N=c.g=a,R=Uo(N,m,!0,c)&&R,R=Uo(N,m,!1,c)&&R,d)for(j=0;j<d.length;j++)N=c.g=d[j],R=Uo(N,m,!1,c)&&R}Ge.prototype.N=function(){if(Ge.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let m=0;m<d.length;m++)L(d[m]);delete a.g[c],a.h--}}this.G=null},Ge.prototype.J=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},Ge.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function Uo(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let R=!0;for(let N=0;N<c.length;++N){const j=c[N];if(j&&!j.da&&j.capture==d){const J=j.listener,xe=j.ha||j.src;j.fa&&vr(a.i,j),R=J.call(xe,m)!==!1&&R}}return R&&!m.defaultPrevented}function Bw(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function vf(a){a.g=Bw(()=>{a.g=null,a.i&&(a.i=!1,vf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class $w extends T{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:vf(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ts(a){T.call(this),this.h=a,this.g={}}p(ts,T);var wf=[];function Ef(a){W(a.g,function(c,d){this.g.hasOwnProperty(d)&&du(c)},a),a.g={}}ts.prototype.N=function(){ts.Z.N.call(this),Ef(this)},ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gu=o.JSON.stringify,Hw=o.JSON.parse,Ww=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Tf(){}function If(){}var ns={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function yu(){S.call(this,"d")}p(yu,S);function _u(){S.call(this,"c")}p(_u,S);var wr={},Sf=null;function jo(){return Sf=Sf||new Ge}wr.Ia="serverreachability";function Af(a){S.call(this,wr.Ia,a)}p(Af,S);function rs(a){const c=jo();rt(c,new Af(c))}wr.STAT_EVENT="statevent";function Cf(a,c){S.call(this,wr.STAT_EVENT,a),this.stat=c}p(Cf,S);function it(a){const c=jo();rt(c,new Cf(c,a))}wr.Ja="timingevent";function Rf(a,c){S.call(this,wr.Ja,a),this.size=c}p(Rf,S);function is(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function ss(){this.g=!0}ss.prototype.ua=function(){this.g=!1};function qw(a,c,d,m,R,N){a.info(function(){if(a.g)if(N){var j="",J=N.split("&");for(let ue=0;ue<J.length;ue++){var xe=J[ue].split("=");if(xe.length>1){const Fe=xe[0];xe=xe[1];const Wt=Fe.split("_");j=Wt.length>=2&&Wt[1]=="type"?j+(Fe+"="+xe+"&"):j+(Fe+"=redacted&")}}}else j=null;else j=N;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+c+`
`+d+`
`+j})}function Kw(a,c,d,m,R,N,j){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+c+`
`+d+`
`+N+" "+j})}function Zr(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Qw(a,d)+(m?" "+m:"")})}function Gw(a,c){a.info(function(){return"TIMEOUT: "+c})}ss.prototype.info=function(){};function Qw(a,c){if(!a.g)return c;if(!c)return null;try{const N=JSON.parse(c);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var R=m[0];if(R!="noop"&&R!="stop"&&R!="close")for(let j=1;j<m.length;j++)m[j]=""}}}}return gu(N)}catch{return c}}var zo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Pf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},kf;function vu(){}p(vu,Tf),vu.prototype.g=function(){return new XMLHttpRequest},kf=new vu;function os(a){return encodeURIComponent(String(a))}function Xw(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function kn(a,c,d,m){this.j=a,this.i=c,this.l=d,this.S=m||1,this.V=new ts(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Nf}function Nf(){this.i=null,this.g="",this.h=!1}var xf={},wu={};function Eu(a,c,d){a.M=1,a.A=$o(Ht(c)),a.u=d,a.R=!0,Df(a,null)}function Df(a,c){a.F=Date.now(),Bo(a),a.B=Ht(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),Wf(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Nf,a.g=up(a.j,d?c:null,!a.u),a.P>0&&(a.O=new $w(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,m=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(wf[0]=R.toString()),R=wf);for(let N=0;N<R.length;N++){const j=pf(d,R[N],m||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=a.J?le(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),rs(),qw(a.i,a.v,a.B,a.l,a.S,a.u)}kn.prototype.ba=function(a){a=a.target;const c=this.O;c&&Dn(a)==3?c.j():this.Y(a)},kn.prototype.Y=function(a){try{if(a==this.g)e:{const J=Dn(this.g),xe=this.g.ya(),ue=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||Jf(this.g)))){this.K||J!=4||xe==7||(xe==8||ue<=0?rs(3):rs(2)),Tu(this);var c=this.g.ca();this.X=c;var d=Yw(this);if(this.o=c==200,Kw(this.i,this.v,this.B,this.l,this.S,J,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,R=this.g;if((m=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(m)){var N=m;break t}}N=null}if(a=N)Zr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Iu(this,a);else{this.o=!1,this.m=3,it(12),Er(this),as(this);break e}}if(this.R){a=!0;let Fe;for(;!this.K&&this.C<d.length;)if(Fe=Jw(this,d),Fe==wu){J==4&&(this.m=4,it(14),a=!1),Zr(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==xf){this.m=4,it(15),Zr(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Zr(this.i,this.l,Fe,null),Iu(this,Fe);if(Vf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||d.length!=0||this.h.h||(this.m=1,it(16),a=!1),this.o=this.o&&a,!a)Zr(this.i,this.l,d,"[Invalid Chunked Response]"),Er(this),as(this);else if(d.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),xu(j),j.P=!0,it(11))}}else Zr(this.i,this.l,d,null),Iu(this,d);J==4&&Er(this),this.o&&!this.K&&(J==4?sp(this.j,this):(this.o=!1,Bo(this)))}else dE(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,it(12)):(this.m=0,it(13)),Er(this),as(this)}}}catch{}finally{}};function Yw(a){if(!Vf(a))return a.g.la();const c=Jf(a.g);if(c==="")return"";let d="";const m=c.length,R=Dn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Er(a),as(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<m;N++)a.h.h=!0,d+=a.h.i.decode(c[N],{stream:!(R&&N==m-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function Vf(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Jw(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?wu:(d=Number(c.substring(d,m)),isNaN(d)?xf:(m+=1,m+d>c.length?wu:(c=c.slice(m,m+d),a.C=m+d,c)))}kn.prototype.cancel=function(){this.K=!0,Er(this)};function Bo(a){a.T=Date.now()+a.H,Of(a,a.H)}function Of(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=is(h(a.aa,a),c)}function Tu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}kn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Gw(this.i,this.B),this.M!=2&&(rs(),it(17)),Er(this),this.m=2,as(this)):Of(this,this.T-a)};function as(a){a.j.I==0||a.K||sp(a.j,a)}function Er(a){Tu(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Ef(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Iu(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||Su(d.h,a))){if(!a.L&&Su(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Go(d),qo(d);else break e;Nu(d),it(18)}}else d.xa=R[1],0<d.xa-d.K&&R[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=is(h(d.Va,d),6e3));bf(d.h)<=1&&d.ta&&(d.ta=void 0)}else Ir(d,11)}else if((a.L||d.g==a)&&Go(d),!E(c))for(R=d.Ba.g.parse(c),c=0;c<R.length;c++){let ue=R[c];const Fe=ue[0];if(!(Fe<=d.K))if(d.K=Fe,ue=ue[1],d.I==2)if(ue[0]=="c"){d.M=ue[1],d.ba=ue[2];const Wt=ue[3];Wt!=null&&(d.ka=Wt,d.j.info("VER="+d.ka));const Sr=ue[4];Sr!=null&&(d.za=Sr,d.j.info("SVER="+d.za));const Vn=ue[5];Vn!=null&&typeof Vn=="number"&&Vn>0&&(m=1.5*Vn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const On=a.g;if(On){const Xo=On.g?On.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xo){var N=m.h;N.g||Xo.indexOf("spdy")==-1&&Xo.indexOf("quic")==-1&&Xo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Au(N,N.h),N.h=null))}if(m.G){const Du=On.g?On.g.getResponseHeader("X-HTTP-Session-Id"):null;Du&&(m.wa=Du,he(m.J,m.G,Du))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var j=a;if(m.na=lp(m,m.L?m.ba:null,m.W),j.L){Ff(m.h,j);var J=j,xe=m.O;xe&&(J.H=xe),J.D&&(Tu(J),Bo(J)),m.g=j}else rp(m);d.i.length>0&&Ko(d)}else ue[0]!="stop"&&ue[0]!="close"||Ir(d,7);else d.I==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Ir(d,7):ku(d):ue[0]!="noop"&&d.l&&d.l.qa(ue),d.A=0)}}rs(4)}catch{}}var Zw=class{constructor(a,c){this.g=a,this.map=c}};function Lf(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Mf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function bf(a){return a.h?1:a.g?a.g.size:0}function Su(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Au(a,c){a.g?a.g.add(c):a.h=c}function Ff(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Lf.prototype.cancel=function(){if(this.i=Uf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Uf(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return A(a.i)}var jf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eE(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let R,N=null;m>=0?(R=a[d].substring(0,m),N=a[d].substring(m+1)):R=a[d],c(R,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Nn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof Nn?(this.l=a.l,ls(this,a.j),this.o=a.o,this.g=a.g,us(this,a.u),this.h=a.h,Cu(this,qf(a.i)),this.m=a.m):a&&(c=String(a).match(jf))?(this.l=!1,ls(this,c[1]||"",!0),this.o=cs(c[2]||""),this.g=cs(c[3]||"",!0),us(this,c[4]),this.h=cs(c[5]||"",!0),Cu(this,c[6]||"",!0),this.m=cs(c[7]||"")):(this.l=!1,this.i=new ds(null,this.l))}Nn.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(hs(c,zf,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(hs(c,zf,!0),"@"),a.push(os(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(hs(d,d.charAt(0)=="/"?rE:nE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",hs(d,sE)),a.join("")},Nn.prototype.resolve=function(a){const c=Ht(this);let d=!!a.j;d?ls(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var m=a.h;if(d)us(c,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var R=c.h.lastIndexOf("/");R!=-1&&(m=c.h.slice(0,R+1)+m)}if(R=m,R==".."||R==".")m="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){m=R.lastIndexOf("/",0)==0,R=R.split("/");const N=[];for(let j=0;j<R.length;){const J=R[j++];J=="."?m&&j==R.length&&N.push(""):J==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),m&&j==R.length&&N.push("")):(N.push(J),m=!0)}m=N.join("/")}else m=R}return d?c.h=m:d=a.i.toString()!=="",d?Cu(c,qf(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Ht(a){return new Nn(a)}function ls(a,c,d){a.j=d?cs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function us(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Cu(a,c,d){c instanceof ds?(a.i=c,oE(a.i,a.l)):(d||(c=hs(c,iE)),a.i=new ds(c,a.l))}function he(a,c,d){a.i.set(c,d)}function $o(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function cs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function hs(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,tE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function tE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var zf=/[#\/\?@]/g,nE=/[#\?:]/g,rE=/[#\?]/g,iE=/[#\?@]/g,sE=/#/g;function ds(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Tr(a){a.g||(a.g=new Map,a.h=0,a.i&&eE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ds.prototype,t.add=function(a,c){Tr(this),this.i=null,a=ei(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Bf(a,c){Tr(a),c=ei(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function $f(a,c){return Tr(a),c=ei(a,c),a.g.has(c)}t.forEach=function(a,c){Tr(this),this.g.forEach(function(d,m){d.forEach(function(R){a.call(c,R,m,this)},this)},this)};function Hf(a,c){Tr(a);let d=[];if(typeof c=="string")$f(a,c)&&(d=d.concat(a.g.get(ei(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Tr(this),this.i=null,a=ei(this,a),$f(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=Hf(this,a),a.length>0?String(a[0]):c):c};function Wf(a,c,d){Bf(a,c),d.length>0&&(a.i=null,a.g.set(ei(a,c),A(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var d=c[m];const R=os(d);d=Hf(this,d);for(let N=0;N<d.length;N++){let j=R;d[N]!==""&&(j+="="+os(d[N])),a.push(j)}}return this.i=a.join("&")};function qf(a){const c=new ds;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function ei(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function oE(a,c){c&&!a.j&&(Tr(a),a.i=null,a.g.forEach(function(d,m){const R=m.toLowerCase();m!=R&&(Bf(this,m),Wf(this,R,d))},a)),a.j=c}function aE(a,c){const d=new ss;if(o.Image){const m=new Image;m.onload=f(xn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=f(xn,d,"TestLoadImage: error",!1,c,m),m.onabort=f(xn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=f(xn,d,"TestLoadImage: timeout",!1,c,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function lE(a,c){const d=new ss,m=new AbortController,R=setTimeout(()=>{m.abort(),xn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(R),N.ok?xn(d,"TestPingServer: ok",!0,c):xn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),xn(d,"TestPingServer: error",!1,c)})}function xn(a,c,d,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(d)}catch{}}function uE(){this.g=new Ww}function Ru(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Ru,Tf),Ru.prototype.g=function(){return new Ho(this.i,this.h)};function Ho(a,c){Ge.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Ho,Ge),t=Ho.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,ps(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,fs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ps(this)),this.g&&(this.readyState=3,ps(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Kf(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Kf(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?fs(this):ps(this),this.readyState==3&&Kf(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,fs(this))},t.Na=function(a){this.g&&(this.response=a,fs(this))},t.ga=function(){this.g&&fs(this)};function fs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ps(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ps(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Gf(a){let c="";return W(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Pu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Gf(d),typeof a=="string"?d!=null&&os(d):he(a,c,d))}function Ie(a){Ge.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ie,Ge);var cE=/^https?$/i,hE=["POST","PUT"];t=Ie.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():kf.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){Qf(this,N);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)d.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(hE,c,void 0)>=0)||m||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,j]of d)this.g.setRequestHeader(N,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){Qf(this,N)}};function Qf(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,Xf(a),Wo(a)}function Xf(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,rt(this,"complete"),rt(this,"abort"),Wo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wo(this,!0)),Ie.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Yf(this):this.Xa())},t.Xa=function(){Yf(this)};function Yf(a){if(a.h&&typeof s<"u"){if(a.v&&Dn(a)==4)setTimeout(a.Ca.bind(a),0);else if(rt(a,"readystatechange"),Dn(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=N===0){let j=String(a.D).match(jf)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),m=!cE.test(j?j.toLowerCase():"")}d=m}if(d)rt(a,"complete"),rt(a,"success");else{a.o=6;try{var R=Dn(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",Xf(a)}}finally{Wo(a)}}}}function Wo(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||rt(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Dn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Dn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Hw(c)}};function Jf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function dE(a){const c={};a=(a.g&&Dn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(E(a[m]))continue;var d=Xw(a[m]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[R]||[];c[R]=N,N.push(d)}G(c,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ms(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Zf(a){this.za=0,this.i=[],this.j=new ss,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ms("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ms("baseRetryDelayMs",5e3,a),this.Za=ms("retryDelaySeedMs",1e4,a),this.Ta=ms("forwardChannelMaxRetries",2,a),this.va=ms("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Lf(a&&a.concurrentRequestLimit),this.Ba=new uE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Zf.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,m){it(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=lp(this,null,this.W),Ko(this)};function ku(a){if(ep(a),a.I==3){var c=a.V++,d=Ht(a.J);if(he(d,"SID",a.M),he(d,"RID",c),he(d,"TYPE","terminate"),gs(a,d),c=new kn(a,a.j,c),c.M=2,c.A=$o(Ht(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=up(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Bo(c)}ap(a)}function qo(a){a.g&&(xu(a),a.g.cancel(),a.g=null)}function ep(a){qo(a),a.v&&(o.clearTimeout(a.v),a.v=null),Go(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ko(a){if(!Mf(a.h)&&!a.m){a.m=!0;var c=a.Ea;U||y(),z||(U(),z=!0),_.add(c,a),a.D=0}}function fE(a,c){return bf(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=is(h(a.Ea,a,c),op(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new kn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=le(N),_r(N,this.U)):N=this.U),this.u!==null||this.R||(R.J=N,N=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=np(this,R,c),d=Ht(this.J),he(d,"RID",a),he(d,"CVER",22),this.G&&he(d,"X-HTTP-Session-Id",this.G),gs(this,d),N&&(this.R?c="headers="+os(Gf(N))+"&"+c:this.u&&Pu(d,this.u,N)),Au(this.h,R),this.Ra&&he(d,"TYPE","init"),this.S?(he(d,"$req",c),he(d,"SID","null"),R.U=!0,Eu(R,d,null)):Eu(R,d,c),this.I=2}}else this.I==3&&(a?tp(this,a):this.i.length==0||Mf(this.h)||tp(this))};function tp(a,c){var d;c?d=c.l:d=a.V++;const m=Ht(a.J);he(m,"SID",a.M),he(m,"RID",d),he(m,"AID",a.K),gs(a,m),a.u&&a.o&&Pu(m,a.u,a.o),d=new kn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=np(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Au(a.h,d),Eu(d,m,c)}function gs(a,c){a.H&&W(a.H,function(d,m){he(c,m,d)}),a.l&&W({},function(d,m){he(c,m,d)})}function np(a,c,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var R=a.i;let J=-1;for(;;){const xe=["count="+d];J==-1?d>0?(J=R[0].g,xe.push("ofs="+J)):J=0:xe.push("ofs="+J);let ue=!0;for(let Fe=0;Fe<d;Fe++){var N=R[Fe].g;const Wt=R[Fe].map;if(N-=J,N<0)J=Math.max(0,R[Fe].g-100),ue=!1;else try{N="req"+N+"_"||"";try{var j=Wt instanceof Map?Wt:Object.entries(Wt);for(const[Sr,Vn]of j){let On=Vn;l(Vn)&&(On=gu(Vn)),xe.push(N+Sr+"="+encodeURIComponent(On))}}catch(Sr){throw xe.push(N+"type="+encodeURIComponent("_badmap")),Sr}}catch{m&&m(Wt)}}if(ue){j=xe.join("&");break e}}j=void 0}return a=a.i.splice(0,d),c.G=a,j}function rp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;U||y(),z||(U(),z=!0),_.add(c,a),a.A=0}}function Nu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=is(h(a.Da,a),op(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,ip(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=is(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,it(10),qo(this),ip(this))};function xu(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function ip(a){a.g=new kn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Ht(a.na);he(c,"RID","rpc"),he(c,"SID",a.M),he(c,"AID",a.K),he(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(c,"TO",a.ia),he(c,"TYPE","xmlhttp"),gs(a,c),a.u&&a.o&&Pu(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=$o(Ht(c)),d.u=null,d.R=!0,Df(d,a)}t.Va=function(){this.C!=null&&(this.C=null,qo(this),Nu(this),it(19))};function Go(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function sp(a,c){var d=null;if(a.g==c){Go(a),xu(a),a.g=null;var m=2}else if(Su(a.h,c))d=c.G,Ff(a.h,c),m=1;else return;if(a.I!=0){if(c.o)if(m==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var R=a.D;m=jo(),rt(m,new Rf(m,d)),Ko(a)}else rp(a);else if(R=c.m,R==3||R==0&&c.X>0||!(m==1&&fE(a,c)||m==2&&Nu(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),R){case 1:Ir(a,5);break;case 4:Ir(a,10);break;case 3:Ir(a,6);break;default:Ir(a,2)}}}function op(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Ir(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),m=a.Ua;const R=!m;m=new Nn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ls(m,"https"),$o(m),R?aE(m.toString(),d):lE(m.toString(),d)}else it(2);a.I=0,a.l&&a.l.pa(c),ap(a),ep(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function ap(a){if(a.I=0,a.ja=[],a.l){const c=Uf(a.h);(c.length!=0||a.i.length!=0)&&(k(a.ja,c),k(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function lp(a,c,d){var m=d instanceof Nn?Ht(d):new Nn(d);if(m.g!="")c&&(m.g=c+"."+m.g),us(m,m.u);else{var R=o.location;m=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;const N=new Nn(null);m&&ls(N,m),c&&(N.g=c),R&&us(N,R),d&&(N.h=d),m=N}return d=a.G,c=a.wa,d&&c&&he(m,d,c),he(m,"VER",a.ka),gs(a,m),m}function up(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Ie(new Ru({ab:d})):new Ie(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cp(){}t=cp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Qo(){}Qo.prototype.g=function(a,c){return new yt(a,c)};function yt(a,c){Ge.call(this),this.g=new Zf(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!E(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ti(this)}p(yt,Ge),yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){ku(this.g)},yt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=gu(a),a=d);c.i.push(new Zw(c.Ya++,a)),c.I==3&&Ko(c)},yt.prototype.N=function(){this.g.l=null,delete this.j,ku(this.g),delete this.g,yt.Z.N.call(this)};function hp(a){yu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(hp,yu);function dp(){_u.call(this),this.status=1}p(dp,_u);function ti(a){this.g=a}p(ti,cp),ti.prototype.ra=function(){rt(this.g,"a")},ti.prototype.qa=function(a){rt(this.g,new hp(a))},ti.prototype.pa=function(a){rt(this.g,new dp)},ti.prototype.oa=function(){rt(this.g,"b")},Qo.prototype.createWebChannel=Qo.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,l0=function(){return new Qo},a0=function(){return jo()},o0=wr,_h={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},zo.NO_ERROR=0,zo.TIMEOUT=8,zo.HTTP_ERROR=6,Ma=zo,Pf.COMPLETE="complete",s0=Pf,If.EventType=ns,ns.OPEN="a",ns.CLOSE="b",ns.ERROR="c",ns.MESSAGE="d",Ge.prototype.listen=Ge.prototype.J,ks=If,Ie.prototype.listenOnce=Ie.prototype.K,Ie.prototype.getLastError=Ie.prototype.Ha,Ie.prototype.getLastErrorCode=Ie.prototype.ya,Ie.prototype.getStatus=Ie.prototype.ca,Ie.prototype.getResponseJson=Ie.prototype.La,Ie.prototype.getResponseText=Ie.prototype.la,Ie.prototype.send=Ie.prototype.ea,Ie.prototype.setWithCredentials=Ie.prototype.Fa,i0=Ie}).apply(typeof ma<"u"?ma:typeof self<"u"?self:typeof window<"u"?window:{});const Xm="@firebase/firestore",Ym="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Je=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yi="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Pd("@firebase/firestore");function ri(){return Wr.logLevel}function B(t,...e){if(Wr.logLevel<=ee.DEBUG){const n=e.map(Ud);Wr.debug(`Firestore (${Yi}): ${t}`,...n)}}function Sn(t,...e){if(Wr.logLevel<=ee.ERROR){const n=e.map(Ud);Wr.error(`Firestore (${Yi}): ${t}`,...n)}}function Ui(t,...e){if(Wr.logLevel<=ee.WARN){const n=e.map(Ud);Wr.warn(`Firestore (${Yi}): ${t}`,...n)}}function Ud(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,u0(t,r,n)}function u0(t,e,n){let r=`FIRESTORE (${Yi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Sn(r),new Error(r)}function se(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||u0(e,i,r)}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class PC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class kC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class NC{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){se(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Or,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Or)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string",31837,{l:r}),new c0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string",2055,{h:e}),new Je(e)}}class xC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class DC{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new xC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Rt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){se(this.o===void 0,3512);const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Jm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Jm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=OC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function vh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return dc(i)===dc(s)?te(i,s):dc(i)?1:-1}return te(t.length,e.length)}const LC=55296,MC=57343;function dc(t){const e=t.charCodeAt(0);return e>=LC&&e<=MC}function ji(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="__name__";class Gt{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&K(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Gt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Gt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Gt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return te(e.length,n.length)}static compareSegments(e,n){const r=Gt.isNumericId(e),i=Gt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Gt.extractNumericId(e).compare(Gt.extractNumericId(n)):vh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return sr.fromString(e.substring(4,e.length-2))}}class fe extends Gt{construct(e,n,r){return new fe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new fe(n)}static emptyPath(){return new fe([])}}const bC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends Gt{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return bC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zm}static keyField(){return new He([Zm])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(fe.fromString(e))}static fromName(e){return new q(fe.fromString(e).popFirst(5))}static empty(){return new q(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return fe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new fe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(t,e,n){if(!n)throw new H(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function FC(t,e,n,r){if(e===!0&&r===!0)throw new H(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function eg(t){if(!q.isDocumentKey(t))throw new H(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function tg(t){if(q.isDocumentKey(t))throw new H(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function d0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function zd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K(12329,{type:typeof t})}function Lr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zd(t);throw new H(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t,e){const n={typeString:t};return e&&(n.value=e),n}function Vo(t,e){if(!d0(t))throw new H(M.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new H(M.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=-62135596800,rg=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*rg);return new pe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ng)throw new H(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/rg}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Vo(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ng;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:Ne("string",pe._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new pe(0,0))}static max(){return new X(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=-1;function UC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new ur(i,q.empty(),e)}function jC(t){return new ur(t.readTime,t.key,po)}class ur{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ur(X.min(),q.empty(),po)}static max(){return new ur(X.max(),q.empty(),po)}}function zC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $C{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==BC)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function HC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Zi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Yl.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=-1;function Jl(t){return t==null}function wl(t){return t===0&&1/t==-1/0}function WC(t){return typeof t=="number"&&Number.isInteger(t)&&!wl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="";function qC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ig(e)),e=KC(t.get(n),e);return ig(e)}function KC(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case f0:n+="";break;default:n+=s}}return n}function ig(t){return t+f0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function p0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new Ee(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new Ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ga(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ga(this.root,e,this.comparator,!1)}getReverseIterator(){return new ga(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ga(this.root,e,this.comparator,!0)}}class ga{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??$e.EMPTY,this.right=s??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.comparator=e,this.data=new Ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new og(this.data.getIterator())}getIteratorFrom(e){return new og(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class og{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new jt([])}unionWith(e){let n=new Me(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ji(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new m0("Invalid base64 string: "+s):s}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const GC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(t){if(se(!!t,39018),typeof t=="string"){let e=0;const n=GC.exec(t);if(se(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="server_timestamp",y0="__type__",_0="__previous_value__",v0="__local_write_time__";function $d(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[y0])==null?void 0:r.stringValue)===g0}function Zl(t){const e=t.mapValue.fields[_0];return $d(e)?Zl(e):e}function mo(t){const e=cr(t.mapValue.fields[v0].timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,n,r,i,s,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const El="(default)";class go{constructor(e,n){this.projectId=e,this.database=n||El}static empty(){return new go("","")}get isDefaultDatabase(){return this.database===El}isEqual(e){return e instanceof go&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0="__type__",E0="__max__",ya={mapValue:{fields:{__type__:{stringValue:E0}}}},T0="__vector__",Tl="value";function dr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$d(t)?4:YC(t)?9007199254740991:XC(t)?10:11:K(28295,{value:t})}function on(t,e){if(t===e)return!0;const n=dr(t);if(n!==dr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mo(t).isEqual(mo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=cr(i.timestampValue),l=cr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return hr(i.bytesValue).isEqual(hr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ce(i.geoPointValue.latitude)===Ce(s.geoPointValue.latitude)&&Ce(i.geoPointValue.longitude)===Ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ce(i.integerValue)===Ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ce(i.doubleValue),l=Ce(s.doubleValue);return o===l?wl(o)===wl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ji(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(sg(o)!==sg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!on(o[u],l[u])))return!1;return!0}(t,e);default:return K(52216,{left:t})}}function yo(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function zi(t,e){if(t===e)return 0;const n=dr(t),r=dr(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ce(s.integerValue||s.doubleValue),u=Ce(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ag(t.timestampValue,e.timestampValue);case 4:return ag(mo(t),mo(e));case 5:return vh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=hr(s),u=hr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=te(l[h],u[h]);if(f!==0)return f}return te(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=te(Ce(s.latitude),Ce(o.latitude));return l!==0?l:te(Ce(s.longitude),Ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return lg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,A,k,x;const l=s.fields||{},u=o.fields||{},h=(g=l[Tl])==null?void 0:g.arrayValue,f=(A=u[Tl])==null?void 0:A.arrayValue,p=te(((k=h==null?void 0:h.values)==null?void 0:k.length)||0,((x=f==null?void 0:f.values)==null?void 0:x.length)||0);return p!==0?p:lg(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ya.mapValue&&o===ya.mapValue)return 0;if(s===ya.mapValue)return 1;if(o===ya.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=vh(u[p],f[p]);if(g!==0)return g;const A=zi(l[u[p]],h[f[p]]);if(A!==0)return A}return te(u.length,f.length)}(t.mapValue,e.mapValue);default:throw K(23264,{he:n})}}function ag(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=cr(t),r=cr(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function lg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=zi(n[i],r[i]);if(s)return s}return te(n.length,r.length)}function Bi(t){return wh(t)}function wh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return hr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=wh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${wh(n.fields[o])}`;return i+"}"}(t.mapValue):K(61005,{value:t})}function ba(t){switch(dr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zl(t);return e?16+ba(e):16;case 5:return 2*t.stringValue.length;case 6:return hr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+ba(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Qr(r.fields,(s,o)=>{i+=s.length+ba(o)}),i}(t.mapValue);default:throw K(13486,{value:t})}}function Eh(t){return!!t&&"integerValue"in t}function Hd(t){return!!t&&"arrayValue"in t}function ug(t){return!!t&&"nullValue"in t}function cg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fa(t){return!!t&&"mapValue"in t}function XC(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[w0])==null?void 0:r.stringValue)===T0}function Hs(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Qr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hs(t.arrayValue.values[n]);return e}return{...t}}function YC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===E0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hs(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Hs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Qr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Pt(Hs(this.value))}}function I0(t){const e=[];return Qr(t.fields,(n,r)=>{const i=new He([n]);if(Fa(r)){const s=I0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new et(e,0,X.min(),X.min(),X.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,i){return new et(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new et(e,2,n,X.min(),X.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,X.min(),X.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n){this.position=e,this.inclusive=n}}function hg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=zi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function dg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n="asc"){this.field=e,this.dir=n}}function JC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{}class Ve extends S0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new eR(e,n,r):n==="array-contains"?new rR(e,r):n==="in"?new iR(e,r):n==="not-in"?new sR(e,r):n==="array-contains-any"?new oR(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tR(e,r):new nR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(zi(n,this.value)):n!==null&&dr(this.value)===dr(n)&&this.matchesComparison(zi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends S0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new an(e,n)}matches(e){return A0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function A0(t){return t.op==="and"}function C0(t){return ZC(t)&&A0(t)}function ZC(t){for(const e of t.filters)if(e instanceof an)return!1;return!0}function Th(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+Bi(t.value);if(C0(t))return t.filters.map(e=>Th(e)).join(",");{const e=t.filters.map(n=>Th(n)).join(",");return`${t.op}(${e})`}}function R0(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&on(r.value,i.value)}(t,e):t instanceof an?function(r,i){return i instanceof an&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&R0(o,i.filters[l]),!0):!1}(t,e):void K(19439)}function P0(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${Bi(n.value)}`}(t):t instanceof an?function(n){return n.op.toString()+" {"+n.getFilters().map(P0).join(" ,")+"}"}(t):"Filter"}class eR extends Ve{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class tR extends Ve{constructor(e,n){super(e,"in",n),this.keys=k0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nR extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=k0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function k0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class rR extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hd(n)&&yo(n.arrayValue,this.value)}}class iR extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yo(this.value.arrayValue,n)}}class sR extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(yo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!yo(this.value.arrayValue,n)}}class oR extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>yo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function fg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new aR(t,e,n,r,i,s,o)}function Wd(t){const e=Y(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Th(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Jl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Bi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Bi(r)).join(",")),e.Te=n}return e.Te}function qd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!R0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dg(t.startAt,e.startAt)&&dg(t.endAt,e.endAt)}function Ih(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function lR(t,e,n,r,i,s,o,l){return new eu(t,e,n,r,i,s,o,l)}function Kd(t){return new eu(t)}function pg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uR(t){return t.collectionGroup!==null}function Ws(t){const e=Y(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Me(He.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Sl(s,r))}),n.has(He.keyField().canonicalString())||e.Ie.push(new Sl(He.keyField(),r))}return e.Ie}function en(t){const e=Y(t);return e.Ee||(e.Ee=cR(e,Ws(t))),e.Ee}function cR(t,e){if(t.limitType==="F")return fg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Sl(i.field,s)});const n=t.endAt?new Il(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Il(t.startAt.position,t.startAt.inclusive):null;return fg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Sh(t,e,n){return new eu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function tu(t,e){return qd(en(t),en(e))&&t.limitType===e.limitType}function N0(t){return`${Wd(en(t))}|lt:${t.limitType}`}function ii(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>P0(i)).join(", ")}]`),Jl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Bi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Bi(i)).join(",")),`Target(${r})`}(en(t))}; limitType=${t.limitType})`}function nu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ws(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=hg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Ws(r),i)||r.endAt&&!function(o,l,u){const h=hg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Ws(r),i))}(t,e)}function hR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function x0(t){return(e,n)=>{let r=!1;for(const i of Ws(t)){const s=dR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function dR(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?zi(u,h):K(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return p0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=new Ee(q.comparator);function An(){return fR}const D0=new Ee(q.comparator);function Ns(...t){let e=D0;for(const n of t)e=e.insert(n.key,n);return e}function V0(t){let e=D0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xr(){return qs()}function O0(){return qs()}function qs(){return new Xr(t=>t.toString(),(t,e)=>t.isEqual(e))}const pR=new Ee(q.comparator),mR=new Me(q.comparator);function ne(...t){let e=mR;for(const n of t)e=e.add(n);return e}const gR=new Me(te);function yR(){return gR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wl(e)?"-0":e}}function L0(t){return{integerValue:""+t}}function _R(t,e){return WC(e)?L0(e):Gd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(){this._=void 0}}function vR(t,e,n){return t instanceof Al?function(i,s){const o={fields:{[y0]:{stringValue:g0},[v0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$d(s)&&(s=Zl(s)),s&&(o.fields[_0]=s),{mapValue:o}}(n,e):t instanceof _o?b0(t,e):t instanceof vo?F0(t,e):function(i,s){const o=M0(i,s),l=mg(o)+mg(i.Ae);return Eh(o)&&Eh(i.Ae)?L0(l):Gd(i.serializer,l)}(t,e)}function wR(t,e,n){return t instanceof _o?b0(t,e):t instanceof vo?F0(t,e):n}function M0(t,e){return t instanceof Cl?function(r){return Eh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Al extends ru{}class _o extends ru{constructor(e){super(),this.elements=e}}function b0(t,e){const n=U0(e);for(const r of t.elements)n.some(i=>on(i,r))||n.push(r);return{arrayValue:{values:n}}}class vo extends ru{constructor(e){super(),this.elements=e}}function F0(t,e){let n=U0(e);for(const r of t.elements)n=n.filter(i=>!on(i,r));return{arrayValue:{values:n}}}class Cl extends ru{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function mg(t){return Ce(t.integerValue||t.doubleValue)}function U0(t){return Hd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ER(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof _o&&i instanceof _o||r instanceof vo&&i instanceof vo?ji(r.elements,i.elements,on):r instanceof Cl&&i instanceof Cl?on(r.Ae,i.Ae):r instanceof Al&&i instanceof Al}(t.transform,e.transform)}class TR{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ua(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class iu{}function j0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new B0(t.key,tn.none()):new Oo(t.key,t.data,tn.none());{const n=t.data,r=Pt.empty();let i=new Me(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Yr(t.key,r,new jt(i.toArray()),tn.none())}}function IR(t,e,n){t instanceof Oo?function(i,s,o){const l=i.value.clone(),u=yg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Yr?function(i,s,o){if(!Ua(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=yg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(z0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ks(t,e,n,r){return t instanceof Oo?function(s,o,l,u){if(!Ua(s.precondition,o))return l;const h=s.value.clone(),f=_g(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Yr?function(s,o,l,u){if(!Ua(s.precondition,o))return l;const h=_g(s.fieldTransforms,u,o),f=o.data;return f.setAll(z0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ua(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function SR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=M0(r.transform,i||null);s!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,s))}return n||null}function gg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ji(r,i,(s,o)=>ER(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oo extends iu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Yr extends iu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function z0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yg(t,e,n){const r=new Map;se(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,wR(o,l,n[i]))}return r}function _g(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,vR(s,o,e))}return r}class B0 extends iu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AR extends iu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&IR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ks(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=O0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=j0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&ji(this.mutations,e.mutations,(n,r)=>gg(n,r))&&ji(this.baseMutations,e.baseMutations,(n,r)=>gg(n,r))}}class Qd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){se(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return pR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Qd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,re;function kR(t){switch(t){case M.OK:return K(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return K(15467,{code:t})}}function $0(t){if(t===void 0)return Sn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Pe.OK:return M.OK;case Pe.CANCELLED:return M.CANCELLED;case Pe.UNKNOWN:return M.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return M.INTERNAL;case Pe.UNAVAILABLE:return M.UNAVAILABLE;case Pe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Pe.NOT_FOUND:return M.NOT_FOUND;case Pe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Pe.ABORTED:return M.ABORTED;case Pe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Pe.DATA_LOSS:return M.DATA_LOSS;default:return K(39323,{code:t})}}(re=Pe||(Pe={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=new sr([4294967295,4294967295],0);function vg(t){const e=NR().encode(t),n=new r0;return n.update(e),new Uint8Array(n.digest())}function wg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new sr([n,r],0),new sr([i,s],0)]}class Xd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xs(`Invalid padding: ${n}`);if(r<0)throw new xs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=sr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(sr.fromNumber(r)));return i.compare(xR)===1&&(i=new sr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=vg(e),[r,i]=wg(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Xd(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=vg(e),[r,i]=wg(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Lo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new su(X.min(),i,new Ee(te),An(),ne())}}class Lo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Lo(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class H0{constructor(e,n){this.targetId=e,this.Ce=n}}class W0{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Eg{constructor(){this.ve=0,this.Fe=Tg(),this.Me=Ke.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),n=ne(),r=ne();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K(38017,{changeType:s})}}),new Lo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Tg()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,se(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class DR{constructor(e){this.Ge=e,this.ze=new Map,this.je=An(),this.Je=_a(),this.He=_a(),this.Ye=new Ee(te)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Ih(s))if(r===0){const o=new q(s.path);this.et(n,o,et.newNoDocument(o,X.min()))}else se(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=hr(r).toUint8Array()}catch(u){if(u instanceof m0)return Ui("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Xd(o,i,s)}catch(u){return Ui(u instanceof xs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Ih(l.target)){const u=new q(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,et.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=ne();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new su(e,n,this.Ye,this.je,r);return this.je=An(),this.Je=_a(),this.He=_a(),this.Ye=new Ee(te),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Eg,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Me(te),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Me(te),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Eg),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function _a(){return new Ee(q.comparator)}function Tg(){return new Ee(q.comparator)}const VR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),OR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),LR=(()=>({and:"AND",or:"OR"}))();class MR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ah(t,e){return t.useProto3Json||Jl(e)?e:{value:e}}function Rl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function q0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bR(t,e){return Rl(t,e.toTimestamp())}function nn(t){return se(!!t,49232),X.fromTimestamp(function(n){const r=cr(n);return new pe(r.seconds,r.nanos)}(t))}function Yd(t,e){return Ch(t,e).canonicalString()}function Ch(t,e){const n=function(i){return new fe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function K0(t){const e=fe.fromString(t);return se(J0(e),10190,{key:e.toString()}),e}function Rh(t,e){return Yd(t.databaseId,e.path)}function fc(t,e){const n=K0(e);if(n.get(1)!==t.databaseId.projectId)throw new H(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Q0(n))}function G0(t,e){return Yd(t.databaseId,e)}function FR(t){const e=K0(t);return e.length===4?fe.emptyPath():Q0(e)}function Ph(t){return new fe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Q0(t){return se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ig(t,e,n){return{name:Rh(t,e),fields:n.value.mapValue.fields}}function UR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(se(f===void 0||typeof f=="string",58123),Ke.fromBase64String(f||"")):(se(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ke.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?M.UNKNOWN:$0(h.code);return new H(f,h.message||"")}(o);n=new W0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fc(t,r.document.name),s=nn(r.document.updateTime),o=r.document.createTime?nn(r.document.createTime):X.min(),l=new Pt({mapValue:{fields:r.document.fields}}),u=et.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new ja(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fc(t,r.document),s=r.readTime?nn(r.readTime):X.min(),o=et.newNoDocument(i,s),l=r.removedTargetIds||[];n=new ja([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fc(t,r.document),s=r.removedTargetIds||[];n=new ja([],s,i,null)}else{if(!("filter"in e))return K(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new PR(i,s),l=r.targetId;n=new H0(l,o)}}return n}function jR(t,e){let n;if(e instanceof Oo)n={update:Ig(t,e.key,e.value)};else if(e instanceof B0)n={delete:Rh(t,e.key)};else if(e instanceof Yr)n={update:Ig(t,e.key,e.data),updateMask:QR(e.fieldMask)};else{if(!(e instanceof AR))return K(16599,{Vt:e.type});n={verify:Rh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Al)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof _o)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof vo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Cl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw K(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:bR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K(27497)}(t,e.precondition)),n}function zR(t,e){return t&&t.length>0?(se(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?nn(i.updateTime):nn(s);return o.isEqual(X.min())&&(o=nn(s)),new TR(o,i.transformResults||[])}(n,e))):[]}function BR(t,e){return{documents:[G0(t,e.path)]}}function $R(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=G0(t,i);const s=function(h){if(h.length!==0)return Y0(an.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:si(g.field),direction:qR(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Ah(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function HR(t){let e=FR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){se(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=X0(p);return g instanceof an&&C0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(k){return new Sl(oi(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Jl(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,A=p.values||[];return new Il(A,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,A=p.values||[];return new Il(A,g)}(n.endAt)),lR(e,i,o,s,l,"F",u,h)}function WR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function X0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=oi(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=oi(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=oi(n.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=oi(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(oi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return an.create(n.compositeFilter.filters.map(r=>X0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(n.compositeFilter.op))}(t):K(30097,{filter:t})}function qR(t){return VR[t]}function KR(t){return OR[t]}function GR(t){return LR[t]}function si(t){return{fieldPath:t.canonicalString()}}function oi(t){return He.fromServerFormat(t.fieldPath)}function Y0(t){return t instanceof Ve?function(n){if(n.op==="=="){if(cg(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NAN"}};if(ug(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cg(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NOT_NAN"}};if(ug(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:si(n.field),op:KR(n.op),value:n.value}}}(t):t instanceof an?function(n){const r=n.getFilters().map(i=>Y0(i));return r.length===1?r[0]:{compositeFilter:{op:GR(n.op),filters:r}}}(t):K(54877,{filter:t})}function QR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function J0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,r,i,s=X.min(),o=X.min(),l=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.yt=e}}function YR(t){const e=HR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(){this.Cn=new ZR}addToCollectionParentIndex(e,n){return this.Cn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(ur.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(ur.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class ZR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Me(fe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Me(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Z0=41943040;class ut{static withCacheSize(e){return new ut(e,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ut.DEFAULT_COLLECTION_PERCENTILE=10,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ut.DEFAULT=new ut(Z0,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ut.DISABLED=new ut(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new $i(0)}static cr(){return new $i(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="LruGarbageCollector",eP=1048576;function Cg([t,e],[n,r]){const i=te(t,n);return i===0?te(e,r):i}class tP{constructor(e){this.Ir=e,this.buffer=new Me(Cg),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Cg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class nP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){B(Ag,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Zi(n)?B(Ag,"Ignoring IndexedDB error during garbage collection: ",n):await Ji(n)}await this.Vr(3e5)})}}class rP{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(Yl.ce);const r=new tP(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Sg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Sg):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),ri()<=ee.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function iP(t,e){return new rP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.changes=new Xr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ks(r.mutation,i,jt.empty(),pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=xr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ns();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=An();const o=qs(),l=function(){return qs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Yr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ks(f.mutation,h,f.mutation.getFieldMask(),pe.now())):o.set(h.key,jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new oP(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=qs();let i=new Ee((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||jt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=O0();f.forEach(g=>{if(!s.has(g)){const A=j0(n.get(g),r.get(g));A!==null&&p.set(g,A),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(xr());let l=po,u=s;return o.next(h=>O.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,ne())).next(f=>({batchId:l,changes:V0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=Ns();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ns();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const h=function(p,g){return new eu(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,et.newInvalidDocument(f)))});let l=Ns();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Ks(f.mutation,h,jt.empty(),pe.now()),nu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return O.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:nn(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:YR(i.bundledQuery),readTime:nn(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(){this.overlays=new Ee(q.comparator),this.qr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=xr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ee((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=xr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=xr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return O.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new RR(n,r));let s=this.qr.get(n);s===void 0&&(s=ne(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.Qr=new Me(Ue.$r),this.Ur=new Me(Ue.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new Ue(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new q(new fe([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new q(new fe([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=ne();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return q.comparator(e.key,n.key)||te(e.Yr,n.Yr)}static Kr(e,n){return te(e.Yr,n.Yr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Me(Ue.$r)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Bd:this.tr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Me(te);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),O.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new q(s),0);let l=new Me(te);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Yr)),!0)},o),O.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){se(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return O.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new Ue(n,0),i=this.Zr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.ri=e,this.docs=function(){return new Ee(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():et.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=An();const o=n.path,l=new q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||zC(jC(f),r)<=0||(i.has(f.key)||nu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K(9500)}ii(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new fP(this)}getSize(e){return O.resolve(this.size)}}class fP extends sP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.persistence=e,this.si=new Xr(n=>Wd(n),qd),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.oi=0,this._i=new Jd,this.targetCount=0,this.ai=$i.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),O.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new $i(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.Pr(n),O.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n){this.ui={},this.overlays={},this.ci=new Yl(0),this.li=!1,this.li=!0,this.hi=new cP,this.referenceDelegate=e(this),this.Pi=new pP(this),this.indexManager=new JR,this.remoteDocumentCache=function(i){return new dP(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new XR(n),this.Ii=new lP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new uP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new hP(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new mP(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return O.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class mP extends $C{constructor(e){super(),this.currentSequenceNumber=e}}class Zd{constructor(e){this.persistence=e,this.Ri=new Jd,this.Vi=null}static mi(e){return new Zd(e)}get fi(){if(this.Vi)return this.Vi;throw K(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.fi,r=>{const i=q.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Pl{constructor(e,n){this.persistence=e,this.pi=new Xr(r=>qC(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=iP(this,n)}static mi(e,n){return new Pl(e,n)}Ei(){}di(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return O.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,X.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),O.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ba(e.data.value)),n}br(e,n,r){return O.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ef(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return sI()?8:HC(nt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new gP;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(ri()<=ee.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",ii(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),O.resolve()):(ri()<=ee.DEBUG&&B("QueryEngine","Query:",ii(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(ri()<=ee.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",ii(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):O.resolve())}ys(e,n){if(pg(n))return O.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Sh(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,l);return this.Cs(n,h,o,u.readTime)?this.ys(e,Sh(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,i){return pg(n)||i.isEqual(X.min())?O.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?O.resolve(null):(ri()<=ee.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ii(n)),this.vs(e,o,n,UC(i,po)).next(l=>l))})}Ds(e,n){let r=new Me(x0(e));return n.forEach((i,s)=>{nu(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return ri()<=ee.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",ii(n)),this.ps.getDocumentsMatchingQuery(e,n,ur.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="LocalStore",_P=3e8;class vP{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new Ee(te),this.xs=new Xr(s=>Wd(s),qd),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function wP(t,e,n,r){return new vP(t,e,n,r)}async function tw(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:l}))})})}function EP(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,g=p.keys();let A=O.resolve();return g.forEach(k=>{A=A.next(()=>f.getEntry(u,k)).next(x=>{const D=h.docVersions.get(k);se(D!==null,48541),x.version.compareTo(D)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function nw(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function TP(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.Pi.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(s,f.addedDocuments,p)));let A=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(Ke.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(p,A),function(x,D,I){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=_P?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,A,f)&&l.push(n.Pi.updateTargetData(s,A))});let u=An(),h=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(IP(s,o,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(X.min())){const f=n.Pi.getLastRemoteSnapshotVersion(s).next(p=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Ms=i,s))}function IP(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=An();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):B(tf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{ks:o,qs:i}})}function SP(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Bd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function AP(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new Kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function kh(t,e,n){const r=Y(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Zi(o))throw o;B(tf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Rg(t,e,n){const r=Y(t);let i=X.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=Y(u),g=p.xs.get(f);return g!==void 0?O.resolve(p.Ms.get(g)):p.Pi.getTargetData(h,f)}(r,o,en(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:ne())).next(l=>(CP(r,hR(e),l),{documents:l,Qs:s})))}function CP(t,e,n){let r=t.Os.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class Pg{constructor(){this.activeTargetIds=yR()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class RP{constructor(){this.Mo=new Pg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Pg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="ConnectivityMonitor";class Ng{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){B(kg,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){B(kg,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let va=null;function Nh(){return va===null?va=function(){return 268435456+Math.round(2147483648*Math.random())}():va++,"0x"+va.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="RestConnection",kP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class NP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===El?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Nh(),l=this.zo(e,n.toUriEncodedString());B(pc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:h}=new URL(l),f=Gi(h);return this.Jo(e,l,u,r,f).then(p=>(B(pc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Ui(pc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=kP[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class DP extends NP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Nh();return new Promise((l,u)=>{const h=new i0;h.setWithCredentials(!0),h.listenOnce(s0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ma.NO_ERROR:const p=h.getResponseJson();B(Ye,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ma.TIMEOUT:B(Ye,`RPC '${e}' ${o} timed out`),u(new H(M.DEADLINE_EXCEEDED,"Request time out"));break;case Ma.HTTP_ERROR:const g=h.getStatus();if(B(Ye,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const k=A==null?void 0:A.error;if(k&&k.status&&k.message){const x=function(I){const v=I.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(v)>=0?v:M.UNKNOWN}(k.status);u(new H(x,k.message))}else u(new H(M.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new H(M.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{B(Ye,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);B(Ye,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=Nh(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=l0(),l=a0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");B(Ye,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);this.I_(p);let g=!1,A=!1;const k=new xP({Yo:D=>{A?B(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(g||(B(Ye,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),B(Ye,`RPC '${e}' stream ${i} sending:`,D),p.send(D))},Zo:()=>p.close()}),x=(D,I,v)=>{D.listen(I,C=>{try{v(C)}catch(V){setTimeout(()=>{throw V},0)}})};return x(p,ks.EventType.OPEN,()=>{A||(B(Ye,`RPC '${e}' stream ${i} transport opened.`),k.o_())}),x(p,ks.EventType.CLOSE,()=>{A||(A=!0,B(Ye,`RPC '${e}' stream ${i} transport closed`),k.a_(),this.E_(p))}),x(p,ks.EventType.ERROR,D=>{A||(A=!0,Ui(Ye,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),k.a_(new H(M.UNAVAILABLE,"The operation could not be completed")))}),x(p,ks.EventType.MESSAGE,D=>{var I;if(!A){const v=D.data[0];se(!!v,16349);const C=v,V=(C==null?void 0:C.error)||((I=C[0])==null?void 0:I.error);if(V){B(Ye,`RPC '${e}' stream ${i} received error:`,V);const U=V.status;let z=function(w){const T=Pe[w];if(T!==void 0)return $0(T)}(U),_=V.message;z===void 0&&(z=M.INTERNAL,_="Unknown error status: "+U+" with message "+V.message),A=!0,k.a_(new H(z,_)),p.close()}else B(Ye,`RPC '${e}' stream ${i} received:`,v),k.u_(v)}}),x(l,o0.STAT_EVENT,D=>{D.stat===_h.PROXY?B(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===_h.NOPROXY&&B(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function mc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t){return new MR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="PersistentStream";class iw{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new rw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Sn(n.toString()),Sn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new H(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return B(xg,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(B(xg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VP extends iw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=UR(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?nn(o.readTime):X.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Ph(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Ih(u)?{documents:BR(s,u)}:{query:$R(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=q0(s,o.resumeToken);const h=Ah(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Rl(s,o.snapshotVersion.toTimestamp());const h=Ah(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=WR(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Ph(this.serializer),n.removeTarget=e,this.q_(n)}}class OP extends iw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=zR(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ph(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>jR(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{}class MP extends LP{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new H(M.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,Ch(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(M.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Ch(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(M.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class bP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Sn(n),this.aa=!1):B("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="RemoteStore";class FP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Jr(this)&&(B(qr,"Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.Ea.add(4),await Mo(h),h.Ra.set("Unknown"),h.Ea.delete(4),await au(h)}(this))})}),this.Ra=new bP(r,i)}}async function au(t){if(Jr(t))for(const e of t.da)await e(!0)}async function Mo(t){for(const e of t.da)await e(!1)}function sw(t,e){const n=Y(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),of(n)?sf(n):es(n).O_()&&rf(n,e))}function nf(t,e){const n=Y(t),r=es(n);n.Ia.delete(e),r.O_()&&ow(n,e),n.Ia.size===0&&(r.O_()?r.L_():Jr(n)&&n.Ra.set("Unknown"))}function rf(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}es(t).Y_(e)}function ow(t,e){t.Va.Ue(e),es(t).Z_(e)}function sf(t){t.Va=new DR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),es(t).start(),t.Ra.ua()}function of(t){return Jr(t)&&!es(t).x_()&&t.Ia.size>0}function Jr(t){return Y(t).Ea.size===0}function aw(t){t.Va=void 0}async function UP(t){t.Ra.set("Online")}async function jP(t){t.Ia.forEach((e,n)=>{rf(t,e)})}async function zP(t,e){aw(t),of(t)?(t.Ra.ha(e),sf(t)):t.Ra.set("Unknown")}async function BP(t,e,n){if(t.Ra.set("Online"),e instanceof W0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){B(qr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await kl(t,r)}else if(e instanceof ja?t.Va.Ze(e):e instanceof H0?t.Va.st(e):t.Va.tt(e),!n.isEqual(X.min()))try{const r=await nw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(h);f&&s.Ia.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(Ke.EMPTY_BYTE_STRING,f.snapshotVersion)),ow(s,u);const p=new Kn(f.target,u,h,f.sequenceNumber);rf(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){B(qr,"Failed to raise snapshot:",r),await kl(t,r)}}async function kl(t,e,n){if(!Zi(e))throw e;t.Ea.add(1),await Mo(t),t.Ra.set("Offline"),n||(n=()=>nw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B(qr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await au(t)})}function lw(t,e){return e().catch(n=>kl(t,n,e))}async function lu(t){const e=Y(t),n=fr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Bd;for(;$P(e);)try{const i=await SP(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,HP(e,i)}catch(i){await kl(e,i)}uw(e)&&cw(e)}function $P(t){return Jr(t)&&t.Ta.length<10}function HP(t,e){t.Ta.push(e);const n=fr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function uw(t){return Jr(t)&&!fr(t).x_()&&t.Ta.length>0}function cw(t){fr(t).start()}async function WP(t){fr(t).ra()}async function qP(t){const e=fr(t);for(const n of t.Ta)e.ea(n.mutations)}async function KP(t,e,n){const r=t.Ta.shift(),i=Qd.from(r,e,n);await lw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await lu(t)}async function GP(t,e){e&&fr(t).X_&&await async function(r,i){if(function(o){return kR(o)&&o!==M.ABORTED}(i.code)){const s=r.Ta.shift();fr(r).B_(),await lw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await lu(r)}}(t,e),uw(t)&&cw(t)}async function Dg(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),B(qr,"RemoteStore received new credentials");const r=Jr(n);n.Ea.add(3),await Mo(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await au(n)}async function QP(t,e){const n=Y(t);e?(n.Ea.delete(2),await au(n)):e||(n.Ea.add(2),await Mo(n),n.Ra.set("Unknown"))}function es(t){return t.ma||(t.ma=function(n,r,i){const s=Y(n);return s.sa(),new VP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:UP.bind(null,t),t_:jP.bind(null,t),r_:zP.bind(null,t),H_:BP.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),of(t)?sf(t):t.Ra.set("Unknown")):(await t.ma.stop(),aw(t))})),t.ma}function fr(t){return t.fa||(t.fa=function(n,r,i){const s=Y(n);return s.sa(),new OP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:WP.bind(null,t),r_:GP.bind(null,t),ta:qP.bind(null,t),na:KP.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await lu(t)):(await t.fa.stop(),t.Ta.length>0&&(B(qr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new af(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lf(t,e){if(Sn("AsyncQueue",`${e}: ${t}`),Zi(t))return new H(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{static emptySet(e){return new ki(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Ns(),this.sortedSet=new Ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ki)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ki;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.ga=new Ee(q.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):K(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Hi(e,n,ki.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&tu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XP{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class YP{constructor(){this.queries=Og(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=Og(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new H(M.ABORTED,"Firestore shutting down"))}}function Og(){return new Xr(t=>N0(t),tu)}async function JP(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new XP,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=lf(o,`Initialization of query '${ii(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&uf(n)}async function ZP(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ek(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&uf(n)}function tk(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function uf(t){t.Ca.forEach(e=>{e.next()})}var xh,Lg;(Lg=xh||(xh={})).Ma="default",Lg.Cache="cache";class nk{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Hi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Hi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==xh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.key=e}}class dw{constructor(e){this.key=e}}class rk{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ne(),this.mutatedKeys=ne(),this.eu=x0(e),this.tu=new ki(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Vg,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),A=nu(this.query,p)?p:null,k=!!g&&this.mutatedKeys.has(g.key),x=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let D=!1;g&&A?g.data.isEqual(A.data)?k!==x&&(r.track({type:3,doc:A}),D=!0):this.su(g,A)||(r.track({type:2,doc:A}),D=!0,(u&&this.eu(A,u)>0||h&&this.eu(A,h)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),D=!0):g&&!A&&(r.track({type:1,doc:g}),D=!0,(u||h)&&(l=!0)),D&&(A?(o=o.add(A),s=x?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(A,k){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{Rt:D})}};return x(A)-x(k)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,h=u!==this.Za;return this.Za=u,o.length!==0||h?{snapshot:new Hi(this.query,e.tu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Vg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ne(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new dw(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new hw(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ne();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Hi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const cf="SyncEngine";class ik{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class sk{constructor(e){this.key=e,this.hu=!1}}class ok{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Xr(l=>N0(l),tu),this.Iu=new Map,this.Eu=new Set,this.du=new Ee(q.comparator),this.Au=new Map,this.Ru=new Jd,this.Vu={},this.mu=new Map,this.fu=$i.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function ak(t,e,n=!0){const r=_w(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await fw(r,e,n,!0),i}async function lk(t,e){const n=_w(t);await fw(n,e,!0,!1)}async function fw(t,e,n,r){const i=await AP(t.localStore,en(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await uk(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&sw(t.remoteStore,i),l}async function uk(t,e,n,r,i){t.pu=(p,g,A)=>async function(x,D,I,v){let C=D.view.ru(I);C.Cs&&(C=await Rg(x.localStore,D.query,!1).then(({documents:_})=>D.view.ru(_,C)));const V=v&&v.targetChanges.get(D.targetId),U=v&&v.targetMismatches.get(D.targetId)!=null,z=D.view.applyChanges(C,x.isPrimaryClient,V,U);return bg(x,D.targetId,z.au),z.snapshot}(t,p,g,A);const s=await Rg(t.localStore,e,!0),o=new rk(e,s.Qs),l=o.ru(s.documents),u=Lo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);bg(t,n,h.au);const f=new ik(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function ck(t,e,n){const r=Y(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!tu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await kh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&nf(r.remoteStore,i.targetId),Dh(r,i.targetId)}).catch(Ji)):(Dh(r,i.targetId),await kh(r.localStore,i.targetId,!0))}async function hk(t,e){const n=Y(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),nf(n.remoteStore,r.targetId))}async function dk(t,e,n){const r=vk(t);try{const i=await function(o,l){const u=Y(o),h=pe.now(),f=l.reduce((A,k)=>A.add(k.key),ne());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let k=An(),x=ne();return u.Ns.getEntries(A,f).next(D=>{k=D,k.forEach((I,v)=>{v.isValidDocument()||(x=x.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,k)).next(D=>{p=D;const I=[];for(const v of l){const C=SR(v,p.get(v.key).overlayedDocument);C!=null&&I.push(new Yr(v.key,C,I0(C.value.mapValue),tn.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,I,l)}).next(D=>{g=D;const I=D.applyToLocalDocumentSet(p,x);return u.documentOverlayCache.saveOverlays(A,D.batchId,I)})}).then(()=>({batchId:g.batchId,changes:V0(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Vu[o.currentUser.toKey()];h||(h=new Ee(te)),h=h.insert(l,u),o.Vu[o.currentUser.toKey()]=h}(r,i.batchId,n),await bo(r,i.changes),await lu(r.remoteStore)}catch(i){const s=lf(i,"Failed to persist write");n.reject(s)}}async function pw(t,e){const n=Y(t);try{const r=await TP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?se(o.hu,14607):i.removedDocuments.size>0&&(se(o.hu,42227),o.hu=!1))}),await bo(n,r,e)}catch(r){await Ji(r)}}function Mg(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.Sa)g.va(l)&&(h=!0)}),h&&uf(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function fk(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new Ee(q.comparator);o=o.insert(s,et.newNoDocument(s,X.min()));const l=ne().add(s),u=new su(X.min(),new Map,new Ee(te),o,l);await pw(r,u),r.du=r.du.remove(s),r.Au.delete(e),hf(r)}else await kh(r.localStore,e,!1).then(()=>Dh(r,e,n)).catch(Ji)}async function pk(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await EP(n.localStore,e);gw(n,r,null),mw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bo(n,i)}catch(i){await Ji(i)}}async function mk(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(se(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);gw(r,e,n),mw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await bo(r,i)}catch(i){await Ji(i)}}function mw(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function gw(t,e,n){const r=Y(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Dh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||yw(t,r)})}function yw(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(nf(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),hf(t))}function bg(t,e,n){for(const r of n)r instanceof hw?(t.Ru.addReference(r.key,e),gk(t,r)):r instanceof dw?(B(cf,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||yw(t,r.key)):K(19791,{wu:r})}function gk(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(B(cf,"New document in limbo: "+n),t.Eu.add(r),hf(t))}function hf(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new q(fe.fromString(e)),r=t.fu.next();t.Au.set(r,new sk(n)),t.du=t.du.insert(n,r),sw(t.remoteStore,new Kn(en(Kd(n.path)),r,"TargetPurposeLimboResolution",Yl.ce))}}async function bo(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=ef.As(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,h){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>O.forEach(h,g=>O.forEach(g.Es,A=>f.persistence.referenceDelegate.addReference(p,g.targetId,A)).next(()=>O.forEach(g.ds,A=>f.persistence.referenceDelegate.removeReference(p,g.targetId,A)))))}catch(p){if(!Zi(p))throw p;B(tf,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const A=f.Ms.get(g),k=A.snapshotVersion,x=A.withLastLimboFreeSnapshotVersion(k);f.Ms=f.Ms.insert(g,x)}}}(r.localStore,s))}async function yk(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){B(cf,"User change. New user:",e.toKey());const r=await tw(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new H(M.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bo(n,r.Ls)}}function _k(t,e){const n=Y(t),r=n.Au.get(e);if(r&&r.hu)return ne().add(r.key);{let i=ne();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function _w(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=_k.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=fk.bind(null,e),e.Pu.H_=ek.bind(null,e.eventManager),e.Pu.yu=tk.bind(null,e.eventManager),e}function vk(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mk.bind(null,e),e}class Nl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ou(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return wP(this.persistence,new yP,e.initialUser,this.serializer)}Cu(e){return new ew(Zd.mi,this.serializer)}Du(e){return new RP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nl.provider={build:()=>new Nl};class wk extends Nl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){se(this.persistence.referenceDelegate instanceof Pl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new nP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?ut.withCacheSize(this.cacheSizeBytes):ut.DEFAULT;return new ew(r=>Pl.mi(r,n),this.serializer)}}class Vh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Mg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yk.bind(null,this.syncEngine),await QP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new YP}()}createDatastore(e){const n=ou(e.databaseInfo.databaseId),r=function(s){return new DP(s)}(e.databaseInfo);return function(s,o,l,u){return new MP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new FP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Mg(this.syncEngine,n,0),function(){return Ng.v()?new Ng:new PP}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new ok(i,s,o,l,u,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);B(qr,"RemoteStore shutting down."),s.Ea.add(5),await Mo(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Vh.provider={build:()=>new Vh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Sn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="FirestoreClient";class Tk{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=jd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{B(pr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B(pr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gc(t,e){t.asyncQueue.verifyOperationInProgress(),B(pr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await tw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Fg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ik(t);B(pr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Dg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Dg(e.remoteStore,i)),t._onlineComponents=e}async function Ik(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(pr,"Using user provided OfflineComponentProvider");try{await gc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ui("Error using user provided cache. Falling back to memory cache: "+n),await gc(t,new Nl)}}else B(pr,"Using default OfflineComponentProvider"),await gc(t,new wk(void 0));return t._offlineComponents}async function vw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(pr,"Using user provided OnlineComponentProvider"),await Fg(t,t._uninitializedComponentsProvider._online)):(B(pr,"Using default OnlineComponentProvider"),await Fg(t,new Vh))),t._onlineComponents}function Sk(t){return vw(t).then(e=>e.syncEngine)}async function Ug(t){const e=await vw(t),n=e.eventManager;return n.onListen=ak.bind(null,e.syncEngine),n.onUnlisten=ck.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=lk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=hk.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="firestore.googleapis.com",zg=!0;class Bg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ew,this.ssl=zg}else this.host=e.host,this.ssl=e.ssl??zg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Z0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<eP)throw new H(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}FC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ww(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new PC;switch(r.type){case"firstParty":return new DC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jg.get(n);r&&(B("ComponentProvider","Removing Datastore"),jg.delete(n),r.terminate())}(this),Promise.resolve()}}function Ak(t,e,n,r={}){var h;t=Lr(t,uu);const i=Gi(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&(_v(`https://${l}`),vv("Firestore",!0)),s.host!==Ew&&s.host!==l&&Ui("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Br(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Je.MOCK_USER;else{f=XT(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new H(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Je(g)}t._authCredentials=new kC(new c0(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new cu(this.firestore,e,this._query)}}class Le{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Le(this.firestore,e,this._key)}toJSON(){return{type:Le._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Vo(n,Le._jsonSchema))return new Le(e,r||null,new q(fe.fromString(n.referencePath)))}}Le._jsonSchemaVersion="firestore/documentReference/1.0",Le._jsonSchema={type:Ne("string",Le._jsonSchemaVersion),referencePath:Ne("string")};class or extends cu{constructor(e,n,r){super(e,n,Kd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Le(this.firestore,null,new q(e))}withConverter(e){return new or(this.firestore,e,this._path)}}function $g(t,e,...n){if(t=mt(t),h0("collection","path",e),t instanceof uu){const r=fe.fromString(e,...n);return tg(r),new or(t,null,r)}{if(!(t instanceof Le||t instanceof or))throw new H(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return tg(r),new or(t.firestore,null,r)}}function Tw(t,e,...n){if(t=mt(t),arguments.length===1&&(e=jd.newId()),h0("doc","path",e),t instanceof uu){const r=fe.fromString(e,...n);return eg(r),new Le(t,null,new q(r))}{if(!(t instanceof Le||t instanceof or))throw new H(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(fe.fromString(e,...n));return eg(r),new Le(t.firestore,t instanceof or?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="AsyncQueue";class Wg{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new rw(this,"async_queue_retry"),this._c=()=>{const r=mc();r&&B(Hg,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=mc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=mc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Or;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Zi(e))throw e;B(Hg,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Sn("INTERNAL UNHANDLED ERROR: ",qg(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=af.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&K(47125,{Pc:qg(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function qg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class wo extends uu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Wg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wg(e),this._firestoreClient=void 0,await e}}}function Ck(t,e){const n=typeof t=="object"?t:Iv(),r=typeof t=="string"?t:e||El,i=Nd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=GT("firestore");s&&Ak(i,...s)}return i}function Iw(t){if(t._terminated)throw new H(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Rk(t),t._firestoreClient}function Rk(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,h,f){return new QC(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ww(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Tk(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kt(Ke.fromBase64String(e))}catch(n){throw new H(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new kt(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Vo(e,kt._jsonSchema))return kt.fromBase64String(e.bytes)}}kt._jsonSchemaVersion="firestore/bytes/1.0",kt._jsonSchema={type:Ne("string",kt._jsonSchemaVersion),bytes:Ne("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rn._jsonSchemaVersion}}static fromJSON(e){if(Vo(e,rn._jsonSchema))return new rn(e.latitude,e.longitude)}}rn._jsonSchemaVersion="firestore/geoPoint/1.0",rn._jsonSchema={type:Ne("string",rn._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:sn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Vo(e,sn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new sn(e.vectorValues);throw new H(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}sn._jsonSchemaVersion="firestore/vectorValue/1.0",sn._jsonSchema={type:Ne("string",sn._jsonSchemaVersion),vectorValues:Ne("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=/^__.*__$/;class kk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oo(e,this.data,n,this.fieldTransforms)}}function Aw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ac:t})}}class ff{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ff({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return xl(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Aw(this.Ac)&&Pk.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Nk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ou(e)}Cc(e,n,r,i=!1){return new ff({Ac:e,methodName:n,Dc:r,path:He.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cw(t){const e=t._freezeSettings(),n=ou(t._databaseId);return new Nk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Rw(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);xw("Data must be an object, but it was:",o,r);const l=kw(r,o);let u,h;if(s.merge)u=new jt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=xk(e,p,n);if(!o.contains(g))throw new H(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Vk(f,g)||f.push(g)}u=new jt(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new kk(new Pt(l),u,h)}function Pw(t,e){if(Nw(t=mt(t)))return xw("Unsupported field value:",e,t),kw(t,e);if(t instanceof Sw)return function(r,i){if(!Aw(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Pw(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=mt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return _R(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pe.fromDate(r);return{timestampValue:Rl(i.serializer,s)}}if(r instanceof pe){const s=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rl(i.serializer,s)}}if(r instanceof rn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof kt)return{bytesValue:q0(i.serializer,r._byteString)};if(r instanceof Le){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Yd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof sn)return function(o,l){return{mapValue:{fields:{[w0]:{stringValue:T0},[Tl]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return Gd(l.serializer,h)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${zd(r)}`)}(t,e)}function kw(t,e){const n={};return p0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qr(t,(r,i)=>{const s=Pw(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Nw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof rn||t instanceof kt||t instanceof Le||t instanceof Sw||t instanceof sn)}function xw(t,e,n){if(!Nw(n)||!d0(n)){const r=zd(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function xk(t,e,n){if((e=mt(e))instanceof df)return e._internalPath;if(typeof e=="string")return Dw(t,e);throw xl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Dk=new RegExp("[~\\*/\\[\\]]");function Dw(t,e,n){if(e.search(Dk)>=0)throw xl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new df(...e.split("."))._internalPath}catch{throw xl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(M.INVALID_ARGUMENT,l+t+u)}function Vk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Le(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ok(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ow("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ok extends Vw{data(){return super.data()}}function Ow(t,e){return typeof e=="string"?Dw(t,e):e instanceof df?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mk{convertValue(e,n="none"){switch(dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Tl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ce(o.doubleValue));return new sn(n)}convertGeoPoint(e){return new rn(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(mo(e));default:return null}}convertTimestamp(e){const n=cr(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=fe.fromString(e);se(J0(r),9688,{name:e});const i=new go(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Sn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Ds{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mr extends Vw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new za(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ow("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Mr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Mr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mr._jsonSchema={type:Ne("string",Mr._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class za extends Mr{data(e={}){return super.data(e)}}class Ni{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ds(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new za(this._firestore,this._userDataWriter,r.key,r,new Ds(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new za(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ds(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new za(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Ds(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:bk(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ni._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=jd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function bk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:t})}}Ni._jsonSchemaVersion="firestore/querySnapshot/1.0",Ni._jsonSchema={type:Ne("string",Ni._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class Mw extends Mk{constructor(e){super(),this.firestore=e}convertBytes(e){return new kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Le(this.firestore,null,n)}}function Fk(t,e,n){t=Lr(t,Le);const r=Lr(t.firestore,wo),i=Lw(t.converter,e,n);return bw(r,[Rw(Cw(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,tn.none())])}function Uk(t,e){const n=Lr(t.firestore,wo),r=Tw(t),i=Lw(t.converter,e);return bw(n,[Rw(Cw(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,tn.exists(!1))]).then(()=>r)}function jk(t,...e){var u,h,f;t=mt(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Kg(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Kg(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(h=p.error)==null?void 0:h.bind(p),e[r+2]=(f=p.complete)==null?void 0:f.bind(p)}let s,o,l;if(t instanceof Le)o=Lr(t.firestore,wo),l=Kd(t._key.path),s={next:p=>{e[r]&&e[r](zk(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=Lr(t,cu);o=Lr(p.firestore,wo),l=p._query;const g=new Mw(o);s={next:A=>{e[r]&&e[r](new Ni(o,g,p,A))},error:e[r+1],complete:e[r+2]},Lk(t._query)}return function(g,A,k,x){const D=new Ek(x),I=new nk(A,D,k);return g.asyncQueue.enqueueAndForget(async()=>JP(await Ug(g),I)),()=>{D.Nu(),g.asyncQueue.enqueueAndForget(async()=>ZP(await Ug(g),I))}}(Iw(o),l,i,s)}function bw(t,e){return function(r,i){const s=new Or;return r.asyncQueue.enqueueAndForget(async()=>dk(await Sk(r),i,s)),s.promise}(Iw(t),e)}function zk(t,e,n){const r=n.docs.get(e._key),i=new Mw(t);return new Mr(t,i,e._key,r,new Ds(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Yi=i})(Qi),Fi(new $r("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new wo(new NC(r.getProvider("auth-internal")),new VC(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new go(h.options.projectId,f)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ir(Xm,Ym,e),ir(Xm,Ym,"esm2020")})();/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$k=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Gg=t=>{const e=$k(t);return e.charAt(0).toUpperCase()+e.slice(1)},Fw=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),Hk=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Wk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=ye.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>ye.createElement("svg",{ref:u,...Wk,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Fw("lucide",i),...!s&&!Hk(l)&&{"aria-hidden":"true"},...l},[...o.map(([h,f])=>ye.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=(t,e)=>{const n=ye.forwardRef(({className:r,...i},s)=>ye.createElement(qk,{ref:s,iconNode:e,className:Fw(`lucide-${Bk(Gg(t))}`,`lucide-${t}`,r),...i}));return n.displayName=Gg(t),n};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Gk=Fo("circle-check-big",Kk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],Xk=Fo("log-out",Qk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Qg=Fo("lock",Yk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Uw=Fo("triangle-alert",Jk);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Xg=Fo("user",Zk),e2={apiKey:"AIzaSyD-VNYm8yM4IMKwmY9mblN6e9xKUs",authDomain:"admin-registration-system.firebaseapp.com",projectId:"admin-registration-system",storageBucket:"admin-registration-system.appspot.com",messagingSenderId:"606878229985",appId:"1:606878229985:web:0da8df13b9837cc2f1c8f8",measurementId:"G-WM64J45XXL"},t2=typeof __app_id<"u"?__app_id:"default-app-id",Yg=typeof __initial_auth_token<"u"?__initial_auth_token:null,yc=t=>`artifacts/${t2}/public/data/${t}`;function n2(){const[t,e]=ye.useState(null),[n,r]=ye.useState(null),[i,s]=ye.useState(null),[o,l]=ye.useState(!0);return ye.useEffect(()=>{try{const u=Tv(e2),h=Ck(u),f=CC(u);e(h),r(f);const p=pA(f,async g=>{if(g)s(g);else try{Yg?await hA(f,Yg):await oA(f)}catch(A){console.error("Firebase Auth Error: Failed to sign in.",A),s(null)}l(!1)});return()=>p()}catch(u){console.error("Error initializing Firebase:",u),l(!1)}},[]),{db:t,auth:n,user:i,loading:o}}const r2=["Super Admin","Partner","Center User"],Jg={"Super Admin":"Kore",Partner:"Puck","Center User":"Leda"},i2=({user:t,currentRole:e,setCurrentRole:n,onLoginSuccess:r})=>{const[i,s]=ye.useState("Super Admin"),[o,l]=ye.useState(""),[u,h]=ye.useState(""),[f,p]=ye.useState(""),[g,A]=ye.useState(!1),k={"Super Admin":{user:"admin",pass:"adminpass"},Partner:{user:"partner01",pass:"partnerpass"},"Center User":{user:"center01",pass:"centerpass"}},x=D=>{D.preventDefault(),p(""),A(!0);const I=k[i];setTimeout(()=>{o===I.user&&u===I.pass?(n(i),r(i)):p("Invalid credentials for "+i),A(!1)},1e3)};return F.jsxs("div",{className:"bg-white p-6 md:p-10 rounded-xl shadow-2xl w-full max-w-lg mx-auto",children:[F.jsxs("h2",{className:"text-2xl font-extrabold text-indigo-700 mb-6 flex items-center",children:[F.jsx(Qg,{className:"w-6 h-6 mr-2"})," Role Login"]}),F.jsx("div",{className:"flex justify-between bg-gray-100 p-1 rounded-lg mb-6",children:r2.map(D=>F.jsx("button",{className:`flex-1 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${i===D?"bg-indigo-600 text-white shadow-md":"text-gray-700 hover:bg-gray-200"}`,onClick:()=>s(D),children:D},D))}),F.jsxs("div",{className:"p-4 bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 rounded mb-6",children:[F.jsx(Uw,{className:"inline w-5 h-5 mr-2"}),F.jsx("span",{className:"font-semibold",children:"DEMO WARNING:"})," Credentials and roles are managed client-side and passwords are **unencrypted in the database**. **DO NOT** use this structure in production."]}),F.jsxs("form",{onSubmit:x,className:"space-y-6",children:[F.jsxs("div",{children:[F.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",htmlFor:"username",children:"Username*"}),F.jsx("input",{id:"username",type:"text",value:o,onChange:D=>l(D.target.value),required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150",placeholder:`Enter ${i} username`})]}),F.jsxs("div",{children:[F.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",htmlFor:"password",children:"Password*"}),F.jsx("input",{id:"password",type:"password",value:u,onChange:D=>h(D.target.value),required:!0,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150",placeholder:"Enter password"})]}),f&&F.jsx("p",{className:"text-sm text-red-500 bg-red-50 p-3 rounded-lg border border-red-200",children:f}),F.jsx("button",{type:"submit",disabled:g,className:"w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 disabled:bg-indigo-400",children:g?F.jsxs(F.Fragment,{children:[F.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[F.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),F.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Logging In..."]}):F.jsxs(F.Fragment,{children:[F.jsx(Qg,{className:"w-4 h-4 mr-2"})," Log In Securely"]})})]})]})},s2=({db:t,user:e,currentRole:n,onLogout:r})=>{const[i,s]=ye.useState([]),[o,l]=ye.useState(""),u=n==="Center User";ye.useEffect(()=>{if(!t||!e)return;const g=$g(t,yc("admin_registrations")),A=jk(g,k=>{const x=[];k.forEach(D=>{x.push({id:D.id,...D.data()})}),x.sort((D,I)=>D.centerId>I.centerId?1:-1),s(x),l(x.length>0?"":"No data records found. Add one below.")},k=>{console.error("Error fetching admin data:",k),l(`Error fetching data: ${k.message}. Ensure security rules are configured.`)});return()=>A()},[t,e]);const h=async(g,A,k)=>{if(!u)try{const x=Tw(t,yc("admin_registrations"),g);await Fk(x,{[A]:k},{merge:!0}),l(`Successfully updated ${A} for ID: ${g}`)}catch(x){console.error("Error updating document:",x),l("Error updating document. Check console for details.")}},f=async()=>{if(!u)try{const g={centerId:"NEW"+Math.floor(Math.random()*1e3),name:"New Admin",phone:"1234567890",status:"Pending",createdAt:new Date().toISOString()},A=await Uk($g(t,yc("admin_registrations")),g);l(`New record created with ID: ${A.id}`)}catch(g){console.error("Error adding document:",g),l("Error adding document. Check console for details.")}},p=async g=>{var I,v,C,V,U,z;const A=Jg[n]||"Kore",k={contents:[{parts:[{text:g}]}],generationConfig:{responseModalities:["AUDIO"],speechConfig:{voiceConfig:{prebuiltVoiceConfig:{voiceName:A}}}},model:"gemini-2.5-flash-preview-tts"},D="https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=";try{const _=ae=>{const be=atob(ae),gt=be.length,Te=new Uint8Array(gt);for(let L=0;L<gt;L++)Te[L]=be.charCodeAt(L);return Te.buffer},y=(ae,be)=>{const gt=new ArrayBuffer(44+ae.length*2),Te=new DataView(gt);let L=0;const W=G=>{for(let le=0;le<G.length;le++)Te.setUint8(L++,G.charCodeAt(le))};W("RIFF"),L+=4,Te.setUint32(L,36+ae.length*2,!0),L+=4,W("WAVE"),L+=4,W("fmt "),L+=4,Te.setUint32(L,16,!0),L+=4,Te.setUint16(L,1,!0),L+=2,Te.setUint16(L,1,!0),L+=2,Te.setUint32(L,be,!0),L+=4,Te.setUint32(L,be*2,!0),L+=4,Te.setUint16(L,2,!0),L+=2,Te.setUint16(L,16,!0),L+=2,W("data"),L+=4,Te.setUint32(L,ae.length*2,!0),L+=4;for(let G=0;G<ae.length;G++)Te.setInt16(L,ae[G],!0),L+=2;return new Blob([gt],{type:"audio/wav"})},T=await(await fetch(D,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)})).json(),S=(V=(C=(v=(I=T==null?void 0:T.candidates)==null?void 0:I[0])==null?void 0:v.content)==null?void 0:C.parts)==null?void 0:V[0],P=(U=S==null?void 0:S.inlineData)==null?void 0:U.data,E=(z=S==null?void 0:S.inlineData)==null?void 0:z.mimeType;if(P&&E&&E.startsWith("audio/L16")){const ae=E.match(/rate=(\d+)/),be=ae?parseInt(ae[1],10):16e3,gt=_(P),Te=new Int16Array(gt),L=y(Te,be),W=URL.createObjectURL(L);new Audio(W).play()}else console.error("TTS failed or returned unexpected format:",T)}catch(_){console.error("TTS API call failed:",_)}};return F.jsxs("div",{className:"p-4 md:p-8 bg-white rounded-xl shadow-2xl w-full max-w-7xl mx-auto space-y-8",children:[F.jsxs("div",{className:"flex justify-between items-center mb-6",children:[F.jsxs("h2",{className:"text-3xl font-extrabold text-indigo-700",children:["Admin Data Management (",n,")"]}),F.jsxs("button",{onClick:r,className:"flex items-center text-sm font-semibold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg shadow transition duration-150",children:[F.jsx(Xk,{className:"w-4 h-4 mr-2"})," Logout"]})]}),F.jsxs("div",{className:"bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 rounded-lg",children:[F.jsxs("p",{className:"font-medium",children:[F.jsx("span",{className:"font-bold",children:"TTS Enabled:"})," Click the ",F.jsx(Xg,{className:"inline w-4 h-4 text-indigo-600"})," icon to hear the row data spoken by the **",Jg[n],"** voice."]}),u&&F.jsxs("p",{className:"mt-2 text-sm font-semibold text-yellow-700",children:[F.jsx(Uw,{className:"inline w-4 h-4 mr-1"})," You have **Read-Only** access as a Center User. You cannot add or edit records."]})]}),o&&F.jsx("div",{className:`p-3 rounded-lg border text-sm ${o.startsWith("Error")?"bg-red-50 border-red-300 text-red-600":"bg-green-50 border-green-300 text-green-600"}`,children:o}),F.jsx("div",{className:"overflow-x-auto shadow-lg rounded-lg border border-gray-200",children:F.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[F.jsx("thead",{className:"bg-indigo-50",children:F.jsx("tr",{children:["ID","Center ID","Name","Phone","Status","Actions"].map(g=>F.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:g},g))})}),F.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:i.map(g=>F.jsxs("tr",{className:"hover:bg-gray-50 transition duration-150",children:[F.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:g.id}),F.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:g.centerId}),F.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:F.jsx("input",{type:"text",value:g.name,onChange:A=>h(g.id,"name",A.target.value),readOnly:u,className:`text-sm text-gray-700 w-full p-1 rounded ${u?"border-none bg-transparent":"border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"}`})}),F.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:F.jsx("input",{type:"text",value:g.phone,onChange:A=>h(g.id,"phone",A.target.value),readOnly:u,className:`text-sm text-gray-700 w-full p-1 rounded ${u?"border-none bg-transparent":"border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"}`})}),F.jsxs("td",{className:"px-6 py-4 whitespace-nowrap",children:[F.jsx("span",{className:`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${g.status==="Active"?"bg-green-100 text-green-800":g.status==="Pending"?"bg-yellow-100 text-yellow-800":"bg-red-100 text-red-800"}`,children:g.status}),!u&&F.jsxs("select",{value:g.status,onChange:A=>h(g.id,"status",A.target.value),className:"ml-2 mt-1 block w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-xs py-1",children:[F.jsx("option",{children:"Active"}),F.jsx("option",{children:"Pending"}),F.jsx("option",{children:"Suspended"})]})]}),F.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium",children:F.jsx("button",{onClick:()=>p(`Admin with ID ${g.centerId}, named ${g.name}, has status ${g.status}.`),className:"text-indigo-600 hover:text-indigo-900 transition duration-150 p-2 rounded-full hover:bg-indigo-50",title:"Speak Row Data (TTS)",children:F.jsx(Xg,{className:"w-5 h-5"})})})]},g.id))})]})}),!u&&F.jsxs("button",{onClick:f,className:"mt-6 flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150",children:[F.jsx(Gk,{className:"w-5 h-5 mr-2"})," Add New Registration Record"]}),F.jsxs("div",{className:"mt-8 text-xs text-gray-500 p-3 bg-gray-100 rounded-lg",children:[F.jsx("p",{children:"Current User UID (for Firestore Security Rules):"}),F.jsx("p",{className:"font-mono break-all text-gray-800 mt-1",children:(e==null?void 0:e.uid)||"N/A"})]})]})};function o2(){const{db:t,auth:e,user:n,loading:r}=n2(),[i,s]=ye.useState(null),[o,l]=ye.useState(!1);ye.useEffect(()=>{!r&&n&&!o&&(s(null),l(!1))},[r,n]);const u=p=>{s(p),l(!0)},h=async()=>{if(l(!1),s(null),e)try{await mA(e)}catch(p){console.error("Error signing out:",p)}};if(r)return F.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:F.jsxs("div",{className:"flex flex-col items-center p-6 bg-white rounded-xl shadow-lg",children:[F.jsxs("svg",{className:"animate-spin h-8 w-8 text-indigo-600 mb-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[F.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),F.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),F.jsx("p",{className:"text-gray-700 font-medium",children:"Initializing Firebase..."})]})});const f=o&&i&&n&&t?F.jsx(s2,{db:t,user:n,currentRole:i,onLogout:h}):F.jsx(i2,{user:n,currentRole:i,setCurrentRole:s,onLoginSuccess:u});return F.jsxs("div",{className:"min-h-screen flex flex-col items-center p-4 bg-gray-100",children:[F.jsxs("header",{className:"w-full max-w-7xl text-center mb-10 p-6 bg-white rounded-xl shadow-xl",children:[F.jsx("h1",{className:"text-4xl font-extrabold text-gray-800",children:"Aadhaar Association Digital Literacy System"}),F.jsxs("div",{className:"mt-2 text-sm text-gray-500 flex justify-center space-x-4",children:[F.jsxs("p",{children:["Role: ",F.jsx("span",{className:"font-semibold text-indigo-600",children:i||"NONE"})]}),F.jsx("p",{children:"|"}),F.jsxs("p",{children:["User ID: ",F.jsx("span",{className:"font-semibold text-gray-600",children:n!=null&&n.uid?"Authenticated":"N/A"})]})]})]}),F.jsx("main",{className:"w-full",children:f}),F.jsx("div",{className:"text-xs text-gray-400 mt-10",children:"Syncing data in real-time..."})]})}hv(document.getElementById("root")).render(F.jsx(ye.StrictMode,{children:F.jsx(o2,{})}));
