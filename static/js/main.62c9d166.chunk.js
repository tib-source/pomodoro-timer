(this["webpackJsonppomodoro-timer"]=this["webpackJsonppomodoro-timer"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),a=n.n(r),i=(n(9),n(2)),s=n(0);var o=function(e){var t=e.handleIncrement,n=(e.paused,e.title),c=(e.setState,e.state),r=n.toLowerCase();return Object(s.jsxs)("div",{className:"laboom",children:[Object(s.jsxs)("span",{id:"".concat(r,"-label"),children:[n," Length"]}),Object(s.jsxs)("div",{className:"button",children:[Object(s.jsx)("button",{onClick:function(){return t(-60,n)},id:"".concat(r,"-decrement"),children:"-"}),Object(s.jsx)("input",{type:"number",value:c,name:"break",id:"".concat(r,"-length"),readOnly:!0}),Object(s.jsx)("button",{onClick:function(){return t(60,n)},id:"".concat(r,"-increment"),children:"+"})]})]})};var u=function(){var e=Object(c.useState)(1500),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(300),u=Object(i.a)(a,2),l=u[0],j=u[1],d=Object(c.useState)(!1),b=Object(i.a)(d,2),m=b[0],O=b[1],f=Object(c.useState)(n),h=Object(i.a)(f,2),p=h[0],v=h[1],x=Object(c.useRef)(null),S=Object(c.useState)(!0),k=Object(i.a)(S,2),g=k[0],I=k[1],N=function(){0!==p&&v((function(e){return 1===e?(setTimeout((function(){return m?T(!0,"Session"):(function(){var e=x.current;e.currentTime=0,e.play(),console.log(e),setTimeout((function(){e.pause(),e.currentTime=0}),3e3)}(),T(!0,"Break"))}),1e3),0):e-1}))},T=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!1===e)return x.current.pause(),x.current.currentTime=0,r(1500),v(1500),j(300),O(!1),I(!0),"reset complete";"Break"===t?(O(!0),v(l)):(O(!1),v(n))};Object(c.useEffect)((function(){var e=null;return g?"25:00"!==p&&clearInterval():e=setInterval(N,1e3),function(){return clearInterval(e)}}),[g,N,p]);var B=function(e,t){g&&("Break"===t?(j((function(t){return t+e<=0||t+e>3600?t:t+e})),m&&v(l)):(r((function(t){return t+e<=0||t+e>3600?t:t+e})),m||v((function(t){return n+e===0?n:n+e}))))};return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"top",children:[Object(s.jsx)(o,{paused:g,state:Math.floor(n/60),handleIncrement:B,title:"Session"}),Object(s.jsx)(o,{paused:g,state:Math.floor(l/60),title:"Break",handleIncrement:B})]}),Object(s.jsxs)("div",{className:"timer",children:[Object(s.jsx)("h2",{id:"timer-label",children:m?"Break Time!":"Focus Time!"}),Object(s.jsx)("h1",{id:"time-left",children:function(){var e=Math.floor(p/60),t=p%60;return"".concat(e.toString().padStart(2,"0"),":").concat(t.toString().padStart(2,"0"))}()}),Object(s.jsxs)("div",{className:"timer__butons",children:[Object(s.jsx)("button",{onClick:function(e){g?I(!1):g||I(!0)},id:"start_stop",children:g?"Start":"Pause"}),Object(s.jsx)("button",{onClick:function(){return T()},id:"reset",children:"Reset"})]}),Object(s.jsx)("audio",{src:"./beep.mp3",id:"beep",ref:x})]})]})};var l=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(u,{})})};a.a.render(Object(s.jsx)(l,{}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.62c9d166.chunk.js.map