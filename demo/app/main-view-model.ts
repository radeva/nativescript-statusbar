import {Observable} from 'data/observable';
import {Statusbar} from 'nativescript-statusbar';

export class HelloWorldModel extends Observable {
  public message: string;
  private statusbar: Statusbar;

  constructor() {
    super();

    this.statusbar = new Statusbar();
    this.message = this.statusbar.message;
  }
}