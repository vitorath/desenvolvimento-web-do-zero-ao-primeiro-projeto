import CardElement from "./CardElement";

function GameBoard(props) {
  return (
    <div id="game-board">
      {props.cards.map((card, index) => (
        <CardElement onHandleFlip={props.onHandleFlip} key={index} card={card}/>
      ))}
    </div>
  )
}

export default GameBoard;