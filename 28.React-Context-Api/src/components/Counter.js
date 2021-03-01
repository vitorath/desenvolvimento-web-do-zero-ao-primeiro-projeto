import { useContext } from 'react';
import { CounterContext } from '../CounterContext';

function Counter(props) {
  
  const [count, setCount] = useContext(CounterContext);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  )
}

export default Counter;