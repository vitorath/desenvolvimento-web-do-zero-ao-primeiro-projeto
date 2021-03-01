import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import AuthButton from './AuthButton';

function Nav(props) {

  const login = useSelector(state => state);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const { from } = location.state || { from: { pathname: '/'} };

    if (login) {
      history.replace(from);
    }
  }, [login, history])

  return (
    <nav className="nav">
      <h1>
        ProgBr
      </h1>

      <ul className="nav-links">
        <li><AuthButton /></li>
        <li><Link to="/aulas">Aulas</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;