(this.webpackJsonpproyecto5=this.webpackJsonpproyecto5||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(4),a=n.n(r),i=n(3),o=n(5),u=n(1),d=Object(o.b)((function(e){return{session:e.session,breake:e.breake,touch:e.touch}}),(function(e){return{sessionChange:function(t,n,c){e({type:"CSESSION",o:t,play:n,up:c})},breakeChange:function(t,n,c){e({type:"CBREAKE",o:t,play:n,up:c})},refresh:function(){e({type:"REFRESH"})},offTouch:function(){e({type:"OFFTOUCH"})}}}))((function(e){var t=e.sessionChange,n=e.breakeChange,s=e.session,r=e.breake,a=e.refresh,o=e.touch,d=e.offTouch,l=Object(c.useState)(!0),f=Object(i.a)(l,2),b=f[0],j=f[1],h=Object(c.useState)(s),O=Object(i.a)(h,2),p=O[0],m=O[1],v=Object(c.useState)(0),x=Object(i.a)(v,2),k=x[0],C=x[1],g=Object(c.useState)(!1),S=Object(i.a)(g,2),N=S[0],y=S[1],E=Object(c.useState)("session"),w=Object(i.a)(E,2),F=w[0],B=w[1],I=document.getElementById("beep");Object(c.useEffect)((function(){var e=null;return b?!N&&o&&(m(s),C(0)):!N&&o&&(m(r),C(0)),0===p&&0===k&&(I.play(),setTimeout((function(){I.pause()}),1e3)),console.log(k),N?(d(),e=setInterval((function(){b?0===p&&0===k?(j((function(e){return!e})),m(r+1),0===k?(C((function(e){return e+59})),m((function(e){return e-1}))):C((function(e){return e-1}))):0===k?(C((function(e){return e+59})),m((function(e){return e-1}))):C((function(e){return e-1})):0===p&&0===k?(j((function(e){return!e})),m(s+1),0===k?(C((function(e){return e+59})),m((function(e){return e-1}))):C((function(e){return e-1}))):0===k?(C((function(e){return e+59})),m((function(e){return e-1}))):C((function(e){return e-1}))}),1e3)):clearInterval(e),B(b?"Session":"Break"),function(){clearInterval(e)}}),[k,p,s,r,b,N,o,F,d,I]);return Object(u.jsxs)("div",{id:"reloj",children:[Object(u.jsx)("h1",{className:"first",children:"25 + 5 Clock"}),Object(u.jsxs)("div",{id:"secondCompleto",children:[Object(u.jsx)("span",{className:"second",id:"break-label",children:"Break Length"}),Object(u.jsx)("span",{className:"second",id:"session-label",children:"Session Length"})]}),Object(u.jsxs)("div",{id:"completo",children:[Object(u.jsxs)("div",{className:"third",children:[Object(u.jsx)("div",{className:" fa fa-arrow-down fa-2x derecha div",id:"break-decrement",onClick:function(){return n(-1,!N,!1)}}),Object(u.jsx)("span",{className:"derecha",id:"break-length",children:r}),Object(u.jsx)("div",{className:" fa fa-arrow-up fa-2x derecha div",id:"break-increment",onClick:function(){return n(1,!N,!0)}})]}),Object(u.jsxs)("div",{className:"third",id:"sesion",children:[Object(u.jsx)("div",{className:" fa fa-arrow-down fa-2x derecha div",id:"session-decrement",onClick:function(){return t(-1,!N,!1)}}),Object(u.jsx)("span",{className:"derecha",id:"session-length",children:s}),Object(u.jsx)("div",{className:" fa fa-arrow-up fa-2x derecha div",id:"session-increment",onClick:function(){return t(1,!N,!0)}})]})]}),Object(u.jsxs)("div",{className:"forth",children:[Object(u.jsx)("span",{id:"timer-label",children:F}),Object(u.jsxs)("div",{id:"time-left",children:[("0"+p).slice(-2),":",("0"+k).slice(-2)]})]}),Object(u.jsxs)("div",{className:"fifth",children:[Object(u.jsx)("div",{id:"start_stop",className:"fa fa-2x ".concat(N?"fa-pause":"fa-play"," div"),onClick:function(){return y(!N)}}),Object(u.jsx)("div",{id:"reset",className:" fa fa-refresh fa-2x  div",onClick:function(){a(),y(!1),C(0),j(!0),m(s),I.pause(),I.currentTime=0,B("Session")}})]}),Object(u.jsx)("audio",{id:"beep",preload:"auto",src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"})]})})),l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))},f=n(2),b=n(9),j={session:25,breake:5,touch:!0},h=Object(b.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CSESSION":return t.play&&e.session<60&&(t.up||e.session>1)?Object(f.a)(Object(f.a)({},e),{},{session:e.session+t.o,touch:!0}):e;case"CBREAKE":return t.play&&e.breake<60&&(t.up||e.breake>1)?Object(f.a)(Object(f.a)({},e),{},{breake:e.breake+t.o,touch:!0}):e;case"OFFTOUCH":return Object(f.a)(Object(f.a)({},e),{},{touch:!1});case"REFRESH":default:return j}}));n(21);a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(o.a,{store:h,children:Object(u.jsx)(d,{})})}),document.getElementById("root")),l()}},[[22,1,2]]]);
//# sourceMappingURL=main.51889143.chunk.js.map