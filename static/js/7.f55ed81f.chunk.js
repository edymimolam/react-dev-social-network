(this["webpackJsonpsocial-react"]=this["webpackJsonpsocial-react"]||[]).push([[7],{235:function(e,t,n){e.exports={container:"Login_container__1Oz4Y",form:"Login_form__2mvFD",checkbox:"Login_checkbox__3UFrU"}},298:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(235),c=n.n(o),i=n(111),l=n(112),u=n(6);var m,s,p=function(e){var t=e.input,n=e.meta,a=n.touched,o=n.error,i=n.warning,l=function(e,t){if(null==e)return{};var n,a,r=Object(u.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["input","meta"]);return r.a.createElement("div",{styleName:c.a.inputDiv},r.a.createElement("input",Object.assign({},t,l)),a&&(o&&r.a.createElement("span",null,o)||i&&r.a.createElement("span",null,i)))},b=function(e){return e||"number"===typeof e?void 0:"Required"},d=(m=15,s=2,function(e){return e&&e.length<s?"Must be ".concat(s," characters or more"):void 0}),f=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0},h=Object(l.a)({form:"login"})((function(e){var t=e.error,n=e.handleSubmit,a=e.submitting;return r.a.createElement("form",{onSubmit:n,className:c.a.form},r.a.createElement(i.a,{name:"email",component:p,type:"text",placeholder:"Email",validate:[b,f]}),r.a.createElement(i.a,{name:"password",component:p,type:"password",placeholder:"Password",validate:[b,d]}),r.a.createElement(i.a,{name:"rememberMe",component:p,type:"checkbox",className:c.a.checkbox}),t&&r.a.createElement("div",null,r.a.createElement("strong",null,t)),r.a.createElement("button",{type:"submit",disabled:a},"Submit"))})),v=n(21),E=n(27),g=n(24);t.default=Object(v.b)((function(e){return{isAuth:e.auth.isAuthorized}}),(function(e){return{logIn:function(t,n,a){e(Object(E.c)(t,n,a))}}}))((function(e){var t=e.isAuth,n=e.logIn;return t?r.a.createElement(g.a,{to:"/profile"}):r.a.createElement("div",{className:c.a.container},r.a.createElement("h1",null,"Login"),r.a.createElement(h,{onSubmit:function(e){var t=e.email,a=e.password,r=e.rememberMe;return n(t,a,r)}}))}))}}]);
//# sourceMappingURL=7.f55ed81f.chunk.js.map