// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__,l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,l){var a,c,p,y;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(u.call(t,r)||f.call(t,r)?(a=t.__proto__,t.__proto__=e,delete t[r],t[r]=l.value,t.__proto__=a):t[r]=l.value),p="get"in l,y="set"in l,c&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,r,l.get),y&&i&&i.call(t,r,l.set),t};function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function c(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",m=y()?function(t){var r,e,n,o,i;if(null==t)return b.call(t);e=t[_],i=_,r=null!=(o=t)&&s.call(o,i);try{t[_]=void 0}catch(r){return b.call(t)}return n=b.call(t),r?t[_]=e:delete t[_],n}:function(t){return b.call(t)},v=Number,d=v.prototype.toString,h=y();function g(t){return"object"==typeof t&&(t instanceof v||(h?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function j(t){return c(t)||g(t)}a(j,"isPrimitive",c),a(j,"isObject",g);var w=Number.POSITIVE_INFINITY,N=v.NEGATIVE_INFINITY,I=Math.floor;function O(t){return t<w&&t>N&&I(r=t)===r;var r}function S(t){return c(t)&&O(t)}function T(t){return g(t)&&O(t.valueOf())}function A(t){return S(t)||T(t)}function E(t){return S(t)&&t>0}function F(t){return T(t)&&t.valueOf()>0}function P(t){return E(t)||F(t)}function k(t){return t!=t}a(A,"isPrimitive",S),a(A,"isObject",T),a(P,"isPrimitive",E),a(P,"isObject",F);var V=Math.sqrt,x="function"==typeof Float64Array,G="function"==typeof Float64Array?Float64Array:null,H="function"==typeof Float64Array?Float64Array:void 0,C=function(){var t,r,e;if("function"!=typeof G)return!1;try{r=new G([1,3.14,-3.14,NaN]),e=r,t=(x&&e instanceof Float64Array||"[object Float64Array]"===m(e))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?H:function(){throw new Error("not implemented")};function M(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return function(t,r,e){var n,o,i,u,f,l,a,p,y,b,s,_,m,v,d,h,g,j;if(!E(t))throw new TypeError(M("1Ip4b,Ht",t));if(n=new C(2*t),g=t-1,l=0,a=0,d=0,v=-1,h=0,arguments.length>1){if(!c(r))throw new TypeError(M("1Ip4A,Hr",r));if(!c(e))throw new TypeError(M("1Ip4B,Hu",e));return p=r,y=e,N}return p=0,y=0,w;function w(r,e){var c,w,N,I,O;if(0===arguments.length)return 0===h?null:1===h?0:h<t?d/(h-1)/(b*s):d/g/(b*s);if(j=2*(v=(v+1)%t),k(r)||k(e))h=t,d=NaN;else{if(h<t)return n[j]=r,n[j+1]=e,l+=(_=r-p)*(r-(p+=_/(h+=1))),a+=(m=e-y)*(f=e-(y+=m/h)),d+=_*f,1===h?0:(b=V(l/(N=h-1)),s=V(a/N),d/N/(b*s));if(1===h)return 0;if(k(n[j])||k(n[j+1])){for(h=1,p=r,y=e,l=0,a=0,d=0,I=0;I<t;I++)if((O=2*I)!==j){if(c=n[O],w=n[O+1],k(c)||k(w)){h=t,d=NaN;break}l+=(_=c-p)*(c-(p+=_/(h+=1))),a+=(m=w-y)*(f=w-(y+=m/h)),d+=_*f}}else!1===k(d)&&(o=n[j]-p,u=n[j+1]-y,l+=(_=(i=r-p)-o)*(o+(r-(p+=_/t))),a+=(m=(f=e-y)-u)*(u+(e-(y+=m/t))),d+=i*f-o*u-_*m/t)}return n[j]=r,n[j+1]=e,b=V(l/g),s=V(a/g),d/g/(b*s)}function N(r,e){var c,g;if(0===arguments.length)return 0===h?null:h<t?d/h/(b*s):d/t/(b*s);if(j=2*(v=(v+1)%t),k(r)||k(e))h=t,d=NaN;else{if(h<t)return n[j]=r,n[j+1]=e,a+=(m=e-y)*m,d+=(_=r-p)*m,b=V((l+=_*_)/(h+=1)),s=V(a/h),d/h/(b*s);if(k(n[j])||k(n[j+1])){for(l=0,a=0,d=0,c=0;c<t;c++)if((g=2*c)!==j){if(k(n[g])||k(n[g+1])){h=t,d=NaN;break}_=n[g]-p,l+=_*_,m=n[g+1]-y,a+=m*m,d+=_*m}}else!1===k(d)&&(o=n[j]-p,i=r-p,u=n[j+1]-y,l+=(i-o)*(i+o),a+=((f=e-y)-u)*(f+u),d+=i*f-o*u)}return n[j]=r,n[j+1]=e,b=V(l/t),s=V(a/t),d/t/(b*s)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).incrmpcorr=r();
//# sourceMappingURL=browser.js.map
