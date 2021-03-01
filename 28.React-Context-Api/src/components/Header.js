import { useContext } from 'react';
import { CounterContext } from '../CounterContext';

function Header(props) {

  const [count] = useContext(CounterContext);

  return (
    <div className="header">
      <h3>Contador</h3>
      <div>{count}</div>
    </div>
  );
}

export default Header;