import React, { useState, useEffect } from "react";
import { Board, Container } from "./style";
import Card from "../Card/Card";
import Img0 from "../../images/0.jpg";
import Img1 from "../../images/1.jpg";
import Img2 from "../../images/2.jpg";
import Img3 from "../../images/3.jpg";
import Img4 from "../../images/4.jpg";
import Img5 from "../../images/5.jpg";
import Img6 from "../../images/6.jpg";
import Img7 from "../../images/7.jpg";
import Img8 from "../../images/8.jpg";

function GameBoard({ updateScore, disabledCards }) {
  const [images, setImages] = useState([
    { title: "image 0", src: Img0 },
    { title: "image 1", src: Img1 },
    { title: "image 2", src: Img2 },
    { title: "image 3", src: Img3 },
    { title: "image 4", src: Img4 },
    { title: "image 5", src: Img5 },
    { title: "image 6", src: Img6 },
    { title: "image 7", src: Img7 },
    { title: "image 8", src: Img8 },
  ]);

  const [selected, setSelected] = useState([]);

  function handleCardClick(e) {
    console.log(e.currentTarget.title);
    randomizeImages();
  }

  function randomizeImages() {
    //shuffle cards
    //Fischer Yates Algorithm
    let arr = [...images];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    setImages(arr);
  }

  return (
    <Container>
      <Board>
        {images.map((image) => {
          return (
            <Card
              src={image.src}
              title={image.title}
              key={image.title}
              updateScore={updateScore}
              randomizeImages={randomizeImages}
              disabledCards={disabledCards}
              role="button"
            />
          );
        })}
      </Board>
    </Container>
  );
}

export default GameBoard;
