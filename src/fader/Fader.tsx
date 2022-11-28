import './fader.scss';

import React from 'react';
import { observer } from 'mobx-react-lite';

export interface FaderProps {
  // This means the fader appears, so the content behind it fades out
  fadeOut: boolean;
  // This means the fader disappears, so the content behind it fades in
  fadeIn: boolean;
  onFadeOutEnd?: () => void;
  onFadeInEnd?: () => void;
  fadeOutTime?: number;
  fadeInTime?: number;
}

/**
 * While this is an observer, the only thing expected to change is the fadeOut value.
 * FadeIn will take effect as soon as this is rendered.
 */
export const Fader: React.FC<FaderProps> = observer(
  ({ fadeOut, fadeIn, onFadeOutEnd, onFadeInEnd, fadeOutTime, fadeInTime }) => {
    // Since fadeOut happens last, if that is true then fadeIn is in the past!
    const fadeInClass = fadeIn ? 'fadeIn' : '';
    const fadeOutClass = fadeOut ? 'fadeOut' : '';
    const classes = ['fader', fadeInClass, fadeOutClass];

    // Work out which animation duraction to use
    let duration = 0.15;
    if (fadeOut && fadeOutTime) {
      duration = fadeOutTime;
    } else if (fadeIn && fadeInTime) {
      duration = fadeInTime;
    }

    return (
      <div
        className={classes.join(' ')}
        style={{ animationDuration: `${duration}s` }}
        onAnimationEnd={() => {
          // Which fade animation just ended?
          if (fadeOut) {
            onFadeOutEnd?.();
            return;
          }
          if (fadeIn) {
            onFadeInEnd?.();
            return;
          }
        }}
      ></div>
    );
  }
);
