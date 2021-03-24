(this.webpackJsonpadminapp=this.webpackJsonpadminapp||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(30),l=a.n(n),r=a(0),c=a.n(r),u=a(6),m=a.n(u),o=a(14),s=a(15),i=a(24),d=a(23),E=(a(60),a(68)),p=a(7),h=new(function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"getUsers",value:function(){return l.a.get("users")}}]),e}()),b=a(69),f=a(5),v=a(136),O=a(139),g=a(140),y=a(137),j=a(141),k=a(67),S=a.n(k),x=a(66),N=a.n(x),w=a(65),C=a.n(w),U=Object(f.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return c.a.createElement(O.a,Object.assign({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),M=Object(f.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(g.a);function z(){var e=c.a.useState(null),t=Object(b.a)(e,2),a=t[0],n=t[1];return c.a.createElement("div",null,c.a.createElement(v.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){n(e.currentTarget)}},"Open Menu"),c.a.createElement(U,{id:"customized-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:function(){n(null)}},c.a.createElement(M,null,c.a.createElement(y.a,null,c.a.createElement(C.a,{fontSize:"small"})),c.a.createElement(j.a,{primary:"Sent mail"})),c.a.createElement(M,null,c.a.createElement(y.a,null,c.a.createElement(N.a,{fontSize:"small"})),c.a.createElement(j.a,{primary:"Drafts"})),c.a.createElement(M,null,c.a.createElement(y.a,null,c.a.createElement(S.a,{fontSize:"small"})),c.a.createElement(j.a,{primary:"Inbox"}))))}var D=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.getUsers("users").then((function(t){e.setState({users:t.data})}),(function(e){console.log(e)}))}},{key:"render",value:function(){return this.state.users?c.a.createElement("h2",null," ",this.username," "):c.a.createElement("div",null,c.a.createElement(z,null),c.a.createElement("h2",null,"You are not logged in"))}}]),a}(c.a.Component),I=a(138),L=function(){return c.a.createElement(I.a,{maxWidth:"fixed",className:"main-page"},c.a.createElement("h2",null,"404 Not Found"))},T=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handleSubmit=function(t){t.preventDefault();var a={username:e.username,password:e.password};h.getUsers("users/",a.username).then((function(t){localStorage.setItem("token",t.data.token),e.props.history.push("/users/",a.username)})).catch((function(e){console.log(e)}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"login-register-wrapper"},c.a.createElement("div",{className:"nav-buttons"},c.a.createElement("h2",null,"Login")),c.a.createElement("div",{className:"form-group"},c.a.createElement("form",{id:"loginform",onSubmit:this.handleSubmit},c.a.createElement("label",{htmlFor:"username"},"USERNAME"),c.a.createElement("input",{type:"text",id:"username",onChange:function(t){return e.username=t.target.value}}),c.a.createElement("label",{htmlFor:"password"},"PASSWORD"),c.a.createElement("input",{type:"password",id:"password",onChange:function(t){return e.password=t.target.value}}),c.a.createElement("button",{type:"submit",className:"submit"},"Submit"))))}}]),a}(c.a.Component),R=new(function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"getTeamUsers",value:function(){return l.a.get("team_users")}}]),e}()),A=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={users:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;R.getTeamUsers().then((function(t){e.setState({users:t.data})}))}},{key:"render",value:function(){return c.a.createElement(I.a,{maxWidth:"fixed",className:"box"},c.a.createElement("h1",{className:"text-center"}," List"),c.a.createElement("table",{className:"table table-striped mt-5 text-center"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",null,"User ID"),c.a.createElement("td",null,"Email"),c.a.createElement("td",null,"Name"),c.a.createElement("td",null,"Rank"),c.a.createElement("td",null,"Status"),c.a.createElement("td",null,"Team"))),c.a.createElement("tbody",null,this.state.users.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.userid),c.a.createElement("td",null,e.email_address),c.a.createElement("td",null,e.name),c.a.createElement("td",null,e.rank),c.a.createElement("td",null,e.status),c.a.createElement("td",null,e.team))})))))}}]),a}(c.a.Component),F=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={users:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.getUsers().then((function(t){e.setState({users:t.data})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"text-center"}," List"),c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("td",null,"User ID"),c.a.createElement("td",null,"City"),c.a.createElement("td",null,"Email"),c.a.createElement("td",null,"Name"),c.a.createElement("td",null,"Status"),c.a.createElement("td",null,"Phone Number"),c.a.createElement("td",null,"Role"),c.a.createElement("td",null,"State"),c.a.createElement("td",null,"Street"),c.a.createElement("td",null,"Username"),c.a.createElement("td",null,"Zip"))),c.a.createElement("tbody",null,this.state.users.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.id),c.a.createElement("td",null,e.city),c.a.createElement("td",null,e.email),c.a.createElement("td",null,e.fullname),c.a.createElement("td",null,e.phonenumber),c.a.createElement("td",null,e.role),c.a.createElement("td",null,e.state),c.a.createElement("td",null,e.street),c.a.createElement("td",null,e.username),c.a.createElement("td",null,e.zip))})))))}}]),a}(c.a.Component),W=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(E.a,null,c.a.createElement(p.d,null,c.a.createElement(p.b,{exact:!0,path:"/",component:T}),c.a.createElement(p.b,{exact:!0,path:"/home",component:D}),c.a.createElement(p.b,{exact:!0,path:"/TeamUsers",component:A}),c.a.createElement(p.b,{exact:!0,path:"/users",component:F}),c.a.createElement(p.b,{exact:!0,path:"/404",component:L}),c.a.createElement(p.a,{to:"/404"})))}}]),a}(r.Component);l.a.defaults.baseURL="http://localhost:3000/",m.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(W,null)),document.getElementById("root"))},60:function(e,t,a){},74:function(e,t,a){e.exports=a(102)}},[[74,1,2]]]);
//# sourceMappingURL=main.428a7d4d.chunk.js.map