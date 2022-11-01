// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function f(f,o,m){var l,d,a,h,p,j,u,v,b,g,c,N,w,x,y,E,J,T;if(!e(f))throw new TypeError(n("0eJ4o",f));if(l=new i(2*f),J=f-1,j=0,u=0,y=0,x=-1,E=0,arguments.length>1){if(!r(o))throw new TypeError(n("0eJ4N",o));if(!r(m))throw new TypeError(n("0eJ4O",m));return v=o,b=m,q}return v=0,b=0,k;function k(e,r){var i,n,o,m,k;if(0===arguments.length)return 0===E?null:1===E?0:E<f?y/(E-1)/(g*c):y/J/(g*c);if(T=2*(x=(x+1)%f),t(e)||t(r))E=f,y=NaN;else{if(E<f)return l[T]=e,l[T+1]=r,j+=(N=e-v)*(e-(v+=N/(E+=1))),u+=(w=r-b)*(p=r-(b+=w/E)),y+=N*p,1===E?0:(g=s(j/(o=E-1)),c=s(u/o),y/o/(g*c));if(1===E)return 0;if(t(l[T])||t(l[T+1])){for(E=1,v=e,b=r,j=0,u=0,y=0,m=0;m<f;m++)if((k=2*m)!==T){if(i=l[k],n=l[k+1],t(i)||t(n)){E=f,y=NaN;break}j+=(N=i-v)*(i-(v+=N/(E+=1))),u+=(w=n-b)*(p=n-(b+=w/E)),y+=N*p}}else!1===t(y)&&(d=l[T]-v,h=l[T+1]-b,j+=(N=(a=e-v)-d)*(d+(e-(v+=N/f))),u+=(w=(p=r-b)-h)*(h+(r-(b+=w/f))),y+=a*p-d*h-N*w/f)}return l[T]=e,l[T+1]=r,g=s(j/J),c=s(u/J),y/J/(g*c)}function q(e,r){var i,n;if(0===arguments.length)return 0===E?null:E<f?y/E/(g*c):y/f/(g*c);if(T=2*(x=(x+1)%f),t(e)||t(r))E=f,y=NaN;else{if(E<f)return l[T]=e,l[T+1]=r,u+=(w=r-b)*w,y+=(N=e-v)*w,g=s((j+=N*N)/(E+=1)),c=s(u/E),y/E/(g*c);if(t(l[T])||t(l[T+1])){for(j=0,u=0,y=0,i=0;i<f;i++)if((n=2*i)!==T){if(t(l[n])||t(l[n+1])){E=f,y=NaN;break}N=l[n]-v,j+=N*N,w=l[n+1]-b,u+=w*w,y+=N*w}}else!1===t(y)&&(d=l[T]-v,a=e-v,h=l[T+1]-b,j+=(a-d)*(a+d),u+=((p=r-b)-h)*(p+h),y+=a*p-d*h)}return l[T]=e,l[T+1]=r,g=s(j/f),c=s(u/f),y/f/(g*c)}}export{f as default};
//# sourceMappingURL=index.mjs.map