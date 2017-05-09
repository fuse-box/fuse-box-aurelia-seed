<<<<<<< HEAD
import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';


@inject(HttpClient)
export class Users {
  public heading = 'Github Users';
  public users: any = [];

  constructor(private http: HttpClient) {
    http.configure(config => {
=======
import {lazy} from 'aurelia-framework';
import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

export interface IUser {
  avatar_url: string;
  login: string;
  html_url: string;
}

@autoinject
export class Users {
  heading: string = 'Github Users';
  users: Array<IUser> = [];

  constructor(private http: HttpClient) {    
  }

  async activate(): Promise<void> {
    this.http.configure(config => {
>>>>>>> 364a3fb40932dbdcb66bebd49e1b1e854c991606
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });
<<<<<<< HEAD
  }

  public async activate() {
    let response = await this.http.fetch('users');
    this.users = await response.json();
    return true;
=======

    const response = await this.http.fetch('users');
    this.users = await response.json();
>>>>>>> 364a3fb40932dbdcb66bebd49e1b1e854c991606
  }
}
