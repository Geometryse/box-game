(this["webpackJsonpbox-game"]=this["webpackJsonpbox-game"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(5),r=c.n(a),s=(c(10),c(4)),o=c(2),i=(c(11),c(0));function j(e){var t=function(){for(var e,t={},c=(e=3,Math.floor(Math.random()*e)+1),n=0,a=0;n<9;){n++,Math.random()<.5&&a<c?(a++,t[n]=!0):t[n]=!1}return t},c=Object(n.useState)(t()),a=Object(o.a)(c,2),r=a[0],j=a[1];return Object(n.useEffect)((function(){for(var c=!0,n=0;n<9;)n++,!1===r[n]&&(c=!1);if(c){j(t());var a=e.totalCleared;(0,e.setTotalCleared)(a+1)}}),[r]),Object(i.jsx)("div",{className:"game-container",children:Object.keys(r).map((function(t,c){return Object(i.jsx)("div",{className:"cell ".concat(r[c+1]),onMouseDown:function(){return function(t){var c={};c[t]=!r[t],j(Object(s.a)(Object(s.a)({},r),c));var n=e.clicked,a=e.setClicked;n||a(!0)}(c+1)}},c)}))})}function u(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(0),s=Object(o.a)(r,2),u=s[0],l=s[1],b=Object(n.useState)(0),f=Object(o.a)(b,2),O=f[0],d=f[1],v=Object(n.useState)(!1),h=Object(o.a)(v,2),m=h[0],p=h[1];return Object(n.useEffect)((function(){if(m){var e=setInterval((function(){l((parseFloat(u)+.01).toFixed(2))}),10);return function(){clearInterval(e)}}})),Object(n.useEffect)((function(){d(u)}),[c]),Object(i.jsxs)("div",{children:[Object(i.jsx)(j,{totalCleared:c,setTotalCleared:a,clicked:m,setClicked:p}),u,"s",Object(i.jsxs)("p",{children:["Time to complete ",c,": ",O,"s"]})]})}var l=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("h1",{children:"BOX GAME"}),Object(i.jsx)(u,{})]})})};c(13);r.a.render(Object(i.jsx)(l,{}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.3ae7d662.chunk.js.map