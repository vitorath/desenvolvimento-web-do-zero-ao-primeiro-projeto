import { FaTrashAlt } from 'react-icons/fa/'
import { IoCheckmarkDoneCircle, IoCheckmarkDoneOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

import { deleteItem, changeDone } from '../actions/listActions';
 
import Card from './Card';

function DoneImg(props) {
  if (props.done) {
    return <IoCheckmarkDoneCircle size={24} />;
  } else {
    return <IoCheckmarkDoneOutline size={24} />
  }
}

function ListItem(props) {

  const dispatch = useDispatch();

  return (
    <li>
      <Card className={props.item.done ? 'done item' : 'item'}>
        {props.item.text}
        
        <div>
          <button onClick={() => dispatch(changeDone(props.item.id))}>
            <DoneImg done={props.item.done}/>
          </button>

          <button onClick={() => dispatch(deleteItem(props.item))}>
            <FaTrashAlt size={24} />
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ListItem;