// (<any>window).FUSEBOX_AURELIA_LOADER_RELOAD = true;

import { Aurelia } from 'aurelia-framework';
import 'fuse-box-aurelia-loader';
import 'aurelia-bootstrapper';

declare var FuseBox: any;


export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration();

  // use logging

  if (FuseBox.import('process').env.devMode) {
    aurelia.use.developmentLogging();
  }

  aurelia.use.plugin('aurelia-materialize-bridge', (b: any) => b.useAll().preventWavesAttach());


  await aurelia.start();
  await aurelia.setRoot('app');
}
