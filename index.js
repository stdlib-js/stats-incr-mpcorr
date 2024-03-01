// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var l=Math.abs,s=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function v(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,w,"$1e"),i=f.call(i,b,"e"),i=f.call(i,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,p,"e+0$1"),i=f.call(i,g,"e-0$1"),e.alternate&&(i=f.call(i,d,"$1."),i=f.call(i,h,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):s.call(i)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,E=isNaN,S=Array.isArray;function I(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,i,a,o,l,s,u,f,p,g,d,h;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",s=1,u=0;u<e.length;u++)if("string"==typeof(i=e[u]))l+=i;else{if(r=void 0!==i.precision,!(i=I(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,E(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,E(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!E(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=E(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=v(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(p=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+m(h):m(h)+p)),l+=i.arg||"",s+=1}return l}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function x(e){var r,t,i,n;for(t=[],n=0,i=N.exec(e);i;)(r=e.slice(n,N.lastIndex-i[0].length)).length&&t.push(r),t.push(j(i)),n=N.lastIndex,i=N.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function T(e){var r,t;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[x(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return k.apply(null,r)}var F=Object.prototype,A=F.toString,O=F.__defineGetter__,V=F.__defineSetter__,P=F.__lookupGetter__,$=F.__lookupSetter__,C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===A.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(P.call(e,r)||$.call(e,r)?(i=e.__proto__,e.__proto__=F,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(e,r,t.get),o&&V&&V.call(e,r,t.set),e};function R(e,r,t){C(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e){return"number"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString,M=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol:void 0,X="function"==typeof U?U.toStringTag:"",Y=W()?function(e){var r,t,i,n,a;if(null==e)return L.call(e);t=e[X],a=X,r=null!=(n=e)&&M.call(n,a);try{e[X]=void 0}catch(r){return L.call(e)}return i=L.call(e),r?e[X]=t:delete e[X],i}:function(e){return L.call(e)},q=Number,z=q.prototype.toString,B=W();function D(e){return"object"==typeof e&&(e instanceof q||(B?function(e){try{return z.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Y(e)))}function H(e){return G(e)||D(e)}R(H,"isPrimitive",G),R(H,"isObject",D);var J=Number.POSITIVE_INFINITY,K=q.NEGATIVE_INFINITY,Q=Math.floor;function ee(e){return e<J&&e>K&&Q(r=e)===r;var r}function re(e){return G(e)&&ee(e)}function te(e){return D(e)&&ee(e.valueOf())}function ie(e){return re(e)||te(e)}function ne(e){return re(e)&&e>0}function ae(e){return te(e)&&e.valueOf()>0}function oe(e){return ne(e)||ae(e)}function ce(e){return e!=e}R(ie,"isPrimitive",re),R(ie,"isObject",te),R(oe,"isPrimitive",ne),R(oe,"isObject",ae);var le=Math.sqrt,se="function"==typeof Float64Array,ue="function"==typeof Float64Array?Float64Array:null,fe="function"==typeof Float64Array?Float64Array:void 0,pe=function(){var e,r,t;if("function"!=typeof ue)return!1;try{r=new ue([1,3.14,-3.14,NaN]),t=r,e=(se&&t instanceof Float64Array||"[object Float64Array]"===Y(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?fe:function(){throw new Error("not implemented")};function ge(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return function(e,r,t){var i,n,a,o,c,l,s,u,f,p,g,d,h,y,b,w,v,m;if(!ne(e))throw new TypeError(ge("1Ip4b",e));if(i=new pe(2*e),v=e-1,l=0,s=0,b=0,y=-1,w=0,arguments.length>1){if(!G(r))throw new TypeError(ge("1Ip4A",r));if(!G(t))throw new TypeError(ge("1Ip4B",t));return u=r,f=t,function(r,t){var v,_;if(0===arguments.length)return 0===w?null:w<e?b/w/(p*g):b/e/(p*g);if(m=2*(y=(y+1)%e),ce(r)||ce(t))w=e,b=NaN;else{if(w<e)return i[m]=r,i[m+1]=t,s+=(h=t-f)*h,b+=(d=r-u)*h,p=le((l+=d*d)/(w+=1)),g=le(s/w),b/w/(p*g);if(ce(i[m])||ce(i[m+1])){for(l=0,s=0,b=0,v=0;v<e;v++)if((_=2*v)!==m){if(ce(i[_])||ce(i[_+1])){w=e,b=NaN;break}d=i[_]-u,l+=d*d,h=i[_+1]-f,s+=h*h,b+=d*h}}else!1===ce(b)&&(n=i[m]-u,a=r-u,o=i[m+1]-f,l+=(a-n)*(a+n),s+=((c=t-f)-o)*(c+o),b+=a*c-n*o)}return i[m]=r,i[m+1]=t,p=le(l/e),g=le(s/e),b/e/(p*g)}}return u=0,f=0,function(r,t){var _,E,S,I,k;if(0===arguments.length)return 0===w?null:1===w?0:w<e?b/(w-1)/(p*g):b/v/(p*g);if(m=2*(y=(y+1)%e),ce(r)||ce(t))w=e,b=NaN;else{if(w<e)return i[m]=r,i[m+1]=t,l+=(d=r-u)*(r-(u+=d/(w+=1))),s+=(h=t-f)*(c=t-(f+=h/w)),b+=d*c,1===w?0:(p=le(l/(S=w-1)),g=le(s/S),b/S/(p*g));if(1===w)return 0;if(ce(i[m])||ce(i[m+1])){for(w=1,u=r,f=t,l=0,s=0,b=0,I=0;I<e;I++)if((k=2*I)!==m){if(_=i[k],E=i[k+1],ce(_)||ce(E)){w=e,b=NaN;break}l+=(d=_-u)*(_-(u+=d/(w+=1))),s+=(h=E-f)*(c=E-(f+=h/w)),b+=d*c}}else!1===ce(b)&&(n=i[m]-u,o=i[m+1]-f,l+=(d=(a=r-u)-n)*(n+(r-(u+=d/e))),s+=(h=(c=t-f)-o)*(o+(t-(f+=h/e))),b+=a*c-n*o-d*h/e)}return i[m]=r,i[m+1]=t,p=le(l/v),g=le(s/v),b/v/(p*g)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).incrmpcorr=r();
//# sourceMappingURL=index.js.map
