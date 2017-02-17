// comment out if you don't want a Promise polyfill
import * as PromiseBluebird from 'bluebird';
PromiseBluebird.config({ warnings: false });

import 'whatwg-fetch';

if(!window.Promise){
  window.Promise = PromiseBluebird;
}

import {Aurelia} from 'aurelia-framework';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';
import 'bootstrap';

import 'fuse-box-aurelia-loader';
import 'aurelia-bootstrapper';

import { initialize } from 'aurelia-pal-browser';

initialize();

declare var FuseBox: any;

export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin('aurelia-animator-css');
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')

  await aurelia.start();
  await aurelia.setRoot('app');

  // if you would like your website to work offline (Service Worker), 
  // install and enable the @easy-webpack/config-offline package in webpack.config.js and uncomment the following code:
  /*
  const offline = await System.import('offline-plugin/runtime');
  offline.install();
  */
}