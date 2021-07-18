(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={list:"Contacts_list__otVY-"}},17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),i=n.n(r),s=n(11),l=n(2),o=n(3),u=n(5),b=n(4),h=n(8),j=n(19),d=n(6),m=n.n(d),O=n(0),p=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",id:""},t.uniqId=Object(j.a)(),t.handleClick=function(e){var n,a=e.target,c=a.value,r=a.name,i=a.id;t.setState((n={},Object(h.a)(n,r,c),Object(h.a)(n,"id",i),n))},t.handleSubmit=function(e){e.preventDefault(),t.props.submitMethod(t.state),t.resetState()},t.resetState=function(){t.setState({name:"",number:"",id:""})},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{className:m.a.title,children:"Name"}),Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("label",{className:m.a.label,htmlFor:this.uniqId,children:Object(O.jsx)("input",{className:m.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleClick,id:Object(j.a)()})}),Object(O.jsx)("h2",{children:"Number"}),Object(O.jsx)("label",{children:Object(O.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleClick,value:this.state.number,id:Object(j.a)()})}),Object(O.jsx)("button",{type:"submit",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})]})}}]),n}(a.Component),f=n(10),x=n.n(f),v=function(t){var e=t.contacts;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)("ul",{children:e.map((function(t){return Object(O.jsxs)("li",{className:x.a.list,children:[t.name,": ",t.number]},t.id)}))})]})},g=function(t){var e=t.value,n=t.onChange;return Object(O.jsxs)("label",{children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438 ",Object(O.jsx)("input",{type:"text",value:e,onChange:n})]})},C=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.getSubmitData=function(e){t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[e])}}))},t.changeFilterValue=function(e){t.setState({filter:e.target.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.getVisibleContacts();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"PhoneBook"}),Object(O.jsx)(p,{submitMethod:this.getSubmitData}),Object(O.jsx)(v,{contacts:t}),Object(O.jsx)(g,{value:this.state.filter,onChange:this.changeFilterValue})]})}}]),n}(a.Component);i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={title:"Form_title__1ii-C",input:"Form_input__2o61r"}}},[[17,1,2]]]);
//# sourceMappingURL=main.c6183955.chunk.js.map