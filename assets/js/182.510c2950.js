(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{387:function(t,e,n){t.exports=n.p+"assets/img/p1.a277b864.jpg"},442:function(t,e,n){},615:function(t,e,n){"use strict";n(442)},634:function(t,e,n){"use strict";n.r(e);var i=[function(){var t=this._self._c;return t("li",[this._v("\n      倒计时抢购：\n      "),t("div",{attrs:{id:"c_box1"}})])},function(){var t=this._self._c;return t("li",[t("span",[this._v("图片放大：")]),this._v(" "),t("div",{attrs:{id:"imgBox"}},[t("img",{attrs:{id:"img",src:n(387),alt:""}})])])},function(){var t=this._self._c;return t("div",{attrs:{id:"box"}},[t("div",{attrs:{id:"left"}},[t("img",{attrs:{src:n(387),alt:""}}),this._v(" "),t("div",{staticClass:"hide",attrs:{id:"ball"}}),this._v(" "),t("div",{attrs:{id:"mb"}})]),this._v(" "),t("div",{staticClass:"show",attrs:{id:"right"}},[t("img",{attrs:{id:"bigImg",src:n(387),alt:""}})])])}],s={data:()=>({num:0}),computed:{random(){return this.random_str(this.num)},production_id(){return this.productionId(this.num)}},mounted(){this.clock((new Date).getTime()-0+432e5,"c_box1"),this.initBigImg()},methods:{random_str(t){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZ";e+="abcdefghijklmnopqrstuvwxyz",e+="0123456789-_";let n="";for(let i=0;i<t;++i){let t=Math.floor(Math.random()*e.length);n+=e.substring(t,t+1)}return n},productionId(t){let e=this.random_str(32).replace(/-|_/g,"")+(new Date).getTime();return this.hashCode(e)},hashCode(t){let e=Array.from(new Array(32)).map((t,e)=>e+1),n=[...t].slice(0,32);return e.forEach((e,i)=>{i%2==0&&i/2+1<(new Date).getTime().toString().length&&(n[i]=t[t.length-(i/2+1)])}),n.join("")},clock(t,e){let n=document.getElementById(e),i=new Date(t),s=setInterval(o,900);function o(){let t=new Date,e=parseInt((i-t)/1e3),o=parseInt(e/86400),a=e%86400,r=parseInt(a/3600),l=a%3600,d=parseInt(l/60),m=l%60;e<=0&&(clearInterval(s),o=r=d=m=0),n.innerHTML="<span>"+o+"</span>天<span>"+r+"</span>小时<span>"+d+"</span>分<span>"+m+"</span>秒"}o()},initBigImg(){let t=document.getElementById("imgBox"),e=document.getElementById("img"),n=100;t.onmousemove=function(t){let n=t||window.event,i=n.offsetX||n.layerX,s=n.offsetY||n.layerY;e.style.transformOrigin=i+"px "+s+"px"},this.mouWheel(t,()=>{n+=5,n>=300&&(n=300),e.style.transform="scale("+n/100+")"},()=>{n-=5,n<=100&&(n=100),e.style.transform="scale("+n/100+")"})},mouWheel(t,e,n){function i(t){let i=t||window.event;i.preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation?i.stopPropagation():i.cancelBubble=!0,i.wheelDelta?i.wheelDelta>0?e():n():i.detail&&(i.detail<0?e():n())}-1!=window.navigator.userAgent.toLowerCase().indexOf("firefox")?t.addEventListener("DOMMouseScroll",i,!1):t.onmousewheel=i},initManagnigire(){let t=document.getElementById("box"),e=document.getElementById("ball"),n=document.getElementById("right"),i=document.getElementById("bigImg");t.onmousemove=function(s){e.className=n.className="show";let o=s||window.event,a=(o.offsetX||o.layerX)-e.offsetWidth/2,r=(o.offsetY||o.layerY)-e.offsetHeight/2;a<=0?a=0:a>=t.clientWidth-e.offsetWidth&&(a=t.clientWidth-e.offsetWidth),r<=0?r=0:r>=t.clientHeight-e.offsetHeight&&(r=t.clientHeight-e.offsetHeight),e.style.left=a+"px",e.style.top=r+"px",i.style.left=4*-a+"px",i.style.top=4*-r+"px"},t.onmouseleave=function(){e.className=n.className="hide"}}},components:{}},o=(n(615),n(1)),a=Object(o.a)(s,(function(){var t=this,e=t._self._c;return e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.num,expression:"num"}],attrs:{type:"number"},domProps:{value:t.num},on:{input:function(e){e.target.composing||(t.num=e.target.value)}}}),e("br"),t._v(" "),e("ul",[e("li",[t._v("\n      生成随机序列的函数："),e("span",[t._v(t._s(t.random))])]),t._v(" "),e("li",[t._v("\n      生成32位之间唯一的id："),e("span",[t._v(t._s(t.production_id))])]),t._v(" "),t._m(0)]),t._v(" "),e("ul",[t._m(1),t._v(" "),t._e()])])}),i,!1,null,"9d76e40e",null);e.default=a.exports}}]);