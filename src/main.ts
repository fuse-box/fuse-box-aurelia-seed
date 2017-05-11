(<any>window).FUSEBOX_AURELIA_LOADER_RELOAD = true;

import { Aurelia } from 'aurelia-framework';
import 'fuse-box-aurelia-loader';
import 'aurelia-bootstrapper';

export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use.plugin('aurelia-materialize-bridge', (b: any) => b.useAll().preventWavesAttach());

  // (<any>window).Waves = {};

  await aurelia.start();
  await aurelia.setRoot('app');
}
