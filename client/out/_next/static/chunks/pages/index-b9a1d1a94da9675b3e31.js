_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"4i/N":function(e,t,r){"use strict";var n=r("VTBJ"),c=r("q1tI"),a={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"},o=r("6VBw"),s=function(e,t){return c.createElement(o.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:a}))},l=c.forwardRef(s);t.a=l},RNiq:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return u}));var n=r("nKUr"),c=(r("q1tI"),r("bx4M")),a=r("KrTs"),o=r("YFqc"),s=r.n(o),l=r("IF/j"),i=(c.a.Meta,function(e){var t=e.course,r=(e.averageRating,t.name),o=t.instructor,i=t.price,u=t.image,f=t.slug,d=t.paid,p=t.category;return Object(n.jsx)(s.a,{href:"/course/".concat(f),children:Object(n.jsx)("a",{children:Object(n.jsxs)(c.a,{className:"course-card mb-4 border border-dark border-3 rounded mt-2 mb-5 mx-auto",cover:Object(n.jsx)("img",{src:u.Location,alt:r,className:"course-card-image p-2 mx-auto"}),children:[Object(n.jsx)("hr",{}),Object(n.jsx)("h2",{className:"text-dark",children:r}),Object(n.jsxs)("p",{children:["By ",o.name]}),Object(n.jsx)(a.a,{count:p,style:{backgroundColor:"#6a00ff"},className:"pb-2"}),Object(n.jsx)("h4",{className:"pt-2",children:d?Object(l.a)({amount:i,currency:"eur"}):"Free"})]})})})}),u=!0;t.default=function(e){var t=e.courses;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h1",{className:"p-4 jumbotron text-center bg-primary mb-4",style:{fontFamily:"Copperplate"},children:['"Education is the most powerful weapon which you can use to change the world"',Object(n.jsx)("p",{className:"div pt-4",style:{fontFamily:"Papyrus",fontWeight:"bold"},children:"NELSON \xa0\xa0MANDELA"})]}),Object(n.jsx)("div",{className:"container-fluid",children:Object(n.jsx)("div",{className:"row",children:t.map((function(e){return Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)("div",{className:"course-card",children:Object(n.jsx)(i,{course:e})})},e._id)}))})})]})}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("zoAU"),c=r("7KCV");t.__esModule=!0,t.default=void 0;var a=c(r("q1tI")),o=r("elyg"),s=r("nOHt"),l=r("vNVm"),i={};function u(e,t,r,n){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var c=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[t+"%"+r+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,s.useRouter)(),c=r&&r.asPath||"/",f=a.default.useMemo((function(){var t=(0,o.resolveHref)(c,e.href,!0),r=n(t,2),a=r[0],s=r[1];return{href:a,as:e.as?(0,o.resolveHref)(c,e.as):s||a}}),[c,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,m=e.scroll,j=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=a.Children.only(v),y=g&&"object"===typeof g&&g.ref,N=(0,l.useIntersection)({rootMargin:"200px"}),O=n(N,2),x=O[0],w=O[1],_=a.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);(0,a.useEffect)((function(){var e=w&&t&&(0,o.isLocalURL)(d),n="undefined"!==typeof j?j:r&&r.locale,c=i[d+"%"+p+(n?"%"+n:"")];e&&!c&&u(r,d,p,{locale:n})}),[p,d,w,j,t,r]);var L={ref:_,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,r,n,c,a,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(r))&&(e.preventDefault(),null==s&&(s=n.indexOf("#")<0),t[c?"replace":"push"](r,n,{shallow:a,locale:l,scroll:s}))}(e,r,d,p,h,b,m,j)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(r,d,p,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var E="undefined"!==typeof j?j:r&&r.locale,M=r&&r.isLocaleDomain&&(0,o.getDomainLocale)(p,E,r&&r.locales,r&&r.domainLocales);L.href=M||(0,o.addBasePath)((0,o.addLocale)(p,E,r&&r.defaultLocale))}return a.default.cloneElement(g,L)};t.default=f},vNVm:function(e,t,r){"use strict";var n=r("zoAU");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!o,l=(0,c.useRef)(),i=(0,c.useState)(!1),u=n(i,2),f=u[0],d=u[1],p=(0,c.useCallback)((function(e){l.current&&(l.current(),l.current=void 0),r||f||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:c,elements:n}),r}(r),c=n.id,a=n.observer,o=n.elements;return o.set(e,t),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),s.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,c.useEffect)((function(){if(!o&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var c=r("q1tI"),a=r("0G5g"),o="undefined"!==typeof IntersectionObserver;var s=new Map},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",1,2,0,3,5,6,9,12,21]]]);