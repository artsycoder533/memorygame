import React from "react";
import { StyledCard } from "./style";
import { Image } from "./style";

function Card({ src, title, updateScore, randomizeImages, disabledCards }) {

  function handleCardClick(e) {
    const card = e.currentTarget.title;
    randomizeImages();
    updateScore(card);
  }

  return (
    <>
      {disabledCards === false ? (
        <StyledCard onClick={handleCardClick} title={title}>
          <Image src={src} alt={title} />
        </StyledCard>
      ) : (
          <StyledCard title={title} hideCursor>
          <Image src={src} alt={title} />
        </StyledCard>
      )}
    </>
  );
}

export default Card;
