(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[0],{19:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(11),s=n.n(i),c=n(2),o=n(14),l=n(3),u=n(4),d=n(6),f=n(5),j=(n(19),n(0)),b=function(t){var e=t.points,n=t.priority,a=t.notPriority;return Object(j.jsxs)("div",{className:"app-info",children:[Object(j.jsx)("h1",{children:"\u0423\u0447\u0435\u0442 \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0445 \u0442\u043e\u0447\u0435\u043a \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0422\u0435\u043b\u0435\u0442\u0430\u0439"}),Object(j.jsxs)("h2",{children:["\u041e\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0445 \u0442\u043e\u0447\u0435\u043a: ",e]}),Object(j.jsxs)("h3",{children:["\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043d\u044b\u0435: ",n]}),Object(j.jsxs)("h4",{children:["\u041d\u0435 \u043f\u0440\u043e\u0434\u0430\u044e\u0442: ",a]})]})},m=(n(21),function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={trem:""},t.inputSearch=function(e){var n=e.target.value;t.setState({trem:n}),t.props.onSearch({trem:n})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsx)("input",{onChange:this.inputSearch,type:"text",className:"form-control search-input",placeholder:"\u041d\u0430\u0439\u0442\u0438 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"})}}]),n}(a.Component)),h=m,p=n(13),O=(n(22),function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={buttons:[{name:"allPoints",lable:"\u0412\u0441\u0435 \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0435 \u0442\u043e\u0447\u043a\u0438",variant:"outline-success"},{name:"priority",lable:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043d\u044b\u0435",variant:"outline-primary"},{name:"notPriority",lable:"\u041d\u0435 \u043f\u0440\u043e\u0434\u0430\u044e\u0442",variant:"outline-warning"}]},a}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"btn-group",children:Object(j.jsx)(g,{buttons:this.state.buttons,fn:this.props})})}}]),n}(a.Component)),g=function(t){var e=t.buttons,n=t.fn;return e.map((function(t,e){return Object(j.jsx)(p.a,{variant:t.variant,name:t.name,size:"lg",type:"button",className:"button",onClick:function(t){return function(t){n.filterPoints(t.target.name)}(t)},children:t.lable},e)}))},v=O,y=(n(23),function(t){var e=t.code,n=t.address,a=t.number,r=t.onTogglePriority,i=t.like,s=t.onToggleNotPriority,c=t.fall,o=t.onDeleteItem,l=t.width,u="list-group-item d-flex justify-content-between",d="",f="\u041a\u043e\u0434  \u0442\u043e\u0447\u043a\u0438:",b="\u0410\u0434\u0440\u0435\u0441\u0441 \u0442\u043e\u0447\u043a\u0438:",m="\u041d\u043e\u043c\u0435\u0440 \u0442\u043e\u0447\u043a\u0438:",h="\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435:";return i&&(u+=" like"),c&&(u+=" fall",d+="active"),Object(j.jsxs)("li",{id:"list-group",className:u,children:[Object(j.jsxs)("div",{className:"list-group__wrapp-item",children:[l?f:"",Object(j.jsx)("span",{className:"list-group-item-label",onClick:r,children:e})]}),Object(j.jsxs)("div",{className:"list-group__wrapp-item",children:[l?b:"",Object(j.jsx)("input",{type:"text",className:"list-group-item-input",defaultValue:n})]}),Object(j.jsxs)("div",{className:"list-group__wrapp-item",children:[l?m:"",Object(j.jsx)("input",{type:"text",className:"list-group-item-input",defaultValue:a})]}),Object(j.jsxs)("div",{className:"btn-menu d-flex justify-content-center align-items-center",children:[l?h:"",Object(j.jsxs)("div",{className:"btn-menu__wrapp",children:[Object(j.jsx)("button",{type:"button",className:"btn-sad btn-sm",onClick:s,children:Object(j.jsx)("i",{className:"fas fa-frown ".concat(d)})}),Object(j.jsx)("button",{type:"button",className:"btn-trash btn-sm ",onClick:o,children:Object(j.jsx)("i",{className:"fas fa-trash"})}),Object(j.jsx)("i",{className:"far fa-smile ",onClick:r})]})]})]})}),x=(n(24),function(){return Object(j.jsx)("div",{className:"empty",children:Object(j.jsx)("span",{children:"\u0422\u0430\u043a\u0438\u0445 \u0442\u043e\u0440\u0433\u043e\u0432\u044b\u0445 \u0442\u043e\u0447\u0435\u043a \u043d\u0435\u0442 !"})})}),S=function(t){var e=t.data,n=t.onTogglePriority,r=t.onToggleNotPriority,i=t.onDeleteItem,s=t.width,o=Object(j.jsx)(x,{}),l=e.map((function(t,e){return Object(a.createElement)(y,Object(c.a)(Object(c.a)({},t),{},{key:e,onTogglePriority:function(){return n(t.id)},onToggleNotPriority:function(){return r(t.id)},onDeleteItem:function(){return i(e)},width:s}))}));return Object(j.jsx)("ul",{className:"app-list list-group",children:l.length?l:o})},N=n(7),w=(n(25),function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).setInputValue=function(t){var e=t.target.name;a.setState((function(n){var a=n.data;return{data:Object.values(a).map((function(n){return e&&(n[e]=t.target.value),n}))}}))},a.clearInput=function(){a.setState((function(t){return{data:t.data.map((function(t){return t.code="",t.address="",t.number="",t}))}}))},a.onSubmit=function(t){var e=Object(N.a)(a.state.data,1)[0],n=e.code,r=e.address,i=e.number;t.preventDefault(),n&&r&&i?(a.props.addItems(n,r,i),a.setState((function(t){return{empty:null}})),a.clearInput()):a.setState((function(t){return{empty:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u044e \u0444\u043e\u0440\u043c\u0443 !"}}))},a.state={data:[{code:"",address:"",number:""}],empty:null},a}return Object(u.a)(n,[{key:"getId",value:function(){return Math.random()}},{key:"render",value:function(){var t=this.state.empty,e=Object(N.a)(this.state.data,1)[0],n=e.code,a=e.address,r=e.number,i=Object(j.jsx)(k,{empty:this.state.empty});return Object(j.jsxs)("div",{className:"app-add-form",children:[t?i:"",Object(j.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"}),Object(j.jsxs)("form",{className:"add-form d-flex",onSubmit:this.onSubmit,children:[Object(j.jsx)("input",{type:"text",className:"form-control new-post-label",placeholder:"\u041a\u043e\u0434 \u0442\u043e\u0440\u0433\u043e\u0432\u043e\u0439 \u0442\u043e\u0447\u043a\u0438",name:"code",onChange:this.setInputValue,value:n}),Object(j.jsx)("input",{type:"text",className:"form-control new-post-label",placeholder:"\u0410\u0434\u0440\u0435\u0441\u0441",name:"address",onChange:this.setInputValue,value:a}),Object(j.jsx)("input",{type:"number",className:"form-control new-post-label",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",name:"number",onChange:this.setInputValue,value:r}),Object(j.jsx)("button",{type:"submit",className:"btn btn-outline-light",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})}}]),n}(a.Component)),k=function(t){var e=t.empty;return Object(j.jsx)("div",{children:Object(j.jsx)("span",{style:{color:"rgb(212 79 79"},children:e})})},P=w,I=(n(26),function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).setLocalStorage=function(t){console.log(t),localStorage.setItem("data",JSON.stringify(t))},t.addItems=function(e,n,a){var r={code:e,address:n,number:a,fall:!1,like:!1,id:Math.random()};t.setState((function(e){var n=e.data,a=[].concat(Object(o.a)(n),[r]);return t.setLocalStorage(a),{data:a}}))},t.onTogglePriority=function(e){t.setState((function(n){var a=n.data.map((function(t){return e===t.id?Object(c.a)(Object(c.a)({},t),{},{like:!t.like,fall:!1}):t}));return t.setLocalStorage(a),{data:a}}))},t.onToggleNotPriority=function(e){t.setState((function(n){var a=n.data.map((function(t){return e===t.id?Object(c.a)(Object(c.a)({},t),{},{fall:!t.fall,like:!1}):t}));return t.setLocalStorage(a),{data:a}}))},t.onDeleteItem=function(e){var n=t.state.data;window.confirm("are you shure delete: ".concat(n[e].code))&&t.setState((function(n){var a=n.data.filter((function(t,n){return e!==n}));return t.setLocalStorage(a),{data:a}}))},t.search=function(e){var n=e.trem;t.setState({trem:n})},t.onLoadSearch=function(t,e){return t.filter((function(t){return 0===e.length?t:t.code.indexOf(e)>-1}))},t.filterPoints=function(e){t.setState({filter:e})},t.upLoadFilter=function(t,e){switch(t){case"priority":return e.filter((function(t){return t.like}));case"notPriority":return e.filter((function(t){return t.fall}));default:return e}},t.resize=function(){var e=window.innerWidth;e<=576?t.setState({widthScreen:e}):t.setState({widthScreen:""})},t.changeWidth=function(){window.addEventListener("resize",t.resize)},t.getLocalStorage=function(e){var n=JSON.parse(localStorage.getItem("data"));window.addEventListener("DOMContentLoaded",(function(){t.setState((function(t){t.data;return{data:n||e}}))}))},t.state={data:[{code:"\u0414000168",address:"sdfsdfsfddsf",number:"9453532",fall:!1,like:!1,id:1},{code:"\u0414000669",address:"dsfdsfsdf",number:"9453532",fall:!1,like:!1,id:2},{code:"\u0414000008",address:"dsfdsfsd",number:"9453532",fall:!1,like:!1,id:3}],trem:"",filter:"allPoints",widthScreen:window.innerWidth<=576?window.innerWidth:""},t}return Object(u.a)(n,[{key:"setId",value:function(){this.setState((function(t){t.id;return{id:Math.random()}}))}},{key:"render",value:function(){var t=this.state,e=t.data,n=t.trem,a=t.filter,r=t.widthScreen;this.getLocalStorage(e),this.changeWidth();var i=e.length,s=e.filter((function(t){return t.like})).length,c=e.filter((function(t){return t.fall})).length,o=this.onLoadSearch(e,n),l=this.upLoadFilter(a,o);return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(b,{points:i,priority:s,notPriority:c}),Object(j.jsxs)("div",{className:"search-panel",children:[Object(j.jsx)(h,{onSearch:this.search}),Object(j.jsx)(v,{filterPoints:this.filterPoints})]}),Object(j.jsx)(S,{data:l,width:r,onTogglePriority:this.onTogglePriority,onToggleNotPriority:this.onToggleNotPriority,onDeleteItem:this.onDeleteItem}),Object(j.jsx)(P,{addItems:this.addItems})]})}}]),n}(a.Component));n(27);s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.75a26cac.chunk.js.map