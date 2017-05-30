// builtin plugins
const {
    RawPlugin,
    FuseBox,
    HTMLPlugin,
    CSSPlugin,
    Sparky,
    EnvPlugin
} = require("fuse-box");

const BASE_PATH = '../';



/*
 * task for copying the fonts needed to styles folder
 */
Sparky.task('copy-fonts', () => {
    return Sparky.src('**/*.*', {
            base: BASE_PATH + 'node_modules/materialize-css/dist/fonts/'
        })
        .clean(BASE_PATH + 'styles/materialize-css/fonts/')
        .dest(BASE_PATH + 'styles/materialize-css/fonts');
});


/*
 * task for copying the css needed to styles folder
 */
Sparky.task('copy-css', () => {
    return Sparky.src('*.*', {
            base: BASE_PATH + 'node_modules/materialize-css/dist/css/'
        })
        .clean(BASE_PATH + 'styles/materialize-css/css/')
        .dest(BASE_PATH + 'styles/materialize-css/css');
});


/*
 * task bundling
 *
 */
let run = (production) => {

    // path
    let path = 'dist'; // todo own dev path, but need to figure out how to deal with index

    // env plugin vars
    let env = {
        FB_AU_LOG: production ? false : true,
        FB_AU_RELOAD: production ? false : true,
        devMode: production ? false : true
    }


    // typechecker (minor bug first time when caching vendor bundle, its on my todo list(vegar)... just need to talk to fusebox team..)
    const TypeCheckPlugin = require('fuse-box-typechecker').TypeCheckPlugin;
    const fuse = FuseBox.init({
        homeDir: BASE_PATH + 'src',
        output: BASE_PATH + path + '/$name.js',
        plugins: [
            TypeCheckPlugin({
                quit: production
            }),
            CSSPlugin(),
            EnvPlugin(env),
            HTMLPlugin(),
            RawPlugin(['.css', '.woff'])
        ]
    });


    // Register the bridge and its contents.
    fuse.register('aurelia-materialize-bridge', {
        homeDir: BASE_PATH + 'node_modules/aurelia-materialize-bridge/dist/commonjs',
        main: 'index.js',
        instructions: '**/*.{html,css,js}'
    });


    // vendor bundle, all libs that really dont change
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
        .alias({
            'jQuery': 'jquery'
        })
        .shim({
            jquery: {
                source: BASE_PATH + 'node_modules/jquery/dist/jquery.js',
                exports: '$'
            },
            'materialize-css': {
                source: BASE_PATH + 'node_modules/materialize-css/dist/js/materialize.js',
                exports: 'Materialize'
            }
        });


    // app bundle
    if (!production) {

        // if not production we want the hmr and watch activated
        fuse.bundle('app')
            .watch().cache(false).hmr()
            .instructions(`
            > [main.ts]
            + [**/*.{ts,html,css}]
        `);

        // we also want http dev server
        fuse.dev({
            root: BASE_PATH
        });

    } else {

        // production run, no watch or dev server
        fuse.bundle('app')
            .instructions(`
            > [main.ts]
            + [**/*.{ts,html,css}]
        `);

    }
    fuse.run();

};


Sparky.task("dev", ["copy-fonts", "copy-css"], () => {
    run(false)
});


Sparky.task("prod", ["copy-fonts", "copy-css"], () => {
    run(true)
});