import { Fragment } from "react";

function GameOver(props) {
  return props.show ? (
    <div id="game-over">
      <div>
        Parabéns, você completou o jogo
      </div>
      <button id="restart" onClick={props.onRestart}>
        Jogue novamente
      </button>
    </div>
  ) : <Fragment />;
}

export default GameOver;