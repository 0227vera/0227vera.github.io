(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{653:function(t,s,r){"use strict";r.r(s);var v=r(1),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"html面试整理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html面试整理"}},[t._v("#")]),t._v(" html面试整理")]),t._v(" "),s("h2",{attrs:{id:"html-语义化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-语义化"}},[t._v("#")]),t._v(" html 语义化")]),t._v(" "),s("p",[t._v("什么是语义化？ 就是用合理正确的标签来展示内容，比如"),s("code",[t._v("h1~h6")]),t._v("表示标题、"),s("code",[t._v("table")]),t._v("表示表格等等")]),t._v(" "),s("p",[t._v("好处有：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("易于代码维护，样式丢失的时候能够让页面具有清晰的结构")])]),t._v(" "),s("li",[s("p",[t._v("利于 SEO，搜索引擎根据标签来确定上下文和各个关键字的权重")])]),t._v(" "),s("li",[s("p",[t._v("方便其他设备解析，如盲人阅读器根据语义渲染网页")])]),t._v(" "),s("li",[s("p",[t._v("有利于开发和维护，语义话更具可读性，代码更好维护，与 CSS3 关系更和谐")])])]),t._v(" "),s("h2",{attrs:{id:"b-strong、i-em的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b-strong、i-em的区别"}},[t._v("#")]),t._v(" b/strong、i/em的区别")]),t._v(" "),s("p",[t._v("b（bold）是实体标签、用来给文字加粗；没什么实际含义，单纯的加粗文字")]),t._v(" "),s("p",[t._v("strong是逻辑标签，作用是加强字符语气")]),t._v(" "),s("p",[t._v("根据语义化，建议使用strong，少用b；对于i和em也是一样的，建议使用em标签")]),t._v(" "),s("h2",{attrs:{id:"doctype有什么用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#doctype有什么用"}},[t._v("#")]),t._v(" doctype有什么用")]),t._v(" "),s("ul",[s("li",[t._v("什么是doctype\n"),s("ul",[s("li",[t._v("doctype 是一种标准通用标记语言的文档类型声明，目的是告诉标准通用标记语言解析器要使用什么样的文档类型来定义解析文档")])])]),t._v(" "),s("li",[t._v("doctype作用\n"),s("ul",[s("li",[t._v("浏览器本身分为两种模式：标准模式和怪异模式，浏览器通过 doctype 来区分这两种模式，如果没有 doctype 浏览器就会进入怪异模式，在这个模式下面，样式和标准模式存在差异，而 dom 标准和 html 标准规定标准模式下的行为，没有对怪异模式的规定，所以不同浏览器在怪异模式下面的的处理是不同的")])])])]),t._v(" "),s("h2",{attrs:{id:"css、js的引入位置问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css、js的引入位置问题"}},[t._v("#")]),t._v(" css、js的引入位置问题")]),t._v(" "),s("p",[t._v("为什么最好把"),s("code",[t._v("<link>")]),t._v("标签放在 head 之间？为什么最好把"),s("code",[t._v("<script>")]),t._v("放在"),s("code",[t._v("</body>")]),t._v("之后")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("把 link 标签放在 head 之间是规范要求的内容，如果不放在头部，一旦浏览器阻止渲染，会发生空白页面或者没有样式的内容")])]),t._v(" "),s("li",[s("p",[t._v("script 脚本在下载和执行期间会阻止 html 解析，把 script 放在底部，保证 html 首先完成解析，将页面尽早呈现给用户")])])]),t._v(" "),s("h2",{attrs:{id:"href-和-src-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#href-和-src-的区别"}},[t._v("#")]),t._v(" href 和 src 的区别")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("href 标识超文本引用，用在 link 和 a 等元素上，href 是引用和页面关联，是在当前元素和引用资源之间建立联系；css 中的 href 是可以并行下载的并且不会停止当前对文档的处理，所以会推荐用 link 引入 css 为不是@import")])]),t._v(" "),s("li",[s("p",[t._v("scr 标识引入资源，在 img、script、iframe 上是必不可少的一部分；scr 会暂停其他的卸载和处理（图片不会暂停其他下载），直到该资源加载、编译、执行完成，这就是为什么建议把 js 脚本放在底部而不是头部")])])]),t._v(" "),s("h2",{attrs:{id:"script-的-async-跟-defer-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script-的-async-跟-defer-的区别"}},[t._v("#")]),t._v(" script 的 async 跟 defer 的区别")]),t._v(" "),s("p",[t._v("背景：HTML在执行时，如果遇到外部JS引用，需要下载执行JS文件，此时会停止页面渲染，导致页面表现为空白。defer和async用来控制JS文件的下载和执行")]),t._v(" "),s("p",[t._v("defer 表明脚本执行时不会影响页面构造，让脚本在页面解析完成后执行（即让浏览器下载JS文件，但等到页面解析完成后执行）")]),t._v(" "),s("p",[t._v("async 只适用于外部JS文件，告诉浏览器立即下载JS文件，但是不保证按照JS的先后顺序运行（注意JS文件之间的依赖关系）")])])}),[],!1,null,null,null);s.default=_.exports}}]);