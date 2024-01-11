(window.webpackJsonp=window.webpackJsonp||[]).push([[178,35,36,47,48,49,51,53,56,57],{181:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(180),o=s.a.extend({name:"NavLink",props:{item:{type:Object,required:!0}},computed:{link(){return Object(i.c)(this.item.link)},active(){return this.$site.locales&&Object.keys(this.$site.locales).some(t=>t===this.link)||"/"===this.link?this.$route.path===this.link:this.$route.path.startsWith(this.link)},isNonHttpURI(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}}),a=(n(192),n(1)),r=Object(a.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.isInternal?e("RouterLink",{staticClass:"nav-link",class:{active:t.active},attrs:{to:t.link},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t.item.icon?e("i",{class:`iconfont ${t.$themeConfig.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n")]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t.item.icon?e("i",{class:`iconfont ${t.$themeConfig.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.default=r.exports},185:function(t,e,n){},187:function(t,e,n){},191:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));const s=(t,e="")=>{var n;const i=e+(t.prefix||""),o={...t};return i&&(void 0!==o.link&&(o.link=i+o.link),delete o.prefix),(null===(n=o.items)||void 0===n?void 0:n.length)?Object.assign(o,{type:"links",items:o.items.map(t=>s(t,i))}):o.type="link",o}},192:function(t,e,n){"use strict";n(185)},193:function(t,e,n){},194:function(t,e,n){},199:function(t,e,n){},200:function(t,e,n){},205:function(t,e,n){"use strict";n.r(e);var s=n(0).a.extend({name:"RepoLink",computed:{repoLink(){const{repo:t}=this.$themeConfig;return t?/^https?:/u.test(t)?t:"https://github.com/"+t:""},repoLabel(){if(!this.repoLink)return"";if(this.$themeConfig.repoLabel)return this.$themeConfig.repoLabel;const[t]=/^https?:\/\/[^/]+/u.exec(this.repoLink)||[""],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const s=e[n];if(new RegExp(s,"iu").test(t))return s}return"Source"}}}),i=(n(224),n(1)),o=Object(i.a)(s,(function(){var t=this._self._c;this._self._setupProxy;return this.repoLink&&!1!==this.$themeConfig.repoDisplay?t("a",{staticClass:"repo-link",attrs:{rel:"noopener noreferrer",href:this.repoLink,target:"_blank"}},[this._v("\n  "+this._s(this.repoLabel)+"\n  "),t("OutboundLink")],1):this._e()}),[],!1,null,null,null);e.default=o.exports},206:function(t,e,n){"use strict";n.r(e);var s=n(1),i=Object(s.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon auto-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M460.864 539.072H564.8L510.592 376l-49.728 163.072zM872 362.368V149.504H659.648L510.528 0l-149.12 149.504H149.12v212.928L0 511.872l149.12 149.504v212.928h212.352l149.12 149.504 149.12-149.504h212.352V661.376l149.12-149.504L872 362.368zM614.464 693.12l-31.616-90.624H438.272l-31.616 90.624h-85.888l144.576-407.68h90.368l144.576 407.68h-85.824zm0 0",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=i.exports},207:function(t,e,n){"use strict";n.r(e);var s=n(1),i=Object(s.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon dark-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M935.539 630.402c-11.43-11.432-28.674-14.739-43.531-8.354-46.734 20.103-96.363 30.297-147.508 30.297-99.59 0-193.221-38.784-263.64-109.203-108.637-108.637-139.61-270.022-78.908-411.148a39.497 39.497 0 0 0-51.886-51.887c-52.637 22.64-100.017 54.81-140.826 95.616-85.346 85.346-132.346 198.821-132.346 319.52 0 120.7 47.001 234.172 132.347 319.519S408.063 947.11 528.76 947.11c120.7 0 234.172-47.003 319.52-132.351 40.809-40.81 72.978-88.19 95.616-140.826a39.497 39.497 0 0 0-8.356-43.532z",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=i.exports},208:function(t,e,n){"use strict";n.r(e);var s=n(1),i=Object(s.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon light-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M512 256a42.667 42.667 0 0 0 42.667-42.667V128a42.667 42.667 0 0 0-85.334 0v85.333A42.667 42.667 0 0 0 512 256zm384 213.333h-85.333a42.667 42.667 0 0 0 0 85.334H896a42.667 42.667 0 0 0 0-85.334zM256 512a42.667 42.667 0 0 0-42.667-42.667H128a42.667 42.667 0 0 0 0 85.334h85.333A42.667 42.667 0 0 0 256 512zm9.387-298.667a42.667 42.667 0 0 0-59.307 62.72l61.44 59.307a42.667 42.667 0 0 0 31.147 11.947 42.667 42.667 0 0 0 30.72-13.227 42.667 42.667 0 0 0 0-60.16zm459.946 133.974a42.667 42.667 0 0 0 29.44-11.947l61.44-59.307a42.667 42.667 0 0 0-57.6-62.72l-61.44 60.587a42.667 42.667 0 0 0 0 60.16 42.667 42.667 0 0 0 28.16 13.227zM512 768a42.667 42.667 0 0 0-42.667 42.667V896a42.667 42.667 0 0 0 85.334 0v-85.333A42.667 42.667 0 0 0 512 768zm244.48-79.36a42.667 42.667 0 0 0-59.307 61.44l61.44 60.587a42.667 42.667 0 0 0 29.44 11.946 42.667 42.667 0 0 0 30.72-12.8 42.667 42.667 0 0 0 0-60.586zm-488.96 0-61.44 59.307a42.667 42.667 0 0 0 0 60.586 42.667 42.667 0 0 0 30.72 12.8 42.667 42.667 0 0 0 28.587-10.666l61.44-59.307a42.667 42.667 0 0 0-59.307-61.44zM512 341.333A170.667 170.667 0 1 0 682.667 512 170.667 170.667 0 0 0 512 341.333z",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=i.exports},211:function(t,e,n){},212:function(t,e,n){},213:function(t,e,n){"use strict";n(187)},221:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(181),o=s.a.extend({name:"DropdownLink",components:{NavLink:i.default},props:{item:{type:Object,required:!0}},data:()=>({open:!1}),computed:{dropdownAriaLabel(){return this.item.ariaLabel||this.item.text}},watch:{$route(){this.open=!1}},methods:{setOpen(t){this.open=t},handleDropdown(t){0===t.detail&&this.setOpen(!this.open)},isLastItemOfArray:(t,e)=>!!Array.isArray(e)&&t===e[e.length-1]}}),a=(n(236),n(1)),r=Object(a.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[t._t("title",(function(){return[e("span",{staticClass:"title"},[t.item.icon?e("i",{class:`iconfont ${t.$themeConfig.iconPrefix}${t.item.icon}`}):t._e(),t._v("\n        "+t._s(t.item.text)+"\n      ")])]})),t._v(" "),e("span",{staticClass:"arrow"})],2),t._v(" "),e("ul",{staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,s){return e("li",{key:n.link||s,staticClass:"dropdown-item"},["links"===n.type?[e("h4",{staticClass:"dropdown-subtitle"},[n.link?e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.children)&&0===n.children.length&&t.setOpen(!1)}}}):e("span",[t._v(t._s(n.text))])],1),t._v(" "),e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(s){return e("li",{key:s.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:s},on:{focusout:function(e){t.isLastItemOfArray(s,n.items)&&t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],1)})),0)]:e("NavLink",{attrs:{item:n},on:{focusout:function(e){t.isLastItemOfArray(n,t.item.items)&&t.setOpen(!1)}}})],2)})),0)])}),[],!1,null,null,null);e.default=r.exports},222:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(206),o=n(207),a=n(208);const r=(t,e,n)=>{const s=[];t.remove(...n),t.forEach(t=>{s.push(t)}),t.value="",t.add(...e,...s)};var l=s.a.extend({name:"DarkmodeSwitch",components:{AutoIcon:i.default,DarkIcon:o.default,LightIcon:a.default},data:()=>({darkmode:"auto"}),computed:{darkmodeConfig(){return this.$themeConfig.darkmode||"auto-switch"}},mounted(){this.darkmode=localStorage.getItem("darkmode")||"auto","auto-switch"===this.darkmodeConfig?"auto"===this.darkmode?this.setDarkmode("auto"):this.setDarkmode(this.darkmode):"auto"===this.darkmodeConfig?this.setDarkmode("auto"):"switch"===this.darkmodeConfig?this.setDarkmode(this.darkmode):this.setDarkmode("off")},methods:{setDarkmode(t){if("on"===t)this.toggleDarkmode(!0);else if("off"===t)this.toggleDarkmode(!1);else{const t=window.matchMedia("(prefers-color-scheme: dark)").matches,e=window.matchMedia("(prefers-color-scheme: light)").matches;if(window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches&&this.toggleDarkmode(!0)}),window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",t=>{t.matches&&this.toggleDarkmode(!1)}),t)this.toggleDarkmode(!0);else if(e)this.toggleDarkmode(!1);else{const t=(new Date).getHours();this.toggleDarkmode(t<6||t>=18)}}this.darkmode=t,localStorage.setItem("darkmode",t)},toggleDarkmode(t){const e=document.body.classList;t?r(e,["theme-dark"],["theme-light"]):r(e,["theme-light"],["theme-dark"])}}}),c=(n(213),n(1)),u=Object(c.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"darkmode-switch"},["auto-switch"===t.darkmodeConfig?[e("div",{staticClass:"item day",class:{active:"off"===t.darkmode},on:{click:function(e){return t.setDarkmode("off")}}},[e("LightIcon")],1),t._v(" "),e("div",{staticClass:"item auto",class:{active:"auto"===t.darkmode},on:{click:function(e){return t.setDarkmode("auto")}}},[e("AutoIcon")],1),t._v(" "),e("div",{staticClass:"item night",class:{active:"on"===t.darkmode},on:{click:function(e){return t.setDarkmode("on")}}},[e("DarkIcon")],1)]:"switch"===t.darkmodeConfig?e("div",{staticClass:"switch"},[e("input",{staticClass:"switch-input",attrs:{id:"switch",type:"checkbox"},domProps:{checked:"on"!==t.darkmode},on:{click:function(e){return t.setDarkmode("on"===t.darkmode?"off":"on")}}}),t._v(" "),t._m(0)]):t._e()],2)}),[function(){var t=this._self._c;this._self._setupProxy;return t("label",{staticClass:"label",attrs:{for:"switch"}},[t("span",{staticClass:"label-content"})])}],!1,null,null,null);e.default=u.exports},224:function(t,e,n){"use strict";n(193)},225:function(t,e,n){"use strict";n(194)},228:function(t,e,n){},229:function(t,e,n){"use strict";const s=t=>"function"==typeof t.value||(console.warn("[Vue-click-outside:] provided expression",t.expression,"is not a function."),!1),i=t=>void 0!==t.componentInstance&&t.componentInstance.$isServer;e.a={bind:(t,e,n)=>{if(!s(e))return;const o=e=>{if(!n.context)return;const s=e.path||(e.composedPath?e.composedPath():[]);s&&s.length>0&&s.unshift(e.target),t.contains(e.target)||((t,e)=>{if(!t||!e)return!1;for(let n=0,s=e.length;n<s;n++)try{if(t.contains(e[n]))return!0;if(e[n].contains(t))return!1}catch(t){return!1}return!1})(n.context.popupItem,s)||t.$vueClickOutside&&t.$vueClickOutside.callback(e)};t.$vueClickOutside={handler:o,callback:e.value};const a="ontouchstart"in document.documentElement?"touchstart":"click";i(n)||document.addEventListener(a,o)},update:(t,e)=>{s(e)&&t.$vueClickOutside&&(t.$vueClickOutside.callback=e.value)},unbind:(t,e,n)=>{const s="ontouchstart"in document.documentElement?"touchstart":"click";!i(n)&&t.$vueClickOutside&&document.removeEventListener(s,t.$vueClickOutside.handler),delete t.$vueClickOutside}}},230:function(t,e,n){},235:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(222);const o={red:"#e74c3c",blue:"#3498db",green:"#3eaf7c",orange:"#f39c12",purple:"#8e44ad"};var a=s.a.extend({name:"ThemeOptions",components:{DarkmodeSwitch:i.default},data:()=>({themeColor:{},isDarkmode:!1}),computed:{text(){return this.$themeLocaleConfig.themeColor},themeColorEnabled(){return!1!==this.$themeConfig.themeColor},switchEnabled(){return"disable"!==this.$themeConfig.darkmode&&"auto"!==this.$themeConfig.darkmode}},mounted(){const t=localStorage.getItem("theme");this.themeColor={list:this.$themeConfig.themeColor?Object.keys(this.$themeConfig.themeColor):Object.keys(o),picker:this.$themeConfig.themeColor||o},t&&this.setTheme(t)},methods:{setTheme(t){const e=document.body.classList,n=this.themeColor.list.map(t=>"theme-"+t);if(!t)return localStorage.removeItem("theme"),void e.remove(...n);e.remove(...n.filter(e=>e!=="theme-"+t)),e.add("theme-"+t),localStorage.setItem("theme",t)}}}),r=(n(225),n(1)),l=Object(r.a)(a,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"theme-options"},[t.themeColorEnabled?e("ul",{staticClass:"themecolor-select"},[e("label",{attrs:{for:"themecolor-select"},domProps:{textContent:t._s(t.text.themeColor+":")}}),t._v(" "),e("li",[e("span",{staticClass:"default-theme",on:{click:function(e){return t.setTheme()}}})]),t._v(" "),t._l(t.themeColor.list,(function(n){return e("li",{key:n},[e("span",{style:{background:t.themeColor.picker[n]},on:{click:function(e){return t.setTheme(n)}}})])}))],2):t._e(),t._v(" "),t.switchEnabled?e("div",{staticClass:"darkmode-toggle"},[e("label",{staticClass:"desc",attrs:{for:"darkmode-toggle"},domProps:{textContent:t._s(t.text.themeMode+":")}}),t._v(" "),e("DarkmodeSwitch"),t._v(" "),e("ScreenFull",{attrs:{enable:!1!==t.$themeConfig.fullscreen}})],1):t._e()])}),[],!1,null,null,null);e.default=l.exports},236:function(t,e,n){"use strict";n(199)},237:function(t,e,n){"use strict";n(200)},244:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(229),o=n(235),a=s.a.extend({name:"ThemeColor",directives:{"click-outside":i.a},components:{ThemeOptions:o.default},data:()=>({showMenu:!1}),methods:{clickOutside(){this.showMenu=!1}}}),r=(n(237),n(1)),l=Object(r.a)(a,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("button",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.clickOutside,expression:"clickOutside"}],staticClass:"color-button",class:{select:t.showMenu},attrs:{tabindex:"-1","aria-hidden":"true"},on:{click:function(e){t.showMenu=!t.showMenu}}},[e("svg",{staticClass:"skin-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4\n        38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32\n        51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0\n        102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2\n        6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4\n        0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2\n        9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224\n        419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4\n        470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0\n        22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6\n        12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128\n        505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2\n        16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8\n        86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4\n        80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6\n        6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"}})]),t._v(" "),e("transition",{attrs:{mode:"out-in",name:"menu-transition"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showMenu,expression:"showMenu"}],staticClass:"color-picker-menu"},[e("ThemeOptions")],1)])],1)}),[],!1,null,null,null);e.default=l.exports},255:function(t,e,n){"use strict";n(211)},256:function(t,e,n){"use strict";n(212)},268:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(221),o=n(181),a=n(191),r=s.a.extend({name:"NavLinks",components:{DropdownLink:i.default,NavLink:o.default},computed:{navLinks(){return(this.$themeLocaleConfig.nav||this.$themeConfig.nav||[]).map(t=>Object(a.a)(t))}}}),l=(n(255),n(1)),c=Object(l.a)(r,(function(){var t=this._self._c;this._self._setupProxy;return t("nav",{staticClass:"nav-links"},this._l(this.navLinks,(function(e){return t("div",{key:e.link,staticClass:"nav-item"},["links"===e.type?t("DropdownLink",{attrs:{item:e}}):t("NavLink",{attrs:{item:e}})],1)})),0)}),[],!1,null,null,null);e.default=c.exports},271:function(t,e,n){"use strict";n.r(e);var s=n(1),i=Object(s.a)({},(function(){var t=this._self._c;return t("svg",{staticClass:"icon i18n-icon",attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M639.981 344.075c14.805 44.45 34.542 79.023 69.084 113.596 29.603-29.634 49.34-69.146 64.145-113.596H639.981zM314.33 591.024h128.29l-64.145-172.865-64.145 172.865z",fill:"currentColor"}}),this._v(" "),t("path",{attrs:{d:"M807.746 116.882H215.643c-54.274 0-98.681 44.45-98.681 98.78v592.677c0 54.329 44.407 98.78 98.68 98.78h592.104c54.273 0 98.681-44.451 98.681-98.78V215.66c0-54.329-39.475-98.78-98.68-98.78zM565.971 754.01c-9.866 9.878-19.738 9.878-29.603 9.878-4.94 0-14.805 0-19.738-4.939-4.939-4.939-9.872 0-9.872-4.939s-4.932-9.878-9.865-19.756c-4.94-9.878-4.94-14.817-9.872-24.695L467.29 655.23H294.592l-19.737 54.33c-9.866 19.755-14.805 34.572-19.738 44.45-4.939 9.878-14.804 9.878-29.603 9.878-9.871 0-19.737-4.939-29.609-9.878-9.865-9.878-14.798-14.817-14.798-24.695 0-4.939 0-9.878 4.933-19.756 4.939-9.878 4.939-14.817 9.865-24.695l108.553-276.583c4.939-9.878 4.939-19.756 9.872-29.633 4.932-9.878 9.865-19.756 14.798-24.695 4.939-4.94 9.872-14.817 19.737-19.756 9.872-4.94 19.738-4.94 29.61-4.94 9.865 0 19.73 0 29.603 4.94 9.865 4.939 14.804 9.878 19.737 19.756 4.933 4.939 9.866 14.817 14.798 24.695 4.94 9.877 9.872 19.755 14.805 34.572l108.553 271.644c9.865 19.756 14.804 34.573 14.804 44.451-4.939 4.94-9.872 14.817-14.804 24.695zm271.378-192.62c-54.273-19.756-93.748-44.451-128.29-74.085-34.536 34.573-78.943 59.268-133.223 74.085l-14.798-24.695c54.273-14.817 98.68-34.573 133.223-69.146-34.542-34.573-64.145-79.024-74.017-128.413h-49.34V319.38h133.228c-9.877-14.817-19.743-34.573-29.609-49.39l14.799-4.94c9.871 14.818 24.676 34.574 34.542 54.33h123.35v24.695h-49.34c-14.798 49.39-39.468 93.84-69.077 123.474 34.541 29.634 74.01 54.329 128.29 69.146l-19.738 24.695z",fill:"currentColor"}})])}),[],!1,null,null,null);e.default=i.exports},272:function(t,e,n){"use strict";n.r(e);n(256);var s=n(1),i=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("button",{staticClass:"sidebar-button",attrs:{title:"Sidebar Button"},on:{click:function(e){return t.$emit("toggle-sidebar")}}},[e("span",{staticClass:"icon"})])}),[],!1,null,null,null);e.default=i.exports},273:function(t,e,n){"use strict";n(228)},274:function(t,e,n){"use strict";n(230)},289:function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(2),o=n(221),a=n(271),r=n(181),l=n(191),c=s.a.extend({name:"LanguageDropdown",components:{NavLink:r.default,DropdownLink:o.default},computed:{dropdown(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,{routes:n}=this.$router.options,s=this.$themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(t).map(i=>{const o=t[i],a=s[i]&&s[i].label||o.lang||"Unknown Language";let r;return o.lang===this.$lang?r=e:(r=e.replace(this.$localeConfig.path,i),(n||[]).some(t=>t.path===r)||(r=i)),{text:a,link:r}})};return Object(l.a)(i)}return!1}},render(t){return this.dropdown?t("div",{class:"nav-links"},[t("div",{class:"nav-item"},[t(o.default,{props:{item:this.dropdown}},[t(a.default,{slot:"title",style:{width:"1rem",height:"1rem",verticalAlign:"middle",marginLeft:"1rem"}})])])]):null}}),u=n(268),h=n(205),d=n(63),f=n.n(d),m=(t,e,n=null)=>{let s=f()(e,"title","");return f()(e,"frontmatter.tags")&&(s+=" "+e.frontmatter.tags.join(" ")),n&&(s+=" "+n),p(t,s)};const p=(t,e)=>{const n=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),s=new RegExp("[^\0-]"),i=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t);if(s.test(t))return i.some(t=>e.toLowerCase().indexOf(t)>-1);{const s=t.endsWith(" ");return new RegExp(i.map((t,e)=>i.length!==e+1||s?`(?=.*\\b${n(t)}\\b)`:`(?=.*\\b${n(t)})`).join("")+".+","gi").test(e)}};var g={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,n=this.$site.themeConfig.searchMaxSuggestions||10,s=this.$localePath,i=[];for(let o=0;o<e.length&&!(i.length>=n);o++){const a=e[o];if(this.getPageLocalePath(a)===s&&this.isSearchable(a))if(m(t,a))i.push(a);else if(a.headers)for(let e=0;e<a.headers.length&&!(i.length>=n);e++){const n=a.headers[e];n.title&&m(t,a,n.title)&&i.push(Object.assign({},a,{path:a.path+"#"+n.slug,header:n}))}}return i},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},k=(n(273),n(1)),v=Object(k.a)(g,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-box"},[e("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(n,s){return e("li",{key:s,staticClass:"suggestion",class:{focused:s===t.focusIndex},on:{mousedown:function(e){return t.go(s)},mouseenter:function(e){return t.focus(s)}}},[e("a",{attrs:{href:n.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(n.title||n.path))]),t._v(" "),n.header?e("span",{staticClass:"header"},[t._v("> "+t._s(n.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports,C=n(272),w=n(244);let _;const b=(t,e)=>t.ownerDocument.defaultView.getComputedStyle(t,null)[e];var x=s.a.extend({name:"Navbar",components:{AlgoliaSearchBox:i.a,LanguageDropdown:c,NavLinks:u.default,RepoLink:h.default,SearchBox:v,SidebarButton:C.default,ThemeColor:w.default},data:()=>({linksWrapMaxWidth:0,isMobile:!1}),computed:{siteBrandTitle(){return this.$siteTitle},canHideSiteBrandTitle(){return Boolean(this.siteBrandTitle)&&!1!==this.$themeConfig.hideSiteTitleonMobile},siteBrandLogo(){const{logo:t}=this.$themeConfig;return t?this.$withBase(t):""},siteBrandDarkLogo(){const{darkLogo:t}=this.$themeConfig;return t?this.$withBase(t):""},algoliaConfig(){return this.$themeLocaleConfig.algolia||this.$themeConfig.algolia||!1},isAlgoliaSearch(){return Boolean(this.algoliaConfig&&this.algoliaConfig.apiKey&&this.algoliaConfig.indexName)},canHide(){const t=this.$themeConfig.navAutoHide;return"none"!==t&&("always"===t||this.isMobile)}},mounted(){const t=parseInt(b(this.$el,"paddingLeft"))+parseInt(b(this.$el,"paddingRight"));_=()=>{document.documentElement.clientWidth<719?(this.isMobile=!0,this.linksWrapMaxWidth=0):(this.isMobile=!1,this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteInfo&&this.$refs.siteInfo.$el&&this.$refs.siteInfo.$el.offsetWidth||0))},_(),window.addEventListener("resize",_),window.addEventListener("orientationchange",_)},beforeDestroy(){window.removeEventListener("resize",_),window.removeEventListener("orientationchange",_)}}),L=(n(274),Object(k.a)(x,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("header",{staticClass:"navbar",class:{"can-hide":t.canHide}},[t._t("start"),t._v(" "),e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{ref:"siteInfo",staticClass:"home-link",attrs:{to:t.$localePath}},[t.siteBrandLogo?e("img",{staticClass:"logo",class:{light:Boolean(t.siteBrandDarkLogo)},attrs:{src:t.siteBrandLogo,alt:t.siteBrandTitle}}):t._e(),t._v(" "),t.siteBrandDarkLogo?e("img",{staticClass:"logo dark",attrs:{src:t.siteBrandDarkLogo,alt:t.siteBrandTitle}}):t._e(),t._v(" "),t.siteBrandTitle?e("span",{staticClass:"site-name",class:{"can-hide":t.canHideSiteBrandTitle}},[t._v(t._s(t.siteBrandTitle))]):t._e()]),t._v(" "),t._t("center"),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[e("ThemeColor"),t._v(" "),t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algoliaConfig}}):!1!==t.$themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"}),t._v(" "),e("LanguageDropdown"),t._v(" "),e("RepoLink",{staticClass:"can-hide"}),t._v(" "),t._t("end")],2)],2)}),[],!1,null,null,null));e.default=L.exports}}]);