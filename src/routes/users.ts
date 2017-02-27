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
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    const response = await this.http.fetch('users');
    this.users = await response.json();
  }
}
