(this.webpackJsonpadminapp=this.webpackJsonpadminapp||[]).push([[0],{69:function(e,t,a){e.exports=a(98)},91:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(22),l=a.n(n),r=a(0),c=a.n(r),u=a(6),o=a.n(u),m=a(14),s=a(15),i=a(25),d=a(24),E=(a(91),a(63)),p=a(7),h=a(64),b=a(5),f=a(131),v=a(134),g=a(135),O=a(132),y=a(136),j=a(62),k=a.n(j),S=a(61),x=a.n(S),N=a(60),w=a.n(N),C=Object(b.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return c.a.createElement(v.a,Object.assign({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),U=Object(b.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(g.a);function z(){var e=c.a.useState(null),t=Object(h.a)(e,2),a=t[0],n=t[1];return c.a.createElement("div",null,c.a.createElement(f.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){n(e.currentTarget)}},"Open Menu"),c.a.createElement(C,{id:"customized-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:function(){n(null)}},c.a.createElement(U,null,c.a.createElement(O.a,null,c.a.createElement(w.a,{fontSize:"small"})),c.a.createElement(y.a,{primary:"Sent mail"})),c.a.createElement(U,null,c.a.createElement(O.a,null,c.a.createElement(x.a,{fontSize:"small"})),c.a.createElement(y.a,{primary:"Drafts"})),c.a.createElement(U,null,c.a.createElement(O.a,null,c.a.createElement(k.a,{fontSize:"small"})),c.a.createElement(y.a,{primary:"Inbox"}))))}var I=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t={headers:{Authorization:"Bearer "+localStorage.getItem("token")}};l.a.get("users",t).then((function(t){e.setState({user:t.data})}),(function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.user?c.a.createElement("h2",null," ",this.username," "):c.a.createElement("div",null,c.a.createElement(z,null),c.a.createElement("h2",null,"You are not logged in"))}}]),a}(c.a.Component),M=a(133),D=function(){return c.a.createElement(M.a,{maxWidth:"fixed",className:"main-page"},c.a.createElement("h2",null,"404 Not Found"))},L=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleSubmit=function(t){t.preventDefault();var a={username:e.username,password:e.password};console.log(a),l.a.post("users",a).then((function(e){localStorage.setItem("token",e.data.token)})).catch((function(e){console.log(e)}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"login-register-wrapper"},c.a.createElement("div",{className:"nav-buttons"},c.a.createElement("h2",null,"Login")),c.a.createElement("div",{className:"form-group"},c.a.createElement("form",{id:"loginform",onSubmit:this.handleSubmit},c.a.createElement("label",{htmlFor:"username"},"USERNAME"),c.a.createElement("input",{type:"text",id:"username",onChange:function(t){return e.username=t.target.value}}),c.a.createElement("label",{htmlFor:"password"},"PASSWORD"),c.a.createElement("input",{type:"password",id:"password",onChange:function(t){return e.password=t.target.value}}),c.a.createElement("button",{type:"submit",className:"submit"},"Submit"))))}}]),a}(c.a.Component),T=new(function(){function e(){Object(m.a)(this,e)}return Object(s.a)(e,[{key:"getTeamUsers",value:function(){return l.a.get("http://localhost:8080/team_users")}}]),e}()),A=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={users:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;T.getTeamUsers().then((function(t){e.setState({users:t.data})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"text-center"}," List"),c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",null,"User ID"),c.a.createElement("td",null,"Email"),c.a.createElement("td",null,"Name"),c.a.createElement("td",null,"Rank"),c.a.createElement("td",null,"Status"),c.a.createElement("td",null,"Team"))),c.a.createElement("tbody",null,this.state.users.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.userid),c.a.createElement("td",null,e.email_address),c.a.createElement("td",null,e.name),c.a.createElement("td",null,e.rank),c.a.createElement("td",null,e.status),c.a.createElement("td",null,e.team))})))))}}]),a}(c.a.Component),R=new(function(){function e(){Object(m.a)(this,e)}return Object(s.a)(e,[{key:"getUsers",value:function(){return l.a.get("http://localhost:8080/users")}}]),e}()),B=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={users:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;R.getUsers().then((function(t){e.setState({users:t.data})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"text-center"}," List"),c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",null,"User ID"),c.a.createElement("td",null,"City"),c.a.createElement("td",null,"Email"),c.a.createElement("td",null,"Name"),c.a.createElement("td",null,"Status"),c.a.createElement("td",null,"Phone Number"),c.a.createElement("td",null,"Role"),c.a.createElement("td",null,"State"),c.a.createElement("td",null,"Street"),c.a.createElement("td",null,"Username"),c.a.createElement("td",null,"Zip"))),c.a.createElement("tbody",null,this.state.users.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.id),c.a.createElement("td",null,e.city),c.a.createElement("td",null,e.email),c.a.createElement("td",null,e.fullname),c.a.createElement("td",null,e.phonenumber),c.a.createElement("td",null,e.role),c.a.createElement("td",null,e.state),c.a.createElement("td",null,e.street),c.a.createElement("td",null,e.username),c.a.createElement("td",null,e.zip))})))))}}]),a}(c.a.Component),F=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(E.a,null,c.a.createElement(p.d,null,c.a.createElement(p.b,{exact:!0,path:"/",component:L}),c.a.createElement(p.b,{exact:!0,path:"/home",component:I}),c.a.createElement(p.b,{exact:!0,path:"/TeamUsers",component:A}),c.a.createElement(p.b,{exact:!0,path:"/users",component:B}),c.a.createElement(p.b,{exact:!0,path:"/404",component:D}),c.a.createElement(p.a,{to:"/404"})))}}]),a}(r.Component);l.a.defaults.baseURL="http://localhost:3000/",o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(F,null)),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.99a84c4a.chunk.js.map