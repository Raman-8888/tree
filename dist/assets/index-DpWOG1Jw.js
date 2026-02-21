(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function yg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var zc={exports:{}},ko={},kc={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function Yv(){if(sm)return yt;sm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,R={};function x(I,j,ve){this.props=I,this.context=j,this.refs=R,this.updater=ve||S}x.prototype.isReactComponent={},x.prototype.setState=function(I,j){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,j,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function y(){}y.prototype=x.prototype;function b(I,j,ve){this.props=I,this.context=j,this.refs=R,this.updater=ve||S}var P=b.prototype=new y;P.constructor=b,M(P,x.prototype),P.isPureReactComponent=!0;var C=Array.isArray,z=Object.prototype.hasOwnProperty,F={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function w(I,j,ve){var Oe,Ye={},ie=null,he=null;if(j!=null)for(Oe in j.ref!==void 0&&(he=j.ref),j.key!==void 0&&(ie=""+j.key),j)z.call(j,Oe)&&!B.hasOwnProperty(Oe)&&(Ye[Oe]=j[Oe]);var pe=arguments.length-2;if(pe===1)Ye.children=ve;else if(1<pe){for(var Le=Array(pe),We=0;We<pe;We++)Le[We]=arguments[We+2];Ye.children=Le}if(I&&I.defaultProps)for(Oe in pe=I.defaultProps,pe)Ye[Oe]===void 0&&(Ye[Oe]=pe[Oe]);return{$$typeof:s,type:I,key:ie,ref:he,props:Ye,_owner:F.current}}function D(I,j){return{$$typeof:s,type:I.type,key:j,ref:I.ref,props:I.props,_owner:I._owner}}function ue(I){return typeof I=="object"&&I!==null&&I.$$typeof===s}function O(I){var j={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ve){return j[ve]})}var ee=/\/+/g;function Y(I,j){return typeof I=="object"&&I!==null&&I.key!=null?O(""+I.key):j.toString(36)}function J(I,j,ve,Oe,Ye){var ie=typeof I;(ie==="undefined"||ie==="boolean")&&(I=null);var he=!1;if(I===null)he=!0;else switch(ie){case"string":case"number":he=!0;break;case"object":switch(I.$$typeof){case s:case e:he=!0}}if(he)return he=I,Ye=Ye(he),I=Oe===""?"."+Y(he,0):Oe,C(Ye)?(ve="",I!=null&&(ve=I.replace(ee,"$&/")+"/"),J(Ye,j,ve,"",function(We){return We})):Ye!=null&&(ue(Ye)&&(Ye=D(Ye,ve+(!Ye.key||he&&he.key===Ye.key?"":(""+Ye.key).replace(ee,"$&/")+"/")+I)),j.push(Ye)),1;if(he=0,Oe=Oe===""?".":Oe+":",C(I))for(var pe=0;pe<I.length;pe++){ie=I[pe];var Le=Oe+Y(ie,pe);he+=J(ie,j,ve,Le,Ye)}else if(Le=g(I),typeof Le=="function")for(I=Le.call(I),pe=0;!(ie=I.next()).done;)ie=ie.value,Le=Oe+Y(ie,pe++),he+=J(ie,j,ve,Le,Ye);else if(ie==="object")throw j=String(I),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return he}function q(I,j,ve){if(I==null)return I;var Oe=[],Ye=0;return J(I,Oe,"","",function(ie){return j.call(ve,ie,Ye++)}),Oe}function Z(I){if(I._status===-1){var j=I._result;j=j(),j.then(function(ve){(I._status===0||I._status===-1)&&(I._status=1,I._result=ve)},function(ve){(I._status===0||I._status===-1)&&(I._status=2,I._result=ve)}),I._status===-1&&(I._status=0,I._result=j)}if(I._status===1)return I._result.default;throw I._result}var V={current:null},K={transition:null},ne={ReactCurrentDispatcher:V,ReactCurrentBatchConfig:K,ReactCurrentOwner:F};function oe(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:q,forEach:function(I,j,ve){q(I,function(){j.apply(this,arguments)},ve)},count:function(I){var j=0;return q(I,function(){j++}),j},toArray:function(I){return q(I,function(j){return j})||[]},only:function(I){if(!ue(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},yt.Component=x,yt.Fragment=t,yt.Profiler=o,yt.PureComponent=b,yt.StrictMode=r,yt.Suspense=h,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,yt.act=oe,yt.cloneElement=function(I,j,ve){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Oe=M({},I.props),Ye=I.key,ie=I.ref,he=I._owner;if(j!=null){if(j.ref!==void 0&&(ie=j.ref,he=F.current),j.key!==void 0&&(Ye=""+j.key),I.type&&I.type.defaultProps)var pe=I.type.defaultProps;for(Le in j)z.call(j,Le)&&!B.hasOwnProperty(Le)&&(Oe[Le]=j[Le]===void 0&&pe!==void 0?pe[Le]:j[Le])}var Le=arguments.length-2;if(Le===1)Oe.children=ve;else if(1<Le){pe=Array(Le);for(var We=0;We<Le;We++)pe[We]=arguments[We+2];Oe.children=pe}return{$$typeof:s,type:I.type,key:Ye,ref:ie,props:Oe,_owner:he}},yt.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:l,_context:I},I.Consumer=I},yt.createElement=w,yt.createFactory=function(I){var j=w.bind(null,I);return j.type=I,j},yt.createRef=function(){return{current:null}},yt.forwardRef=function(I){return{$$typeof:f,render:I}},yt.isValidElement=ue,yt.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:Z}},yt.memo=function(I,j){return{$$typeof:p,type:I,compare:j===void 0?null:j}},yt.startTransition=function(I){var j=K.transition;K.transition={};try{I()}finally{K.transition=j}},yt.unstable_act=oe,yt.useCallback=function(I,j){return V.current.useCallback(I,j)},yt.useContext=function(I){return V.current.useContext(I)},yt.useDebugValue=function(){},yt.useDeferredValue=function(I){return V.current.useDeferredValue(I)},yt.useEffect=function(I,j){return V.current.useEffect(I,j)},yt.useId=function(){return V.current.useId()},yt.useImperativeHandle=function(I,j,ve){return V.current.useImperativeHandle(I,j,ve)},yt.useInsertionEffect=function(I,j){return V.current.useInsertionEffect(I,j)},yt.useLayoutEffect=function(I,j){return V.current.useLayoutEffect(I,j)},yt.useMemo=function(I,j){return V.current.useMemo(I,j)},yt.useReducer=function(I,j,ve){return V.current.useReducer(I,j,ve)},yt.useRef=function(I){return V.current.useRef(I)},yt.useState=function(I){return V.current.useState(I)},yt.useSyncExternalStore=function(I,j,ve){return V.current.useSyncExternalStore(I,j,ve)},yt.useTransition=function(){return V.current.useTransition()},yt.version="18.3.1",yt}var om;function Ed(){return om||(om=1,kc.exports=Yv()),kc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function qv(){if(am)return ko;am=1;var s=Ed(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var v,_={},g=null,S=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(S=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(_[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)_[v]===void 0&&(_[v]=h[v]);return{$$typeof:e,type:f,key:g,ref:S,props:_,_owner:o.current}}return ko.Fragment=t,ko.jsx=c,ko.jsxs=c,ko}var lm;function jv(){return lm||(lm=1,zc.exports=qv()),zc.exports}var bt=jv(),Wn=Ed();const $v=yg(Wn);var vl={},Vc={exports:{}},Nn={},Hc={exports:{}},Gc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function Zv(){return um||(um=1,(function(s){function e(K,ne){var oe=K.length;K.push(ne);e:for(;0<oe;){var I=oe-1>>>1,j=K[I];if(0<o(j,ne))K[I]=ne,K[oe]=j,oe=I;else break e}}function t(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var ne=K[0],oe=K.pop();if(oe!==ne){K[0]=oe;e:for(var I=0,j=K.length,ve=j>>>1;I<ve;){var Oe=2*(I+1)-1,Ye=K[Oe],ie=Oe+1,he=K[ie];if(0>o(Ye,oe))ie<j&&0>o(he,Ye)?(K[I]=he,K[ie]=oe,I=ie):(K[I]=Ye,K[Oe]=oe,I=Oe);else if(ie<j&&0>o(he,oe))K[I]=he,K[ie]=oe,I=ie;else break e}}return ne}function o(K,ne){var oe=K.sortIndex-ne.sortIndex;return oe!==0?oe:K.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],p=[],v=1,_=null,g=3,S=!1,M=!1,R=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(K){for(var ne=t(p);ne!==null;){if(ne.callback===null)r(p);else if(ne.startTime<=K)r(p),ne.sortIndex=ne.expirationTime,e(h,ne);else break;ne=t(p)}}function C(K){if(R=!1,P(K),!M)if(t(h)!==null)M=!0,Z(z);else{var ne=t(p);ne!==null&&V(C,ne.startTime-K)}}function z(K,ne){M=!1,R&&(R=!1,y(w),w=-1),S=!0;var oe=g;try{for(P(ne),_=t(h);_!==null&&(!(_.expirationTime>ne)||K&&!O());){var I=_.callback;if(typeof I=="function"){_.callback=null,g=_.priorityLevel;var j=I(_.expirationTime<=ne);ne=s.unstable_now(),typeof j=="function"?_.callback=j:_===t(h)&&r(h),P(ne)}else r(h);_=t(h)}if(_!==null)var ve=!0;else{var Oe=t(p);Oe!==null&&V(C,Oe.startTime-ne),ve=!1}return ve}finally{_=null,g=oe,S=!1}}var F=!1,B=null,w=-1,D=5,ue=-1;function O(){return!(s.unstable_now()-ue<D)}function ee(){if(B!==null){var K=s.unstable_now();ue=K;var ne=!0;try{ne=B(!0,K)}finally{ne?Y():(F=!1,B=null)}}else F=!1}var Y;if(typeof b=="function")Y=function(){b(ee)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,q=J.port2;J.port1.onmessage=ee,Y=function(){q.postMessage(null)}}else Y=function(){x(ee,0)};function Z(K){B=K,F||(F=!0,Y())}function V(K,ne){w=x(function(){K(s.unstable_now())},ne)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(K){K.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,Z(z))},s.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<K?Math.floor(1e3/K):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(K){switch(g){case 1:case 2:case 3:var ne=3;break;default:ne=g}var oe=g;g=ne;try{return K()}finally{g=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(K,ne){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var oe=g;g=K;try{return ne()}finally{g=oe}},s.unstable_scheduleCallback=function(K,ne,oe){var I=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?I+oe:I):oe=I,K){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=oe+j,K={id:v++,callback:ne,priorityLevel:K,startTime:oe,expirationTime:j,sortIndex:-1},oe>I?(K.sortIndex=oe,e(p,K),t(h)===null&&K===t(p)&&(R?(y(w),w=-1):R=!0,V(C,oe-I))):(K.sortIndex=j,e(h,K),M||S||(M=!0,Z(z))),K},s.unstable_shouldYield=O,s.unstable_wrapCallback=function(K){var ne=g;return function(){var oe=g;g=ne;try{return K.apply(this,arguments)}finally{g=oe}}}})(Gc)),Gc}var cm;function Kv(){return cm||(cm=1,Hc.exports=Zv()),Hc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function Jv(){if(fm)return Nn;fm=1;var s=Ed(),e=Kv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function g(n){return h.call(_,n)?!0:h.call(v,n)?!1:p.test(n)?_[n]=!0:(v[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,u,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,b);x[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,b);x[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,b);x[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,u){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,u)&&(a=null),u||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),F=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),ue=Symbol.for("react.provider"),O=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),K=Symbol.iterator;function ne(n){return n===null||typeof n!="object"?null:(n=K&&n[K]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,I;function j(n){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+n}var ve=!1;function Oe(n,i){if(!n||ve)return"";ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ae){var u=ae}Reflect.construct(n,[],i)}else{try{i.call()}catch(ae){u=ae}n.call(i.prototype)}else{try{throw Error()}catch(ae){u=ae}n()}}catch(ae){if(ae&&u&&typeof ae.stack=="string"){for(var d=ae.stack.split(`
`),m=u.stack.split(`
`),T=d.length-1,U=m.length-1;1<=T&&0<=U&&d[T]!==m[U];)U--;for(;1<=T&&0<=U;T--,U--)if(d[T]!==m[U]){if(T!==1||U!==1)do if(T--,U--,0>U||d[T]!==m[U]){var k=`
`+d[T].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=T&&0<=U);break}}}finally{ve=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?j(n):""}function Ye(n){switch(n.tag){case 5:return j(n.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return n=Oe(n.type,!1),n;case 11:return n=Oe(n.type.render,!1),n;case 1:return n=Oe(n.type,!0),n;default:return""}}function ie(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case B:return"Fragment";case F:return"Portal";case D:return"Profiler";case w:return"StrictMode";case Y:return"Suspense";case J:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case ue:return(n._context.displayName||"Context")+".Provider";case ee:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case q:return i=n.displayName||null,i!==null?i:ie(n.type)||"Memo";case Z:i=n._payload,n=n._init;try{return ie(n(i))}catch{}}return null}function he(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function We(n){var i=Le(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){u=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function lt(n){n._valueTracker||(n._valueTracker=We(n))}function Lt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Le(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ge(n,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Me(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=pe(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function _e(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function De(n,i){_e(n,i);var a=pe(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?st(n,i.type,a):i.hasOwnProperty("defaultValue")&&st(n,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function N(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function st(n,i,a){(i!=="number"||ft(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ie=Array.isArray;function it(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+pe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Pe(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function L(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ie(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:pe(a)}}function E(n,i){var a=pe(i.value),u=pe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function G(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ce(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ce(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fe,Xe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ae(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Je={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},at=["Webkit","ms","Moz","O"];Object.keys(Je).forEach(function(n){at.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Je[i]=Je[n]})});function Se(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Je.hasOwnProperty(n)&&Je[n]?(""+i).trim():i+"px"}function Re(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=Se(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var Ke=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(n,i){if(i){if(Ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ze(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gt=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,we=null,ke=null;function Te(n){if(n=wo(n)){if(typeof be!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Da(i),be(n.stateNode,n.type,i))}}function de(n){we?ke?ke.push(n):ke=[n]:we=n}function $e(){if(we){var n=we,i=ke;if(ke=we=null,Te(n),i)for(n=0;n<i.length;n++)Te(i[n])}}function dt(n,i){return n(i)}function It(){}var wt=!1;function jn(n,i,a){if(wt)return n(i,a);wt=!0;try{return dt(n,i,a)}finally{wt=!1,(we!==null||ke!==null)&&(It(),$e())}}function yn(n,i){var a=n.stateNode;if(a===null)return null;var u=Da(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ls=!1;if(f)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){ls=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{ls=!1}function au(n,i,a,u,d,m,T,U,k){var ae=Array.prototype.slice.call(arguments,3);try{i.apply(a,ae)}catch(ye){this.onError(ye)}}var nr=!1,Nr=null,$n=!1,Ir=null,ca={onError:function(n){nr=!0,Nr=n}};function fa(n,i,a,u,d,m,T,U,k){nr=!1,Nr=null,au.apply(ca,arguments)}function us(n,i,a,u,d,m,T,U,k){if(fa.apply(this,arguments),nr){if(nr){var ae=Nr;nr=!1,Nr=null}else throw Error(t(198));$n||($n=!0,Ir=ae)}}function xi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ur(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function oo(n){if(xi(n)!==n)throw Error(t(188))}function da(n){var i=n.alternate;if(!i){if(i=xi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return oo(d),n;if(m===u)return oo(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=m;else{for(var T=!1,U=d.child;U;){if(U===a){T=!0,a=d,u=m;break}if(U===u){T=!0,u=d,a=m;break}U=U.sibling}if(!T){for(U=m.child;U;){if(U===a){T=!0,a=m,u=d;break}if(U===u){T=!0,u=m,a=d;break}U=U.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ha(n){return n=da(n),n!==null?pa(n):null}function pa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=pa(n);if(i!==null)return i;n=n.sibling}return null}var ma=e.unstable_scheduleCallback,ga=e.unstable_cancelCallback,lu=e.unstable_shouldYield,uu=e.unstable_requestPaint,A=e.unstable_now,$=e.unstable_getCurrentPriorityLevel,le=e.unstable_ImmediatePriority,se=e.unstable_UserBlockingPriority,te=e.unstable_NormalPriority,Ue=e.unstable_LowPriority,Ge=e.unstable_IdlePriority,Ne=null,Ve=null;function nt(n){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Ne,n,void 0,(n.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:Nt,vt=Math.log,rt=Math.LN2;function Nt(n){return n>>>=0,n===0?32:31-(vt(n)/rt|0)|0}var Bt=64,Ft=4194304;function Et(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function $t(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,T=a&268435455;if(T!==0){var U=T&~d;U!==0?u=Et(U):(m&=T,m!==0&&(u=Et(m)))}else T=a&~d,T!==0?u=Et(T):m!==0&&(u=Et(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-ot(i),d=1<<a,u|=n[a],i&=~d;return u}function et(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sn(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-ot(m),U=1<<T,k=d[T];k===-1?((U&a)===0||(U&u)!==0)&&(d[T]=et(U,i)):k<=i&&(n.expiredLanes|=U),m&=~U}}function Mt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function An(){var n=Bt;return Bt<<=1,(Bt&4194240)===0&&(Bt=64),n}function Cn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function On(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ot(i),n[i]=a}function ir(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-ot(a),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~m}}function Dt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-ot(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var ht=0;function ai(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Zt,Zn,Fi,ao,Vd,cu=!1,va=[],rr=null,sr=null,or=null,lo=new Map,uo=new Map,ar=[],p0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hd(n,i){switch(n){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":lo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(i.pointerId)}}function co(n,i,a,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=wo(i),i!==null&&Zn(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function m0(n,i,a,u,d){switch(i){case"focusin":return rr=co(rr,n,i,a,u,d),!0;case"dragenter":return sr=co(sr,n,i,a,u,d),!0;case"mouseover":return or=co(or,n,i,a,u,d),!0;case"pointerover":var m=d.pointerId;return lo.set(m,co(lo.get(m)||null,n,i,a,u,d)),!0;case"gotpointercapture":return m=d.pointerId,uo.set(m,co(uo.get(m)||null,n,i,a,u,d)),!0}return!1}function Gd(n){var i=Fr(n.target);if(i!==null){var a=xi(i);if(a!==null){if(i=a.tag,i===13){if(i=Ur(a),i!==null){n.blockedOn=i,Vd(n.priority,function(){Fi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function _a(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=du(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);gt=u,a.target.dispatchEvent(u),gt=null}else return i=wo(a),i!==null&&Zn(i),n.blockedOn=a,!1;i.shift()}return!0}function Wd(n,i,a){_a(n)&&a.delete(i)}function g0(){cu=!1,rr!==null&&_a(rr)&&(rr=null),sr!==null&&_a(sr)&&(sr=null),or!==null&&_a(or)&&(or=null),lo.forEach(Wd),uo.forEach(Wd)}function fo(n,i){n.blockedOn===i&&(n.blockedOn=null,cu||(cu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,g0)))}function ho(n){function i(d){return fo(d,n)}if(0<va.length){fo(va[0],n);for(var a=1;a<va.length;a++){var u=va[a];u.blockedOn===n&&(u.blockedOn=null)}}for(rr!==null&&fo(rr,n),sr!==null&&fo(sr,n),or!==null&&fo(or,n),lo.forEach(i),uo.forEach(i),a=0;a<ar.length;a++)u=ar[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<ar.length&&(a=ar[0],a.blockedOn===null);)Gd(a),a.blockedOn===null&&ar.shift()}var cs=C.ReactCurrentBatchConfig,xa=!0;function v0(n,i,a,u){var d=ht,m=cs.transition;cs.transition=null;try{ht=1,fu(n,i,a,u)}finally{ht=d,cs.transition=m}}function _0(n,i,a,u){var d=ht,m=cs.transition;cs.transition=null;try{ht=4,fu(n,i,a,u)}finally{ht=d,cs.transition=m}}function fu(n,i,a,u){if(xa){var d=du(n,i,a,u);if(d===null)Pu(n,i,u,ya,a),Hd(n,u);else if(m0(d,n,i,a,u))u.stopPropagation();else if(Hd(n,u),i&4&&-1<p0.indexOf(n)){for(;d!==null;){var m=wo(d);if(m!==null&&Zt(m),m=du(n,i,a,u),m===null&&Pu(n,i,u,ya,a),m===d)break;d=m}d!==null&&u.stopPropagation()}else Pu(n,i,u,null,a)}}var ya=null;function du(n,i,a,u){if(ya=null,n=H(u),n=Fr(n),n!==null)if(i=xi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ur(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ya=n,null}function Xd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($()){case le:return 1;case se:return 4;case te:case Ue:return 16;case Ge:return 536870912;default:return 16}default:return 16}}var lr=null,hu=null,Sa=null;function Yd(){if(Sa)return Sa;var n,i=hu,a=i.length,u,d="value"in lr?lr.value:lr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(u=1;u<=T&&i[a-u]===d[m-u];u++);return Sa=d.slice(n,1<u?1-u:void 0)}function Ma(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ea(){return!0}function qd(){return!1}function Bn(n){function i(a,u,d,m,T){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ea:qd,this.isPropagationStopped=qd,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),i}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pu=Bn(fs),po=oe({},fs,{view:0,detail:0}),x0=Bn(po),mu,gu,mo,Ta=oe({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==mo&&(mo&&n.type==="mousemove"?(mu=n.screenX-mo.screenX,gu=n.screenY-mo.screenY):gu=mu=0,mo=n),mu)},movementY:function(n){return"movementY"in n?n.movementY:gu}}),jd=Bn(Ta),y0=oe({},Ta,{dataTransfer:0}),S0=Bn(y0),M0=oe({},po,{relatedTarget:0}),vu=Bn(M0),E0=oe({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),T0=Bn(E0),w0=oe({},fs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),A0=Bn(w0),C0=oe({},fs,{data:0}),$d=Bn(C0),R0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=b0[n])?!!i[n]:!1}function _u(){return L0}var D0=oe({},po,{key:function(n){if(n.key){var i=R0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ma(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?P0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(n){return n.type==="keypress"?Ma(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ma(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),N0=Bn(D0),I0=oe({},Ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zd=Bn(I0),U0=oe({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),F0=Bn(U0),O0=oe({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),B0=Bn(O0),z0=oe({},Ta,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),k0=Bn(z0),V0=[9,13,27,32],xu=f&&"CompositionEvent"in window,go=null;f&&"documentMode"in document&&(go=document.documentMode);var H0=f&&"TextEvent"in window&&!go,Kd=f&&(!xu||go&&8<go&&11>=go),Jd=" ",Qd=!1;function eh(n,i){switch(n){case"keyup":return V0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function th(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ds=!1;function G0(n,i){switch(n){case"compositionend":return th(i);case"keypress":return i.which!==32?null:(Qd=!0,Jd);case"textInput":return n=i.data,n===Jd&&Qd?null:n;default:return null}}function W0(n,i){if(ds)return n==="compositionend"||!xu&&eh(n,i)?(n=Yd(),Sa=hu=lr=null,ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Kd&&i.locale!=="ko"?null:i.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!X0[n.type]:i==="textarea"}function ih(n,i,a,u){de(u),i=Pa(i,"onChange"),0<i.length&&(a=new pu("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var vo=null,_o=null;function Y0(n){Sh(n,0)}function wa(n){var i=vs(n);if(Lt(i))return n}function q0(n,i){if(n==="change")return i}var rh=!1;if(f){var yu;if(f){var Su="oninput"in document;if(!Su){var sh=document.createElement("div");sh.setAttribute("oninput","return;"),Su=typeof sh.oninput=="function"}yu=Su}else yu=!1;rh=yu&&(!document.documentMode||9<document.documentMode)}function oh(){vo&&(vo.detachEvent("onpropertychange",ah),_o=vo=null)}function ah(n){if(n.propertyName==="value"&&wa(_o)){var i=[];ih(i,_o,n,H(n)),jn(Y0,i)}}function j0(n,i,a){n==="focusin"?(oh(),vo=i,_o=a,vo.attachEvent("onpropertychange",ah)):n==="focusout"&&oh()}function $0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wa(_o)}function Z0(n,i){if(n==="click")return wa(i)}function K0(n,i){if(n==="input"||n==="change")return wa(i)}function J0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var li=typeof Object.is=="function"?Object.is:J0;function xo(n,i){if(li(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(i,d)||!li(n[d],i[d]))return!1}return!0}function lh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function uh(n,i){var a=lh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=lh(a)}}function ch(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ch(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function fh(){for(var n=window,i=ft();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ft(n.document)}return i}function Mu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Q0(n){var i=fh(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ch(a.ownerDocument.documentElement,a)){if(u!==null&&Mu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=uh(a,m);var T=uh(a,u);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ev=f&&"documentMode"in document&&11>=document.documentMode,hs=null,Eu=null,yo=null,Tu=!1;function dh(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tu||hs==null||hs!==ft(u)||(u=hs,"selectionStart"in u&&Mu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),yo&&xo(yo,u)||(yo=u,u=Pa(Eu,"onSelect"),0<u.length&&(i=new pu("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=hs)))}function Aa(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ps={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionend:Aa("Transition","TransitionEnd")},wu={},hh={};f&&(hh=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function Ca(n){if(wu[n])return wu[n];if(!ps[n])return n;var i=ps[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in hh)return wu[n]=i[a];return n}var ph=Ca("animationend"),mh=Ca("animationiteration"),gh=Ca("animationstart"),vh=Ca("transitionend"),_h=new Map,xh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(n,i){_h.set(n,i),l(i,[n])}for(var Au=0;Au<xh.length;Au++){var Cu=xh[Au],tv=Cu.toLowerCase(),nv=Cu[0].toUpperCase()+Cu.slice(1);ur(tv,"on"+nv)}ur(ph,"onAnimationEnd"),ur(mh,"onAnimationIteration"),ur(gh,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(vh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iv=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function yh(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,us(u,i,void 0,n),n.currentTarget=null}function Sh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var T=u.length-1;0<=T;T--){var U=u[T],k=U.instance,ae=U.currentTarget;if(U=U.listener,k!==m&&d.isPropagationStopped())break e;yh(d,U,ae),m=k}else for(T=0;T<u.length;T++){if(U=u[T],k=U.instance,ae=U.currentTarget,U=U.listener,k!==m&&d.isPropagationStopped())break e;yh(d,U,ae),m=k}}}if($n)throw n=Ir,$n=!1,Ir=null,n}function kt(n,i){var a=i[Uu];a===void 0&&(a=i[Uu]=new Set);var u=n+"__bubble";a.has(u)||(Mh(i,n,2,!1),a.add(u))}function Ru(n,i,a){var u=0;i&&(u|=4),Mh(a,n,u,i)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function Mo(n){if(!n[Ra]){n[Ra]=!0,r.forEach(function(a){a!=="selectionchange"&&(iv.has(a)||Ru(a,!1,n),Ru(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ra]||(i[Ra]=!0,Ru("selectionchange",!1,i))}}function Mh(n,i,a,u){switch(Xd(i)){case 1:var d=v0;break;case 4:d=_0;break;default:d=fu}a=d.bind(null,i,a,n),d=void 0,!ls||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Pu(n,i,a,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var U=u.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(T===4)for(T=u.return;T!==null;){var k=T.tag;if((k===3||k===4)&&(k=T.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;T=T.return}for(;U!==null;){if(T=Fr(U),T===null)return;if(k=T.tag,k===5||k===6){u=m=T;continue e}U=U.parentNode}}u=u.return}jn(function(){var ae=m,ye=H(a),Ee=[];e:{var xe=_h.get(n);if(xe!==void 0){var He=pu,Ze=n;switch(n){case"keypress":if(Ma(a)===0)break e;case"keydown":case"keyup":He=N0;break;case"focusin":Ze="focus",He=vu;break;case"focusout":Ze="blur",He=vu;break;case"beforeblur":case"afterblur":He=vu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":He=jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":He=S0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":He=F0;break;case ph:case mh:case gh:He=T0;break;case vh:He=B0;break;case"scroll":He=x0;break;case"wheel":He=k0;break;case"copy":case"cut":case"paste":He=A0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":He=Zd}var Qe=(i&4)!==0,Kt=!Qe&&n==="scroll",Q=Qe?xe!==null?xe+"Capture":null:xe;Qe=[];for(var W=ae,re;W!==null;){re=W;var Ce=re.stateNode;if(re.tag===5&&Ce!==null&&(re=Ce,Q!==null&&(Ce=yn(W,Q),Ce!=null&&Qe.push(Eo(W,Ce,re)))),Kt)break;W=W.return}0<Qe.length&&(xe=new He(xe,Ze,null,a,ye),Ee.push({event:xe,listeners:Qe}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",He=n==="mouseout"||n==="pointerout",xe&&a!==gt&&(Ze=a.relatedTarget||a.fromElement)&&(Fr(Ze)||Ze[Oi]))break e;if((He||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,He?(Ze=a.relatedTarget||a.toElement,He=ae,Ze=Ze?Fr(Ze):null,Ze!==null&&(Kt=xi(Ze),Ze!==Kt||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(He=null,Ze=ae),He!==Ze)){if(Qe=jd,Ce="onMouseLeave",Q="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Qe=Zd,Ce="onPointerLeave",Q="onPointerEnter",W="pointer"),Kt=He==null?xe:vs(He),re=Ze==null?xe:vs(Ze),xe=new Qe(Ce,W+"leave",He,a,ye),xe.target=Kt,xe.relatedTarget=re,Ce=null,Fr(ye)===ae&&(Qe=new Qe(Q,W+"enter",Ze,a,ye),Qe.target=re,Qe.relatedTarget=Kt,Ce=Qe),Kt=Ce,He&&Ze)t:{for(Qe=He,Q=Ze,W=0,re=Qe;re;re=ms(re))W++;for(re=0,Ce=Q;Ce;Ce=ms(Ce))re++;for(;0<W-re;)Qe=ms(Qe),W--;for(;0<re-W;)Q=ms(Q),re--;for(;W--;){if(Qe===Q||Q!==null&&Qe===Q.alternate)break t;Qe=ms(Qe),Q=ms(Q)}Qe=null}else Qe=null;He!==null&&Eh(Ee,xe,He,Qe,!1),Ze!==null&&Kt!==null&&Eh(Ee,Kt,Ze,Qe,!0)}}e:{if(xe=ae?vs(ae):window,He=xe.nodeName&&xe.nodeName.toLowerCase(),He==="select"||He==="input"&&xe.type==="file")var tt=q0;else if(nh(xe))if(rh)tt=K0;else{tt=$0;var ut=j0}else(He=xe.nodeName)&&He.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(tt=Z0);if(tt&&(tt=tt(n,ae))){ih(Ee,tt,a,ye);break e}ut&&ut(n,xe,ae),n==="focusout"&&(ut=xe._wrapperState)&&ut.controlled&&xe.type==="number"&&st(xe,"number",xe.value)}switch(ut=ae?vs(ae):window,n){case"focusin":(nh(ut)||ut.contentEditable==="true")&&(hs=ut,Eu=ae,yo=null);break;case"focusout":yo=Eu=hs=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,dh(Ee,a,ye);break;case"selectionchange":if(ev)break;case"keydown":case"keyup":dh(Ee,a,ye)}var ct;if(xu)e:{switch(n){case"compositionstart":var pt="onCompositionStart";break e;case"compositionend":pt="onCompositionEnd";break e;case"compositionupdate":pt="onCompositionUpdate";break e}pt=void 0}else ds?eh(n,a)&&(pt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(Kd&&a.locale!=="ko"&&(ds||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&ds&&(ct=Yd()):(lr=ye,hu="value"in lr?lr.value:lr.textContent,ds=!0)),ut=Pa(ae,pt),0<ut.length&&(pt=new $d(pt,n,null,a,ye),Ee.push({event:pt,listeners:ut}),ct?pt.data=ct:(ct=th(a),ct!==null&&(pt.data=ct)))),(ct=H0?G0(n,a):W0(n,a))&&(ae=Pa(ae,"onBeforeInput"),0<ae.length&&(ye=new $d("onBeforeInput","beforeinput",null,a,ye),Ee.push({event:ye,listeners:ae}),ye.data=ct))}Sh(Ee,i)})}function Eo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Pa(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=yn(n,a),m!=null&&u.unshift(Eo(n,m,d)),m=yn(n,i),m!=null&&u.push(Eo(n,m,d))),n=n.return}return u}function ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Eh(n,i,a,u,d){for(var m=i._reactName,T=[];a!==null&&a!==u;){var U=a,k=U.alternate,ae=U.stateNode;if(k!==null&&k===u)break;U.tag===5&&ae!==null&&(U=ae,d?(k=yn(a,m),k!=null&&T.unshift(Eo(a,k,U))):d||(k=yn(a,m),k!=null&&T.push(Eo(a,k,U)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var rv=/\r\n?/g,sv=/\u0000|\uFFFD/g;function Th(n){return(typeof n=="string"?n:""+n).replace(rv,`
`).replace(sv,"")}function ba(n,i,a){if(i=Th(i),Th(n)!==i&&a)throw Error(t(425))}function La(){}var bu=null,Lu=null;function Du(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Nu=typeof setTimeout=="function"?setTimeout:void 0,ov=typeof clearTimeout=="function"?clearTimeout:void 0,wh=typeof Promise=="function"?Promise:void 0,av=typeof queueMicrotask=="function"?queueMicrotask:typeof wh<"u"?function(n){return wh.resolve(null).then(n).catch(lv)}:Nu;function lv(n){setTimeout(function(){throw n})}function Iu(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),ho(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);ho(i)}function cr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ah(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var gs=Math.random().toString(36).slice(2),yi="__reactFiber$"+gs,To="__reactProps$"+gs,Oi="__reactContainer$"+gs,Uu="__reactEvents$"+gs,uv="__reactListeners$"+gs,cv="__reactHandles$"+gs;function Fr(n){var i=n[yi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Oi]||a[yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ah(n);n!==null;){if(a=n[yi])return a;n=Ah(n)}return i}n=a,a=n.parentNode}return null}function wo(n){return n=n[yi]||n[Oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Da(n){return n[To]||null}var Fu=[],_s=-1;function fr(n){return{current:n}}function Vt(n){0>_s||(n.current=Fu[_s],Fu[_s]=null,_s--)}function zt(n,i){_s++,Fu[_s]=n.current,n.current=i}var dr={},hn=fr(dr),Rn=fr(!1),Or=dr;function xs(n,i){var a=n.type.contextTypes;if(!a)return dr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Pn(n){return n=n.childContextTypes,n!=null}function Na(){Vt(Rn),Vt(hn)}function Ch(n,i,a){if(hn.current!==dr)throw Error(t(168));zt(hn,i),zt(Rn,a)}function Rh(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,he(n)||"Unknown",d));return oe({},a,u)}function Ia(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||dr,Or=hn.current,zt(hn,n),zt(Rn,Rn.current),!0}function Ph(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Rh(n,i,Or),u.__reactInternalMemoizedMergedChildContext=n,Vt(Rn),Vt(hn),zt(hn,n)):Vt(Rn),zt(Rn,a)}var Bi=null,Ua=!1,Ou=!1;function bh(n){Bi===null?Bi=[n]:Bi.push(n)}function fv(n){Ua=!0,bh(n)}function hr(){if(!Ou&&Bi!==null){Ou=!0;var n=0,i=ht;try{var a=Bi;for(ht=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Bi=null,Ua=!1}catch(d){throw Bi!==null&&(Bi=Bi.slice(n+1)),ma(le,hr),d}finally{ht=i,Ou=!1}}return null}var ys=[],Ss=0,Fa=null,Oa=0,Kn=[],Jn=0,Br=null,zi=1,ki="";function zr(n,i){ys[Ss++]=Oa,ys[Ss++]=Fa,Fa=n,Oa=i}function Lh(n,i,a){Kn[Jn++]=zi,Kn[Jn++]=ki,Kn[Jn++]=Br,Br=n;var u=zi;n=ki;var d=32-ot(u)-1;u&=~(1<<d),a+=1;var m=32-ot(i)+d;if(30<m){var T=d-d%5;m=(u&(1<<T)-1).toString(32),u>>=T,d-=T,zi=1<<32-ot(i)+d|a<<d|u,ki=m+n}else zi=1<<m|a<<d|u,ki=n}function Bu(n){n.return!==null&&(zr(n,1),Lh(n,1,0))}function zu(n){for(;n===Fa;)Fa=ys[--Ss],ys[Ss]=null,Oa=ys[--Ss],ys[Ss]=null;for(;n===Br;)Br=Kn[--Jn],Kn[Jn]=null,ki=Kn[--Jn],Kn[Jn]=null,zi=Kn[--Jn],Kn[Jn]=null}var zn=null,kn=null,Ht=!1,ui=null;function Dh(n,i){var a=ni(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Nh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,kn=cr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Br!==null?{id:zi,overflow:ki}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ni(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,zn=n,kn=null,!0):!1;default:return!1}}function ku(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vu(n){if(Ht){var i=kn;if(i){var a=i;if(!Nh(n,i)){if(ku(n))throw Error(t(418));i=cr(a.nextSibling);var u=zn;i&&Nh(n,i)?Dh(u,a):(n.flags=n.flags&-4097|2,Ht=!1,zn=n)}}else{if(ku(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ht=!1,zn=n}}}function Ih(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function Ba(n){if(n!==zn)return!1;if(!Ht)return Ih(n),Ht=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Du(n.type,n.memoizedProps)),i&&(i=kn)){if(ku(n))throw Uh(),Error(t(418));for(;i;)Dh(n,i),i=cr(i.nextSibling)}if(Ih(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){kn=cr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}kn=null}}else kn=zn?cr(n.stateNode.nextSibling):null;return!0}function Uh(){for(var n=kn;n;)n=cr(n.nextSibling)}function Ms(){kn=zn=null,Ht=!1}function Hu(n){ui===null?ui=[n]:ui.push(n)}var dv=C.ReactCurrentBatchConfig;function Ao(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var U=d.refs;T===null?delete U[m]:U[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function za(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Fh(n){var i=n._init;return i(n._payload)}function Oh(n){function i(Q,W){if(n){var re=Q.deletions;re===null?(Q.deletions=[W],Q.flags|=16):re.push(W)}}function a(Q,W){if(!n)return null;for(;W!==null;)i(Q,W),W=W.sibling;return null}function u(Q,W){for(Q=new Map;W!==null;)W.key!==null?Q.set(W.key,W):Q.set(W.index,W),W=W.sibling;return Q}function d(Q,W){return Q=Sr(Q,W),Q.index=0,Q.sibling=null,Q}function m(Q,W,re){return Q.index=re,n?(re=Q.alternate,re!==null?(re=re.index,re<W?(Q.flags|=2,W):re):(Q.flags|=2,W)):(Q.flags|=1048576,W)}function T(Q){return n&&Q.alternate===null&&(Q.flags|=2),Q}function U(Q,W,re,Ce){return W===null||W.tag!==6?(W=Nc(re,Q.mode,Ce),W.return=Q,W):(W=d(W,re),W.return=Q,W)}function k(Q,W,re,Ce){var tt=re.type;return tt===B?ye(Q,W,re.props.children,Ce,re.key):W!==null&&(W.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===Z&&Fh(tt)===W.type)?(Ce=d(W,re.props),Ce.ref=Ao(Q,W,re),Ce.return=Q,Ce):(Ce=ul(re.type,re.key,re.props,null,Q.mode,Ce),Ce.ref=Ao(Q,W,re),Ce.return=Q,Ce)}function ae(Q,W,re,Ce){return W===null||W.tag!==4||W.stateNode.containerInfo!==re.containerInfo||W.stateNode.implementation!==re.implementation?(W=Ic(re,Q.mode,Ce),W.return=Q,W):(W=d(W,re.children||[]),W.return=Q,W)}function ye(Q,W,re,Ce,tt){return W===null||W.tag!==7?(W=qr(re,Q.mode,Ce,tt),W.return=Q,W):(W=d(W,re),W.return=Q,W)}function Ee(Q,W,re){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Nc(""+W,Q.mode,re),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case z:return re=ul(W.type,W.key,W.props,null,Q.mode,re),re.ref=Ao(Q,null,W),re.return=Q,re;case F:return W=Ic(W,Q.mode,re),W.return=Q,W;case Z:var Ce=W._init;return Ee(Q,Ce(W._payload),re)}if(Ie(W)||ne(W))return W=qr(W,Q.mode,re,null),W.return=Q,W;za(Q,W)}return null}function xe(Q,W,re,Ce){var tt=W!==null?W.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return tt!==null?null:U(Q,W,""+re,Ce);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case z:return re.key===tt?k(Q,W,re,Ce):null;case F:return re.key===tt?ae(Q,W,re,Ce):null;case Z:return tt=re._init,xe(Q,W,tt(re._payload),Ce)}if(Ie(re)||ne(re))return tt!==null?null:ye(Q,W,re,Ce,null);za(Q,re)}return null}function He(Q,W,re,Ce,tt){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return Q=Q.get(re)||null,U(W,Q,""+Ce,tt);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case z:return Q=Q.get(Ce.key===null?re:Ce.key)||null,k(W,Q,Ce,tt);case F:return Q=Q.get(Ce.key===null?re:Ce.key)||null,ae(W,Q,Ce,tt);case Z:var ut=Ce._init;return He(Q,W,re,ut(Ce._payload),tt)}if(Ie(Ce)||ne(Ce))return Q=Q.get(re)||null,ye(W,Q,Ce,tt,null);za(W,Ce)}return null}function Ze(Q,W,re,Ce){for(var tt=null,ut=null,ct=W,pt=W=0,an=null;ct!==null&&pt<re.length;pt++){ct.index>pt?(an=ct,ct=null):an=ct.sibling;var Pt=xe(Q,ct,re[pt],Ce);if(Pt===null){ct===null&&(ct=an);break}n&&ct&&Pt.alternate===null&&i(Q,ct),W=m(Pt,W,pt),ut===null?tt=Pt:ut.sibling=Pt,ut=Pt,ct=an}if(pt===re.length)return a(Q,ct),Ht&&zr(Q,pt),tt;if(ct===null){for(;pt<re.length;pt++)ct=Ee(Q,re[pt],Ce),ct!==null&&(W=m(ct,W,pt),ut===null?tt=ct:ut.sibling=ct,ut=ct);return Ht&&zr(Q,pt),tt}for(ct=u(Q,ct);pt<re.length;pt++)an=He(ct,Q,pt,re[pt],Ce),an!==null&&(n&&an.alternate!==null&&ct.delete(an.key===null?pt:an.key),W=m(an,W,pt),ut===null?tt=an:ut.sibling=an,ut=an);return n&&ct.forEach(function(Mr){return i(Q,Mr)}),Ht&&zr(Q,pt),tt}function Qe(Q,W,re,Ce){var tt=ne(re);if(typeof tt!="function")throw Error(t(150));if(re=tt.call(re),re==null)throw Error(t(151));for(var ut=tt=null,ct=W,pt=W=0,an=null,Pt=re.next();ct!==null&&!Pt.done;pt++,Pt=re.next()){ct.index>pt?(an=ct,ct=null):an=ct.sibling;var Mr=xe(Q,ct,Pt.value,Ce);if(Mr===null){ct===null&&(ct=an);break}n&&ct&&Mr.alternate===null&&i(Q,ct),W=m(Mr,W,pt),ut===null?tt=Mr:ut.sibling=Mr,ut=Mr,ct=an}if(Pt.done)return a(Q,ct),Ht&&zr(Q,pt),tt;if(ct===null){for(;!Pt.done;pt++,Pt=re.next())Pt=Ee(Q,Pt.value,Ce),Pt!==null&&(W=m(Pt,W,pt),ut===null?tt=Pt:ut.sibling=Pt,ut=Pt);return Ht&&zr(Q,pt),tt}for(ct=u(Q,ct);!Pt.done;pt++,Pt=re.next())Pt=He(ct,Q,pt,Pt.value,Ce),Pt!==null&&(n&&Pt.alternate!==null&&ct.delete(Pt.key===null?pt:Pt.key),W=m(Pt,W,pt),ut===null?tt=Pt:ut.sibling=Pt,ut=Pt);return n&&ct.forEach(function(Xv){return i(Q,Xv)}),Ht&&zr(Q,pt),tt}function Kt(Q,W,re,Ce){if(typeof re=="object"&&re!==null&&re.type===B&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case z:e:{for(var tt=re.key,ut=W;ut!==null;){if(ut.key===tt){if(tt=re.type,tt===B){if(ut.tag===7){a(Q,ut.sibling),W=d(ut,re.props.children),W.return=Q,Q=W;break e}}else if(ut.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===Z&&Fh(tt)===ut.type){a(Q,ut.sibling),W=d(ut,re.props),W.ref=Ao(Q,ut,re),W.return=Q,Q=W;break e}a(Q,ut);break}else i(Q,ut);ut=ut.sibling}re.type===B?(W=qr(re.props.children,Q.mode,Ce,re.key),W.return=Q,Q=W):(Ce=ul(re.type,re.key,re.props,null,Q.mode,Ce),Ce.ref=Ao(Q,W,re),Ce.return=Q,Q=Ce)}return T(Q);case F:e:{for(ut=re.key;W!==null;){if(W.key===ut)if(W.tag===4&&W.stateNode.containerInfo===re.containerInfo&&W.stateNode.implementation===re.implementation){a(Q,W.sibling),W=d(W,re.children||[]),W.return=Q,Q=W;break e}else{a(Q,W);break}else i(Q,W);W=W.sibling}W=Ic(re,Q.mode,Ce),W.return=Q,Q=W}return T(Q);case Z:return ut=re._init,Kt(Q,W,ut(re._payload),Ce)}if(Ie(re))return Ze(Q,W,re,Ce);if(ne(re))return Qe(Q,W,re,Ce);za(Q,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,W!==null&&W.tag===6?(a(Q,W.sibling),W=d(W,re),W.return=Q,Q=W):(a(Q,W),W=Nc(re,Q.mode,Ce),W.return=Q,Q=W),T(Q)):a(Q,W)}return Kt}var Es=Oh(!0),Bh=Oh(!1),ka=fr(null),Va=null,Ts=null,Gu=null;function Wu(){Gu=Ts=Va=null}function Xu(n){var i=ka.current;Vt(ka),n._currentValue=i}function Yu(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function ws(n,i){Va=n,Gu=Ts=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(bn=!0),n.firstContext=null)}function Qn(n){var i=n._currentValue;if(Gu!==n)if(n={context:n,memoizedValue:i,next:null},Ts===null){if(Va===null)throw Error(t(308));Ts=n,Va.dependencies={lanes:0,firstContext:n}}else Ts=Ts.next=n;return i}var kr=null;function qu(n){kr===null?kr=[n]:kr.push(n)}function zh(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,qu(i)):(a.next=d.next,d.next=a),i.interleaved=a,Vi(n,u)}function Vi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var pr=!1;function ju(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function mr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(At&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Vi(n,a)}return d=u.interleaved,d===null?(i.next=i,qu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Vi(n,a)}function Ha(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Dt(n,a)}}function Vh(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ga(n,i,a,u){var d=n.updateQueue;pr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var k=U,ae=k.next;k.next=null,T===null?m=ae:T.next=ae,T=k;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,U=ye.lastBaseUpdate,U!==T&&(U===null?ye.firstBaseUpdate=ae:U.next=ae,ye.lastBaseUpdate=k))}if(m!==null){var Ee=d.baseState;T=0,ye=ae=k=null,U=m;do{var xe=U.lane,He=U.eventTime;if((u&xe)===xe){ye!==null&&(ye=ye.next={eventTime:He,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ze=n,Qe=U;switch(xe=i,He=a,Qe.tag){case 1:if(Ze=Qe.payload,typeof Ze=="function"){Ee=Ze.call(He,Ee,xe);break e}Ee=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=Qe.payload,xe=typeof Ze=="function"?Ze.call(He,Ee,xe):Ze,xe==null)break e;Ee=oe({},Ee,xe);break e;case 2:pr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,xe=d.effects,xe===null?d.effects=[U]:xe.push(U))}else He={eventTime:He,lane:xe,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ye===null?(ae=ye=He,k=Ee):ye=ye.next=He,T|=xe;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;xe=U,U=xe.next,xe.next=null,d.lastBaseUpdate=xe,d.shared.pending=null}}while(!0);if(ye===null&&(k=Ee),d.baseState=k,d.firstBaseUpdate=ae,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Gr|=T,n.lanes=T,n.memoizedState=Ee}}function Hh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Co={},Si=fr(Co),Ro=fr(Co),Po=fr(Co);function Vr(n){if(n===Co)throw Error(t(174));return n}function $u(n,i){switch(zt(Po,i),zt(Ro,n),zt(Si,Co),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=me(i,n)}Vt(Si),zt(Si,i)}function As(){Vt(Si),Vt(Ro),Vt(Po)}function Gh(n){Vr(Po.current);var i=Vr(Si.current),a=me(i,n.type);i!==a&&(zt(Ro,n),zt(Si,a))}function Zu(n){Ro.current===n&&(Vt(Si),Vt(Ro))}var Wt=fr(0);function Wa(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ku=[];function Ju(){for(var n=0;n<Ku.length;n++)Ku[n]._workInProgressVersionPrimary=null;Ku.length=0}var Xa=C.ReactCurrentDispatcher,Qu=C.ReactCurrentBatchConfig,Hr=0,Xt=null,en=null,sn=null,Ya=!1,bo=!1,Lo=0,hv=0;function pn(){throw Error(t(321))}function ec(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!li(n[a],i[a]))return!1;return!0}function tc(n,i,a,u,d,m){if(Hr=m,Xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Xa.current=n===null||n.memoizedState===null?vv:_v,n=a(u,d),bo){m=0;do{if(bo=!1,Lo=0,25<=m)throw Error(t(301));m+=1,sn=en=null,i.updateQueue=null,Xa.current=xv,n=a(u,d)}while(bo)}if(Xa.current=$a,i=en!==null&&en.next!==null,Hr=0,sn=en=Xt=null,Ya=!1,i)throw Error(t(300));return n}function nc(){var n=Lo!==0;return Lo=0,n}function Mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Xt.memoizedState=sn=n:sn=sn.next=n,sn}function ei(){if(en===null){var n=Xt.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var i=sn===null?Xt.memoizedState:sn.next;if(i!==null)sn=i,en=n;else{if(n===null)throw Error(t(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},sn===null?Xt.memoizedState=sn=n:sn=sn.next=n}return sn}function Do(n,i){return typeof i=="function"?i(n):i}function ic(n){var i=ei(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=en,d=u.baseQueue,m=a.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}u.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,u=u.baseState;var U=T=null,k=null,ae=m;do{var ye=ae.lane;if((Hr&ye)===ye)k!==null&&(k=k.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),u=ae.hasEagerState?ae.eagerState:n(u,ae.action);else{var Ee={lane:ye,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};k===null?(U=k=Ee,T=u):k=k.next=Ee,Xt.lanes|=ye,Gr|=ye}ae=ae.next}while(ae!==null&&ae!==m);k===null?T=u:k.next=U,li(u,i.memoizedState)||(bn=!0),i.memoizedState=u,i.baseState=T,i.baseQueue=k,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Xt.lanes|=m,Gr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function rc(n){var i=ei(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);li(m,i.memoizedState)||(bn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,u]}function Wh(){}function Xh(n,i){var a=Xt,u=ei(),d=i(),m=!li(u.memoizedState,d);if(m&&(u.memoizedState=d,bn=!0),u=u.queue,sc(jh.bind(null,a,u,n),[n]),u.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,No(9,qh.bind(null,a,u,d,i),void 0,null),on===null)throw Error(t(349));(Hr&30)!==0||Yh(a,i,d)}return d}function Yh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function qh(n,i,a,u){i.value=a,i.getSnapshot=u,$h(i)&&Zh(n)}function jh(n,i,a){return a(function(){$h(i)&&Zh(n)})}function $h(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!li(n,a)}catch{return!0}}function Zh(n){var i=Vi(n,1);i!==null&&hi(i,n,1,-1)}function Kh(n){var i=Mi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:n},i.queue=n,n=n.dispatch=gv.bind(null,Xt,n),[i.memoizedState,n]}function No(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Jh(){return ei().memoizedState}function qa(n,i,a,u){var d=Mi();Xt.flags|=n,d.memoizedState=No(1|i,a,void 0,u===void 0?null:u)}function ja(n,i,a,u){var d=ei();u=u===void 0?null:u;var m=void 0;if(en!==null){var T=en.memoizedState;if(m=T.destroy,u!==null&&ec(u,T.deps)){d.memoizedState=No(i,a,m,u);return}}Xt.flags|=n,d.memoizedState=No(1|i,a,m,u)}function Qh(n,i){return qa(8390656,8,n,i)}function sc(n,i){return ja(2048,8,n,i)}function ep(n,i){return ja(4,2,n,i)}function tp(n,i){return ja(4,4,n,i)}function np(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function ip(n,i,a){return a=a!=null?a.concat([n]):null,ja(4,4,np.bind(null,i,n),a)}function oc(){}function rp(n,i){var a=ei();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&ec(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function sp(n,i){var a=ei();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&ec(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function op(n,i,a){return(Hr&21)===0?(n.baseState&&(n.baseState=!1,bn=!0),n.memoizedState=a):(li(a,i)||(a=An(),Xt.lanes|=a,Gr|=a,n.baseState=!0),i)}function pv(n,i){var a=ht;ht=a!==0&&4>a?a:4,n(!0);var u=Qu.transition;Qu.transition={};try{n(!1),i()}finally{ht=a,Qu.transition=u}}function ap(){return ei().memoizedState}function mv(n,i,a){var u=xr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},lp(n))up(i,a);else if(a=zh(n,i,a,u),a!==null){var d=En();hi(a,n,u,d),cp(a,i,u)}}function gv(n,i,a){var u=xr(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(lp(n))up(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,U=m(T,a);if(d.hasEagerState=!0,d.eagerState=U,li(U,T)){var k=i.interleaved;k===null?(d.next=d,qu(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}a=zh(n,i,d,u),a!==null&&(d=En(),hi(a,n,u,d),cp(a,i,u))}}function lp(n){var i=n.alternate;return n===Xt||i!==null&&i===Xt}function up(n,i){bo=Ya=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function cp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Dt(n,a)}}var $a={readContext:Qn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},vv={readContext:Qn,useCallback:function(n,i){return Mi().memoizedState=[n,i===void 0?null:i],n},useContext:Qn,useEffect:Qh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,qa(4194308,4,np.bind(null,i,n),a)},useLayoutEffect:function(n,i){return qa(4194308,4,n,i)},useInsertionEffect:function(n,i){return qa(4,2,n,i)},useMemo:function(n,i){var a=Mi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Mi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=mv.bind(null,Xt,n),[u.memoizedState,n]},useRef:function(n){var i=Mi();return n={current:n},i.memoizedState=n},useState:Kh,useDebugValue:oc,useDeferredValue:function(n){return Mi().memoizedState=n},useTransition:function(){var n=Kh(!1),i=n[0];return n=pv.bind(null,n[1]),Mi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Xt,d=Mi();if(Ht){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),on===null)throw Error(t(349));(Hr&30)!==0||Yh(u,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Qh(jh.bind(null,u,m,n),[n]),u.flags|=2048,No(9,qh.bind(null,u,m,a,i),void 0,null),a},useId:function(){var n=Mi(),i=on.identifierPrefix;if(Ht){var a=ki,u=zi;a=(u&~(1<<32-ot(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Lo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=hv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},_v={readContext:Qn,useCallback:rp,useContext:Qn,useEffect:sc,useImperativeHandle:ip,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:sp,useReducer:ic,useRef:Jh,useState:function(){return ic(Do)},useDebugValue:oc,useDeferredValue:function(n){var i=ei();return op(i,en.memoizedState,n)},useTransition:function(){var n=ic(Do)[0],i=ei().memoizedState;return[n,i]},useMutableSource:Wh,useSyncExternalStore:Xh,useId:ap,unstable_isNewReconciler:!1},xv={readContext:Qn,useCallback:rp,useContext:Qn,useEffect:sc,useImperativeHandle:ip,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:sp,useReducer:rc,useRef:Jh,useState:function(){return rc(Do)},useDebugValue:oc,useDeferredValue:function(n){var i=ei();return en===null?i.memoizedState=n:op(i,en.memoizedState,n)},useTransition:function(){var n=rc(Do)[0],i=ei().memoizedState;return[n,i]},useMutableSource:Wh,useSyncExternalStore:Xh,useId:ap,unstable_isNewReconciler:!1};function ci(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function ac(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:oe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Za={isMounted:function(n){return(n=n._reactInternals)?xi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=En(),d=xr(n),m=Hi(u,d);m.payload=i,a!=null&&(m.callback=a),i=mr(n,m,d),i!==null&&(hi(i,n,d,u),Ha(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=En(),d=xr(n),m=Hi(u,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=mr(n,m,d),i!==null&&(hi(i,n,d,u),Ha(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=En(),u=xr(n),d=Hi(a,u);d.tag=2,i!=null&&(d.callback=i),i=mr(n,d,u),i!==null&&(hi(i,n,u,a),Ha(i,n,u))}};function fp(n,i,a,u,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,T):i.prototype&&i.prototype.isPureReactComponent?!xo(a,u)||!xo(d,m):!0}function dp(n,i,a){var u=!1,d=dr,m=i.contextType;return typeof m=="object"&&m!==null?m=Qn(m):(d=Pn(i)?Or:hn.current,u=i.contextTypes,m=(u=u!=null)?xs(n,d):dr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Za,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function hp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Za.enqueueReplaceState(i,i.state,null)}function lc(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},ju(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Qn(m):(m=Pn(i)?Or:hn.current,d.context=xs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(ac(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Za.enqueueReplaceState(d,d.state,null),Ga(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Cs(n,i){try{var a="",u=i;do a+=Ye(u),u=u.return;while(u);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function uc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function cc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var yv=typeof WeakMap=="function"?WeakMap:Map;function pp(n,i,a){a=Hi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){il||(il=!0,wc=u),cc(n,i)},a}function mp(n,i,a){a=Hi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){cc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){cc(n,i),typeof u!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function gp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new yv;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=Iv.bind(null,n,i,a),i.then(n,n))}function vp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function _p(n,i,a,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Hi(-1,1),i.tag=2,mr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Sv=C.ReactCurrentOwner,bn=!1;function Mn(n,i,a,u){i.child=n===null?Bh(i,null,a,u):Es(i,n.child,a,u)}function xp(n,i,a,u,d){a=a.render;var m=i.ref;return ws(i,d),u=tc(n,i,a,u,m,d),a=nc(),n!==null&&!bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Gi(n,i,d)):(Ht&&a&&Bu(i),i.flags|=1,Mn(n,i,u,d),i.child)}function yp(n,i,a,u,d){if(n===null){var m=a.type;return typeof m=="function"&&!Dc(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Sp(n,i,m,u,d)):(n=ul(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:xo,a(T,u)&&n.ref===i.ref)return Gi(n,i,d)}return i.flags|=1,n=Sr(m,u),n.ref=i.ref,n.return=i,i.child=n}function Sp(n,i,a,u,d){if(n!==null){var m=n.memoizedProps;if(xo(m,u)&&n.ref===i.ref)if(bn=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(bn=!0);else return i.lanes=n.lanes,Gi(n,i,d)}return fc(n,i,a,u,d)}function Mp(n,i,a){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(Ps,Vn),Vn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,zt(Ps,Vn),Vn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:a,zt(Ps,Vn),Vn|=u}else m!==null?(u=m.baseLanes|a,i.memoizedState=null):u=a,zt(Ps,Vn),Vn|=u;return Mn(n,i,d,a),i.child}function Ep(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function fc(n,i,a,u,d){var m=Pn(a)?Or:hn.current;return m=xs(i,m),ws(i,d),a=tc(n,i,a,u,m,d),u=nc(),n!==null&&!bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Gi(n,i,d)):(Ht&&u&&Bu(i),i.flags|=1,Mn(n,i,a,d),i.child)}function Tp(n,i,a,u,d){if(Pn(a)){var m=!0;Ia(i)}else m=!1;if(ws(i,d),i.stateNode===null)Ja(n,i),dp(i,a,u),lc(i,a,u,d),u=!0;else if(n===null){var T=i.stateNode,U=i.memoizedProps;T.props=U;var k=T.context,ae=a.contextType;typeof ae=="object"&&ae!==null?ae=Qn(ae):(ae=Pn(a)?Or:hn.current,ae=xs(i,ae));var ye=a.getDerivedStateFromProps,Ee=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==u||k!==ae)&&hp(i,T,u,ae),pr=!1;var xe=i.memoizedState;T.state=xe,Ga(i,u,T,d),k=i.memoizedState,U!==u||xe!==k||Rn.current||pr?(typeof ye=="function"&&(ac(i,a,ye,u),k=i.memoizedState),(U=pr||fp(i,a,U,u,xe,k,ae))?(Ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),T.props=u,T.state=k,T.context=ae,u=U):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{T=i.stateNode,kh(n,i),U=i.memoizedProps,ae=i.type===i.elementType?U:ci(i.type,U),T.props=ae,Ee=i.pendingProps,xe=T.context,k=a.contextType,typeof k=="object"&&k!==null?k=Qn(k):(k=Pn(a)?Or:hn.current,k=xs(i,k));var He=a.getDerivedStateFromProps;(ye=typeof He=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==Ee||xe!==k)&&hp(i,T,u,k),pr=!1,xe=i.memoizedState,T.state=xe,Ga(i,u,T,d);var Ze=i.memoizedState;U!==Ee||xe!==Ze||Rn.current||pr?(typeof He=="function"&&(ac(i,a,He,u),Ze=i.memoizedState),(ae=pr||fp(i,a,ae,u,xe,Ze,k)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,Ze,k),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,Ze,k)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ze),T.props=u,T.state=Ze,T.context=k,u=ae):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),u=!1)}return dc(n,i,a,u,m,d)}function dc(n,i,a,u,d,m){Ep(n,i);var T=(i.flags&128)!==0;if(!u&&!T)return d&&Ph(i,a,!1),Gi(n,i,m);u=i.stateNode,Sv.current=i;var U=T&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&T?(i.child=Es(i,n.child,null,m),i.child=Es(i,null,U,m)):Mn(n,i,U,m),i.memoizedState=u.state,d&&Ph(i,a,!0),i.child}function wp(n){var i=n.stateNode;i.pendingContext?Ch(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ch(n,i.context,!1),$u(n,i.containerInfo)}function Ap(n,i,a,u,d){return Ms(),Hu(d),i.flags|=256,Mn(n,i,a,u),i.child}var hc={dehydrated:null,treeContext:null,retryLane:0};function pc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Cp(n,i,a){var u=i.pendingProps,d=Wt.current,m=!1,T=(i.flags&128)!==0,U;if((U=T)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),zt(Wt,d&1),n===null)return Vu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=u.children,n=u.fallback,m?(u=i.mode,m=i.child,T={mode:"hidden",children:T},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=cl(T,u,0,null),n=qr(n,u,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=pc(a),i.memoizedState=hc,n):mc(i,T));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return Mv(n,i,T,u,U,d,a);if(m){m=u.fallback,T=i.mode,d=n.child,U=d.sibling;var k={mode:"hidden",children:u.children};return(T&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=Sr(d,k),u.subtreeFlags=d.subtreeFlags&14680064),U!==null?m=Sr(U,m):(m=qr(m,T,a,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,T=n.child.memoizedState,T=T===null?pc(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~a,i.memoizedState=hc,u}return m=n.child,n=m.sibling,u=Sr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function mc(n,i){return i=cl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ka(n,i,a,u){return u!==null&&Hu(u),Es(i,n.child,null,a),n=mc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Mv(n,i,a,u,d,m,T){if(a)return i.flags&256?(i.flags&=-257,u=uc(Error(t(422))),Ka(n,i,T,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=cl({mode:"visible",children:u.children},d,0,null),m=qr(m,d,T,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&Es(i,n.child,null,T),i.child.memoizedState=pc(T),i.memoizedState=hc,m);if((i.mode&1)===0)return Ka(n,i,T,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var U=u.dgst;return u=U,m=Error(t(419)),u=uc(m,u,void 0),Ka(n,i,T,u)}if(U=(T&n.childLanes)!==0,bn||U){if(u=on,u!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Vi(n,d),hi(u,n,d,-1))}return Lc(),u=uc(Error(t(421))),Ka(n,i,T,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Uv.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,kn=cr(d.nextSibling),zn=i,Ht=!0,ui=null,n!==null&&(Kn[Jn++]=zi,Kn[Jn++]=ki,Kn[Jn++]=Br,zi=n.id,ki=n.overflow,Br=i),i=mc(i,u.children),i.flags|=4096,i)}function Rp(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Yu(n.return,i,a)}function gc(n,i,a,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=a,m.tailMode=d)}function Pp(n,i,a){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(Mn(n,i,u.children,a),u=Wt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Rp(n,a,i);else if(n.tag===19)Rp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(zt(Wt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Wa(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),gc(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Wa(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}gc(i,!0,a,null,m);break;case"together":gc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ja(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Gi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Gr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Sr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Sr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Ev(n,i,a){switch(i.tag){case 3:wp(i),Ms();break;case 5:Gh(i);break;case 1:Pn(i.type)&&Ia(i);break;case 4:$u(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;zt(ka,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(zt(Wt,Wt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Cp(n,i,a):(zt(Wt,Wt.current&1),n=Gi(n,i,a),n!==null?n.sibling:null);zt(Wt,Wt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Pp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),zt(Wt,Wt.current),u)break;return null;case 22:case 23:return i.lanes=0,Mp(n,i,a)}return Gi(n,i,a)}var bp,vc,Lp,Dp;bp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vc=function(){},Lp=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Vr(Si.current);var m=null;switch(a){case"input":d=ge(n,d),u=ge(n,u),m=[];break;case"select":d=oe({},d,{value:void 0}),u=oe({},u,{value:void 0}),m=[];break;case"textarea":d=Pe(n,d),u=Pe(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=La)}je(a,u);var T;a=null;for(ae in d)if(!u.hasOwnProperty(ae)&&d.hasOwnProperty(ae)&&d[ae]!=null)if(ae==="style"){var U=d[ae];for(T in U)U.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?m||(m=[]):(m=m||[]).push(ae,null));for(ae in u){var k=u[ae];if(U=d!=null?d[ae]:void 0,u.hasOwnProperty(ae)&&k!==U&&(k!=null||U!=null))if(ae==="style")if(U){for(T in U)!U.hasOwnProperty(T)||k&&k.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in k)k.hasOwnProperty(T)&&U[T]!==k[T]&&(a||(a={}),a[T]=k[T])}else a||(m||(m=[]),m.push(ae,a)),a=k;else ae==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,U=U?U.__html:void 0,k!=null&&U!==k&&(m=m||[]).push(ae,k)):ae==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(ae,""+k):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(k!=null&&ae==="onScroll"&&kt("scroll",n),m||U===k||(m=[])):(m=m||[]).push(ae,k))}a&&(m=m||[]).push("style",a);var ae=m;(i.updateQueue=ae)&&(i.flags|=4)}},Dp=function(n,i,a,u){a!==u&&(i.flags|=4)};function Io(n,i){if(!Ht)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Tv(n,i,a){var u=i.pendingProps;switch(zu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Pn(i.type)&&Na(),mn(i),null;case 3:return u=i.stateNode,As(),Vt(Rn),Vt(hn),Ju(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ba(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ui!==null&&(Rc(ui),ui=null))),vc(n,i),mn(i),null;case 5:Zu(i);var d=Vr(Po.current);if(a=i.type,n!==null&&i.stateNode!=null)Lp(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return mn(i),null}if(n=Vr(Si.current),Ba(i)){u=i.stateNode,a=i.type;var m=i.memoizedProps;switch(u[yi]=i,u[To]=m,n=(i.mode&1)!==0,a){case"dialog":kt("cancel",u),kt("close",u);break;case"iframe":case"object":case"embed":kt("load",u);break;case"video":case"audio":for(d=0;d<So.length;d++)kt(So[d],u);break;case"source":kt("error",u);break;case"img":case"image":case"link":kt("error",u),kt("load",u);break;case"details":kt("toggle",u);break;case"input":Me(u,m),kt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},kt("invalid",u);break;case"textarea":L(u,m),kt("invalid",u)}je(a,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var U=m[T];T==="children"?typeof U=="string"?u.textContent!==U&&(m.suppressHydrationWarning!==!0&&ba(u.textContent,U,n),d=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&ba(u.textContent,U,n),d=["children",""+U]):o.hasOwnProperty(T)&&U!=null&&T==="onScroll"&&kt("scroll",u)}switch(a){case"input":lt(u),N(u,m,!0);break;case"textarea":lt(u),G(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=La)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ce(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(a,{is:u.is}):(n=T.createElement(a),a==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,a),n[yi]=i,n[To]=u,bp(n,i,!1,!1),i.stateNode=n;e:{switch(T=ze(a,u),a){case"dialog":kt("cancel",n),kt("close",n),d=u;break;case"iframe":case"object":case"embed":kt("load",n),d=u;break;case"video":case"audio":for(d=0;d<So.length;d++)kt(So[d],n);d=u;break;case"source":kt("error",n),d=u;break;case"img":case"image":case"link":kt("error",n),kt("load",n),d=u;break;case"details":kt("toggle",n),d=u;break;case"input":Me(n,u),d=ge(n,u),kt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=oe({},u,{value:void 0}),kt("invalid",n);break;case"textarea":L(n,u),d=Pe(n,u),kt("invalid",n);break;default:d=u}je(a,d),U=d;for(m in U)if(U.hasOwnProperty(m)){var k=U[m];m==="style"?Re(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Xe(n,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Ae(n,k):typeof k=="number"&&Ae(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&kt("scroll",n):k!=null&&P(n,m,k,T))}switch(a){case"input":lt(n),N(n,u,!1);break;case"textarea":lt(n),G(n);break;case"option":u.value!=null&&n.setAttribute("value",""+pe(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?it(n,!!u.multiple,m,!1):u.defaultValue!=null&&it(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=La)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(n&&i.stateNode!=null)Dp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Vr(Po.current),Vr(Si.current),Ba(i)){if(u=i.stateNode,a=i.memoizedProps,u[yi]=i,(m=u.nodeValue!==a)&&(n=zn,n!==null))switch(n.tag){case 3:ba(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ba(u.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[yi]=i,i.stateNode=u}return mn(i),null;case 13:if(Vt(Wt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ht&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Uh(),Ms(),i.flags|=98560,m=!1;else if(m=Ba(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[yi]=i}else Ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),m=!1}else ui!==null&&(Rc(ui),ui=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Wt.current&1)!==0?tn===0&&(tn=3):Lc())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return As(),vc(n,i),n===null&&Mo(i.stateNode.containerInfo),mn(i),null;case 10:return Xu(i.type._context),mn(i),null;case 17:return Pn(i.type)&&Na(),mn(i),null;case 19:if(Vt(Wt),m=i.memoizedState,m===null)return mn(i),null;if(u=(i.flags&128)!==0,T=m.rendering,T===null)if(u)Io(m,!1);else{if(tn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Wa(n),T!==null){for(i.flags|=128,Io(m,!1),u=T.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)m=a,n=u,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return zt(Wt,Wt.current&1|2),i.child}n=n.sibling}m.tail!==null&&A()>bs&&(i.flags|=128,u=!0,Io(m,!1),i.lanes=4194304)}else{if(!u)if(n=Wa(T),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Io(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Ht)return mn(i),null}else 2*A()-m.renderingStartTime>bs&&a!==1073741824&&(i.flags|=128,u=!0,Io(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=A(),i.sibling=null,a=Wt.current,zt(Wt,u?a&1|2:a&1),i):(mn(i),null);case 22:case 23:return bc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Vn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function wv(n,i){switch(zu(i),i.tag){case 1:return Pn(i.type)&&Na(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return As(),Vt(Rn),Vt(hn),Ju(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Zu(i),null;case 13:if(Vt(Wt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ms()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Vt(Wt),null;case 4:return As(),null;case 10:return Xu(i.type._context),null;case 22:case 23:return bc(),null;case 24:return null;default:return null}}var Qa=!1,gn=!1,Av=typeof WeakSet=="function"?WeakSet:Set,qe=null;function Rs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){qt(n,i,u)}else a.current=null}function _c(n,i,a){try{a()}catch(u){qt(n,i,u)}}var Np=!1;function Cv(n,i){if(bu=xa,n=fh(),Mu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,U=-1,k=-1,ae=0,ye=0,Ee=n,xe=null;t:for(;;){for(var He;Ee!==a||d!==0&&Ee.nodeType!==3||(U=T+d),Ee!==m||u!==0&&Ee.nodeType!==3||(k=T+u),Ee.nodeType===3&&(T+=Ee.nodeValue.length),(He=Ee.firstChild)!==null;)xe=Ee,Ee=He;for(;;){if(Ee===n)break t;if(xe===a&&++ae===d&&(U=T),xe===m&&++ye===u&&(k=T),(He=Ee.nextSibling)!==null)break;Ee=xe,xe=Ee.parentNode}Ee=He}a=U===-1||k===-1?null:{start:U,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lu={focusedElem:n,selectionRange:a},xa=!1,qe=i;qe!==null;)if(i=qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,qe=n;else for(;qe!==null;){i=qe;try{var Ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var Qe=Ze.memoizedProps,Kt=Ze.memoizedState,Q=i.stateNode,W=Q.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:ci(i.type,Qe),Kt);Q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var re=i.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){qt(i,i.return,Ce)}if(n=i.sibling,n!==null){n.return=i.return,qe=n;break}qe=i.return}return Ze=Np,Np=!1,Ze}function Uo(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&_c(i,a,m)}d=d.next}while(d!==u)}}function el(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function xc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Ip(n){var i=n.alternate;i!==null&&(n.alternate=null,Ip(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[yi],delete i[To],delete i[Uu],delete i[uv],delete i[cv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Up(n){return n.tag===5||n.tag===3||n.tag===4}function Fp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Up(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function yc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=La));else if(u!==4&&(n=n.child,n!==null))for(yc(n,i,a),n=n.sibling;n!==null;)yc(n,i,a),n=n.sibling}function Sc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Sc(n,i,a),n=n.sibling;n!==null;)Sc(n,i,a),n=n.sibling}var un=null,fi=!1;function gr(n,i,a){for(a=a.child;a!==null;)Op(n,i,a),a=a.sibling}function Op(n,i,a){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Ne,a)}catch{}switch(a.tag){case 5:gn||Rs(a,i);case 6:var u=un,d=fi;un=null,gr(n,i,a),un=u,fi=d,un!==null&&(fi?(n=un,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):un.removeChild(a.stateNode));break;case 18:un!==null&&(fi?(n=un,a=a.stateNode,n.nodeType===8?Iu(n.parentNode,a):n.nodeType===1&&Iu(n,a),ho(n)):Iu(un,a.stateNode));break;case 4:u=un,d=fi,un=a.stateNode.containerInfo,fi=!0,gr(n,i,a),un=u,fi=d;break;case 0:case 11:case 14:case 15:if(!gn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&_c(a,i,T),d=d.next}while(d!==u)}gr(n,i,a);break;case 1:if(!gn&&(Rs(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(U){qt(a,i,U)}gr(n,i,a);break;case 21:gr(n,i,a);break;case 22:a.mode&1?(gn=(u=gn)||a.memoizedState!==null,gr(n,i,a),gn=u):gr(n,i,a);break;default:gr(n,i,a)}}function Bp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Av),i.forEach(function(u){var d=Fv.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function di(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var m=n,T=i,U=T;e:for(;U!==null;){switch(U.tag){case 5:un=U.stateNode,fi=!1;break e;case 3:un=U.stateNode.containerInfo,fi=!0;break e;case 4:un=U.stateNode.containerInfo,fi=!0;break e}U=U.return}if(un===null)throw Error(t(160));Op(m,T,d),un=null,fi=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(ae){qt(d,i,ae)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)zp(i,n),i=i.sibling}function zp(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(di(i,n),Ei(n),u&4){try{Uo(3,n,n.return),el(3,n)}catch(Qe){qt(n,n.return,Qe)}try{Uo(5,n,n.return)}catch(Qe){qt(n,n.return,Qe)}}break;case 1:di(i,n),Ei(n),u&512&&a!==null&&Rs(a,a.return);break;case 5:if(di(i,n),Ei(n),u&512&&a!==null&&Rs(a,a.return),n.flags&32){var d=n.stateNode;try{Ae(d,"")}catch(Qe){qt(n,n.return,Qe)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=a!==null?a.memoizedProps:m,U=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&_e(d,m),ze(U,T);var ae=ze(U,m);for(T=0;T<k.length;T+=2){var ye=k[T],Ee=k[T+1];ye==="style"?Re(d,Ee):ye==="dangerouslySetInnerHTML"?Xe(d,Ee):ye==="children"?Ae(d,Ee):P(d,ye,Ee,ae)}switch(U){case"input":De(d,m);break;case"textarea":E(d,m);break;case"select":var xe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var He=m.value;He!=null?it(d,!!m.multiple,He,!1):xe!==!!m.multiple&&(m.defaultValue!=null?it(d,!!m.multiple,m.defaultValue,!0):it(d,!!m.multiple,m.multiple?[]:"",!1))}d[To]=m}catch(Qe){qt(n,n.return,Qe)}}break;case 6:if(di(i,n),Ei(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Qe){qt(n,n.return,Qe)}}break;case 3:if(di(i,n),Ei(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{ho(i.containerInfo)}catch(Qe){qt(n,n.return,Qe)}break;case 4:di(i,n),Ei(n);break;case 13:di(i,n),Ei(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Tc=A())),u&4&&Bp(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(gn=(ae=gn)||ye,di(i,n),gn=ae):di(i,n),Ei(n),u&8192){if(ae=n.memoizedState!==null,(n.stateNode.isHidden=ae)&&!ye&&(n.mode&1)!==0)for(qe=n,ye=n.child;ye!==null;){for(Ee=qe=ye;qe!==null;){switch(xe=qe,He=xe.child,xe.tag){case 0:case 11:case 14:case 15:Uo(4,xe,xe.return);break;case 1:Rs(xe,xe.return);var Ze=xe.stateNode;if(typeof Ze.componentWillUnmount=="function"){u=xe,a=xe.return;try{i=u,Ze.props=i.memoizedProps,Ze.state=i.memoizedState,Ze.componentWillUnmount()}catch(Qe){qt(u,a,Qe)}}break;case 5:Rs(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Hp(Ee);continue}}He!==null?(He.return=xe,qe=He):Hp(Ee)}ye=ye.sibling}e:for(ye=null,Ee=n;;){if(Ee.tag===5){if(ye===null){ye=Ee;try{d=Ee.stateNode,ae?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=Ee.stateNode,k=Ee.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null,U.style.display=Se("display",T))}catch(Qe){qt(n,n.return,Qe)}}}else if(Ee.tag===6){if(ye===null)try{Ee.stateNode.nodeValue=ae?"":Ee.memoizedProps}catch(Qe){qt(n,n.return,Qe)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;ye===Ee&&(ye=null),Ee=Ee.return}ye===Ee&&(ye=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:di(i,n),Ei(n),u&4&&Bp(n);break;case 21:break;default:di(i,n),Ei(n)}}function Ei(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Up(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Ae(d,""),u.flags&=-33);var m=Fp(n);Sc(n,m,d);break;case 3:case 4:var T=u.stateNode.containerInfo,U=Fp(n);yc(n,U,T);break;default:throw Error(t(161))}}catch(k){qt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Rv(n,i,a){qe=n,kp(n)}function kp(n,i,a){for(var u=(n.mode&1)!==0;qe!==null;){var d=qe,m=d.child;if(d.tag===22&&u){var T=d.memoizedState!==null||Qa;if(!T){var U=d.alternate,k=U!==null&&U.memoizedState!==null||gn;U=Qa;var ae=gn;if(Qa=T,(gn=k)&&!ae)for(qe=d;qe!==null;)T=qe,k=T.child,T.tag===22&&T.memoizedState!==null?Gp(d):k!==null?(k.return=T,qe=k):Gp(d);for(;m!==null;)qe=m,kp(m),m=m.sibling;qe=d,Qa=U,gn=ae}Vp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,qe=m):Vp(n)}}function Vp(n){for(;qe!==null;){var i=qe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||el(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!gn)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ci(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Hh(i,m,u);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Hh(i,T,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ae=i.alternate;if(ae!==null){var ye=ae.memoizedState;if(ye!==null){var Ee=ye.dehydrated;Ee!==null&&ho(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gn||i.flags&512&&xc(i)}catch(xe){qt(i,i.return,xe)}}if(i===n){qe=null;break}if(a=i.sibling,a!==null){a.return=i.return,qe=a;break}qe=i.return}}function Hp(n){for(;qe!==null;){var i=qe;if(i===n){qe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,qe=a;break}qe=i.return}}function Gp(n){for(;qe!==null;){var i=qe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{el(4,i)}catch(k){qt(i,a,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(k){qt(i,d,k)}}var m=i.return;try{xc(i)}catch(k){qt(i,m,k)}break;case 5:var T=i.return;try{xc(i)}catch(k){qt(i,T,k)}}}catch(k){qt(i,i.return,k)}if(i===n){qe=null;break}var U=i.sibling;if(U!==null){U.return=i.return,qe=U;break}qe=i.return}}var Pv=Math.ceil,tl=C.ReactCurrentDispatcher,Mc=C.ReactCurrentOwner,ti=C.ReactCurrentBatchConfig,At=0,on=null,Jt=null,cn=0,Vn=0,Ps=fr(0),tn=0,Fo=null,Gr=0,nl=0,Ec=0,Oo=null,Ln=null,Tc=0,bs=1/0,Wi=null,il=!1,wc=null,vr=null,rl=!1,_r=null,sl=0,Bo=0,Ac=null,ol=-1,al=0;function En(){return(At&6)!==0?A():ol!==-1?ol:ol=A()}function xr(n){return(n.mode&1)===0?1:(At&2)!==0&&cn!==0?cn&-cn:dv.transition!==null?(al===0&&(al=An()),al):(n=ht,n!==0||(n=window.event,n=n===void 0?16:Xd(n.type)),n)}function hi(n,i,a,u){if(50<Bo)throw Bo=0,Ac=null,Error(t(185));On(n,a,u),((At&2)===0||n!==on)&&(n===on&&((At&2)===0&&(nl|=a),tn===4&&yr(n,cn)),Dn(n,u),a===1&&At===0&&(i.mode&1)===0&&(bs=A()+500,Ua&&hr()))}function Dn(n,i){var a=n.callbackNode;Sn(n,i);var u=$t(n,n===on?cn:0);if(u===0)a!==null&&ga(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&ga(a),i===1)n.tag===0?fv(Xp.bind(null,n)):bh(Xp.bind(null,n)),av(function(){(At&6)===0&&hr()}),a=null;else{switch(ai(u)){case 1:a=le;break;case 4:a=se;break;case 16:a=te;break;case 536870912:a=Ge;break;default:a=te}a=Qp(a,Wp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Wp(n,i){if(ol=-1,al=0,(At&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ls()&&n.callbackNode!==a)return null;var u=$t(n,n===on?cn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=ll(n,u);else{i=u;var d=At;At|=2;var m=qp();(on!==n||cn!==i)&&(Wi=null,bs=A()+500,Xr(n,i));do try{Dv();break}catch(U){Yp(n,U)}while(!0);Wu(),tl.current=m,At=d,Jt!==null?i=0:(on=null,cn=0,i=tn)}if(i!==0){if(i===2&&(d=Mt(n),d!==0&&(u=d,i=Cc(n,d))),i===1)throw a=Fo,Xr(n,0),yr(n,u),Dn(n,A()),a;if(i===6)yr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!bv(d)&&(i=ll(n,u),i===2&&(m=Mt(n),m!==0&&(u=m,i=Cc(n,m))),i===1))throw a=Fo,Xr(n,0),yr(n,u),Dn(n,A()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Yr(n,Ln,Wi);break;case 3:if(yr(n,u),(u&130023424)===u&&(i=Tc+500-A(),10<i)){if($t(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){En(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Nu(Yr.bind(null,n,Ln,Wi),i);break}Yr(n,Ln,Wi);break;case 4:if(yr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var T=31-ot(u);m=1<<T,T=i[T],T>d&&(d=T),u&=~m}if(u=d,u=A()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Pv(u/1960))-u,10<u){n.timeoutHandle=Nu(Yr.bind(null,n,Ln,Wi),u);break}Yr(n,Ln,Wi);break;case 5:Yr(n,Ln,Wi);break;default:throw Error(t(329))}}}return Dn(n,A()),n.callbackNode===a?Wp.bind(null,n):null}function Cc(n,i){var a=Oo;return n.current.memoizedState.isDehydrated&&(Xr(n,i).flags|=256),n=ll(n,i),n!==2&&(i=Ln,Ln=a,i!==null&&Rc(i)),n}function Rc(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function bv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],m=d.getSnapshot;d=d.value;try{if(!li(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(n,i){for(i&=~Ec,i&=~nl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ot(i),u=1<<a;n[a]=-1,i&=~u}}function Xp(n){if((At&6)!==0)throw Error(t(327));Ls();var i=$t(n,0);if((i&1)===0)return Dn(n,A()),null;var a=ll(n,i);if(n.tag!==0&&a===2){var u=Mt(n);u!==0&&(i=u,a=Cc(n,u))}if(a===1)throw a=Fo,Xr(n,0),yr(n,i),Dn(n,A()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Yr(n,Ln,Wi),Dn(n,A()),null}function Pc(n,i){var a=At;At|=1;try{return n(i)}finally{At=a,At===0&&(bs=A()+500,Ua&&hr())}}function Wr(n){_r!==null&&_r.tag===0&&(At&6)===0&&Ls();var i=At;At|=1;var a=ti.transition,u=ht;try{if(ti.transition=null,ht=1,n)return n()}finally{ht=u,ti.transition=a,At=i,(At&6)===0&&hr()}}function bc(){Vn=Ps.current,Vt(Ps)}function Xr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,ov(a)),Jt!==null)for(a=Jt.return;a!==null;){var u=a;switch(zu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Na();break;case 3:As(),Vt(Rn),Vt(hn),Ju();break;case 5:Zu(u);break;case 4:As();break;case 13:Vt(Wt);break;case 19:Vt(Wt);break;case 10:Xu(u.type._context);break;case 22:case 23:bc()}a=a.return}if(on=n,Jt=n=Sr(n.current,null),cn=Vn=i,tn=0,Fo=null,Ec=nl=Gr=0,Ln=Oo=null,kr!==null){for(i=0;i<kr.length;i++)if(a=kr[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,m=a.pending;if(m!==null){var T=m.next;m.next=d,u.next=T}a.pending=u}kr=null}return n}function Yp(n,i){do{var a=Jt;try{if(Wu(),Xa.current=$a,Ya){for(var u=Xt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ya=!1}if(Hr=0,sn=en=Xt=null,bo=!1,Lo=0,Mc.current=null,a===null||a.return===null){tn=1,Fo=i,Jt=null;break}e:{var m=n,T=a.return,U=a,k=i;if(i=cn,U.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ae=k,ye=U,Ee=ye.tag;if((ye.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var He=vp(T);if(He!==null){He.flags&=-257,_p(He,T,U,m,i),He.mode&1&&gp(m,ae,i),i=He,k=ae;var Ze=i.updateQueue;if(Ze===null){var Qe=new Set;Qe.add(k),i.updateQueue=Qe}else Ze.add(k);break e}else{if((i&1)===0){gp(m,ae,i),Lc();break e}k=Error(t(426))}}else if(Ht&&U.mode&1){var Kt=vp(T);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),_p(Kt,T,U,m,i),Hu(Cs(k,U));break e}}m=k=Cs(k,U),tn!==4&&(tn=2),Oo===null?Oo=[m]:Oo.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Q=pp(m,k,i);Vh(m,Q);break e;case 1:U=k;var W=m.type,re=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(vr===null||!vr.has(re)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ce=mp(m,U,i);Vh(m,Ce);break e}}m=m.return}while(m!==null)}$p(a)}catch(tt){i=tt,Jt===a&&a!==null&&(Jt=a=a.return);continue}break}while(!0)}function qp(){var n=tl.current;return tl.current=$a,n===null?$a:n}function Lc(){(tn===0||tn===3||tn===2)&&(tn=4),on===null||(Gr&268435455)===0&&(nl&268435455)===0||yr(on,cn)}function ll(n,i){var a=At;At|=2;var u=qp();(on!==n||cn!==i)&&(Wi=null,Xr(n,i));do try{Lv();break}catch(d){Yp(n,d)}while(!0);if(Wu(),At=a,tl.current=u,Jt!==null)throw Error(t(261));return on=null,cn=0,tn}function Lv(){for(;Jt!==null;)jp(Jt)}function Dv(){for(;Jt!==null&&!lu();)jp(Jt)}function jp(n){var i=Jp(n.alternate,n,Vn);n.memoizedProps=n.pendingProps,i===null?$p(n):Jt=i,Mc.current=null}function $p(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Tv(a,i,Vn),a!==null){Jt=a;return}}else{if(a=wv(a,i),a!==null){a.flags&=32767,Jt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=n}while(i!==null);tn===0&&(tn=5)}function Yr(n,i,a){var u=ht,d=ti.transition;try{ti.transition=null,ht=1,Nv(n,i,a,u)}finally{ti.transition=d,ht=u}return null}function Nv(n,i,a,u){do Ls();while(_r!==null);if((At&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(ir(n,m),n===on&&(Jt=on=null,cn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||rl||(rl=!0,Qp(te,function(){return Ls(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ti.transition,ti.transition=null;var T=ht;ht=1;var U=At;At|=4,Mc.current=null,Cv(n,a),zp(a,n),Q0(Lu),xa=!!bu,Lu=bu=null,n.current=a,Rv(a),uu(),At=U,ht=T,ti.transition=m}else n.current=a;if(rl&&(rl=!1,_r=n,sl=d),m=n.pendingLanes,m===0&&(vr=null),nt(a.stateNode),Dn(n,A()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(il)throw il=!1,n=wc,wc=null,n;return(sl&1)!==0&&n.tag!==0&&Ls(),m=n.pendingLanes,(m&1)!==0?n===Ac?Bo++:(Bo=0,Ac=n):Bo=0,hr(),null}function Ls(){if(_r!==null){var n=ai(sl),i=ti.transition,a=ht;try{if(ti.transition=null,ht=16>n?16:n,_r===null)var u=!1;else{if(n=_r,_r=null,sl=0,(At&6)!==0)throw Error(t(331));var d=At;for(At|=4,qe=n.current;qe!==null;){var m=qe,T=m.child;if((qe.flags&16)!==0){var U=m.deletions;if(U!==null){for(var k=0;k<U.length;k++){var ae=U[k];for(qe=ae;qe!==null;){var ye=qe;switch(ye.tag){case 0:case 11:case 15:Uo(8,ye,m)}var Ee=ye.child;if(Ee!==null)Ee.return=ye,qe=Ee;else for(;qe!==null;){ye=qe;var xe=ye.sibling,He=ye.return;if(Ip(ye),ye===ae){qe=null;break}if(xe!==null){xe.return=He,qe=xe;break}qe=He}}}var Ze=m.alternate;if(Ze!==null){var Qe=Ze.child;if(Qe!==null){Ze.child=null;do{var Kt=Qe.sibling;Qe.sibling=null,Qe=Kt}while(Qe!==null)}}qe=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,qe=T;else e:for(;qe!==null;){if(m=qe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Uo(9,m,m.return)}var Q=m.sibling;if(Q!==null){Q.return=m.return,qe=Q;break e}qe=m.return}}var W=n.current;for(qe=W;qe!==null;){T=qe;var re=T.child;if((T.subtreeFlags&2064)!==0&&re!==null)re.return=T,qe=re;else e:for(T=W;qe!==null;){if(U=qe,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:el(9,U)}}catch(tt){qt(U,U.return,tt)}if(U===T){qe=null;break e}var Ce=U.sibling;if(Ce!==null){Ce.return=U.return,qe=Ce;break e}qe=U.return}}if(At=d,hr(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Ne,n)}catch{}u=!0}return u}finally{ht=a,ti.transition=i}}return!1}function Zp(n,i,a){i=Cs(a,i),i=pp(n,i,1),n=mr(n,i,1),i=En(),n!==null&&(On(n,1,i),Dn(n,i))}function qt(n,i,a){if(n.tag===3)Zp(n,n,a);else for(;i!==null;){if(i.tag===3){Zp(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(vr===null||!vr.has(u))){n=Cs(a,n),n=mp(i,n,1),i=mr(i,n,1),n=En(),i!==null&&(On(i,1,n),Dn(i,n));break}}i=i.return}}function Iv(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=En(),n.pingedLanes|=n.suspendedLanes&a,on===n&&(cn&a)===a&&(tn===4||tn===3&&(cn&130023424)===cn&&500>A()-Tc?Xr(n,0):Ec|=a),Dn(n,i)}function Kp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ft,Ft<<=1,(Ft&130023424)===0&&(Ft=4194304)));var a=En();n=Vi(n,i),n!==null&&(On(n,i,a),Dn(n,a))}function Uv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Kp(n,a)}function Fv(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Kp(n,a)}var Jp;Jp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Rn.current)bn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return bn=!1,Ev(n,i,a);bn=(n.flags&131072)!==0}else bn=!1,Ht&&(i.flags&1048576)!==0&&Lh(i,Oa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Ja(n,i),n=i.pendingProps;var d=xs(i,hn.current);ws(i,a),d=tc(null,i,u,n,d,a);var m=nc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(u)?(m=!0,Ia(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ju(i),d.updater=Za,i.stateNode=d,d._reactInternals=i,lc(i,u,n,a),i=dc(null,i,u,!0,m,a)):(i.tag=0,Ht&&m&&Bu(i),Mn(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Ja(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Bv(u),n=ci(u,n),d){case 0:i=fc(null,i,u,n,a);break e;case 1:i=Tp(null,i,u,n,a);break e;case 11:i=xp(null,i,u,n,a);break e;case 14:i=yp(null,i,u,ci(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ci(u,d),fc(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ci(u,d),Tp(n,i,u,d,a);case 3:e:{if(wp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,kh(n,i),Ga(i,u,null,a);var T=i.memoizedState;if(u=T.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Cs(Error(t(423)),i),i=Ap(n,i,u,a,d);break e}else if(u!==d){d=Cs(Error(t(424)),i),i=Ap(n,i,u,a,d);break e}else for(kn=cr(i.stateNode.containerInfo.firstChild),zn=i,Ht=!0,ui=null,a=Bh(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ms(),u===d){i=Gi(n,i,a);break e}Mn(n,i,u,a)}i=i.child}return i;case 5:return Gh(i),n===null&&Vu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,Du(u,d)?T=null:m!==null&&Du(u,m)&&(i.flags|=32),Ep(n,i),Mn(n,i,T,a),i.child;case 6:return n===null&&Vu(i),null;case 13:return Cp(n,i,a);case 4:return $u(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Es(i,null,u,a):Mn(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ci(u,d),xp(n,i,u,d,a);case 7:return Mn(n,i,i.pendingProps,a),i.child;case 8:return Mn(n,i,i.pendingProps.children,a),i.child;case 12:return Mn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,zt(ka,u._currentValue),u._currentValue=T,m!==null)if(li(m.value,T)){if(m.children===d.children&&!Rn.current){i=Gi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){T=m.child;for(var k=U.firstContext;k!==null;){if(k.context===u){if(m.tag===1){k=Hi(-1,a&-a),k.tag=2;var ae=m.updateQueue;if(ae!==null){ae=ae.shared;var ye=ae.pending;ye===null?k.next=k:(k.next=ye.next,ye.next=k),ae.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),Yu(m.return,a,i),U.lanes|=a;break}k=k.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=a,U=T.alternate,U!==null&&(U.lanes|=a),Yu(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}Mn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,ws(i,a),d=Qn(d),u=u(d),i.flags|=1,Mn(n,i,u,a),i.child;case 14:return u=i.type,d=ci(u,i.pendingProps),d=ci(u.type,d),yp(n,i,u,d,a);case 15:return Sp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ci(u,d),Ja(n,i),i.tag=1,Pn(u)?(n=!0,Ia(i)):n=!1,ws(i,a),dp(i,u,d),lc(i,u,d,a),dc(null,i,u,!0,n,a);case 19:return Pp(n,i,a);case 22:return Mp(n,i,a)}throw Error(t(156,i.tag))};function Qp(n,i){return ma(n,i)}function Ov(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(n,i,a,u){return new Ov(n,i,a,u)}function Dc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Bv(n){if(typeof n=="function")return Dc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===q)return 14}return 2}function Sr(n,i){var a=n.alternate;return a===null?(a=ni(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ul(n,i,a,u,d,m){var T=2;if(u=n,typeof n=="function")Dc(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case B:return qr(a.children,d,m,i);case w:T=8,d|=8;break;case D:return n=ni(12,a,i,d|2),n.elementType=D,n.lanes=m,n;case Y:return n=ni(13,a,i,d),n.elementType=Y,n.lanes=m,n;case J:return n=ni(19,a,i,d),n.elementType=J,n.lanes=m,n;case V:return cl(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ue:T=10;break e;case O:T=9;break e;case ee:T=11;break e;case q:T=14;break e;case Z:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ni(T,a,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function qr(n,i,a,u){return n=ni(7,n,u,i),n.lanes=a,n}function cl(n,i,a,u){return n=ni(22,n,u,i),n.elementType=V,n.lanes=a,n.stateNode={isHidden:!1},n}function Nc(n,i,a){return n=ni(6,n,null,i),n.lanes=a,n}function Ic(n,i,a){return i=ni(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function zv(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cn(0),this.expirationTimes=Cn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Uc(n,i,a,u,d,m,T,U,k){return n=new zv(n,i,a,U,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ni(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ju(m),n}function kv(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function em(n){if(!n)return dr;n=n._reactInternals;e:{if(xi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Pn(a))return Rh(n,a,i)}return i}function tm(n,i,a,u,d,m,T,U,k){return n=Uc(a,u,!0,n,d,m,T,U,k),n.context=em(null),a=n.current,u=En(),d=xr(a),m=Hi(u,d),m.callback=i??null,mr(a,m,d),n.current.lanes=d,On(n,d,u),Dn(n,u),n}function fl(n,i,a,u){var d=i.current,m=En(),T=xr(d);return a=em(a),i.context===null?i.context=a:i.pendingContext=a,i=Hi(m,T),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=mr(d,i,T),n!==null&&(hi(n,d,T,m),Ha(n,d,T)),T}function dl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function nm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Fc(n,i){nm(n,i),(n=n.alternate)&&nm(n,i)}function Vv(){return null}var im=typeof reportError=="function"?reportError:function(n){console.error(n)};function Oc(n){this._internalRoot=n}hl.prototype.render=Oc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));fl(n,i,null,null)},hl.prototype.unmount=Oc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Wr(function(){fl(null,n,null,null)}),i[Oi]=null}};function hl(n){this._internalRoot=n}hl.prototype.unstable_scheduleHydration=function(n){if(n){var i=ao();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ar.length&&i!==0&&i<ar[a].priority;a++);ar.splice(a,0,n),a===0&&Gd(n)}};function Bc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function rm(){}function Hv(n,i,a,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var ae=dl(T);m.call(ae)}}var T=tm(i,u,n,0,null,!1,!1,"",rm);return n._reactRootContainer=T,n[Oi]=T.current,Mo(n.nodeType===8?n.parentNode:n),Wr(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var U=u;u=function(){var ae=dl(k);U.call(ae)}}var k=Uc(n,0,!1,null,null,!1,!1,"",rm);return n._reactRootContainer=k,n[Oi]=k.current,Mo(n.nodeType===8?n.parentNode:n),Wr(function(){fl(i,k,a,u)}),k}function ml(n,i,a,u,d){var m=a._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var U=d;d=function(){var k=dl(T);U.call(k)}}fl(i,T,n,d)}else T=Hv(a,i,n,d,u);return dl(T)}Zt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Et(i.pendingLanes);a!==0&&(Dt(i,a|1),Dn(i,A()),(At&6)===0&&(bs=A()+500,hr()))}break;case 13:Wr(function(){var u=Vi(n,1);if(u!==null){var d=En();hi(u,n,1,d)}}),Fc(n,1)}},Zn=function(n){if(n.tag===13){var i=Vi(n,134217728);if(i!==null){var a=En();hi(i,n,134217728,a)}Fc(n,134217728)}},Fi=function(n){if(n.tag===13){var i=xr(n),a=Vi(n,i);if(a!==null){var u=En();hi(a,n,i,u)}Fc(n,i)}},ao=function(){return ht},Vd=function(n,i){var a=ht;try{return ht=n,i()}finally{ht=a}},be=function(n,i,a){switch(i){case"input":if(De(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=Da(u);if(!d)throw Error(t(90));Lt(u),De(u,d)}}}break;case"textarea":E(n,a);break;case"select":i=a.value,i!=null&&it(n,!!a.multiple,i,!1)}},dt=Pc,It=Wr;var Gv={usingClientEntryPoint:!1,Events:[wo,vs,Da,de,$e,Pc]},zo={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wv={bundleType:zo.bundleType,version:zo.version,rendererPackageName:zo.rendererPackageName,rendererConfig:zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ha(n),n===null?null:n.stateNode},findFiberByHostInstance:zo.findFiberByHostInstance||Vv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{Ne=gl.inject(Wv),Ve=gl}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gv,Nn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bc(i))throw Error(t(200));return kv(n,i,null,a)},Nn.createRoot=function(n,i){if(!Bc(n))throw Error(t(299));var a=!1,u="",d=im;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Uc(n,1,!1,null,null,a,!1,u,d),n[Oi]=i.current,Mo(n.nodeType===8?n.parentNode:n),new Oc(i)},Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ha(i),n=n===null?null:n.stateNode,n},Nn.flushSync=function(n){return Wr(n)},Nn.hydrate=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!0,a)},Nn.hydrateRoot=function(n,i,a){if(!Bc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,m="",T=im;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=tm(i,null,n,1,a??null,d,!1,m,T),n[Oi]=i.current,Mo(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new hl(i)},Nn.render=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!1,a)},Nn.unmountComponentAtNode=function(n){if(!pl(n))throw Error(t(40));return n._reactRootContainer?(Wr(function(){ml(null,null,n,!1,function(){n._reactRootContainer=null,n[Oi]=null})}),!0):!1},Nn.unstable_batchedUpdates=Pc,Nn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!pl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ml(n,i,a,!1,u)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var dm;function Qv(){if(dm)return Vc.exports;dm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Vc.exports=Jv(),Vc.exports}var hm;function e_(){if(hm)return vl;hm=1;var s=Qv();return vl.createRoot=s.createRoot,vl.hydrateRoot=s.hydrateRoot,vl}var t_=e_();const n_=yg(t_);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Td="183",i_=0,pm=1,r_=2,Xl=1,s_=2,$o=3,Dr=0,Un=1,Zi=2,Ji=0,qs=1,mm=2,gm=3,vm=4,o_=5,ns=100,a_=101,l_=102,u_=103,c_=104,f_=200,d_=201,h_=202,p_=203,Rf=204,Pf=205,m_=206,g_=207,v_=208,__=209,x_=210,y_=211,S_=212,M_=213,E_=214,bf=0,Lf=1,Df=2,$s=3,Nf=4,If=5,Uf=6,Ff=7,Sg=0,T_=1,w_=2,Pi=0,Mg=1,Eg=2,Tg=3,wg=4,Ag=5,Cg=6,Rg=7,Pg=300,os=301,Zs=302,Wc=303,Xc=304,nu=306,Of=1e3,Ki=1001,Bf=1002,fn=1003,A_=1004,_l=1005,xn=1006,Yc=1007,rs=1008,Yn=1009,bg=1010,Lg=1011,ta=1012,wd=1013,Li=1014,Ci=1015,er=1016,Ad=1017,Cd=1018,na=1020,Dg=35902,Ng=35899,Ig=1021,Ug=1022,_i=1023,tr=1026,ss=1027,Fg=1028,Rd=1029,Ks=1030,Pd=1031,bd=1033,Yl=33776,ql=33777,jl=33778,$l=33779,zf=35840,kf=35841,Vf=35842,Hf=35843,Gf=36196,Wf=37492,Xf=37496,Yf=37488,qf=37489,jf=37490,$f=37491,Zf=37808,Kf=37809,Jf=37810,Qf=37811,ed=37812,td=37813,nd=37814,id=37815,rd=37816,sd=37817,od=37818,ad=37819,ld=37820,ud=37821,cd=36492,fd=36494,dd=36495,hd=36283,pd=36284,md=36285,gd=36286,C_=3200,Og=0,R_=1,br="",ri="srgb",Js="srgb-linear",Kl="linear",Ut="srgb",Ds=7680,_m=519,P_=512,b_=513,L_=514,Ld=515,D_=516,N_=517,Dd=518,I_=519,xm=35044,ym="300 es",Ri=2e3,ia=2001;function U_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Jl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function F_(){const s=Jl("canvas");return s.style.display="block",s}const Sm={};function Mm(...s){const e="THREE."+s.shift();console.log(e,...s)}function Bg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function mt(...s){s=Bg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ct(...s){s=Bg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ql(...s){const e=s.join(" ");e in Sm||(Sm[e]=!0,mt(...s))}function O_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const B_={[bf]:Lf,[Df]:Uf,[Nf]:Ff,[$s]:If,[Lf]:bf,[Uf]:Df,[Ff]:Nf,[If]:$s};class to{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qc=Math.PI/180,vd=180/Math.PI;function no(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function St(s,e,t){return Math.max(e,Math.min(t,s))}function z_(s,e){return(s%e+e)%e}function jc(s,e,t){return(1-t)*s+t*e}function Vo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class io{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let h=r[o+0],p=r[o+1],v=r[o+2],_=r[o+3],g=l[c+0],S=l[c+1],M=l[c+2],R=l[c+3];if(_!==R||h!==g||p!==S||v!==M){let x=h*g+p*S+v*M+_*R;x<0&&(g=-g,S=-S,M=-M,R=-R,x=-x);let y=1-f;if(x<.9995){const b=Math.acos(x),P=Math.sin(b);y=Math.sin(y*b)/P,f=Math.sin(f*b)/P,h=h*y+g*f,p=p*y+S*f,v=v*y+M*f,_=_*y+R*f}else{h=h*y+g*f,p=p*y+S*f,v=v*y+M*f,_=_*y+R*f;const b=1/Math.sqrt(h*h+p*p+v*v+_*_);h*=b,p*=b,v*=b,_*=b}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],h=r[o+1],p=r[o+2],v=r[o+3],_=l[c],g=l[c+1],S=l[c+2],M=l[c+3];return e[t]=f*M+v*_+h*S-p*g,e[t+1]=h*M+v*g+p*_-f*S,e[t+2]=p*M+v*S+f*g-h*_,e[t+3]=v*M-f*_-h*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(r/2),v=f(o/2),_=f(l/2),g=h(r/2),S=h(o/2),M=h(l/2);switch(c){case"XYZ":this._x=g*v*_+p*S*M,this._y=p*S*_-g*v*M,this._z=p*v*M+g*S*_,this._w=p*v*_-g*S*M;break;case"YXZ":this._x=g*v*_+p*S*M,this._y=p*S*_-g*v*M,this._z=p*v*M-g*S*_,this._w=p*v*_+g*S*M;break;case"ZXY":this._x=g*v*_-p*S*M,this._y=p*S*_+g*v*M,this._z=p*v*M+g*S*_,this._w=p*v*_-g*S*M;break;case"ZYX":this._x=g*v*_-p*S*M,this._y=p*S*_+g*v*M,this._z=p*v*M-g*S*_,this._w=p*v*_+g*S*M;break;case"YZX":this._x=g*v*_+p*S*M,this._y=p*S*_+g*v*M,this._z=p*v*M-g*S*_,this._w=p*v*_-g*S*M;break;case"XZY":this._x=g*v*_-p*S*M,this._y=p*S*_-g*v*M,this._z=p*v*M+g*S*_,this._w=p*v*_+g*S*M;break;default:mt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],v=t[6],_=t[10],g=r+f+_;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(v-h)*S,this._y=(l-p)*S,this._z=(c-o)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(v-h)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+p)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(l-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(h+v)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(c-o)/S,this._x=(l+p)/S,this._y=(h+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+c*f+o*p-l*h,this._y=o*v+c*h+l*f-r*p,this._z=l*v+c*p+r*h-o*f,this._w=c*v-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,c=-c,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Em.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Em.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*o-f*r),v=2*(f*t-l*o),_=2*(l*r-c*t);return this.x=t+h*p+c*_-f*v,this.y=r+h*v+f*p-l*_,this.z=o+h*_+l*v-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-r*h,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return $c.copy(this).projectOnVector(e),this.sub($c)}reflect(e){return this.sub($c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $c=new X,Em=new io;class _t{constructor(e,t,r,o,l,c,f,h,p){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,h,p)}set(e,t,r,o,l,c,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=c,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],p=r[1],v=r[4],_=r[7],g=r[2],S=r[5],M=r[8],R=o[0],x=o[3],y=o[6],b=o[1],P=o[4],C=o[7],z=o[2],F=o[5],B=o[8];return l[0]=c*R+f*b+h*z,l[3]=c*x+f*P+h*F,l[6]=c*y+f*C+h*B,l[1]=p*R+v*b+_*z,l[4]=p*x+v*P+_*F,l[7]=p*y+v*C+_*B,l[2]=g*R+S*b+M*z,l[5]=g*x+S*P+M*F,l[8]=g*y+S*C+M*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*c*v-t*f*p-r*l*v+r*f*h+o*l*p-o*c*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8],_=v*c-f*p,g=f*h-v*l,S=p*l-c*h,M=t*_+r*g+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/M;return e[0]=_*R,e[1]=(o*p-v*r)*R,e[2]=(f*r-o*c)*R,e[3]=g*R,e[4]=(v*t-o*h)*R,e[5]=(o*l-f*t)*R,e[6]=S*R,e[7]=(r*h-p*t)*R,e[8]=(c*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*f)+c+e,-o*p,o*h,-o*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Zc.makeScale(e,t)),this}rotate(e){return this.premultiply(Zc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zc=new _t,Tm=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wm=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function k_(){const s={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ut&&(o.r=Qi(o.r),o.g=Qi(o.g),o.b=Qi(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ut&&(o.r=js(o.r),o.g=js(o.g),o.b=js(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===br?Kl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Ql("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Ql("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Js]:{primaries:e,whitePoint:r,transfer:Kl,toXYZ:Tm,fromXYZ:wm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:Tm,fromXYZ:wm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),s}const Rt=k_();function Qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ns;class V_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ns===void 0&&(Ns=Jl("canvas")),Ns.width=e.width,Ns.height=e.height;const o=Ns.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ns}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Qi(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Qi(t[r]/255)*255):t[r]=Qi(t[r]);return{data:t,width:e.width,height:e.height}}else return mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let H_=0;class Nd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=no(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(Kc(o[c].image)):l.push(Kc(o[c]))}else l=Kc(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Kc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?V_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(mt("Texture: Unable to serialize Texture."),{})}let G_=0;const Jc=new X;class wn extends to{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,r=Ki,o=Ki,l=xn,c=rs,f=_i,h=Yn,p=wn.DEFAULT_ANISOTROPY,v=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=no(),this.name="",this.source=new Nd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jc).x}get height(){return this.source.getSize(Jc).y}get depth(){return this.source.getSize(Jc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){mt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){mt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Of:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case Bf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Of:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case Bf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Pg;wn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,r=0,o=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],v=h[4],_=h[8],g=h[1],S=h[5],M=h[9],R=h[2],x=h[6],y=h[10];if(Math.abs(v-g)<.01&&Math.abs(_-R)<.01&&Math.abs(M-x)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+R)<.1&&Math.abs(M+x)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,C=(S+1)/2,z=(y+1)/2,F=(v+g)/4,B=(_+R)/4,w=(M+x)/4;return P>C&&P>z?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=F/r,l=B/r):C>z?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=F/o,l=w/o):z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),r=B/l,o=w/l),this.set(r,o,l,t),this}let b=Math.sqrt((x-M)*(x-M)+(_-R)*(_-R)+(g-v)*(g-v));return Math.abs(b)<.001&&(b=1),this.x=(x-M)/b,this.y=(_-R)/b,this.z=(g-v)/b,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class W_ extends to{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new wn(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Nd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends W_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class zg extends wn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class X_ extends wn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gt{constructor(e,t,r,o,l,c,f,h,p,v,_,g,S,M,R,x){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,h,p,v,_,g,S,M,R,x)}set(e,t,r,o,l,c,f,h,p,v,_,g,S,M,R,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=c,y[9]=f,y[13]=h,y[2]=p,y[6]=v,y[10]=_,y[14]=g,y[3]=S,y[7]=M,y[11]=R,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Is.setFromMatrixColumn(e,0).length(),l=1/Is.setFromMatrixColumn(e,1).length(),c=1/Is.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=c*v,S=c*_,M=f*v,R=f*_;t[0]=h*v,t[4]=-h*_,t[8]=p,t[1]=S+M*p,t[5]=g-R*p,t[9]=-f*h,t[2]=R-g*p,t[6]=M+S*p,t[10]=c*h}else if(e.order==="YXZ"){const g=h*v,S=h*_,M=p*v,R=p*_;t[0]=g+R*f,t[4]=M*f-S,t[8]=c*p,t[1]=c*_,t[5]=c*v,t[9]=-f,t[2]=S*f-M,t[6]=R+g*f,t[10]=c*h}else if(e.order==="ZXY"){const g=h*v,S=h*_,M=p*v,R=p*_;t[0]=g-R*f,t[4]=-c*_,t[8]=M+S*f,t[1]=S+M*f,t[5]=c*v,t[9]=R-g*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const g=c*v,S=c*_,M=f*v,R=f*_;t[0]=h*v,t[4]=M*p-S,t[8]=g*p+R,t[1]=h*_,t[5]=R*p+g,t[9]=S*p-M,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const g=c*h,S=c*p,M=f*h,R=f*p;t[0]=h*v,t[4]=R-g*_,t[8]=M*_+S,t[1]=_,t[5]=c*v,t[9]=-f*v,t[2]=-p*v,t[6]=S*_+M,t[10]=g-R*_}else if(e.order==="XZY"){const g=c*h,S=c*p,M=f*h,R=f*p;t[0]=h*v,t[4]=-_,t[8]=p*v,t[1]=g*_+R,t[5]=c*v,t[9]=S*_-M,t[2]=M*_-S,t[6]=f*v,t[10]=R*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y_,e,q_)}lookAt(e,t,r){const o=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Er.crossVectors(r,Hn),Er.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Er.crossVectors(r,Hn)),Er.normalize(),xl.crossVectors(Hn,Er),o[0]=Er.x,o[4]=xl.x,o[8]=Hn.x,o[1]=Er.y,o[5]=xl.y,o[9]=Hn.y,o[2]=Er.z,o[6]=xl.z,o[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],p=r[12],v=r[1],_=r[5],g=r[9],S=r[13],M=r[2],R=r[6],x=r[10],y=r[14],b=r[3],P=r[7],C=r[11],z=r[15],F=o[0],B=o[4],w=o[8],D=o[12],ue=o[1],O=o[5],ee=o[9],Y=o[13],J=o[2],q=o[6],Z=o[10],V=o[14],K=o[3],ne=o[7],oe=o[11],I=o[15];return l[0]=c*F+f*ue+h*J+p*K,l[4]=c*B+f*O+h*q+p*ne,l[8]=c*w+f*ee+h*Z+p*oe,l[12]=c*D+f*Y+h*V+p*I,l[1]=v*F+_*ue+g*J+S*K,l[5]=v*B+_*O+g*q+S*ne,l[9]=v*w+_*ee+g*Z+S*oe,l[13]=v*D+_*Y+g*V+S*I,l[2]=M*F+R*ue+x*J+y*K,l[6]=M*B+R*O+x*q+y*ne,l[10]=M*w+R*ee+x*Z+y*oe,l[14]=M*D+R*Y+x*V+y*I,l[3]=b*F+P*ue+C*J+z*K,l[7]=b*B+P*O+C*q+z*ne,l[11]=b*w+P*ee+C*Z+z*oe,l[15]=b*D+P*Y+C*V+z*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],v=e[2],_=e[6],g=e[10],S=e[14],M=e[3],R=e[7],x=e[11],y=e[15],b=h*S-p*g,P=f*S-p*_,C=f*g-h*_,z=c*S-p*v,F=c*g-h*v,B=c*_-f*v;return t*(R*b-x*P+y*C)-r*(M*b-x*z+y*F)+o*(M*P-R*z+y*B)-l*(M*C-R*F+x*B)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8],_=e[9],g=e[10],S=e[11],M=e[12],R=e[13],x=e[14],y=e[15],b=t*f-r*c,P=t*h-o*c,C=t*p-l*c,z=r*h-o*f,F=r*p-l*f,B=o*p-l*h,w=v*R-_*M,D=v*x-g*M,ue=v*y-S*M,O=_*x-g*R,ee=_*y-S*R,Y=g*y-S*x,J=b*Y-P*ee+C*O+z*ue-F*D+B*w;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/J;return e[0]=(f*Y-h*ee+p*O)*q,e[1]=(o*ee-r*Y-l*O)*q,e[2]=(R*B-x*F+y*z)*q,e[3]=(g*F-_*B-S*z)*q,e[4]=(h*ue-c*Y-p*D)*q,e[5]=(t*Y-o*ue+l*D)*q,e[6]=(x*C-M*B-y*P)*q,e[7]=(v*B-g*C+S*P)*q,e[8]=(c*ee-f*ue+p*w)*q,e[9]=(r*ue-t*ee-l*w)*q,e[10]=(M*F-R*C+y*b)*q,e[11]=(_*C-v*F-S*b)*q,e[12]=(f*D-c*O-h*w)*q,e[13]=(t*O-r*D+o*w)*q,e[14]=(R*P-M*z-x*b)*q,e[15]=(v*z-_*P+g*b)*q,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,p=l*c,v=l*f;return this.set(p*c+r,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+r,v*h-o*c,0,p*h-o*f,v*h+o*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,v=c+c,_=f+f,g=l*p,S=l*v,M=l*_,R=c*v,x=c*_,y=f*_,b=h*p,P=h*v,C=h*_,z=r.x,F=r.y,B=r.z;return o[0]=(1-(R+y))*z,o[1]=(S+C)*z,o[2]=(M-P)*z,o[3]=0,o[4]=(S-C)*F,o[5]=(1-(g+y))*F,o[6]=(x+b)*F,o[7]=0,o[8]=(M+P)*B,o[9]=(x-b)*B,o[10]=(1-(g+R))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=Is.set(o[0],o[1],o[2]).length();const f=Is.set(o[4],o[5],o[6]).length(),h=Is.set(o[8],o[9],o[10]).length();l<0&&(c=-c),pi.copy(this);const p=1/c,v=1/f,_=1/h;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=v,pi.elements[5]*=v,pi.elements[6]*=v,pi.elements[8]*=_,pi.elements[9]*=_,pi.elements[10]*=_,t.setFromRotationMatrix(pi),r.x=c,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,c,f=Ri,h=!1){const p=this.elements,v=2*l/(t-e),_=2*l/(r-o),g=(t+e)/(t-e),S=(r+o)/(r-o);let M,R;if(h)M=l/(c-l),R=c*l/(c-l);else if(f===Ri)M=-(c+l)/(c-l),R=-2*c*l/(c-l);else if(f===ia)M=-c/(c-l),R=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=Ri,h=!1){const p=this.elements,v=2/(t-e),_=2/(r-o),g=-(t+e)/(t-e),S=-(r+o)/(r-o);let M,R;if(h)M=1/(c-l),R=c/(c-l);else if(f===Ri)M=-2/(c-l),R=-(c+l)/(c-l);else if(f===ia)M=-1/(c-l),R=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=M,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Is=new X,pi=new Gt,Y_=new X(0,0,0),q_=new X(1,1,1),Er=new X,xl=new X,Hn=new X,Am=new Gt,Cm=new io;class Di{constructor(e=0,t=0,r=0,o=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],p=o[5],v=o[9],_=o[2],g=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Am,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cm.setFromEuler(this),this.setFromQuaternion(Cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class kg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let j_=0;const Rm=new X,Us=new io,Xi=new Gt,yl=new X,Ho=new X,$_=new X,Z_=new io,Pm=new X(1,0,0),bm=new X(0,1,0),Lm=new X(0,0,1),Dm={type:"added"},K_={type:"removed"},Fs={type:"childadded",child:null},Qc={type:"childremoved",child:null};class dn extends to{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new X,t=new Di,r=new io,o=new X(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Gt},normalMatrix:{value:new _t}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Pm,e)}rotateY(e){return this.rotateOnAxis(bm,e)}rotateZ(e){return this.rotateOnAxis(Lm,e)}translateOnAxis(e,t){return Rm.copy(e).applyQuaternion(this.quaternion),this.position.add(Rm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pm,e)}translateY(e){return this.translateOnAxis(bm,e)}translateZ(e){return this.translateOnAxis(Lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?yl.copy(e):yl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Ho,yl,this.up):Xi.lookAt(yl,Ho,this.up),this.quaternion.setFromRotationMatrix(Xi),o&&(Xi.extractRotation(o.matrixWorld),Us.setFromRotationMatrix(Xi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(K_),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,$_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,Z_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),v=c(e.images),_=c(e.shapes),g=c(e.skeletons),S=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}dn.DEFAULT_UP=new X(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zo extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J_={type:"move"};class ef{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const R of e.hand.values()){const x=t.getJointPose(R,r),y=this._getHandJoint(p,R);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=v.position.distanceTo(_.position),S=.02,M=.005;p.inputState.pinching&&g>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(J_)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Zo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function tf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Tt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Rt.workingColorSpace){if(e=z_(e,1),t=St(t,0,1),r=St(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=tf(c,l,e+1/3),this.g=tf(c,l,e),this.b=tf(c,l,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,t=ri){function r(l){l!==void 0&&parseFloat(l)<1&&mt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:mt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ri){const r=Vg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Rt.workingToColorSpace(_n.copy(this),e),Math.round(St(_n.r*255,0,255))*65536+Math.round(St(_n.g*255,0,255))*256+Math.round(St(_n.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(_n.copy(this),t);const r=_n.r,o=_n.g,l=_n.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const v=(f+c)/2;if(f===c)h=0,p=0;else{const _=c-f;switch(p=v<=.5?_/(c+f):_/(2-c-f),c){case r:h=(o-l)/_+(o<l?6:0);break;case o:h=(l-r)/_+2;break;case l:h=(r-o)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=ri){Rt.workingToColorSpace(_n.copy(this),e);const t=_n.r,r=_n.g,o=_n.b;return e!==ri?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(Sl);const r=jc(Tr.h,Sl.h,t),o=jc(Tr.s,Sl.s,t),l=jc(Tr.l,Sl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Tt;Tt.NAMES=Vg;class Q_ extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mi=new X,Yi=new X,nf=new X,qi=new X,Os=new X,Bs=new X,Nm=new X,rf=new X,sf=new X,of=new X,af=new jt,lf=new jt,uf=new jt;class vi{constructor(e=new X,t=new X,r=new X){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),mi.subVectors(e,t),o.cross(mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){mi.subVectors(o,t),Yi.subVectors(r,t),nf.subVectors(e,t);const c=mi.dot(mi),f=mi.dot(Yi),h=mi.dot(nf),p=Yi.dot(Yi),v=Yi.dot(nf),_=c*p-f*f;if(_===0)return l.set(0,0,0),null;const g=1/_,S=(p*h-f*v)*g,M=(c*v-f*h)*g;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,r,o,l,c,f,h){return this.getBarycoord(e,t,r,o,qi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,qi.x),h.addScaledVector(c,qi.y),h.addScaledVector(f,qi.z),h)}static getInterpolatedAttribute(e,t,r,o,l,c){return af.setScalar(0),lf.setScalar(0),uf.setScalar(0),af.fromBufferAttribute(e,t),lf.fromBufferAttribute(e,r),uf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(af,l.x),c.addScaledVector(lf,l.y),c.addScaledVector(uf,l.z),c}static isFrontFacing(e,t,r,o){return mi.subVectors(r,t),Yi.subVectors(e,t),mi.cross(Yi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),mi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return vi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;Os.subVectors(o,r),Bs.subVectors(l,r),rf.subVectors(e,r);const h=Os.dot(rf),p=Bs.dot(rf);if(h<=0&&p<=0)return t.copy(r);sf.subVectors(e,o);const v=Os.dot(sf),_=Bs.dot(sf);if(v>=0&&_<=v)return t.copy(o);const g=h*_-v*p;if(g<=0&&h>=0&&v<=0)return c=h/(h-v),t.copy(r).addScaledVector(Os,c);of.subVectors(e,l);const S=Os.dot(of),M=Bs.dot(of);if(M>=0&&S<=M)return t.copy(l);const R=S*p-h*M;if(R<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(r).addScaledVector(Bs,f);const x=v*M-S*_;if(x<=0&&_-v>=0&&S-M>=0)return Nm.subVectors(l,o),f=(_-v)/(_-v+(S-M)),t.copy(o).addScaledVector(Nm,f);const y=1/(x+R+g);return c=R*y,f=g*y,t.copy(r).addScaledVector(Os,c).addScaledVector(Bs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class la{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,gi):gi.fromBufferAttribute(l,c),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ml.copy(r.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),El.subVectors(this.max,Go),zs.subVectors(e.a,Go),ks.subVectors(e.b,Go),Vs.subVectors(e.c,Go),wr.subVectors(ks,zs),Ar.subVectors(Vs,ks),jr.subVectors(zs,Vs);let t=[0,-wr.z,wr.y,0,-Ar.z,Ar.y,0,-jr.z,jr.y,wr.z,0,-wr.x,Ar.z,0,-Ar.x,jr.z,0,-jr.x,-wr.y,wr.x,0,-Ar.y,Ar.x,0,-jr.y,jr.x,0];return!cf(t,zs,ks,Vs,El)||(t=[1,0,0,0,1,0,0,0,1],!cf(t,zs,ks,Vs,El))?!1:(Tl.crossVectors(wr,Ar),t=[Tl.x,Tl.y,Tl.z],cf(t,zs,ks,Vs,El))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new X,new X,new X,new X,new X,new X,new X,new X],gi=new X,Ml=new la,zs=new X,ks=new X,Vs=new X,wr=new X,Ar=new X,jr=new X,Go=new X,El=new X,Tl=new X,$r=new X;function cf(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){$r.fromArray(s,l);const f=o.x*Math.abs($r.x)+o.y*Math.abs($r.y)+o.z*Math.abs($r.z),h=e.dot($r),p=t.dot($r),v=r.dot($r);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const Qt=new X,wl=new Be;let ex=0;class si{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ex++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=xm,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Vo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vo(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vo(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vo(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),r=In(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),r=In(r,this.array),o=In(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),r=In(r,this.array),o=In(o,this.array),l=In(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xm&&(e.usage=this.usage),e}}class Hg extends si{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Gg extends si{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Fn extends si{constructor(e,t,r){super(new Float32Array(e),t,r)}}const tx=new la,Wo=new X,ff=new X;class iu{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):tx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const t=Wo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Wo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ff.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(ff)),this.expandByPoint(Wo.copy(e.center).sub(ff))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let nx=0;const ii=new Gt,df=new dn,Hs=new X,Gn=new la,Xo=new la,ln=new X;class qn extends to{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U_(e)?Gg:Hg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new _t().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,r){return ii.makeTranslation(e,t,r),this.applyMatrix4(ii),this}scale(e,t,r){return ii.makeScale(e,t,r),this.applyMatrix4(ii),this}lookAt(e){return df.lookAt(e),df.updateMatrix(),this.applyMatrix4(df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Fn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new la);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new iu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Xo.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Gn.min,Xo.min),Gn.expandByPoint(ln),ln.addVectors(Gn.max,Xo.max),Gn.expandByPoint(ln)):(Gn.expandByPoint(Xo.min),Gn.expandByPoint(Xo.max))}Gn.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)ln.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(ln));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)ln.fromBufferAttribute(f,p),h&&(Hs.fromBufferAttribute(e,p),ln.add(Hs)),o=Math.max(o,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let w=0;w<r.count;w++)f[w]=new X,h[w]=new X;const p=new X,v=new X,_=new X,g=new Be,S=new Be,M=new Be,R=new X,x=new X;function y(w,D,ue){p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,D),_.fromBufferAttribute(r,ue),g.fromBufferAttribute(l,w),S.fromBufferAttribute(l,D),M.fromBufferAttribute(l,ue),v.sub(p),_.sub(p),S.sub(g),M.sub(g);const O=1/(S.x*M.y-M.x*S.y);isFinite(O)&&(R.copy(v).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(O),x.copy(_).multiplyScalar(S.x).addScaledVector(v,-M.x).multiplyScalar(O),f[w].add(R),f[D].add(R),f[ue].add(R),h[w].add(x),h[D].add(x),h[ue].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let w=0,D=b.length;w<D;++w){const ue=b[w],O=ue.start,ee=ue.count;for(let Y=O,J=O+ee;Y<J;Y+=3)y(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const P=new X,C=new X,z=new X,F=new X;function B(w){z.fromBufferAttribute(o,w),F.copy(z);const D=f[w];P.copy(D),P.sub(z.multiplyScalar(z.dot(D))).normalize(),C.crossVectors(F,D);const O=C.dot(h[w])<0?-1:1;c.setXYZW(w,P.x,P.y,P.z,O)}for(let w=0,D=b.length;w<D;++w){const ue=b[w],O=ue.start,ee=ue.count;for(let Y=O,J=O+ee;Y<J;Y+=3)B(e.getX(Y+0)),B(e.getX(Y+1)),B(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new X,l=new X,c=new X,f=new X,h=new X,p=new X,v=new X,_=new X;if(e)for(let g=0,S=e.count;g<S;g+=3){const M=e.getX(g+0),R=e.getX(g+1),x=e.getX(g+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,R),c.fromBufferAttribute(t,x),v.subVectors(c,l),_.subVectors(o,l),v.cross(_),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,R),p.fromBufferAttribute(r,x),f.add(v),h.add(v),p.add(v),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let g=0,S=t.count;g<S;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),v.subVectors(c,l),_.subVectors(o,l),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,_=f.normalized,g=new p.constructor(h.length*v);let S=0,M=0;for(let R=0,x=h.length;R<x;R++){f.isInterleavedBufferAttribute?S=h[R]*f.data.stride+f.offset:S=h[R]*v;for(let y=0;y<v;y++)g[M++]=p[S++]}return new si(g,v,_)}if(this.index===null)return mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,_=p.length;v<_;v++){const g=p[v],S=e(g,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let _=0,g=p.length;_<g;_++){const S=p[_];v.push(S.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],_=l[p];for(let g=0,S=_.length;g<S;g++)v.push(_[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,v=c.length;p<v;p++){const _=c[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ix=0;class ro extends to{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=no(),this.name="",this.type="Material",this.blending=qs,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rf,this.blendDst=Pf,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){mt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){mt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(r.blending=this.blending),this.side!==Dr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Rf&&(r.blendSrc=this.blendSrc),this.blendDst!==Pf&&(r.blendDst=this.blendDst),this.blendEquation!==ns&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_m&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $i=new X,hf=new X,Al=new X,Cr=new X,pf=new X,Cl=new X,mf=new X;class Wg{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){hf.copy(e).add(t).multiplyScalar(.5),Al.copy(t).sub(e).normalize(),Cr.copy(this.origin).sub(hf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Al),f=Cr.dot(this.direction),h=-Cr.dot(Al),p=Cr.lengthSq(),v=Math.abs(1-c*c);let _,g,S,M;if(v>0)if(_=c*h-f,g=c*f-h,M=l*v,_>=0)if(g>=-M)if(g<=M){const R=1/v;_*=R,g*=R,S=_*(_+c*g+2*f)+g*(c*_+g+2*h)+p}else g=l,_=Math.max(0,-(c*g+f)),S=-_*_+g*(g+2*h)+p;else g=-l,_=Math.max(0,-(c*g+f)),S=-_*_+g*(g+2*h)+p;else g<=-M?(_=Math.max(0,-(-c*l+f)),g=_>0?-l:Math.min(Math.max(-l,-h),l),S=-_*_+g*(g+2*h)+p):g<=M?(_=0,g=Math.min(Math.max(-l,-h),l),S=g*(g+2*h)+p):(_=Math.max(0,-(c*l+f)),g=_>0?l:Math.min(Math.max(-l,-h),l),S=-_*_+g*(g+2*h)+p);else g=c>0?-l:l,_=Math.max(0,-(c*g+f)),S=-_*_+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(hf).addScaledVector(Al,g),S}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),o=$i.dot($i)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,h;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,c=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,c=(e.min.y-g.y)*v),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),_>=0?(f=(e.min.z-g.z)*_,h=(e.max.z-g.z)*_):(f=(e.max.z-g.z)*_,h=(e.min.z-g.z)*_),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,r,o,l){pf.subVectors(t,e),Cl.subVectors(r,e),mf.crossVectors(pf,Cl);let c=this.direction.dot(mf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Cr.subVectors(this.origin,e);const h=f*this.direction.dot(Cl.crossVectors(Cr,Cl));if(h<0)return null;const p=f*this.direction.dot(pf.cross(Cr));if(p<0||h+p>c)return null;const v=-f*Cr.dot(mf);return v<0?null:this.at(v/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xg extends ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Sg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Im=new Gt,Zr=new Wg,Rl=new iu,Um=new X,Pl=new X,bl=new X,Ll=new X,gf=new X,Dl=new X,Fm=new X,Nl=new X;class oi extends dn{constructor(e=new qn,t=new Xg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Dl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],_=l[h];v!==0&&(gf.fromBufferAttribute(_,e),c?Dl.addScaledVector(gf,v):Dl.addScaledVector(gf.sub(t),v))}t.add(Dl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(l),Zr.copy(e.ray).recast(e.near),!(Rl.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(Rl,Um)===null||Zr.origin.distanceToSquared(Um)>(e.far-e.near)**2))&&(Im.copy(l).invert(),Zr.copy(e.ray).applyMatrix4(Im),!(r.boundingBox!==null&&Zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,g=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,R=g.length;M<R;M++){const x=g[M],y=c[x.materialIndex],b=Math.max(x.start,S.start),P=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let C=b,z=P;C<z;C+=3){const F=f.getX(C),B=f.getX(C+1),w=f.getX(C+2);o=Il(this,y,e,r,p,v,_,F,B,w),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),R=Math.min(f.count,S.start+S.count);for(let x=M,y=R;x<y;x+=3){const b=f.getX(x),P=f.getX(x+1),C=f.getX(x+2);o=Il(this,c,e,r,p,v,_,b,P,C),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,R=g.length;M<R;M++){const x=g[M],y=c[x.materialIndex],b=Math.max(x.start,S.start),P=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let C=b,z=P;C<z;C+=3){const F=C,B=C+1,w=C+2;o=Il(this,y,e,r,p,v,_,F,B,w),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),R=Math.min(h.count,S.start+S.count);for(let x=M,y=R;x<y;x+=3){const b=x,P=x+1,C=x+2;o=Il(this,c,e,r,p,v,_,b,P,C),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function rx(s,e,t,r,o,l,c,f){let h;if(e.side===Un?h=r.intersectTriangle(c,l,o,!0,f):h=r.intersectTriangle(o,l,c,e.side===Dr,f),h===null)return null;Nl.copy(f),Nl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Nl);return p<t.near||p>t.far?null:{distance:p,point:Nl.clone(),object:s}}function Il(s,e,t,r,o,l,c,f,h,p){s.getVertexPosition(f,Pl),s.getVertexPosition(h,bl),s.getVertexPosition(p,Ll);const v=rx(s,e,t,r,Pl,bl,Ll,Fm);if(v){const _=new X;vi.getBarycoord(Fm,Pl,bl,Ll,_),o&&(v.uv=vi.getInterpolatedAttribute(o,f,h,p,_,new Be)),l&&(v.uv1=vi.getInterpolatedAttribute(l,f,h,p,_,new Be)),c&&(v.normal=vi.getInterpolatedAttribute(c,f,h,p,_,new X),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new X,materialIndex:0};vi.getNormal(Pl,bl,Ll,g.normal),v.face=g,v.barycoord=_}return v}class sx extends wn{constructor(e=null,t=1,r=1,o,l,c,f,h,p=fn,v=fn,_,g){super(null,c,f,h,p,v,o,l,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vf=new X,ox=new X,ax=new _t;class es{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=vf.subVectors(r,t).cross(ox.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(vf),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||ax.getNormalMatrix(e),o=this.coplanarPoint(vf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new iu,lx=new Be(.5,.5),Ul=new X;class Id{constructor(e=new es,t=new es,r=new es,o=new es,l=new es,c=new es){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ri,r=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],p=l[3],v=l[4],_=l[5],g=l[6],S=l[7],M=l[8],R=l[9],x=l[10],y=l[11],b=l[12],P=l[13],C=l[14],z=l[15];if(o[0].setComponents(p-c,S-v,y-M,z-b).normalize(),o[1].setComponents(p+c,S+v,y+M,z+b).normalize(),o[2].setComponents(p+f,S+_,y+R,z+P).normalize(),o[3].setComponents(p-f,S-_,y-R,z-P).normalize(),r)o[4].setComponents(h,g,x,C).normalize(),o[5].setComponents(p-h,S-g,y-x,z-C).normalize();else if(o[4].setComponents(p-h,S-g,y-x,z-C).normalize(),t===Ri)o[5].setComponents(p+h,S+g,y+x,z+C).normalize();else if(t===ia)o[5].setComponents(h,g,x,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const t=lx.distanceTo(e.center);return Kr.radius=.7071067811865476+t,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ul.x=o.normal.x>0?e.max.x:e.min.x,Ul.y=o.normal.y>0?e.max.y:e.min.y,Ul.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yg extends ro{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Om=new Gt,_d=new Wg,Fl=new iu,Ol=new X;class ux extends dn{constructor(e=new qn,t=new Yg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Fl.copy(r.boundingSphere),Fl.applyMatrix4(o),Fl.radius+=l,e.ray.intersectsSphere(Fl)===!1)return;Om.copy(o).invert(),_d.copy(e.ray).applyMatrix4(Om);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=r.index,_=r.attributes.position;if(p!==null){const g=Math.max(0,c.start),S=Math.min(p.count,c.start+c.count);for(let M=g,R=S;M<R;M++){const x=p.getX(M);Ol.fromBufferAttribute(_,x),Bm(Ol,x,h,o,e,t,this)}}else{const g=Math.max(0,c.start),S=Math.min(_.count,c.start+c.count);for(let M=g,R=S;M<R;M++)Ol.fromBufferAttribute(_,M),Bm(Ol,M,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Bm(s,e,t,r,o,l,c){const f=_d.distanceSqToPoint(s);if(f<t){const h=new X;_d.closestPointToPoint(s,h),h.applyMatrix4(r);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class qg extends wn{constructor(e=[],t=os,r,o,l,c,f,h,p,v){super(e,t,r,o,l,c,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ra extends wn{constructor(e,t,r=Li,o,l,c,f=fn,h=fn,p,v=tr,_=1){if(v!==tr&&v!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,o,l,c,f,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Nd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cx extends ra{constructor(e,t=Li,r=os,o,l,c=fn,f=fn,h,p=tr){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,t,r,o,l,c,f,h,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jg extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ua extends qn{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],v=[],_=[];let g=0,S=0;M("z","y","x",-1,-1,r,t,e,c,l,0),M("z","y","x",1,-1,r,t,-e,c,l,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Fn(p,3)),this.setAttribute("normal",new Fn(v,3)),this.setAttribute("uv",new Fn(_,2));function M(R,x,y,b,P,C,z,F,B,w,D){const ue=C/B,O=z/w,ee=C/2,Y=z/2,J=F/2,q=B+1,Z=w+1;let V=0,K=0;const ne=new X;for(let oe=0;oe<Z;oe++){const I=oe*O-Y;for(let j=0;j<q;j++){const ve=j*ue-ee;ne[R]=ve*b,ne[x]=I*P,ne[y]=J,p.push(ne.x,ne.y,ne.z),ne[R]=0,ne[x]=0,ne[y]=F>0?1:-1,v.push(ne.x,ne.y,ne.z),_.push(j/B),_.push(1-oe/w),V+=1}}for(let oe=0;oe<w;oe++)for(let I=0;I<B;I++){const j=g+I+q*oe,ve=g+I+q*(oe+1),Oe=g+(I+1)+q*(oe+1),Ye=g+(I+1)+q*oe;h.push(j,ve,Ye),h.push(ve,Oe,Ye),K+=6}f.addGroup(S,K,D),S+=K,g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ii{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){mt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=r[o]-c,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===c)return o/(l-1);const v=r[o],g=r[o+1]-v,S=(c-v)/g;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),h=t||(c.isVector2?new Be:new X);return h.copy(f).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new X,o=[],l=[],c=[],f=new X,h=new Gt;for(let S=0;S<=e;S++){const M=S/e;o[S]=this.getTangentAt(M,new X)}l[0]=new X,c[0]=new X;let p=Number.MAX_VALUE;const v=Math.abs(o[0].x),_=Math.abs(o[0].y),g=Math.abs(o[0].z);v<=p&&(p=v,r.set(1,0,0)),_<=p&&(p=_,r.set(0,1,0)),g<=p&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),c[S]=c[S-1].clone(),f.crossVectors(o[S-1],o[S]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(St(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(f,M))}c[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(St(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(h.makeRotationAxis(o[M],S*M)),c[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ud extends Ii{constructor(e=0,t=0,r=1,o=1,l=0,c=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Be){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(c?l=0:l=o),this.aClockwise===!0&&!c&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),_=Math.sin(this.aRotation),g=h-this.aX,S=p-this.aY;h=g*v-S*_+this.aX,p=g*_+S*v+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class fx extends Ud{constructor(e,t,r,o,l,c){super(e,t,r,r,o,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Fd(){let s=0,e=0,t=0,r=0;function o(l,c,f,h){s=l,e=f,t=-3*l+3*c-2*f-h,r=2*l-2*c+f+h}return{initCatmullRom:function(l,c,f,h,p){o(c,f,p*(f-l),p*(h-c))},initNonuniformCatmullRom:function(l,c,f,h,p,v,_){let g=(c-l)/p-(f-l)/(p+v)+(f-c)/v,S=(f-c)/v-(h-c)/(v+_)+(h-f)/_;g*=v,S*=v,o(c,f,g,S)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const Bl=new X,_f=new Fd,xf=new Fd,yf=new Fd;class dx extends Ii{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new X){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),h=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,v;this.closed||f>0?p=o[(f-1)%l]:(Bl.subVectors(o[0],o[1]).add(o[0]),p=Bl);const _=o[f%l],g=o[(f+1)%l];if(this.closed||f+2<l?v=o[(f+2)%l]:(Bl.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=Bl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(_),S),R=Math.pow(_.distanceToSquared(g),S),x=Math.pow(g.distanceToSquared(v),S);R<1e-4&&(R=1),M<1e-4&&(M=R),x<1e-4&&(x=R),_f.initNonuniformCatmullRom(p.x,_.x,g.x,v.x,M,R,x),xf.initNonuniformCatmullRom(p.y,_.y,g.y,v.y,M,R,x),yf.initNonuniformCatmullRom(p.z,_.z,g.z,v.z,M,R,x)}else this.curveType==="catmullrom"&&(_f.initCatmullRom(p.x,_.x,g.x,v.x,this.tension),xf.initCatmullRom(p.y,_.y,g.y,v.y,this.tension),yf.initCatmullRom(p.z,_.z,g.z,v.z,this.tension));return r.set(_f.calc(h),xf.calc(h),yf.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new X().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function zm(s,e,t,r,o){const l=(r-e)*.5,c=(o-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+c)*h+(-3*t+3*r-2*l-c)*f+l*s+t}function hx(s,e){const t=1-s;return t*t*e}function px(s,e){return 2*(1-s)*s*e}function mx(s,e){return s*s*e}function Qo(s,e,t,r){return hx(s,e)+px(s,t)+mx(s,r)}function gx(s,e){const t=1-s;return t*t*t*e}function vx(s,e){const t=1-s;return 3*t*t*s*e}function _x(s,e){return 3*(1-s)*s*s*e}function xx(s,e){return s*s*s*e}function ea(s,e,t,r,o){return gx(s,e)+vx(s,t)+_x(s,r)+xx(s,o)}class $g extends Ii{constructor(e=new Be,t=new Be,r=new Be,o=new Be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Be){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(ea(e,o.x,l.x,c.x,f.x),ea(e,o.y,l.y,c.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class yx extends Ii{constructor(e=new X,t=new X,r=new X,o=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new X){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(ea(e,o.x,l.x,c.x,f.x),ea(e,o.y,l.y,c.y,f.y),ea(e,o.z,l.z,c.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Zg extends Ii{constructor(e=new Be,t=new Be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Be){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sx extends Ii{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kg extends Ii{constructor(e=new Be,t=new Be,r=new Be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Be){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(Qo(e,o.x,l.x,c.x),Qo(e,o.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Od extends Ii{constructor(e=new X,t=new X,r=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new X){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(Qo(e,o.x,l.x,c.x),Qo(e,o.y,l.y,c.y),Qo(e,o.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Jg extends Ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Be){const r=t,o=this.points,l=(o.length-1)*e,c=Math.floor(l),f=l-c,h=o[c===0?c:c-1],p=o[c],v=o[c>o.length-2?o.length-1:c+1],_=o[c>o.length-3?o.length-1:c+2];return r.set(zm(f,h.x,p.x,v.x,_.x),zm(f,h.y,p.y,v.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Be().fromArray(o))}return this}}var eu=Object.freeze({__proto__:null,ArcCurve:fx,CatmullRomCurve3:dx,CubicBezierCurve:$g,CubicBezierCurve3:yx,EllipseCurve:Ud,LineCurve:Zg,LineCurve3:Sx,QuadraticBezierCurve:Kg,QuadraticBezierCurve3:Od,SplineCurve:Jg});class Mx extends Ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eu[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const c=o[l]-r,f=this.curves[l],h=f.getLength(),p=h===0?0:1-c/h;return f.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const c=l[o],f=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(f);for(let p=0;p<h.length;p++){const v=h[p];r&&r.equals(v)||(t.push(v),r=v)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new eu[o.type]().fromJSON(o))}return this}}class km extends Mx{constructor(e){super(),this.type="Path",this.currentPoint=new Be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new Zg(this.currentPoint.clone(),new Be(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new Kg(this.currentPoint.clone(),new Be(e,t),new Be(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,c){const f=new $g(this.currentPoint.clone(),new Be(e,t),new Be(r,o),new Be(l,c));return this.curves.push(f),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new Jg(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,c){const f=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+f,t+h,r,o,l,c),this}absarc(e,t,r,o,l,c){return this.absellipse(e,t,r,r,o,l,c),this}ellipse(e,t,r,o,l,c,f,h){const p=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(e+p,t+v,r,o,l,c,f,h),this}absellipse(e,t,r,o,l,c,f,h){const p=new Ud(e,t,r,o,l,c,f,h);if(this.curves.length>0){const _=p.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(p);const v=p.getPoint(1);return this.currentPoint.copy(v),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Qg extends km{constructor(e){super(e),this.uuid=no(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new km().fromJSON(o))}return this}}function Ex(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=e0(s,0,o,t,!0);const c=[];if(!l||l.next===l.prev)return c;let f,h,p;if(r&&(l=Rx(s,e,l,t)),s.length>80*t){f=s[0],h=s[1];let v=f,_=h;for(let g=t;g<o;g+=t){const S=s[g],M=s[g+1];S<f&&(f=S),M<h&&(h=M),S>v&&(v=S),M>_&&(_=M)}p=Math.max(v-f,_-h),p=p!==0?32767/p:0}return sa(l,c,t,f,h,p,0),c}function e0(s,e,t,r,o){let l;if(o===zx(s,e,t,r)>0)for(let c=e;c<t;c+=r)l=Vm(c/r|0,s[c],s[c+1],l);else for(let c=t-r;c>=e;c-=r)l=Vm(c/r|0,s[c],s[c+1],l);return l&&Qs(l,l.next)&&(aa(l),l=l.next),l}function as(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(Qs(t,t.next)||Yt(t.prev,t,t.next)===0)){if(aa(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function sa(s,e,t,r,o,l,c){if(!s)return;!c&&l&&Nx(s,r,o,l);let f=s;for(;s.prev!==s.next;){const h=s.prev,p=s.next;if(l?wx(s,r,o,l):Tx(s)){e.push(h.i,s.i,p.i),aa(s),s=p.next,f=p.next;continue}if(s=p,s===f){c?c===1?(s=Ax(as(s),e),sa(s,e,t,r,o,l,2)):c===2&&Cx(s,e,t,r,o,l):sa(as(s),e,t,r,o,l,1);break}}}function Tx(s){const e=s.prev,t=s,r=s.next;if(Yt(e,t,r)>=0)return!1;const o=e.x,l=t.x,c=r.x,f=e.y,h=t.y,p=r.y,v=Math.min(o,l,c),_=Math.min(f,h,p),g=Math.max(o,l,c),S=Math.max(f,h,p);let M=r.next;for(;M!==e;){if(M.x>=v&&M.x<=g&&M.y>=_&&M.y<=S&&Ko(o,f,l,h,c,p,M.x,M.y)&&Yt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function wx(s,e,t,r){const o=s.prev,l=s,c=s.next;if(Yt(o,l,c)>=0)return!1;const f=o.x,h=l.x,p=c.x,v=o.y,_=l.y,g=c.y,S=Math.min(f,h,p),M=Math.min(v,_,g),R=Math.max(f,h,p),x=Math.max(v,_,g),y=xd(S,M,e,t,r),b=xd(R,x,e,t,r);let P=s.prevZ,C=s.nextZ;for(;P&&P.z>=y&&C&&C.z<=b;){if(P.x>=S&&P.x<=R&&P.y>=M&&P.y<=x&&P!==o&&P!==c&&Ko(f,v,h,_,p,g,P.x,P.y)&&Yt(P.prev,P,P.next)>=0||(P=P.prevZ,C.x>=S&&C.x<=R&&C.y>=M&&C.y<=x&&C!==o&&C!==c&&Ko(f,v,h,_,p,g,C.x,C.y)&&Yt(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;P&&P.z>=y;){if(P.x>=S&&P.x<=R&&P.y>=M&&P.y<=x&&P!==o&&P!==c&&Ko(f,v,h,_,p,g,P.x,P.y)&&Yt(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;C&&C.z<=b;){if(C.x>=S&&C.x<=R&&C.y>=M&&C.y<=x&&C!==o&&C!==c&&Ko(f,v,h,_,p,g,C.x,C.y)&&Yt(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function Ax(s,e){let t=s;do{const r=t.prev,o=t.next.next;!Qs(r,o)&&n0(r,t,t.next,o)&&oa(r,o)&&oa(o,r)&&(e.push(r.i,t.i,o.i),aa(t),aa(t.next),t=s=o),t=t.next}while(t!==s);return as(t)}function Cx(s,e,t,r,o,l){let c=s;do{let f=c.next.next;for(;f!==c.prev;){if(c.i!==f.i&&Fx(c,f)){let h=i0(c,f);c=as(c,c.next),h=as(h,h.next),sa(c,e,t,r,o,l,0),sa(h,e,t,r,o,l,0);return}f=f.next}c=c.next}while(c!==s)}function Rx(s,e,t,r){const o=[];for(let l=0,c=e.length;l<c;l++){const f=e[l]*r,h=l<c-1?e[l+1]*r:s.length,p=e0(s,f,h,r,!1);p===p.next&&(p.steiner=!0),o.push(Ux(p))}o.sort(Px);for(let l=0;l<o.length;l++)t=bx(o[l],t);return t}function Px(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const r=(s.next.y-s.y)/(s.next.x-s.x),o=(e.next.y-e.y)/(e.next.x-e.x);t=r-o}return t}function bx(s,e){const t=Lx(s,e);if(!t)return e;const r=i0(t,s);return as(r,r.next),as(t,t.next)}function Lx(s,e){let t=e;const r=s.x,o=s.y;let l=-1/0,c;if(Qs(s,t))return t;do{if(Qs(s,t.next))return t.next;if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const _=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(_<=r&&_>l&&(l=_,c=t.x<t.next.x?t:t.next,_===r))return c}t=t.next}while(t!==e);if(!c)return null;const f=c,h=c.x,p=c.y;let v=1/0;t=c;do{if(r>=t.x&&t.x>=h&&r!==t.x&&t0(o<p?r:l,o,h,p,o<p?l:r,o,t.x,t.y)){const _=Math.abs(o-t.y)/(r-t.x);oa(t,s)&&(_<v||_===v&&(t.x>c.x||t.x===c.x&&Dx(c,t)))&&(c=t,v=_)}t=t.next}while(t!==f);return c}function Dx(s,e){return Yt(s.prev,s,e.prev)<0&&Yt(e.next,s,s.next)<0}function Nx(s,e,t,r){let o=s;do o.z===0&&(o.z=xd(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,Ix(o)}function Ix(s){let e,t=1;do{let r=s,o;s=null;let l=null;for(e=0;r;){e++;let c=r,f=0;for(let p=0;p<t&&(f++,c=c.nextZ,!!c);p++);let h=t;for(;f>0||h>0&&c;)f!==0&&(h===0||!c||r.z<=c.z)?(o=r,r=r.nextZ,f--):(o=c,c=c.nextZ,h--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;r=c}l.nextZ=null,t*=2}while(e>1);return s}function xd(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Ux(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function t0(s,e,t,r,o,l,c,f){return(o-c)*(e-f)>=(s-c)*(l-f)&&(s-c)*(r-f)>=(t-c)*(e-f)&&(t-c)*(l-f)>=(o-c)*(r-f)}function Ko(s,e,t,r,o,l,c,f){return!(s===c&&e===f)&&t0(s,e,t,r,o,l,c,f)}function Fx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Ox(s,e)&&(oa(s,e)&&oa(e,s)&&Bx(s,e)&&(Yt(s.prev,s,e.prev)||Yt(s,e.prev,e))||Qs(s,e)&&Yt(s.prev,s,s.next)>0&&Yt(e.prev,e,e.next)>0)}function Yt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Qs(s,e){return s.x===e.x&&s.y===e.y}function n0(s,e,t,r){const o=kl(Yt(s,e,t)),l=kl(Yt(s,e,r)),c=kl(Yt(t,r,s)),f=kl(Yt(t,r,e));return!!(o!==l&&c!==f||o===0&&zl(s,t,e)||l===0&&zl(s,r,e)||c===0&&zl(t,s,r)||f===0&&zl(t,e,r))}function zl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function kl(s){return s>0?1:s<0?-1:0}function Ox(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&n0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function oa(s,e){return Yt(s.prev,s,s.next)<0?Yt(s,e,s.next)>=0&&Yt(s,s.prev,e)>=0:Yt(s,e,s.prev)<0||Yt(s,s.next,e)<0}function Bx(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function i0(s,e){const t=yd(s.i,s.x,s.y),r=yd(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function Vm(s,e,t,r){const o=yd(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function aa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function yd(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zx(s,e,t,r){let o=0;for(let l=e,c=t-r;l<t;l+=r)o+=(s[c]-s[l])*(s[l+1]+s[c+1]),c=l;return o}class kx{static triangulate(e,t,r=2){return Ex(e,t,r)}}class Ys{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return Ys.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];Hm(e),Gm(r,e);let c=e.length;t.forEach(Hm);for(let h=0;h<t.length;h++)o.push(c),c+=t[h].length,Gm(r,t[h]);const f=kx.triangulate(r,o);for(let h=0;h<f.length;h+=3)l.push(f.slice(h,h+3));return l}}function Hm(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Gm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class tu extends qn{constructor(e=new Qg([new Be(.5,.5),new Be(-.5,.5),new Be(-.5,-.5),new Be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,o=[],l=[];for(let f=0,h=e.length;f<h;f++){const p=e[f];c(p)}this.setAttribute("position",new Fn(o,3)),this.setAttribute("uv",new Fn(l,2)),this.computeVertexNormals();function c(f){const h=[],p=t.curveSegments!==void 0?t.curveSegments:12,v=t.steps!==void 0?t.steps:1,_=t.depth!==void 0?t.depth:1;let g=t.bevelEnabled!==void 0?t.bevelEnabled:!0,S=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:S-.1,R=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Vx;let P,C=!1,z,F,B,w;if(y){P=y.getSpacedPoints(v),C=!0,g=!1;const ge=y.isCatmullRomCurve3?y.closed:!1;z=y.computeFrenetFrames(v,ge),F=new X,B=new X,w=new X}g||(x=0,S=0,M=0,R=0);const D=f.extractPoints(p);let ue=D.shape;const O=D.holes;if(!Ys.isClockWise(ue)){ue=ue.reverse();for(let ge=0,Me=O.length;ge<Me;ge++){const _e=O[ge];Ys.isClockWise(_e)&&(O[ge]=_e.reverse())}}function Y(ge){const _e=10000000000000001e-36;let De=ge[0];for(let N=1;N<=ge.length;N++){const st=N%ge.length,Ie=ge[st],it=Ie.x-De.x,Pe=Ie.y-De.y,L=it*it+Pe*Pe,E=Math.max(Math.abs(Ie.x),Math.abs(Ie.y),Math.abs(De.x),Math.abs(De.y)),G=_e*E*E;if(L<=G){ge.splice(st,1),N--;continue}De=Ie}}Y(ue),O.forEach(Y);const J=O.length,q=ue;for(let ge=0;ge<J;ge++){const Me=O[ge];ue=ue.concat(Me)}function Z(ge,Me,_e){return Me||Ct("ExtrudeGeometry: vec does not exist"),ge.clone().addScaledVector(Me,_e)}const V=ue.length;function K(ge,Me,_e){let De,N,st;const Ie=ge.x-Me.x,it=ge.y-Me.y,Pe=_e.x-ge.x,L=_e.y-ge.y,E=Ie*Ie+it*it,G=Ie*L-it*Pe;if(Math.abs(G)>Number.EPSILON){const ce=Math.sqrt(E),me=Math.sqrt(Pe*Pe+L*L),fe=Me.x-it/ce,Xe=Me.y+Ie/ce,Ae=_e.x-L/me,Je=_e.y+Pe/me,at=((Ae-fe)*L-(Je-Xe)*Pe)/(Ie*L-it*Pe);De=fe+Ie*at-ge.x,N=Xe+it*at-ge.y;const Se=De*De+N*N;if(Se<=2)return new Be(De,N);st=Math.sqrt(Se/2)}else{let ce=!1;Ie>Number.EPSILON?Pe>Number.EPSILON&&(ce=!0):Ie<-Number.EPSILON?Pe<-Number.EPSILON&&(ce=!0):Math.sign(it)===Math.sign(L)&&(ce=!0),ce?(De=-it,N=Ie,st=Math.sqrt(E)):(De=Ie,N=it,st=Math.sqrt(E/2))}return new Be(De/st,N/st)}const ne=[];for(let ge=0,Me=q.length,_e=Me-1,De=ge+1;ge<Me;ge++,_e++,De++)_e===Me&&(_e=0),De===Me&&(De=0),ne[ge]=K(q[ge],q[_e],q[De]);const oe=[];let I,j=ne.concat();for(let ge=0,Me=J;ge<Me;ge++){const _e=O[ge];I=[];for(let De=0,N=_e.length,st=N-1,Ie=De+1;De<N;De++,st++,Ie++)st===N&&(st=0),Ie===N&&(Ie=0),I[De]=K(_e[De],_e[st],_e[Ie]);oe.push(I),j=j.concat(I)}let ve;if(x===0)ve=Ys.triangulateShape(q,O);else{const ge=[],Me=[];for(let _e=0;_e<x;_e++){const De=_e/x,N=S*Math.cos(De*Math.PI/2),st=M*Math.sin(De*Math.PI/2)+R;for(let Ie=0,it=q.length;Ie<it;Ie++){const Pe=Z(q[Ie],ne[Ie],st);Le(Pe.x,Pe.y,-N),De===0&&ge.push(Pe)}for(let Ie=0,it=J;Ie<it;Ie++){const Pe=O[Ie];I=oe[Ie];const L=[];for(let E=0,G=Pe.length;E<G;E++){const ce=Z(Pe[E],I[E],st);Le(ce.x,ce.y,-N),De===0&&L.push(ce)}De===0&&Me.push(L)}}ve=Ys.triangulateShape(ge,Me)}const Oe=ve.length,Ye=M+R;for(let ge=0;ge<V;ge++){const Me=g?Z(ue[ge],j[ge],Ye):ue[ge];C?(B.copy(z.normals[0]).multiplyScalar(Me.x),F.copy(z.binormals[0]).multiplyScalar(Me.y),w.copy(P[0]).add(B).add(F),Le(w.x,w.y,w.z)):Le(Me.x,Me.y,0)}for(let ge=1;ge<=v;ge++)for(let Me=0;Me<V;Me++){const _e=g?Z(ue[Me],j[Me],Ye):ue[Me];C?(B.copy(z.normals[ge]).multiplyScalar(_e.x),F.copy(z.binormals[ge]).multiplyScalar(_e.y),w.copy(P[ge]).add(B).add(F),Le(w.x,w.y,w.z)):Le(_e.x,_e.y,_/v*ge)}for(let ge=x-1;ge>=0;ge--){const Me=ge/x,_e=S*Math.cos(Me*Math.PI/2),De=M*Math.sin(Me*Math.PI/2)+R;for(let N=0,st=q.length;N<st;N++){const Ie=Z(q[N],ne[N],De);Le(Ie.x,Ie.y,_+_e)}for(let N=0,st=O.length;N<st;N++){const Ie=O[N];I=oe[N];for(let it=0,Pe=Ie.length;it<Pe;it++){const L=Z(Ie[it],I[it],De);C?Le(L.x,L.y+P[v-1].y,P[v-1].x+_e):Le(L.x,L.y,_+_e)}}}ie(),he();function ie(){const ge=o.length/3;if(g){let Me=0,_e=V*Me;for(let De=0;De<Oe;De++){const N=ve[De];We(N[2]+_e,N[1]+_e,N[0]+_e)}Me=v+x*2,_e=V*Me;for(let De=0;De<Oe;De++){const N=ve[De];We(N[0]+_e,N[1]+_e,N[2]+_e)}}else{for(let Me=0;Me<Oe;Me++){const _e=ve[Me];We(_e[2],_e[1],_e[0])}for(let Me=0;Me<Oe;Me++){const _e=ve[Me];We(_e[0]+V*v,_e[1]+V*v,_e[2]+V*v)}}r.addGroup(ge,o.length/3-ge,0)}function he(){const ge=o.length/3;let Me=0;pe(q,Me),Me+=q.length;for(let _e=0,De=O.length;_e<De;_e++){const N=O[_e];pe(N,Me),Me+=N.length}r.addGroup(ge,o.length/3-ge,1)}function pe(ge,Me){let _e=ge.length;for(;--_e>=0;){const De=_e;let N=_e-1;N<0&&(N=ge.length-1);for(let st=0,Ie=v+x*2;st<Ie;st++){const it=V*st,Pe=V*(st+1),L=Me+De+it,E=Me+N+it,G=Me+N+Pe,ce=Me+De+Pe;lt(L,E,G,ce)}}}function Le(ge,Me,_e){h.push(ge),h.push(Me),h.push(_e)}function We(ge,Me,_e){Lt(ge),Lt(Me),Lt(_e);const De=o.length/3,N=b.generateTopUV(r,o,De-3,De-2,De-1);ft(N[0]),ft(N[1]),ft(N[2])}function lt(ge,Me,_e,De){Lt(ge),Lt(Me),Lt(De),Lt(Me),Lt(_e),Lt(De);const N=o.length/3,st=b.generateSideWallUV(r,o,N-6,N-3,N-2,N-1);ft(st[0]),ft(st[1]),ft(st[3]),ft(st[1]),ft(st[2]),ft(st[3])}function Lt(ge){o.push(h[ge*3+0]),o.push(h[ge*3+1]),o.push(h[ge*3+2])}function ft(ge){l.push(ge.x),l.push(ge.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return Hx(t,r,e)}static fromJSON(e,t){const r=[];for(let l=0,c=e.shapes.length;l<c;l++){const f=t[e.shapes[l]];r.push(f)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new eu[o.type]().fromJSON(o)),new tu(r,e.options)}}const Vx={generateTopUV:function(s,e,t,r,o){const l=e[t*3],c=e[t*3+1],f=e[r*3],h=e[r*3+1],p=e[o*3],v=e[o*3+1];return[new Be(l,c),new Be(f,h),new Be(p,v)]},generateSideWallUV:function(s,e,t,r,o,l){const c=e[t*3],f=e[t*3+1],h=e[t*3+2],p=e[r*3],v=e[r*3+1],_=e[r*3+2],g=e[o*3],S=e[o*3+1],M=e[o*3+2],R=e[l*3],x=e[l*3+1],y=e[l*3+2];return Math.abs(f-v)<Math.abs(c-p)?[new Be(c,1-h),new Be(p,1-_),new Be(g,1-M),new Be(R,1-y)]:[new Be(f,1-h),new Be(v,1-_),new Be(S,1-M),new Be(x,1-y)]}};function Hx(s,e,t){if(t.shapes=[],Array.isArray(s))for(let r=0,o=s.length;r<o;r++){const l=s[r];t.shapes.push(l.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ru extends qn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,v=h+1,_=e/f,g=t/h,S=[],M=[],R=[],x=[];for(let y=0;y<v;y++){const b=y*g-c;for(let P=0;P<p;P++){const C=P*_-l;M.push(C,-b,0),R.push(0,0,1),x.push(P/f),x.push(1-y/h)}}for(let y=0;y<h;y++)for(let b=0;b<f;b++){const P=b+p*y,C=b+p*(y+1),z=b+1+p*(y+1),F=b+1+p*y;S.push(P,C,F),S.push(C,z,F)}this.setIndex(S),this.setAttribute("position",new Fn(M,3)),this.setAttribute("normal",new Fn(R,3)),this.setAttribute("uv",new Fn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ru(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bd extends qn{constructor(e=new Od(new X(-1,-1,0),new X(-1,1,0),new X(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const c=e.computeFrenetFrames(t,l);this.tangents=c.tangents,this.normals=c.normals,this.binormals=c.binormals;const f=new X,h=new X,p=new Be;let v=new X;const _=[],g=[],S=[],M=[];R(),this.setIndex(M),this.setAttribute("position",new Fn(_,3)),this.setAttribute("normal",new Fn(g,3)),this.setAttribute("uv",new Fn(S,2));function R(){for(let P=0;P<t;P++)x(P);x(l===!1?t:0),b(),y()}function x(P){v=e.getPointAt(P/t,v);const C=c.normals[P],z=c.binormals[P];for(let F=0;F<=o;F++){const B=F/o*Math.PI*2,w=Math.sin(B),D=-Math.cos(B);h.x=D*C.x+w*z.x,h.y=D*C.y+w*z.y,h.z=D*C.z+w*z.z,h.normalize(),g.push(h.x,h.y,h.z),f.x=v.x+r*h.x,f.y=v.y+r*h.y,f.z=v.z+r*h.z,_.push(f.x,f.y,f.z)}}function y(){for(let P=1;P<=t;P++)for(let C=1;C<=o;C++){const z=(o+1)*(P-1)+(C-1),F=(o+1)*P+(C-1),B=(o+1)*P+C,w=(o+1)*(P-1)+C;M.push(z,F,w),M.push(F,B,w)}}function b(){for(let P=0;P<=t;P++)for(let C=0;C<=o;C++)p.x=P/t,p.y=C/o,S.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Bd(new eu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function eo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Tn(s){const e={};for(let t=0;t<s.length;t++){const r=eo(s[t]);for(const o in r)e[o]=r[o]}return e}function Gx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function r0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Wx={clone:eo,merge:Tn};var Xx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xx,this.fragmentShader=Yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=Gx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class qx extends Ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yo extends ro{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Og,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jx extends ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $x extends ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zd extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Sf=new Gt,Wm=new X,Xm=new X;class s0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Id,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Wm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wm),Xm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xm),t.updateMatrixWorld(),Sf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ia||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Sf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vl=new X,Hl=new io,Ti=new X;class o0 extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vl,Hl,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Hl,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Vl,Hl,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Hl,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new X,Ym=new Be,qm=new Be;class Xn extends o0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vd*2*Math.atan(Math.tan(qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,Ym,qm),t.subVectors(qm,Ym)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qc*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*r/p,o*=c.width/h,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Zx extends s0{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0}}class jm extends zd{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Zx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class kd extends o0{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Kx extends s0{constructor(){super(new kd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jx extends zd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Kx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Qx extends zd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Gs=-90,Ws=1;class ey extends dn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Xn(Gs,Ws,e,t);o.layers=this.layers,this.add(o);const l=new Xn(Gs,Ws,e,t);l.layers=this.layers,this.add(l);const c=new Xn(Gs,Ws,e,t);c.layers=this.layers,this.add(c);const f=new Xn(Gs,Ws,e,t);f.layers=this.layers,this.add(f);const h=new Xn(Gs,Ws,e,t);h.layers=this.layers,this.add(h);const p=new Xn(Gs,Ws,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Ri)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ia)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(_,g,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class ty extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function $m(s,e,t,r){const o=ny(r);switch(t){case Ig:return s*e;case Fg:return s*e/o.components*o.byteLength;case Rd:return s*e/o.components*o.byteLength;case Ks:return s*e*2/o.components*o.byteLength;case Pd:return s*e*2/o.components*o.byteLength;case Ug:return s*e*3/o.components*o.byteLength;case _i:return s*e*4/o.components*o.byteLength;case bd:return s*e*4/o.components*o.byteLength;case Yl:case ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jl:case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kf:case Hf:return Math.max(s,16)*Math.max(e,8)/4;case zf:case Vf:return Math.max(s,8)*Math.max(e,8)/2;case Gf:case Wf:case Yf:case qf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xf:case jf:case $f:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ed:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case td:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case nd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case id:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case rd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case sd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case od:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ad:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ld:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ud:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case cd:case fd:case dd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hd:case pd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case md:case gd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ny(s){switch(s){case Yn:case bg:return{byteLength:1,components:1};case ta:case Lg:case er:return{byteLength:2,components:1};case Ad:case Cd:return{byteLength:2,components:4};case Li:case wd:case Ci:return{byteLength:4,components:1};case Dg:case Ng:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Td}}));typeof window<"u"&&(window.__THREE__?mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Td);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function a0(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function iy(s){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,_=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,v),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,h,p){const v=h.array,_=h.updateRanges;if(s.bindBuffer(p,f),_.length===0)s.bufferSubData(p,0,v);else{_.sort((S,M)=>S.start-M.start);let g=0;for(let S=1;S<_.length;S++){const M=_[g],R=_[S];R.start<=M.start+M.count+1?M.count=Math.max(M.count,R.start+R.count-M.start):(++g,_[g]=R)}_.length=g+1;for(let S=0,M=_.length;S<M;S++){const R=_[S];s.bufferSubData(p,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:c}}var ry=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ay=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ly=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,py=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,my=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_y=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Cy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ry=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Py=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,by=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Oy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,By=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$y=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ky=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_S=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,MS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ES=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,NS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,US=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,HS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,GS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,XS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$S=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,JS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_M=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:ry,alphahash_pars_fragment:sy,alphamap_fragment:oy,alphamap_pars_fragment:ay,alphatest_fragment:ly,alphatest_pars_fragment:uy,aomap_fragment:cy,aomap_pars_fragment:fy,batching_pars_vertex:dy,batching_vertex:hy,begin_vertex:py,beginnormal_vertex:my,bsdfs:gy,iridescence_fragment:vy,bumpmap_pars_fragment:_y,clipping_planes_fragment:xy,clipping_planes_pars_fragment:yy,clipping_planes_pars_vertex:Sy,clipping_planes_vertex:My,color_fragment:Ey,color_pars_fragment:Ty,color_pars_vertex:wy,color_vertex:Ay,common:Cy,cube_uv_reflection_fragment:Ry,defaultnormal_vertex:Py,displacementmap_pars_vertex:by,displacementmap_vertex:Ly,emissivemap_fragment:Dy,emissivemap_pars_fragment:Ny,colorspace_fragment:Iy,colorspace_pars_fragment:Uy,envmap_fragment:Fy,envmap_common_pars_fragment:Oy,envmap_pars_fragment:By,envmap_pars_vertex:zy,envmap_physical_pars_fragment:Zy,envmap_vertex:ky,fog_vertex:Vy,fog_pars_vertex:Hy,fog_fragment:Gy,fog_pars_fragment:Wy,gradientmap_pars_fragment:Xy,lightmap_pars_fragment:Yy,lights_lambert_fragment:qy,lights_lambert_pars_fragment:jy,lights_pars_begin:$y,lights_toon_fragment:Ky,lights_toon_pars_fragment:Jy,lights_phong_fragment:Qy,lights_phong_pars_fragment:eS,lights_physical_fragment:tS,lights_physical_pars_fragment:nS,lights_fragment_begin:iS,lights_fragment_maps:rS,lights_fragment_end:sS,logdepthbuf_fragment:oS,logdepthbuf_pars_fragment:aS,logdepthbuf_pars_vertex:lS,logdepthbuf_vertex:uS,map_fragment:cS,map_pars_fragment:fS,map_particle_fragment:dS,map_particle_pars_fragment:hS,metalnessmap_fragment:pS,metalnessmap_pars_fragment:mS,morphinstance_vertex:gS,morphcolor_vertex:vS,morphnormal_vertex:_S,morphtarget_pars_vertex:xS,morphtarget_vertex:yS,normal_fragment_begin:SS,normal_fragment_maps:MS,normal_pars_fragment:ES,normal_pars_vertex:TS,normal_vertex:wS,normalmap_pars_fragment:AS,clearcoat_normal_fragment_begin:CS,clearcoat_normal_fragment_maps:RS,clearcoat_pars_fragment:PS,iridescence_pars_fragment:bS,opaque_fragment:LS,packing:DS,premultiplied_alpha_fragment:NS,project_vertex:IS,dithering_fragment:US,dithering_pars_fragment:FS,roughnessmap_fragment:OS,roughnessmap_pars_fragment:BS,shadowmap_pars_fragment:zS,shadowmap_pars_vertex:kS,shadowmap_vertex:VS,shadowmask_pars_fragment:HS,skinbase_vertex:GS,skinning_pars_vertex:WS,skinning_vertex:XS,skinnormal_vertex:YS,specularmap_fragment:qS,specularmap_pars_fragment:jS,tonemapping_fragment:$S,tonemapping_pars_fragment:ZS,transmission_fragment:KS,transmission_pars_fragment:JS,uv_pars_fragment:QS,uv_pars_vertex:eM,uv_vertex:tM,worldpos_vertex:nM,background_vert:iM,background_frag:rM,backgroundCube_vert:sM,backgroundCube_frag:oM,cube_vert:aM,cube_frag:lM,depth_vert:uM,depth_frag:cM,distance_vert:fM,distance_frag:dM,equirect_vert:hM,equirect_frag:pM,linedashed_vert:mM,linedashed_frag:gM,meshbasic_vert:vM,meshbasic_frag:_M,meshlambert_vert:xM,meshlambert_frag:yM,meshmatcap_vert:SM,meshmatcap_frag:MM,meshnormal_vert:EM,meshnormal_frag:TM,meshphong_vert:wM,meshphong_frag:AM,meshphysical_vert:CM,meshphysical_frag:RM,meshtoon_vert:PM,meshtoon_frag:bM,points_vert:LM,points_frag:DM,shadow_vert:NM,shadow_frag:IM,sprite_vert:UM,sprite_frag:FM},Fe={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Ai={basic:{uniforms:Tn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Tn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Tn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Tn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Tn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Tn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Tn([Fe.points,Fe.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Tn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Tn([Fe.common,Fe.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Tn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Tn([Fe.sprite,Fe.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Tn([Fe.common,Fe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Tn([Fe.lights,Fe.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Ai.physical={uniforms:Tn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Gl={r:0,b:0,g:0},Jr=new Di,OM=new Gt;function BM(s,e,t,r,o,l){const c=new Tt(0);let f=o===!0?0:1,h,p,v=null,_=0,g=null;function S(b){let P=b.isScene===!0?b.background:null;if(P&&P.isTexture){const C=b.backgroundBlurriness>0;P=e.get(P,C)}return P}function M(b){let P=!1;const C=S(b);C===null?x(c,f):C&&C.isColor&&(x(C,1),P=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?t.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(b,P){const C=S(P);C&&(C.isCubeTexture||C.mapping===nu)?(p===void 0&&(p=new oi(new ua(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:eo(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(z,F,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Jr.copy(P.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),p.material.uniforms.envMap.value=C,p.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(OM.makeRotationFromEuler(Jr)),p.material.toneMapped=Rt.getTransfer(C.colorSpace)!==Ut,(v!==C||_!==C.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=C,_=C.version,g=s.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new oi(new ru(2,2),new Ni({name:"BackgroundMaterial",uniforms:eo(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(C.colorSpace)!==Ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||_!==C.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=C,_=C.version,g=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function x(b,P){b.getRGB(Gl,r0(s)),t.buffers.color.setClear(Gl.r,Gl.g,Gl.b,P,l)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,P=1){c.set(b),f=P,x(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(b){f=b,x(c,f)},render:M,addToRenderList:R,dispose:y}}function zM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,c=!1;function f(O,ee,Y,J,q){let Z=!1;const V=_(O,J,Y,ee);l!==V&&(l=V,p(l.object)),Z=S(O,J,Y,q),Z&&M(O,J,Y,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(Z||c)&&(c=!1,C(O,ee,Y,J),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function h(){return s.createVertexArray()}function p(O){return s.bindVertexArray(O)}function v(O){return s.deleteVertexArray(O)}function _(O,ee,Y,J){const q=J.wireframe===!0;let Z=r[ee.id];Z===void 0&&(Z={},r[ee.id]=Z);const V=O.isInstancedMesh===!0?O.id:0;let K=Z[V];K===void 0&&(K={},Z[V]=K);let ne=K[Y.id];ne===void 0&&(ne={},K[Y.id]=ne);let oe=ne[q];return oe===void 0&&(oe=g(h()),ne[q]=oe),oe}function g(O){const ee=[],Y=[],J=[];for(let q=0;q<t;q++)ee[q]=0,Y[q]=0,J[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:Y,attributeDivisors:J,object:O,attributes:{},index:null}}function S(O,ee,Y,J){const q=l.attributes,Z=ee.attributes;let V=0;const K=Y.getAttributes();for(const ne in K)if(K[ne].location>=0){const I=q[ne];let j=Z[ne];if(j===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(j=O.instanceColor)),I===void 0||I.attribute!==j||j&&I.data!==j.data)return!0;V++}return l.attributesNum!==V||l.index!==J}function M(O,ee,Y,J){const q={},Z=ee.attributes;let V=0;const K=Y.getAttributes();for(const ne in K)if(K[ne].location>=0){let I=Z[ne];I===void 0&&(ne==="instanceMatrix"&&O.instanceMatrix&&(I=O.instanceMatrix),ne==="instanceColor"&&O.instanceColor&&(I=O.instanceColor));const j={};j.attribute=I,I&&I.data&&(j.data=I.data),q[ne]=j,V++}l.attributes=q,l.attributesNum=V,l.index=J}function R(){const O=l.newAttributes;for(let ee=0,Y=O.length;ee<Y;ee++)O[ee]=0}function x(O){y(O,0)}function y(O,ee){const Y=l.newAttributes,J=l.enabledAttributes,q=l.attributeDivisors;Y[O]=1,J[O]===0&&(s.enableVertexAttribArray(O),J[O]=1),q[O]!==ee&&(s.vertexAttribDivisor(O,ee),q[O]=ee)}function b(){const O=l.newAttributes,ee=l.enabledAttributes;for(let Y=0,J=ee.length;Y<J;Y++)ee[Y]!==O[Y]&&(s.disableVertexAttribArray(Y),ee[Y]=0)}function P(O,ee,Y,J,q,Z,V){V===!0?s.vertexAttribIPointer(O,ee,Y,q,Z):s.vertexAttribPointer(O,ee,Y,J,q,Z)}function C(O,ee,Y,J){R();const q=J.attributes,Z=Y.getAttributes(),V=ee.defaultAttributeValues;for(const K in Z){const ne=Z[K];if(ne.location>=0){let oe=q[K];if(oe===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(oe=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(oe=O.instanceColor)),oe!==void 0){const I=oe.normalized,j=oe.itemSize,ve=e.get(oe);if(ve===void 0)continue;const Oe=ve.buffer,Ye=ve.type,ie=ve.bytesPerElement,he=Ye===s.INT||Ye===s.UNSIGNED_INT||oe.gpuType===wd;if(oe.isInterleavedBufferAttribute){const pe=oe.data,Le=pe.stride,We=oe.offset;if(pe.isInstancedInterleavedBuffer){for(let lt=0;lt<ne.locationSize;lt++)y(ne.location+lt,pe.meshPerAttribute);O.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let lt=0;lt<ne.locationSize;lt++)x(ne.location+lt);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let lt=0;lt<ne.locationSize;lt++)P(ne.location+lt,j/ne.locationSize,Ye,I,Le*ie,(We+j/ne.locationSize*lt)*ie,he)}else{if(oe.isInstancedBufferAttribute){for(let pe=0;pe<ne.locationSize;pe++)y(ne.location+pe,oe.meshPerAttribute);O.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let pe=0;pe<ne.locationSize;pe++)x(ne.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Oe);for(let pe=0;pe<ne.locationSize;pe++)P(ne.location+pe,j/ne.locationSize,Ye,I,j*ie,j/ne.locationSize*pe*ie,he)}}else if(V!==void 0){const I=V[K];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(ne.location,I);break;case 3:s.vertexAttrib3fv(ne.location,I);break;case 4:s.vertexAttrib4fv(ne.location,I);break;default:s.vertexAttrib1fv(ne.location,I)}}}}b()}function z(){D();for(const O in r){const ee=r[O];for(const Y in ee){const J=ee[Y];for(const q in J){const Z=J[q];for(const V in Z)v(Z[V].object),delete Z[V];delete J[q]}}delete r[O]}}function F(O){if(r[O.id]===void 0)return;const ee=r[O.id];for(const Y in ee){const J=ee[Y];for(const q in J){const Z=J[q];for(const V in Z)v(Z[V].object),delete Z[V];delete J[q]}}delete r[O.id]}function B(O){for(const ee in r){const Y=r[ee];for(const J in Y){const q=Y[J];if(q[O.id]===void 0)continue;const Z=q[O.id];for(const V in Z)v(Z[V].object),delete Z[V];delete q[O.id]}}}function w(O){for(const ee in r){const Y=r[ee],J=O.isInstancedMesh===!0?O.id:0,q=Y[J];if(q!==void 0){for(const Z in q){const V=q[Z];for(const K in V)v(V[K].object),delete V[K];delete q[Z]}delete Y[J],Object.keys(Y).length===0&&delete r[ee]}}}function D(){ue(),c=!0,l!==o&&(l=o,p(l.object))}function ue(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:D,resetDefaultState:ue,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfObject:w,releaseStatesOfProgram:B,initAttributes:R,enableAttribute:x,disableUnusedAttributes:b}}function kM(s,e,t){let r;function o(p){r=p}function l(p,v){s.drawArrays(r,p,v),t.update(v,r,1)}function c(p,v,_){_!==0&&(s.drawArraysInstanced(r,p,v,_),t.update(v,r,_))}function f(p,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let S=0;for(let M=0;M<_;M++)S+=v[M];t.update(S,r,1)}function h(p,v,_,g){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)c(p[M],v[M],g[M]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,v,0,g,0,_);let M=0;for(let R=0;R<_;R++)M+=v[R]*g[R];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function VM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(B){return!(B!==_i&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const w=B===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Yn&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ci&&!w)}function h(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(mt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:M,maxTextureSize:R,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:b,maxVaryings:P,maxFragmentUniforms:C,maxSamples:z,samples:F}}function HM(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new es,f=new _t,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const S=_.length!==0||g||r!==0||o;return o=g,r=_.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=v(_,g,0)},this.setState=function(_,g,S){const M=_.clippingPlanes,R=_.clipIntersection,x=_.clipShadows,y=s.get(_);if(!o||M===null||M.length===0||l&&!x)l?v(null):p();else{const b=l?0:r,P=b*4;let C=y.clippingState||null;h.value=C,C=v(M,g,P,S);for(let z=0;z!==P;++z)C[z]=t[z];y.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=b}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,g,S,M){const R=_!==null?_.length:0;let x=null;if(R!==0){if(x=h.value,M!==!0||x===null){const y=S+R*4,b=g.matrixWorldInverse;f.getNormalMatrix(b),(x===null||x.length<y)&&(x=new Float32Array(y));for(let P=0,C=S;P!==R;++P,C+=4)c.copy(_[P]).applyMatrix4(b,f),c.normal.toArray(x,C),x[C+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,x}}const Lr=4,Zm=[.125,.215,.35,.446,.526,.582],is=20,GM=256,qo=new kd,Km=new Tt;let Mf=null,Ef=0,Tf=0,wf=!1;const WM=new X;class Jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:f=WM}=l;Mf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Mf,Ef,Tf),this._renderer.xr.enabled=wf,e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),Tf=this._renderer.getActiveMipmapLevel(),wf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:er,format:_i,colorSpace:Js,depthBuffer:!1},o=Qm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qm(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XM(l)),this._blurMaterial=qM(l,e,t),this._ggxMaterial=YM(l,e,t)}return o}_compileMaterial(e){const t=new oi(new qn,e);this._renderer.compile(t,qo)}_sceneToCubeUV(e,t,r,o,l){const h=new Xn(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,S=_.toneMapping;_.getClearColor(Km),_.toneMapping=Pi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oi(new ua,new Xg({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,x=R.material;let y=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,y=!0):(x.color.copy(Km),y=!0);for(let P=0;P<6;P++){const C=P%3;C===0?(h.up.set(0,p[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[P],l.y,l.z)):C===1?(h.up.set(0,0,p[P]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[P],l.z)):(h.up.set(0,p[P],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[P]));const z=this._cubeSize;Xs(o,C*z,P>2?z:0,z,z),_.setRenderTarget(o),y&&_.render(R,h),_.render(e,h)}_.toneMapping=S,_.autoClear=g,e.background=b}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===os||e.mapping===Zs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eg());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Xs(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,qo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),_=Math.sqrt(p*p-v*v),g=0+p*1.25,S=_*g,{_lodMax:M}=this,R=this._sizeLods[r],x=3*R*(r>M-Lr?r-M+Lr:0),y=4*(this._cubeSize-R);h.envMap.value=e.texture,h.roughness.value=S,h.mipInt.value=M-t,Xs(l,x,y,3*R,2*R),o.setRenderTarget(l),o.render(f,qo),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=M-r,Xs(e,x,y,3*R,2*R),o.setRenderTarget(e),o.render(f,qo)}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[o];_.material=p;const g=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*is-1),R=l/M,x=isFinite(l)?1+Math.floor(v*R):is;x>is&&mt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${is}`);const y=[];let b=0;for(let B=0;B<is;++B){const w=B/R,D=Math.exp(-w*w/2);y.push(D),B===0?b+=D:B<x&&(b+=2*D)}for(let B=0;B<y.length;B++)y[B]=y[B]/b;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=y,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:P}=this;g.dTheta.value=M,g.mipInt.value=P-r;const C=this._sizeLods[o],z=3*C*(o>P-Lr?o-P+Lr:0),F=4*(this._cubeSize-C);Xs(t,z,F,3*C,2*C),h.setRenderTarget(t),h.render(_,qo)}}function XM(s){const e=[],t=[],r=[];let o=s;const l=s-Lr+1+Zm.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let h=1/f;c>s-Lr?h=Zm[c-s+Lr-1]:c===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,_=1+p,g=[v,v,_,v,_,_,v,v,_,_,v,_],S=6,M=6,R=3,x=2,y=1,b=new Float32Array(R*M*S),P=new Float32Array(x*M*S),C=new Float32Array(y*M*S);for(let F=0;F<S;F++){const B=F%3*2/3-1,w=F>2?0:-1,D=[B,w,0,B+2/3,w,0,B+2/3,w+1,0,B,w,0,B+2/3,w+1,0,B,w+1,0];b.set(D,R*M*F),P.set(g,x*M*F);const ue=[F,F,F,F,F,F];C.set(ue,y*M*F)}const z=new qn;z.setAttribute("position",new si(b,R)),z.setAttribute("uv",new si(P,x)),z.setAttribute("faceIndex",new si(C,y)),r.push(new oi(z,null)),o>Lr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Qm(s,e,t){const r=new bi(s,e,t);return r.texture.mapping=nu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Xs(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function YM(s,e,t){return new Ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:su(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function qM(s,e,t){const r=new Float32Array(is),o=new X(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function eg(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function tg(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function su(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class l0 extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new qg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ua(5,5,5),l=new Ni({name:"CubemapFromEquirect",uniforms:eo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:Ji});l.uniforms.tEquirect.value=t;const c=new oi(o,l),f=t.minFilter;return t.minFilter===rs&&(t.minFilter=xn),new ey(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}function jM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?c(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===Wc||S===Xc)if(e.has(g)){const M=e.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const R=new l0(M.height);return R.fromEquirectangularTexture(s,g),e.set(g,R),g.addEventListener("dispose",p),f(R.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const S=g.mapping,M=S===Wc||S===Xc,R=S===os||S===Zs;if(M||R){let x=t.get(g);const y=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new Jm(s)),x=M?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const b=g.image;return M&&b&&b.height>0||R&&b&&h(b)?(r===null&&(r=new Jm(s)),x=M?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",v),x.texture):null}}}return g}function f(g,S){return S===Wc?g.mapping=os:S===Xc&&(g.mapping=Zs),g}function h(g){let S=0;const M=6;for(let R=0;R<M;R++)g[R]!==void 0&&S++;return S===M}function p(g){const S=g.target;S.removeEventListener("dispose",p);const M=e.get(S);M!==void 0&&(e.delete(S),M.dispose())}function v(g){const S=g.target;S.removeEventListener("dispose",v);const M=t.get(S);M!==void 0&&(t.delete(S),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function $M(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ql("WebGLRenderer: "+r+" extension not supported."),o}}}function ZM(s,e,t,r){const o={},l=new WeakMap;function c(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete o[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(_,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function h(_){const g=_.attributes;for(const S in g)e.update(g[S],s.ARRAY_BUFFER)}function p(_){const g=[],S=_.index,M=_.attributes.position;let R=0;if(M===void 0)return;if(S!==null){const b=S.array;R=S.version;for(let P=0,C=b.length;P<C;P+=3){const z=b[P+0],F=b[P+1],B=b[P+2];g.push(z,F,F,B,B,z)}}else{const b=M.array;R=M.version;for(let P=0,C=b.length/3-1;P<C;P+=3){const z=P+0,F=P+1,B=P+2;g.push(z,F,F,B,B,z)}}const x=new(M.count>=65535?Gg:Hg)(g,1);x.version=R;const y=l.get(_);y&&e.remove(y),l.set(_,x)}function v(_){const g=l.get(_);if(g){const S=_.index;S!==null&&g.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:h,getWireframeAttribute:v}}function KM(s,e,t){let r;function o(g){r=g}let l,c;function f(g){l=g.type,c=g.bytesPerElement}function h(g,S){s.drawElements(r,S,l,g*c),t.update(S,r,1)}function p(g,S,M){M!==0&&(s.drawElementsInstanced(r,S,l,g*c,M),t.update(S,r,M))}function v(g,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,g,0,M);let x=0;for(let y=0;y<M;y++)x+=S[y];t.update(x,r,1)}function _(g,S,M,R){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<g.length;y++)p(g[y]/c,S[y],R[y]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,l,g,0,R,0,M);let y=0;for(let b=0;b<M;b++)y+=S[b]*R[b];t.update(y,r,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function JM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ct("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function QM(s,e,t){const r=new WeakMap,o=new jt;function l(c,f,h){const p=c.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(f);if(g===void 0||g.count!==_){let ue=function(){w.dispose(),r.delete(f),f.removeEventListener("dispose",ue)};var S=ue;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let C=0;M===!0&&(C=1),R===!0&&(C=2),x===!0&&(C=3);let z=f.attributes.position.count*C,F=1;z>e.maxTextureSize&&(F=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const B=new Float32Array(z*F*4*_),w=new zg(B,z,F,_);w.type=Ci,w.needsUpdate=!0;const D=C*4;for(let O=0;O<_;O++){const ee=y[O],Y=b[O],J=P[O],q=z*F*4*O;for(let Z=0;Z<ee.count;Z++){const V=Z*D;M===!0&&(o.fromBufferAttribute(ee,Z),B[q+V+0]=o.x,B[q+V+1]=o.y,B[q+V+2]=o.z,B[q+V+3]=0),R===!0&&(o.fromBufferAttribute(Y,Z),B[q+V+4]=o.x,B[q+V+5]=o.y,B[q+V+6]=o.z,B[q+V+7]=0),x===!0&&(o.fromBufferAttribute(J,Z),B[q+V+8]=o.x,B[q+V+9]=o.y,B[q+V+10]=o.z,B[q+V+11]=J.itemSize===4?o.w:1)}}g={count:_,texture:w,size:new Be(z,F)},r.set(f,g),f.addEventListener("dispose",ue)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let x=0;x<p.length;x++)M+=p[x];const R=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",R),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function eE(s,e,t,r,o){let l=new WeakMap;function c(p){const v=o.render.frame,_=p.geometry,g=e.get(p,_);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==v&&(S.update(),l.set(S,v))}return g}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:c,dispose:f}}const tE={[Mg]:"LINEAR_TONE_MAPPING",[Eg]:"REINHARD_TONE_MAPPING",[Tg]:"CINEON_TONE_MAPPING",[wg]:"ACES_FILMIC_TONE_MAPPING",[Cg]:"AGX_TONE_MAPPING",[Rg]:"NEUTRAL_TONE_MAPPING",[Ag]:"CUSTOM_TONE_MAPPING"};function nE(s,e,t,r,o){const l=new bi(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),c=new bi(e,t,{type:er,depthBuffer:!1,stencilBuffer:!1}),f=new qn;f.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Fn([0,2,0,0,2,0],2));const h=new qx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new oi(f,h),v=new kd(-1,1,1,-1,0,1);let _=null,g=null,S=!1,M,R=null,x=[],y=!1;this.setSize=function(b,P){l.setSize(b,P),c.setSize(b,P);for(let C=0;C<x.length;C++){const z=x[C];z.setSize&&z.setSize(b,P)}},this.setEffects=function(b){x=b,y=x.length>0&&x[0].isRenderPass===!0;const P=l.width,C=l.height;for(let z=0;z<x.length;z++){const F=x[z];F.setSize&&F.setSize(P,C)}},this.begin=function(b,P){if(S||b.toneMapping===Pi&&x.length===0)return!1;if(R=P,P!==null){const C=P.width,z=P.height;(l.width!==C||l.height!==z)&&this.setSize(C,z)}return y===!1&&b.setRenderTarget(l),M=b.toneMapping,b.toneMapping=Pi,!0},this.hasRenderPass=function(){return y},this.end=function(b,P){b.toneMapping=M,S=!0;let C=l,z=c;for(let F=0;F<x.length;F++){const B=x[F];if(B.enabled!==!1&&(B.render(b,z,C,P),B.needsSwap!==!1)){const w=C;C=z,z=w}}if(_!==b.outputColorSpace||g!==b.toneMapping){_=b.outputColorSpace,g=b.toneMapping,h.defines={},Rt.getTransfer(_)===Ut&&(h.defines.SRGB_TRANSFER="");const F=tE[g];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=C.texture,b.setRenderTarget(R),b.render(p,v),R=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),c.dispose(),f.dispose(),h.dispose()}}const u0=new wn,Sd=new ra(1,1),c0=new zg,f0=new X_,d0=new qg,ng=[],ig=[],rg=new Float32Array(16),sg=new Float32Array(9),og=new Float32Array(4);function so(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=ng[o];if(l===void 0&&(l=new Float32Array(o),ng[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function nn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function rn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function ou(s,e){let t=ig[e];t===void 0&&(t=new Int32Array(e),ig[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function iE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function rE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2fv(this.addr,e),rn(t,e)}}function sE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;s.uniform3fv(this.addr,e),rn(t,e)}}function oE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4fv(this.addr,e),rn(t,e)}}function aE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;og.set(r),s.uniformMatrix2fv(this.addr,!1,og),rn(t,r)}}function lE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;sg.set(r),s.uniformMatrix3fv(this.addr,!1,sg),rn(t,r)}}function uE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;rg.set(r),s.uniformMatrix4fv(this.addr,!1,rg),rn(t,r)}}function cE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function fE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2iv(this.addr,e),rn(t,e)}}function dE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3iv(this.addr,e),rn(t,e)}}function hE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4iv(this.addr,e),rn(t,e)}}function pE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function mE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2uiv(this.addr,e),rn(t,e)}}function gE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3uiv(this.addr,e),rn(t,e)}}function vE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4uiv(this.addr,e),rn(t,e)}}function _E(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Sd.compareFunction=t.isReversedDepthBuffer()?Dd:Ld,l=Sd):l=u0,t.setTexture2D(e||l,o)}function xE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||f0,o)}function yE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||d0,o)}function SE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||c0,o)}function ME(s){switch(s){case 5126:return iE;case 35664:return rE;case 35665:return sE;case 35666:return oE;case 35674:return aE;case 35675:return lE;case 35676:return uE;case 5124:case 35670:return cE;case 35667:case 35671:return fE;case 35668:case 35672:return dE;case 35669:case 35673:return hE;case 5125:return pE;case 36294:return mE;case 36295:return gE;case 36296:return vE;case 35678:case 36198:case 36298:case 36306:case 35682:return _E;case 35679:case 36299:case 36307:return xE;case 35680:case 36300:case 36308:case 36293:return yE;case 36289:case 36303:case 36311:case 36292:return SE}}function EE(s,e){s.uniform1fv(this.addr,e)}function TE(s,e){const t=so(e,this.size,2);s.uniform2fv(this.addr,t)}function wE(s,e){const t=so(e,this.size,3);s.uniform3fv(this.addr,t)}function AE(s,e){const t=so(e,this.size,4);s.uniform4fv(this.addr,t)}function CE(s,e){const t=so(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function RE(s,e){const t=so(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function PE(s,e){const t=so(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function bE(s,e){s.uniform1iv(this.addr,e)}function LE(s,e){s.uniform2iv(this.addr,e)}function DE(s,e){s.uniform3iv(this.addr,e)}function NE(s,e){s.uniform4iv(this.addr,e)}function IE(s,e){s.uniform1uiv(this.addr,e)}function UE(s,e){s.uniform2uiv(this.addr,e)}function FE(s,e){s.uniform3uiv(this.addr,e)}function OE(s,e){s.uniform4uiv(this.addr,e)}function BE(s,e,t){const r=this.cache,o=e.length,l=ou(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=Sd:c=u0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function zE(s,e,t){const r=this.cache,o=e.length,l=ou(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||f0,l[c])}function kE(s,e,t){const r=this.cache,o=e.length,l=ou(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||d0,l[c])}function VE(s,e,t){const r=this.cache,o=e.length,l=ou(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||c0,l[c])}function HE(s){switch(s){case 5126:return EE;case 35664:return TE;case 35665:return wE;case 35666:return AE;case 35674:return CE;case 35675:return RE;case 35676:return PE;case 5124:case 35670:return bE;case 35667:case 35671:return LE;case 35668:case 35672:return DE;case 35669:case 35673:return NE;case 5125:return IE;case 36294:return UE;case 36295:return FE;case 36296:return OE;case 35678:case 36198:case 36298:case 36306:case 35682:return BE;case 35679:case 36299:case 36307:return zE;case 35680:case 36300:case 36308:case 36293:return kE;case 36289:case 36303:case 36311:case 36292:return VE}}class GE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=ME(t.type)}}class WE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HE(t.type)}}class XE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Af=/(\w+)(\])?(\[|\.)?/g;function ag(s,e){s.seq.push(e),s.map[e.id]=e}function YE(s,e,t){const r=s.name,o=r.length;for(Af.lastIndex=0;;){const l=Af.exec(r),c=Af.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===o){ag(t,p===void 0?new GE(f,s,e):new WE(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new XE(f),ag(t,_)),t=_}}}class Zl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),h=e.getUniformLocation(t,f.name);YE(f,h,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function lg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const qE=37297;let jE=0;function $E(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const ug=new _t;function ZE(s){Rt._getMatrix(ug,Rt.workingColorSpace,s);const e=`mat3( ${ug.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(s)){case Kl:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return mt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function cg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+$E(s.getShaderSource(e),f)}else return l}function KE(s,e){const t=ZE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const JE={[Mg]:"Linear",[Eg]:"Reinhard",[Tg]:"Cineon",[wg]:"ACESFilmic",[Cg]:"AgX",[Rg]:"Neutral",[Ag]:"Custom"};function QE(s,e){const t=JE[e];return t===void 0?(mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new X;function e1(){Rt.getLuminanceCoefficients(Wl);const s=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function n1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function i1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function Jo(s){return s!==""}function fg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Md(s){return s.replace(r1,o1)}const s1=new Map;function o1(s,e){let t=xt[e];if(t===void 0){const r=s1.get(e);if(r!==void 0)t=xt[r],mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Md(t)}const a1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hg(s){return s.replace(a1,l1)}function l1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function pg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const u1={[Xl]:"SHADOWMAP_TYPE_PCF",[$o]:"SHADOWMAP_TYPE_VSM"};function c1(s){return u1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const f1={[os]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[nu]:"ENVMAP_TYPE_CUBE_UV"};function d1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":f1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const h1={[Zs]:"ENVMAP_MODE_REFRACTION"};function p1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":h1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const m1={[Sg]:"ENVMAP_BLENDING_MULTIPLY",[T_]:"ENVMAP_BLENDING_MIX",[w_]:"ENVMAP_BLENDING_ADD"};function g1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":m1[s.combine]||"ENVMAP_BLENDING_NONE"}function v1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function _1(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=c1(t),p=d1(t),v=p1(t),_=g1(t),g=v1(t),S=t1(t),M=n1(l),R=o.createProgram();let x,y,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Jo).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Jo).join(`
`),y.length>0&&(y+=`
`)):(x=[pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),y=[pg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?xt.tonemapping_pars_fragment:"",t.toneMapping!==Pi?QE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,KE("linearToOutputTexel",t.outputColorSpace),e1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jo).join(`
`)),c=Md(c),c=fg(c,t),c=dg(c,t),f=Md(f),f=fg(f,t),f=dg(f,t),c=hg(c),f=hg(f),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===ym?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ym?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=b+x+c,C=b+y+f,z=lg(o,o.VERTEX_SHADER,P),F=lg(o,o.FRAGMENT_SHADER,C);o.attachShader(R,z),o.attachShader(R,F),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function B(O){if(s.debug.checkShaderErrors){const ee=o.getProgramInfoLog(R)||"",Y=o.getShaderInfoLog(z)||"",J=o.getShaderInfoLog(F)||"",q=ee.trim(),Z=Y.trim(),V=J.trim();let K=!0,ne=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,R,z,F);else{const oe=cg(o,z,"vertex"),I=cg(o,F,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+q+`
`+oe+`
`+I)}else q!==""?mt("WebGLProgram: Program Info Log:",q):(Z===""||V==="")&&(ne=!1);ne&&(O.diagnostics={runnable:K,programLog:q,vertexShader:{log:Z,prefix:x},fragmentShader:{log:V,prefix:y}})}o.deleteShader(z),o.deleteShader(F),w=new Zl(o,R),D=i1(o,R)}let w;this.getUniforms=function(){return w===void 0&&B(this),w};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let ue=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ue===!1&&(ue=o.getProgramParameter(R,qE)),ue},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=z,this.fragmentShader=F,this}let x1=0;class y1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new S1(e),t.set(e,r)),r}}class S1{constructor(e){this.id=x1++,this.code=e,this.usedTimes=0}}function M1(s,e,t,r,o,l){const c=new kg,f=new y1,h=new Set,p=[],v=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return h.add(w),w===0?"uv":`uv${w}`}function R(w,D,ue,O,ee){const Y=O.fog,J=ee.geometry,q=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,Z=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,V=e.get(w.envMap||q,Z),K=V&&V.mapping===nu?V.image.height:null,ne=S[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&mt("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const oe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,I=oe!==void 0?oe.length:0;let j=0;J.morphAttributes.position!==void 0&&(j=1),J.morphAttributes.normal!==void 0&&(j=2),J.morphAttributes.color!==void 0&&(j=3);let ve,Oe,Ye,ie;if(ne){const wt=Ai[ne];ve=wt.vertexShader,Oe=wt.fragmentShader}else ve=w.vertexShader,Oe=w.fragmentShader,f.update(w),Ye=f.getVertexShaderID(w),ie=f.getFragmentShaderID(w);const he=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),Le=ee.isInstancedMesh===!0,We=ee.isBatchedMesh===!0,lt=!!w.map,Lt=!!w.matcap,ft=!!V,ge=!!w.aoMap,Me=!!w.lightMap,_e=!!w.bumpMap,De=!!w.normalMap,N=!!w.displacementMap,st=!!w.emissiveMap,Ie=!!w.metalnessMap,it=!!w.roughnessMap,Pe=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,G=w.iridescence>0,ce=w.sheen>0,me=w.transmission>0,fe=Pe&&!!w.anisotropyMap,Xe=L&&!!w.clearcoatMap,Ae=L&&!!w.clearcoatNormalMap,Je=L&&!!w.clearcoatRoughnessMap,at=G&&!!w.iridescenceMap,Se=G&&!!w.iridescenceThicknessMap,Re=ce&&!!w.sheenColorMap,Ke=ce&&!!w.sheenRoughnessMap,je=!!w.specularMap,ze=!!w.specularColorMap,gt=!!w.specularIntensityMap,H=me&&!!w.transmissionMap,be=me&&!!w.thicknessMap,we=!!w.gradientMap,ke=!!w.alphaMap,Te=w.alphaTest>0,de=!!w.alphaHash,$e=!!w.extensions;let dt=Pi;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(dt=s.toneMapping);const It={shaderID:ne,shaderType:w.type,shaderName:w.name,vertexShader:ve,fragmentShader:Oe,defines:w.defines,customVertexShaderID:Ye,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:We,batchingColor:We&&ee._colorsTexture!==null,instancing:Le,instancingColor:Le&&ee.instanceColor!==null,instancingMorph:Le&&ee.morphTexture!==null,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Js,alphaToCoverage:!!w.alphaToCoverage,map:lt,matcap:Lt,envMap:ft,envMapMode:ft&&V.mapping,envMapCubeUVHeight:K,aoMap:ge,lightMap:Me,bumpMap:_e,normalMap:De,displacementMap:N,emissiveMap:st,normalMapObjectSpace:De&&w.normalMapType===R_,normalMapTangentSpace:De&&w.normalMapType===Og,metalnessMap:Ie,roughnessMap:it,anisotropy:Pe,anisotropyMap:fe,clearcoat:L,clearcoatMap:Xe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Je,dispersion:E,iridescence:G,iridescenceMap:at,iridescenceThicknessMap:Se,sheen:ce,sheenColorMap:Re,sheenRoughnessMap:Ke,specularMap:je,specularColorMap:ze,specularIntensityMap:gt,transmission:me,transmissionMap:H,thicknessMap:be,gradientMap:we,opaque:w.transparent===!1&&w.blending===qs&&w.alphaToCoverage===!1,alphaMap:ke,alphaTest:Te,alphaHash:de,combine:w.combine,mapUv:lt&&M(w.map.channel),aoMapUv:ge&&M(w.aoMap.channel),lightMapUv:Me&&M(w.lightMap.channel),bumpMapUv:_e&&M(w.bumpMap.channel),normalMapUv:De&&M(w.normalMap.channel),displacementMapUv:N&&M(w.displacementMap.channel),emissiveMapUv:st&&M(w.emissiveMap.channel),metalnessMapUv:Ie&&M(w.metalnessMap.channel),roughnessMapUv:it&&M(w.roughnessMap.channel),anisotropyMapUv:fe&&M(w.anisotropyMap.channel),clearcoatMapUv:Xe&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&M(w.sheenRoughnessMap.channel),specularMapUv:je&&M(w.specularMap.channel),specularColorMapUv:ze&&M(w.specularColorMap.channel),specularIntensityMapUv:gt&&M(w.specularIntensityMap.channel),transmissionMapUv:H&&M(w.transmissionMap.channel),thicknessMapUv:be&&M(w.thicknessMap.channel),alphaMapUv:ke&&M(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(De||Pe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!J.attributes.uv&&(lt||ke),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||J.attributes.normal===void 0&&De===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:pe,skinning:ee.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:j,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&ue.length>0,shadowMapType:s.shadowMap.type,toneMapping:dt,decodeVideoTexture:lt&&w.map.isVideoTexture===!0&&Rt.getTransfer(w.map.colorSpace)===Ut,decodeVideoTextureEmissive:st&&w.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(w.emissiveMap.colorSpace)===Ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Zi,flipSided:w.side===Un,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:$e&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&w.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=h.has(1),It.vertexUv2s=h.has(2),It.vertexUv3s=h.has(3),h.clear(),It}function x(w){const D=[];if(w.shaderID?D.push(w.shaderID):(D.push(w.customVertexShaderID),D.push(w.customFragmentShaderID)),w.defines!==void 0)for(const ue in w.defines)D.push(ue),D.push(w.defines[ue]);return w.isRawShaderMaterial===!1&&(y(D,w),b(D,w),D.push(s.outputColorSpace)),D.push(w.customProgramCacheKey),D.join()}function y(w,D){w.push(D.precision),w.push(D.outputColorSpace),w.push(D.envMapMode),w.push(D.envMapCubeUVHeight),w.push(D.mapUv),w.push(D.alphaMapUv),w.push(D.lightMapUv),w.push(D.aoMapUv),w.push(D.bumpMapUv),w.push(D.normalMapUv),w.push(D.displacementMapUv),w.push(D.emissiveMapUv),w.push(D.metalnessMapUv),w.push(D.roughnessMapUv),w.push(D.anisotropyMapUv),w.push(D.clearcoatMapUv),w.push(D.clearcoatNormalMapUv),w.push(D.clearcoatRoughnessMapUv),w.push(D.iridescenceMapUv),w.push(D.iridescenceThicknessMapUv),w.push(D.sheenColorMapUv),w.push(D.sheenRoughnessMapUv),w.push(D.specularMapUv),w.push(D.specularColorMapUv),w.push(D.specularIntensityMapUv),w.push(D.transmissionMapUv),w.push(D.thicknessMapUv),w.push(D.combine),w.push(D.fogExp2),w.push(D.sizeAttenuation),w.push(D.morphTargetsCount),w.push(D.morphAttributeCount),w.push(D.numDirLights),w.push(D.numPointLights),w.push(D.numSpotLights),w.push(D.numSpotLightMaps),w.push(D.numHemiLights),w.push(D.numRectAreaLights),w.push(D.numDirLightShadows),w.push(D.numPointLightShadows),w.push(D.numSpotLightShadows),w.push(D.numSpotLightShadowsWithMaps),w.push(D.numLightProbes),w.push(D.shadowMapType),w.push(D.toneMapping),w.push(D.numClippingPlanes),w.push(D.numClipIntersection),w.push(D.depthPacking)}function b(w,D){c.disableAll(),D.instancing&&c.enable(0),D.instancingColor&&c.enable(1),D.instancingMorph&&c.enable(2),D.matcap&&c.enable(3),D.envMap&&c.enable(4),D.normalMapObjectSpace&&c.enable(5),D.normalMapTangentSpace&&c.enable(6),D.clearcoat&&c.enable(7),D.iridescence&&c.enable(8),D.alphaTest&&c.enable(9),D.vertexColors&&c.enable(10),D.vertexAlphas&&c.enable(11),D.vertexUv1s&&c.enable(12),D.vertexUv2s&&c.enable(13),D.vertexUv3s&&c.enable(14),D.vertexTangents&&c.enable(15),D.anisotropy&&c.enable(16),D.alphaHash&&c.enable(17),D.batching&&c.enable(18),D.dispersion&&c.enable(19),D.batchingColor&&c.enable(20),D.gradientMap&&c.enable(21),w.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.reversedDepthBuffer&&c.enable(4),D.skinning&&c.enable(5),D.morphTargets&&c.enable(6),D.morphNormals&&c.enable(7),D.morphColors&&c.enable(8),D.premultipliedAlpha&&c.enable(9),D.shadowMapEnabled&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),D.decodeVideoTextureEmissive&&c.enable(20),D.alphaToCoverage&&c.enable(21),w.push(c.mask)}function P(w){const D=S[w.type];let ue;if(D){const O=Ai[D];ue=Wx.clone(O.uniforms)}else ue=w.uniforms;return ue}function C(w,D){let ue=v.get(D);return ue!==void 0?++ue.usedTimes:(ue=new _1(s,D,w,o),p.push(ue),v.set(D,ue)),ue}function z(w){if(--w.usedTimes===0){const D=p.indexOf(w);p[D]=p[p.length-1],p.pop(),v.delete(w.cacheKey),w.destroy()}}function F(w){f.remove(w)}function B(){f.dispose()}return{getParameters:R,getProgramCacheKey:x,getUniforms:P,acquireProgram:C,releaseProgram:z,releaseShaderCache:F,programs:p,dispose:B}}function E1(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function T1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function mg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function gg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function f(g,S,M,R,x,y){let b=s[e];return b===void 0?(b={id:g.id,object:g,geometry:S,material:M,materialVariant:c(g),groupOrder:R,renderOrder:g.renderOrder,z:x,group:y},s[e]=b):(b.id=g.id,b.object=g,b.geometry=S,b.material=M,b.materialVariant=c(g),b.groupOrder=R,b.renderOrder=g.renderOrder,b.z=x,b.group=y),e++,b}function h(g,S,M,R,x,y){const b=f(g,S,M,R,x,y);M.transmission>0?r.push(b):M.transparent===!0?o.push(b):t.push(b)}function p(g,S,M,R,x,y){const b=f(g,S,M,R,x,y);M.transmission>0?r.unshift(b):M.transparent===!0?o.unshift(b):t.unshift(b)}function v(g,S){t.length>1&&t.sort(g||T1),r.length>1&&r.sort(S||mg),o.length>1&&o.sort(S||mg)}function _(){for(let g=e,S=s.length;g<S;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:_,sort:v}}function w1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new gg,s.set(r,[c])):o>=l.length?(c=new gg,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function A1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Tt};break;case"SpotLight":t={position:new X,direction:new X,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function C1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let R1=0;function P1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function b1(s){const e=new A1,t=C1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new X);const o=new X,l=new Gt,c=new Gt;function f(p){let v=0,_=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,M=0,R=0,x=0,y=0,b=0,P=0,C=0,z=0,F=0,B=0;p.sort(P1);for(let D=0,ue=p.length;D<ue;D++){const O=p[D],ee=O.color,Y=O.intensity,J=O.distance;let q=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Ks?q=O.shadow.map.texture:q=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)v+=ee.r*Y,_+=ee.g*Y,g+=ee.b*Y;else if(O.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(O.sh.coefficients[Z],Y);B++}else if(O.isDirectionalLight){const Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const V=O.shadow,K=t.get(O);K.shadowIntensity=V.intensity,K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,r.directionalShadow[S]=K,r.directionalShadowMap[S]=q,r.directionalShadowMatrix[S]=O.shadow.matrix,b++}r.directional[S]=Z,S++}else if(O.isSpotLight){const Z=e.get(O);Z.position.setFromMatrixPosition(O.matrixWorld),Z.color.copy(ee).multiplyScalar(Y),Z.distance=J,Z.coneCos=Math.cos(O.angle),Z.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Z.decay=O.decay,r.spot[R]=Z;const V=O.shadow;if(O.map&&(r.spotLightMap[z]=O.map,z++,V.updateMatrices(O),O.castShadow&&F++),r.spotLightMatrix[R]=V.matrix,O.castShadow){const K=t.get(O);K.shadowIntensity=V.intensity,K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,r.spotShadow[R]=K,r.spotShadowMap[R]=q,C++}R++}else if(O.isRectAreaLight){const Z=e.get(O);Z.color.copy(ee).multiplyScalar(Y),Z.halfWidth.set(O.width*.5,0,0),Z.halfHeight.set(0,O.height*.5,0),r.rectArea[x]=Z,x++}else if(O.isPointLight){const Z=e.get(O);if(Z.color.copy(O.color).multiplyScalar(O.intensity),Z.distance=O.distance,Z.decay=O.decay,O.castShadow){const V=O.shadow,K=t.get(O);K.shadowIntensity=V.intensity,K.shadowBias=V.bias,K.shadowNormalBias=V.normalBias,K.shadowRadius=V.radius,K.shadowMapSize=V.mapSize,K.shadowCameraNear=V.camera.near,K.shadowCameraFar=V.camera.far,r.pointShadow[M]=K,r.pointShadowMap[M]=q,r.pointShadowMatrix[M]=O.shadow.matrix,P++}r.point[M]=Z,M++}else if(O.isHemisphereLight){const Z=e.get(O);Z.skyColor.copy(O.color).multiplyScalar(Y),Z.groundColor.copy(O.groundColor).multiplyScalar(Y),r.hemi[y]=Z,y++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==S||w.pointLength!==M||w.spotLength!==R||w.rectAreaLength!==x||w.hemiLength!==y||w.numDirectionalShadows!==b||w.numPointShadows!==P||w.numSpotShadows!==C||w.numSpotMaps!==z||w.numLightProbes!==B)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=x,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=C+z-F,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=B,w.directionalLength=S,w.pointLength=M,w.spotLength=R,w.rectAreaLength=x,w.hemiLength=y,w.numDirectionalShadows=b,w.numPointShadows=P,w.numSpotShadows=C,w.numSpotMaps=z,w.numLightProbes=B,r.version=R1++)}function h(p,v){let _=0,g=0,S=0,M=0,R=0;const x=v.matrixWorldInverse;for(let y=0,b=p.length;y<b;y++){const P=p[y];if(P.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(x),_++}else if(P.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(x),C.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(x),S++}else if(P.isRectAreaLight){const C=r.rectArea[M];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(x),c.identity(),l.copy(P.matrixWorld),l.premultiply(x),c.extractRotation(l),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),M++}else if(P.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(x),g++}else if(P.isHemisphereLight){const C=r.hemi[R];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(x),R++}}}return{setup:f,setupView:h,state:r}}function vg(s){const e=new b1(s),t=[],r=[];function o(v){p.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function c(v){r.push(v)}function f(){e.setup(t)}function h(v){e.setupView(t,v)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function L1(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new vg(s),e.set(o,[f])):l>=c.length?(f=new vg(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const D1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,I1=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],U1=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],_g=new Gt,jo=new X,Cf=new X;function F1(s,e,t){let r=new Id;const o=new Be,l=new Be,c=new jt,f=new jx,h=new $x,p={},v=t.maxTextureSize,_={[Dr]:Un,[Un]:Dr,[Zi]:Zi},g=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:D1,fragmentShader:N1}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const M=new qn;M.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new oi(M,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let y=this.type;this.render=function(F,B,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;this.type===s_&&(mt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xl);const D=s.getRenderTarget(),ue=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(Ji),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const Y=y!==this.type;Y&&B.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(q=>q.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,q=F.length;J<q;J++){const Z=F[J],V=Z.shadow;if(V===void 0){mt("WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const K=V.getFrameExtents();o.multiply(K),l.copy(V.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/K.x),o.x=l.x*K.x,V.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/K.y),o.y=l.y*K.y,V.mapSize.y=l.y));const ne=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ne,V.map===null||Y===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===$o){if(Z.isPointLight){mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new bi(o.x,o.y,{format:Ks,type:er,minFilter:xn,magFilter:xn,generateMipmaps:!1}),V.map.texture.name=Z.name+".shadowMap",V.map.depthTexture=new ra(o.x,o.y,Ci),V.map.depthTexture.name=Z.name+".shadowMapDepth",V.map.depthTexture.format=tr,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=fn,V.map.depthTexture.magFilter=fn}else Z.isPointLight?(V.map=new l0(o.x),V.map.depthTexture=new cx(o.x,Li)):(V.map=new bi(o.x,o.y),V.map.depthTexture=new ra(o.x,o.y,Li)),V.map.depthTexture.name=Z.name+".shadowMap",V.map.depthTexture.format=tr,this.type===Xl?(V.map.depthTexture.compareFunction=ne?Dd:Ld,V.map.depthTexture.minFilter=xn,V.map.depthTexture.magFilter=xn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=fn,V.map.depthTexture.magFilter=fn);V.camera.updateProjectionMatrix()}const oe=V.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<oe;I++){if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,I),s.clear();else{I===0&&(s.setRenderTarget(V.map),s.clear());const j=V.getViewport(I);c.set(l.x*j.x,l.y*j.y,l.x*j.z,l.y*j.w),ee.viewport(c)}if(Z.isPointLight){const j=V.camera,ve=V.matrix,Oe=Z.distance||j.far;Oe!==j.far&&(j.far=Oe,j.updateProjectionMatrix()),jo.setFromMatrixPosition(Z.matrixWorld),j.position.copy(jo),Cf.copy(j.position),Cf.add(I1[I]),j.up.copy(U1[I]),j.lookAt(Cf),j.updateMatrixWorld(),ve.makeTranslation(-jo.x,-jo.y,-jo.z),_g.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),V._frustum.setFromProjectionMatrix(_g,j.coordinateSystem,j.reversedDepth)}else V.updateMatrices(Z);r=V.getFrustum(),C(B,w,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===$o&&b(V,w),V.needsUpdate=!1}y=this.type,x.needsUpdate=!1,s.setRenderTarget(D,ue,O)};function b(F,B){const w=e.update(R);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new bi(o.x,o.y,{format:Ks,type:er})),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(B,null,w,g,R,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(B,null,w,S,R,null)}function P(F,B,w,D){let ue=null;const O=w.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(O!==void 0)ue=O;else if(ue=w.isPointLight===!0?h:f,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const ee=ue.uuid,Y=B.uuid;let J=p[ee];J===void 0&&(J={},p[ee]=J);let q=J[Y];q===void 0&&(q=ue.clone(),J[Y]=q,B.addEventListener("dispose",z)),ue=q}if(ue.visible=B.visible,ue.wireframe=B.wireframe,D===$o?ue.side=B.shadowSide!==null?B.shadowSide:B.side:ue.side=B.shadowSide!==null?B.shadowSide:_[B.side],ue.alphaMap=B.alphaMap,ue.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,ue.map=B.map,ue.clipShadows=B.clipShadows,ue.clippingPlanes=B.clippingPlanes,ue.clipIntersection=B.clipIntersection,ue.displacementMap=B.displacementMap,ue.displacementScale=B.displacementScale,ue.displacementBias=B.displacementBias,ue.wireframeLinewidth=B.wireframeLinewidth,ue.linewidth=B.linewidth,w.isPointLight===!0&&ue.isMeshDistanceMaterial===!0){const ee=s.properties.get(ue);ee.light=w}return ue}function C(F,B,w,D,ue){if(F.visible===!1)return;if(F.layers.test(B.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&ue===$o)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,F.matrixWorld);const Y=e.update(F),J=F.material;if(Array.isArray(J)){const q=Y.groups;for(let Z=0,V=q.length;Z<V;Z++){const K=q[Z],ne=J[K.materialIndex];if(ne&&ne.visible){const oe=P(F,ne,D,ue);F.onBeforeShadow(s,F,B,w,Y,oe,K),s.renderBufferDirect(w,null,Y,oe,F,K),F.onAfterShadow(s,F,B,w,Y,oe,K)}}}else if(J.visible){const q=P(F,J,D,ue);F.onBeforeShadow(s,F,B,w,Y,q,null),s.renderBufferDirect(w,null,Y,q,F,null),F.onAfterShadow(s,F,B,w,Y,q,null)}}const ee=F.children;for(let Y=0,J=ee.length;Y<J;Y++)C(ee[Y],B,w,D,ue)}function z(F){F.target.removeEventListener("dispose",z);for(const w in p){const D=p[w],ue=F.target.uuid;ue in D&&(D[ue].dispose(),delete D[ue])}}}function O1(s,e){function t(){let H=!1;const be=new jt;let we=null;const ke=new jt(0,0,0,0);return{setMask:function(Te){we!==Te&&!H&&(s.colorMask(Te,Te,Te,Te),we=Te)},setLocked:function(Te){H=Te},setClear:function(Te,de,$e,dt,It){It===!0&&(Te*=dt,de*=dt,$e*=dt),be.set(Te,de,$e,dt),ke.equals(be)===!1&&(s.clearColor(Te,de,$e,dt),ke.copy(be))},reset:function(){H=!1,we=null,ke.set(-1,0,0,0)}}}function r(){let H=!1,be=!1,we=null,ke=null,Te=null;return{setReversed:function(de){if(be!==de){const $e=e.get("EXT_clip_control");de?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),be=de;const dt=Te;Te=null,this.setClear(dt)}},getReversed:function(){return be},setTest:function(de){de?he(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(de){we!==de&&!H&&(s.depthMask(de),we=de)},setFunc:function(de){if(be&&(de=B_[de]),ke!==de){switch(de){case bf:s.depthFunc(s.NEVER);break;case Lf:s.depthFunc(s.ALWAYS);break;case Df:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case Nf:s.depthFunc(s.EQUAL);break;case If:s.depthFunc(s.GEQUAL);break;case Uf:s.depthFunc(s.GREATER);break;case Ff:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ke=de}},setLocked:function(de){H=de},setClear:function(de){Te!==de&&(Te=de,be&&(de=1-de),s.clearDepth(de))},reset:function(){H=!1,we=null,ke=null,Te=null,be=!1}}}function o(){let H=!1,be=null,we=null,ke=null,Te=null,de=null,$e=null,dt=null,It=null;return{setTest:function(wt){H||(wt?he(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(wt){be!==wt&&!H&&(s.stencilMask(wt),be=wt)},setFunc:function(wt,jn,yn){(we!==wt||ke!==jn||Te!==yn)&&(s.stencilFunc(wt,jn,yn),we=wt,ke=jn,Te=yn)},setOp:function(wt,jn,yn){(de!==wt||$e!==jn||dt!==yn)&&(s.stencilOp(wt,jn,yn),de=wt,$e=jn,dt=yn)},setLocked:function(wt){H=wt},setClear:function(wt){It!==wt&&(s.clearStencil(wt),It=wt)},reset:function(){H=!1,be=null,we=null,ke=null,Te=null,de=null,$e=null,dt=null,It=null}}}const l=new t,c=new r,f=new o,h=new WeakMap,p=new WeakMap;let v={},_={},g=new WeakMap,S=[],M=null,R=!1,x=null,y=null,b=null,P=null,C=null,z=null,F=null,B=new Tt(0,0,0),w=0,D=!1,ue=null,O=null,ee=null,Y=null,J=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,V=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=V>=1):K.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=V>=2);let ne=null,oe={};const I=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),ve=new jt().fromArray(I),Oe=new jt().fromArray(j);function Ye(H,be,we,ke){const Te=new Uint8Array(4),de=s.createTexture();s.bindTexture(H,de),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<we;$e++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,ke,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(be+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return de}const ie={};ie[s.TEXTURE_2D]=Ye(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=Ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=Ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=Ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),he(s.DEPTH_TEST),c.setFunc($s),_e(!1),De(pm),he(s.CULL_FACE),ge(Ji);function he(H){v[H]!==!0&&(s.enable(H),v[H]=!0)}function pe(H){v[H]!==!1&&(s.disable(H),v[H]=!1)}function Le(H,be){return _[H]!==be?(s.bindFramebuffer(H,be),_[H]=be,H===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=be),H===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=be),!0):!1}function We(H,be){let we=S,ke=!1;if(H){we=g.get(be),we===void 0&&(we=[],g.set(be,we));const Te=H.textures;if(we.length!==Te.length||we[0]!==s.COLOR_ATTACHMENT0){for(let de=0,$e=Te.length;de<$e;de++)we[de]=s.COLOR_ATTACHMENT0+de;we.length=Te.length,ke=!0}}else we[0]!==s.BACK&&(we[0]=s.BACK,ke=!0);ke&&s.drawBuffers(we)}function lt(H){return M!==H?(s.useProgram(H),M=H,!0):!1}const Lt={[ns]:s.FUNC_ADD,[a_]:s.FUNC_SUBTRACT,[l_]:s.FUNC_REVERSE_SUBTRACT};Lt[u_]=s.MIN,Lt[c_]=s.MAX;const ft={[f_]:s.ZERO,[d_]:s.ONE,[h_]:s.SRC_COLOR,[Rf]:s.SRC_ALPHA,[x_]:s.SRC_ALPHA_SATURATE,[v_]:s.DST_COLOR,[m_]:s.DST_ALPHA,[p_]:s.ONE_MINUS_SRC_COLOR,[Pf]:s.ONE_MINUS_SRC_ALPHA,[__]:s.ONE_MINUS_DST_COLOR,[g_]:s.ONE_MINUS_DST_ALPHA,[y_]:s.CONSTANT_COLOR,[S_]:s.ONE_MINUS_CONSTANT_COLOR,[M_]:s.CONSTANT_ALPHA,[E_]:s.ONE_MINUS_CONSTANT_ALPHA};function ge(H,be,we,ke,Te,de,$e,dt,It,wt){if(H===Ji){R===!0&&(pe(s.BLEND),R=!1);return}if(R===!1&&(he(s.BLEND),R=!0),H!==o_){if(H!==x||wt!==D){if((y!==ns||C!==ns)&&(s.blendEquation(s.FUNC_ADD),y=ns,C=ns),wt)switch(H){case qs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mm:s.blendFunc(s.ONE,s.ONE);break;case gm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",H);break}else switch(H){case qs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case gm:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vm:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",H);break}b=null,P=null,z=null,F=null,B.set(0,0,0),w=0,x=H,D=wt}return}Te=Te||be,de=de||we,$e=$e||ke,(be!==y||Te!==C)&&(s.blendEquationSeparate(Lt[be],Lt[Te]),y=be,C=Te),(we!==b||ke!==P||de!==z||$e!==F)&&(s.blendFuncSeparate(ft[we],ft[ke],ft[de],ft[$e]),b=we,P=ke,z=de,F=$e),(dt.equals(B)===!1||It!==w)&&(s.blendColor(dt.r,dt.g,dt.b,It),B.copy(dt),w=It),x=H,D=!1}function Me(H,be){H.side===Zi?pe(s.CULL_FACE):he(s.CULL_FACE);let we=H.side===Un;be&&(we=!we),_e(we),H.blending===qs&&H.transparent===!1?ge(Ji):ge(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),l.setMask(H.colorWrite);const ke=H.stencilWrite;f.setTest(ke),ke&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),st(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function _e(H){ue!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),ue=H)}function De(H){H!==i_?(he(s.CULL_FACE),H!==O&&(H===pm?s.cullFace(s.BACK):H===r_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),O=H}function N(H){H!==ee&&(Z&&s.lineWidth(H),ee=H)}function st(H,be,we){H?(he(s.POLYGON_OFFSET_FILL),(Y!==be||J!==we)&&(Y=be,J=we,c.getReversed()&&(be=-be),s.polygonOffset(be,we))):pe(s.POLYGON_OFFSET_FILL)}function Ie(H){H?he(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function it(H){H===void 0&&(H=s.TEXTURE0+q-1),ne!==H&&(s.activeTexture(H),ne=H)}function Pe(H,be,we){we===void 0&&(ne===null?we=s.TEXTURE0+q-1:we=ne);let ke=oe[we];ke===void 0&&(ke={type:void 0,texture:void 0},oe[we]=ke),(ke.type!==H||ke.texture!==be)&&(ne!==we&&(s.activeTexture(we),ne=we),s.bindTexture(H,be||ie[H]),ke.type=H,ke.texture=be)}function L(){const H=oe[ne];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function ce(){try{s.texSubImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function me(){try{s.texSubImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Xe(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Ae(){try{s.texStorage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Je(){try{s.texStorage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function at(){try{s.texImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Se(){try{s.texImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Re(H){ve.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ve.copy(H))}function Ke(H){Oe.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Oe.copy(H))}function je(H,be){let we=p.get(be);we===void 0&&(we=new WeakMap,p.set(be,we));let ke=we.get(H);ke===void 0&&(ke=s.getUniformBlockIndex(be,H.name),we.set(H,ke))}function ze(H,be){const ke=p.get(be).get(H);h.get(be)!==ke&&(s.uniformBlockBinding(be,ke,H.__bindingPointIndex),h.set(be,ke))}function gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ne=null,oe={},_={},g=new WeakMap,S=[],M=null,R=!1,x=null,y=null,b=null,P=null,C=null,z=null,F=null,B=new Tt(0,0,0),w=0,D=!1,ue=null,O=null,ee=null,Y=null,J=null,ve.set(0,0,s.canvas.width,s.canvas.height),Oe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:he,disable:pe,bindFramebuffer:Le,drawBuffers:We,useProgram:lt,setBlending:ge,setMaterial:Me,setFlipSided:_e,setCullFace:De,setLineWidth:N,setPolygonOffset:st,setScissorTest:Ie,activeTexture:it,bindTexture:Pe,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:at,texImage3D:Se,updateUBOMapping:je,uniformBlockBinding:ze,texStorage2D:Ae,texStorage3D:Je,texSubImage2D:ce,texSubImage3D:me,compressedTexSubImage2D:fe,compressedTexSubImage3D:Xe,scissor:Re,viewport:Ke,reset:gt}}function B1(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Be,v=new WeakMap;let _;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,E){return S?new OffscreenCanvas(L,E):Jl("canvas")}function R(L,E,G){let ce=1;const me=Pe(L);if((me.width>G||me.height>G)&&(ce=G/Math.max(me.width,me.height)),ce<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(ce*me.width),Xe=Math.floor(ce*me.height);_===void 0&&(_=M(fe,Xe));const Ae=E?M(fe,Xe):_;return Ae.width=fe,Ae.height=Xe,Ae.getContext("2d").drawImage(L,0,0,fe,Xe),mt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+fe+"x"+Xe+")."),Ae}else return"data"in L&&mt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),L;return L}function x(L){return L.generateMipmaps}function y(L){s.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(L,E,G,ce,me=!1){if(L!==null){if(s[L]!==void 0)return s[L];mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=E;if(E===s.RED&&(G===s.FLOAT&&(fe=s.R32F),G===s.HALF_FLOAT&&(fe=s.R16F),G===s.UNSIGNED_BYTE&&(fe=s.R8)),E===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(fe=s.R8UI),G===s.UNSIGNED_SHORT&&(fe=s.R16UI),G===s.UNSIGNED_INT&&(fe=s.R32UI),G===s.BYTE&&(fe=s.R8I),G===s.SHORT&&(fe=s.R16I),G===s.INT&&(fe=s.R32I)),E===s.RG&&(G===s.FLOAT&&(fe=s.RG32F),G===s.HALF_FLOAT&&(fe=s.RG16F),G===s.UNSIGNED_BYTE&&(fe=s.RG8)),E===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(fe=s.RG8UI),G===s.UNSIGNED_SHORT&&(fe=s.RG16UI),G===s.UNSIGNED_INT&&(fe=s.RG32UI),G===s.BYTE&&(fe=s.RG8I),G===s.SHORT&&(fe=s.RG16I),G===s.INT&&(fe=s.RG32I)),E===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),G===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),G===s.UNSIGNED_INT&&(fe=s.RGB32UI),G===s.BYTE&&(fe=s.RGB8I),G===s.SHORT&&(fe=s.RGB16I),G===s.INT&&(fe=s.RGB32I)),E===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),G===s.UNSIGNED_INT&&(fe=s.RGBA32UI),G===s.BYTE&&(fe=s.RGBA8I),G===s.SHORT&&(fe=s.RGBA16I),G===s.INT&&(fe=s.RGBA32I)),E===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),E===s.RGBA){const Xe=me?Kl:Rt.getTransfer(ce);G===s.FLOAT&&(fe=s.RGBA32F),G===s.HALF_FLOAT&&(fe=s.RGBA16F),G===s.UNSIGNED_BYTE&&(fe=Xe===Ut?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function C(L,E){let G;return L?E===null||E===Li||E===na?G=s.DEPTH24_STENCIL8:E===Ci?G=s.DEPTH32F_STENCIL8:E===ta&&(G=s.DEPTH24_STENCIL8,mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Li||E===na?G=s.DEPTH_COMPONENT24:E===Ci?G=s.DEPTH_COMPONENT32F:E===ta&&(G=s.DEPTH_COMPONENT16),G}function z(L,E){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==fn&&L.minFilter!==xn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function F(L){const E=L.target;E.removeEventListener("dispose",F),w(E),E.isVideoTexture&&v.delete(E)}function B(L){const E=L.target;E.removeEventListener("dispose",B),ue(E)}function w(L){const E=r.get(L);if(E.__webglInit===void 0)return;const G=L.source,ce=g.get(G);if(ce){const me=ce[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&D(L),Object.keys(ce).length===0&&g.delete(G)}r.remove(L)}function D(L){const E=r.get(L);s.deleteTexture(E.__webglTexture);const G=L.source,ce=g.get(G);delete ce[E.__cacheKey],c.memory.textures--}function ue(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(E.__webglFramebuffer[ce]))for(let me=0;me<E.__webglFramebuffer[ce].length;me++)s.deleteFramebuffer(E.__webglFramebuffer[ce][me]);else s.deleteFramebuffer(E.__webglFramebuffer[ce]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ce])}else{if(Array.isArray(E.__webglFramebuffer))for(let ce=0;ce<E.__webglFramebuffer.length;ce++)s.deleteFramebuffer(E.__webglFramebuffer[ce]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ce=0;ce<E.__webglColorRenderbuffer.length;ce++)E.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ce]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=L.textures;for(let ce=0,me=G.length;ce<me;ce++){const fe=r.get(G[ce]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),c.memory.textures--),r.remove(G[ce])}r.remove(L)}let O=0;function ee(){O=0}function Y(){const L=O;return L>=o.maxTextures&&mt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),O+=1,L}function J(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function q(L,E){const G=r.get(L);if(L.isVideoTexture&&Ie(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){const ce=L.image;if(ce===null)mt("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)mt("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(G,L,E);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+E)}function Z(L,E){const G=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){ie(G,L,E);return}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+E)}function V(L,E){const G=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){ie(G,L,E);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+E)}function K(L,E){const G=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&G.__version!==L.version){he(G,L,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+E)}const ne={[Of]:s.REPEAT,[Ki]:s.CLAMP_TO_EDGE,[Bf]:s.MIRRORED_REPEAT},oe={[fn]:s.NEAREST,[A_]:s.NEAREST_MIPMAP_NEAREST,[_l]:s.NEAREST_MIPMAP_LINEAR,[xn]:s.LINEAR,[Yc]:s.LINEAR_MIPMAP_NEAREST,[rs]:s.LINEAR_MIPMAP_LINEAR},I={[P_]:s.NEVER,[I_]:s.ALWAYS,[b_]:s.LESS,[Ld]:s.LEQUAL,[L_]:s.EQUAL,[Dd]:s.GEQUAL,[D_]:s.GREATER,[N_]:s.NOTEQUAL};function j(L,E){if(E.type===Ci&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===xn||E.magFilter===Yc||E.magFilter===_l||E.magFilter===rs||E.minFilter===xn||E.minFilter===Yc||E.minFilter===_l||E.minFilter===rs)&&mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ne[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ne[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ne[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,oe[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,oe[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,I[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===fn||E.minFilter!==_l&&E.minFilter!==rs||E.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function ve(L,E){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",F));const ce=E.source;let me=g.get(ce);me===void 0&&(me={},g.set(ce,me));const fe=J(E);if(fe!==L.__cacheKey){me[fe]===void 0&&(me[fe]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,G=!0),me[fe].usedTimes++;const Xe=me[L.__cacheKey];Xe!==void 0&&(me[L.__cacheKey].usedTimes--,Xe.usedTimes===0&&D(E)),L.__cacheKey=fe,L.__webglTexture=me[fe].texture}return G}function Oe(L,E,G){return Math.floor(Math.floor(L/G)/E)}function Ye(L,E,G,ce){const fe=L.updateRanges;if(fe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,G,ce,E.data);else{fe.sort((Se,Re)=>Se.start-Re.start);let Xe=0;for(let Se=1;Se<fe.length;Se++){const Re=fe[Xe],Ke=fe[Se],je=Re.start+Re.count,ze=Oe(Ke.start,E.width,4),gt=Oe(Re.start,E.width,4);Ke.start<=je+1&&ze===gt&&Oe(Ke.start+Ke.count-1,E.width,4)===ze?Re.count=Math.max(Re.count,Ke.start+Ke.count-Re.start):(++Xe,fe[Xe]=Ke)}fe.length=Xe+1;const Ae=s.getParameter(s.UNPACK_ROW_LENGTH),Je=s.getParameter(s.UNPACK_SKIP_PIXELS),at=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Se=0,Re=fe.length;Se<Re;Se++){const Ke=fe[Se],je=Math.floor(Ke.start/4),ze=Math.ceil(Ke.count/4),gt=je%E.width,H=Math.floor(je/E.width),be=ze,we=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,gt),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,gt,H,be,we,G,ce,E.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Je),s.pixelStorei(s.UNPACK_SKIP_ROWS,at)}}function ie(L,E,G){let ce=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ce=s.TEXTURE_3D);const me=ve(L,E),fe=E.source;t.bindTexture(ce,L.__webglTexture,s.TEXTURE0+G);const Xe=r.get(fe);if(fe.version!==Xe.__version||me===!0){t.activeTexture(s.TEXTURE0+G);const Ae=Rt.getPrimaries(Rt.workingColorSpace),Je=E.colorSpace===br?null:Rt.getPrimaries(E.colorSpace),at=E.colorSpace===br||Ae===Je?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Se=R(E.image,!1,o.maxTextureSize);Se=it(E,Se);const Re=l.convert(E.format,E.colorSpace),Ke=l.convert(E.type);let je=P(E.internalFormat,Re,Ke,E.colorSpace,E.isVideoTexture);j(ce,E);let ze;const gt=E.mipmaps,H=E.isVideoTexture!==!0,be=Xe.__version===void 0||me===!0,we=fe.dataReady,ke=z(E,Se);if(E.isDepthTexture)je=C(E.format===ss,E.type),be&&(H?t.texStorage2D(s.TEXTURE_2D,1,je,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,je,Se.width,Se.height,0,Re,Ke,null));else if(E.isDataTexture)if(gt.length>0){H&&be&&t.texStorage2D(s.TEXTURE_2D,ke,je,gt[0].width,gt[0].height);for(let Te=0,de=gt.length;Te<de;Te++)ze=gt[Te],H?we&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,ze.width,ze.height,Re,Ke,ze.data):t.texImage2D(s.TEXTURE_2D,Te,je,ze.width,ze.height,0,Re,Ke,ze.data);E.generateMipmaps=!1}else H?(be&&t.texStorage2D(s.TEXTURE_2D,ke,je,Se.width,Se.height),we&&Ye(E,Se,Re,Ke)):t.texImage2D(s.TEXTURE_2D,0,je,Se.width,Se.height,0,Re,Ke,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ke,je,gt[0].width,gt[0].height,Se.depth);for(let Te=0,de=gt.length;Te<de;Te++)if(ze=gt[Te],E.format!==_i)if(Re!==null)if(H){if(we)if(E.layerUpdates.size>0){const $e=$m(ze.width,ze.height,E.format,E.type);for(const dt of E.layerUpdates){const It=ze.data.subarray(dt*$e/ze.data.BYTES_PER_ELEMENT,(dt+1)*$e/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,dt,ze.width,ze.height,1,Re,It)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,ze.width,ze.height,Se.depth,Re,ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,je,ze.width,ze.height,Se.depth,0,ze.data,0,0);else mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?we&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,ze.width,ze.height,Se.depth,Re,Ke,ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Te,je,ze.width,ze.height,Se.depth,0,Re,Ke,ze.data)}else{H&&be&&t.texStorage2D(s.TEXTURE_2D,ke,je,gt[0].width,gt[0].height);for(let Te=0,de=gt.length;Te<de;Te++)ze=gt[Te],E.format!==_i?Re!==null?H?we&&t.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,ze.width,ze.height,Re,ze.data):t.compressedTexImage2D(s.TEXTURE_2D,Te,je,ze.width,ze.height,0,ze.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?we&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,ze.width,ze.height,Re,Ke,ze.data):t.texImage2D(s.TEXTURE_2D,Te,je,ze.width,ze.height,0,Re,Ke,ze.data)}else if(E.isDataArrayTexture)if(H){if(be&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ke,je,Se.width,Se.height,Se.depth),we)if(E.layerUpdates.size>0){const Te=$m(Se.width,Se.height,E.format,E.type);for(const de of E.layerUpdates){const $e=Se.data.subarray(de*Te/Se.data.BYTES_PER_ELEMENT,(de+1)*Te/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,Se.width,Se.height,1,Re,Ke,$e)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Re,Ke,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,je,Se.width,Se.height,Se.depth,0,Re,Ke,Se.data);else if(E.isData3DTexture)H?(be&&t.texStorage3D(s.TEXTURE_3D,ke,je,Se.width,Se.height,Se.depth),we&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Re,Ke,Se.data)):t.texImage3D(s.TEXTURE_3D,0,je,Se.width,Se.height,Se.depth,0,Re,Ke,Se.data);else if(E.isFramebufferTexture){if(be)if(H)t.texStorage2D(s.TEXTURE_2D,ke,je,Se.width,Se.height);else{let Te=Se.width,de=Se.height;for(let $e=0;$e<ke;$e++)t.texImage2D(s.TEXTURE_2D,$e,je,Te,de,0,Re,Ke,null),Te>>=1,de>>=1}}else if(gt.length>0){if(H&&be){const Te=Pe(gt[0]);t.texStorage2D(s.TEXTURE_2D,ke,je,Te.width,Te.height)}for(let Te=0,de=gt.length;Te<de;Te++)ze=gt[Te],H?we&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,Re,Ke,ze):t.texImage2D(s.TEXTURE_2D,Te,je,Re,Ke,ze);E.generateMipmaps=!1}else if(H){if(be){const Te=Pe(Se);t.texStorage2D(s.TEXTURE_2D,ke,je,Te.width,Te.height)}we&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Ke,Se)}else t.texImage2D(s.TEXTURE_2D,0,je,Re,Ke,Se);x(E)&&y(ce),Xe.__version=fe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function he(L,E,G){if(E.image.length!==6)return;const ce=ve(L,E),me=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+G);const fe=r.get(me);if(me.version!==fe.__version||ce===!0){t.activeTexture(s.TEXTURE0+G);const Xe=Rt.getPrimaries(Rt.workingColorSpace),Ae=E.colorSpace===br?null:Rt.getPrimaries(E.colorSpace),Je=E.colorSpace===br||Xe===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const at=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,Re=[];for(let de=0;de<6;de++)!at&&!Se?Re[de]=R(E.image[de],!0,o.maxCubemapSize):Re[de]=Se?E.image[de].image:E.image[de],Re[de]=it(E,Re[de]);const Ke=Re[0],je=l.convert(E.format,E.colorSpace),ze=l.convert(E.type),gt=P(E.internalFormat,je,ze,E.colorSpace),H=E.isVideoTexture!==!0,be=fe.__version===void 0||ce===!0,we=me.dataReady;let ke=z(E,Ke);j(s.TEXTURE_CUBE_MAP,E);let Te;if(at){H&&be&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,gt,Ke.width,Ke.height);for(let de=0;de<6;de++){Te=Re[de].mipmaps;for(let $e=0;$e<Te.length;$e++){const dt=Te[$e];E.format!==_i?je!==null?H?we&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e,0,0,dt.width,dt.height,je,dt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e,gt,dt.width,dt.height,0,dt.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e,0,0,dt.width,dt.height,je,ze,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e,gt,dt.width,dt.height,0,je,ze,dt.data)}}}else{if(Te=E.mipmaps,H&&be){Te.length>0&&ke++;const de=Pe(Re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,gt,de.width,de.height)}for(let de=0;de<6;de++)if(Se){H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Re[de].width,Re[de].height,je,ze,Re[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,gt,Re[de].width,Re[de].height,0,je,ze,Re[de].data);for(let $e=0;$e<Te.length;$e++){const It=Te[$e].image[de].image;H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e+1,0,0,It.width,It.height,je,ze,It.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e+1,gt,It.width,It.height,0,je,ze,It.data)}}else{H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,je,ze,Re[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,gt,je,ze,Re[de]);for(let $e=0;$e<Te.length;$e++){const dt=Te[$e];H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e+1,0,0,je,ze,dt.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e+1,gt,je,ze,dt.image[de])}}}x(E)&&y(s.TEXTURE_CUBE_MAP),fe.__version=me.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function pe(L,E,G,ce,me,fe){const Xe=l.convert(G.format,G.colorSpace),Ae=l.convert(G.type),Je=P(G.internalFormat,Xe,Ae,G.colorSpace),at=r.get(E),Se=r.get(G);if(Se.__renderTarget=E,!at.__hasExternalTextures){const Re=Math.max(1,E.width>>fe),Ke=Math.max(1,E.height>>fe);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,fe,Je,Re,Ke,E.depth,0,Xe,Ae,null):t.texImage2D(me,fe,Je,Re,Ke,0,Xe,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),st(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,me,Se.__webglTexture,0,N(E)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,me,Se.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(L,E,G){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const ce=E.depthTexture,me=ce&&ce.isDepthTexture?ce.type:null,fe=C(E.stencilBuffer,me),Xe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;st(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,N(E),fe,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,N(E),fe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,fe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,L)}else{const ce=E.textures;for(let me=0;me<ce.length;me++){const fe=ce[me],Xe=l.convert(fe.format,fe.colorSpace),Ae=l.convert(fe.type),Je=P(fe.internalFormat,Xe,Ae,fe.colorSpace);st(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,N(E),Je,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,N(E),Je,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Je,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function We(L,E,G){const ce=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(E.depthTexture);if(me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ce){if(me.__webglInit===void 0&&(me.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),j(s.TEXTURE_CUBE_MAP,E.depthTexture);const at=l.convert(E.depthTexture.format),Se=l.convert(E.depthTexture.type);let Re;E.depthTexture.format===tr?Re=s.DEPTH_COMPONENT24:E.depthTexture.format===ss&&(Re=s.DEPTH24_STENCIL8);for(let Ke=0;Ke<6;Ke++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,Re,E.width,E.height,0,at,Se,null)}}else q(E.depthTexture,0);const fe=me.__webglTexture,Xe=N(E),Ae=ce?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,Je=E.depthTexture.format===ss?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===tr)st(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Je,Ae,fe,0,Xe):s.framebufferTexture2D(s.FRAMEBUFFER,Je,Ae,fe,0);else if(E.depthTexture.format===ss)st(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Je,Ae,fe,0,Xe):s.framebufferTexture2D(s.FRAMEBUFFER,Je,Ae,fe,0);else throw new Error("Unknown depthTexture format")}function lt(L){const E=r.get(L),G=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ce=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ce){const me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ce.removeEventListener("dispose",me)};ce.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=ce}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let ce=0;ce<6;ce++)We(E.__webglFramebuffer[ce],L,ce);else{const ce=L.texture.mipmaps;ce&&ce.length>0?We(E.__webglFramebuffer[0],L,0):We(E.__webglFramebuffer,L,0)}else if(G){E.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ce]),E.__webglDepthbuffer[ce]===void 0)E.__webglDepthbuffer[ce]=s.createRenderbuffer(),Le(E.__webglDepthbuffer[ce],L,!1);else{const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer[ce];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,fe)}}else{const ce=L.texture.mipmaps;if(ce&&ce.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Le(E.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,fe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(L,E,G){const ce=r.get(L);E!==void 0&&pe(ce.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&lt(L)}function ft(L){const E=L.texture,G=r.get(L),ce=r.get(E);L.addEventListener("dispose",B);const me=L.textures,fe=L.isWebGLCubeRenderTarget===!0,Xe=me.length>1;if(Xe||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=E.version,c.memory.textures++),fe){G.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[Ae]=[];for(let Je=0;Je<E.mipmaps.length;Je++)G.__webglFramebuffer[Ae][Je]=s.createFramebuffer()}else G.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)G.__webglFramebuffer[Ae]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let Ae=0,Je=me.length;Ae<Je;Ae++){const at=r.get(me[Ae]);at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&st(L)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ae=0;Ae<me.length;Ae++){const Je=me[Ae];G.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[Ae]);const at=l.convert(Je.format,Je.colorSpace),Se=l.convert(Je.type),Re=P(Je.internalFormat,at,Se,Je.colorSpace,L.isXRRenderTarget===!0),Ke=N(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,Re,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,G.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(G.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),j(s.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let Je=0;Je<E.mipmaps.length;Je++)pe(G.__webglFramebuffer[Ae][Je],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je);else pe(G.__webglFramebuffer[Ae],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);x(E)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Ae=0,Je=me.length;Ae<Je;Ae++){const at=me[Ae],Se=r.get(at);let Re=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Re=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Re,Se.__webglTexture),j(Re,at),pe(G.__webglFramebuffer,L,at,s.COLOR_ATTACHMENT0+Ae,Re,0),x(at)&&y(Re)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ce.__webglTexture),j(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let Je=0;Je<E.mipmaps.length;Je++)pe(G.__webglFramebuffer[Je],L,E,s.COLOR_ATTACHMENT0,Ae,Je);else pe(G.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,Ae,0);x(E)&&y(Ae),t.unbindTexture()}L.depthBuffer&&lt(L)}function ge(L){const E=L.textures;for(let G=0,ce=E.length;G<ce;G++){const me=E[G];if(x(me)){const fe=b(L),Xe=r.get(me).__webglTexture;t.bindTexture(fe,Xe),y(fe),t.unbindTexture()}}}const Me=[],_e=[];function De(L){if(L.samples>0){if(st(L)===!1){const E=L.textures,G=L.width,ce=L.height;let me=s.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=r.get(L),Ae=E.length>1;if(Ae)for(let at=0;at<E.length;at++)t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer);const Je=L.texture.mipmaps;Je&&Je.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let at=0;at<E.length;at++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[at]);const Se=r.get(E[at]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,G,ce,0,0,G,ce,me,s.NEAREST),h===!0&&(Me.length=0,_e.length=0,Me.push(s.COLOR_ATTACHMENT0+at),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Me.push(fe),_e.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,_e)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let at=0;at<E.length;at++){t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[at]);const Se=r.get(E[at]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,Se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function N(L){return Math.min(o.maxSamples,L.samples)}function st(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ie(L){const E=c.render.frame;v.get(L)!==E&&(v.set(L,E),L.update())}function it(L,E){const G=L.colorSpace,ce=L.format,me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==Js&&G!==br&&(Rt.getTransfer(G)===Ut?(ce!==_i||me!==Yn)&&mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",G)),E}function Pe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Y,this.resetTextureUnits=ee,this.setTexture2D=q,this.setTexture2DArray=Z,this.setTexture3D=V,this.setTextureCube=K,this.rebindTextures=Lt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=st,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function z1(s,e){function t(r,o=br){let l;const c=Rt.getTransfer(o);if(r===Yn)return s.UNSIGNED_BYTE;if(r===Ad)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Cd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Dg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Ng)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===bg)return s.BYTE;if(r===Lg)return s.SHORT;if(r===ta)return s.UNSIGNED_SHORT;if(r===wd)return s.INT;if(r===Li)return s.UNSIGNED_INT;if(r===Ci)return s.FLOAT;if(r===er)return s.HALF_FLOAT;if(r===Ig)return s.ALPHA;if(r===Ug)return s.RGB;if(r===_i)return s.RGBA;if(r===tr)return s.DEPTH_COMPONENT;if(r===ss)return s.DEPTH_STENCIL;if(r===Fg)return s.RED;if(r===Rd)return s.RED_INTEGER;if(r===Ks)return s.RG;if(r===Pd)return s.RG_INTEGER;if(r===bd)return s.RGBA_INTEGER;if(r===Yl||r===ql||r===jl||r===$l)if(c===Ut)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Yl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Yl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zf||r===kf||r===Vf||r===Hf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===zf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gf||r===Wf||r===Xf||r===Yf||r===qf||r===jf||r===$f)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Gf||r===Wf)return c===Ut?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Xf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Yf)return l.COMPRESSED_R11_EAC;if(r===qf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===jf)return l.COMPRESSED_RG11_EAC;if(r===$f)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Zf||r===Kf||r===Jf||r===Qf||r===ed||r===td||r===nd||r===id||r===rd||r===sd||r===od||r===ad||r===ld||r===ud)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Zf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qf)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ed)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===td)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===id)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sd)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===od)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ad)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ld)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ud)return c===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cd||r===fd||r===dd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===cd)return c===Ut?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===dd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hd||r===pd||r===md||r===gd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===hd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===pd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===md)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===na?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const k1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class H1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new jg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ni({vertexShader:k1,fragmentShader:V1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oi(new ru(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G1 extends to{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",h=1,p=null,v=null,_=null,g=null,S=null,M=null;const R=typeof XRWebGLBinding<"u",x=new H1,y={},b=t.getContextAttributes();let P=null,C=null;const z=[],F=[],B=new Be;let w=null;const D=new Xn;D.viewport=new jt;const ue=new Xn;ue.viewport=new jt;const O=[D,ue],ee=new ty;let Y=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let he=z[ie];return he===void 0&&(he=new ef,z[ie]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ie){let he=z[ie];return he===void 0&&(he=new ef,z[ie]=he),he.getGripSpace()},this.getHand=function(ie){let he=z[ie];return he===void 0&&(he=new ef,z[ie]=he),he.getHandSpace()};function q(ie){const he=F.indexOf(ie.inputSource);if(he===-1)return;const pe=z[he];pe!==void 0&&(pe.update(ie.inputSource,ie.frame,p||c),pe.dispatchEvent({type:ie.type,data:ie.inputSource}))}function Z(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",V);for(let ie=0;ie<z.length;ie++){const he=F[ie];he!==null&&(F[ie]=null,z[ie].disconnect(he))}Y=null,J=null,x.reset();for(const ie in y)delete y[ie];e.setRenderTarget(P),S=null,g=null,_=null,o=null,C=null,Ye.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,r.isPresenting===!0&&mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){f=ie,r.isPresenting===!0&&mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",V),b.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(B),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Le=null,We=null;b.depth&&(We=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=b.stencil?ss:tr,Le=b.stencil?na:Li);const lt={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(lt),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new bi(g.textureWidth,g.textureHeight,{format:_i,type:Yn,depthTexture:new ra(g.textureWidth,g.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const pe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new bi(S.framebufferWidth,S.framebufferHeight,{format:_i,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await o.requestReferenceSpace(f),Ye.setContext(o),Ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(ie){for(let he=0;he<ie.removed.length;he++){const pe=ie.removed[he],Le=F.indexOf(pe);Le>=0&&(F[Le]=null,z[Le].disconnect(pe))}for(let he=0;he<ie.added.length;he++){const pe=ie.added[he];let Le=F.indexOf(pe);if(Le===-1){for(let lt=0;lt<z.length;lt++)if(lt>=F.length){F.push(pe),Le=lt;break}else if(F[lt]===null){F[lt]=pe,Le=lt;break}if(Le===-1)break}const We=z[Le];We&&We.connect(pe)}}const K=new X,ne=new X;function oe(ie,he,pe){K.setFromMatrixPosition(he.matrixWorld),ne.setFromMatrixPosition(pe.matrixWorld);const Le=K.distanceTo(ne),We=he.projectionMatrix.elements,lt=pe.projectionMatrix.elements,Lt=We[14]/(We[10]-1),ft=We[14]/(We[10]+1),ge=(We[9]+1)/We[5],Me=(We[9]-1)/We[5],_e=(We[8]-1)/We[0],De=(lt[8]+1)/lt[0],N=Lt*_e,st=Lt*De,Ie=Le/(-_e+De),it=Ie*-_e;if(he.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(it),ie.translateZ(Ie),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),We[10]===-1)ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Pe=Lt+Ie,L=ft+Ie,E=N-it,G=st+(Le-it),ce=ge*ft/L*Pe,me=Me*ft/L*Pe;ie.projectionMatrix.makePerspective(E,G,ce,me,Pe,L),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function I(ie,he){he===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(he.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let he=ie.near,pe=ie.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),ee.near=ue.near=D.near=he,ee.far=ue.far=D.far=pe,(Y!==ee.near||J!==ee.far)&&(o.updateRenderState({depthNear:ee.near,depthFar:ee.far}),Y=ee.near,J=ee.far),ee.layers.mask=ie.layers.mask|6,D.layers.mask=ee.layers.mask&-5,ue.layers.mask=ee.layers.mask&-3;const Le=ie.parent,We=ee.cameras;I(ee,Le);for(let lt=0;lt<We.length;lt++)I(We[lt],Le);We.length===2?oe(ee,D,ue):ee.projectionMatrix.copy(D.projectionMatrix),j(ie,ee,Le)};function j(ie,he,pe){pe===null?ie.matrix.copy(he.matrixWorld):(ie.matrix.copy(pe.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(he.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(he.projectionMatrix),ie.projectionMatrixInverse.copy(he.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=vd*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(g===null&&S===null))return h},this.setFoveation=function(ie){h=ie,g!==null&&(g.fixedFoveation=ie),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ee)},this.getCameraTexture=function(ie){return y[ie]};let ve=null;function Oe(ie,he){if(v=he.getViewerPose(p||c),M=he,v!==null){const pe=v.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let Le=!1;pe.length!==ee.cameras.length&&(ee.cameras.length=0,Le=!0);for(let ft=0;ft<pe.length;ft++){const ge=pe[ft];let Me=null;if(S!==null)Me=S.getViewport(ge);else{const De=_.getViewSubImage(g,ge);Me=De.viewport,ft===0&&(e.setRenderTargetTextures(C,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(C))}let _e=O[ft];_e===void 0&&(_e=new Xn,_e.layers.enable(ft),_e.viewport=new jt,O[ft]=_e),_e.matrix.fromArray(ge.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ge.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Me.x,Me.y,Me.width,Me.height),ft===0&&(ee.matrix.copy(_e.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Le===!0&&ee.cameras.push(_e)}const We=o.enabledFeatures;if(We&&We.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){_=r.getBinding();const ft=_.getDepthInformation(pe[0]);ft&&ft.isValid&&ft.texture&&x.init(ft,o.renderState)}if(We&&We.includes("camera-access")&&R){e.state.unbindTexture(),_=r.getBinding();for(let ft=0;ft<pe.length;ft++){const ge=pe[ft].camera;if(ge){let Me=y[ge];Me||(Me=new jg,y[ge]=Me);const _e=_.getCameraImage(ge);Me.sourceTexture=_e}}}}for(let pe=0;pe<z.length;pe++){const Le=F[pe],We=z[pe];Le!==null&&We!==void 0&&We.update(Le,he,p||c)}ve&&ve(ie,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),M=null}const Ye=new a0;Ye.setAnimationLoop(Oe),this.setAnimationLoop=function(ie){ve=ie},this.dispose=function(){}}}const Qr=new Di,W1=new Gt;function X1(s,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,r0(s)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,b,P,C){y.isMeshBasicMaterial?l(x,y):y.isMeshLambertMaterial?(l(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(x,y),_(x,y)):y.isMeshPhongMaterial?(l(x,y),v(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(x,y),g(x,y),y.isMeshPhysicalMaterial&&S(x,y,C)):y.isMeshMatcapMaterial?(l(x,y),M(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),R(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(c(x,y),y.isLineDashedMaterial&&f(x,y)):y.isPointsMaterial?h(x,y,b,P):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Un&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Un&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const b=e.get(y),P=b.envMap,C=b.envMapRotation;P&&(x.envMap.value=P,Qr.copy(C),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),x.envMapRotation.value.setFromMatrix4(W1.makeRotationFromEuler(Qr)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function c(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function f(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function h(x,y,b,P){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*b,x.scale.value=P*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function v(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function g(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,b){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Un&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function R(x,y){const b=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Y1(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,P){const C=P.program;r.uniformBlockBinding(b,C)}function p(b,P){let C=o[b.id];C===void 0&&(M(b),C=v(b),o[b.id]=C,b.addEventListener("dispose",x));const z=P.program;r.updateUBOMapping(b,z);const F=e.render.frame;l[b.id]!==F&&(g(b),l[b.id]=F)}function v(b){const P=_();b.__bindingPointIndex=P;const C=s.createBuffer(),z=b.__size,F=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,z,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,C),C}function _(){for(let b=0;b<f;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const P=o[b.id],C=b.uniforms,z=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let F=0,B=C.length;F<B;F++){const w=Array.isArray(C[F])?C[F]:[C[F]];for(let D=0,ue=w.length;D<ue;D++){const O=w[D];if(S(O,F,D,z)===!0){const ee=O.__offset,Y=Array.isArray(O.value)?O.value:[O.value];let J=0;for(let q=0;q<Y.length;q++){const Z=Y[q],V=R(Z);typeof Z=="number"||typeof Z=="boolean"?(O.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,ee+J,O.__data)):Z.isMatrix3?(O.__data[0]=Z.elements[0],O.__data[1]=Z.elements[1],O.__data[2]=Z.elements[2],O.__data[3]=0,O.__data[4]=Z.elements[3],O.__data[5]=Z.elements[4],O.__data[6]=Z.elements[5],O.__data[7]=0,O.__data[8]=Z.elements[6],O.__data[9]=Z.elements[7],O.__data[10]=Z.elements[8],O.__data[11]=0):(Z.toArray(O.__data,J),J+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ee,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(b,P,C,z){const F=b.value,B=P+"_"+C;if(z[B]===void 0)return typeof F=="number"||typeof F=="boolean"?z[B]=F:z[B]=F.clone(),!0;{const w=z[B];if(typeof F=="number"||typeof F=="boolean"){if(w!==F)return z[B]=F,!0}else if(w.equals(F)===!1)return w.copy(F),!0}return!1}function M(b){const P=b.uniforms;let C=0;const z=16;for(let B=0,w=P.length;B<w;B++){const D=Array.isArray(P[B])?P[B]:[P[B]];for(let ue=0,O=D.length;ue<O;ue++){const ee=D[ue],Y=Array.isArray(ee.value)?ee.value:[ee.value];for(let J=0,q=Y.length;J<q;J++){const Z=Y[J],V=R(Z),K=C%z,ne=K%V.boundary,oe=K+ne;C+=ne,oe!==0&&z-oe<V.storage&&(C+=z-oe),ee.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=C,C+=V.storage}}}const F=C%z;return F>0&&(C+=z-F),b.__size=C,b.__cache={},this}function R(b){const P={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(P.boundary=4,P.storage=4):b.isVector2?(P.boundary=8,P.storage=8):b.isVector3||b.isColor?(P.boundary=16,P.storage=12):b.isVector4?(P.boundary=16,P.storage=16):b.isMatrix3?(P.boundary=48,P.storage=48):b.isMatrix4?(P.boundary=64,P.storage=64):b.isTexture?mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):mt("WebGLRenderer: Unsupported uniform value type.",b),P}function x(b){const P=b.target;P.removeEventListener("dispose",x);const C=c.indexOf(P.__bindingPointIndex);c.splice(C,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function y(){for(const b in o)s.deleteBuffer(o[b]);c=[],o={},l={}}return{bind:h,update:p,dispose:y}}const q1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function j1(){return wi===null&&(wi=new sx(q1,16,16,Ks,er),wi.name="DFG_LUT",wi.minFilter=xn,wi.magFilter=xn,wi.wrapS=Ki,wi.wrapT=Ki,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class $1{constructor(e={}){const{canvas:t=F_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Yn}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const R=S,x=new Set([bd,Pd,Rd]),y=new Set([Yn,Li,ta,na,Ad,Cd]),b=new Uint32Array(4),P=new Int32Array(4);let C=null,z=null;const F=[],B=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let ue=!1;this._outputColorSpace=ri;let O=0,ee=0,Y=null,J=-1,q=null;const Z=new jt,V=new jt;let K=null;const ne=new Tt(0);let oe=0,I=t.width,j=t.height,ve=1,Oe=null,Ye=null;const ie=new jt(0,0,I,j),he=new jt(0,0,I,j);let pe=!1;const Le=new Id;let We=!1,lt=!1;const Lt=new Gt,ft=new X,ge=new jt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function De(){return Y===null?ve:1}let N=r;function st(A,$){return t.getContext(A,$)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Td}`),t.addEventListener("webglcontextlost",$e,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",It,!1),N===null){const $="webgl2";if(N=st($,A),N===null)throw st($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ct("WebGLRenderer: "+A.message),A}let Ie,it,Pe,L,E,G,ce,me,fe,Xe,Ae,Je,at,Se,Re,Ke,je,ze,gt,H,be,we,ke;function Te(){Ie=new $M(N),Ie.init(),be=new z1(N,Ie),it=new VM(N,Ie,e,be),Pe=new O1(N,Ie),it.reversedDepthBuffer&&g&&Pe.buffers.depth.setReversed(!0),L=new JM(N),E=new E1,G=new B1(N,Ie,Pe,E,it,be,L),ce=new jM(D),me=new iy(N),we=new zM(N,me),fe=new ZM(N,me,L,we),Xe=new eE(N,fe,me,we,L),ze=new QM(N,it,G),Re=new HM(E),Ae=new M1(D,ce,Ie,it,we,Re),Je=new X1(D,E),at=new w1,Se=new L1(Ie),je=new BM(D,ce,Pe,Xe,M,h),Ke=new F1(D,Xe,it),ke=new Y1(N,L,it,Pe),gt=new kM(N,Ie,L),H=new KM(N,Ie,L),L.programs=Ae.programs,D.capabilities=it,D.extensions=Ie,D.properties=E,D.renderLists=at,D.shadowMap=Ke,D.state=Pe,D.info=L}Te(),R!==Yn&&(w=new nE(R,t.width,t.height,o,l));const de=new G1(D,N);this.xr=de,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Ie.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ie.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(A){A!==void 0&&(ve=A,this.setSize(I,j,!1))},this.getSize=function(A){return A.set(I,j)},this.setSize=function(A,$,le=!0){if(de.isPresenting){mt("WebGLRenderer: Can't change size while VR device is presenting.");return}I=A,j=$,t.width=Math.floor(A*ve),t.height=Math.floor($*ve),le===!0&&(t.style.width=A+"px",t.style.height=$+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,A,$)},this.getDrawingBufferSize=function(A){return A.set(I*ve,j*ve).floor()},this.setDrawingBufferSize=function(A,$,le){I=A,j=$,ve=le,t.width=Math.floor(A*le),t.height=Math.floor($*le),this.setViewport(0,0,A,$)},this.setEffects=function(A){if(R===Yn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let $=0;$<A.length;$++)if(A[$].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Z)},this.getViewport=function(A){return A.copy(ie)},this.setViewport=function(A,$,le,se){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,$,le,se),Pe.viewport(Z.copy(ie).multiplyScalar(ve).round())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,$,le,se){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,$,le,se),Pe.scissor(V.copy(he).multiplyScalar(ve).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(A){Pe.setScissorTest(pe=A)},this.setOpaqueSort=function(A){Oe=A},this.setTransparentSort=function(A){Ye=A},this.getClearColor=function(A){return A.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(A=!0,$=!0,le=!0){let se=0;if(A){let te=!1;if(Y!==null){const Ue=Y.texture.format;te=x.has(Ue)}if(te){const Ue=Y.texture.type,Ge=y.has(Ue),Ne=je.getClearColor(),Ve=je.getClearAlpha(),nt=Ne.r,ot=Ne.g,vt=Ne.b;Ge?(b[0]=nt,b[1]=ot,b[2]=vt,b[3]=Ve,N.clearBufferuiv(N.COLOR,0,b)):(P[0]=nt,P[1]=ot,P[2]=vt,P[3]=Ve,N.clearBufferiv(N.COLOR,0,P))}else se|=N.COLOR_BUFFER_BIT}$&&(se|=N.DEPTH_BUFFER_BIT),le&&(se|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&N.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",It,!1),je.dispose(),at.dispose(),Se.dispose(),E.dispose(),ce.dispose(),Xe.dispose(),we.dispose(),ke.dispose(),Ae.dispose(),de.dispose(),de.removeEventListener("sessionstart",nr),de.removeEventListener("sessionend",Nr),$n.stop()};function $e(A){A.preventDefault(),Mm("WebGLRenderer: Context Lost."),ue=!0}function dt(){Mm("WebGLRenderer: Context Restored."),ue=!1;const A=L.autoReset,$=Ke.enabled,le=Ke.autoUpdate,se=Ke.needsUpdate,te=Ke.type;Te(),L.autoReset=A,Ke.enabled=$,Ke.autoUpdate=le,Ke.needsUpdate=se,Ke.type=te}function It(A){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function wt(A){const $=A.target;$.removeEventListener("dispose",wt),jn($)}function jn(A){yn(A),E.remove(A)}function yn(A){const $=E.get(A).programs;$!==void 0&&($.forEach(function(le){Ae.releaseProgram(le)}),A.isShaderMaterial&&Ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,$,le,se,te,Ue){$===null&&($=Me);const Ge=te.isMesh&&te.matrixWorld.determinant()<0,Ne=ha(A,$,le,se,te);Pe.setMaterial(se,Ge);let Ve=le.index,nt=1;if(se.wireframe===!0){if(Ve=fe.getWireframeAttribute(le),Ve===void 0)return;nt=2}const ot=le.drawRange,vt=le.attributes.position;let rt=ot.start*nt,Nt=(ot.start+ot.count)*nt;Ue!==null&&(rt=Math.max(rt,Ue.start*nt),Nt=Math.min(Nt,(Ue.start+Ue.count)*nt)),Ve!==null?(rt=Math.max(rt,0),Nt=Math.min(Nt,Ve.count)):vt!=null&&(rt=Math.max(rt,0),Nt=Math.min(Nt,vt.count));const Bt=Nt-rt;if(Bt<0||Bt===1/0)return;we.setup(te,se,Ne,le,Ve);let Ft,Et=gt;if(Ve!==null&&(Ft=me.get(Ve),Et=H,Et.setIndex(Ft)),te.isMesh)se.wireframe===!0?(Pe.setLineWidth(se.wireframeLinewidth*De()),Et.setMode(N.LINES)):Et.setMode(N.TRIANGLES);else if(te.isLine){let $t=se.linewidth;$t===void 0&&($t=1),Pe.setLineWidth($t*De()),te.isLineSegments?Et.setMode(N.LINES):te.isLineLoop?Et.setMode(N.LINE_LOOP):Et.setMode(N.LINE_STRIP)}else te.isPoints?Et.setMode(N.POINTS):te.isSprite&&Et.setMode(N.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)Ql("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))Et.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const $t=te._multiDrawStarts,et=te._multiDrawCounts,Sn=te._multiDrawCount,Mt=Ve?me.get(Ve).bytesPerElement:1,An=E.get(se).currentProgram.getUniforms();for(let Cn=0;Cn<Sn;Cn++)An.setValue(N,"_gl_DrawID",Cn),Et.render($t[Cn]/Mt,et[Cn])}else if(te.isInstancedMesh)Et.renderInstances(rt,Bt,te.count);else if(le.isInstancedBufferGeometry){const $t=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,et=Math.min(le.instanceCount,$t);Et.renderInstances(rt,Bt,et)}else Et.render(rt,Bt)};function ls(A,$,le){A.transparent===!0&&A.side===Zi&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,Ur(A,$,le),A.side=Dr,A.needsUpdate=!0,Ur(A,$,le),A.side=Zi):Ur(A,$,le)}this.compile=function(A,$,le=null){le===null&&(le=A),z=Se.get(le),z.init($),B.push(z),le.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(z.pushLight(te),te.castShadow&&z.pushShadow(te))}),A!==le&&A.traverseVisible(function(te){te.isLight&&te.layers.test($.layers)&&(z.pushLight(te),te.castShadow&&z.pushShadow(te))}),z.setupLights();const se=new Set;return A.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ue=te.material;if(Ue)if(Array.isArray(Ue))for(let Ge=0;Ge<Ue.length;Ge++){const Ne=Ue[Ge];ls(Ne,le,te),se.add(Ne)}else ls(Ue,le,te),se.add(Ue)}),z=B.pop(),se},this.compileAsync=function(A,$,le=null){const se=this.compile(A,$,le);return new Promise(te=>{function Ue(){if(se.forEach(function(Ge){E.get(Ge).currentProgram.isReady()&&se.delete(Ge)}),se.size===0){te(A);return}setTimeout(Ue,10)}Ie.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Ui=null;function au(A){Ui&&Ui(A)}function nr(){$n.stop()}function Nr(){$n.start()}const $n=new a0;$n.setAnimationLoop(au),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(A){Ui=A,de.setAnimationLoop(A),A===null?$n.stop():$n.start()},de.addEventListener("sessionstart",nr),de.addEventListener("sessionend",Nr),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ue===!0)return;const le=de.enabled===!0&&de.isPresenting===!0,se=w!==null&&(Y===null||le)&&w.begin(D,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera($),$=de.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,$,Y),z=Se.get(A,B.length),z.init($),B.push(z),Lt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Le.setFromProjectionMatrix(Lt,Ri,$.reversedDepth),lt=this.localClippingEnabled,We=Re.init(this.clippingPlanes,lt),C=at.get(A,F.length),C.init(),F.push(C),de.enabled===!0&&de.isPresenting===!0){const Ge=D.xr.getDepthSensingMesh();Ge!==null&&Ir(Ge,$,-1/0,D.sortObjects)}Ir(A,$,0,D.sortObjects),C.finish(),D.sortObjects===!0&&C.sort(Oe,Ye),_e=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,_e&&je.addToRenderList(C,A),this.info.render.frame++,We===!0&&Re.beginShadows();const te=z.state.shadowsArray;if(Ke.render(te,A,$),We===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&w.hasRenderPass())===!1){const Ge=C.opaque,Ne=C.transmissive;if(z.setupLights(),$.isArrayCamera){const Ve=$.cameras;if(Ne.length>0)for(let nt=0,ot=Ve.length;nt<ot;nt++){const vt=Ve[nt];fa(Ge,Ne,A,vt)}_e&&je.render(A);for(let nt=0,ot=Ve.length;nt<ot;nt++){const vt=Ve[nt];ca(C,A,vt,vt.viewport)}}else Ne.length>0&&fa(Ge,Ne,A,$),_e&&je.render(A),ca(C,A,$)}Y!==null&&ee===0&&(G.updateMultisampleRenderTarget(Y),G.updateRenderTargetMipmap(Y)),se&&w.end(D),A.isScene===!0&&A.onAfterRender(D,A,$),we.resetDefaultState(),J=-1,q=null,B.pop(),B.length>0?(z=B[B.length-1],We===!0&&Re.setGlobalState(D.clippingPlanes,z.state.camera)):z=null,F.pop(),F.length>0?C=F[F.length-1]:C=null};function Ir(A,$,le,se){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)le=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLight)z.pushLight(A),A.castShadow&&z.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Le.intersectsSprite(A)){se&&ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Lt);const Ge=Xe.update(A),Ne=A.material;Ne.visible&&C.push(A,Ge,Ne,le,ge.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Le.intersectsObject(A))){const Ge=Xe.update(A),Ne=A.material;if(se&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ge.copy(A.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),ge.copy(Ge.boundingSphere.center)),ge.applyMatrix4(A.matrixWorld).applyMatrix4(Lt)),Array.isArray(Ne)){const Ve=Ge.groups;for(let nt=0,ot=Ve.length;nt<ot;nt++){const vt=Ve[nt],rt=Ne[vt.materialIndex];rt&&rt.visible&&C.push(A,Ge,rt,le,ge.z,vt)}}else Ne.visible&&C.push(A,Ge,Ne,le,ge.z,null)}}const Ue=A.children;for(let Ge=0,Ne=Ue.length;Ge<Ne;Ge++)Ir(Ue[Ge],$,le,se)}function ca(A,$,le,se){const{opaque:te,transmissive:Ue,transparent:Ge}=A;z.setupLightsView(le),We===!0&&Re.setGlobalState(D.clippingPlanes,le),se&&Pe.viewport(Z.copy(se)),te.length>0&&us(te,$,le),Ue.length>0&&us(Ue,$,le),Ge.length>0&&us(Ge,$,le),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function fa(A,$,le,se){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[se.id]===void 0){const rt=Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[se.id]=new bi(1,1,{generateMipmaps:!0,type:rt?er:Yn,minFilter:rs,samples:it.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ue=z.state.transmissionRenderTarget[se.id],Ge=se.viewport||Z;Ue.setSize(Ge.z*D.transmissionResolutionScale,Ge.w*D.transmissionResolutionScale);const Ne=D.getRenderTarget(),Ve=D.getActiveCubeFace(),nt=D.getActiveMipmapLevel();D.setRenderTarget(Ue),D.getClearColor(ne),oe=D.getClearAlpha(),oe<1&&D.setClearColor(16777215,.5),D.clear(),_e&&je.render(le);const ot=D.toneMapping;D.toneMapping=Pi;const vt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),z.setupLightsView(se),We===!0&&Re.setGlobalState(D.clippingPlanes,se),us(A,le,se),G.updateMultisampleRenderTarget(Ue),G.updateRenderTargetMipmap(Ue),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Nt=0,Bt=$.length;Nt<Bt;Nt++){const Ft=$[Nt],{object:Et,geometry:$t,material:et,group:Sn}=Ft;if(et.side===Zi&&Et.layers.test(se.layers)){const Mt=et.side;et.side=Un,et.needsUpdate=!0,xi(Et,le,se,$t,et,Sn),et.side=Mt,et.needsUpdate=!0,rt=!0}}rt===!0&&(G.updateMultisampleRenderTarget(Ue),G.updateRenderTargetMipmap(Ue))}D.setRenderTarget(Ne,Ve,nt),D.setClearColor(ne,oe),vt!==void 0&&(se.viewport=vt),D.toneMapping=ot}function us(A,$,le){const se=$.isScene===!0?$.overrideMaterial:null;for(let te=0,Ue=A.length;te<Ue;te++){const Ge=A[te],{object:Ne,geometry:Ve,group:nt}=Ge;let ot=Ge.material;ot.allowOverride===!0&&se!==null&&(ot=se),Ne.layers.test(le.layers)&&xi(Ne,$,le,Ve,ot,nt)}}function xi(A,$,le,se,te,Ue){A.onBeforeRender(D,$,le,se,te,Ue),A.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),te.onBeforeRender(D,$,le,se,A,Ue),te.transparent===!0&&te.side===Zi&&te.forceSinglePass===!1?(te.side=Un,te.needsUpdate=!0,D.renderBufferDirect(le,$,se,te,A,Ue),te.side=Dr,te.needsUpdate=!0,D.renderBufferDirect(le,$,se,te,A,Ue),te.side=Zi):D.renderBufferDirect(le,$,se,te,A,Ue),A.onAfterRender(D,$,le,se,te,Ue)}function Ur(A,$,le){$.isScene!==!0&&($=Me);const se=E.get(A),te=z.state.lights,Ue=z.state.shadowsArray,Ge=te.state.version,Ne=Ae.getParameters(A,te.state,Ue,$,le),Ve=Ae.getProgramCacheKey(Ne);let nt=se.programs;se.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?$.environment:null,se.fog=$.fog;const ot=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;se.envMap=ce.get(A.envMap||se.environment,ot),se.envMapRotation=se.environment!==null&&A.envMap===null?$.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",wt),nt=new Map,se.programs=nt);let vt=nt.get(Ve);if(vt!==void 0){if(se.currentProgram===vt&&se.lightsStateVersion===Ge)return da(A,Ne),vt}else Ne.uniforms=Ae.getUniforms(A),A.onBeforeCompile(Ne,D),vt=Ae.acquireProgram(Ne,Ve),nt.set(Ve,vt),se.uniforms=Ne.uniforms;const rt=se.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(rt.clippingPlanes=Re.uniform),da(A,Ne),se.needsLights=ma(A),se.lightsStateVersion=Ge,se.needsLights&&(rt.ambientLightColor.value=te.state.ambient,rt.lightProbe.value=te.state.probe,rt.directionalLights.value=te.state.directional,rt.directionalLightShadows.value=te.state.directionalShadow,rt.spotLights.value=te.state.spot,rt.spotLightShadows.value=te.state.spotShadow,rt.rectAreaLights.value=te.state.rectArea,rt.ltc_1.value=te.state.rectAreaLTC1,rt.ltc_2.value=te.state.rectAreaLTC2,rt.pointLights.value=te.state.point,rt.pointLightShadows.value=te.state.pointShadow,rt.hemisphereLights.value=te.state.hemi,rt.directionalShadowMatrix.value=te.state.directionalShadowMatrix,rt.spotLightMatrix.value=te.state.spotLightMatrix,rt.spotLightMap.value=te.state.spotLightMap,rt.pointShadowMatrix.value=te.state.pointShadowMatrix),se.currentProgram=vt,se.uniformsList=null,vt}function oo(A){if(A.uniformsList===null){const $=A.currentProgram.getUniforms();A.uniformsList=Zl.seqWithValue($.seq,A.uniforms)}return A.uniformsList}function da(A,$){const le=E.get(A);le.outputColorSpace=$.outputColorSpace,le.batching=$.batching,le.batchingColor=$.batchingColor,le.instancing=$.instancing,le.instancingColor=$.instancingColor,le.instancingMorph=$.instancingMorph,le.skinning=$.skinning,le.morphTargets=$.morphTargets,le.morphNormals=$.morphNormals,le.morphColors=$.morphColors,le.morphTargetsCount=$.morphTargetsCount,le.numClippingPlanes=$.numClippingPlanes,le.numIntersection=$.numClipIntersection,le.vertexAlphas=$.vertexAlphas,le.vertexTangents=$.vertexTangents,le.toneMapping=$.toneMapping}function ha(A,$,le,se,te){$.isScene!==!0&&($=Me),G.resetTextureUnits();const Ue=$.fog,Ge=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?$.environment:null,Ne=Y===null?D.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Js,Ve=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,nt=ce.get(se.envMap||Ge,Ve),ot=se.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,vt=!!le.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),rt=!!le.morphAttributes.position,Nt=!!le.morphAttributes.normal,Bt=!!le.morphAttributes.color;let Ft=Pi;se.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ft=D.toneMapping);const Et=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,$t=Et!==void 0?Et.length:0,et=E.get(se),Sn=z.state.lights;if(We===!0&&(lt===!0||A!==q)){const Zt=A===q&&se.id===J;Re.setState(se,A,Zt)}let Mt=!1;se.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Sn.state.version||et.outputColorSpace!==Ne||te.isBatchedMesh&&et.batching===!1||!te.isBatchedMesh&&et.batching===!0||te.isBatchedMesh&&et.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&et.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&et.instancing===!1||!te.isInstancedMesh&&et.instancing===!0||te.isSkinnedMesh&&et.skinning===!1||!te.isSkinnedMesh&&et.skinning===!0||te.isInstancedMesh&&et.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&et.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&et.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&et.instancingMorph===!1&&te.morphTexture!==null||et.envMap!==nt||se.fog===!0&&et.fog!==Ue||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==Re.numPlanes||et.numIntersection!==Re.numIntersection)||et.vertexAlphas!==ot||et.vertexTangents!==vt||et.morphTargets!==rt||et.morphNormals!==Nt||et.morphColors!==Bt||et.toneMapping!==Ft||et.morphTargetsCount!==$t)&&(Mt=!0):(Mt=!0,et.__version=se.version);let An=et.currentProgram;Mt===!0&&(An=Ur(se,$,te));let Cn=!1,On=!1,ir=!1;const Dt=An.getUniforms(),ht=et.uniforms;if(Pe.useProgram(An.program)&&(Cn=!0,On=!0,ir=!0),se.id!==J&&(J=se.id,On=!0),Cn||q!==A){Pe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Dt.setValue(N,"projectionMatrix",A.projectionMatrix),Dt.setValue(N,"viewMatrix",A.matrixWorldInverse);const Zn=Dt.map.cameraPosition;Zn!==void 0&&Zn.setValue(N,ft.setFromMatrixPosition(A.matrixWorld)),it.logarithmicDepthBuffer&&Dt.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Dt.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,On=!0,ir=!0)}if(et.needsLights&&(Sn.state.directionalShadowMap.length>0&&Dt.setValue(N,"directionalShadowMap",Sn.state.directionalShadowMap,G),Sn.state.spotShadowMap.length>0&&Dt.setValue(N,"spotShadowMap",Sn.state.spotShadowMap,G),Sn.state.pointShadowMap.length>0&&Dt.setValue(N,"pointShadowMap",Sn.state.pointShadowMap,G)),te.isSkinnedMesh){Dt.setOptional(N,te,"bindMatrix"),Dt.setOptional(N,te,"bindMatrixInverse");const Zt=te.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Dt.setValue(N,"boneTexture",Zt.boneTexture,G))}te.isBatchedMesh&&(Dt.setOptional(N,te,"batchingTexture"),Dt.setValue(N,"batchingTexture",te._matricesTexture,G),Dt.setOptional(N,te,"batchingIdTexture"),Dt.setValue(N,"batchingIdTexture",te._indirectTexture,G),Dt.setOptional(N,te,"batchingColorTexture"),te._colorsTexture!==null&&Dt.setValue(N,"batchingColorTexture",te._colorsTexture,G));const ai=le.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&ze.update(te,le,An),(On||et.receiveShadow!==te.receiveShadow)&&(et.receiveShadow=te.receiveShadow,Dt.setValue(N,"receiveShadow",te.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&$.environment!==null&&(ht.envMapIntensity.value=$.environmentIntensity),ht.dfgLUT!==void 0&&(ht.dfgLUT.value=j1()),On&&(Dt.setValue(N,"toneMappingExposure",D.toneMappingExposure),et.needsLights&&pa(ht,ir),Ue&&se.fog===!0&&Je.refreshFogUniforms(ht,Ue),Je.refreshMaterialUniforms(ht,se,ve,j,z.state.transmissionRenderTarget[A.id]),Zl.upload(N,oo(et),ht,G)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Zl.upload(N,oo(et),ht,G),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Dt.setValue(N,"center",te.center),Dt.setValue(N,"modelViewMatrix",te.modelViewMatrix),Dt.setValue(N,"normalMatrix",te.normalMatrix),Dt.setValue(N,"modelMatrix",te.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Zt=se.uniformsGroups;for(let Zn=0,Fi=Zt.length;Zn<Fi;Zn++){const ao=Zt[Zn];ke.update(ao,An),ke.bind(ao,An)}}return An}function pa(A,$){A.ambientLightColor.needsUpdate=$,A.lightProbe.needsUpdate=$,A.directionalLights.needsUpdate=$,A.directionalLightShadows.needsUpdate=$,A.pointLights.needsUpdate=$,A.pointLightShadows.needsUpdate=$,A.spotLights.needsUpdate=$,A.spotLightShadows.needsUpdate=$,A.rectAreaLights.needsUpdate=$,A.hemisphereLights.needsUpdate=$}function ma(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,$,le){const se=E.get(A);se.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=$,E.get(A.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:le,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,$){const le=E.get(A);le.__webglFramebuffer=$,le.__useDefaultFramebuffer=$===void 0};const ga=N.createFramebuffer();this.setRenderTarget=function(A,$=0,le=0){Y=A,O=$,ee=le;let se=null,te=!1,Ue=!1;if(A){const Ne=E.get(A);if(Ne.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(N.FRAMEBUFFER,Ne.__webglFramebuffer),Z.copy(A.viewport),V.copy(A.scissor),K=A.scissorTest,Pe.viewport(Z),Pe.scissor(V),Pe.setScissorTest(K),J=-1;return}else if(Ne.__webglFramebuffer===void 0)G.setupRenderTarget(A);else if(Ne.__hasExternalTextures)G.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ot=A.depthTexture;if(Ne.__boundDepthTexture!==ot){if(ot!==null&&E.has(ot)&&(A.width!==ot.image.width||A.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ue=!0);const nt=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[$])?se=nt[$][le]:se=nt[$],te=!0):A.samples>0&&G.useMultisampledRTT(A)===!1?se=E.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?se=nt[le]:se=nt,Z.copy(A.viewport),V.copy(A.scissor),K=A.scissorTest}else Z.copy(ie).multiplyScalar(ve).floor(),V.copy(he).multiplyScalar(ve).floor(),K=pe;if(le!==0&&(se=ga),Pe.bindFramebuffer(N.FRAMEBUFFER,se)&&Pe.drawBuffers(A,se),Pe.viewport(Z),Pe.scissor(V),Pe.setScissorTest(K),te){const Ne=E.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ne.__webglTexture,le)}else if(Ue){const Ne=$;for(let Ve=0;Ve<A.textures.length;Ve++){const nt=E.get(A.textures[Ve]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ve,nt.__webglTexture,le,Ne)}}else if(A!==null&&le!==0){const Ne=E.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ne.__webglTexture,le)}J=-1},this.readRenderTargetPixels=function(A,$,le,se,te,Ue,Ge,Ne=0){if(!(A&&A.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve){Pe.bindFramebuffer(N.FRAMEBUFFER,Ve);try{const nt=A.textures[Ne],ot=nt.format,vt=nt.type;if(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ne),!it.textureFormatReadable(ot)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(vt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=A.width-se&&le>=0&&le<=A.height-te&&N.readPixels($,le,se,te,be.convert(ot),be.convert(vt),Ue)}finally{const nt=Y!==null?E.get(Y).__webglFramebuffer:null;Pe.bindFramebuffer(N.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(A,$,le,se,te,Ue,Ge,Ne=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ve=Ve[Ge]),Ve)if($>=0&&$<=A.width-se&&le>=0&&le<=A.height-te){Pe.bindFramebuffer(N.FRAMEBUFFER,Ve);const nt=A.textures[Ne],ot=nt.format,vt=nt.type;if(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ne),!it.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,rt),N.bufferData(N.PIXEL_PACK_BUFFER,Ue.byteLength,N.STREAM_READ),N.readPixels($,le,se,te,be.convert(ot),be.convert(vt),0);const Nt=Y!==null?E.get(Y).__webglFramebuffer:null;Pe.bindFramebuffer(N.FRAMEBUFFER,Nt);const Bt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await O_(N,Bt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,rt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ue),N.deleteBuffer(rt),N.deleteSync(Bt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,$=null,le=0){const se=Math.pow(2,-le),te=Math.floor(A.image.width*se),Ue=Math.floor(A.image.height*se),Ge=$!==null?$.x:0,Ne=$!==null?$.y:0;G.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,le,0,0,Ge,Ne,te,Ue),Pe.unbindTexture()};const lu=N.createFramebuffer(),uu=N.createFramebuffer();this.copyTextureToTexture=function(A,$,le=null,se=null,te=0,Ue=0){let Ge,Ne,Ve,nt,ot,vt,rt,Nt,Bt;const Ft=A.isCompressedTexture?A.mipmaps[Ue]:A.image;if(le!==null)Ge=le.max.x-le.min.x,Ne=le.max.y-le.min.y,Ve=le.isBox3?le.max.z-le.min.z:1,nt=le.min.x,ot=le.min.y,vt=le.isBox3?le.min.z:0;else{const ht=Math.pow(2,-te);Ge=Math.floor(Ft.width*ht),Ne=Math.floor(Ft.height*ht),A.isDataArrayTexture?Ve=Ft.depth:A.isData3DTexture?Ve=Math.floor(Ft.depth*ht):Ve=1,nt=0,ot=0,vt=0}se!==null?(rt=se.x,Nt=se.y,Bt=se.z):(rt=0,Nt=0,Bt=0);const Et=be.convert($.format),$t=be.convert($.type);let et;$.isData3DTexture?(G.setTexture3D($,0),et=N.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(G.setTexture2DArray($,0),et=N.TEXTURE_2D_ARRAY):(G.setTexture2D($,0),et=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,$.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,$.unpackAlignment);const Sn=N.getParameter(N.UNPACK_ROW_LENGTH),Mt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),An=N.getParameter(N.UNPACK_SKIP_PIXELS),Cn=N.getParameter(N.UNPACK_SKIP_ROWS),On=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,nt),N.pixelStorei(N.UNPACK_SKIP_ROWS,ot),N.pixelStorei(N.UNPACK_SKIP_IMAGES,vt);const ir=A.isDataArrayTexture||A.isData3DTexture,Dt=$.isDataArrayTexture||$.isData3DTexture;if(A.isDepthTexture){const ht=E.get(A),ai=E.get($),Zt=E.get(ht.__renderTarget),Zn=E.get(ai.__renderTarget);Pe.bindFramebuffer(N.READ_FRAMEBUFFER,Zt.__webglFramebuffer),Pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Fi=0;Fi<Ve;Fi++)ir&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,E.get(A).__webglTexture,te,vt+Fi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,E.get($).__webglTexture,Ue,Bt+Fi)),N.blitFramebuffer(nt,ot,Ge,Ne,rt,Nt,Ge,Ne,N.DEPTH_BUFFER_BIT,N.NEAREST);Pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(te!==0||A.isRenderTargetTexture||E.has(A)){const ht=E.get(A),ai=E.get($);Pe.bindFramebuffer(N.READ_FRAMEBUFFER,lu),Pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,uu);for(let Zt=0;Zt<Ve;Zt++)ir?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ht.__webglTexture,te,vt+Zt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ht.__webglTexture,te),Dt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ai.__webglTexture,Ue,Bt+Zt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ai.__webglTexture,Ue),te!==0?N.blitFramebuffer(nt,ot,Ge,Ne,rt,Nt,Ge,Ne,N.COLOR_BUFFER_BIT,N.NEAREST):Dt?N.copyTexSubImage3D(et,Ue,rt,Nt,Bt+Zt,nt,ot,Ge,Ne):N.copyTexSubImage2D(et,Ue,rt,Nt,nt,ot,Ge,Ne);Pe.bindFramebuffer(N.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Dt?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(et,Ue,rt,Nt,Bt,Ge,Ne,Ve,Et,$t,Ft.data):$.isCompressedArrayTexture?N.compressedTexSubImage3D(et,Ue,rt,Nt,Bt,Ge,Ne,Ve,Et,Ft.data):N.texSubImage3D(et,Ue,rt,Nt,Bt,Ge,Ne,Ve,Et,$t,Ft):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ue,rt,Nt,Ge,Ne,Et,$t,Ft.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ue,rt,Nt,Ft.width,Ft.height,Et,Ft.data):N.texSubImage2D(N.TEXTURE_2D,Ue,rt,Nt,Ge,Ne,Et,$t,Ft);N.pixelStorei(N.UNPACK_ROW_LENGTH,Sn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,An),N.pixelStorei(N.UNPACK_SKIP_ROWS,Cn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,On),Ue===0&&$.generateMipmaps&&N.generateMipmap(et),Pe.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&G.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?G.setTextureCube(A,0):A.isData3DTexture?G.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?G.setTexture2DArray(A,0):G.setTexture2D(A,0),Pe.unbindTexture()},this.resetState=function(){O=0,ee=0,Y=null,Pe.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}function Pr(s){return new Promise(e=>setTimeout(e,s))}const Z1=[{text:"Dear Gabrielle,",className:"say"},{text:"",className:"say"},{text:"In a world of endless faces,",className:"say"},{text:"you are the one my heart chose.",className:"say"},{text:"Every moment spent with you,",className:"say"},{text:"is a melody only we know.",className:"say"},{text:"Your smile lights up my darkest days,",className:"say"},{text:"your voice, my favorite sound.",className:"say"},{text:"If love were stars, you would be",className:"say"},{text:"the entire sky I found.",className:"say"},{text:"Happy Valentine's Day, my love.",className:"say"},{text:"",className:"say"},{text:"Yours, Raman",className:"say"}];function Ot(s,e){return s+Math.random()*(e-s)}function xg(s=1){const e=new Qg,t=0,r=0;return e.moveTo(t,r+s*.5),e.bezierCurveTo(t,r+s*.5,t-s*.5,r+s*1.3,t-s,r+s*.5),e.bezierCurveTo(t-s*1.7,r-s*.2,t,r-s*1.1,t,r-s*1.6),e.bezierCurveTo(t,r-s*1.1,t+s*1.7,r-s*.2,t+s,r+s*.5),e.bezierCurveTo(t+s*.5,r+s*1.3,t,r+s*.5,t,r+s*.5),e}function K1(s){const e=s.innerHTML;s.innerHTML="",s.style.display="block";const t=[];let r=0;for(;r<e.length;)if(e[r]==="<"){const c=e.indexOf(">",r);t.push({type:"tag",value:e.substring(r,c+1)}),r=c+1}else t.push({type:"char",value:e[r]}),r++;let o=0,l="";for(const c of t)if(c.type==="tag")l+=c.value;else{const f=o*60;l+=c.value===" "?`<span class="char" style="animation-delay:${f}ms">&nbsp;</span>`:`<span class="char" style="animation-delay:${f}ms">${c.value}</span>`,o++}s.innerHTML=l}function h0(s,e,t,r,o,l){if(o>l||r<.008)return[];const c=s.clone().add(e.clone().multiplyScalar(t)),f=s.clone().lerp(c,.5);f.x+=Ot(-t*.15,t*.15),f.z+=Ot(-t*.12,t*.12);const p=[{start:s.clone(),mid:f,end:c.clone(),radius:r,depth:o}],v=o===0?5:o===1?4:o<4?Ot(2,4)|0:Ot(1,3)|0;for(let _=0;_<v;_++){const g=o<2?Ot(.3,.6):Ot(.4,.9),S=_/v*Math.PI*2+Ot(-.4,.4),M=e.clone(),R=new X(Math.cos(S),0,Math.sin(S)).normalize();M.applyAxisAngle(R,g),M.y=Math.max(M.y,.2),M.normalize(),p.push(...h0(c.clone(),M,t*Ot(.55,.75),r*Ot(.45,.65),o+1,l))}return p}const ts=[{src:"/love1.mp3",name:"Love Song 1"},{src:"/love2.mp3",name:"Love Song 2"},{src:"/love3.mp3",name:"Love Song 3"},{src:"/love4.mp3",name:"Love Song 4"}];function J1({show:s,audioRef:e,trackIndex:t,setTrackIndex:r}){const[o,l]=Wn.useState(!0);Wn.useEffect(()=>{const p=e.current;p&&(p.src=ts[t].src,p.play().then(()=>l(!0)).catch(()=>{}))},[t]),Wn.useEffect(()=>{const p=e.current;if(!p)return;const v=()=>r(_=>(_+1)%ts.length);return p.addEventListener("ended",v),()=>p.removeEventListener("ended",v)},[t]);const c=()=>{const p=e.current;p&&(o?(p.pause(),l(!1)):(p.play(),l(!0)))},f=()=>r(p=>(p+1)%ts.length),h=()=>r(p=>(p-1+ts.length)%ts.length);return s?bt.jsxs("div",{className:"music-player",children:[bt.jsx("div",{className:"cd-container",children:bt.jsxs("div",{className:`cd-disc ${o?"spinning":""}`,children:[bt.jsx("div",{className:"cd-label"}),bt.jsx("div",{className:"cd-ring cd-ring-1"}),bt.jsx("div",{className:"cd-ring cd-ring-2"}),bt.jsx("div",{className:"cd-ring cd-ring-3"}),bt.jsx("div",{className:"cd-hole"})]})}),bt.jsxs("div",{className:"player-info",children:[bt.jsx("div",{className:"song-name",children:ts[t].name}),bt.jsxs("div",{className:"player-controls",children:[bt.jsx("button",{className:"control-btn",onClick:h,title:"Previous",children:bt.jsx("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"currentColor",children:bt.jsx("path",{d:"M6 6h2v12H6zm3.5 6l8.5 6V6z"})})}),bt.jsx("button",{className:"control-btn play-btn",onClick:c,title:o?"Pause":"Play",children:o?bt.jsx("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"currentColor",children:bt.jsx("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"})}):bt.jsx("svg",{viewBox:"0 0 24 24",width:"28",height:"28",fill:"currentColor",children:bt.jsx("path",{d:"M8 5v14l11-7z"})})}),bt.jsx("button",{className:"control-btn",onClick:f,title:"Next",children:bt.jsx("svg",{viewBox:"0 0 24 24",width:"22",height:"22",fill:"currentColor",children:bt.jsx("path",{d:"M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"})})})]})]})]}):null}function Q1(){const s=Wn.useRef(null),e=Wn.useRef(null),t=Wn.useRef(null),[r,o]=Wn.useState(0),[l,c]=Wn.useState(!1),[f,h]=Wn.useState(!1),[p,v]=Wn.useState(!1),_=Wn.useRef(null),g=Z1.map(M=>`<span class="${M.className}">${M.text}</span><br>`).join(`
`);Wn.useEffect(()=>{const M=s.current;if(!M)return;const R=M.clientWidth||1100,x=M.clientHeight||680,y=new Q_;y.background=new Tt(0);const b=new Xn(45,R/x,.1,100);b.position.set(0,5,16),b.lookAt(0,5,0);const P=new $1({antialias:!0,alpha:!0});P.setSize(R,x),P.setPixelRatio(window.devicePixelRatio),P.shadowMap.enabled=!0,M.appendChild(P.domElement),y.add(new Qx(5588036,.6));const C=new Jx(16772829,1.2);C.position.set(5,15,10),C.castShadow=!0,y.add(C),y.add(new jm(16738740,.8,30).translateX(-3).translateY(8).translateZ(5)),y.add(new jm(16755285,.5,25).translateX(3).translateY(4).translateZ(8));const z=new tu(xg(.6),{depth:.15,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:3}),F=new oi(z,new Yo({color:16738740,emissive:16716947,emissiveIntensity:.3,roughness:.3,metalness:.2}));F.position.set(0,5.5,.5),F.rotation.z=Math.PI,y.add(F);const B={visible:!0},w={visible:!0},D=new Audio("/heartbeat.mp3");D.loop=!0;let ue=!1;const O=()=>{ue||(ue=!0,D.play().catch(()=>{}))};M.addEventListener("mouseover",O,{once:!0}),M.addEventListener("touchstart",O,{once:!0});const ee=100,Y=new qn,J=new Float32Array(ee*3),q=new Float32Array(ee*3);for(let ve=0;ve<ee;ve++)J[ve*3]=Ot(-10,10),J[ve*3+1]=Ot(0,15),J[ve*3+2]=Ot(-5,5),q[ve*3]=1,q[ve*3+1]=Ot(.4,.8),q[ve*3+2]=Ot(.6,1);Y.setAttribute("position",new si(J,3)),Y.setAttribute("color",new si(q,3));const Z=new ux(Y,new Yg({size:.08,vertexColors:!0,transparent:!0,opacity:.6}));y.add(Z);const V=new Zo;y.add(V);const K=[];_.current={scene:y,camera:b,renderer:P,seedHeart:F,label:B,line:w,particles:Z,bloomMaterials:K,treeGroup:V,heartbeatAudio:D};let ne,oe=0;const I=()=>{var ie;ne=requestAnimationFrame(I),oe+=.01,F.visible&&F.scale.setScalar(1+Math.sin(oe*3)*.08),V.children.length>0&&(V.rotation.y+=.003);const ve=Z.geometry.attributes.position;for(let he=0;he<ee;he++)ve.array[he*3+1]+=.003,ve.array[he*3]+=Math.sin(oe+he)*.002,ve.array[he*3+1]>15&&(ve.array[he*3+1]=0);ve.needsUpdate=!0;const Oe=performance.now()/1e3,Ye=(ie=_.current)==null?void 0:ie.bloomMaterials;if(Ye)for(const{mat:he,phase:pe}of Ye)he.emissiveIntensity=.3+.7*Math.abs(Math.sin((Oe+pe)*(Math.PI/1.25)));P.render(y,b)};I();const j=()=>{const ve=M.clientWidth,Oe=M.clientHeight;b.aspect=ve/Oe,b.updateProjectionMatrix(),P.setSize(ve,Oe)};return window.addEventListener("resize",j),()=>{cancelAnimationFrame(ne),window.removeEventListener("resize",j),M.contains(P.domElement)&&M.removeChild(P.domElement),P.dispose()}},[]);const S=async()=>{if(l)return;c(!0);const M=_.current;if(!M)return;M.heartbeatAudio&&(M.heartbeatAudio.pause(),M.heartbeatAudio.currentTime=0),t.current=new Audio(ts[0].src),t.current.play().catch(()=>{});const{scene:R,seedHeart:x,label:y,line:b,treeGroup:P}=M;for(let Y=0;Y<30;Y++){const J=1-Y/30;x.scale.setScalar(J),x.position.y-=.12,await Pr(20)}x.visible=!1;const C=new Yo({color:4860426,roughness:.9,metalness:0,emissive:1705984,emissiveIntensity:.1}),z=new Yo({color:7027999,roughness:.8,metalness:0,emissive:1377792,emissiveIntensity:.08}),F=new Yo({color:9133628,roughness:.7,metalness:0,emissive:1706496,emissiveIntensity:.05}),B=new X(0,0,0),w=h0(B,new X(0,1,0),3.2,.3,0,5),D=[];for(let Y=0;Y<w.length;Y++){const J=w[Y],q=new Od(J.start,J.mid,J.end),Z=J.depth<1?C:J.depth<3?z:F,V=J.depth<2?12:6,K=J.depth<2?8:4,ne=new Bd(q,V,Math.max(J.radius,.006),K,!1),oe=new oi(ne,Z);if(oe.castShadow=!0,P.add(oe),J.depth>=2)for(let I=.2;I<=1;I+=.15)D.push(q.getPoint(I));J.depth<1?await Pr(40):J.depth<3?Y%2===0&&await Pr(12):Y%4===0&&await Pr(5)}for(let Y=0;Y<=60;Y++){const J=Y/60,Z=-4*(J*J*(3-2*J));M.camera.position.x=Z,M.camera.lookAt(Z,5,0),await Pr(16)}const ue=800,ee=[.06,.1,.16,.22].map(Y=>new tu(xg(Y),{depth:.01+Y*.08,bevelEnabled:!1}));for(let Y=0;Y<ue;Y++){const J=D[Math.floor(Ot(0,D.length))],q=J.x+Ot(-1.2,1.2),Z=J.y+Ot(-.8,.8),V=J.z+Ot(-1,1),K=new Tt(`hsl(${Ot(330,370)%360}, ${Ot(60,100)}%, ${Ot(60,90)}%)`),ne=new Yo({color:K,emissive:K,emissiveIntensity:.3,roughness:.5,transparent:!0,opacity:0}),oe=ee[Math.floor(Ot(0,ee.length))],I=new oi(oe,ne);I.position.set(q,Z,V),I.rotation.set(Ot(0,Math.PI),Ot(0,Math.PI),Ot(0,Math.PI));const j=Ot(.5,1.8);I.scale.setScalar(.01),I.userData.targetScale=j,P.add(I),M.bloomMaterials.push({mat:ne,phase:Ot(0,2.5)});const ve=Y/ue*3500;setTimeout(()=>{const Oe=Date.now(),Ye=600,ie=()=>{const he=Date.now()-Oe,pe=Math.min(he/Ye,1),Le=pe*(2-pe);I.scale.setScalar(Le*I.userData.targetScale),ne.opacity=Le,I.rotation.z+=.01,pe<1&&requestAnimationFrame(ie)};ie()},ve)}await Pr(4500),h(!0),await Pr(100),e.current&&K1(e.current),await Pr(2e3),v(!0)};return bt.jsx("div",{id:"main",children:bt.jsxs("div",{id:"wrap",children:[bt.jsx("div",{ref:s,id:"three-canvas",onClick:S,style:{cursor:l?"default":"pointer"},children:!l&&bt.jsx("div",{className:"click-me-overlay",children:"Click Me"})}),bt.jsxs("div",{id:"text",children:[bt.jsx("div",{id:"code",ref:e,style:{display:f?"block":"none"},dangerouslySetInnerHTML:{__html:g}}),bt.jsx(J1,{show:p,audioRef:t,trackIndex:r,setTrackIndex:o})]})]})})}function eT(){return bt.jsx(Q1,{})}n_.createRoot(document.getElementById("root")).render(bt.jsx($v.StrictMode,{children:bt.jsx(eT,{})}));
