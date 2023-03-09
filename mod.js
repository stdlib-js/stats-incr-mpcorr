// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,e=Object.prototype,n=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,u=e.__lookupSetter__;var l=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,l){var f,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(a.call(r,t)||u.call(r,t)?(f=r.__proto__,r.__proto__=e,delete r[t],r[t]=l.value,r.__proto__=f):r[t]=l.value),y="get"in l,p="set"in l,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,t,l.get),p&&i&&i.call(r,t,l.set),r};function f(r,t,e){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function c(r){return"number"==typeof r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var s="function"==typeof Symbol?Symbol.toStringTag:"";var _=p()?function(r){var t,e,n,o,i;if(null==r)return b.call(r);e=r[s],i=s,t=null!=(o=r)&&v.call(o,i);try{r[s]=void 0}catch(t){return b.call(r)}return n=b.call(r),t?r[s]=e:delete r[s],n}:function(r){return b.call(r)},m=Number,h=m.prototype.toString;var d=p();function g(r){return"object"==typeof r&&(r instanceof m||(d?function(r){try{return h.call(r),!0}catch(r){return!1}}(r):"[object Number]"===_(r)))}function w(r){return c(r)||g(r)}f(w,"isPrimitive",c),f(w,"isObject",g);var N=Number.POSITIVE_INFINITY,j=m.NEGATIVE_INFINITY,O=Math.floor;function S(r){return r<N&&r>j&&O(t=r)===t;var t}function T(r){return c(r)&&S(r)}function A(r){return g(r)&&S(r.valueOf())}function E(r){return T(r)||A(r)}function F(r){return T(r)&&r>0}function I(r){return A(r)&&r.valueOf()>0}function P(r){return F(r)||I(r)}function k(r){return r!=r}f(E,"isPrimitive",T),f(E,"isObject",A),f(P,"isPrimitive",F),f(P,"isObject",I);var V=Math.sqrt,G="function"==typeof Float64Array;var J="function"==typeof Float64Array?Float64Array:null;var x="function"==typeof Float64Array?Float64Array:void 0;var C=function(){var r,t,e;if("function"!=typeof J)return!1;try{t=new J([1,3.14,-3.14,NaN]),e=t,r=(G&&e instanceof Float64Array||"[object Float64Array]"===_(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?x:function(){throw new Error("not implemented")};function M(){var r,t=arguments,e=t[0],n="https://stdlib.io/e/"+e+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function Y(r,t,e){var n,o,i,a,u,l,f,y,p,b,v,s,_,m,h,d,g,w;if(!F(r))throw new TypeError(M("0eJ4o",r));if(n=new C(2*r),g=r-1,l=0,f=0,h=0,m=-1,d=0,arguments.length>1){if(!c(t))throw new TypeError(M("0eJ4N",t));if(!c(e))throw new TypeError(M("0eJ4O",e));return y=t,p=e,j}return y=0,p=0,N;function N(t,e){var c,N,j,O,S;if(0===arguments.length)return 0===d?null:1===d?0:d<r?h/(d-1)/(b*v):h/g/(b*v);if(w=2*(m=(m+1)%r),k(t)||k(e))d=r,h=NaN;else{if(d<r)return n[w]=t,n[w+1]=e,l+=(s=t-y)*(t-(y+=s/(d+=1))),f+=(_=e-p)*(u=e-(p+=_/d)),h+=s*u,1===d?0:(b=V(l/(j=d-1)),v=V(f/j),h/j/(b*v));if(1===d)return 0;if(k(n[w])||k(n[w+1])){for(d=1,y=t,p=e,l=0,f=0,h=0,O=0;O<r;O++)if((S=2*O)!==w){if(c=n[S],N=n[S+1],k(c)||k(N)){d=r,h=NaN;break}l+=(s=c-y)*(c-(y+=s/(d+=1))),f+=(_=N-p)*(u=N-(p+=_/d)),h+=s*u}}else!1===k(h)&&(o=n[w]-y,a=n[w+1]-p,l+=(s=(i=t-y)-o)*(o+(t-(y+=s/r))),f+=(_=(u=e-p)-a)*(a+(e-(p+=_/r))),h+=i*u-o*a-s*_/r)}return n[w]=t,n[w+1]=e,b=V(l/g),v=V(f/g),h/g/(b*v)}function j(t,e){var c,g;if(0===arguments.length)return 0===d?null:d<r?h/d/(b*v):h/r/(b*v);if(w=2*(m=(m+1)%r),k(t)||k(e))d=r,h=NaN;else{if(d<r)return n[w]=t,n[w+1]=e,f+=(_=e-p)*_,h+=(s=t-y)*_,b=V((l+=s*s)/(d+=1)),v=V(f/d),h/d/(b*v);if(k(n[w])||k(n[w+1])){for(l=0,f=0,h=0,c=0;c<r;c++)if((g=2*c)!==w){if(k(n[g])||k(n[g+1])){d=r,h=NaN;break}s=n[g]-y,l+=s*s,_=n[g+1]-p,f+=_*_,h+=s*_}}else!1===k(h)&&(o=n[w]-y,i=t-y,a=n[w+1]-p,l+=(i-o)*(i+o),f+=((u=e-p)-a)*(u+a),h+=i*u-o*a)}return n[w]=t,n[w+1]=e,b=V(l/r),v=V(f/r),h/r/(b*v)}}export{Y as default};
//# sourceMappingURL=mod.js.map