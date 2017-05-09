<<<<<<< HEAD
/**
 * Comment out if you dont want Promise polifill
 * You will need this for IE11 and Edge Promise is really slow
 */
import * as PromiseBlueBird from 'bluebird';
PromiseBlueBird.config({ warnings: false, longStackTraces: false });
if (!(<any>window).Promise) { // there is prb a better way of doing this.. shimming?
  (<any>window).Promise = PromiseBlueBird;
}

=======
﻿/**
 * Comment out if you dont want Promise polifill
 * You will need this for IE11 and Edge Promise is really slow on Windows 10 before the Anniversary update
 */
import * as PromiseBluebird from 'bluebird';
PromiseBluebird.config({ warnings: false, longStackTraces: false });
if (!(<any>window).Promise) { // there is prb a better way of doing this.. shimming?
  (<any>window).Promise = PromiseBluebird;
}

/**
 * Comment out if you dont want Fetch polifill
 * You will need this for IE11
 */
import 'whatwg-fetch';

/**
 * Load the fusebox loader
 * This needs to be loaded before aurelia bootstrapper so bootstrapper wil use it
 * To get all debug messages from the loader set the window.FUSEBOX_AURELIA_LOADER_LOGGING to "true"
 * This is mostly for development purposes
 */
(<any>window).FUSEBOX_AURELIA_LOADER_LOGGING = true;
import 'fuse-box-aurelia-loader';

import 'aurelia-bootstrapper';

import {Aurelia} from 'aurelia-framework';
>>>>>>> 364a3fb40932dbdcb66bebd49e1b1e854c991606


<<<<<<< HEAD
/**
 * Comment out if you dont want Fetch polifill
 * You will need this for IE11
 */
import 'whatwg-fetch';



/**
 * Load the fusebox loader
 * This needs to be loaded before aurelia bootstrapper so bootstrapper wil use it
 * To get all debug messages from the loader set the window.FUSEBOX_AURELIA_LOADER_LOGGING to "true"
 * This is mostly for development purposes
 */
(<any>window).FUSEBOX_AURELIA_LOADER_LOGGING = true;
import 'fuse-box-aurelia-loader';


// start aurelia bootstrapper
import 'aurelia-bootstrapper';

=======
declare var FuseBox: any;
>>>>>>> 364a3fb40932dbdcb66bebd49e1b1e854c991606

// import Aurelia (for typescript typings only)
import { Aurelia } from 'aurelia-framework';


// aurelia configuration
export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

<<<<<<< HEAD
  aurelia.start().then(() => aurelia.setRoot());
=======
  // Uncomment the line below to enable animation.
  // aurelia.use.plugin('aurelia-animator-css');
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')

  // set a timeout to let the splash screen show something (mostly in IE 11)
  // this may not be needed for your app
  window.setTimeout(async () => {
    await aurelia.start();
    await aurelia.setRoot('app');  
  }, 50);
>>>>>>> 364a3fb40932dbdcb66bebd49e1b1e854c991606
}
