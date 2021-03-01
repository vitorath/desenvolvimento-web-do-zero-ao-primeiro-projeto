import { useSelector } from 'react-redux';

function Header(props) {

  const count = useSelector((state) => state.counter);

  return (
    <div className="header">
      <h3>Contador</h3>
      <div>{count}</div>
    </div>
  );
}

export default Header;