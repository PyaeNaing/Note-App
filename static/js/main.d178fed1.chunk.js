(this.webpackJsonphw3=this.webpackJsonphw3||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),c=(a(74),a(2)),i=a(142),s=a(19),m=Object(s.a)(),u=a(11),d=a(16),p=a.n(d),g=a(55);a(49);var E=function(e){var t=r.a.useState(e.notes),a=Object(u.a)(t,2),n=a[0],l=a[1],o=r.a.useState(e._id),c=Object(u.a)(o,2),i=c[0];return c[1],r.a.createElement(g.a,{trigger:r.a.createElement("button",{className:"button"}," View "),modal:!0},(function(t){return r.a.createElement("div",{className:"modal"},r.a.createElement("a",{className:"close",onClick:t},"\xd7"),r.a.createElement("div",{className:"header"}," ",e.title," "),r.a.createElement("textarea",{type:"text",className:"content",value:n,onChange:function(e){return l(e.target.value)}}),r.a.createElement("div",{className:"actions"},r.a.createElement("button",{onClick:function(a){a.preventDefault(),""!==n?p.a.post("/note/editNotes",{id:i,notes:n}).then((function(t){e.update(),console.log(t)})).catch((function(e){return console.log(e)})):alert("no empty notes!"),t()}},"submit edit"),r.a.createElement("button",{onClick:function(){console.log("modal closed "),t()}},"close modal")))}))},f=(a(92),function(e){var t={withCredentials:!0},a=r.a.useState([]),n=Object(u.a)(a,2),l=n[0],o=n[1],c=r.a.useState(""),i=Object(u.a)(c,2),s=i[0],m=i[1],d=r.a.useState(""),g=Object(u.a)(d,2),f=g[0],h=g[1],b=r.a.useState(""),v=Object(u.a)(b,2),w=(v[0],v[1]);function N(){p.a.get("/note/getAllNotes",t).then((function(e){o(e.data)})).catch((function(e){console.log(e)})),p.a.get("/note/getClient",t).then((function(e){console.log(e.data),w(e.data)})).catch((function(e){console.log(e)}))}r.a.useEffect(N,[]);return r.a.createElement("div",{className:"notepage"},r.a.createElement("header",{className:"header"},r.a.createElement("h3",{className:"title"},"React Note App",r.a.createElement("h4",{className:"subtitle"}))),r.a.createElement("div",{className:"bar"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==s&""!==f&&p.a.post("/note/createNotes",{title:s,notes:f},t).then((function(e){m(""),h(""),N(),console.log(e)})).catch((function(e){return console.log(e)}))}},r.a.createElement("label",null," Title "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:s,placeholder:"title",onChange:function(e){return m(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("label",null," Notes "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:f,placeholder:"notes",onChange:function(e){return h(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Submit"}))),r.a.createElement((function(e){return r.a.createElement("div",{className:"notes"},l.map((function(e,t){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"text"},r.a.createElement("h4",null,e.title),r.a.createElement("p",null,e.notes))),r.a.createElement(E,{title:e.title,notes:e.notes,_id:e._id,update:N}))})))}),null))}),h=a(141),b=a(136),v=a(140),w=a(138),N=a(137),y=a(104),x=a(56),C=a(134),S=(a(93),a(30)),j=a.n(S),O=Object(x.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},h:{textAlign:"center"}}}));function k(){var e=O(),t=r.a.useState(""),a=Object(u.a)(t,2),n=a[0],l=a[1],o=r.a.useState(""),c=Object(u.a)(o,2),i=c[0],s=c[1],m=r.a.useState(""),d=Object(u.a)(m,2),g=d[0],E=d[1];return r.a.createElement("div",null,r.a.createElement(C.a,{component:"main",maxWidth:"xs"},r.a.createElement(b.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0,onSubmit:function(e){e.preventDefault(),0!=n&&0!=i?p.a.post("/createUsers",{username:n,password:j()(i)}).then((function(e){E(e.data)})).catch((function(e){return console.log(e)})):E("Invalid. Please type in something.")}},r.a.createElement(N.a,{container:!0,spacing:2},r.a.createElement(N.a,{item:!0,xs:12},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Username",name:"email",autoComplete:"email",onChange:function(e){return l(e.target.value)}})),r.a.createElement(N.a,{item:!0,xs:12},r.a.createElement(v.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return s(e.target.value)}})),r.a.createElement(N.a,{item:!0,xs:12})),r.a.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),r.a.createElement("h2",{className:e.h},g),r.a.createElement(N.a,{container:!0,justify:"flex-end"},r.a.createElement(N.a,{item:!0},r.a.createElement(w.a,{href:"/",variant:"body2"},"Already have an account? Sign in")))))))}var W=a(139),I=a(34),D=a.n(I),A=a(20),T=a.n(A),q={withCredentials:!1},U=Object(x.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function L(e){var t=U(),a=r.a.useState(""),n=Object(u.a)(a,2),l=n[0],o=n[1],c=r.a.useState(""),i=Object(u.a)(c,2),s=i[0],d=i[1];return r.a.createElement("div",null,r.a.createElement(C.a,{component:"main",maxWidth:"xs"},r.a.createElement(b.a,null),r.a.createElement("div",{className:t.paper},r.a.createElement(W.a,{className:t.avatar},r.a.createElement(D.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:t.form,noValidate:!0,onSubmit:function(e){e.preventDefault();var t={username:l,password:j()(s)};p.a.post("/login",t,q).then((function(e){d(""),e.data?(T.a.set("username",t.username),T.a.set("password",t.password),T.a.set("isLoggedIn",!0)):(T.a.set("username",""),T.a.set("password",""),T.a.set("isLoggedIn",!1)),console.log(e)})).then((function(){m.push("/note")})).catch((function(e){return console.log(e)}))}},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return o(e.target.value)}}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return d(e.target.value)}}),r.a.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit},"Sign In"),r.a.createElement(N.a,{container:!0},r.a.createElement(N.a,{item:!0},r.a.createElement(w.a,{href:"/create",variant:"body2"},"Don't have an account? Sign Up")))))))}var P=function(){return r.a.createElement(i.c,{history:m},r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/create",component:k}),r.a.createElement((function(e){var t=e.component,a=Object(c.a)(e,["component"]);return r.a.createElement(i.b,Object.assign({},a,{render:function(e){return"true"==T.a.get("isLoggedIn")?r.a.createElement(t,e):r.a.createElement(i.a,{to:"/"})}}))}),{path:"/note",component:f}),r.a.createElement(i.b,{exact:!0,path:"/",component:L}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,t,a){},69:function(e,t,a){e.exports=a(103)},74:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.d178fed1.chunk.js.map