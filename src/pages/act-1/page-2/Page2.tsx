import './page-2.scss';

import React from 'react';
import theWastes from '/assets/the-wastes.png';

import { ChoiceButton } from '../../../components/choice-button/ChoiceButton';
import { Fader } from '../../../components/fader/Fader';
import { Image } from '../../../components/image/Image';
import { Page } from '../../Page';
import { Page3 } from '../page-3/Page3';
import { Text } from '../../../components/text/Text';
import { eventListener } from '../../../events/EventListener';

export class Page2 extends Page {
  render(): JSX.Element {
    return (
      <div className='page-2'>
        <Fader fadeIn={true} fadeOut={this.exit} fadeInTime={1} onFadeOutEnd={this.onExit} />

        <div className='wastes-image'>
          <Image src={theWastes} />
        </div>

        <div className='text-area'>
          <Text content='With a grunt, you kneel down to get a closer look at the deserter.' />
          <Text
            content={`Returning him will be easier with him dead, but you know Madden won't be pleased. A pang of dread starts to work its way through your gut.`}
          />
          <Text
            content={`Screw Madden. This guy deserved it. It would have happened sooner if he hadn't ran off like this anyway. The words were hollow, though, and you knew it. `}
          />
          <Text
            content={`As you rifle through pockets looking for worthwhile scrounge, the figure's chest expands slightly as he draws a feeble breath.`}
          />
          <Text
            content={`"Well now, looks like you're still hanging on after all" you chuckle, feeling relief and regret in equal measure.`}
          />
          <Text
            content={`You look down on him, savouring the moment. His eyes were closed, face mostly turned away from the sun and skin a sickly pallid hue. He was close - all you'd have to do is wait...`}
          />
          <Text
            content={`You rummage through your pack, revealing a beaten canteen. There was nothing for it - as much as you'd like to sit here and watch him crisp in the sun, you knew you had no choice.`}
          />

          <ChoiceButton content='Give the deserter water' onClick={this.startExit} />
        </div>
      </div>
    );
  }

  private onExit = () => {
    eventListener.fire('to-page', new Page3());
  };
}
