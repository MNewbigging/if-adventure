import './start-page.scss';

import React from 'react';

import { Fader } from '../../components/fader/Fader';
import { IntroPage } from '../act-1/intro/IntroPage';
import { Page } from '../Page';
import { Page1 } from '../act-1/page-1/Page1';
import { eventListener } from '../../events/EventListener';

export class StartPage extends Page {
  render(): JSX.Element {
    return (
      <div className='page start-page'>
        <Fader
          fadeIn={true}
          fadeOut={this.exit}
          onFadeOutEnd={this.onFadeEnd}
          //fadeInTime={2}
          //fadeOutTime={2}
        />

        <h1 className='title'>Tumorific Title</h1>

        <button onClick={() => this.startExit()}>Start</button>
      </div>
    );
  }

  onFadeEnd = () => {
    // Can now exit this page and move to the next
    eventListener.fire('to-page', new Page1());
  };
}
