import './page-2.scss';

import React from 'react';

import { Fader } from '../../../components/fader/Fader';
import { Page } from '../../Page';
import { Page3 } from '../page-3/Page3';
import { Text } from '../../../components/text/Text';
import { WaterMeter } from '../../../components/water-meter/WaterMeter';
import { eventListener } from '../../../events/EventListener';
import { sharedPageState } from '../../../SharedPageState';
import { sleep } from '../../../utils/sleep';

export class Page2 extends Page {
  render(): JSX.Element {
    return (
      <div className='page'>
        <Fader fadeIn={true} fadeOut={this.exit} onFadeOutEnd={this.onFadeEnd} />
        <WaterMeter />

        <Text content='[show wanted poster]' />
        <Text content='(the tumors are new)' />
        <Text content='The sun must have gotten to him. You risk a glance at it, peeking through your shades from under your hat. It glares back with blinding ferocity, dazzling in its apocalyptic beauty. It beats down on the wastes, evaporating rivers and wilting plains, shriveling plants and irradiating man and beast alike.' />
        <Text content='Little survives the burning wastes.' />

        <button onClick={() => this.giveDrink()}>Give the Deserter water</button>
      </div>
    );
  }

  async giveDrink() {
    // Lose a unit of water
    sharedPageState.drink();
    // Wait a bit
    await sleep(1000);
    // Next page
    this.startExit();
  }

  onFadeEnd = () => {
    eventListener.fire('to-page', new Page3());
  };
}
