import { useEffect, useState } from 'react';

import GameOver from './components/GameOver';
import GameBoard from './components/GameBoard';

import game from './game/game';

function MemoryGame(params) {

  const [gameOver, setGameOver] = useState(false);
  const [cards, setCards] = useState([]);

  function onRestart() {
    game.clearCards();
    setGameOver(false);
    setCards(game.createCardsFromTechs());
  }

  function gameOverCallback() {
    setGameOver(true);
  }

  function noMatchedCallback() {
    setCards([...game.cards]);
  }

  function onHandleFlip(card) {
    game.flipCard(card.id, gameOverCallback, noMatchedCallback);

    setCards([...game.cards])
  }

  useEffect(() => {
    setCards(game.createCardsFromTechs());
  }, [])

  return (
    <div>
      <GameBoard cards={cards} onHandleFlip={onHandleFlip}/>
      <GameOver show={gameOver} onRestart={onRestart}/>
    </div>
  );
}

export default MemoryGame;