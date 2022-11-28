import { action, makeObservable, observable, runInAction } from 'mobx';

import { Page } from './Page';
import { StartPage } from './pages/start/StartPage';
import { eventListener } from './events/EventListener';

export class AppState {
  currentPage: Page;

  constructor() {
    eventListener.on('to-page', this.toPage);

    this.toPage(new StartPage());

    makeObservable(this, {
      currentPage: observable,
      toPage: action,
    });
  }

  toPage = (page: Page) => {
    runInAction(() => (this.currentPage = page));
  };
}
