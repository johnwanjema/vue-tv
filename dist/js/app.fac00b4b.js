(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],p=0,v=[];p<s.length;p++)o=s[p],i[o]&&v.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==i[c]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},i={app:0},n=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"05ce":function(t,e,a){},"3f42":function(t,e,a){t.exports=a.p+"img/retro-tv.6813646a.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),i=a("bc3a"),n=a.n(i),o={},s=n.a.create(o);s.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),s.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,e){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},r["a"].use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("app-navbar"),a("v-content",[a("router-view")],1),a("v-footer",[a("app-footer")],1)],1)},l=[],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",[r("v-app-bar",{attrs:{dark:"",app:"",flat:""}},[r("v-app-bar-nav-icon",{attrs:{id:"drawerIcon"},on:{click:function(e){t.drawer=!t.drawer}}}),r("v-toolbar-title",{staticClass:"text-uppercase white--text"},[r("span",{staticClass:"font-weight-light"},[t._v("vue")]),r("span",[t._v("TV")])])],1),r("v-navigation-drawer",{attrs:{app:"",color:"indigo accent-2"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-layout",{attrs:{column:"","align-center":""}},[r("v-flex",{staticClass:"my-5"},[r("v-img",{attrs:{"max-width":"100px",src:a("3f42")}})],1)],1),t._l(t.links,function(e){return r("v-list-item",{key:e.text,attrs:{router:"",to:e.route}},[r("v-list-item-action",[r("v-icon",{staticClass:"white--text"},[t._v(t._s(e.icon))])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"white--text"},[t._v(t._s(e.text))])],1)],1)})],2)],1)},p=[],v={data:function(){return{drawer:!1,links:[{icon:"mdi-home",text:"Home",route:"/"},{icon:"mdi-filmstrip",text:"Movies Playing Now",route:"/movies-playing-now"},{icon:"mdi-trophy",text:"Top Rated Movies",route:"/top-rated-movies"},{icon:"mdi-television-classic",text:"Popular Shows",route:"/popular-shows"},{icon:"mdi-medal",text:"Top Rated Shows",route:"/top-rated-shows"},{icon:"mdi-information",text:"About",route:"/about"}]}}},f=v,g=a("2877"),d=a("6544"),m=a.n(d),h=a("40dc"),y=a("5bc1"),_=a("0e8f"),w=a("132d"),b=a("adda"),x=a("a722"),C=a("da13"),V=a("1800"),P=a("5d23"),B=a("f774"),k=a("2a7f"),T=Object(g["a"])(f,u,p,!1,null,"befba2f8",null),j=T.exports;m()(T,{VAppBar:h["a"],VAppBarNavIcon:y["a"],VFlex:_["a"],VIcon:w["a"],VImg:b["a"],VLayout:x["a"],VListItem:C["a"],VListItemAction:V["a"],VListItemContent:P["a"],VListItemTitle:P["b"],VNavigationDrawer:B["a"],VToolbarTitle:k["a"]});var S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[a("v-btn",{staticClass:"mx-5",attrs:{fab:"",text:"",href:"https://github.com/ClaytonMatulich",target:"_blank"}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-github-circle")])],1),a("v-btn",{staticClass:"mx-5",attrs:{fab:"",text:"",href:"https://www.linkedin.com/in/claytonmatulich/",target:"_blank"}},[a("v-icon",{attrs:{large:""}},[t._v("mdi-linkedin")])],1),a("v-btn",{staticClass:"mx-5",attrs:{fab:"",text:"",href:"mailto:clayton@matulich.dev",target:"_blank"}},[a("v-icon",{attrs:{arge:""}},[t._v("mdi-at")])],1)],1)],1)},R=[],L={},M=L,O=a("8336"),E=a("a523"),U=Object(g["a"])(M,S,R,!1,null,"1eee87f5",null),I=U.exports;m()(U,{VBtn:O["a"],VContainer:E["a"],VIcon:w["a"],VLayout:x["a"]});var $={name:"App",components:{appNavbar:j,appFooter:I},data:function(){return{}}},A=$,D=a("7496"),N=a("a75b"),F=a("553a"),H=Object(g["a"])(A,c,l,!1,null,null,null),G=H.exports;m()(H,{VApp:D["a"],VContent:N["a"],VFooter:F["a"]});var q=a("8c4f"),J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{staticClass:"my-5 text-center",attrs:{"align-center":"","justify-space-around":"",column:"","fill-height":"",wrap:""}},[r("h1",{staticClass:"display-3 my-3 font-weight-thin white--text my-5"},[t._v("Discover Movies and Shows with VueTV")]),r("v-img",{attrs:{contain:"",width:"50vw",height:"50vh",src:a("ce9c")}}),r("v-btn",{staticClass:"my-5",attrs:{color:"primary","min-width":"200",router:"",to:"/movies-playing-now"}},[t._v("Explore")])],1)],1)},z=[],K={components:{},data:function(){return{}}},Q=K,W=Object(g["a"])(Q,J,z,!1,null,null,null),X=W.exports;m()(W,{VBtn:O["a"],VContainer:E["a"],VImg:b["a"],VLayout:x["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("media-nav",{attrs:{pageTitle:t.pageTitle,sortCriteria:t.sortCriteria},on:{popularity:function(e){return t.sortBy("popularity")},vote_average:function(e){return t.sortBy("vote_average")},release_date:function(e){return t.sortBy("release_date")}}}),a("media-grid",{attrs:{movies:t.movies,imageURL:t.imageURL}}),t.showPagination?a("div",{staticClass:"text-center"},[a("v-pagination",{attrs:{color:"primary",length:3,value:t.page},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()],1)},Z=[],tt=(a("55dd"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},t._l(t.movies,function(e){return a("v-flex",{key:e.id,attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[a("v-card",{staticClass:"ma-3",attrs:{hover:"","min-height":"500"}},[a("v-layout",{staticClass:"text-center",attrs:{column:"","align-center":"","fill-height":""}},[a("v-img",{attrs:{src:t.imageURL+e.backdrop_path}}),a("v-card-title",{staticClass:"font-weight-light"},[t._v(t._s(e.title||e.name))]),a("v-spacer"),a("v-card-text",[a("v-expansion-panels",{attrs:{focusable:""}},[a("v-expansion-panel",{attrs:{id:"synopsis"}},[a("v-expansion-panel-header",[t._v("Synopsis")]),a("v-expansion-panel-content",[t._v(t._s(e.overview))])],1)],1)],1),a("v-progress-circular",{staticClass:"font-weight-heavy my-5",attrs:{size:"90",color:"white",rotate:"-90",width:"8",value:10*e.vote_average}},[t._v(t._s(10*e.vote_average))])],1)],1)],1)}),1)}),et=[],at={props:["movies","imageURL"],data:function(){return{}}},rt=at,it=(a("b6e0"),a("b0af")),nt=a("99d9"),ot=a("cd55"),st=a("49e2"),ct=a("c865"),lt=a("0393"),ut=a("490a"),pt=a("2fa4"),vt=Object(g["a"])(rt,tt,et,!1,null,"31aebf58",null),ft=vt.exports;m()(vt,{VCard:it["a"],VCardText:nt["a"],VCardTitle:nt["b"],VExpansionPanel:ot["a"],VExpansionPanelContent:st["a"],VExpansionPanelHeader:ct["a"],VExpansionPanels:lt["a"],VFlex:_["a"],VImg:b["a"],VLayout:x["a"],VProgressCircular:ut["a"],VSpacer:pt["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"mt-3 mr-4",attrs:{"justify-end":"",row:""}},[a("v-flex",{staticClass:"ml-5",attrs:{"align-self-center":""}},[a("h1",{staticClass:"display-1 font-weight-light"},[t._v(t._s(t.pageTitle))]),a("h5",{staticClass:"font-weight-light"},[t._v(t._s(t.sortCriteria))])]),a("v-spacer"),a("v-flex",{staticClass:"my-3",attrs:{"align-self-center":""}},[a("div",{staticClass:"text-sm-end"},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({staticClass:"criteriaSelector mx-3 mt-3",attrs:{small:"",color:"primary"},on:{click:function(e){return t.sortBy("popularity")}}},r),[a("v-icon",{attrs:{left:""}},[t._v("mdi-account-heart")]),a("span",{staticClass:"caption text-lowercase"},[t._v("By popularity")])],1)]}}])},[a("span",[t._v("Sort movies by popularity")])]),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({staticClass:"criteriaSelector mx-3 mt-3",attrs:{small:"",color:"primary"},on:{click:function(e){return t.sortBy("vote_average")}}},r),[a("v-icon",{attrs:{left:""}},[t._v("mdi-star")]),a("span",{staticClass:"caption text-lowercase"},[t._v("By rating")])],1)]}}])},[a("span",[t._v("Sort movies by rating")])]),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[a("v-btn",t._g({staticClass:"criteriaSelector mx-3 mt-3",attrs:{small:"",color:"primary"},on:{click:function(e){return t.sortBy("release_date")}}},r),[a("v-icon",{attrs:{left:""}},[t._v("mdi-calendar")]),a("span",{staticClass:"caption text-lowercase"},[t._v("By release date")])],1)]}}])},[a("span",[t._v("Sort movies by release date")])])],1)])],1)},dt=[],mt={props:["pageTitle","sortCriteria"],data:function(){return{}},methods:{sortBy:function(t){this.$emit(t)}}},ht=mt,yt=a("3a2f"),_t=Object(g["a"])(ht,gt,dt,!1,null,"64bf1bb4",null),wt=_t.exports;m()(_t,{VBtn:O["a"],VFlex:_["a"],VIcon:w["a"],VLayout:x["a"],VSpacer:pt["a"],VTooltip:yt["a"]});var bt={components:{mediaGrid:ft,mediaNav:wt},data:function(){return{movies:[],pageTitle:"Movies Playing Now",imageURL:"https://image.tmdb.org/t/p/w1280",sortCriteria:"Most Popular",sortedBy:"popularity",page:1,showPagination:!1}},methods:{init:function(){var t=this,e="6e95d1c6cf02574f6938fc26b4c30a1a";n.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key="+e+"&language=en-US&page="+this.page).then(function(e){t.movies=e.data.results}).catch(function(t){console.log(t)}).finally(function(){t.sortBy(t.sortedBy),t.showPagination=!0})},sortBy:function(t){"popularity"===t?this.sortCriteria="Most Popular":"vote_average"===t?this.sortCriteria="Highest Rated":"release_date"===t&&(this.sortCriteria="Release Date"),this.sortedBy=t,this.movies.sort(function(e,a){return e[t]>a[t]?-1:1})}},watch:{page:function(t){this.init()}},mounted:function(){this.init()}},xt=bt,Ct=a("891e"),Vt=Object(g["a"])(xt,Y,Z,!1,null,"7be4f53d",null),Pt=Vt.exports;m()(Vt,{VContainer:E["a"],VPagination:Ct["a"]});var Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("media-nav",{attrs:{pageTitle:t.pageTitle,sortCriteria:t.sortCriteria},on:{popularity:function(e){return t.sortBy("popularity")},vote_average:function(e){return t.sortBy("vote_average")},release_date:function(e){return t.sortBy("release_date")}}}),a("media-grid",{attrs:{movies:t.movies,imageURL:t.imageURL}}),t.showPagination?a("div",{staticClass:"text-center"},[a("v-pagination",{attrs:{color:"primary",length:3,value:t.page},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()],1)},kt=[],Tt={components:{mediaGrid:ft,mediaNav:wt},data:function(){return{movies:[],imageURL:"https://image.tmdb.org/t/p/w1280",sortCriteria:"Most Popular",pageTitle:"Top Rated Movies",sortedBy:"popularity",page:1,showPagination:!1}},methods:{init:function(){var t=this,e="6e95d1c6cf02574f6938fc26b4c30a1a";n.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key="+e+"&language=en-US&page="+this.page).then(function(e){t.movies=e.data.results}).catch(function(t){console.log(t)}).finally(function(){t.sortBy(t.sortedBy),t.showPagination=!0})},sortBy:function(t){"popularity"===t?this.sortCriteria="Most Popular":"vote_average"===t?this.sortCriteria="Highest Rated":"release_date"===t&&(this.sortCriteria="Release Date"),this.sortedBy=t,this.movies.sort(function(e,a){return e[t]>a[t]?-1:1})}},watch:{page:function(t){this.init()}},mounted:function(){this.init()}},jt=Tt,St=Object(g["a"])(jt,Bt,kt,!1,null,null,null),Rt=St.exports;m()(St,{VContainer:E["a"],VPagination:Ct["a"]});var Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("media-nav",{attrs:{pageTitle:t.pageTitle,sortCriteria:t.sortCriteria},on:{popularity:function(e){return t.sortBy("popularity")},vote_average:function(e){return t.sortBy("vote_average")},release_date:function(e){return t.sortBy("release_date")}}}),a("media-grid",{attrs:{movies:t.shows,imageURL:t.imageURL}}),t.showPagination?a("div",{staticClass:"text-center"},[a("v-pagination",{attrs:{color:"primary",length:3,value:t.page},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()],1)},Mt=[],Ot={components:{mediaGrid:ft,mediaNav:wt},data:function(){return{shows:[],pageTitle:"Popular Shows",imageURL:"https://image.tmdb.org/t/p/w1280",sortCriteria:"Most Popular",sortedBy:"popularity",page:1,showPagination:!1}},methods:{init:function(){var t=this,e="6e95d1c6cf02574f6938fc26b4c30a1a";n.a.get("https://api.themoviedb.org/3/tv/popular?api_key="+e+"&language=en-US&page="+this.page).then(function(e){t.shows=e.data.results}).catch(function(t){console.log(t)}).finally(function(){t.sortBy(t.sortedBy),t.showPagination=!0})},sortBy:function(t){console.log(t),"popularity"===t?this.sortCriteria="Most Popular":"vote_average"===t?this.sortCriteria="Highest Rated":"release_date"===t&&(t="first_air_date",this.sortCriteria="Release Date"),this.sortedBy=t,this.shows.sort(function(e,a){return e[t]>a[t]?-1:1})}},watch:{page:function(t){this.init()}},mounted:function(){this.init()}},Et=Ot,Ut=Object(g["a"])(Et,Lt,Mt,!1,null,null,null),It=Ut.exports;m()(Ut,{VContainer:E["a"],VPagination:Ct["a"]});var $t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("media-nav",{attrs:{pageTitle:t.pageTitle,sortCriteria:t.sortCriteria},on:{popularity:function(e){return t.sortBy("popularity")},vote_average:function(e){return t.sortBy("vote_average")},release_date:function(e){return t.sortBy("release_date")}}}),a("media-grid",{attrs:{movies:t.shows,imageURL:t.imageURL}}),t.showPagination?a("div",{staticClass:"text-center"},[a("v-pagination",{attrs:{color:"primary",length:3,value:t.page},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1):t._e()],1)},At=[],Dt={components:{mediaGrid:ft,mediaNav:wt},data:function(){return{shows:[],pageTitle:"Top Rated Shows",imageURL:"https://image.tmdb.org/t/p/w1280",sortCriteria:"Most Popular",sortedBy:"popularity",page:1,showPagination:!1}},methods:{init:function(){var t=this,e="6e95d1c6cf02574f6938fc26b4c30a1a";n.a.get("https://api.themoviedb.org/3/tv/top_rated?api_key="+e+"&language=en-US&page="+this.page).then(function(e){t.shows=e.data.results}).catch(function(t){console.log(t)}).finally(function(){t.sortBy(t.sortedBy),t.showPagination=!0})},sortBy:function(t){console.log(t),"popularity"===t?this.sortCriteria="Most Popular":"vote_average"===t?this.sortCriteria="Highest Rated":"release_date"===t&&(t="first_air_date",this.sortCriteria="Release Date"),this.sortedBy=t,this.shows.sort(function(e,a){return e[t]>a[t]?-1:1})}},watch:{page:function(t){this.init()}},mounted:function(){this.init()}},Nt=Dt,Ft=Object(g["a"])(Nt,$t,At,!1,null,null,null),Ht=Ft.exports;m()(Ft,{VContainer:E["a"],VPagination:Ct["a"]});var Gt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{staticClass:"text-center",attrs:{"align-center":"","justify-center":"",column:"",wrap:"","fill-height":""}},[r("h1",{staticClass:"font-weight-light ma-5"},[t._v("About")]),r("v-avatar",{attrs:{size:"300"}},[r("img",{attrs:{src:a("c496")}})]),r("blockquote",{staticClass:"blockquote ma-5"},[t._v("My name is Clayton Matulich. VueTV is my first practice project using Vue JS. It is a movie and tv show discovery website that features a few different criteria and sorting features. Each movie and show is presented with its poster, rating, and synopsis from The Movie Database API.")])],1)],1)},qt=[],Jt={},zt=Jt,Kt=a("8212"),Qt=Object(g["a"])(zt,Gt,qt,!1,null,null,null),Wt=Qt.exports;m()(Qt,{VAvatar:Kt["a"],VContainer:E["a"],VLayout:x["a"]}),r["a"].use(q["a"]);var Xt=new q["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:X},{path:"/movies-playing-now",name:"moviesplayingnow",component:Pt},{path:"/top-rated-movies",name:"topratedmovies",component:Rt},{path:"/popular-shows",name:"popularshows",component:It},{path:"/top-rated-shows",name:"topratedshows",component:Ht},{path:"/about",name:"about",component:Wt}]}),Yt=a("f309"),Zt=a("fcf4");r["a"].use(Yt["a"]);var te=new Yt["a"]({icons:{iconfont:"mdi"},theme:{dark:!0,themes:{dark:{primary:Zt["a"].indigo.accent2,secondary:Zt["a"].indigo.accent1,accent:"#29E7CD",info:"#FC642D",error:"#b71c1c"}}}});r["a"].config.productionTip=!1,new r["a"]({router:Xt,vuetify:te,render:function(t){return t(G)}}).$mount("#app")},b6e0:function(t,e,a){"use strict";var r=a("05ce"),i=a.n(r);i.a},c496:function(t,e,a){t.exports=a.p+"img/portrait.155b9298.jpg"},ce9c:function(t,e,a){t.exports=a.p+"img/undraw_horror_movie.1867c53b.svg"}});
//# sourceMappingURL=app.fac00b4b.js.map