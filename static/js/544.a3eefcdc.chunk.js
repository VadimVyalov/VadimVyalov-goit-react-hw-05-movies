"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{3512:function(n,e,t){t.d(e,{Z:function(){return c}});var r,a=t(8402),i=t(168),o=t(6444).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),s=t(184),c=function(){return(0,s.jsx)(o,{children:(0,s.jsx)(a.s5,{strokeColor:"#3f51b5",strokeWidth:"4",animationDuration:"1",width:"70",visible:!0})})}},6368:function(n,e,t){var r=t(1598),a=t(184);e.Z=function(n){var e=n.films,t=n.location;return(0,a.jsx)("ul",{children:e.map((function(n){return(0,a.jsx)("li",{children:(0,a.jsxs)(r.rU,{to:"/Movies/".concat(n.id),state:{from:t},children:[n.name," ",n.original_title]})},n.id)}))})}},1598:function(n,e,t){t.d(e,{W2:function(){return u},h4:function(){return l},rU:function(){return d}});var r,a,i,o=t(168),s=t(6444),c=t(1087),u=s.ZP.div(r||(r=(0,o.Z)(["\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 16px;\n"]))),l=s.ZP.header(a||(a=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 8px 0;\n  margin-bottom: 16px;\n  border-bottom: 1px solid black;\n\n  > nav {\n    display: flex;\n  }\n"]))),d=(0,s.ZP)(c.OL)(i||(i=(0,o.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"])))},9544:function(n,e,t){t.r(e);var r=t(3749),a=t(3512),i=t(7689),o=t(6368),s=t(8174),c=t(184);e.default=function(){var n=(0,i.TH)(),e=(0,r.i)("trending/movie/day"),t=e.data,u=e.isLoaded,l=e.error;l&&s.Am.error(l.message);var d=(null===t||void 0===t?void 0:t.total_results)>0&&!l,f=u&&!l,p=null===t||void 0===t?void 0:t.results;return(0,c.jsxs)(c.Fragment,{children:[f&&(0,c.jsx)(a.Z,{}),d&&(0,c.jsx)(o.Z,{films:p,location:n})]})}},3749:function(n,e,t){t.d(e,{i:function(){return f}});var r=t(1413),a=t(9439),i=t(5861),o=t(4687),s=t.n(o),c=t(1243),u=t(2791);function l(n){return d.apply(this,arguments)}function d(){return d=(0,i.Z)(s().mark((function n(e){var t,a,i,o,u=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=u.length>2&&void 0!==u[2]?u[2]:null,i={baseURL:"https://api.themoviedb.org/3/",params:{api_key:"4c5709de239d230c95a29a6c1868ce65"}},(t=u.length>1&&void 0!==u[1]?u[1]:null)&&(i.signal=t.signal),a&&(i.params=(0,r.Z)((0,r.Z)({},i.params),a)),console.log(i),n.next=8,c.Z.get(e,i);case 8:return o=n.sent,n.abrupt("return",o);case 10:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}var f=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=(0,u.useState)(null),r=(0,a.Z)(t,2),o=r[0],c=r[1],d=(0,u.useState)(""),f=(0,a.Z)(d,2),p=f[0],v=f[1],h=(0,u.useState)(!0),x=(0,a.Z)(h,2),g=x[0],m=x[1];return(0,u.useEffect)((function(){var t=new AbortController;return(0,i.Z)(s().mark((function r(){var a;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!n){r.next=6;break}return r.next=4,l(n,t,e);case 4:a=r.sent,c(a.data);case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),"canceled"!==r.t0.message&&v(r.t0.message);case 11:return r.prev=11,m(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,8,11,14]])})))(),function(){return t.abort()}}),[e,n]),{data:o,error:p,isLoaded:g}}}}]);
//# sourceMappingURL=544.a3eefcdc.chunk.js.map