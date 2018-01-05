!function(e){e.$fuse$=e;e.pkg("default",{},function(r){return r.file("main.js",function(r,t,n,i,a){"use strict";var o=this&&this.__awaiter||function(e,r,t,n){return new(t||(t=Promise))(function(i,a){function o(e){try{l(n.next(e))}catch(e){a(e)}}function s(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){e.done?i(e.value):new t(function(r){r(e.value)}).then(o,s)}l((n=n.apply(e,r||[])).next())})},s=this&&this.__generator||function(e,r){var t,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(i=n[2&a[0]?"return":a[0]?"throw":"next"])&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[0,i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=r.call(e,o)}catch(e){a=[6,e],n=0}finally{t=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};Object.defineProperty(r,"__esModule",{value:!0});r.configure=function(r){return o(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return r.use.standardConfiguration(),e.import("process").env.devMode&&r.use.developmentLogging(),r.use.plugin("aurelia-materialize-bridge",function(e){return e.useAll().preventWavesAttach()}),[4,r.start()];case 1:return t.sent(),[4,r.setRoot("app")];case 2:return t.sent(),[2]}})})}}),r.file("app.html",function(e,r,t,n,i){t.exports.default='<template>\r\n\r\n  <require from="./components/main-footer.html"></require>\r\n  <require from="./components/nav-bar"></require>\r\n\r\n  <md-colors md-primary-color="#29B6F6" md-accent-color="#FF9800"></md-colors>\r\n\r\n  <nav-bar router.bind="router"></nav-bar>\r\n  <div class="main">\r\n    <router-view></router-view>\r\n  </div>\r\n\r\n\r\n  <main-footer></main-footer>\r\n\r\n</template>\r\n'}),r.file("app.js",function(e,r,t,n,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function e(){}return e.prototype.configureRouter=function(e,r){e.title="Aurelia",e.map([{route:["","welcome"],name:"welcome",moduleId:"./routes/welcome",nav:!0,title:"Fusebox Aurelia Seed"},{route:"aurelia-materialize-bridge",name:"mat-bridge",moduleId:"./routes/mat-bridge",nav:!0,title:"Materialize-Bridge"},{route:"aurelia-kendoui-bridge",name:"kendo-bridge",moduleId:"./routes/kendo-bridge",nav:!0,title:"KendoUi-Bridge"},{route:"v-grid",name:"v-grid",moduleId:"./routes/v-grid",nav:!0,title:"V-Grid"}]),this.router=r},e}();e.App=a}),r.file("components/main-footer.html",function(e,r,t,n,i){t.exports.default='<template>\r\n  <footer md-footer class="orange">\r\n    <div class="container">\r\n      <div class="row">\r\n        <div class="col l6 s12">\r\n          <h5 class="white-text">About Sample</h5>\r\n          <p class="grey-text text-lighten-4">Sample is containing a lot of links to fusebox and aurelia components etc, figured I could have something useful in a sample</p>\r\n        </div>\r\n        <div class="col l3 s12">\r\n          <h5 class="white-text">Sites</h5>\r\n          <ul>\r\n            <li><a class="white-text" href="http://fuse-box.org/">Fuse-box Docs</a></li>\r\n            <li><a class="white-text" href="http://aurelia.io/">Aurelia</a></li>\r\n            <li><a class="white-text" href="http://aurelia.io/hub.html#/doc/persona/developer">Aurelia Docs</a></li>\r\n            <li><a class="white-text" href="http://materializecss.com/">Materializecss</a></li>\r\n          </ul>\r\n        </div>\r\n        <div class="col l3 s12">\r\n          <h5 class="white-text">Github repos</h5>\r\n          <ul>\r\n            <li><a class="white-text" href="https://github.com/fuse-box/fuse-box">Fusebox</a></li>\r\n            <li><a class="white-text" href="https://github.com/fuse-box/fuse-box-aurelia-loader">Fusebox-Aurelia-Loader</a></li>\r\n            <li><a class="white-text" href="https://github.com/fuse-box/fuse-box-aurelia-seed">Fusebox-Aurelia-Seed</a></li>\r\n            <li><a class="white-text" href="https://github.com/behzad888/awesome-aurelia">Awesome Aurelia</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="footer-copyright">\r\n      <div class="container">\r\n        Template by <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</template>\r\n'}),r.file("components/nav-bar.html",function(e,r,t,n,i){t.exports.default='<template>\r\n    <nav class="light-blue lighten-1" role="navigation">\r\n        <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Fusebox</a>\r\n            <ul class="right hide-on-med-and-down">\r\n                <li repeat.for="row of router.navigation" md-waves>\r\n                    <a href.bind="row.href" class="${ row.isActive ? \'active\' : \'\' }">${row.title}</a>\r\n                </li>\r\n            </ul>\r\n\r\n            <ul id="nav-mobile" class="side-nav">\r\n                <li repeat.for="row of router.navigation">\r\n                    <a href.bind="row.href" class="${ row.isActive ? \'active\' : \'\' }">${row.title}</a>\r\n                </li>\r\n            </ul>\r\n            <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>\r\n        </div>\r\n    </nav>\r\n</template>'}),r.file("components/nav-bar.js",function(e,r,t,n,i){"use strict";var a=this&&this.__decorate||function(e,r,t,n){var i,a=arguments.length,o=a<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,r,t,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(r,t,o):i(r,t))||o);return a>3&&o&&Object.defineProperty(r,t,o),o},o=this&&this.__metadata||function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)};Object.defineProperty(e,"__esModule",{value:!0});var s=r("aurelia-router"),l=r("aurelia-framework"),u=function(){function e(e){this.router=e}return e.prototype.attached=function(){$(".button-collapse").sideNav({closeOnClick:!0,draggable:!0})},e=a([l.inject(s.Router),o("design:paramtypes",["function"==typeof(r=void 0!==s.Router&&s.Router)&&r||Object])],e);var r}();e.NavBar=u}),r.file("routes/kendo-bridge.html",function(e,r,t,n,i){t.exports.default='<template>\r\n    <div class="section no-pad-bot" id="index-banner">\r\n        <div class="container">\r\n            <br><br>\r\n            <h1 class="header center orange-text">Aurelia-KendoUI-Bridge</h1>\r\n            <div class="row center">\r\n                <h5 class="header col s12 light">Aurelia components for kendo-ui</h5>\r\n            </div>\r\n            <div class="row center">\r\n                <a md-button="large: true;" md-waves="color: light;" href="https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge" id="download-button">Get Started</a>\r\n            </div>\r\n            <br><br>\r\n        </div>\r\n    </div>\r\n</template>'}),r.file("routes/kendo-bridge.js",function(e,r,t,n,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){return function(){}}();e.KendoBridge=a}),r.file("routes/mat-bridge.html",function(e,r,t,n,i){t.exports.default='<template>\r\n    <div class="section no-pad-bot" id="index-banner">\r\n        <div class="container">\r\n            <br><br>\r\n            <h1 class="header center orange-text">Aurelia-Materialize-Bridge</h1>\r\n            <div class="row center">\r\n                <h5 class="header col s12 light">Aurelia components for materializecss</h5>\r\n            </div>\r\n            <div class="row center">\r\n                <a md-button="large: true;" md-waves="color: light;" href="https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge" id="download-button">Get Started</a>\r\n            </div>\r\n            <br><br>\r\n        </div>\r\n    </div>\r\n</template>'}),r.file("routes/mat-bridge.js",function(e,r,t,n,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){return function(){}}();e.MatBridge=a}),r.file("routes/v-grid.html",function(e,r,t,n,i){t.exports.default='<template>\r\n    <div class="section no-pad-bot" id="index-banner">\r\n        <div class="container">\r\n            <br><br>\r\n            <h1 class="header center orange-text">Aurelia-V-Grid</h1>\r\n            <div class="row center">\r\n                <h5 class="header col s12 light">Experimental datagrid made with Aurelia</h5>\r\n            </div>\r\n            <div class="row center">\r\n                <a md-button="large: true;" md-waves="color: light;" href="https://github.com/vegarringdal/vGrid" id="download-button">Get Started</a>\r\n            </div>\r\n            <br><br>\r\n        </div>\r\n    </div>\r\n</template>'}),r.file("routes/v-grid.js",function(e,r,t,n,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){return function(){}}();e.VGrid=a}),r.file("routes/welcome.html",function(e,r,t,n,i){t.exports.default='<template>\r\n  <div class="section no-pad-bot" id="index-banner">\r\n    <div class="container">\r\n      <br><br>\r\n      <h1 class="header center orange-text">Fusebox Aurelia Seed</h1>\r\n      <div class="row center">\r\n        <h5 class="header col s12 light">Sample based on Material Design starter template</h5>\r\n      </div>\r\n      <div class="row center">\r\n        <a md-button="large: true;" md-waves="color: light;" href="http://fuse-box.org:3333" id="download-button">Get Started Fusebox</a>\r\n      </div>\r\n      <br><br>\r\n\r\n    </div>\r\n  </div>\r\n  <div class="container">\r\n    <div class="section">\r\n\r\n      \x3c!--   Icon Section   --\x3e\r\n      <div class="row">\r\n        <div class="col s12 m4">\r\n          <div class="icon-block">\r\n            <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>\r\n            <h5 class="center">Speed</h5>\r\n\r\n            <p class="light">It is blazing fast (it takes 50-100ms to re-bundle) which makes it extremely convenient for developers. It requires zero configuration to bundle such monsters like babel-core.</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="col s12 m4">\r\n          <div class="icon-block">\r\n            <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>\r\n            <h5 class="center">Fun</h5>\r\n\r\n            <p class="light">FuseBox is a bundler/module loader that combines the power of webpack, JSPM and SystemJS.</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="col s12 m4">\r\n          <div class="icon-block">\r\n            <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>\r\n            <h5 class="center">API</h5>\r\n\r\n            <p class="light">FuseBox loves typescript, and does not require any additional configuration. It will compile and bundle your code within a fraction of a second, yet offering a comprehensive loader API.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <br><br>\r\n\r\n    <div class="section">\r\n\r\n    </div>\r\n  </div>\r\n</template>'}),r.file("routes/welcome.js",function(e,r,t,n,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){return function(){}}();e.Welcome=a}),r.entry="main.ts"}),e.import("fuse-box-aurelia-loader"),e.import("aurelia-bootstrapper"),e.target="browser",e.import("default/main.js"),e.main("default/main.js")}(function(e){function r(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var t=[],n=0,i=arguments.length;n<i;n++)t=t.concat(arguments[n].split("/"));var a=[];for(n=0,i=t.length;n<i;n++){var o=t[n];o&&"."!==o&&(".."===o?a.pop():a.push(o))}return""===t[0]&&a.unshift(""),a.join("/")||(a.length?"/":".")}function t(e,r){for(var t in e)e.hasOwnProperty(t)&&r(t,e[t])}function n(e){return{server:require(e)}}function i(e,t){var i=t.path||"./",a=t.pkg||"default",o=function(e){var r=e.charCodeAt(0),t=e.charCodeAt(1);if((l||58!==t)&&(r>=97&&r<=122||64===r)){if(64===r){var n=e.split("/"),i=n.splice(2,n.length).join("/");return[n[0]+"/"+n[1],i||void 0]}var a=e.indexOf("/");return-1===a?[e]:[e.substring(0,a),e.substring(a+1)]}}(e);if(o&&(i="./",a=o[0],t.v&&t.v[a]&&(a=a+"@"+t.v[a]),e=o[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),i="./";else if(!l&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return n(e);var s=d[a];if(!s){if(l&&"electron"!==v.target)throw"Package not found "+a;return n(a+(e?"/"+e:""))}var u,c=r(i,e=e||"./"+s.s.entry),f=function(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}(c),p=s.f[f];return!p&&f.indexOf("*")>-1&&(u=f),p||u||(f=r(c,"/","index.js"),p=s.f[f],p||"."!==c||(f=s.s&&s.s.entry||"index.js",p=s.f[f]),p||(f=c+".js",p=s.f[f]),p||(p=s.f[c+".jsx"]),p||(f=c+"/index.jsx",p=s.f[f])),{file:p,wildcard:u,pkgName:a,versions:s.v,filePath:c,validPath:f}}function a(e,r){var t=f[e];if(t)for(var n in t){if(!1===t[n].apply(null,r))return!1}}function o(e,t){if(void 0===t&&(t={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return function(e){if(l){var r,t=document,n=t.getElementsByTagName("head")[0];/\.css$/.test(e)?((r=t.createElement("link")).rel="stylesheet",r.type="text/css",r.href=e):((r=t.createElement("script")).type="text/javascript",r.src=e,r.async=!0),n.insertBefore(r,n.firstChild)}}(e);var n=i(e,t);if(n.server)return n.server;var s=n.file;if(n.wildcard){var c=new RegExp(n.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),f=d[n.pkgName];if(f){var p={};for(var h in f.f)c.test(h)&&(p[h]=o(n.pkgName+"/"+h));return p}}if(!s){var m="function"==typeof t;if(!1===a("async",[e,t]))return;return function(e,t,n){if(void 0===n&&(n={}),!l)return t(/\.(js|json)$/.test(e)?u.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),a=i.responseText;/json/.test(n)?a="module.exports = "+a:/javascript/.test(n)||(a="module.exports = "+JSON.stringify(a));var o=r("./",e);v.dynamic(o,a),t(v.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),t(void 0)},i.open("GET",e,!0),i.send()}(e,function(e){return m?t(e):null},t)}var b=n.pkgName;if(s.locals&&s.locals.module)return s.locals.module.exports;var g,x=s.locals={},w=(g=n.validPath,g.substring(0,g.lastIndexOf("/"))||"./");x.exports={},x.module={exports:x.exports},x.require=function(e,r){return o(e,{pkg:b,path:w,v:n.versions})},l||!u.require.main?x.require.main={filename:"./",paths:[]}:x.require.main=u.require.main;var y=[x.module.exports,x.require,x.module,n.validPath,w,b];return a("before-import",y),s.fn.apply(0,y),a("after-import",y),x.module.exports}if(e.FuseBox)return e.FuseBox;var s="undefined"!=typeof WorkerGlobalScope,l="undefined"!=typeof window&&window.navigator||s,u=l?s?{}:window:global;l&&(u.global=s?{}:window),e=l&&"undefined"==typeof __fbx__dnm__?e:module.exports;var c=l?s?{}:window.__fsbx__=window.__fsbx__||{}:u.$fsbx=u.$fsbx||{};l||(u.require=require);var d=c.p=c.p||{},f=c.e=c.e||{},v=function(){function r(){}return r.global=function(e,r){return void 0===r?u[e]:void(u[e]=r)},r.import=function(e,r){return o(e,r)},r.on=function(e,r){f[e]=f[e]||[],f[e].push(r)},r.exists=function(e){try{return void 0!==i(e,{}).file}catch(e){return!1}},r.remove=function(e){var r=i(e,{}),t=d[r.pkgName];t&&t.f[r.validPath]&&delete t.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var i=r[n].alias,a=o(r[n].pkg);"*"===i?t(a,function(r,t){return e[r]=t}):"object"==typeof i?t(i,function(r,t){return e[t]=a[r]}):e[i]=a};for(var i in r)n(i)},r.dynamic=function(r,t,n){this.pkg(n&&n.pkg||"default",{},function(n){n.file(r,function(r,n,i,a,o){new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",t)(!0,r,n,i,a,o,e)})})},r.flush=function(e){var r=d.default;for(var t in r.f)e&&!e(t)||delete r.f[t].locals},r.pkg=function(e,r,t){if(d[e])return t(d[e].s);var n=d[e]={};return n.f={},n.v=r,n.s={file:function(e,r){return n.f[e]={fn:r}}},t(n.s)},r.addPlugin=function(e){this.plugins.push(e)},r.packages=d,r.isBrowser=l,r.isServer=!l,r.plugins=[],r}();return l||(u.FuseBox=v),e.FuseBox=v}(this));