import { action, makeObservable, observable } from 'mobx';

class SharedPageState {
  water = 5;
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      increaseCount: action,
      water: observable,
      drink: action,
    });
  }

  increaseCount() {
    this.count++;
  }

  drink() {
    this.water--;
  }
}

export const sharedPageState = new SharedPageState();
