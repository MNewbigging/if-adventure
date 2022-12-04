import './choice-button.scss';

import React from 'react';

interface ChoiceButtonProps {
  content: string;
  onClick: () => void;
}

export const ChoiceButton: React.FC<ChoiceButtonProps> = ({ content, onClick }) => {
  return (
    <div className='choice-button' onClick={() => onClick()}>
      {content}
    </div>
  );
};
