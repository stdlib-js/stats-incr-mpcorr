// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,u=r.__lookupGetter__,f=r.__lookupSetter__,l=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,l){var a,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(u.call(t,e)||f.call(t,e)?(a=t.__proto__,t.__proto__=r,delete t[e],t[e]=l.value,t.__proto__=a):t[e]=l.value),y="get"in l,p="set"in l,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,e,l.get),p&&i&&i.call(t,e,l.set),t};function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function c(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString,s=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",m=p()?function(t){var e,r,n,o,i;if(null==t)return b.call(t);r=t[_],i=_,e=null!=(o=t)&&s.call(o,i);try{t[_]=void 0}catch(e){return b.call(t)}return n=b.call(t),e?t[_]=r:delete t[_],n}:function(t){return b.call(t)},v=Number,d=v.prototype.toString,h=p();function g(t){return"object"==typeof t&&(t instanceof v||(h?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function j(t){return c(t)||g(t)}a(j,"isPrimitive",c),a(j,"isObject",g);var w=Number.POSITIVE_INFINITY,N=v.NEGATIVE_INFINITY,O=Math.floor;function S(t){return t<w&&t>N&&O(e=t)===e;var e}function T(t){return c(t)&&S(t)}function A(t){return g(t)&&S(t.valueOf())}function E(t){return T(t)||A(t)}function F(t){return T(t)&&t>0}function I(t){return A(t)&&t.valueOf()>0}function P(t){return F(t)||I(t)}function k(t){return t!=t}a(E,"isPrimitive",T),a(E,"isObject",A),a(P,"isPrimitive",F),a(P,"isObject",I);var V=Math.sqrt,x="function"==typeof Float64Array,G="function"==typeof Float64Array?Float64Array:null,J="function"==typeof Float64Array?Float64Array:void 0,C=function(){var t,e,r;if("function"!=typeof G)return!1;try{e=new G([1,3.14,-3.14,NaN]),r=e,t=(x&&r instanceof Float64Array||"[object Float64Array]"===m(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?J:function(){throw new Error("not implemented")};function M(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function(t,e,r){var n,o,i,u,f,l,a,y,p,b,s,_,m,v,d,h,g,j;if(!F(t))throw new TypeError(M("0eJ4o",t));if(n=new C(2*t),g=t-1,l=0,a=0,d=0,v=-1,h=0,arguments.length>1){if(!c(e))throw new TypeError(M("0eJ4N",e));if(!c(r))throw new TypeError(M("0eJ4O",r));return y=e,p=r,N}return y=0,p=0,w;function w(e,r){var c,w,N,O,S;if(0===arguments.length)return 0===h?null:1===h?0:h<t?d/(h-1)/(b*s):d/g/(b*s);if(j=2*(v=(v+1)%t),k(e)||k(r))h=t,d=NaN;else{if(h<t)return n[j]=e,n[j+1]=r,l+=(_=e-y)*(e-(y+=_/(h+=1))),a+=(m=r-p)*(f=r-(p+=m/h)),d+=_*f,1===h?0:(b=V(l/(N=h-1)),s=V(a/N),d/N/(b*s));if(1===h)return 0;if(k(n[j])||k(n[j+1])){for(h=1,y=e,p=r,l=0,a=0,d=0,O=0;O<t;O++)if((S=2*O)!==j){if(c=n[S],w=n[S+1],k(c)||k(w)){h=t,d=NaN;break}l+=(_=c-y)*(c-(y+=_/(h+=1))),a+=(m=w-p)*(f=w-(p+=m/h)),d+=_*f}}else!1===k(d)&&(o=n[j]-y,u=n[j+1]-p,l+=(_=(i=e-y)-o)*(o+(e-(y+=_/t))),a+=(m=(f=r-p)-u)*(u+(r-(p+=m/t))),d+=i*f-o*u-_*m/t)}return n[j]=e,n[j+1]=r,b=V(l/g),s=V(a/g),d/g/(b*s)}function N(e,r){var c,g;if(0===arguments.length)return 0===h?null:h<t?d/h/(b*s):d/t/(b*s);if(j=2*(v=(v+1)%t),k(e)||k(r))h=t,d=NaN;else{if(h<t)return n[j]=e,n[j+1]=r,a+=(m=r-p)*m,d+=(_=e-y)*m,b=V((l+=_*_)/(h+=1)),s=V(a/h),d/h/(b*s);if(k(n[j])||k(n[j+1])){for(l=0,a=0,d=0,c=0;c<t;c++)if((g=2*c)!==j){if(k(n[g])||k(n[g+1])){h=t,d=NaN;break}_=n[g]-y,l+=_*_,m=n[g+1]-p,a+=m*m,d+=_*m}}else!1===k(d)&&(o=n[j]-y,i=e-y,u=n[j+1]-p,l+=(i-o)*(i+o),a+=((f=r-p)-u)*(f+u),d+=i*f-o*u)}return n[j]=e,n[j+1]=r,b=V(l/t),s=V(a/t),d/t/(b*s)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).incrmpcorr=e();
//# sourceMappingURL=index.js.map
