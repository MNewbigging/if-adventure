import './intro-page.scss';

import React from 'react';
import { makeObservable, observable } from 'mobx';

import { Fader } from '../../fader/Fader';
import { Page } from '../../Page';
import { WaterMeter } from '../../water-meter/WaterMeter';
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
        <WaterMeter />

        <h1>Intro</h1>

        <button onClick={() => sharedPageState.drink()}>Thirsty?</button>
      </div>
    );
  }
}
