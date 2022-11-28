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
        <Fader
          fadeIn={true}
          fadeOut={this.fade}
          onFadeOutEnd={this.onFadeEnd}
          fadeInTime={4}
          fadeOutTime={0.15}
        />

        <h1>IF Adventure</h1>
        <br />
        <div>Water: {sharedPageState.water}</div>
        <button onClick={() => sharedPageState.drink()}>Thirsty?</button>
        <button onClick={() => this.start()}>Start</button>
      </div>
    );
  }

  start() {
    sharedPageState.increaseCount();
    this.fade = true;
  }

  onFadeEnd = () => {
    console.log('onFadEEnd');
    eventListener.fire('to-page', new IntroPage());
  };
}
