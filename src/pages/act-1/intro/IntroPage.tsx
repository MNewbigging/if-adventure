import './intro-page.scss';

import React from 'react';

import { Fader } from '../../../fader/Fader';
import { Page } from '../../../Page';
import { Page2 } from '../page-2/Page2';
import { Text } from '../../../text/Text';
import { WaterMeter } from '../../../water-meter/WaterMeter';
import { eventListener } from '../../../events/EventListener';

export class IntroPage extends Page {
  render(): JSX.Element {
    return (
      <div className='page'>
        <Fader fadeIn={true} fadeOut={this.exit} onFadeOutEnd={this.onFadeEnd} />
        <WaterMeter />

        <Text content='[opening scene, landscape of the wastes]' />
        <Text content='Little survives the burning wastes.' />
        <Text
          content={
            'Through the swelter of the heat haze, across the rust red dirt you see a figure. You trek to the figure and crouch by his limp form to inspect him:\n' +
            'The figure wears a distressed black leather jacket, studded with spikes and torn at the arm. His boots are a bright red and scuffed with years of use. But what captures your attention is the shock of angry red tumors that burst from the side of his head.'
          }
        />

        <Text content='He is no doubt the Deserter.' />

        <button onClick={() => this.startExit()}>Next</button>
      </div>
    );
  }

  onFadeEnd = () => {
    eventListener.fire('to-page', new Page2());
  };
}
