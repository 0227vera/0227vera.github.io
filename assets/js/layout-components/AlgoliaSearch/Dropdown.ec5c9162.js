(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{432:function(e,t,a){},555:function(e,t,a){"use strict";a(432)},630:function(e,t,a){"use strict";a.r(t);var i=a(0).a.extend({name:"AlgoliaSearchDropdown",props:{options:{type:Object,required:!0}},data:()=>({placeholder:""}),watch:{$lang(e){this.update(this.options,e)},options(e){this.update(e,this.$lang)}},mounted(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize(e,t){Promise.all([Promise.all([a.e(0),a.e(176)]).then(a.t.bind(null,620,7)),Promise.all([a.e(0),a.e(176)]).then(a.t.bind(null,621,7))]).then(([a])=>{a.default({...e,inputSelector:"#algolia-search-input",algoliaOptions:{facetFilters:["lang:"+t].concat(e.facetFilters||[])},handleSelected:(e,t,a)=>{const{pathname:i,hash:s}=new URL(a.url),l=i.replace(this.$site.base,"/");this.$router.getRoutes().some(e=>e.path===l)?this.$router.push(`${l}${decodeURIComponent(s)}`):window.open(a.url)}})})},update(e,t){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(e,t)}}}),s=(a(555),a(1)),l=Object(s.a)(i,(function(){var e=this._self._c;this._self._setupProxy;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[e("label",{staticClass:"sr-only",attrs:{for:"algolia-search-input"}},[this._v("Algolia search")]),this._v(" "),e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null);t.default=l.exports}}]);