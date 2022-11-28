import { action, makeObservable, observable } from 'mobx';

import { Page } from './Page';
import { StartPage } from './pages/start/StartPage';
import { eventListener } from './events/EventListener';

export class AppState {
  currentPage: Page;

  constructor() {
    eventListener.on('to-page', this.toPage);

    this.currentPage = new StartPage();

    makeObservable(this, {
      currentPage: observable,
      toPage: action,
    });
  }

  toPage = (page: Page) => {
    this.currentPage = page;
  };
}
