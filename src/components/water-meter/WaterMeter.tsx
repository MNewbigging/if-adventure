import './water-meter.scss';

import React from 'react';
import { observer } from 'mobx-react-lite';

import { sharedPageState } from '../../SharedPageState';

export const WaterMeter: React.FC = observer(() => {
  return (
    <div className='water-meter'>
      <div>Water: {sharedPageState.water}</div>
      <button onClick={() => sharedPageState.drink()}>Thirsty?</button>
    </div>
  );
});
