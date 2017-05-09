import {Router, RouterConfiguration} from 'aurelia-router';

export class ChildRouter {
  public heading = 'Child Router';
  public router: Router;

<<<<<<< HEAD:src/routes/child-router.ts
  public configureRouter(config: RouterConfiguration, router: Router) {
=======
  configureRouter(config: RouterConfiguration, router: Router) {
>>>>>>> 364a3fb40932dbdcb66bebd49e1b1e854c991606:src/routes/child-router.ts
    config.map([
      { route: ['', 'welcome'], name: 'welcome',       moduleId: '/routes/welcome',       nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',         moduleId: '/routes/users',         nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router',  moduleId: '/routes/child-router',  nav: true, title: 'Child Router' }
    ]);

    this.router = router;
  }
}
