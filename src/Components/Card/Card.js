import React from 'react';
import { StyledCard } from './style';
import { Image } from './style';

function Card({src, title}) {
  return (
      <StyledCard>
          <Image src={src} alt={title} />
    </StyledCard>
  )
}

export default Card
