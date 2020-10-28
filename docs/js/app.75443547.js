(function(e){function t(t){for(var n,s,l=t[0],u=t[1],i=t[2],c=0,v=[];c<l.length;c++)s=l[c],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&v.push(o[s][0]),o[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(v.length)v.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var u=r[s];0!==o[u]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={app:0},a=[];function s(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7920b3e6"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var i=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(c);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,r[1](i)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-todo-practice/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var p=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"3a7d":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("Main")],1)},a=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("TODO LIST")]),r("form",{on:{submit:function(e){e.preventDefault()}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.newItem,expression:"newItem"}],attrs:{type:"text"},domProps:{value:e.newItem},on:{input:function(t){t.target.composing||(e.newItem=t.target.value)}}}),r("button",{on:{click:e.addItem}},[e._v("Add")]),r("ul",e._l(e.tasks,(function(t,n){return r("li",{key:n,class:{isDone:t.isDone}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.isDone,expression:"task.isDone"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isDone)?e._i(t.isDone,null)>-1:t.isDone},on:{change:function(r){var n=t.isDone,o=r.target,a=!!o.checked;if(Array.isArray(n)){var s=null,l=e._i(n,s);o.checked?l<0&&e.$set(t,"isDone",n.concat([s])):l>-1&&e.$set(t,"isDone",n.slice(0,l).concat(n.slice(l+1)))}else e.$set(t,"isDone",a)}}}),e._v(e._s(t.item)),r("button",{on:{click:function(t){return e.deleteItem(n)}}},[e._v("Delete")])])})),0)])])},l=[],u=(r("a434"),{data:function(){return{newItem:null,tasks:[]}},methods:{addItem:function(){if(null!=this.newItem){var e={item:this.newItem,isDone:!1};localStorage.setItem("tasks",JSON.stringify(e)),console.log("localStorage"),this.tasks.push(e),this.newItem=null}},deleteItem:function(e){this.tasks.splice(e,1)}}}),i=u,c=(r("c266"),r("2877")),p=Object(c["a"])(i,s,l,!1,null,null,null),v=p.exports,f={components:{Main:v}},h=f,m=(r("034f"),Object(c["a"])(h,o,a,!1,null,null,null)),d=m.exports,_=(r("d3b7"),r("8c4f")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},b=[],k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},w=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],y={name:"HelloWorld",props:{msg:String}},j=y,O=(r("c1c7"),Object(c["a"])(j,k,w,!1,null,"25d525f8",null)),x=O.exports,D={name:"Home",components:{HelloWorld:x}},I=D,E=Object(c["a"])(I,g,b,!1,null,null,null),P=E.exports;n["a"].use(_["a"]);var $=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],S=new _["a"]({mode:"history",base:"/vue-todo-practice/",routes:$}),A=S;n["a"].config.productionTip=!1,new n["a"]({router:A,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,t,r){},c1c7:function(e,t,r){"use strict";var n=r("fe5e"),o=r.n(n);o.a},c266:function(e,t,r){"use strict";var n=r("3a7d"),o=r.n(n);o.a},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},fe5e:function(e,t,r){}});
//# sourceMappingURL=app.75443547.js.map