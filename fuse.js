
// builtin plugins
const {
    RawPlugin,
    FuseBox,
    HTMLPlugin,
    CSSPlugin
} = require("fuse-box");

// typechecker (minor bug first time when caching vendor bundle)
const TypeCheckPlugin = require('fuse-box-typechecker').TypeCheckPlugin

const fuse = FuseBox.init({
    homeDir: './src',
    output: './dist/$name.js',
    plugins: [
        TypeCheckPlugin(),
        CSSPlugin(),
        HTMLPlugin(),
        RawPlugin(['.css'])
    ],
    alias: {
        'jQuery': 'jquery',
    },
    shim: {
        jquery: {
            source: 'node_modules/jquery/dist/jquery.js',
            exports: '$'
        },
        // Materialize needs a shim here to be placed at the top of the bundle.
        // It's necessary because loading the module introduces side-effects
        // and it exports globals.
        'materialize-css': {
            source: 'node_modules/materialize-css/bin/materialize.js',
            exports: 'Materialize'
        }
    }
});



// Because we created a shim above, we need to bundle Materialize's CSS
// with a different name. Otherwise fuse-box will not bundle the CSS.
// So we trick fuse-box to load a css-only module by giving meaningless (space) instructions.
fuse.register('materialize-css-styles', {
    homeDir: 'node_modules/materialize-css',
    main: 'bin/materialize.css',
    instructions: ' '
});


// Register the bridge and its contents.
fuse.register('aurelia-materialize-bridge', {
    homeDir: 'node_modules/aurelia-materialize-bridge/dist/commonjs',
    main: 'index.js',
    instructions: '**/*.{html,css,js}'
});


fuse.bundle("vendor")
    .cache(true)
    .instructions(` 
    + aurelia-bootstrapper
    + fuse-box-aurelia-loader
    + aurelia-framework
    + aurelia-pal
    + aurelia-metadata
    + aurelia-loader-default
    + aurelia-polyfills
    + aurelia-fetch-client
    + aurelia-pal-browser
    + aurelia-animator-css
    + aurelia-logging-console 
    + aurelia-templating-binding 
    + aurelia-templating-resources 
    + aurelia-event-aggregator 
    + aurelia-history-browser 
    + aurelia-templating-router
    + aurelia-materialize-bridge
    + materialize-css-styles`)
    .shim({}) //dontwant jquery/meterilize here here too..
    

// app bundle
// todo, we need to have vendor bundle and app bundle...
fuse.bundle('app')
    .watch().cache(false)
    .instructions(`
   > [main.ts]
   + **/*.{ts,html,css}
 `)



fuse.dev({
    port: 4445,
    root: './'
});
fuse.run();