import './start-page.scss';

import React from 'react';
import { action, makeObservable, observable } from 'mobx';

import { Fader } from '../../fader/Fader';
import { IntroPage } from '../intro/IntroPage';
import { Page } from '../../Page';
import { eventListener } from '../../events/EventListener';
import { sharedPageState } from '../../SharedPageState';

export class StartPage extends Page {
  fade = false;

  constructor() {
    super();

    makeObservable(this, {
      start: action,
      fade: observable,
    });
  }

  render(): JSX.Element {
    return (
      <div className='start-page'>
        <Fader fadeOut={false} fadeIn={this.fade} onFadeOutEnd={this.onFadeEnd} />

        <h1>IF Adventure</h1>
        <br />
        <div>Count: {sharedPageState.count}</div>
        <button onClick={() => this.start()}>Start</button>
      </div>
    );
  }

  start() {
    sharedPageState.increaseCount();
    this.fade = true;
  }

  onFadeEnd = () => {
    eventListener.fire('to-page', new IntroPage());
  };
}
