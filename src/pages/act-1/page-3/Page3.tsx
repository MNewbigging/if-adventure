import './page-3.scss';

import React from 'react';
import theWastes from '/assets/the-wastes.png';

import { ChoiceButton } from '../../../components/choice-button/ChoiceButton';
import { Fader } from '../../../components/fader/Fader';
import { Image } from '../../../components/image/Image';
import { Page } from '../../Page';
import { Text } from '../../../components/text/Text';

export class Page3 extends Page {
  render(): JSX.Element {
    return (
      <div className='page-3'>
        <Fader fadeIn={true} fadeOut={this.exit} fadeInTime={1} />

        <div className='wastes-image'>
          <Image src={theWastes} />
        </div>

        <div className='text-area'>
          <Text
            content={`You support the man's head, being careful to avoid the rash of tumors on one side, and gently coax him to drink.`}
          />
          <Text
            content={`Still dazed, he doesn't protest when you prop him up onto your horse. You tear a strip of cloth from your shirt and wrap it over the tumors, best to protect any vulnerable places from the sun if you want to keep him alive. If you want your paycheck.`}
          />
          <Text content={`“What… What’re you…?” The Deserter slurs, “Why…?”`} />

          <ChoiceButton content='"You run out of water... or luck?"' onClick={this.onChoice1} />
          <ChoiceButton content='"Madden needs you alive"' onClick={this.onChoice1} />
        </div>
      </div>
    );
  }

  private onChoice1 = () => {
    //
  };
}
