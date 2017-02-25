/**
 * Comment out if you dont want Promise polifill
 * You will need this for IE11 and Edge Promise is really slow
 */
import * as PromiseBlueBird from 'bluebird';
PromiseBlueBird.config({ warnings: false, longStackTraces: false });
if (!window.Promise) { // there is prb a better way of doing this.. shimming?
  window.Promise = PromiseBlueBird;
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
window.FUSEBOX_AURELIA_LOADER_LOGGING=true
import 'fuse-box-aurelia-loader';


// start aurelia bootstrapper
import 'aurelia-bootstrapper';


// import Aurelia (for typescript typings only)
import {Aurelia} from 'aurelia-framework';


// aurelia configuration
export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.start().then(() => aurelia.setRoot());
}
