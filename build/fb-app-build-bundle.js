var build = () => {

    const fb = require("fuse-box");
    const FuseBox = fb.FuseBox;

    const bundle = FuseBox.init({
        homeDir: "./src",
        outFile: "./dist/fb-app-bundle.js",
        sourceMap: {
            bundleReference: "./fb-app-bundle.js.map",
            outFile: "./dist/fb-app-bundle.js.map",
        },
        shim: {
            jquery: {
                source: "node_modules/jquery/dist/jquery.js",
                exports: "$"
            }
        },
        plugins: [
            fb.CSSPlugin(),
            fb.HTMLPlugin({ useDefault: true }),
            fb.TypeScriptHelpers(),
            fb.SourceMapPlainJsPlugin()
        ]
    });

    bundle.devServer(`
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
        + aurelia-templating-router`,
        { root: './', port: 7775 });
}

build();
