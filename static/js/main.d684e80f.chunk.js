(this.webpackJsonpryd=this.webpackJsonpryd||[]).push([[0],{18:function(e,t,a){e.exports={Backdrop:"backdrop_Backdrop__1bngl"}},20:function(e,t,a){e.exports=a(37)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(10),o=a.n(r),i=(a(25),a(4)),c=a(5),s=a(7),d=a(6),m=(a(26),a(27),a(3)),p={CREATE_INTERN:"CREATE_INTERN",DELETE_INTERN:"DELETE_INTERN",BACKDROP_CLICKED:"BACKDROP_CLICKED",SHOW_MODAL:"SHOW_MODAL"},u=function(e){return{type:p.CREATE_INTERN,payload:e}},f=function(e){return{type:p.DELETE_INTERN,payload:e}},h=function(){return{type:p.BACKDROP_CLICKED}},E=function(){return{type:p.SHOW_MODAL}},g=p,v=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"div-nav"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{style:{marginLeft:"10px"},className:"col-sm-2 col-md-1 col-lg-1"},l.a.createElement("span",{style:{fontStyle:"bold",color:"red",fontSize:"20px"}},"Dare2"),l.a.createElement("br",null),l.a.createElement("span",{style:{fontStyle:"bold",color:"red",fontSize:"20px"}},"Compete")),l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3"}),l.a.createElement("div",{className:"col-sm-3 col-md-4 col-lg-4"},l.a.createElement("span",{style:{fontStyle:"bold",fontWeight:"700",color:"red",fontSize:"30px"}},"List of Internships")),l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3"},l.a.createElement("div",{className:"follow",onClick:function(){return e.props.modalshow()}},"Followed Internships"))))}}]),a}(n.Component),w=Object(m.b)(null,(function(e){return{modalshow:function(){return e(E())}}}))(v),b=[{id:1,name:"Microsoft",img:"../../assets/images/micro.png",role:"Sde intern",timeline:"3 june 2020 - 17 june 2020",timeleft:"2 weeks left",followClicked:"false",hashtags:"#internship #sde",deadline:17},{id:2,name:"Amazon",img:"../../assets/images/amazon.png",role:"Aws devops intern",timeline:"1 june 2020 - 15 june 2020",timeleft:"2 weeks left",followClicked:"false",hashtags:"#internship #aws #devops",deadline:15},{id:3,name:"Google",img:"../../assets/images/google.jpg",role:"Web developer intern",timeline:"27 may 2020 - 10 june 2020",timeleft:"1 week left",followClicked:"false",hashtags:"#internship #web",deadline:10},{id:4,name:"Wallmart",img:"../../assets/images/wallmart.png",role:"App developer intern",timeline:"30 may 2020 - 15 june 2020",timeleft:"1 week left",followClicked:"false",hashtags:"#internship #app",deadline:15},{id:5,name:"RYD",img:"../../assets/images/ryd.png",role:"React Js intern",timeline:"27 may 2020 - 10 june 2020",timeleft:"1 week left",followClicked:"false",hashtags:"#internship #web #react",deadline:10},{id:6,name:"Samsung",img:"../../assets/images/samsung.png",role:"Data Scientist intern",timeline:"1 june 2020 - 20 june 2020",timeleft:"2 weeks left",followClicked:"false",hashtags:"#internship #ml",deadline:20},{id:7,name:"Arogya Setu",img:"../../assets/images/arg.jpg",role:"App developer intern",timeline:"5 june 2020 - 30 june 2020",timeleft:"3 weeks left",followClicked:"false",hashtags:"#internship #app #native",deadline:30}],y=(a(33),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handler=function(t){!0===e.props.fdata[t]?(e.props.fdata[t]=!1,e.props.deleteIntern(t)):(e.props.fdata[t]=!0,e.props.createIntern(t))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"row eachList"},l.a.createElement("div",{className:"col-sm-2 col-md-1 col-lg-1",style:{borderRight:"1px solid #D3D3D3"}},l.a.createElement("div",{style:{color:"red",fontSize:"18px",marginTop:"30px"}},this.props.data.name)),l.a.createElement("div",{className:"col-sm-7 col-md-9 col-lg-9",style:{borderRight:"1px solid #D3D3D3"}},l.a.createElement("div",{className:"col-sm-9 col-lg-9 col-md-9"},l.a.createElement("div",null,l.a.createElement("span",{style:{fontWeight:"800",fontSize:"20px"}},this.props.data.role)),l.a.createElement("div",{style:{color:"#808080"}},this.props.data.name),l.a.createElement("div",{style:{marginTop:"10px"}},l.a.createElement("span",null,this.props.data.timeline))),l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3"},l.a.createElement("div",{style:{marginTop:"50px"}},this.props.data.hashtags))),l.a.createElement("div",{className:"col-sm-3 col-md-2 col-lg-2"},l.a.createElement("div",{className:"flew",onClick:function(){e.handler(e.props.data.id)}},!0===this.props.fdata[this.props.data.id]?"Unfollow":"Follow"),l.a.createElement("div",{style:{marginTop:"10px",marginLeft:"30px",color:"green"}},this.props.data.timeleft)))}}]),a}(n.Component)),j=Object(m.b)((function(e){return{interns:e.interns,fdata:e.fdata,modalShow:e.modalShow}}),(function(e){return{createIntern:function(t){return e(u(t))},deleteIntern:function(t){return e(f(t))}}}))(y),O=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={followedIn:[]},e}return Object(c.a)(a,[{key:"render",value:function(){var e=b.map((function(e){return l.a.createElement(j,{data:e})}));return l.a.createElement("div",null,e)}}]),a}(n.Component),N=a(17),k=(a(34),a(35),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).handler=function(t){!0===e.props.fdata[t]?(e.props.fdata[t]=!1,e.props.deleteIntern(t)):(e.props.fdata[t]=!0,e.props.createIntern(t))},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"row meachList"},l.a.createElement("div",{className:"col-sm-8 col-md-9 col-lg-9",style:{borderRight:"1px solid #D3D3D3"}},l.a.createElement("div",{className:"col-sm-9 col-lg-9 col-md-9"},l.a.createElement("div",null,l.a.createElement("span",{style:{fontWeight:"800",fontSize:"20px"}},this.props.data.role)),l.a.createElement("div",{style:{color:"#808080"}},this.props.data.name)),l.a.createElement("div",{className:"col-sm-3 col-md-3 col-lg-3"},l.a.createElement("div",{style:{marginTop:"0px"}},this.props.data.hashtags))),l.a.createElement("div",{className:"col-sm-4 col-md-3 col-lg-3"},l.a.createElement("div",{className:"mflew",onClick:function(){e.handler(e.props.data.id)}},!0===this.props.fdata[this.props.data.id]?"Unfollow":"Follow"),l.a.createElement("div",{style:{marginTop:"0px",marginLeft:"15px",color:"green"}},this.props.data.timeleft)))}}]),a}(n.Component)),S=Object(m.b)((function(e){return{interns:e.interns,fdata:e.fdata,modalShow:e.modalShow}}),(function(e){return{createIntern:function(t){return e(u(t))},deleteIntern:function(t){return e(f(t))}}}))(k),C=a(18),D=a.n(C),I=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).backdropclicked=function(){e.props.closeback()},e}return Object(c.a)(a,[{key:"render",value:function(){return this.props.modalShow&&this.props.interns.length?l.a.createElement("div",{className:D.a.Backdrop,onClick:this.backdropclicked}):null}}]),a}(n.Component),x=Object(m.b)((function(e){return{modalShow:e.modalShow,interns:e.interns}}),(function(e){return{closeback:function(){return e(h())}}}))(I),T=Object(m.b)((function(e){return{interns:e.interns,fdata:e.fdata,modalShow:e.modalShow}}),(function(e){return{createIntern:function(t){return e(u(t))},deleteIntern:function(t){return e(f(t))}}}))((function(e){return l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement("div",{className:"Modal",style:{transform:e.show&&e.interns.length?"translateY(0)":"translateY(-100vh)",opacity:e.show&&e.interns.length?1:0}},b.map((function(t){var a="";return!0===e.fdata[t.id]&&(a=l.a.createElement(S,{data:t})),a}))))})),A=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={name:"React"},e}return Object(c.a)(a,[{key:"render",value:function(){var e={num:[4,7],rps:.1,radius:[5,40],life:[1.5,3],v:[2,3],tha:[-40,40],alpha:[.6,0],scale:[.1,.4],position:"all",color:["random","#ff0000"],cross:"dead",random:15};return Math.random()>.85&&(e=Object.assign(e,{onParticleUpdate:function(e,t){e.beginPath(),e.rect(t.p.x,t.p.y,2*t.radius,2*t.radius),e.fillStyle=t.color,e.fill(),e.closePath()}})),l.a.createElement("div",{style:{padding:"0px 0px 0px 0px",height:"100vh",overflowX:"hidden"},className:"container-fluid"},l.a.createElement(w,null),l.a.createElement("div",{className:"container"},l.a.createElement(O,null)),l.a.createElement(T,{show:this.props.modalShow}),l.a.createElement(N.a,{type:"custom",config:e,bg:!0}))}}]),a}(n.Component),R=Object(m.b)((function(e){return{modalShow:e.modalShow}}),null)(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));for(var _=a(9),L=a(19),z=a.n(L),B=a(8),W=a.n(B),K=[],M=0;M<4;M++)K[M]=!1;var P={interns:[],fdata:K,modalShow:!1},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.CREATE_INTERN:console.log(t);var a=t.payload,n=W.a.cloneDeep(e);return n.interns.push(a),n.fdata[t.payload]=!0,n.modalShow=!0,console.log(n),n;case g.DELETE_INTERN:var l=W.a.cloneDeep(e),r=W.a.findIndex(t.payload);return l.interns.splice(r,1),0===l.interns.size&&(l.modalShow=!1),l.fdata[t.payload]=!1,l;case g.BACKDROP_CLICKED:var o=W.a.cloneDeep(e);return o.modalShow=!1,o;case g.SHOW_MODAL:var i=W.a.cloneDeep(e);return i.modalShow=!0,i;default:return e}};var U,F=(U=window.REDUX_INITIAL_DATA,Object(_.c)(H,U,Object(_.a)(z.a)));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m.a,{store:F},l.a.createElement(R,null))),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d684e80f.chunk.js.map