(function(i){function e(e){for(var n,s,o=e[0],c=e[1],I=e[2],u=0,f=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(i[n]=c[n]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,I||[]),t()}function t(){for(var i,e=0;e<a.length;e++){for(var t=a[e],n=!0,o=1;o<t.length;o++){var c=t[o];0!==r[c]&&(n=!1)}n&&(a.splice(e--,1),i=s(s.s=t[0]))}return i}var n={},r={app:0},a=[];function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=i,s.c=n,s.d=function(i,e,t){s.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:t})},s.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},s.t=function(i,e){if(1&e&&(i=s(i)),8&e)return i;if(4&e&&"object"===typeof i&&i&&i.__esModule)return i;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var n in i)s.d(t,n,function(e){return i[e]}.bind(null,n));return t},s.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return s.d(e,"a",e),e},s.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var I=0;I<o.length;I++)e(o[I]);var l=c;a.push([0,"chunk-vendors"]),t()})({0:function(i,e,t){i.exports=t("56d7")},"17b5":function(i,e){i.exports="data:image/png;base64,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"},"56d7":function(i,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"container"},[t("Header",{on:{"genres-films":i.setMovies}}),t("Main",{attrs:{films:i.films,tvSeries:i.tvSeries}})],1)},a=[],s=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"searchbar"},[t("div",{staticClass:"row"},[i._m(0),t("div",{staticClass:"col-6"},[t("input",{directives:[{name:"model",rawName:"v-model",value:i.query,expression:"query"}],attrs:{type:"text",placeholder:"Scrivi qui"},domProps:{value:i.query},on:{keyup:function(e){return!e.type.indexOf("key")&&i._k(e.keyCode,"enter",13,e.key,"Enter")?null:i.getMovies.apply(null,arguments)},input:function(e){e.target.composing||(i.query=e.target.value)}}}),t("button",{staticClass:"mx-3",on:{click:i.getMovies}},[i._v("Cerca")])])])])},o=[function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"col-6"},[t("h1",{staticClass:"text-red"},[i._v("BOOLFLIX")])])}],c=t("bc3a"),I=t.n(c),l={name:"Header",data:function(){return{films:[],tvSeries:[],query:"",api_key:"651472fb58ade4f3f9ebcc8537c476f7"}},methods:{getMovies:function(){var i=this;if(!this.query)return this.films=[],void(this.tvSeries=[]);var e={params:{language:"it-IT",query:this.query,api_key:this.api_key}};I.a.all([I.a.get("https://api.themoviedb.org/3/search/movie",e),I.a.get("https://api.themoviedb.org/3/search/tv",e)]).then(I.a.spread((function(e,t){i.films=e.data.results,i.tvSeries=t.data.results,i.$emit("genres-films",i.films,i.tvSeries)})))}}},u=l,f=t("2877"),v=Object(f["a"])(u,s,o,!1,null,null,null),A=v.exports,g=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",[i.films.length?t("h2",[i._v("Film")]):i._e(),t("div",{staticClass:"row"},i._l(i.films,(function(i){return t("Card",{key:i.id,attrs:{item:i}})})),1),i.tvSeries.length?t("h2",[i._v("Serie TV")]):i._e(),t("div",{staticClass:"row"},i._l(i.tvSeries,(function(i){return t("Card",{key:i.id,attrs:{item:i}})})),1)])},p=[],m=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("div",{staticClass:"col-3 my-3"},[n("img",{staticClass:"cover",attrs:{src:i.flagSrc,alt:i.item.title}}),n("div",[i._v(i._s(i.item.title||i.item.name))]),n("div",[i._v(i._s(i.item.original_title||i.item.original_name))]),i.hasFlag?n("div",[n("img",{staticClass:"flag",attrs:{src:t("b967")("./"+i.item.original_language+".png"),alt:i.item.original_language}})]):n("div",[i._v(i._s(i.item.original_language))]),n("div",[n("span",i._l(i.getStars,(function(i,e){return n("i",{key:e,staticClass:"fa-solid fa-star"})})),0),n("span",i._l(i.stars,(function(i,e){return n("i",{key:e,staticClass:"fa-regular fa-star"})})),0)])])},d=[],h=(t("caad"),t("2532"),t("5377"),{name:"Card",props:["item"],data:function(){return{flags:["it","en"],selectedFilms:"",selectedTVSeries:""}},computed:{hasFlag:function(){return this.flags.includes(this.item.original_language)},flagSrc:function(){return this.item.poster_path?"https://image.tmdb.org/t/p/w342/".concat(this.item.poster_path):t("c6be")},getStars:function(){return Math.ceil(this.item.vote_average/2)},stars:function(){return 5-this.getStars}}}),C=h,y=(t("ba5d"),Object(f["a"])(C,m,d,!1,null,"b35aa1ca",null)),w=y.exports,b={name:"Main",components:{Card:w},props:["films","tvSeries"]},E=b,O=Object(f["a"])(E,g,p,!1,null,null,null),M=O.exports,j={name:"App",data:function(){return{films:[],tvSeries:[]}},components:{Header:A,Main:M},methods:{setMovies:function(i,e){this.films=i,this.tvSeries=e}}},S=j,x=(t("5c0b"),Object(f["a"])(S,r,a,!1,null,null,null)),B=x.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(i){return i(B)}}).$mount("#app")},"5c0b":function(i,e,t){"use strict";t("9c0c")},6978:function(i,e,t){},"9c0c":function(i,e,t){},b967:function(i,e,t){var n={"./en.png":"17b5","./it.png":"e33f"};function r(i){var e=a(i);return t(e)}function a(i){if(!t.o(n,i)){var e=new Error("Cannot find module '"+i+"'");throw e.code="MODULE_NOT_FOUND",e}return n[i]}r.keys=function(){return Object.keys(n)},r.resolve=a,i.exports=r,r.id="b967"},ba5d:function(i,e,t){"use strict";t("6978")},c6be:function(i,e,t){i.exports=t.p+"img/no-poster-available.9d2927a5.jpg"},e33f:function(i,e){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAELBAMAAAAFMM1/AAAAFVBMVEX///8AkkbOKzf10tWY07QAjT7NJTJXwIMQAAAA8UlEQVR42u3PwQAAAAgEsBRSCCKS/FmCuO9msOrYVWwnJiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIikniFNUdjvhgMbwAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.27418a51.js.map