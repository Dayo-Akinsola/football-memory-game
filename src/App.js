import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CardsSection from './components/CardsSection';
import Score from './components/Score';
import GameOverView from './components/GameOverView';
import allTeams from './getTeamsInfo';

const App = () => {

  const randomSort = (array) => {
    let currIndex = array.length, randomIndex;
 
    while (currIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currIndex);
      --currIndex;
      [array[currIndex], array[randomIndex]] = [array[randomIndex], array[currIndex]];
    }
    
    return array;
  }

  const [modes, setModes] = useState({easy: [false, 8], medium: [true, 14], hard: [false, 20]});
  const [teams, setTeams] = useState(randomSort(allTeams).slice(0, Object.values(modes).filter(mode => mode[0])[0][1]));
  const [scores, setScores] = useState({currentScore: 0, bestScore: 0});
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  
  useEffect(() => {
    setTeams(randomSort(teams));
  }, [teams, scores]);

  const incrementCurrentScore = () => {
    setScores(
      {
        ...scores,
        currentScore: scores.currentScore += 1,
      }
    );
  }
  
  const resetGame = () => {
    const newBestScore = scores.currentScore;
    if (newBestScore > scores.bestScore) {
      setScores(
        {
          currentScore: 0,
          bestScore: newBestScore,
        }
      );
    } else {
      setScores(
        {
          ...scores,
          currentScore: 0,
        }
      )
    }
    setTeams(teams.map((team) => {
      if (team.clicked) {
        team.clicked = false;
      }
      return team;
    }))
    setTeams(randomSort(allTeams).slice(0, Object.values(modes).filter(mode => mode[0])[0][1]));
    setGameOver(false);
    setGameWon(false);
  }

  const changeCardStatus = (card) => {
    if (card.clicked) {
      return false;
    } 

    card.clicked = true;
    return true;  
  }


  const gameWinCheck = () => {
    const clickedTeams = teams.filter(team => team.clicked);
    if (clickedTeams.length === teams.length) {
      setGameWon(true);
    }
  }


  const clickCardHandler = (event, card) => {
    event.preventDefault();
    if (changeCardStatus(card)) {
      incrementCurrentScore();
    } else {
      setGameOver(true);
    }
    gameWinCheck();
  }

  const changeMode = (event) => {
    if (!event.target.classList.contains('active')) {
      if (event.target.classList[0] === 'header__mode--easy') {
        setModes({ easy: [true, 8], medium: [false, 14], hard: [false, 20] });
      } else if (event.target.classList[0] === 'header__mode--medium') {
        setModes({easy: [false, 8], medium: [true, 14], hard: [false, 20]})
      } else {
        setModes({easy: [false, 8], medium: [false, 14], hard: [true, 20]})
      }
    }
  }

  useEffect(() => {
    resetGame();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modes]);

  if (!gameOver && !gameWon) {
    return (
      <>
        <Header modes={modes} changeMode={changeMode} />
        <Score currentScore={scores.currentScore} bestScore={scores.bestScore} />
        <CardsSection teams={teams} clickCardHandler={clickCardHandler}/>
      </>
    )
  }

  return (
    <>
      <Header modes={modes} changeMode={changeMode} />
      <GameOverView score={scores.currentScore} resetGame={resetGame} gameWon={gameWon} />
    </>
  )
}

export default App;
