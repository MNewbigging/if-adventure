import './start-page.scss';

import React from 'react';
import { action, makeObservable, observable } from 'mobx';

import { Fader } from '../../fader/Fader';
import { IntroPage } from '../intro/IntroPage';
import { Page } from '../../Page';
import { eventListener } from '../../events/EventListener';

export class StartPage extends Page {
  exit = false;

  constructor() {
    super();

    makeObservable(this, {
      start: action,
      exit: observable,
    });
  }

  render(): JSX.Element {
    return (
      <div className='start-page'>
        <Fader fadeIn={true} fadeOut={this.exit} onFadeOutEnd={this.onFadeEnd} fadeInTime={2} />

        <h1 className='title'>IF Adventure</h1>

        <button onClick={() => this.start()}>Start</button>
      </div>
    );
  }

  start() {
    this.exit = true;
  }

  onFadeEnd = () => {
    // Can now exit this page and move to the next
    eventListener.fire('to-page', new IntroPage());
  };
}
