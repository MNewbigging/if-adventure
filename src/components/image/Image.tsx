import './image.scss';

import React from 'react';

interface ImageProps {
  src: string;
}

export const Image: React.FC<ImageProps> = ({ src }) => {
  return <div className='image' style={{ backgroundImage: `url(${src})` }}></div>;
};
