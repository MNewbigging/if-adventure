import './fader.scss';

import React from 'react';
import { observer } from 'mobx-react-lite';

export interface FaderProps {
  // This means the fader fades out, revealing what's behind it!
  fadeOut: boolean;
  // This means the fader fades in, hiding what's behind it!
  fadeIn: boolean;

  onFadeOutEnd?: () => void;
}

export const Fader: React.FC<FaderProps> = observer(({ fadeOut, fadeIn, onFadeOutEnd }) => {
  const fadeInClass = fadeIn ? 'fadeIn' : '';
  const fadeOutClass = fadeOut ? 'fadeOut' : '';
  const classes = ['fader', fadeInClass, fadeOutClass];

  console.log('classes', classes);

  return <div className={classes.join(' ')} onAnimationEnd={() => onFadeOutEnd?.()}></div>;
});
