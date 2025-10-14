(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Sy={exports:{}},zl={},Ay={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo=Symbol.for("react.element"),UE=Symbol.for("react.portal"),jE=Symbol.for("react.fragment"),zE=Symbol.for("react.strict_mode"),BE=Symbol.for("react.profiler"),$E=Symbol.for("react.provider"),qE=Symbol.for("react.context"),HE=Symbol.for("react.forward_ref"),WE=Symbol.for("react.suspense"),GE=Symbol.for("react.memo"),KE=Symbol.for("react.lazy"),bp=Symbol.iterator;function QE(t){return t===null||typeof t!="object"?null:(t=bp&&t[bp]||t["@@iterator"],typeof t=="function"?t:null)}var Cy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ry=Object.assign,Py={};function Zi(t,e,n){this.props=t,this.context=e,this.refs=Py,this.updater=n||Cy}Zi.prototype.isReactComponent={};Zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ky(){}ky.prototype=Zi.prototype;function Xh(t,e,n){this.props=t,this.context=e,this.refs=Py,this.updater=n||Cy}var Yh=Xh.prototype=new ky;Yh.constructor=Xh;Ry(Yh,Zi.prototype);Yh.isPureReactComponent=!0;var Fp=Array.isArray,Ny=Object.prototype.hasOwnProperty,Jh={current:null},xy={key:!0,ref:!0,__self:!0,__source:!0};function Dy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ny.call(e,r)&&!xy.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:xo,type:t,key:s,ref:o,props:i,_owner:Jh.current}}function XE(t,e){return{$$typeof:xo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===xo}function YE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Up=/\/+/g;function Wu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?YE(""+t.key):e.toString(36)}function Pa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xo:case UE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Wu(o,0):r,Fp(i)?(n="",t!=null&&(n=t.replace(Up,"$&/")+"/"),Pa(i,e,n,"",function(h){return h})):i!=null&&(Zh(i)&&(i=XE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Up,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Fp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Wu(s,l);o+=Pa(s,e,n,u,i)}else if(u=QE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Wu(s,l++),o+=Pa(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sa(t,e,n){if(t==null)return t;var r=[],i=0;return Pa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function JE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},ka={transition:null},ZE={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:ka,ReactCurrentOwner:Jh};function Vy(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:sa,forEach:function(t,e,n){sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sa(t,function(){e++}),e},toArray:function(t){return sa(t,function(e){return e})||[]},only:function(t){if(!Zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Zi;ee.Fragment=jE;ee.Profiler=BE;ee.PureComponent=Xh;ee.StrictMode=zE;ee.Suspense=WE;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZE;ee.act=Vy;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ry({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ny.call(e,u)&&!xy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:xo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:qE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$E,_context:t},t.Consumer=t};ee.createElement=Dy;ee.createFactory=function(t){var e=Dy.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:HE,render:t}};ee.isValidElement=Zh;ee.lazy=function(t){return{$$typeof:KE,_payload:{_status:-1,_result:t},_init:JE}};ee.memo=function(t,e){return{$$typeof:GE,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=ka.transition;ka.transition={};try{t()}finally{ka.transition=e}};ee.unstable_act=Vy;ee.useCallback=function(t,e){return ot.current.useCallback(t,e)};ee.useContext=function(t){return ot.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ot.current.useEffect(t,e)};ee.useId=function(){return ot.current.useId()};ee.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ot.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};ee.useRef=function(t){return ot.current.useRef(t)};ee.useState=function(t){return ot.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ot.current.useTransition()};ee.version="18.3.1";Ay.exports=ee;var X=Ay.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e1=X,t1=Symbol.for("react.element"),n1=Symbol.for("react.fragment"),r1=Object.prototype.hasOwnProperty,i1=e1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s1={key:!0,ref:!0,__self:!0,__source:!0};function Oy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)r1.call(e,r)&&!s1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:t1,type:t,key:s,ref:o,props:i,_owner:i1.current}}zl.Fragment=n1;zl.jsx=Oy;zl.jsxs=Oy;Sy.exports=zl;var V=Sy.exports,Ly={exports:{}},wt={},My={exports:{}},by={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,K){var J=B.length;B.push(K);e:for(;0<J;){var me=J-1>>>1,Ie=B[me];if(0<i(Ie,K))B[me]=K,B[J]=Ie,J=me;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],J=B.pop();if(J!==K){B[0]=J;e:for(var me=0,Ie=B.length,Ir=Ie>>>1;me<Ir;){var Tt=2*(me+1)-1,Sr=B[Tt],Dt=Tt+1,kn=B[Dt];if(0>i(Sr,J))Dt<Ie&&0>i(kn,Sr)?(B[me]=kn,B[Dt]=J,me=Dt):(B[me]=Sr,B[Tt]=J,me=Tt);else if(Dt<Ie&&0>i(kn,J))B[me]=kn,B[Dt]=J,me=Dt;else break e}}return K}function i(B,K){var J=B.sortIndex-K.sortIndex;return J!==0?J:B.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,g=3,A=!1,k=!1,x=!1,D=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(B){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=B)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function O(B){if(x=!1,C(B),!k)if(n(u)!==null)k=!0,Pn(U);else{var K=n(h);K!==null&&Tr(O,K.startTime-B)}}function U(B,K){k=!1,x&&(x=!1,E(y),y=-1),A=!0;var J=g;try{for(C(K),p=n(u);p!==null&&(!(p.expirationTime>K)||B&&!S());){var me=p.callback;if(typeof me=="function"){p.callback=null,g=p.priorityLevel;var Ie=me(p.expirationTime<=K);K=t.unstable_now(),typeof Ie=="function"?p.callback=Ie:p===n(u)&&r(u),C(K)}else r(u);p=n(u)}if(p!==null)var Ir=!0;else{var Tt=n(h);Tt!==null&&Tr(O,Tt.startTime-K),Ir=!1}return Ir}finally{p=null,g=J,A=!1}}var j=!1,_=null,y=-1,w=5,I=-1;function S(){return!(t.unstable_now()-I<w)}function P(){if(_!==null){var B=t.unstable_now();I=B;var K=!0;try{K=_(!0,B)}finally{K?T():(j=!1,_=null)}}else j=!1}var T;if(typeof v=="function")T=function(){v(P)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,We=Re.port2;Re.port1.onmessage=P,T=function(){We.postMessage(null)}}else T=function(){D(P,0)};function Pn(B){_=B,j||(j=!0,T())}function Tr(B,K){y=D(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){k||A||(k=!0,Pn(U))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var J=g;g=K;try{return B()}finally{g=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=g;g=B;try{return K()}finally{g=J}},t.unstable_scheduleCallback=function(B,K,J){var me=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?me+J:me):J=me,B){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=J+Ie,B={id:f++,callback:K,priorityLevel:B,startTime:J,expirationTime:Ie,sortIndex:-1},J>me?(B.sortIndex=J,e(h,B),n(u)===null&&B===n(h)&&(x?(E(y),y=-1):x=!0,Tr(O,J-me))):(B.sortIndex=Ie,e(u,B),k||A||(k=!0,Pn(U))),B},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(B){var K=g;return function(){var J=g;g=K;try{return B.apply(this,arguments)}finally{g=J}}}})(by);My.exports=by;var o1=My.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a1=X,vt=o1;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fy=new Set,ro={};function ei(t,e){Ui(t,e),Ui(t+"Capture",e)}function Ui(t,e){for(ro[t]=e,t=0;t<e.length;t++)Fy.add(e[t])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dc=Object.prototype.hasOwnProperty,l1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jp={},zp={};function u1(t){return Dc.call(zp,t)?!0:Dc.call(jp,t)?!1:l1.test(t)?zp[t]=!0:(jp[t]=!0,!1)}function c1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function h1(t,e,n,r){if(e===null||typeof e>"u"||c1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var ed=/[\-:]([a-z])/g;function td(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ed,td);qe[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ed,td);qe[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ed,td);qe[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function nd(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(h1(e,n,i,r)&&(n=null),r||i===null?u1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Cn=a1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oa=Symbol.for("react.element"),mi=Symbol.for("react.portal"),gi=Symbol.for("react.fragment"),rd=Symbol.for("react.strict_mode"),Vc=Symbol.for("react.profiler"),Uy=Symbol.for("react.provider"),jy=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),Oc=Symbol.for("react.suspense"),Lc=Symbol.for("react.suspense_list"),sd=Symbol.for("react.memo"),Fn=Symbol.for("react.lazy"),zy=Symbol.for("react.offscreen"),Bp=Symbol.iterator;function As(t){return t===null||typeof t!="object"?null:(t=Bp&&t[Bp]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Gu;function Vs(t){if(Gu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gu=e&&e[1]||""}return`
`+Gu+t}var Ku=!1;function Qu(t,e){if(!t||Ku)return"";Ku=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ku=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vs(t):""}function d1(t){switch(t.tag){case 5:return Vs(t.type);case 16:return Vs("Lazy");case 13:return Vs("Suspense");case 19:return Vs("SuspenseList");case 0:case 2:case 15:return t=Qu(t.type,!1),t;case 11:return t=Qu(t.type.render,!1),t;case 1:return t=Qu(t.type,!0),t;default:return""}}function Mc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gi:return"Fragment";case mi:return"Portal";case Vc:return"Profiler";case rd:return"StrictMode";case Oc:return"Suspense";case Lc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jy:return(t.displayName||"Context")+".Consumer";case Uy:return(t._context.displayName||"Context")+".Provider";case id:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sd:return e=t.displayName||null,e!==null?e:Mc(t.type)||"Memo";case Fn:e=t._payload,t=t._init;try{return Mc(t(e))}catch{}}return null}function f1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mc(e);case 8:return e===rd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function By(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function p1(t){var e=By(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function aa(t){t._valueTracker||(t._valueTracker=p1(t))}function $y(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=By(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bc(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $p(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qy(t,e){e=e.checked,e!=null&&nd(t,"checked",e,!1)}function Fc(t,e){qy(t,e);var n=cr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uc(t,e.type,cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function qp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uc(t,e,n){(e!=="number"||Xa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Os=Array.isArray;function Pi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+cr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function jc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Os(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:cr(n)}}function Hy(t,e){var n=cr(e.value),r=cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var la,Gy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(la=la||document.createElement("div"),la.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=la.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function io(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},m1=["Webkit","ms","Moz","O"];Object.keys(zs).forEach(function(t){m1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zs[e]=zs[t]})});function Ky(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zs.hasOwnProperty(t)&&zs[t]?(""+e).trim():e+"px"}function Qy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ky(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var g1=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bc(t,e){if(e){if(g1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function $c(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qc=null;function od(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hc=null,ki=null,Ni=null;function Gp(t){if(t=Oo(t)){if(typeof Hc!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Wl(e),Hc(t.stateNode,t.type,e))}}function Xy(t){ki?Ni?Ni.push(t):Ni=[t]:ki=t}function Yy(){if(ki){var t=ki,e=Ni;if(Ni=ki=null,Gp(t),e)for(t=0;t<e.length;t++)Gp(e[t])}}function Jy(t,e){return t(e)}function Zy(){}var Xu=!1;function e_(t,e,n){if(Xu)return t(e,n);Xu=!0;try{return Jy(t,e,n)}finally{Xu=!1,(ki!==null||Ni!==null)&&(Zy(),Yy())}}function so(t,e){var n=t.stateNode;if(n===null)return null;var r=Wl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var Wc=!1;if(yn)try{var Cs={};Object.defineProperty(Cs,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",Cs,Cs),window.removeEventListener("test",Cs,Cs)}catch{Wc=!1}function y1(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Bs=!1,Ya=null,Ja=!1,Gc=null,_1={onError:function(t){Bs=!0,Ya=t}};function v1(t,e,n,r,i,s,o,l,u){Bs=!1,Ya=null,y1.apply(_1,arguments)}function w1(t,e,n,r,i,s,o,l,u){if(v1.apply(this,arguments),Bs){if(Bs){var h=Ya;Bs=!1,Ya=null}else throw Error(b(198));Ja||(Ja=!0,Gc=h)}}function ti(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function t_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kp(t){if(ti(t)!==t)throw Error(b(188))}function E1(t){var e=t.alternate;if(!e){if(e=ti(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Kp(i),t;if(s===r)return Kp(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function n_(t){return t=E1(t),t!==null?r_(t):null}function r_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=r_(t);if(e!==null)return e;t=t.sibling}return null}var i_=vt.unstable_scheduleCallback,Qp=vt.unstable_cancelCallback,T1=vt.unstable_shouldYield,I1=vt.unstable_requestPaint,Ae=vt.unstable_now,S1=vt.unstable_getCurrentPriorityLevel,ad=vt.unstable_ImmediatePriority,s_=vt.unstable_UserBlockingPriority,Za=vt.unstable_NormalPriority,A1=vt.unstable_LowPriority,o_=vt.unstable_IdlePriority,Bl=null,Yt=null;function C1(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Bl,t,void 0,(t.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:k1,R1=Math.log,P1=Math.LN2;function k1(t){return t>>>=0,t===0?32:31-(R1(t)/P1|0)|0}var ua=64,ca=4194304;function Ls(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function el(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ls(l):(s&=o,s!==0&&(r=Ls(s)))}else o=n&~i,o!==0?r=Ls(o):s!==0&&(r=Ls(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-jt(e),i=1<<n,r|=t[n],e&=~i;return r}function N1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=N1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Kc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function a_(){var t=ua;return ua<<=1,!(ua&4194240)&&(ua=64),t}function Yu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Do(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jt(e),t[e]=n}function D1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-jt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ld(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-jt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function l_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var u_,ud,c_,h_,d_,Qc=!1,ha=[],Xn=null,Yn=null,Jn=null,oo=new Map,ao=new Map,jn=[],V1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xp(t,e){switch(t){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Jn=null;break;case"pointerover":case"pointerout":oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(e.pointerId)}}function Rs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Oo(e),e!==null&&ud(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function O1(t,e,n,r,i){switch(e){case"focusin":return Xn=Rs(Xn,t,e,n,r,i),!0;case"dragenter":return Yn=Rs(Yn,t,e,n,r,i),!0;case"mouseover":return Jn=Rs(Jn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return oo.set(s,Rs(oo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ao.set(s,Rs(ao.get(s)||null,t,e,n,r,i)),!0}return!1}function f_(t){var e=Vr(t.target);if(e!==null){var n=ti(e);if(n!==null){if(e=n.tag,e===13){if(e=t_(n),e!==null){t.blockedOn=e,d_(t.priority,function(){c_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Na(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qc=r,n.target.dispatchEvent(r),qc=null}else return e=Oo(n),e!==null&&ud(e),t.blockedOn=n,!1;e.shift()}return!0}function Yp(t,e,n){Na(t)&&n.delete(e)}function L1(){Qc=!1,Xn!==null&&Na(Xn)&&(Xn=null),Yn!==null&&Na(Yn)&&(Yn=null),Jn!==null&&Na(Jn)&&(Jn=null),oo.forEach(Yp),ao.forEach(Yp)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,Qc||(Qc=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,L1)))}function lo(t){function e(i){return Ps(i,t)}if(0<ha.length){Ps(ha[0],t);for(var n=1;n<ha.length;n++){var r=ha[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Xn!==null&&Ps(Xn,t),Yn!==null&&Ps(Yn,t),Jn!==null&&Ps(Jn,t),oo.forEach(e),ao.forEach(e),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)f_(n),n.blockedOn===null&&jn.shift()}var xi=Cn.ReactCurrentBatchConfig,tl=!0;function M1(t,e,n,r){var i=le,s=xi.transition;xi.transition=null;try{le=1,cd(t,e,n,r)}finally{le=i,xi.transition=s}}function b1(t,e,n,r){var i=le,s=xi.transition;xi.transition=null;try{le=4,cd(t,e,n,r)}finally{le=i,xi.transition=s}}function cd(t,e,n,r){if(tl){var i=Xc(t,e,n,r);if(i===null)ac(t,e,r,nl,n),Xp(t,r);else if(O1(i,t,e,n,r))r.stopPropagation();else if(Xp(t,r),e&4&&-1<V1.indexOf(t)){for(;i!==null;){var s=Oo(i);if(s!==null&&u_(s),s=Xc(t,e,n,r),s===null&&ac(t,e,r,nl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ac(t,e,r,null,n)}}var nl=null;function Xc(t,e,n,r){if(nl=null,t=od(r),t=Vr(t),t!==null)if(e=ti(t),e===null)t=null;else if(n=e.tag,n===13){if(t=t_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nl=t,null}function p_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S1()){case ad:return 1;case s_:return 4;case Za:case A1:return 16;case o_:return 536870912;default:return 16}default:return 16}}var Wn=null,hd=null,xa=null;function m_(){if(xa)return xa;var t,e=hd,n=e.length,r,i="value"in Wn?Wn.value:Wn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return xa=i.slice(t,1<r?1-r:void 0)}function Da(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function da(){return!0}function Jp(){return!1}function Et(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?da:Jp,this.isPropagationStopped=Jp,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),e}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dd=Et(es),Vo=ve({},es,{view:0,detail:0}),F1=Et(Vo),Ju,Zu,ks,$l=ve({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ks&&(ks&&t.type==="mousemove"?(Ju=t.screenX-ks.screenX,Zu=t.screenY-ks.screenY):Zu=Ju=0,ks=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:Zu}}),Zp=Et($l),U1=ve({},$l,{dataTransfer:0}),j1=Et(U1),z1=ve({},Vo,{relatedTarget:0}),ec=Et(z1),B1=ve({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),$1=Et(B1),q1=ve({},es,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),H1=Et(q1),W1=ve({},es,{data:0}),em=Et(W1),G1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Q1[t])?!!e[t]:!1}function fd(){return X1}var Y1=ve({},Vo,{key:function(t){if(t.key){var e=G1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Da(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?K1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fd,charCode:function(t){return t.type==="keypress"?Da(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Da(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),J1=Et(Y1),Z1=ve({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tm=Et(Z1),eT=ve({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fd}),tT=Et(eT),nT=ve({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),rT=Et(nT),iT=ve({},$l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sT=Et(iT),oT=[9,13,27,32],pd=yn&&"CompositionEvent"in window,$s=null;yn&&"documentMode"in document&&($s=document.documentMode);var aT=yn&&"TextEvent"in window&&!$s,g_=yn&&(!pd||$s&&8<$s&&11>=$s),nm=String.fromCharCode(32),rm=!1;function y_(t,e){switch(t){case"keyup":return oT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function __(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yi=!1;function lT(t,e){switch(t){case"compositionend":return __(e);case"keypress":return e.which!==32?null:(rm=!0,nm);case"textInput":return t=e.data,t===nm&&rm?null:t;default:return null}}function uT(t,e){if(yi)return t==="compositionend"||!pd&&y_(t,e)?(t=m_(),xa=hd=Wn=null,yi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return g_&&e.locale!=="ko"?null:e.data;default:return null}}var cT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function im(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cT[t.type]:e==="textarea"}function v_(t,e,n,r){Xy(r),e=rl(e,"onChange"),0<e.length&&(n=new dd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qs=null,uo=null;function hT(t){N_(t,0)}function ql(t){var e=wi(t);if($y(e))return t}function dT(t,e){if(t==="change")return e}var w_=!1;if(yn){var tc;if(yn){var nc="oninput"in document;if(!nc){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),nc=typeof sm.oninput=="function"}tc=nc}else tc=!1;w_=tc&&(!document.documentMode||9<document.documentMode)}function om(){qs&&(qs.detachEvent("onpropertychange",E_),uo=qs=null)}function E_(t){if(t.propertyName==="value"&&ql(uo)){var e=[];v_(e,uo,t,od(t)),e_(hT,e)}}function fT(t,e,n){t==="focusin"?(om(),qs=e,uo=n,qs.attachEvent("onpropertychange",E_)):t==="focusout"&&om()}function pT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ql(uo)}function mT(t,e){if(t==="click")return ql(e)}function gT(t,e){if(t==="input"||t==="change")return ql(e)}function yT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $t=typeof Object.is=="function"?Object.is:yT;function co(t,e){if($t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dc.call(e,i)||!$t(t[i],e[i]))return!1}return!0}function am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lm(t,e){var n=am(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=am(n)}}function T_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?T_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function I_(){for(var t=window,e=Xa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xa(t.document)}return e}function md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _T(t){var e=I_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&T_(n.ownerDocument.documentElement,n)){if(r!==null&&md(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=lm(n,s);var o=lm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vT=yn&&"documentMode"in document&&11>=document.documentMode,_i=null,Yc=null,Hs=null,Jc=!1;function um(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jc||_i==null||_i!==Xa(r)||(r=_i,"selectionStart"in r&&md(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hs&&co(Hs,r)||(Hs=r,r=rl(Yc,"onSelect"),0<r.length&&(e=new dd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_i)))}function fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vi={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},rc={},S_={};yn&&(S_=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function Hl(t){if(rc[t])return rc[t];if(!vi[t])return t;var e=vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in S_)return rc[t]=e[n];return t}var A_=Hl("animationend"),C_=Hl("animationiteration"),R_=Hl("animationstart"),P_=Hl("transitionend"),k_=new Map,cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){k_.set(t,e),ei(e,[t])}for(var ic=0;ic<cm.length;ic++){var sc=cm[ic],wT=sc.toLowerCase(),ET=sc[0].toUpperCase()+sc.slice(1);vr(wT,"on"+ET)}vr(A_,"onAnimationEnd");vr(C_,"onAnimationIteration");vr(R_,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(P_,"onTransitionEnd");Ui("onMouseEnter",["mouseout","mouseover"]);Ui("onMouseLeave",["mouseout","mouseover"]);Ui("onPointerEnter",["pointerout","pointerover"]);Ui("onPointerLeave",["pointerout","pointerover"]);ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ms));function hm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,w1(r,e,void 0,t),t.currentTarget=null}function N_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;hm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;hm(i,l,h),s=u}}}if(Ja)throw t=Gc,Ja=!1,Gc=null,t}function fe(t,e){var n=e[rh];n===void 0&&(n=e[rh]=new Set);var r=t+"__bubble";n.has(r)||(x_(e,t,2,!1),n.add(r))}function oc(t,e,n){var r=0;e&&(r|=4),x_(n,t,r,e)}var pa="_reactListening"+Math.random().toString(36).slice(2);function ho(t){if(!t[pa]){t[pa]=!0,Fy.forEach(function(n){n!=="selectionchange"&&(TT.has(n)||oc(n,!1,t),oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pa]||(e[pa]=!0,oc("selectionchange",!1,e))}}function x_(t,e,n,r){switch(p_(e)){case 1:var i=M1;break;case 4:i=b1;break;default:i=cd}n=i.bind(null,e,n,t),i=void 0,!Wc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ac(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Vr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}e_(function(){var h=s,f=od(n),p=[];e:{var g=k_.get(t);if(g!==void 0){var A=dd,k=t;switch(t){case"keypress":if(Da(n)===0)break e;case"keydown":case"keyup":A=J1;break;case"focusin":k="focus",A=ec;break;case"focusout":k="blur",A=ec;break;case"beforeblur":case"afterblur":A=ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=j1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=tT;break;case A_:case C_:case R_:A=$1;break;case P_:A=rT;break;case"scroll":A=F1;break;case"wheel":A=sT;break;case"copy":case"cut":case"paste":A=H1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=tm}var x=(e&4)!==0,D=!x&&t==="scroll",E=x?g!==null?g+"Capture":null:g;x=[];for(var v=h,C;v!==null;){C=v;var O=C.stateNode;if(C.tag===5&&O!==null&&(C=O,E!==null&&(O=so(v,E),O!=null&&x.push(fo(v,O,C)))),D)break;v=v.return}0<x.length&&(g=new A(g,k,null,n,f),p.push({event:g,listeners:x}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==qc&&(k=n.relatedTarget||n.fromElement)&&(Vr(k)||k[_n]))break e;if((A||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,A?(k=n.relatedTarget||n.toElement,A=h,k=k?Vr(k):null,k!==null&&(D=ti(k),k!==D||k.tag!==5&&k.tag!==6)&&(k=null)):(A=null,k=h),A!==k)){if(x=Zp,O="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=tm,O="onPointerLeave",E="onPointerEnter",v="pointer"),D=A==null?g:wi(A),C=k==null?g:wi(k),g=new x(O,v+"leave",A,n,f),g.target=D,g.relatedTarget=C,O=null,Vr(f)===h&&(x=new x(E,v+"enter",k,n,f),x.target=C,x.relatedTarget=D,O=x),D=O,A&&k)t:{for(x=A,E=k,v=0,C=x;C;C=ci(C))v++;for(C=0,O=E;O;O=ci(O))C++;for(;0<v-C;)x=ci(x),v--;for(;0<C-v;)E=ci(E),C--;for(;v--;){if(x===E||E!==null&&x===E.alternate)break t;x=ci(x),E=ci(E)}x=null}else x=null;A!==null&&dm(p,g,A,x,!1),k!==null&&D!==null&&dm(p,D,k,x,!0)}}e:{if(g=h?wi(h):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var U=dT;else if(im(g))if(w_)U=gT;else{U=pT;var j=fT}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(U=mT);if(U&&(U=U(t,h))){v_(p,U,n,f);break e}j&&j(t,g,h),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Uc(g,"number",g.value)}switch(j=h?wi(h):window,t){case"focusin":(im(j)||j.contentEditable==="true")&&(_i=j,Yc=h,Hs=null);break;case"focusout":Hs=Yc=_i=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,um(p,n,f);break;case"selectionchange":if(vT)break;case"keydown":case"keyup":um(p,n,f)}var _;if(pd)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else yi?y_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(g_&&n.locale!=="ko"&&(yi||y!=="onCompositionStart"?y==="onCompositionEnd"&&yi&&(_=m_()):(Wn=f,hd="value"in Wn?Wn.value:Wn.textContent,yi=!0)),j=rl(h,y),0<j.length&&(y=new em(y,t,null,n,f),p.push({event:y,listeners:j}),_?y.data=_:(_=__(n),_!==null&&(y.data=_)))),(_=aT?lT(t,n):uT(t,n))&&(h=rl(h,"onBeforeInput"),0<h.length&&(f=new em("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=_))}N_(p,e)})}function fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=so(t,n),s!=null&&r.unshift(fo(t,s,i)),s=so(t,e),s!=null&&r.push(fo(t,s,i))),t=t.return}return r}function ci(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dm(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=so(n,s),u!=null&&o.unshift(fo(n,u,l))):i||(u=so(n,s),u!=null&&o.push(fo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var IT=/\r\n?/g,ST=/\u0000|\uFFFD/g;function fm(t){return(typeof t=="string"?t:""+t).replace(IT,`
`).replace(ST,"")}function ma(t,e,n){if(e=fm(e),fm(t)!==e&&n)throw Error(b(425))}function il(){}var Zc=null,eh=null;function th(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nh=typeof setTimeout=="function"?setTimeout:void 0,AT=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,CT=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(t){return pm.resolve(null).then(t).catch(RT)}:nh;function RT(t){setTimeout(function(){throw t})}function lc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),lo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);lo(e)}function Zn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function mm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ts=Math.random().toString(36).slice(2),Xt="__reactFiber$"+ts,po="__reactProps$"+ts,_n="__reactContainer$"+ts,rh="__reactEvents$"+ts,PT="__reactListeners$"+ts,kT="__reactHandles$"+ts;function Vr(t){var e=t[Xt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_n]||n[Xt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=mm(t);t!==null;){if(n=t[Xt])return n;t=mm(t)}return e}t=n,n=t.parentNode}return null}function Oo(t){return t=t[Xt]||t[_n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Wl(t){return t[po]||null}var ih=[],Ei=-1;function wr(t){return{current:t}}function pe(t){0>Ei||(t.current=ih[Ei],ih[Ei]=null,Ei--)}function he(t,e){Ei++,ih[Ei]=t.current,t.current=e}var hr={},et=wr(hr),ht=wr(!1),Br=hr;function ji(t,e){var n=t.type.contextTypes;if(!n)return hr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function dt(t){return t=t.childContextTypes,t!=null}function sl(){pe(ht),pe(et)}function gm(t,e,n){if(et.current!==hr)throw Error(b(168));he(et,e),he(ht,n)}function D_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,f1(t)||"Unknown",i));return ve({},n,r)}function ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Br=et.current,he(et,t),he(ht,ht.current),!0}function ym(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=D_(t,e,Br),r.__reactInternalMemoizedMergedChildContext=t,pe(ht),pe(et),he(et,t)):pe(ht),he(ht,n)}var un=null,Gl=!1,uc=!1;function V_(t){un===null?un=[t]:un.push(t)}function NT(t){Gl=!0,V_(t)}function Er(){if(!uc&&un!==null){uc=!0;var t=0,e=le;try{var n=un;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}un=null,Gl=!1}catch(i){throw un!==null&&(un=un.slice(t+1)),i_(ad,Er),i}finally{le=e,uc=!1}}return null}var Ti=[],Ii=0,al=null,ll=0,It=[],St=0,$r=null,cn=1,hn="";function Nr(t,e){Ti[Ii++]=ll,Ti[Ii++]=al,al=t,ll=e}function O_(t,e,n){It[St++]=cn,It[St++]=hn,It[St++]=$r,$r=t;var r=cn;t=hn;var i=32-jt(r)-1;r&=~(1<<i),n+=1;var s=32-jt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,cn=1<<32-jt(e)+i|n<<i|r,hn=s+t}else cn=1<<s|n<<i|r,hn=t}function gd(t){t.return!==null&&(Nr(t,1),O_(t,1,0))}function yd(t){for(;t===al;)al=Ti[--Ii],Ti[Ii]=null,ll=Ti[--Ii],Ti[Ii]=null;for(;t===$r;)$r=It[--St],It[St]=null,hn=It[--St],It[St]=null,cn=It[--St],It[St]=null}var _t=null,yt=null,ge=!1,Mt=null;function L_(t,e){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _m(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_t=t,yt=Zn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_t=t,yt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:cn,overflow:hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_t=t,yt=null,!0):!1;default:return!1}}function sh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function oh(t){if(ge){var e=yt;if(e){var n=e;if(!_m(t,e)){if(sh(t))throw Error(b(418));e=Zn(n.nextSibling);var r=_t;e&&_m(t,e)?L_(r,n):(t.flags=t.flags&-4097|2,ge=!1,_t=t)}}else{if(sh(t))throw Error(b(418));t.flags=t.flags&-4097|2,ge=!1,_t=t}}}function vm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_t=t}function ga(t){if(t!==_t)return!1;if(!ge)return vm(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!th(t.type,t.memoizedProps)),e&&(e=yt)){if(sh(t))throw M_(),Error(b(418));for(;e;)L_(t,e),e=Zn(e.nextSibling)}if(vm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yt=Zn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yt=null}}else yt=_t?Zn(t.stateNode.nextSibling):null;return!0}function M_(){for(var t=yt;t;)t=Zn(t.nextSibling)}function zi(){yt=_t=null,ge=!1}function _d(t){Mt===null?Mt=[t]:Mt.push(t)}var xT=Cn.ReactCurrentBatchConfig;function Ns(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function ya(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wm(t){var e=t._init;return e(t._payload)}function b_(t){function e(E,v){if(t){var C=E.deletions;C===null?(E.deletions=[v],E.flags|=16):C.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function i(E,v){return E=rr(E,v),E.index=0,E.sibling=null,E}function s(E,v,C){return E.index=C,t?(C=E.alternate,C!==null?(C=C.index,C<v?(E.flags|=2,v):C):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function l(E,v,C,O){return v===null||v.tag!==6?(v=gc(C,E.mode,O),v.return=E,v):(v=i(v,C),v.return=E,v)}function u(E,v,C,O){var U=C.type;return U===gi?f(E,v,C.props.children,O,C.key):v!==null&&(v.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Fn&&wm(U)===v.type)?(O=i(v,C.props),O.ref=Ns(E,v,C),O.return=E,O):(O=Ua(C.type,C.key,C.props,null,E.mode,O),O.ref=Ns(E,v,C),O.return=E,O)}function h(E,v,C,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==C.containerInfo||v.stateNode.implementation!==C.implementation?(v=yc(C,E.mode,O),v.return=E,v):(v=i(v,C.children||[]),v.return=E,v)}function f(E,v,C,O,U){return v===null||v.tag!==7?(v=Ur(C,E.mode,O,U),v.return=E,v):(v=i(v,C),v.return=E,v)}function p(E,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return v=gc(""+v,E.mode,C),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case oa:return C=Ua(v.type,v.key,v.props,null,E.mode,C),C.ref=Ns(E,null,v),C.return=E,C;case mi:return v=yc(v,E.mode,C),v.return=E,v;case Fn:var O=v._init;return p(E,O(v._payload),C)}if(Os(v)||As(v))return v=Ur(v,E.mode,C,null),v.return=E,v;ya(E,v)}return null}function g(E,v,C,O){var U=v!==null?v.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return U!==null?null:l(E,v,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case oa:return C.key===U?u(E,v,C,O):null;case mi:return C.key===U?h(E,v,C,O):null;case Fn:return U=C._init,g(E,v,U(C._payload),O)}if(Os(C)||As(C))return U!==null?null:f(E,v,C,O,null);ya(E,C)}return null}function A(E,v,C,O,U){if(typeof O=="string"&&O!==""||typeof O=="number")return E=E.get(C)||null,l(v,E,""+O,U);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case oa:return E=E.get(O.key===null?C:O.key)||null,u(v,E,O,U);case mi:return E=E.get(O.key===null?C:O.key)||null,h(v,E,O,U);case Fn:var j=O._init;return A(E,v,C,j(O._payload),U)}if(Os(O)||As(O))return E=E.get(C)||null,f(v,E,O,U,null);ya(v,O)}return null}function k(E,v,C,O){for(var U=null,j=null,_=v,y=v=0,w=null;_!==null&&y<C.length;y++){_.index>y?(w=_,_=null):w=_.sibling;var I=g(E,_,C[y],O);if(I===null){_===null&&(_=w);break}t&&_&&I.alternate===null&&e(E,_),v=s(I,v,y),j===null?U=I:j.sibling=I,j=I,_=w}if(y===C.length)return n(E,_),ge&&Nr(E,y),U;if(_===null){for(;y<C.length;y++)_=p(E,C[y],O),_!==null&&(v=s(_,v,y),j===null?U=_:j.sibling=_,j=_);return ge&&Nr(E,y),U}for(_=r(E,_);y<C.length;y++)w=A(_,E,y,C[y],O),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?y:w.key),v=s(w,v,y),j===null?U=w:j.sibling=w,j=w);return t&&_.forEach(function(S){return e(E,S)}),ge&&Nr(E,y),U}function x(E,v,C,O){var U=As(C);if(typeof U!="function")throw Error(b(150));if(C=U.call(C),C==null)throw Error(b(151));for(var j=U=null,_=v,y=v=0,w=null,I=C.next();_!==null&&!I.done;y++,I=C.next()){_.index>y?(w=_,_=null):w=_.sibling;var S=g(E,_,I.value,O);if(S===null){_===null&&(_=w);break}t&&_&&S.alternate===null&&e(E,_),v=s(S,v,y),j===null?U=S:j.sibling=S,j=S,_=w}if(I.done)return n(E,_),ge&&Nr(E,y),U;if(_===null){for(;!I.done;y++,I=C.next())I=p(E,I.value,O),I!==null&&(v=s(I,v,y),j===null?U=I:j.sibling=I,j=I);return ge&&Nr(E,y),U}for(_=r(E,_);!I.done;y++,I=C.next())I=A(_,E,y,I.value,O),I!==null&&(t&&I.alternate!==null&&_.delete(I.key===null?y:I.key),v=s(I,v,y),j===null?U=I:j.sibling=I,j=I);return t&&_.forEach(function(P){return e(E,P)}),ge&&Nr(E,y),U}function D(E,v,C,O){if(typeof C=="object"&&C!==null&&C.type===gi&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case oa:e:{for(var U=C.key,j=v;j!==null;){if(j.key===U){if(U=C.type,U===gi){if(j.tag===7){n(E,j.sibling),v=i(j,C.props.children),v.return=E,E=v;break e}}else if(j.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Fn&&wm(U)===j.type){n(E,j.sibling),v=i(j,C.props),v.ref=Ns(E,j,C),v.return=E,E=v;break e}n(E,j);break}else e(E,j);j=j.sibling}C.type===gi?(v=Ur(C.props.children,E.mode,O,C.key),v.return=E,E=v):(O=Ua(C.type,C.key,C.props,null,E.mode,O),O.ref=Ns(E,v,C),O.return=E,E=O)}return o(E);case mi:e:{for(j=C.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===C.containerInfo&&v.stateNode.implementation===C.implementation){n(E,v.sibling),v=i(v,C.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=yc(C,E.mode,O),v.return=E,E=v}return o(E);case Fn:return j=C._init,D(E,v,j(C._payload),O)}if(Os(C))return k(E,v,C,O);if(As(C))return x(E,v,C,O);ya(E,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,v!==null&&v.tag===6?(n(E,v.sibling),v=i(v,C),v.return=E,E=v):(n(E,v),v=gc(C,E.mode,O),v.return=E,E=v),o(E)):n(E,v)}return D}var Bi=b_(!0),F_=b_(!1),ul=wr(null),cl=null,Si=null,vd=null;function wd(){vd=Si=cl=null}function Ed(t){var e=ul.current;pe(ul),t._currentValue=e}function ah(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Di(t,e){cl=t,vd=Si=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ct=!0),t.firstContext=null)}function kt(t){var e=t._currentValue;if(vd!==t)if(t={context:t,memoizedValue:e,next:null},Si===null){if(cl===null)throw Error(b(308));Si=t,cl.dependencies={lanes:0,firstContext:t}}else Si=Si.next=t;return e}var Or=null;function Td(t){Or===null?Or=[t]:Or.push(t)}function U_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Td(e)):(n.next=i.next,i.next=n),e.interleaved=n,vn(t,r)}function vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Un=!1;function Id(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,vn(t,n)}return i=r.interleaved,i===null?(e.next=e,Td(r)):(e.next=i.next,i.next=e),r.interleaved=e,vn(t,n)}function Va(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ld(t,n)}}function Em(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hl(t,e,n,r){var i=t.updateQueue;Un=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,A=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,x=l;switch(g=e,A=n,x.tag){case 1:if(k=x.payload,typeof k=="function"){p=k.call(A,p,g);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,g=typeof k=="function"?k.call(A,p,g):k,g==null)break e;p=ve({},p,g);break e;case 2:Un=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=p):f=f.next=A,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hr|=o,t.lanes=o,t.memoizedState=p}}function Tm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var Lo={},Jt=wr(Lo),mo=wr(Lo),go=wr(Lo);function Lr(t){if(t===Lo)throw Error(b(174));return t}function Sd(t,e){switch(he(go,e),he(mo,t),he(Jt,Lo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zc(e,t)}pe(Jt),he(Jt,e)}function $i(){pe(Jt),pe(mo),pe(go)}function z_(t){Lr(go.current);var e=Lr(Jt.current),n=zc(e,t.type);e!==n&&(he(mo,t),he(Jt,n))}function Ad(t){mo.current===t&&(pe(Jt),pe(mo))}var ye=wr(0);function dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cc=[];function Cd(){for(var t=0;t<cc.length;t++)cc[t]._workInProgressVersionPrimary=null;cc.length=0}var Oa=Cn.ReactCurrentDispatcher,hc=Cn.ReactCurrentBatchConfig,qr=0,_e=null,Ve=null,Fe=null,fl=!1,Ws=!1,yo=0,DT=0;function Ke(){throw Error(b(321))}function Rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$t(t[n],e[n]))return!1;return!0}function Pd(t,e,n,r,i,s){if(qr=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Oa.current=t===null||t.memoizedState===null?MT:bT,t=n(r,i),Ws){s=0;do{if(Ws=!1,yo=0,25<=s)throw Error(b(301));s+=1,Fe=Ve=null,e.updateQueue=null,Oa.current=FT,t=n(r,i)}while(Ws)}if(Oa.current=pl,e=Ve!==null&&Ve.next!==null,qr=0,Fe=Ve=_e=null,fl=!1,e)throw Error(b(300));return t}function kd(){var t=yo!==0;return yo=0,t}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?_e.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Nt(){if(Ve===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=Fe===null?_e.memoizedState:Fe.next;if(e!==null)Fe=e,Ve=t;else{if(t===null)throw Error(b(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Fe===null?_e.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function _o(t,e){return typeof e=="function"?e(t):e}function dc(t){var e=Nt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((qr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,_e.lanes|=f,Hr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,$t(r,e.memoizedState)||(ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Hr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fc(t){var e=Nt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$t(s,e.memoizedState)||(ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function B_(){}function $_(t,e){var n=_e,r=Nt(),i=e(),s=!$t(r.memoizedState,i);if(s&&(r.memoizedState=i,ct=!0),r=r.queue,Nd(W_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,vo(9,H_.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(b(349));qr&30||q_(n,e,i)}return i}function q_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function H_(t,e,n,r){e.value=n,e.getSnapshot=r,G_(e)&&K_(t)}function W_(t,e,n){return n(function(){G_(e)&&K_(t)})}function G_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$t(t,n)}catch{return!0}}function K_(t){var e=vn(t,1);e!==null&&zt(e,t,1,-1)}function Im(t){var e=Kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_o,lastRenderedState:t},e.queue=t,t=t.dispatch=LT.bind(null,_e,t),[e.memoizedState,t]}function vo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Q_(){return Nt().memoizedState}function La(t,e,n,r){var i=Kt();_e.flags|=t,i.memoizedState=vo(1|e,n,void 0,r===void 0?null:r)}function Kl(t,e,n,r){var i=Nt();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&Rd(r,o.deps)){i.memoizedState=vo(e,n,s,r);return}}_e.flags|=t,i.memoizedState=vo(1|e,n,s,r)}function Sm(t,e){return La(8390656,8,t,e)}function Nd(t,e){return Kl(2048,8,t,e)}function X_(t,e){return Kl(4,2,t,e)}function Y_(t,e){return Kl(4,4,t,e)}function J_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Z_(t,e,n){return n=n!=null?n.concat([t]):null,Kl(4,4,J_.bind(null,e,t),n)}function xd(){}function ev(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function tv(t,e){var n=Nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function nv(t,e,n){return qr&21?($t(n,e)||(n=a_(),_e.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ct=!0),t.memoizedState=n)}function VT(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=hc.transition;hc.transition={};try{t(!1),e()}finally{le=n,hc.transition=r}}function rv(){return Nt().memoizedState}function OT(t,e,n){var r=nr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},iv(t))sv(e,n);else if(n=U_(t,e,n,r),n!==null){var i=st();zt(n,t,r,i),ov(n,e,r)}}function LT(t,e,n){var r=nr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(iv(t))sv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,$t(l,o)){var u=e.interleaved;u===null?(i.next=i,Td(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=U_(t,e,i,r),n!==null&&(i=st(),zt(n,t,r,i),ov(n,e,r))}}function iv(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function sv(t,e){Ws=fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ov(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ld(t,n)}}var pl={readContext:kt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},MT={readContext:kt,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:kt,useEffect:Sm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,La(4194308,4,J_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return La(4194308,4,t,e)},useInsertionEffect:function(t,e){return La(4,2,t,e)},useMemo:function(t,e){var n=Kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=OT.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:Im,useDebugValue:xd,useDeferredValue:function(t){return Kt().memoizedState=t},useTransition:function(){var t=Im(!1),e=t[0];return t=VT.bind(null,t[1]),Kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=Kt();if(ge){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Ue===null)throw Error(b(349));qr&30||q_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sm(W_.bind(null,r,s,t),[t]),r.flags|=2048,vo(9,H_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Kt(),e=Ue.identifierPrefix;if(ge){var n=hn,r=cn;n=(r&~(1<<32-jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=yo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=DT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bT={readContext:kt,useCallback:ev,useContext:kt,useEffect:Nd,useImperativeHandle:Z_,useInsertionEffect:X_,useLayoutEffect:Y_,useMemo:tv,useReducer:dc,useRef:Q_,useState:function(){return dc(_o)},useDebugValue:xd,useDeferredValue:function(t){var e=Nt();return nv(e,Ve.memoizedState,t)},useTransition:function(){var t=dc(_o)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:B_,useSyncExternalStore:$_,useId:rv,unstable_isNewReconciler:!1},FT={readContext:kt,useCallback:ev,useContext:kt,useEffect:Nd,useImperativeHandle:Z_,useInsertionEffect:X_,useLayoutEffect:Y_,useMemo:tv,useReducer:fc,useRef:Q_,useState:function(){return fc(_o)},useDebugValue:xd,useDeferredValue:function(t){var e=Nt();return Ve===null?e.memoizedState=t:nv(e,Ve.memoizedState,t)},useTransition:function(){var t=fc(_o)[0],e=Nt().memoizedState;return[t,e]},useMutableSource:B_,useSyncExternalStore:$_,useId:rv,unstable_isNewReconciler:!1};function Ot(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function lh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ql={isMounted:function(t){return(t=t._reactInternals)?ti(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=st(),i=nr(t),s=pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,i),e!==null&&(zt(e,t,i,r),Va(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=st(),i=nr(t),s=pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,i),e!==null&&(zt(e,t,i,r),Va(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=st(),r=nr(t),i=pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=er(t,i,r),e!==null&&(zt(e,t,r,n),Va(e,t,r))}};function Am(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!co(n,r)||!co(i,s):!0}function av(t,e,n){var r=!1,i=hr,s=e.contextType;return typeof s=="object"&&s!==null?s=kt(s):(i=dt(e)?Br:et.current,r=e.contextTypes,s=(r=r!=null)?ji(t,i):hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ql,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Cm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ql.enqueueReplaceState(e,e.state,null)}function uh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Id(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=kt(s):(s=dt(e)?Br:et.current,i.context=ji(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ql.enqueueReplaceState(i,i.state,null),hl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function qi(t,e){try{var n="",r=e;do n+=d1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ch(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var UT=typeof WeakMap=="function"?WeakMap:Map;function lv(t,e,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gl||(gl=!0,wh=r),ch(t,e)},n}function uv(t,e,n){n=pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ch(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ch(t,e),typeof r!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new UT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ZT.bind(null,t,e,n),e.then(t,t))}function Pm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function km(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pn(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var jT=Cn.ReactCurrentOwner,ct=!1;function it(t,e,n,r){e.child=t===null?F_(e,null,n,r):Bi(e,t.child,n,r)}function Nm(t,e,n,r,i){n=n.render;var s=e.ref;return Di(e,i),r=Pd(t,e,n,r,s,i),n=kd(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,wn(t,e,i)):(ge&&n&&gd(e),e.flags|=1,it(t,e,r,i),e.child)}function xm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ud(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,cv(t,e,s,r,i)):(t=Ua(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:co,n(o,r)&&t.ref===e.ref)return wn(t,e,i)}return e.flags|=1,t=rr(s,r),t.ref=e.ref,t.return=e,e.child=t}function cv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(co(s,r)&&t.ref===e.ref)if(ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ct=!0);else return e.lanes=t.lanes,wn(t,e,i)}return hh(t,e,n,r,i)}function hv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(Ci,gt),gt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(Ci,gt),gt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he(Ci,gt),gt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he(Ci,gt),gt|=r;return it(t,e,i,n),e.child}function dv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hh(t,e,n,r,i){var s=dt(n)?Br:et.current;return s=ji(e,s),Di(e,i),n=Pd(t,e,n,r,s,i),r=kd(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,wn(t,e,i)):(ge&&r&&gd(e),e.flags|=1,it(t,e,n,i),e.child)}function Dm(t,e,n,r,i){if(dt(n)){var s=!0;ol(e)}else s=!1;if(Di(e,i),e.stateNode===null)Ma(t,e),av(e,n,r),uh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=kt(h):(h=dt(n)?Br:et.current,h=ji(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Cm(e,o,r,h),Un=!1;var g=e.memoizedState;o.state=g,hl(e,r,o,i),u=e.memoizedState,l!==r||g!==u||ht.current||Un?(typeof f=="function"&&(lh(e,n,f,r),u=e.memoizedState),(l=Un||Am(e,n,l,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,j_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Ot(e.type,l),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=kt(u):(u=dt(n)?Br:et.current,u=ji(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Cm(e,o,r,u),Un=!1,g=e.memoizedState,o.state=g,hl(e,r,o,i);var k=e.memoizedState;l!==p||g!==k||ht.current||Un?(typeof A=="function"&&(lh(e,n,A,r),k=e.memoizedState),(h=Un||Am(e,n,h,r,g,k,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return dh(t,e,n,r,s,i)}function dh(t,e,n,r,i,s){dv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ym(e,n,!1),wn(t,e,s);r=e.stateNode,jT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bi(e,t.child,null,s),e.child=Bi(e,null,l,s)):it(t,e,l,s),e.memoizedState=r.state,i&&ym(e,n,!0),e.child}function fv(t){var e=t.stateNode;e.pendingContext?gm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&gm(t,e.context,!1),Sd(t,e.containerInfo)}function Vm(t,e,n,r,i){return zi(),_d(i),e.flags|=256,it(t,e,n,r),e.child}var fh={dehydrated:null,treeContext:null,retryLane:0};function ph(t){return{baseLanes:t,cachePool:null,transitions:null}}function pv(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(ye,i&1),t===null)return oh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jl(o,r,0,null),t=Ur(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ph(n),e.memoizedState=fh,t):Dd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return zT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=rr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=rr(l,s):(s=Ur(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ph(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=fh,r}return s=t.child,t=s.sibling,r=rr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dd(t,e){return e=Jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _a(t,e,n,r){return r!==null&&_d(r),Bi(e,t.child,null,n),t=Dd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=pc(Error(b(422))),_a(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Jl({mode:"visible",children:r.children},i,0,null),s=Ur(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Bi(e,t.child,null,o),e.child.memoizedState=ph(o),e.memoizedState=fh,s);if(!(e.mode&1))return _a(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=pc(s,r,void 0),_a(t,e,o,r)}if(l=(o&t.childLanes)!==0,ct||l){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,vn(t,i),zt(r,t,i,-1))}return Fd(),r=pc(Error(b(421))),_a(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=eI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,yt=Zn(i.nextSibling),_t=e,ge=!0,Mt=null,t!==null&&(It[St++]=cn,It[St++]=hn,It[St++]=$r,cn=t.id,hn=t.overflow,$r=e),e=Dd(e,r.children),e.flags|=4096,e)}function Om(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ah(t.return,e,n)}function mc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function mv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(it(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Om(t,n,e);else if(t.tag===19)Om(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&dl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),mc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&dl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}mc(e,!0,n,null,s);break;case"together":mc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ma(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BT(t,e,n){switch(e.tag){case 3:fv(e),zi();break;case 5:z_(e);break;case 1:dt(e.type)&&ol(e);break;case 4:Sd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(ul,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?pv(t,e,n):(he(ye,ye.current&1),t=wn(t,e,n),t!==null?t.sibling:null);he(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return mv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,hv(t,e,n)}return wn(t,e,n)}var gv,mh,yv,_v;gv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};mh=function(){};yv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Lr(Jt.current);var s=null;switch(n){case"input":i=bc(t,i),r=bc(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=jc(t,i),r=jc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=il)}Bc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ro.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ro.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&fe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};_v=function(t,e,n,r){n!==r&&(e.flags|=4)};function xs(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $T(t,e,n){var r=e.pendingProps;switch(yd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return dt(e.type)&&sl(),Qe(e),null;case 3:return r=e.stateNode,$i(),pe(ht),pe(et),Cd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ga(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mt!==null&&(Ih(Mt),Mt=null))),mh(t,e),Qe(e),null;case 5:Ad(e);var i=Lr(go.current);if(n=e.type,t!==null&&e.stateNode!=null)yv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return Qe(e),null}if(t=Lr(Jt.current),ga(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Xt]=e,r[po]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Ms.length;i++)fe(Ms[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":$p(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":Hp(r,s),fe("invalid",r)}Bc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ma(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ma(r.textContent,l,t),i=["children",""+l]):ro.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":aa(r),qp(r,s,!0);break;case"textarea":aa(r),Wp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=il)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Xt]=e,t[po]=r,gv(t,e,!1,!1),e.stateNode=t;e:{switch(o=$c(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ms.length;i++)fe(Ms[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":$p(t,r),i=bc(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),fe("invalid",t);break;case"textarea":Hp(t,r),i=jc(t,r),fe("invalid",t);break;default:i=r}Bc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Qy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Gy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&io(t,u):typeof u=="number"&&io(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ro.hasOwnProperty(s)?u!=null&&s==="onScroll"&&fe("scroll",t):u!=null&&nd(t,s,u,o))}switch(n){case"input":aa(t),qp(t,r,!1);break;case"textarea":aa(t),Wp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+cr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Pi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Pi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=il)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)_v(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Lr(go.current),Lr(Jt.current),ga(e)){if(r=e.stateNode,n=e.memoizedProps,r[Xt]=e,(s=r.nodeValue!==n)&&(t=_t,t!==null))switch(t.tag){case 3:ma(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ma(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=e,e.stateNode=r}return Qe(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&yt!==null&&e.mode&1&&!(e.flags&128))M_(),zi(),e.flags|=98560,s=!1;else if(s=ga(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Xt]=e}else zi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else Mt!==null&&(Ih(Mt),Mt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Oe===0&&(Oe=3):Fd())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return $i(),mh(t,e),t===null&&ho(e.stateNode.containerInfo),Qe(e),null;case 10:return Ed(e.type._context),Qe(e),null;case 17:return dt(e.type)&&sl(),Qe(e),null;case 19:if(pe(ye),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xs(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=dl(t),o!==null){for(e.flags|=128,xs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ae()>Hi&&(e.flags|=128,r=!0,xs(s,!1),e.lanes=4194304)}else{if(!r)if(t=dl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Qe(e),null}else 2*Ae()-s.renderingStartTime>Hi&&n!==1073741824&&(e.flags|=128,r=!0,xs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ae(),e.sibling=null,n=ye.current,he(ye,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return bd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?gt&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function qT(t,e){switch(yd(e),e.tag){case 1:return dt(e.type)&&sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $i(),pe(ht),pe(et),Cd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ad(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return $i(),null;case 10:return Ed(e.type._context),null;case 22:case 23:return bd(),null;case 24:return null;default:return null}}var va=!1,Je=!1,HT=typeof WeakSet=="function"?WeakSet:Set,q=null;function Ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(t,e,r)}else n.current=null}function gh(t,e,n){try{n()}catch(r){Te(t,e,r)}}var Lm=!1;function WT(t,e){if(Zc=tl,t=I_(),md(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var A;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)g=p,p=A;for(;;){if(p===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(A=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(eh={focusedElem:t,selectionRange:n},tl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,D=k.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?x:Ot(e.type,x),D);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(O){Te(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return k=Lm,Lm=!1,k}function Gs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&gh(e,n,s)}i=i.next}while(i!==r)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function yh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vv(t){var e=t.alternate;e!==null&&(t.alternate=null,vv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xt],delete e[po],delete e[rh],delete e[PT],delete e[kT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wv(t){return t.tag===5||t.tag===3||t.tag===4}function Mm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=il));else if(r!==4&&(t=t.child,t!==null))for(_h(t,e,n),t=t.sibling;t!==null;)_h(t,e,n),t=t.sibling}function vh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vh(t,e,n),t=t.sibling;t!==null;)vh(t,e,n),t=t.sibling}var je=null,Lt=!1;function Mn(t,e,n){for(n=n.child;n!==null;)Ev(t,e,n),n=n.sibling}function Ev(t,e,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 5:Je||Ai(n,e);case 6:var r=je,i=Lt;je=null,Mn(t,e,n),je=r,Lt=i,je!==null&&(Lt?(t=je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Lt?(t=je,n=n.stateNode,t.nodeType===8?lc(t.parentNode,n):t.nodeType===1&&lc(t,n),lo(t)):lc(je,n.stateNode));break;case 4:r=je,i=Lt,je=n.stateNode.containerInfo,Lt=!0,Mn(t,e,n),je=r,Lt=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&gh(n,e,o),i=i.next}while(i!==r)}Mn(t,e,n);break;case 1:if(!Je&&(Ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,e,l)}Mn(t,e,n);break;case 21:Mn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Mn(t,e,n),Je=r):Mn(t,e,n);break;default:Mn(t,e,n)}}function bm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HT),e.forEach(function(r){var i=tI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:je=l.stateNode,Lt=!1;break e;case 3:je=l.stateNode.containerInfo,Lt=!0;break e;case 4:je=l.stateNode.containerInfo,Lt=!0;break e}l=l.return}if(je===null)throw Error(b(160));Ev(s,o,i),je=null,Lt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Te(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tv(e,t),e=e.sibling}function Tv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),Gt(t),r&4){try{Gs(3,t,t.return),Xl(3,t)}catch(x){Te(t,t.return,x)}try{Gs(5,t,t.return)}catch(x){Te(t,t.return,x)}}break;case 1:Vt(e,t),Gt(t),r&512&&n!==null&&Ai(n,n.return);break;case 5:if(Vt(e,t),Gt(t),r&512&&n!==null&&Ai(n,n.return),t.flags&32){var i=t.stateNode;try{io(i,"")}catch(x){Te(t,t.return,x)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&qy(i,s),$c(l,o);var h=$c(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?Qy(i,p):f==="dangerouslySetInnerHTML"?Gy(i,p):f==="children"?io(i,p):nd(i,f,p,h)}switch(l){case"input":Fc(i,s);break;case"textarea":Hy(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?Pi(i,!!s.multiple,A,!1):g!==!!s.multiple&&(s.defaultValue!=null?Pi(i,!!s.multiple,s.defaultValue,!0):Pi(i,!!s.multiple,s.multiple?[]:"",!1))}i[po]=s}catch(x){Te(t,t.return,x)}}break;case 6:if(Vt(e,t),Gt(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(x){Te(t,t.return,x)}}break;case 3:if(Vt(e,t),Gt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lo(e.containerInfo)}catch(x){Te(t,t.return,x)}break;case 4:Vt(e,t),Gt(t);break;case 13:Vt(e,t),Gt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ld=Ae())),r&4&&bm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(h=Je)||f,Vt(e,t),Je=h):Vt(e,t),Gt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(p=q=f;q!==null;){switch(g=q,A=g.child,g.tag){case 0:case 11:case 14:case 15:Gs(4,g,g.return);break;case 1:Ai(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(x){Te(r,n,x)}}break;case 5:Ai(g,g.return);break;case 22:if(g.memoizedState!==null){Um(p);continue}}A!==null?(A.return=g,q=A):Um(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ky("display",o))}catch(x){Te(t,t.return,x)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(x){Te(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Vt(e,t),Gt(t),r&4&&bm(t);break;case 21:break;default:Vt(e,t),Gt(t)}}function Gt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wv(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(io(i,""),r.flags&=-33);var s=Mm(t);vh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Mm(t);_h(t,l,o);break;default:throw Error(b(161))}}catch(u){Te(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function GT(t,e,n){q=t,Iv(t)}function Iv(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||va;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Je;l=va;var h=Je;if(va=o,(Je=u)&&!h)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?jm(i):u!==null?(u.return=o,q=u):jm(i);for(;s!==null;)q=s,Iv(s),s=s.sibling;q=i,va=l,Je=h}Fm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Fm(t)}}function Fm(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||Xl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ot(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Tm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&lo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Je||e.flags&512&&yh(e)}catch(g){Te(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function Um(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function jm(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xl(4,e)}catch(u){Te(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Te(e,i,u)}}var s=e.return;try{yh(e)}catch(u){Te(e,s,u)}break;case 5:var o=e.return;try{yh(e)}catch(u){Te(e,o,u)}}}catch(u){Te(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var KT=Math.ceil,ml=Cn.ReactCurrentDispatcher,Vd=Cn.ReactCurrentOwner,Pt=Cn.ReactCurrentBatchConfig,se=0,Ue=null,ke=null,$e=0,gt=0,Ci=wr(0),Oe=0,wo=null,Hr=0,Yl=0,Od=0,Ks=null,ut=null,Ld=0,Hi=1/0,ln=null,gl=!1,wh=null,tr=null,wa=!1,Gn=null,yl=0,Qs=0,Eh=null,ba=-1,Fa=0;function st(){return se&6?Ae():ba!==-1?ba:ba=Ae()}function nr(t){return t.mode&1?se&2&&$e!==0?$e&-$e:xT.transition!==null?(Fa===0&&(Fa=a_()),Fa):(t=le,t!==0||(t=window.event,t=t===void 0?16:p_(t.type)),t):1}function zt(t,e,n,r){if(50<Qs)throw Qs=0,Eh=null,Error(b(185));Do(t,n,r),(!(se&2)||t!==Ue)&&(t===Ue&&(!(se&2)&&(Yl|=n),Oe===4&&zn(t,$e)),ft(t,r),n===1&&se===0&&!(e.mode&1)&&(Hi=Ae()+500,Gl&&Er()))}function ft(t,e){var n=t.callbackNode;x1(t,e);var r=el(t,t===Ue?$e:0);if(r===0)n!==null&&Qp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Qp(n),e===1)t.tag===0?NT(zm.bind(null,t)):V_(zm.bind(null,t)),CT(function(){!(se&6)&&Er()}),n=null;else{switch(l_(r)){case 1:n=ad;break;case 4:n=s_;break;case 16:n=Za;break;case 536870912:n=o_;break;default:n=Za}n=xv(n,Sv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Sv(t,e){if(ba=-1,Fa=0,se&6)throw Error(b(327));var n=t.callbackNode;if(Vi()&&t.callbackNode!==n)return null;var r=el(t,t===Ue?$e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_l(t,r);else{e=r;var i=se;se|=2;var s=Cv();(Ue!==t||$e!==e)&&(ln=null,Hi=Ae()+500,Fr(t,e));do try{YT();break}catch(l){Av(t,l)}while(1);wd(),ml.current=s,se=i,ke!==null?e=0:(Ue=null,$e=0,e=Oe)}if(e!==0){if(e===2&&(i=Kc(t),i!==0&&(r=i,e=Th(t,i))),e===1)throw n=wo,Fr(t,0),zn(t,r),ft(t,Ae()),n;if(e===6)zn(t,r);else{if(i=t.current.alternate,!(r&30)&&!QT(i)&&(e=_l(t,r),e===2&&(s=Kc(t),s!==0&&(r=s,e=Th(t,s))),e===1))throw n=wo,Fr(t,0),zn(t,r),ft(t,Ae()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:xr(t,ut,ln);break;case 3:if(zn(t,r),(r&130023424)===r&&(e=Ld+500-Ae(),10<e)){if(el(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=nh(xr.bind(null,t,ut,ln),e);break}xr(t,ut,ln);break;case 4:if(zn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-jt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*KT(r/1960))-r,10<r){t.timeoutHandle=nh(xr.bind(null,t,ut,ln),r);break}xr(t,ut,ln);break;case 5:xr(t,ut,ln);break;default:throw Error(b(329))}}}return ft(t,Ae()),t.callbackNode===n?Sv.bind(null,t):null}function Th(t,e){var n=Ks;return t.current.memoizedState.isDehydrated&&(Fr(t,e).flags|=256),t=_l(t,e),t!==2&&(e=ut,ut=n,e!==null&&Ih(e)),t}function Ih(t){ut===null?ut=t:ut.push.apply(ut,t)}function QT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zn(t,e){for(e&=~Od,e&=~Yl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jt(e),r=1<<n;t[n]=-1,e&=~r}}function zm(t){if(se&6)throw Error(b(327));Vi();var e=el(t,0);if(!(e&1))return ft(t,Ae()),null;var n=_l(t,e);if(t.tag!==0&&n===2){var r=Kc(t);r!==0&&(e=r,n=Th(t,r))}if(n===1)throw n=wo,Fr(t,0),zn(t,e),ft(t,Ae()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xr(t,ut,ln),ft(t,Ae()),null}function Md(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Hi=Ae()+500,Gl&&Er())}}function Wr(t){Gn!==null&&Gn.tag===0&&!(se&6)&&Vi();var e=se;se|=1;var n=Pt.transition,r=le;try{if(Pt.transition=null,le=1,t)return t()}finally{le=r,Pt.transition=n,se=e,!(se&6)&&Er()}}function bd(){gt=Ci.current,pe(Ci)}function Fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,AT(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(yd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sl();break;case 3:$i(),pe(ht),pe(et),Cd();break;case 5:Ad(r);break;case 4:$i();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:Ed(r.type._context);break;case 22:case 23:bd()}n=n.return}if(Ue=t,ke=t=rr(t.current,null),$e=gt=e,Oe=0,wo=null,Od=Yl=Hr=0,ut=Ks=null,Or!==null){for(e=0;e<Or.length;e++)if(n=Or[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Or=null}return t}function Av(t,e){do{var n=ke;try{if(wd(),Oa.current=pl,fl){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fl=!1}if(qr=0,Fe=Ve=_e=null,Ws=!1,yo=0,Vd.current=null,n===null||n.return===null){Oe=1,wo=e,ke=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=$e,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Pm(o);if(A!==null){A.flags&=-257,km(A,o,l,s,e),A.mode&1&&Rm(s,h,e),e=A,u=h;var k=e.updateQueue;if(k===null){var x=new Set;x.add(u),e.updateQueue=x}else k.add(u);break e}else{if(!(e&1)){Rm(s,h,e),Fd();break e}u=Error(b(426))}}else if(ge&&l.mode&1){var D=Pm(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),km(D,o,l,s,e),_d(qi(u,l));break e}}s=u=qi(u,l),Oe!==4&&(Oe=2),Ks===null?Ks=[s]:Ks.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=lv(s,u,e);Em(s,E);break e;case 1:l=u;var v=s.type,C=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(tr===null||!tr.has(C)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=uv(s,l,e);Em(s,O);break e}}s=s.return}while(s!==null)}Pv(n)}catch(U){e=U,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function Cv(){var t=ml.current;return ml.current=pl,t===null?pl:t}function Fd(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Ue===null||!(Hr&268435455)&&!(Yl&268435455)||zn(Ue,$e)}function _l(t,e){var n=se;se|=2;var r=Cv();(Ue!==t||$e!==e)&&(ln=null,Fr(t,e));do try{XT();break}catch(i){Av(t,i)}while(1);if(wd(),se=n,ml.current=r,ke!==null)throw Error(b(261));return Ue=null,$e=0,Oe}function XT(){for(;ke!==null;)Rv(ke)}function YT(){for(;ke!==null&&!T1();)Rv(ke)}function Rv(t){var e=Nv(t.alternate,t,gt);t.memoizedProps=t.pendingProps,e===null?Pv(t):ke=e,Vd.current=null}function Pv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qT(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,ke=null;return}}else if(n=$T(n,e,gt),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Oe===0&&(Oe=5)}function xr(t,e,n){var r=le,i=Pt.transition;try{Pt.transition=null,le=1,JT(t,e,n,r)}finally{Pt.transition=i,le=r}return null}function JT(t,e,n,r){do Vi();while(Gn!==null);if(se&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(D1(t,s),t===Ue&&(ke=Ue=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wa||(wa=!0,xv(Za,function(){return Vi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pt.transition,Pt.transition=null;var o=le;le=1;var l=se;se|=4,Vd.current=null,WT(t,n),Tv(n,t),_T(eh),tl=!!Zc,eh=Zc=null,t.current=n,GT(n),I1(),se=l,le=o,Pt.transition=s}else t.current=n;if(wa&&(wa=!1,Gn=t,yl=i),s=t.pendingLanes,s===0&&(tr=null),C1(n.stateNode),ft(t,Ae()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(gl)throw gl=!1,t=wh,wh=null,t;return yl&1&&t.tag!==0&&Vi(),s=t.pendingLanes,s&1?t===Eh?Qs++:(Qs=0,Eh=t):Qs=0,Er(),null}function Vi(){if(Gn!==null){var t=l_(yl),e=Pt.transition,n=le;try{if(Pt.transition=null,le=16>t?16:t,Gn===null)var r=!1;else{if(t=Gn,Gn=null,yl=0,se&6)throw Error(b(331));var i=se;for(se|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(q=h;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:Gs(8,f,s)}var p=f.child;if(p!==null)p.return=f,q=p;else for(;q!==null;){f=q;var g=f.sibling,A=f.return;if(vv(f),f===h){q=null;break}if(g!==null){g.return=A,q=g;break}q=A}}}var k=s.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var D=x.sibling;x.sibling=null,x=D}while(x!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Gs(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,q=E;break e}q=s.return}}var v=t.current;for(q=v;q!==null;){o=q;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,q=C;else e:for(o=v;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Xl(9,l)}}catch(U){Te(l,l.return,U)}if(l===o){q=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,q=O;break e}q=l.return}}if(se=i,Er(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Bl,t)}catch{}r=!0}return r}finally{le=n,Pt.transition=e}}return!1}function Bm(t,e,n){e=qi(n,e),e=lv(t,e,1),t=er(t,e,1),e=st(),t!==null&&(Do(t,1,e),ft(t,e))}function Te(t,e,n){if(t.tag===3)Bm(t,t,n);else for(;e!==null;){if(e.tag===3){Bm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tr===null||!tr.has(r))){t=qi(n,t),t=uv(e,t,1),e=er(e,t,1),t=st(),e!==null&&(Do(e,1,t),ft(e,t));break}}e=e.return}}function ZT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=st(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&($e&n)===n&&(Oe===4||Oe===3&&($e&130023424)===$e&&500>Ae()-Ld?Fr(t,0):Od|=n),ft(t,e)}function kv(t,e){e===0&&(t.mode&1?(e=ca,ca<<=1,!(ca&130023424)&&(ca=4194304)):e=1);var n=st();t=vn(t,e),t!==null&&(Do(t,e,n),ft(t,n))}function eI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),kv(t,n)}function tI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),kv(t,n)}var Nv;Nv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ht.current)ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ct=!1,BT(t,e,n);ct=!!(t.flags&131072)}else ct=!1,ge&&e.flags&1048576&&O_(e,ll,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ma(t,e),t=e.pendingProps;var i=ji(e,et.current);Di(e,n),i=Pd(null,e,r,t,i,n);var s=kd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dt(r)?(s=!0,ol(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Id(e),i.updater=Ql,e.stateNode=i,i._reactInternals=e,uh(e,r,t,n),e=dh(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&gd(e),it(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ma(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rI(r),t=Ot(r,t),i){case 0:e=hh(null,e,r,t,n);break e;case 1:e=Dm(null,e,r,t,n);break e;case 11:e=Nm(null,e,r,t,n);break e;case 14:e=xm(null,e,r,Ot(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),hh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),Dm(t,e,r,i,n);case 3:e:{if(fv(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,j_(t,e),hl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=qi(Error(b(423)),e),e=Vm(t,e,r,n,i);break e}else if(r!==i){i=qi(Error(b(424)),e),e=Vm(t,e,r,n,i);break e}else for(yt=Zn(e.stateNode.containerInfo.firstChild),_t=e,ge=!0,Mt=null,n=F_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zi(),r===i){e=wn(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return z_(e),t===null&&oh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,th(r,i)?o=null:s!==null&&th(r,s)&&(e.flags|=32),dv(t,e),it(t,e,o,n),e.child;case 6:return t===null&&oh(e),null;case 13:return pv(t,e,n);case 4:return Sd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bi(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),Nm(t,e,r,i,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(ul,r._currentValue),r._currentValue=o,s!==null)if($t(s.value,o)){if(s.children===i.children&&!ht.current){e=wn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=pn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),ah(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ah(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}it(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Di(e,n),i=kt(i),r=r(i),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,i=Ot(r,e.pendingProps),i=Ot(r.type,i),xm(t,e,r,i,n);case 15:return cv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ot(r,i),Ma(t,e),e.tag=1,dt(r)?(t=!0,ol(e)):t=!1,Di(e,n),av(e,r,i),uh(e,r,i,n),dh(null,e,r,!0,t,n);case 19:return mv(t,e,n);case 22:return hv(t,e,n)}throw Error(b(156,e.tag))};function xv(t,e){return i_(t,e)}function nI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(t,e,n,r){return new nI(t,e,n,r)}function Ud(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rI(t){if(typeof t=="function")return Ud(t)?1:0;if(t!=null){if(t=t.$$typeof,t===id)return 11;if(t===sd)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=Rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ua(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ud(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gi:return Ur(n.children,i,s,e);case rd:o=8,i|=8;break;case Vc:return t=Rt(12,n,e,i|2),t.elementType=Vc,t.lanes=s,t;case Oc:return t=Rt(13,n,e,i),t.elementType=Oc,t.lanes=s,t;case Lc:return t=Rt(19,n,e,i),t.elementType=Lc,t.lanes=s,t;case zy:return Jl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Uy:o=10;break e;case jy:o=9;break e;case id:o=11;break e;case sd:o=14;break e;case Fn:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Rt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ur(t,e,n,r){return t=Rt(7,t,r,e),t.lanes=n,t}function Jl(t,e,n,r){return t=Rt(22,t,r,e),t.elementType=zy,t.lanes=n,t.stateNode={isHidden:!1},t}function gc(t,e,n){return t=Rt(6,t,null,e),t.lanes=n,t}function yc(t,e,n){return e=Rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yu(0),this.expirationTimes=Yu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jd(t,e,n,r,i,s,o,l,u){return t=new iI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Id(s),t}function sI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Dv(t){if(!t)return hr;t=t._reactInternals;e:{if(ti(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(dt(n))return D_(t,n,e)}return e}function Vv(t,e,n,r,i,s,o,l,u){return t=jd(n,r,!0,t,i,s,o,l,u),t.context=Dv(null),n=t.current,r=st(),i=nr(n),s=pn(r,i),s.callback=e??null,er(n,s,i),t.current.lanes=i,Do(t,i,r),ft(t,r),t}function Zl(t,e,n,r){var i=e.current,s=st(),o=nr(i);return n=Dv(n),e.context===null?e.context=n:e.pendingContext=n,e=pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=er(i,e,o),t!==null&&(zt(t,i,o,s),Va(t,i,o)),o}function vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zd(t,e){$m(t,e),(t=t.alternate)&&$m(t,e)}function oI(){return null}var Ov=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bd(t){this._internalRoot=t}eu.prototype.render=Bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Zl(t,e,null,null)};eu.prototype.unmount=Bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){Zl(null,t,null,null)}),e[_n]=null}};function eu(t){this._internalRoot=t}eu.prototype.unstable_scheduleHydration=function(t){if(t){var e=h_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jn.length&&e!==0&&e<jn[n].priority;n++);jn.splice(n,0,t),n===0&&f_(t)}};function $d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qm(){}function aI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=vl(o);s.call(h)}}var o=Vv(e,r,t,0,null,!1,!1,"",qm);return t._reactRootContainer=o,t[_n]=o.current,ho(t.nodeType===8?t.parentNode:t),Wr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=vl(u);l.call(h)}}var u=jd(t,0,!1,null,null,!1,!1,"",qm);return t._reactRootContainer=u,t[_n]=u.current,ho(t.nodeType===8?t.parentNode:t),Wr(function(){Zl(e,u,n,r)}),u}function nu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=vl(o);l.call(u)}}Zl(e,o,t,i)}else o=aI(n,e,t,i,r);return vl(o)}u_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ls(e.pendingLanes);n!==0&&(ld(e,n|1),ft(e,Ae()),!(se&6)&&(Hi=Ae()+500,Er()))}break;case 13:Wr(function(){var r=vn(t,1);if(r!==null){var i=st();zt(r,t,1,i)}}),zd(t,1)}};ud=function(t){if(t.tag===13){var e=vn(t,134217728);if(e!==null){var n=st();zt(e,t,134217728,n)}zd(t,134217728)}};c_=function(t){if(t.tag===13){var e=nr(t),n=vn(t,e);if(n!==null){var r=st();zt(n,t,e,r)}zd(t,e)}};h_=function(){return le};d_=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};Hc=function(t,e,n){switch(e){case"input":if(Fc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Wl(r);if(!i)throw Error(b(90));$y(r),Fc(r,i)}}}break;case"textarea":Hy(t,n);break;case"select":e=n.value,e!=null&&Pi(t,!!n.multiple,e,!1)}};Jy=Md;Zy=Wr;var lI={usingClientEntryPoint:!1,Events:[Oo,wi,Wl,Xy,Yy,Md]},Ds={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uI={bundleType:Ds.bundleType,version:Ds.version,rendererPackageName:Ds.rendererPackageName,rendererConfig:Ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=n_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ds.findFiberByHostInstance||oI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{Bl=Ea.inject(uI),Yt=Ea}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lI;wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$d(e))throw Error(b(200));return sI(t,e,null,n)};wt.createRoot=function(t,e){if(!$d(t))throw Error(b(299));var n=!1,r="",i=Ov;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=jd(t,1,!1,null,null,n,!1,r,i),t[_n]=e.current,ho(t.nodeType===8?t.parentNode:t),new Bd(e)};wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=n_(e),t=t===null?null:t.stateNode,t};wt.flushSync=function(t){return Wr(t)};wt.hydrate=function(t,e,n){if(!tu(e))throw Error(b(200));return nu(null,t,e,!0,n)};wt.hydrateRoot=function(t,e,n){if(!$d(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ov;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Vv(e,null,t,1,n??null,i,!1,s,o),t[_n]=e.current,ho(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new eu(e)};wt.render=function(t,e,n){if(!tu(e))throw Error(b(200));return nu(null,t,e,!1,n)};wt.unmountComponentAtNode=function(t){if(!tu(t))throw Error(b(40));return t._reactRootContainer?(Wr(function(){nu(null,null,t,!1,function(){t._reactRootContainer=null,t[_n]=null})}),!0):!1};wt.unstable_batchedUpdates=Md;wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!tu(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return nu(t,e,n,!1,r)};wt.version="18.3.1-next-f1338f8080-20240426";function Lv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lv)}catch(t){console.error(t)}}Lv(),Ly.exports=wt;var cI=Ly.exports,Mv,Hm=cI;Mv=Hm.createRoot,Hm.hydrateRoot;const hI=()=>{};/**
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
 */const bv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},dI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(g=64)),r.push(n[f],n[p],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new fI;const g=s<<2|l>>4;if(r.push(g),h!==64){const A=l<<4&240|h>>2;if(r.push(A),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pI=function(t){const e=bv(t);return Fv.encodeByteArray(e,!0)},wl=function(t){return pI(t).replace(/\./g,"")},Uv=function(t){try{return Fv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gI=()=>mI().__FIREBASE_DEFAULTS__,yI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_I=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uv(t[1]);return e&&JSON.parse(e)},ru=()=>{try{return hI()||gI()||yI()||_I()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jv=t=>{var e,n;return(n=(e=ru())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},vI=t=>{const e=jv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},zv=()=>{var t;return(t=ru())==null?void 0:t.config},Bv=t=>{var e;return(e=ru())==null?void 0:e[`_${t}`]};/**
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
 */class wI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ns(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $v(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function EI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},l="";return[wl(JSON.stringify(n)),wl(JSON.stringify(o)),l].join(".")}const Xs={};function TI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Xs))Xs[e]?t.emulator.push(e):t.prod.push(e);return t}function II(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Wm=!1;function qv(t,e){if(typeof window>"u"||typeof document>"u"||!ns(window.location.host)||Xs[t]===e||Xs[t]||Wm)return;Xs[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=TI().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,A){g.setAttribute("width","24"),g.setAttribute("id",A),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Wm=!0,o()},g}function f(g,A){g.setAttribute("id",A),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=II(r),A=n("text"),k=document.getElementById(A)||document.createElement("span"),x=n("learnmore"),D=document.getElementById(x)||document.createElement("a"),E=n("preprendIcon"),v=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const C=g.element;l(C),f(D,x);const O=h();u(v,E),C.append(v,k,D,O),document.body.appendChild(C)}s?(k.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function SI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function AI(){var e;const t=(e=ru())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function CI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function RI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function PI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kI(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NI(){return!AI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xI(){try{return typeof indexedDB=="object"}catch{return!1}}function DI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const VI="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VI,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mo.prototype.create)}}class Mo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?OI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,l,r)}}function OI(t,e){return t.replace(LI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const LI=/\{\$([^}]+)}/g;function MI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Gr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Gm(s)&&Gm(o)){if(!Gr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Gm(t){return t!==null&&typeof t=="object"}/**
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
 */function bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bI(t,e){const n=new FI(t,e);return n.subscribe.bind(n)}class FI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=_c),i.error===void 0&&(i.error=_c),i.complete===void 0&&(i.complete=_c);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function _c(){}/**
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
 */function pt(t){return t&&t._delegate?t._delegate:t}class Kr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dr="[DEFAULT]";/**
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
 */class jI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BI(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zI(t){return t===Dr?void 0:t}function BI(t){return t.instantiationMode==="EAGER"}/**
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
 */class $I{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const qI={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},HI=te.INFO,WI={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},GI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=WI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qd{constructor(e){this.name=e,this._logLevel=HI,this._logHandler=GI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const KI=(t,e)=>e.some(n=>t instanceof n);let Km,Qm;function QI(){return Km||(Km=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XI(){return Qm||(Qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hv=new WeakMap,Sh=new WeakMap,Wv=new WeakMap,vc=new WeakMap,Hd=new WeakMap;function YI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hv.set(n,t)}).catch(()=>{}),Hd.set(e,t),e}function JI(t){if(Sh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sh.set(t,e)}let Ah={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZI(t){Ah=t(Ah)}function eS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wc(this),e,...n);return Wv.set(r,e.sort?e.sort():[e]),ir(r)}:XI().includes(t)?function(...e){return t.apply(wc(this),e),ir(Hv.get(this))}:function(...e){return ir(t.apply(wc(this),e))}}function tS(t){return typeof t=="function"?eS(t):(t instanceof IDBTransaction&&JI(t),KI(t,QI())?new Proxy(t,Ah):t)}function ir(t){if(t instanceof IDBRequest)return YI(t);if(vc.has(t))return vc.get(t);const e=tS(t);return e!==t&&(vc.set(t,e),Hd.set(e,t)),e}const wc=t=>Hd.get(t);function nS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ir(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ir(o.result),u.oldVersion,u.newVersion,ir(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const rS=["get","getKey","getAll","getAllKeys","count"],iS=["put","add","delete","clear"],Ec=new Map;function Xm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ec.get(e))return Ec.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=iS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Ec.set(e,s),s}ZI(t=>({...t,get:(e,n,r)=>Xm(e,n)||t.get(e,n,r),has:(e,n)=>!!Xm(e,n)||t.has(e,n)}));/**
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
 */class sS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ch="@firebase/app",Ym="0.14.4";/**
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
 */const En=new qd("@firebase/app"),aS="@firebase/app-compat",lS="@firebase/analytics-compat",uS="@firebase/analytics",cS="@firebase/app-check-compat",hS="@firebase/app-check",dS="@firebase/auth",fS="@firebase/auth-compat",pS="@firebase/database",mS="@firebase/data-connect",gS="@firebase/database-compat",yS="@firebase/functions",_S="@firebase/functions-compat",vS="@firebase/installations",wS="@firebase/installations-compat",ES="@firebase/messaging",TS="@firebase/messaging-compat",IS="@firebase/performance",SS="@firebase/performance-compat",AS="@firebase/remote-config",CS="@firebase/remote-config-compat",RS="@firebase/storage",PS="@firebase/storage-compat",kS="@firebase/firestore",NS="@firebase/ai",xS="@firebase/firestore-compat",DS="firebase",VS="12.4.0";/**
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
 */const Rh="[DEFAULT]",OS={[Ch]:"fire-core",[aS]:"fire-core-compat",[uS]:"fire-analytics",[lS]:"fire-analytics-compat",[hS]:"fire-app-check",[cS]:"fire-app-check-compat",[dS]:"fire-auth",[fS]:"fire-auth-compat",[pS]:"fire-rtdb",[mS]:"fire-data-connect",[gS]:"fire-rtdb-compat",[yS]:"fire-fn",[_S]:"fire-fn-compat",[vS]:"fire-iid",[wS]:"fire-iid-compat",[ES]:"fire-fcm",[TS]:"fire-fcm-compat",[IS]:"fire-perf",[SS]:"fire-perf-compat",[AS]:"fire-rc",[CS]:"fire-rc-compat",[RS]:"fire-gcs",[PS]:"fire-gcs-compat",[kS]:"fire-fst",[xS]:"fire-fst-compat",[NS]:"fire-vertex","fire-js":"fire-js",[DS]:"fire-js-all"};/**
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
 */const El=new Map,LS=new Map,Ph=new Map;function Jm(t,e){try{t.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wi(t){const e=t.name;if(Ph.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;Ph.set(e,t);for(const n of El.values())Jm(n,t);for(const n of LS.values())Jm(n,t);return!0}function Wd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function bt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const MS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sr=new Mo("app","Firebase",MS);/**
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
 */class bS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sr.create("app-deleted",{appName:this._name})}}/**
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
 */const rs=VS;function Gv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Rh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw sr.create("bad-app-name",{appName:String(i)});if(n||(n=zv()),!n)throw sr.create("no-options");const s=El.get(i);if(s){if(Gr(n,s.options)&&Gr(r,s.config))return s;throw sr.create("duplicate-app",{appName:i})}const o=new $I(i);for(const u of Ph.values())o.addComponent(u);const l=new bS(n,r,o);return El.set(i,l),l}function Kv(t=Rh){const e=El.get(t);if(!e&&t===Rh&&zv())return Gv();if(!e)throw sr.create("no-app",{appName:t});return e}function or(t,e,n){let r=OS[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(o.join(" "));return}Wi(new Kr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const FS="firebase-heartbeat-database",US=1,Eo="firebase-heartbeat-store";let Tc=null;function Qv(){return Tc||(Tc=nS(FS,US,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Eo)}catch(n){console.warn(n)}}}}).catch(t=>{throw sr.create("idb-open",{originalErrorMessage:t.message})})),Tc}async function jS(t){try{const n=(await Qv()).transaction(Eo),r=await n.objectStore(Eo).get(Xv(t));return await n.done,r}catch(e){if(e instanceof Rn)En.warn(e.message);else{const n=sr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(n.message)}}}async function Zm(t,e){try{const r=(await Qv()).transaction(Eo,"readwrite");await r.objectStore(Eo).put(e,Xv(t)),await r.done}catch(n){if(n instanceof Rn)En.warn(n.message);else{const r=sr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});En.warn(r.message)}}}function Xv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const zS=1024,BS=30;class $S{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=eg();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>BS){const o=WS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){En.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=eg(),{heartbeatsToSend:r,unsentEntries:i}=qS(this._heartbeatsCache.heartbeats),s=wl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return En.warn(n),""}}}function eg(){return new Date().toISOString().substring(0,10)}function qS(t,e=zS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),tg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class HS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xI()?DI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await jS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Zm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function tg(t){return wl(JSON.stringify({version:2,heartbeats:t})).length}function WS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function GS(t){Wi(new Kr("platform-logger",e=>new sS(e),"PRIVATE")),Wi(new Kr("heartbeat",e=>new $S(e),"PRIVATE")),or(Ch,Ym,t),or(Ch,Ym,"esm2020"),or("fire-js","")}GS("");var KS="firebase",QS="12.4.0";/**
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
 */or(KS,QS,"app");function Yv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XS=Yv,Jv=new Mo("auth","Firebase",Yv());/**
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
 */const Tl=new qd("@firebase/auth");function YS(t,...e){Tl.logLevel<=te.WARN&&Tl.warn(`Auth (${rs}): ${t}`,...e)}function ja(t,...e){Tl.logLevel<=te.ERROR&&Tl.error(`Auth (${rs}): ${t}`,...e)}/**
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
 */function Tn(t,...e){throw Gd(t,...e)}function Zt(t,...e){return Gd(t,...e)}function Zv(t,e,n){const r={...XS(),[e]:n};return new Mo("auth","Firebase",r).create(e,{appName:t.name})}function ar(t){return Zv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Jv.create(t,...e)}function G(t,e,...n){if(!t)throw Gd(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ja(e),new Error(e)}function In(t,e){t||dn(e)}/**
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
 */function kh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function JS(){return ng()==="http:"||ng()==="https:"}function ng(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function ZS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JS()||RI()||"connection"in navigator)?navigator.onLine:!0}function eA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Fo{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=SI()||PI()}get(){return ZS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kd(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class e0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rA=new Fo(3e4,6e4);function iu(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function is(t,e,n,r,i={}){return t0(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=bo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return CI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ns(t.emulatorConfig.host)&&(h.credentials="include"),e0.fetch()(await r0(t,t.config.apiHost,n,l),h)})}async function t0(t,e,n){t._canInitEmulator=!1;const r={...tA,...e};try{const i=new iA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ta(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ta(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ta(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ta(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Zv(t,f,h);Tn(t,f)}}catch(i){if(i instanceof Rn)throw i;Tn(t,"network-request-failed",{message:String(i)})}}async function n0(t,e,n,r,i={}){const s=await is(t,e,n,r,i);return"mfaPendingCredential"in s&&Tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function r0(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Kd(t.config,i):`${t.config.apiScheme}://${i}`;return nA.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class iA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),rA.get())})}}function Ta(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Zt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function sA(t,e){return is(t,"POST","/v1/accounts:delete",e)}async function Il(t,e){return is(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ys(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oA(t,e=!1){const n=pt(t),r=await n.getIdToken(e),i=Qd(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ys(Ic(i.auth_time)),issuedAtTime:Ys(Ic(i.iat)),expirationTime:Ys(Ic(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ic(t){return Number(t)*1e3}function Qd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ja("JWT malformed, contained fewer than 3 sections"),null;try{const i=Uv(n);return i?JSON.parse(i):(ja("Failed to decode base64 JWT payload"),null)}catch(i){return ja("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rg(t){const e=Qd(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function To(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&aA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function aA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class lA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Sl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await To(t,Il(e,{idToken:n}));G(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?i0(i.providerUserInfo):[],o=cA(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Nh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function uA(t){const e=pt(t);await Sl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function i0(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function hA(t,e){const n=await t0(t,{},async()=>{const r=bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await r0(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ns(t.emulatorConfig.host)&&(u.credentials="include"),e0.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dA(t,e){return is(t,"POST","/v2/accounts:revokeToken",iu(t,e))}/**
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
 */class Oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=rg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await hA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Oi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Oi,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
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
 */function bn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ft{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new lA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Nh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await To(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oA(this,e)}reload(){return uA(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ft({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bt(this.auth.app))return Promise.reject(ar(this.auth));const e=await this.getIdToken();return await To(this,sA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:A,providerData:k,stsTokenManager:x}=n;G(p&&x,e,"internal-error");const D=Oi.fromJSON(this.name,x);G(typeof p=="string",e,"internal-error"),bn(r,e.name),bn(i,e.name),G(typeof g=="boolean",e,"internal-error"),G(typeof A=="boolean",e,"internal-error"),bn(s,e.name),bn(o,e.name),bn(l,e.name),bn(u,e.name),bn(h,e.name),bn(f,e.name);const E=new Ft({uid:p,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:D,createdAt:h,lastLoginAt:f});return k&&Array.isArray(k)&&(E.providerData=k.map(v=>({...v}))),u&&(E._redirectEventId=u),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Oi;i.updateFromServerResponse(n);const s=new Ft({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Sl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?i0(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Oi;l.updateFromIdToken(r);const u=new Ft({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Nh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const ig=new Map;function fn(t){In(t instanceof Function,"Expected a class definition");let e=ig.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ig.set(t,e),e)}/**
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
 */class s0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}s0.type="NONE";const sg=s0;/**
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
 */function za(t,e,n){return`firebase:${t}:${e}:${n}`}class Li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=za(this.userKey,i.apiKey,s),this.fullPersistenceKey=za("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Il(this.auth,{idToken:e}).catch(()=>{});return n?Ft._fromGetAccountInfoResponse(this.auth,n,e):null}return Ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Li(fn(sg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||fn(sg);const o=za(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await Il(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Ft._fromGetAccountInfoResponse(e,g,f)}else p=Ft._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Li(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Li(s,e,r))}}/**
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
 */function og(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(u0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(o0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(h0(e))return"Blackberry";if(d0(e))return"Webos";if(a0(e))return"Safari";if((e.includes("chrome/")||l0(e))&&!e.includes("edge/"))return"Chrome";if(c0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function o0(t=tt()){return/firefox\//i.test(t)}function a0(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function l0(t=tt()){return/crios\//i.test(t)}function u0(t=tt()){return/iemobile/i.test(t)}function c0(t=tt()){return/android/i.test(t)}function h0(t=tt()){return/blackberry/i.test(t)}function d0(t=tt()){return/webos/i.test(t)}function Xd(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fA(t=tt()){var e;return Xd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function pA(){return kI()&&document.documentMode===10}function f0(t=tt()){return Xd(t)||c0(t)||d0(t)||h0(t)||/windows phone/i.test(t)||u0(t)}/**
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
 */function p0(t,e=[]){let n;switch(t){case"Browser":n=og(tt());break;case"Worker":n=`${og(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${rs}/${r}`}/**
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
 */class mA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gA(t,e={}){return is(t,"GET","/v2/passwordPolicy",iu(t,e))}/**
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
 */const yA=6;class _A{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??yA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class vA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ag(this),this.idTokenSubscription=new ag(this),this.beforeStateQueue=new mA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Li.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Il(this,{idToken:e}),r=await Ft._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(bt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bt(this.app))return Promise.reject(ar(this));const n=e?pt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bt(this.app)?Promise.reject(ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bt(this.app)?Promise.reject(ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gA(this),n=new _A(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Li.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=p0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&YS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function su(t){return pt(t)}class ag{constructor(e){this.auth=e,this.observer=null,this.addObserver=bI(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wA(t){Yd=t}function EA(t){return Yd.loadJS(t)}function TA(){return Yd.gapiScript}function IA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function SA(t,e){const n=Wd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Gr(s,e??{}))return i;Tn(i,"already-initialized")}return n.initialize({options:e})}function AA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CA(t,e,n){const r=su(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=m0(e),{host:o,port:l}=RA(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(Gr(h,r.config.emulator)&&Gr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ns(o)?($v(`${s}//${o}${u}`),qv("Auth",!0)):i||PA()}function m0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RA(t){const e=m0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:lg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:lg(o)}}}function lg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class g0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}/**
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
 */async function Mi(t,e){return n0(t,"POST","/v1/accounts:signInWithIdp",iu(t,e))}/**
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
 */const kA="http://localhost";class Qr extends g0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Qr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mi(e,n)}buildRequest(){const e={requestUri:kA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bo(n)}return e}}/**
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
 */class y0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Uo extends y0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Bn extends Uo{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
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
 */class $n extends Uo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
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
 */class qn extends Uo{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
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
 */class Hn extends Uo{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
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
 */async function NA(t,e){return n0(t,"POST","/v1/accounts:signUp",iu(t,e))}/**
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
 */class dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ft._fromIdTokenResponse(e,r,i),o=ug(r);return new dr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ug(r);return new dr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ug(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function xA(t){var i;if(bt(t.app))return Promise.reject(ar(t));const e=su(t);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new dr({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await NA(e,{returnSecureToken:!0}),r=await dr._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
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
 */class Al extends Rn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Al.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Al(e,n,r,i)}}function _0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Al._fromErrorAndOperation(t,s,e,r):s})}async function DA(t,e,n=!1){const r=await To(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dr._forOperation(t,"link",r)}/**
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
 */async function VA(t,e,n=!1){const{auth:r}=t;if(bt(r.app))return Promise.reject(ar(r));const i="reauthenticate";try{const s=await To(t,_0(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Qd(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),dr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tn(r,"user-mismatch"),s}}/**
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
 */async function OA(t,e,n=!1){if(bt(t.app))return Promise.reject(ar(t));const r="signIn",i=await _0(t,r,e),s=await dr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
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
 */function LA(t,e,n,r){return pt(t).onIdTokenChanged(e,n,r)}function MA(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}function bA(t,e,n,r){return pt(t).onAuthStateChanged(e,n,r)}const Cl="__sak";/**
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
 */class v0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cl,"1"),this.storage.removeItem(Cl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const FA=1e3,UA=10;class w0 extends v0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=f0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);pA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,UA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}w0.type="LOCAL";const jA=w0;/**
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
 */class E0 extends v0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}E0.type="SESSION";const T0=E0;/**
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
 */function zA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ou{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ou(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await zA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ou.receivers=[];/**
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
 */function Jd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class BA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Jd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function en(){return window}function $A(t){en().location.href=t}/**
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
 */function I0(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function qA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function WA(){return I0()?self:null}/**
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
 */const S0="firebaseLocalStorageDb",GA=1,Rl="firebaseLocalStorage",A0="fbase_key";class jo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function au(t,e){return t.transaction([Rl],e?"readwrite":"readonly").objectStore(Rl)}function KA(){const t=indexedDB.deleteDatabase(S0);return new jo(t).toPromise()}function xh(){const t=indexedDB.open(S0,GA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rl,{keyPath:A0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rl)?e(r):(r.close(),await KA(),e(await xh()))})})}async function cg(t,e,n){const r=au(t,!0).put({[A0]:e,value:n});return new jo(r).toPromise()}async function QA(t,e){const n=au(t,!1).get(e),r=await new jo(n).toPromise();return r===void 0?null:r.value}function hg(t,e){const n=au(t,!0).delete(e);return new jo(n).toPromise()}const XA=800,YA=3;class C0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return I0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ou._getInstance(WA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await qA(),!this.activeServiceWorker)return;this.sender=new BA(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xh();return await cg(e,Cl,"1"),await hg(e,Cl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=au(i,!1).getAll();return new jo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}C0.type="LOCAL";const JA=C0;new Fo(3e4,6e4);/**
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
 */function ZA(t,e){return e?fn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zd extends g0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eC(t){return OA(t.auth,new Zd(t),t.bypassAuthState)}function tC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),VA(n,new Zd(t),t.bypassAuthState)}async function nC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),DA(n,new Zd(t),t.bypassAuthState)}/**
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
 */class R0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eC;case"linkViaPopup":case"linkViaRedirect":return nC;case"reauthViaPopup":case"reauthViaRedirect":return tC;default:Tn(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rC=new Fo(2e3,1e4);class Ri extends R0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ri.currentPopupAction&&Ri.currentPopupAction.cancel(),Ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rC.get())};e()}}Ri.currentPopupAction=null;/**
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
 */const iC="pendingRedirect",Ba=new Map;class sC extends R0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ba.get(this.auth._key());if(!e){try{const r=await oC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ba.set(this.auth._key(),e)}return this.bypassAuthState||Ba.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oC(t,e){const n=uC(e),r=lC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function aC(t,e){Ba.set(t._key(),e)}function lC(t){return fn(t._redirectPersistence)}function uC(t){return za(iC,t.config.apiKey,t.name)}async function cC(t,e,n=!1){if(bt(t.app))return Promise.reject(ar(t));const r=su(t),i=ZA(r,e),o=await new sC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const hC=10*60*1e3;class dC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!P0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Zt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hC&&this.cachedEventUids.clear(),this.cachedEventUids.has(dg(e))}saveEventToCache(e){this.cachedEventUids.add(dg(e)),this.lastProcessedEventTime=Date.now()}}function dg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function P0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return P0(t);default:return!1}}/**
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
 */async function pC(t,e={}){return is(t,"GET","/v1/projects",e)}/**
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
 */const mC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gC=/^https?/;async function yC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pC(t);for(const n of e)try{if(_C(n))return}catch{}Tn(t,"unauthorized-domain")}function _C(t){const e=kh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gC.test(n))return!1;if(mC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const vC=new Fo(3e4,6e4);function fg(){const t=en().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wC(t){return new Promise((e,n)=>{var i,s,o;function r(){fg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fg(),n(Zt(t,"network-request-failed"))},timeout:vC.get()})}if((s=(i=en().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=en().gapi)!=null&&o.load)r();else{const l=IA("iframefcb");return en()[l]=()=>{gapi.load?r():n(Zt(t,"network-request-failed"))},EA(`${TA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw $a=null,e})}let $a=null;function EC(t){return $a=$a||wC(t),$a}/**
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
 */const TC=new Fo(5e3,15e3),IC="__/auth/iframe",SC="emulator/auth/iframe",AC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RC(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kd(e,SC):`https://${t.config.authDomain}/${IC}`,r={apiKey:e.apiKey,appName:t.name,v:rs},i=CC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${bo(r).slice(1)}`}async function PC(t){const e=await EC(t),n=en().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:RC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:AC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(t,"network-request-failed"),l=en().setTimeout(()=>{s(o)},TC.get());function u(){en().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const kC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NC=500,xC=600,DC="_blank",VC="http://localhost";class pg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OC(t,e,n,r=NC,i=xC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...kC,width:r.toString(),height:i.toString(),top:s,left:o},h=tt().toLowerCase();n&&(l=l0(h)?DC:n),o0(h)&&(e=e||VC,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[A,k])=>`${g}${A}=${k},`,"");if(fA(h)&&l!=="_self")return LC(e||"",l),new pg(null);const p=window.open(e||"",l,f);G(p,t,"popup-blocked");try{p.focus()}catch{}return new pg(p)}function LC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const MC="__/auth/handler",bC="emulator/auth/handler",FC=encodeURIComponent("fac");async function mg(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:rs,eventId:i};if(e instanceof y0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",MI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(s||{}))o[f]=p}if(e instanceof Uo){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${FC}=${encodeURIComponent(u)}`:"";return`${UC(t)}?${bo(l).slice(1)}${h}`}function UC({config:t}){return t.emulator?Kd(t,bC):`https://${t.authDomain}/${MC}`}/**
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
 */const Sc="webStorageSupport";class jC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=T0,this._completeRedirectFn=cC,this._overrideRedirectResult=aC}async _openPopup(e,n,r,i){var o;In((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await mg(e,n,r,kh(),i);return OC(e,s,Jd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await mg(e,n,r,kh(),i);return $A(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(In(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await PC(e),r=new dC(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sc,{type:Sc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Sc];s!==void 0&&n(!!s),Tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return f0()||a0()||Xd()}}const zC=jC;var gg="@firebase/auth",yg="1.11.0";/**
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
 */class BC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $C(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qC(t){Wi(new Kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:p0(t)},h=new vA(r,i,s,u);return AA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wi(new Kr("auth-internal",e=>{const n=su(e.getProvider("auth").getImmediate());return(r=>new BC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(gg,yg,$C(t)),or(gg,yg,"esm2020")}/**
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
 */const HC=5*60,WC=Bv("authIdTokenMaxAge")||HC;let _g=null;const GC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>WC)return;const i=n==null?void 0:n.token;_g!==i&&(_g=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function KC(t=Kv()){const e=Wd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=SA(t,{popupRedirectResolver:zC,persistence:[JA,jA,T0]}),r=Bv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=GC(s.toString());MA(n,o,()=>o(n.currentUser)),LA(n,l=>o(l))}}const i=jv("auth");return i&&CA(n,`http://${i}`),n}function QC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}wA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Zt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",QC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qC("Browser");var vg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lr,k0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,y){function w(){}w.prototype=y.prototype,_.F=y.prototype,_.prototype=new w,_.prototype.constructor=_,_.D=function(I,S,P){for(var T=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)T[Re-2]=arguments[Re];return y.prototype[S].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(_,y,w){w||(w=0);const I=Array(16);if(typeof y=="string")for(var S=0;S<16;++S)I[S]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(S=0;S<16;++S)I[S]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=_.g[0],w=_.g[1],S=_.g[2];let P=_.g[3],T;T=y+(P^w&(S^P))+I[0]+3614090360&4294967295,y=w+(T<<7&4294967295|T>>>25),T=P+(S^y&(w^S))+I[1]+3905402710&4294967295,P=y+(T<<12&4294967295|T>>>20),T=S+(w^P&(y^w))+I[2]+606105819&4294967295,S=P+(T<<17&4294967295|T>>>15),T=w+(y^S&(P^y))+I[3]+3250441966&4294967295,w=S+(T<<22&4294967295|T>>>10),T=y+(P^w&(S^P))+I[4]+4118548399&4294967295,y=w+(T<<7&4294967295|T>>>25),T=P+(S^y&(w^S))+I[5]+1200080426&4294967295,P=y+(T<<12&4294967295|T>>>20),T=S+(w^P&(y^w))+I[6]+2821735955&4294967295,S=P+(T<<17&4294967295|T>>>15),T=w+(y^S&(P^y))+I[7]+4249261313&4294967295,w=S+(T<<22&4294967295|T>>>10),T=y+(P^w&(S^P))+I[8]+1770035416&4294967295,y=w+(T<<7&4294967295|T>>>25),T=P+(S^y&(w^S))+I[9]+2336552879&4294967295,P=y+(T<<12&4294967295|T>>>20),T=S+(w^P&(y^w))+I[10]+4294925233&4294967295,S=P+(T<<17&4294967295|T>>>15),T=w+(y^S&(P^y))+I[11]+2304563134&4294967295,w=S+(T<<22&4294967295|T>>>10),T=y+(P^w&(S^P))+I[12]+1804603682&4294967295,y=w+(T<<7&4294967295|T>>>25),T=P+(S^y&(w^S))+I[13]+4254626195&4294967295,P=y+(T<<12&4294967295|T>>>20),T=S+(w^P&(y^w))+I[14]+2792965006&4294967295,S=P+(T<<17&4294967295|T>>>15),T=w+(y^S&(P^y))+I[15]+1236535329&4294967295,w=S+(T<<22&4294967295|T>>>10),T=y+(S^P&(w^S))+I[1]+4129170786&4294967295,y=w+(T<<5&4294967295|T>>>27),T=P+(w^S&(y^w))+I[6]+3225465664&4294967295,P=y+(T<<9&4294967295|T>>>23),T=S+(y^w&(P^y))+I[11]+643717713&4294967295,S=P+(T<<14&4294967295|T>>>18),T=w+(P^y&(S^P))+I[0]+3921069994&4294967295,w=S+(T<<20&4294967295|T>>>12),T=y+(S^P&(w^S))+I[5]+3593408605&4294967295,y=w+(T<<5&4294967295|T>>>27),T=P+(w^S&(y^w))+I[10]+38016083&4294967295,P=y+(T<<9&4294967295|T>>>23),T=S+(y^w&(P^y))+I[15]+3634488961&4294967295,S=P+(T<<14&4294967295|T>>>18),T=w+(P^y&(S^P))+I[4]+3889429448&4294967295,w=S+(T<<20&4294967295|T>>>12),T=y+(S^P&(w^S))+I[9]+568446438&4294967295,y=w+(T<<5&4294967295|T>>>27),T=P+(w^S&(y^w))+I[14]+3275163606&4294967295,P=y+(T<<9&4294967295|T>>>23),T=S+(y^w&(P^y))+I[3]+4107603335&4294967295,S=P+(T<<14&4294967295|T>>>18),T=w+(P^y&(S^P))+I[8]+1163531501&4294967295,w=S+(T<<20&4294967295|T>>>12),T=y+(S^P&(w^S))+I[13]+2850285829&4294967295,y=w+(T<<5&4294967295|T>>>27),T=P+(w^S&(y^w))+I[2]+4243563512&4294967295,P=y+(T<<9&4294967295|T>>>23),T=S+(y^w&(P^y))+I[7]+1735328473&4294967295,S=P+(T<<14&4294967295|T>>>18),T=w+(P^y&(S^P))+I[12]+2368359562&4294967295,w=S+(T<<20&4294967295|T>>>12),T=y+(w^S^P)+I[5]+4294588738&4294967295,y=w+(T<<4&4294967295|T>>>28),T=P+(y^w^S)+I[8]+2272392833&4294967295,P=y+(T<<11&4294967295|T>>>21),T=S+(P^y^w)+I[11]+1839030562&4294967295,S=P+(T<<16&4294967295|T>>>16),T=w+(S^P^y)+I[14]+4259657740&4294967295,w=S+(T<<23&4294967295|T>>>9),T=y+(w^S^P)+I[1]+2763975236&4294967295,y=w+(T<<4&4294967295|T>>>28),T=P+(y^w^S)+I[4]+1272893353&4294967295,P=y+(T<<11&4294967295|T>>>21),T=S+(P^y^w)+I[7]+4139469664&4294967295,S=P+(T<<16&4294967295|T>>>16),T=w+(S^P^y)+I[10]+3200236656&4294967295,w=S+(T<<23&4294967295|T>>>9),T=y+(w^S^P)+I[13]+681279174&4294967295,y=w+(T<<4&4294967295|T>>>28),T=P+(y^w^S)+I[0]+3936430074&4294967295,P=y+(T<<11&4294967295|T>>>21),T=S+(P^y^w)+I[3]+3572445317&4294967295,S=P+(T<<16&4294967295|T>>>16),T=w+(S^P^y)+I[6]+76029189&4294967295,w=S+(T<<23&4294967295|T>>>9),T=y+(w^S^P)+I[9]+3654602809&4294967295,y=w+(T<<4&4294967295|T>>>28),T=P+(y^w^S)+I[12]+3873151461&4294967295,P=y+(T<<11&4294967295|T>>>21),T=S+(P^y^w)+I[15]+530742520&4294967295,S=P+(T<<16&4294967295|T>>>16),T=w+(S^P^y)+I[2]+3299628645&4294967295,w=S+(T<<23&4294967295|T>>>9),T=y+(S^(w|~P))+I[0]+4096336452&4294967295,y=w+(T<<6&4294967295|T>>>26),T=P+(w^(y|~S))+I[7]+1126891415&4294967295,P=y+(T<<10&4294967295|T>>>22),T=S+(y^(P|~w))+I[14]+2878612391&4294967295,S=P+(T<<15&4294967295|T>>>17),T=w+(P^(S|~y))+I[5]+4237533241&4294967295,w=S+(T<<21&4294967295|T>>>11),T=y+(S^(w|~P))+I[12]+1700485571&4294967295,y=w+(T<<6&4294967295|T>>>26),T=P+(w^(y|~S))+I[3]+2399980690&4294967295,P=y+(T<<10&4294967295|T>>>22),T=S+(y^(P|~w))+I[10]+4293915773&4294967295,S=P+(T<<15&4294967295|T>>>17),T=w+(P^(S|~y))+I[1]+2240044497&4294967295,w=S+(T<<21&4294967295|T>>>11),T=y+(S^(w|~P))+I[8]+1873313359&4294967295,y=w+(T<<6&4294967295|T>>>26),T=P+(w^(y|~S))+I[15]+4264355552&4294967295,P=y+(T<<10&4294967295|T>>>22),T=S+(y^(P|~w))+I[6]+2734768916&4294967295,S=P+(T<<15&4294967295|T>>>17),T=w+(P^(S|~y))+I[13]+1309151649&4294967295,w=S+(T<<21&4294967295|T>>>11),T=y+(S^(w|~P))+I[4]+4149444226&4294967295,y=w+(T<<6&4294967295|T>>>26),T=P+(w^(y|~S))+I[11]+3174756917&4294967295,P=y+(T<<10&4294967295|T>>>22),T=S+(y^(P|~w))+I[2]+718787259&4294967295,S=P+(T<<15&4294967295|T>>>17),T=w+(P^(S|~y))+I[9]+3951481745&4294967295,_.g[0]=_.g[0]+y&4294967295,_.g[1]=_.g[1]+(S+(T<<21&4294967295|T>>>11))&4294967295,_.g[2]=_.g[2]+S&4294967295,_.g[3]=_.g[3]+P&4294967295}r.prototype.v=function(_,y){y===void 0&&(y=_.length);const w=y-this.blockSize,I=this.C;let S=this.h,P=0;for(;P<y;){if(S==0)for(;P<=w;)i(this,_,P),P+=this.blockSize;if(typeof _=="string"){for(;P<y;)if(I[S++]=_.charCodeAt(P++),S==this.blockSize){i(this,I),S=0;break}}else for(;P<y;)if(I[S++]=_[P++],S==this.blockSize){i(this,I),S=0;break}}this.h=S,this.o+=y},r.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var y=1;y<_.length-8;++y)_[y]=0;y=this.o*8;for(var w=_.length-8;w<_.length;++w)_[w]=y&255,y/=256;for(this.v(_),_=Array(16),y=0,w=0;w<4;++w)for(let I=0;I<32;I+=8)_[y++]=this.g[w]>>>I&255;return _};function s(_,y){var w=l;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=y(_)}function o(_,y){this.h=y;const w=[];let I=!0;for(let S=_.length-1;S>=0;S--){const P=_[S]|0;I&&P==y||(w[S]=P,I=!1)}this.g=w}var l={};function u(_){return-128<=_&&_<128?s(_,function(y){return new o([y|0],y<0?-1:0)}):new o([_|0],_<0?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return p;if(_<0)return D(h(-_));const y=[];let w=1;for(let I=0;_>=w;I++)y[I]=_/w|0,w*=4294967296;return new o(y,0)}function f(_,y){if(_.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(_.charAt(0)=="-")return D(f(_.substring(1),y));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(y,8));let I=p;for(let P=0;P<_.length;P+=8){var S=Math.min(8,_.length-P);const T=parseInt(_.substring(P,P+S),y);S<8?(S=h(Math.pow(y,S)),I=I.j(S).add(h(T))):(I=I.j(w),I=I.add(h(T)))}return I}var p=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(x(this))return-D(this).m();let _=0,y=1;for(let w=0;w<this.g.length;w++){const I=this.i(w);_+=(I>=0?I:4294967296+I)*y,y*=4294967296}return _},t.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(k(this))return"0";if(x(this))return"-"+D(this).toString(_);const y=h(Math.pow(_,6));var w=this;let I="";for(;;){const S=O(w,y).g;w=E(w,S.j(y));let P=((w.g.length>0?w.g[0]:w.h)>>>0).toString(_);if(w=S,k(w))return P+I;for(;P.length<6;)P="0"+P;I=P+I}},t.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function k(_){if(_.h!=0)return!1;for(let y=0;y<_.g.length;y++)if(_.g[y]!=0)return!1;return!0}function x(_){return _.h==-1}t.l=function(_){return _=E(this,_),x(_)?-1:k(_)?0:1};function D(_){const y=_.g.length,w=[];for(let I=0;I<y;I++)w[I]=~_.g[I];return new o(w,~_.h).add(g)}t.abs=function(){return x(this)?D(this):this},t.add=function(_){const y=Math.max(this.g.length,_.g.length),w=[];let I=0;for(let S=0;S<=y;S++){let P=I+(this.i(S)&65535)+(_.i(S)&65535),T=(P>>>16)+(this.i(S)>>>16)+(_.i(S)>>>16);I=T>>>16,P&=65535,T&=65535,w[S]=T<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function E(_,y){return _.add(D(y))}t.j=function(_){if(k(this)||k(_))return p;if(x(this))return x(_)?D(this).j(D(_)):D(D(this).j(_));if(x(_))return D(this.j(D(_)));if(this.l(A)<0&&_.l(A)<0)return h(this.m()*_.m());const y=this.g.length+_.g.length,w=[];for(var I=0;I<2*y;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(let S=0;S<_.g.length;S++){const P=this.i(I)>>>16,T=this.i(I)&65535,Re=_.i(S)>>>16,We=_.i(S)&65535;w[2*I+2*S]+=T*We,v(w,2*I+2*S),w[2*I+2*S+1]+=P*We,v(w,2*I+2*S+1),w[2*I+2*S+1]+=T*Re,v(w,2*I+2*S+1),w[2*I+2*S+2]+=P*Re,v(w,2*I+2*S+2)}for(_=0;_<y;_++)w[_]=w[2*_+1]<<16|w[2*_];for(_=y;_<2*y;_++)w[_]=0;return new o(w,0)};function v(_,y){for(;(_[y]&65535)!=_[y];)_[y+1]+=_[y]>>>16,_[y]&=65535,y++}function C(_,y){this.g=_,this.h=y}function O(_,y){if(k(y))throw Error("division by zero");if(k(_))return new C(p,p);if(x(_))return y=O(D(_),y),new C(D(y.g),D(y.h));if(x(y))return y=O(_,D(y)),new C(D(y.g),y.h);if(_.g.length>30){if(x(_)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var w=g,I=y;I.l(_)<=0;)w=U(w),I=U(I);var S=j(w,1),P=j(I,1);for(I=j(I,2),w=j(w,2);!k(I);){var T=P.add(I);T.l(_)<=0&&(S=S.add(w),P=T),I=j(I,1),w=j(w,1)}return y=E(_,S.j(y)),new C(S,y)}for(S=p;_.l(y)>=0;){for(w=Math.max(1,Math.floor(_.m()/y.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),P=h(w),T=P.j(y);x(T)||T.l(_)>0;)w-=I,P=h(w),T=P.j(y);k(P)&&(P=g),S=S.add(P),_=E(_,T)}return new C(S,_)}t.B=function(_){return O(this,_).h},t.and=function(_){const y=Math.max(this.g.length,_.g.length),w=[];for(let I=0;I<y;I++)w[I]=this.i(I)&_.i(I);return new o(w,this.h&_.h)},t.or=function(_){const y=Math.max(this.g.length,_.g.length),w=[];for(let I=0;I<y;I++)w[I]=this.i(I)|_.i(I);return new o(w,this.h|_.h)},t.xor=function(_){const y=Math.max(this.g.length,_.g.length),w=[];for(let I=0;I<y;I++)w[I]=this.i(I)^_.i(I);return new o(w,this.h^_.h)};function U(_){const y=_.g.length+1,w=[];for(let I=0;I<y;I++)w[I]=_.i(I)<<1|_.i(I-1)>>>31;return new o(w,_.h)}function j(_,y){const w=y>>5;y%=32;const I=_.g.length-w,S=[];for(let P=0;P<I;P++)S[P]=y>0?_.i(P+w)>>>y|_.i(P+w+1)<<32-y:_.i(P+w);return new o(S,_.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,k0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,lr=o}).apply(typeof vg<"u"?vg:typeof self<"u"?self:typeof window<"u"?window:{});var Ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var N0,bs,x0,qa,Dh,D0,V0,O0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ia=="object"&&Ia];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var R=a[m];if(!(R in d))break e;d=d[R]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(c){var d=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&d.push([m,c[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function f(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,R,N){for(var F=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)F[Z-2]=arguments[Z];return c.prototype[R].apply(m,F)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const c=a.length;if(c>0){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function k(a,c){for(let m=1;m<arguments.length;m++){const R=arguments[m];var d=typeof R;if(d=d!="object"?d:R?Array.isArray(R)?"array":d:"null",d=="array"||d=="object"&&typeof R.length=="number"){d=a.length||0;const N=R.length||0;a.length=d+N;for(let F=0;F<N;F++)a[d+F]=R[F]}else a.push(R)}}class x{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function D(a){o.setTimeout(()=>{throw a},0)}function E(){var a=_;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class v{constructor(){this.h=this.g=null}add(c,d){const m=C.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var C=new x(()=>new O,a=>a.reset());class O{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let U,j=!1,_=new v,y=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(w)}};function w(){for(var a;a=E();){try{a.h.call(a.g)}catch(d){D(d)}var c=C;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}j=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function Re(a,c){S.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p(Re,S),Re.prototype.init=function(a,c){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Re.Z.h.call(this)},Re.prototype.h=function(){Re.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var We="closure_listenable_"+(Math.random()*1e6|0),Pn=0;function Tr(a,c,d,m,R){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=R,this.key=++Pn,this.da=this.fa=!1}function B(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function K(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function J(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function me(a){const c={};for(const d in a)c[d]=a[d];return c}const Ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ir(a,c){let d,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(d in m)a[d]=m[d];for(let N=0;N<Ie.length;N++)d=Ie[N],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function Tt(a){this.src=a,this.g={},this.h=0}Tt.prototype.add=function(a,c,d,m,R){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const F=Dt(a,c,m,R);return F>-1?(c=a[F],d||(c.fa=!1)):(c=new Tr(c,this.src,N,!!m,R),c.fa=d,a.push(c)),c};function Sr(a,c){const d=c.type;if(d in a.g){var m=a.g[d],R=Array.prototype.indexOf.call(m,c,void 0),N;(N=R>=0)&&Array.prototype.splice.call(m,R,1),N&&(B(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Dt(a,c,d,m){for(let R=0;R<a.length;++R){const N=a[R];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==m)return R}return-1}var kn="closure_lm_"+(Math.random()*1e6|0),Su={};function Ff(a,c,d,m,R){if(m&&m.once)return jf(a,c,d,m,R);if(Array.isArray(c)){for(let N=0;N<c.length;N++)Ff(a,c[N],d,m,R);return null}return d=Pu(d),a&&a[We]?a.J(c,d,l(m)?!!m.capture:!!m,R):Uf(a,c,d,!1,m,R)}function Uf(a,c,d,m,R,N){if(!c)throw Error("Invalid event type");const F=l(R)?!!R.capture:!!R;let Z=Cu(a);if(Z||(a[kn]=Z=new Tt(a)),d=Z.add(c,d,m,F,N),d.proxy)return d;if(m=hE(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)P||(R=F),R===void 0&&(R=!1),a.addEventListener(c.toString(),m,R);else if(a.attachEvent)a.attachEvent(Bf(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function hE(){function a(d){return c.call(a.src,a.listener,d)}const c=dE;return a}function jf(a,c,d,m,R){if(Array.isArray(c)){for(let N=0;N<c.length;N++)jf(a,c[N],d,m,R);return null}return d=Pu(d),a&&a[We]?a.K(c,d,l(m)?!!m.capture:!!m,R):Uf(a,c,d,!0,m,R)}function zf(a,c,d,m,R){if(Array.isArray(c))for(var N=0;N<c.length;N++)zf(a,c[N],d,m,R);else m=l(m)?!!m.capture:!!m,d=Pu(d),a&&a[We]?(a=a.i,N=String(c).toString(),N in a.g&&(c=a.g[N],d=Dt(c,d,m,R),d>-1&&(B(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[N],a.h--)))):a&&(a=Cu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Dt(c,d,m,R)),(d=a>-1?c[a]:null)&&Au(d))}function Au(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[We])Sr(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(Bf(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=Cu(c))?(Sr(d,a),d.h==0&&(d.src=null,c[kn]=null)):B(a)}}}function Bf(a){return a in Su?Su[a]:Su[a]="on"+a}function dE(a,c){if(a.da)a=!0;else{c=new Re(c,this);const d=a.listener,m=a.ha||a.src;a.fa&&Au(a),a=d.call(m,c)}return a}function Cu(a){return a=a[kn],a instanceof Tt?a:null}var Ru="__closure_events_fn_"+(Math.random()*1e9>>>0);function Pu(a){return typeof a=="function"?a:(a[Ru]||(a[Ru]=function(c){return a.handleEvent(c)}),a[Ru])}function Ge(){I.call(this),this.i=new Tt(this),this.M=this,this.G=null}p(Ge,I),Ge.prototype[We]=!0,Ge.prototype.removeEventListener=function(a,c,d,m){zf(this,a,c,d,m)};function nt(a,c){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new S(c,a);else if(c instanceof S)c.target=c.target||a;else{var R=c;c=new S(m,a),Ir(c,R)}R=!0;let N,F;if(d)for(F=d.length-1;F>=0;F--)N=c.g=d[F],R=Go(N,m,!0,c)&&R;if(N=c.g=a,R=Go(N,m,!0,c)&&R,R=Go(N,m,!1,c)&&R,d)for(F=0;F<d.length;F++)N=c.g=d[F],R=Go(N,m,!1,c)&&R}Ge.prototype.N=function(){if(Ge.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let m=0;m<d.length;m++)B(d[m]);delete a.g[c],a.h--}}this.G=null},Ge.prototype.J=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},Ge.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function Go(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let R=!0;for(let N=0;N<c.length;++N){const F=c[N];if(F&&!F.da&&F.capture==d){const Z=F.listener,De=F.ha||F.src;F.fa&&Sr(a.i,F),R=Z.call(De,m)!==!1&&R}}return R&&!m.defaultPrevented}function fE(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function $f(a){a.g=fE(()=>{a.g=null,a.i&&(a.i=!1,$f(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class pE extends I{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:$f(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function us(a){I.call(this),this.h=a,this.g={}}p(us,I);var qf=[];function Hf(a){K(a.g,function(c,d){this.g.hasOwnProperty(d)&&Au(c)},a),a.g={}}us.prototype.N=function(){us.Z.N.call(this),Hf(this)},us.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ku=o.JSON.stringify,mE=o.JSON.parse,gE=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Wf(){}function Gf(){}var cs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Nu(){S.call(this,"d")}p(Nu,S);function xu(){S.call(this,"c")}p(xu,S);var Ar={},Kf=null;function Ko(){return Kf=Kf||new Ge}Ar.Ia="serverreachability";function Qf(a){S.call(this,Ar.Ia,a)}p(Qf,S);function hs(a){const c=Ko();nt(c,new Qf(c))}Ar.STAT_EVENT="statevent";function Xf(a,c){S.call(this,Ar.STAT_EVENT,a),this.stat=c}p(Xf,S);function rt(a){const c=Ko();nt(c,new Xf(c,a))}Ar.Ja="timingevent";function Yf(a,c){S.call(this,Ar.Ja,a),this.size=c}p(Yf,S);function ds(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function fs(){this.g=!0}fs.prototype.ua=function(){this.g=!1};function yE(a,c,d,m,R,N){a.info(function(){if(a.g)if(N){var F="",Z=N.split("&");for(let ue=0;ue<Z.length;ue++){var De=Z[ue].split("=");if(De.length>1){const Me=De[0];De=De[1];const Wt=Me.split("_");F=Wt.length>=2&&Wt[1]=="type"?F+(Me+"="+De+"&"):F+(Me+"=redacted&")}}}else F=null;else F=N;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+c+`
`+d+`
`+F})}function _E(a,c,d,m,R,N,F){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+c+`
`+d+`
`+N+" "+F})}function ai(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+wE(a,d)+(m?" "+m:"")})}function vE(a,c){a.info(function(){return"TIMEOUT: "+c})}fs.prototype.info=function(){};function wE(a,c){if(!a.g)return c;if(!c)return null;try{const N=JSON.parse(c);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var d=N[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var R=m[0];if(R!="noop"&&R!="stop"&&R!="close")for(let F=1;F<m.length;F++)m[F]=""}}}}return ku(N)}catch{return c}}var Qo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Jf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Zf;function Du(){}p(Du,Wf),Du.prototype.g=function(){return new XMLHttpRequest},Zf=new Du;function ps(a){return encodeURIComponent(String(a))}function EE(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function Nn(a,c,d,m){this.j=a,this.i=c,this.l=d,this.S=m||1,this.V=new us(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ep}function ep(){this.i=null,this.g="",this.h=!1}var tp={},Vu={};function Ou(a,c,d){a.M=1,a.A=Yo(Ht(c)),a.u=d,a.R=!0,np(a,null)}function np(a,c){a.F=Date.now(),Xo(a),a.B=Ht(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),mp(d.i,"t",m),a.C=0,d=a.j.L,a.h=new ep,a.g=Vp(a.j,d?c:null,!a.u),a.P>0&&(a.O=new pE(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,m=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(qf[0]=R.toString()),R=qf);for(let N=0;N<R.length;N++){const F=Ff(d,R[N],m||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=a.J?me(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),hs(),yE(a.i,a.v,a.B,a.l,a.S,a.u)}Nn.prototype.ba=function(a){a=a.target;const c=this.O;c&&Vn(a)==3?c.j():this.Y(a)},Nn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=Vn(this.g),De=this.g.ya(),ue=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||Tp(this.g)))){this.K||Z!=4||De==7||(De==8||ue<=0?hs(3):hs(2)),Lu(this);var c=this.g.ca();this.X=c;var d=TE(this);if(this.o=c==200,_E(this.i,this.v,this.B,this.l,this.S,Z,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,R=this.g;if((m=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(m)){var N=m;break t}}N=null}if(a=N)ai(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Mu(this,a);else{this.o=!1,this.m=3,rt(12),Cr(this),ms(this);break e}}if(this.R){a=!0;let Me;for(;!this.K&&this.C<d.length;)if(Me=IE(this,d),Me==Vu){Z==4&&(this.m=4,rt(14),a=!1),ai(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==tp){this.m=4,rt(15),ai(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else ai(this.i,this.l,Me,null),Mu(this,Me);if(rp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||d.length!=0||this.h.h||(this.m=1,rt(16),a=!1),this.o=this.o&&a,!a)ai(this.i,this.l,d,"[Invalid Chunked Response]"),Cr(this),ms(this);else if(d.length>0&&!this.W){this.W=!0;var F=this.j;F.g==this&&F.aa&&!F.P&&(F.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),qu(F),F.P=!0,rt(11))}}else ai(this.i,this.l,d,null),Mu(this,d);Z==4&&Cr(this),this.o&&!this.K&&(Z==4?kp(this.j,this):(this.o=!1,Xo(this)))}else bE(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),Cr(this),ms(this)}}}catch{}finally{}};function TE(a){if(!rp(a))return a.g.la();const c=Tp(a.g);if(c==="")return"";let d="";const m=c.length,R=Vn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Cr(a),ms(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<m;N++)a.h.h=!0,d+=a.h.i.decode(c[N],{stream:!(R&&N==m-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function rp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function IE(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?Vu:(d=Number(c.substring(d,m)),isNaN(d)?tp:(m+=1,m+d>c.length?Vu:(c=c.slice(m,m+d),a.C=m+d,c)))}Nn.prototype.cancel=function(){this.K=!0,Cr(this)};function Xo(a){a.T=Date.now()+a.H,ip(a,a.H)}function ip(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ds(h(a.aa,a),c)}function Lu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Nn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(vE(this.i,this.B),this.M!=2&&(hs(),rt(17)),Cr(this),this.m=2,ms(this)):ip(this,this.T-a)};function ms(a){a.j.I==0||a.K||kp(a.j,a)}function Cr(a){Lu(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Hf(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function Mu(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||bu(d.h,a))){if(!a.L&&bu(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)na(d),ea(d);else break e;$u(d),rt(18)}}else d.xa=R[1],0<d.xa-d.K&&R[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=ds(h(d.Va,d),6e3));ap(d.h)<=1&&d.ta&&(d.ta=void 0)}else Pr(d,11)}else if((a.L||d.g==a)&&na(d),!T(c))for(R=d.Ba.g.parse(c),c=0;c<R.length;c++){let ue=R[c];const Me=ue[0];if(!(Me<=d.K))if(d.K=Me,ue=ue[1],d.I==2)if(ue[0]=="c"){d.M=ue[1],d.ba=ue[2];const Wt=ue[3];Wt!=null&&(d.ka=Wt,d.j.info("VER="+d.ka));const kr=ue[4];kr!=null&&(d.za=kr,d.j.info("SVER="+d.za));const On=ue[5];On!=null&&typeof On=="number"&&On>0&&(m=1.5*On,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ln=a.g;if(Ln){const ia=Ln.g?Ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ia){var N=m.h;N.g||ia.indexOf("spdy")==-1&&ia.indexOf("quic")==-1&&ia.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Fu(N,N.h),N.h=null))}if(m.G){const Hu=Ln.g?Ln.g.getResponseHeader("X-HTTP-Session-Id"):null;Hu&&(m.wa=Hu,de(m.J,m.G,Hu))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var F=a;if(m.na=Dp(m,m.L?m.ba:null,m.W),F.L){lp(m.h,F);var Z=F,De=m.O;De&&(Z.H=De),Z.D&&(Lu(Z),Xo(Z)),m.g=F}else Rp(m);d.i.length>0&&ta(d)}else ue[0]!="stop"&&ue[0]!="close"||Pr(d,7);else d.I==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Pr(d,7):Bu(d):ue[0]!="noop"&&d.l&&d.l.qa(ue),d.A=0)}}hs(4)}catch{}}var SE=class{constructor(a,c){this.g=a,this.map=c}};function sp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function op(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ap(a){return a.h?1:a.g?a.g.size:0}function bu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Fu(a,c){a.g?a.g.add(c):a.h=c}function lp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}sp.prototype.cancel=function(){if(this.i=up(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function up(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return A(a.i)}var cp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function AE(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let R,N=null;m>=0?(R=a[d].substring(0,m),N=a[d].substring(m+1)):R=a[d],c(R,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function xn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof xn?(this.l=a.l,gs(this,a.j),this.o=a.o,this.g=a.g,ys(this,a.u),this.h=a.h,Uu(this,gp(a.i)),this.m=a.m):a&&(c=String(a).match(cp))?(this.l=!1,gs(this,c[1]||"",!0),this.o=_s(c[2]||""),this.g=_s(c[3]||"",!0),ys(this,c[4]),this.h=_s(c[5]||"",!0),Uu(this,c[6]||"",!0),this.m=_s(c[7]||"")):(this.l=!1,this.i=new ws(null,this.l))}xn.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(vs(c,hp,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(vs(c,hp,!0),"@"),a.push(ps(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(vs(d,d.charAt(0)=="/"?PE:RE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",vs(d,NE)),a.join("")},xn.prototype.resolve=function(a){const c=Ht(this);let d=!!a.j;d?gs(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var m=a.h;if(d)ys(c,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var R=c.h.lastIndexOf("/");R!=-1&&(m=c.h.slice(0,R+1)+m)}if(R=m,R==".."||R==".")m="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){m=R.lastIndexOf("/",0)==0,R=R.split("/");const N=[];for(let F=0;F<R.length;){const Z=R[F++];Z=="."?m&&F==R.length&&N.push(""):Z==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),m&&F==R.length&&N.push("")):(N.push(Z),m=!0)}m=N.join("/")}else m=R}return d?c.h=m:d=a.i.toString()!=="",d?Uu(c,gp(a.i)):d=!!a.m,d&&(c.m=a.m),c};function Ht(a){return new xn(a)}function gs(a,c,d){a.j=d?_s(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ys(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Uu(a,c,d){c instanceof ws?(a.i=c,xE(a.i,a.l)):(d||(c=vs(c,kE)),a.i=new ws(c,a.l))}function de(a,c,d){a.i.set(c,d)}function Yo(a){return de(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function _s(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function vs(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,CE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function CE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var hp=/[#\/\?@]/g,RE=/[#\?:]/g,PE=/[#\?]/g,kE=/[#\?@]/g,NE=/#/g;function ws(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Rr(a){a.g||(a.g=new Map,a.h=0,a.i&&AE(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ws.prototype,t.add=function(a,c){Rr(this),this.i=null,a=li(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function dp(a,c){Rr(a),c=li(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function fp(a,c){return Rr(a),c=li(a,c),a.g.has(c)}t.forEach=function(a,c){Rr(this),this.g.forEach(function(d,m){d.forEach(function(R){a.call(c,R,m,this)},this)},this)};function pp(a,c){Rr(a);let d=[];if(typeof c=="string")fp(a,c)&&(d=d.concat(a.g.get(li(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return Rr(this),this.i=null,a=li(this,a),fp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=pp(this,a),a.length>0?String(a[0]):c):c};function mp(a,c,d){dp(a,c),d.length>0&&(a.i=null,a.g.set(li(a,c),A(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var d=c[m];const R=ps(d);d=pp(this,d);for(let N=0;N<d.length;N++){let F=R;d[N]!==""&&(F+="="+ps(d[N])),a.push(F)}}return this.i=a.join("&")};function gp(a){const c=new ws;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function li(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function xE(a,c){c&&!a.j&&(Rr(a),a.i=null,a.g.forEach(function(d,m){const R=m.toLowerCase();m!=R&&(dp(this,m),mp(this,R,d))},a)),a.j=c}function DE(a,c){const d=new fs;if(o.Image){const m=new Image;m.onload=f(Dn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=f(Dn,d,"TestLoadImage: error",!1,c,m),m.onabort=f(Dn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=f(Dn,d,"TestLoadImage: timeout",!1,c,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function VE(a,c){const d=new fs,m=new AbortController,R=setTimeout(()=>{m.abort(),Dn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(R),N.ok?Dn(d,"TestPingServer: ok",!0,c):Dn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Dn(d,"TestPingServer: error",!1,c)})}function Dn(a,c,d,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(d)}catch{}}function OE(){this.g=new gE}function ju(a){this.i=a.Sb||null,this.h=a.ab||!1}p(ju,Wf),ju.prototype.g=function(){return new Jo(this.i,this.h)};function Jo(a,c){Ge.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Jo,Ge),t=Jo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,Ts(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Es(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;yp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function yp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Es(this):Ts(this),this.readyState==3&&yp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Es(this))},t.Na=function(a){this.g&&(this.response=a,Es(this))},t.ga=function(){this.g&&Es(this)};function Es(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ts(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Ts(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function _p(a){let c="";return K(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function zu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=_p(d),typeof a=="string"?d!=null&&ps(d):de(a,c,d))}function Ee(a){Ge.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ee,Ge);var LE=/^https?$/i,ME=["POST","PUT"];t=Ee.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Zf.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){vp(this,N);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)d.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())d.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(ME,c,void 0)>=0)||m||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,F]of d)this.g.setRequestHeader(N,F);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){vp(this,N)}};function vp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,wp(a),Zo(a)}function wp(a){a.A||(a.A=!0,nt(a,"complete"),nt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,nt(this,"complete"),nt(this,"abort"),Zo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zo(this,!0)),Ee.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Ep(this):this.Xa())},t.Xa=function(){Ep(this)};function Ep(a){if(a.h&&typeof s<"u"){if(a.v&&Vn(a)==4)setTimeout(a.Ca.bind(a),0);else if(nt(a,"readystatechange"),Vn(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=N===0){let F=String(a.D).match(cp)[1]||null;!F&&o.self&&o.self.location&&(F=o.self.location.protocol.slice(0,-1)),m=!LE.test(F?F.toLowerCase():"")}d=m}if(d)nt(a,"complete"),nt(a,"success");else{a.o=6;try{var R=Vn(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",wp(a)}}finally{Zo(a)}}}}function Zo(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||nt(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Vn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Vn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),mE(c)}};function Tp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function bE(a){const c={};a=(a.g&&Vn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(T(a[m]))continue;var d=EE(a[m]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[R]||[];c[R]=N,N.push(d)}J(c,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Is(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Ip(a){this.za=0,this.i=[],this.j=new fs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Is("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Is("baseRetryDelayMs",5e3,a),this.Za=Is("retryDelaySeedMs",1e4,a),this.Ta=Is("forwardChannelMaxRetries",2,a),this.va=Is("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new sp(a&&a.concurrentRequestLimit),this.Ba=new OE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Ip.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,m){rt(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=Dp(this,null,this.W),ta(this)};function Bu(a){if(Sp(a),a.I==3){var c=a.V++,d=Ht(a.J);if(de(d,"SID",a.M),de(d,"RID",c),de(d,"TYPE","terminate"),Ss(a,d),c=new Nn(a,a.j,c),c.M=2,c.A=Yo(Ht(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=Vp(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Xo(c)}xp(a)}function ea(a){a.g&&(qu(a),a.g.cancel(),a.g=null)}function Sp(a){ea(a),a.v&&(o.clearTimeout(a.v),a.v=null),na(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ta(a){if(!op(a.h)&&!a.m){a.m=!0;var c=a.Ea;U||y(),j||(U(),j=!0),_.add(c,a),a.D=0}}function FE(a,c){return ap(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ds(h(a.Ea,a,c),Np(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new Nn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=me(N),Ir(N,this.U)):N=this.U),this.u!==null||this.R||(R.J=N,N=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Cp(this,R,c),d=Ht(this.J),de(d,"RID",a),de(d,"CVER",22),this.G&&de(d,"X-HTTP-Session-Id",this.G),Ss(this,d),N&&(this.R?c="headers="+ps(_p(N))+"&"+c:this.u&&zu(d,this.u,N)),Fu(this.h,R),this.Ra&&de(d,"TYPE","init"),this.S?(de(d,"$req",c),de(d,"SID","null"),R.U=!0,Ou(R,d,null)):Ou(R,d,c),this.I=2}}else this.I==3&&(a?Ap(this,a):this.i.length==0||op(this.h)||Ap(this))};function Ap(a,c){var d;c?d=c.l:d=a.V++;const m=Ht(a.J);de(m,"SID",a.M),de(m,"RID",d),de(m,"AID",a.K),Ss(a,m),a.u&&a.o&&zu(m,a.u,a.o),d=new Nn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=Cp(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Fu(a.h,d),Ou(d,m,c)}function Ss(a,c){a.H&&K(a.H,function(d,m){de(c,m,d)}),a.l&&K({},function(d,m){de(c,m,d)})}function Cp(a,c,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var R=a.i;let Z=-1;for(;;){const De=["count="+d];Z==-1?d>0?(Z=R[0].g,De.push("ofs="+Z)):Z=0:De.push("ofs="+Z);let ue=!0;for(let Me=0;Me<d;Me++){var N=R[Me].g;const Wt=R[Me].map;if(N-=Z,N<0)Z=Math.max(0,R[Me].g-100),ue=!1;else try{N="req"+N+"_"||"";try{var F=Wt instanceof Map?Wt:Object.entries(Wt);for(const[kr,On]of F){let Ln=On;l(On)&&(Ln=ku(On)),De.push(N+kr+"="+encodeURIComponent(Ln))}}catch(kr){throw De.push(N+"type="+encodeURIComponent("_badmap")),kr}}catch{m&&m(Wt)}}if(ue){F=De.join("&");break e}}F=void 0}return a=a.i.splice(0,d),c.G=a,F}function Rp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;U||y(),j||(U(),j=!0),_.add(c,a),a.A=0}}function $u(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ds(h(a.Da,a),Np(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Pp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ds(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),ea(this),Pp(this))};function qu(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Pp(a){a.g=new Nn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Ht(a.na);de(c,"RID","rpc"),de(c,"SID",a.M),de(c,"AID",a.K),de(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&de(c,"TO",a.ia),de(c,"TYPE","xmlhttp"),Ss(a,c),a.u&&a.o&&zu(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Yo(Ht(c)),d.u=null,d.R=!0,np(d,a)}t.Va=function(){this.C!=null&&(this.C=null,ea(this),$u(this),rt(19))};function na(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function kp(a,c){var d=null;if(a.g==c){na(a),qu(a),a.g=null;var m=2}else if(bu(a.h,c))d=c.G,lp(a.h,c),m=1;else return;if(a.I!=0){if(c.o)if(m==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var R=a.D;m=Ko(),nt(m,new Yf(m,d)),ta(a)}else Rp(a);else if(R=c.m,R==3||R==0&&c.X>0||!(m==1&&FE(a,c)||m==2&&$u(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),R){case 1:Pr(a,5);break;case 4:Pr(a,10);break;case 3:Pr(a,6);break;default:Pr(a,2)}}}function Np(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function Pr(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),m=a.Ua;const R=!m;m=new xn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||gs(m,"https"),Yo(m),R?DE(m.toString(),d):VE(m.toString(),d)}else rt(2);a.I=0,a.l&&a.l.pa(c),xp(a),Sp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function xp(a){if(a.I=0,a.ja=[],a.l){const c=up(a.h);(c.length!=0||a.i.length!=0)&&(k(a.ja,c),k(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function Dp(a,c,d){var m=d instanceof xn?Ht(d):new xn(d);if(m.g!="")c&&(m.g=c+"."+m.g),ys(m,m.u);else{var R=o.location;m=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;const N=new xn(null);m&&gs(N,m),c&&(N.g=c),R&&ys(N,R),d&&(N.h=d),m=N}return d=a.G,c=a.wa,d&&c&&de(m,d,c),de(m,"VER",a.ka),Ss(a,m),m}function Vp(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Ee(new ju({ab:d})):new Ee(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Op(){}t=Op.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ra(){}ra.prototype.g=function(a,c){return new mt(a,c)};function mt(a,c){Ge.call(this),this.g=new Ip(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!T(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ui(this)}p(mt,Ge),mt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},mt.prototype.close=function(){Bu(this.g)},mt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=ku(a),a=d);c.i.push(new SE(c.Ya++,a)),c.I==3&&ta(c)},mt.prototype.N=function(){this.g.l=null,delete this.j,Bu(this.g),delete this.g,mt.Z.N.call(this)};function Lp(a){Nu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(Lp,Nu);function Mp(){xu.call(this),this.status=1}p(Mp,xu);function ui(a){this.g=a}p(ui,Op),ui.prototype.ra=function(){nt(this.g,"a")},ui.prototype.qa=function(a){nt(this.g,new Lp(a))},ui.prototype.pa=function(a){nt(this.g,new Mp)},ui.prototype.oa=function(){nt(this.g,"b")},ra.prototype.createWebChannel=ra.prototype.g,mt.prototype.send=mt.prototype.o,mt.prototype.open=mt.prototype.m,mt.prototype.close=mt.prototype.close,O0=function(){return new ra},V0=function(){return Ko()},D0=Ar,Dh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Qo.NO_ERROR=0,Qo.TIMEOUT=8,Qo.HTTP_ERROR=6,qa=Qo,Jf.COMPLETE="complete",x0=Jf,Gf.EventType=cs,cs.OPEN="a",cs.CLOSE="b",cs.ERROR="c",cs.MESSAGE="d",Ge.prototype.listen=Ge.prototype.J,bs=Gf,Ee.prototype.listenOnce=Ee.prototype.K,Ee.prototype.getLastError=Ee.prototype.Ha,Ee.prototype.getLastErrorCode=Ee.prototype.ya,Ee.prototype.getStatus=Ee.prototype.ca,Ee.prototype.getResponseJson=Ee.prototype.La,Ee.prototype.getResponseText=Ee.prototype.la,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Fa,N0=Ee}).apply(typeof Ia<"u"?Ia:typeof self<"u"?self:typeof window<"u"?window:{});const wg="@firebase/firestore",Eg="4.9.2";/**
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
 */let Ye=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Ye.UNAUTHENTICATED=new Ye(null),Ye.GOOGLE_CREDENTIALS=new Ye("google-credentials-uid"),Ye.FIRST_PARTY=new Ye("first-party-uid"),Ye.MOCK_USER=new Ye("mock-user");/**
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
 */let ss="12.3.0";/**
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
 */const Xr=new qd("@firebase/firestore");function hi(){return Xr.logLevel}function $(t,...e){if(Xr.logLevel<=te.DEBUG){const n=e.map(ef);Xr.debug(`Firestore (${ss}): ${t}`,...n)}}function Sn(t,...e){if(Xr.logLevel<=te.ERROR){const n=e.map(ef);Xr.error(`Firestore (${ss}): ${t}`,...n)}}function Gi(t,...e){if(Xr.logLevel<=te.WARN){const n=e.map(ef);Xr.warn(`Firestore (${ss}): ${t}`,...n)}}function ef(t){if(typeof t=="string")return t;try{/**
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
 */function W(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,L0(t,r,n)}function L0(t,e,n){let r=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Sn(r),new Error(r)}function oe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||L0(e,i,r)}function Y(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class M0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ye.UNAUTHENTICATED))}shutdown(){}}class YC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class JC{constructor(e){this.t=e,this.currentUser=Ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){oe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new mn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new mn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new mn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string",31837,{l:r}),new M0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string",2055,{h:e}),new Ye(e)}}class ZC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ye.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class eR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new ZC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ye.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,bt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){oe(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Tg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Tg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class tf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=nR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function Vh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return Ac(i)===Ac(s)?ne(i,s):Ac(i)?1:-1}return ne(t.length,e.length)}const rR=55296,iR=57343;function Ac(t){const e=t.charCodeAt(0);return e>=rR&&e<=iR}function Ki(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const Ig="__name__";class Qt{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&W(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Qt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=Qt.isNumericId(e),i=Qt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Qt.extractNumericId(e).compare(Qt.extractNumericId(n)):Vh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return lr.fromString(e.substring(4,e.length-2))}}class ce extends Qt{construct(e,n,r){return new ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const sR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends Qt{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return sR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ig}static keyField(){return new Be([Ig])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new z(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new z(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ce.fromString(e))}static fromName(e){return new H(ce.fromString(e).popFirst(5))}static empty(){return new H(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ce(e.slice()))}}/**
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
 */function b0(t,e,n){if(!n)throw new z(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oR(t,e,n,r){if(e===!0&&r===!0)throw new z(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Sg(t){if(!H.isDocumentKey(t))throw new z(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ag(t){if(H.isDocumentKey(t))throw new z(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function F0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function lu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W(12329,{type:typeof t})}function Bt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lu(t);throw new z(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function xe(t,e){const n={typeString:t};return e&&(n.value=e),n}function zo(t,e){if(!F0(t))throw new z(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new z(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const Cg=-62135596800,Rg=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Rg);return new ae(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Cg)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Rg}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(zo(e,ae._jsonSchema))return new ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Cg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:xe("string",ae._jsonSchemaVersion),seconds:xe("number"),nanoseconds:xe("number")};/**
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
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new ae(0,0))}static max(){return new Q(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Io=-1;function aR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new ae(n+1,0):new ae(n,r));return new fr(i,H.empty(),e)}function lR(t){return new fr(t.readTime,t.key,Io)}class fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new fr(Q.min(),H.empty(),Io)}static max(){return new fr(Q.max(),H.empty(),Io)}}function uR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const cR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function os(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==cR)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function dR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function as(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class uu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}uu.ce=-1;/**
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
 */const nf=-1;function cu(t){return t==null}function Pl(t){return t===0&&1/t==-1/0}function fR(t){return typeof t=="number"&&Number.isInteger(t)&&!Pl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const U0="";function pR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Pg(e)),e=mR(t.get(n),e);return Pg(e)}function mR(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case U0:n+="";break;default:n+=s}}return n}function Pg(t){return t+U0+""}/**
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
 */function kg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function j0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class we{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sa(this.root,e,this.comparator,!0)}}class Sa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ze.RED,this.left=i??ze.EMPTY,this.right=s??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Le{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ng(this.data.getIterator())}getIteratorFrom(e){return new Ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class Ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new Ut([])}unionWith(e){let n=new Le(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ut(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ki(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class z0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new z0("Invalid base64 string: "+s):s}}(e);return new He(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const gR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pr(t){if(oe(!!t,39018),typeof t=="string"){let e=0;const n=gR.exec(t);if(oe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mr(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
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
 */const B0="server_timestamp",$0="__type__",q0="__previous_value__",H0="__local_write_time__";function rf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[$0])==null?void 0:r.stringValue)===B0}function hu(t){const e=t.mapValue.fields[q0];return rf(e)?hu(e):e}function So(t){const e=pr(t.mapValue.fields[H0].timestampValue);return new ae(e.seconds,e.nanos)}/**
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
 */class yR{constructor(e,n,r,i,s,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const kl="(default)";class Ao{constructor(e,n){this.projectId=e,this.database=n||kl}static empty(){return new Ao("","")}get isDefaultDatabase(){return this.database===kl}isEqual(e){return e instanceof Ao&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const W0="__type__",G0="__max__",Aa={mapValue:{fields:{__type__:{stringValue:G0}}}},K0="__vector__",Nl="value";function gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rf(t)?4:vR(t)?9007199254740991:_R(t)?10:11:W(28295,{value:t})}function an(t,e){if(t===e)return!0;const n=gr(t);if(n!==gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return So(t).isEqual(So(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=pr(i.timestampValue),l=pr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return mr(i.bytesValue).isEqual(mr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),l=Se(s.doubleValue);return o===l?Pl(o)===Pl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ki(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(kg(o)!==kg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!an(o[u],l[u])))return!1;return!0}(t,e);default:return W(52216,{left:t})}}function Co(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function Qi(t,e){if(t===e)return 0;const n=gr(t),r=gr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Se(s.integerValue||s.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return xg(t.timestampValue,e.timestampValue);case 4:return xg(So(t),So(e));case 5:return Vh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=mr(s),u=mr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ne(l[h],u[h]);if(f!==0)return f}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(Se(s.latitude),Se(o.latitude));return l!==0?l:ne(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Dg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,A,k,x;const l=s.fields||{},u=o.fields||{},h=(g=l[Nl])==null?void 0:g.arrayValue,f=(A=u[Nl])==null?void 0:A.arrayValue,p=ne(((k=h==null?void 0:h.values)==null?void 0:k.length)||0,((x=f==null?void 0:f.values)==null?void 0:x.length)||0);return p!==0?p:Dg(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Aa.mapValue&&o===Aa.mapValue)return 0;if(s===Aa.mapValue)return 1;if(o===Aa.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=Vh(u[p],f[p]);if(g!==0)return g;const A=Qi(l[u[p]],h[f[p]]);if(A!==0)return A}return ne(u.length,f.length)}(t.mapValue,e.mapValue);default:throw W(23264,{he:n})}}function xg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=pr(t),r=pr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function Dg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Qi(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function Xi(t){return Oh(t)}function Oh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Oh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Oh(n.fields[o])}`;return i+"}"}(t.mapValue):W(61005,{value:t})}function Ha(t){switch(gr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hu(t);return e?16+Ha(e):16;case 5:return 2*t.stringValue.length;case 6:return mr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ha(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ni(r.fields,(s,o)=>{i+=s.length+Ha(o)}),i}(t.mapValue);default:throw W(13486,{value:t})}}function Vg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Lh(t){return!!t&&"integerValue"in t}function sf(t){return!!t&&"arrayValue"in t}function Og(t){return!!t&&"nullValue"in t}function Lg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Wa(t){return!!t&&"mapValue"in t}function _R(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[W0])==null?void 0:r.stringValue)===K0}function Js(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ni(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Js(t.arrayValue.values[n]);return e}return{...t}}function vR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===G0}/**
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
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Js(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Js(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ni(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new At(Js(this.value))}}function Q0(t){const e=[];return ni(t.fields,(n,r)=>{const i=new Be([n]);if(Wa(r)){const s=Q0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ut(e)}/**
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
 */class Ze{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,Q.min(),Q.min(),Q.min(),At.empty(),0)}static newFoundDocument(e,n,r,i){return new Ze(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new Ze(e,2,n,Q.min(),Q.min(),At.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,Q.min(),Q.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xl{constructor(e,n){this.position=e,this.inclusive=n}}function Mg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Qi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function bg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Dl{constructor(e,n="asc"){this.field=e,this.dir=n}}function wR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class X0{}class Ne extends X0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new TR(e,n,r):n==="array-contains"?new AR(e,r):n==="in"?new CR(e,r):n==="not-in"?new RR(e,r):n==="array-contains-any"?new PR(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new IR(e,r):new SR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Qi(n,this.value)):n!==null&&gr(this.value)===gr(n)&&this.matchesComparison(Qi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qt extends X0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new qt(e,n)}matches(e){return Y0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Y0(t){return t.op==="and"}function J0(t){return ER(t)&&Y0(t)}function ER(t){for(const e of t.filters)if(e instanceof qt)return!1;return!0}function Mh(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+Xi(t.value);if(J0(t))return t.filters.map(e=>Mh(e)).join(",");{const e=t.filters.map(n=>Mh(n)).join(",");return`${t.op}(${e})`}}function Z0(t,e){return t instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&an(r.value,i.value)}(t,e):t instanceof qt?function(r,i){return i instanceof qt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Z0(o,i.filters[l]),!0):!1}(t,e):void W(19439)}function ew(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${Xi(n.value)}`}(t):t instanceof qt?function(n){return n.op.toString()+" {"+n.getFilters().map(ew).join(" ,")+"}"}(t):"Filter"}class TR extends Ne{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class IR extends Ne{constructor(e,n){super(e,"in",n),this.keys=tw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class SR extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=tw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function tw(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class AR extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sf(n)&&Co(n.arrayValue,this.value)}}class CR extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Co(this.value.arrayValue,n)}}class RR extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(Co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Co(this.value.arrayValue,n)}}class PR extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Co(this.value.arrayValue,r))}}/**
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
 */class kR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Fg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new kR(t,e,n,r,i,s,o)}function of(t){const e=Y(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Mh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),cu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xi(r)).join(",")),e.Te=n}return e.Te}function af(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Z0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!bg(t.startAt,e.startAt)&&bg(t.endAt,e.endAt)}function bh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Bo{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function NR(t,e,n,r,i,s,o,l){return new Bo(t,e,n,r,i,s,o,l)}function du(t){return new Bo(t)}function Ug(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function nw(t){return t.collectionGroup!==null}function Zs(t){const e=Y(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Le(Be.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Dl(s,r))}),n.has(Be.keyField().canonicalString())||e.Ie.push(new Dl(Be.keyField(),r))}return e.Ie}function tn(t){const e=Y(t);return e.Ee||(e.Ee=xR(e,Zs(t))),e.Ee}function xR(t,e){if(t.limitType==="F")return Fg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Dl(i.field,s)});const n=t.endAt?new xl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new xl(t.startAt.position,t.startAt.inclusive):null;return Fg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Fh(t,e){const n=t.filters.concat([e]);return new Bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Uh(t,e,n){return new Bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fu(t,e){return af(tn(t),tn(e))&&t.limitType===e.limitType}function rw(t){return`${of(tn(t))}|lt:${t.limitType}`}function di(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>ew(i)).join(", ")}]`),cu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Xi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Xi(i)).join(",")),`Target(${r})`}(tn(t))}; limitType=${t.limitType})`}function pu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Zs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Mg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Zs(r),i)||r.endAt&&!function(o,l,u){const h=Mg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Zs(r),i))}(t,e)}function DR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function iw(t){return(e,n)=>{let r=!1;for(const i of Zs(t)){const s=VR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function VR(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Qi(u,h):W(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W(19790,{direction:t.dir})}}/**
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
 */class ri{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ni(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return j0(this.inner)}size(){return this.innerSize}}/**
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
 */const OR=new we(H.comparator);function An(){return OR}const sw=new we(H.comparator);function Fs(...t){let e=sw;for(const n of t)e=e.insert(n.key,n);return e}function ow(t){let e=sw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Mr(){return eo()}function aw(){return eo()}function eo(){return new ri(t=>t.toString(),(t,e)=>t.isEqual(e))}const LR=new we(H.comparator),MR=new Le(H.comparator);function re(...t){let e=MR;for(const n of t)e=e.add(n);return e}const bR=new Le(ne);function FR(){return bR}/**
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
 */function lf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pl(e)?"-0":e}}function lw(t){return{integerValue:""+t}}function UR(t,e){return fR(e)?lw(e):lf(t,e)}/**
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
 */class mu{constructor(){this._=void 0}}function jR(t,e,n){return t instanceof Vl?function(i,s){const o={fields:{[$0]:{stringValue:B0},[H0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&rf(s)&&(s=hu(s)),s&&(o.fields[q0]=s),{mapValue:o}}(n,e):t instanceof Ro?cw(t,e):t instanceof Po?hw(t,e):function(i,s){const o=uw(i,s),l=jg(o)+jg(i.Ae);return Lh(o)&&Lh(i.Ae)?lw(l):lf(i.serializer,l)}(t,e)}function zR(t,e,n){return t instanceof Ro?cw(t,e):t instanceof Po?hw(t,e):n}function uw(t,e){return t instanceof Ol?function(r){return Lh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Vl extends mu{}class Ro extends mu{constructor(e){super(),this.elements=e}}function cw(t,e){const n=dw(e);for(const r of t.elements)n.some(i=>an(i,r))||n.push(r);return{arrayValue:{values:n}}}class Po extends mu{constructor(e){super(),this.elements=e}}function hw(t,e){let n=dw(e);for(const r of t.elements)n=n.filter(i=>!an(i,r));return{arrayValue:{values:n}}}class Ol extends mu{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function jg(t){return Se(t.integerValue||t.doubleValue)}function dw(t){return sf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function BR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ro&&i instanceof Ro||r instanceof Po&&i instanceof Po?Ki(r.elements,i.elements,an):r instanceof Ol&&i instanceof Ol?an(r.Ae,i.Ae):r instanceof Vl&&i instanceof Vl}(t.transform,e.transform)}class $R{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ga(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gu{}function fw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new uf(t.key,nn.none()):new $o(t.key,t.data,nn.none());{const n=t.data,r=At.empty();let i=new Le(Be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ii(t.key,r,new Ut(i.toArray()),nn.none())}}function qR(t,e,n){t instanceof $o?function(i,s,o){const l=i.value.clone(),u=Bg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ii?function(i,s,o){if(!Ga(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Bg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(pw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function to(t,e,n,r){return t instanceof $o?function(s,o,l,u){if(!Ga(s.precondition,o))return l;const h=s.value.clone(),f=$g(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ii?function(s,o,l,u){if(!Ga(s.precondition,o))return l;const h=$g(s.fieldTransforms,u,o),f=o.data;return f.setAll(pw(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ga(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function HR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=uw(r.transform,i||null);s!=null&&(n===null&&(n=At.empty()),n.set(r.field,s))}return n||null}function zg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ki(r,i,(s,o)=>BR(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class $o extends gu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ii extends gu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function pw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Bg(t,e,n){const r=new Map;oe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,zR(o,l,n[i]))}return r}function $g(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,jR(s,o,e))}return r}class uf extends gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class WR extends gu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class GR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&qR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=to(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=to(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aw();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=fw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Ki(this.mutations,e.mutations,(n,r)=>zg(n,r))&&Ki(this.baseMutations,e.baseMutations,(n,r)=>zg(n,r))}}class cf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){oe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return LR}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new cf(e,n,r,i)}}/**
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
 */class KR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class QR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Pe,ie;function XR(t){switch(t){case L.OK:return W(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return W(15467,{code:t})}}function mw(t){if(t===void 0)return Sn("GRPC error has no .code"),L.UNKNOWN;switch(t){case Pe.OK:return L.OK;case Pe.CANCELLED:return L.CANCELLED;case Pe.UNKNOWN:return L.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return L.INTERNAL;case Pe.UNAVAILABLE:return L.UNAVAILABLE;case Pe.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Pe.NOT_FOUND:return L.NOT_FOUND;case Pe.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Pe.ABORTED:return L.ABORTED;case Pe.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Pe.DATA_LOSS:return L.DATA_LOSS;default:return W(39323,{code:t})}}(ie=Pe||(Pe={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function YR(){return new TextEncoder}/**
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
 */const JR=new lr([4294967295,4294967295],0);function qg(t){const e=YR().encode(t),n=new k0;return n.update(e),new Uint8Array(n.digest())}function Hg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new lr([n,r],0),new lr([i,s],0)]}class hf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Us(`Invalid padding: ${n}`);if(r<0)throw new Us(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Us(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Us(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=lr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(lr.fromNumber(r)));return i.compare(JR)===1&&(i=new lr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=qg(e),[r,i]=Hg(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new hf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=qg(e),[r,i]=Hg(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class yu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,qo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new yu(Q.min(),i,new we(ne),An(),re())}}class qo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new qo(r,n,re(),re(),re())}}/**
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
 */class Ka{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class gw{constructor(e,n){this.targetId=e,this.Ce=n}}class yw{constructor(e,n,r=He.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Wg{constructor(){this.ve=0,this.Fe=Gg(),this.Me=He.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:W(38017,{changeType:s})}}),new qo(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Gg()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,oe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class ZR{constructor(e){this.Ge=e,this.ze=new Map,this.je=An(),this.Je=Ca(),this.He=Ca(),this.Ye=new we(ne)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:W(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(bh(s))if(r===0){const o=new H(s.path);this.et(n,o,Ze.newNoDocument(o,Q.min()))}else oe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=mr(r).toUint8Array()}catch(u){if(u instanceof z0)return Gi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new hf(o,i,s)}catch(u){return Gi(u instanceof Us?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&bh(l.target)){const u=new H(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Ze.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.qe())}});let r=re();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new yu(e,n,this.Ye,this.je,r);return this.je=An(),this.Je=Ca(),this.He=Ca(),this.Ye=new we(ne),i}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.Qe(n,1):i.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Wg,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Le(ne),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Le(ne),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Wg),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ca(){return new we(H.comparator)}function Gg(){return new we(H.comparator)}const eP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),tP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),nP=(()=>({and:"AND",or:"OR"}))();class rP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function jh(t,e){return t.useProto3Json||cu(e)?e:{value:e}}function Ll(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _w(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function iP(t,e){return Ll(t,e.toTimestamp())}function rn(t){return oe(!!t,49232),Q.fromTimestamp(function(n){const r=pr(n);return new ae(r.seconds,r.nanos)}(t))}function df(t,e){return zh(t,e).canonicalString()}function zh(t,e){const n=function(i){return new ce(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vw(t){const e=ce.fromString(t);return oe(Sw(e),10190,{key:e.toString()}),e}function Bh(t,e){return df(t.databaseId,e.path)}function Cc(t,e){const n=vw(e);if(n.get(1)!==t.databaseId.projectId)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Ew(n))}function ww(t,e){return df(t.databaseId,e)}function sP(t){const e=vw(t);return e.length===4?ce.emptyPath():Ew(e)}function $h(t){return new ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ew(t){return oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Kg(t,e,n){return{name:Bh(t,e),fields:n.value.mapValue.fields}}function oP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:W(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(oe(f===void 0||typeof f=="string",58123),He.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),He.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:mw(h.code);return new z(f,h.message||"")}(o);n=new yw(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Cc(t,r.document.name),s=rn(r.document.updateTime),o=r.document.createTime?rn(r.document.createTime):Q.min(),l=new At({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Ka(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Cc(t,r.document),s=r.readTime?rn(r.readTime):Q.min(),o=Ze.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Ka([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Cc(t,r.document),s=r.removedTargetIds||[];n=new Ka([],s,i,null)}else{if(!("filter"in e))return W(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new QR(i,s),l=r.targetId;n=new gw(l,o)}}return n}function aP(t,e){let n;if(e instanceof $o)n={update:Kg(t,e.key,e.value)};else if(e instanceof uf)n={delete:Bh(t,e.key)};else if(e instanceof ii)n={update:Kg(t,e.key,e.data),updateMask:gP(e.fieldMask)};else{if(!(e instanceof WR))return W(16599,{Vt:e.type});n={verify:Bh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Vl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ro)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Po)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ol)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw W(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:iP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W(27497)}(t,e.precondition)),n}function lP(t,e){return t&&t.length>0?(oe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?rn(i.updateTime):rn(s);return o.isEqual(Q.min())&&(o=rn(s)),new $R(o,i.transformResults||[])}(n,e))):[]}function uP(t,e){return{documents:[ww(t,e.path)]}}function cP(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ww(t,i);const s=function(h){if(h.length!==0)return Iw(qt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:fi(g.field),direction:fP(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=jh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function hP(t){let e=sP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){oe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=Tw(p);return g instanceof qt&&J0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(k){return new Dl(pi(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,cu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,A=p.values||[];return new xl(A,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,A=p.values||[];return new xl(A,g)}(n.endAt)),NR(e,i,o,s,l,"F",u,h)}function dP(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Tw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=pi(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=pi(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=pi(n.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=pi(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(pi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return qt.create(n.compositeFilter.filters.map(r=>Tw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W(1026)}}(n.compositeFilter.op))}(t):W(30097,{filter:t})}function fP(t){return eP[t]}function pP(t){return tP[t]}function mP(t){return nP[t]}function fi(t){return{fieldPath:t.canonicalString()}}function pi(t){return Be.fromServerFormat(t.fieldPath)}function Iw(t){return t instanceof Ne?function(n){if(n.op==="=="){if(Lg(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NAN"}};if(Og(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Lg(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NOT_NAN"}};if(Og(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fi(n.field),op:pP(n.op),value:n.value}}}(t):t instanceof qt?function(n){const r=n.getFilters().map(i=>Iw(i));return r.length===1?r[0]:{compositeFilter:{op:mP(n.op),filters:r}}}(t):W(54877,{filter:t})}function gP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Sw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Kn{constructor(e,n,r,i,s=Q.min(),o=Q.min(),l=He.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yP{constructor(e){this.yt=e}}function _P(t){const e=hP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Uh(e,e.limit,"L"):e}/**
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
 */class vP{constructor(){this.Cn=new wP}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(fr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(fr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class wP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Le(ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Le(ce.comparator)).toArray()}}/**
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
 */const Qg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Aw=41943040;class lt{static withCacheSize(e){return new lt(e,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */lt.DEFAULT_COLLECTION_PERCENTILE=10,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,lt.DEFAULT=new lt(Aw,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),lt.DISABLED=new lt(-1,0,0);/**
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
 */class Yi{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Yi(0)}static cr(){return new Yi(-1)}}/**
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
 */const Xg="LruGarbageCollector",EP=1048576;function Yg([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class TP{constructor(e){this.Ir=e,this.buffer=new Le(Yg),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Yg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class IP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){$(Xg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){as(n)?$(Xg,"Ignoring IndexedDB error during garbage collection: ",n):await os(n)}await this.Vr(3e5)})}}class SP{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(uu.ce);const r=new TP(n);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Qg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qg):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),hi()<=te.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function AP(t,e){return new SP(t,e)}/**
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
 */class CP{constructor(){this.changes=new ri(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class RP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class PP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&to(r.mutation,i,Ut.empty(),ae.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Mr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Fs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=An();const o=eo(),l=function(){return eo()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof ii)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),to(f.mutation,h,f.mutation.getFieldMask(),ae.now())):o.set(h.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new RP(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=eo();let i=new we((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Ut.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=aw();f.forEach(g=>{if(!s.has(g)){const A=fw(n.get(g),r.get(g));A!==null&&p.set(g,A),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Mr());let l=Io,u=s;return o.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,re())).next(f=>({batchId:l,changes:ow(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=Fs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Fs();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(p,g){return new Bo(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Ze.newInvalidDocument(f)))});let l=Fs();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&to(f.mutation,h,Ut.empty(),ae.now()),pu(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class kP{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return M.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:rn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(i){return{name:i.name,query:_P(i.bundledQuery),readTime:rn(i.readTime)}}(n)),M.resolve()}}/**
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
 */class NP{constructor(){this.overlays=new we(H.comparator),this.qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Mr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Mr(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Mr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Mr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new KR(n,r));let s=this.qr.get(n);s===void 0&&(s=re(),this.qr.set(n,s)),this.qr.set(n,s.add(r.key))}}/**
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
 */class xP{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class ff{constructor(){this.Qr=new Le(be.$r),this.Ur=new Le(be.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new be(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new be(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new H(new ce([])),r=new be(n,e),i=new be(n,e+1),s=[];return this.Ur.forEachInRange([r,i],o=>{this.Gr(o),s.push(o.key)}),s}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new H(new ce([])),r=new be(n,e),i=new be(n,e+1);let s=re();return this.Ur.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new be(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class be{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return H.comparator(e.key,n.key)||ne(e.Yr,n.Yr)}static Kr(e,n){return ne(e.Yr,n.Yr)||H.comparator(e.key,n.key)}}/**
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
 */class DP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Le(be.$r)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new GR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new be(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ei(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?nf:this.tr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new be(n,0),i=new be(n,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],o=>{const l=this.Xr(o.Yr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(ne);return n.forEach(i=>{const s=new be(i,0),o=new be(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],l=>{r=r.add(l.Yr)})}),M.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new be(new H(s),0);let l=new Le(ne);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Yr)),!0)},o),M.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){oe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return M.forEach(n.mutations,i=>{const s=new be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new be(n,0),i=this.Zr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class VP{constructor(e){this.ri=e,this.docs=function(){return new we(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=An();const o=n.path,l=new H(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||uR(lR(f),r)<=0||(i.has(f.key)||pu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){W(9500)}ii(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new OP(this)}getSize(e){return M.resolve(this.size)}}class OP extends CP{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class LP{constructor(e){this.persistence=e,this.si=new ri(n=>of(n),af),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.oi=0,this._i=new ff,this.targetCount=0,this.ai=Yi.ur()}forEachTarget(e,n){return this.si.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),M.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Yi(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Pr(n),M.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this._i.containsKey(n))}}/**
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
 */class Cw{constructor(e,n){this.ui={},this.overlays={},this.ci=new uu(0),this.li=!1,this.li=!0,this.hi=new xP,this.referenceDelegate=e(this),this.Pi=new LP(this),this.indexManager=new vP,this.remoteDocumentCache=function(i){return new VP(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new yP(n),this.Ii=new kP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new NP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new DP(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new MP(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ai(e,n){return M.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class MP extends hR{constructor(e){super(),this.currentSequenceNumber=e}}class pf{constructor(e){this.persistence=e,this.Ri=new ff,this.Vi=null}static mi(e){return new pf(e)}get fi(){if(this.Vi)return this.Vi;throw W(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.fi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.fi,r=>{const i=H.fromPath(r);return this.gi(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Ml{constructor(e,n){this.persistence=e,this.pi=new ri(r=>pR(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=AP(this,n)}static mi(e,n){return new Ml(e,n)}Ei(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return M.forEach(this.pi,(r,i)=>this.br(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),M.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ha(e.data.value)),n}br(e,n,r){return M.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.pi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class mf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=i}static As(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new mf(e,n.fromCache,r,i)}}/**
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
 */class bP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class FP{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return NI()?8:dR(tt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ys(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ws(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new bP;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>s.result)}bs(e,n,r,i){return r.documentReadCount<this.fs?(hi()<=te.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",di(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),M.resolve()):(hi()<=te.DEBUG&&$("QueryEngine","Query:",di(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(hi()<=te.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",di(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tn(n))):M.resolve())}ys(e,n){if(Ug(n))return M.resolve(null);let r=tn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Uh(n,null,"F"),r=tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,l);return this.Cs(n,h,o,u.readTime)?this.ys(e,Uh(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,i){return Ug(n)||i.isEqual(Q.min())?M.resolve(null):this.ps.getDocuments(e,r).next(s=>{const o=this.Ds(n,s);return this.Cs(n,o,r,i)?M.resolve(null):(hi()<=te.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),di(n)),this.vs(e,o,n,aR(i,Io)).next(l=>l))})}Ds(e,n){let r=new Le(iw(e));return n.forEach((i,s)=>{pu(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return hi()<=te.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",di(n)),this.ps.getDocumentsMatchingQuery(e,n,fr.min(),r)}vs(e,n,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const gf="LocalStore",UP=3e8;class jP{constructor(e,n,r,i){this.persistence=e,this.Fs=n,this.serializer=i,this.Ms=new we(ne),this.xs=new ri(s=>of(s),af),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PP(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function zP(t,e,n,r){return new jP(t,e,n,r)}async function Rw(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:l}))})})}function BP(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,g=p.keys();let A=M.resolve();return g.forEach(k=>{A=A.next(()=>f.getEntry(u,k)).next(x=>{const D=h.docVersions.get(k);oe(D!==null,48541),x.version.compareTo(D)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),f.addEntry(x)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=re();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Pw(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function $P(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});i=n.Ms;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.Pi.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(s,f.addedDocuments,p)));let A=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(He.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(p,A),function(x,D,E){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=UP?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,A,f)&&l.push(n.Pi.updateTargetData(s,A))});let u=An(),h=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(qP(s,o,e.documentUpdates).next(f=>{u=f.ks,h=f.qs})),!r.isEqual(Q.min())){const f=n.Pi.getLastRemoteSnapshotVersion(s).next(p=>n.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Ms=i,s))}function qP(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=An();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(gf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{ks:o,qs:i}})}function HP(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=nf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function WP(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Pi.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Pi.allocateTargetId(r).next(o=>(i=new Kn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function qh(t,e,n){const r=Y(t),i=r.Ms.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!as(o))throw o;$(gf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Jg(t,e,n){const r=Y(t);let i=Q.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=Y(u),g=p.xs.get(f);return g!==void 0?M.resolve(p.Ms.get(g)):p.Pi.getTargetData(h,f)}(r,o,tn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:re())).next(l=>(GP(r,DR(e),l),{documents:l,Qs:s})))}function GP(t,e,n){let r=t.Os.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Os.set(e,r)}class Zg{constructor(){this.activeTargetIds=FR()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class KP{constructor(){this.Mo=new Zg,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Zg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class QP{Oo(e){}shutdown(){}}/**
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
 */const ey="ConnectivityMonitor";class ty{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){$(ey,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){$(ey,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ra=null;function Hh(){return Ra===null?Ra=function(){return 268435456+Math.round(2147483648*Math.random())}():Ra++,"0x"+Ra.toString(16)}/**
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
 */const Rc="RestConnection",XP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class YP{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===kl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,n,r,i,s){const o=Hh(),l=this.zo(e,n.toUriEncodedString());$(Rc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,i,s);const{host:h}=new URL(l),f=ns(h);return this.Jo(e,l,u,r,f).then(p=>($(Rc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Gi(Rc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,i,s,o){return this.Go(e,n,r,i,s)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ss}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}zo(e,n){const r=XP[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class JP{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Xe="WebChannelConnection";class ZP extends YP{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Hh();return new Promise((l,u)=>{const h=new N0;h.setWithCredentials(!0),h.listenOnce(x0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case qa.NO_ERROR:const p=h.getResponseJson();$(Xe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case qa.TIMEOUT:$(Xe,`RPC '${e}' ${o} timed out`),u(new z(L.DEADLINE_EXCEEDED,"Request time out"));break;case qa.HTTP_ERROR:const g=h.getStatus();if($(Xe,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const k=A==null?void 0:A.error;if(k&&k.status&&k.message){const x=function(E){const v=E.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(v)>=0?v:L.UNKNOWN}(k.status);u(new z(x,k.message))}else u(new z(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new z(L.UNAVAILABLE,"Connection failed."));break;default:W(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{$(Xe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);$(Xe,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=Hh(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=O0(),l=V0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");$(Xe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);this.I_(p);let g=!1,A=!1;const k=new JP({Yo:D=>{A?$(Xe,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(g||($(Xe,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),$(Xe,`RPC '${e}' stream ${i} sending:`,D),p.send(D))},Zo:()=>p.close()}),x=(D,E,v)=>{D.listen(E,C=>{try{v(C)}catch(O){setTimeout(()=>{throw O},0)}})};return x(p,bs.EventType.OPEN,()=>{A||($(Xe,`RPC '${e}' stream ${i} transport opened.`),k.o_())}),x(p,bs.EventType.CLOSE,()=>{A||(A=!0,$(Xe,`RPC '${e}' stream ${i} transport closed`),k.a_(),this.E_(p))}),x(p,bs.EventType.ERROR,D=>{A||(A=!0,Gi(Xe,`RPC '${e}' stream ${i} transport errored. Name:`,D.name,"Message:",D.message),k.a_(new z(L.UNAVAILABLE,"The operation could not be completed")))}),x(p,bs.EventType.MESSAGE,D=>{var E;if(!A){const v=D.data[0];oe(!!v,16349);const C=v,O=(C==null?void 0:C.error)||((E=C[0])==null?void 0:E.error);if(O){$(Xe,`RPC '${e}' stream ${i} received error:`,O);const U=O.status;let j=function(w){const I=Pe[w];if(I!==void 0)return mw(I)}(U),_=O.message;j===void 0&&(j=L.INTERNAL,_="Unknown error status: "+U+" with message "+O.message),A=!0,k.a_(new z(j,_)),p.close()}else $(Xe,`RPC '${e}' stream ${i} received:`,v),k.u_(v)}}),x(l,D0.STAT_EVENT,D=>{D.stat===Dh.PROXY?$(Xe,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===Dh.NOPROXY&&$(Xe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Pc(){return typeof document<"u"?document:null}/**
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
 */function _u(t){return new rP(t,!0)}/**
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
 */class kw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const ny="PersistentStream";class Nw{constructor(e,n,r,i,s,o,l,u){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new kw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Sn(n.toString()),Sn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new z(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return $(ny,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():($(ny,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ek extends Nw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=oP(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?rn(o.readTime):Q.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=$h(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=bh(u)?{documents:uP(s,u)}:{query:cP(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=_w(s,o.resumeToken);const h=jh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=Ll(s,o.snapshotVersion.toTimestamp());const h=jh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=dP(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=$h(this.serializer),n.removeTarget=e,this.q_(n)}}class tk extends Nw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=lP(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=$h(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>aP(this.serializer,r))};this.q_(n)}}/**
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
 */class nk{}class rk extends nk{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Go(e,zh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(L.UNKNOWN,s.toString())})}Ho(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,zh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class ik{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Sn(n),this.aa=!1):$("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Yr="RemoteStore";class sk{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{si(this)&&($(Yr,"Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.Ea.add(4),await Ho(h),h.Ra.set("Unknown"),h.Ea.delete(4),await vu(h)}(this))})}),this.Ra=new ik(r,i)}}async function vu(t){if(si(t))for(const e of t.da)await e(!0)}async function Ho(t){for(const e of t.da)await e(!1)}function xw(t,e){const n=Y(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),wf(n)?vf(n):ls(n).O_()&&_f(n,e))}function yf(t,e){const n=Y(t),r=ls(n);n.Ia.delete(e),r.O_()&&Dw(n,e),n.Ia.size===0&&(r.O_()?r.L_():si(n)&&n.Ra.set("Unknown"))}function _f(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ls(t).Y_(e)}function Dw(t,e){t.Va.Ue(e),ls(t).Z_(e)}function vf(t){t.Va=new ZR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ls(t).start(),t.Ra.ua()}function wf(t){return si(t)&&!ls(t).x_()&&t.Ia.size>0}function si(t){return Y(t).Ea.size===0}function Vw(t){t.Va=void 0}async function ok(t){t.Ra.set("Online")}async function ak(t){t.Ia.forEach((e,n)=>{_f(t,e)})}async function lk(t,e){Vw(t),wf(t)?(t.Ra.ha(e),vf(t)):t.Ra.set("Unknown")}async function uk(t,e,n){if(t.Ra.set("Online"),e instanceof yw&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))}(t,e)}catch(r){$(Yr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await bl(t,r)}else if(e instanceof Ka?t.Va.Ze(e):e instanceof gw?t.Va.st(e):t.Va.tt(e),!n.isEqual(Q.min()))try{const r=await Pw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ia.get(h);f&&s.Ia.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ia.get(u);if(!f)return;s.Ia.set(u,f.withResumeToken(He.EMPTY_BYTE_STRING,f.snapshotVersion)),Dw(s,u);const p=new Kn(f.target,u,h,f.sequenceNumber);_f(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$(Yr,"Failed to raise snapshot:",r),await bl(t,r)}}async function bl(t,e,n){if(!as(e))throw e;t.Ea.add(1),await Ho(t),t.Ra.set("Offline"),n||(n=()=>Pw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(Yr,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await vu(t)})}function Ow(t,e){return e().catch(n=>bl(t,n,e))}async function wu(t){const e=Y(t),n=yr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:nf;for(;ck(e);)try{const i=await HP(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,hk(e,i)}catch(i){await bl(e,i)}Lw(e)&&Mw(e)}function ck(t){return si(t)&&t.Ta.length<10}function hk(t,e){t.Ta.push(e);const n=yr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Lw(t){return si(t)&&!yr(t).x_()&&t.Ta.length>0}function Mw(t){yr(t).start()}async function dk(t){yr(t).ra()}async function fk(t){const e=yr(t);for(const n of t.Ta)e.ea(n.mutations)}async function pk(t,e,n){const r=t.Ta.shift(),i=cf.from(r,e,n);await Ow(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await wu(t)}async function mk(t,e){e&&yr(t).X_&&await async function(r,i){if(function(o){return XR(o)&&o!==L.ABORTED}(i.code)){const s=r.Ta.shift();yr(r).B_(),await Ow(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await wu(r)}}(t,e),Lw(t)&&Mw(t)}async function ry(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),$(Yr,"RemoteStore received new credentials");const r=si(n);n.Ea.add(3),await Ho(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await vu(n)}async function gk(t,e){const n=Y(t);e?(n.Ea.delete(2),await vu(n)):e||(n.Ea.add(2),await Ho(n),n.Ra.set("Unknown"))}function ls(t){return t.ma||(t.ma=function(n,r,i){const s=Y(n);return s.sa(),new ek(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:ok.bind(null,t),t_:ak.bind(null,t),r_:lk.bind(null,t),H_:uk.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),wf(t)?vf(t):t.Ra.set("Unknown")):(await t.ma.stop(),Vw(t))})),t.ma}function yr(t){return t.fa||(t.fa=function(n,r,i){const s=Y(n);return s.sa(),new tk(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:dk.bind(null,t),r_:mk.bind(null,t),ta:fk.bind(null,t),na:pk.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await wu(t)):(await t.fa.stop(),t.Ta.length>0&&($(Yr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class Ef{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Ef(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tf(t,e){if(Sn("AsyncQueue",`${e}: ${t}`),as(t))return new z(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class bi{static emptySet(e){return new bi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Fs(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class iy{constructor(){this.ga=new we(H.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):W(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ji{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ji(e,n,bi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class yk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class _k{constructor(){this.queries=sy(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=sy(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new z(L.ABORTED,"Firestore shutting down"))}}function sy(){return new ri(t=>rw(t),fu)}async function If(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new yk,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Tf(o,`Initialization of query '${di(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&Af(n)}async function Sf(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function vk(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Af(n)}function wk(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function Af(t){t.Ca.forEach(e=>{e.next()})}var Wh,oy;(oy=Wh||(Wh={})).Ma="default",oy.Cache="cache";class Cf{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ji(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ji.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Wh.Cache}}/**
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
 */class bw{constructor(e){this.key=e}}class Fw{constructor(e){this.key=e}}class Ek{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=re(),this.mutatedKeys=re(),this.eu=iw(e),this.tu=new bi(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new iy,i=n?n.tu:this.tu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),A=pu(this.query,p)?p:null,k=!!g&&this.mutatedKeys.has(g.key),x=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let D=!1;g&&A?g.data.isEqual(A.data)?k!==x&&(r.track({type:3,doc:A}),D=!0):this.su(g,A)||(r.track({type:2,doc:A}),D=!0,(u&&this.eu(A,u)>0||h&&this.eu(A,h)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),D=!0):g&&!A&&(r.track({type:1,doc:g}),D=!0,(u||h)&&(l=!0)),D&&(A?(o=o.add(A),s=x?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(A,k){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{Rt:D})}};return x(A)-x(k)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),i=i??!1;const l=n&&!i?this._u():[],u=this.Xa.size===0&&this.current&&!i?1:0,h=u!==this.Za;return this.Za=u,o.length!==0||h?{snapshot:new Ji(this.query,e.tu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new iy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=re(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new Fw(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new bw(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ji.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Rf="SyncEngine";class Tk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ik{constructor(e){this.key=e,this.hu=!1}}class Sk{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ri(l=>rw(l),fu),this.Iu=new Map,this.Eu=new Set,this.du=new we(H.comparator),this.Au=new Map,this.Ru=new ff,this.Vu={},this.mu=new Map,this.fu=Yi.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Ak(t,e,n=!0){const r=qw(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Uw(r,e,n,!0),i}async function Ck(t,e){const n=qw(t);await Uw(n,e,!0,!1)}async function Uw(t,e,n,r){const i=await WP(t.localStore,tn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Rk(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&xw(t.remoteStore,i),l}async function Rk(t,e,n,r,i){t.pu=(p,g,A)=>async function(x,D,E,v){let C=D.view.ru(E);C.Cs&&(C=await Jg(x.localStore,D.query,!1).then(({documents:_})=>D.view.ru(_,C)));const O=v&&v.targetChanges.get(D.targetId),U=v&&v.targetMismatches.get(D.targetId)!=null,j=D.view.applyChanges(C,x.isPrimaryClient,O,U);return ly(x,D.targetId,j.au),j.snapshot}(t,p,g,A);const s=await Jg(t.localStore,e,!0),o=new Ek(e,s.Qs),l=o.ru(s.documents),u=qo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);ly(t,n,h.au);const f=new Tk(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function Pk(t,e,n){const r=Y(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(o=>!fu(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await qh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&yf(r.remoteStore,i.targetId),Gh(r,i.targetId)}).catch(os)):(Gh(r,i.targetId),await qh(r.localStore,i.targetId,!0))}async function kk(t,e){const n=Y(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yf(n.remoteStore,r.targetId))}async function Nk(t,e,n){const r=bk(t);try{const i=await function(o,l){const u=Y(o),h=ae.now(),f=l.reduce((A,k)=>A.add(k.key),re());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let k=An(),x=re();return u.Ns.getEntries(A,f).next(D=>{k=D,k.forEach((E,v)=>{v.isValidDocument()||(x=x.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,k)).next(D=>{p=D;const E=[];for(const v of l){const C=HR(v,p.get(v.key).overlayedDocument);C!=null&&E.push(new ii(v.key,C,Q0(C.value.mapValue),nn.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,E,l)}).next(D=>{g=D;const E=D.applyToLocalDocumentSet(p,x);return u.documentOverlayCache.saveOverlays(A,D.batchId,E)})}).then(()=>({batchId:g.batchId,changes:ow(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Vu[o.currentUser.toKey()];h||(h=new we(ne)),h=h.insert(l,u),o.Vu[o.currentUser.toKey()]=h}(r,i.batchId,n),await Wo(r,i.changes),await wu(r.remoteStore)}catch(i){const s=Tf(i,"Failed to persist write");n.reject(s)}}async function jw(t,e){const n=Y(t);try{const r=await $P(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Au.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?oe(o.hu,14607):i.removedDocuments.size>0&&(oe(o.hu,42227),o.hu=!1))}),await Wo(n,r,e)}catch(r){await os(r)}}function ay(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.Sa)g.va(l)&&(h=!0)}),h&&Af(u)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xk(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new we(H.comparator);o=o.insert(s,Ze.newNoDocument(s,Q.min()));const l=re().add(s),u=new yu(Q.min(),new Map,new we(ne),o,l);await jw(r,u),r.du=r.du.remove(s),r.Au.delete(e),Pf(r)}else await qh(r.localStore,e,!1).then(()=>Gh(r,e,n)).catch(os)}async function Dk(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await BP(n.localStore,e);Bw(n,r,null),zw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wo(n,i)}catch(i){await os(i)}}async function Vk(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(oe(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);Bw(r,e,n),zw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wo(r,i)}catch(i){await os(i)}}function zw(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function Bw(t,e,n){const r=Y(t);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Gh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||$w(t,r)})}function $w(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(yf(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Pf(t))}function ly(t,e,n){for(const r of n)r instanceof bw?(t.Ru.addReference(r.key,e),Ok(t,r)):r instanceof Fw?($(Rf,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||$w(t,r.key)):W(19791,{wu:r})}function Ok(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||($(Rf,"New document in limbo: "+n),t.Eu.add(r),Pf(t))}function Pf(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new H(ce.fromString(e)),r=t.fu.next();t.Au.set(r,new Ik(n)),t.du=t.du.insert(n,r),xw(t.remoteStore,new Kn(tn(du(n.path)),r,"TargetPurposeLimboResolution",uu.ce))}}async function Wo(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=mf.As(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Pu.H_(i),await async function(u,h){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,g=>M.forEach(g.Es,A=>f.persistence.referenceDelegate.addReference(p,g.targetId,A)).next(()=>M.forEach(g.ds,A=>f.persistence.referenceDelegate.removeReference(p,g.targetId,A)))))}catch(p){if(!as(p))throw p;$(gf,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const A=f.Ms.get(g),k=A.snapshotVersion,x=A.withLastLimboFreeSnapshotVersion(k);f.Ms=f.Ms.insert(g,x)}}}(r.localStore,s))}async function Lk(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){$(Rf,"User change. New user:",e.toKey());const r=await Rw(n.localStore,e);n.currentUser=e,function(s,o){s.mu.forEach(l=>{l.forEach(u=>{u.reject(new z(L.CANCELLED,o))})}),s.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wo(n,r.Ls)}}function Mk(t,e){const n=Y(t),r=n.Au.get(e);if(r&&r.hu)return re().add(r.key);{let i=re();const s=n.Iu.get(e);if(!s)return i;for(const o of s){const l=n.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function qw(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xk.bind(null,e),e.Pu.H_=vk.bind(null,e.eventManager),e.Pu.yu=wk.bind(null,e.eventManager),e}function bk(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Dk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Vk.bind(null,e),e}class Fl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_u(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return zP(this.persistence,new FP,e.initialUser,this.serializer)}Cu(e){return new Cw(pf.mi,this.serializer)}Du(e){return new KP}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fl.provider={build:()=>new Fl};class Fk extends Fl{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){oe(this.persistence.referenceDelegate instanceof Ml,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new IP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?lt.withCacheSize(this.cacheSizeBytes):lt.DEFAULT;return new Cw(r=>Ml.mi(r,n),this.serializer)}}class Kh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ay(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lk.bind(null,this.syncEngine),await gk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _k}()}createDatastore(e){const n=_u(e.databaseInfo.databaseId),r=function(s){return new ZP(s)}(e.databaseInfo);return function(s,o,l,u){return new rk(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new sk(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ay(this.syncEngine,n,0),function(){return ty.v()?new ty:new QP}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new Sk(i,s,o,l,u,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);$(Yr,"RemoteStore shutting down."),s.Ea.add(5),await Ho(s),s.Aa.shutdown(),s.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Kh.provider={build:()=>new Kh};/**
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
 */class kf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Sn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const _r="FirestoreClient";class Uk{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ye.UNAUTHENTICATED,this.clientId=tf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(_r,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(_r,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Tf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kc(t,e){t.asyncQueue.verifyOperationInProgress(),$(_r,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Rw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function uy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jk(t);$(_r,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ry(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ry(e.remoteStore,i)),t._onlineComponents=e}async function jk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(_r,"Using user provided OfflineComponentProvider");try{await kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Gi("Error using user provided cache. Falling back to memory cache: "+n),await kc(t,new Fl)}}else $(_r,"Using default OfflineComponentProvider"),await kc(t,new Fk(void 0));return t._offlineComponents}async function Hw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(_r,"Using user provided OnlineComponentProvider"),await uy(t,t._uninitializedComponentsProvider._online)):($(_r,"Using default OnlineComponentProvider"),await uy(t,new Kh))),t._onlineComponents}function zk(t){return Hw(t).then(e=>e.syncEngine)}async function Ul(t){const e=await Hw(t),n=e.eventManager;return n.onListen=Ak.bind(null,e.syncEngine),n.onUnlisten=Pk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Ck.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=kk.bind(null,e.syncEngine),n}function Bk(t,e,n={}){const r=new mn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new kf({next:g=>{f.Nu(),o.enqueueAndForget(()=>Sf(s,p));const A=g.docs.has(l);!A&&g.fromCache?h.reject(new z(L.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&g.fromCache&&u&&u.source==="server"?h.reject(new z(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Cf(du(l.path),f,{includeMetadataChanges:!0,qa:!0});return If(s,p)}(await Ul(t),t.asyncQueue,e,n,r)),r.promise}function $k(t,e,n={}){const r=new mn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new kf({next:g=>{f.Nu(),o.enqueueAndForget(()=>Sf(s,p)),g.fromCache&&u.source==="server"?h.reject(new z(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Cf(l,f,{includeMetadataChanges:!0,qa:!0});return If(s,p)}(await Ul(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Ww(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const cy=new Map;/**
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
 */const Gw="firestore.googleapis.com",hy=!0;class dy{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Gw,this.ssl=hy}else this.host=e.host,this.ssl=e.ssl??hy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Aw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<EP)throw new z(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ww(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new z(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Eu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new XC;switch(r.type){case"firstParty":return new eR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=cy.get(n);r&&($("ComponentProvider","Removing Datastore"),cy.delete(n),r.terminate())}(this),Promise.resolve()}}function qk(t,e,n,r={}){var h;t=Bt(t,Eu);const i=ns(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&($v(`https://${l}`),qv("Firestore",!0)),s.host!==Gw&&s.host!==l&&Gi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!Gr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Ye.MOCK_USER;else{f=EI(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new z(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ye(g)}t._authCredentials=new YC(new M0(f,p))}}/**
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
 */class oi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new oi(this.firestore,e,this._query)}}class Ce{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ce(this.firestore,e,this._key)}toJSON(){return{type:Ce._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(zo(n,Ce._jsonSchema))return new Ce(e,r||null,new H(ce.fromString(n.referencePath)))}}Ce._jsonSchemaVersion="firestore/documentReference/1.0",Ce._jsonSchema={type:xe("string",Ce._jsonSchemaVersion),referencePath:xe("string")};class ur extends oi{constructor(e,n,r){super(e,n,du(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ce(this.firestore,null,new H(e))}withConverter(e){return new ur(this.firestore,e,this._path)}}function ko(t,e,...n){if(t=pt(t),b0("collection","path",e),t instanceof Eu){const r=ce.fromString(e,...n);return Ag(r),new ur(t,null,r)}{if(!(t instanceof Ce||t instanceof ur))throw new z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return Ag(r),new ur(t.firestore,null,r)}}function br(t,e,...n){if(t=pt(t),arguments.length===1&&(e=tf.newId()),b0("doc","path",e),t instanceof Eu){const r=ce.fromString(e,...n);return Sg(r),new Ce(t,null,new H(r))}{if(!(t instanceof Ce||t instanceof ur))throw new z(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return Sg(r),new Ce(t.firestore,t instanceof ur?t.converter:null,new H(r))}}/**
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
 */const fy="AsyncQueue";class py{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new kw(this,"async_queue_retry"),this._c=()=>{const r=Pc();r&&$(fy,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Pc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new mn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!as(e))throw e;$(fy,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Sn("INTERNAL UNHANDLED ERROR: ",my(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=Ef.createAndSchedule(this,e,n,r,s=>this.hc(s));return this.tc.push(i),i}uc(){this.nc&&W(47125,{Pc:my(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function my(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function gy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Jr extends Eu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new py,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new py(e),this._firestoreClient=void 0,await e}}}function Hk(t,e){const n=typeof t=="object"?t:Kv(),r=typeof t=="string"?t:e||kl,i=Wd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=vI("firestore");s&&qk(i,...s)}return i}function Tu(t){if(t._terminated)throw new z(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Wk(t),t._firestoreClient}function Wk(t){var r,i,s;const e=t._freezeSettings(),n=function(l,u,h,f){return new yR(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ww(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((s=e.localCache)!=null&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Uk(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Ct{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ct(He.fromBase64String(e))}catch(n){throw new z(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ct(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(zo(e,Ct._jsonSchema))return Ct.fromBase64String(e.bytes)}}Ct._jsonSchemaVersion="firestore/bytes/1.0",Ct._jsonSchema={type:xe("string",Ct._jsonSchemaVersion),bytes:xe("string")};/**
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
 */class Nf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Kw{constructor(e){this._methodName=e}}/**
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
 */class sn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:sn._jsonSchemaVersion}}static fromJSON(e){if(zo(e,sn._jsonSchema))return new sn(e.latitude,e.longitude)}}sn._jsonSchemaVersion="firestore/geoPoint/1.0",sn._jsonSchema={type:xe("string",sn._jsonSchemaVersion),latitude:xe("number"),longitude:xe("number")};/**
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
 */class on{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:on._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(zo(e,on._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new on(e.vectorValues);throw new z(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}on._jsonSchemaVersion="firestore/vectorValue/1.0",on._jsonSchema={type:xe("string",on._jsonSchemaVersion),vectorValues:xe("object")};/**
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
 */const Gk=/^__.*__$/;class Kk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ii(e,this.data,this.fieldMask,n,this.fieldTransforms):new $o(e,this.data,n,this.fieldTransforms)}}function Qw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{Ac:t})}}class xf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new xf({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return jl(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Qw(this.Ac)&&Gk.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Qk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_u(e)}Cc(e,n,r,i=!1){return new xf({Ac:e,methodName:n,Dc:r,path:Be.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xw(t){const e=t._freezeSettings(),n=_u(t._databaseId);return new Qk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xk(t,e,n,r,i,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,i);Zw("Data must be an object, but it was:",o,r);const l=Yw(r,o);let u,h;if(s.merge)u=new Ut(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=Jk(e,p,n);if(!o.contains(g))throw new z(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);eN(f,g)||f.push(g)}u=new Ut(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new Kk(new At(l),u,h)}function Yk(t,e,n,r=!1){return Df(n,t.Cc(r?4:3,e))}function Df(t,e){if(Jw(t=pt(t)))return Zw("Unsupported field value:",e,t),Yw(t,e);if(t instanceof Kw)return function(r,i){if(!Qw(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=Df(l,i.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return UR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ae.fromDate(r);return{timestampValue:Ll(i.serializer,s)}}if(r instanceof ae){const s=new ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ll(i.serializer,s)}}if(r instanceof sn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ct)return{bytesValue:_w(i.serializer,r._byteString)};if(r instanceof Ce){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:df(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof on)return function(o,l){return{mapValue:{fields:{[W0]:{stringValue:K0},[Nl]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return lf(l.serializer,h)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${lu(r)}`)}(t,e)}function Yw(t,e){const n={};return j0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ni(t,(r,i)=>{const s=Df(i,e.mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Jw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ae||t instanceof sn||t instanceof Ct||t instanceof Ce||t instanceof Kw||t instanceof on)}function Zw(t,e,n){if(!Jw(n)||!F0(n)){const r=lu(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function Jk(t,e,n){if((e=pt(e))instanceof Nf)return e._internalPath;if(typeof e=="string")return eE(t,e);throw jl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Zk=new RegExp("[~\\*/\\[\\]]");function eE(t,e,n){if(e.search(Zk)>=0)throw jl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nf(...e.split("."))._internalPath}catch{throw jl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function jl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new z(L.INVALID_ARGUMENT,l+t+u)}function eN(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class tE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Vf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tN extends tE{data(){return super.data()}}function Vf(t,e){return typeof e=="string"?eE(t,e):e instanceof Nf?e._internalPath:e._delegate._internalPath}/**
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
 */function nE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Of{}class nN extends Of{}function rE(t,e,...n){let r=[];e instanceof Of&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Lf).length,l=s.filter(u=>u instanceof Iu).length;if(o>1||o>0&&l>0)throw new z(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Iu extends nN{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Iu(e,n,r)}_apply(e){const n=this._parse(e);return iE(e._query,n),new oi(e.firestore,e.converter,Fh(e._query,n))}_parse(e){const n=Xw(e.firestore);return function(s,o,l,u,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new z(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){_y(p,f);const k=[];for(const x of p)k.push(yy(u,s,x));g={arrayValue:{values:k}}}else g=yy(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||_y(p,f),g=Yk(l,o,p,f==="in"||f==="not-in");return Ne.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function rN(t,e,n){const r=e,i=Vf("where",t);return Iu._create(i,r,n)}class Lf extends Of{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Lf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)iE(o,u),o=Fh(o,u)}(e._query,n),new oi(e.firestore,e.converter,Fh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function yy(t,e,n){if(typeof(n=pt(n))=="string"){if(n==="")throw new z(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nw(e)&&n.indexOf("/")!==-1)throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ce.fromString(n));if(!H.isDocumentKey(r))throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vg(t,new H(r))}if(n instanceof Ce)return Vg(t,n._key);throw new z(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lu(n)}.`)}function _y(t,e){if(!Array.isArray(t)||t.length===0)throw new z(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function iE(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class iN{convertValue(e,n="none"){switch(gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ni(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Nl].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Se(o.doubleValue));return new on(n)}convertGeoPoint(e){return new sn(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(So(e));default:return null}}convertTimestamp(e){const n=pr(e);return new ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ce.fromString(e);oe(Sw(r),9688,{name:e});const i=new Ao(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Sn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function sN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class js{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jr extends tE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Vf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=jr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}jr._jsonSchemaVersion="firestore/documentSnapshot/1.0",jr._jsonSchema={type:xe("string",jr._jsonSchemaVersion),bundleSource:xe("string","DocumentSnapshot"),bundleName:xe("string"),bundle:xe("string")};class Qa extends jr{data(e={}){return super.data(e)}}class zr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new js(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Qa(this._firestore,this._userDataWriter,r.key,r,new js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Qa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new js(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Qa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new js(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:oN(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=zr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=tf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function oN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W(61501,{type:t})}}/**
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
 */function sE(t){t=Bt(t,Ce);const e=Bt(t.firestore,Jr);return Bk(Tu(e),t._key).then(n=>aE(e,t,n))}zr._jsonSchemaVersion="firestore/querySnapshot/1.0",zr._jsonSchema={type:xe("string",zr._jsonSchemaVersion),bundleSource:xe("string","QuerySnapshot"),bundleName:xe("string"),bundle:xe("string")};class Mf extends iN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ct(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ce(this.firestore,null,n)}}function aN(t){t=Bt(t,oi);const e=Bt(t.firestore,Jr),n=Tu(e),r=new Mf(e);return nE(t._query),$k(n,t._query).then(i=>new zr(e,r,t,i))}function bf(t,e,n){t=Bt(t,Ce);const r=Bt(t.firestore,Jr),i=sN(t.converter,e,n);return oE(r,[Xk(Xw(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,nn.none())])}function Nc(t){return oE(Bt(t.firestore,Jr),[new uf(t._key,nn.none())])}function lN(t,...e){var u,h,f;t=pt(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||gy(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(gy(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(h=p.error)==null?void 0:h.bind(p),e[r+2]=(f=p.complete)==null?void 0:f.bind(p)}let s,o,l;if(t instanceof Ce)o=Bt(t.firestore,Jr),l=du(t._key.path),s={next:p=>{e[r]&&e[r](aE(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=Bt(t,oi);o=Bt(p.firestore,Jr),l=p._query;const g=new Mf(o);s={next:A=>{e[r]&&e[r](new zr(o,g,p,A))},error:e[r+1],complete:e[r+2]},nE(t._query)}return function(g,A,k,x){const D=new kf(x),E=new Cf(A,D,k);return g.asyncQueue.enqueueAndForget(async()=>If(await Ul(g),E)),()=>{D.Nu(),g.asyncQueue.enqueueAndForget(async()=>Sf(await Ul(g),E))}}(Tu(o),l,i,s)}function oE(t,e){return function(r,i){const s=new mn;return r.asyncQueue.enqueueAndForget(async()=>Nk(await zk(r),i,s)),s.promise}(Tu(t),e)}function aE(t,e,n){const r=n.docs.get(e._key),i=new Mf(t);return new jr(t,i,e._key,r,new js(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ss=i})(rs),Wi(new Kr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Jr(new JC(r.getProvider("auth-internal")),new tR(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new z(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ao(h.options.projectId,f)}(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),or(wg,Eg,e),or(wg,Eg,"esm2020")})();/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cN=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),vy=t=>{const e=cN(t);return e.charAt(0).toUpperCase()+e.slice(1)},lE=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),hN=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN=X.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>X.createElement("svg",{ref:u,...dN,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:lE("lucide",i),...!s&&!hN(l)&&{"aria-hidden":"true"},...l},[...o.map(([h,f])=>X.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=(t,e)=>{const n=X.forwardRef(({className:r,...i},s)=>X.createElement(fN,{ref:s,iconNode:e,className:lE(`lucide-${uN(vy(t))}`,`lucide-${t}`,r),...i}));return n.displayName=vy(t),n};/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],uE=xt("building-2",pN);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],wy=xt("download",mN);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],yN=xt("key-round",gN);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Zr=xt("loader-circle",_N);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],wN=xt("log-in",vN);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],TN=xt("lock",EN);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IN=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],cE=xt("plus",IN);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SN=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ey=xt("trash-2",SN);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AN=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],CN=xt("triangle-alert",AN);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Ty=xt("upload",RN);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PN=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],kN=xt("users",PN);/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NN=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],xN=xt("user",NN),Qh={apiKey:"AIzaSyD-VNYm8yM4IMKwmY9mblN6e9xKUs",authDomain:"admin-registration-system.firebaseapp.com",projectId:"admin-registration-system",storageBucket:"admin-registration-system.appspot.com",messagingSenderId:"606878229985",appId:"1:606878229985:web:0da8df13b9837cc2f1c8f8",measurementId:"G-WM64J45XXL"},DN=null,No=Qh.projectId,Iy="admin",VN="12345678",no=async(t,e=3)=>{for(let n=0;n<e;n++)try{return await t()}catch(r){if(n===e-1)throw r;const i=Math.pow(2,n)*1e3+Math.random()*1e3;await new Promise(s=>setTimeout(s,i))}},ON=t=>{if(!t||t.length===0)return"";const e=["id","name","digitalLiteracy","centerId","centerName","partnerId","partnerName","registrationDate","studentPictureBase64"],n=[];n.push(e.join(","));for(const r of t){const i=e.map(s=>{let o=r[s];return s==="registrationDate"&&o instanceof ae?o=o.toDate().toLocaleString():s==="studentPictureBase64"&&(o=o?"Image Stored (Base64)":"No Image"),typeof o=="string"&&(o=o.replace(/"/g,'""'),(o.includes(",")||o.includes(`
`))&&(o=`"${o}"`)),o});n.push(i.join(","))}return n.join(`
`)},LN=()=>{const[t,e]=X.useState(null),[n,r]=X.useState(null),[i,s]=X.useState(!0);return X.useEffect(()=>{if(!Qh){console.error("Firebase config is missing."),s(!1);return}try{const o=Gv(Qh),l=Hk(o),u=KC(o);e(l),r(u);const h=bA(u,async f=>{if(!f)try{DN||await xA(u)}catch(p){console.error("Error during authentication:",p)}s(!1)});return()=>h()}catch(o){console.error("Firebase initialization failed:",o),s(!1)}},[]),{db:t,auth:n,isLoading:i}},xc=(t,e,n)=>{const[r,i]=X.useState([]),[s,o]=X.useState(!0);return X.useEffect(()=>{if(!t||!n){t||o(!1);return}o(!0);const l=ko(t,`artifacts/${No}/public/data/${e}`),u=rE(l),h=lN(u,f=>{const p=f.docs.map(g=>({id:g.id,...g.data()}));i(p),o(!1)},f=>{console.error(`Error fetching ${e}:`,f),o(!1)});return()=>h()},[t,e,n]),{data:r,loading:s}},Fi=({title:t,children:e,icon:n,className:r=""})=>V.jsxs("div",{className:`bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl ${r}`,children:[V.jsxs("div",{className:"flex items-center space-x-3 mb-4 border-b pb-3",children:[n&&V.jsx(n,{className:"w-6 h-6 text-indigo-600"}),V.jsx("h2",{className:"text-2xl font-extrabold text-gray-800",children:t})]}),e]}),Qn=({children:t,onClick:e,disabled:n,primary:r,className:i="",icon:s,...o})=>V.jsxs("button",{onClick:e,disabled:n,className:`
            flex items-center justify-center space-x-2 px-4 py-2 font-semibold rounded-lg transition-all duration-200
            ${r?"bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg":"bg-gray-200 text-gray-700 hover:bg-gray-300"}
            ${n?"opacity-50 cursor-not-allowed":"active:scale-[0.98]"}
            ${i}
        `,...o,children:[s&&V.jsx(s,{className:"w-5 h-5"}),V.jsx("span",{children:t})]}),gn=({label:t,type:e="text",value:n,onChange:r,placeholder:i,required:s=!1,className:o=""})=>V.jsxs("div",{className:`space-y-1 ${o}`,children:[V.jsxs("label",{className:"block text-sm font-medium text-gray-700",children:[t,s&&V.jsx("span",{className:"text-red-500",children:"*"})]}),V.jsx("input",{type:e,value:n,onChange:r,placeholder:i,required:s,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-150"})]}),MN=({db:t,authReady:e,onLogin:n,partners:r,centers:i})=>{const[s,o]=X.useState("super_admin"),[l,u]=X.useState(""),[h,f]=X.useState(""),[p,g]=X.useState(""),[A,k]=X.useState(!1),x=X.useCallback(async E=>{if(E.preventDefault(),!!e){k(!0),g("");try{if(s==="super_admin")l===Iy&&h===VN?n({role:"SUPER_ADMIN",id:Iy,name:"Super Administrator"}):g("Invalid Super Admin credentials.");else if(s==="partner"){const v=r.find(C=>C.id===l);v&&v.password===h?n({role:"PARTNER",id:v.id,name:v.name}):g("Invalid Partner ID or Password.")}else if(s==="center_user"){const v=i.find(C=>C.id===l);v&&v.password===h?n({role:"CENTER_USER",id:v.id,name:v.name,partnerId:v.partnerId}):g("Invalid Center ID or Password.")}}catch(v){console.error("Login error:",v),g("An unexpected error occurred during login.")}finally{k(!1)}}},[s,l,h,e,n,r,i]),D=E=>`px-4 py-2 font-semibold transition-colors duration-200 rounded-t-lg ${s===E?"bg-indigo-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`;return V.jsx("div",{className:"max-w-md mx-auto mt-10",children:V.jsxs(Fi,{title:"Role Login",icon:wN,children:[V.jsxs("div",{className:"mb-4 flex border-b border-gray-200",children:[V.jsx("button",{onClick:()=>{o("super_admin"),g(""),u(""),f("")},className:D("super_admin"),children:"Super Admin"}),V.jsx("button",{onClick:()=>{o("partner"),g(""),u(""),f("")},className:D("partner"),children:"Partner"}),V.jsx("button",{onClick:()=>{o("center_user"),g(""),u(""),f("")},className:D("center_user"),children:"Center User"})]}),V.jsxs("div",{className:"p-4 bg-yellow-50 rounded-lg text-sm text-yellow-800 mb-6",children:[V.jsx(CN,{className:"w-4 h-4 inline mr-2"}),"**DEMO WARNING:** Credentials and roles are managed client-side and passwords are *unencrypted* in the database. **Do NOT use this structure in production.**"]}),p&&V.jsx("div",{className:`p-3 mb-4 rounded-lg text-sm ${p.startsWith("Invalid")||p.startsWith("Error")?"bg-red-100 text-red-700":"bg-green-100 text-green-700"}`,children:p}),V.jsxs("form",{onSubmit:x,className:"space-y-4",children:[V.jsx(gn,{label:s==="super_admin"?"Username":`${s.replace("_"," ")} ID`,value:l,onChange:E=>u(E.target.value),placeholder:s==="super_admin"?"admin":"P_... or C_...",required:!0}),V.jsx(gn,{label:"Password",type:"password",value:h,onChange:E=>f(E.target.value),placeholder:"Enter password",required:!0}),V.jsx(Qn,{type:"submit",primary:!0,disabled:A||!l||!h,icon:A?Zr:yN,className:"w-full",children:A?"Logging In...":"Log In"})]})]})})},bN=({db:t,authReady:e,partners:n,centers:r,students:i,partnersLoading:s,centersLoading:o})=>{const[l,u]=X.useState(""),[h,f]=X.useState(""),[p,g]=X.useState(""),[A,k]=X.useState(!1),[x,D]=X.useState(""),E=ko(t,`artifacts/${No}/public/data/partners`),v=ko(t,`artifacts/${No}/public/data/centers`),C=X.useCallback(async()=>{if(!(!l||!h||!p||!e)){k(!0),D("");try{await no(async()=>{if((await sE(br(E,l))).exists())throw new Error(`Partner ID "${l}" already exists.`);await bf(br(E,l),{name:h,password:p,createdAt:ae.now()})}),D(`Success: Partner "${h}" created with ID: ${l}.`),u(""),f(""),g("")}catch(_){console.error("Error creating partner:",_),D(`Error: Failed to create partner. ${_.message}`)}finally{k(!1)}}},[l,h,p,E,e]),O=X.useCallback(async(_,y)=>{if(!(!e||!window.confirm(`Are you sure you want to DELETE Partner: ${y} (ID: ${_})? This will also remove all linked Centers and Students!`))){k(!0),D("");try{await no(async()=>{const w=rE(v,rN("partnerId","==",_));(await aN(w)).forEach(async S=>{await Nc(S.ref)}),await Nc(br(E,_))}),D(`Success: Partner "${y}" and associated centers deleted.`)}catch(w){console.error("Error deleting partner:",w),D(`Error: Failed to delete partner. ${w.message}`)}finally{k(!1)}}},[E,v,e]),U=X.useCallback(async(_,y)=>{if(!(!e||!window.confirm(`Are you sure you want to DELETE Center: ${y} (ID: ${_})? This will orphan all linked Students!`))){k(!0),D("");try{await no(async()=>{await Nc(br(v,_))}),D(`Success: Center "${y}" deleted.`)}catch(w){console.error("Error deleting center:",w),D(`Error: Failed to delete center. ${w.message}`)}finally{k(!1)}}},[v,e]),j=X.useCallback(()=>{if(i.length===0){D("No student data available to download.");return}const _=i.map(S=>{var P,T,Re;return{id:S.id,name:S.name,digitalLiteracy:S.digitalLiteracy,centerId:S.centerId,centerName:((P=r.find(We=>We.id===S.centerId))==null?void 0:P.name)||"N/A",partnerId:((T=r.find(We=>We.id===S.centerId))==null?void 0:T.partnerId)||"N/A",partnerName:((Re=n.find(We=>{var Pn;return We.id===((Pn=r.find(Tr=>Tr.id===S.centerId))==null?void 0:Pn.partnerId)}))==null?void 0:Re.name)||"N/A",registrationDate:S.registrationDate,studentPictureBase64:S.studentPictureBase64}}),y=ON(_),w=new Blob([y],{type:"text/csv;charset=utf-8;"}),I=document.createElement("a");I.href=URL.createObjectURL(w),I.setAttribute("download",`student_data_${new Date().toISOString().slice(0,10)}.csv`),document.body.appendChild(I),I.click(),document.body.removeChild(I),D(`Success: Downloaded ${i.length} student records.`)},[i,n,r]);return V.jsxs("div",{className:"space-y-8 p-4",children:[V.jsx("h1",{className:"text-3xl font-black text-indigo-700",children:"Super Admin Dashboard"}),x&&V.jsx("div",{className:`p-4 rounded-lg text-sm ${x.startsWith("Error")||x.startsWith("Partner ID")?"bg-red-100 text-red-700":"bg-green-100 text-green-700"}`,children:x}),V.jsxs(Fi,{title:"Manage Partners (ID & Credentials)",icon:kN,children:[V.jsx("p",{className:"text-sm text-red-500 mb-4 font-semibold",children:"Super Admin is responsible for setting Partner IDs and Passwords."}),V.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-6",children:[V.jsx(gn,{label:"Partner ID (Username)",value:l,onChange:_=>u(_.target.value),placeholder:"P_GLOBAL_EAST",required:!0}),V.jsx(gn,{label:"Partner Name",value:h,onChange:_=>f(_.target.value),placeholder:"Global East Operations",required:!0}),V.jsx(gn,{label:"Password",type:"password",value:p,onChange:_=>g(_.target.value),placeholder:"Set password",required:!0}),V.jsx(Qn,{primary:!0,onClick:C,disabled:A||!l||!h||!p,icon:cE,className:"md:self-end h-[42px] mt-1",children:"Create Partner"})]}),V.jsxs("h3",{className:"text-xl font-semibold mt-6 mb-3 text-gray-700",children:["Existing Partners (",n.length,")"]}),s?V.jsxs("div",{className:"flex items-center justify-center p-4 text-indigo-600",children:[V.jsx(Zr,{className:"w-5 h-5 animate-spin mr-2"})," Loading Partners..."]}):n.length===0?V.jsx("p",{className:"text-gray-500 italic",children:"No partners found. Create one above."}):V.jsx("div",{className:"space-y-3",children:n.map(_=>V.jsxs("div",{className:"flex flex-wrap justify-between items-center p-3 bg-indigo-50 border border-indigo-200 rounded-lg",children:[V.jsxs("div",{children:[V.jsx("p",{className:"font-bold text-gray-800",children:_.name}),V.jsxs("p",{className:"text-xs text-indigo-600 font-mono",children:["ID: ",_.id]}),V.jsxs("p",{className:"text-xs text-gray-500",children:["Pass: ",_.password||"[Hidden]"]})]}),V.jsx(Qn,{onClick:()=>O(_.id,_.name),disabled:A,className:"bg-red-500 text-white hover:bg-red-600",icon:Ey,children:"Delete Partner"})]},_.id))})]}),V.jsxs(Fi,{title:"Manage Centers (Deletion Only)",icon:uE,children:[V.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Centers are created by logged-in Partners. Super Admin can delete them here."}),V.jsxs("h3",{className:"text-xl font-semibold mt-6 mb-3 text-gray-700",children:["Existing Centers (",r.length,")"]}),o?V.jsxs("div",{className:"flex items-center justify-center p-4 text-indigo-600",children:[V.jsx(Zr,{className:"w-5 h-5 animate-spin mr-2"})," Loading Centers..."]}):r.length===0?V.jsx("p",{className:"text-gray-500 italic",children:"No centers found."}):V.jsx("div",{className:"space-y-3",children:r.map(_=>V.jsxs("div",{className:"flex flex-wrap justify-between items-center p-3 bg-indigo-50 border border-indigo-200 rounded-lg",children:[V.jsxs("div",{children:[V.jsx("p",{className:"font-bold text-gray-800",children:_.name}),V.jsxs("p",{className:"text-xs text-indigo-600 font-mono",children:["ID: ",_.id," | Partner: ",_.partnerId]}),V.jsxs("p",{className:"text-xs text-gray-500",children:["Pass: ",_.password||"[Hidden]"]})]}),V.jsx(Qn,{onClick:()=>U(_.id,_.name),disabled:A,className:"bg-red-500 text-white hover:bg-red-600",icon:Ey,children:"Delete Center"})]},_.id))})]}),V.jsxs(Fi,{title:"Data Download",icon:wy,children:[V.jsx("p",{className:"text-gray-600 mb-4",children:"Download all student registration data in CSV format (compatible with Excel)."}),V.jsxs("div",{className:"flex items-center justify-between",children:[V.jsxs("p",{className:"font-mono text-sm text-gray-700",children:[i.length," Total Student Records"]}),V.jsx(Qn,{primary:!0,onClick:j,disabled:i.length===0,icon:wy,children:"Download All Student Data (.csv)"})]})]})]})},FN=({db:t,authReady:e,user:n,centers:r,centersLoading:i})=>{const[s,o]=X.useState(""),[l,u]=X.useState(""),[h,f]=X.useState(""),[p,g]=X.useState(!1),[A,k]=X.useState(""),x=ko(t,`artifacts/${No}/public/data/centers`),D=r.filter(v=>v.partnerId===n.id),E=X.useCallback(async()=>{if(!(!s||!l||!h||!e)){g(!0),k("");try{await no(async()=>{if((await sE(br(x,s))).exists())throw new Error(`Center ID "${s}" already exists.`);await bf(br(x,s),{name:l,partnerId:n.id,password:h,createdAt:ae.now()})}),k(`Success: Center "${l}" created with ID: ${s}.`),o(""),u(""),f("")}catch(v){console.error("Error creating center:",v),k(`Error: Failed to create center. ${v.message}`)}finally{g(!1)}}},[s,l,h,x,e,n.id]);return V.jsxs("div",{className:"space-y-8 p-4 max-w-4xl mx-auto",children:[V.jsxs("h1",{className:"text-3xl font-black text-indigo-700",children:["Partner Dashboard: ",n.name]}),V.jsxs("p",{className:"text-gray-600",children:["Partner ID: ",V.jsx("code",{className:"font-mono bg-gray-200 p-1 rounded",children:n.id})]}),A&&V.jsx("div",{className:`p-4 rounded-lg text-sm ${A.startsWith("Error")||A.startsWith("Center ID")?"bg-red-100 text-red-700":"bg-green-100 text-green-700"}`,children:A}),V.jsxs(Fi,{title:"Create Center ID & Credentials",icon:uE,children:[V.jsx("p",{className:"text-sm text-red-500 mb-4 font-semibold",children:"You are setting the ID and Password for Center Users to log in."}),V.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-6",children:[V.jsx(gn,{label:"Center ID (Username)",value:s,onChange:v=>o(v.target.value),placeholder:"C_MUMBAI_01",required:!0}),V.jsx(gn,{label:"Center Name",value:l,onChange:v=>u(v.target.value),placeholder:"Mumbai Branch 1",required:!0}),V.jsx(gn,{label:"Password",type:"password",value:h,onChange:v=>f(v.target.value),placeholder:"Set password",required:!0}),V.jsx(Qn,{primary:!0,onClick:E,disabled:p||!s||!l||!h,icon:cE,className:"md:self-end h-[42px] mt-1",children:"Create Center"})]}),V.jsxs("h3",{className:"text-xl font-semibold mt-6 mb-3 text-gray-700",children:["Your Centers (",D.length,")"]}),i?V.jsxs("div",{className:"flex items-center justify-center p-4 text-indigo-600",children:[V.jsx(Zr,{className:"w-5 h-5 animate-spin mr-2"})," Loading Centers..."]}):D.length===0?V.jsx("p",{className:"text-gray-500 italic",children:"You have not created any centers yet."}):V.jsx("div",{className:"space-y-3",children:D.map(v=>V.jsxs("div",{className:"p-3 bg-indigo-50 border border-indigo-200 rounded-lg",children:[V.jsx("p",{className:"font-bold text-gray-800",children:v.name}),V.jsxs("p",{className:"text-xs text-indigo-600 font-mono",children:["ID: ",v.id]}),V.jsxs("p",{className:"text-xs text-gray-500",children:["Pass: ",v.password||"[Hidden]"]})]},v.id))})]})]})},UN=({db:t,authReady:e,user:n})=>{const[r,i]=X.useState(""),[s,o]=X.useState(""),[l,u]=X.useState(null),[h,f]=X.useState(!1),[p,g]=X.useState(""),A=ko(t,`artifacts/${No}/public/data/students`),k=D=>{const E=D.target.files[0];E&&E.size>1024*1024?(g("Error: File size must be less than 1MB."),u(null)):u(E)},x=X.useCallback(async D=>{if(D.preventDefault(),!r||!s||!e){g("Error: Please fill in all required fields.");return}f(!0),g("");try{let E=null;if(l){const v=new FileReader;v.readAsDataURL(l),await new Promise(C=>{v.onloadend=()=>{E=v.result,C()}})}await no(async()=>{const v={name:r,digitalLiteracy:s,centerId:n.id,registrationDate:ae.now(),studentPictureBase64:E};await bf(br(A,`STUDENT_${Date.now()}`),v)}),g("Success: Student registered successfully!"),i(""),o(""),u(null),document.getElementById("student-pic").value=""}catch(E){console.error("Error registering student:",E),g(`Error: Failed to register student. ${E.message}`)}finally{f(!1)}},[r,s,l,A,e,n.id]);return V.jsxs(Fi,{title:"Student Registration",icon:Ty,className:"max-w-xl mx-auto",children:[V.jsxs("h2",{className:"text-xl font-semibold mb-2 text-gray-700",children:["Center: ",n.name," (",V.jsx("code",{className:"font-mono text-sm text-indigo-600",children:n.id}),")"]}),V.jsx("p",{className:"text-sm text-gray-500 mb-4",children:"Register a new student for your center."}),p&&V.jsx("div",{className:`p-3 mb-4 rounded-lg text-sm ${p.startsWith("Error")?"bg-red-100 text-red-700":"bg-green-100 text-green-700"}`,children:p}),V.jsxs("form",{onSubmit:x,className:"space-y-4",children:[V.jsx(gn,{label:"Student Name",value:r,onChange:D=>i(D.target.value),placeholder:"Jane Doe",required:!0}),V.jsxs("div",{className:"space-y-1",children:[V.jsxs("label",{className:"block text-sm font-medium text-gray-700",children:["Digital Literacy Level",V.jsx("span",{className:"text-red-500",children:"*"})]}),V.jsxs("select",{value:s,onChange:D=>o(D.target.value),className:"w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-indigo-500 focus:border-indigo-500 outline-none transition duration-150 h-[42px]",required:!0,children:[V.jsx("option",{value:"",children:"Select Level"}),V.jsx("option",{value:"Basic",children:"Basic"}),V.jsx("option",{value:"Intermediate",children:"Intermediate"}),V.jsx("option",{value:"Advanced",children:"Advanced"})]})]}),V.jsxs("div",{children:[V.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Student Picture (Max 1MB)"}),V.jsx("input",{type:"file",id:"student-pic",accept:"image/*",onChange:k,className:"w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"}),l&&V.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Selected: ",l.name]})]}),V.jsx(Qn,{type:"submit",primary:!0,disabled:h,icon:Ty,className:"w-full",children:h?V.jsx(Zr,{className:"w-5 h-5 animate-spin"}):"Register Student"})]})]})},jN=()=>{const{db:t,isLoading:e}=LN(),[n,r]=X.useState({role:"NONE",id:null,name:null}),i=!e&&!!t,{data:s,loading:o}=xc(t,"partners",i),{data:l,loading:u}=xc(t,"centers",i),{data:h,loading:f}=xc(t,"students",i),p=X.useCallback(()=>{r({role:"NONE",id:null,name:null})},[]);if(e)return V.jsxs("div",{className:"flex items-center justify-center min-h-screen bg-gray-50",children:[V.jsx(Zr,{className:"w-8 h-8 text-indigo-600 animate-spin mr-3"}),V.jsx("p",{className:"text-xl font-medium text-gray-700",children:"Connecting to Database..."})]});const g=n.id||"N/A";return V.jsxs("div",{className:"min-h-screen bg-gray-50 font-sans p-4 md:p-8",children:[V.jsx("header",{className:"mb-8 p-4 bg-indigo-50 rounded-xl shadow-inner border border-indigo-200",children:V.jsxs("div",{className:"flex justify-between items-center",children:[V.jsxs("div",{className:"flex items-center space-x-2",children:[V.jsx(xN,{className:"w-5 h-5 text-indigo-700"}),V.jsxs("span",{className:"text-sm font-semibold text-gray-700",children:["Current Role: ",V.jsx("span",{className:"text-indigo-700 font-bold",children:n.role.replace("_"," ")}),n.name&&V.jsxs("span",{className:"text-xs text-gray-500 ml-2",children:["(",n.name,")"]})]})]}),V.jsxs("div",{className:"flex items-center space-x-4",children:[V.jsxs("code",{className:"text-xs font-mono bg-white p-1 rounded text-gray-800 border border-gray-300 shadow-sm",children:["User ID: ",g]}),n.role!=="NONE"&&V.jsx(Qn,{onClick:p,className:"text-sm bg-red-100 text-red-600 hover:bg-red-200",icon:TN,children:"Logout"})]})]})}),n.role==="NONE"&&V.jsx(MN,{db:t,authReady:i,onLogin:r,partners:s,centers:l}),n.role==="SUPER_ADMIN"&&V.jsx(bN,{db:t,authReady:i,partners:s,centers:l,students:h,partnersLoading:o,centersLoading:u}),n.role==="PARTNER"&&V.jsx(FN,{db:t,authReady:i,user:n,centers:l,centersLoading:u}),n.role==="CENTER_USER"&&V.jsx(UN,{db:t,authReady:i,user:n}),(o||u||f)&&V.jsxs("div",{className:"fixed bottom-0 left-0 right-0 p-2 bg-indigo-600 text-white text-center text-sm",children:[V.jsx(Zr,{className:"w-4 h-4 inline animate-spin mr-2"}),"Syncing data in real-time..."]})]})};Mv(document.getElementById("root")).render(V.jsx(X.StrictMode,{children:V.jsx(jN,{})}));
