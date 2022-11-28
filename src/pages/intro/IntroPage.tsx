import './intro-page.scss';

import React from 'react';
import { makeObservable, observable } from 'mobx';

import { Fader } from '../../fader/Fader';
import { Page } from '../../Page';

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
        <Fader fadeOut={true} fadeIn={this.fade} />
        <h1>Intro</h1>
      </div>
    );
  }
}
