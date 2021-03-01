import { useDispatch, useSelector } from 'react-redux';

function Counter(props) {
  
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
  )
}

export default Counter;