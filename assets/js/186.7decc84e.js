(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{441:function(e,t,n){},614:function(e,t,n){"use strict";n(441)},622:function(e,t,n){"use strict";n.r(t);var a=n(613),s=n.n(a),i=n(0),v=[{name:"接单后模块（行中、行后）",time:"202301-至今",role:"RD",duty:["业务开发：弹窗模块、小助手沟通卡片、司机卡片及操作区、xpanel信息透传","行后模块升级：框架升级为统一的三段式、行后模块分包异步化、提供ab能力","出租车业务：金刚位--\x3e独立场景页面--\x3e出租车业务预估冒泡"],type:2},{name:"快的新出租",time:"2020/12-2022/11",role:"项目owner",duty:["使用mpx开发快的出租车小程序","异业合作：提供npm分包（独立分包）给腾讯出行小程序完整的打车流程","性能优化：基础优化（异步分包+分包预加载、冗余代码剔除、资源cdn化、主包体积）、npm包（分包异步化、js异步化，提供placeholderView保证基本渲染）、计算实际体积访问比（pv/体积）、原子类思维（在主包引入高频使用文件）","营销能力：扫码付（本单立减、天降红包、批量发券）、红包码"],result:["小程序日均完单多渠道和峰值4W单、扫码付完单峰值120W/天,新沉流用户回端完单率峰值11%","统一异业合作模板,可快速接入潜在的外部渠道合作","小程序包体积减小40%左右（主要在于冗余代码多）、从扫码到进入扫码付时间由3.5s->2.5s（主要在于主包体积的减小 + 扫码付页面首屏加载节点变少 + 分包异步和预加载）","沉淀出租车营销后台：活动快速配置、数据收集sdk"],type:2},{name:"前端规划",time:"2020/02-2020/12",role:"前端负责人",duty:["前端H5转发代理服务器维护","开发脚手架,统一标准,支持初始化自定义,远程模板拉取等","设置UED规范完成前端设计规范网站"],result:["支持用户总数150W,pv50W业务日常稳定","支持团队开发基本需求","统一技术栈和设计规范、降低开发成本"],type:1},{name:"工作流引擎和表单设计器维护",time:"2018/07-2019/11",role:"项目owner",duty:["业务开发：工作流系统、多级公文流转web、H5（技术栈： vue2）","工作流引擎：基于开源项目bpmn-js修改的工作流引擎,github地址:https://github.com/bpmn-io/bpmn-js","表单引擎：使用preact(类react)书写的表单设计器插件,高度自定义"],result:["支持公司工作流类业务稳定性","支持表单的定制化,兼容所有业务的业务需求","收敛脚手架模板(vue的web版本和H5版本)"],type:1}];var l,_=[{type:2,industry:"高级研发工程师",time:`20201203-至今(${l="2020/12/03",(((new Date).getTime()-new Date(l).getTime())/31104e6).toFixed(1)}年)`,work:["负责快的新出租小程序的维护、日常功能交付及性能优化","负责出租车业务的扫码付、红包码等营销活动B、C端开发、迁移","负责滴滴出行小程序，日常行中模块相关业务迭代、主导行后页面平稳升级"]},{type:1,industry:"高级软件开发工程师",time:"201807-202012(2.5年)",work:["日常系统（多级公文、内控系统、工作流系统）技术选型、开发","调研并开发团队使用脚手架,统一开发规范","设计UED规范、产出对应的组件库","表单设计器开发、工作流(bpmn.js)引擎迭代"]}],r=["熟练掌握HTML5、CSS3、JavaScript、ES6/ES next开发;熟练使用scss、less,为熟悉和熟练vue/react/mpx(小程序)框架提供夯实基础","使用第三方组件库,element-ui、vant、echarts等完成基础业务并高还原度完成页面,完成复杂应用的孵化和稳定迭代","使用vue3+vite+WindiCSS搭建后台管理系统,快速孵化营销后台管理,收敛ToC业务组件","使用mpx(小程序开发框架),孵化出租车小程序,并找到扫码付、红包码等抓手快速让UV达到百万级","开发滴滴小程序行中模块,梳理弹窗、小助手、司机卡片等业务组件,参与行程中性能优化，主导行程结束页面升级","使用preact库(类react)开发表单设计器、H5营销组件(科大讯飞)","使用nodeJS收敛开发框架vue、react、mpx、preact来支持不同端不同业务场景的开发,并落地到开发人员中,统一公司开发规范(科大讯飞)"],u=[{name:"姓名",value:"廖轩"},{name:"出生日期",value:"1994/03"},{name:"手机",value:"18331588738"},{name:"邮箱",value:"1066788870@qq.com"},{name:"民族",value:"汉"},{name:"现居",value:"北京市海淀区"},{name:"籍贯",value:"湖北天门"},{name:"工作年限",value:(new Date).getFullYear()-2019+"年"},{name:"状态",value:"在职"},{name:"学校",value:"华北理工大学(2014-2018)"},{name:"专业",value:"数学--计算机信息科学"},{name:"是否统招",value:"是"}];i.a.use(s.a);var p={data:()=>({isPCBroswer:!0,printObj:{id:"printMe",popTitle:`廖轩-高级前端工程师-${(new Date).getFullYear()-2018}年`},baseInfo:u,skillInfo:r,itemHisInfo:v.filter(e=>!e.hide),itemHisWorkInfo:_.filter(e=>!e.hide)}),mounted(){},methods:{getCompany:e=>["","科大讯飞-北京乐知行软件有限公司","滴滴出行"][e]}},o=(n(614),n(1)),m=Object(o.a)(p,(function(){var e=this,t=e._self._c;return e.isPCBroswer?t("div",[t("div",{staticClass:"about",attrs:{id:"printMe"}},[t("h2",[e._v("基础信息")]),e._v(" "),t("ul",{staticClass:"baseInfo"},e._l(e.baseInfo,(function(n,a){return t("li",{key:a},[t("span",[e._v(e._s(n.name)+":")]),e._v(" "),n.isLink?t("a",{attrs:{href:n.value}},[e._v(e._s(n.value))]):t("span",[e._v(e._s(n.value))])])})),0),e._v(" "),t("hr"),e._v(" "),t("ul",{staticClass:"skillInfo"},[t("h2",[e._v("技术能力")]),e._v(" "),e._l(e.skillInfo,(function(n,a){return t("li",{key:a},[t("span",[e._v(e._s(a+1)+".")]),e._v(" "),t("span",[e._v(e._s(n))])])}))],2),e._v(" "),t("hr"),e._v(" "),t("ul",{staticClass:"itemHisWorkInfo"},[t("h2",[e._v("工作经历")]),e._v(" "),e._l(e.itemHisWorkInfo,(function(n,a){return t("li",{key:a,attrs:{"data-content":e.itemHisWorkInfo.length-a}},[t("div",[t("span",[e._v("公司名称：")]),e._v(" "),t("span",[e._v(e._s(e.getCompany(n.type)))])]),e._v(" "),t("div",[t("span",[e._v("职位类别：")]),e._v(" "),t("span",[e._v(e._s(n.industry))])]),e._v(" "),t("div",[t("span",[e._v("在职时间：")]),e._v(" "),t("span",[e._v(e._s(n.time))])]),e._v(" "),t("div",{staticClass:"mutil"},[t("span",[e._v("主要工作：")]),e._v(" "),t("ul",e._l(n.work,(function(n,a){return t("li",{key:a},[t("span",[e._v(e._s(a+1)+"."+e._s(n))])])})),0)])])}))],2),e._v(" "),t("hr"),e._v(" "),t("ul",{staticClass:"itemHisInfo"},[t("h2",[e._v("项目经验")]),e._v(" "),e._l(e.itemHisInfo,(function(n,a){return t("li",{key:a,attrs:{"data-content":e.itemHisInfo.length-a}},[t("div",[t("span",[e._v("所在公司：")]),e._v(" "),t("span",[e._v(e._s(e.getCompany(n.type)))])]),e._v(" "),t("div",[t("span",[e._v("项目名称：")]),e._v(" "),t("span",[e._v(e._s(n.name))])]),e._v(" "),t("div",[t("span",[e._v("项目开发时间：")]),e._v(" "),t("span",[e._v(e._s(n.time))])]),e._v(" "),t("div",[t("span",[e._v("项目中的角色：")]),e._v(" "),t("span",[e._v(e._s(n.role))])]),e._v(" "),t("div",{staticClass:"mutil"},[t("span",[e._v("项目内容和职责：")]),e._v(" "),t("ul",e._l(n.duty,(function(n,a){return t("li",{key:a},[t("span",[e._v(e._s(a+1)+"."+e._s(n))])])})),0)]),e._v(" "),n.result&&n.result.length?t("div",{staticClass:"mutil"},[t("span",[e._v("工作成果：")]),e._v(" "),t("ul",e._l(n.result,(function(n,a){return t("li",{key:a},[t("span",[e._v(e._s(a+1)+"."+e._s(n))])])})),0)]):e._e()])}))],2)]),e._v(" "),t("div",{staticClass:"print"},[t("button",{directives:[{name:"print",rawName:"v-print",value:e.printObj,expression:"printObj"}],attrs:{title:"点击可直接打印此页面或保存为pdf,为保证效果,请尽量使用Google Chrome或者Safari访问"}},[e._v("打印此页面")])])]):t("div",{staticClass:"phone"},[e._v("\n  为了打印方便，请在PC端打开https://0227vera.github.io/about/\n")])}),[],!1,null,"137dce6a",null);t.default=m.exports}}]);