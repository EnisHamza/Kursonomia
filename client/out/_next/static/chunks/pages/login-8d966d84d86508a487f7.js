_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{AmVM:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var n=r("nKUr"),o=r("vJKn"),c=r.n(o),a=r("rg98"),s=r("cpVT"),u=r("q1tI"),i=r("zuR4"),l=r("20a2");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={user:null},b=Object(u.createContext)(),v=function(e,t){switch(t.type){case"LOGIN":return p(p({},e),{},{user:t.payload});case"LOGOUT":return p(p({},e),{},{user:null});default:return e}},O=function(e){var t=e.children,r=Object(u.useReducer)(v,d),o=r[0],s=r[1],f=Object(l.useRouter)();return Object(u.useEffect)((function(){s({type:"LOGIN",payload:JSON.parse(window.localStorage.getItem("user"))})}),[]),i.a.interceptors.response.use((function(e){return e}),(function(e){var t=e.response;return 401===t.status&&t.config&&!t.config__isRetryRequest?new Promise((function(t,r){i.a.get("/api/logout").then((function(e){console.log("/401 error > logout"),s({type:"LOGOUT"}),window.localStorage.removeItem("user"),f.push("login")})).catch((function(t){console.log("AXIOS INTERCEPTORS ERR",t),r(e)}))})):Promise.reject(e)})),Object(u.useEffect)((function(){(function(){var e=Object(a.a)(c.a.mark((function e(){var t,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("https://kursonomia-server.onrender.com/api/csrf-token");case 2:t=e.sent,r=t.data,i.a.defaults.headers["X-CSRF-Token"]=r.getCsrfToken;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsx)(b.Provider,{value:{state:o,dispatch:s},children:t})}},O2ls:function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),o=r("vJKn"),c=r.n(o),a=r("rg98"),s=r("q1tI"),u=r("zuR4"),i=r("FGyW"),l=r("zsHu"),f=r("YFqc"),p=r.n(f),d=r("AmVM"),b=r("20a2");t.default=function(){var e=Object(s.useState)(),t=e[0],r=e[1],o=Object(s.useState)(),f=o[0],v=o[1],O=Object(s.useState)(!1),h=O[0],j=O[1],g=Object(s.useContext)(d.a),m=g.state.user,y=g.dispatch,w=Object(b.useRouter)();Object(s.useEffect)((function(){null!==m&&w.push("/")}),[m]);var x=function(){var e=Object(a.a)(c.a.mark((function e(r){var n,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,j(!0),e.next=5,u.a.post("https://kursonomia-server.onrender.com/api/login",{email:t,password:f});case 5:n=e.sent,o=n.data,y({type:"LOGIN",payload:o}),window.localStorage.setItem("user",JSON.stringify(o)),w.push("/user"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),Object(i.b)(e.t0.response.data),j(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{className:"p-5 jumbotron text-center bg-primary",children:"Login"}),Object(n.jsxs)("div",{className:"container col-md-4 offset-md-4 pb-5 p-5",children:[Object(n.jsxs)("form",{onSubmit:x,children:[Object(n.jsx)("input",{type:"text",className:"form-control mb-4 p-3",value:t,onChange:function(e){return r(e.target.value)},placeholder:"Enter Email",required:!0}),Object(n.jsx)("input",{type:"password",className:"form-control mb-4 p-3",value:f,onChange:function(e){return v(e.target.value)},placeholder:"Enter Password",required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)("button",{type:"submit",className:"form-control mb-2 p-2 btn btn-block",disabled:!t||!f||h,style:{backgroundColor:"#6a00ff",color:"white"},children:h?Object(n.jsx)(l.a,{spin:!0}):"Submit"})]}),Object(n.jsxs)("p",{className:"text-center pt-3",children:["Not registered yet ?"," ",Object(n.jsx)(p.a,{href:"/register",children:Object(n.jsx)("a",{children:"Register"})})]}),Object(n.jsx)("p",{className:"text-center",children:Object(n.jsx)(p.a,{href:"/forgot-password",children:Object(n.jsx)("a",{className:"text-danger",children:"Forgot Password"})})})]})]})}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("zoAU"),o=r("7KCV");t.__esModule=!0,t.default=void 0;var c=o(r("q1tI")),a=r("elyg"),s=r("nOHt"),u=r("vNVm"),i={};function l(e,t,r,n){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,s.useRouter)(),o=r&&r.asPath||"/",f=c.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),r=n(t,2),c=r[0],s=r[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):s||c}}),[o,e.href,e.as]),p=f.href,d=f.as,b=e.children,v=e.replace,O=e.shallow,h=e.scroll,j=e.locale;"string"===typeof b&&(b=c.default.createElement("a",null,b));var g=c.Children.only(b),m=g&&"object"===typeof g&&g.ref,y=(0,u.useIntersection)({rootMargin:"200px"}),w=n(y,2),x=w[0],E=w[1],N=c.default.useCallback((function(e){x(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,x]);(0,c.useEffect)((function(){var e=E&&t&&(0,a.isLocalURL)(p),n="undefined"!==typeof j?j:r&&r.locale,o=i[p+"%"+d+(n?"%"+n:"")];e&&!o&&l(r,p,d,{locale:n})}),[d,p,E,j,t,r]);var R={ref:N,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,c,s,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(r))&&(e.preventDefault(),null==s&&(s=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:c,locale:u,scroll:s}))}(e,r,p,d,v,O,h,j)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(r,p,d,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var k="undefined"!==typeof j?j:r&&r.locale,I=r&&r.isLocaleDomain&&(0,a.getDomainLocale)(d,k,r&&r.locales,r&&r.domainLocales);R.href=I||(0,a.addBasePath)((0,a.addLocale)(d,k,r&&r.defaultLocale))}return c.default.cloneElement(g,R)};t.default=f},u6Hu:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r("O2ls")}])},vNVm:function(e,t,r){"use strict";var n=r("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,u=(0,o.useRef)(),i=(0,o.useState)(!1),l=n(i,2),f=l[0],p=l[1],d=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,c=n.observer,a=n.elements;return a.set(e,t),c.observe(e),function(){a.delete(e),c.unobserve(e),0===a.size&&(c.disconnect(),s.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[r,t,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,c.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=r("q1tI"),c=r("0G5g"),a="undefined"!==typeof IntersectionObserver;var s=new Map},zsHu:function(e,t,r){"use strict";var n=r("VTBJ"),o=r("q1tI"),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"},a=r("6VBw"),s=function(e,t){return o.createElement(a.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:c}))},u=o.forwardRef(s);t.a=u}},[["u6Hu",1,2,0,3,4,7]]]);