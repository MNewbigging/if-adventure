import './text.scss';

import React from 'react';

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
  JUSTIFY = 'justify',
}

export interface TextProps {
  content: string;
  className?: string;
  align?: TextAlign;
}

export const Text: React.FC<TextProps> = ({ content, className, align }) => {
  const classes = ['text', className ?? ''];

  return (
    <p className={classes.join(' ')} style={{ textAlign: `${align ?? TextAlign.CENTER}` }}>
      {content}
    </p>
  );
};
