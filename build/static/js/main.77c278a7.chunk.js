(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t,n){e.exports=n(183)},144:function(e,t){},183:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(8),c=n.n(o),l=n(43),i=n(28),s=n(25),m=n(38),u=n(91),g=n.n(u),d=n(92),f=n.n(d),p=n(218),E=n(210),h=n(213),b=n(214),y=n(215),v=n(216),j=n(217),x=n(93);var O=Object(j.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),C=function(e){var t=e.room,n=e.logout,a=O();return r.a.createElement("div",{className:a.root},r.a.createElement(E.a,{position:"static"},r.a.createElement(h.a,null,r.a.createElement(b.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(x.a,null)),r.a.createElement(y.a,{variant:"h6",className:a.title},t),r.a.createElement(v.a,{onClick:n,color:"inherit"},"close"))))},k=n(222),T=n(94);var S=Object(j.a)((function(e){return{inputform:{display:"flex",justifyContent:"center"},sendbtn:{padding:"15px",display:"inline-block"},input:{}}})),N=function(e){var t=e.message,n=e.setMessage,a=e.sendMessage,o=S();return r.a.createElement("div",null,r.a.createElement(p.a,{container:!0,style:{textAlign:"center",position:"fixed",marginLeft:-100,bottom:-20}},r.a.createElement("form",{className:o.inputform},r.a.createElement(k.a,{type:"text",placeholder:"say something...",value:t,className:o.input,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?a(e):null}}),r.a.createElement(v.a,{className:o.sendbtn,onClick:function(e){return a(e)}},r.a.createElement(T.a,{style:{fontSize:25,color:"blue"}})))))},B=n(95),R=n.n(B);var w=Object(j.a)((function(e){return{messageContainerIn:{display:"flex",justifyContent:"flex-end",marginTop:10,padding:"0 5%"},messageContainerOut:{display:"flex",justifyContent:"flex-start",marginTop:10,padding:"0 5%"},sentTextIn:{display:"flex",paddingRight:10},sentTextout:{display:"flex",paddingLeft:10},messageBoxIn:{borderBottomRightRadius:20,borderTopRightRadius:20,borderTopLeftRadius:20,maxWidth:"80%",display:"inline-block",padding:"5px 10px",backgroundColor:"blue"},messageBoxOut:{borderBottomRightRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,maxWidth:"80%",display:"inline-block",padding:"5px 10px",backgroundColor:"orange"},messageText:{letterSpacing:0,float:"left",wordWrap:"break-word",fontSize:14}}})),I=function(e){var t=e.message,n=t.user,a=t.text,o=e.name,c=w(),l=!1,i=o.trim().toLowerCase();return n===i&&(l=!0),l?r.a.createElement("div",{className:c.messageContainerIn},r.a.createElement("p",{className:c.sentTextIn},i),r.a.createElement("div",{className:c.messageBoxIn},r.a.createElement("p",{className:c.messageText},a))):r.a.createElement("div",{className:c.messageContainerOut},r.a.createElement("div",{className:c.messageBoxOut},r.a.createElement("p",{className:c.messageText},a)),r.a.createElement("p",{className:c.sentTextout},n))};var D,L=function(e){var t=e.messages,n=e.name;return r.a.createElement(R.a,null,t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(I,{message:e,name:n}))})))},M=n(33),W=n(19),A=n(48),z=n(49),J=n(50),q=function(e){function t(e){var n;return Object(M.a)(this,t),(n=Object(A.a)(this,Object(z.a)(t).call(this,e))).state={hasError:!1},n}return Object(J.a)(t,e),Object(W.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",null,r.a.createElement("h1",null,"Something went wrong")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(a.Component),F=function(e,t){var n=e.location,o=Object(a.useState)(""),c=Object(m.a)(o,2),l=c[0],u=c[1],d=Object(a.useState)(""),E=Object(m.a)(d,2),h=E[0],b=E[1],y=Object(a.useState)([]),v=Object(m.a)(y,2),j=v[0],x=v[1],O=Object(a.useState)(""),k=Object(m.a)(O,2),T=k[0],S=k[1],B="localhost:5000";Object(a.useEffect)((function(){var e=g.a.parse(n.search),t=e.name,a=e.room;return console.log(t),D=f()(B),u(t),b(a),D.emit("join",{name:t,room:a}),function(){D.emit("disconnect"),D.off()}}),[B,n.search]),Object(a.useEffect)((function(){D.on("message",(function(e){x([].concat(Object(s.a)(j),[e]))}))}),[j]);return r.a.createElement(q,null,r.a.createElement(p.a,{container:!0},r.a.createElement(C,{logout:function(e){localStorage.getItem("token"),localStorage.clear(),window.location.replace("/")},room:h}),r.a.createElement(p.a,{container:!0,style:{justifyContent:"center"}},r.a.createElement(p.a,{container:!0,style:{justifyContent:"center"}},localStorage.getItem("token")?r.a.createElement(L,{messages:j,name:l}):r.a.createElement(i.a,{to:"/"})),r.a.createElement(p.a,{container:!0,style:{justifyContent:"center"}},r.a.createElement(N,{message:T,setMessage:S,sendMessage:function(e){e.preventDefault(),T&&D.emit("sendMessage",T,(function(){return S("")}))}})))))},G=n(17),K=n(224),P=n(221),Q="orange",H=[{room:"Developers room"},{room:"Designers room"},{room:"DevOps room"},{room:"QA room"}],U=function(e){function t(e){var n;return Object(M.a)(this,t),(n=Object(A.a)(this,Object(z.a)(t).call(this,e))).onchange=function(e){n.setState(Object(G.a)({},e.target.name,e.target.value))},n.login=function(e){e.preventDefault(),n.validate()&&(localStorage.setItem("token",{name:n.state.name,room:n.state.room}),n.props.history.push("/chat?name=".concat(n.state.name,"&room=").concat(n.state.room)),console.log("okay"))},n.validate=function(){return!(!n.state.name||!n.state.room)},n.state={name:"",room:""},n}return Object(J.a)(t,e),Object(W.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(q,null,r.a.createElement(p.a,{container:!0,style:V.innerContainer},r.a.createElement("form",{style:{marginTop:150},onSubmit:this.login},r.a.createElement(y.a,{style:V.introText},"The developer joke room"),r.a.createElement(p.a,{container:!0,style:{justifyContent:"center",marginTop:15,marginBottom:15}},r.a.createElement(k.a,{placeholder:"enter a name",variant:"outlined",color:"primary",type:"text",name:"name",fullWidth:!0,onChange:this.onchange})),r.a.createElement(p.a,{container:!0,style:{justifyContent:"center",marginTop:15,marginBottom:15}},r.a.createElement(K.a,{style:{color:Q},htmlFor:"age-native-required"},"select a room to join")),r.a.createElement(p.a,{container:!0,style:{justifyContent:"center",marginTop:15,marginBottom:15}},r.a.createElement(P.a,{native:!0,variant:"outlined",name:"room",fullWidth:!0,onChange:this.onchange,required:!0},r.a.createElement("option",{value:""}),H.map((function(e){return r.a.createElement("option",{key:e.room,value:e.room},e.room)}))),r.a.createElement(p.a,{container:!0,style:{justifyContent:"center",marginTop:15}},r.a.createElement(v.a,{style:{textAlign:"center"},variant:"outlined",type:"submit"},"Join In")))))))}}]),t}(a.Component),V={innerContainer:{justifyContent:"center"},introText:{textAlign:"center",fontSize:24,marginTop:15,color:Q}},X=U;var Y=function(){return r.a.createElement(l.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,render:function(e){return r.a.createElement(X,e)}}),r.a.createElement(i.b,{path:"/chat",exact:!0,render:function(e){return r.a.createElement(F,e)}})))};c.a.render(r.a.createElement(Y,null),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.77c278a7.chunk.js.map