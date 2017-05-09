//import {computedFrom} from 'aurelia-framework';

export class Welcome {
<<<<<<< HEAD:src/routes/welcome.ts
  public heading = 'Welcome to the "Fuse-Box-Aurelia-Loader" App';
  public firstName = 'Fuse';
  public lastName = 'Box';
  public previousValue: string = this.fullName;
=======
  public heading: string = 'Welcome to the Aurelia Navigation App';
  public firstName: string = 'Fuse';
  public lastName: string = 'Box';
  private previousValue: string = this.fullName;
>>>>>>> 364a3fb40932dbdcb66bebd49e1b1e854c991606:src/routes/welcome.ts

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  //@computedFrom('firstName', 'lastName')
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public submit() {
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  public canDeactivate(): boolean | undefined {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value: string): string {
    return value && value.toUpperCase();
  }
}