import React from "react";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import GameBoard from "../GameBoard/GameBoard";
import { Container, UniversalStyle } from "./style";
import Footer from "../Footer/Footer";
import ScoreBoard from "../ScoreBoard/ScoreBoard";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [bestScoreHistory, setBestScoreHistory] = useState([0]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState(false);

  useEffect(() => {
    setBestScore(getBestScore());
    setCurrentScore(0);
  }, [bestScoreHistory]);

  function updateScore(card) {
    setSelectedCards([...selectedCards, card]);
    checkForDuplicates(card);
    const status = checkForGameWinner();
    if (status === true) {
      endGame();
    }
  }

  function checkForDuplicates(card) {
    //iterate through selectedCars array
    const newArray = selectedCards.filter((select) => {
      return select === card;
    });
    //if theres a duplicate
    if (newArray.length > 0) {
      setBestScoreHistory([...bestScoreHistory, currentScore]);
    } else {
      setCurrentScore(currentScore + 1);
    }
  }

  function getBestScore() {
    const highestScore = Math.max(...bestScoreHistory);
    return highestScore;
  }

  function checkForGameWinner() {
    let gameWon;
    currentScore === 9 ? (gameWon = true) : (gameWon = false);
    return gameWon;
  }

  function startNewGame() {
    console.log(disabledCards);
    setCurrentScore(0);
    setBestScore(0);
    setDisabledCards(false);
    setSelectedCards([]);
    setBestScoreHistory([0]);
  }

  function endGame() {
    setDisabledCards(true);
    setBestScore(currentScore);
    setCurrentScore(0);
  }

  return (
    <Container>
      <UniversalStyle />
      <Header currentScore={currentScore} bestScore={bestScore} />
      <ScoreBoard
        currentScore={currentScore}
        bestScore={bestScore}
        startNewGame={startNewGame}
      />
      <GameBoard updateScore={updateScore} disabledCards={disabledCards} />
      <Footer />
    </Container>
  );
}

export default App;
