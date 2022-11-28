import './intro-page.scss';

import React from 'react';
import { makeObservable, observable } from 'mobx';

import { Fader } from '../../fader/Fader';
import { Page } from '../../Page';
import { sharedPageState } from '../../SharedPageState';

export class IntroPage extends Page {
  fade = false;

  constructor() {
    super();

    makeObservable(this, {
      fade: observable,
    });
  }

  render(): JSX.Element {
    return (
      <div className='intro-page'>
        <Fader fadeIn={true} fadeOut={this.fade} />
        <h1>Intro</h1>
        <div>Water: {sharedPageState.water}</div>
        <button onClick={() => sharedPageState.drink()}>Thirsty?</button>
      </div>
    );
  }
}
