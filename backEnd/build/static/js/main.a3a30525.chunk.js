(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{92:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(19),c=n.n(a),s=n(6),i=n.n(s),o=n(7),u=n(9),l=n(11),j=n(95),d=n(1),b=function(){var e=Object(l.c)((function(e){return e.blogs}));return e.sort((function(e,t){return e.likes>t.likes?-1:1})),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"\u4ee5\u4e0b\u535a\u5ba2\u6309\u7167\u70b9\u8d5e\u6b21\u6570\u4ece\u9ad8\u5230\u4f4e\u6392\u5e8f"}),Object(d.jsx)(j.a,{children:Object(d.jsx)("tbody",{children:e.map((function(e){return Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsx)("a",{href:"/blogs/".concat(e.id),children:e.title})})},e.id)}))})})]})},p=n(16),h=n.n(p),O="/api/blogs",f=null,x=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:f}},e.next=3,h.a.post(O,t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:f}},e.next=3,h.a.patch("".concat(O,"/").concat(t.id),{likes:t.likes},n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:f}},e.next=3,h.a.delete("".concat(O,"/").concat(t.id),n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(i.a.mark((function e(t,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("".concat(O,"/").concat(n,"/comments"),{comment:t});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w={getAll:function(){return h.a.get(O).then((function(e){return e.data}))},create:x,setToken:function(e){f="bearer ".concat(e)},updateBlog:v,removeBlog:g,makeComment:m},y=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k={login:y},S=function(e){return{type:"ADD_USER",data:{user:e}}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"ADD_USER"===t.type?t.data.user:e},L=0,I=function(e,t){return function(){var n=Object(o.a)(i.a.mark((function n(r){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:clearTimeout(L),L=setTimeout((function(){return r({type:"SHOW_NOTIFICATION",data:{notification:null}})}),3e3),r({type:"SHOW_NOTIFICATION",data:{message:e,className:t}});case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"SHOW_NOTIFICATION"===t.type?t.data:e},A=n(97),B=n(96),D=function(){var e=Object(l.b)(),t=Object(r.useState)(""),n=Object(u.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),j=Object(u.a)(s,2),b=j[0],p=j[1],h=function(){var t=Object(o.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,k.login({username:a,password:b});case 4:r=t.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(r)),w.setToken(r.token),e(S(r)),c(""),p(""),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),console.log("aaa"),e(I("wrong username or password","danger"));case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(A.a,{onSubmit:h,children:[Object(d.jsx)(A.a.Group,{children:Object(d.jsx)(A.a.Control,{placeholder:"username",id:"loginusername",type:"text",value:a,name:"usename",onChange:function(e){var t=e.target;c(t.value)}})}),Object(d.jsx)(A.a.Group,{children:Object(d.jsx)(A.a.Control,{placeholder:"password",id:"loginpassword",type:"password",value:b,name:"password",onChange:function(e){var t=e.target;p(t.value)}})}),Object(d.jsx)(B.a,{id:"loginbutton",type:"submit",children:"login"})]})})},N=function(e){var t=e.createBlog,n=Object(r.useState)(""),a=Object(u.a)(n,2),c=a[0],s=a[1],i=Object(r.useState)(""),o=Object(u.a)(i,2),l=o[0],j=o[1],b=Object(r.useState)(""),p=Object(u.a)(b,2),h=p[0],O=p[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:c,author:l,url:h},c),s(""),j(""),O("")},children:[Object(d.jsxs)("div",{children:["title:",Object(d.jsx)("input",{id:"title",value:c,onChange:function(e){var t=e.target;return s(t.value)}})]}),Object(d.jsxs)("div",{children:["author:",Object(d.jsx)("input",{id:"author",value:l,onChange:function(e){var t=e.target;return j(t.value)}})]}),Object(d.jsxs)("div",{children:["url:",Object(d.jsx)("input",{id:"url",value:h,onChange:function(e){var t=e.target;return O(t.value)}})]}),Object(d.jsx)("button",{id:"create",children:"create"})]})})},T=n(100),_=function(){var e=Object(l.c)((function(e){return e.notification})),t=e.message,n=e.className;return null===t?null:Object(d.jsx)("div",{children:t&&Object(d.jsx)(T.a,{variant:n,children:t})})},G=function(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),a=n[0],c=n[1],s={display:a?"none":""},i={display:a?"":"none"},o=function(){c(!a)};return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{style:s,children:Object(d.jsx)("button",{onClick:o,children:e.buttonLabel})}),Object(d.jsxs)("div",{style:i,children:[e.children,Object(d.jsx)("button",{onClick:o,children:"cancel"})]})]})},R=function(e){var t=e.users;return Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsx)("h2",{children:"User Information Statistics"}),t.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("a",{href:"/users/".concat(e.id),children:e.name})," has ",e.blogs.length," blogs ,you can click the name to see details"]})}))]})},U=function(e){var t=e.user;return t?Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:t.name}),Object(d.jsx)("h3",{children:"Added blogs"}),t.blogs.map((function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("a",{href:"/blogs/".concat(e.id),children:e.title})},e.id)}))]}):null},M=n(8),F=n(44),J=n(58),K=function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.removeBlog({id:e});case 2:n({type:"DELETE_BLOG",data:{id:e}});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INI_BLOG":return t.data.blogs;case"ADD_BLOG":return[].concat(Object(J.a)(e),[t.data.blog]);case"LIKE_BLOG":return e.map((function(e){return e.id===t.data.id?Object(F.a)(Object(F.a)({},e),{},{likes:t.data.likes}):e}));case"DELETE_BLOG":return e.filter((function(e){return e.id!==t.data.id}));case"MAKE_COMMENT":return e.map((function(e){return e.id===t.data.blog.id?t.data.blog:e}));default:return e}},z=function(e){var t=e.handleLikes,n=e.handleRemoving,a=Object(l.b)(),c=Object(l.c)((function(e){return e.blogs})),s=Object(M.f)().id,j=c.find((function(e){return e.id===s})),b=Object(r.useState)(""),p=Object(u.a)(b,2),h=p[0],O=p[1],f=function(e,t){e.preventDefault(),a(function(e,t){return function(){var n=Object(o.a)(i.a.mark((function n(r){var a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.makeComment(e,t);case 2:a=n.sent,r({type:"MAKE_COMMENT",data:{blog:a}});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(h,t)),O("")};return j?(console.log(j.comments),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:j.title}),Object(d.jsxs)("div",{children:[Object(d.jsx)("a",{href:j.url,children:j.url}),Object(d.jsxs)("p",{children:[j.likes,Object(d.jsx)("button",{onClick:function(){return t(j.id,j.likes)},children:"like"})]}),Object(d.jsx)("p",{children:"added by ".concat(j.author)}),Object(d.jsx)("button",{onClick:function(){return n(j)},children:"delete this blog"}),Object(d.jsx)("div",{children:"(only user can do this,If you're any other user, it doesn't matter how many times you click)"})]}),Object(d.jsx)("h3",{children:"comments"}),Object(d.jsxs)("form",{onSubmit:function(e){return f(e,j.id)},children:[Object(d.jsx)("input",{type:"text",value:h,onChange:function(e){return O(e.target.value)}})," ",Object(d.jsx)("button",{children:"add comments"})]}),Object(d.jsx)("ul",{children:j.comments.map((function(e){return Object(d.jsx)("li",{children:e})}))})]})):null},H="/api/users",q=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(H);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post(H,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q={getALL:q,register:P},V=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(u.a)(c,2),l=s[0],j=s[1],b=Object(r.useState)(""),p=Object(u.a)(b,2),h=p[0],O=p[1],f=function(){var e=Object(o.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,Q.register({username:n,name:l,password:h});case 4:r=e.sent,console.log(r),a(""),j(""),O(""),alert("\u4f60\u5df2\u7ecf\u6ce8\u518c\u6210\u529f"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),alert("username\u5df2\u7ecf\u5b58\u5728\uff0c\u8bf7\u6362\u4e00\u4e2a");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{children:Object(d.jsxs)(A.a,{onSubmit:f,children:[Object(d.jsx)(A.a.Group,{children:Object(d.jsx)(A.a.Control,{placeholder:"username \uff08\u6b64\u680f\u7684\u503c\u5728\u6570\u636e\u5e93\u4e2d\u552f\u4e00\uff0c\u5982\u679c\u4e0d\u884c\u591a\u8bd5\u51e0\u4e2a\uff09",type:"text",value:n,onChange:function(e){var t=e.target;a(t.value)}})}),Object(d.jsx)(A.a.Group,{children:Object(d.jsx)(A.a.Control,{placeholder:"name",type:"text",value:l,onChange:function(e){var t=e.target;j(t.value)}})}),Object(d.jsx)(A.a.Group,{children:Object(d.jsx)(A.a.Control,{placeholder:"password",type:"password",value:h,onChange:function(e){var t=e.target;O(t.value)}})}),Object(d.jsx)(B.a,{type:"submit",children:"registered"})]})})},X=n(21),Y=function(e){return{type:"ADD_USERS",data:{users:e}}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"ADD_USERS"===t.type?t.data.users:e},$=n(99),ee=n(98),te=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.loggedUser})),n=Object(r.useState)([]),a=Object(u.a)(n,2),c=a[0],s=a[1],j=Object(M.g)("/users/:id");console.log("a"+j);var p=j?c.find((function(e){return e.id===j.params.id})):null;Object(r.useEffect)((function(){e(function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getAll();case 2:n=e.sent,t({type:"INI_BLOG",data:{blogs:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(r.useEffect)((function(){var t=window.localStorage.getItem("loggedBlogappUser");if(t){var n=JSON.parse(t);e(S(n)),w.setToken(n.token)}}),[e]),Object(r.useEffect)((function(){Object(o.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.getALL();case 2:n=t.sent,e(Y(n)),s(n);case 5:case"end":return t.stop()}}),t)})))()}),[e]);var h=function(n,r){e(function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.create(e);case 2:r=t.sent,n({type:"ADD_BLOG",data:{blog:r}});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(n)),e(I("a new blog ".concat(r," ! by ").concat(t.username),"success"))},O=function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(window.confirm("Remove ".concat(n.title," by ").concat(n.author)))try{e(K(n.id))}catch(r){e(I("error","danger"))}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f={padding:10};return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)($.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(d.jsx)($.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsx)($.a.Collapse,{id:"responsive-navbar-nav",children:Object(d.jsxs)(ee.a,{className:"mr-auto",children:[Object(d.jsx)(ee.a.Link,{href:"#",as:"span",children:Object(d.jsx)(X.b,{style:f,to:"/blogs",children:"blogs"})}),Object(d.jsx)(ee.a.Link,{href:"#",as:"span",children:Object(d.jsx)(X.b,{style:f,to:"/users",children:"users"})}),Object(d.jsx)(ee.a.Link,{href:"#",as:"span",children:t?Object(d.jsxs)("em",{children:[t.username," logged in"]}):Object(d.jsxs)("em",{children:[Object(d.jsx)(X.b,{style:f,to:"/login",children:"login"}),"  ",Object(d.jsx)(X.b,{style:f,to:"/Register",children:"Register"})]})})]})})]}),t&&Object(d.jsxs)("span",{children:[" ",Object(d.jsx)("button",{onClick:function(){window.localStorage.getItem("loggedBlogappUser")&&(window.localStorage.removeItem("loggedBlogappUser"),e(S(null)))},className:"login-out",children:"logout"})," "]})]}),Object(d.jsx)(_,{}),null===t?Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"log in to application"}),Object(d.jsxs)(M.c,{children:[Object(d.jsx)(M.a,{path:"/Register",children:Object(d.jsx)(V,{})}),Object(d.jsx)(M.a,{path:"/",children:Object(d.jsx)(D,{})})]})]}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"blogs \uff08\u6b64\u535a\u5ba2\u4ec5\u4f9b\u7528\u6237\u4e0a\u4f20\u7528\u6237\u8ba4\u4e3a\u6709\u4ef7\u503c\u7684\u6587\u7ae0\u4e0e\u8d44\u6599\uff09"}),Object(d.jsxs)(M.c,{children:[Object(d.jsx)(M.a,{path:"/users/:id",children:Object(d.jsx)(U,{user:p})}),Object(d.jsx)(M.a,{path:"/users",children:Object(d.jsx)(R,{users:c})}),Object(d.jsx)(M.a,{path:"/blogs/:id",children:Object(d.jsx)(z,{handleLikes:function(t,n){e(function(e,t){return function(){var n=Object(o.a)(i.a.mark((function n(r){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.updateBlog({id:e,likes:t});case 2:r({type:"LIKE_BLOG",data:{id:e,likes:t}});case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,n+1))},handleRemoving:O})}),Object(d.jsxs)(M.a,{path:"/",children:[Object(d.jsx)(G,{buttonLabel:"create new blog",children:Object(d.jsx)(N,{createBlog:h})}),Object(d.jsx)(b,{})]})]})]})]})},ne=(n(92),n(56)),re=n(57),ae=n(30),ce=Object(ae.combineReducers)({blogs:W,loggedUser:C,users:Z,notification:E}),se=Object(ae.createStore)(ce,Object(re.composeWithDevTools)(Object(ae.applyMiddleware)(ne.a)));c.a.render(Object(d.jsx)(X.a,{children:Object(d.jsx)(l.a,{store:se,children:Object(d.jsx)(te,{})})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.a3a30525.chunk.js.map