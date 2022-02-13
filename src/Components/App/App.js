import React from "react";
import Header from "../Header/Header";
import { useState } from "react";
import GameBoard from "../GameBoard/GameBoard";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <Header />
      <GameBoard />
    </div>
  );
}

export default App;
