(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{186:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));const a=(t,e,s)=>{if(t)if(t.startsWith("/"))s.path!==t&&e.push(t);else if(t.startsWith("http://")||t.startsWith("https://")||t.startsWith("mailto:"))window&&window.open(t);else{const a=s.path.slice(0,s.path.lastIndexOf("/"));e.push(`${a}/${encodeURI(t)}`)}}},190:function(t,e,s){"use strict";s.d(e,"a",(function(){return a}));const a=t=>`${t.charAt(0).toUpperCase()}${t.slice(1)}`,n={"en-US":"/en/","zh-CN":"/zh/","zh-TW":"/zh-tw/","de-AT":"/de/","vi-VN":"/vi/","ru-RU":"/ru/","uk-UA":"/uk/","pt-BR":"/br/"},i=Object.keys(n);Object.fromEntries(i.map(t=>[n[t],t]))},280:function(t,e,s){},328:function(t,e,s){"use strict";s(280)},346:function(t,e,s){"use strict";s.r(e);var a=s(0),n=s(190),i=s(186),c=a.a.extend({name:"CategoryList",methods:{capitalize:n.a,clickCategory(t){Object(i.a)(t,this.$router,this.$route)}}}),r=(s(328),s(1)),o=Object(r.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",{staticClass:"category-list-wrapper"},t._l(t.$category.list,(function(s,a){return e("li",{key:s.path,staticClass:"category",class:{active:s.path===t.$route.path,["category"+a%9]:!0},on:{click:function(e){return t.clickCategory(s.path)}}},[t._v("\n    "+t._s(t.capitalize(s.name))+"\n    "),e("span",{staticClass:"category-num"},[t._v(t._s(s.pages.length))])])})),0)}),[],!1,null,null,null);e.default=o.exports}}]);