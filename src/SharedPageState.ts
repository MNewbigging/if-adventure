import { action, makeObservable, observable } from 'mobx';

class SharedPageState {
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      increaseCount: action,
    });
  }

  increaseCount() {
    this.count++;
  }
}

export const sharedPageState = new SharedPageState();
