(function(t){function i(i){for(var n,r,s=i[0],c=i[1],l=i[2],d=0,v=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&v.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(i);while(v.length)v.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,i=0;i<o.length;i++){for(var e=o[i],n=!0,s=1;s<e.length;s++){var c=e[s];0!==a[c]&&(n=!1)}n&&(o.splice(i--,1),t=r(r.s=e[0]))}return t}var n={},a={app:0},o=[];function r(i){if(n[i])return n[i].exports;var e=n[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,i,e){r.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,i){if(1&i&&(t=r(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var n in t)r.d(e,n,function(i){return t[i]}.bind(null,n));return e},r.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(i,"a",i),i},r.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=i,s=s.slice();for(var l=0;l<s.length;l++)i(s[l]);var u=c;o.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"3c0c":function(t,i,e){"use strict";e("8926")},"411a":function(t,i,e){},"56d7":function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[t.basicInformation?e("a",{staticClass:"logo",attrs:{href:t.basicInformation.site_url,title:t.basicInformation.site_title}}):t._e(),e("header",{staticClass:"header"},[e("nav",{staticClass:"main-nav"},[e("button",{staticClass:"menu-icon",on:{click:t.toggleMenu}}),e("div",{staticClass:"primary-nav"},[e("ul",{staticClass:"primary-nav-ul"},t._l(t.mainNavigation,(function(i,n){return e("li",{key:n,staticClass:"primary-nav-li"},[e("a",{staticClass:"primary-nav-link",attrs:{href:i.url}},[t._v(t._s(i.title))]),e("ul",{staticClass:"primary-dropdown"},t._l(i.children,(function(i,n){return e("li",{key:n},[e("a",{attrs:{href:i.url}},[t._v(t._s(i.title))])])})),0)])})),0)]),e("div",{class:["nav-menu",{open:t.sidebarActive}]},[e("button",{staticClass:"close-icon",on:{click:t.toggleMenu}}),e("div",{staticClass:"glavna-navigacija"},[e("ul",t._l(t.mainNavigation,(function(i,n){return e("li",{key:n,class:["dropdown-container",{open:n===t.mobileNonVehicleActive}],on:{click:function(i){return t.mobileNonVehicleDropdown(n)}}},[e("a",{staticClass:"nav-link",attrs:{href:i.url}},[t._v(t._s(i.title))]),e("ul",{class:["dropdown",{show:n===t.mobileNonVehicleActive}]},t._l(i.children,(function(i,n){return e("li",{key:n},[e("a",{attrs:{href:i.url}},[t._v(t._s(i.title))])])})),0)])})),0)]),e("div",{staticClass:"top-nav"},[e("ul",t._l(t.sideNavigation,(function(i,n){return e("li",{key:n,class:[{"services dropdown-container":i.meta.subdropdown},,{open:t.subdropdownIsOpen}]},[1===i.active?e("a",{class:[{"#":i.meta.subdropdown}],attrs:{href:i.url,target:i.target},on:{click:function(e){return t.subdropdownOpen(i.meta.subdropdown)}}},[t._v(t._s(i.title))]):t._e(),i.meta.subdropdown?e("ul",{class:["dropdown",{show:t.subdropdownIsOpen}]},t._l(i.children,(function(i,n){return e("li",{key:n},[e("a",{attrs:{href:i.url}},[t._v(t._s(i.title))])])})),0):t._e()])})),0)])])])])])},o=[],r=e("bc3a"),s=e.n(r),c={name:"Header",props:{url:{type:String}},created:function(){"HEADER_FOOTER_SETTINGS"in window?this.fetchNavigation(window.HEADER_FOOTER_SETTINGS.apiUri):this.url&&this.fetchNavigation(this.url),window.addEventListener("click",this.del)},beforeDestroy:function(){window.removeEventListener("click",this.del)},data:function(){return{meganavActive:!1,sidebarActive:!1,subdropdownIsOpen:!1,mobileNonVehicleActive:40,vehicleTypeActive:0,basicInformation:[],mainNavigation:[],sideNavigation:[]}},computed:{livechatUrl:function(){return this.basicInformation&&this.basicInformation.meta&&this.basicInformation.meta.livechat_url}},methods:{fetchNavigation:function(t){var i=this;s.a.get(t).then((function(t){i.basicInformation=t.data,i.mainNavigation=t.data.header.schema,i.sideNavigation=t.data.header_sidebar.schema}))},toggleVehicle:function(t){if(0===t)return this.meganavActive=!0,document.body.classList.add("hideOverflow"),!0},toggleMenu:function(){this.meganavActive&&this.sidebarActive?this.meganavActive=!1:this.meganavActive&&!this.sidebarActive?(this.meganavActive=!1,document.body.classList.remove("hideOverflow")):this.sidebarActive?(this.sidebarActive=!1,document.body.classList.remove("hideOverflow")):(this.sidebarActive=!0,document.body.classList.add("hideOverflow"))},mobileNonVehicleDropdown:function(t){this.mobileNonVehicleActive===t?this.mobileNonVehicleActive=40:this.mobileNonVehicleActive=t},subdropdownOpen:function(t){this.subdropdownIsOpen&&t?this.subdropdownIsOpen=!1:!this.subdropdownIsOpen&&t&&(this.subdropdownIsOpen=!0)},toggleVehicleType:function(t){this.vehicleTypeActive=t},del:function(t){this.$el.contains(t.target)||(this.mobileDropdown=!1)}}},l=c,u=(e("fd46"),e("2877")),d=Object(u["a"])(l,a,o,!1,null,"4b9359ff",null),v=d.exports,f=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"nissan-footer"},[e("footer",{staticClass:"footer"},[e("nav",{staticClass:"footer-nav top"},[e("div",{staticClass:"grid-row"},[t._l(t.mainNavigation,(function(i,n){return e("div",{key:n,staticClass:"grid-col col-3"},[1===i.active?e("h5",{staticClass:"accordion-title",on:{click:function(i){return i.preventDefault(),t.toggle(n)}}},[e("a",{class:["accordion-toggle",{show:t.isVisible(n)}],attrs:{href:i-t.url}},[t._v(t._s(i.title))])]):t._e(),e("ul",{class:["accordion",{show:t.isVisible(n)}]},t._l(i.children,(function(i,n){return e("li",{key:n},[1===i.active?e("a",{attrs:{title:i.title,href:i.url,target:i.target}},[e("span",[t._v(t._s(i.title))])]):t._e()])})),0)])})),e("div",{staticClass:"grid-col col-3"},[e("h5",[e("a",[t._v(t._s(t.socialNavigation.title))])]),e("ul",{staticClass:"footer-social"},[e("li",t._l(t.socialNavigation.schema,(function(t,i){return e("a",{key:i,class:["icon",t.icon],attrs:{target:t.target,href:t.url,rel:""}})})),0)])]),e("div",{staticClass:"clearfix"})],2)]),e("nav",{staticClass:"footer-nav bottom"},[e("div",{staticClass:"grid-row"},[e("div",{staticClass:"grid-col col-6"},[e("ul",t._l(t.optionsNavigation.schema,(function(i,n){return e("li",{key:n},[1===i.active?e("a",{attrs:{href:i.url,title:""}},[t._v(t._s(i.title))]):t._e()])})),0)]),e("div",{staticClass:"grid-col col-6"},[e("ul",[t._l(t.legalNavigation.schema,(function(i,n){return e("li",{key:n},[1===i.active?e("a",{attrs:{href:i.url,title:""}},[t._v(t._s(i.title))]):t._e()])})),e("li",[e("a",{staticClass:"footer-copyright"},[t._v(t._s(t.footerTrademark))])])],2)])])])])])},h=[],p=(e("a9e3"),{name:"Footer",props:{url:{type:String}},created:function(){"HEADER_FOOTER_SETTINGS"in window?this.fetchNavigation(window.HEADER_FOOTER_SETTINGS.apiUri):this.url&&this.fetchNavigation(this.url)},data:function(){return{visibleIndex:null,basicInformation:[],mainNavigation:[],socialNavigation:[],optionsNavigation:[],legalNavigation:[]}},computed:{footerTrademark:function(){return this.basicInformation&&this.basicInformation.meta&&this.basicInformation.meta.footer_trademark}},methods:{fetchNavigation:function(t){var i=this;s.a.get(t).then((function(t){i.basicInformation=t.data,i.mainNavigation=t.data.footer.schema,i.socialNavigation=t.data.social,i.optionsNavigation=t.data.footer_options,i.legalNavigation=t.data.footer_legal}))},isVisible:function(t){return this.visibleIndex===t},toggle:function(t){this.visibleIndex===t?this.visibleIndex=null:this.visibleIndex=Number(t)},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}}),m=p,b=(e("3c0c"),Object(u["a"])(m,f,h,!1,null,"33b43310",null)),g=b.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(v)}}).$mount("#rna-header"),new n["a"]({render:function(t){return t(g)}}).$mount("#rna-footer")},8926:function(t,i,e){},fd46:function(t,i,e){"use strict";e("411a")}});
//# sourceMappingURL=app.js.map