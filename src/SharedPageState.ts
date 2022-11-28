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
    if (this.water < 0) {
      this.water = 0;
    }
  }
}

export const sharedPageState = new SharedPageState();
