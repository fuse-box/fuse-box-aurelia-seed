import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';


@inject(HttpClient)
export class Users {
  public heading = 'Github Users';
  public users = [];

  constructor(private http: HttpClient) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });
  }

  public async activate() {
    let response = await this.http.fetch('users');
    this.users = await response.json();
    return true;
  }
}
