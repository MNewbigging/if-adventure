import './page-1.scss';

import React from 'react';
import theWastes from '/assets/the-wastes.png';

import { Fader } from '../../../components/fader/Fader';
import { Image } from '../../../components/image/Image';
import { Page } from '../../Page';

export class Page1 extends Page {
  render(): JSX.Element {
    return (
      <div className='page-1'>
        <Fader fadeIn={true} fadeOut={this.exit} fadeInTime={1} />

        <div className='wastes-image'>
          <Image src={theWastes} />
        </div>

        <div className='text-area'></div>
      </div>
    );
  }
}
