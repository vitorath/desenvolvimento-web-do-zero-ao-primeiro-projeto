import Card from "./Card";

function Modal(props) {

  function hideModal(event) {
    if (event.target.id === 'modal') {
      props.onHideModal(false);
    }
  }

  return (
    <div id="modal" onClick={hideModal} className={props.show ? 'modal': 'modal hide-modal'}>
      <Card className="card-modal">
        {props.children}
      </Card>
    </div>
  )
}

export default Modal;