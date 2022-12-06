import './page-1.scss';

import React from 'react';
import theWastes from '/assets/the-wastes.png';

import { ChoiceButton } from '../../../components/choice-button/ChoiceButton';
import { Fader } from '../../../components/fader/Fader';
import { Image } from '../../../components/image/Image';
import { Page } from '../../Page';
import { Page2 } from '../page-2/Page2';
import { Text } from '../../../components/text/Text';
import { eventListener } from '../../../events/EventListener';

export class Page1 extends Page {
  render(): JSX.Element {
    return (
      <div className='page-1'>
        <Fader fadeIn={true} fadeOut={this.exit} fadeInTime={1} onFadeOutEnd={this.onExit} />

        <div className='wastes-image'>
          <Image src={theWastes} />
        </div>

        <div className='text-area'>
          <Text content='Little survives the burning wastes.' />
          <Text content='Through the swelter of the heat haze, across the shining sand you see a prone figure. You trek over and crouch by the limp form to inspect it.' />
          <Text
            content={
              'The figure wears a distressed black leather jacket, studded with spikes and torn at the arm. Boots, bright red and scuffed with years of use lay still in the sand. But what captures your attention is the shock of angry red tumors that burst from the side of the head.'
            }
          />
          <Text content='He is no doubt the Deserter.' />
          <Text content='The tumors are new - the sun must have gotten to him. You risk a glance at it, peeking through your shades from under your hat. It glares back with blinding ferocity, dazzling in its apocalyptic beauty. It beats down on the wastes, evaporating rivers and wilting plains, shriveling plants and irradiating man and beast alike.' />
          <Text content='Little survives the burning wastes.' />
          <Text content='A truism to all those who walk this unforgiving landscape, the deserter seems to have met a likely outcome.' />

          <ChoiceButton content='Have a closer look' onClick={this.startExit} />
        </div>
      </div>
    );
  }

  private readonly onExit = () => {
    eventListener.fire('to-page', new Page2());
  };
}
