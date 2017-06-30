import { Aurelia } from 'aurelia-framework';

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
