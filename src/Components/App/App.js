import React from "react";
import Header from "../Header/Header";
import { useState } from "react";
import GameBoard from "../GameBoard/GameBoard";
import { Container, UniversalStyle } from "./style";
import Footer from "../Footer/Footer";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <Container>
      <UniversalStyle />
      <Header />
      <GameBoard />
      <Footer />
    </Container>
  );
}

export default App;
