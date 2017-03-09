const fb = require("fuse-box");

class FuseBoxBuild {
    constructor() {
        this.packages = `
            > main.ts 
            + **/*.ts                   
            + **/*.html
            + **/*.css
            + aurelia-pal
            + aurelia-pal-browser
            + aurelia-framework 
            + aurelia-logging-console 
            + aurelia-templating-binding 
            + aurelia-templating-resources 
            + aurelia-event-aggregator 
            + aurelia-history-browser 
            + aurelia-templating-router`;

        let FuseBox = fb.FuseBox;
        this.bundle = FuseBox.init({
            homeDir: "./src",
            outFile: "./dist/fb-app-bundle.js",
            cache: true, // cache must be false if sourcemaps.vendor equals true
            log: true,
            debug: false,
            sourcemaps : { vendor : false, project : true},
            shim: {
                jquery: {
                    source: "node_modules/jquery/dist/jquery.js",
                    exports: "$"
                }
            },
            plugins: [
                fb.CSSPlugin(),
                fb.HTMLPlugin({ useDefault: true }),
                fb.TypeScriptHelpers()
            ]
        });
    }

    BuildDev(hmr) {
        let useHmr = hmr || false;
        this.bundle.devServer(
            this.packages,
            { root: './', port: 7775 });
    }

    BuildProd() {
        this.bundle.bundle(
            this.packages,
            { root: './', port: 7775 });
    }
}

module.exports = FuseBoxBuild;
