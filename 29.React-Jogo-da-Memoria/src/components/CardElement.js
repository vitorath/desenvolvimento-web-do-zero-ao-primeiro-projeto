function CardElement(props) {
  return (
    <div 
      id={props.card.id} 
      className={`card ${props.card.flipped ? 'flip': ''}`}
      onClick={() => props.onHandleFlip(props.card)}
    >
      <div className="card-front">
        <img className="icon" src={`assets/images/${props.card.icon}.png`} alt={props.card.icon}/>
      </div>
      <div className="card-back">
        {"</>"}
      </div>
    </div>
  )
}

export default CardElement;