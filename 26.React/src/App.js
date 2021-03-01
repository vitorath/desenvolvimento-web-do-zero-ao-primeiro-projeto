import Header from './Header';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

import './App.css';
import { useEffect, useState } from 'react';

let time = 0;

function App() {

  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      time += 1;
  
      if (time > 5) {
        clearInterval(timer);
        setShow(false);
      }
    }, 5000);
  }, [])

  if (show) {
    return (
      <>
        <Header name="ProgBr" links={['Sobre', 'Comprar', 'Contato']}/>
        <Counter count={5}></Counter>
        <CounterHooks count={5}></CounterHooks>
      </>
    );
  } else {
    return (
      <div>
        Sem contador
      </div>
    )
  }

} 

export default App;
