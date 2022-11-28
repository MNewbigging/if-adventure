import './page-2.scss';

import React from 'react';

import { Fader } from '../../../fader/Fader';
import { Page } from '../../../Page';
import { Text } from '../../../text/Text';
import { WaterMeter } from '../../../water-meter/WaterMeter';
import { sharedPageState } from '../../../SharedPageState';
import { sleep } from '../../../utils/sleep';

export class Page2 extends Page {
  render(): JSX.Element {
    return (
      <div className='page-2'>
        <Fader fadeIn={true} fadeOut={false} />
        <WaterMeter />

        <Text content='[show wanted poster]' />
        <Text content='(the tumors are new)' />
        <Text content='The sun must have gotten to him. You risk a glance at it, peeking through your shades from under your hat. It glares back with blinding ferocity, dazzling in its apocalyptic beauty. It beats down on the wastes, evaporating rivers and wilting plains, shriveling plants and irradiating man and beast alike.' />
        <Text content='Little survives the burning wastes.' />

        <button onClick={() => this.giveDrink()}>Give him a drink</button>
      </div>
    );
  }

  async giveDrink() {
    // Lose a unit of water
    sharedPageState.drink();
    // Wait a bit
    await sleep(1500);
    // Next page
  }
}
