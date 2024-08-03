// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function f(f,m,o){var l,d,a,p,h,j,v,u,b,g,c,N,w,x,y,E,I,T;if(!r(f))throw new TypeError(n("1Ip4b",f));if(l=new i(2*f),I=f-1,j=0,v=0,y=0,x=-1,E=0,arguments.length>1){if(!e(m))throw new TypeError(n("1Ip4A",m));if(!e(o))throw new TypeError(n("1Ip4B",o));return u=m,b=o,function(r,e){var i,n;if(0===arguments.length)return 0===E?null:E<f?y/E/(g*c):y/f/(g*c);if(T=2*(x=(x+1)%f),t(r)||t(e))E=f,y=NaN;else{if(E<f)return l[T]=r,l[T+1]=e,v+=(w=e-b)*w,y+=(N=r-u)*w,g=s((j+=N*N)/(E+=1)),c=s(v/E),y/E/(g*c);if(t(l[T])||t(l[T+1])){for(j=0,v=0,y=0,i=0;i<f;i++)if((n=2*i)!==T){if(t(l[n])||t(l[n+1])){E=f,y=NaN;break}N=l[n]-u,j+=N*N,w=l[n+1]-b,v+=w*w,y+=N*w}}else!1===t(y)&&(d=l[T]-u,a=r-u,p=l[T+1]-b,j+=(a-d)*(a+d),v+=((h=e-b)-p)*(h+p),y+=a*h-d*p)}return l[T]=r,l[T+1]=e,g=s(j/f),c=s(v/f),y/f/(g*c)}}return u=0,b=0,function(r,e){var i,n,m,o,k;if(0===arguments.length)return 0===E?null:1===E?0:E<f?y/(E-1)/(g*c):y/I/(g*c);if(T=2*(x=(x+1)%f),t(r)||t(e))E=f,y=NaN;else{if(E<f)return l[T]=r,l[T+1]=e,j+=(N=r-u)*(r-(u+=N/(E+=1))),v+=(w=e-b)*(h=e-(b+=w/E)),y+=N*h,1===E?0:(g=s(j/(m=E-1)),c=s(v/m),y/m/(g*c));if(1===E)return 0;if(t(l[T])||t(l[T+1])){for(E=1,u=r,b=e,j=0,v=0,y=0,o=0;o<f;o++)if((k=2*o)!==T){if(i=l[k],n=l[k+1],t(i)||t(n)){E=f,y=NaN;break}j+=(N=i-u)*(i-(u+=N/(E+=1))),v+=(w=n-b)*(h=n-(b+=w/E)),y+=N*h}}else!1===t(y)&&(d=l[T]-u,p=l[T+1]-b,j+=(N=(a=r-u)-d)*(d+(r-(u+=N/f))),v+=(w=(h=e-b)-p)*(p+(e-(b+=w/f))),y+=a*h-d*p-N*w/f)}return l[T]=r,l[T+1]=e,g=s(j/I),c=s(v/I),y/I/(g*c)}}export{f as default};
//# sourceMappingURL=index.mjs.map
