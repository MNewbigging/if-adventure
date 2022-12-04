import { action, makeObservable, observable } from 'mobx';

export abstract class Page {
  exit = false;

  constructor() {
    makeObservable(this, {
      exit: observable,
      startExit: action,
    });
  }

  abstract render(): JSX.Element;

  startExit = () => {
    this.exit = true;
  };
}
