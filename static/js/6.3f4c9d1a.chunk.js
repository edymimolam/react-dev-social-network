(this["webpackJsonpsocial-react"]=this["webpackJsonpsocial-react"]||[]).push([[6],{230:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},297:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(230),r=t.n(i),c=t(18),o=function(e){var a=e.id,t=e.name;return n.a.createElement("div",{className:r.a.dialog+" "+r.a.active},n.a.createElement(c.b,{to:"/dialogs/".concat(a)},t))},m=function(e){var a=e.message;return n.a.createElement("div",{className:r.a.dialog},a)},l=t(111),u=t(112),g=Object(u.a)({form:"newMessage"})((function(e){var a=e.handleSubmit;return n.a.createElement("form",{onSubmit:a},n.a.createElement(l.a,{name:"newMessageText",component:"textarea"}),n.a.createElement("button",{type:"submit"},"Push me"))})),d=function(e){var a=e.dialogsPage,t=a.dialogs,s=a.messages,i=e.addNewMessage;return n.a.createElement("div",{className:r.a.dialogs},n.a.createElement("div",{className:r.a.dialogsItems},t.map((function(e){return n.a.createElement(o,{name:e.name,id:e.id,key:e.id})}))),n.a.createElement("div",{className:r.a.messages},s.map((function(e){return n.a.createElement(m,{message:e.message,key:e.id})}))),n.a.createElement(g,{onSubmit:function(e){var a=e.newMessageText;return i(a)}}))},b=t(76),f=t(21),p=t(57),h=t(58),v=t(60),_=t(59),E=t(61),j=t(24),O=function(e){return{isAuth:e.auth.isAuthorized}},w=function(e){var a=function(a){function t(){return Object(p.a)(this,t),Object(v.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(E.a)(t,a),Object(h.a)(t,[{key:"render",value:function(){return this.props.isAuth?n.a.createElement(e,this.props):n.a.createElement(j.a,{to:"/login"})}}]),t}(n.a.Component);return Object(f.b)(O)(a)},N=t(19);a.default=Object(N.d)(Object(f.b)((function(e){return{dialogsPage:e.dialogsPage}}),{addNewMessage:b.a}),w)(d)}}]);
//# sourceMappingURL=6.3f4c9d1a.chunk.js.map