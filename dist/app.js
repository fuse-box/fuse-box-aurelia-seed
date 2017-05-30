(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.global("__fsbx_css", function (__filename, contents) {
    if (FuseBox.isServer) {
        return;
    }
    var styleId = __filename.replace(/[\.\/]+/g, '-');
    if (styleId.charAt(0) === '-')
        styleId = styleId.substring(1);
    var exists = document.getElementById(styleId);
    if (!exists) {
        //<link href="//fonts.googleapis.com/css?family=Covered+By+Your+Grace" rel="stylesheet" type="text/css">
        var s = document.createElement(contents ? 'style' : 'link');
        s.id = styleId;
        s.type = 'text/css';
        if (contents) {
            s.innerHTML = contents;
        }
        else {
            s.rel = 'stylesheet';
            s.href = __filename;
        }
        document.getElementsByTagName('head')[0].appendChild(s);
    }
    else {
        if (contents) {
            exists.innerHTML = contents;
        }
    }
});
/**
 * Listens to 'async' requets and if the name is a css file
 * wires it to `__fsbx_css`
 */
FuseBox.on('async', function (name) {
    if (FuseBox.isServer) {
        return;
    }
    if (/\.css$/.test(name)) {
        __fsbx_css(name);
        return false;
    }
});

var __process_env__ = {"FB_AU_LOG":false,"FB_AU_RELOAD":false,"devMode":false};
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("main.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("fuse-box-aurelia-loader");
require("aurelia-bootstrapper");
function configure(aurelia) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    aurelia.use
                        .standardConfiguration();
                    if (FuseBox.import('process').env.devMode) {
                        aurelia.use.developmentLogging();
                    }
                    aurelia.use.plugin('aurelia-materialize-bridge', function (b) { return b.useAll().preventWavesAttach(); });
                    return [4, aurelia.start()];
                case 1:
                    _a.sent();
                    return [4, aurelia.setRoot('app')];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    });
}
exports.configure = configure;

});
___scope___.file("app.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\r\n\r\n  <require from=\"./components/main-footer.html\"></require>\r\n  <require from=\"./components/nav-bar\"></require>\r\n\r\n  <md-colors md-primary-color=\"#29B6F6\" md-accent-color=\"#FF9800\"></md-colors>\r\n\r\n  <nav-bar router.bind=\"router\"></nav-bar>\r\n  <div class=\"main\">\r\n    <router-view></router-view>\r\n  </div>\r\n\r\n\r\n  <main-footer></main-footer>\r\n\r\n</template>\r\n"
});
___scope___.file("app.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App = (function () {
    function App() {
    }
    App.prototype.configureRouter = function (config, router) {
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: './routes/welcome', nav: true, title: 'Fusebox Aurelia Seed' },
            { route: 'aurelia-materialize-bridge', name: 'mat-bridge', moduleId: './routes/mat-bridge', nav: true, title: 'Materialize-Bridge' },
            { route: 'aurelia-kendoui-bridge', name: 'kendo-bridge', moduleId: './routes/kendo-bridge', nav: true, title: 'KendoUi-Bridge' },
            { route: 'v-grid', name: 'v-grid', moduleId: './routes/v-grid', nav: true, title: 'V-Grid' }
        ]);
        this.router = router;
    };
    return App;
}());
exports.App = App;

});
___scope___.file("components/main-footer.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\r\n  <footer md-footer class=\"orange\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col l6 s12\">\r\n          <h5 class=\"white-text\">About Sample</h5>\r\n          <p class=\"grey-text text-lighten-4\">Sample is containing a lot of links to fusebox and aurelia components etc, figured I could have something useful in a sample</p>\r\n        </div>\r\n        <div class=\"col l3 s12\">\r\n          <h5 class=\"white-text\">Sites</h5>\r\n          <ul>\r\n            <li><a class=\"white-text\" href=\"http://fuse-box.org/\">Fuse-box Docs</a></li>\r\n            <li><a class=\"white-text\" href=\"http://aurelia.io/\">Aurelia</a></li>\r\n            <li><a class=\"white-text\" href=\"http://aurelia.io/hub.html#/doc/persona/developer\">Aurelia Docs</a></li>\r\n            <li><a class=\"white-text\" href=\"http://materializecss.com/\">Materializecss</a></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col l3 s12\">\r\n          <h5 class=\"white-text\">Github repos</h5>\r\n          <ul>\r\n            <li><a class=\"white-text\" href=\"https://github.com/fuse-box/fuse-box\">Fusebox</a></li>\r\n            <li><a class=\"white-text\" href=\"https://github.com/fuse-box/fuse-box-aurelia-loader\">Fusebox-Aurelia-Loader</a></li>\r\n            <li><a class=\"white-text\" href=\"https://github.com/fuse-box/fuse-box-aurelia-seed\">Fusebox-Aurelia-Seed</a></li>\r\n            <li><a class=\"white-text\" href=\"https://github.com/behzad888/awesome-aurelia\">Awesome Aurelia</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer-copyright\">\r\n      <div class=\"container\">\r\n        Template by <a class=\"orange-text text-lighten-3\" href=\"http://materializecss.com\">Materialize</a>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n</template>\r\n"
});
___scope___.file("components/nav-bar.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\r\n    <nav class=\"light-blue lighten-1\" role=\"navigation\">\r\n        <div class=\"nav-wrapper container\"><a id=\"logo-container\" href=\"#\" class=\"brand-logo\">Fusebox</a>\r\n            <ul class=\"right hide-on-med-and-down\">\r\n                <li repeat.for=\"row of router.navigation\" md-waves>\r\n                    <a href.bind=\"row.href\" class=\"${ row.isActive ? 'active' : '' }\">${row.title}</a>\r\n                </li>\r\n            </ul>\r\n\r\n            <ul id=\"nav-mobile\" class=\"side-nav\">\r\n                <li repeat.for=\"row of router.navigation\">\r\n                    <a href.bind=\"row.href\" class=\"${ row.isActive ? 'active' : '' }\">${row.title}</a>\r\n                </li>\r\n            </ul>\r\n            <a href=\"#\" data-activates=\"nav-mobile\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\r\n        </div>\r\n    </nav>\r\n</template>"
});
___scope___.file("components/nav-bar.js", function(exports, require, module, __filename, __dirname){

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_router_1 = require("aurelia-router");
var aurelia_framework_1 = require("aurelia-framework");
var NavBar = (function () {
    function NavBar(router) {
        this.router = router;
    }
    NavBar.prototype.attached = function () {
        $('.button-collapse').sideNav({
            closeOnClick: true,
            draggable: true
        });
    };
    return NavBar;
}());
NavBar = __decorate([
    aurelia_framework_1.inject(aurelia_router_1.Router),
    __metadata("design:paramtypes", [typeof (_a = typeof aurelia_router_1.Router !== "undefined" && aurelia_router_1.Router) === "function" && _a || Object])
], NavBar);
exports.NavBar = NavBar;
var _a;

});
___scope___.file("routes/kendo-bridge.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\r\n    <div class=\"section no-pad-bot\" id=\"index-banner\">\r\n        <div class=\"container\">\r\n            <br><br>\r\n            <h1 class=\"header center orange-text\">Aurelia-KendoUI-Bridge</h1>\r\n            <div class=\"row center\">\r\n                <h5 class=\"header col s12 light\">Aurelia components for kendo-ui</h5>\r\n            </div>\r\n            <div class=\"row center\">\r\n                <a md-button=\"large: true;\" md-waves=\"color: light;\" href=\"https://github.com/aurelia-ui-toolkits/aurelia-kendoui-bridge\" id=\"download-button\">Get Started</a>\r\n            </div>\r\n            <br><br>\r\n        </div>\r\n    </div>\r\n</template>"
});
___scope___.file("routes/kendo-bridge.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KendoBridge = (function () {
    function KendoBridge() {
    }
    return KendoBridge;
}());
exports.KendoBridge = KendoBridge;

});
___scope___.file("routes/mat-bridge.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\r\n    <div class=\"section no-pad-bot\" id=\"index-banner\">\r\n        <div class=\"container\">\r\n            <br><br>\r\n            <h1 class=\"header center orange-text\">Aurelia-Materialize-Bridge</h1>\r\n            <div class=\"row center\">\r\n                <h5 class=\"header col s12 light\">Aurelia components for materializecss</h5>\r\n            </div>\r\n            <div class=\"row center\">\r\n                <a md-button=\"large: true;\" md-waves=\"color: light;\" href=\"https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge\" id=\"download-button\">Get Started</a>\r\n            </div>\r\n            <br><br>\r\n        </div>\r\n    </div>\r\n</template>"
});
___scope___.file("routes/mat-bridge.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatBridge = (function () {
    function MatBridge() {
    }
    return MatBridge;
}());
exports.MatBridge = MatBridge;

});
___scope___.file("routes/v-grid.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\r\n    <div class=\"section no-pad-bot\" id=\"index-banner\">\r\n        <div class=\"container\">\r\n            <br><br>\r\n            <h1 class=\"header center orange-text\">Aurelia-V-Grid</h1>\r\n            <div class=\"row center\">\r\n                <h5 class=\"header col s12 light\">Experimental datagrid made with Aurelia</h5>\r\n            </div>\r\n            <div class=\"row center\">\r\n                <a md-button=\"large: true;\" md-waves=\"color: light;\" href=\"https://github.com/vegarringdal/vGrid\" id=\"download-button\">Get Started</a>\r\n            </div>\r\n            <br><br>\r\n        </div>\r\n    </div>\r\n</template>"
});
___scope___.file("routes/v-grid.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VGrid = (function () {
    function VGrid() {
    }
    return VGrid;
}());
exports.VGrid = VGrid;

});
___scope___.file("routes/welcome.html", function(exports, require, module, __filename, __dirname){

module.exports.default =  "<template>\r\n  <div class=\"section no-pad-bot\" id=\"index-banner\">\r\n    <div class=\"container\">\r\n      <br><br>\r\n      <h1 class=\"header center orange-text\">Fusebox Aurelia Seed</h1>\r\n      <div class=\"row center\">\r\n        <h5 class=\"header col s12 light\">Sample based on Material Design starter template</h5>\r\n      </div>\r\n      <div class=\"row center\">\r\n        <a md-button=\"large: true;\" md-waves=\"color: light;\" href=\"http://fuse-box.org:3333\" id=\"download-button\">Get Started Fusebox</a>\r\n      </div>\r\n      <br><br>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"section\">\r\n\r\n      <!--   Icon Section   -->\r\n      <div class=\"row\">\r\n        <div class=\"col s12 m4\">\r\n          <div class=\"icon-block\">\r\n            <h2 class=\"center light-blue-text\"><i class=\"material-icons\">flash_on</i></h2>\r\n            <h5 class=\"center\">Speed</h5>\r\n\r\n            <p class=\"light\">It is blazing fast (it takes 50-100ms to re-bundle) which makes it extremely convenient for developers. It requires zero configuration to bundle such monsters like babel-core.</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col s12 m4\">\r\n          <div class=\"icon-block\">\r\n            <h2 class=\"center light-blue-text\"><i class=\"material-icons\">group</i></h2>\r\n            <h5 class=\"center\">Fun</h5>\r\n\r\n            <p class=\"light\">FuseBox is a bundler/module loader that combines the power of webpack, JSPM and SystemJS.</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col s12 m4\">\r\n          <div class=\"icon-block\">\r\n            <h2 class=\"center light-blue-text\"><i class=\"material-icons\">settings</i></h2>\r\n            <h5 class=\"center\">API</h5>\r\n\r\n            <p class=\"light\">FuseBox loves typescript, and does not require any additional configuration. It will compile and bundle your code within a fraction of a second, yet offering a comprehensive loader API.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <br><br>\r\n\r\n    <div class=\"section\">\r\n\r\n    </div>\r\n  </div>\r\n</template>"
});
___scope___.file("routes/welcome.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Welcome = (function () {
    function Welcome() {
    }
    return Welcome;
}());
exports.Welcome = Welcome;

});
});

FuseBox.import("default/main.js");
FuseBox.main("default/main.js");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((d||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(d){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!d&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=h[a];if(!s){if(d&&"electron"!==m.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),p=i(c),v=s.f[p];return!v&&p.indexOf("*")>-1&&(l=p),v||l||(p=t(c,"/","index.js"),v=s.f[p],v||(p=c+".js",v=s.f[p]),v||(v=s.f[c+".jsx"]),v||(p=c+"/index.jsx",v=s.f[p])),{file:v,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:p}}function s(e,r){if(!d)return r(/\.(js|json)$/.test(e)?p.require(e):"");var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState)if(200==n.status){var i=n.getResponseHeader("Content-Type"),o=n.responseText;/json/.test(i)?o="module.exports = "+o:/javascript/.test(i)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);m.dynamic(a,o),r(m.import(e,{}))}else console.error(e,"not found on request"),r(void 0)},n.open("GET",e,!0),n.send()}function l(e,r){var n=g[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=h[t.pkgName];if(u){var v={};for(var g in u.f)a.test(g)&&(v[g]=c(t.pkgName+"/"+g));return v}}if(!i){var m="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return m?r(e):null})}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var w=i.locals={},y=n(t.validPath);w.exports={},w.module={exports:w.exports},w.require=function(e,r){return c(e,{pkg:_,path:y,v:t.versions})},w.require.main={filename:d?"./":p.require.main.filename,paths:d?[]:p.require.main.paths};var b=[w.module.exports,w.require,w.module,t.validPath,y,_];return l("before-import",b),i.fn.apply(0,b),l("after-import",b),w.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof window&&window.navigator,p=d?window:global;d&&(p.global=window),e=d&&"undefined"==typeof __fbx__dnm__?e:module.exports;var v=d?window.__fsbx__=window.__fsbx__||{}:p.$fsbx=p.$fsbx||{};d||(p.require=require);var h=v.p=v.p||{},g=v.e=v.e||{},m=function(){function r(){}return r.global=function(e,r){return void 0===r?p[e]:void(p[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){g[e]=g[e]||[],g[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=h[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=h.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(h[e])return n(h[e].s);var t=h[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r}();return m.packages=h,m.isBrowser=d,m.isServer=!d,m.plugins=[],d||(p.FuseBox=m),e.FuseBox=m}(this))