import React from 'react';

import { Fader } from '../../../components/fader/Fader';
import { Page } from '../../Page';
import { Text } from '../../../components/text/Text';
import { WaterMeter } from '../../../components/water-meter/WaterMeter';
import { sharedPageState } from '../../../SharedPageState';
import { sleep } from '../../../utils/sleep';

export class Page3 extends Page {
  render(): JSX.Element {
    return (
      <div className='page'>
        <Fader fadeIn={true} fadeOut={false} />
        <WaterMeter />

        <Text content="You pull out a flask and (supporting the man's tumored head) gently coax the man to drink. He’s still in a daze and doesn’t protest when you prop him up onto your horse. You tear a strip of cloth from your shirt and wrap it over the tumors, best to protect any vulnerable places from the sun if you want to keep him alive. If you want your paycheck." />
        <Text content={`"What... What're you...?" The Deserter slurs. "Why...?"`} />

        <button>"You run out of water or something'?"</button>
        <button>"Madden needs you alive"</button>
      </div>
    );
  }
}
