import './start-page.scss';

import React from 'react';

import { ChoiceButton } from '../../components/choice-button/ChoiceButton';
import { Fader } from '../../components/fader/Fader';
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

        <ChoiceButton content='Start' onClick={this.startExit} />
      </div>
    );
  }

  onFadeEnd = () => {
    // Can now exit this page and move to the next
    eventListener.fire('to-page', new Page1());
  };
}
