import { useEffect, useState } from 'react';

function CounterHooks(props) {

  const [count, setCount] = useState(props.count);

  function add() {
    setCount(count + 1);
  }

  useEffect(() => {
    const previewsCount = parseInt(localStorage.getItem('count'));
    if (previewsCount)  {
      setCount(previewsCount);
    }


    return () => {
      console.log('WillUnmount');
    }
  }, [])

  useEffect(() => {
    document.title = count;
    localStorage.setItem('count', count);
  }, [count])

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={add}>Add</button>
      </div>
  );
}

export default CounterHooks;