import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
    public router: Router;

    public configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'welcome'], name: 'welcome', moduleId: './routes/welcome', nav: true, title: 'Welcome' },
            { route: 'about', name: 'about', moduleId: './routes/about', nav: true, title: 'About' },
            { route: 'installation', name: 'installation', moduleId: './routes/installation', nav: true, title: 'installation' }
        ]);

        this.router = router;
    }
}
