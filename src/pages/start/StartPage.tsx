import './start-page.scss';

import React from 'react';

import { IntroPage } from '../intro/IntroPage';
import { Page } from '../../Page';
import { eventListener } from '../../events/EventListener';
import { sharedPageState } from '../../SharedPageState';

export class StartPage extends Page {
  render(): JSX.Element {
    return (
      <div className='start-page'>
        <h1>IF Adventure</h1>
        <br />
        <div>Count: {sharedPageState.count}</div>
        <button onClick={() => this.start()}>Start</button>
      </div>
    );
  }

  start() {
    // Start the fade animation
    sharedPageState.increaseCount();
    // Move to the first page
    //eventListener.fire('to-page', new IntroPage());
  }
}
