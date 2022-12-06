import { action, makeObservable, observable, runInAction } from 'mobx';

import { Page } from './pages/Page';
import { Page2 } from './pages/act-1/page-2/Page2';
import { Page3 } from './pages/act-1/page-3/Page3';
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
